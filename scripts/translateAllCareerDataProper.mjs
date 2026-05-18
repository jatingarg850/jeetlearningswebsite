#!/usr/bin/env node

/**
 * MASTER TRANSLATION SCRIPT - Translate ALL Career Data to Hindi
 * 
 * This script:
 * 1. Finds all *UpdateData.ts files
 * 2. Parses TypeScript to extract ALL translatable content
 * 3. Translates using Ollama (local, fast, free)
 * 4. Adds Hindi fields inline to data files
 * 5. Handles all edge cases and errors
 * 
 * Usage: node scripts/translateAllCareerDataProper.mjs
 * 
 * Prerequisites:
 *   - Ollama running: ollama serve
 *   - Model: ollama pull translategemma:4b
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
const DELAY_MS = 50; // Delay between translations

// Global stats
let stats = {
  filesProcessed: 0,
  filesFailed: 0,
  sectionsFound: 0,
  sectionsUpdated: 0,
  titlesTranslated: 0,
  descriptionsTranslated: 0,
  contentItemsTranslated: 0,
  totalTranslations: 0,
  cacheHits: 0,
  cacheMisses: 0,
  startTime: Date.now(),
};

// Translation cache
const translationCache = {};

/**
 * Translate text using Ollama
 */
async function translateWithOllama(text) {
  if (!text || text.length === 0) return null;
  
  // Check cache
  if (translationCache[text]) {
    stats.cacheHits++;
    return translationCache[text];
  }

  stats.cacheMisses++;
  
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
          
          if (translation) {
            // Clean up translation
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
 */
async function processCareerFile(filePath, fileName) {
  console.log(`\n📄 Processing: ${fileName}`);
  
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileStats = {
      sections: 0,
      updated: 0,
      titles: 0,
      descriptions: 0,
      contentItems: 0,
    };

    // Find all guideSections
    const guideSectionsMatch = fileContent.match(/guideSections:\s*\[([\s\S]*?)\n\s*\]/);
    if (!guideSectionsMatch) {
      console.log(`  ⚠️  No guideSections found`);
      return false;
    }

    const guideSectionsContent = guideSectionsMatch[1];
    
    // Find all individual sections
    const sectionRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?(?=\},\s*\{|\]\s*\})/g;
    let sectionMatch;
    const sections = [];

    while ((sectionMatch = sectionRegex.exec(guideSectionsContent)) !== null) {
      sections.push({
        id: sectionMatch[1],
        fullMatch: sectionMatch[0],
        startIndex: sectionMatch.index,
      });
    }

    console.log(`  Found ${sections.length} sections`);
    fileStats.sections = sections.length;

    // Process each section
    for (const section of sections) {
      const sectionText = section.fullMatch;
      
      // Skip if already has Hindi translations
      if (sectionText.includes('titleHi') || sectionText.includes('contentHi')) {
        continue;
      }

      let updatedSection = sectionText;
      let sectionModified = false;

      // 1. Translate title
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
          fileStats.titles++;
          stats.titlesTranslated++;
          console.log(`    ✓ Title: "${englishTitle.substring(0, 40)}..."`);
        }
      }

      // 2. Translate description
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
          fileStats.descriptions++;
          stats.descriptionsTranslated++;
          console.log(`    ✓ Description: "${englishDesc.substring(0, 40)}..."`);
        }
      }

      // 3. Translate content array
      const contentMatch = sectionText.match(/content:\s*\[([\s\S]*?)\]/);
      if (contentMatch && !sectionText.includes('contentHi')) {
        const contentArray = contentMatch[1];
        const items = contentArray.match(/"([^"]+)"/g) || [];
        
        if (items.length > 0) {
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
            fileStats.contentItems += hindiItems.length;
            stats.contentItemsTranslated += hindiItems.length;
            console.log(`    ✓ Content: ${hindiItems.length} items translated`);
          }
        }
      }

      // Update file content if section was modified
      if (sectionModified) {
        fileContent = fileContent.replace(sectionText, updatedSection);
        modified = true;
        fileStats.updated++;
        stats.sectionsUpdated++;
      }

      await sleep(DELAY_MS);
    }

    // Write updated file
    if (modified) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`  ✅ Updated: ${fileStats.updated} sections`);
      console.log(`     - Titles: ${fileStats.titles}`);
      console.log(`     - Descriptions: ${fileStats.descriptions}`);
      console.log(`     - Content items: ${fileStats.contentItems}`);
      stats.filesProcessed++;
      stats.sectionsFound += fileStats.sections;
      stats.totalTranslations += fileStats.titles + fileStats.descriptions + fileStats.contentItems;
      return true;
    } else {
      console.log(`  ℹ️  No updates needed`);
      stats.filesProcessed++;
      stats.sectionsFound += fileStats.sections;
      return false;
    }

  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    stats.filesFailed++;
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
  console.log('\n' + '='.repeat(80));
  console.log('🚀 MASTER CAREER DATA TRANSLATION SCRIPT');
  console.log('='.repeat(80));
  console.log(`📍 Ollama: http://${OLLAMA_HOST}:${OLLAMA_PORT}`);
  console.log(`🤖 Model: ${MODEL}`);
  console.log(`📂 Data Directory: ${DATA_DIR}`);
  console.log('='.repeat(80));

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
  console.log('='.repeat(80));

  // Process each file
  for (let i = 0; i < careerFiles.length; i++) {
    const filePath = careerFiles[i];
    const fileName = path.basename(filePath);
    
    try {
      await processCareerFile(filePath, fileName);
    } catch (error) {
      console.error(`  ❌ Failed: ${error.message}`);
      stats.filesFailed++;
    }
    
    // Progress indicator
    const progress = ((i + 1) / careerFiles.length * 100).toFixed(0);
    console.log(`  [${i + 1}/${careerFiles.length}] ${progress}%\n`);
  }

  const totalTime = ((Date.now() - stats.startTime) / 1000).toFixed(1);

  console.log('='.repeat(80));
  console.log('✅ TRANSLATION COMPLETE!');
  console.log('='.repeat(80));
  console.log(`\n📊 STATISTICS:`);
  console.log(`   Files Processed: ${stats.filesProcessed}/${careerFiles.length}`);
  console.log(`   Files Failed: ${stats.filesFailed}`);
  console.log(`   Sections Found: ${stats.sectionsFound}`);
  console.log(`   Sections Updated: ${stats.sectionsUpdated}`);
  console.log(`\n📈 TRANSLATIONS:`);
  console.log(`   Titles: ${stats.titlesTranslated}`);
  console.log(`   Descriptions: ${stats.descriptionsTranslated}`);
  console.log(`   Content Items: ${stats.contentItemsTranslated}`);
  console.log(`   Total: ${stats.totalTranslations}`);
  console.log(`\n💾 CACHE STATS:`);
  console.log(`   Cache Hits: ${stats.cacheHits}`);
  console.log(`   Cache Misses: ${stats.cacheMisses}`);
  console.log(`   Unique Translations: ${Object.keys(translationCache).length}`);
  console.log(`\n⏱️  Total Time: ${totalTime}s`);
  console.log('='.repeat(80) + '\n');

  // Save cache for reference
  const cacheFile = path.join(__dirname, '../translation_cache.json');
  fs.writeFileSync(cacheFile, JSON.stringify(translationCache, null, 2), 'utf8');
  console.log(`💾 Translation cache saved to: ${cacheFile}\n`);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
