#!/usr/bin/env node

/**
 * Fix escaped quotes in Hindi translations
 * Removes \" from the beginning and end of translation values
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiData = fs.readFileSync(hiPath, 'utf8');
const hiTranslations = JSON.parse(hiData);

let fixedCount = 0;

// Fix escaped quotes
for (const [key, value] of Object.entries(hiTranslations)) {
  if (typeof value === 'string' && (value.startsWith('\\"') || value.endsWith('\\"'))) {
    // Remove escaped quotes
    let fixed = value;
    if (fixed.startsWith('\\"')) fixed = fixed.substring(2);
    if (fixed.endsWith('\\"')) fixed = fixed.substring(0, fixed.length - 2);
    
    hiTranslations[key] = fixed;
    fixedCount++;
    
    if (fixedCount <= 10) {
      console.log(`✓ Fixed: "${key.substring(0, 50)}..."`);
      console.log(`  Before: ${value.substring(0, 60)}...`);
      console.log(`  After:  ${fixed.substring(0, 60)}...\n`);
    }
  }
}

// Save fixed translations
fs.writeFileSync(hiPath, JSON.stringify(hiTranslations, null, 2), 'utf8');

console.log(`\n✅ Fixed ${fixedCount} entries with escaped quotes`);
console.log(`📄 Saved to: ${hiPath}`);
