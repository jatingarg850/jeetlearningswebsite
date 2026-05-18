#!/usr/bin/env node

/**
 * Comprehensive script to fix all poorly translated Hindi content
 * - Fixes number translations
 * - Re-translates text content using Ollama (synchronously)
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

// Hindi number translations
const numberTranslations = {
  "0": "शून्य",
  "1": "एक",
  "2": "दो",
  "3": "तीन",
  "4": "चार",
  "5": "पाँच",
  "6": "छः",
  "7": "सात",
  "8": "आठ",
  "9": "नौ",
  "10": "दस",
  "11": "ग्यारह",
  "12": "बारह",
  "13": "तेरह",
  "14": "चौदह",
  "15": "पंद्रह",
  "16": "सोलह",
  "17": "सत्रह",
  "18": "अठारह",
  "19": "उन्नीस",
  "20": "बीस",
  "21": "इक्कीस",
  "22": "बाईस",
  "23": "तेईस",
  "24": "चौबीस",
  "25": "पच्चीस",
  "26": "छब्बीस",
  "27": "सत्ताईस",
  "28": "अट्ठाईस",
  "29": "उन्तीस",
  "30": "तीस",
  "31": "इकतीस",
  "32": "बत्तीस",
  "33": "तैंतीस",
  "34": "चौंतीस",
  "35": "पैंतीस",
  "36": "छत्तीस",
  "37": "सैंतीस",
  "38": "अड़तीस",
  "39": "उनतालीस",
  "40": "चालीस",
  "41": "इकतालीस",
  "42": "बयालीस",
  "43": "तैंतालीस",
  "44": "चौंतालीस",
  "45": "पैंतालीस",
  "46": "छियालीस",
  "47": "सैंतालीस",
  "48": "अड़तालीस",
  "49": "उनचास",
  "50": "पचास",
  "51": "इक्यावन",
  "52": "बावन",
  "53": "तिरपन",
  "54": "चौपन",
  "55": "पचपन",
  "56": "छप्पन",
  "57": "सत्तावन",
  "58": "अट्ठावन",
  "59": "उनसठ",
  "60": "साठ",
  "61": "इकसठ",
  "62": "बासठ",
  "63": "तिरसठ",
  "64": "चौंसठ",
  "65": "पैंसठ",
  "66": "छियासठ",
  "67": "सैंसठ",
  "68": "अड़सठ",
  "69": "उनहत्तर",
  "70": "सत्तर",
  "71": "इकहत्तर",
  "72": "बहत्तर",
  "73": "तिहत्तर",
  "74": "चौहत्तर",
  "75": "पचहत्तर",
  "76": "छिहत्तर",
  "77": "सत्तहत्तर",
  "78": "अठहत्तर",
  "79": "उनासी",
  "80": "अस्सी",
  "81": "इक्यासी",
  "82": "बयासी",
  "83": "तिरासी",
  "84": "चौरासी",
  "85": "पचासी",
  "86": "छियासी",
  "87": "सत्तासी",
  "88": "अट्ठासी",
  "89": "उनानवे",
  "90": "नब्बे",
  "91": "इक्यानवे",
  "92": "बानवे",
  "93": "तिरानवे",
  "94": "चौरानवे",
  "95": "पचानवे",
  "96": "छियानवे",
  "97": "सत्तानवे",
  "98": "अट्ठानवे",
  "99": "निन्यानवे",
  "100": "सौ",
};

/**
 * Check if text is actual content (not just numbers/symbols/CSS)
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

  // Skip CSS classes and IDs
  if (/^[\.\#][a-zA-Z0-9\-_]+$/.test(text)) {
    return false;
  }

  // Skip Tailwind CSS classes (py-, px-, sm:, bg-, etc.)
  if (/^[a-z]+[-:]/.test(text) || /[-:][a-z0-9]+/.test(text)) {
    return false;
  }

  // Skip if contains multiple Tailwind-like patterns
  if ((text.match(/[a-z]+-[a-z0-9]+/g) || []).length > 2) {
    return false;
  }

  // Skip CSS properties and values
  if (/^[a-z\-]+:\s*[a-z0-9\-\(\)\s,#%]+;?$/.test(text)) {
    return false;
  }

  // Skip hex colors
  if (/^#[0-9a-fA-F]{3,6}$/.test(text)) {
    return false;
  }

  // Skip URLs and paths
  if (/^(https?:\/\/|\/|\.\/|\.\.\/|www\.)/.test(text)) {
    return false;
  }

  // Skip code-like content (contains brackets, braces, etc.)
  if (/[{}\[\]<>()]/g.test(text) && text.length < 50) {
    return false;
  }

  // Skip content with too many special characters
  const specialCharCount = (text.match(/[!@#$%^&*()_+=\[\]{};:'",.<>?/\\|`~-]/g) || []).length;
  if (specialCharCount / text.length > 0.2) {
    return false;
  }

  // Skip content that looks like variable names or camelCase
  if (/^[a-z]+([A-Z][a-z]+)+$/.test(text) && text.length < 30) {
    return false;
  }

  // Skip content with mostly uppercase (acronyms, constants)
  const uppercaseCount = (text.match(/[A-Z]/g) || []).length;
  if (uppercaseCount / text.length > 0.6 && text.length < 20) {
    return false;
  }

  // Skip if it looks like a class name or technical identifier
  if (/^[A-Za-z0-9_\-]+$/.test(text) && text.length < 40 && /[A-Z]/.test(text)) {
    return false;
  }

  return true;
}

/**
 * Check if a translation is likely poor
 */
