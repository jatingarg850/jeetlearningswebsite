"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

interface TranslationContextType {
  language: "en" | "hi";
  toggleLanguage: () => void;
  isLoading: boolean;
  translations: Record<string, string>;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Global translation cache
let globalTranslations: Record<string, string> = {};
let isLoadingGlobal = false;

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const pathname = usePathname();

  // Load language preference from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem("preferredLanguage") as
      | "en"
      | "hi"
      | null;
    if (savedLanguage && savedLanguage === "hi") {
      setLanguage(savedLanguage);
    }
  }, []);

  // Preload ALL translations when language changes
  useEffect(() => {
    if (!isMounted || language === "en") {
      setTranslations({});
      globalTranslations = {};
      return;
    }

    // If already loading, skip
    if (isLoadingGlobal) {
      return;
    }

    const preloadAllTranslations = async () => {
      setIsLoading(true);
      isLoadingGlobal = true;

      try {
        console.log(`[TranslationContext] Preloading ALL Hindi translations...`);
        
        // Determine which page file to load based on current route
        let pageFile = "home";
        const segments = pathname.split("/").filter(Boolean);
        
        if (segments.length === 0) pageFile = "home";
        else if (segments[0] === "blog") pageFile = "blog";
        else if (segments[0] === "contact") pageFile = "contact";
        else if (segments[0] === "resources") pageFile = "resources";
        else if (segments[0] === "career-path") pageFile = "career-path";
        else if (segments[0] === "dmit") pageFile = "dmit";
        else if (segments[0] === "psychometric") pageFile = "psychometric";
        else if (segments.length >= 2) pageFile = "career-detail";
        else if (segments.length === 1) pageFile = "category";

        // Load the page-specific translation file (which contains ALL keys)
        const response = await fetch(`/translations/hi-${pageFile}.json`);
        if (!response.ok) {
          console.warn(`Translation file not found: hi-${pageFile}.json`);
          setTranslations({});
          globalTranslations = {};
          return;
        }

        const trans = await response.json();
        setTranslations(trans);
        globalTranslations = trans;
        console.log(`[TranslationContext] ✓ Loaded ${Object.keys(trans).length} translation keys`);
      } catch (error) {
        console.error("[TranslationContext] Error preloading translations:", error);
        setTranslations({});
        globalTranslations = {};
      } finally {
        setIsLoading(false);
        isLoadingGlobal = false;
      }
    };

    preloadAllTranslations();
  }, [language, isMounted, pathname]);

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === "en" ? "hi" : "en";
    console.log(`[TranslationContext] Toggling language: ${language} → ${newLanguage}`);
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  }, [language]);

  const t = useCallback((key: string): string => {
    if (language === "en") {
      return key;
    }
    return translations[key] || key;
  }, [language, translations]);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <TranslationContext.Provider
      value={{
        language,
        toggleLanguage,
        isLoading,
        translations,
        t,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
