'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
  loadPageTranslations,
  getTranslation,
  getTranslations,
  clearCache
} from '@/app/services/pageTranslationService';

/**
 * Determine page from pathname
 */
function getPageFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) return 'home';
  
  const firstSegment = segments[0];
  
  const routeMap: Record<string, string> = {
    'blog': 'blog',
    'contact': 'contact',
    'resources': 'resources',
    'career-path': 'career-path',
    'dmit': 'dmit',
    'psychometric': 'psychometric',
    'admin': 'admin',
  };

  if (routeMap[firstSegment]) {
    return routeMap[firstSegment];
  }

  // Dynamic routes
  if (segments.length >= 2) {
    return 'career-detail';
  }

  if (segments.length === 1) {
    return 'category';
  }

  return 'home';
}

/**
 * Page-based translation hook
 * Loads only translations for current page
 */
export function usePageTranslation() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize on mount
  useEffect(() => {
    setIsMounted(true);
    // Get language from localStorage on mount
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage') as 'en' | 'hi' | null;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    } catch (err) {
      // localStorage not available
    }
  }, []);

  // Listen for storage changes (when language is changed in another tab/window)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferredLanguage' && e.newValue) {
        setLanguage(e.newValue as 'en' | 'hi');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Load translations when page or language changes
  useEffect(() => {
    if (!isMounted || language !== 'hi') {
      setIsReady(true);
      return;
    }

    const currentPage = getPageFromPathname(pathname);
    setPage(currentPage);

    loadPageTranslations(currentPage)
      .then(() => setIsReady(true))
      .catch(err => {
        console.error('Failed to load page translations:', err);
        setIsReady(true);
      });
  }, [language, pathname, isMounted]);

  /**
   * Translate a key (instant lookup)
   */
  const t = useCallback((key: string): string => {
    if (language === 'en') {
      return key;
    }

    if (language === 'hi' && isReady) {
      return getTranslation(key) || key;
    }

    return key;
  }, [language, isReady]);

  /**
   * Get multiple translations
   */
  const tMultiple = useCallback((keys: string[]): Record<string, string> => {
    if (language === 'en') {
      const result: Record<string, string> = {};
      keys.forEach(key => {
        result[key] = key;
      });
      return result;
    }

    if (language === 'hi' && isReady) {
      return getTranslations(keys);
    }

    return {};
  }, [language, isReady]);

  return {
    t,
    tMultiple,
    language,
    isReady,
    page,
    clearCache
  };
}
