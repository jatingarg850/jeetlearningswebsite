// Individual Career Cost Breakdowns
// For careers without specific costs, falls back to category-level costs

export interface CareerCostData {
  career: string;
  category: string;
  costs: Array<{
    category: string;
    amount: string;
    description: string;
    icon: string;
    color: string;
    details?: string[];
  }>;
}

// ─── ACCOUNT & FINANCE - DETAILED COSTS ───────────────────────────

export const actuarialScienceCosts: CareerCostData = {
  career: "actuarial_science",
  category: "account_and_finance",
  costs: [
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
      category: "Actuarial Exam Coaching",
      amount: "₹1-3 Lakh",
      description: "Specialized coaching for 15 exams",
      icon: "📚",
      color: "#6366F1",
      details: [
        "Online Coaching: ₹50,000-1.5 lakh",
        "Offline Coaching: ₹1-2.5 lakh",
        "Study Materials: ₹30,000-50,000",
      ],
    },
    {
      category: "Exam Fees & Registration",
      amount: "₹2-4 Lakh",
      description: "IAI exam fees for 15 papers",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "Each exam: ₹10,000-15,000",
        "Total 15 exams: ₹1.5-2.25 lakh",
        "Membership & Registration: ₹50,000-1 lakh",
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
        "Study Materials: ₹1,000-2,000 per month",
      ],
    },
  ],
};

export const bankingServicesCosts: CareerCostData = {
  career: "banking_and_related_services",
  category: "account_and_finance",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹5,000-50,000",
      description: "Total fees for B.Com/M.Com",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "B.Com (3 years): ₹5,000-30,000 total",
        "M.Com (2 years): ₹8,000-40,000 total",
        "Delhi University: ₹5,000-15,000 per year",
        "State Universities: ₹8,000-30,000 per year",
        "Commerce Colleges: ₹5,000-20,000 per year",
      ],
    },
    {
      category: "Private/Premier Institutions",
      amount: "₹10-25 Lakh",
      description: "IIMs/Top BBA programs total fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "IIM MBA Programs: ₹15-25 Lakhs total",
        "Top BBA Colleges: ₹10-20 Lakhs total",
        "Premium Business Schools: ₹12-22 Lakhs total",
        "Duration: 2 years for MBA/PG programs",
      ],
    },
    {
      category: "Bank PO Coaching",
      amount: "₹15,000-40,000",
      description: "Preparation for banking exams",
      icon: "📚",
      color: "#F59E0B",
      details: [
        "Online Coaching: ₹15,000-25,000",
        "Offline Coaching: ₹25,000-40,000",
        "Study Materials & Mock Tests: ₹5,000-10,000",
        "Exam Registration Fees: ₹500-1,000 per exam",
      ],
    },
    {
      category: "Banking Certifications",
      amount: "₹50,000-1.5 Lakh",
      description: "JAIIB, CAIIB, CFA exams",
      icon: "📜",
      color: "#EC4899",
      details: [
        "JAIIB Exam: ₹15,000-25,000",
        "CAIIB Exam: ₹20,000-35,000",
        "CFA Level 1: ₹15,000-25,000",
        "Professional Memberships: ₹10,000-20,000",
      ],
    },
    {
      category: "Professional Development",
      amount: "₹30,000-80,000",
      description: "One-time investment",
      icon: "💼",
      color: "#3B82F6",
      details: [
        "Banking Software Training: ₹20,000-40,000",
        "Financial Analysis Tools: ₹10,000-20,000",
        "Professional Memberships: ₹10,000-20,000",
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
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
      ],
    },
  ],
};

// Export all individual career costs
export const allIndividualCareerCosts: Record<string, CareerCostData> = {
  actuarial_science: actuarialScienceCosts,
  banking_and_related_services: bankingServicesCosts,
};

// Helper function to get costs for a specific career
export function getCareerCosts(careerSlug: string): CareerCostData | undefined {
  return allIndividualCareerCosts[careerSlug];
}


export const charteredAccountantCosts: CareerCostData = {
  career: "chartered_accountant",
  category: "account_and_finance",
  costs: [
    {
      category: "Government Colleges",
      amount: "₹5,000-30,000",
      description: "Annual tuition fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University: ₹5,000-15,000 per year",
        "State Universities: ₹5,000-20,000 per year",
      ],
    },
    {
      category: "CA Registration & Articleship",
      amount: "₹50,000-1.5 Lakh",
      description: "ICAI registration and training",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "Registration Fee: ₹20,000-30,000",
        "Articleship Training: ₹30,000-80,000",
        "Exam Fees: ₹10,000-20,000",
      ],
    },
    {
      category: "Accounting Software",
      amount: "₹40,000-80,000",
      description: "One-time investment",
      icon: "💻",
      color: "#3B82F6",
      details: [
        "Tally/SAP Training: ₹20,000-40,000",
        "Audit Software: ₹10,000-20,000",
        "Tax Software: ₹10,000-20,000",
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
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
      ],
    },
  ],
};

export const financialAnalystCosts: CareerCostData = {
  career: "financial_analyst",
  category: "account_and_finance",
  costs: [
    {
      category: "B.Com/BBA (Government)",
      amount: "₹15,000-60,000",
      description: "Total degree cost",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University B.Com: ₹15,000-30,000 total",
        "State Universities B.Com: ₹20,000-50,000 total",
        "Government BBA Colleges: ₹25,000-60,000 total",
        "Annual fees: ₹5,000-20,000 per year",
      ],
    },
    {
      category: "BBA/MBA (Private/IIMs)",
      amount: "₹15-28 Lakh",
      description: "Total degree cost",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "IIM MBA Programs: ₹20-28 Lakhs total",
        "Top Private BBA: ₹15-22 Lakhs total",
        "Premium Business Schools: ₹18-25 Lakhs total",
        "Annual fees: ₹5-10 Lakhs per year",
      ],
    },
    {
      category: "CFA Program",
      amount: "₹2.5-3.5 Lakh",
      description: "Total for all 3 levels",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "CFA Level 1: ₹80,000-1,00,000",
        "CFA Level 2: ₹85,000-1,10,000",
        "CFA Level 3: ₹85,000-1,10,000",
        "Study Materials & Resources: ₹50,000-80,000",
        "Total Investment: ₹2.5-3.5 Lakhs",
      ],
    },
    {
      category: "Financial Certifications",
      amount: "₹80,000-2 Lakh",
      description: "FRM, CFP, and other exams",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "FRM Exam (Part 1 & 2): ₹40,000-60,000",
        "CFP Certification: ₹30,000-60,000",
        "Bloomberg Market Concepts: ₹5,000-10,000",
        "Professional Memberships: ₹10,000-20,000",
      ],
    },
    {
      category: "Financial Analysis Tools",
      amount: "₹50,000-1 Lakh",
      description: "Software and platforms",
      icon: "💻",
      color: "#3B82F6",
      details: [
        "Bloomberg Terminal Training: ₹30,000-60,000",
        "Excel & VBA Training: ₹10,000-20,000",
        "Financial Modeling Software: ₹10,000-20,000",
        "Data Analysis Tools: ₹5,000-15,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in Mumbai or Bengaluru",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Research & Study Materials",
      amount: "₹15,000-30,000",
      description: "Books, journals, and resources",
      icon: "📚",
      color: "#8B5CF6",
      details: [
        "Financial Analysis Textbooks: ₹5,000-10,000",
        "Research Journals & Databases: ₹5,000-10,000",
        "Online Courses (Coursera, edX): ₹3,000-8,000",
        "Study Guides & Notes: ₹2,000-5,000",
      ],
    },
  ],
};

// ─── FINANCIAL & INVESTMENT PLANNING - DETAILED COSTS ───────────

export const financialAndInvestmentPlanningCosts: CareerCostData = {
  career: "financial_and_investment_planning",
  category: "account_and_finance",
  costs: [
    {
      category: "UG Course (Government)",
      amount: "₹15,000-60,000",
      description: "Total degree cost",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University B.Com: ₹15,000-30,000 total",
        "State Universities B.Com: ₹20,000-50,000 total",
        "Government BBA Colleges: ₹25,000-60,000 total",
        "Annual fees: ₹5,000-20,000 per year",
      ],
    },
    {
      category: "UG Course (Private)",
      amount: "₹3-12 Lakh",
      description: "Total degree cost",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private BBA: ₹3-8 Lakhs total",
        "Premium Business Schools: ₹5-12 Lakhs total",
        "Annual fees: ₹1-4 Lakhs per year",
        "Includes infrastructure and faculty",
      ],
    },
    {
      category: "CFP Certification",
      amount: "₹60,000-90,000",
      description: "Registration + Exams + Study Materials",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "CFP Registration Fee: ₹15,000-20,000",
        "CFP Exam Fees: ₹25,000-35,000",
        "Study Materials & Courses: ₹15,000-25,000",
        "Professional Membership: ₹5,000-10,000",
      ],
    },
    {
      category: "MBA (Finance)",
      amount: "₹12-28 Lakh",
      description: "Top B-Schools",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "IIM MBA Programs: ₹20-28 Lakhs total",
        "Top Private B-Schools: ₹12-20 Lakhs total",
        "Premium Business Schools: ₹15-25 Lakhs total",
        "Annual fees: ₹6-14 Lakhs per year",
      ],
    },
    {
      category: "Financial Planning Certifications",
      amount: "₹50,000-1.5 Lakh",
      description: "Additional professional certifications",
      icon: "💼",
      color: "#3B82F6",
      details: [
        "CFA Level 1-3: ₹2.5-3.5 Lakhs (optional)",
        "FRM Certification: ₹40,000-60,000",
        "FPSB Membership: ₹10,000-20,000",
        "Online Courses & Workshops: ₹10,000-30,000",
      ],
    },
    {
      category: "Investment Analysis Tools",
      amount: "₹40,000-80,000",
      description: "Software and platforms",
      icon: "💻",
      color: "#10B981",
      details: [
        "Bloomberg Terminal Training: ₹25,000-50,000",
        "Financial Modeling Software: ₹10,000-20,000",
        "Portfolio Management Tools: ₹5,000-15,000",
        "Data Analysis Software: ₹5,000-10,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in Mumbai, Bengaluru, or Delhi",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Research & Study Materials",
      amount: "₹15,000-30,000",
      description: "Books, journals, and resources",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Investment Planning Textbooks: ₹5,000-10,000",
        "Research Journals & Databases: ₹5,000-10,000",
        "Online Courses (Coursera, edX): ₹3,000-8,000",
        "Study Guides & Notes: ₹2,000-5,000",
      ],
    },
  ],
};

