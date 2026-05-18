// Unique Cost Breakdown for All 21 Career Categories

export interface CategoryCost {
  category: string;
  amount: string;
  description: string;
  icon: string;
  color: string;
  details?: string[];
}

// 1. ACCOUNT & FINANCE
export const accountFinanceCosts: CategoryCost[] = [
  {
    category: "Government Colleges",
    amount: "₹5,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "Delhi University: ₹5,000-15,000 per year",
      "BHU/Pune University: ₹8,000-25,000 per year",
      "State Universities: ₹5,000-20,000 per year",
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
      "FLAME University: ₹1.8-2.8 lakh per year",
      "Symbiosis: ₹1.2-2.2 lakh per year",
    ],
  },
  {
    category: "Professional Certifications",
    amount: "₹50,000-2 Lakh",
    description: "CA, CMA, CS exams",
    icon: "📜",
    color: "#6366F1",
    details: [
      "CA Registration & Articleship: ₹50,000-1 lakh",
      "CMA Exam Fees: ₹30,000-60,000",
      "CS Exam Fees: ₹20,000-40,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹12,000-20,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹6,000-12,000 per month",
      "Food & Meals: ₹3,000-5,000 per month",
      "Transport: ₹1,500-2,000 per month",
      "Books & Materials: ₹1,500-2,000 per month",
    ],
  },
];

// 2. AGRICULTURE
export const agricultureCosts: CategoryCost[] = [
  {
    category: "Government Agricultural Universities",
    amount: "₹15,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IARI (Delhi): ₹20,000-40,000 per year",
      "State Agri Universities: ₹15,000-35,000 per year",
      "Includes farm access and field training",
    ],
  },
  {
    category: "Private Agricultural Colleges",
    amount: "₹1.5-3.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Lovely Professional University: ₹1.5-2 lakh per year",
      "Amity University: ₹1.8-3.5 lakh per year",
      "Doon Business School: ₹2-3 lakh per year",
    ],
  },
  {
    category: "Farm Equipment & Tools",
    amount: "₹40,000-80,000",
    description: "One-time investment",
    icon: "🚜",
    color: "#059669",
    details: [
      "Field Equipment & Instruments: ₹20,000-40,000",
      "Soil Testing Kits: ₹10,000-20,000",
      "Protective Gear & Clothing: ₹5,000-10,000",
      "Laptop for Agri-analytics: ₹40,000-60,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹10,000-18,000",
    description: "Monthly in rural/semi-urban areas",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹5,000-10,000 per month",
      "Food & Meals: ₹3,000-5,000 per month",
      "Transport: ₹1,000-2,000 per month",
      "Field Visit Expenses: ₹1,000-2,000 per month",
    ],
  },
];

// 3. ARCHITECTURE & CONSTRUCTION
export const architectureCosts: CategoryCost[] = [
  {
    category: "Government Architecture Schools",
    amount: "₹50,000-1.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IIT Architecture: ₹50,000-1.5 lakh per year",
      "State Architecture Colleges: ₹30,000-80,000 per year",
      "Includes studio and lab access",
    ],
  },
  {
    category: "Private Architecture Schools",
    amount: "₹3-8 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Manipal School of Architecture: ₹4-6 lakh per year",
      "Amity School of Architecture: ₹3-5 lakh per year",
      "Pearl Academy: ₹5-8 lakh per year",
    ],
  },
  {
    category: "Design Software & Tools",
    amount: "₹60,000-1.2 Lakh",
    description: "One-time investment",
    icon: "💻",
    color: "#3B82F6",
    details: [
      "High-spec Laptop: ₹80,000-1.2 lakh",
      "AutoCAD/Revit Licenses: ₹15,000-30,000 yearly",
      "3D Modeling Software: ₹10,000-20,000 yearly",
      "Drafting Tools & Materials: ₹5,000-10,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in major cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹8,000-15,000 per month",
      "Food & Meals: ₹4,000-7,000 per month",
      "Transport: ₹2,000-3,000 per month",
      "Site Visits: ₹1,000-2,000 per month",
    ],
  },
];

