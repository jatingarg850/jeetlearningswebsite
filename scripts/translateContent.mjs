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
    let count = 0;

    // Split by sections - look for id: "..."
    const lines = content.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Check if this line has content: [
      if (line.includes('content:') && line.includes('[')) {
        // Check if next line has contentHi
        let hasContentHi = false;
        for (let j = i + 1; j < Math.min(i + 50, lines.length); j++) {
          if (lines[j].includes('contentHi:')) {
            hasContentHi = true;
            break;
          }
          if (lines[j].includes(']') && !lines[j].includes('contentHi')) {
            break;
          }
        }
        
        if (!hasContentHi) {
          // Find the closing bracket
          let endIdx = i + 1;
          let bracketCount = 1;
          
          while (endIdx < lines.length && bracketCount > 0) {
            if (lines[endIdx].includes('[')) bracketCount++;
            if (lines[endIdx].includes(']')) bracketCount--;
            if (bracketCount === 0) break;
            endIdx++;
          }
          
          // Extract content items
          const contentLines = lines.slice(i + 1, endIdx);
          const items = [];
          
          for (const cline of contentLines) {
            const match = cline.match(/"([^"]+)"/);
            if (match) {
              items.push(match[1]);
            }
          }
          
          if (items.length > 0) {
            console.log(`    Found ${items.length} content items`);
            const hiItems = [];
            
            for (const item of items) {
              const hi = await translate(item);
              hiItems.push(hi || item);
              await sleep(50);
            }
            
            // Check if all different
            const allDifferent = hiItems.every((h, idx) => h !== items[idx]);
            
            if (allDifferent) {
              // Insert contentHi after content array
              const hiLines = hiItems.map(item => `          "${item}",`);
              hiLines[hiLines.length - 1] = hiLines[hiLines.length - 1].slice(0, -1); // Remove last comma
              
              // Find the line with closing ]
              const closingLine = lines[endIdx];
              const indent = closingLine.match(/^\s*/)[0];
              
              // Insert contentHi
              lines.splice(endIdx, 0, `${indent}],`);
              lines.splice(endIdx + 1, 0, `      contentHi: [`);
              lines.splice(endIdx + 2, 0, ...hiLines);
              
              modified = true;
              count += hiItems.length;
              console.log(`    ✓ Added ${hiItems.length} Hindi translations`);
              
              i = endIdx + hiLines.length + 2;
              continue;
            }
          }
        }
      }
      
      i++;
    }

    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
      console.log(`  ✅ ${count} translations added`);
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
  console.log('⚡ TRANSLATE CONTENT ARRAYS TO HINDI');
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
  console.log(`📊 Files: ${processed}/${files.length}`);
  console.log(`⏱️  Time: ${time}s`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