// ─── FINANCIAL RISK MANAGEMENT - DETAILED COSTS ──────────────────

export const financialRiskManagementCosts: CareerCostData = {
  career: "financial_risk_management",
  category: "account_and_finance",
  costs: [
    {
      category: "B.Com/BBA (Government)",
      amount: "₹15,000-60,000",
      description: "Total degree cost",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University B.Com: ₹15,000-30,000 total",
        "State Universities B.Com: ₹20,000-50,000 total",
        "Government BBA Colleges: ₹25,000-60,000 total",
        "Annual fees: ₹5,000-20,000 per year",
      ],
    },
    {
      category: "MBA (Top B-Schools)",
      amount: "₹15-28 Lakh",
      description: "Total degree cost",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "IIM MBA Programs: ₹20-28 Lakhs total",
        "Top Private B-Schools: ₹15-22 Lakhs total",
        "Premium Business Schools: ₹18-25 Lakhs total",
        "Annual fees: ₹7.5-14 Lakhs per year",
      ],
    },
    {
      category: "FRM Certification",
      amount: "₹1.2-1.8 Lakh",
      description: "Total for both levels (exam fees + study materials)",
      icon: "📜",
      color: "#F59E0B",
      details: [
        "FRM Part 1 Exam Fee: ₹35,000-45,000",
        "FRM Part 2 Exam Fee: ₹35,000-45,000",
        "Study Materials & Courses: ₹40,000-60,000",
        "Professional Membership: ₹10,000-15,000",
        "Total Investment: ₹1.2-1.8 Lakhs",
      ],
    },
    {
      category: "Risk Management Certifications",
      amount: "₹80,000-1.5 Lakh",
      description: "Additional professional certifications",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "CFA Level 1-3: ₹2.5-3.5 Lakhs (optional)",
        "GARP Membership: ₹10,000-15,000",
        "Advanced Risk Courses: ₹30,000-50,000",
        "Online Certifications: ₹20,000-40,000",
      ],
    },
    {
      category: "Risk Analysis Tools & Software",
      amount: "₹50,000-1 Lakh",
      description: "Software and platforms",
      icon: "💻",
      color: "#3B82F6",
      details: [
        "Bloomberg Terminal Training: ₹30,000-50,000",
        "Risk Management Software (VaR, Stress Testing): ₹15,000-30,000",
        "Financial Modeling Tools: ₹10,000-20,000",
        "Data Analysis Software: ₹5,000-10,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in major education cities",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Research & Study Materials",
      amount: "₹15,000-30,000",
      description: "Books, journals, and resources",
      icon: "📚",
      color: "#8B5CF6",
      details: [
        "Risk Management Textbooks: ₹5,000-10,000",
        "Research Journals & Databases: ₹5,000-10,000",
        "Online Courses (Coursera, edX): ₹3,000-8,000",
        "Study Guides & Notes: ₹2,000-5,000",
      ],
    },
  ],
};

// ─── COST ACCOUNTANT - DETAILED COSTS ───────────────────────────

export const costAccountantCosts: CareerCostData = {
  career: "cost_accountant",
  category: "account_and_finance",
  costs: [
    {
      category: "CMA Course Fees",
      amount: "₹75,000-1 Lakh",
      description: "Total for all three levels",
      icon: "📚",
      color: "#1E40AF",
      details: [
        "Foundation Level: ₹20,000-25,000",
        "Intermediate Level: ₹25,000-35,000",
        "Final Level: ₹30,000-40,000",
        "Total if paid to Institute: ₹75,000-1,00,000",
        "Duration: 3-4 years from Class 12",
      ],
    },
    {
      category: "Private Coaching",
      amount: "₹1-2 Lakh",
      description: "Optional coaching for exam preparation",
      icon: "🎓",
      color: "#6366F1",
      details: [
        "Online Coaching: ₹50,000-1 Lakh",
        "Offline Coaching: ₹1-2 Lakhs",
        "Study Materials & Notes: ₹10,000-20,000",
        "Mock Tests & Practice Papers: ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials",
      amount: "₹15,000-30,000",
      description: "Books, guides, and reference materials",
      icon: "📖",
      color: "#F59E0B",
      details: [
        "Official ICMA Study Materials: ₹8,000-12,000",
        "Reference Books & Guides: ₹5,000-10,000",
        "Practice Problem Sets: ₹2,000-5,000",
        "Digital Resources & E-books: ₹3,000-8,000",
      ],
    },
    {
      category: "Exam Registration Fees",
      amount: "₹10,000-20,000",
      description: "Exam fees for all three levels",
      icon: "📜",
      color: "#EC4899",
      details: [
        "Foundation Exam: ₹3,000-5,000",
        "Intermediate Exam: ₹4,000-7,000",
        "Final Exam: ₹4,000-8,000",
        "Re-attempt Fees: ₹1,000-2,000 per exam",
      ],
    },
    {
      category: "Living Expenses",
      amount: "₹10,000-20,000",
      description: "Monthly in major education cities",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/PG Accommodation: ₹5,000-12,000 per month",
        "Food & Meals: ₹2,500-5,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹500-1,000 per month",
      ],
    },
    {
      category: "Professional Membership",
      amount: "₹5,000-15,000",
      description: "ICMA membership and registration",
      icon: "⚖️",
      color: "#8B5CF6",
      details: [
        "ICMA Registration: ₹3,000-8,000",
        "Annual Membership: ₹2,000-5,000",
        "Professional Certification: ₹2,000-4,000",
      ],
    },
  ],
};

// ─── ECONOMICS - DETAILED COSTS ───────────────────────────────

export const economicsCosts: CareerCostData = {
  career: "economics",
  category: "account_and_finance",
  costs: [
    {
      category: "Government Colleges",
      amount: "₹15,000-1 Lakh",
      description: "Total 3-year degree",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University: ₹15,000-40,000 total",
        "State Universities: ₹20,000-60,000 total",
        "Central Universities: ₹25,000-1,00,000 total",
        "Annual fees: ₹5,000-35,000 per year",
      ],
    },
    {
      category: "Private Premier Institutions",
      amount: "₹10-30 Lakh",
      description: "Total 3-year degree",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private Universities: ₹10-20 Lakhs total",
        "Premium Business Schools: ₹15-30 Lakhs total",
        "Annual fees: ₹3-10 Lakhs per year",
        "Includes infrastructure and faculty",
      ],
    },
    {
      category: "Hostel/Living Expenses",
      amount: "₹12,000-25,000",
      description: "Monthly in metros",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel Accommodation: ₹8,000-15,000 per month",
        "Food & Meals: ₹3,000-7,000 per month",
        "Transport: ₹1,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Laptops & Software",
      amount: "₹40,000-1 Lakh",
      description: "One-time investment",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹30,000-80,000",
        "Statistical Software (R, Python, STATA): Free versions available",
        "Microsoft Office Suite: ₹5,000-10,000 (or free student version)",
        "Data Analysis Tools: ₹5,000-15,000 (many free alternatives)",
      ],
    },
    {
      category: "Research & Study Materials",
      amount: "₹10,000-25,000",
      description: "Books, journals, and resources",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Economics Textbooks: ₹5,000-10,000",
        "Research Journals & Papers: ₹3,000-8,000",
        "Online Databases & Subscriptions: ₹2,000-5,000",
        "Study Guides & Notes: ₹1,000-3,000",
      ],
    },
    {
      category: "Internships & Certifications",
      amount: "₹5,000-20,000",
      description: "Optional professional development",
      icon: "🎓",
      color: "#8B5CF6",
      details: [
        "Summer Internships: Often unpaid or stipend-based",
        "Professional Certifications: ₹5,000-15,000",
        "Online Courses (Coursera, edX): ₹2,000-8,000",
        "Workshops & Seminars: ₹1,000-5,000",
      ],
    },
  ],
};

// ─── LEGAL SERVICES - DETAILED COSTS ───────────────────────────

