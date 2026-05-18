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

    // First, remove duplicate contentHi entries
    content = content.replace(/,\n\s*contentHi:\s*\[[\s\S]*?\],(?=\s*contentHi:)/g, ',');

    // Find all content: [ ... ], patterns
    const contentRegex = /content:\s*\[\s*((?:[^[\]]*(?:\[[^\]]*\])?)*?)\s*\](?!\s*,\s*contentHi:)/g;
    
    let match;
    const replacements = [];
    
    while ((match = contentRegex.exec(content)) !== null) {
      const fullMatch = match[0];
      const contentBody = match[1];
      
      // Double-check this section doesn't already have contentHi
      const nextChars = content.substring(match.index + fullMatch.length, match.index + fullMatch.length + 200);
      if (nextChars.includes('contentHi:')) {
        continue;
      }
      
      // Extract all quoted strings
      const items = [];
      let inString = false;
      let currentString = '';
      let escapeNext = false;
      
      for (let i = 0; i < contentBody.length; i++) {
        const char = contentBody[i];
        
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
        console.log(`    Found ${items.length} items, translating...`);
        const hiItems = [];
        
        for (const item of items) {
          const hi = await translate(item);
          hiItems.push(hi || item);
          await sleep(50);
        }
        
        // Check if all are different
        const allDifferent = hiItems.every((h, idx) => h !== items[idx]);
        
        if (allDifferent) {
          // Create contentHi array with proper escaping
          const hiArrayStr = hiItems.map(item => {
            const escaped = item.replace(/"/g, '\\"');
            return `        "${escaped}"`;
          }).join(',\n');
          
          const replacement = `${fullMatch},\n      contentHi: [\n${hiArrayStr}\n      ]`;
          replacements.push({ from: fullMatch, to: replacement });
          totalCount += hiItems.length;
          console.log(`    ✓ ${hiItems.length} items translated`);
        }
      }
    }
    
    // Apply all replacements
    if (replacements.length > 0) {
      for (const rep of replacements) {
        content = content.replace(rep.from, rep.to);
      }
      modified = true;
      
      // Write file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ ${totalCount} translations added and saved`);
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
  console.log('⚡ TRANSLATE ALL CONTENT ARRAYS TO HINDI');
  console.log('='.repeat(70));

  const isRunning = await checkOllama();
  if (!isRunning) {
    console.error('\n❌ Ollama not running!\n  Run: ollama serve\n');
    process.exit(1);
  }

  console.log('✅ Ollama connected\n');

  const files = getFiles(DATA_DIR);

  if (files.length === 0) {
    console.error('❌ No files found!');
    process.exit(1);
  }

  console.log(`📊 Found ${files.length} files\n`);

  const start = Date.now();
  let processed = 0;
  let totalTranslations = 0;

  for (let i = 0; i < files.length; i++) {
    const result = await processFile(files[i]);
    if (result) {
      processed++;
    }
    console.log(`  [${i + 1}/${files.length}]`);
  }

  const time = ((Date.now() - start) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('✅ DONE!');
  console.log('='.repeat(70));
  console.log(`📊 Files updated: ${processed}/${files.length}`);
  console.log(`⏱️  Time: ${time}s`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
