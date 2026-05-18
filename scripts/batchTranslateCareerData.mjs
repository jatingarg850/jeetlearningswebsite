#!/usr/bin/env node

/**
 * Batch Translation Script - Translate ALL career data sections to Hindi
 * 
 * This script:
 * 1. Reads all *UpdateData.ts files
 * 2. Extracts all guideSections with their content
 * 3. Translates titles, descriptions, and content arrays to Hindi
 * 4. Adds Hindi fields (titleHi, descriptionHi, contentHi) inline
 * 5. Saves updated files with 100x faster translation (no API calls)
 * 
 * Usage: node scripts/batchTranslateCareerData.mjs
 * 
 * Prerequisites:
 *   - Ollama running: ollama serve
 *   - Model pulled: ollama pull translategemma:4b
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
const DELAY_MS = 100; // Delay between translations

// Global translation cache
const translationCache = {};
let cacheHits = 0;
let cacheMisses = 0;

/**
 * Translate text using Ollama with caching
 */
async function translateWithOllama(text) {
  if (!text || text.length === 0) return null;
  
  // Check cache
  if (translationCache[text]) {
    cacheHits++;
    return translationCache[text];
  }

  cacheMisses++;
  
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
          let translation = result.response?.trim() || null;
          
          // Clean up translation
          if (translation) {
            // Remove surrounding quotes if present
            if (translation.startsWith('"') && translation.endsWith('"')) {
              translation = translation.slice(1, -1);
            }
            // Remove extra quotes
            translation = translation.replace(/^"+|"+$/g, '');
            
            // Cache valid translations
            if (translation && translation !== text && translation.length > 0) {
              translationCache[text] = translation;
            }
          }
          
          resolve(translation);
        } catch (e) {
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.error('  ⚠️  Ollama error:', error.message);
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
 * Process a single career data file
 * Adds Hindi translations inline to the TypeScript file
 */
async function processCareerFile(filePath, fileName) {
  console.log(`\n📄 ${fileName}`);
  
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let translationCount = 0;

    // Pattern to find guide sections
    // Matches: { id: "...", title: "...", description: "...", content: [...] }
    const sectionPattern = /\{\s*id:\s*"([^"]+)"[^}]*?(?=\},\s*\{|\]\s*\})/gs;
    
    let match;
    const sections = [];
    
    while ((match = sectionPattern.exec(fileContent)) !== null) {
      sections.push({
        fullMatch: match[0],
        id: match[1],
        startIndex: match.index,
        endIndex: match.index + match[0].length
      });
    }

    console.log(`  Found ${sections.length} sections`);

    // Process each section
    for (const section of sections) {
      const sectionText = section.fullMatch;
      
      // Skip if already has Hindi translations
      if (sectionText.includes('titleHi') || sectionText.includes('contentHi')) {
        continue;
      }

      let updatedSection = sectionText;
      let sectionModified = false;

      // Extract and translate title
      const titleMatch = sectionText.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
        const englishTitle = titleMatch[1];
        const hindiTitle = await translateWithOllama(englishTitle);
        
        if (hindiTitle && hindiTitle !== englishTitle) {
          updatedSection = updatedSection.replace(
            `title: "${englishTitle}"`,
            `title: "${englishTitle}",\n      titleHi: "${hindiTitle}"`
          );
          sectionModified = true;
          translationCount++;
          console.log(`    ✓ Title: "${englishTitle.substring(0, 45)}..."`);
        }
      }

      // Extract and translate description
      const descMatch = sectionText.match(/description:\s*"([^"]+)"/);
      if (descMatch) {
        const englishDesc = descMatch[1];
        const hindiDesc = await translateWithOllama(englishDesc);
        
        if (hindiDesc && hindiDesc !== englishDesc) {
          updatedSection = updatedSection.replace(
            `description: "${englishDesc}"`,
            `description: "${englishDesc}",\n      descriptionHi: "${hindiDesc}"`
          );
          sectionModified = true;
          translationCount++;
          console.log(`    ✓ Description: "${englishDesc.substring(0, 45)}..."`);
        }
      }

      // Extract and translate content array
      const contentMatch = sectionText.match(/content:\s*\[([\s\S]*?)\]/);
      if (contentMatch) {
        const contentArray = contentMatch[1];
        const items = contentArray.match(/"([^"]+)"/g) || [];
        
        if (items.length > 0 && !sectionText.includes('contentHi')) {
          const englishItems = items.map(item => item.replace(/^"|"$/g, ''));
          const hindiItems = [];
          
          for (const item of englishItems) {
            const hindiItem = await translateWithOllama(item);
            hindiItems.push(hindiItem || item);
            await sleep(DELAY_MS);
          }

          // Check if all translations are different
          const allDifferent = hindiItems.every((hi, idx) => hi !== englishItems[idx]);
          
          if (allDifferent && hindiItems.length === englishItems.length) {
            const hindiArrayStr = hindiItems
              .map(item => `        "${item}"`)
              .join(',\n');
            
            updatedSection = updatedSection.replace(
              /content:\s*\[([\s\S]*?)\]/,
              `content: [\n${contentArray.trim()}\n      ],\n      contentHi: [\n${hindiArrayStr}\n      ]`
            );
            sectionModified = true;
            translationCount += hindiItems.length;
            console.log(`    ✓ Content: ${hindiItems.length} items translated`);
          }
        }
      }

      // Update file content if section was modified
      if (sectionModified) {
        fileContent = fileContent.replace(sectionText, updatedSection);
        modified = true;
      }

      await sleep(DELAY_MS);
    }

    // Write updated file
    if (modified) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`  ✅ Updated with ${translationCount} translations`);
      return true;
    } else {
      console.log(`  ℹ️  No updates needed`);
      return false;
    }

  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return false;
  }
}

