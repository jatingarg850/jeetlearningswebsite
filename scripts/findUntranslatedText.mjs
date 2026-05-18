#!/usr/bin/env node

/**
 * Find actual English text that needs Hindi translation
 * Filters out CSS classes, URLs, and technical strings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiData = fs.readFileSync(hiPath, 'utf8');
const hiTranslations = JSON.parse(hiData);

// Patterns to skip (CSS, URLs, technical strings)
const skipPatterns = [
  /^(py|px|mt|mb|ml|mr|pt|pb|pl|pr|w|h|text|bg|border|rounded|flex|grid|gap|font|leading|tracking|shadow|opacity|transform|transition|duration|ease|delay|hover|focus|active|group|dark|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
  /^(www\.|https?:\/\/|\.com|\.org|\.in|\.gov)/,
  /^(M|L|C|Z|Q|H|V|A|S|T)\d+/,  // SVG paths
  /^[0-9\-\s₹€$%]+$/,  // Numbers, currency, percentages
  /^[a-z0-9\-_]+$/,  // Variable names, IDs
  /^#[0-9a-f]{3,6}$/i,  // Hex colors
  /^rgba?\(/,  // RGB colors
  /^[A-Z][a-z]+\s[A-Z][a-z]+$/,  // Proper names (usually)
];

// Find actual English text that needs translation
const untranslatedText = [];
for (const [key, value] of Object.entries(hiTranslations)) {
  // Skip if already translated (value is different from key)
  if (key !== value) continue;
  
  // Skip if matches skip patterns
  if (skipPatterns.some(pattern => pattern.test(key))) continue;
  
  // Skip if too short
  if (key.length < 15) continue;
  
  // Skip if contains only special characters
  if (!/[a-zA-Z]/.test(key)) continue;
  
  untranslatedText.push(key);
}

console.log(`\n📝 Found ${untranslatedText.length} actual English text entries needing translation:\n`);

untranslatedText.slice(0, 50).forEach((text, index) => {
  console.log(`${index + 1}. "${text.substring(0, 100)}${text.length > 100 ? '...' : ''}"`);
});

if (untranslatedText.length > 50) {
  console.log(`\n... and ${untranslatedText.length - 50} more entries`);
}

console.log(`\n✅ Total entries in hi.json: ${Object.keys(hiTranslations).length}`);
console.log(`⚠️  Actual text needing translation: ${untranslatedText.length}`);
console.log(`✓ Already translated: ${Object.keys(hiTranslations).length - untranslatedText.length}`);

// Save to file for reference
const outputPath = path.join(__dirname, '../untranslated_text.json');
fs.writeFileSync(outputPath, JSON.stringify(untranslatedText, null, 2), 'utf8');
console.log(`\n📄 Saved to: untranslated_text.json`);
