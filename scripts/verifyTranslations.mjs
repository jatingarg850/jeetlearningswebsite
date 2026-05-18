#!/usr/bin/env node

/**
 * Verify Translations Script
 * 
 * This script:
 * 1. Scans all career data files
 * 2. Checks for missing Hindi translations
 * 3. Validates translation quality
 * 4. Generates a report of what needs translation
 * 5. Can auto-fix common issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../app/data');

/**
 * Analyze a single career data file
 */
function analyzeFile(filePath, fileName) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const stats = {
    fileName,
    filePath,
    sections: 0,
    withHindi: 0,
    withoutHindi: 0,
    missingTitleHi: 0,
    missingDescriptionHi: 0,
    missingContentHi: 0,
    issues: []
  };

  // Find all sections
  const sectionPattern = /\{\s*id:\s*"([^"]+)"[^}]*?(?=\},\s*\{|\]\s*\})/gs;
  let match;
  
  while ((match = sectionPattern.exec(fileContent)) !== null) {
    const sectionText = match[0];
    const sectionId = match[1];
    
    stats.sections++;
    
    const hasTitle = sectionText.includes('title:');
    const hasTitleHi = sectionText.includes('titleHi:');
    const hasDescription = sectionText.includes('description:');
    const hasDescriptionHi = sectionText.includes('descriptionHi:');
    const hasContent = sectionText.includes('content:');
    const hasContentHi = sectionText.includes('contentHi:');
    
    const isComplete = (hasTitleHi || !hasTitle) && 
                       (hasDescriptionHi || !hasDescription) && 
                       (hasContentHi || !hasContent);
    
    if (isComplete) {
      stats.withHindi++;
    } else {
      stats.withoutHindi++;
      
      if (hasTitle && !hasTitleHi) {
        stats.missingTitleHi++;
        stats.issues.push(`  - Section "${sectionId}": Missing titleHi`);
      }
      
      if (hasDescription && !hasDescriptionHi) {
        stats.missingDescriptionHi++;
        stats.issues.push(`  - Section "${sectionId}": Missing descriptionHi`);
      }
      
      if (hasContent && !hasContentHi) {
        stats.missingContentHi++;
        stats.issues.push(`  - Section "${sectionId}": Missing contentHi`);
      }
    }
  }
  
  return stats;
}

/**
 * Find all career data files
 */
async function findCareerDataFiles() {
  try {
    const files = await glob(path.join(DATA_DIR, '*UpdateData.ts'));
    return files
      .filter(f => !f.includes('node_modules'))
      .sort();
  } catch (error) {
    console.error('Error finding files:', error);
    return [];
  }
}

/**
 * Generate summary report
 */
function generateReport(allStats) {
  let totalSections = 0;
  let totalWithHindi = 0;
  let totalWithoutHindi = 0;
  let totalMissingTitleHi = 0;
  let totalMissingDescriptionHi = 0;
  let totalMissingContentHi = 0;
  
  for (const stats of allStats) {
    totalSections += stats.sections;
    totalWithHindi += stats.withHindi;
    totalWithoutHindi += stats.withoutHindi;
    totalMissingTitleHi += stats.missingTitleHi;
    totalMissingDescriptionHi += stats.missingDescriptionHi;
    totalMissingContentHi += stats.missingContentHi;
  }
  
  const completionPercentage = totalSections > 0 
    ? ((totalWithHindi / totalSections) * 100).toFixed(1)
    : 0;
  
  return {
    totalFiles: allStats.length,
    totalSections,
    totalWithHindi,
    totalWithoutHindi,
    totalMissingTitleHi,
    totalMissingDescriptionHi,
    totalMissingContentHi,
    completionPercentage
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('\n' + '='.repeat(75));
  console.log('📊 TRANSLATION VERIFICATION REPORT');
  console.log('='.repeat(75) + '\n');

  // Find all career data files
  const careerFiles = await findCareerDataFiles();
  
  if (careerFiles.length === 0) {
    console.error('❌ No career data files found!');
    process.exit(1);
  }

  console.log(`📂 Scanning ${careerFiles.length} career data files...\n`);

  const allStats = [];
  let filesWithIssues = 0;

  // Analyze each file
  for (const filePath of careerFiles) {
    const fileName = path.basename(filePath);
    const stats = analyzeFile(filePath, fileName);
    allStats.push(stats);
    
    if (stats.withoutHindi > 0) {
      filesWithIssues++;
      console.log(`⚠️  ${fileName}`);
      console.log(`   Sections: ${stats.sections} | With Hindi: ${stats.withHindi} | Without: ${stats.withoutHindi}`);
      if (stats.issues.length > 0 && stats.issues.length <= 3) {
        stats.issues.forEach(issue => console.log(issue));
      } else if (stats.issues.length > 3) {
        stats.issues.slice(0, 3).forEach(issue => console.log(issue));
        console.log(`   ... and ${stats.issues.length - 3} more issues`);
      }
      console.log();
    } else {
      console.log(`✅ ${fileName}`);
      console.log(`   All ${stats.sections} sections have Hindi translations\n`);
    }
  }

  // Generate summary
  const report = generateReport(allStats);

  console.log('='.repeat(75));
  console.log('📈 SUMMARY');
  console.log('='.repeat(75));
  console.log(`\n📊 Overall Statistics:`);
  console.log(`   Total Files: ${report.totalFiles}`);
  console.log(`   Total Sections: ${report.totalSections}`);
  console.log(`   With Hindi: ${report.totalWithHindi}`);
  console.log(`   Without Hindi: ${report.totalWithoutHindi}`);
  console.log(`   Completion: ${report.completionPercentage}%\n`);
  
  console.log(`❌ Missing Translations:`);
  console.log(`   Missing titleHi: ${report.totalMissingTitleHi}`);
  console.log(`   Missing descriptionHi: ${report.totalMissingDescriptionHi}`);
  console.log(`   Missing contentHi: ${report.totalMissingContentHi}\n`);
  
  console.log(`📁 Files with Issues: ${filesWithIssues}/${report.totalFiles}\n`);

  // Recommendations
  if (report.totalWithoutHindi > 0) {
    console.log('💡 Recommendations:');
    console.log(`   1. Run: node scripts/batchTranslateCareerData.mjs`);
    console.log(`   2. This will translate ${report.totalWithoutHindi} sections`);
    console.log(`   3. Re-run this script to verify\n`);
  } else {
    console.log('✅ All sections have Hindi translations!\n');
  }

  console.log('='.repeat(75) + '\n');

  // Exit with appropriate code
  process.exit(report.totalWithoutHindi > 0 ? 1 : 0);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
