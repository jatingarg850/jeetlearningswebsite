'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  loadCareerTranslations,
  loadCategoryTranslations,
  getTranslation,
  getTranslations
} from '@/app/services/dynamicTranslationService';

/**
 * Hook for career detail pages
 */
export function useCareerTranslation(careerSlug: string) {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    if (!isMounted || language !== 'hi') {
      setIsReady(true);
      return;
    }

    loadCareerTranslations(careerSlug)
      .then(trans => {
        setTranslations(trans);
        setIsReady(true);
      })
      .catch(err => {
        console.error('Failed to load career translations:', err);
        setIsReady(true);
      });
  }, [language, careerSlug, isMounted]);

  /**
   * Translate a key (instant lookup)
   */
  const t = useCallback((key: string): string => {
    if (language === 'en') {
      return key;
    }

    if (language === 'hi' && isReady) {
      return getTranslation(key, translations);
    }

    return key;
  }, [language, isReady, translations]);

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
      return getTranslations(keys, translations);
    }

    return {};
  }, [language, isReady, translations]);

  return {
    t,
    tMultiple,
    language,
    isReady,
    translations
  };
}

/**
 * Hook for category pages
 */
export function useCategoryTranslation(categorySlug: string) {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    if (!isMounted || language !== 'hi') {
      setIsReady(true);
      return;
    }

    loadCategoryTranslations(categorySlug)
      .then(trans => {
        setTranslations(trans);
        setIsReady(true);
      })
      .catch(err => {
        console.error('Failed to load category translations:', err);
        setIsReady(true);
      });
  }, [language, categorySlug, isMounted]);

  /**
   * Translate a key (instant lookup)
   */
  const t = useCallback((key: string): string => {
    if (language === 'en') {
      return key;
    }

    if (language === 'hi' && isReady) {
      return getTranslation(key, translations);
    }

    return key;
  }, [language, isReady, translations]);

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
      return getTranslations(keys, translations);
    }

    return {};
  }, [language, isReady, translations]);

  return {
    t,
    tMultiple,
    language,
    isReady,
    translations
  };
}
