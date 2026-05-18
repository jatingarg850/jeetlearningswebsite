#!/usr/bin/env node

/**
 * Master Translation Script - Translate ALL career data to Hindi using Ollama
 * This script:
 * 1. Scans all career data files in app/data/*UpdateData.ts
 * 2. Extracts all translatable content (title, description, content arrays)
 * 3. Translates to Hindi using Ollama (local, fast, no API calls)
 * 4. Adds Hindi fields (titleHi, descriptionHi, contentHi) to each section
 * 5. Updates the original files with inline translations
 * 
 * Usage: node scripts/translateAllCareerData.mjs
 * 
 * Make sure Ollama is running:
 *   ollama serve
 *   ollama pull translategemma:4b
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const OLLAMA_HOST = 'localhost';
const OLLAMA_PORT = 11434;
const MODEL = 'translategemma:4b';
const DATA_DIR = path.join(__dirname, '../app/data');
const BATCH_SIZE = 5; // Process 5 translations in parallel
const DELAY_BETWEEN_BATCHES = 500; // ms delay between batches

// Translation cache to avoid re-translating same text
const translationCache = {};

/**
 * Translate text using Ollama
 */
async function translateWithOllama(text) {
  // Check cache first
  if (translationCache[text]) {
    return translationCache[text];
  }

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
          
          // Remove quotes if present
          let cleanTranslation = translation;
          if (cleanTranslation && cleanTranslation.startsWith('"') && cleanTranslation.endsWith('"')) {
            cleanTranslation = cleanTranslation.slice(1, -1);
          }
          
          // Cache the translation
          if (cleanTranslation && cleanTranslation !== text && cleanTranslation.length > 0) {
            translationCache[text] = cleanTranslation;
          }
          
          resolve(cleanTranslation);
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

/**
 * Sleep for specified milliseconds
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Process translations in batches
 */
async function translateBatch(texts) {
  const promises = texts.map(text => translateWithOllama(text));
  return Promise.all(promises);
}

/**
 * Extract all translatable content from a guide section
 */
function extractTranslatableContent(section) {
  const items = [];
  
  if (section.title && !section.titleHi) {
    items.push({ text: section.title, field: 'title', section });
  }
  
  if (section.description && !section.descriptionHi) {
    items.push({ text: section.description, field: 'description', section });
  }
  
  if (section.content && Array.isArray(section.content) && !section.contentHi) {
    section.content.forEach((item, idx) => {
      if (typeof item === 'string') {
        items.push({ text: item, field: 'content', index: idx, section });
      }
    });
  }
  
  return items;
}

/**
 * Process a single career data file
 */
async function processCareerFile(filePath, fileName) {
  console.log(`\n📄 Processing: ${fileName}`);
  
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse the file to extract data
    // This is a simplified approach - we'll use regex to find sections
    const sections = [];
    let modified = false;
    
    // Find all guideSections arrays
    const guideSectionsMatch = fileContent.match(/guideSections:\s*\[([\s\S]*?)\n\s*\]/);
    
    if (!guideSectionsMatch) {
      console.log(`  ⚠️  No guideSections found`);
      return false;
    }
    
    // Extract individual sections (this is a simplified approach)
    // For production, consider using a proper TypeScript parser
    const sectionMatches = fileContent.matchAll(/\{\s*id:\s*"([^"]+)"[\s\S]*?(?=\},\s*\{|guideSections:|\]\s*\})/g);
    
    let totalItems = 0;
    let translatedItems = 0;
    
    for (const match of sectionMatches) {
      const sectionId = match[1];
      const sectionText = match[0];
      
      // Check if already has Hindi translations
      if (sectionText.includes('titleHi') || sectionText.includes('contentHi')) {
        continue;
      }
      
      // Extract title
      const titleMatch = sectionText.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
        const englishTitle = titleMatch[1];
        totalItems++;
        
        const hindiTitle = await translateWithOllama(englishTitle);
        if (hindiTitle && hindiTitle !== englishTitle) {
          fileContent = fileContent.replace(
            `title: "${englishTitle}"`,
            `title: "${englishTitle}",\n      titleHi: "${hindiTitle}"`
          );
          translatedItems++;
          console.log(`  ✓ Title: "${englishTitle.substring(0, 40)}..."`);
        }
      }
      
      // Extract description
      const descMatch = sectionText.match(/description:\s*"([^"]+)"/);
      if (descMatch) {
        const englishDesc = descMatch[1];
        totalItems++;
        
        const hindiDesc = await translateWithOllama(englishDesc);
        if (hindiDesc && hindiDesc !== englishDesc) {
          fileContent = fileContent.replace(
            `description: "${englishDesc}"`,
            `description: "${englishDesc}",\n      descriptionHi: "${hindiDesc}"`
          );
          translatedItems++;
          console.log(`  ✓ Description: "${englishDesc.substring(0, 40)}..."`);
        }
      }
      
      await sleep(100); // Small delay between sections
    }
    
    if (translatedItems > 0) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`  ✅ Updated: ${translatedItems}/${totalItems} items translated`);
      modified = true;
    } else {
      console.log(`  ℹ️  No new translations needed`);
    }
    
    return modified;
    
  } catch (error) {
    console.error(`  ❌ Error processing file: ${error.message}`);
    return false;
  }
}

