/**
 * Dynamic Translation Service
 * Loads translations specific to each career/category page
 */

let translationCache: Map<string, Record<string, string>> = new Map();

/**
 * Load translations for a career
 */
export async function loadCareerTranslations(careerSlug: string): Promise<Record<string, string>> {
  const cacheKey = `career-${careerSlug}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    const response = await fetch(`/translations/hi-career-${careerSlug}.json`);
    if (!response.ok) {
      console.warn(`Translation file not found for career: ${careerSlug}`);
      return {};
    }

    const translations = await response.json();
    translationCache.set(cacheKey, translations);
    return translations;
  } catch (error) {
    console.error(`Failed to load career translations for ${careerSlug}:`, error);
    return {};
  }
}

/**
 * Load translations for a category
 */
export async function loadCategoryTranslations(categorySlug: string): Promise<Record<string, string>> {
  const cacheKey = `category-${categorySlug}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    const response = await fetch(`/translations/hi-category-${categorySlug}.json`);
    if (!response.ok) {
      console.warn(`Translation file not found for category: ${categorySlug}`);
      return {};
    }

    const translations = await response.json();
    translationCache.set(cacheKey, translations);
    return translations;
  } catch (error) {
    console.error(`Failed to load category translations for ${categorySlug}:`, error);
    return {};
  }
}

/**
 * Get translation from loaded cache
 */
export function getTranslation(key: string, translations: Record<string, string>): string {
  return translations[key] || key;
}

/**
 * Get multiple translations
 */
export function getTranslations(keys: string[], translations: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};
  keys.forEach(key => {
    result[key] = translations[key] || key;
  });
  return result;
}

/**
 * Clear cache
 */
export function clearCache(): void {
  translationCache.clear();
}

/**
 * Clear specific cache
 */
export function clearCacheForCareer(careerSlug: string): void {
  translationCache.delete(`career-${careerSlug}`);
}

export function clearCacheForCategory(categorySlug: string): void {
  translationCache.delete(`category-${categorySlug}`);
}

/**
 * Get cache size
 */
export function getCacheSize(): number {
  let size = 0;
  translationCache.forEach(translations => {
    size += JSON.stringify(translations).length;
  });
  return size;
}
