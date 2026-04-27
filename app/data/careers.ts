export const careerCategories = {
  account_and_finance: {
    name: "Account & Finance",
    careers: [
      "actuarial_science",
      "banking_and_related_services",
      "chartered_accountant",
      "company_secretary",
      "cost_accountant",
      "economics",
      "financial_analyst",
      "financial_and_investment_planning",
      "financial_risk_management",
    ],
  },
  agriculture: {
    name: "Agriculture",
    careers: [
      "agri_business_management",
      "agricultural_engineer",
      "agriculture_research",
      "animal_science",
      "apiculture",
      "aquaculture",
      "dairy_technology",
      "florist",
      "food_science",
      "horticulture",
      "poultry",
      "sericulture",
      "vertical_farming",
    ],
  },
  architecture_and_construction: {
    name: "Architecture & Construction",
    careers: [
      "architect",
      "construction",
      "maintenance_and_operation_management",
      "urban_planning_and_management",
    ],
  },
  arts_and_design: {
    name: "Arts & Design",
    careers: [
      "accessory_design",
      "animator",
      "cosmetology",
      "creative_writer",
      "fashion_designing",
      "fashion_technology",
      "fine_arts",
      "graphical_designing",
      "interior_designing",
      "interpreter_and_translator",
      "liberal_arts",
      "performing_arts",
      "photography",
      "product_designing",
      "sound_engineer",
      "website_designer",
      "youtuber",
    ],
  },
  bio_science_and_research: {
    name: "Bio Science & Research",
    careers: [
      "biochemistry",
      "bioinformatics",
      "biotechnology",
      "clinical_research",
      "fishery_biologist",
      "genetics",
      "microbiology",
      "physiology",
    ],
  },
  business_management: {
    name: "Business Management",
    careers: [
      "business_analytics",
      "business_financial_management",
      "business_operations_manager",
      "bpo",
      "fashion_management",
      "human_resources",
      "information_technology_management",
      "international_business",
      "project_management",
      "retail_management",
    ],
  },
  education_and_training: {
    name: "Education & Training",
    careers: [
      "corporate_trainer",
      "librarian_and_education_administration",
      "professor",
      "image_consultant",
      "school_teacher",
      "technical_trainer",
    ],
  },
  environment: {
    name: "Environment",
    careers: [
      "environmental_scientist",
      "forest_officer",
      "geology",
      "oceanographer",
      "wildlife_biologist",
    ],
  },
  government_services: {
    name: "Government Services",
    careers: [
      "civil_administrative_services",
      "indian_economic_services",
      "staff_selection_commission",
    ],
  },
  health_science: {
    name: "Health Science",
    careers: [
      "alternative_medicine",
      "audiologist",
      "dentist",
      "dietician",
      "general_physician",
      "homeopathy",
      "hospital_management",
      "medical_diagnostic_services",
      "medical_radiology_technician",
      "medical_transcription",
      "nurse_and_medical_assistant",
      "operation_theatre_technician",
      "optometry",
      "pharmacist",
      "public_healthcare_administration",
      "therapy_science",
    ],
  },
  hospitality_and_tourism: {
    name: "Hospitality & Tourism",
    careers: [
      "airhostess",
      "culinary_arts",
      "event_planner",
      "hotel_management",
      "travel_and_tourism",
      "wedding_planner",
    ],
  },
  human_and_social_sciences: {
    name: "Human & Social Sciences",
    careers: [
      "archaeologist",
      "anthropologist",
      "clinical_psychology",
      "geographer",
      "historian",
      "home_science",
      "mentor_and_coach",
      "political_scientist",
      "sociologist",
    ],
  },
  information_technology: {
    name: "Information Technology",
    careers: [
      "artificial_intelligence",
      "blockchain_engineer",
      "data_scientist",
      "electronics_and_communication",
      "ethical_hacking",
      "gis_expert",
      "internet_of_things",
      "it_business_analyst",
      "it_project_manager",
      "mobile_app_developer",
      "software_engineer",
      "software_testing_qa",
      "video_game_designer",
    ],
  },
  legal_services: {
    name: "Legal Services",
    careers: ["forensic_scientist", "lawyer", "judge"],
  },
  logistics_and_transportation: {
    name: "Logistics & Transportation",
    careers: [
      "aeronautical_engineer",
      "air_traffic_controller",
      "aviation_management",
      "automotive_design",
      "commercial_pilot",
      "merchant_navy_officer",
      "supply_chain_management",
    ],
  },
  manufacturing: {
    name: "Manufacturing",
    careers: [
      "industrial_engineering_management",
      "industrial_designer",
      "mechanical_engineer",
    ],
  },
  marketing_and_advertising: {
    name: "Marketing & Advertising",
    careers: [
      "advertising_and_communication",
      "digital_marketing",
      "entrepreneurship_and_management",
      "marketing",
      "sales_person",
      "visual_merchandiser",
    ],
  },
  media_and_communication: {
    name: "Media & Communication",
    careers: [
      "international_relations",
      "journalist",
      "mass_communication",
      "public_relations_officer",
    ],
  },
  public_safety_and_security: {
    name: "Public Safety & Security",
    careers: [
      "central_reserve_forces",
      "disaster_management",
      "indian_army",
      "indian_paramilitary_forces",
      "indian_air_force",
      "indian_navy",
      "indian_police",
      "indian_secret_services",
      "merchant_navy",
    ],
  },
  science_mathematics_engineering: {
    name: "Science, Mathematics & Engineering",
    careers: [
      "astronomer",
      "biomedical_engineer",
      "chemical_engineer",
      "engineering_and_technology",
      "mathematician",
      "nanotechnologist",
      "robotics_engineer",
      "statistician",
    ],
  },
  sports_and_physical_activities: {
    name: "Sports & Physical Activities",
    careers: [
      "physical_trainer",
      "sports_management",
      "sports_physiotherapist",
      "sports_person",
    ],
  },
};

export function getCategoryBySlug(slug: string) {
  return careerCategories[slug as keyof typeof careerCategories];
}

export function getAllCategories() {
  return Object.entries(careerCategories).map(([slug, data]) => ({
    slug,
    ...data,
  }));
}

export function formatCareerName(slug: string): string {
  return slug
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
