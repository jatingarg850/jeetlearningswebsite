#!/usr/bin/env node

/**
 * Find and fix all English-to-English mappings in hi.json
 * These are entries where the key and value are identical (both in English)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiData = fs.readFileSync(hiPath, 'utf8');
const hiTranslations = JSON.parse(hiData);

// Find English-to-English mappings
const englishToEnglish = [];
for (const [key, value] of Object.entries(hiTranslations)) {
  // Check if key and value are identical (both English)
  if (key === value && key.length > 10) {
    englishToEnglish.push(key);
  }
}

console.log(`\n🔍 Found ${englishToEnglish.length} English-to-English mappings:\n`);

englishToEnglish.forEach((text, index) => {
  console.log(`${index + 1}. "${text.substring(0, 80)}${text.length > 80 ? '...' : ''}"`);
});

console.log(`\n⚠️  These need Hindi translations!`);
console.log(`\n📝 Please provide Hindi translations for these entries.`);
console.log(`\nTotal entries in hi.json: ${Object.keys(hiTranslations).length}`);
console.log(`English-to-English entries: ${englishToEnglish.length}`);
console.log(`Properly translated entries: ${Object.keys(hiTranslations).length - englishToEnglish.length}`);
