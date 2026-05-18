#!/usr/bin/env node

/**
 * Quick script to fix poorly translated Hindi content
 * Focuses on actual text content, skips numbers
 * Uses Ollama's translategemma:4b model
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
 * Check if text is actual content (not just numbers/symbols)
 */
function isActualContent(text) {
  // Skip if it's just numbers
  if (/^[0-9]+$/.test(text)) {
    return false;
  }

  // Skip if it's very short
  if (text.length < 3) {
    return false;
  }

  // Skip if it's mostly symbols
  if (!/[a-zA-Z]/.test(text)) {
    return false;
  }

  return true;
}

/**
 * Check if a translation is likely poor
 */
function isPoorTranslation(english, hindi) {
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
 * Translate text using Ollama
 */
async function translateWithOllama(text) {
  try {
    const response = await fetch(OLLAMA_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "translategemma:4b",
        prompt: `Translate this English text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
        stream: false,
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const translation = data.response?.trim() || text;

    return translation;
  } catch (error) {
    return null;
  }
}

/**
 * Main function to fix translations
 */
async function fixTranslations() {
  console.log("🔍 Scanning for poorly translated content...\n");

  const poorTranslations = [];
  let totalChecked = 0;
  let totalPoor = 0;

  // Find all poorly translated entries
  for (const [english, hindi] of Object.entries(hiTranslations)) {
    // Only check actual content
    if (!isActualContent(english)) {
      continue;
    }

    totalChecked++;

    if (isPoorTranslation(english, hindi)) {
      totalPoor++;
      poorTranslations.push({ english, hindi });
    }
  }

  console.log(`📊 Analysis Results:`);
  console.log(`   Total content entries: ${totalChecked}`);
  console.log(`   Poorly translated: ${totalPoor}`);
  console.log(`   Good translations: ${totalChecked - totalPoor}\n`);

  if (totalPoor === 0) {
    console.log("✅ All content translations look good!");
    return;
  }

  console.log(`🔄 Re-translating ${totalPoor} entries using Ollama...\n`);

  const fixedTranslations = {};
  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < poorTranslations.length; i++) {
    const { english, hindi } = poorTranslations[i];
    const progress = `[${i + 1}/${totalPoor}]`;

    process.stdout.write(`${progress} 🔄 "${english.substring(0, 45)}..."`);

    const newTranslation = await translateWithOllama(english);

    if (newTranslation && newTranslation !== english && DEVANAGARI_RANGE.test(newTranslation)) {
      fixedTranslations[english] = newTranslation;
      console.log(` ✅`);
      fixed++;
    } else {
      console.log(` ❌`);
      failed++;
    }

    // Delay between requests
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log(`\n📈 Results:`);
  console.log(`   ✅ Fixed: ${fixed}`);
  console.log(`   ❌ Failed: ${failed}`);

  if (fixed > 0) {
    // Update hi.json with fixed translations
    const updatedHi = { ...hiTranslations, ...fixedTranslations };
    fs.writeFileSync(HI_FILE, JSON.stringify(updatedHi, null, 2), "utf-8");
    console.log(`\n✅ Updated ${HI_FILE}`);

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      totalContent: totalChecked,
      poorTranslations: totalPoor,
      fixed,
      failed,
      fixedTranslations,
    };

    const reportFile = path.join(__dirname, "../translation-fix-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), "utf-8");
    console.log(`📄 Report saved to ${reportFile}`);
  }
}

// Run the script
console.log("🚀 Quick Translation Fix Script\n");
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
    console.error("❌ Ollama is not running or not accessible");
    console.error("   Start Ollama: ollama serve");
    console.error("   Pull model: ollama pull translategemma:4b");
    process.exit(1);
  });
