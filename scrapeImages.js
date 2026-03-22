import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import google from 'googlethis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// A condensed list of the 250+ careers
const careersList = [
  "actuarial_science", "banking_and_related_services", "chartered_accountant", "company_secretary", "cost_accountant", "economics", "financial_analyst", "financial_and_investment_planning", "financial_risk_management",
  "agri_business_management", "agricultural_engineer", "agriculture_research", "animal_science", "apiculture", "aquaculture", "dairy_technology", "florist", "food_science", "horticulture", "poultry", "sericulture", "vertical_farming",
  "architect", "construction", "maintenance_and_operation_management", "urban_planning_and_management",
  "accessory_design", "animator", "cosmetology", "creative_writer", "fashion_designing", "fashion_technology", "fine_arts", "graphical_designing", "interior_designing", "interpreter_and_translator", "liberal_arts", "performing_arts", "photography", "product_designing", "sound_engineer", "website_designer", "youtuber",
  "biochemistry", "bioinformatics", "biotechnology", "clinical_research", "fishery_biologist", "genetics", "microbiology", "physiology",
  "business_analytics", "business_financial_management", "business_operation_manager", "bpo", "fashion_management", "human_resources", "information_technology_management", "international_business", "project_management", "retail_management",
  "corporate_trainer", "librarian_and_education_administration", "professor", "image_consultant", "school_teacher", "technical_trainer",
  "environmental_scientist", "forest_officer", "geology", "oceanographer", "wildlife_biologist",
  "civil_administrative_services", "indian_economic_services", "staff_selection_commission",
  "alternative_medicine", "audiologist", "dentist", "dietician", "general_physician", "homeopathy", "hospital_management", "medical_diagnostic_services", "medical_radiology_technician", "medical_transcription", "nurse_and_medical_assistant", "operation_theatre_technician", "optometry", "pharmacist", "public_healthcare_administration", "therapy_science",
  "airhostess", "culinary_arts", "event_planner", "hotel_management", "travel_and_tourism", "wedding_planner",
  "archaeologist", "anthropologist", "clinical_psychology", "geographer", "historian", "home_science", "mentor_and_coach", "political_scientist", "sociology",
  "artificial_intelligence", "block_chain_engineer", "data_scientist", "electronics_and_communication", "ethical_hacking", "gis_expert", "internet_of_things_iot", "it_business_analyst", "it_project_manager", "mobile_app_developer", "software_engineer", "software_testing_quality_assurance", "video_game_designer",
  "forensic_scientist", "lawyer", "judge",
  "aeronautical_engineer", "air_traffic_controller", "aviation_management", "automotive_design", "commercial_pilot", "merchant_navy_officer", "supply_chain_management",
  "industrial_engineering_management", "industrial_designer", "mechanical_engineer",
  "advertising_and_communication", "digital_marketing", "entrepreneurship_and_management", "marketing", "sales_person", "visual_merchandiser",
  "international_relations", "journalist", "mass_communication", "public_relations_officer",
  "central_reserve_forces", "disaster_management", "indian_armed_forces", "indian_police", "merchant_navy",
  "astronomer", "biomedical_engineer", "chemical_engineer", "engineering_and_technology", "mathematician", "nanotechnologist", "robotics_engineer", "statistician",
  "physical_trainer", "sports_management", "sports_person"
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const result = {};
  console.log(`Fetching ${careersList.length} images...`);
  
  // Create chunks of 10 to avoid blasting Google in one go
  const chunkSize = 15;
  for (let i = 0; i < careersList.length; i += chunkSize) {
    const chunk = careersList.slice(i, i + chunkSize);
    
    await Promise.all(chunk.map(async (career) => {
      try {
        const query = `site:freepik.com flat vector cartoon illustration representing ${career.replace(/_/g, ' ')}`;
        const images = await google.image(query, { safe: false });
        
        let url = null;
        for (const img of images) {
          if (img.url && !img.url.startsWith('data:') && img.url.includes('freepik.com') && (img.url.includes('.jpg') || img.url.includes('.png'))) {
            url = img.url;
            break;
          }
        }
        
        // Fallback search if freepik fails
        if (!url) {
          const fbQuery = `flat vector cartoon illustration ${career.replace(/_/g, ' ')} job`;
          const fbImages = await google.image(fbQuery, { safe: false });
          url = fbImages[0]?.url || `https://loremflickr.com/600/400/flat,illustration,cartoon,${career.replace(/_/g, '-')},vector?lock=${career.length}`;
        }
        
        result[career] = url;
        console.log(`[SUCCESS] ${career}`);
      } catch (e) {
        console.log(`[ERROR] ${career}`);
        result[career] = `https://loremflickr.com/600/400/flat,illustration,cartoon,${career.replace(/_/g, '-')},vector?lock=${career.length + 50}`;
      }
    }));
    
    // Slight pause between chunks
    await sleep(2000);
  }

  const outputPath = path.join(__dirname, 'app', 'data', 'careerImagesMap.js');
  const code = `export const careerImagesMap = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outputPath, code);
  console.log('\n--- FINISHED ---');
  console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);
