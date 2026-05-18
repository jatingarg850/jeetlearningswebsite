import { useTranslation } from "@/app/context/TranslationContext";

export function useTranslatedContent(content: string): string {
  const { t } = useTranslation();
  return t(content);
}

// Hook for translating multiple content items
export function useTranslatedContents(
  contents: Record<string, string>
): Record<string, string> {
  const { t } = useTranslation();
  
  const translated: Record<string, string> = {};
  for (const [key, value] of Object.entries(contents)) {
    translated[key] = t(value);
  }
  return translated;
}

/**
 * Hook to get translation loading state
 * Useful for showing loading indicators while translations are being fetched
 */
export function useTranslationLoading(): boolean {
  const { isLoading } = useTranslation();
  return isLoading;
}
