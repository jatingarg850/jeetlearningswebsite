#!/usr/bin/env node

/**
 * Script to detect and fix poorly translated Hindi content
 * Uses Ollama's translategemma:4b model to re-translate
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EN_FILE = path.join(__dirname, "../app/data/translations/en.json");
const HI_FILE = path.join(__dirname, "../app/data/translations/hi.json");
const OLLAMA_API = "http://localhost:11434/api/generate";

// Load translation files
const enTranslations = JSON.parse(fs.readFileSync(EN_FILE, "utf-8"));
const hiTranslations = JSON.parse(fs.readFileSync(HI_FILE, "utf-8"));

// Devanagari script range
const DEVANAGARI_RANGE = /[\u0900-\u097F]/;

/**
 * Check if a translation is likely poor
 */
function isPoorTranslation(english, hindi) {
  // Numbers are always fine - keep as is
  if (/^[0-9]+$/.test(english)) {
    return false;
  }

  // If Hindi is same as English, it's not translated
  if (english === hindi) {
    return true;
  }

  // If Hindi doesn't contain Devanagari script, it's likely poor
  if (!DEVANAGARI_RANGE.test(hindi)) {
    return true;
  }

  // If Hindi is very short compared to English, might be poor
  if (hindi.length < english.length * 0.3 && english.length > 20) {
    return true;
  }

  return false;
}

/**
 * Translate text using Ollama with retry logic
 */
async function translateWithOllama(text, retries = 2) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(OLLAMA_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "translategemma:4b",
          prompt: `Translate this English text to Hindi. Reply ONLY with the Hindi translation, nothing else:\n\n${text}`,
          stream: false,
          temperature: 0.1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const translation = data.response?.trim() || text;

      // Validate translation has Devanagari script
      if (DEVANAGARI_RANGE.test(translation)) {
        return translation;
      }

      // If no Devanagari, retry
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 500));
        continue;
      }

      return translation;
    } catch (error) {
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 500));
        continue;
      }
      return null;
    }
  }
}

/**
 * Main function to fix translations
 */
async function fixTranslations() {
  console.log("🔍 Scanning for poorly translated content...\n");

  const poorTranslations = [];
  const fixedTranslations = {};
  let totalChecked = 0;
  let totalPoor = 0;

  // Find all poorly translated entries
  for (const [english, hindi] of Object.entries(hiTranslations)) {
    totalChecked++;

    if (isPoorTranslation(english, hindi)) {
      totalPoor++;
      poorTranslations.push({ english, hindi });
    }
  }

  console.log(`📊 Results:`);
  console.log(`   Total entries: ${totalChecked}`);
  console.log(`   Poorly translated: ${totalPoor}`);
  console.log(`   Good translations: ${totalChecked - totalPoor}\n`);

  if (totalPoor === 0) {
    console.log("✅ All translations look good!");
    return;
  }

  console.log(`🔄 Re-translating ${totalPoor} entries using Ollama...\n`);

  let fixed = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < poorTranslations.length; i++) {
    const { english, hindi } = poorTranslations[i];
    const progress = `[${i + 1}/${totalPoor}]`;

    // Skip very short entries (less than 3 characters)
    if (english.length < 3) {
      skipped++;
      continue;
    }

    process.stdout.write(`${progress} 🔄 "${english.substring(0, 40)}..."`);

    const newTranslation = await translateWithOllama(english);

    if (newTranslation && newTranslation !== english && DEVANAGARI_RANGE.test(newTranslation)) {
      fixedTranslations[english] = newTranslation;
      console.log(` ✅`);
      fixed++;
    } else {
      console.log(` ❌`);
      failed++;
    }

    // Add delay to avoid overwhelming Ollama
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log(`\n📈 Translation Results:`);
  console.log(`   Fixed: ${fixed}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Skipped: ${skipped}`);

  if (fixed > 0) {
    // Update hi.json with fixed translations
    const updatedHi = { ...hiTranslations, ...fixedTranslations };

    fs.writeFileSync(HI_FILE, JSON.stringify(updatedHi, null, 2), "utf-8");
    console.log(`\n✅ Updated ${HI_FILE} with ${fixed} new translations`);

    // Save a report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecked,
      totalPoor,
      fixed,
      failed,
      skipped,
      fixedTranslations,
    };

    const reportFile = path.join(__dirname, "../translation-fix-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), "utf-8");
    console.log(`📄 Report saved to ${reportFile}`);
  } else {
    console.log(`\n⚠️  No translations were successfully fixed`);
  }
}

// Run the script
console.log("🚀 Translation Fix Script\n");
console.log("Checking Ollama connection...");

fetch(OLLAMA_API, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "translategemma:4b",
    prompt: "test",
    stream: false,
  }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Ollama not responding");
    }
    console.log("✅ Ollama connected\n");
    return fixTranslations();
  })
  .catch(error => {
    console.error("❌ Error: Ollama is not running or not accessible");
    console.error("   Make sure Ollama is running with: ollama serve");
    console.error("   And the model is available: ollama pull translategemma:4b");
    process.exit(1);
  });
