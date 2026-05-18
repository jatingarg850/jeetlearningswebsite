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
let stats = { files: 0, sections: 0, translations: 0, time: 0 };

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

    // Find all sections with id, title, description, content
    const sectionRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?(?=\},\s*\{|\]\s*\})/g;
    let match;

    while ((match = sectionRegex.exec(content)) !== null) {
      const section = match[0];
      
      // Skip if already has Hindi
      if (section.includes('titleHi') || section.includes('contentHi')) continue;

      let updated = section;
      let changed = false;

      // Translate title
      const titleMatch = section.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
        const en = titleMatch[1];
        const hi = await translate(en);
        if (hi && hi !== en) {
          updated = updated.replace(
            `title: "${en}"`,
            `title: "${en}",\n      titleHi: "${hi}"`
          );
          changed = true;
          count++;
          console.log(`    ✓ Title: "${en.substring(0, 40)}..."`);
        }
        await sleep(50);
      }

      // Translate description
      const descMatch = section.match(/description:\s*"([^"]+)"/);
      if (descMatch) {
        const en = descMatch[1];
        const hi = await translate(en);
        if (hi && hi !== en) {
          updated = updated.replace(
            `description: "${en}"`,
            `description: "${en}",\n      descriptionHi: "${hi}"`
          );
          changed = true;
          count++;
          console.log(`    ✓ Description: "${en.substring(0, 40)}..."`);
        }
        await sleep(50);
      }

      // Translate content array - handle both formats
      const contentMatch = section.match(/content:\s*\[([\s\S]*?)\]/);
      if (contentMatch && !section.includes('contentHi')) {
        const contentStr = contentMatch[1];
        
        // Extract all quoted strings
        const items = contentStr.match(/"([^"]+)"/g) || [];
        
        if (items.length > 0) {
          const enItems = items.map(i => i.replace(/^"|"$/g, ''));
          const hiItems = [];
          
          for (const item of enItems) {
            const hi = await translate(item);
            hiItems.push(hi || item);
            await sleep(50);
          }

          // Check if all translations are different
          const allDifferent = hiItems.every((h, i) => h !== enItems[i]);
          
          if (allDifferent && hiItems.length === enItems.length) {
            // Reconstruct the content array with Hindi
            const hiStr = hiItems.map(i => `        "${i}"`).join(',\n');
            
            updated = updated.replace(
              /content:\s*\[([\s\S]*?)\]/,
              `content: [\n${contentStr.trim()}\n      ],\n      contentHi: [\n${hiStr}\n      ]`
            );
            changed = true;
            count += hiItems.length;
            console.log(`    ✓ Content: ${hiItems.length} items translated`);
          }
        }
      }

      if (changed) {
        content = content.replace(section, updated);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ ${count} translations added`);
      stats.translations += count;
      stats.sections++;
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
  console.log('⚡ FAST TRANSLATION - All Career Data to Hindi');
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
  console.log(`📈 Translations: ${stats.translations}`);
  console.log(`⏱️  Time: ${time}s`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