function isPoorTranslation(english, hindi) {
  // Skip technical terms and class names
  const technicalPatterns = [
    /^[a-z]+([A-Z][a-z]+)*$/, // camelCase
    /^[A-Z][a-z]+([A-Z][a-z]+)*$/, // PascalCase
    /^[A-Z_]+$/, // CONSTANT_CASE
    /^[a-z\-]+$/, // kebab-case (single word)
    /^[a-z_]+$/, // snake_case (single word)
  ];

  for (const pattern of technicalPatterns) {
    if (pattern.test(english) && english.length < 30) {
      return false; // Skip technical terms
    }
  }

  // Skip if contains Tailwind patterns
  if (/[a-z]+-[a-z0-9]+/.test(english) || /[a-z]+:[a-z0-9]+/.test(english)) {
    return false;
  }

  // Skip if it's mostly special characters or numbers
  const alphaCount = (english.match(/[a-zA-Z]/g) || []).length;
  if (alphaCount / english.length < 0.5) {
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
async function translateWithOllama(text, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
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

      // Validate translation has Devanagari script
      if (DEVANAGARI_RANGE.test(translation) && translation !== text) {
        return translation;
      }

      // If validation fails, retry
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }

      return null;
    } catch (error) {
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }
      return null;
    }
  }
  return null;
}

/**
 * Main function to fix all translations
 */
async function fixAllTranslations() {
  console.log("🔍 Analyzing translations...\n");

  const fixedTranslations = {};
  let numberFixed = 0;
  let textFixed = 0;
  let textFailed = 0;

  // Step 1: Fix number translations
  console.log("📊 Step 1: Fixing number translations...\n");

  for (const [key, value] of Object.entries(hiTranslations)) {
    if (/^[0-9]+$/.test(key)) {
      if (value === key || /^[0-9]+$/.test(value)) {
        const translation = numberTranslations[key];
        if (translation) {
          fixedTranslations[key] = translation;
          console.log(`   ✅ ${key} → ${translation}`);
          numberFixed++;
        }
      }
    }
  }

  console.log(`\n   Fixed: ${numberFixed} numbers\n`);

  // Step 2: Find poorly translated text content
  console.log("📊 Step 2: Scanning text content...\n");

  const poorTextTranslations = [];
  let totalContent = 0;
  let totalPoor = 0;

  for (const [english, hindi] of Object.entries(hiTranslations)) {
    if (!isActualContent(english)) {
      continue;
    }

    totalContent++;

    if (isPoorTranslation(english, hindi)) {
      totalPoor++;
      poorTextTranslations.push({ english, hindi });
    }
  }

  console.log(`   Total content: ${totalContent}`);
  console.log(`   Poorly translated: ${totalPoor}\n`);

  // Step 3: Re-translate poor text content (synchronously) with batch saves
  if (totalPoor > 0) {
    console.log(`🔄 Step 3: Re-translating ${totalPoor} text entries...\n`);

    const BATCH_SIZE = 50;
    let batchCount = 0;

    for (let i = 0; i < poorTextTranslations.length; i++) {
      const { english, hindi } = poorTextTranslations[i];
      const progress = `[${i + 1}/${totalPoor}]`;

      process.stdout.write(`${progress} 🔄 "${english.substring(0, 40)}..."`);

      // Wait for translation to complete
      const newTranslation = await translateWithOllama(english);

      if (newTranslation) {
        fixedTranslations[english] = newTranslation;
        console.log(` ✅`);
        textFixed++;
      } else {
        console.log(` ❌`);
        textFailed++;
      }

      batchCount++;

      // Save batch every 50 translations
      if (batchCount % BATCH_SIZE === 0) {
        const updatedHi = { ...hiTranslations, ...fixedTranslations };
        fs.writeFileSync(HI_FILE, JSON.stringify(updatedHi, null, 2), "utf-8");
        console.log(`\n   💾 Batch saved (${batchCount}/${totalPoor})\n`);
      }

      // Small delay between requests to avoid overwhelming Ollama
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Step 4: Update file (final save if not already saved)
  console.log(`\n📈 Final Results:`);
  console.log(`   Numbers fixed: ${numberFixed}`);
  console.log(`   Text fixed: ${textFixed}`);
  console.log(`   Text failed: ${textFailed}`);
  console.log(`   Total fixed: ${numberFixed + textFixed}`);

  if (Object.keys(fixedTranslations).length > 0) {
    const updatedHi = { ...hiTranslations, ...fixedTranslations };
    fs.writeFileSync(HI_FILE, JSON.stringify(updatedHi, null, 2), "utf-8");
    console.log(`\n✅ Final save completed for ${HI_FILE}`);

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      numbersFix: {
        fixed: numberFixed,
      },
      textFix: {
        totalContent,
        poorTranslations: totalPoor,
        fixed: textFixed,
        failed: textFailed,
      },
      totalFixed: numberFixed + textFixed,
      fixedTranslations,
    };

    const reportFile = path.join(__dirname, "../translation-fix-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), "utf-8");
    console.log(`📄 Report saved to ${reportFile}`);
  } else {
    console.log(`\n⚠️  No translations were fixed`);
  }
}

// Run the script
console.log("🚀 Comprehensive Translation Fix Script\n");
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
    return fixAllTranslations();
  })
  .catch(error => {
    console.error("❌ Ollama is not running or not accessible");
    console.error("   Start Ollama: ollama serve");
    console.error("   Pull model: ollama pull translategemma:4b");
    process.exit(1);
  });