// 4. ARTS & DESIGN
export const artsDesignCosts: CategoryCost[] = [
  {
    category: "Government Design Schools (NIFT/NID)",
    amount: "₹1.5-3.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "NIFT (All Campuses): ₹1.5-3.0 lakh per year",
      "NID (B.Des/M.Des): ₹2.0-3.5 lakh per year",
      "Highly competitive entrance exams",
    ],
  },
  {
    category: "Private Design Institutes",
    amount: "₹4-8.5 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Pearl Academy: ₹4.5-7.5 lakh per year",
      "Srishti Manipal: ₹4.0-6.0 lakh per year",
      "ISDI (Mumbai): ₹5.0-8.5 lakh per year",
    ],
  },
  {
    category: "Art Materials & Equipment",
    amount: "₹80,000-1.5 Lakh",
    description: "One-time investment",
    icon: "🎨",
    color: "#EC4899",
    details: [
      "High-spec Laptop/Tablet: ₹80,000-1.2 lakh",
      "Adobe Creative Suite: ₹10,000-20,000 yearly",
      "Art Supplies & Materials: ₹20,000-50,000 yearly",
      "Portfolio Development: ₹10,000-20,000",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹15,000-25,000",
    description: "Monthly in Delhi/Mumbai",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/PG Rent: ₹8,000-15,000 per month",
      "Food & Utilities: ₹5,000-8,000 per month",
      "Local Commute: ₹2,000-3,000 per month",
      "Gallery/Exhibition Visits: ₹1,000-2,000 per month",
    ],
  },
];

