import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import google from 'googlethis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categories = [
  "account_and_finance", "agriculture", "architecture_and_construction", "arts_and_design",
  "bio_science_and_research", "business_management", "education_and_training", "environment",
  "government_services", "health_science", "hospitality_and_tourism", "human_and_social_sciences",
  "information_technology", "legal_services", "logistics_and_transportation", "manufacturing",
  "marketing_and_advertising", "media_and_communication", "public_safety_and_security",
  "science_mathematics_engineering", "sports_and_physical_activities"
];

async function main() {
  const result = {};
  console.log(`Fetching ${categories.length} category background images...`);
  
  for (const category of categories) {
    try {
      // Specifically looking for wide landscape wallpapers for backgrounds
      const query = `site:freepik.com wide landscape background flat vector cartoon illustration representing ${category.replace(/_/g, ' ')}`;
      const images = await google.image(query, { safe: false });
      
      let url = null;
      for (const img of images) {
        if (img.url && !img.url.startsWith('data:') && img.url.includes('freepik.com') && (img.url.includes('.jpg') || img.url.includes('.png'))) {
          url = img.url;
          break;
        }
      }
      
      if (!url) {
        const fallBackQuery = `wide desktop wallpaper background flat illustration ${category.replace(/_/g, ' ')}`;
        const fbImages = await google.image(fallBackQuery, { safe: false });
        url = fbImages[0]?.url || `https://loremflickr.com/1920/1080/flat,illustration,cartoon,${category.replace(/_/g, '-')},vector?lock=${category.length}`;
      }
      
      result[category] = url;
      console.log(`[SUCCESS] ${category}`);
    } catch (e) {
      console.log(`[ERROR] ${category}`);
      result[category] = `https://loremflickr.com/1920/1080/flat,illustration,cartoon,${category.replace(/_/g, '-')},vector?lock=${category.length + 50}`;
    }
    await new Promise(r => setTimeout(r, 1500));
  }

  const outputPath = path.join(__dirname, 'app', 'data', 'categoryBackgroundsMap.js');
  const code = `export const categoryBackgroundsMap = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outputPath, code);
  console.log('\n--- FINISHED ---');
  console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);
