"use client";

import { useTranslatedContent, useTranslatedContents } from "@/app/hooks/useTranslatedContent";
import { useTranslation } from "@/app/context/TranslationContext";
import { TranslatedText, TranslatedHeading } from "./TranslatedText";

/**
 * Example component showing different ways to use the translation system
 * You can delete this file after understanding how to use translations
 */
export function TranslationExample() {
  const { language } = useTranslation();

  // Method 1: Using useTranslatedContent hook for single text
  const translatedTitle = useTranslatedContent("Welcome to Our Platform");
  const translatedDescription = useTranslatedContent(
    "Discover amazing career opportunities and guidance"
  );

  // Method 2: Using useTranslatedContents hook for multiple texts
  const translatedContent = useTranslatedContents({
    feature1: "Expert Career Guidance",
    feature2: "Personalized Learning Paths",
    feature3: "Industry Connections",
  });

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
      <div className="max-w-2xl mx-auto">
        {/* Method 1: Using hook directly */}
        <h1 className="text-3xl font-bold mb-4">{translatedTitle}</h1>
        <p className="text-lg text-slate-600 mb-8">{translatedDescription}</p>

        {/* Method 2: Using TranslatedText component */}
        <TranslatedHeading level={2} className="text-2xl font-bold mb-4">
          Why Choose Us
        </TranslatedHeading>

        {/* Method 3: Using TranslatedText as paragraph */}
        <TranslatedText as="p" className="text-slate-700 mb-6">
          Our platform provides comprehensive career guidance and personalized learning experiences.
        </TranslatedText>

        {/* Method 4: Using multiple translated content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(translatedContent).map(([key, value]) => (
            <div
              key={key}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-slate-800">{value}</p>
            </div>
          ))}
        </div>

        {/* Display current language */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-slate-600">
            Current Language: <span className="font-bold">{language === "en" ? "English" : "हिंदी (Hindi)"}</span>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Click the language toggle in the navbar to switch between English and Hindi
          </p>
        </div>
      </div>
    </div>
  );
}
