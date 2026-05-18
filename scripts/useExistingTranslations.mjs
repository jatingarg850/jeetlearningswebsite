#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../app/data');
const HI_TRANSLATIONS_FILE = path.join(__dirname, '../app/data/translations/hi.json');

// Load existing Hindi translations
const hiTranslations = JSON.parse(fs.readFileSync(HI_TRANSLATIONS_FILE, 'utf8'));

console.log(`\n📚 Loaded ${Object.keys(hiTranslations).length} existing translations\n`);

function processFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`📄 ${fileName}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let totalCount = 0;

    // Find all content: [ and the matching ]
    let pos = 0;
    while (true) {
      const contentStart = content.indexOf('content: [', pos);
      if (contentStart === -1) break;
      
      // Check if already has contentHi nearby
      const nextPart = content.substring(contentStart, contentStart + 500);
      if (nextPart.includes('contentHi:')) {
        pos = contentStart + 10;
        continue;
      }
      
      // Find matching ]
      let bracketCount = 1;
      let i = contentStart + 10;
      let contentEnd = -1;
      
      while (i < content.length && bracketCount > 0) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        if (bracketCount === 0) {
          contentEnd = i;
          break;
        }
        i++;
      }
      
      if (contentEnd === -1) {
        pos = contentStart + 10;
        continue;
      }
      
      // Extract content array
      const fullMatch = content.substring(contentStart, contentEnd + 1);
      const contentBody = content.substring(contentStart + 10, contentEnd);
      
      // Extract strings
      const items = [];
      let inString = false;
      let currentString = '';
      let escapeNext = false;
      
      for (let j = 0; j < contentBody.length; j++) {
        const char = contentBody[j];
        
        if (escapeNext) {
          currentString += char;
          escapeNext = false;
          continue;
        }
        
        if (char === '\\') {
          currentString += char;
          escapeNext = true;
          continue;
        }
        
        if (char === '"') {
          if (inString) {
            items.push(currentString);
            currentString = '';
            inString = false;
          } else {
            inString = true;
          }
          continue;
        }
        
        if (inString) {
          currentString += char;
        }
      }
      
      if (items.length > 0) {
        // Look up translations in hi.json
        const hiItems = [];
        let foundAll = true;
        
        for (const item of items) {
          const hiTranslation = hiTranslations[item];
          if (hiTranslation) {
            hiItems.push(hiTranslation);
          } else {
            foundAll = false;
            break;
          }
        }
        
        // Only add if we found translations for all items
        if (foundAll && hiItems.length === items.length) {
          // Check if all are different from English
          const allDifferent = hiItems.every((h, idx) => h !== items[idx]);
          
          if (allDifferent) {
            const hiArrayStr = hiItems.map(item => {
              const escaped = item.replace(/"/g, '\\"');
              return `        "${escaped}"`;
            }).join(',\n');
            
            const replacement = `${fullMatch},\n      contentHi: [\n${hiArrayStr}\n      ]`;
            content = content.substring(0, contentStart) + replacement + content.substring(contentEnd + 1);
            
            totalCount += hiItems.length;
            modified = true;
            
            // Move position forward
            pos = contentStart + replacement.length;
          } else {
            pos = contentEnd + 1;
          }
        } else {
          pos = contentEnd + 1;
        }
      } else {
        pos = contentEnd + 1;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ ${totalCount} translations added\n`);
      return true;
    }
    console.log(`  ℹ️  No new translations\n`);
    return false;
  } catch (error) {
    console.error(`  ❌ ${error.message}\n`);
    return false;
  }
}

function getFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item.endsWith('UpdateData.ts')) {
      files.push(path.join(dir, item));
    }
  }
  return files.sort();
}

async function main() {
  console.log('\n' + '='.repeat(70));
  console.log('⚡ USE EXISTING TRANSLATIONS - INSTANT');
  console.log('='.repeat(70));

  const files = getFiles(DATA_DIR);
  console.log(`📊 Found ${files.length} files\n`);

  const start = Date.now();
  let processed = 0;

  for (let i = 0; i < files.length; i++) {
    const result = processFile(files[i]);
    if (result) processed++;
    console.log(`  [${i + 1}/${files.length}]`);
  }

  const time = ((Date.now() - start) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('✅ DONE!');
  console.log('='.repeat(70));
  console.log(`📊 Files updated: ${processed}/${files.length}`);
  console.log(`⏱️  Time: ${time}s (NO OLLAMA CALLS!)`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
