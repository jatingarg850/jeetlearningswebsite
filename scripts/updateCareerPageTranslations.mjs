#!/usr/bin/env node

/**
 * Update CareerPageDynamic to use dynamic translations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const filePath = path.join(rootDir, 'app/[category]/[career]/CareerPageDynamic.tsx');

let content = fs.readFileSync(filePath, 'utf-8');

// Replace TranslatedText with t() function calls
// Pattern 1: <TranslatedText as="span">text</TranslatedText>
content = content.replace(/<TranslatedText as="span">([^<]+)<\/TranslatedText>/g, '{t("$1")}');

// Pattern 2: <TranslatedText>text</TranslatedText>
content = content.replace(/<TranslatedText>([^<]+)<\/TranslatedText>/g, '{t("$1")}');

// Pattern 3: <TranslatedText as="span">{variable}</TranslatedText>
content = content.replace(/<TranslatedText as="span">\{([^}]+)\}<\/TranslatedText>/g, '{t($1)}');

// Pattern 4: <TranslatedText>{variable}</TranslatedText>
content = content.replace(/<TranslatedText>\{([^}]+)\}<\/TranslatedText>/g, '{t($1)}');

fs.writeFileSync(filePath, content);

console.log('✅ Updated CareerPageDynamic.tsx to use dynamic translations');
