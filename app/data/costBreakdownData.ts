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

// Export all career costs
export const allCareerCosts: Record<string, CostItem[]> = {
  actuarial_science: actuarialScienceCosts,
  biochemistry: biochemistryCosts,
  bioinformatics: bioinformaticsCosts,
  microbiology: microbiologyCosts,
  genetics: geneticsCosts,
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
};