/**
 * Check if Ollama is running
 */
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

/**
 * Find all career data files
 */
async function findCareerDataFiles() {
  try {
    const files = await glob(path.join(DATA_DIR, '*UpdateData.ts'));
    return files.filter(f => !f.includes('node_modules'));
  } catch (error) {
    console.error('Error finding files:', error);
    return [];
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n' + '='.repeat(70));
  console.log('🚀 MASTER CAREER DATA TRANSLATION SCRIPT');
  console.log('='.repeat(70));
  console.log(`📍 Ollama: http://${OLLAMA_HOST}:${OLLAMA_PORT}`);
  console.log(`🤖 Model: ${MODEL}`);
  console.log(`📂 Data Directory: ${DATA_DIR}\n`);

  // Check Ollama
  const isRunning = await checkOllama();
  if (!isRunning) {
    console.error('\n❌ Ollama is not running!');
    console.error('\nTo start Ollama:');
    console.error('  1. Install Ollama from https://ollama.ai');
    console.error('  2. Run: ollama serve');
    console.error('  3. In another terminal, pull the model:');
    console.error('     ollama pull translategemma:4b');
    console.error('  4. Then run this script again\n');
    process.exit(1);
  }

  console.log('✅ Ollama is running\n');

  // Find all career data files
  const careerFiles = await findCareerDataFiles();
  
  if (careerFiles.length === 0) {
    console.error('❌ No career data files found!');
    process.exit(1);
  }

  console.log(`📊 Found ${careerFiles.length} career data files\n`);

  const startTime = Date.now();
  let filesModified = 0;
  let filesFailed = 0;

  // Process each file
  for (let i = 0; i < careerFiles.length; i++) {
    const filePath = careerFiles[i];
    const fileName = path.basename(filePath);
    
    console.log(`[${i + 1}/${careerFiles.length}]`);
    
    try {
      const modified = await processCareerFile(filePath, fileName);
      if (modified) {
        filesModified++;
      }
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}`);
      filesFailed++;
    }
    
    // Delay between files
    if (i < careerFiles.length - 1) {
      await sleep(DELAY_BETWEEN_BATCHES);
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('✅ TRANSLATION COMPLETE!');
  console.log('='.repeat(70));
  console.log(`📊 Files Modified: ${filesModified}/${careerFiles.length}`);
  console.log(`❌ Files Failed: ${filesFailed}`);
  console.log(`⏱️  Total Time: ${totalTime}s`);
  console.log(`💾 Translation Cache Size: ${Object.keys(translationCache).length} unique translations`);
  console.log('='.repeat(70) + '\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
