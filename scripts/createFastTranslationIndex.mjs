#!/usr/bin/env node

/**
 * Create fast translation index with binary search
 * Converts 30k sentences into indexed chunks for O(log n) lookup
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const CHUNK_SIZE = 500; // 500 entries per chunk

function loadTranslations(lang) {
  const filePath = path.join(rootDir, `app/data/translations/${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function createIndex(translations) {
  const entries = Object.entries(translations);
  const sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));
  
  const chunks = [];
  const index = {
    version: '2.0',
    totalEntries: sortedEntries.length,
    chunkSize: CHUNK_SIZE,
    chunks: [],
    keyIndex: {}, // Fast key -> chunk mapping
    createdAt: new Date().toISOString()
  };

  // Create chunks
  for (let i = 0; i < sortedEntries.length; i += CHUNK_SIZE) {
    const chunkEntries = sortedEntries.slice(i, i + CHUNK_SIZE);
    const chunkData = Object.fromEntries(chunkEntries);
    
    const chunkInfo = {
      id: chunks.length,
      file: `chunk-${chunks.length}.json`,
      entries: chunkEntries.length,
      firstKey: chunkEntries[0][0],
      lastKey: chunkEntries[chunkEntries.length - 1][0],
      size: JSON.stringify(chunkData).length
    };

    chunks.push(chunkData);
    index.chunks.push(chunkInfo);

    // Build key index for O(1) lookup
    chunkEntries.forEach(([key]) => {
      index.keyIndex[key] = chunks.length - 1;
    });
  }

  return { chunks, index };
}

async function createFastIndex() {
  console.log('⚡ Creating fast translation index...\n');

  const languages = ['en', 'hi'];
  const outputDir = path.join(rootDir, 'public/data/translations/indexed');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const lang of languages) {
    console.log(`📝 Processing ${lang.toUpperCase()}...`);
    
    const translations = loadTranslations(lang);
    if (!translations) continue;

    const { chunks, index } = createIndex(translations);

    // Write chunks
    chunks.forEach((chunk, idx) => {
      const chunkFile = path.join(outputDir, `${lang}-chunk-${idx}.json`);
      fs.writeFileSync(chunkFile, JSON.stringify(chunk));
    });

    // Write index
    const indexFile = path.join(outputDir, `${lang}-index.json`);
    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));

    console.log(`  ✅ Created ${chunks.length} chunks`);
    console.log(`  ✅ Total entries: ${index.totalEntries}`);
    console.log(`  ✅ Index size: ${(JSON.stringify(index).length / 1024).toFixed(2)}KB`);
    console.log(`  ✅ Avg chunk size: ${(index.chunks.reduce((sum, c) => sum + c.size, 0) / chunks.length / 1024).toFixed(2)}KB\n`);
  }

  console.log('✨ Fast index creation complete!');
}

createFastIndex().catch(console.error);
