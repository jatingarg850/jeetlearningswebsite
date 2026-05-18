// Translation storage -  loads from JSON files in codebase
interface TranslationStore {
  [key: string]: string;
}

let translationCache: {
  en: TranslationStore;
  hi: TranslationStore;
} = {
  en: {},
  hi: {},
};

let loadingPromises: {
  en: Promise<void> | null;
  hi: Promise<void> | null;
} = {
  en: null,
  hi: null,
};

let isLoaded: {
  en: boolean;
  hi: boolean;
} = {
  en: false,
  hi: false,
};

// Load translations from JSON files
async function loadTranslations(language: "en" | "hi" = "hi"): Promise<void> {
  // If already loaded, return immediately
  if (isLoaded[language]) return;

  // If currently loading, wait for the promise
  if (loadingPromises[language]) {
    return loadingPromises[language];
  }

  // Create a new loading promise
  const loadPromise = (async () => {
    try {
      console.log(`Starting to load ${language} translations...`);
      
      if (language === "hi") {
        const { default: hiData } = await import("@/app/data/translations/hi.json");
        translationCache.hi = hiData;
        console.log(`✓ Hindi translations loaded: ${Object.keys(hiData).length} entries`);
      } else {
        const { default: enData } = await import("@/app/data/translations/en.json");
        translationCache.en = enData;
        console.log(`✓ English translations loaded: ${Object.keys(enData).length} entries`);
      }

      isLoaded[language] = true;
    } catch (error) {
      console.error(`Error loading ${language} translations from JSON:`, error);
      
      // Fallback to API
      try {
        const endpoint = language === "hi" ? "/api/translations/hi" : "/api/translations/en";
        const response = await fetch(endpoint);

        if (response.ok) {
          const data = await response.json();
          translationCache[language] = data;
          isLoaded[language] = true;
          console.log(`✓ ${language} translations loaded from API: ${Object.keys(data).length} entries`);
        }
      } catch (fallbackError) {
        console.error(`Error loading ${language} translations from API:`, fallbackError);
      }
    } finally {
      loadingPromises[language] = null;
    }
  })();

  loadingPromises[language] = loadPromise;
  return loadPromise;
}

// Get translation from loaded store
async function getStoredTranslation(
  text: string,
  language: "en" | "hi"
): Promise<string | null> {
  await loadTranslations(language);

  // Direct lookup -  exact match
  if (translationCache[language][text]) {
    return translationCache[language][text];
  }

  return null;
}

// Save translation to codebase (API endpoint)
async function saveTranslationToCodebase(
  text: string,
  translation: string,
  language: "en" | "hi"
): Promise<void> {
  try {
    const response = await fetch("/api/translations/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        translation,
        language,
      }),
    });

    if (response.ok) {
      // Update local cache
      translationCache[language][text] = translation;
      console.log(`Saved translation for "${text}":`, translation);
    }
  } catch (error) {
    console.error("Error saving translation to codebase:", error);
  }
}

// Translate text using Ollama locally
async function translateWithOllama(text: string): Promise<string> {
  try {
    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "translategemma:4b",
          prompt: `Translate this text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
          stream: false,
          temperature: 0.1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    const translation = data.response?.trim() || text;

    return translation;
  } catch (error) {
    console.warn("Ollama translation error -  returning English text:", error);
    // Return English text if Ollama is not available
    return text;
  }
}

// Main translation function with codebase storage
export async function translateText(
  text: string,
  language: "en" | "hi" = "hi"
): Promise<string> {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // If English, return as-is
  if (language === "en") {
    return text;
  }

  // Check if translation exists in codebase
  const stored = await getStoredTranslation(text, language);
  if (stored) {
    return stored;
  }

  // If not found, translate using Ollama locally
  const translation = await translateWithOllama(text);
  return translation;
}

// Batch translate multiple texts
export async function translateBatch(
  texts: string[],
  language: "en" | "hi" = "hi"
): Promise<string[]> {
  if (language === "en") {
    return texts;
  }

  // Ensure translations are loaded first
  await loadTranslations(language);

  // Translate all texts in parallel, but with caching
  const results = await Promise.all(
    texts.map(text => translateText(text, language))
  );

  return results;
}

// Get all translations for a language
export async function getAllTranslations(
  language: "en" | "hi"
): Promise<TranslationStore> {
  await loadTranslations(language);
  return translationCache[language];
}

// Preload translations for a language (used for route preloading)
export async function preloadTranslations(language: "en" | "hi"): Promise<void> {
  console.log(`Preloading ${language} translations...`);
  await loadTranslations(language);
  console.log(`✓ Preload complete for ${language}`);
}

// Add translation directly to codebase
export async function addTranslation(
  text: string,
  translation: string,
  language: "en" | "hi"
): Promise<void> {
  await saveTranslationToCodebase(text, translation, language);
}
