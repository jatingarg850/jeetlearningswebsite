"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    google?: any;
  }
}

export function TranslationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Get saved language
    const savedLang = localStorage.getItem("selectedLanguage");

    if (savedLang && savedLang !== "en") {
      // Wait for Google Translate to be ready
      const applyTranslation = () => {
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (select) {
          select.value = savedLang;
          select.dispatchEvent(new Event("change"));
          console.log("Applied translation on load:", savedLang);
        } else {
          // Retry if not ready
          setTimeout(applyTranslation, 500);
        }
      };

      // Start trying after a short delay
      setTimeout(applyTranslation, 1000);
    }
  }, [pathname]);

  return <>{children}</>;
}
