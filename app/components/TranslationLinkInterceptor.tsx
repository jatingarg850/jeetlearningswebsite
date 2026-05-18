"use client";

import { useEffect } from "react";

export function TranslationLinkInterceptor() {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      // Check if we're currently on a translated page
      const currentUrl = window.location.href;
      const isTranslated = currentUrl.includes("translate.google.com");

      if (isTranslated) {
        e.preventDefault();

        // Extract the language from current URL
        const langMatch = currentUrl.match(/[?&]tl=([^&]+)/);
        const lang = langMatch ? langMatch[1] : "en";

        // Get the base URL (without translate.google.com)
        const uMatch = currentUrl.match(/[?&]u=([^&]+)/);
        if (uMatch) {
          const baseUrl = decodeURIComponent(uMatch[1]);
          const baseDomain = new URL(baseUrl).origin;

          // Build the new URL
          const newPageUrl = new URL(href, baseDomain).href;

          // Redirect to translated version of new page
          const translateUrl = `https://translate.google.com/translate?u=${encodeURIComponent(newPageUrl)}&hl=en&sl=auto&tl=${lang}&client=gtx`;
          window.location.href = translateUrl;
        }
      }
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  return null;
}
