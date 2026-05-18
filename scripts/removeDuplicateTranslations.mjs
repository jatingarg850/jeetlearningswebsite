#!/usr/bin/env node

/**
 * Remove duplicate translations from hi.json
 * Keeps only the first occurrence of each key
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiData = fs.readFileSync(hiPath, 'utf8');

// Parse JSON manually to detect duplicates
const lines = hiData.split('\n');
const seen = new Set();
const duplicates = [];
const cleanedLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Extract key from line (format: "key": "value",)
  const keyMatch = line.match(/"([^"]+)"\s*:\s*"([^"]*)"(,?)$/);
  
  if (keyMatch) {
    const key = keyMatch[1];
    
    if (seen.has(key)) {
      duplicates.push(key);
      console.log(`❌ Duplicate found: "${key.substring(0, 50)}..."`);
      continue; // Skip this line
    }
    
    seen.add(key);
  }
  
  cleanedLines.push(line);
}

// Write cleaned JSON
const cleanedData = cleanedLines.join('\n');
fs.writeFileSync(hiPath, cleanedData, 'utf8');

console.log(`\n✅ Cleanup complete!`);
console.log(`📊 Duplicates removed: ${duplicates.length}`);
console.log(`📈 Total unique entries: ${seen.size}`);
console.log(`📄 Saved to: ${hiPath}`);

if (duplicates.length > 0) {
  console.log(`\n🔍 Removed duplicates:`);
  duplicates.slice(0, 20).forEach((key, i) => {
    console.log(`  ${i + 1}. "${key.substring(0, 60)}..."`);
  });
  if (duplicates.length > 20) {
    console.log(`  ... and ${duplicates.length - 20} more`);
  }
}
