#!/usr/bin/env node

/**
 * Optimize career data by splitting into smaller chunks
 * Reduces initial load time significantly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

/**
 * Extract career data from TypeScript files
 */
function extractCareerData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the export statement
  const match = content.match(/export const (\w+) = ({[\s\S]*?});/);
  if (!match) return null;

  const [, varName, dataStr] = match;
  
  try {
    // Use Function constructor to safely evaluate the object
    const data = eval(`(${dataStr})`);
    return { varName, data };
  } catch (e) {
    console.warn(`Failed to parse ${filePath}:`, e.message);
    return null;
  }
}

/**
 * Split large career data into sections
 */
function splitCareerData(data) {
  if (!data.guideSections) return { main: data };

  const sections = {};
  const mainData = { ...data };
  
  // Extract sections into separate objects
  if (Array.isArray(data.guideSections)) {
    data.guideSections.forEach((section, idx) => {
      sections[`section_${idx}`] = section;
    });
    delete mainData.guideSections;
  }

  return { main: mainData, sections };
}

/**
 * Create optimized career data structure
 */
async function optimizeCareerData() {
  console.log('🚀 Optimizing career data...\n');

  const dataDir = path.join(rootDir, 'app/data');
  const outputDir = path.join(rootDir, 'public/data/careers');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('UpdateData.ts'));
  const stats = {
    totalFiles: files.length,
    optimized: 0,
    totalSize: 0,
    optimizedSize: 0,
    careers: {}
  };

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const careerName = file.replace('UpdateData.ts', '');
    
    const extracted = extractCareerData(filePath);
    if (!extracted) continue;

    const { data } = extracted;
    const originalSize = JSON.stringify(data).length;

    // Split data
    const split = splitCareerData(data);
    
    // Create career directory
    const careerDir = path.join(outputDir, careerName);
    if (!fs.existsSync(careerDir)) {
      fs.mkdirSync(careerDir, { recursive: true });
    }

    // Write main data
    fs.writeFileSync(
      path.join(careerDir, 'main.json'),
      JSON.stringify(split.main)
    );

    // Write sections if any
    if (Object.keys(split.sections).length > 0) {
      Object.entries(split.sections).forEach(([sectionName, sectionData]) => {
        fs.writeFileSync(
          path.join(careerDir, `${sectionName}.json`),
          JSON.stringify(sectionData)
        );
      });
    }

    const optimizedSize = JSON.stringify(split).length;
    stats.careers[careerName] = {
      originalSize,
      optimizedSize,
      sections: Object.keys(split.sections).length,
      reduction: ((1 - optimizedSize / originalSize) * 100).toFixed(2) + '%'
    };

    stats.totalSize += originalSize;
    stats.optimizedSize += optimizedSize;
    stats.optimized++;

    console.log(`✅ ${careerName}`);
  }

  // Write stats
  const statsFile = path.join(rootDir, 'career_optimization_stats.json');
  fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));

  console.log(`\n✨ Optimization complete!`);
  console.log(`📊 Stats:`);
  console.log(`   Files optimized: ${stats.optimized}/${stats.totalFiles}`);
  console.log(`   Original size: ${(stats.totalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Optimized size: ${(stats.optimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Reduction: ${((1 - stats.optimizedSize / stats.totalSize) * 100).toFixed(2)}%`);
}

optimizeCareerData().catch(console.error);
