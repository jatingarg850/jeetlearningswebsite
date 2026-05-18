#!/usr/bin/env node

/**
 * Script to generate inline translations for React components
 * Extracts English text and adds Hindi translations as data attributes
 * Usage: node scripts/generateInlineTranslations.js
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Load existing translations
const hiTranslations = require('../app/data/translations/hi.json');
const enTranslations = require('../app/data/translations/en.json');

// Google Translate API (free tier via RapidAPI or use local Ollama)
async function translateToHindi(text) {
  // First check if already translated
  if (hiTranslations[text]) {
    return hiTranslations[text];
  }

  try {
    // Try using Google Translate API (requires API key)
    // For now, we'll use a simple approach with a translation service
    const response = await axios.post('https://api.mymemory.translated.net/get', {
      q: text,
      langpair: 'en|hi'
    });

    if (response.data.responseStatus === 200) {
      return response.data.responseData.translatedText;
    }
  } catch (error) {
    console.warn(`Could not translate: "${text}"`);
  }

  return text; // Fallback to English
}

// Extract text from JSX
function extractTextFromJSX(content) {
  const textRegex = /"([^"]+)"|'([^']+)'|>([^<]+)</g;
  const texts = new Set();
  let match;

  while ((match = textRegex.exec(content)) !== null) {
    const text = match[1] || match[2] || match[3];
    if (text && text.trim().length > 0 && !text.includes('${')) {
      texts.add(text.trim());
    }
  }

  return Array.from(texts);
}

// Create translation wrapper component
function createTranslationWrapper(text, hiText) {
  return `<span data-en="${text}" data-hi="${hiText}">${text}</span>`;
}

// Process a single file
async function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let modified = false;

    // Extract all text strings
    const texts = extractTextFromJSX(content);

    for (const text of texts) {
      // Skip if already has translation wrapper
      if (content.includes(`data-en="${text}"`)) {
        continue;
      }

      // Get or create translation
      let hiText = hiTranslations[text];
      if (!hiText) {
        console.log(`Translating: "${text}"`);
        hiText = await translateToHindi(text);
        hiTranslations[text] = hiText;
        modified = true;
      }

      // Replace text with wrapper (simple approach for quoted strings)
      const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`"${escapedText}"`, 'g');
      
      if (regex.test(content)) {
        content = content.replace(
          regex,
          `"${text}" /* hi: ${hiText} */`
        );
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TSX/JSX files
function findComponentFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        findComponentFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Main execution
async function main() {
  console.log('🔄 Generating inline translations...\n');

  const componentDir = path.join(__dirname, '../app');
  const files = findComponentFiles(componentDir);

  console.log(`Found ${files.length} component files\n`);

  for (const file of files) {
    await processFile(file);
  }

  // Save updated translations
  fs.writeFileSync(
    path.join(__dirname, '../app/data/translations/hi.json'),
    JSON.stringify(hiTranslations, null, 2),
    'utf8'
  );

  console.log('\n✅ Translation generation complete!');
  console.log(`📊 Total translations: ${Object.keys(hiTranslations).length}`);
}

main().catch(console.error);
