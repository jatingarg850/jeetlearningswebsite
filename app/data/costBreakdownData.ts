// Cost Breakdown Data for Different Careers

export interface CostItem {
  category: string;
  amount: string;
  description: string;
  icon: string;
  color: string;
  details?: string[];
}

// ─── ACTUARIAL SCIENCE ───────────────────────────────────────────
export const actuarialScienceCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹5,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IITs: ₹20,000-50,000 per year",
      "Central Universities (DU, BHU): ₹5,000-15,000 per year",
      "State Universities: ₹8,000-25,000 per year",
      "Includes lab fees, registration, and library charges",
      "Significantly cheaper than private institutions",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹1-3 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Amity University: ₹1.5-2.5 lakh per year",
      "VIT (Vellore): ₹1.2-2 lakh per year",
      "LPU (Lovely Professional): ₹1-1.8 lakh per year",
      "Manipal University: ₹1.3-2.2 lakh per year",
      "Includes all campus facilities and infrastructure",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹10,000-20,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹5,000-12,000 per month",
      "Food & Meals: ₹3,000-6,000 per month",
      "Transport & Travel: ₹1,000-2,000 per month",
      "Books & Study Materials: ₹1,000-2,000 per month",
      "Personal & Miscellaneous: ₹1,000-2,000 per month",
      "Higher in metros (Delhi, Mumbai, Bangalore)",
    ],
  },
  {
    category: "Professional Exams",
    amount: "₹50,000-1 Lakh",
    description: "ACET & actuarial papers",
    icon: "📝",
    color: "#6366F1",
    details: [
      "ACET Registration: Free (Class 12 students)",
      "Core Papers (CT1-CT8): ₹5,000-8,000 each",
      "Advanced Papers (CA1-CA3): ₹8,000-12,000 each",
      "Study Materials & Books: ₹20,000-30,000",
      "Online Coaching (Optional): ₹15,000-40,000",
      "Exam Attempt Fees: ₹3,000-5,000 per paper",
    ],
  },
  {
    category: "Coaching & Preparation",
    amount: "₹20,000-50,000",
    description: "Optional but recommended",
    icon: "👨‍🏫",
    color: "#EC4899",
    details: [
      "Online Coaching Platforms: ₹15,000-40,000",
      "Offline Coaching Classes: ₹25,000-60,000",
      "Mock Tests & Practice Papers: ₹5,000-10,000",
      "Study Groups & Mentorship: ₹5,000-15,000",
      "Not mandatory but increases success rate",
      "Many students prepare independently",
    ],
  },
  {
    category: "Miscellaneous",
    amount: "₹10,000-20,000",
    description: "Additional expenses",
    icon: "📚",
    color: "#8B5CF6",
    details: [
      "Laptop/Computer: ₹30,000-60,000 (one-time)",
      "Software Licenses (Excel, Python): ₹5,000-10,000",
      "Internet & Connectivity: ₹1,000-2,000 per month",
      "Stationery & Office Supplies: ₹2,000-5,000",
      "Health Insurance: ₹5,000-10,000 per year",
      "Miscellaneous: ₹5,000-10,000 per year",
    ],
  },
];

// ─── BIOCHEMISTRY ────────────────────────────────────────────────
export const biochemistryCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹5,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IITs: ₹20,000-50,000 per year",
      "Central Universities: ₹5,000-15,000 per year",
      "State Universities: ₹8,000-25,000 per year",
      "Lab fees included in tuition",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹1-3 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Amity University: ₹1.5-2.5 lakh per year",
      "VIT: ₹1.2-2 lakh per year",
      "LPU: ₹1-1.8 lakh per year",
    ],
  },
  {
    category: "Lab Equipment",
    amount: "₹20,000-40,000",
    description: "Lab coat, safety gear, instruments",
    icon: "🔬",
    color: "#06B6D4",
    details: [
      "Lab Coat & Safety Equipment: ₹3,000-5,000",
      "Gloves, Goggles, Masks: ₹2,000-3,000",
      "Personal Lab Instruments: ₹10,000-20,000",
      "Notebooks & Lab Manuals: ₹5,000-10,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹10,000-20,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹5,000-12,000 per month",
      "Food & Meals: ₹3,000-6,000 per month",
      "Transport: ₹1,000-2,000 per month",
      "Books & Materials: ₹1,000-2,000 per month",
    ],
  },
];