// 5. BIO SCIENCE & RESEARCH
export const bioScienceCosts: CategoryCost[] = [
  { category: "Government Research Institutes", amount: "₹20,000-1.5 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["NCBS/IISER: ₹50,000-1.5 lakh per year", "Central Universities: ₹20,000-60,000 per year"] },
  { category: "Private Research Universities", amount: "₹3-8 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["VIT: ₹4-6 lakh per year", "Manipal: ₹5-8 lakh per year"] },
  { category: "Laboratory Equipment", amount: "₹50,000-1 Lakh", description: "One-time investment", icon: "🔬", color: "#06B6D4", details: ["Lab Equipment: ₹20,000-40,000", "Chemicals & Media: ₹15,000-30,000"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹7,000-15,000", "Food & Transport: ₹5,500-9,500"] },
];

// 6. BUSINESS MANAGEMENT
export const businessManagementCosts: CategoryCost[] = [
  { category: "Government B-Schools", amount: "₹8,000-50,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹8,000-20,000", "IIM Indore/Udaipur: ₹20,000-50,000"] },
  { category: "Private B-Schools", amount: "₹2-6 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["FLAME: ₹2.5-4 lakh per year", "Symbiosis: ₹2-3.5 lakh per year"] },
  { category: "Professional Certifications", amount: "₹30,000-1 Lakh", description: "MBA entrance & exams", icon: "📜", color: "#6366F1", details: ["CAT/GMAT: ₹15,000-30,000", "MBA Entrance Exams: ₹5,000-10,000"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 7. EDUCATION & TRAINING
export const educationTrainingCosts: CategoryCost[] = [
  { category: "Government Teacher Training", amount: "₹5,000-30,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["B.Ed Colleges: ₹5,000-20,000 per year", "Central Universities: ₹8,000-30,000"] },
  { category: "Private Teacher Training", amount: "₹80,000-2 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Amity: ₹1-1.5 lakh per year", "Manipal: ₹80,000-1.2 lakh"] },
  { category: "Teaching Materials & Resources", amount: "₹20,000-40,000", description: "One-time investment", icon: "📚", color: "#8B5CF6", details: ["Teaching Aids: ₹10,000-20,000", "Digital Tools: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹10,000-18,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹5,000-10,000", "Food & Transport: ₹5,000-8,000"] },
];

// 8. ENVIRONMENT
export const environmentCosts: CategoryCost[] = [
  { category: "Government Environmental Schools", amount: "₹10,000-50,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹10,000-25,000", "IIT Bombay: ₹30,000-50,000"] },
  { category: "Private Environmental Programs", amount: "₹1.5-4 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹2-3.5 lakh per year", "Amity: ₹1.5-2.5 lakh"] },
  { category: "Field Equipment & Gear", amount: "₹40,000-80,000", description: "One-time investment", icon: "🌍", color: "#059669", details: ["Field Equipment: ₹20,000-40,000", "Protective Gear: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// 9. GOVERNMENT SERVICES
export const governmentServicesCosts: CategoryCost[] = [
  { category: "Government Colleges", amount: "₹5,000-30,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹5,000-15,000", "State Universities: ₹5,000-20,000"] },
  { category: "UPSC/State Exam Coaching", amount: "₹50,000-3 Lakh", description: "Coaching fees", icon: "📖", color: "#3B82F6", details: ["Online Coaching: ₹50,000-1.5 lakh", "Offline Coaching: ₹1-3 lakh"] },
  { category: "Study Materials & Books", amount: "₹30,000-60,000", description: "One-time investment", icon: "📚", color: "#8B5CF6", details: ["Books & Notes: ₹20,000-40,000", "Online Courses: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹10,000-18,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹5,000-10,000", "Food & Transport: ₹5,000-8,000"] },
];

// 10. HEALTH SCIENCE
export const healthScienceCosts: CategoryCost[] = [
  { category: "Government Medical Colleges", amount: "₹50,000-2 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["AIIMS: ₹50,000-1 lakh per year", "State Medical Colleges: ₹80,000-2 lakh"] },
  { category: "Private Medical Colleges", amount: "₹5-15 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹8-12 lakh per year", "Amity: ₹5-8 lakh per year"] },
  { category: "Medical Equipment & Supplies", amount: "₹50,000-1.5 Lakh", description: "One-time investment", icon: "⚕️", color: "#DC2626", details: ["Stethoscope & Tools: ₹10,000-20,000", "Medical Books: ₹20,000-40,000"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 11. HOSPITALITY & TOURISM
export const hospitalityCosts: CategoryCost[] = [
  { category: "Government Hotel Schools", amount: "₹1-2.5 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["IHM Delhi: ₹1-1.5 lakh per year", "IHM Mumbai: ₹1.2-2 lakh"] },
  { category: "Private Hospitality Institutes", amount: "₹1.5-4 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹2-3.5 lakh per year", "Amity: ₹1.5-2.5 lakh"] },
  { category: "Uniforms & Equipment", amount: "₹30,000-60,000", description: "One-time investment", icon: "👔", color: "#F97316", details: ["Chef Uniforms: ₹10,000-15,000", "Service Uniforms: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// 12. HUMAN & SOCIAL SCIENCES
export const humanSocialCosts: CategoryCost[] = [
  { category: "Government Universities", amount: "₹5,000-30,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹5,000-15,000", "JNU: ₹8,000-20,000"] },
  { category: "Private Universities", amount: "₹80,000-2 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Ashoka: ₹1.5-2 lakh per year", "FLAME: ₹1-1.5 lakh"] },
  { category: "Research & Field Work", amount: "₹20,000-50,000", description: "One-time investment", icon: "🔍", color: "#7C3AED", details: ["Research Tools: ₹10,000-20,000", "Field Study Expenses: ₹10,000-30,000"] },
  { category: "Living Expenses", amount: "₹10,000-18,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹5,000-10,000", "Food & Transport: ₹5,000-8,000"] },
];

// 13. INFORMATION TECHNOLOGY
export const informationTechnologyCosts: CategoryCost[] = [
  { category: "Government Engineering Colleges", amount: "₹50,000-2 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["IITs: ₹50,000-1.5 lakh per year", "NITs: ₹80,000-2 lakh"] },
  { category: "Private Engineering Colleges", amount: "₹2-6 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["VIT: ₹3-5 lakh per year", "Manipal: ₹2.5-4 lakh"] },
  { category: "Software & Development Tools", amount: "₹50,000-1 Lakh", description: "One-time investment", icon: "💻", color: "#3B82F6", details: ["High-spec Laptop: ₹50,000-1 lakh", "Software Licenses: ₹10,000-20,000 yearly"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 14. LEGAL SERVICES
export const legalServicesCosts: CategoryCost[] = [
  { category: "Government Law Schools", amount: "₹10,000-50,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹10,000-25,000", "NLU Delhi: ₹30,000-50,000"] },
  { category: "Private Law Schools", amount: "₹1.5-4 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["NALSAR: ₹1.5-2.5 lakh per year", "Symbiosis: ₹2-3.5 lakh"] },
  { category: "Bar Exam & Certification", amount: "₹30,000-80,000", description: "One-time investment", icon: "⚖️", color: "#7C3AED", details: ["Bar Council Registration: ₹20,000-40,000", "Exam Fees: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// 15. LOGISTICS & TRANSPORTATION
export const logisticsCosts: CategoryCost[] = [
  { category: "Government Aviation/Maritime Schools", amount: "₹50,000-2 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["IIT Bombay: ₹50,000-1.5 lakh", "State Universities: ₹80,000-2 lakh"] },
  { category: "Private Aviation Institutes", amount: "₹3-8 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹4-6 lakh per year", "Amity: ₹3-5 lakh"] },
  { category: "Flight Training & Certifications", amount: "₹15-50 Lakh", description: "Pilot training", icon: "✈️", color: "#0284C7", details: ["Commercial Pilot License: ₹15-30 lakh", "Flight Hours: ₹20-50 lakh"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 16. MANUFACTURING
export const manufacturingCosts: CategoryCost[] = [
  { category: "Government Engineering Colleges", amount: "₹50,000-1.5 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["IITs: ₹50,000-1.5 lakh per year", "NITs: ₹80,000-1.2 lakh"] },
  { category: "Private Engineering Colleges", amount: "₹2-5 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹2.5-4 lakh per year", "VIT: ₹2-3.5 lakh"] },
  { category: "CAD Software & Tools", amount: "₹40,000-80,000", description: "One-time investment", icon: "🖥️", color: "#3B82F6", details: ["CATIA/Solidworks: ₹20,000-40,000", "Laptop: ₹40,000-80,000"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 17. MARKETING & ADVERTISING
export const marketingCosts: CategoryCost[] = [
  { category: "Government B-Schools", amount: "₹8,000-40,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹8,000-20,000", "State Universities: ₹10,000-40,000"] },
  { category: "Private B-Schools", amount: "₹1.5-4 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["FLAME: ₹2-3 lakh per year", "Symbiosis: ₹1.5-2.5 lakh"] },
  { category: "Digital Marketing Tools", amount: "₹30,000-60,000", description: "One-time investment", icon: "📱", color: "#EC4899", details: ["Software Subscriptions: ₹15,000-30,000", "Analytics Tools: ₹10,000-20,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// 18. MEDIA & COMMUNICATION
export const mediaCommunicationCosts: CategoryCost[] = [
  { category: "Government Media Schools", amount: "₹5,000-30,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹5,000-15,000", "FTII Pune: ₹20,000-30,000"] },
  { category: "Private Media Institutes", amount: "₹1-3 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Symbiosis: ₹1.5-2.5 lakh per year", "Amity: ₹1-1.8 lakh"] },
  { category: "Broadcasting Equipment", amount: "₹50,000-1.5 Lakh", description: "One-time investment", icon: "📹", color: "#DC2626", details: ["Camera & Microphone: ₹30,000-80,000", "Editing Software: ₹10,000-30,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// 19. PUBLIC SAFETY & SECURITY
export const publicSafetyCosts: CategoryCost[] = [
  { category: "Government Police/Armed Forces Training", amount: "₹0-50,000", description: "Annual fees (mostly free)", icon: "🏫", color: "#1E40AF", details: ["Police Academy: Free-₹30,000", "Armed Forces: Free training"] },
  { category: "Private Security Institutes", amount: "₹50,000-1.5 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Security Courses: ₹50,000-1 lakh", "Certification Programs: ₹30,000-50,000"] },
  { category: "Uniforms & Equipment", amount: "₹30,000-80,000", description: "One-time investment", icon: "🛡️", color: "#DC2626", details: ["Uniform & Gear: ₹20,000-40,000", "Training Equipment: ₹10,000-40,000"] },
  { category: "Living Expenses", amount: "₹10,000-18,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹5,000-10,000", "Food & Transport: ₹5,000-8,000"] },
];

// 20. SCIENCE, MATHEMATICS & ENGINEERING
export const scienceEngineeringCosts: CategoryCost[] = [
  { category: "Government Engineering Colleges", amount: "₹50,000-2 Lakh", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["IITs: ₹50,000-1.5 lakh per year", "NITs: ₹80,000-2 lakh"] },
  { category: "Private Engineering Colleges", amount: "₹2-6 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["VIT: ₹3-5 lakh per year", "Manipal: ₹2.5-4 lakh"] },
  { category: "Lab Equipment & Software", amount: "₹60,000-1.2 Lakh", description: "One-time investment", icon: "🔬", color: "#3B82F6", details: ["MATLAB/CAD Software: ₹20,000-40,000", "Lab Equipment: ₹40,000-80,000"] },
  { category: "Living Expenses", amount: "₹15,000-25,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹8,000-15,000", "Food & Transport: ₹7,000-10,000"] },
];

// 21. SPORTS & PHYSICAL ACTIVITIES
export const sportsCosts: CategoryCost[] = [
  { category: "Government Sports Colleges", amount: "₹5,000-30,000", description: "Annual tuition fees", icon: "🏫", color: "#1E40AF", details: ["Delhi University: ₹5,000-15,000", "State Universities: ₹8,000-30,000"] },
  { category: "Private Sports Institutes", amount: "₹1-3 Lakh", description: "Annual tuition fees", icon: "🏢", color: "#F59E0B", details: ["Manipal: ₹1.5-2.5 lakh per year", "Amity: ₹1-1.8 lakh"] },
  { category: "Sports Equipment & Gear", amount: "₹50,000-1.5 Lakh", description: "One-time investment", icon: "⚽", color: "#059669", details: ["Sports Equipment: ₹30,000-80,000", "Training Gear: ₹20,000-50,000"] },
  { category: "Living Expenses", amount: "₹12,000-20,000", description: "Monthly", icon: "🏠", color: "#10B981", details: ["Hostel/Rent: ₹6,000-12,000", "Food & Transport: ₹6,000-8,000"] },
];

// Export all costs
export const allCategoryCosts: Record<string, CategoryCost[]> = {
  account_and_finance: accountFinanceCosts,
  agriculture: agricultureCosts,
  architecture_and_construction: architectureCosts,
  arts_and_design: artsDesignCosts,
  bio_science_and_research: bioScienceCosts,
  business_management: businessManagementCosts,
  education_and_training: educationTrainingCosts,
  environment: environmentCosts,
  government_services: governmentServicesCosts,
  health_science: healthScienceCosts,
  hospitality_and_tourism: hospitalityCosts,
  human_and_social_sciences: humanSocialCosts,
  information_technology: informationTechnologyCosts,
  legal_services: legalServicesCosts,
  logistics_and_transportation: logisticsCosts,
  manufacturing: manufacturingCosts,
  marketing_and_advertising: marketingCosts,
  media_and_communication: mediaCommunicationCosts,
  public_safety_and_security: publicSafetyCosts,
  science_mathematics_engineering: scienceEngineeringCosts,
  sports_and_physical_activities: sportsCosts,
};
