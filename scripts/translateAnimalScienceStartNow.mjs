#!/usr/bin/env node

/**
 * Translate the "Start Now" animal science section to Hindi using Ollama
 * This adds Hindi translations directly below the English content
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const OLLAMA_HOST = 'localhost';
const OLLAMA_PORT = 11434;
const MODEL = 'translategemma:4b';

// English content to translate
const englishContent = [
  "Visit Local Dairy Farms: Understand daily operations and animal care practices.",
  "Learn Animal Nutrition: Study feed composition and dietary requirements.",
  "Participate in Science Fairs: Create projects on animal health or breeding.",
  "Follow Livestock News: Read about dairy industry trends and innovations.",
  "Volunteer at Veterinary Clinics: Gain hands-on experience with animal care.",
  "Learn Data Analysis: Excel skills for tracking animal production records.",
  "Study Genetics: Understand heredity and selective breeding principles."
];

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

// Main translation function
async function translateStartNow() {
  console.log(`\n🚀 Starting Ollama translation of Animal Science "Start Now" section...`);
  console.log(`📍 Ollama: http://${OLLAMA_HOST}:${OLLAMA_PORT}`);
  console.log(`🤖 Model: ${MODEL}\n`);

  const translations = {};
  let translated = 0;
  let failed = 0;
  const startTime = Date.now();

  for (let i = 0; i < englishContent.length; i++) {
    const text = englishContent[i];
    
    console.log(`[${i + 1}/${englishContent.length}] Translating: "${text.substring(0, 50)}..."`);

    const hindi = await translateWithOllama(text);
    
    if (hindi && hindi !== text && hindi.length > 0) {
      translations[text] = hindi;
      translated++;
      console.log(`  ✓ Hindi: "${hindi.substring(0, 60)}..."\n`);
    } else {
      failed++;
      console.log(`  ✗ Failed to translate\n`);
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Translation complete!`);
  console.log(`📊 Translated: ${translated}/${englishContent.length}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⏱️  Total time: ${totalTime}s\n`);

  return translations;
}

// Main
(async () => {
  const isRunning = await checkOllama();
  
  if (!isRunning) {
    console.error('\n❌ Ollama is not running!');
    console.error('\nTo start Ollama:');
    console.error('  1. Install Ollama from https://ollama.ai');
    console.error('  2. Run: ollama serve');
    console.error('  3. In another terminal, pull a model: ollama pull translategemma:4b');
    console.error('  4. Then run this script again\n');
    process.exit(1);
  }

  const translations = await translateStartNow();
  
  // Save translations to a JSON file for reference
  const outputPath = path.join(__dirname, '../animal_science_startnow_translations.json');
  fs.writeFileSync(outputPath, JSON.stringify(translations, null, 2), 'utf8');
  console.log(`📄 Translations saved to: ${outputPath}`);
})();