// ─── BIOINFORMATICS ──────────────────────────────────────────────
export const bioinformaticsCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹15,000-2.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "Central Universities: ₹15,000-50,000 per year",
      "IITs: ₹20,000-2.5 lakh per year",
      "State Universities: ₹10,000-30,000 per year",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹4-12 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "VIT: ₹4-6 lakh per year",
      "Manipal: ₹5-8 lakh per year",
      "Amity: ₹4-7 lakh per year",
    ],
  },
  {
    category: "Software & Tools",
    amount: "₹30,000-60,000",
    description: "Programming tools and licenses",
    icon: "💻",
    color: "#3B82F6",
    details: [
      "Python, R, Linux: Free",
      "Bioinformatics Software: ₹10,000-30,000",
      "Database Access: ₹5,000-15,000",
      "Cloud Computing Credits: ₹10,000-20,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹7,000-15,000 per month",
      "Food & Meals: ₹4,000-7,000 per month",
      "Transport: ₹1,500-2,500 per month",
      "Internet & Utilities: ₹2,000-3,000 per month",
    ],
  },
];

// ─── MICROBIOLOGY ────────────────────────────────────────────────
export const microbiologyCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹10,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "DU/BHU/Pune: ₹10,000-50,000 per year",
      "Central Universities: ₹8,000-30,000 per year",
      "State Universities: ₹5,000-20,000 per year",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹1.5-4.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Amity: ₹1.5-2.5 lakh per year",
      "VIT: ₹1.8-3 lakh per year",
      "LPU: ₹1.5-2.5 lakh per year",
    ],
  },
  {
    category: "Lab Supplies",
    amount: "₹15,000-30,000",
    description: "Cultures, media, equipment",
    icon: "🧫",
    color: "#EC4899",
    details: [
      "Lab Coat & Safety Gear: ₹3,000-5,000",
      "Petri Dishes & Media: ₹5,000-10,000",
      "Microscope Slides: ₹2,000-4,000",
      "Sterilization Equipment: ₹5,000-10,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹7,000-15,000 per month",
      "Food & Meals: ₹4,000-7,000 per month",
      "Transport: ₹1,500-2,500 per month",
      "Books & Materials: ₹1,500-2,500 per month",
    ],
  },
];

// ─── GENETICS ────────────────────────────────────────────────────
export const geneticsCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹10,000-1.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IISc/DU/BHU: ₹10,000-1.5 lakh per year",
      "Central Universities: ₹8,000-50,000 per year",
      "State Universities: ₹5,000-30,000 per year",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹5-15 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "VIT: ₹5-8 lakh per year",
      "Manipal: ₹6-10 lakh per year",
      "Amity: ₹5-9 lakh per year",
    ],
  },
  {
    category: "Research Equipment",
    amount: "₹25,000-50,000",
    description: "DNA sequencing, lab tools",
    icon: "🧬",
    color: "#8B5CF6",
    details: [
      "DNA Extraction Kits: ₹5,000-10,000",
      "PCR Equipment: ₹10,000-20,000",
      "Sequencing Supplies: ₹10,000-20,000",
      "Lab Instruments: ₹5,000-10,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹7,000-15,000 per month",
      "Food & Meals: ₹4,000-7,000 per month",
      "Transport: ₹1,500-2,500 per month",
      "Books & Research Materials: ₹2,000-3,000 per month",
    ],
  },
];