export const judgeCosts: CareerCostData = {
  career: "judge",
  category: "legal_services",
  costs: [
    {
      category: "LLB Course",
      amount: "₹3-35 Lakh",
      description: "3 or 5-year LLB degree",
      icon: "📚",
      color: "#1E40AF",
      details: [
        "Government Law Schools: ₹1-7 Lakhs annually",
        "5-year integrated LLB: ₹5-35 Lakhs total",
        "3-year LLB (post-graduation): ₹3-15 Lakhs total",
        "Private Law Colleges: ₹2-10 Lakhs annually",
      ],
    },
    {
      category: "Coaching/Preparation",
      amount: "₹50,000-1.5 Lakh",
      description: "PCS-J exam coaching",
      icon: "🎓",
      color: "#6366F1",
      details: [
        "Online Coaching: ₹50,000-80,000",
        "Offline Coaching: ₹1-1.5 lakh",
        "Study Materials & Notes: ₹20,000-40,000",
        "Mock Tests & Practice: ₹10,000-20,000",
      ],
    },
    {
      category: "Exam Fees & Travel",
      amount: "₹50,000-1 Lakh",
      description: "PCS-J exam and interview costs",
      icon: "✈️",
      color: "#F59E0B",
      details: [
        "Prelims Exam Fee: ₹10,000-15,000",
        "Mains Exam Fee: ₹10,000-15,000",
        "Interview Travel: ₹20,000-40,000",
        "Medical Test & Documentation: ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials",
      amount: "₹5,000-20,000",
      description: "Books, notes, and legal resources",
      icon: "📖",
      color: "#10B981",
      details: [
        "Printed Notes & Guides: ₹3,000-8,000",
        "Specialized Textbooks: ₹2,000-7,000",
        "Diglot Bare Acts: ₹2,000-5,000",
        "Case Law Compilations: ₹1,000-3,000",
      ],
    },
    {
      category: "Digital Access",
      amount: "₹10,000-30,000",
      description: "Legal research database subscriptions",
      icon: "💻",
      color: "#EC4899",
      details: [
        "SCC Online Subscription: ₹5,000-10,000 annually",
        "LexisNexis Access: ₹5,000-15,000 annually",
        "AIR (All India Reporter): ₹3,000-8,000 annually",
        "Online Case Law Databases: ₹2,000-5,000",
      ],
    },
    {
      category: "Bar Council Registration",
      amount: "₹20,000-50,000",
      description: "BCI registration and enrollment",
      icon: "⚖️",
      color: "#8B5CF6",
      details: [
        "Bar Council Registration: ₹10,000-20,000",
        "Enrollment Fee: ₹5,000-15,000",
        "Annual Membership: ₹5,000-15,000",
      ],
    },
  ],
};

// ─── AGRICULTURE - AGRI BUSINESS MANAGEMENT - DETAILED COSTS ─────

export const agriBusinessManagementCosts: CareerCostData = {
  career: "agri_business_management",
  category: "agriculture",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹15,000-8 Lakh",
      description: "IIMs, MANAGE, and other government programs",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "MANAGE (New Delhi): ₹15,000-50,000 per program",
        "IIM Agri Programs: ₹3-8 Lakhs total",
        "State Agricultural Universities: ₹20,000-2 Lakhs total",
        "Central Universities: ₹30,000-3 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹7-18 Lakh",
      description: "Total program cost",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private B-Schools (Agri Focus): ₹7-12 Lakhs total",
        "Premium Agri Business Schools: ₹10-18 Lakhs total",
        "Annual fees: ₹3.5-9 Lakhs per year",
        "Includes infrastructure and industry partnerships",
      ],
    },
    {
      category: "High-Performance Laptop",
      amount: "₹60,000",
      description: "For data software and analysis",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹50,000-70,000",
        "Agricultural Data Software: ₹5,000-10,000",
        "GIS & Mapping Tools: ₹5,000-15,000",
        "Statistical Analysis Software: Free/Paid options available",
      ],
    },
    {
      category: "Field Internships & Travel",
      amount: "₹30,000-60,000",
      description: "Travel and accommodation for field work",
      icon: "✈️",
      color: "#EC4899",
      details: [
        "Field Visit Travel: ₹15,000-30,000",
        "Internship Accommodation: ₹10,000-20,000",
        "Transportation & Logistics: ₹5,000-10,000",
        "Research Materials & Samples: ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹15,000-30,000",
      description: "Books, journals, and research materials",
      icon: "📚",
      color: "#3B82F6",
      details: [
        "Agri Business Textbooks: ₹5,000-10,000",
        "Research Journals & Databases: ₹5,000-10,000",
        "Online Courses & Certifications: ₹3,000-8,000",
        "Study Guides & Notes: ₹2,000-5,000",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹20,000-50,000",
      description: "Optional industry certifications",
      icon: "🎓",
      color: "#10B981",
      details: [
        "Agricultural Management Certification: ₹10,000-20,000",
        "Supply Chain Management: ₹8,000-15,000",
        "Agri-Tech Certifications: ₹5,000-15,000",
        "Professional Memberships: ₹5,000-10,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in cities like Ahmedabad or Hyderabad",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
  ],
};

// ─── AGRICULTURE - AGRICULTURAL ENGINEER - DETAILED COSTS ────────

export const agriculturalEngineerCosts: CareerCostData = {
  career: "agricultural_engineer",
  category: "agriculture",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹50,000-2.5 Lakh",
      description: "Total 4-year B.Tech degree fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "PAU Ludhiana: ₹50,000-1 Lakh total",
        "GBPUAT Pantnagar: ₹60,000-1.2 Lakhs total",
        "Tamil Nadu Agricultural University: ₹70,000-1.5 Lakhs total",
        "Other State Agricultural Universities: ₹50,000-2.5 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹4-12 Lakh",
      description: "Total 4-year B.Tech degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private Engineering Colleges: ₹4-8 Lakhs total",
        "Premium Agricultural Tech Institutes: ₹8-12 Lakhs total",
        "Annual fees: ₹1-3 Lakhs per year",
        "Includes labs, equipment, and industry partnerships",
      ],
    },
    {
      category: "High-End Laptop",
      amount: "₹60,000+",
      description: "For CAD, simulation, and data analysis",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹60,000-1,00,000",
        "CAD Software (AutoCAD, SolidWorks): ₹10,000-20,000",
        "Agricultural Simulation Software: ₹5,000-15,000",
        "Data Analysis Tools: Free/Paid options available",
      ],
    },
    {
      category: "Certification Exams",
      amount: "₹5,000-15,000",
      description: "Professional certifications",
      icon: "📜",
      color: "#EC4899",
      details: [
        "GATE Exam (for higher studies): ₹3,500-5,000",
        "Professional Engineering Certifications: ₹5,000-10,000",
        "Agricultural Tech Certifications: ₹3,000-8,000",
        "Skill Development Courses: ₹2,000-5,000",
      ],
    },
    {
      category: "Lab Equipment & Materials",
      amount: "₹20,000-40,000",
      description: "Practical work and experiments",
      icon: "🔬",
      color: "#3B82F6",
      details: [
        "Lab Instruments & Tools: ₹10,000-20,000",
        "Field Work Equipment: ₹5,000-10,000",
        "Safety Gear & Protective Equipment: ₹3,000-5,000",
        "Research Materials & Samples: ₹2,000-5,000",
      ],
    },
    {
      category: "Internship & Field Work",
      amount: "₹15,000-30,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#10B981",
      details: [
        "Internship Travel: ₹8,000-15,000",
        "Field Work Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹2,000-5,000",
      ],
    },
    {
      category: "Living/Hostel Costs",
      amount: "₹8,000-15,000",
      description: "Monthly in cities like Pantnagar, Ludhiana, or Coimbatore",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹5,000-10,000 per month",
        "Food & Meals: ₹2,000-4,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹500-1,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹10,000-20,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Engineering Textbooks: ₹5,000-8,000",
        "Agricultural Engineering Journals: ₹2,000-5,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Study Guides & Notes: ₹1,000-3,000",
      ],
    },
  ],
};

// ─── AGRICULTURE - AGRICULTURE RESEARCH - DETAILED COSTS ────────

export const agricultureResearchCosts: CareerCostData = {
  career: "agriculture_research",
  category: "agriculture",
  costs: [
    {
      category: "Government Institutions (State Agri Universities)",
      amount: "₹20,000-1.5 Lakh",
      description: "Total degree cost",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "B.Sc Agriculture: ₹20,000-50,000 total",
        "M.Sc Agriculture: ₹30,000-80,000 total",
        "Ph.D Agriculture: ₹50,000-1.5 Lakhs total",
        "ICAR Institutes: ₹20,000-1 Lakh total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹5-12 Lakh",
      description: "Total degree cost",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Private B.Sc Programs: ₹1-3 Lakhs total",
        "Private M.Sc Programs: ₹2-5 Lakhs total",
        "Premium Research Institutes: ₹5-12 Lakhs total",
        "Annual fees: ₹1-3 Lakhs per year",
      ],
    },
    {
      category: "Research Equipment & Lab",
      amount: "₹30,000-60,000",
      description: "Lab equipment and research materials",
      icon: "🔬",
      color: "#F59E0B",
      details: [
        "Lab Instruments & Tools: ₹15,000-30,000",
        "Research Software & Databases: ₹10,000-20,000",
        "Field Research Equipment: ₹5,000-10,000",
        "Safety Gear & Protective Equipment: ₹3,000-5,000",
      ],
    },
    {
      category: "Research Fellowships (JRF/SRF)",
      amount: "₹31,000-35,000",
      description: "Monthly stipend for research fellows",
      icon: "💰",
      color: "#EC4899",
      details: [
        "JRF (Junior Research Fellow): ₹31,000/month",
        "SRF (Senior Research Fellow): ₹35,000/month",
        "Covers living and research costs",
        "Available during Ph.D and post-doctoral research",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹10,000-20,000",
      description: "Monthly expenses",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹5,000-12,000 per month",
        "Food & Meals: ₹3,000-6,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Field Research & Travel",
      amount: "₹20,000-40,000",
      description: "Annual field work and travel",
      icon: "✈️",
      color: "#3B82F6",
      details: [
        "Field Visit Travel: ₹10,000-20,000",
        "Research Site Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹3,000-5,000",
        "Research Samples & Materials: ₹2,000-5,000",
      ],
    },
    {
      category: "Publication & Conference Costs",
      amount: "₹15,000-30,000",
      description: "Research dissemination",
      icon: "📚",
      color: "#8B5CF6",
      details: [
        "Journal Publication Fees: ₹5,000-15,000",
        "Conference Registration: ₹5,000-10,000",
        "Travel to Conferences: ₹5,000-10,000",
        "Research Paper Preparation: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹10,000-20,000",
      description: "Books, journals, and research materials",
      icon: "📖",
      color: "#EC4899",
      details: [
        "Agricultural Research Textbooks: ₹3,000-6,000",
        "Research Journals & Databases: ₹3,000-6,000",
        "Online Courses & Certifications: ₹2,000-5,000",
        "Study Guides & Notes: ₹2,000-4,000",
      ],
    },
  ],
};

// ─── AGRICULTURE - ANIMAL SCIENCE - DETAILED COSTS ────────────────

export const animalScienceCosts: CareerCostData = {
  career: "animal_science",
  category: "agriculture",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹30,000-1.5 Lakh",
      description: "Total degree fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "B.Sc Animal Science: ₹30,000-60,000 total",
        "M.Sc Animal Science: ₹50,000-1 Lakh total",
        "State Agricultural Universities: ₹30,000-1.2 Lakhs total",
        "ICAR Institutes: ₹40,000-1.5 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹10-25 Lakh",
      description: "Total degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Private B.Sc Programs: ₹3-8 Lakhs total",
        "Private M.Sc Programs: ₹5-12 Lakhs total",
        "Premium Veterinary/Animal Science Institutes: ₹10-25 Lakhs total",
        "Annual fees: ₹2.5-6 Lakhs per year",
      ],
    },
    {
      category: "Medical Equipment & Kits",
      amount: "₹30,000-50,000",
      description: "Stethoscopes, diagnostic kits, and tools",
      icon: "🩺",
      color: "#F59E0B",
      details: [
        "Stethoscope & Basic Instruments: ₹5,000-10,000",
        "Diagnostic Kits & Equipment: ₹10,000-20,000",
        "Lab Coats & Protective Gear: ₹3,000-5,000",
        "Field Work Equipment: ₹5,000-10,000",
        "Microscopes & Accessories: ₹7,000-15,000",
      ],
    },
    {
      category: "NEET Coaching",
      amount: "₹50,000-1 Lakh",
      description: "Entrance exam preparation",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Online NEET Coaching: ₹30,000-50,000",
        "Offline NEET Coaching: ₹50,000-1 Lakh",
        "Study Materials & Mock Tests: ₹10,000-20,000",
        "Exam Registration Fees: ₹1,500-2,500",
      ],
    },
    {
      category: "Lab Equipment & Research Materials",
      amount: "₹25,000-45,000",
      description: "Practical work and experiments",
      icon: "🔬",
      color: "#3B82F6",
      details: [
        "Lab Instruments & Tools: ₹12,000-20,000",
        "Research Samples & Cultures: ₹5,000-10,000",
        "Safety Equipment & Protective Gear: ₹3,000-5,000",
        "Field Work Equipment: ₹5,000-10,000",
      ],
    },
    {
      category: "Hostel/Living Costs",
      amount: "₹10,000-18,000",
      description: "Monthly in cities like Bareilly or Ludhiana",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹6,000-12,000 per month",
        "Food & Meals: ₹2,500-4,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹500-1,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Internship & Field Work",
      amount: "₹15,000-30,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#8B5CF6",
      details: [
        "Internship Travel: ₹8,000-15,000",
        "Field Work Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📖",
      color: "#EC4899",
      details: [
        "Animal Science Textbooks: ₹4,000-8,000",
        "Research Journals & Databases: ₹3,000-6,000",
        "Online Courses & Certifications: ₹2,000-5,000",
        "Study Guides & Notes: ₹2,000-4,000",
        "Veterinary References: ₹1,000-3,000",
      ],
    },
  ],
};

