/**
 * Lazy Translation Service
 * Loads translations only for the current page/route
 * Significantly reduces initial bundle size and load time
 */

interface PageTranslationIndex {
  language: string;
  pages: string[];
  totalKeys: number;
  createdAt: string;
  pageStats: Record<string, number>;
}

let translationCache: Map<string, Record<string, string>> = new Map();
let indexCache: Map<string, PageTranslationIndex> = new Map();

/**
 * Load translation index for a language
 */
async function loadIndex(lang: string): Promise<PageTranslationIndex> {
  if (indexCache.has(lang)) {
    return indexCache.get(lang)!;
  }

  try {
    const response = await fetch(`/data/translations/pages/${lang}-index.json`);
    if (!response.ok) {
      throw new Error(`Failed to load index: ${response.status}`);
    }
    const index = await response.json() as PageTranslationIndex;
    indexCache.set(lang, index);
    return index;
  } catch (error) {
    console.error(`Failed to load translation index for ${lang}:`, error);
    return {
      language: lang,
      pages: [],
      totalKeys: 0,
      createdAt: new Date().toISOString(),
      pageStats: {}
    };
  }
}

/**
 * Load translations for a specific page
 */
async function loadPageTranslations(
  lang: string,
  page: string
): Promise<Record<string, string>> {
  const cacheKey = `${lang}-${page}`;

  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    const response = await fetch(`/data/translations/pages/${lang}-${page}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load page translations: ${response.status}`);
    }
    const translations = await response.json() as Record<string, string>;
    translationCache.set(cacheKey, translations);
    return translations;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}-${page}:`, error);
    return {};
  }
}

/**
 * Get translation for a key on a specific page
 */
export async function getPageTranslation(
  key: string,
  lang: string,
  page: string
): Promise<string | null> {
  const translations = await loadPageTranslations(lang, page);
  return translations[key] || null;
}

/**
 * Get multiple translations for a page
 */
export async function getPageTranslations(
  keys: string[],
  lang: string,
  page: string
): Promise<Record<string, string>> {
  const translations = await loadPageTranslations(lang, page);
  const result: Record<string, string> = {};

  keys.forEach(key => {
    if (translations[key]) {
      result[key] = translations[key];
    }
  });

  return result;
}

/**
 * Preload translations for multiple pages
 */
export async function preloadPageTranslations(
  lang: string,
  pages: string[]
): Promise<void> {
  const promises = pages.map(page => loadPageTranslations(lang, page));
  await Promise.all(promises);
  console.log(`✅ Preloaded ${pages.length} page translations for ${lang}`);
}

/**
 * Get all available pages for a language
 */
export async function getAvailablePages(lang: string): Promise<string[]> {
  const index = await loadIndex(lang);
  return index.pages;
}

/**
 * Get statistics about loaded translations
 */
export async function getTranslationStats(lang: string): Promise<{
  totalPages: number;
  loadedPages: number;
  totalKeys: number;
  cachedSize: number;
}> {
  const index = await loadIndex(lang);
  const loadedPages = Array.from(translationCache.keys()).filter(key =>
    key.startsWith(`${lang}-`)
  ).length;

  let cachedSize = 0;
  translationCache.forEach(translations => {
    cachedSize += JSON.stringify(translations).length;
  });

  return {
    totalPages: index.pages.length,
    loadedPages,
    totalKeys: index.totalKeys,
    cachedSize
  };
}

/**
 * Clear translation cache
 */
export function clearTranslationCache(): void {
  translationCache.clear();
  console.log('✅ Translation cache cleared');
}

/**
 * Clear cache for a specific page
 */
export function clearPageCache(lang: string, page: string): void {
  const cacheKey = `${lang}-${page}`;
  translationCache.delete(cacheKey);
}
