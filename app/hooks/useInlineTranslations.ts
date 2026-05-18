'use client';

import { useTranslation as useTranslationContext } from '@/app/context/TranslationContext';

export function useInlineTranslations() {
  const { language } = useTranslationContext();

  const getString = (en: string, hi?: string): string => {
    return language === 'hi' && hi ? hi : en;
  };

  const getArray = (en: string[], hi?: string[]): string[] => {
    return language === 'hi' && hi && hi.length === en.length ? hi : en;
  };

  return {
    language,
    getString,
    getArray,
    isHindi: language === 'hi',
  };
}
