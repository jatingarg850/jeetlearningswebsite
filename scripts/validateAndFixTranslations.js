#!/usr/bin/env node

/**
 * Advanced script to validate and fix Hindi translations
 * - Detects poor translations using multiple heuristics
 * - Re-translates using Ollama's translategemma:4b
 * - Validates quality of new translations
 * - Provides detailed reports
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
 * Analyze translation quality
 */
function analyzeTranslation(english, hindi) {
  const issues = [];
  const score = { total: 100 };

  // Check 1: Is it the same as English?
  if (english === hindi) {
    issues.push("Not translated (same as English)");
    score.total -= 50;
  }

  // Check 2: Does it contain Devanagari script?
  if (!DEVANAGARI_RANGE.test(hindi)) {
    issues.push("No Devanagari script detected");
    score.total -= 40;
  }

  // Check 3: Is it just numbers?
  if (/^[0-9]+$/.test(hindi)) {
    // Numbers are OK
    return { issues: [], score: 100, quality: "good" };
  }

  // Check 4: Length comparison
  const lengthRatio = hindi.length / english.length;
  if (lengthRatio < 0.2 && english.length > 30) {
    issues.push(`Too short (${(lengthRatio * 100).toFixed(0)}% of English)`);
    score.total -= 30;
  }

  // Check 5: Contains mostly English characters
  const englishCharCount = (hindi.match(/[a-zA-Z0-9]/g) || []).length;
  const englishRatio = englishCharCount / hindi.length;
  if (englishRatio > 0.7) {
    issues.push(`Mostly English characters (${(englishRatio * 100).toFixed(0)}%)`);
    score.total -= 35;
  }

  // Check 6: Contains common untranslated patterns
  const untranslatedPatterns = [
    /^[A-Z][a-z]+\s[A-Z][a-z]+$/, // Proper nouns
    /^[a-z]+\s[a-z]+$/, // Lowercase English
    /^[A-Z]+$/, // All caps
  ];

  for (const pattern of untranslatedPatterns) {
    if (pattern.test(hindi)) {
      issues.push("Matches untranslated pattern");
      score.total -= 25;
      break;
    }
  }

  // Determine quality
  let quality = "good";
  if (score.total < 50) quality = "poor";
  else if (score.total < 75) quality = "fair";

  return { issues, score: Math.max(0, score.total), quality };
}

/**
 * Translate text using Ollama
 */
async function translateWithOllama(text, retries = 3) {
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

      // Validate the translation
      const analysis = analyzeTranslation(text, translation);
      if (analysis.quality === "good" || analysis.quality === "fair") {
        return translation;
      }

      // If translation is poor, retry
      if (attempt < retries) {
        console.log(`   ⚠️  Attempt ${attempt} produced poor quality, retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }

      return translation;
    } catch (error) {
      if (attempt < retries) {
        console.log(`   ⚠️  Attempt ${attempt} failed: ${error.message}, retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        console.error(`   ❌ Failed after ${retries} attempts: ${error.message}`);
        return null;
      }
    }
  }
}

/**
 * Main validation and fix function
 */
async function validateAndFix() {
  console.log("📊 Analyzing translations...\n");

  const analysis = {
    good: [],
    fair: [],
    poor: [],
  };

  // Analyze all translations
  for (const [english, hindi] of Object.entries(hiTranslations)) {
    const result = analyzeTranslation(english, hindi);
    analysis[result.quality].push({
      english,
      hindi,
      score: result.score,
      issues: result.issues,
    });
  }

  console.log("📈 Analysis Results:");
  console.log(`   ✅ Good: ${analysis.good.length}`);
  console.log(`   ⚠️  Fair: ${analysis.fair.length}`);
  console.log(`   ❌ Poor: ${analysis.poor.length}`);
  console.log(`   Total: ${Object.values(analysis).reduce((a, b) => a + b.length, 0)}\n`);

  if (analysis.poor.length === 0 && analysis.fair.length === 0) {
    console.log("✅ All translations are good!");
    return;
  }

  // Show sample of poor translations
  console.log("📋 Sample of poor translations:");
  analysis.poor.slice(0, 5).forEach(item => {
    console.log(`   English: "${item.english.substring(0, 50)}"`);
    console.log(`   Hindi: "${item.hindi.substring(0, 50)}"`);
    console.log(`   Issues: ${item.issues.join(", ")}`);
    console.log();
  });

  // Ask for confirmation
  const toFix = analysis.poor.length + analysis.fair.length;
  console.log(`\n🔄 Ready to re-translate ${toFix} entries using Ollama`);
  console.log("   This may take several minutes...\n");

  const fixedTranslations = {};
  let fixed = 0;
  let failed = 0;

  // Fix poor translations first
  const allToFix = [...analysis.poor, ...analysis.fair];

  for (let i = 0; i < allToFix.length; i++) {
    const item = allToFix[i];
    const progress = `[${i + 1}/${allToFix.length}]`;

    // Skip very short entries
    if (item.english.length < 2) {
      continue;
    }

    process.stdout.write(
      `${progress} 🔄 "${item.english.substring(0, 40)}..." `
    );

    const newTranslation = await translateWithOllama(item.english);

    if (newTranslation && newTranslation !== item.english) {
      const newAnalysis = analyzeTranslation(item.english, newTranslation);

      if (newAnalysis.quality !== "poor") {
        fixedTranslations[item.english] = newTranslation;
        console.log(`✅ (Score: ${newAnalysis.score})`);
        fixed++;
      } else {
        console.log(`⚠️  (Poor quality, keeping old)`);
      }
    } else {
      console.log(`❌`);
      failed++;
    }

    // Delay between requests
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log(`\n📊 Fix Results:`);
  console.log(`   Fixed: ${fixed}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Skipped: ${allToFix.length - fixed - failed}`);

  if (fixed > 0) {
    // Update hi.json
    const updatedHi = { ...hiTranslations, ...fixedTranslations };
    fs.writeFileSync(HI_FILE, JSON.stringify(updatedHi, null, 2), "utf-8");
    console.log(`\n✅ Updated ${HI_FILE}`);

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      analysis: {
        good: analysis.good.length,
        fair: analysis.fair.length,
        poor: analysis.poor.length,
      },
      fixes: {
        fixed,
        failed,
        skipped: allToFix.length - fixed - failed,
      },
      fixedTranslations,
      poorTranslations: analysis.poor.map(item => ({
        english: item.english,
        oldHindi: item.hindi,
        newHindi: fixedTranslations[item.english] || item.hindi,
        issues: item.issues,
      })),
    };

    const reportFile = path.join(__dirname, "../translation-validation-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), "utf-8");
    console.log(`📄 Report saved to ${reportFile}`);
  }
}

// Run the script
console.log("🚀 Translation Validation & Fix Script\n");
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
    return validateAndFix();
  })
  .catch(error => {
    console.error("❌ Error: Ollama is not running or not accessible");
    console.error("   Make sure Ollama is running with: ollama serve");
    console.error("   And the model is available: ollama pull translategemma:4b\n");
    console.error("   Installation guide: https://ollama.ai");
    process.exit(1);
  });