/**
 * Find all career data files
 */
async function findCareerDataFiles() {
  try {
    const files = await glob(path.join(DATA_DIR, '*UpdateData.ts'));
    return files
      .filter(f => !f.includes('node_modules'))
      .sort();
  } catch (error) {
    console.error('Error finding files:', error);
    return [];
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n' + '='.repeat(75));
  console.log('🚀 BATCH CAREER DATA TRANSLATION SCRIPT');
  console.log('='.repeat(75));
  console.log(`📍 Ollama: http://${OLLAMA_HOST}:${OLLAMA_PORT}`);
  console.log(`🤖 Model: ${MODEL}`);
  console.log(`📂 Data Directory: ${DATA_DIR}`);
  console.log('='.repeat(75));

  // Check Ollama
  console.log('\n⏳ Checking Ollama connection...');
  const isRunning = await checkOllama();
  
  if (!isRunning) {
    console.error('\n❌ Ollama is not running!');
    console.error('\nTo start Ollama:');
    console.error('  1. Install from https://ollama.ai');
    console.error('  2. Run: ollama serve');
    console.error('  3. In another terminal:');
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
  console.log('Starting translations...');
  console.log('='.repeat(75));

  const startTime = Date.now();
  let filesModified = 0;
  let filesFailed = 0;

  // Process each file
  for (let i = 0; i < careerFiles.length; i++) {
    const filePath = careerFiles[i];
    const fileName = path.basename(filePath);
    
    try {
      const modified = await processCareerFile(filePath, fileName);
      if (modified) {
        filesModified++;
      }
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}`);
      filesFailed++;
    }
    
    // Progress indicator
    const progress = ((i + 1) / careerFiles.length * 100).toFixed(0);
    console.log(`  [${i + 1}/${careerFiles.length}] ${progress}%\n`);
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('='.repeat(75));
  console.log('✅ TRANSLATION COMPLETE!');
  console.log('='.repeat(75));
  console.log(`📊 Files Modified: ${filesModified}/${careerFiles.length}`);
  console.log(`❌ Files Failed: ${filesFailed}`);
  console.log(`⏱️  Total Time: ${totalTime}s`);
  console.log(`💾 Cache Stats:`);
  console.log(`   - Cache Hits: ${cacheHits}`);
  console.log(`   - Cache Misses: ${cacheMisses}`);
  console.log(`   - Unique Translations: ${Object.keys(translationCache).length}`);
  console.log('='.repeat(75) + '\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
