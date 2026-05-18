#!/usr/bin/env node

/**
 * Automatically translate untranslated English text to Hindi
 * Uses MyMemory Translation API (free, no key required)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load untranslated text
const untranslatedPath = path.join(__dirname, '../untranslated_text.json');
const untranslatedText = JSON.parse(fs.readFileSync(untranslatedPath, 'utf8'));

// Load existing translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiTranslations = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

// Function to translate using MyMemory API
function translateText(text) {
  return new Promise((resolve) => {
    const encodedText = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=en|hi`;

    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.responseStatus === 200) {
            resolve(result.responseData.translatedText);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

// Main translation loop
async function translateAll() {
  console.log(`\n🔄 Starting translation of ${untranslatedText.length} entries...\n`);

  let translated = 0;
  let failed = 0;

  for (let i = 0; i < untranslatedText.length; i++) {
    const text = untranslatedText[i];
    
    // Show progress every 50 entries
    if (i % 50 === 0) {
      console.log(`Progress: ${i}/${untranslatedText.length} (${translated} translated, ${failed} failed)`);
    }

    const hindi = await translateText(text);
    
    if (hindi && hindi !== text) {
      hiTranslations[text] = hindi;
      translated++;
    } else {
      failed++;
    }

    // Rate limiting - wait 100ms between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Save updated translations
  fs.writeFileSync(hiPath, JSON.stringify(hiTranslations, null, 2), 'utf8');

  console.log(`\n✅ Translation complete!`);
  console.log(`📊 Translated: ${translated}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📄 Saved to: ${hiPath}`);
}

translateAll().catch(console.error);
