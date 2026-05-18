'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslation as useTranslationContext } from '@/app/context/TranslationContext';
import { getTranslation, getTranslations, preloadAllChunks } from '@/app/services/fastTranslationService';

/**
 * ⚡ Fast translation hook with O(1) lookup
 * Usage: const { t, language } = useFastTranslation();
 */
export function useFastTranslation() {
  const context = useTranslationContext();
  const { language } = context;
  const [isReady, setIsReady] = useState(false);

  // Preload chunks on mount for better performance
  useEffect(() => {
    if (language === 'hi') {
      preloadAllChunks(language)
        .then(() => setIsReady(true))
        .catch(err => {
          console.warn('Preload failed, will load on demand:', err);
          setIsReady(true);
        });
    } else {
      setIsReady(true);
    }
  }, [language]);

  /**
   * ⚡ Translate single key - O(1) lookup
   */
  const t = useCallback((key: string): string => {
    if (language === 'en') {
      return key;
    }
    // Note: This is sync, actual translation happens async
    // For immediate use, use tAsync instead
    return key;
  }, [language]);

  /**
   * 🔄 Async translation - recommended for actual use
   */
  const tAsync = useCallback(async (key: string): Promise<string> => {
    if (language === 'en') {
      return key;
    }
    
    const translation = await getTranslation(key, language);
    return translation || key;
  }, [language]);

  /**
   * 🔄 Batch async translations
   */
  const tBatch = useCallback(async (keys: string[]): Promise<Record<string, string>> => {
    if (language === 'en') {
      const result: Record<string, string> = {};
      keys.forEach(key => {
        result[key] = key;
      });
      return result;
    }

    return getTranslations(keys, language);
  }, [language]);

  return {
    t,
    tAsync,
    tBatch,
    language,
    isReady
  };
}

/**
 * Hook to preload translations for a language
 */
export function usePreloadTranslations(lang: string = 'hi') {
  useEffect(() => {
    preloadAllChunks(lang).catch(err => {
      console.warn('Failed to preload:', err);
    });
  }, [lang]);
}
