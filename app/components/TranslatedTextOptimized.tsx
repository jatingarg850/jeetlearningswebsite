"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";
import { memo } from "react";

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Optimized TranslatedText component with memoization
 * Prevents unnecessary re-renders and re-translations
 */
export const TranslatedText = memo(function TranslatedText({
  children,
  className = "",
  as: Component = "span",
}: TranslatedTextProps) {
  const translatedContent = useTranslatedContent(children);

  return (
    <Component className={className}>
      {translatedContent}
    </Component>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if children or className changes
  return (
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className &&
    prevProps.as === nextProps.as
  );
});

TranslatedText.displayName = "TranslatedText";

/**
 * Optimized heading component
 */
export const TranslatedHeading = memo(function TranslatedHeading({
  level = 1,
  children,
  className = "",
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
  className?: string;
}) {
  const Component = `h${level}` as const;
  return (
    <TranslatedText as={Component} className={className}>
      {children}
    </TranslatedText>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className &&
    prevProps.level === nextProps.level
  );
});

TranslatedHeading.displayName = "TranslatedHeading";

/**
 * Optimized option component
 */
export const TranslatedOption = memo(function TranslatedOption({
  value,
  children,
}: {
  value: string;
  children: string;
}) {
  const translatedContent = useTranslatedContent(children);
  return <option value={value}>{translatedContent}</option>;
}, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.children === nextProps.children
  );
});

TranslatedOption.displayName = "TranslatedOption";
