#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../app/data');

const OLLAMA_HOST = 'localhost';
const OLLAMA_PORT = 11434;
const MODEL = 'translategemma:4b';

let cache = {};

async function translate(text) {
  if (!text || text.length === 0) return null;
  if (cache[text]) return cache[text];

  return new Promise((resolve) => {
    const payload = JSON.stringify({
      model: MODEL,
      prompt: `Translate to Hindi, ONLY the translation:\n\nEnglish: "${text}"\nHindi:`,
      stream: false,
      temperature: 0.3,
    });

    const req = http.request({
      hostname: OLLAMA_HOST,
      port: OLLAMA_PORT,
      path: '/api/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          let translation = result.response?.trim() || null;
          if (translation) {
            translation = translation.replace(/^"+|"+$/g, '').trim();
            if (translation && translation !== text && translation.length > 0) {
              cache[text] = translation;
            }
          }
          resolve(translation);
        } catch (e) {
          resolve(null);
        }
      });
    });

    req.on('error', () => resolve(null));
    req.write(payload);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n📄 ${fileName}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let totalCount = 0;

    // Simple approach: find content: [ and the matching ]
    let pos = 0;
    while (true) {
      // Find next content: [
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
        console.log(`    Found ${items.length} items`);
        const hiItems = [];
        
        for (const item of items) {
          const hi = await translate(item);
          hiItems.push(hi || item);
          await sleep(30);
        }
        
        // Check if all different
        const allDifferent = hiItems.every((h, idx) => h !== items[idx]);
        
        if (allDifferent) {
          const hiArrayStr = hiItems.map(item => {
            const escaped = item.replace(/"/g, '\\"');
            return `        "${escaped}"`;
          }).join(',\n');
          
          const replacement = `${fullMatch},\n      contentHi: [\n${hiArrayStr}\n      ]`;
          content = content.substring(0, contentStart) + replacement + content.substring(contentEnd + 1);
          
          totalCount += hiItems.length;
          console.log(`    ✓ ${hiItems.length} translated`);
          modified = true;
          
          // Move position forward
          pos = contentStart + replacement.length;
        } else {
          pos = contentEnd + 1;
        }
      } else {
        pos = contentEnd + 1;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ ${totalCount} saved`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ❌ ${error.message}`);
    return false;
  }
}

async function checkOllama() {
  return new Promise((resolve) => {
    http.get(`http://${OLLAMA_HOST}:${OLLAMA_PORT}/api/tags`, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false));
  });
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
  console.log('⚡ SIMPLE TRANSLATE');
  console.log('='.repeat(70));

  const isRunning = await checkOllama();
  if (!isRunning) {
    console.error('\n❌ Ollama not running!\n');
    process.exit(1);
  }

  console.log('✅ Ollama connected\n');

  const files = getFiles(DATA_DIR);
  console.log(`📊 Found ${files.length} files\n`);

  const start = Date.now();
  let processed = 0;

  for (let i = 0; i < files.length; i++) {
    const result = await processFile(files[i]);
    if (result) processed++;
    console.log(`  [${i + 1}/${files.length}]`);
  }

  const time = ((Date.now() - start) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('✅ DONE!');
  console.log('='.repeat(70));
  console.log(`📊 Files: ${processed}/${files.length}`);
  console.log(`⏱️  Time: ${time}s`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