// ─── AGRICULTURE - DAIRY TECHNOLOGY - DETAILED COSTS ──────────────

export const dairyTechnologyCosts: CareerCostData = {
  career: "dairy_technology",
  category: "agriculture",
  costs: [
    {
      category: "Government Colleges",
      amount: "₹20,000-1.5 Lakh",
      description: "Total 4-year degree fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "State Agricultural Universities: ₹20,000-60,000 total",
        "ICAR Institutes: ₹40,000-1 Lakh total",
        "Government Dairy Technology Colleges: ₹30,000-1.2 Lakhs total",
        "Central Universities: ₹50,000-1.5 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹5-12 Lakh",
      description: "Total 4-year degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private Dairy Tech Colleges: ₹5-8 Lakhs total",
        "Premium Food Science & Dairy Institutes: ₹8-12 Lakhs total",
        "Annual fees: ₹1.25-3 Lakhs per year",
        "Includes labs, equipment, and industry partnerships",
      ],
    },
    {
      category: "Entrance Exam Coaching",
      amount: "₹50,000-1 Lakh",
      description: "NEET/JEE/ICAR exam preparation",
      icon: "📚",
      color: "#F59E0B",
      details: [
        "NEET Coaching: ₹40,000-80,000",
        "JEE Coaching: ₹40,000-80,000",
        "ICAR Exam Coaching: ₹30,000-60,000",
        "Study Materials & Mock Tests: ₹10,000-20,000",
        "Exam Registration Fees: ₹2,000-5,000",
      ],
    },
    {
      category: "Lab Equipment & Materials",
      amount: "₹30,000-50,000",
      description: "Dairy processing and testing equipment",
      icon: "🔬",
      color: "#EC4899",
      details: [
        "Lab Instruments & Testing Kits: ₹15,000-25,000",
        "Dairy Processing Equipment: ₹8,000-15,000",
        "Safety Gear & Protective Equipment: ₹3,000-5,000",
        "Field Work Equipment: ₹4,000-8,000",
      ],
    },
    {
      category: "Internship & Field Work",
      amount: "₹15,000-30,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#3B82F6",
      details: [
        "Internship Travel: ₹8,000-15,000",
        "Dairy Farm Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹10,000-20,000",
      description: "Monthly in education hubs",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹6,000-12,000 per month",
        "Food & Meals: ₹2,500-5,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹500-1,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹15,000-30,000",
      description: "Optional industry certifications",
      icon: "🎓",
      color: "#8B5CF6",
      details: [
        "Dairy Technology Certification: ₹8,000-15,000",
        "Food Safety & Quality Management: ₹5,000-10,000",
        "Professional Memberships: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📖",
      color: "#EC4899",
      details: [
        "Dairy Technology Textbooks: ₹4,000-8,000",
        "Food Science Journals & Databases: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Study Guides & Notes: ₹2,000-4,000",
        "Industry Standards & Manuals: ₹1,000-3,000",
      ],
    },
  ],
};

// ─── AGRICULTURE - FOOD SCIENCE - DETAILED COSTS ──────────────────

export const foodScienceCosts: CareerCostData = {
  career: "food_science",
  category: "agriculture",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹40,000-2 Lakh",
      description: "Total 4-year degree fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "State Agricultural Universities: ₹40,000-80,000 total",
        "ICAR Institutes: ₹60,000-1.2 Lakhs total",
        "Government Food Science Colleges: ₹50,000-1.5 Lakhs total",
        "Central Universities: ₹80,000-2 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹5-15 Lakh",
      description: "Total 4-year degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private Food Science Colleges: ₹5-10 Lakhs total",
        "Premium Food Technology Institutes: ₹10-15 Lakhs total",
        "Annual fees: ₹1.25-3.75 Lakhs per year",
        "Includes labs, equipment, and industry partnerships",
      ],
    },
    {
      category: "Lab Kits & Equipment",
      amount: "₹40,000-70,000",
      description: "Food testing and analysis equipment",
      icon: "🔬",
      color: "#F59E0B",
      details: [
        "Lab Testing Kits: ₹15,000-25,000",
        "Food Analysis Equipment: ₹15,000-30,000",
        "Safety Gear & Protective Equipment: ₹5,000-8,000",
        "Field Sampling Equipment: ₹5,000-10,000",
      ],
    },
    {
      category: "Certification Exams",
      amount: "₹30,000-50,000",
      description: "ISO, HACCP, and food safety certifications",
      icon: "📜",
      color: "#EC4899",
      details: [
        "ISO 22000 Certification: ₹10,000-15,000",
        "HACCP Certification: ₹8,000-12,000",
        "Food Safety Supervisor Exam: ₹5,000-8,000",
        "Quality Management Certifications: ₹7,000-15,000",
      ],
    },
    {
      category: "Coaching & Preparation",
      amount: "₹40,000-80,000",
      description: "Entrance exam and professional coaching",
      icon: "📚",
      color: "#3B82F6",
      details: [
        "Entrance Exam Coaching: ₹30,000-60,000",
        "Professional Development Courses: ₹10,000-20,000",
        "Study Materials & Mock Tests: ₹5,000-10,000",
        "Exam Registration Fees: ₹2,000-5,000",
      ],
    },
    {
      category: "Internship & Field Work",
      amount: "₹15,000-30,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#10B981",
      details: [
        "Internship Travel: ₹8,000-15,000",
        "Food Processing Plant Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹2,000-5,000",
      ],
    },
    {
      category: "Living/Hostel Costs",
      amount: "₹12,000-22,000",
      description: "Monthly in cities like Noida, Mumbai, or Coimbatore",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹7,000-14,000 per month",
        "Food & Meals: ₹3,000-6,000 per month",
        "Transport: ₹1,500-3,000 per month",
        "Books & Materials: ₹500-1,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹15,000-30,000",
      description: "Books, journals, and reference materials",
      icon: "📖",
      color: "#EC4899",
      details: [
        "Food Science Textbooks: ₹5,000-10,000",
        "Food Technology Journals & Databases: ₹4,000-8,000",
        "Online Courses & Certifications: ₹3,000-6,000",
        "Study Guides & Industry Standards: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARCHITECTURE & CONSTRUCTION - ARCHITECT - DETAILED COSTS ─────

export const architectCosts: CareerCostData = {
  career: "architect",
  category: "architecture_and_construction",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹2.5-6 Lakh",
      description: "Total 5-year degree fees (SPA, NIT, IIT)",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "School of Planning & Architecture (SPA): ₹2.5-4 Lakhs total",
        "NIT Architecture Programs: ₹3-5 Lakhs total",
        "IIT Architecture Programs: ₹4-6 Lakhs total",
        "Annual fees: ₹50,000-1.2 Lakhs per year",
      ],
    },
    {
      category: "Top Private Institutions",
      amount: "₹12-25 Lakh",
      description: "Total 5-year degree fees (CEPT, Manipal)",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "CEPT University: ₹12-18 Lakhs total",
        "Manipal School of Architecture: ₹15-22 Lakhs total",
        "Other Premium Architecture Schools: ₹12-25 Lakhs total",
        "Annual fees: ₹2.4-5 Lakhs per year",
      ],
    },
    {
      category: "High-End Laptop",
      amount: "₹80,000+",
      description: "For CAD, BIM, and design software",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹80,000-1,50,000",
        "AutoCAD & Design Software: ₹15,000-30,000",
        "BIM Software (Revit, ArchiCAD): ₹20,000-40,000",
        "Rendering Software (3DS Max, Lumion): ₹15,000-25,000",
      ],
    },
    {
      category: "Drafting Tools & Equipment",
      amount: "₹10,000-20,000",
      description: "Drawing instruments and materials",
      icon: "📐",
      color: "#EC4899",
      details: [
        "Drafting Kit & Instruments: ₹3,000-5,000",
        "Drawing Boards & Stands: ₹2,000-4,000",
        "Quality Paper & Materials: ₹2,000-4,000",
        "Measuring Tools & Scales: ₹1,000-2,000",
        "Sketching & Rendering Supplies: ₹2,000-5,000",
      ],
    },
    {
      category: "Model Making Materials",
      amount: "₹15,000-30,000",
      description: "Materials for architectural models",
      icon: "🏗️",
      color: "#3B82F6",
      details: [
        "Wood, Foam & Cardboard: ₹5,000-10,000",
        "Adhesives & Finishing Materials: ₹2,000-4,000",
        "Lighting & Display Equipment: ₹3,000-6,000",
        "Photography Equipment for Models: ₹5,000-10,000",
      ],
    },
    {
      category: "Hostel/Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in metros",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Internship & Site Visits",
      amount: "₹20,000-40,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#8B5CF6",
      details: [
        "Internship Travel: ₹10,000-20,000",
        "Site Visit Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹3,000-5,000",
        "Documentation & Photography: ₹2,000-5,000",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹15,000-30,000",
      description: "Optional professional credentials",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "NATA/JEE Coaching: ₹30,000-60,000 (pre-college)",
        "BIM Certification: ₹10,000-20,000",
        "Green Building Certification (LEED): ₹8,000-15,000",
        "Professional Memberships (IAI): ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Architecture Textbooks & References: ₹5,000-10,000",
        "Design & Art Journals: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Study Guides & Design Portfolios: ₹2,000-4,000",
      ],
    },
  ],
};

