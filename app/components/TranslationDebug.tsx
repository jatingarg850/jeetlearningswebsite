"use client";

import { useEffect, useState } from "react";

export function TranslationDebug() {
  const [translations, setTranslations] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [enRes, hiRes] = await Promise.all([
          fetch("/api/translations/en"),
          fetch("/api/translations/hi"),
        ]);

        const en = await enRes.json();
        const hi = await hiRes.json();

        setTranslations({ en, hi });
        console.log("Loaded translations:", { en, hi });
      } catch (error) {
        console.error("Error loading translations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, []);

  if (loading) return <div>Loading translations...</div>;

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px", margin: "20px 0" }}>
      <h3>Translation Debug Info</h3>
      <p>English translations: {Object.keys(translations?.en || {}).length}</p>
      <p>Hindi translations: {Object.keys(translations?.hi || {}).length}</p>
      <details>
        <summary>View all translations</summary>
        <pre>{JSON.stringify(translations, null, 2)}</pre>
      </details>
    </div>
  );
}
