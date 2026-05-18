'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTranslation as useTranslationContext } from '@/app/context/TranslationContext';
import { usePathname } from 'next/navigation';
import {
  getPageTranslations,
  preloadPageTranslations,
  clearPageCache,
} from '@/app/services/lazyTranslationService';

/**
 * Determine which page/route the user is on
 */
function getPageFromPathname(pathname: string): string {
  // Remove leading slash and get first segment
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return 'home';
  
  const firstSegment = segments[0];
  
  // Map routes to page names
  const routeMap: Record<string, string> = {
    'blog': 'blog',
    'contact': 'contact',
    'resources': 'resources',
    'career-path': 'career-path',
    'dmit': 'dmit',
    'psychometric': 'psychometric',
    'admin': 'global', // Admin uses global translations
    'disclaimer': 'global',
    'privacy-policy': 'global',
    'terms-and-conditions': 'global',
  };

  // Check if it's a category or career page
  if (routeMap[firstSegment]) {
    return routeMap[firstSegment];
  }

  // If it's a dynamic route (category/career), load both category and career-detail
  if (segments.length >= 1 && !routeMap[firstSegment]) {
    return segments.length === 1 ? 'category' : 'career-detail';
  }

  return 'global';
}

interface UseLazyTranslationOptions {
  preloadPages?: string[];
  autoPreload?: boolean;
}

/**
 * Lazy translation hook that loads translations only for the current page
 * Usage: const { t, language, isLoading } = useLazyTranslation();
 */
export function useLazyTranslation(options: UseLazyTranslationOptions = {}) {
  const { preloadPages = [], autoPreload = true } = options;
  const context = useTranslationContext();
  const pathname = usePathname();
  const { language } = context;

  const [pageTranslations, setPageTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentPage = getPageFromPathname(pathname);

  // Load translations for current page
  useEffect(() => {
    if (language !== 'hi') {
      // English doesn't need lazy loading
      setPageTranslations({});
      return;
    }

    const loadTranslations = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Always load global translations
        const pagesToLoad = ['global', currentPage];
        
        // Add preload pages if specified
        if (preloadPages.length > 0 && autoPreload) {
          pagesToLoad.push(...preloadPages);
        }

        // Remove duplicates
        const uniquePages = Array.from(new Set(pagesToLoad));

        // Load all translations in parallel
        const translationPromises = uniquePages.map(page =>
          getPageTranslations([], language, page)
        );

        const results = await Promise.all(translationPromises);
        
        // Merge all translations
        const merged: Record<string, string> = {};
        results.forEach(result => {
          Object.assign(merged, result);
        });

        setPageTranslations(merged);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load translations';
        setError(errorMessage);
        console.error('Translation loading error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language, currentPage, preloadPages, autoPreload]);

  // Preload additional pages
  useEffect(() => {
    if (language === 'hi' && preloadPages.length > 0 && autoPreload) {
      preloadPageTranslations(language, preloadPages).catch(err => {
        console.warn('Failed to preload pages:', err);
      });
    }
  }, [language, preloadPages, autoPreload]);

  /**
   * Translate a string to the current language
   */
  const t = useCallback((key: string): string => {
    // If English, return as-is
    if (language === 'en') {
      return key;
    }

    // If Hindi, check loaded translations
    if (language === 'hi') {
      return pageTranslations[key] || key;
    }

    // Fallback to English
    return key;
  }, [language, pageTranslations]);

  /**
   * Clear cache for current page
   */
  const clearCurrentPageCache = useCallback(() => {
    if (language === 'hi') {
      clearPageCache(language, currentPage);
      setPageTranslations({});
    }
  }, [language, currentPage]);

  return {
    t,
    language,
    isLoading,
    error,
    currentPage,
    clearCurrentPageCache,
  };
}

/**
 * Hook to preload translations for specific pages
 */
export function usePreloadTranslations(pages: string[], language: string = 'hi') {
  useEffect(() => {
    preloadPageTranslations(language, pages).catch(err => {
      console.warn('Failed to preload translations:', err);
    });
  }, [pages, language]);
}
