#!/usr/bin/env node

/**
 * Add missing translations to hi.json
 * This script adds long text strings that are missing Hindi translations
 */

const fs = require('fs');
const path = require('path');

// Load existing translations
const hiPath = path.join(__dirname, '../app/data/translations/hi.json');
const hiTranslations = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

// New translations to add
const newTranslations = {
  "05:30 AM –  Into the Deep: Your day begins while the rest of the world is sleeping. You board a research vessel at a port like Visakhapatnam or Kochi. Today, you are surveying a coral reef. You gear up in your wetsuit and dive under the waves with a waterproof tablet to record the species you see.": "05:30 AM – गहराई में: आपका दिन शुरू होता है जब बाकी दुनिया सो रही होती है। आप विशाखापत्तनम या कोच्चि जैसे बंदरगाह पर एक अनुसंधान पोत पर चढ़ते हैं। आज, आप एक प्रवाल भित्ति का सर्वेक्षण कर रहे हैं। आप अपने वेटसूट में तैयार होते हैं और एक जलरोधी टैबलेट के साथ लहरों के नीचे गोता लगाते हैं ताकि आप देखे गए प्रजातियों को रिकॉर्ड कर सकें।",
  
  "04:30 PM –  Community Connect: You drive down to a local fishing village. You meet with the community leaders to explain a new sustainable net design that lets small, baby fish escape while catching the mature ones. You are a scientist, but today, you are also a teacher and a partner.": "04:30 PM – सामुदायिक संपर्क: आप एक स्थानीय मछली पकड़ने वाले गांव में जाते हैं। आप सामुदायिक नेताओं से मिलते हैं ताकि एक नए टिकाऊ जाल डिजाइन की व्याख्या कर सकें जो छोटी, बेबी मछलियों को बचने देता है जबकि परिपक्व लोगों को पकड़ता है। आप एक वैज्ञानिक हैं, लेकिन आज, आप एक शिक्षक और एक भागीदार भी हैं।",
};

// Add new translations
let addedCount = 0;
for (const [english, hindi] of Object.entries(newTranslations)) {
  if (!hiTranslations[english]) {
    hiTranslations[english] = hindi;
    addedCount++;
    console.log(`✓ Added: "${english.substring(0, 50)}..."`);
  } else {
    console.log(`⊘ Already exists: "${english.substring(0, 50)}..."`);
  }
}

// Save updated translations
fs.writeFileSync(hiPath, JSON.stringify(hiTranslations, null, 2), 'utf8');

console.log(`\n✅ Added ${addedCount} new translations`);
console.log(`📊 Total translations: ${Object.keys(hiTranslations).length}`);