// ─── AGRICULTURE (GENERIC) ──────────────────────────────────────────
export const agricultureCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹15,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IARI/State Agri Universities: ₹15,000-40,000 per year",
      "Central Universities with Agri Depts: ₹8,000-20,000 per year",
      "Includes lab and field research fees",
      "Significantly cheaper due to government subsidies",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹1.5-3.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Doon Business School (Agri-Business): ₹2-3 lakh per year",
      "Lovely Professional University: ₹1.5-2 lakh per year",
      "Amity University: ₹1.8-3.5 lakh per year",
      "Includes all farm infrastructure and private lab access",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹10,000-20,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹5,000-12,000 per month",
      "Food & Meals: ₹3,000-6,000 per month",
      "Transport & Field Visits: ₹1,500-2,500 per month",
      "Books & Study Materials: ₹1,000-2,000 per month",
    ],
  },
  {
    category: "Equipment & Technical Tools",
    amount: "₹50,000-70,000",
    description: "One-time investment",
    icon: "💻",
    color: "#3B82F6",
    details: [
      "Laptop (for Agri-analytics/Design): ₹40,000-60,000",
      "Personal Field Equipment & Lab Wear: ₹5,000-8,000",
      "Software Subscriptions (Agri-GIS/Models): ₹2,000-5,000",
    ],
  },
];

// ─── ARTS & DESIGN (GENERIC) ───────────────────────────────────────
export const artsAndDesignCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹1.5-3.0 Lakh",
    description: "Annual tuition fees (NIFT/NID)",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "NIFT (All Campuses): ₹1.5-3.0 lakh per year",
      "NID (B.Des/M.Des): ₹2.0-3.5 lakh per year",
      "Includes studio and fundamental tool access",
      "Highly competitive entrance (GATE/NID DAT)",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹4.0-8.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Pearl Academy: ₹4.5-7.5 lakh per year",
      "Srishti Manipal: ₹4.0-6.0 lakh per year",
      "ISDI (Mumbai): ₹5.0-8.5 lakh per year",
      "Includes high-spec labs and industry networking",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in major cities (Delhi/Mumbai)",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/PG Rent: ₹8,000-15,000 per month",
      "Food & Utilities: ₹5,000-8,000 per month",
      "Local Commute (Metro): ₹2,000-3,000 per month",
    ],
  },
  {
    category: "Tools & Materials",
    amount: "₹80,000-1.5 Lakh",
    description: "One-time technical investment",
    icon: "💻",
    color: "#3B82F6",
    details: [
      "High-spec Laptop (Design/Animation): ₹80,000-1.2 lakh",
      "Fabrics/Gems/Wood/Raw Materials: ₹20,000-50,000 yearly",
      "Software (Adobe CC/Rhino/Maya): ₹10,000-20,000 yearly",
    ],
  },
];
// ─── BIOTECHNOLOGY ───────────────────────────────────────────────
export const biotechnologyCosts: CostItem[] = [
  {
    category: "Government (B.Tech/M.Sc)",
    amount: "₹50,000-1.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IITs/IISERs: ₹50,000-1.5 lakh per year",
      "Central Universities: ₹30,000-80,000 per year",
      "Includes specialized lab & consumable fees",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹4-10 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "VIT/Manipal: ₹4-6 lakh per year",
      "Jaypee/Amity: ₹3-5 lakh per year",
      "Includes high-spec biotech infrastructure",
    ],
  },
];

// ─── WILDLIFE BIOLOGIST ──────────────────────────────────────────
export const wildlifeBiologistCosts: CostItem[] = [
  {
    category: "Government Training",
    amount: "₹10,000-50,000",
    description: "Annual course fees at WII/NCBS",
    icon: "🐾",
    color: "#059669",
    details: [
      "Master's Programs: ₹10,000-30,000 per year",
      "Field Training: Usually subsidized",
    ],
  },
  {
    category: "Field Equipment",
    amount: "₹50,000-1.5 Lakh",
    description: "Binoculars, GPS, Trekking gear",
    icon: "🔭",
    color: "#B45309",
    details: [
      "Professional Binoculars: ₹20,000-40,000",
      "GPS/Field Tools: ₹30,000-60,000",
    ],
  },
];

// ─── FISHERY BIOLOGIST ───────────────────────────────────────────
export const fisheryBiologistCosts: CostItem[] = [
  {
    category: "Government (B.F.Sc)",
    amount: "₹10,000-40,000",
    description: "Annual tuition fees",
    icon: "🐟",
    color: "#0284C7",
    details: [
      "Fisheries Colleges: ₹10,000-40,000 per year",
      "Lab & Boat Fees: ₹5,000-10,000",
    ],
  },
];

