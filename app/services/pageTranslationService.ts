/**
 * Page-based Translation Service
 * Loads only translations for current page - instant lookup
 */

interface PageTranslationIndex {
  language: string;
  pages: string[];
  totalKeys: number;
  createdAt: string;
  pageStats: Record<string, number>;
}

let pageTranslations: Record<string, string> = {};
let currentPage: string = '';
let isLoading = false;

/**
 * Load translations for a specific page
 */
export async function loadPageTranslations(page: string): Promise<Record<string, string>> {
  // Return cached if same page
  if (currentPage === page && Object.keys(pageTranslations).length > 0) {
    return pageTranslations;
  }

  if (isLoading) {
    return pageTranslations;
  }

  isLoading = true;

  try {
    const response = await fetch(`/translations/hi-${page}.json`);
    if (!response.ok) {
      console.warn(`Translation file not found for page: ${page}`);
      return {};
    }

    pageTranslations = await response.json();
    currentPage = page;
    return pageTranslations;
  } catch (error) {
    console.error(`Failed to load translations for page ${page}:`, error);
    return {};
  } finally {
    isLoading = false;
  }
}

/**
 * Get translation for a key (instant lookup)
 */
export function getTranslation(key: string): string | null {
  return pageTranslations[key] || null;
}

/**
 * Get multiple translations
 */
export function getTranslations(keys: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  keys.forEach(key => {
    if (pageTranslations[key]) {
      result[key] = pageTranslations[key];
    }
  });
  return result;
}

/**
 * Clear cache
 */
export function clearCache(): void {
  pageTranslations = {};
  currentPage = '';
}

/**
 * Get current page
 */
export function getCurrentPage(): string {
  return currentPage;
}

/**
 * Get cache size
 */
export function getCacheSize(): number {
  return JSON.stringify(pageTranslations).length;
}
