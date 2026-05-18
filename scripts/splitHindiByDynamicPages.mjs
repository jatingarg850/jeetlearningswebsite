#!/usr/bin/env node

/**
 * Split Hindi translations by dynamic pages
 * Each career and category gets its own translation file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Career categories and their careers
const careerCategories = {
  account_and_finance: [
    "actuarial_science", "banking_and_related_services", "chartered_accountant",
    "company_secretary", "cost_accountant", "economics", "financial_analyst",
    "financial_and_investment_planning", "financial_risk_management"
  ],
  agriculture: [
    "agri_business_management", "agricultural_engineer", "agriculture_research",
    "animal_science", "apiculture", "aquaculture", "dairy_technology", "florist",
    "food_science", "horticulture", "poultry", "sericulture", "vertical_farming"
  ],
  architecture_and_construction: [
    "architect", "construction", "maintenance_and_operation_management",
    "urban_planning_and_management"
  ],
  arts_and_design: [
    "accessory_design", "animator", "cosmetology", "creative_writer",
    "fashion_designing", "fashion_technology", "fine_arts", "graphical_designing",
    "interior_designing", "interpreter_and_translator", "liberal_arts",
    "performing_arts", "photography", "product_designing", "sound_engineer",
    "website_designer", "youtuber"
  ],
  bio_science_and_research: [
    "biochemistry", "bioinformatics", "biotechnology", "clinical_research",
    "fishery_biologist", "genetics", "microbiology", "physiology"
  ],
  business_management: [
    "business_analytics", "business_financial_management", "business_operations_manager",
    "bpo", "fashion_management", "human_resources", "information_technology_management",
    "international_business", "project_management", "retail_management"
  ],
  education_and_training: [
    "corporate_trainer", "librarian_and_education_administration", "professor",
    "image_consultant", "school_teacher", "technical_trainer"
  ],
  environment: [
    "environmental_scientist", "forest_officer", "geology", "oceanographer",
    "wildlife_biologist"
  ],
  government_services: [
    "civil_administrative_services", "indian_economic_services",
    "staff_selection_commission"
  ],
  health_science: [
    "alternative_medicine", "audiologist", "dentist", "dietician",
    "general_physician", "homeopathy", "hospital_management",
    "medical_diagnostic_services", "medical_radiology_technician",
    "medical_transcription", "nurse_and_medical_assistant",
    "operation_theatre_technician", "optometry", "pharmacist",
    "public_healthcare_administration", "therapy_science"
  ],
  hospitality_and_tourism: [
    "airhostess", "culinary_arts", "event_planner", "hotel_management",
    "travel_and_tourism", "wedding_planner"
  ],
  human_and_social_sciences: [
    "archaeologist", "anthropologist", "clinical_psychology", "geographer",
    "historian", "home_science", "mentor_and_coach", "political_scientist",
    "sociologist"
  ],
  information_technology: [
    "artificial_intelligence", "blockchain_engineer", "data_scientist",
    "electronics_and_communication", "ethical_hacking", "gis_expert",
    "internet_of_things", "it_business_analyst", "it_project_manager",
    "mobile_app_developer", "software_engineer", "software_testing_qa",
    "video_game_designer"
  ],
  legal_services: ["forensic_scientist", "lawyer", "judiciary"],
  logistics_and_transportation: [
    "aeronautical_engineer", "air_traffic_controller", "aviation_management",
    "automotive_design", "commercial_pilot", "merchant_navy_officer",
    "supply_chain_management"
  ],
  manufacturing: [
    "industrial_design", "industrial_engineering", "mechanical_engineering"
  ],
  marketing_and_advertising: [
    "advertising_and_communication", "digital_marketing",
    "entrepreneurship_and_management", "marketing", "sales_person",
    "visual_merchandiser"
  ],
  media_and_communication: [
    "international_relations", "journalist", "mass_communication",
    "public_relations_officer"
  ],
  public_safety_and_security: [
    "central_reserve_forces", "disaster_management", "indian_army",
    "indian_paramilitary_forces", "indian_air_force", "indian_navy",
    "indian_police", "indian_secret_services", "merchant_navy"
  ],
  science_mathematics_engineering: [
    "astronomer", "biomedical_engineer", "chemical_engineer",
    "engineering_and_technology", "mathematician", "nanotechnologist",
    "robotics_engineer", "statistician"
  ],
  sports_and_physical_activities: [
    "physical_trainer", "sports_management", "sports_physiotherapist",
    "sports_person"
  ]
};

// Common translations for all pages
const commonKeys = [
  'Home', 'Career Path', 'DMIT', 'Psychometric test', 'Resources', 'Blog', 'Contact',
  'Book Consultation', 'Loading...', 'Error', 'Success', 'Close', 'Cancel', 'Submit',
  'Learn More', 'Read More', 'Get Started', 'Welcome', 'Back', 'Next'
];

// Career detail page translations
const careerDetailKeys = [
  'Overview', 'Eligibility', 'Qualifications', 'Skills Required', 'Job Prospects',
  'Salary Range', 'Career Path', 'Day in Life', 'Institutions', 'FAQ', 'Related Careers',
  'Next Steps', 'Apply Now', 'Learn More About This Career', 'Duration', 'Fees',
  'Entrance Exam', 'Top Colleges', 'Job Roles', 'Companies', 'Salary', 'Growth',
  'Scope', 'Opportunities', 'Challenges', 'Future Trends', 'Why Choose This',
  'Success Stories', 'Expert Tips', 'Resources', 'Download Brochure'
];

// Category page translations
const categoryKeys = [
  'Careers', 'Explore', 'View Details', 'Overview', 'Eligibility', 'Skills Required',
  'Job Prospects', 'Salary Range', 'Learn More', 'Read More', 'Back', 'Next',
  'Filter', 'Sort', 'Search', 'All Careers', 'Popular', 'New'
];

function loadHindiTranslations() {
  const filePath = path.join(rootDir, 'app/data/translations/hi.json');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function createTranslations(allTranslations, keys) {
  const result = {};
  keys.forEach(key => {
    if (allTranslations[key]) {
      result[key] = allTranslations[key];
    }
  });
  return result;
}

async function splitHindiByDynamicPages() {
  console.log('🔄 Splitting Hindi translations by dynamic pages...\n');

  const allTranslations = loadHindiTranslations();
  if (!allTranslations) return;

  const outputDir = path.join(rootDir, 'public/translations');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const stats = {
    categories: {},
    careers: {},
    totalFiles: 0
  };

  // Create category translation files
  console.log('📁 Creating category translations...');
  for (const [category, careers] of Object.entries(careerCategories)) {
    const keys = [...commonKeys, ...categoryKeys, category];
    const translations = createTranslations(allTranslations, keys);
    const file = path.join(outputDir, `hi-category-${category}.json`);
    
    fs.writeFileSync(file, JSON.stringify(translations));
    stats.categories[category] = Object.keys(translations).length;
    stats.totalFiles++;
    
    console.log(`  ✅ hi-category-${category}.json (${Object.keys(translations).length} keys)`);
  }

  // Create career translation files
  console.log('\n📁 Creating career translations...');
  let careerCount = 0;
  for (const [category, careers] of Object.entries(careerCategories)) {
    for (const career of careers) {
      const keys = [...commonKeys, ...careerDetailKeys, career, category];
      const translations = createTranslations(allTranslations, keys);
      const file = path.join(outputDir, `hi-career-${career}.json`);
      
      fs.writeFileSync(file, JSON.stringify(translations));
      stats.careers[career] = Object.keys(translations).length;
      stats.totalFiles++;
      careerCount++;
      
      if (careerCount % 10 === 0) {
        console.log(`  ✅ Created ${careerCount} career translation files...`);
      }
    }
  }

  // Create index
  console.log('\n📁 Creating index...');
  const indexFile = path.join(outputDir, 'hi-dynamic-index.json');
  const index = {
    language: 'hi',
    type: 'dynamic-pages',
    categories: Object.keys(careerCategories),
    totalCareers: Object.values(careerCategories).reduce((sum, arr) => sum + arr.length, 0),
    totalFiles: stats.totalFiles,
    createdAt: new Date().toISOString(),
    stats: stats
  };
  fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));

  console.log(`\n✨ Dynamic page translation splitting complete!`);
  console.log(`📊 Summary:`);
  console.log(`   Categories: ${Object.keys(careerCategories).length}`);
  console.log(`   Careers: ${Object.values(careerCategories).reduce((sum, arr) => sum + arr.length, 0)}`);
  console.log(`   Total files: ${stats.totalFiles}`);
  console.log(`📁 Output: ${outputDir}`);
}

splitHindiByDynamicPages().catch(console.error);
