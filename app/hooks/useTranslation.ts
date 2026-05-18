'use client';

import { useTranslation as useTranslationContext } from '@/app/context/TranslationContext';

/**
 * Simple translation hook that uses preloaded translations from context
 * Usage: const { t, language } = useTranslation();
 *        t('Hello') -> returns 'Hello' or 'नमस्ते' based on language
 * 
 * Supports: English (en) and Hindi (hi)
 */
export function useTranslation() {
  const context = useTranslationContext();
  const { language, t } = context;

  return { t, language };
}

/**
 * Export translations object for direct access
 */
export const TRANSLATIONS = {
  en: {
    'Home': 'Home',
    'Career Path': 'Career Path',
    'DMIT': 'DMIT',
    'Psychometric test': 'Psychometric test',
    'Resources': 'Resources',
    'Blog': 'Blog',
    'Contact': 'Contact',
    'Book Consultation': 'Book Consultation',
    'Translate': 'Translate',
    'English': 'English',
    'हिंदी (Hindi)': 'हिंदी (Hindi)',
  },
  hi: {} // Will be loaded from split files
};
