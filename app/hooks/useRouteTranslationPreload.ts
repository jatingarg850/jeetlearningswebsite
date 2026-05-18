"use client";

import { useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { usePathname } from "next/navigation";

/**
 * Hook to preload translations for the current route
 * Automatically preloads Hindi translations when the route changes
 * and the user has Hindi selected as their language
 */
export function useRouteTranslationPreload() {
  const { language, isLoading } = useTranslation();
  const pathname = usePathname();

  // Translations are automatically preloaded by the context
  // This hook is kept for backward compatibility

  return { isLoading };
}
