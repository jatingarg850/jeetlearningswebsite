#!/usr/bin/env node

import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const TRANSLATIONS_DIR = path.join(__dirname, "../app/data/translations");
const APP_DIR = path.join(__dirname, "../app");

// Load existing translations
function loadExistingTranslations() {
  const hiPath = path.join(TRANSLATIONS_DIR, "hi.json");
  const enPath = path.join(TRANSLATIONS_DIR, "en.json");

  let hiTranslations = {};
  let enTranslations = {};

  if (fs.existsSync(hiPath)) {
    hiTranslations = JSON.parse(fs.readFileSync(hiPath, "utf-8"));
  }

  if (fs.existsSync(enPath)) {
    enTranslations = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  }

  return { hiTranslations, enTranslations };
}

// Check if text is actual UI content (not code)
function isActualUIText(text) {
  // Skip empty or very short text
  if (!text || text.length < 2) return false;
  
  // Skip if it's just CSS classes or code patterns
  const cssClassPatterns = [
    /^[a-z0-9\-\s]+$/, // Only lowercase, numbers, hyphens, spaces (CSS classes)
    /^flex/, /^grid/, /^text-/, /^bg-/, /^border-/, /^p-/, /^m-/, /^w-/, /^h-/, /^max-/, /^min-/, /^rounded-/, /^shadow-/, /^opacity-/, /^z-/, /^absolute/, /^relative/, /^fixed/, /^sticky/, /^block/, /^inline/, /^hidden/, /^visible/, /^overflow-/, /^transform/, /^transition/, /^duration-/, /^ease-/, /^animate-/, /^hover:/, /^focus:/, /^active:/, /^disabled:/, /^group-/, /^peer-/, /^first:/, /^last:/, /^odd:/, /^even:/, /^before:/, /^after:/, /^placeholder:/, /^selection:/, /^dark:/, /^sm:/, /^md:/, /^lg:/, /^xl:/, /^2xl:/, /^3xl:/, /^4xl:/, /^5xl:/, /^6xl:/, /^7xl:/, /^8xl:/, /^9xl:/,
  ];
  
  if (cssClassPatterns.some(p => p.test(text))) {
    return false;
  }
  
  // Skip code-like patterns
  if (text.includes('className=') || text.includes('onClick=') || text.includes('onChange=') || 
      text.includes('value={') || text.includes('placeholder=') || text.includes('=>') ||
      text.includes('&&') || text.includes('||') || text.includes('{') || text.includes('}') ||
      text.includes('[') || text.includes(']') || text.includes('(') || text.includes(')')) {
    return false;
  }
  
  // Skip import/export statements
  if (text.startsWith('import ') || text.startsWith('export ') || text.startsWith('from ') ||
      text.startsWith('const ') || text.startsWith('let ') || text.startsWith('var ') ||
      text.startsWith('function ') || text.startsWith('class ') || text.startsWith('interface ') ||
      text.startsWith('type ') || text.startsWith('enum ')) {
    return false;
  }
  
  // Skip URLs and paths
  if (text.startsWith('http') || text.startsWith('/') || text.startsWith('.') || 
      text.startsWith('@/') || text.includes('://')) {
    return false;
  }
  
  // Skip JSON keys and technical terms
  if (text.includes('next/') || text.includes('@/app/') || text.includes('.json') ||
      text.includes('Error ') || text.includes('Warning ') || text.includes('utf-8') ||
      text.includes('fs/') || text.includes('promises')) {
    return false;
  }
  
  // Must have at least some letters
  const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < 2) {
    return false;
  }
  
  // Should not be all uppercase (likely a constant)
  if (text === text.toUpperCase() && text.length > 3) {
    return false;
  }
  
  // Should not have too many special characters
  const specialCount = (text.match(/[{}[\]()=<>@#$%^&*]/g) || []).length;
  if (specialCount > text.length / 4) {
    return false;
  }
  
  return true;
}

// Extract meaningful text from TSX/TS files
function extractTextFromFile(filePath) {
  const ext = path.extname(filePath).slice(1);
  
  if (ext !== 'tsx' && ext !== 'ts') {
    return [];
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const texts = new Set();

  // Extract JSX text content (text between tags)
  const jsxTextRegex = />([^<{}\n]+)</g;
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    let text = match[1].trim();
    if (isActualUIText(text)) {
      texts.add(text);
    }
  }

  // Extract string literals
  const stringRegex = /["'`]([^"'`\n]{2,}?)["'`]/g;
  while ((match = stringRegex.exec(content)) !== null) {
    let text = match[1].trim();
    if (isActualUIText(text)) {
      texts.add(text);
    }
  }

  // Extract placeholder and title attributes
  const attrRegex = /(placeholder|title|alt|aria-label)=["']([^"']+)["']/g;
  while ((match = attrRegex.exec(content)) !== null) {
    let text = match[2].trim();
    if (isActualUIText(text)) {
      texts.add(text);
    }
  }

  return Array.from(texts);
}

// Recursively get all files from a directory
function getAllFiles(dir, ext = [".tsx", ".ts"]) {
  const files = [];

  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      // Skip node_modules, .next, etc.
      if (
        item.startsWith(".") ||
        item === "node_modules" ||
        item === ".next" ||
        item === "dist"
      ) {
        continue;
      }

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (ext.some((e) => fullPath.endsWith(e))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

// Translate text using Ollama locally
async function translateText(text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: "translategemma:4b",
      prompt: `Translate this text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
      stream: false,
      temperature: 0.1,
    });

    const options = {
      hostname: "localhost",
      port: 11434,
      path: "/api/generate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const req = http.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseData);
          const translation = parsed.response?.trim() || text;
          resolve(translation);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

// Main function
async function main() {
  console.log("🚀 Starting text extraction and translation...\n");

  // Load existing translations
  const { hiTranslations, enTranslations } = loadExistingTranslations();
  console.log(
    `📦 Loaded ${Object.keys(hiTranslations).length} existing Hindi translations\n`
  );

  // Get all files
  const files = getAllFiles(APP_DIR);
  console.log(`📄 Found ${files.length} files to process\n`);

  // Extract all texts
  const allTexts = new Set();

  for (const file of files) {
    const texts = extractTextFromFile(file);
    for (const text of texts) {
      allTexts.add(text);
    }
  }

  console.log(`📝 Extracted ${allTexts.size} unique UI texts\n`);

  // Filter out already translated texts
  const textsToTranslate = Array.from(allTexts).filter(
    (text) => !hiTranslations[text]
  );

  console.log(
    `🔄 Need to translate ${textsToTranslate.length} new texts\n`
  );

  if (textsToTranslate.length === 0) {
    console.log("✅ All texts are already translated!");
    return;
  }

  // Translate texts in batches of 50
  console.log("🌐 Translating texts using OpenHorizon API (in batches of 50)...\n");

  let translated = 0;
  let failed = 0;
  const BATCH_SIZE = 50;

  // Process in batches
  for (let batchStart = 0; batchStart < textsToTranslate.length; batchStart += BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + BATCH_SIZE, textsToTranslate.length);
    const batch = textsToTranslate.slice(batchStart, batchEnd);

    console.log(`\n📦 Processing batch ${Math.floor(batchStart / BATCH_SIZE) + 1} (${batchStart + 1}-${batchEnd}/${textsToTranslate.length})...\n`);

    for (let i = 0; i < batch.length; i++) {
      const text = batch[i];
      const globalIndex = batchStart + i;

      try {
        const translation = await translateText(text);

        hiTranslations[text] = translation;
        enTranslations[text] = text;

        translated++;

        // Show progress for each item
        console.log(`  ✓ [${globalIndex + 1}/${textsToTranslate.length}] "${text.substring(0, 40)}${text.length > 40 ? '...' : ''}" → "${translation.substring(0, 40)}${translation.length > 40 ? '...' : ''}"`);

        // Add delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`  ✗ [${globalIndex + 1}/${textsToTranslate.length}] Failed to translate: "${text.substring(0, 40)}${text.length > 40 ? '...' : ''}"`);
        console.error(`    Error: ${error.message}`);
        failed++;
      }
    }

    // Save after each batch
    console.log(`\n💾 Saving batch ${Math.floor(batchStart / BATCH_SIZE) + 1}...\n`);

    if (!fs.existsSync(TRANSLATIONS_DIR)) {
      fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });
    }

    fs.writeFileSync(
      path.join(TRANSLATIONS_DIR, "hi.json"),
      JSON.stringify(hiTranslations, null, 2)
    );

    fs.writeFileSync(
      path.join(TRANSLATIONS_DIR, "en.json"),
      JSON.stringify(enTranslations, null, 2)
    );

    console.log(`✅ Batch ${Math.floor(batchStart / BATCH_SIZE) + 1} saved!\n`);
  }

  console.log(`\n✅ Translation complete!`);
  console.log(`   Translated: ${translated}`);
  console.log(`   Failed: ${failed}\n`);

  console.log(`📊 Final statistics:`);
  console.log(`   Total Hindi translations: ${Object.keys(hiTranslations).length}`);
  console.log(`   Total English translations: ${Object.keys(enTranslations).length}\n`);

  console.log("🎉 Done!");
}

// Run the script
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
