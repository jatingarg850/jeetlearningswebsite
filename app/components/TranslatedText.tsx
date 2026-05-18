"use client";

import { useTranslation } from "@/app/context/TranslationContext";
import { ReactNode } from "react";

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Wrapper component for automatic text translation
 * Uses preloaded translations from context for instant lookup
 * Usage: <TranslatedText>Your text here</TranslatedText>
 */
export function TranslatedText({
  children,
  className = "",
  as: Component = "span",
}: TranslatedTextProps) {
  const { t } = useTranslation();
  const translatedContent = t(children);

  return (
    <Component className={className}>
      {translatedContent}
    </Component>
  );
}

/**
 * Wrapper for translated headings
 */
export function TranslatedHeading({
  level = 1,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
  className?: string;
}) {
  const Component = `h${level}` as const;
  return <TranslatedText as={Component} className={className}>{children}</TranslatedText>;
}

/**
 * Wrapper for translated option elements — avoids invalid <span> inside <option>
 */
export function TranslatedOption({
  value,
  children,
}: {
  value: string;
  children: string;
}) {
  const { t } = useTranslation();
  const translatedContent = t(children);
  return <option value={value}>{translatedContent}</option>;
}
