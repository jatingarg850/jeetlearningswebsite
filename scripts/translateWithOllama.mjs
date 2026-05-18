#!/usr/bin/env node

/**
 * Translate untranslated English text to Hindi using Ollama
 * Make sure Ollama is running: ollama serve
 * Pull model: ollama pull mistral (or any model)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const OLLAMA_HOST = 'localhost';
const OLLAMA_PORT = 11434;
const MODEL = 'translategemma:4b'; // or 'neural-chat', 'llama2', etc.

// Load untranslated text
const untranslatedPath = path.join(__dirname, '../untranslated_text.json');
const untranslatedText = JSON.parse(fs.readFileSync(untranslatedPath, 'utf8'));

// Load existing translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiTranslations = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

// Function to translate using Ollama
async function translateWithOllama(text) {
  return new Promise((resolve) => {
    const prompt = `Translate this English text to Hindi. Provide ONLY the Hindi translation, nothing else:

English: "${text}"
Hindi:`;

    const payload = JSON.stringify({
      model: MODEL,
      prompt: prompt,
      stream: false,
      temperature: 0.3,
    });

    const options = {
      hostname: OLLAMA_HOST,
      port: OLLAMA_PORT,
      path: '/api/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          const translation = result.response?.trim() || null;
          resolve(translation);
        } catch (e) {
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Ollama connection error:', error.message);
      resolve(null);
    });

    req.write(payload);
    req.end();
  });
}

// Main translation loop
async function translateAll() {
  console.log(`\n🚀 Starting Ollama translation of ${untranslatedText.length} entries...`);
  console.log(`📍 Ollama: http://${OLLAMA_HOST}:${OLLAMA_PORT}`);
  console.log(`🤖 Model: ${MODEL}\n`);

  let translated = 0;
  let failed = 0;
  const startTime = Date.now();

  for (let i = 0; i < untranslatedText.length; i++) {
    const text = untranslatedText[i];
    
    // Show progress every 10 entries
    if (i % 10 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`[${i}/${untranslatedText.length}] Translated: ${translated}, Failed: ${failed}, Time: ${elapsed}s`);
    }

    const hindi = await translateWithOllama(text);
    
    if (hindi && hindi !== text && hindi.length > 0) {
      hiTranslations[text] = hindi;
      translated++;
      console.log(`  ✓ "${text.substring(0, 50)}..." → "${hindi.substring(0, 50)}..."`);
    } else {
      failed++;
      console.log(`  ✗ Failed: "${text.substring(0, 50)}..."`);
    }
  }

  // Save updated translations
  fs.writeFileSync(hiPath, JSON.stringify(hiTranslations, null, 2), 'utf8');

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Translation complete!`);
  console.log(`📊 Translated: ${translated}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⏱️  Total time: ${totalTime}s`);
  console.log(`📄 Saved to: ${hiPath}`);
  console.log(`\n📈 Total entries in hi.json: ${Object.keys(hiTranslations).length}`);
}

// Check if Ollama is running
async function checkOllama() {
  return new Promise((resolve) => {
    const options = {
      hostname: OLLAMA_HOST,
      port: OLLAMA_PORT,
      path: '/api/tags',
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      resolve(res.statusCode === 200);
    });

    req.on('error', () => resolve(false));
    req.end();
  });
}

// Main
(async () => {
  const isRunning = await checkOllama();
  
  if (!isRunning) {
    console.error('\n❌ Ollama is not running!');
    console.error('\nTo start Ollama:');
    console.error('  1. Install Ollama from https://ollama.ai');
    console.error('  2. Run: ollama serve');
    console.error('  3. In another terminal, pull a model: ollama pull mistral');
    console.error('  4. Then run this script again\n');
    process.exit(1);
  }

  await translateAll();
})();