// ─── OCEANOGRAPHER ───────────────────────────────────────────────
export const oceanographerCosts: CostItem[] = [
  {
    category: "Premier Research (MoES)",
    amount: "₹20,000-1 Lakh",
    description: "Total course fees",
    icon: "🚢",
    color: "#1D4ED8",
    details: [
      "M.Sc Marine Science: ₹20,000-50,000 total",
      "Ship-time Training: Usually covered by grants",
    ],
  },
];

// ─── CLINICAL RESEARCH ───────────────────────────────────────────
export const clinicalResearchCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹15,000-60,000",
    description: "Total program fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "Jamia Hamdard: ₹20,000-40,000 yearly",
      "Central Universities: ₹15,000-30,000 total",
    ],
  },
  {
    category: "Private Institutes",
    amount: "₹1.5-5 Lakh",
    description: "Specialized PG Diploma/M.Sc",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "ICRI (Delhi/Mumbai): ₹2.5-4.5 lakh",
      "Private Medical Colleges: ₹1.5-3 lakh yearly",
    ],
  },
];

// ─── PHYSIOLOGY ──────────────────────────────────────────────────
export const physiologyCosts: CostItem[] = [
  {
    category: "Government Colleges",
    amount: "₹10,000-40,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "AIIMS (M.Sc): ₹10,000-20,000 yearly",
      "University of Calcutta: ₹8,000-15,000 yearly",
    ],
  },
  {
    category: "Private Universities",
    amount: "₹80,000-3 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Manipal Academy: ₹1.5-2.5 lakh yearly",
      "Amity University: ₹80,000-1.5 lakh yearly",
    ],
  },
];

// Export all career costs
export const allCareerCosts: Record<string, CostItem[]> = {
  actuarial_science: actuarialScienceCosts,
  chartered_accountant: actuarialScienceCosts,
  banking_and_related_services: actuarialScienceCosts,
  company_secretary: actuarialScienceCosts,
  cost_accountant: actuarialScienceCosts,
  economics: actuarialScienceCosts,
  financial_analyst: actuarialScienceCosts,
  financial_and_investment_planning: actuarialScienceCosts,
  financial_risk_management: actuarialScienceCosts,
  architect: actuarialScienceCosts,
  construction: actuarialScienceCosts,
  maintenance_and_operation_management: actuarialScienceCosts,
  urban_planning_and_management: actuarialScienceCosts,
  biochemistry: biochemistryCosts,
  bioinformatics: bioinformaticsCosts,
  biotechnology: biotechnologyCosts,
  genetics: geneticsCosts,
  microbiology: microbiologyCosts,
  wildlife_biologist: wildlifeBiologistCosts,
  fishery_biologist: fisheryBiologistCosts,
  oceanographer: oceanographerCosts,
  clinical_research: clinicalResearchCosts,
  physiology: physiologyCosts,
  accessory_design: artsAndDesignCosts,
  agri_business_management: agricultureCosts,
  agricultural_engineer: agricultureCosts,
  agriculture_research: agricultureCosts,
  animal_science: agricultureCosts,
  apiculture: agricultureCosts,
  aquaculture: agricultureCosts,
  dairy_technology: agricultureCosts,
  florist: agricultureCosts,
  food_science: agricultureCosts,
  horticulture: agricultureCosts,
  poultry: agricultureCosts,
  sericulture: agricultureCosts,
  vertical_farming: agricultureCosts,
  animator: artsAndDesignCosts,
  cosmetology: artsAndDesignCosts,
  creative_writer: artsAndDesignCosts,
  fashion_designing: artsAndDesignCosts,
  fine_arts: artsAndDesignCosts,
  graphical_designing: artsAndDesignCosts,
  interior_designing: artsAndDesignCosts,
  interpreter_and_translator: artsAndDesignCosts,
  liberal_arts: artsAndDesignCosts,
  performing_arts: artsAndDesignCosts,
  photography: artsAndDesignCosts,
  product_designing: artsAndDesignCosts,
  website_designer: artsAndDesignCosts,
  youtuber: artsAndDesignCosts,
};
