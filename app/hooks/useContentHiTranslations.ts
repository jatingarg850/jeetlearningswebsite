'use client';

import { useEffect, useState, useContext } from 'react';
import { TranslationContext } from '@/app/context/TranslationContext';

/**
 * Hook to extract contentHi from career data and populate translations
 * This avoids loading from hi.json files and uses pre-translated content instead
 * 
 * Usage: useContentHiTranslations(careerData);
 */
export function useContentHiTranslations(careerData: any) {
  const [isMounted, setIsMounted] = useState(false);
  const context = useContext(TranslationContext);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !context || context.language !== 'hi' || !careerData) {
      return;
    }

    const { language, setTranslations } = context;

    // Extract all contentHi, titleHi, descriptionHi from career data
    const extractedTranslations: Record<string, string> = {};

    const extractFromObject = (obj: any, prefix = '') => {
      if (!obj || typeof obj !== 'object') return;

      if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
          extractFromObject(item, `${prefix}[${index}]`);
        });
      } else {
        Object.entries(obj).forEach(([key, value]) => {
          const fullKey = prefix ? `${prefix}.${key}` : key;

          // Extract Hindi content fields
          if (key === 'contentHi' && Array.isArray(value)) {
            value.forEach((content, idx) => {
              if (typeof content === 'string') {
                extractedTranslations[content] = content;
              }
            });
          } else if (key === 'titleHi' && typeof value === 'string') {
            extractedTranslations[value] = value;
          } else if (key === 'descriptionHi' && typeof value === 'string') {
            extractedTranslations[value] = value;
          } else if (typeof value === 'object') {
            extractFromObject(value, fullKey);
          }
        });
      }
    };

    extractFromObject(careerData);

    if (Object.keys(extractedTranslations).length > 0) {
      console.log(`[useContentHiTranslations] Extracted ${Object.keys(extractedTranslations).length} Hindi translations from career data`);
      setTranslations(extractedTranslations);
    }
  }, [isMounted, context, careerData]);
}
