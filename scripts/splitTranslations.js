#!/usr/bin/env node

/**
 * Script to split hi.json into 100 parts for faster loading
 * Creates indexed chunks that can be loaded on-demand
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HI_FILE = path.join(__dirname, "../app/data/translations/hi.json");
const CHUNKS_DIR = path.join(__dirname, "../app/data/translations/hi-chunks");
const INDEX_FILE = path.join(__dirname, "../app/data/translations/hi-index.json");

// Load translations
const hiTranslations = JSON.parse(fs.readFileSync(HI_FILE, "utf-8"));

console.log("🔍 Analyzing translations...\n");

const entries = Object.entries(hiTranslations);
const totalEntries = entries.length;
const chunkSize = Math.ceil(totalEntries / 100);

console.log(`📊 Statistics:`);
console.log(`   Total entries: ${totalEntries}`);
console.log(`   Chunk size: ${chunkSize}`);
console.log(`   Number of chunks: 100\n`);

// Create chunks directory
if (!fs.existsSync(CHUNKS_DIR)) {
  fs.mkdirSync(CHUNKS_DIR, { recursive: true });
  console.log(`📁 Created directory: ${CHUNKS_DIR}\n`);
}

// Create index
const index = {
  version: "1.0",
  totalEntries,
  chunkSize,
  chunks: [],
  createdAt: new Date().toISOString(),
};

console.log("✂️  Splitting translations into 100 chunks...\n");

// Split into chunks
for (let i = 0; i < 100; i++) {
  const start = i * chunkSize;
  const end = Math.min(start + chunkSize, totalEntries);
  const chunkEntries = entries.slice(start, end);

  if (chunkEntries.length === 0) break;

  const chunk = Object.fromEntries(chunkEntries);
  const chunkFile = path.join(CHUNKS_DIR, `chunk-${String(i).padStart(3, "0")}.json`);

  fs.writeFileSync(chunkFile, JSON.stringify(chunk, null, 2), "utf-8");

  // Get first and last keys for index
  const firstKey = chunkEntries[0][0];
  const lastKey = chunkEntries[chunkEntries.length - 1][0];

  index.chunks.push({
    id: i,
    file: `chunk-${String(i).padStart(3, "0")}.json`,
    entries: chunkEntries.length,
    firstKey,
    lastKey,
  });

  const progress = `[${i + 1}/100]`;
  console.log(`${progress} ✅ Chunk ${i} (${chunkEntries.length} entries)`);
}

// Save index
fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2), "utf-8");

console.log(`\n✅ Split complete!`);
console.log(`📄 Index saved to: ${INDEX_FILE}`);
console.log(`📁 Chunks saved to: ${CHUNKS_DIR}`);
console.log(`\n📈 Summary:`);
console.log(`   Total chunks: ${index.chunks.length}`);
console.log(`   Total entries: ${index.chunks.reduce((sum, c) => sum + c.entries, 0)}`);
console.log(`   Average chunk size: ${Math.round(totalEntries / index.chunks.length)} entries`);