// ─── ARCHITECTURE & CONSTRUCTION - CONSTRUCTION - DETAILED COSTS ──

export const constructionCosts: CareerCostData = {
  career: "construction",
  category: "architecture_and_construction",
  costs: [
    {
      category: "Government Colleges",
      amount: "₹2-5 Lakh",
      description: "Total 4-year degree",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "NIT Civil Engineering: ₹2-3.5 Lakhs total",
        "State Engineering Colleges: ₹2-4 Lakhs total",
        "Government Polytechnics: ₹1.5-2.5 Lakhs total",
        "Annual fees: ₹50,000-1.25 Lakhs per year",
      ],
    },
    {
      category: "Private Universities",
      amount: "₹8-20 Lakh",
      description: "Total 4-year degree",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Top Private Engineering Colleges: ₹8-15 Lakhs total",
        "Premium Construction Management Schools: ₹12-20 Lakhs total",
        "Annual fees: ₹2-5 Lakhs per year",
        "Includes labs, equipment, and industry partnerships",
      ],
    },
    {
      category: "Laptop for Heavy Software",
      amount: "₹70,000+",
      description: "For AutoCAD, Revit, and design software",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹70,000-1,50,000",
        "AutoCAD & Design Software: ₹15,000-30,000",
        "Revit & BIM Software: ₹20,000-40,000",
        "Project Management Software: ₹10,000-20,000",
      ],
    },
    {
      category: "Safety Equipment & Tools",
      amount: "₹20,000-40,000",
      description: "Personal protective equipment and instruments",
      icon: "🦺",
      color: "#EC4899",
      details: [
        "Safety Gear (Helmet, Vest, Boots): ₹5,000-10,000",
        "Measuring & Surveying Tools: ₹8,000-15,000",
        "First Aid & Safety Kit: ₹2,000-3,000",
        "Work Gloves & Protective Equipment: ₹3,000-5,000",
        "Hard Hat & Visibility Gear: ₹2,000-4,000",
      ],
    },
    {
      category: "Site Visit & Field Work",
      amount: "₹25,000-45,000",
      description: "Travel and accommodation for site visits",
      icon: "✈️",
      color: "#3B82F6",
      details: [
        "Site Visit Travel: ₹12,000-20,000",
        "Construction Site Accommodation: ₹8,000-15,000",
        "Transportation & Logistics: ₹3,000-5,000",
        "Documentation & Photography: ₹2,000-5,000",
      ],
    },
    {
      category: "Hostel/Living Costs",
      amount: "₹1.5-2.5 Lakh",
      description: "Per year",
      icon: "🏠",
      color: "#10B981",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month (₹96k-₹1.8L/year)",
        "Food & Meals: ₹4,000-7,000 per month (₹48k-₹84k/year)",
        "Transport: ₹2,000-3,000 per month (₹24k-₹36k/year)",
        "Books & Materials: ₹1,000-2,000 per month (₹12k-₹24k/year)",
        "Miscellaneous: ₹1,000-2,000 per month (₹12k-₹24k/year)",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹20,000-40,000",
      description: "Optional industry certifications",
      icon: "🎓",
      color: "#8B5CF6",
      details: [
        "GATE Exam Coaching: ₹20,000-40,000",
        "Project Management Certification (PMP): ₹15,000-25,000",
        "Construction Safety Certification: ₹8,000-12,000",
        "Professional Memberships (IEI): ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Civil Engineering Textbooks: ₹5,000-10,000",
        "Construction Management Journals: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Study Guides & Technical Standards: ₹2,000-4,000",
      ],
    },
  ],
};

// ─── ARCHITECTURE & CONSTRUCTION - MAINTENANCE & OPERATION MANAGEMENT ─

