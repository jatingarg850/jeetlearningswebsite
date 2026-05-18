#!/usr/bin/env node

/**
 * Split Hindi translations by page/route
 * Each page gets ALL translations - instant lookup
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

function loadHindiTranslations() {
  const filePath = path.join(rootDir, 'app/data/translations/hi.json');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

async function splitHindiByPage() {
  console.log('🔄 Splitting Hindi translations by page...\n');

  const allTranslations = loadHindiTranslations();
  if (!allTranslations) return;

  const outputDir = path.join(rootDir, 'public/translations');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Pages that will get ALL translations
  const pages = [
    'home', 'navbar', 'footer', 'category', 'career-detail',
    'dmit', 'psychometric', 'blog', 'contact', 'resources', 'career-path', 'admin'
  ];

  // Write all translations to each page file
  for (const page of pages) {
    const pageFile = path.join(outputDir, `hi-${page}.json`);
    fs.writeFileSync(pageFile, JSON.stringify(allTranslations));
    console.log(`✅ hi-${page}.json (${Object.keys(allTranslations).length} keys)`);
  }

  // Create index
  const indexFile = path.join(outputDir, 'hi-index.json');
  const index = {
    language: 'hi',
    pages: pages,
    totalKeys: Object.keys(allTranslations).length,
    createdAt: new Date().toISOString(),
    pageStats: pages.reduce((acc, page) => {
      acc[page] = Object.keys(allTranslations).length;
      return acc;
    }, {})
  };
  fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));
  console.log(`\n✅ hi-index.json\n`);

  console.log('✨ Hindi translation splitting complete!');
  console.log(`📁 Output: ${outputDir}`);
  console.log(`📊 Total keys per page: ${Object.keys(allTranslations).length}`);
  console.log(`📄 Pages: ${pages.length}`);
}

splitHindiByPage().catch(console.error);
