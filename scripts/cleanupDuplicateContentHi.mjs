#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../app/data');

function cleanupFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n📄 ${fileName}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Remove duplicate contentHi entries - keep only the first one
    // Pattern: contentHi: [...], followed by more contentHi: [...]
    content = content.replace(/,\n\s*contentHi:\s*\[[\s\S]*?\](?=,\n\s*contentHi:)/g, '');
    
    // Also remove any contentHi that appears multiple times in a row
    let prevLength = 0;
    while (prevLength !== content.length) {
      prevLength = content.length;
      content = content.replace(/contentHi:\s*\[[\s\S]*?\],\n\s*contentHi:/g, 'contentHi:');
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Cleaned up duplicates`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`  ❌ ${error.message}`);
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
  console.log('🧹 CLEANUP DUPLICATE contentHi ENTRIES');
  console.log('='.repeat(70));

  const files = getFiles(DATA_DIR);

  if (files.length === 0) {
    console.error('❌ No files found!');
    process.exit(1);
  }

  console.log(`📊 Found ${files.length} files\n`);

  let cleaned = 0;

  for (let i = 0; i < files.length; i++) {
    const result = cleanupFile(files[i]);
    if (result) cleaned++;
    console.log(`  [${i + 1}/${files.length}]`);
  }

  console.log('\n' + '='.repeat(70));
  console.log('✅ DONE!');
  console.log('='.repeat(70));
  console.log(`📊 Files cleaned: ${cleaned}/${files.length}`);
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
