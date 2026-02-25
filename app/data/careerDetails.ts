export interface CareerDetail {
  title: string;
  description: string;
  overview: string;
  eligibility: string[];
  duration: string;
  salary: string;
  skills: string[];
  subjects: string[];
  colleges: string[];
  jobRoles: string[];
  companies: string[];
  scope: string;
}

export const careerDetails: Record<string, CareerDetail> = {
  actuarial_science: {
    title: "Actuarial Science",
    description: "Analyze financial risks using mathematics, statistics, and financial theories",
    overview:
      "Actuaries are professionals who analyze financial risks using mathematics, statistics, and financial theories. They work primarily in insurance, pension funds, and investment firms to assess the likelihood of future events, especially those with financial implications.",
    eligibility: [
      "12th pass with Mathematics",
      "Bachelor's degree in any stream",
      "Strong analytical skills",
    ],
    duration: "3-5 years (Bachelor's) + Actuarial exams",
    salary: "₹6-15 LPA (Entry level) | ₹20-50+ LPA (Experienced)",
    skills: [
      "Mathematical modeling",
      "Statistical analysis",
      "Risk assessment",
      "Financial analysis",
      "Problem-solving",
    ],
    subjects: ["Mathematics", "Statistics", "Economics", "Finance", "Probability"],
    colleges: [
      "Delhi University",
      "Mumbai University",
      "IIT Delhi",
      "Symbiosis Pune",
      "Christ University",
    ],
    jobRoles: [
      "Actuary",
      "Risk Analyst",
      "Insurance Underwriter",
      "Pension Consultant",
      "Investment Analyst",
    ],
    companies: [
      "LIC",
      "ICICI Prudential",
      "HDFC Life",
      "Bajaj Allianz",
      "Deloitte",
      "EY",
    ],
    scope:
      "High demand in insurance and financial sectors with excellent growth prospects globally",
  },
  banking_and_related_services: {
    title: "Banking and Related Services",
    description: "Manage financial operations and customer relationships in banking sector",
    overview:
      "Banking professionals manage financial operations, customer relationships, and investment portfolios. They work in commercial banks, investment banks, and financial institutions to facilitate financial transactions and provide advisory services.",
    eligibility: [
      "12th pass",
      "Bachelor's degree (any stream)",
      "Banking entrance exams",
    ],
    duration: "3-4 years (Bachelor's) + Professional certifications",
    salary: "₹3-8 LPA (Entry level) | ₹15-40+ LPA (Senior positions)",
    skills: [
      "Financial analysis",
      "Customer service",
      "Communication",
      "Problem-solving",
      "Attention to detail",
    ],
    subjects: ["Commerce", "Economics", "Mathematics", "Accounting"],
    colleges: [
      "Delhi University",
      "Mumbai University",
      "Symbiosis Pune",
      "NMIMS Mumbai",
      "Christ University",
    ],
    jobRoles: [
      "Bank Manager",
      "Relationship Manager",
      "Credit Analyst",
      "Investment Advisor",
      "Loan Officer",
    ],
    companies: [
      "SBI",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra",
      "Goldman Sachs",
    ],
    scope: "Stable career with continuous growth and international opportunities",
  },
  chartered_accountant: {
    title: "Chartered Accountant",
    description: "Provide financial and tax advisory services to businesses and individuals",
    overview:
      "Chartered Accountants are qualified professionals who provide financial, tax, and audit services. They help businesses maintain financial records, ensure compliance, and make informed financial decisions.",
    eligibility: [
      "12th pass",
      "CA Foundation after 12th",
      "CA Intermediate after graduation",
      "CA Final after articleship",
    ],
    duration: "4.5 years (Foundation + Intermediate + Articleship + Final)",
    salary: "₹4-10 LPA (Entry level) | ₹25-100+ LPA (Experienced)",
    skills: [
      "Accounting",
      "Taxation",
      "Auditing",
      "Financial analysis",
      "Communication",
    ],
    subjects: ["Accounting", "Taxation", "Auditing", "Finance", "Law"],
    colleges: [
      "ICAI (Institute of Chartered Accountants of India)",
      "Delhi University",
      "Mumbai University",
    ],
    jobRoles: [
      "Chartered Accountant",
      "Tax Consultant",
      "Auditor",
      "Financial Advisor",
      "CFO",
    ],
    companies: [
      "Big 4 (Deloitte, EY, KPMG, PwC)",
      "Grant Thornton",
      "BDO",
      "Corporate firms",
    ],
    scope: "Excellent scope with high earning potential and global recognition",
  },
  software_engineer: {
    title: "Software Engineer",
    description: "Design, develop, and maintain software applications and systems",
    overview:
      "Software engineers design, develop, test, and maintain software applications. They work on various platforms and technologies to create solutions that solve real-world problems.",
    eligibility: [
      "12th pass with Mathematics/Science",
      "Bachelor's in Computer Science/IT",
      "Strong programming skills",
    ],
    duration: "4 years (Bachelor's) + Certifications",
    salary: "₹5-12 LPA (Entry level) | ₹20-80+ LPA (Senior/Lead roles)",
    skills: [
      "Programming",
      "Problem-solving",
      "System design",
      "Database management",
      "Version control",
    ],
    subjects: [
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Web Development",
      "Cloud Computing",
    ],
    colleges: [
      "IIT Delhi",
      "IIT Bombay",
      "NIT Trichy",
      "BITS Pilani",
      "VIT Vellore",
    ],
    jobRoles: [
      "Software Developer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Solutions Architect",
      "Tech Lead",
    ],
    companies: [
      "Google",
      "Microsoft",
      "Amazon",
      "Apple",
      "TCS",
      "Infosys",
      "Wipro",
    ],
    scope: "Highest demand with excellent salary and global opportunities",
  },
  data_scientist: {
    title: "Data Scientist",
    description: "Extract insights from data using machine learning and statistical analysis",
    overview:
      "Data scientists analyze complex datasets to help organizations make data-driven decisions. They use machine learning, statistics, and programming to uncover patterns and insights.",
    eligibility: [
      "Bachelor's in Computer Science, Mathematics, or Statistics",
      "Strong programming skills",
      "Knowledge of machine learning",
    ],
    duration: "4 years (Bachelor's) + Specialization courses",
    salary: "₹8-15 LPA (Entry level) | ₹25-100+ LPA (Senior roles)",
    skills: [
      "Machine Learning",
      "Python/R",
      "SQL",
      "Data visualization",
      "Statistical analysis",
    ],
    subjects: [
      "Machine Learning",
      "Statistics",
      "Python",
      "Big Data",
      "Data Visualization",
    ],
    colleges: [
      "IIT Delhi",
      "IIT Bombay",
      "BITS Pilani",
      "Manipal University",
      "VIT Vellore",
    ],
    jobRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Analyst",
      "AI Specialist",
    ],
    companies: [
      "Google",
      "Amazon",
      "Microsoft",
      "Facebook",
      "LinkedIn",
      "Flipkart",
    ],
    scope: "Rapidly growing field with exceptional career prospects",
  },
  artificial_intelligence: {
    title: "Artificial Intelligence",
    description: "Develop intelligent systems and AI-powered applications",
    overview:
      "AI professionals develop intelligent systems that can learn and make decisions. They work on machine learning models, neural networks, and AI applications across various industries.",
    eligibility: [
      "Bachelor's in Computer Science/IT/Electronics",
      "Strong programming skills",
      "Mathematics background",
    ],
    duration: "4 years (Bachelor's) + Specialization",
    salary: "₹10-20 LPA (Entry level) | ₹30-150+ LPA (Senior roles)",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "TensorFlow",
      "Neural Networks",
    ],
    subjects: [
      "AI",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
    ],
    colleges: [
      "IIT Delhi",
      "IIT Bombay",
      "BITS Pilani",
      "CMU India",
      "Manipal University",
    ],
    jobRoles: [
      "AI Engineer",
      "ML Engineer",
      "AI Researcher",
      "NLP Specialist",
      "Computer Vision Engineer",
    ],
    companies: [
      "Google",
      "OpenAI",
      "DeepMind",
      "Microsoft",
      "Tesla",
      "IBM",
    ],
    scope: "Cutting-edge field with unlimited opportunities and high demand",
  },
  dentist: {
    title: "Dentist",
    description: "Diagnose and treat dental diseases and oral health issues",
    overview:
      "Dentists diagnose and treat dental diseases, perform oral surgeries, and provide preventive dental care. They work in clinics, hospitals, and research institutions.",
    eligibility: [
      "12th pass with Physics, Chemistry, Biology",
      "NEET qualification",
      "BDS degree",
    ],
    duration: "4 years (BDS) + 2 years (MDS for specialization)",
    salary: "₹4-8 LPA (Entry level) | ₹15-50+ LPA (Experienced/Specialists)",
    skills: [
      "Manual dexterity",
      "Attention to detail",
      "Patient care",
      "Communication",
      "Problem-solving",
    ],
    subjects: ["Biology", "Chemistry", "Physics", "Anatomy", "Pharmacology"],
    colleges: [
      "Delhi University",
      "Mumbai University",
      "Manipal University",
      "Saveetha University",
      "Sri Ramachandra University",
    ],
    jobRoles: [
      "General Dentist",
      "Orthodontist",
      "Periodontist",
      "Dental Surgeon",
      "Prosthodontist",
    ],
    companies: [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis",
      "Private dental clinics",
      "NGOs",
    ],
    scope: "Stable career with good earning potential and social impact",
  },
  general_physician: {
    title: "General Physician",
    description: "Diagnose and treat various diseases and health conditions",
    overview:
      "General physicians provide primary healthcare services, diagnose diseases, and treat patients. They work in hospitals, clinics, and healthcare centers.",
    eligibility: [
      "12th pass with Physics, Chemistry, Biology",
      "NEET qualification",
      "MBBS degree",
    ],
    duration: "5.5 years (MBBS) + 2 years (MD for specialization)",
    salary: "₹5-10 LPA (Entry level) | ₹20-60+ LPA (Experienced)",
    skills: [
      "Medical knowledge",
      "Patient care",
      "Communication",
      "Decision-making",
      "Empathy",
    ],
    subjects: ["Biology", "Chemistry", "Physics", "Anatomy", "Pharmacology"],
    colleges: [
      "AIIMS Delhi",
      "CMC Vellore",
      "JIPMER Puducherry",
      "Delhi University",
      "Mumbai University",
    ],
    jobRoles: [
      "General Physician",
      "Medical Officer",
      "Hospital Doctor",
      "Clinic Doctor",
      "Medical Consultant",
    ],
    companies: [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis",
      "Government hospitals",
      "Private clinics",
    ],
    scope: "Highly respected profession with excellent job security and earning potential",
  },
  lawyer: {
    title: "Lawyer",
    description: "Provide legal advice and represent clients in legal matters",
    overview:
      "Lawyers provide legal advice, represent clients in court, and help with legal documentation. They work in law firms, corporations, government, and NGOs.",
    eligibility: [
      "12th pass (any stream)",
      "Bachelor's degree (any stream)",
      "LLB degree",
    ],
    duration: "3 years (LLB) or 5 years (Integrated LLB)",
    salary: "₹3-8 LPA (Entry level) | ₹20-100+ LPA (Senior lawyers/Partners)",
    skills: [
      "Legal knowledge",
      "Communication",
      "Negotiation",
      "Research",
      "Analytical thinking",
    ],
    subjects: ["Constitutional Law", "Criminal Law", "Civil Law", "Corporate Law"],
    colleges: [
      "Delhi University",
      "Mumbai University",
      "National Law School Bangalore",
      "NALSAR Hyderabad",
      "Gujarat National Law University",
    ],
    jobRoles: [
      "Lawyer",
      "Legal Advisor",
      "Judge",
      "Advocate",
      "Legal Consultant",
    ],
    companies: [
      "Law firms",
      "Corporate legal departments",
      "Government",
      "NGOs",
      "Courts",
    ],
    scope: "Prestigious career with excellent earning potential and social impact",
  },
  teacher: {
    title: "School Teacher",
    description: "Educate and guide students in academic and personal development",
    overview:
      "Teachers educate students, develop curriculum, and guide their academic and personal growth. They work in schools and educational institutions.",
    eligibility: [
      "12th pass",
      "Bachelor's degree",
      "B.Ed or D.Ed degree",
      "Teaching eligibility test",
    ],
    duration: "2 years (B.Ed) or 4 years (Integrated B.Ed)",
    salary: "₹3-6 LPA (Government) | ₹2-8 LPA (Private schools)",
    skills: [
      "Communication",
      "Subject expertise",
      "Patience",
      "Leadership",
      "Creativity",
    ],
    subjects: ["Education", "Psychology", "Subject specialization"],
    colleges: [
      "Delhi University",
      "Mumbai University",
      "NCERT",
      "State universities",
    ],
    jobRoles: [
      "School Teacher",
      "Lecturer",
      "Tutor",
      "Curriculum Developer",
      "Educational Consultant",
    ],
    companies: [
      "Government schools",
      "Private schools",
      "Online platforms",
      "Coaching centers",
    ],
    scope: "Fulfilling career with job security and social contribution",
  },
};

export function getCareerDetail(careerSlug: string): CareerDetail | null {
  // Convert slug to match the key format
  const key = careerSlug.toLowerCase();
  return careerDetails[key] || null;
}

export function getAllCareerDetails() {
  return Object.entries(careerDetails).map(([slug, detail]) => ({
    slug,
    ...detail,
  }));
}