export const maintenanceAndOperationManagementCosts: CareerCostData = {
  career: "maintenance_and_operation_management",
  category: "architecture_and_construction",
  costs: [
    {
      category: "Diploma/Polytechnic",
      amount: "₹20,000-1.5 Lakh",
      description: "Total degree cost",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Government Polytechnics: ₹20,000-50,000 total",
        "State Technical Institutes: ₹30,000-80,000 total",
        "Private Polytechnics: ₹60,000-1.5 Lakhs total",
        "Annual fees: ₹5,000-50,000 per year",
      ],
    },
    {
      category: "B.Tech (Government)",
      amount: "₹3-10 Lakh",
      description: "Total 4-year degree",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "NIT Civil/Mechanical Engineering: ₹3-5 Lakhs total",
        "State Engineering Colleges: ₹3-7 Lakhs total",
        "Government Technical Universities: ₹4-10 Lakhs total",
        "Annual fees: ₹75,000-2.5 Lakhs per year",
      ],
    },
    {
      category: "MBA (IIMs/Top Private)",
      amount: "₹15-25 Lakh",
      description: "Total 2-year program",
      icon: "🎓",
      color: "#F59E0B",
      details: [
        "IIM MBA Programs: ₹20-25 Lakhs total",
        "Top Private B-Schools: ₹15-22 Lakhs total",
        "Premium Management Institutes: ₹18-25 Lakhs total",
        "Annual fees: ₹7.5-12.5 Lakhs per year",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹20,000-50,000",
      description: "Industry certifications and training",
      icon: "📜",
      color: "#EC4899",
      details: [
        "Facility Management Certification: ₹10,000-20,000",
        "Project Management (PMP): ₹15,000-25,000",
        "Building Maintenance Certification: ₹8,000-15,000",
        "Professional Memberships: ₹5,000-10,000",
      ],
    },
    {
      category: "Software & Tools",
      amount: "₹30,000-60,000",
      description: "Maintenance management software and equipment",
      icon: "💻",
      color: "#3B82F6",
      details: [
        "CMMS Software (Computerized Maintenance): ₹10,000-20,000",
        "Project Management Tools: ₹8,000-15,000",
        "Building Information Modeling (BIM): ₹10,000-20,000",
        "Diagnostic Equipment: ₹5,000-10,000",
      ],
    },
    {
      category: "Field Work & Site Visits",
      amount: "₹15,000-30,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#10B981",
      details: [
        "Site Visit Travel: ₹8,000-15,000",
        "Facility Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹2,000-5,000",
      ],
    },
    {
      category: "Hostel/Living Costs",
      amount: "₹10,000-20,000",
      description: "Monthly in cities like Pune or Bengaluru",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹6,000-12,000 per month",
        "Food & Meals: ₹2,500-5,000 per month",
        "Transport: ₹1,000-2,000 per month",
        "Books & Materials: ₹500-1,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Maintenance Management Textbooks: ₹4,000-8,000",
        "Building Systems & Standards: ₹3,000-6,000",
        "Online Courses & Certifications: ₹2,000-5,000",
        "Technical Manuals & Guides: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARCHITECTURE & CONSTRUCTION - URBAN PLANNING & MANAGEMENT ────

export const urbanPlanningAndManagementCosts: CareerCostData = {
  career: "urban_planning_and_management",
  category: "architecture_and_construction",
  costs: [
    {
      category: "Government (SPA, NIT)",
      amount: "₹2-6 Lakh",
      description: "Total B.Plan degree (4 years)",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "School of Planning & Architecture (SPA): ₹2-3.5 Lakhs total",
        "NIT Urban Planning Programs: ₹2.5-4 Lakhs total",
        "State Planning Institutes: ₹2-5 Lakhs total",
        "Central Universities: ₹3-6 Lakhs total",
      ],
    },
    {
      category: "Private (Amity, Anant)",
      amount: "₹8-15 Lakh",
      description: "Total B.Plan degree (4 years)",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Amity University: ₹8-12 Lakhs total",
        "Anant National University: ₹10-15 Lakhs total",
        "Other Premium Planning Schools: ₹8-15 Lakhs total",
        "Annual fees: ₹2-3.75 Lakhs per year",
      ],
    },
    {
      category: "Master's (M.Plan) - Government",
      amount: "₹1-4 Lakh",
      description: "Total M.Plan degree (2 years)",
      icon: "🎓",
      color: "#F59E0B",
      details: [
        "SPA M.Plan: ₹1-1.5 Lakhs total",
        "NIT M.Plan Programs: ₹1.5-2.5 Lakhs total",
        "State Universities M.Plan: ₹1-3 Lakhs total",
        "Central Universities M.Plan: ₹2-4 Lakhs total",
      ],
    },
    {
      category: "GIS & CAD Software Laptop",
      amount: "₹75,000+",
      description: "Capable of running GIS and CAD software",
      icon: "💻",
      color: "#EC4899",
      details: [
        "Laptop/Computer: ₹75,000-1,50,000",
        "ArcGIS & GIS Software: ₹20,000-40,000",
        "AutoCAD & Design Software: ₹15,000-30,000",
        "Urban Planning Tools & Plugins: ₹10,000-20,000",
      ],
    },
    {
      category: "GIS & Planning Tools",
      amount: "₹30,000-60,000",
      description: "Software subscriptions and licenses",
      icon: "🗺️",
      color: "#3B82F6",
      details: [
        "ArcGIS Professional License: ₹15,000-30,000/year",
        "QGIS & Open Source Tools: Free to ₹10,000",
        "Urban Planning Software: ₹10,000-20,000",
        "Data Analysis Tools: ₹5,000-10,000",
      ],
    },
    {
      category: "Field Work & Site Surveys",
      amount: "₹20,000-40,000",
      description: "Travel and accommodation for field studies",
      icon: "✈️",
      color: "#10B981",
      details: [
        "Field Study Travel: ₹10,000-20,000",
        "Survey Site Accommodation: ₹5,000-10,000",
        "Transportation & Logistics: ₹3,000-5,000",
        "Documentation & Photography: ₹2,000-5,000",
      ],
    },
    {
      category: "Hostel/Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in major cities",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹15,000-30,000",
      description: "Optional professional credentials",
      icon: "📜",
      color: "#EC4899",
      details: [
        "GIS Certification (Esri): ₹10,000-20,000",
        "Urban Planning Certification: ₹8,000-15,000",
        "Professional Memberships (ACRP/ISOCARP): ₹5,000-10,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Urban Planning Textbooks: ₹4,000-8,000",
        "GIS & Mapping Journals: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Planning Standards & Guidelines: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - ANIMATOR - DETAILED COSTS ──────────────────

export const animatorCosts: CareerCostData = {
  career: "animator",
  category: "arts_and_design",
  costs: [
    {
      category: "Government Institutions (NID/IIT)",
      amount: "₹2-16 Lakh",
      description: "Total course fees (highly subsidized to premium)",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "NID (National Institute of Design): ₹2-4 Lakhs total",
        "IIT Design Programs: ₹3-6 Lakhs total",
        "Government Art & Animation Schools: ₹2-8 Lakhs total",
        "Premium Government Institutes: ₹8-16 Lakhs total",
      ],
    },
    {
      category: "Private Institutes (Arena/MAAC)",
      amount: "₹1.5-6 Lakh",
      description: "Total course fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Arena Animation: ₹1.5-3 Lakhs total",
        "MAAC (Maya Academy of Advanced Cinematics): ₹2-4 Lakhs total",
        "Other Premium Animation Schools: ₹2-6 Lakhs total",
        "Annual fees: ₹50,000-2 Lakhs per year",
      ],
    },
    {
      category: "Powerful PC/Laptop",
      amount: "₹80,000-1.5 Lakh",
      description: "High-performance computer for animation software",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Gaming/Workstation Laptop: ₹80,000-1,50,000",
        "Desktop Computer: ₹1,00,000-2,00,000",
        "Graphics Card (GPU): ₹30,000-80,000",
        "RAM Upgrade: ₹10,000-30,000",
      ],
    },
    {
      category: "Animation Software",
      amount: "₹50,000-1.2 Lakh",
      description: "Professional animation and design software",
      icon: "🎬",
      color: "#EC4899",
      details: [
        "Maya/3DS Max License: ₹30,000-60,000/year",
        "Adobe Creative Suite: ₹15,000-30,000/year",
        "Blender & Open Source: Free to ₹20,000",
        "Rendering Software (Arnold, V-Ray): ₹20,000-50,000",
      ],
    },
    {
      category: "Peripherals & Equipment",
      amount: "₹30,000-60,000",
      description: "Drawing tablets, monitors, and accessories",
      icon: "🖱️",
      color: "#3B82F6",
      details: [
        "Graphics Tablet/Pen Display: ₹15,000-40,000",
        "High-Resolution Monitor: ₹15,000-30,000",
        "Keyboard & Mouse: ₹5,000-10,000",
        "External Storage & Backup: ₹5,000-10,000",
      ],
    },
    {
      category: "Portfolio & Showreel",
      amount: "₹10,000-25,000",
      description: "Creating professional portfolio and demo reel",
      icon: "🎨",
      color: "#10B981",
      details: [
        "Portfolio Website Hosting: ₹5,000-10,000",
        "Professional Photography/Videography: ₹5,000-10,000",
        "Showreel Production: ₹5,000-15,000",
        "Printing & Materials: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in major cities",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Internship & Freelance Work",
      amount: "₹10,000-30,000",
      description: "Travel and setup for internships",
      icon: "✈️",
      color: "#EC4899",
      details: [
        "Internship Travel: ₹5,000-15,000",
        "Studio Setup: ₹3,000-8,000",
        "Networking Events: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, courses, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Animation & Design Textbooks: ₹4,000-8,000",
        "Online Courses (Udemy, Skillshare): ₹3,000-8,000",
        "Tutorial Subscriptions: ₹2,000-5,000",
        "Reference Materials & Assets: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - COSMETOLOGY - DETAILED COSTS ────────────────

export const cosmetologyCosts: CareerCostData = {
  career: "cosmetology",
  category: "arts_and_design",
  costs: [
    {
      category: "Government (Nagpur Univ/DSEU)",
      amount: "₹14,000-40,000",
      description: "Total course fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Nagpur University Cosmetology: ₹14,000-25,000 total",
        "DSEU (Delhi Skill & Entrepreneurship University): ₹15,000-30,000 total",
        "Government Beauty Schools: ₹14,000-40,000 total",
        "Duration: 3 months to 3 years depending on program",
      ],
    },
    {
      category: "Private (VLCC/Lakme/Orane)",
      amount: "₹1.5-5 Lakh",
      description: "Total course fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "VLCC Institute: ₹1.5-3 Lakhs total",
        "Lakme Academy: ₹2-4 Lakhs total",
        "Orane Institute: ₹1.5-3.5 Lakhs total",
        "Other Premium Beauty Schools: ₹2-5 Lakhs total",
      ],
    },
    {
      category: "Beauty Equipment & Tools",
      amount: "₹30,000-60,000",
      description: "Professional beauty tools and equipment",
      icon: "💄",
      color: "#F59E0B",
      details: [
        "Hair Styling Tools (Dryer, Straightener, Curler): ₹10,000-20,000",
        "Makeup Brushes & Kits: ₹5,000-10,000",
        "Skincare Equipment (Facial Steamer, etc.): ₹8,000-15,000",
        "Nail Art & Manicure Tools: ₹5,000-10,000",
        "Professional Scissors & Shears: ₹3,000-8,000",
      ],
    },
    {
      category: "Cosmetics & Products",
      amount: "₹20,000-40,000",
      description: "Professional beauty and skincare products",
      icon: "💅",
      color: "#EC4899",
      details: [
        "Professional Makeup Brands: ₹10,000-20,000",
        "Skincare Products: ₹5,000-10,000",
        "Hair Care Products: ₹3,000-8,000",
        "Nail Products & Polish: ₹2,000-5,000",
      ],
    },
    {
      category: "Salon/Workspace Setup",
      amount: "₹50,000-1.5 Lakh",
      description: "Initial setup for salon or beauty workspace",
      icon: "💇",
      color: "#3B82F6",
      details: [
        "Salon Furniture (Chairs, Mirrors, Stations): ₹30,000-80,000",
        "Lighting & Ambiance Setup: ₹10,000-20,000",
        "Sterilization Equipment: ₹5,000-15,000",
        "Storage & Organization: ₹5,000-15,000",
      ],
    },
    {
      category: "Certification & Licensing",
      amount: "₹5,000-15,000",
      description: "Professional certifications and licenses",
      icon: "📜",
      color: "#10B981",
      details: [
        "Professional Certification Exams: ₹3,000-8,000",
        "Health & Safety Certification: ₹2,000-5,000",
        "Business License & Registration: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in Tier-1 cities",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Internship & Apprenticeship",
      amount: "₹10,000-25,000",
      description: "Travel and setup for internships",
      icon: "✈️",
      color: "#EC4899",
      details: [
        "Internship Travel: ₹5,000-10,000",
        "Salon Apprenticeship Setup: ₹3,000-8,000",
        "Networking Events: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹8,000-20,000",
      description: "Books, courses, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Cosmetology Textbooks: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Beauty & Skincare Guides: ₹2,000-4,000",
        "Professional Magazines & Resources: ₹1,000-3,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - GRAPHICAL DESIGNING - DETAILED COSTS ────────

export const graphicalDesigningCosts: CareerCostData = {
  career: "graphical_designing",
  category: "arts_and_design",
  costs: [
    {
      category: "Government Institutions (NID/IIT)",
      amount: "₹1.5-12 Lakh",
      description: "Total for 4 years",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "NID (National Institute of Design): ₹2-6 Lakhs total",
        "IIT Design Programs: ₹3-8 Lakhs total",
        "Government Design Colleges: ₹1.5-5 Lakhs total",
        "Premium Government Institutes: ₹8-12 Lakhs total",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹15-25 Lakh",
      description: "Total degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Pearl Academy: ₹15-20 Lakhs total",
        "MIT Institute of Design: ₹18-25 Lakhs total",
        "Other Premium Design Schools: ₹15-25 Lakhs total",
        "Annual fees: ₹3.75-6.25 Lakhs per year",
      ],
    },
    {
      category: "Powerful PC/Laptop",
      amount: "₹70,000-1.2 Lakh",
      description: "High-performance computer for design work",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Gaming/Workstation Laptop: ₹70,000-1,20,000",
        "Desktop Computer: ₹1,00,000-1,80,000",
        "Graphics Card (GPU): ₹30,000-80,000",
        "RAM & Storage Upgrades: ₹15,000-40,000",
      ],
    },
    {
      category: "Drawing Tablet",
      amount: "₹5,000-30,000",
      description: "Graphics tablet for digital design",
      icon: "🖊️",
      color: "#EC4899",
      details: [
        "Basic Drawing Tablet: ₹5,000-10,000",
        "Mid-Range Pen Tablet: ₹10,000-20,000",
        "Premium Pen Display: ₹20,000-30,000",
        "Stylus & Accessories: ₹2,000-5,000",
      ],
    },
    {
      category: "Design Software",
      amount: "₹40,000-80,000",
      description: "Professional design and creative software",
      icon: "🎨",
      color: "#3B82F6",
      details: [
        "Adobe Creative Suite (Photoshop, Illustrator, InDesign): ₹15,000-30,000/year",
        "Figma & Design Tools: ₹5,000-15,000/year",
        "3D Design Software (Cinema 4D, Blender): ₹10,000-25,000",
        "Motion Graphics Software: ₹10,000-20,000",
      ],
    },
    {
      category: "Peripherals & Accessories",
      amount: "₹20,000-50,000",
      description: "Monitor, keyboard, mouse, and other accessories",
      icon: "🖱️",
      color: "#10B981",
      details: [
        "High-Resolution Monitor (27-32 inch): ₹15,000-35,000",
        "Mechanical Keyboard: ₹3,000-8,000",
        "Precision Mouse: ₹2,000-5,000",
        "External Storage & Backup: ₹5,000-10,000",
      ],
    },
    {
      category: "Portfolio & Showcase",
      amount: "₹12,000-30,000",
      description: "Building professional portfolio and online presence",
      icon: "📁",
      color: "#8B5CF6",
      details: [
        "Portfolio Website Hosting: ₹3,000-8,000",
        "Professional Photography: ₹3,000-8,000",
        "Portfolio Printing & Presentation: ₹3,000-8,000",
        "Domain & Email Setup: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in major education hubs",
      icon: "🏠",
      color: "#EC4899",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Workshops & Training",
      amount: "₹10,000-25,000",
      description: "Specialized workshops and professional development",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "Design Workshops & Masterclasses: ₹5,000-12,000",
        "Software Training Courses: ₹3,000-8,000",
        "UX/UI Design Certification: ₹3,000-8,000",
        "Professional Memberships: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, courses, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Design Theory & History Books: ₹4,000-8,000",
        "Online Courses (Udemy, Skillshare): ₹3,000-8,000",
        "Design Magazines & Journals: ₹2,000-5,000",
        "Reference Materials & Assets: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - FASHION DESIGNING - DETAILED COSTS ────────

export const fashionDesigningCosts: CareerCostData = {
  career: "fashion_designing",
  category: "arts_and_design",
  costs: [
    {
      category: "Government Institutions (NIFT/NID)",
      amount: "₹6-12 Lakh",
      description: "Total degree fees (highly competitive)",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "NIFT (National Institute of Fashion Technology): ₹6-10 Lakhs total",
        "NID (National Institute of Design): ₹7-12 Lakhs total",
        "Government Fashion Design Colleges: ₹6-10 Lakhs total",
        "Duration: 4 years (B.Des) or 2 years (M.Des)",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹15-25 Lakh",
      description: "Total degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Pearl Academy: ₹15-20 Lakhs total",
        "ISDI (Indian School of Design & Innovation): ₹18-25 Lakhs total",
        "Other Premium Fashion Schools: ₹15-25 Lakhs total",
        "Annual fees: ₹3.75-6.25 Lakhs per year",
      ],
    },
    {
      category: "Fabric & Materials",
      amount: "₹20,000-50,000",
      description: "Annual fabric and project materials",
      icon: "🧵",
      color: "#F59E0B",
      details: [
        "Fabric Samples & Swatches: ₹8,000-15,000/year",
        "Embellishments & Trims: ₹5,000-10,000/year",
        "Pattern Making Materials: ₹3,000-8,000/year",
        "Specialty Fabrics & Textiles: ₹4,000-17,000/year",
      ],
    },
    {
      category: "Specialized Software",
      amount: "₹30,000-60,000",
      description: "Design and CAD software licenses",
      icon: "💻",
      color: "#EC4899",
      details: [
        "Adobe Creative Suite (Illustrator, Photoshop): ₹15,000-30,000/year",
        "CLO 3D (Virtual Garment Design): ₹10,000-20,000/year",
        "CAD Software (Gerber, Lectra): ₹10,000-25,000/year",
        "Design Plugins & Tools: ₹5,000-10,000",
      ],
    },
    {
      category: "High-End Sewing Machines",
      amount: "₹20,000-50,000",
      description: "Professional sewing equipment",
      icon: "🪡",
      color: "#3B82F6",
      details: [
        "Industrial Sewing Machine: ₹20,000-40,000",
        "Serger/Overlock Machine: ₹15,000-30,000",
        "Embroidery Machine: ₹25,000-50,000",
        "Maintenance & Repairs: ₹2,000-5,000/year",
      ],
    },
    {
      category: "Sewing Tools & Equipment",
      amount: "₹10,000-20,000",
      description: "Hand tools and accessories",
      icon: "✂️",
      color: "#10B981",
      details: [
        "Scissors, Shears & Cutting Tools: ₹3,000-6,000",
        "Measuring Tools & Rulers: ₹2,000-4,000",
        "Pins, Needles & Thread: ₹2,000-4,000",
        "Pressing Equipment & Irons: ₹3,000-6,000",
      ],
    },
    {
      category: "Portfolio & Internship",
      amount: "₹15,000-35,000",
      description: "Building portfolio and internship costs",
      icon: "📁",
      color: "#8B5CF6",
      details: [
        "Portfolio Printing & Presentation: ₹5,000-10,000",
        "Internship Travel & Accommodation: ₹8,000-20,000",
        "Fashion Show/Exhibition Costs: ₹3,000-8,000",
        "Professional Photography: ₹3,000-7,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in Tier-1 cities",
      icon: "🏠",
      color: "#EC4899",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Professional Development",
      amount: "₹10,000-25,000",
      description: "Workshops, certifications, and courses",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "Fashion Design Workshops: ₹5,000-12,000",
        "Draping & Tailoring Courses: ₹3,000-8,000",
        "Trend Forecasting Certifications: ₹2,000-5,000",
        "Professional Memberships: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Fashion Design Textbooks: ₹4,000-8,000",
        "Fashion Magazines & Journals: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Design References & Mood Boards: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - FINE ARTS - DETAILED COSTS ──────────────────

export const fineArtsCosts: CareerCostData = {
  career: "fine_arts",
  category: "arts_and_design",
  costs: [
    {
      category: "Government Institutions",
      amount: "₹10,000-25,000",
      description: "Annual tuition fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "College of Art, Delhi: ₹10,000-15,000/year",
        "Government Art Colleges: ₹10,000-20,000/year",
        "State Art Institutes: ₹12,000-25,000/year",
        "Duration: 4 years for BFA, 2 years for MFA",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹2.5-6 Lakh",
      description: "Annual tuition fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Srishti Institute of Art, Design & Technology: ₹2.5-4 Lakhs/year",
        "Manipal Institute of Fine Arts: ₹3-5 Lakhs/year",
        "Other Premium Art Schools: ₹2.5-6 Lakhs/year",
        "Total for 4 years: ₹10-24 Lakhs",
      ],
    },
    {
      category: "Art Supplies (Traditional)",
      amount: "₹30,000-80,000",
      description: "High-quality paints, brushes, and materials",
      icon: "🎨",
      color: "#F59E0B",
      details: [
        "Oil & Acrylic Paints: ₹8,000-15,000",
        "Brushes & Painting Tools: ₹5,000-10,000",
        "Canvas & Paper: ₹5,000-10,000",
        "Sculpting Stone & Clay: ₹8,000-20,000",
        "Printmaking Materials: ₹4,000-10,000",
      ],
    },
    {
      category: "Digital Art Equipment",
      amount: "₹50,000-1.5 Lakh",
      description: "High-end PC or tablet for digital art",
      icon: "💻",
      color: "#EC4899",
      details: [
        "Graphics Tablet/Pen Display: ₹30,000-80,000",
        "High-Performance Laptop: ₹60,000-1,50,000",
        "Desktop Computer: ₹80,000-2,00,000",
        "Monitor & Accessories: ₹15,000-30,000",
      ],
    },
    {
      category: "Digital Art Software",
      amount: "₹20,000-50,000",
      description: "Professional design and art software",
      icon: "🖌️",
      color: "#3B82F6",
      details: [
        "Adobe Creative Suite: ₹15,000-30,000/year",
        "Procreate/Clip Studio Paint: ₹5,000-10,000",
        "3D Modeling Software (Blender, Maya): Free to ₹20,000",
        "Photo Editing Software: ₹5,000-10,000",
      ],
    },
    {
      category: "Studio Space & Equipment",
      amount: "₹20,000-50,000",
      description: "Studio setup and equipment",
      icon: "🖼️",
      color: "#10B981",
      details: [
        "Easels & Stands: ₹5,000-10,000",
        "Lighting Equipment: ₹8,000-15,000",
        "Storage & Organization: ₹5,000-10,000",
        "Kiln/Furnace (if needed): ₹10,000-30,000",
      ],
    },
    {
      category: "Portfolio & Exhibition",
      amount: "₹15,000-35,000",
      description: "Building portfolio and exhibition costs",
      icon: "📁",
      color: "#8B5CF6",
      details: [
        "Portfolio Printing & Presentation: ₹5,000-10,000",
        "Exhibition Display Costs: ₹5,000-12,000",
        "Professional Photography: ₹3,000-8,000",
        "Website & Online Portfolio: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹12,000-20,000",
      description: "Monthly expenses",
      icon: "🏠",
      color: "#EC4899",
      details: [
        "Hostel/Rent: ₹6,000-12,000 per month",
        "Food & Meals: ₹3,000-5,000 per month",
        "Transport: ₹1,500-2,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Workshops & Training",
      amount: "₹10,000-25,000",
      description: "Specialized workshops and masterclasses",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "Art Workshops & Masterclasses: ₹5,000-12,000",
        "Specialized Technique Training: ₹3,000-8,000",
        "Artist Residencies: ₹2,000-5,000",
        "Professional Certifications: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹10,000-20,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Art History & Theory Books: ₹4,000-8,000",
        "Art Magazines & Journals: ₹2,000-4,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Reference Materials & Catalogs: ₹2,000-4,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - FASHION TECHNOLOGY - DETAILED COSTS ────────

export const fashionTechnologyCosts: CareerCostData = {
  career: "fashion_technology",
  category: "arts_and_design",
  costs: [
    {
      category: "Government (NIFT)",
      amount: "₹12-16 Lakh",
      description: "Total degree fees (4 years)",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "NIFT (National Institute of Fashion Technology): ₹12-16 Lakhs total",
        "NIFT BFTech Programs: ₹12-15 Lakhs total",
        "Duration: 4 years for BFTech",
        "Annual fees: ₹3-4 Lakhs per year",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹18-28 Lakh",
      description: "Total degree fees",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Pearl Academy: ₹18-22 Lakhs total",
        "Amity University: ₹20-28 Lakhs total",
        "Other Premium Fashion Tech Schools: ₹18-28 Lakhs total",
        "Annual fees: ₹4.5-7 Lakhs per year",
      ],
    },
    {
      category: "Specialized Software & Tools",
      amount: "₹40,000-80,000",
      description: "Fashion technology and CAD software",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "CLO 3D (Virtual Garment Design): ₹15,000-25,000/year",
        "Adobe Creative Suite: ₹15,000-30,000/year",
        "CAD Software (Gerber, Lectra, Optitex): ₹15,000-35,000/year",
        "Textile Testing Software: ₹10,000-20,000",
      ],
    },
    {
      category: "Lab Equipment & Materials",
      amount: "₹30,000-60,000",
      description: "Testing and production equipment",
      icon: "🔬",
      color: "#EC4899",
      details: [
        "Textile Testing Equipment: ₹15,000-30,000",
        "Fabric Analysis Tools: ₹8,000-15,000",
        "Quality Control Instruments: ₹8,000-15,000",
        "Maintenance & Calibration: ₹3,000-5,000/year",
      ],
    },
    {
      category: "Sewing & Production Equipment",
      amount: "₹25,000-50,000",
      description: "Industrial sewing and production machines",
      icon: "🪡",
      color: "#3B82F6",
      details: [
        "Industrial Sewing Machine: ₹20,000-40,000",
        "Serger/Overlock Machine: ₹15,000-30,000",
        "Pressing Equipment: ₹5,000-10,000",
        "Maintenance & Repairs: ₹2,000-5,000/year",
      ],
    },
    {
      category: "Fabric & Materials",
      amount: "₹20,000-40,000",
      description: "Annual fabric samples and testing materials",
      icon: "🧵",
      color: "#10B981",
      details: [
        "Fabric Samples & Swatches: ₹8,000-15,000/year",
        "Testing Materials & Chemicals: ₹6,000-12,000/year",
        "Embellishments & Trims: ₹4,000-8,000/year",
        "Specialty Textiles: ₹2,000-5,000/year",
      ],
    },
    {
      category: "Internship & Industry Exposure",
      amount: "₹15,000-35,000",
      description: "Travel and accommodation for internships",
      icon: "✈️",
      color: "#8B5CF6",
      details: [
        "Internship Travel: ₹8,000-15,000",
        "Factory/Mill Visits: ₹5,000-10,000",
        "Industry Conference Attendance: ₹3,000-8,000",
        "Professional Networking: ₹2,000-5,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹15,000-25,000",
      description: "Monthly in major education hubs",
      icon: "🏠",
      color: "#EC4899",
      details: [
        "Hostel/Rent: ₹8,000-15,000 per month",
        "Food & Meals: ₹4,000-7,000 per month",
        "Transport: ₹2,000-3,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹1,000-2,000 per month",
      ],
    },
    {
      category: "Professional Certifications",
      amount: "₹15,000-30,000",
      description: "Industry certifications and training",
      icon: "🎓",
      color: "#EC4899",
      details: [
        "Textile Technology Certification: ₹8,000-15,000",
        "Quality Management Certification: ₹5,000-10,000",
        "CAD Software Certification: ₹3,000-8,000",
        "Professional Memberships: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹12,000-25,000",
      description: "Books, journals, and reference materials",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Fashion Technology Textbooks: ₹4,000-8,000",
        "Textile Science Journals: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Technical Standards & Manuals: ₹3,000-6,000",
      ],
    },
  ],
};

// ─── ARTS & DESIGN - CREATIVE WRITER - DETAILED COSTS ──────────

export const creativeWriterCosts: CareerCostData = {
  career: "creative_writer",
  category: "arts_and_design",
  costs: [
    {
      category: "Government (DU/FTII)",
      amount: "₹15,000-1.5 Lakh",
      description: "Highly subsidized course fees",
      icon: "🏫",
      color: "#1E40AF",
      details: [
        "Delhi University (DU) English/Literature: ₹15,000-40,000 total",
        "FTII (Film and Television Institute of India): ₹50,000-1.5 Lakhs total",
        "Government Arts Colleges: ₹15,000-60,000 total",
        "Duration: 3 years (UG), 1-2 years (PG/Diploma)",
      ],
    },
    {
      category: "Private Institutions",
      amount: "₹2.5-6 Lakh",
      description: "Annual fees for premium institutes",
      icon: "🏢",
      color: "#6366F1",
      details: [
        "Srishti Institute of Art, Design & Technology: ₹2.5-4 Lakhs/year",
        "Pearl Academy: ₹2.5-5 Lakhs/year",
        "XIC (Xavier Institute of Communications): ₹3-6 Lakhs/year",
        "Other Premium Writing Schools: ₹2.5-6 Lakhs/year",
      ],
    },
    {
      category: "Laptop & Internet Connection",
      amount: "₹40,000-80,000",
      description: "Essential for writing and research",
      icon: "💻",
      color: "#F59E0B",
      details: [
        "Laptop/Computer: ₹40,000-80,000",
        "High-Speed Internet Connection: ₹1,000-2,000/month",
        "Writing Software (Microsoft Office, Scrivener): ₹5,000-15,000",
        "Cloud Storage & Backup: ₹2,000-5,000/year",
      ],
    },
    {
      category: "Books & Reference Materials",
      amount: "₹20,000-40,000",
      description: "Essential reading and reference books",
      icon: "📚",
      color: "#EC4899",
      details: [
        "Literature & Writing Textbooks: ₹8,000-15,000",
        "Reference Books & Dictionaries: ₹5,000-10,000",
        "Online Subscriptions (Scribd, Kindle Unlimited): ₹3,000-8,000/year",
        "Journals & Literary Magazines: ₹4,000-8,000",
      ],
    },
    {
      category: "Writing Courses & Workshops",
      amount: "₹15,000-40,000",
      description: "Professional development and skill enhancement",
      icon: "🎓",
      color: "#3B82F6",
      details: [
        "Online Writing Courses (Udemy, Coursera): ₹5,000-15,000",
        "Creative Writing Workshops: ₹8,000-20,000",
        "Screenwriting/Playwriting Courses: ₹10,000-25,000",
        "Professional Certifications: ₹5,000-15,000",
      ],
    },
    {
      category: "Portfolio & Publishing",
      amount: "₹10,000-30,000",
      description: "Building professional portfolio and self-publishing",
      icon: "📖",
      color: "#10B981",
      details: [
        "Portfolio Website Hosting: ₹3,000-8,000",
        "Self-Publishing Costs (ISBN, Printing): ₹5,000-15,000",
        "Professional Editing Services: ₹5,000-20,000",
        "Marketing & Promotion: ₹3,000-10,000",
      ],
    },
    {
      category: "Living Costs",
      amount: "₹12,000-20,000",
      description: "Monthly expenses in major cities",
      icon: "🏠",
      color: "#8B5CF6",
      details: [
        "Hostel/Rent: ₹6,000-12,000 per month",
        "Food & Meals: ₹3,000-5,000 per month",
        "Transport: ₹1,500-2,000 per month",
        "Books & Materials: ₹1,000-2,000 per month",
        "Miscellaneous: ₹500-1,000 per month",
      ],
    },
    {
      category: "Internship & Freelance Work",
      amount: "₹8,000-20,000",
      description: "Travel and setup for internships and freelancing",
      icon: "✈️",
      color: "#EC4899",
      details: [
        "Internship Travel: ₹4,000-10,000",
        "Freelance Setup & Tools: ₹2,000-5,000",
        "Networking Events & Conferences: ₹2,000-5,000",
      ],
    },
    {
      category: "Study Materials & Resources",
      amount: "₹10,000-25,000",
      description: "Additional books, courses, and reference materials",
      icon: "📝",
      color: "#EC4899",
      details: [
        "Creative Writing Textbooks: ₹4,000-8,000",
        "Genre-Specific Guides: ₹3,000-6,000",
        "Online Courses & Tutorials: ₹2,000-5,000",
        "Writing Journals & Notebooks: ₹1,000-3,000",
      ],
    },
  ],
};

// Update allIndividualCareerCosts with new careers
allIndividualCareerCosts.chartered_accountant = charteredAccountantCosts;
allIndividualCareerCosts.financial_analyst = financialAnalystCosts;
allIndividualCareerCosts.financial_and_investment_planning = financialAndInvestmentPlanningCosts;
allIndividualCareerCosts.financial_risk_management = financialRiskManagementCosts;
allIndividualCareerCosts.cost_accountant = costAccountantCosts;
allIndividualCareerCosts.economics = economicsCosts;
allIndividualCareerCosts.judge = judgeCosts;
allIndividualCareerCosts.agri_business_management = agriBusinessManagementCosts;
allIndividualCareerCosts.agricultural_engineer = agriculturalEngineerCosts;
allIndividualCareerCosts.agriculture_research = agricultureResearchCosts;
allIndividualCareerCosts.animal_science = animalScienceCosts;
allIndividualCareerCosts.dairy_technology = dairyTechnologyCosts;
allIndividualCareerCosts.food_science = foodScienceCosts;
allIndividualCareerCosts.architect = architectCosts;
allIndividualCareerCosts.construction = constructionCosts;
allIndividualCareerCosts.maintenance_and_operation_management = maintenanceAndOperationManagementCosts;
allIndividualCareerCosts.urban_planning_and_management = urbanPlanningAndManagementCosts;
allIndividualCareerCosts.animator = animatorCosts;
allIndividualCareerCosts.cosmetology = cosmetologyCosts;
allIndividualCareerCosts.creative_writer = creativeWriterCosts;
allIndividualCareerCosts.fashion_designing = fashionDesigningCosts;
allIndividualCareerCosts.fashion_technology = fashionTechnologyCosts;
allIndividualCareerCosts.fine_arts = fineArtsCosts;
allIndividualCareerCosts.graphical_designing = graphicalDesigningCosts;
