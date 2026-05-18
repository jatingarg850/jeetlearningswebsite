"use client";

import React from "react";
import { useTranslation } from "@/app/context/TranslationContext";

interface TranslationLoadingBufferProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Component that shows a loading state while translations are being preloaded
 * Only shows loading state when translations are actively being loaded
 */
export function TranslationLoadingBuffer({
  children,
  fallback,
}: TranslationLoadingBufferProps) {
  let isLoading = false;
  let language: "en" | "hi" = "en";

  try {
    const context = useTranslation();
    isLoading = context.isLoading;
    language = context.language;
  } catch (error) {
    // Not in provider context, just show children
    return <>{children}</>;
  }

  // Only show loading state when translations are being loaded in Hindi
  if (isLoading && language === "hi") {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-block">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              सामग्री लोड हो रही है...
            </h2>
            <p className="text-gray-600">
              कृपया प्रतीक्षा करें जबकि हम आपके लिए सामग्री तैयार कर रहे हैं
            </p>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
}

/**
 * Minimal loading indicator component for inline use
 * Shows only when translations are being loaded
 */
export function TranslationLoadingIndicator() {
  let isLoading = false;
  let language: "en" | "hi" = "en";

  try {
    const context = useTranslation();
    isLoading = context.isLoading;
    language = context.language;
  } catch (error) {
    // Not in provider context, don't show anything
    return null;
  }

  // Only show when translations are being loaded in Hindi
  if (!isLoading || language === "en") {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 animate-pulse z-50"></div>
  );
}

/**
 * Skeleton loader component for content sections
 */
export function TranslationSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
    </div>
  );
}
