"use client";

import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { translateBatch } from "@/app/services/translationService";

/**
 * Hook to batch translate multiple strings at once
 * Much more efficient than calling useTranslatedContent for each string
 */
export function useBatchTranslations(
  texts: Record<string, string> | string[]
): Record<string, string> | string[] {
  const [translations, setTranslations] = useState<Record<string, string> | string[]>(texts);
  const { language } = useTranslation();

  // Convert to object format for easier processing
  const textsObj = useMemo(() => {
    if (Array.isArray(texts)) {
      return Object.fromEntries(texts.map((t, i) => [i.toString(), t]));
    }
    return texts;
  }, [texts]);

  useEffect(() => {
    if (language === "en") {
      setTranslations(texts);
      return;
    }

    const translate = async () => {
      try {
        const keys = Object.keys(textsObj);
        const values = keys.map(k => textsObj[k]);

        // Batch translate all at once
        const translatedValues = await translateBatch(values, language);

        const result = Object.fromEntries(
          keys.map((k, i) => [k, translatedValues[i]])
        );

        // Convert back to array if input was array
        if (Array.isArray(texts)) {
          setTranslations(Object.values(result));
        } else {
          setTranslations(result);
        }
      } catch (error) {
        console.warn("Batch translation error:", error);
        setTranslations(texts);
      }
    };

    translate();
  }, [language, textsObj, texts]);

  return translations;
}

/**
 * Hook to memoize and batch translate content sections
 * Useful for large pages with many text items
 */
export function useMemoizedTranslations(
  content: any[],
  extractText: (item: any) => string[]
): Map<string, string> {
  const [translationMap, setTranslationMap] = useState<Map<string, string>>(
    new Map()
  );
  const { language } = useTranslation();

  useEffect(() => {
    if (language === "en") {
      setTranslationMap(new Map());
      return;
    }

    const translate = async () => {
      try {
        // Extract all unique texts
        const textsSet = new Set<string>();
        content.forEach(item => {
          extractText(item).forEach(text => textsSet.add(text));
        });

        const texts = Array.from(textsSet);
        if (texts.length === 0) return;

        // Batch translate
        const translated = await translateBatch(texts, language);

        // Create map
        const map = new Map<string, string>();
        texts.forEach((text, i) => {
          map.set(text, translated[i]);
        });

        setTranslationMap(map);
      } catch (error) {
        console.warn("Memoized translation error:", error);
      }
    };

    translate();
  }, [language, content, extractText]);

  return translationMap;
}
