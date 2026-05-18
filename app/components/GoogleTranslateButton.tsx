"use client";

import { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "@/app/context/TranslationContext";

export function GoogleTranslateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const { language, toggleLanguage, isLoading } = useTranslation();

  useEffect(() => {
    setCurrentLang(language);
  }, [language]);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी (Hindi)" },
  ];

  const handleLanguageChange = (langCode: string) => {
    if (langCode !== language) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 border border-slate-200 text-xs font-medium disabled:opacity-50"
        title="Translate page"
      >
        <Globe className="w-4 h-4 text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors" />
        <span className="text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors hidden sm:inline">
          {isLoading ? "Loading..." : "Translate"}
        </span>
        <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isLoading}
              className={`w-full text-left px-4 py-2 text-sm transition-colors border-b border-slate-100 last:border-b-0 disabled:opacity-50 ${
                currentLang === lang.code
                  ? "bg-red-50 text-[var(--color-canam-red)] font-semibold"
                  : "text-slate-700 hover:bg-slate-100 hover:text-[var(--color-canam-red)]"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
