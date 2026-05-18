import { agricultureUpdateData } from './agricultureUpdateData';
import { artsAndDesignUpdateData } from './artsAndDesignUpdateData';
import { bioScienceUpdateData } from './bioScienceUpdateData';
import { architectureAndConstructionUpdateData } from './architectureAndConstructionUpdateData';
import { hospitalityUpdateData } from './hospitalityUpdateData';
import { healthScienceUpdateData } from './healthScienceUpdateData';
import { homeScienceUpdateData } from './homeScienceUpdateData';
import { educationUpdateData } from './educationUpdateData';
import { businessManagementUpdateData } from './businessManagementUpdateData';
import { publicSafetyAndSecurityUpdateData } from './publicSafetyAndSecurityUpdateData';
import { environmentUpdateData } from './environmentUpdateData';
import { mentorAndCoachUpdateData } from './mentorAndCoachUpdateData';
import { actuarialScienceUpdateData } from './actuarialScienceUpdateData';
import { science_mathematics_engineeringUpdateData } from './science_mathematics_engineeringUpdateData';
import { bankingAndFinanceUpdateData } from './bankingAndFinanceUpdateData';
import { costAccountantUpdateData } from './costAccountantUpdateData';
import { government_servicesUpdateData } from './government_servicesUpdateData';
import { legalServicesUpdateData } from './legalServicesUpdateData';
import { manufacturingUpdateData } from './manufacturingUpdateData';
import { marketing_advertisingUpdateData } from './marketing_advertisingUpdateData';
import { sports_and_physical_activitiesUpdateData } from './sports_and_physical_activitiesUpdateData';
import { media_and_communicationUpdateData } from './media_and_communicationUpdateData';
import { human_social_sciencesUpdateData } from './human_social_sciencesUpdateData';

export interface CareerHeroStat {
  value: string;
  label: string;
}

export interface CareerWhyCard {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
}

export interface CareerQuickFact {
  label: string;
  detail: string;
  color: string; // bg color class for the number bubble
}

export interface CareerStatCard {
  value: string;
  label: string;
  gradient: string;
}

export interface CareerGuideSection {
  id: string;
  title: string;
  titleHi?: string;
  icon: string;
  description: string;
  descriptionHi?: string;
  color: string;
  content: string[];
  contentHi?: string[];
  highlights?: string[];
  highlightsHi?: string[];
}

export interface CareerPageData {
  slug: string;
  badge: string;
  heading: string;
  subheading: string;
  whyCards: CareerWhyCard[];
  quickFacts: CareerQuickFact[];
  statCards: CareerStatCard[];
  guideSections: CareerGuideSection[];
}

const RED = "#C20000";
const RED2 = "#DA1313";
const RED3 = "#E70000";
const RED4 = "#B30000";
const RED5 = "#9B0000";

export const careerPageData: Record<string, CareerPageData> = {
  // ─── ACTUARIAL SCIENCE ───────────────────────────────────────────
  actuarial_science: {
    slug: "actuarial_science",
    badge: "The Architects of Risk for Class 10+",
    heading: "Actuarial Science",
    subheading: "Predict the future using math. Measure financial risk and shape the decisions that keep the world's financial systems stable.",
    whyCards: [
      { icon: "Target", title: "Risk Detectives", description: "Use math to predict future events and their financial impact.", borderColor: "#F59E0B" },
      { icon: "TrendingUp", title: "Highest Earning Potential", description: "One of the highest-paying careers in India with ₹1Cr+ for leaders.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Global Opportunities", description: "Work anywhere in the world with this universally valued skill.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Growing Demand", description: "India needs 25,000 actuaries by 2030; currently only 500-700 exist.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "6-10 Years (ACET + 13-15 Exams)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹6L–₹3Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "4.8-5.2% CAGR, Global Demand", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "500-700", label: "Actuaries in India", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of predicting the future using mathematics.",
        color: RED,
        content: [
          "The Mystery: Have you ever wondered how insurance companies decide how much you should pay for car insurance, or how a bank knows if it's safe to lend money for a massive bridge project? They don't just guess; they use Actuarial Science.",
          "The Definition: Actuarial Science is the art and science of predicting the future using math. Actuaries are 'Risk Detectives' who use mathematics, statistics, and financial theory to measure the probability of future events.",
          "The Impact: They calculate the financial impact of events like accidents, natural disasters, or even how long people might live.",
          "Global Powerhouse: In today's India, this career is a global powerhouse. As our economy grows, every new business, high-speed train, or health insurance policy needs an actuary to ensure it is financially stable."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Actuarial Associate",
        icon: "Clock",
        description: "Real workflow of an actuary.",
        color: RED2,
        content: [
          "8:30 AM -  The Morning Model Check: Start your day by reviewing the 'Mortality Tables' you updated yesterday. Check how a new health trend might change the lifespan predictions for thousands of policyholders.",
          "10:30 AM -  The 'Clash' Analysis: Meet with the Product Development team. They want to launch a new insurance plan for electric vehicles (EVs). Explain that since EVs have different battery risks than petrol cars, the 'premium' (the price) needs to be calculated differently. Show them a 3D graph of risk probability.",
          "1:30 PM -  Data Mining: After lunch, dive into high-performance software like R or Python. Run a 'Stress Test' on the company's pension funds. Simulate a situation where the stock market drops by 20% to see if the company can still pay its retirees.",
          "4:00 PM -  Consulting with the 'Big Bosses': Join a video call with the Chief Financial Officer (CFO). Translate complex statistical formulas into simple business advice: 'If we want to stay profitable, we need to adjust our reserves by 5% this year.'",
          "7:00 PM -  The Study Sprint: Being an actuary is a journey of continuous learning. Spend your evening at a quiet cafe, studying for your next professional exam from the Institute of Actuaries of India (IAI). Each cleared exam brings a massive jump in salary and expertise."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Mathematical Prowess: You don't just like math; you enjoy using it to solve real-world problems.",
          "Analytical Detective: You love digging through data to find a hidden truth.",
          "Infinite Patience: Becoming a fully 'Fellow' Actuary takes years of exams. You need the grit to keep going.",
          "Business Sense: You understand that numbers have to make sense for a business to survive.",
          "Communication Skills: You can explain a complex formula to someone who doesn't even like math."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete actuarial process.",
        color: RED2,
        content: [
          "Data Collection: Gathering massive amounts of historical data (e.g., past 20 years of hurricane data).",
          "Risk Modeling: Building mathematical 'simulations' of what might happen next.",
          "Pricing & Valuation: Deciding the 'fair price' for a policy or the 'safe amount' to keep in a bank.",
          "Reporting: Presenting findings to government regulators (like IRDAI) to ensure the company is following the law.",
          "Continuous Monitoring: Updating models as new data arrives and market conditions change."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: ["Pathway A: Degree + Professional Exam Route","Step 1: Complete Class 12th with Maths (PCM/Commerce)","Step 2: Pursue B.Sc Actuarial Science / B.Sc Statistics / B.Com (Hons)","Step 3: Start clearing actuarial exams — IAI (India) or IFoA (UK)","Step 4: Do internships at insurance firms like LIC, HDFC Life, ICICI Prudential","Step 5: Clear 6–8 actuarial papers while working as Actuarial Analyst","Step 6: Become Associate/Fellow Actuary","Pathway B: Skill-Based Entry","Step 1: Complete Class 12th with Maths","Step 2: Take a diploma or online course in Actuarial Science / Data Analytics","Step 3: Learn tools — MS Excel, R, Python, SQL","Step 4: Clear initial 3–4 actuarial papers (CT series from IAI/IFoA)","Step 5: Join insurance or consulting firms as Actuarial Trainee","Step 6: Progress to Actuarial Analyst, or Underwriting Analyst","Pathway C: Domain Switch Route","Step 1: Complete Class 12th (Maths compulsory)","Step 2: Pursue B.Tech / B.Sc Maths / MBA Finance / CA","Step 3: Work 1–2 years in finance, banking, or data analytics","Step 4: Begin clearing actuarial exams alongside job (IAI/IFoA)","Step 5: Gain experience in risk, insurance, or pension consulting","Step 6: Transition as Actuarial Consultant, or Pension Fund Manager"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹80 LPA –  ₹2+ Crore","Senior / Lead Role (10+ yrs): ₹40–80 LPA","Mid-Level Professional (5–8 yrs): ₹20–40 LPA","Junior / Associate (3–5 yrs): ₹10–20 LPA","Entry Level (0–2 yrs): ₹4–8 LPA","Note: Metro cities (Mumbai, Gurugram) pay 20–40% more; each actuarial exam cleared adds ~10–15% salary growth.","Where Are the Jobs?","Top Cities: Mumbai, Gurugram/Delhi-NCR, Bengaluru, Hyderabad, Pune","Top Industries: Insurance (LIC, HDFC Life), Consulting (Aon, WTW, PwC, Deloitte), Reinsurance, Banking, Pensions, InsurTech","Opportunities: High global demand (UK, USA, UAE, Singapore); growing remote, consulting, and freelance roles"]
      },
     
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government: Institute of Actuaries of India, University of Mumbai, University of Delhi, Bishop Heber College",
          "Private: Amity University, Christ University, Patkar-Varde College, VIT Vellore, Manipal Academy",
          "Online: SWAYAM, NPTEL, Coursera, NIIT"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Actuary, Risk Analyst, Insurance Underwriter, Pension Fund Manager, Investment Analyst.",
          "New-Age: Climate Risk Actuary, Cyber Risk Specialist, Pandemic Modeler, AI-Driven Pricing Specialist.",
          "Entrepreneurship: Starting an actuarial consulting firm, risk management advisory, or fintech startup."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "IAI Trust Scholarships: Merit-based fee waivers for students from economically weaker sections.",
          "Corporate: Firms like Milliman and Swiss Re often sponsor the exam fees for their employees.",
          "NSP: General government scholarships for merit students (B.Sc. level)."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: RED,
        content: [
          "IAI (Institute of Actuaries of India): The mandatory body for practicing in India.",
          "IFoA (Institute and Faculty of Actuaries, UK): Many Indian students also take exams here for global recognition.",
          "SOA (Society of Actuaries, USA): Preferred if you want to work in the North American market.",
          "Actuaries Act, 2006: Legal framework governing actuarial practice in India."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "The Exam 'Wall': Pass rates for professional exams are low (often 30-40%). You must be ready to fail and try again.",
          "Work-Study Balance: Most actuaries work 9-to-5 and then study 7-to-10. It's a marathon of discipline.",
          "Eye Strain: You will spend a lot of time looking at spreadsheets and complex code.",
          "Continuous Learning: The field evolves rapidly; staying updated is mandatory."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in actuarial science.",
        color: RED2,
        content: [
          "AI Actuaries: AI will do the routine calculations, but humans will be needed to interpret the 'Ethics' of the data.",
          "Pandemic Modeling: A huge new field helping governments prepare for future health crises.",
          "Climate Finance: Calculating the cost of a city sinking by 1 inch—and how to insure it.",
          "Cyber Risk: As digital threats grow, cyber actuaries will be in massive demand.",
          "Personalized Insurance: AI-driven models creating individualized insurance products."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Master MS Excel: This is your primary weapon. Learn VLOOKUPs and Pivot Tables.",
          "Learn Python/R: Coding is the new language of risk.",
          "Read the News: Follow the 'Financial Express' to understand how the economy works.",
          "Math Competitions: Participate in Olympiads to sharpen your logical speed.",
          "ACET Preparation: Start early with free resources from the IAI website."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Actuarial Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. Rajesh Dalmia: Former President of IAI and a partner at EY; a legend in Indian actuarial consulting.",
          "Pournima Gupte: A pioneer woman in the field and a whole-time member of the IRDAI (The Insurance Regulator).",
          "K.S. Gopalakrishnan: A seasoned leader who served as the CEO of Aegon Life and is a Fellow of the IAI.",
          "Atul Sharma: A leading actuary in climate risk modeling and sustainable finance.",
          "Priya Nair: A prominent woman actuary pioneering AI applications in actuarial science."
        ]
      }
    ]
  },

  // ─── BIOMEDICAL ENGINEERING ─────────────────────────────────────
  biomedical_engineer: {
    slug: "biomedical_engineer",
    badge: "🏥 The Bridge Between Engineering and Medicine for Class 10+",
    heading: "Biomedical Engineering",
    subheading: "Design the tools that save lives. From thermometers to MRI machines to artificial limbs, become the invisible architect behind modern healthcare.",
    whyCards: [
      { icon: "Heart", title: "Life-Saving Impact", description: "Your innovations directly save lives and improve healthcare for 1.4 billion people.", borderColor: "#EF4444" },
      { icon: "Zap", title: "MedTech Revolution", description: "India's 'Make in India' initiative creating urgent demand for affordable medical devices.", borderColor: "#F59E0B" },
      { icon: "TrendingUp", title: "Explosive Growth", description: "Indian Medical Device market expected to reach $50 Billion by 2030 with 15% CAGR.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, Germany, Japan for Indian biomedical engineers.", borderColor: "#3B82F6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years B.Tech / 2 Years M.Tech", color: "bg-red-100 text-red-700" },
      { label: "Salary Range", detail: "₹3.5L–₹45L+ (Entry to Senior)", color: "bg-orange-100 text-orange-700" },
      { label: "Growth", detail: "15% CAGR, India's MedTech Hub", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$50B", label: "Medical Device Market by 2030", gradient: "from-red-500 to-red-600" },
      { value: "15%", label: "CAGR Growth Rate", gradient: "from-orange-500 to-orange-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Heart",
        description: "The bridge between Engineering and Biology/Medicine.",
        color: RED,
        content: [
          "Biomedical Engineering is the 'bridge' between Engineering and Biology/Medicine. It involves applying physics, mathematics, and design to develop tools that save lives. From thermometers to MRI machines to artificial limbs, biomedical engineers are the invisible architects behind modern healthcare.",
          "India is undergoing a 'MedTech Revolution' with the government's 'Make in India' initiative. There's urgent need for professionals who can design affordable medical devices. As the 'Pharmacy of the World' transitions into a 'MedTech Hub,' biomedical engineers will ensure high-quality healthcare is accessible for 1.4 billion people.",
          "This career combines the precision of engineering with the compassion of healthcare. You'll work on cutting-edge technologies like robotic surgical systems, wearable health monitors, artificial organs, and diagnostic equipment that transform patient outcomes.",
          "The field is rapidly evolving with AI integration, 3D bioprinting, nanomedicine, and personalized healthcare solutions. India needs skilled biomedical engineers to lead this transformation and make advanced healthcare affordable for all."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life: Sameer, Senior Biomedical Engineer",
        icon: "Clock",
        description: "Real workflow of a biomedical engineer in Hyderabad.",
        color: RED2,
        content: [
          "08:30 AM -  Hospital ICU Troubleshooting: Starts at a large multi-specialty hospital. First stop is the ICU where a ventilator is acting up. Runs diagnostic check -  it's a sensor calibration issue. Five minutes later, the machine is back online, potentially saving a patient's life.",
          "10:30 AM -  R&D Innovation: Heads to R&D wing. Team is working on a 'low-cost portable ECG' for rural clinics. Testing new biocompatible material for electrodes. Spends two hours analyzing data on how well the material conducts electrical signals and meets safety standards.",
          "01:30 PM -  Cross-Functional Collaboration: Over lunch, meets with surgeons who want modification to a robotic surgical tool to make it more ergonomic. Discusses design changes that could improve precision and reduce surgeon fatigue during long procedures.",
          "03:00 PM -  Quality Control Call: On call with manufacturing plant in Chennai discussing Quality Control standards for orthopedic implants. Zero room for error; 0.1mm mistake can mean failed surgery. Reviews batch testing reports and compliance documentation.",
          "05:30 PM -  Regulatory Compliance: Reviews Regulatory Compliance document. Before any medical device can be sold in India, it must pass strict safety tests by CDSCO (Central Drugs Standard Control Organization). Ensures all documentation is complete for upcoming audit.",
          "07:00 PM -  Inspiration: Drives home seeing billboard for robotic-assisted surgery center, knowing an engineer like him made it possible. Reflects on the lives changed by his work."
        ]
      },
      {
        id: "3",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Empathy: You care about helping people heal and understand patient needs deeply. You see healthcare challenges as personal missions.",
          "Interdisciplinary Curiosity: You love both Biology and Physics/Math equally. You're excited by the intersection of life sciences and engineering.",
          "Precision & Detail: You understand that small errors can have life-altering consequences. You're meticulous and quality-focused.",
          "Problem Solving: You're a detective when machines fail. You enjoy troubleshooting complex systems and finding elegant solutions.",
          "Communication: You can explain technical concepts to non-technical doctors and hospital staff. You bridge the gap between engineering and medicine.",
          "Continuous Learning: You stay updated with latest medical technologies and regulatory standards. You're passionate about innovation."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The complete biomedical engineering process.",
        color: RED2,
        content: [
          "Needs Assessment: Identifying medical problems and understanding patient/doctor requirements. Conducting research to understand clinical challenges.",
          "Design & Prototyping: Using CAD software (SolidWorks, CATIA) to design medical devices. Building physical prototypes and testing concepts.",
          "Testing & Validation: Conducting rigorous testing including biocompatibility tests, sterilization validation, and clinical trials under strict supervision.",
          "Maintenance & Training: Ensuring devices work perfectly in real-world conditions. Training doctors and hospital staff on proper usage and maintenance.",
          "Regulatory Compliance: Navigating CDSCO approval process, ISO 13485 certification, and international standards like FDA approval for global markets.",
          "Quality Assurance: Implementing quality control measures throughout manufacturing to ensure zero defects in life-critical devices."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: ["Pathway A: Core Engineering Route","Step 1: Complete Class 12th with Physics, Chemistry, Mathematics.","Step 2: Clear JEE/State CET for engineering admission.","Step 3: Pursue B.Tech in Biomedical Engineering.","Step 4: Complete internship at hospitals or medical device companies.","Step 5: Pursue M.Tech in Biomedical Engineering or Biomechanics.","Step 6: Work as Biomedical Engineer or Medical Device Designer.","Pathway B: Research & Development Route","Step 1: Complete Class 12th with PCM or PCB subjects.","Step 2: Pursue B.Tech/B.E. in Biomedical or Biotechnology Engineering.","Step 3: Learn tools like MATLAB, SolidWorks, and Python.","Step 4: Clear GATE exam for higher study admissions.","Step 5: Pursue M.Tech/Ph.D. from IITs, NITs, or AIIMS.","Step 6: Join as Research Scientist in healthcare or pharma.","Pathway C: Clinical & Hospital Equipment Route","Step 1: Complete Class 12th with Science stream.","Step 2: Pursue B.Sc. in Biomedical Science or Instrumentation.","Step 3: Complete diploma in Medical Equipment Technology.","Step 4: Gain hands-on training in hospital equipment maintenance.","Step 5: Get certified in Clinical Engineering or ISO standards.","Step 6: Work as Clinical Engineer or Hospital Equipment Manager."]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹1.8 Crore","Senior / Lead Role (10+ yrs): ₹25 –  ₹55 LPA","Mid-Level Professional (5–8 yrs): ₹12 –  ₹24 LPA","Junior / Associate (3–5 yrs): ₹6 –  ₹10 LPA","Entry Level (0–2 yrs): ₹3 –  ₹6 LPA","Note: Metros and M.Tech/PhD boost pay by 35%.","Where Are the Jobs?","Top Cities: Bengaluru, Hyderabad, Mumbai, Chennai, Pune.","Top Industries: MedTech (GE, Medtronic), Hospitals, R&D, AI Startups.","Global Demand: High in USA, Germany. Remote-diagnostics trending.","Top Institutions","Career Opportunities","Conventional","Biomedical Engineer","Clinical Engineer","Medical Device Design Engineer","Hospital Equipment Engineer","New-age and AI driven","Digital Health Engineer","AI Diagnostics Engineer","Biomedical Data Scientist","Wearable Device Developer","Remote / Entrepreneurship","Telehealth Technology Consultant","Biomedical Product Freelancer","MedTech Startup Founder","Online Medical Device Trainer"]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and opportunities.",
        color: RED,
        content: [
          "Top Industries: Medical Device Manufacturing (Abbott, Medtronic, Stryker), Hospitals (Clinical Engineering departments), Rehabilitation Centers, Diagnostic Centers, Government Research Labs (ICMR, CSIR).",
          "Top Cities: Bengaluru (MedTech Hub with 500+ companies), Hyderabad (Pharma & Devices), Chennai (Manufacturing excellence), Pune (Innovation hub), Delhi-NCR (Research institutions).",
          "Remote/Gig Work: Low for hands-on roles, high for Biomedical Data Analysts and Regulatory Consultants working with global firms.",
          "International: High demand in USA, Germany, Japan for Indian biomedical engineers. Many Indian companies have R&D centers in these countries."
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Institutions: ₹50,000–₹2L (Total for 4 years). Highly affordable with excellent quality education.",
          "Private Institutions: ₹6L–₹15L (Total for 4 years). Premium institutions with industry connections.",
          "Hostel/Living: ₹8,000–₹15,000 per month depending on city and accommodation type.",
          "Additional Costs: Software training (₹10,000–₹30,000), internships, certifications, and lab equipment access."
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "AICTE Pragati Scholarship: ₹50,000/year for girls from economically weaker sections.",
          "NSP (National Scholarship Portal): Merit-cum-means based scholarships for SC/ST/OBC students.",
          "PMRF (Prime Minister's Research Fellowship): ₹80,000/month for PhD students in engineering.",
          "Institutional Scholarships: Top colleges offer up to 100% tuition waivers for merit students.",
          "Corporate Sponsorships: Companies like Medtronic, Abbott sponsor talented students' education in exchange for work commitment."
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: RED,
        content: [
          "BMESI (Biomedical Engineering Society of India): Premier professional body for biomedical engineers in India.",
          "Clinical Engineer Certification: Offered by BMESI for practicing clinical engineers in hospitals.",
          "ISO 13485: Medical Device Quality Management System certification -  essential for device manufacturers.",
          "CDSCO Registration: Central Drugs Standard Control Organization approval required for all medical devices sold in India.",
          "International Certifications: FDA (USA), CE Mark (Europe) for global market access."
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional Roles: Clinical Engineer (hospital maintenance), Maintenance Engineer (device support), Quality Control Officer (manufacturing), Design Engineer (R&D).",
          "New-Age Roles: AI in Healthcare specialist, Tele-health system designer, 3D Bioprinting researcher, Wearable Tech developer, Robotic Surgery specialist.",
          "Entrepreneurship: Starting MedTech company, developing innovative medical devices, creating healthcare solutions for rural India.",
          "Research: PhD opportunities in tissue engineering, nanomedicine, organ printing, and advanced biomaterials."
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Curriculum Gap: Some colleges teaching outdated syllabus not aligned with industry needs. Choose institutions with strong industry partnerships.",
          "Competition: Competing with Electronics/Mechanical engineers for biomedical roles. Need specialized knowledge to stand out.",
          "High Stakes: Patient's life depends on your machine. Pressure is immense but rewarding. Zero tolerance for errors.",
          "Regulatory Complexity: Navigating CDSCO, ISO standards, and international regulations is time-consuming and requires expertise.",
          "Long Development Cycles: Medical devices take years to develop, test, and get approved. Patience and persistence are essential."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends (2025–2035)",
        icon: "Sparkles",
        description: "What's next in biomedical engineering.",
        color: RED2,
        content: [
          "AI & Big Data: Predicting organ failure before it happens. AI-driven diagnostic systems with 99%+ accuracy.",
          "Nanomedicine: Tiny robots delivering medicine directly to cancer cells. Revolutionizing treatment with minimal side effects.",
          "3D Organ Printing: Using patient's own cells to print organs. Solving organ transplant shortage crisis.",
          "Wearable Technology: Smart patches monitoring vital signs continuously. Real-time health alerts and preventive care.",
          "Personalized Medicine: Devices tailored to individual patient genetics and physiology. Moving from one-size-fits-all to customized healthcare."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Master the Basics: Don't ignore Biology or Math. Both are equally important. Strong foundation in both is non-negotiable.",
          "Learn Coding: Python for medical data analysis, MATLAB for signal processing. Coding is the language of modern biomedical engineering.",
          "Dismantle & Understand: Take apart old medical equipment (with permission). Understand how sensors, circuits, and mechanical systems work together.",
          "Volunteer: Visit hospitals to see equipment in real time. Shadow clinical engineers. Understand real-world challenges.",
          "CAD Software: Learn SolidWorks or Fusion 360. Design simple medical devices or improvements to existing ones.",
          "Stay Updated: Follow biomedical engineering journals, attend webinars, join BMESI student chapters."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in biomedical engineering.",
        color: RED2,
        content: [
          "Dr. B. Ravi (IIT Bombay): Founder of BETiC (Biomedical Engineering and Technology Innovation Centre). Pioneer in medical device innovation in India.",
          "Dr. S. Radhakrishnan (IIT Madras): IIT Madras pioneer in biomedical engineering. Established one of India's first biomedical engineering departments.",
          "Sir M. Visvesvaraya: Civil engineer and public health engineering visionary. Laid foundation for healthcare infrastructure in India.",
          "Kiran Mazumdar-Shaw (Biocon): While primarily biotech, her company pioneered affordable biologics and healthcare solutions for India.",
          "Dr. Devi Shetty (Cardiac Surgeon): Working closely with biomedical engineers to develop affordable cardiac care solutions. Revolutionizing healthcare accessibility."
        ]
      }
    ]
  },

  // ─── BANKING & FINANCIAL SERVICES ────────────────────────────────
  banking_and_related_services: {
    slug: "banking_and_related_services",
    badge: "The Engine of the Indian Economy for Class 10+",
    heading: "Banking and Related Services",
    subheading: "Manage money flows that build nations. From trust to technology, shape the financial decisions that power India's growth.",
    whyCards: [
      { icon: "Zap", title: "Massive Employment", description: "90 lakh+ jobs across India in BFSI sector.", borderColor: "#F59E0B" },
      { icon: "Building2", title: "Economic Backbone", description: "Contributes ~6% of India's total GDP and growing.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Diverse Roles", description: "Banks, insurance, mutual funds, fintech & more.", borderColor: "#6366F1" },
      { icon: "Smartphone", title: "Digital Future", description: "Fintech and digital banking are booming with AI.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (B.Com/BBA) + Exams", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹3.5L–₹5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "3rd Largest Banking Sector by 2030", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "90L+", label: "Jobs in BFSI India", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The oil that keeps the economic machine running.",
        color: RED,
        content: [
          "The Machine: If the Indian economy were a giant machine, Banking would be the oil that keeps every gear turning. At its simplest, banking is about managing money.",
          "Modern Banking: For a professional in the 21st century, it is about much more: it's about trust, technology, and transformation.",
          "The Reality: You aren't just 'sitting behind a glass window counting cash.' Modern bankers are financial advisors who help a young couple buy their first home, tech-savvy innovators building apps that allow instant payments, and analysts who help the government fund massive bridges and highways.",
          "National Importance: In India, banking matters because we are transitioning from a cash-heavy society to a digital superpower. Whether it's a small village 'Bank Mitra' or a corporate banker in a Mumbai skyscraper, these professionals ensure that money flows safely from those who save it to those who need it to build a better future."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Relationship Manager",
        icon: "Clock",
        description: "Real workflow of a banking professional.",
        color: RED2,
        content: [
          "9:00 AM -  The Morning Huddle: Start your day with a team meeting. Review the 'Market Pulse'—how the stock market opened and any new changes in interest rates announced by the Reserve Bank of India (RBI).",
          "10:30 AM -  The Client Connection: Meet with a local entrepreneur who wants to expand his eco-friendly packaging business. Don't just look at his bank balance; listen to his business plan. Use your analytical skills to assess the risk and start the process for a 'SME Loan.'",
          "1:30 PM -  Digital Deep-Dive: After lunch, join a cross-functional call with the 'Fintech' team. Test a new AI-based feature for the bank's mobile app that helps customers save money automatically. Banking today is as much about coding and data as it is about currency.",
          "3:30 PM -  The Problem Solver: A regular customer calls, frantic because they suspect a fraudulent transaction on their credit card. Quickly coordinate with the cybersecurity department to freeze the card and initiate a refund process. In banking, you are often the 'Financial First Responder.'",
          "6:00 PM -  Documentation and Learning: The bank's doors might close to the public at 4:00 PM, but the work continues. Ensure every loan document is legally compliant. Spend 30 minutes on a certification course about 'Green Finance,' as the bank is moving toward funding only sustainable projects."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Integrity: This is non-negotiable. You are handling people's life savings.",
          "Numerical Ability: You don't need to be a math genius, but you should be comfortable with numbers and logical reasoning.",
          "Communication Skills: You must explain complex financial terms (like 'Compound Interest' or 'Equity') so that a 14-year-old or an 80-year-old can understand them.",
          "Attention to Detail: A misplaced decimal point can lead to a loss of lakhs of rupees.",
          "Tech-Fluency: You should be comfortable using software, apps, and data dashboards."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete banking service cycle.",
        color: RED2,
        content: [
          "Customer Acquisition: Finding people or businesses that need banking services.",
          "Due Diligence (KYC): Verifying the identity and 'creditworthiness' of a customer.",
          "Service Delivery: Processing deposits, issuing loans, or managing investments.",
          "Risk Management: Monitoring transactions to prevent fraud and ensuring the bank stays profitable.",
          "Relationship Management: Helping the customer grow their wealth over many years.",
          "Regulatory Compliance: Ensuring all operations follow RBI and government guidelines."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Entry Point Roadmap with Key Milestones.",
        color: RED,
        content: [
          "After Class 10: Choose Commerce (recommended) or any stream with Math. Strong foundation in Accountancy and Economics is essential.",
          "After Class 12: Enroll in B.Com, BBA, or Economics (Hons). Clear IPMAT or CUET for admission to top colleges.",
          "After Graduation: Appear for Bank PO/Clerk Exams (IBPS, SBI). Enter Public Sector Banks (PSBs).",
          "Professional Route: Pursue an MBA (Finance) or CA. Enter Investment Banking or Corporate Banking roles.",
          "Stream-Specific Advantages: Commerce Students have a natural edge in accounting and law. Science Students are highly valued in Fintech and Data Analytics roles within banks. Humanities Students excel in Human Resources (HR) and Retail Banking where communication is key."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level (Clerk/Assistant): ₹3.5 Lakhs –  ₹6 Lakhs annually.",
          "Mid-Level (Probationary Officer/Manager): ₹8 Lakhs –  ₹18 Lakhs annually.",
          "Senior-Level (VP/DGM): ₹25 Lakhs –  ₹50 Lakhs annually.",
          "Leadership/CXO: ₹1 Crore –  ₹5 Crores+ (Private sector/MNC banks).",
          "Salary Comparison: Metros have higher base pay + high cost of living. Tier-2/3 Cities offer competitive pay (especially in PSBs) with significantly lower living costs.",
          "Career Growth: Typically takes 7–10 years to reach Middle Management role (Scale III or IV in PSBs). Indian banking sector expected to become the third-largest in the world by 2030."
        ]
      },{
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public: SRCC (Delhi), St. Xavier's (Mumbai/Kolkata), Madras Christian College (Chennai).",
          "Private: Christ University (Bengaluru), Symbiosis (Pune), NMIMS (Mumbai).",
          "Online: IGNOU (for B.Com), Coursera/Udemy for specialized banking certifications (Fintech, Risk Management)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means.",
          "Institutional: IIM-A/B/C Scholarships for economically weaker sections.",
          "Private: HDFC Badhte Kadam scholarship (up to ₹1 Lakh for students in need).",
          "Bank Scholarships: SBI, ICICI, HDFC offer merit-based scholarships for their future employees."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "IIBF (Indian Institute of Banking and Finance): Offers JAIIB and CAIIB—mandatory for promotions in most Indian banks.",
          "NISM (National Institute of Securities Markets): Essential for those going into wealth management.",
          "Chartered Financial Analyst (CFA): Globally recognized for investment banking."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Branch Manager, Loan Officer, Cashier, Relationship Manager, Credit Analyst.",
          "New-Age: Cybersecurity Expert, Blockchain Architect, ESG (Environmental, Social, Governance) Analyst, AI-Driven Risk Manager.",
          "Entrepreneurship: Starting a Neo-bank or a Fintech Consultancy."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "High Pressure: Achieving 'targets' (selling loans/insurance) can be stressful.",
          "Transferable Job: In public sector banks, you may be transferred to a different city every 3 years.",
          "Strict Regulation: One error in compliance can lead to heavy legal penalties.",
          "Work-Life Balance: Banking hours can extend beyond 5 PM, especially during month-end closing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in banking.",
        color: RED2,
        content: [
          "AI-Bankers: Chatbots will handle 90% of basic queries.",
          "Banking as a Service (BaaS): Non-banks (like Amazon or Apple) offering banking services.",
          "Green Banking: Loans will be cheaper for people who buy electric cars or solar panels.",
          "Digital Rupee (CBDC): India's central bank digital currency will revolutionize payments.",
          "Personalized Banking: AI-driven products tailored to individual financial profiles."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Financial Literacy: Open a 'Teen Savings Account.' Track your pocket money on an Excel sheet.",
          "Coding: Learn the basics of SQL or Python. Data is the new currency.",
          "Soft Skills: Join a 'Consumer Awareness' club or a debating society.",
          "Read: Follow the RBI website's 'For Common Man' section to understand how banking works.",
          "Practice: Use virtual stock trading apps to understand market dynamics."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Banking Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Arundhati Bhattacharya: Former Chairperson of SBI; a pioneer for women in Indian banking.",
          "Raghuram Rajan: Former RBI Governor; a world-renowned economist.",
          "Aditya Puri: The man who built HDFC Bank into a powerhouse.",
          "Uday Kotak: Founder of Kotak Mahindra Bank; a legend in private banking.",
          "Naina Lal Kidwai: First Indian woman to graduate from Harvard Business School and a former head of HSBC India."
        ]
      }
    ]
  },

  // ─── CHARTERED ACCOUNTANT ────────────────────────────────────────
  chartered_accountant: {
    slug: "chartered_accountant",
    badge: "📒 The Financial Architect of India for Class 10+",
    heading: "Chartered Accountant",
    subheading: "Be the financial doctor of businesses. Audit, advise, and architect the financial health of India's economy.",
    whyCards: [
      { icon: "Scale", title: "Legally Recognised", description: "Only CAs can conduct statutory company audits.", borderColor: "#F59E0B" },
      { icon: "Briefcase", title: "Versatile Career", description: "Work in firms, corporations, govt, or independently.", borderColor: "#1E40AF" },
      { icon: "TrendingUp", title: "High Earning", description: "₹25–100+ LPA for experienced professionals.", borderColor: "#6366F1" },
      { icon: "Globe", title: "Global Recognition", description: "ICAI qualification respected worldwide.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5-7 Years (Foundation → Intermediate → Articleship → Final)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹8L–₹5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "9.76% CAGR, 130K CAs Needed Annually", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "4.07L", label: "CAs in India", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The financial architect of Indian businesses.",
        color: RED,
        content: [
          "The Metaphor: If a business were a living being, a Chartered Accountant (CA) would be its doctor, architect, and navigator all rolled into one.",
          "The Definition: At its core, Chartered Accountancy is the highest level of professional excellence in the fields of Auditing, Taxation, and Financial Management.",
          "The Reality: A professional CA doesn't just 'do math' or 'count money.' They ensure that companies are honest about their earnings (Auditing), help individuals and businesses pay the right amount of tax (Taxation), and advise CEOs on how to grow their wealth (Strategic Consulting).",
          "National Importance: In a rapidly growing economy like India's, CAs are the guardians of trust. They matter because they ensure the financial health of the nation, helping India become a global economic superpower."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The CA at a Big 4 Firm",
        icon: "Clock",
        description: "Real workflow of a chartered accountant.",
        color: RED2,
        content: [
          "8:30 AM -  The Strategy Review: Start your day by reviewing the financial statements of a major e-commerce startup. You aren't just looking at numbers; you're looking for stories. Why did their marketing cost jump by 40%? Is their revenue recognition following the latest Accounting Standards?",
          "10:30 AM -  The Client Consultation: Head to a client's office for an 'Audit Meeting.' Sit with the CFO (Chief Financial Officer) to discuss a new government regulation on GST. Explain complex laws in simple terms so the company can stay compliant without losing profit.",
          "1:30 PM -  The 'Digital Audit': After a quick working lunch, use AI-powered tools to scan through millions of transactions in minutes. Ten years ago, this would have taken a month. Today, use technology to spot 'anomalies'—unusual patterns that might indicate an error or fraud.",
          "4:00 PM -  Taxation & Advisory: Spend your afternoon working on a 'Merger & Acquisition' deal. Two companies are becoming one, and they need you to calculate the 'Tax Implications' of this marriage. It's a high-stakes puzzle where a single mistake could cost crores.",
          "7:30 PM -  Continuous Learning: Before heading home, spend 30 minutes reading the latest circular from the ICAI (Institute of Chartered Accountants of India). In this career, the laws change, and a CA must always be the smartest person in the room."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Numerical Logical Thinking: You don't need to be a math genius, but you must love logic and patterns.",
          "Integrity & Ethics: You are the 'conscience' of a business. Honesty is your biggest asset.",
          "Attention to Detail: Can you spot a single misplaced decimal in a sea of data?",
          "Patience & Persistence: The exams are famously tough. You need 'staying power.'",
          "Communication: You must be able to explain 'Balance Sheets' to people who have never seen one."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete CA workflow.",
        color: RED2,
        content: [
          "Compliance: Ensuring the business follows all laws (Income Tax, GST, Companies Act).",
          "Auditing: Formally checking a company's accounts to give a 'Stamp of Approval' to investors.",
          "Financial Planning: Creating budgets and deciding where a company should invest its money.",
          "Risk Management: Identifying financial threats before they happen.",
          "Advisory: Helping businesses with mergers, acquisitions, and strategic financial decisions.",
          "Documentation: Maintaining detailed records and ensuring regulatory compliance."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
            "Pathway A: Direct CA Route (After 12th)",
            "Step 1: Complete Class 12th (Commerce with Maths preferred)",
            "Step 2: Register and clear CA Foundation exam (4 papers)",
            "Step 3: Clear CA Intermediate exam (Group I & II — 8 papers)",
            "Step 4: Complete 3 years of Articleship (practical training) under a practicing CA",
            "Step 5: Clear CA Final exam (6 papers) and complete ICAI requirements",
            "Step 6: Work as Chartered Accountant",
            "Pathway B: Graduation + CA Route",
            "Step 1: Complete Class 12th (Commerce preferred)",
            "Step 2: Pursue B.Com / BBA / B.Com (Hons) alongside CA preparation",
            "Step 3: Register directly for CA Intermediate (graduates can skip Foundation)",
            "Step 4: Clear CA Intermediate and begin 3-year Articleship",
            "Step 5: Learn tools — Tally, SAP, Excel, GST portal, Income Tax portal",
            "Step 6: Clear CA Final — join as CA in audit firms, corporates, banks, or government",
            "Pathway C: CA + Specialization Route",
            "Step 1: Complete Class 12th (Commerce/Science with Maths)",
            "Step 2: Clear CA Foundation and Intermediate exams",
            "Step 3: During Articleship, gain exposure in tax, audit, or forensic accounting",
            "Step 4: Clear CA Final and obtain membership from ICAI",
            "Step 5: Add specialization — CFA, CISA, DISA, CPA, or MBA Finance",
            "Step 6: Work as Forensic Auditor, Investment Banker, or International Tax Expert"
          ]
        },
        {
          id: "market",
          title: "Market Snapshot — India 2026",
          icon: "TrendingUp",
          description: "Salaries, growth, and opportunities.",
          color: RED2,
          content: [
            "Salary Snapshot (Annual INR)",
            "CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹2+ Crore",
            "Senior / Lead Role (10+ yrs): ₹25–70 LPA",
            "Mid-Level Professional (5–8 yrs): ₹10–30 LPA",
            "Junior / Associate (3–5 yrs): ₹6–15 LPA",
            "Entry Level (0–2 yrs): ₹4–10 LPA",
            "Note: Metro cities (Mumbai, Delhi-NCR) pay 20–40% higher; Big 4 experience and CA rank/skills can boost salary by 30–70%.",
            "Where Are the Jobs?",
            "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune",
            "Top Industries: Audit Firms (Big 4), Corporates, Banking, Tax Consulting, Startups, Government",
            "Opportunities: High demand in compliance, GST, IPO advisory; global demand (UK, UAE, Canada); freelancing and practice growing"
          ]
        },
        {
          id: "institutions",
          title: "Where to Study?",
          icon: "Building2",
          description: "Top institutions across India.",
          color: RED,
          content: [
            "Government: Institute of Chartered Accountants of India, National Academy of Direct Taxes, Indian Institute of Corporate Affairs, Institute of Cost Accountants of India",
            "Private: Sinhgad College of Commerce Pune, Loyola College Chennai, St. Xavier's College Kolkata, Narsee Monjee College of Commerce Mumbai",
            "Online: ICAI Virtual Learning, Unacademy CA Programs, SWAYAM, NPTEL, Vedantu CA Foundation Courses"
          ]
        },
        {
          id: "opportunities",
          title: "Career Opportunities",
          icon: "Briefcase",
          description: "Conventional and emerging roles.",
          color: RED2,
          content: [
            "Conventional: Statutory Auditor, Tax Consultant (Direct & Indirect), Corporate Finance Manager, Internal Auditor",
            "New-Age and AI-Driven: Forensic Accounting Specialist, AI-powered Audit Analyst, Data-Driven Tax Automation Expert, RegTech Compliance Advisor",
            "Remote/Entrepreneurship: Freelance GST/Income Tax Consultant, Virtual CFO Services Provider, Online CA Exam Coaching, Cloud Accounting Firm Founder"
          ]
        },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "The 'Pass Percentage' Stress: Pass rates are low (often 10–20%), meaning most students fail at least once. Resilience is key.",
          "Work-Life Balance: During 'Tax Season' (July–September), 14-hour workdays are common.",
          "The Articleship Grind: Balancing a full-time job (Articleship) with intense studies for the Final exam is the toughest part of the journey.",
          "Continuous Learning: Laws change frequently; staying updated is mandatory."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in chartered accountancy.",
        color: RED2,
        content: [
          "The AI Revolution: AI will automate basic bookkeeping. Future CAs will focus on Financial Storytelling and Predictive Analytics.",
          "Global Hub: India is becoming the 'Back Office of the World' for finance, opening doors for international work from Indian soil.",
          "Blockchain & Crypto: CAs will need expertise in cryptocurrency auditing and blockchain-based financial systems.",
          "ESG & Sustainability: Environmental, Social, and Governance auditing will become a major specialization.",
          "Data Analytics: CAs with data science skills will command premium salaries."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Excel Mastery: Start learning Microsoft Excel today. It is a CA's best friend.",
          "Reading Habits: Read the business section of newspapers like The Economic Times.",
          "Logical Reasoning: Solve puzzles, Sudoku, or take basic courses in data logic.",
          "Soft Skills: Work on your public speaking. A CA who can't explain their work is just a calculator.",
          "Early Registration: Register for CA Foundation as soon as you complete Class 12."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian CA Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Kumar Mangalam Birla: Chairman of the Aditya Birla Group; he used his CA background to build a global empire.",
          "Rakesh Jhunjhunwala: The 'Big Bull' of the Indian Stock Market, who used his financial genius to become India's most successful investor.",
          "Naina Lal Kidwai: A pioneer banker and CA who was the first Indian woman to graduate from Harvard Business School.",
          "Deepak Parekh: The visionary who transformed HDFC into a household name in India.",
          "Uday Kotak: Founder of Kotak Mahindra Bank; a legendary CA-turned-entrepreneur."
        ]
      }
    ]
  },

  // ─── COMPANY SECRETARY ───────────────────────────────────────────
  company_secretary: {
    slug: "company_secretary",
    badge: "🏢 The Backbone of Corporate Governance for Class 10+",
    heading: "Company Secretaryship",
    subheading: "Be the nervous system of corporations. Ensure legal compliance, ethical governance, and smooth operations for India's growing businesses.",
    whyCards: [
      { icon: "Scale", title: "Legally Mandatory", description: "Many companies must legally hire a full-time CS.", borderColor: "#F59E0B" },
      { icon: "Building2", title: "Regulated Profession", description: "Governed by ICSI with strong professional standing.", borderColor: "#1E40AF" },
      { icon: "TrendingUp", title: "Growing Demand", description: "Startups and expanding businesses need CS experts.", borderColor: "#6366F1" },
      { icon: "Globe", title: "Multi-Sector Scope", description: "Work in corporates, MNCs, and as independent consultant.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (CSEET + Executive + Professional)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹7L–₹5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "40% Demand Surge in MNCs", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "40%", label: "Demand Increase", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The nervous system of corporate governance.",
        color: RED,
        content: [
          "The Metaphor: If a company were a human body, the Company Secretary (CS) would be the nervous system—ensuring every part follows the rules, moves in sync, and stays healthy.",
          "The Definition: A Company Secretary is a senior corporate professional who acts as the primary advisor to the Board of Directors on how to run a company legally and ethically.",
          "The Role: They are the 'conscience' of the company. While accountants look at the numbers, the CS looks at the laws. They ensure the company complies with thousands of rules set by the government, protects the interests of shareholders, and maintains high standards of corporate governance.",
          "National Importance: In today's India, with a booming startup culture and strict new laws like the Companies Act 2013 and SEBI regulations, a CS is indispensable. Without them, even the biggest company can face massive fines or be shut down."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Company Secretary",
        icon: "Clock",
        description: "Real workflow of a company secretary.",
        color: RED2,
        content: [
          "8:30 AM -  The Morning Briefing: Start your day by scanning the latest notifications from the Ministry of Corporate Affairs (MCA) and SEBI. In your field, a rule changed overnight can change how your company operates by morning.",
          "10:00 AM -  The Boardroom Setup: Today is the Quarterly Board Meeting. You aren't just attending; you're the conductor of this orchestra. Ensure every Director has the 'Board Pack' (the agenda and reports) and check that the meeting follows the strict legal 'quorum' requirements.",
          "1:30 PM -  The Strategic Lunch: Over lunch, the CEO asks you about the legal implications of acquiring a smaller AI startup. You don't give a 'yes' or 'no'; you provide a legal roadmap. Explain the 'due diligence' process and how they must disclose this to the stock exchange.",
          "3:30 PM -  Filing and Compliance: Back at your desk, supervise your team as they file 'Annual Returns' on the MCA's digital portal. One tiny error in a digital signature or a late filing could cost the company lakhs in penalties. Precision is your middle name.",
          "5:00 PM -  Shareholder Relations: An angry shareholder calls, worried about their dividends. Use your 'diplomat' skills to explain the company's financial health and legal stand, turning a heated conversation into a professional one.",
          "7:00 PM -  The Final Wrap: Spend the last hour drafting the 'Minutes' of the morning's board meeting. Every word you write is a legal record that will be kept for decades. Feel the weight of the company's reputation on your shoulders—and love it."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "The Meticulous Mind: You notice the small details—a missing comma in a contract or a date that doesn't add up.",
          "Ethical Backbone: You are naturally honest and believe in doing things 'by the book.'",
          "The Chief Diplomat: You can stay calm and professional even when senior bosses are arguing in the boardroom.",
          "Love for Law: You enjoy reading, interpreting, and applying rules rather than just crunching numbers.",
          "Digital Fluency: You are comfortable with e-filing portals and digital governance tools."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete CS workflow.",
        color: RED2,
        content: [
          "Compliance Monitoring: Constantly checking if the company is following laws like the Companies Act, GST, and Labor Laws.",
          "Board Advisory: Helping the Board make legal decisions and organizing meetings.",
          "Liaison Work: Acting as the bridge between the company and government bodies like the Registrar of Companies (ROC).",
          "Record Keeping: Maintaining the 'Statutory Registers'—the official history of the company's owners and directors.",
          "Regulatory Filing: Submitting required documents to MCA, SEBI, and stock exchanges on time.",
          "Governance: Ensuring the company follows corporate governance best practices."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Direct CS Route (After 12th)",
          "Step 1: Complete Class 12th (Commerce preferred, any stream accepted)",
          "Step 2: Register and clear CSEET (CS Executive Entrance Test)",
          "Step 3: Clear CS Executive Programme (2 modules — 8 papers)",
          "Step 4: Clear CS Professional Programme (3 modules — 9 papers)",
          "Step 5: Complete 15 months of practical training under a practicing CS or company",
          "Step 6: Become Company Secretary",
          "Pathway B: Graduation + CS Route",
          "Step 1: Complete Class 12th (any stream)",
          "Step 2: Pursue B.Com / BBA / B.A. / LLB alongside CS preparation",
          "Step 3: Graduates can directly register for CS Executive (skip CSEET)",
          "Step 4: Clear CS Executive and Professional programmes",
          "Step 5: Learn tools — MCA portal, Tally, Excel, company law databases",
          "Step 6: Join as Company Secretary, Compliance Officer, or Legal Advisor",
          "Pathway C: CS + Dual Qualification Route",
          "Step 1: Complete Class 12th (Commerce/Law stream preferred)",
          "Step 2: Clear CSEET and CS Executive Programme",
          "Step 3: Pursue LLB / CA / CMA simultaneously for dual qualification",
          "Step 4: Clear CS Professional and complete practical training",
          "Step 5: Add certifications — GST, FEMA, Insolvency Professional (IP)",
          "Step 6: Work as Corporate Governance Expert, or Legal Compliance Head"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹8–25 LPA",
          "Junior / Associate (3–5 yrs): ₹5–12 LPA",
          "Entry Level (0–2 yrs): ₹3–7 LPA",
          "Note: Metro cities (Mumbai, Delhi-NCR) pay 20–40% higher; listed company exposure and experience boost salary by 25–50%.",
          "Where Are the Jobs?",
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune",
          "Top Industries: Corporates, Listed Companies, Legal Firms, Consulting, Banking, Startups",
          "Opportunities: High demand in compliance, corporate law, IPO; global roles (UAE, Singapore); independent practice growing"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government: Institute of Company Secretaries of India, Indian Institute of Corporate Affairs, National Law Universities, University of Delhi",
          "Private: Narsee Monjee Institute NMIMS Mumbai, Symbiosis Law School Pune, Amity University, Christ University Bangalore",
          "Online: ICSI e-Learning Portal, Unacademy CS Programs, SWAYAM, NPTEL, Takshila Learning"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Corporate Governance Advisor, Legal Compliance Officer, Board Meeting & AGM Coordinator, Company Law Consultant",
          "New-Age and AI-Driven: RegTech Compliance Automation Specialist, AI-powered Corporate Governance Analyst, ESG Advisor, Digital Contract Management Expert",
          "Remote/Entrepreneurship: Freelance Company Secretary, Virtual Compliance Services Provider, Online CS Exam Coaching, Startup Incorporation & Advisory Firm Founder"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "ICSI Merit Scholarship: For top rankers in the CSEET and Executive exams.",
          "NSP (National Scholarship Portal): Central Govt. schemes for Minority and SC/ST students.",
          "Economically Weaker Section (EWS) Concessions: ICSI offers significant fee waivers (up to 50-75%) for students from families with low income.",
          "State Schemes: Various state governments offer additional scholarships for CS aspirants."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: RED,
        content: [
          "Mandatory: You must be a member of the ICSI to practice.",
          "Membership Tiers: ACS (Associate Company Secretary) → FCS (Fellow Company Secretary, after 5 years of experience).",
          "Certificate of Practice (COP): Required if you want to start your own firm and provide consulting services.",
          "Continuous Professional Development: FCS members must complete CPD hours annually."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "High Accountability: If the company breaks a law, you are the first one the regulator calls.",
          "The 'Pass Rate' Wall: Like CA, the pass percentage for Professional exams can be low (10-15%). Persistence is your best friend.",
          "Deadline Stress: 'March 31st' and 'Annual Return' seasons mean long hours and high pressure.",
          "Regulatory Changes: Laws change frequently; staying updated is mandatory."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in company secretaryship.",
        color: RED2,
        content: [
          "AI Compliance: Future CS professionals will oversee AI Ethics—ensuring that robots and algorithms follow corporate laws.",
          "ESG Reporting: Companies now have to report their 'Carbon Footprint.' The CS is becoming the head of 'Green Governance.'",
          "Digital Boardrooms: Virtual meetings and blockchain-based voting are the new normal.",
          "Data Privacy: With GDPR and India's data protection laws, CS roles are expanding into data governance.",
          "Cybersecurity Governance: Overseeing cyber risk management and compliance."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Reading Habits: Read the business section of newspapers like The Economic Times.",
          "Public Speaking: Join a debate club. You need to speak confidently to Board members.",
          "Writing Skills: Practice drafting formal letters and emails. Clear writing is a CS's superpower.",
          "Explore Law: Browse the mca.gov.in website to see how companies are registered in India.",
          "Digital Skills: Learn Microsoft Office and basic data management tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian CS Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Preeti Malhotra: The first woman President of ICSI (2007) and a key advisor on the JJ Irani Committee for Company Law.",
          "Dev Bajpai: Executive Director (Legal & Corporate Affairs) and CS of Hindustan Unilever (HUL); one of the most respected voices in corporate law.",
          "Vinod Kothari: A legendary Practising Company Secretary and author whose books are the 'Bible' for CS students in India.",
          "Ashok Haldia: Former President of ICSI and a pioneer in corporate governance reforms.",
          "Shyamala Gopinath: A renowned CS and corporate governance expert who has shaped regulatory frameworks."
        ]
      }
    ]
  },

  // ─── ECONOMIST ───────────────────────────────────────────────────
  economics: {
      slug: "economics",
      badge: "📉 Career Exploration for Class 10+",
      heading: "The Science of Smart Decisions",
      subheading:
        "Economists are social detectives—they study how people, companies, and governments allocate scarce resources. They help solve big problems like poverty, unemployment, and climate change. In 2026 India, economists are architects helping our nation move toward a $7 Trillion economy.",
      whyCards: [
        { icon: "🔍", title: "Solve Real Problems", description: "Address poverty, unemployment, and inflation", borderColor: "#F59E0B" },
        { icon: "🏛️", title: "Government & Policy", description: "Shape India's economic policies at the top level", borderColor: "#1E40AF" },
        { icon: "📊", title: "Data-Driven", description: "Apply statistics to real-world economic problems", borderColor: "#6366F1" },
        { icon: "🌐", title: "Global Scope", description: "Work with IMF, World Bank, and global institutions", borderColor: "#10B981" }
      ],
      quickFacts: [
        { label: "Salary Range", detail: "₹6L–₹1Cr+ annually", color: "bg-amber-100 text-amber-700" },
        { label: "Market Growth", detail: "15% annual growth for quantitative economists", color: "bg-blue-100 text-blue-700" },
        { label: "Duration", detail: "3-year BA/BSc + 2-year MA/MSc", color: "bg-indigo-100 text-indigo-700" }
      ],
      statCards: [
        { value: "₹7 Trillion", label: "India's GDP Target by 2026", gradient: "from-amber-500 to-amber-600" },
        { value: "15% CAGR", label: "Quantitative Economist Growth", gradient: "from-blue-600 to-indigo-600" }
      ],
      guideSections: [
        {
          id: "what",
          title: "What is This Career All About?",
          icon: "📉",
          description: "Understanding the economist's role in shaping society and policy",
          color: RED,
          content: [
            "Economics is the study of choices. Since we don't have infinite resources (like money, time, or oil), we have to make smart decisions.",
            "An Economist is a professional who studies how people, companies, and governments use these limited resources.",
            "They aren't just 'math people'; they are social detectives who use data to solve world problems like poverty, unemployment, and climate change.",
            "In 2026 India, economists are the architects helping our nation move toward a $7 Trillion economy, ensuring that growth reaches every village and city.",
            "Economists work in government (RBI, Ministry of Finance), corporations (Google, Goldman Sachs), and international organizations (World Bank, IMF).",
            "The profession combines rigorous data analysis with real-world problem-solving and policy impact."
          ]
        },
        {
          id: "dayinlife",
          title: "A Day in the Life",
          icon: "⏰",
          description: "Real-world experience of a working economist",
          color: RED2,
          content: [
            "9:00 AM –   The Morning Market Scan: Rohan, a Policy Analyst at a think-tank in New Delhi, starts by scanning the latest inflation data released by the RBI. He isn't just looking at numbers; he's thinking about how a 1% rise in fuel prices will affect a farmer in Punjab or a student in Chennai.",
            "11:30 AM –   The Strategy Huddle: Rohan joins a brainstorming session with his team. They are working on a project for the Ministry of Education to understand if providing free laptops increases student scores. He reviews data from thousands of schools, looking for cause and effect.",
            "1:30 PM –   Data Visualizing: After lunch, Rohan dives into software like R or Stata. He creates a digital map of India, showing where the new 'Green Energy' jobs are being created. He translates a complex 50-page spreadsheet into a single, beautiful chart that a politician can understand in 5 minutes.",
            "4:00 PM –   The Media Briefing: Rohan is interviewed by a business news channel. He explains in simple Hindi and English why the 'Digital Rupee' is making shopping safer for common citizens. He has to be a great communicator, turning 'jargon' into 'stories.'",
            "7:00 PM –   The Global Call: Before heading home, Rohan has a video call with economists in New York and London. They discuss how global trade is changing. As he closes his laptop, he feels a sense of pride—his work today might influence a law that helps millions tomorrow."
          ]
        },
        {
          id: "who",
          title: "Is This You? (Personality Traits & Skills)",
          icon: "🎯",
          description: "Traits that make someone well-suited for an economics career",
          color: RED3,
          content: [
            "Curiosity: Do you always ask 'Why?' when you see a 'Sale' sign or a new tax?",
            "Logical Thinking: Can you follow a chain of events (e.g., if X happens, then Y will follow)?",
            "Numerical Comfort: You don't need to be a math genius, but you should like using numbers to prove your point.",
            "Social Empathy: Do you care about making the world a fairer place?",
            "Communication: Can you tell a story using facts and figures?",
            "Analytical Mind: You enjoy breaking down complex problems into manageable pieces.",
            "Tech-Savvy: Comfortable with Excel, R, Python, and data visualization tools.",
            "Patience: You understand that economic changes take time to show results."
          ]
        },
        {
          id: "responsibilities",
          title: "Key Responsibilities and Workflow",
          icon: "BarChart3",
          description: "Core duties of an economist",
          color: RED4,
          content: [
            "Identify the Problem: (e.g., Why is onion price rising?)",
            "Collect Data: Gathering prices, weather reports, and transport costs.",
            "Analysis: Using statistics to find the main 'culprit' (like a bad monsoon).",
            "Forecasting: Predicting what will happen next month or year.",
            "Policy Recommendation: Suggesting a solution (like importing onions) to the government.",
            "Note : The professional workflow follows a Question-Data-Solution cycle.",
            "Note :Economists must communicate findings to both technical and non-technical audiences.",
            "Note :Continuous monitoring and adjustment of recommendations based on real-world outcomes."
          ]
        },
        {
          id: "pathways",
          title: "Career Pathways",
          icon: "Map",
          description: "Step-by-step journeys to a career in finance and economics",
          color: RED5,
          content: [
            "Pathway A: Degree + Certification Route",
            "Step 1: Complete Class 12th (Commerce/Maths preferred)",
            "Step 2: Pursue B.Com / BBA Finance / B.Sc Economics",
            "Step 3: Learn tools — Excel, Financial Modeling, PowerPoint, Tally",
            "Step 4: Get certified — CFA Level 1, NISM, or NSE certifications",
            "Step 5: Do internships at banks, AMCs, brokerages, or consulting firms",
            "Step 6: Join as Financial Analyst, Equity Research Analyst, or Credit Analyst",
            "Pathway B: MBA Finance Route",
            "Step 1: Complete Class 12th (any stream with Maths)",
            "Step 2: Pursue B.Com / BBA / B.Tech / B.Sc",
            "Step 3: Work 1–2 years in accounting, banking, or sales",
            "Step 4: Complete MBA Finance",
            "Step 5: Learn Bloomberg, SQL, Python, Tableau, Power BI",
            "Step 6: Join as Investment Analyst, Portfolio Manager, or Corporate Finance Analyst",
            "Pathway C: Skill-Based Entry Route",
            "Step 1: Complete Class 12th (Commerce preferred)",
            "Step 2: Pursue B.Com / BBA or diploma in Financial Markets",
            "Step 3: Complete online courses — Financial Modeling, Valuation, Excel",
            "Step 4: Get NISM/NCFM certifications for stock market roles",
            "Step 5: Intern at stockbroking firms, fintech startups, or NBFCs",
            "Step 6: Work as Junior Analyst, MF Distributor, Wealth Advisor, or Fintech Analyst"
          ]
        },
        {
          id: "market",
          title: "Market Snapshot — India 2026",
          icon: "TrendingUp",
          description: "Salary, growth, and job market data for economists",
          color: RED2,
          content: [
            "Salary Snapshot (Annual INR)",
            "CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹2+ Crore",
            "Senior / Lead Role (10+ yrs): ₹25–80 LPA",
            "Mid-Level Professional (5–8 yrs): ₹12–35 LPA",
            "Junior / Associate (3–5 yrs): ₹6–18 LPA",
            "Entry Level (0–2 yrs): ₹4–10 LPA",
            "Note: Metro cities (Mumbai, Delhi-NCR) pay 20–40% higher; advanced degrees (MA/PhD, IIT/IIM/ISI) boost salary by 30–60%.",
            "Where Are the Jobs?",
            "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune",
            "Top Industries: Banking & Finance, Management Consulting, Government (RBI, NITI Aayog), Think Tanks, Tech Giants, Fintech",
            "Opportunities: High demand in policy consulting and international finance; growing roles in data-driven economic research"
          ]
        },
        {
          id: "institutions",
          title: "Where to Study?",
          icon: "Building2",
          description: "Top institutions across India.",
          color: RED,
          content: [
            "Government: Shri Ram College of Commerce Delhi, Delhi School of Economics, St. Stephen's College Delhi, Madras School of Economics Chennai, Presidency University Kolkata",
            "Private: Ashoka University Sonipat, FLAME University Pune, NMIMS Mumbai",
            "Online: IGNOU, SWAYAM, NPTEL, Coursera"
          ]
        },
        {
          id: "opportunities",
          title: "Career Opportunities",
          icon: "Briefcase",
          description: "Conventional and emerging roles.",
          color: RED2,
          content: [
            "Conventional: Policy Analyst & Economic Researcher, Investment Banker & Financial Consultant, Risk Analyst & Quantitative Economist, Business Journalist & Economic Advisor",
            "New-Age & AI-Driven: AI-Powered Economic Forecaster, ESG Sustainability Data Economist, Blockchain-Based Resource Analyst, Digital Economy Specialist",
            "Remote/Entrepreneurship: Freelance Policy & Economic Consultant, Economic Content Creator & Educator, Independent Market Research Startup Founder"
          ]
        },
        {
          id: "10",
          title: "Scholarship Opportunities",
          icon: "🎓",
          description: "Financial support available for economics students",
          color: RED5,
          content: [
            "Central Govt (NSP): Post-Matric and Central Sector Schemes for meritorious students.",
            "Institutional: Ashoka University offers up to 100% need-based financial aid.",
            "Private: Reliance Foundation Scholarships for UG students.",
            "Specific: RBI Young Scholars Scheme (Includes a stipend).",
            "State-Level: Various state governments offer scholarships for economics students.",
            "Merit-Based: Top performers in entrance exams receive full or partial scholarships.",
            "Need-Based: Many institutions offer financial aid based on family income."
          ]
        },
        {
          id: "11",
          title: "Professional Bodies & Licensing",
          icon: "�",
          description: "Regulatory framework and professional credentials",
          color: RED,
          content: [
            "IES (Indian Economic Service): The most prestigious cadre for economists in the Indian government.",
            "Certifications: CFA (Chartered Financial Analyst) or FRM (Financial Risk Manager) add massive value to your degree.",
            "Professional Associations: Indian Economic Association, Delhi School of Economics Alumni Network.",
            "Continuing Education: Many employers require ongoing professional development.",
            "International Recognition: Indian economists are recognized globally, especially those with PhDs from top universities.",
            "Membership: Join professional bodies to stay updated on industry trends."
          ]
        },
        {
          id: "12",
          title: "Career Opportunities",
          icon: "🚀",
          description: "Diverse career paths for economists",
          color: RED2,
          content: [
            "Conventional: Professor, RBI Officer, Financial Analyst.",
            "New-Age: Behavioral Economist (Helping apps like Swiggy understand why you buy!), Climate Economist, Data Scientist.",
            "Freelancing: Independent Economic Columnist, Policy Consultant for NGOs.",
            "Government: Policy maker, economic advisor, budget analyst.",
            "Corporate: Market analyst, business strategist, pricing specialist.",
            "International: Economist at World Bank, IMF, or UN agencies.",
            "Entrepreneurship: Start your own economic research or consulting firm."
          ]
        },
        {
          id: "13",
          title: "Challenges and Realities",
          icon: "⚠️",
          description: "Challenges to be aware of in the economics profession",
          color: RED3,
          content: [
            "Math Intensity: Top-tier economics is very heavy on Calculus and Statistics.",
            "Competitive Exams: Getting into the RBI or IES is as hard as the IAS.",
            "Abstract Nature: Sometimes, your theories might take years to show results in the real world.",
            "Government and top research jobs are highly competitive with limited seats.",
            "Career growth is slow; recognition takes years of consistent hard work.",
            "Real-world problems rarely have textbook solutions.",
            "Economic predictions can go wrong, inviting public criticism."
          ]
        },
        {
          id: "14",
          title: "Emerging Trends & Future Outlook (2025–2035)",
          icon: "🔮",
          description: "Future of the economics profession",
          color: RED4,
          content: [
            "AI & Economics: AI will handle the data entry; Economists will handle the Ethics and Strategy.",
            "Green Growth: 'Environmental Economics' will become a core subject as India moves toward Net Zero.",
            "Gig Economy Research: Studying how 100 million freelancers change the way money moves.",
            "Digital Economy: Cryptocurrency, blockchain, and digital payments will create new research areas.",
            "Behavioral Economics: Understanding human psychology in financial decisions.",
            "Climate Economics: Carbon pricing and sustainability accounting will be mainstream.",
            "Global Trade: Post-pandemic supply chain restructuring will need economist expertise.",
            "Salary Growth: Expected 8–10% annual salary growth in the next decade."
          ]
        },
        {
          id: "15",
          title: "Skills to Build While Still in School",
          icon: "📚",
          description: "Steps to build a strong foundation for an economics career",
          color: RED5,
          content: [
            "Mathematics: Don't drop Math in Class 11-12!",
            "Read the News: Follow the LiveMint or Economic Times 'Opinion' section.",
            "Learn MS Excel: It's a tool you will use every day.",
            "Listen to Podcasts: Try 'The Seen and the Unseen' (Amit Varma) for deep economic stories.",
            "Strengthen statistics and data interpretation skills.",
            "Join debates to sharpen logical and communication skills.",
            "Learn basic Excel or Python for data analysis.",
            "Track India's budget, inflation, and government schemes regularly."
          ]
        },
        {
          id: "16",
          title: "Famous Indian Personalities",
          icon: "⭐",
          description: "Inspiring economists who shaped India's economic landscape",
          color: RED,
          content: [
            "Amartya Sen: Nobel Laureate known for 'Welfare Economics'—he asks how we can make life better for the poorest.",
            "Raghuram Rajan: Former RBI Governor who predicted the 2008 global financial crisis.",
            "Abhijit Banerjee: 2019 Nobel Prize winner who uses small experiments to fight global poverty.",
            "Gita Gopinath: The first female Chief Economist of the IMF.",
            "Manmohan Singh: The architect of India's 1991 economic reforms that changed our lives forever."
          ]
        }
      ]
    },

  // ─── FINANCIAL ANALYST ───────────────────────────────────────────
  financial_analyst: {
      slug: "financial_analyst",
      badge: "📈 Career Exploration for Class 10+",
      heading: "The Navigators of Wealth",
      subheading:
        "Financial Analysts are professional detectives for money—they look at data, news, and mathematical models to figure out the value of an investment. In today's India, they are the navigators helping steer billions of rupees into projects that create jobs and build wealth.",
      whyCards: [
        { icon: "🔍", title: "Strategic Impact", description: "Guide billion-dollar investment decisions", borderColor: "#F59E0B" },
        { icon: "📊", title: "Data-Driven", description: "Blend maths, finance, and technology daily", borderColor: "#1E40AF" },
        { icon: "💼", title: "High Demand", description: "Needed across banks, MNCs, and investment firms", borderColor: "#6366F1" },
        { icon: "🌐", title: "Global Reach", description: "CFA is a globally respected qualification", borderColor: "#10B981" }
      ],
      quickFacts: [
        { label: "Salary Range", detail: "₹6L–₹1.2Cr+ annually", color: "bg-amber-100 text-amber-700" },
        { label: "Market Growth", detail: "8–10% annual job growth", color: "bg-blue-100 text-blue-700" },
        { label: "Duration", detail: "3-year UG + CFA (3 levels)", color: "bg-indigo-100 text-indigo-700" }
      ],
      statCards: [
        { value: "₹6L–₹1.2Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
        { value: "8–10% CAGR", label: "Job Market Growth", gradient: "from-blue-600 to-indigo-600" }
      ],
      guideSections: [
        {
          id: "1",
          title: "What is This Career All About?",
          icon: "📈",
          description: "Understanding the financial analyst's mission and strategic impact",
          color: RED,
          content: [
            "In simple terms, a Financial Analyst is a professional detective for money. They look at data, news, and mathematical models to figure out the value of an investment.",
            "They answer the big question: 'Is this worth the money?'",
            "In today's India—one of the world's fastest-growing economies—Financial Analysts are the navigators. They help steer billions of rupees into projects that create jobs, build infrastructure, and grow the wealth of ordinary citizens.",
            "Without them, the financial world would be like sailing a ship in a storm without a compass.",
            "Financial Analysts work in investment banks, mutual funds, private equity firms, and fintech startups.",
            "They combine rigorous data analysis with market intuition and strategic thinking."
          ]
        },
        {
          id: "2",
          title: "A Day in the Life",
          icon: "⏰",
          description: "Real-world experience of a working financial analyst",
          color: RED2,
          content: [
            "8:30 AM –  The Market Pulse: Ishaan, a Junior Equity Research Analyst at an investment firm in Mumbai, starts long before the stock market opens. He's scanning global news—did the US Federal Reserve change interest rates? How did the Tokyo market perform? Money never sleeps, and Ishaan needs to know the 'temperature' of the world.",
            "10:30 AM –  The Spreadsheet Deep-Dive: With the markets open, Ishaan dives into Excel. He is 'building a model' for a renewable energy company. He plugs in their electricity production, the cost of solar panels, and their debt levels. He isn't just looking at what they earned yesterday; he's trying to predict what they will earn in 2030.",
            "1:30 PM –  The Management Call: After a quick working lunch, Ishaan joins a video call with the CEO of the company he is analyzing. He asks tough questions: 'Why did your profit margins drop last quarter?' and 'How will the new government tax affect your expansion?' He has to be part-investigator and part-journalist.",
            "4:00 PM –  The Investment Pitch: Ishaan presents his findings to the Senior Fund Manager. He has five minutes to convince them to buy or sell the stock. He uses clear charts and sharp logic. It's high-pressure; one recommendation could involve hundreds of crores of rupees.",
            "7:30 PM –  Learning for Tomorrow: As the office quietens, Ishaan spends an hour studying for his CFA (Chartered Financial Analyst) Level II exam. In this field, the learning never stops. He leaves the office knowing his analysis today might help a retired teacher's pension grow tomorrow."
          ]
        },
        {
          id: "3",
          title: "Is This You? (Personality Traits & Skills)",
          icon: "🎯",
          description: "Traits that make someone well-suited for a financial analyst career",
          color: RED3,
          content: [
            "The 'Why' Factor: You don't just see a price tag; you wonder why it's priced that way.",
            "Analytical Mind: You love puzzles and find patterns in numbers that others miss.",
            "Ethics of Steel: You handle sensitive information. Honesty is your most valuable currency.",
            "Hard Skills: A strong grip on Mathematics, Statistics, and MS Excel.",
            "Soft Skills: The ability to explain complex financial 'jargon' through simple stories.",
            "Curiosity: You constantly ask questions and dig deeper into data.",
            "Resilience: You handle market volatility and pressure with composure.",
            "Tech-Savvy: Comfortable with financial software, Python, and data visualization tools."
          ]
        },
        {
          id: "4",
          title: "Key Responsibilities and Workflow",
          icon: "📊",
          description: "Core duties of a financial analyst",
          color: RED4,
          content: [
            "Information Gathering: Collecting financial statements, macro-economic data, and industry reports.",
            "Financial Modeling: Creating mathematical simulations to project future earnings.",
            "Valuation: Using techniques like DCF (Discounted Cash Flow) to find the 'fair price' of a business.",
            "Reporting: Writing concise 'Buy/Sell/Hold' notes for investors.",
            "The workflow follows a Data → Logic → Recommendation cycle.",
            "Monitoring: Continuously tracking market trends, company news, and economic changes.",
            "Presenting: Communicating findings to fund managers, investors, and senior leadership.",
            "Updating: Revising recommendations based on new information and market developments."
          ]
        },
        {
          id: "pathways",
          title: "Career Pathways",
          icon: "Map",
          description: "Step-by-step journeys to a career in finance and economics",
          color: RED5,
          content: [
            "Pathway A: Degree + Certification Route",
            "Step 1: Complete Class 12th (Commerce/Maths preferred)",
            "Step 2: Pursue B.Com / BBA Finance / B.Sc Economics",
            "Step 3: Learn tools — Excel, Financial Modeling, PowerPoint, Tally",
            "Step 4: Get certified — CFA Level 1, NISM, or NSE certifications",
            "Step 5: Do internships at banks, AMCs, brokerages, or consulting firms",
            "Step 6: Join as Financial Analyst, Equity Research Analyst, or Credit Analyst",
            "Pathway B: MBA Finance Route",
            "Step 1: Complete Class 12th (any stream with Maths)",
            "Step 2: Pursue B.Com / BBA / B.Tech / B.Sc",
            "Step 3: Work 1–2 years in accounting, banking, or sales",
            "Step 4: Complete MBA Finance",
            "Step 5: Learn Bloomberg, SQL, Python, Tableau, Power BI",
            "Step 6: Join as Investment Analyst, Portfolio Manager, or Corporate Finance Analyst",
            "Pathway C: Skill-Based Entry Route",
            "Step 1: Complete Class 12th (Commerce preferred)",
            "Step 2: Pursue B.Com / BBA or diploma in Financial Markets",
            "Step 3: Complete online courses — Financial Modeling, Valuation, Excel",
            "Step 4: Get NISM/NCFM certifications for stock market roles",
            "Step 5: Intern at stockbroking firms, fintech startups, or NBFCs",
            "Step 6: Work as Junior Analyst, MF Distributor, Wealth Advisor, or Fintech Analyst"
          ]
        },
        {
          id: "market",
          title: "Market Snapshot — India 2026",
          icon: "TrendingUp",
          description: "Salary, growth, and job market data for financial analysts",
          color: RED2,
          content: [
            "Salary Snapshot (Annual INR)",
            "CXO / Managing Director (15+ yrs): ₹1.2 Crore –  ₹4 Crores+",
            "Senior / Lead Role (10+ yrs): ₹40–75 Lakhs",
            "Mid-Level Professional (5–8 yrs): ₹15–28 Lakhs",
            "Junior / Associate (3–5 yrs): ₹10–18 Lakhs",
            "Entry Level (0–2 yrs): ₹6–10 Lakhs",
            "Note: Mumbai offers ~20% higher salaries than other metros; performance bonuses can add 30–100% to base pay.",
            "Where Are the Jobs?",
            "Top Cities: Mumbai (Financial Capital), Bengaluru (Fintech), Gurugram/Delhi, Hyderabad, GIFT City (Gujarat)",
            "Top Industries: Investment Banking, Asset Management (AMCs), Fintech Startups, Corporate Finance, Wealth Management",
            "Global Demand: High in USA, UK, UAE; huge demand for CFA charterholders in global financial hubs."
          ]
        },
        {
          id: "institutions",
          title: "Where to Study?",
          icon: "Building2",
          description: "Top institutions across India.",
          color: RED,
          content: [
            "Government: University of Delhi SRCC, St. Stephen's, Indian Institutes of Management IIMs, University of Mumbai Sydenham, HR College, Madras Christian College Chennai",
            "Private: Ashoka University Sonipat, NMIMS Mumbai, Symbiosis Pune, Christ University Bengaluru",
            "Online: CFA Institute Online Resources, NSE Academy, NISM, Coursera Financial Markets Courses"
          ]
        },
        {
          id: "opportunities",
          title: "Career Opportunities",
          icon: "Briefcase",
          description: "Conventional and emerging roles.",
          color: RED2,
          content: [
            "Conventional: Equity Research Analyst & Portfolio Manager, Investment Banker & M&A Associate, Credit Analyst & Risk Manager, Treasury Manager & FP&A Analyst",
            "New-Age & AI-Driven: Algo-Trading Specialist & Quant Analyst, Fintech Product Manager, Crypto Asset Analyst, Sustainable Finance ESG Analyst",
            "Remote/Entrepreneurship: Independent Financial Consultant, Financial Content Creator & Educator, Fintech Startup Founder"
          ]
        },
        {
          id: "cost",
          title: "What Will It Cost?",
          icon: "CircleDollarSign",
          description: "Course fees and additional expenses.",
          color: RED2,
          content: [
            "Degree (Govt): ₹15,000 –  ₹60,000 (Total fees)",
            "MBA (Top B-Schools): ₹15 Lakhs –  ₹28 Lakhs (Total fees)",
            "CFA Program: ₹2.5 Lakhs –  ₹3.5 Lakhs (Exam & material fees)",
            "Note: Professional certifications like CFA have a high Return on Investment (ROI) but require upfront exam fees."
          ]
        },
        {
          id: "10",
          title: "Scholarship Opportunities",
          icon: "🎓",
          description: "Financial support available for financial analyst aspirants",
          color: RED5,
          content: [
            "Central: NSP (National Scholarship Portal) for merit-cum-means.",
            "Institutional: IIM-A Need-based Financial Aid (up to 100% fee waiver).",
            "CFA Institute: Access Scholarships can reduce exam fees by nearly 70% for students in need.",
            "State-Level: Various state governments offer scholarships for commerce students.",
            "Merit-Based: Top performers in entrance exams receive full or partial scholarships.",
            "Need-Based: Many institutions offer financial aid based on family income.",
            "Employer Sponsorship: Many firms sponsor employees pursuing CFA."
          ]
        },
        {
          id: "11",
          title: "Professional Bodies & Licensing",
          icon: "📜",
          description: "Regulatory framework and professional credentials",
          color: RED,
          content: [
            "CFA Institute: The most prestigious global body for financial analysts.",
            "SEBI: Requires analysts to be NISM Certified (Series XV Research Analyst):  to sign off on public reports.",
            "NISM Certification: National Institute of Securities Markets certification is mandatory for research analysts.",
            "Professional Associations: CFA Society India, ICAI (for CA-qualified analysts).",
            "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually.",
            "International Recognition: CFA charter is recognized globally across 165+ countries."
          ]
        },

        {
          id: "13",
          title: "Challenges and Realities",
          icon: "⚠️",
          description: "Challenges to be aware of in the financial analyst profession",
          color: RED3,
          content: [
            "The Hours: During 'Earnings Season,' 12–14 hour workdays are common.",
            "Market Stress: When the market crashes, the pressure to 'save' investments is immense.",
            "Continuous Learning: Financial laws change every month. You are a student for life.",
            "Meeting tight deadlines with accurate reports is extremely stressful.:",
            "Top finance jobs attract thousands of highly qualified candidates.:",
            "Market predictions can fail, directly impacting investor decisions.:",
            "Long working hours, especially during quarterly results season, are common.:"
          ]
        },
        {
          id: "14",
          title: "Emerging Trends & Future Outlook (2025–2035)",
          icon: "🔮",
          description: "Future of the financial analyst profession",
          color: RED4,
          content: [
            "AI Dominance: AI will do the 'data entry,' but humans will do the 'judgment.' Analysts who can code in Python will thrive.",
            "Sustainable Finance: Analysts will be hired specifically to judge if a company is eco-friendly.",
            "Retail Investing Boom: Apps like Zerodha and Groww are creating demand for financial educators and analysts.",
            "Cryptocurrency Analysis: New asset class creating specialized analyst roles.",
            "ESG Integration: Environmental, Social, and Governance factors becoming core to valuation.",
            "Automation: Routine analysis will be automated; strategic thinking will be premium.",
            "Global Opportunities: Indian analysts increasingly sought in international markets.",
            "Salary Growth: Expected 8–10% annual salary growth in the next decade."
          ]
        },
        {
          id: "15",
          title: "Skills to Build While Still in School",
          icon: "📚",
          description: "Steps to build a strong foundation for a financial analyst career",
          color: RED5,
          content: [
            "Master Excel: Learn how to use 'VLOOKUP' and 'Pivot Tables' now.",
            "Read the News: Follow LiveMint or The Economic Times.",
            "Virtual Trading: Use apps that let you trade with 'fake money' to understand how markets move.",
            "Learn Python: Basic coding skills will give you a competitive edge.",
            "Financial Modeling: Start learning DCF and other valuation techniques.",
            "Math Mastery: Strong foundation in statistics and calculus.",
            "Case Studies: Analyze real companies and their financial statements.",
            "Networking: Join investment clubs and attend finance seminars."
          ]
        },
        {
          id: "16",
          title: "Famous Indian Personalities",
          icon: "⭐",
          description: "Inspiring financial analysts who shaped India's investment landscape",
          color: RED,
          content: [
            "Rakesh Jhunjhunwala: The 'Big Bull' who used analysis to build a multi-billion dollar empire.",
            "Ashwath Damodaran: Known globally as the 'Dean of Valuation.'",
            "Radhika Gupta: CEO of Edelweiss MF, who used her analytical background to become a leader in finance.",
            "Deepak Shenoy: Founder of Capitalmind, pioneering financial education in India.",
            "Priya Nair: Leading equity research analyst known for deep sector analysis."
          ]
        }
      ]
    },

  // ─── FINANCIAL & INVESTMENT PLANNING ─────────────────────────────
  financial_and_investment_planning: {
      slug: "financial_and_investment_planning",
      badge: "Career Exploration for Class 10+",
      heading: "The Architects of Personal Wealth",
      subheading:
        "A Financial Planner is a 'Life Architect' for your money—they help map out your entire life's journey. In today's India, with over 140 crore people and a booming middle class, experts are needed to ensure hard-earned money is safe, growing, and working for families.",
      whyCards: [
        { icon: "❤️", title: "Human Impact", description: "Help families achieve their life dreams", borderColor: "#F59E0B" },
        { icon: "📈", title: "Growing Market", description: "Middle-class moving beyond gold & FDs to MF & digital assets", borderColor: "#1E40AF" },
        { icon: "💼", title: "Independent Practice", description: "Build your own financial planning business", borderColor: "#6366F1" },
        { icon: "🌐", title: "Diverse Opportunities", description: "Work in banks, wealth firms, or independently", borderColor: "#10B981" }
      ],
      quickFacts: [
        { label: "Salary Range", detail: "₹4.5L–₹1Cr+ annually", color: "bg-amber-100 text-amber-700" },
        { label: "Market Growth", detail: "12–15% CAGR until 2030", color: "bg-blue-100 text-blue-700" },
        { label: "Duration", detail: "3-year UG + CFP certification", color: "bg-indigo-100 text-indigo-700" }
      ],
      statCards: [
        { value: "₹4.5L–₹1Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
        { value: "12–15% CAGR", label: "Wealth Management Growth", gradient: "from-blue-600 to-indigo-600" }
      ],
      guideSections: [
        {
          id: "1",
          title: "What is This Career All About?",
          icon: "🗺️",
          description: "Understanding the financial planner's role as a life architect",
          color: RED,
          content: [
            "Have you ever wondered how some people manage to buy their dream home, send their children to top universities abroad, and retire comfortably while others struggle despite earning well? The secret often lies in Financial and Investment Planning.",
            "In simple, jargon-free terms, a Financial Planner is like a 'Life Architect' for your money. They don't just tell you where to put your savings; they help you map out your entire life's journey.",
            "A professional in this field looks at a person's income, expenses, and dreams (like starting a business or traveling the world) and creates a step-by-step roadmap to make those dreams a reality.",
            "In today's India, this career is more important than ever. We are moving away from traditional savings like gold and fixed deposits toward a complex world of mutual funds, stocks, and digital assets.",
            "With over 140 crore people and a booming middle class, India needs experts who can ensure that the hard-earned money of Indian families is safe, growing, and working for them."
          ]
        },
        {
          id: "2",
          title: "A Day in the Life",
          icon: "⏰",
          description: "Real-world experience of a working financial planner",
          color: RED2,
          content: [
            "9:00 AM –  The Market Pulse: Aryan, a Certified Financial Planner (CFP) based in Pune, starts by scanning global and Indian market news. He isn't looking for 'hot stocks' to gamble on; he's looking for trends that might affect his clients' long-term goals—like a change in interest rates or a new tax rule for mutual funds.",
            "10:30 AM –  The Dream Session: Aryan's first meeting is with a young couple in their late 20s. They want to plan for a home in five years and a world tour in ten. Aryan doesn't talk about numbers yet. He asks about their lifestyle, their fears, and their priorities. This is the 'Discovery' phase, where he listens more than he speaks.",
            "1:30 PM –  The Portfolio Construction: After a quick lunch, Aryan sits down with his specialized software. He analyzes a client's existing investments. He uses Asset Allocation—a fancy way of saying he spreads their money across different 'baskets' like equity (stocks), debt (bonds), and gold to make sure they aren't taking too much risk.",
            "4:00 PM –  The Crisis Call: A client calls, panicked because the stock market has dropped by 2%. Aryan spends 20 minutes calmly explaining that their plan is built for 15 years, not 15 minutes. In this career, you are often part-economist and part-psychologist.",
            "6:00 PM –  Learning & Compliance: Before wrapping up, Aryan reviews the latest guidelines from SEBI (Securities and Exchange Board of India). He updates his client reports and reads a research paper on 'Green Investing.' As he heads home, he feels the satisfaction of knowing he helped a family move one step closer to their dream home."
          ]
        },
        {
          id: "3",
          title: "Is This You? (Personality Traits & Skills)",
          icon: "🎯",
          description: "Traits that make someone well-suited for a financial planning career",
          color: RED3,
          content: [
            "The Empathy Factor: Do you enjoy helping people solve their problems? You need to care about your clients' lives, not just their bank accounts.",
            "Numerical Logical Thinking: You don't need to be a math genius, but you should enjoy logic, percentages, and seeing how small savings grow over time.",
            "Ethics of Steel: You will handle people's life savings. Honesty and integrity are non-negotiable.",
            "Patience & Calm: Can you stay cool when everyone else is panicking about the economy?",
            "Communication Skills: Can you explain a complex concept (like 'Compound Interest') to a 14-year-old or an 80-year-old?",
            "Organizational: You manage multiple client portfolios and deadlines simultaneously.",
            "Continuous Learner: Financial markets and regulations change constantly."
          ]
        },
        {
          id: "4",
          title: "Key Responsibilities and Workflow",
          icon: "📋",
          description: "Core duties of a financial planner",
          color: RED4,
          content: [
            "A professional Financial Planner follows a standardized six-step process:",
            "1. Establishing the Relationship: Explaining services and building trust.",
            "2. Gathering Data: Collecting details on income, insurance, and future goals.",
            "3. Analysis: Evaluating the client's current financial 'health.'",
            "4. Developing the Plan: Designing a custom roadmap to reach the client's goals.",
            "5. Implementation: Helping the client actually buy the right funds or insurance.",
            "6. Monitoring: Meeting every six months to adjust the plan as life changes.",
            "Ongoing: Staying updated on tax laws, market trends, and regulatory changes."
          ]
        },
        {
          id: "5",
          title: "Career Pathways",
          icon: "🛤️",
          description: "Educational journey from Class 10 onwards.",
          color: RED5,
          content: [
            "Pathway A: Degree + CFP Route",
            "Step 1: Complete Class 12th (Commerce/Maths preferred)",
            "Step 2: Pursue B.Com / BBA Finance / B.Sc Economics",
            "Step 3: Clear CFP (Certified Financial Planner) certification from FPSB India",
            "Step 4: Learn tools — Excel, MorningStar, MF Utilities, financial planning software",
            "Step 5: Do internships at wealth management firms, AMCs, or insurance companies",
            "Step 6: Join as Financial Planner, Investment Advisor, or Wealth Manager",
            "Pathway B: Skill-Based Entry Route",
            "Step 1: Complete Class 12th (any stream)",
            "Step 2: Pursue B.Com / BBA or diploma in Financial Planning",
            "Step 3: Get NISM, NCFM, or AMFI certifications for mutual fund/insurance advisory",
            "Step 4: Learn basics — tax planning, retirement planning, insurance, SIPs",
            "Step 5: Join a broking firm, bank, or NBFC as trainee advisor",
            "Step 6: Work as MF Distributor, Retirement Planner, or Personal Finance Consultant",
            "Pathway C: Higher Education + Specialization Route",
            "Step 1: Complete Class 12th (Commerce/Maths)",
            "Step 2: Pursue B.Com / BBA / B.Tech / CA",
            "Step 3: Work 1–2 years in banking, accounting, or sales",
            "Step 4: Complete MBA Finance / PG in Wealth Management (NISM, IIMS)",
            "Step 5: Add certifications — CFA, CFP, CHFC, or SEBI RIA registration",
            "Step 6: Join as Portfolio Manager, SEBI-Registered Investment Advisor, Private Banker, or Financial Planning Head"
          ]
        },
        {
          id: "6",
          title: "Market Snapshot — India 2025-26",
          icon: "📈",
          description: "Salary, growth, and job market data for financial planners",
          color: RED,
          content: [
            "Salary Snapshot (Annual INR)",
            "CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹3+ Crore",
            "Senior / Lead Role (10+ yrs): ₹20–70 LPA",
            "Mid-Level Professional (5–8 yrs): ₹8–30 LPA",
            "Junior / Associate (3–5 yrs): ₹5–15 LPA",
            "Entry Level (0–2 yrs): ₹3–8 LPA",
            "Note: Metro cities (Mumbai, Delhi-NCR) pay 20–40% higher; CFP/CFA and client portfolio size can increase earnings by 30–100%.",
            "Where Are the Jobs?",
            "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune",
            "Top Industries: Wealth Management, Private Banking, Mutual Funds, Insurance, FinTech, Advisory Firms",
            "Opportunities: Rising HNI/retail investors in India; strong demand globally (UAE, Singapore, UK); freelancing and independent advisory growing"
          ]
        },
        {
          id: "institutions",
          title: "Where to Study?",
          icon: "Building2",
          description: "Top institutions across India.",
          color: RED,
          content: [
            "Government: National Institute of Financial Management NIFM Faridabad, National Institute of Securities Markets NISM, Indian Institute of Management IIMs, Reserve Bank of India RBI Financial Literacy Programs",
            "Private: Financial Planning Standards Board India FPSB India CFP Certification, ICFAI Business School, Narsee Monjee Institute NMIMS Mumbai, Amity University",
            "Online: FPSB India Online CFP Certification Programs, Coursera Financial Planning Specializations, SWAYAM, NPTEL, National Stock Exchange NSE Academy Online"
          ]
        },
        {
          id: "opportunities",
          title: "Career Opportunities",
          icon: "Briefcase",
          description: "Conventional and emerging roles.",
          color: RED2,
          content: [
            "Conventional: Certified Financial Planner CFP, Wealth Management Advisor, Mutual Fund Distributor/Advisor, Retirement & Estate Planning Consultant",
            "New-Age and AI-Driven: Robo-Advisory Platform Developer, AI-driven Portfolio Rebalancing Specialist, Algorithmic Investment Strategy Designer, Behavioural Finance Technology Analyst",
            "Remote/Entrepreneurship: Freelance Investment Planning Consultant, Online Financial Planning Advisory Firm, Personal Finance EdTech Platform Founder, Digital Wealth Management Startup Founder"
          ]
        },

        {
          id: "9",
          title: "Scholarship Opportunities",
          icon: "🎓",
          description: "Financial support available for financial planning students",
          color: RED5,
          content: [
            "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional courses.",
            "State: MAHADBT (Maharashtra) or E-Kalyan (Jharkhand) schemes for minority/reserved categories.",
            "Institutional: IIM-A/B Need-based Financial Aid (covering up to 100% of fees).",
            "Private: Aditya Birla Capital COVID Scholarship or HDFC Badhte Kadam for students in financial distress.",
            "Merit-Based: Top performers in entrance exams receive full or partial scholarships.",
            "Employer Sponsorship: Many firms sponsor employees pursuing CFP.",
            "FPSB Scholarships: Available for deserving CFP candidates."
          ]
        },
        {
          id: "10",
          title: "Professional Bodies & Licensing",
          icon: "📜",
          description: "Regulatory framework and professional credentials",
          color: RED,
          content: [
            "FPSB India (Financial Planning Standards Board): The body that awards the 'CFP' mark.",
            "SEBI (Securities and Exchange Board of India): The regulator. You must register with SEBI to give 'Investment Advice' for a fee.",
            "AMFI (Association of Mutual Funds in India): For the 'ARN' (AMFI Registration Number) to distribute mutual funds.",
            "NISM Certification: Series X-A and X-B certifications required for investment advisory.",
            "IRDAI: If dealing with insurance products, IRDAI registration is needed.",
            "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually.",
            "Code of Ethics: Must adhere to strict professional conduct standards."
          ]
        },

        {
          id: "12",
          title: "Challenges and Realities",
          icon: "⚠️",
          description: "Challenges to be aware of in the financial planning profession",
          color: RED3,
          content: [
            "The Emotional Toll: When markets crash, clients will call you crying or angry. You need a thick skin and a calm mind.",
            "Compliance Rigor: One small legal mistake in documentation can lead to heavy SEBI fines.",
            "Building a Client Base: As a freelancer, the first 3 years are very hard as you build trust. You don't get paid until someone trusts you with their money.",
            "Market Fluctuations: Market downturns can disturb even the best-laid financial plans.",
            "Constantly Changing Rules: SEBI and IRDAI regulations change frequently.",
            "Competition: Banks and online platforms are creating strong competition for independent planners.",
            "Pressure: Managing someone's life savings creates enormous emotional and professional pressure."
          ]
        },
        {
          id: "13",
          title: "Emerging Trends & Future Outlook (2025–2035)",
          icon: "🔮",
          description: "Future of the financial planning profession",
          color: RED4,
          content: [
            "AI & Robo-Advisory: Algorithms will handle the 'math,' but humans will handle the 'emotions.' Future planners will use AI to do 80% of the work.",
            "ESG Investing: Clients now want to invest in 'Good' companies (Eco-friendly, Socially responsible). Planners must become 'Green Experts.'",
            "Global Access: In 10 years, an Indian student will easily invest in US, European, and African stocks via a single app. Planners will become Global Asset Managers.",
            "Financialization of Savings: People moving from cash to market-linked investments.",
            "Digital Assets: Cryptocurrency and blockchain-based investments will require new expertise.",
            "Personalization: AI-driven personalized financial plans for mass market.",
            "Salary Growth: Expected 10–12% annual salary growth in the next decade."
          ]
        },
        {
          id: "14",
          title: "Skills to Build While Still in School",
          icon: "📚",
          description: "Steps to build a strong foundation for a financial planning career",
          color: RED5,
          content: [
            "Master MS Excel: This is your primary tool. Learn how to use 'Compound Interest' formulas today.",
            "Read the News: Follow LiveMint or The Economic Times. Don't look at the stocks; look at the 'Personal Finance' section.",
            "The 'Pocket Money' Project: Track every rupee you spend for 3 months. Create a budget. See if you can save 10% for a 'Big Purchase' at the end of the year.",
            "Listen: Practice active listening. Try to understand your friends' or parents' worries without interrupting them.",
            "Learn Percentages: Strong foundation in percentage calculations and compound interest.",
            "Follow Budget: Track India's annual budget and understand tax implications.",
            "Networking: Join investment clubs and attend finance seminars."
          ]
        },
        {
          id: "15",
          title: "Famous Indian Personalities",
          icon: "⭐",
          description: "Inspiring financial planners who shaped India's wealth management landscape",
          color: RED,
          content: [
            "Monika Halan: Author of 'Let's Talk Money'; she has revolutionized how common Indians think about personal finance.",
            "P.V. Subramanyam: A veteran financial trainer and author known for his deep wisdom on long-term wealth creation.",
            "Radhika Gupta: CEO of Edelweiss MF, who has used her platform to educate millions of Indians on the importance of 'Asset Allocation.'",
            "Nilesh Shah: A member of the PM's Economic Advisory Council, known for simplifying complex investment concepts for the common man.",
            "Lovaii Navlakhi: One of India's pioneering fee-only financial planners who set the gold standard for ethics in the profession."
          ]
        }
      ]
    },

  // ─── FINANCIAL RISK MANAGEMENT ───────────────────────────────────
  financial_risk_management: {
      slug: "financial_risk_management",
      badge: "Career Exploration for Class 10+",
      heading: "The Guardians of Economic Stability",
      subheading:
        "A Financial Risk Manager is a 'Professional Shield'—they identify everything that could go wrong with a company's money and create a plan to prevent it. In today's India, aiming to become a $7 Trillion economy, these professionals are essential.",
      whyCards: [
        { icon: "🛡️", title: "Critical Function", description: "Banks & firms cannot operate without risk managers", borderColor: "#F59E0B" },
        { icon: "📊", title: "Data-Driven", description: "Use cutting-edge models like Value at Risk (VaR)", borderColor: "#1E40AF" },
        { icon: "🌐", title: "Global Certification", description: "FRM by GARP is recognised worldwide", borderColor: "#6366F1" },
        { icon: "💼", title: "High Demand", description: "RBI, SEBI regulations drive constant hiring", borderColor: "#10B981" }
      ],
      quickFacts: [
        { label: "Salary Range", detail: "₹6L–₹1.5Cr+ annually", color: "bg-amber-100 text-amber-700" },
        { label: "Market Growth", detail: "12–15% annual job growth", color: "bg-blue-100 text-blue-700" },
        { label: "Duration", detail: "3-year UG + FRM (2 levels)", color: "bg-indigo-100 text-indigo-700" }
      ],
      statCards: [
        { value: "₹6L–₹1.5Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
        { value: "12–15% CAGR", label: "Job Market Growth", gradient: "from-blue-600 to-indigo-600" }
      ],
      guideSections: [
        {
          id: "1",
          title: "What is This Career All About?",
          icon: "🛡️",
          description: "Understanding the risk manager's role as the company's protective shield",
          color: RED,
          content: [
            "Have you ever wondered why banks don't just go bankrupt when the stock market crashes? Or how a company like Amazon manages to keep its prices steady even when the cost of fuel goes up? The secret lies in Financial Risk Management (FRM).",
            "In simple, jargon-free terms, a Financial Risk Manager is a 'Professional Shield.' They are the experts who identify everything that could go wrong with a company's money—from a sudden drop in the value of the Rupee to a global pandemic—and create a plan to stop that 'wrong thing' from hurting the business.",
            "In today's India, which is aiming to become a $7 Trillion economy, these professionals are essential. They ensure that as our businesses grow, they don't collapse like a house of cards during a storm.",
            "Risk managers work in banks, investment firms, insurance companies, and fintech startups.",
            "They combine rigorous mathematical analysis with strategic thinking and regulatory compliance."
          ]
        },
        {
          id: "2",
          title: "A Day in the Life",
          icon: "⏰",
          description: "Real-world experience of a working financial risk manager",
          color: RED2,
          content: [
            "9:00 AM –  The Global Scan: Priya, a Risk Analyst at a top investment bank in Mumbai, starts by looking at what happened in the US and Tokyo markets overnight. She isn't looking for 'hot stocks'; she's looking for 'Red Flags.' Did a major oil pipeline close? Did a country change its tax laws? These are 'Risk Triggers.'",
            "11:00 AM –  The Stress Test: Priya spends her morning running 'Simulations' on her computer. She asks the computer: 'What happens to our bank's ₹1,000 Crore loan portfolio if the interest rate suddenly rises by 1%?' This is called a Stress Test. She watches as her software runs thousands of scenarios in seconds.",
            "1:30 PM –  The Strategy Lunch: After a quick lunch, Priya meets with the 'Trading Desk.' The traders want to make a big, risky bet on gold prices. Priya's job is to be the 'Voice of Reason.' She shows them her data: 'If you make this bet, and the market drops even by 0.5%, the bank loses more than we are allowed to. You need to reduce the size of this trade.'",
            "4:00 PM –  The Tech-Check: Priya works with the IT team to update their AI-based Fraud Detection system. She's teaching the AI how to spot new types of digital credit card theft. In the 21st century, risk management is as much about coding as it is about finance.",
            "7:00 PM –  The Reporting Wrap: Before heading home, Priya prepares a 'Risk Dashboard' for her boss. It's a simple chart with Green, Yellow, and Red lights. Today, everything is Green. She leaves the office knowing that because of her math and her 'Shield,' thousands of people's bank deposits are safe."
          ]
        },
        {
          id: "3",
          title: "Is This You? (Personality Traits & Skills)",
          icon: "🎯",
          description: "Traits that make someone well-suited for a financial risk management career",
          color: RED3,
          content: [
            "The 'What-If' Thinker: Do you always have a 'Plan B' for your school trips?",
            "Analytical Mind: You love puzzles and are comfortable with numbers, statistics, and logical reasoning.",
            "Integrity: You must be brave enough to tell your boss 'No' when a project is too risky.",
            "Calm Under Pressure: When everyone else is panicking because the market is falling, you need to stay cool and look at the data.",
            "Tech-Curious: You enjoy using apps and software to visualize data.",
            "Detail-Oriented: You notice small anomalies that others miss.",
            "Continuous Learner: Financial regulations and market dynamics change constantly."
          ]
        },
        {
          id: "4",
          title: "Key Responsibilities and Workflow",
          icon: "📊",
          description: "Core duties of a financial risk manager",
          color: RED4,
          content: [
            "A Risk Manager follows a logical Identify → Measure → Mitigate cycle:",
            "1. Risk Identification: Spotting the threat (e.g., 'The price of raw materials might go up').",
            "2. Risk Measurement: Calculating the 'Value at Risk' (VaR)—exactly how much money could we lose?",
            "3. Risk Mitigation: Creating the shield (e.g., buying insurance or using 'Hedging' to lock in current prices).",
            "4. Monitoring: Watching the market 24/7 to see if the threat is becoming real.",
            "5. Reporting: Communicating risk levels to senior management and regulators.",
            "6. Compliance: Ensuring adherence to RBI, SEBI, and international risk standards."
          ]
        },
        {
          id: "5",
          title: "Career Pathways",
          icon: "🛤️",
          description: "Educational journey from Class 10 onwards.",
          color: RED5,
          content: [
            "Pathway A: Degree + FRM Certification Route",
            "Step 1: Complete Class 12th (Commerce/Maths preferred)",
            "Step 2: Pursue B.Com / BBA Finance / B.Sc Economics / B.Tech",
            "Step 3: Clear FRM Part I & II (GARP — globally recognized)",
            "Step 4: Learn tools — Excel, Python, R, SQL, VBA, SAS",
            "Step 5: Do internships at banks, NBFCs, insurance firms, or Big 4",
            "Step 6: Join as Risk Analyst, Credit Risk Manager, or Market Risk Officer",
            "Pathway B: MBA Finance Route",
            "Step 1: Complete Class 12th (any stream with Maths)",
            "Step 2: Pursue B.Com / BBA / B.Tech / CA",
            "Step 3: Work 1–2 years in banking, finance, or audit",
            "Step 4: Complete MBA Finance/Risk Management",
            "Step 5: Add certifications — PRM, FRM, or Basel compliance courses",
            "Step 6: Join as Enterprise Risk Manager, or Risk Consulting Manager",
            "Pathway C: Skill-Based Entry Route",
            "Step 1: Complete Class 12th (Commerce/Science)",
            "Step 2: Pursue B.Com / B.Sc Statistics / BBA",
            "Step 3: Complete online courses — Risk Management, Credit Analysis",
            "Step 4: Get NISM certifications in Risk Management or Derivatives",
            "Step 5: Intern at RBI, SEBI, banks, or fintech risk teams",
            "Step 6: Work as Junior Risk Analyst, or Operational Risk Associate"
          ]
        },
        {
          id: "market",
          title: "Market Snapshot 2025-26",
          icon: "📈",
          description: "Salary, growth, and job market data for financial risk managers",
          color: RED,
          content: [
            "Salary Snapshot (Annual INR)",
            "CXO / Top Leadership (15+ yrs): ₹70 LPA –  ₹3+ Crore",
            "Senior / Lead Role (10+ yrs): ₹30–90 LPA",
            "Mid-Level Professional (5–8 yrs): ₹12–40 LPA",
            "Junior / Associate (3–5 yrs): ₹7–18 LPA",
            "Entry Level (0–2 yrs): ₹4–10 LPA",
            "Note: Metro cities (Mumbai, Bengaluru) pay 20–40% higher; FRM/CFA and risk analytics skills boost salary by 30–60%.",
            "Where Are the Jobs?",
            "Top Cities: Mumbai, NCR, Bengaluru, Hyderabad, Pune, Chennai",
            "Top Industries: Investment Banking, Risk Consulting, Insurance, FinTech, Regulatory Bodies (RBI, SEBI)",
            "Opportunities: High demand in credit risk, market risk, and operational risk management; global demand for GARP-certified professionals"
          ]
        },
        {
          id: "institutions",
          title: "Where to Study?",
          icon: "Building2",
          description: "Top institutions across India.",
          color: RED,
          content: [
            "Government: Indian Institutes of Management IIMs, National Institute of Bank Management NIBM, Reserve Bank of India RBI Academy, University of Mumbai Department of Commerce",
            "Private: SPJIMR Mumbai, NMIMS Mumbai, Great Lakes Institute of Management, ICFAI Business School",
            "Online: GARP Global Association of Risk Professionals, Coursera Financial Risk Management Specializations, SWAYAM, NPTEL, NSE Academy Online"
          ]
        },
        {
          id: "opportunities",
          title: "Career Opportunities",
          icon: "Briefcase",
          description: "Conventional and emerging roles.",
          color: RED2,
          content: [
            "Conventional: Credit Risk Analyst, Market Risk Manager, Operational Risk Officer, Enterprise Risk Consultant",
            "New-age and AI driven: AI-Driven Risk Modeller, Cyber Risk Analyst, ESG Risk Specialist, Digital Fraud Prevention Expert",
            "Remote / Entrepreneurship: Freelance Risk Advisory, Online Risk Management Educator, Risk Analytics Startup Founder, Regulatory Compliance Consultant"
          ]
        },

        {
          id: "9",
          title: "Scholarship Opportunities",
          icon: "🎓",
          description: "Financial support available for financial risk management students",
          color: RED5,
          content: [
            "Central: NSP (National Scholarship Portal) –  Merit-cum-means for professional degrees.",
            "Institutional: IIMs offer need-based financial assistance (up to 100% fee waiver).",
            "GARP FRM Scholarships: Offered to students in partnership universities to cover exam registration fees.",
            "State-Level: Various state governments offer scholarships for commerce students.",
            "Merit-Based: Top performers in entrance exams receive full or partial scholarships.",
            "Employer Sponsorship: Many firms sponsor employees pursuing FRM.",
            "Need-Based: Many institutions offer financial aid based on family income."
          ]
        },
        {
          id: "10",
          title: "Professional Bodies & Licensing",
          icon: "📜",
          description: "Regulatory framework and professional credentials",
          color: RED,
          content: [
            "GARP (Global Association of Risk Professionals): Awards the FRM (Financial Risk Manager) designation.",
            "PRMIA: Awards the PRM (Professional Risk Manager) designation.",
            "NISM: Series XVIII (Operational Risk Management) for Indian market compliance.",
            "RBI/SEBI: Regulatory oversight and compliance requirements.",
            "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually.",
            "International Recognition: FRM is recognized in 190+ countries.",
            "Code of Ethics: Must adhere to strict professional conduct standards."
          ]
        },

        {
          id: "12",
          title: "Challenges and Realities",
          icon: "⚠️",
          description: "Challenges to be aware of in the financial risk management profession",
          color: RED3,
          content: [
            "Long Hours: During financial crises, you might work 14-hour days.",
            "The 'Bad News' Bearer: People might get annoyed when you tell them their project is too risky.",
            "Continuous Math: You can never escape spreadsheets and complex statistical models.",
            "Managing millions of rupees in risk decisions creates intense daily pressure.:",
            "One wrong assessment can cause massive financial losses for the entire company.:",
            "Constantly evolving RBI and SEBI guidelines demand non-stop learning and compliance.:",
            "Global events like pandemics or wars can instantly make risk models outdated.:"
          ]
        },
        {
          id: "13",
          title: "Emerging Trends & Future Outlook (2025–2035)",
          icon: "🔮",
          description: "Future of the financial risk management profession",
          color: RED4,
          content: [
            "Climate Risk: Banks will soon check a company's 'Carbon Footprint' before giving a loan. Risk managers will be the ones checking this.",
            "AI Governance: Who manages the risk if an AI makes a bad trade? The 'AI Risk Manager' will be a top-tier job by 2030.",
            "Cyber-Resilience: As we move to a 'Digital Rupee,' protecting against digital heists will be the #1 priority.",
            "Regulatory Evolution: New regulations on ESG and climate risk will create specialized roles.",
            "Automation: Routine risk calculations will be automated; strategic risk thinking will be premium.",
            "Global Opportunities: Indian risk managers increasingly sought in international markets.",
            "Salary Growth: Expected 10–12% annual salary growth in the next decade."
          ]
        },
        {
          id: "14",
          title: "Skills to Build While Still in School",
          icon: "📚",
          description: "Steps to build a strong foundation for a financial risk management career",
          color: RED5,
          content: [
            "Excel is King: Don't just learn it; master it. Learn how to create graphs and use basic formulas.",
            "Math Focus: Pay special attention to Probability and Statistics in Class 11–12.",
            "Read the News: Follow the 'Finance' section of newspapers. Look for words like 'Inflation,' 'NPA,' and 'Repo Rate.'",
            "Strategy Games: Play games like Chess or 'Settlers of Catan' to learn how to manage resources and risks.",
            "Learn Python: Basic coding skills will give you a competitive edge.",
            "Case Studies: Analyze real financial crises and how they were managed.",
            "Networking: Join investment clubs and attend finance seminars."
          ]
        },
        {
          id: "15",
          title: "Famous Indian Personalities",
          icon: "⭐",
          description: "Inspiring risk managers who shaped India's financial stability",
          color: RED,
          content: [
            "Urjit Patel: Former RBI Governor; known for his 'Hawkish' (careful) stance on inflation risk.",
            "Anshula Kant: MD and CFO of the World Bank; an expert in managing global financial risks.",
            "N.S. Vishwanathan: Former Deputy Governor of RBI; a pioneer in strengthening banking risk rules (Basel III) in India.",
            "Raghuram Rajan: Though an economist, his biggest fame came from predicting the 'Risk' of the 2008 global financial crisis before it happened.",
            "Viral Acharya: Former Deputy Governor of RBI; known for his work on financial stability and risk management."
          ]
        }
      ]
    },

  // ─── ARCHITECTURE ───────────────────────────────────────────────
  architect: {
    slug: "architect",
    badge: "🏛️ Career Exploration for Class 10+",
    heading: "Design Your Future: Career in Architecture",
    subheading: "Architecture blends art and science to design safe, functional, and aesthetic spaces for schools, malls, and homes.",
    whyCards: [
      { icon: "🎨", title: "Creative Impact", description: "Design spaces that shape how people live and work", borderColor: "#F59E0B" },
      { icon: "🧪", title: "Art & Science", description: "Perfect blend of creative art and structural science", borderColor: "#1E40AF" },
      { icon: "🏙️", title: "Urban Growth", description: "Drive India's growth through sustainable urban planning", borderColor: "#6366F1" },
      { icon: "🌿", title: "Green Building", description: "FRONT-LINE warriors against climate change", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "B.Arch (5 Years)", detail: "Mandatory professional degree to practice", color: "bg-amber-100 text-amber-700" },
      { label: "NATA / JEE Main 2", detail: "Compulsory entrance exams in India", color: "bg-blue-100 text-blue-700" },
      { label: "Council of Architecture", detail: "Regulated by the COA under 1972 Act", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "50,000+", label: "Registered Architects", gradient: "from-amber-500 to-amber-600" },
      { value: "5 Years", label: "Duration to Qualify", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Architecture?",
        icon: "🎨",
        description: "Understanding the blend of art, science, and human-centric design",
        color: RED,
        content: [
          "Architecture blends art and science to design safe, functional, and aesthetic spaces for schools, malls, and homes",
          "Professionals optimize environmental factors like sunlight and airflow to ensure user comfort",
          "Architects drive India's growth through 'Smart Cities,' transport hubs, and vertical urban planning",
          "They act as frontline warriors against climate change by creating eco-friendly, resource-efficient 'green buildings'"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🧠",
        description: "Traits and intelligences that lead to architectural excellence",
        color: RED2,
        content: [
          "Visual-Spatial Intelligence: Visualizing 3D structures from 2D plans",
          "Creative Problem Solving: Balancing client needs with budget constraints",
          "Mathematical Aptitude: Applying geometry and physics for structural safety",
          "Precision & Patience: Maintaining detail-oriented accuracy over long timelines",
          "Environmental Sensitivity: Prioritizing sustainability and nature in 21st-century designs"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "The journey from client brief to construction supervision",
        color: RED3,
        content: [
          "Client Briefing: Defining requirements like building type and size",
          "Site Analysis: Evaluating land, sunlight, and local regulations",
          "Schematic Design: Drafting initial sketches and 3D models",
          "Design Development: Integrating technical, structural, and utility systems",
          "Documentation: Finalizing blueprints for legal approval and construction",
          "Supervision: Overseeing on-site progress to ensure design accuracy"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment breakdown for public and private architecture education",
        color: RED4,
        content: [
          "Government Institutions (SPA, NIT, IIT): ₹2.5–6 lakh for five years",
          "Private Fees: ₹12–25 lakh for five-year programs",
          "Living Expenses: ₹15,000–₹25,000 monthly in metro cities",
          "Equipment: ₹80,000+ for laptop and ₹10,000 for drafting tools"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial aids for deserving architecture students",
        color: RED5,
        content: ["Pathway A: After Class 12th (Traditional Route)","Step 1: Complete Class 12th with PCM subjects","Step 2: Clear NATA or JEE Main Paper 2","Step 3: Complete B.Arch degree (5 years)","Step 4: Do internship with architecture firms","Step 5: Register with Council of Architecture","Step 6: Work as licensed Architect","Pathway B: Diploma Route","Step 1: After Class 10th, join Architecture Diploma","Step 2: Complete 3-year Diploma in Architecture","Step 3: Gain practical site experience","Step 4: Pursue B.Arch through lateral entry","Step 5: Learn AutoCAD, Revit, SketchUp tools","Step 6: Work as Architect or Design Consultant","Pathway C: Specialisation Route","Step 1: Complete Class 12th with PCM","Step 2: Complete B.Arch degree (5 years)","Step 3: Pursue M.Arch in chosen specialisation","Step 4: Specialise in Urban Design or Landscape","Step 5: Build portfolio with real projects","Step 6: Work as Senior Architect or Urban Planner"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Realistic look at the work intensity and initial compensation",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹30 LPA –  ₹1.2 Crore","Senior / Lead Role (10+ yrs): ₹12–25 LPA","Mid-Level Professional (5–8 yrs): ₹6–12 LPA","Junior / Associate (3–5 yrs): ₹3.5–6 LPA","Entry Level (0–2 yrs): ₹2–4 LPA","Note: Metro cities pay 30–50% more. COA license and LEED/BIM skills boost earnings significantly.","Where Are the Jobs?","Top Cities: Mumbai, Delhi-NCR, Bangalore, Hyderabad, Pune, Chennai","Top Industries: Real estate firms (DLF, Godrej), infrastructure (L&T, Shapoorji), government (CPWD, Smart Cities Mission), hospitality","Global Demand: UAE, Singapore, Australia actively hiring; freelancing growing via Houzz/Upwork","Top Institutions","Government:","School of Planning & Architecture (SPA), New Delhi","Indian Institute of Technology (IIT), Kharagpur","Indian Institute of Technology (IIT), Roorkee","Centre for Environmental Planning & Technology (CEPT), Ahmedabad","Private:","Manipal Academy of Higher Education, Manipal","Amity University, Noida","Sushant University (formerly Ansal University), Gurugram","Rizvi College of Architecture, Mumbai","Online:","Swayam/NPTEL","Coursera (Architecture & Design Courses)","IGNOU (Architecture Related Programs)","Udemy (Architecture & Building Design Courses)","Career Opportunities","Conventional","Licensed Architect (Private/Govt Practice)","Urban Planning & Town Development Officer","Interior Design & Space Planning Architect","Heritage Conservation & Restoration Architect","New-Age & AI Driven","AI-Generated Design & Parametric Architect","BIM (Building Information Modelling) Specialist","Sustainable & Green Building Design Technologist","VR/AR-Based Architectural Visualization Expert","Remote/Entrepreneurship","Freelance Architectural Design Consultant","Online Architecture Education Platform Founder","Modular & Prefab Housing Startup Entrepreneur","3D Architectural Rendering Studio Owner"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap to building your portfolio from school",
        color: RED2,
        content: [
          "Freehand Sketching: Maintain a 'Visual Journal' by sketching surrounding structures",
          "Software Skills: Explore beginner tools like SketchUp or Tinkercad",
          "Competitions: Engage in NASA (National Association of Students of Architecture) workshops or school art contests",
          "Observation: Study historical monuments to understand passive cooling and structural design"
        ]
      }
    ]
  },

  // ─── CONSTRUCTION ───────────────────────────────────────────────
  construction: {
    slug: "construction",
    badge: "🏗️ Career Exploration for Class 10+",
    heading: "Build the Nation: Career in Construction",
    subheading: "Construction turn drawings into real buildings, roads, and bridges — giving shape to India's $5 Trillion dream.",
    whyCards: [
      { icon: "🏙️", title: "National Builders", description: "Turn drawings into real buildings and bridges", borderColor: "#F59E0B" },
      { icon: "📈", title: "Growth Engine", description: "Supports India's economy through mega projects like Gati Shakti", borderColor: "#1E40AF" },
      { icon: "🤖", title: "Tech Transition", description: "Modern work uses machines, BIM software, and smart tools", borderColor: "#6366F1" },
      { icon: "🏗️", title: "Visible Results", description: "Transform empty land into skyscrapers or railways", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "4-Year Degree", detail: "B.Tech in Civil, Construction or Infrastructure", color: "bg-amber-100 text-amber-700" },
      { label: "Mega Scale", detail: "Involved in projects like Atal Setu or High Speed Rail", color: "bg-blue-100 text-blue-700" },
      { label: "BIM & Digital", detail: "Rising focus on Digital Construction technology", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "2nd Largest", label: "Employer in India", gradient: "from-amber-500 to-amber-600" },
      { value: "15%", label: "Annual Sector Growth", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Construction?",
        icon: "🏗️",
        description: "Turning architectural dreams into concrete reality",
        color: RED,
        content: [
          "Builders: They turn drawings into real buildings, roads, and bridges. They give shape to ideas",
          "Growth: This industry supports India's economy through big projects like Atal Setu and Gati Shakti",
          "Technology: Modern construction uses machines, software, and smart tools — not just bricks and cement",
          "Results: You can quickly see your work, like empty land becoming a skyscraper or railway",
          "Future: Construction is shaping how India will look and grow by 2030"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "💪",
        description: "Traits needed for the rugged and rewarding field of construction",
        color: RED2,
        content: [
          "Resilience: High physical and mental 'grit' for demanding outdoor environments",
          "Leadership: Ability to manage diverse teams with firmness and empathy",
          "Spatial Visualization: Mentally 'walking through' 3D structures from 2D blueprints",
          "Safety-First Mindset: Constant vigilance in high-risk environments",
          "Problem-Solving: Quick, 'on-your-feet' thinking for logistical and technical hurdles"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "🚧",
        description: "The lifecycle of a construction project",
        color: RED3,
        content: [
          "Pre-Construction: Estimating costs, bidding, and securing government permits",
          "Procurement: Sourcing materials (steel, cement) and hiring contractors",
          "Site Mobilization: Setting up heavy machinery and safety infrastructure",
          "Execution: Physical building from foundation to final finishing",
          "Quality Control: Rigorous material testing for long-term durability",
          "Handover: Final inspection and owner delivery"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💸",
        description: "Education and tech requirements for construction engineers",
        color: RED4,
        content: [
          "Tuition (Govt. Colleges): ₹2 Lakhs –  ₹5 Lakhs for a full 4-year degree",
          "Tuition (Private Universities): ₹8 Lakhs –  ₹20 Lakhs for 4 years",
          "Living Expenses: Budget ₹1.5 Lakhs –  ₹2.5 Lakhs annually",
          "Tech Requirements: ₹70k+ for high-performance laptop for AutoCAD, Revit, and BIM"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🏆",
        description: "Major financial aid options for construction and engineering",
        color: RED5,
        content: ["Career Pathways in Construction","Pathway A: After Class 12th (Engineering Route)","Step 1: Complete Class 12th with PCM subjects","Step 2: Clear JEE Main or state entrance exams","Step 3: Complete B.Tech in Civil Engineering (4 years)","Step 4: Do internship at construction sites","Step 5: Learn AutoCAD, STAAD Pro, Primavera tools","Step 6: Work as Site Engineer or Project Manager","Pathway B: Diploma Route","Step 1: After Class 10th, join Diploma programme","Step 2: Complete 3-year Diploma in Civil Engineering","Step 3: Gain hands-on site work experience","Step 4: Pursue B.Tech through lateral entry","Step 5: Get certified in safety and quality management","Step 6: Work as Construction Supervisor or Contractor","Pathway C: Skill-Based Entry Route","Step 1: Complete Class 10th or 12th","Step 2: Join ITI or short-term construction courses","Step 3: Learn surveying, estimation, and costing skills","Step 4: Work as site technician or skilled tradesperson","Step 5: Gain experience and upgrade through certifications","Step 6: Grow into Site Supervisor or Independent Contractor"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "👷",
        description: "Realities of site life and intensive workload",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹35 LPA –  ₹1.5 Crore","Senior / Lead Role (10+ yrs): ₹15–30 LPA","Mid-Level Professional (5–8 yrs): ₹7–15 LPA","Junior / Associate (3–5 yrs): ₹4–7 LPA","Entry Level (0–2 yrs): ₹2.5–4.5 LPA","Note: Metro/infrastructure hub cities pay higher. PMP, RERA knowledge, and BIM/AutoCAD skills significantly boost salary.","Where Are the Jobs?","Top Cities: Mumbai, Delhi-NCR, Hyderabad, Bangalore, Ahmedabad, Chennai","Top Industries: L&T, Shapoorji Pallonji, Tata Projects, DLF, Godrej Properties, NHAI, Smart Cities Mission, Metro Rail projects","Global Demand: Gulf countries (UAE, Saudi –  NEOM), Australia, Canada hiring Indian engineers; freelance project consulting rising","Top Institutions","Government:","Indian Institute of Technology (IIT), Delhi","Indian Institute of Technology (IIT), Madras","National Institute of Construction Management & Research (NICMAR), Pune","School of Planning & Architecture (SPA), New Delhi","Private:","RICS School of Built Environment, Amity University, Noida","Manipal Academy of Higher Education, Manipal","Lovely Professional University (LPU), Jalandhar","Amity University, Noida","Online:","Swayam/NPTEL","Coursera (Construction Management Courses)","IGNOU (Construction Management Programs)","Udemy (Construction Technology & Management Courses)","Career Opportunities","Conventional","Construction Project Manager","Site Engineer & Supervision Officer","Quantity Surveyor & Estimation Specialist","Building Materials & Procurement Manager","New-Age & AI Driven","AI-Powered Construction Planning & Scheduling Analyst","Drone-Based Site Surveying & Monitoring Specialist","BIM-Integrated Smart Construction Technologist","Robotics & 3D Printing Construction Engineer","Remote/Entrepreneurship","Freelance Construction Project Consultant","Modular & Prefabricated Construction Startup Founder","Online Construction Skill Training Platform Creator","Green Building & LEED Certification Consultancy Owner"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "🛠️",
        description: "How to prepare for a construction career from school",
        color: RED2,
        content: [
          "Academics: Master Physics and Math, specifically mechanics and geometry",
          "Strategic Play: Use SimCity or Minecraft to develop planning skills",
          "Field Research: Observe local sites; learn processes like concrete curing firsthand",
          "Soft Skills: Lead school event committees to build team management experience"
        ]
      }
    ]
  },

  // ─── MAINTENANCE AND OPERATION ──────────────────────────────────
  maintenance_and_operation_management: {
    slug: "maintenance_and_operation_management",
    badge: "🔧 Career Exploration for Class 10+",
    heading: "The Life Support of Cities: Maintenance & Operations",
    subheading: "Operation and Maintenance professionals keep airports, metros, and factories running smoothly 24/7.",
    whyCards: [
      { icon: "🏥", title: "Life Support", description: "Keep buildings and critical systems working smoothly", borderColor: "#F59E0B" },
      { icon: "⚙️", title: "Operations Peak", description: "Manage vital hubs like airports, metros, and factories", borderColor: "#1E40AF" },
      { icon: "💰", title: "Cost Savers", description: "Use data to find problems early and stop crore-loss breakdowns", borderColor: "#6366F1" },
      { icon: "🛡️", title: "Asset Guardians", description: "Protect modern machines to keep India productive", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "2-4 Year Path", detail: "Diploma/Polytechnic or B.Tech entry", color: "bg-amber-100 text-amber-700" },
      { label: "IoT & AI", detail: "Using real-time sensors for machine oversight", color: "bg-blue-100 text-blue-700" },
      { label: "Compliance", detail: "Ensuring safety and environmental standards", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "Industry 4.0", label: "Smart Manufacturing", gradient: "from-amber-500 to-amber-600" },
      { value: "24/7", label: "Operational Focus", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Maintenance and Operation?",
        icon: "🏥",
        description: "Keeping the world's infrastructure healthy and operational",
        color: RED,
        content: [
          "The Life Support: They keep buildings and systems working smoothly",
          "Operations: They manage daily work of airports, metros, and factories",
          "Savings: By using data to find problems early, they stop breakdowns that cost crores",
          "Guardians: They protect modern machines and systems, keeping India productive"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔍",
        description: "Analytical minds that thrive on solving practical problems",
        color: RED2,
        content: [
          "Analytical Thinking: You enjoy identifying patterns in charts and data",
          "Problem-Solver: You stay calm and fix things efficiently when they break",
          "Safety-First: You possess a natural respect for protocols and rules",
          "Communication: You translate complex technical issues for non-technical leadership",
          "Tech-Savvy: You easily use software to track physical assets"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "⚙️",
        description: "Maintenance cycles and real-time monitoring",
        color: RED3,
        content: [
          "Asset Tracking: Maintaining a precise inventory and location of equipment",
          "Scheduling: Planning regular 'health check-ups' through preventive maintenance",
          "Real-Time Monitoring: Utilizing IoT sensors for 24/7 machine oversight",
          "Resource Management: Ensuring spare parts and tools are always stocked",
          "Compliance: Verifying adherence to government environmental and safety laws"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💳",
        description: "Educational investment for maintenance and ops roles",
        color: RED4,
        content: [
          "Diploma/Polytechnic: ₹20,000 –  ₹1.5 Lakhs total",
          "B.Tech. (Govt): ₹3 Lakhs –  ₹10 Lakhs total investment",
          "MBA (Specialized): ₹15 Lakhs –  ₹25 Lakhs for top management",
          "Living Costs: Budget ₹10,000 –  ₹20,000 monthly in cities like Pune or Bengaluru"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎗️",
        description: "Grants for technical and professional management students",
        color: RED5,
        content: [
          "AICTE Pragati: Up to ₹50,000 annually for female technical students",
          "Post-Matric: Category-based aid via National Scholarship Portal",
          "Aditya Birla Group: Prestigious funding for top merit students at premier IITs/IIMs"
        ]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "🚨",
        description: "The pressure of high-stakes, 24/7 responsibility",
        color: RED,
        content: [
          "24/7 Responsibility: Critical failures may require emergency calls at any hour",
          "High Pressure: Breakdowns cause immediate financial losses to companies",
          "Continuous Learning: Rapid technological shifts demand constant updates on AI and robotics"
        ]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "💻",
        description: "Essential skills to build while in school",
        color: RED2,
        content: [
          "Excel/Spreadsheets: Master data organization; an Operations manager's essential tool",
          "Coding Basics: Learn Python logic to interface with factory software",
          "Stay Informed: Follow 'Industry 4.0' trends on LinkedIn",
          "Hands-on Practice: Engage in DIY home repairs to understand hardware"
        ]
      }
    ]
  },

  // ─── URBAN PLANNING AND MANAGEMENT ─────────────────────────────
  urban_planning_and_management: {
    slug: "urban_planning_and_management",
    badge: "🏙️ Career Exploration for Class 10+",
    heading: "Design Better Cities: Urban Planning & Management",
    subheading: "Urban planners design entire neighbourhoods and cities, solving congestion and housing shortages.",
    whyCards: [
      { icon: "🔭", title: "The Visionaries", description: "Design entire neighbourhoods and cities, not just buildings", borderColor: "#F59E0B" },
      { icon: "🏙️", title: "City Surgeons", description: "Diagnose and fix issues like traffic congestion and pollution", borderColor: "#1E40AF" },
      { icon: "🏃", title: "Migration Managers", description: "Manage India's urban migration to prevent city collapse", borderColor: "#6366F1" },
      { icon: "♻️", title: "Sustainable Growth", description: "Ensure efficient transport, waste, and green spaces", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "B.Plan / B.Arch Path", detail: "Specialized planning or architectural foundation", color: "bg-amber-100 text-amber-700" },
      { label: "GIS & Mapping", detail: "Using spatial data to plan city expansion", color: "bg-blue-100 text-blue-700" },
      { label: "Public Interface", detail: "Balancing citizen feedback with urban strategy", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "500+", label: "Smart City Projects", gradient: "from-amber-500 to-amber-600" },
      { value: "B.Plan", label: "Primary Entry Degree", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Urban Planning?",
        icon: "🔭",
        description: "Visionary design for entire city ecosystems",
        color: RED,
        content: [
          "The Vision: While architects design buildings, urban planners design neighbourhoods",
          "City Surgeons: They fix critical issues like traffic, pollution, and housing shortages",
          "Strategic Migration: Manage India's migration, preventing city collapse",
          "Sustainable Growth: Ensure development includes transport and green spaces"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🗺️",
        description: "Trait profile of a future city planner",
        color: RED2,
        content: [
          "Map Enthusiast: You love studying maps and geographic data",
          "Justice Mindset: You care about fairness, accessibility, and climate issues",
          "Patience: Ready for long projects that may take 10 years to finish",
          "Data-Driven: Use population and land-use numbers to plan needs",
          "Diplomacy: Solve issues between citizens and government departments"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📉",
        description: "From data collection to monitoring master plans",
        color: RED3,
        content: [
          "Data & Analysis: Collect and study population, housing, and land-use info",
          "Planning: Prepare detailed master and zonal plans for city growth",
          "Consultation: Present plans to citizens and improve using feedback",
          "Monitoring: Supervise construction and update plans for success"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "📉",
        description: "Investment breakdown for urban planning education",
        color: RED4,
        content: [
          "Diploma/Polytechnic: ₹20,000 –  ₹1.5 Lakhs total",
          "B.Tech/B.Plan (Govt): ₹3 Lakhs –  ₹10 Lakhs total",
          "MBA (Management): ₹15 Lakhs –  ₹25 Lakhs for специализирован management",
          "Living Costs: Budget ₹10,000 –  ₹20,000 monthly for hostels"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "📑",
        description: "Financial support for urban planning students",
        color: RED5,
        content: [
          "AICTE Pragati: Up to ₹50,000 annually for female students",
          "Post-Matric Scholarships: Category aid via National Scholarship Portal",
          "Aditya Birla Group: Prestigious funding for top merit students"
        ]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "🏛️",
        description: "Navigating political and bureaucratic hurdles",
        color: RED,
        content: [
          "Political Pressure: Balancing city needs against popular political agendas",
          "Slow Progress: Projects can take a decade from design to completion",
          "Bureaucracy: Navigating extensive government paperwork results in slow timelines"
        ]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📷",
        description: "Early steps for aspiring urban planners",
        color: RED2,
        content: [
          "Geography & Math: Build a foundation in maps and statistics",
          "Photography/Sketching: Document city problems and sketch design solutions",
          "Learn Google Earth Pro: Use this free tool to practice mapping",
          "Volunteer: Join local cleanliness clubs to understand community dynamics"
        ]
      }
    ]
  },

  // ─── AGRICULTURAL ENGINEERING ─────────────────────────────────────
  agricultural_engineer: {
    slug: "agricultural_engineer",
    badge: "Engineering the Future of Food for Class 10+",
    heading: "Agricultural Engineering",
    subheading: "Apply engineering principles to solve the Food-Energy-Water puzzle. Design drones, automated systems, and sustainable technologies for modern farming.",
    whyCards: [
      { icon: "Cpu", title: "Precision Farming", description: "Use drones for soil mapping and precision robotic harvesters that don't bruise delicate fruits.", borderColor: "#10B981" },
      { icon: "Tractor", title: "Resource Optimization", description: "Solve the Food-Energy-Water puzzle for 1.4 billion people with smart systems.", borderColor: "#059669" },
      { icon: "Droplets", title: "Smart Systems", description: "Design automated irrigation and high-tech processing systems that save water and energy.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Sustainable Innovation", description: "Transform traditional farming into a high-tech, profitable, and sustainable industry.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech) or 3 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3.5L–₹60L+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "5.2% CAGR, $13.79B Market by 2030", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1.4B", label: "People to Feed", gradient: "from-green-500 to-green-600" },
      { value: "5.2%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Engineering solutions for modern agriculture.",
        color: "#C20000",
        content: [
          "The Brain and Hands: If a Farmer is the 'Heart' of Indian agriculture, an Agricultural Engineer is the 'Brain' and 'Hands' that make the system smarter and more powerful.",
          "Agricultural Engineering is the branch of engineering that applies the principles of science and technology to agricultural production and processing.",
          "Beyond Tractors: It's not just about tractors; it's about using drones to map soil health, designing automated irrigation systems that save every drop of water, and creating robotic harvesters that can pick delicate fruits without bruising them.",
          "Solving the Puzzle: With a population of over 1.4 billion, we need to grow more food using less land and less water. Agricultural Engineers solve the 'Food-Energy-Water' puzzle.",
          "Modern Industry: They ensure that farming is not just a tradition, but a high-tech, profitable, and sustainable industry for the 21st century.",
          "Global Priority: In today's India, this career is a global priority as we become a leader in agricultural innovation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Arjun, Agricultural Engineer at Agri-Tech Startup",
        icon: "Clock",
        description: "Real workflow of an agricultural engineer.",
        color: "#DA1313",
        content: [
          "8:30 AM -  The Field Briefing: Arjun starts his day on a sprawling farm in Pune. He isn't holding a shovel; he's holding a tablet. He's checking the telemetry data from a fleet of autonomous tractors currently tilling the soil. One tractor has flagged a sensor error, and Arjun quickly recalibrates the GPS settings from his screen.",
          "10:30 AM -  Drone Scouting: He launches a thermal-imaging drone to fly over the 50-acre wheat field. As the drone sends back live data, Arjun identifies a 'stressed' patch of crops that isn't getting enough nitrogen. He sends a command to the automated sprinkler system to deliver a precise dose of liquid fertilizer to only that specific patch. This is Precision Agriculture in action.",
          "1:30 PM -  Designing the Future: After lunch, Arjun heads to the R&D lab. He's working on a 3D model of a new 'Solar-Powered Cold Storage' unit. In India, 40% of fresh produce is wasted due to heat. Arjun's design uses affordable, locally sourced materials and solar panels to keep vegetables fresh in remote villages without electricity.",
          "4:00 PM -  The Client Meeting: He meets with a group of local farmers to explain how a new moisture-sensing probe works. He translates complex engineering jargon into simple language, showing them how they can save 30% on their water bills.",
          "6:30 PM -  Data Analytics: Before leaving, Arjun reviews the day's data logs. He prepares a report for his manager on how the new robotic seeder performed compared to manual labor. As he drives home, he sees the green fields and feels proud—he didn't just 'work' today; he helped secure the food on a thousand plates."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills Required",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Mechanical Interest: You like building things, fixing broken toys, or understanding how engines run.",
          "Analytical Mind: You enjoy Math and Physics and like using data to solve puzzles.",
          "Environmental Sensitivity: You care about nature, water conservation, and climate change.",
          "Resilience: You are comfortable spending time in the sun and dust of a farm as much as a clean, air-conditioned lab.",
          "Problem-Solving Skills: When a machine breaks or a crop fails, you don't panic—you look for the 'Why' and the 'How to fix.'"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete agricultural engineering cycle.",
        color: "#DA1313",
        content: [
          "Requirement Analysis: Talking to farmers or companies to understand a problem (e.g., 'We are losing too much water during irrigation').",
          "Design & Modeling: Using software like AutoCAD or SolidWorks to design a solution (e.g., a smart drip-irrigation valve).",
          "Prototyping: Building a small version of the machine or system in a lab.",
          "Field Testing: Taking the prototype to a real farm to see if it works under heat, rain, and mud.",
          "Quality Control: Ensuring the final product follows safety codes and is durable.",
          "Maintenance & Support: Teaching others how to use the technology and fixing it if it malfunctions."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.Tech Route",
          "Step 1: Complete Class 12th with PCM (Physics, Chemistry, Maths)",
          "Step 2: Clear JEE/State CET and pursue B.Tech Agricultural Engineering (IITs, SAUs, GBPUAT)",
          "Step 3: Do internships at ICAR, farm machinery companies, or agri-tech startups",
          "Step 4: Learn tools — AutoCAD, MATLAB, GIS, drone technology",
          "Step 5: Pursue M.Tech or MBA in Agri-Business (optional)",
          "Step 6: Join as Agricultural Engineer, Farm Machinery Designer, or Irrigation Specialist",
          "Pathway B: Diploma + Field Entry Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Agricultural Engineering (3 years, state polytechnics)",
          "Step 3: Gain field experience — FPOs, KVKs, farm equipment dealers",
          "Step 4: Learn basics — soil testing, irrigation systems, tractor mechanics",
          "Step 5: Upgrade through lateral entry to B.Tech (optional)",
          "Step 6: Work as Junior Engineer, Field Technician, or Agri-Equipment Supervisor",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCM",
          "Step 2: Pursue B.Tech Agricultural Engineering",
          "Step 3: Clear GATE and pursue M.Tech (IITs, IARI, CIAE Bhopal)",
          "Step 4: Publish research in farm mechanization, renewable energy, or water management",
          "Step 5: Clear ARS/NET, UPSC Engineering Services, or State PSC exams",
          "Step 6: Join as Scientist at ICAR, Professor, or Government Engineer in agriculture department"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1.5+ Crore",
          "Senior / Lead Role (10+ yrs): ₹12–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹6–20 LPA",
          "Junior / Associate (3–5 yrs): ₹4–10 LPA",
          "Entry Level (0–2 yrs): ₹3–7 LPA",
          "Note: Metro/agri-industrial hubs (Pune, Hyderabad) pay 15–30% higher; skills in irrigation tech, GIS, farm mechanisation boost salary by 20–40%",
          "Where Are the Jobs?",
          "Top Cities: Hyderabad, Pune, Bengaluru, Delhi-NCR, Ludhiana, Coimbatore",
          "Top Industries: Farm Equipment, Irrigation, AgriTech, Food Processing, Government (ICAR), NGOs",
          "Global Demand: High in Africa, Middle East, Australia; demand in precision farming, water management, remote consulting"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Industries: Farm Machinery (Tractors/Harvesters), Irrigation Systems, Food Processing, Agri-Tech Startups, Renewable Energy (Biofuels)",
          "Top Companies: Mahindra & Mahindra, John Deere, TAFE, Jain Irrigation, ITC, Nestlé, Amul",
          "Government Sector: ICAR (Scientist), FCI (Technical Officer), State Water Resources Departments, NABARD",
          "Remote Work: High for Design Engineers, Data Analysts, and Remote Sensing specialists",
          "International: Huge demand in the USA, Germany, and Israel for Indian engineers with expertise in tropical agriculture",
          "Top Cities: Hyderabad, Pune, Bengaluru, Delhi-NCR, Ludhiana, Coimbatore"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Indian Institute of Technology Kharagpur (IIT-KGP), Punjab Agricultural University (PAU) Ludhiana, Tamil Nadu Agricultural University (TNAU) Coimbatore, Govind Ballabh Pant University of Agriculture & Technology Pantnagar",
          "Private: SRM Institute of Science and Technology Chennai, Amity University Noida, Lovely Professional University (LPU) Jalandhar, Sharda University Greater Noida",
          "Online: IGNOU, Swayam/NPTEL, Coursera (IIT/IARI courses), ICAR e-courses"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: "#C20000",
        content: [
          "Government Institutions: ₹50,000 –  ₹2,50,000 (Total 4-year degree fees)",
          "Private Institutions: ₹4,00,000 –  ₹12,00,000 (Total 4-year degree fees)",
          "Duration: 4 Years (B.Tech)",
          "Living/Hostel Costs: ₹8,000 –  ₹15,000 per month in cities like Pantnagar, Ludhiana, or Coimbatore",
          "Additional Costs: High-end laptop (₹60k+), certification exams (₹5k–₹15k)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#DA1313",
        content: [
          "Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls)",
          "ICAR: National Talent Scholarship (NTS) for students moving to a different state for studies",
          "State: e.g., Krishi Vidya Nidhi (Odisha) or MOMA scholarship for minorities",
          "Private: Corteva Agriscience Scholarship (₹25k–₹50k) for students in agri-allied streams"
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: "#C20000",
        content: [
          "ISAE (Indian Society of Agricultural Engineers): The primary professional body for networking",
          "Certifications: Drone Pilot License (DGCA approved), GIS & Remote Sensing (IIRS/ISRO), Data Analytics (Google/IBM)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: "#DA1313",
        content: [
          "Conventional Careers",
          "Farm Machinery Design",
          "Irrigation Engineer",
          "Soil & Water Conservationist",
          "New-Age / AI-Driven Careers",
          "Drone Data Analyst",
          "Precision Agriculture Specialist",
          "Climate-Smart Systems Engineer",
          "AI-Agriculture Specialist",
          "Freelancing & Entrepreneurship",
          "Independent Farm Consultant",
          "Custom Hiring Center (CHC) Entrepreneur",
          "Agri-Visualization Specialist"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: "#C20000",
        content: [
          "Physical Environment: You will often work in dusty, hot, and muddy conditions",
          "Seasonal Peak: During harvest seasons, your workload might triple",
          "Translational Gap: Designing a machine in a lab is easy; making it work for a small Indian farmer with a 1-acre plot is the real, hard challenge",
          "Field Work Demands: You will spend significant time in challenging field conditions — heat, dust, rain, and remote locations",
          "Weather Dependency: Your work is heavily dependent on weather patterns and seasonal cycles",
          "Technology Adoption: Farmers may resist new technologies; you need patience and communication skills to convince them",
          "Budget Constraints: Many farms operate on tight budgets; solutions must be affordable and practical",
          "Continuous Learning: Agricultural technology evolves rapidly; staying updated with new tools and methods is mandatory"
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agricultural engineering.",
        color: "#DA1313",
        content: [
          "The Drone Revolution: By 2030, drones will be used for everything from spraying pesticides to planting seeds",
          "Vertical Farming: Engineering farms inside urban skyscrapers to grow 'Zero-Mile' food",
          "AI & IoT: Sensors in the soil that 'talk' to the farmer's phone, telling them exactly when the plant is thirsty",
          "Precision Farming: Advanced data analytics and machine learning for crop optimization",
          "Renewable Energy: Integration of solar and biogas systems in agricultural operations"
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#C20000",
        content: [
          "Science & Math: Focus on Mechanics (Physics) and Geometry",
          "Coding: Learn basic Python. It's the language of AI and drone data",
          "Observation: Visit a local farm or a 'Kisan Mela.' Ask how a tractor works or why a pump fails",
          "Projects: Build a simple solar-powered lamp or a DIY watering system for your balcony plants"
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Agricultural Engineering",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: "#DA1313",
        content: [
          "Dr. A.M. Michael: A pioneer in Irrigation Engineering who revolutionized how India manages its water resources",
          "Vidyut Mohan: A young innovator (Takachar) who turned farm waste into biofuel and won the Earthshot Prize",
          "Bhavarlal Jain: Founder of Jain Irrigation; he pioneered drip irrigation in India, saving billions of liters of water",
          "M.S. Swaminathan: Though a scientist, his vision for 'Farm Mechanization' as part of the Green Revolution paved the way for modern agricultural engineering"
        ]
      }
    ]
  },

  // ─── AGRICULTURE RESEARCH ─────────────────────────────────────────
  agriculture_research: {
    slug: "agriculture_research",
    badge: "🔬 Career Exploration for Class 10+",
    heading: "Agriculture Research",
    subheading: "Decoding plant 'blueprints' to solve global challenges from climate change to food security.",
    whyCards: [
      { icon: "🧬", title: "Scientific Core", description: "Decode plant DNA and 'blueprints'", borderColor: "#F59E0B" },
      { icon: "🌡️", title: "Climate Resilience", description: "Develop crops thriving in extreme conditions", borderColor: "#1E40AF" },
      { icon: "🛡️", title: "National Security", description: "Ensure food security for 1.4 billion people", borderColor: "#6366F1" },
      { icon: "🌱", title: "Green Doctors", description: "Maximize yields on shrinking arable land", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Long Term Goal", detail: "4yr B.Sc, 2yr M.Sc, 3-5yr Ph.D", color: "bg-amber-100 text-amber-700" },
      { label: "Research Stipend", detail: "Earn ₹31,000–35,000 during Ph.D", color: "bg-blue-100 text-blue-700" },
      { label: "Major Impact", detail: "Develop crops with 50% less water need", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "7-12 Years", label: "To Develop New Variety", gradient: "from-amber-500 to-amber-600" },
      { value: "₹35,000", label: "Monthly Ph.D Stipend", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Agriculture Research?",
        icon: "Target",
        description: "Solving global challenges through plant science",
        color: RED,
        content: [
          "This is a high-tech pursuit involving Plant Scientists decoding plant 'blueprints'",
          "Developing crops that thrive with 50% less water and resist extreme heatwaves",
          "In a nation of 1.4 billion, researchers ensure food security on shrinking land"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits of a scientific researcher",
        color: RED2,
        content: [
          "Deep curiosity to observe plants and study their growth",
          "Extreme persistence to stay patient when experiments fail",
          "Sharp accuracy in following rules and recording data",
          "Strong analytical skills using statistics and software",
          "High ethics and care for environmental and public health"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "From lab DNA work to field extension",
        color: RED3,
        content: [
          "Hypothesis & Lab: Identifying threats and decoding pathogens in labs",
          "Tiered Testing: Scaling from greenhouses to multi-climatic field trials",
          "Approval & Extension: Securing government certification and educating farmers"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and stipend details",
        color: RED4,
        content: [
          "Govt Tuition: ₹20,000 –  ₹1.5 Lakh total",
          "Private Tuition: ₹5 Lakh –  ₹12 Lakh total",
          "Duration: 4yr B.Sc + 2yr M.Sc + 3-5yr Ph.D",
          "Stipend: Ph.D students earn ₹31,000 –  ₹35,000 per month",
          "Living Costs: ₹10,000 –  ₹20,000 monthly"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED5,
        content: ["Pathway A: B.Sc + Research Route","Step 1: Complete Class 12th with PCB/PCM","Step 2: Pursue B.Sc Agriculture (4 years — SAUs, IARI, BHU, GBPUAT)","Step 3: Clear ICAR-JRF/SRF and pursue M.Sc Agriculture (specialization — Agronomy, Plant Breeding, Soil Science)","Step 4: Learn tools — SPSS, R, GIS, remote sensing, lab techniques","Step 5: Pursue Ph.D. in Agriculture and publish research papers","Step 6: Join as Scientist at ICAR/CSIR, Professor, or Research Fellow at international organizations (ICRISAT, IRRI)","Pathway B: Diploma + Field Research Route","Step 1: Complete Class 10th/12th with Science","Step 2: Pursue Diploma in Agriculture (2 years, state polytechnics)","Step 3: Work at KVKs, seed companies, or fertilizer research labs","Step 4: Upgrade to B.Sc Agriculture through lateral entry","Step 5: Gain field research experience — crop trials, soil testing, pest management","Step 6: Work as Research Assistant, Lab Technician, or Agricultural Field Officer","Pathway C: B.Tech + Agri-Tech Research Route","Step 1: Complete Class 12th with PCM","Step 2: Pursue B.Tech Agricultural Engineering / Biotechnology","Step 3: Clear GATE and pursue M.Tech (IARI, IITs, CIAE)","Step 4: Specialize in precision farming, drone technology, or agri-biotech","Step 5: Intern/work at agri-tech startups — CropIn, DeHaat, Ninjacart","Step 6: Join as Agri-Tech Researcher, R&D Engineer, or Innovation Scientist at ICAR, private firms, or global research centers"]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Funding for research careers",
        color: RED5,
        content: ["Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls)","ICAR: National Talent Scholarship (NTS) for students moving to a different state for studies","State: e.g., Krishi Vidya Nidhi (Odisha) or MOMA scholarship for minorities","Private: Corteva Agriscience Scholarship (₹25k–₹50k) for students in agri-allied streams"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries and career growth.",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1+ Crore","Senior / Lead Role (10+ yrs): ₹18–40 LPA","Mid-Level Professional (5–8 yrs): ₹8–18 LPA","Junior / Associate (3–5 yrs): ₹5–8 LPA","Entry Level (0–2 yrs): ₹3–5 LPA","Note: Govt (ICAR) stable but lower; private agri-biotech pays 20–40% more; PhD/NET boosts salary significantly."]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: RED,
        content: ["Top Cities: Delhi, Hyderabad, Bengaluru, Ludhiana, Pune, Varanasi","Top Industries: ICAR institutes, Agri Universities, Seed & Biotech (Syngenta, Bayer), NGOs, Policy Think Tanks","Global Demand: High in USA, Australia, Africa; roles in climate research, crop science, remote data analysis"]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: ["Government: Indian Agricultural Research Institute (IARI), New Delhi; National Dairy Research Institute (NDRI) Karnal; Central Institute of Fisheries Education (CIFE) Mumbai; Indian Veterinary Research Institute (IVRI), Bareilly","Private: Amity Institute of Biotechnology, Noida; Sam Higginbottom University (SHUATS), Prayagraj; Shoolini University, Solan; DY Patil University, Pune","Online: ICAR e-courses; Swayam/NPTEL; IGNOU; Coursera (Agriculture Research Programs)"]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED,
        content: ["Conventional: ICAR/IARI Research Scientist; Plant Breeding & Genetics Researcher; Soil Science & Fertility Researcher; Entomology & Pest Management Researcher","New-Age & AI Driven: Genomics & Bioinformatics Research Analyst; AI-Based Crop Prediction Modelling Researcher; Remote Sensing & GIS Agri-Researcher; Climate Change & Agriculture Impact Analyst","Remote/Entrepreneurship: Freelance Agri-Research Consultant; Independent Seed Technology Innovator; Agri-Research Publication & Journal Editor; Online Agri-Science Training Platform Founder"]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: ["Long Timeline: 7–12 years to develop a new crop variety","Patience Required: Experiments fail frequently; persistence is key","Field Unpredictability: Weather, pests, and soil variations complicate research","Limited Immediate Impact: Results take years to reach farmers","Funding Constraints: Research budgets are often limited in government sectors","Publication Pressure: Need to publish regularly to advance career"]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Preparing for a research career",
        color: RED2,
        content: [
          "Join school science fairs and biology projects",
          "Follow journals like Nature Plants or PIB Science & Tech sections",
          "Learn R or Python — modern research relies heavily on data",
          "Start your own vegetable patch to understand life cycles firsthand"
        ]
      }
    ]
  },

  // ─── ANIMAL / VETERINARY SCIENCE ──────────────────────────────────
  animal_science: {
    slug: "animal_science",
    badge: "🐾 Career Exploration for Class 10+",
    heading: "Animal / Veterinary Science",
    subheading: "Scientific study of animal biology, management, and welfare, covering domestic pets to large livestock.",
    whyCards: [
      { icon: "🏥", title: "Beyond Clinical", description: "Scientific study of biology and welfare", borderColor: "#F59E0B" },
      { icon: "🛡️", title: "National Pillar", description: "Prevent zoonotic diseases and lead conservation", borderColor: "#1E40AF" },
      { icon: "🥛", title: "Economic Backbone", description: "Lead dairy and exports industry sustainably", borderColor: "#6366F1" },
      { icon: "🌍", title: "Public Safety", description: "Monitoring diseases to prevent health crises", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "B.V.Sc & AH", detail: "Mandatory degree for veterinary practice", color: "bg-amber-100 text-amber-700" },
      { label: "NEET Compulsory", detail: "Entrance based on national medical exam", color: "bg-blue-100 text-blue-700" },
      { label: "Global Leader", detail: "India leads in dairy and livestock experts", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "5.5 Years", label: "Duration to Qualify", gradient: "from-amber-500 to-amber-600" },
      { value: "Zoonotic", label: "Disease Monitoring", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Animal Science?",
        icon: "🐾",
        description: "Biology, management, and welfare of animals",
        color: RED,
        content: [
          "It is the scientific study of animal biology, management, and welfare",
          "Professionals safeguard India’s food supply and prevent zoonotic diseases like Rabies",
          "India is a global leader in dairy and relies on experts for ethical exports"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for veterinary excellence",
        color: RED2,
        content: [
          "Deep compassion for non-verbal creatures and keen observation",
          "High stamina and physical strength for handling large livestock",
          "Calm, decisive action during emergencies",
          "Ability to simplify complex medical data for owners"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Clinical care and public safety",
        color: RED3,
        content: [
          "Clinical Care: Diagnosing ailments and executing medicinal treatment plans",
          "Preventive Health: Managing vaccinations, deworming, and tailored nutrition",
          "Public Safety: Monitoring diseases to prevent jumping from animals to humans"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in veterinary education",
        color: RED4,
        content: [
          "Govt Tuition: ₹30,000 –  ₹1.5 Lakh total",
          "Private Tuition: ₹10 Lakh –  ₹25 Lakh",
          "Living Costs: ₹10,000 –  ₹18,000 monthly",
          "NEET Coaching: ₹50,000 –  ₹1 Lakh",
          "Equipment: Budget for medical tools like stethoscopes"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for animal science students",
        color: RED5,
        content: [
          "Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls)",
          "ICAR: National Talent Scholarship (NTS) for students moving to a different state",
          "State: Various state-level scholarships for veterinary students",
          "Private: Zoetis Scholarship, Boehringer Ingelheim Veterinary Scholarship"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED5,
        content: ["Pathway A: B.V.Sc Degree Route","Step 1: Complete Class 12th with PCB (Physics, Chemistry, Biology)","Step 2: Clear NEET and pursue B.V.Sc & AH (5.5 years — including 1 year internship)","Step 3: Do clinical training at veterinary hospitals, dairy farms, poultry units","Step 4: Learn tools — ultrasound, lab diagnostics, animal nutrition software","Step 5: Register with State Veterinary Council","Step 6: Work as Veterinary Doctor, Livestock Officer, or start own veterinary clinic","Pathway B: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.V.Sc & AH from recognized college (IVRI, GADVASU, TANUVAS)","Step 3: Clear ICAR-JRF/SRF and pursue M.V.Sc (specialization — Surgery, Pathology, Animal Genetics)","Step 4: Publish research and pursue Ph.D. in Veterinary Science","Step 5: Clear ARS/NET, UPSC Veterinary Services, or State PSC exams","Step 6: Join as Scientist at ICAR/IVRI, Professor, Government Veterinary Officer, or WHO/FAO Consultant","Pathway C: Diploma + Field Entry Route","Step 1: Complete Class 10th/12th with Science","Step 2: Pursue Diploma in Animal Husbandry / Veterinary Science (2 years, state institutes)","Step 3: Gain field experience — dairy cooperatives, poultry farms, animal shelters","Step 4: Learn basics — vaccination, first aid, artificial insemination, feed management","Step 5: Upgrade to B.V.Sc through lateral entry or bridge courses (optional)","Step 6: Work as Veterinary Technician, Livestock Supervisor, Dairy Manager, or Animal Welfare Officer"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA –  ₹1.5+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–20 LPA",
          "Junior / Associate (3–5 yrs): ₹6–10 LPA",
          "Entry Level (0–2 yrs): ₹4–8 LPA",
          "Note: Private pet care & dairy sectors pay 20–40% more; govt vets stable; specialization (surgery, dairy tech) increases income."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: RED,
        content: [
          "Top Cities: Delhi-NCR, Bengaluru, Hyderabad, Pune, Chennai, Ludhiana",
          "Top Industries: Veterinary Hospitals, Dairy (Amul), Poultry, Pharma (Zoetis), Pet Care Industry",
          "Global Demand: High in Canada, Australia, UK; demand in livestock management, pet healthcare, remote advisory roles"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government: Indian Veterinary Research Institute (IVRI) Bareilly; National Dairy Research Institute (NDRI) Karnal; Guru Angad Dev Veterinary & Animal Sciences University (GADVASU) Ludhiana; Maharashtra Animal & Fishery Sciences University (MAFSU) Nagpur",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj; Rajiv Gandhi Institute of Veterinary Education & Research Puducherry; Apollo College of Veterinary Medicine Jaipur; Shoolini University Solan",
          "Online: ICAR e-courses; Swayam/NPTEL; IGNOU (Animal Husbandry Programs); Coursera (Veterinary Science Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED,
        content: [
          "Conventional: Government Veterinary Officer; Livestock Development Officer; Animal Nutritionist & Feed Specialist; Dairy Farm Operations Manager",
          "New-Age & AI Driven: AI-Based Animal Health Diagnostics Specialist; Precision Livestock Farming Technologist; Genetic Engineering & Cloning Researcher; IoT-Enabled Smart Dairy Management Expert",
          "Remote/Entrepreneurship: Online Veterinary Telemedicine Provider; Pet Care & Wellness Startup Founder; Freelance Animal Husbandry Consultant; Organic Dairy / Poultry Brand Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Risks and emotional demands.",
        color: RED,
        content: [
          "Emotional Toll: Dealing with animal suffering and euthanasia decisions",
          "Physical Demands: Long hours, exposure to diseases, and physical strain",
          "Financial Pressure: High education costs and variable income in private practice",
          "Work-Life Balance: Emergency calls and on-call duties disrupt personal time",
          "Market Competition: Saturated urban markets and low rural demand",
          "Regulatory Compliance: Navigating complex animal welfare and food safety laws"
        ]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Preparing from school for Vet school",
        color: RED2,
        content: [
          "Volunteer at local shelters or gaushalas for hands-on experience",
          "Focus intensely on Biology and Physiology",
          "Join debate clubs to refine communication skills for owners",
          "Learn digital tools used in modern veterinary diagnostics"
        ]
      }
    ]
  },

  // ─── APICULTURE ───────────────────────────────────────────────────
  apiculture: {
    slug: "apiculture",
    badge: "🐝 Career Exploration for Class 10+",
    heading: "Apiculture (Beekeeping)",
    subheading: "The science and business of keeping bees to produce honey and protect global pollination.",
    whyCards: [
      { icon: "🍯", title: "Honey Production", description: "Collect honey safely and manage bee colonies", borderColor: "#F59E0B" },
      { icon: "🌸", title: "Pollination Hero", description: "Bees help grow one-third of the food we eat", borderColor: "#1E40AF" },
      { icon: "🇮🇳", title: "Indian Growth", description: "India is the 7th largest honey producer globally", borderColor: "#6366F1" },
      { icon: "🚀", title: "Modern Career", description: "Mix of biology, farming, business, and sustainability", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Fast Training", detail: "Short courses by KVIC are often free", color: "bg-amber-100 text-amber-700" },
      { label: "Startup Low Cost", detail: "Starting tools cost ₹25,000–₹60,000", color: "bg-blue-100 text-blue-700" },
      { label: "Massive Role", detail: "Critical impact on crop yields globally", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "1/3", label: "Food Depends on Bees", gradient: "from-amber-500 to-amber-600" },
      { value: "7th", label: "India Global Rank", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Apiculture?",
        icon: "🐝",
        description: "Bee management for honey and pollination",
        color: RED,
        content: [
          "Apiculture means keeping bees to produce honey and other products",
          "Beekeepers manage colonies and collect honey safely",
          "Bees help grow one-third of the food we eat through pollination",
          "India is the 7th largest honey producer with many opportunities"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for successful beekeepers",
        color: RED2,
        content: [
          "Deep love for nature, biology, and outdoor work",
          "Patient, calm, and ready to start your own business",
          "Good at observation and problem-solving",
          "Okay with hands-on work and occasional bee stings"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Hive health and honey harvesting",
        color: RED3,
        content: [
          "Inspection: Checking hive health weekly",
          "Harvest: Collecting honey 2–4 times yearly",
          "Pollination: Providing seasonal pollination for farms",
          "Sales: Bottling and selling honey often"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Education and starter kit costs",
        color: RED4,
        content: [
          "Certificate: ₹2,000 –  ₹25,000",
          "Degree (B.Sc): ₹15,000 –  ₹1.5 Lakh yearly",
          "Starting Tools: ₹25,000 –  ₹60,000 (Bee boxes, etc.)",
          "License (FSSAI): ₹2,000 –  ₹5,000",
          "Hostel Living: ₹5,000 –  ₹8,000 monthly"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Aid for aspiring beekeepers",
        color: RED5,
        content: ["Career Pathways: Apiculture (Beekeeping)","Pathway A: B.Sc Agriculture + Specialization Route","Step 1: Complete Class 12th with PCB/PCM","Step 2: Pursue B.Sc Agriculture / B.Sc Zoology / B.Sc Entomology","Step 3: Take specialized training in Apiculture (CBRTI Pune, IARI, KVKs)","Step 4: Learn skills — bee colony management, honey extraction, queen rearing","Step 5: Pursue M.Sc Entomology / Apiculture for advanced knowledge","Step 6: Join as Apiculture Scientist, Bee Research Officer, or Honey Quality Analyst at ICAR, KVIC, or NBHM","Pathway B: Skill-Based / Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Attend beekeeping training at KVKs, NBHM, or state agriculture departments (free/subsidized)","Step 3: Learn basics — bee box setup, seasonal management, disease control","Step 4: Get FSSAI license and organic certification for honey products","Step 5: Apply for government subsidies — PMEGP, NABARD, NBHM schemes","Step 6: Start own beekeeping business — sell honey, beeswax, royal jelly, pollination services","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.Sc Agriculture / Zoology from recognized university","Step 3: Clear ICAR-JRF and pursue M.Sc/Ph.D. in Entomology / Apiculture","Step 4: Publish research in bee biology, pollination science, or honey technology","Step 5: Clear ARS/NET or State PSC exams","Step 6: Join as Scientist at CBRTI/ICAR, Professor, NBHM Coordinator, or FAO Bee Health Consultant"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Seasonal risks and market issues",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹20 LPA –  ₹80 LPA","Senior / Lead Role (10+ yrs): ₹10–20 LPA","Mid-Level Professional (5–8 yrs): ₹5–10 LPA","Junior / Associate (3–5 yrs): ₹3–6 LPA","Entry Level (0–2 yrs): ₹2–4 LPA","Note: Income varies widely; entrepreneurs earn more via honey/wax sales; govt schemes (KVIC) + export markets boost earnings.","Where Are the Jobs?","Top Cities/Regions: Punjab, Haryana, Uttar Pradesh, Himachal Pradesh, Uttarakhand, Maharashtra","Top Industries: Honey Processing, Agri-Cooperatives, KVIC, FMCG (Dabur, Patanjali), Export Firms","Global Demand: High in EU, USA, Middle East; demand for organic honey, pollination services, export-driven entrepreneurship","Top Institutions","Government:","Central Bee Research & Training Institute (CBRTI), Pune","Khadi & Village Industries Commission (KVIC), Mumbai","Punjab Agricultural University (PAU), Ludhiana","University of Agricultural Sciences (UAS), Bangalore","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Amity University, Noida","Shoolini University, Solan","Lovely Professional University (LPU), Jalandhar","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Certificate in Beekeeping)","National Bee Board (NBB) Online Training","Career Opportunities","Conventional","Government Apiculture Development Officer","Bee Colony Management Specialist","Honey Processing & Quality Control Officer","Pollination Service Provider for Farms","New-Age & AI Driven","AI-Powered Hive Health Monitoring Analyst","IoT-Based Smart Beekeeping Technologist","Bee Genomics & Breeding Research Scientist","Drone-Assisted Pollination Mapping Specialist","Remote/Entrepreneurship","Organic Honey Brand Founder & Exporter","Online Beekeeping Training Academy Creator","Bee Venom & Apitherapy Product Entrepreneur","Freelance Apiculture & Pollination Consultant"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Beginning your beekeeping journey",
        color: RED2,
        content: [
          "Study Biology, Chemistry, and pollination topics deeply",
          "Visit local KVK (Krishi Vigyan Kendra) or bee farms",
          "Watch ICAR videos and take free digital courses",
          "Learn basic profit and loss for business operations"
        ]
      }
    ]
  },

  // ─── AQUACULTURE ──────────────────────────────────────────────────
  aquaculture: {
    slug: "aquaculture",
    badge: "🐟 Career Exploration for Class 10+",
    heading: "Aquaculture",
    subheading: "Farming aquatic organisms like fish and shrimp under controlled conditions.",
    whyCards: [
      { icon: "🍤", title: "Fish Farming", description: "Manage full lifecycle of aquatic organisms", borderColor: "#F59E0B" },
      { icon: "🇮🇳", title: "Global Leader", description: "India is world's 3rd-largest fish producer", borderColor: "#1E40AF" },
      { icon: "💼", title: "Job Target", description: "PMMSY targets 55 lakh new jobs by 2025", borderColor: "#6366F1" },
      { icon: "📈", title: "Huge Market", description: "Projected to double by 2033", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "B.F.Sc Degree", detail: "Bachelor of Fisheries Science path", color: "bg-amber-100 text-amber-700" },
      { label: "3rd Largest", detail: "India's global rank in fish production", color: "bg-blue-100 text-blue-700" },
      { label: "High Export", detail: "India is the 4th largest seafood exporter", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "55 Lakh", label: "New Jobs Target", gradient: "from-amber-500 to-amber-600" },
      { value: "2x", label: "Market Growth by 2033", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Aquaculture?",
        icon: "🐟",
        description: "Farming aquatic life under controlled conditions",
        color: RED,
        content: [
          "Farming organisms like fish, shrimp, and oysters under controlled conditions",
          "India is the world's 3rd largest fish producer and 4th largest exporter",
          "Government schemes target 55 lakh new jobs in this sector by 2025"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for aquaculture success",
        color: RED2,
        content: [
          "Observant, patient, and physically fit for outdoor work",
          "Strong attention to detail and problem-solving skills",
          "Competency in water quality and fish nutrition",
          "Comfortable with hatchery operations and aquaculture technology"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From pond preparation to market sale",
        color: RED3,
        content: [
          "Pre-Stocking: Preparing ponds and testing water quality",
          "Growing: Monitoring feeding and observing health daily",
          "Harvest: Sorting, packaging, and coordinating with buyers"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Educational investment breakdown",
        color: RED4,
        content: [
          "Diploma: ₹5,000 –  ₹80,000 per year",
          "Bachelor (B.F.Sc): ₹20,000 –  ₹1.5 Lakh yearly",
          "Master: ₹30,000 –  ₹2 Lakh yearly",
          "Living Costs: ₹4,000 –  ₹12,000 per month",
          "Ph.D: Stipends available for research students"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial aid for fisheries students",
        color: RED5,
        content: ["Pathway A: B.F.Sc Degree Route","Step 1: Complete Class 12th with PCB (Physics, Chemistry, Biology)","Step 2: Clear ICAR-AIEEA/State CET and pursue B.F.Sc — Bachelor of Fisheries Science (4 years — CIFE Mumbai, SAUs, State Fisheries Colleges)","Step 3: Do internships at fish hatcheries, shrimp farms, or MPEDA export units","Step 4: Learn skills — water quality testing, feed management, disease diagnosis","Step 5: Pursue M.F.Sc in Aquaculture / Mariculture / Fish Genetics (optional)","Step 6: Join as Aquaculture Officer, Fisheries Development Officer, or Hatchery Manager","Pathway B: Skill-Based / Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Attend aquaculture training at CIFA, NFDB, KVKs, or state fisheries departments (free/subsidized)","Step 3: Learn basics — pond construction, seed selection, feeding, harvesting techniques","Step 4: Get FSSAI license and aquaculture registration from CAA (Coastal Aquaculture Authority)","Step 5: Apply for government subsidies — PMMSY, NFDB, NABARD, Blue Revolution schemes","Step 6: Start own fish/shrimp farm — sell fresh fish, prawns, ornamental fish, or value-added products","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.F.Sc from recognized college (CIFE, KUFOS, WBUAFS)","Step 3: Clear ICAR-JRF/SRF and pursue M.F.Sc/Ph.D. in Aquaculture / Fish Biotechnology","Step 4: Publish research in fish breeding, aquaponics, or sustainable aquaculture","Step 5: Clear ARS/NET, UPSC, or State PSC exams","Step 6: Join as Scientist at CIFA/CMFRI/ICAR, Professor, State Fisheries Officer, or FAO/WorldFish Consultant"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Weather risks and market volatility",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1.2+ Crore","Senior / Lead Role (10+ yrs): ₹15–40 LPA","Mid-Level Professional (5–8 yrs): ₹8–15 LPA","Junior / Associate (3–5 yrs): ₹4–8 LPA","Entry Level (0–2 yrs): ₹2.5–5 LPA","Note: Coastal states pay more; shrimp export business boosts income; entrepreneurship (fish/shrimp farming) can exceed salaries.","Where Are the Jobs?","Top Cities/Regions: Andhra Pradesh, Tamil Nadu, Kerala, West Bengal, Odisha, Gujarat","Top Industries: Fisheries, Shrimp Export (Avanti Feeds), Hatcheries, Feed Companies, Govt Fisheries Dept","Global Demand: High in Southeast Asia, Middle East, EU; demand in aquaculture tech, export management, remote monitoring","Top Institutions","Government:","Central Institute of Fisheries Education (CIFE), Mumbai","Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar","Central Institute of Brackishwater Aquaculture (CIBA), Chennai","Kerala University of Fisheries & Ocean Studies (KUFOS), Kochi","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Shoolini University, Solan","Lovely Professional University (LPU), Jalandhar","Centurion University, Odisha","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Fisheries & Aquaculture Programs)","Coursera (Aquaculture & Marine Science Courses)","Career Opportunities","Conventional","Fish Farm / Hatchery Manager","Aquaculture Extension Officer (State Fisheries)","Shrimp & Prawn Cultivation Specialist","Aquatic Animal Health & Disease Officer","New-Age & AI Driven","AI-Based Water Quality Monitoring Analyst","IoT-Enabled Smart Fish Farm Technologist","Recirculating Aquaculture Systems (RAS) Engineer","Satellite-Based Aquaculture Site Selection Specialist","Remote/Entrepreneurship","Ornamental Fish Breeding & Export Entrepreneur","Online Aquaculture Training Platform Founder","Freelance Aquaculture Project Consultant","Seaweed / Algae Farming Startup Founder"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Early steps for fish farming",
        color: RED2,
        content: [
          "Master Biology, Chemistry, and ecology in school",
          "Visit fish farms and join science fair competitions",
          "Take free courses on NPTEL and ICAR websites",
          "Read CMFRI and fish industry reports regularly"
        ]
      }
    ]
  },

  // ─── DAIRY TECHNOLOGY ───────────────────────────────────────────
  dairy_technology: {
    slug: "dairy_technology",
    badge: "🥛 Career Exploration for Class 10+",
    heading: "Dairy Technology",
    subheading: "High-tech processing, packaging, and distribution of milk and dairy products like cheese and yogurt.",
    whyCards: [
      { icon: "🧪", title: "More Than Farming", description: "Food science focused on tech processing", borderColor: "#F59E0B" },
      { icon: "🛡️", title: "Guardian Role", description: "Ensuring milk is safe and nutrient-dense", borderColor: "#1E40AF" },
      { icon: "🇮🇳", title: "National Mission", description: "Backbone of the world's largest milk producer", borderColor: "#6366F1" },
      { icon: "🧀", title: "Value Addition", description: "Transform raw milk into global-standard goods", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "B.Tech Path", detail: "4-year professional engineering degree", color: "bg-amber-100 text-amber-700" },
      { label: "High Demand", detail: "Backbone of India's massive dairy industry", color: "bg-blue-100 text-blue-700" },
      { label: "Safe Nutrition", detail: "Focus on spoilage-free, healthy products", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "No. 1", label: "Global Milk Producer", gradient: "from-amber-500 to-amber-600" },
      { value: "24/7", label: "Operations Focus", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Dairy Technology?",
        icon: "🥛",
        description: "Scientific processing of milk into safe products",
        color: RED,
        content: [
          "Focused on processing, packaging, and distribution of milk and products like cheese and yogurt",
          "Technologists act as scientists ensuring milk is safe, nutrient-dense, and spoilage-free",
          "Professionals serve as the industry's backbone, as India is the world's largest producer"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for dairy science excellence",
        color: RED2,
        content: [
          "Sharp attention to detail for chemical testing and consumer health",
          "Strong foundation in Biology and Chemistry with physical endurance",
          "Ability to work in cold storage or factory environments",
          "Expert problem-solving skills to troubleshoot production issues"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From procurement to cold chain logistics",
        color: RED3,
        content: [
          "Procurement: Collecting and immediate cooling of raw milk",
          "Processing: Pasteurization, homogenization, and fortification",
          "Value Addition: Transforming milk into premium cheese, paneer, and ghee",
          "Quality & Logistics: Lab testing and managing the 'cold chain' for delivery"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in diary technology degree",
        color: RED4,
        content: [
          "Govt Tuition: ₹20,000 –  ₹1.5 Lakh for 4 years",
          "Private Tuition: ₹5 Lakh –  ₹12 Lakh total",
          "Living Costs: ₹10,000 –  ₹20,000 monthly",
          "Coaching: Exam prep costs ₹50,000 –  ₹1 Lakh"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Funding for dairy science students",
        color: RED5,
        content: ["Career Pathways: Dairy Technology","Pathway A: B.Tech Dairy Technology Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Clear state CET/ICAR-AIEEA and pursue B.Tech Dairy Technology (4 years — NDRI Karnal, SMC Anand, AAU, Warner College)","Step 3: Do internships at dairy plants — Amul, Mother Dairy, Nestle, Britannia","Step 4: Learn skills — milk processing, pasteurization, packaging, quality testing, FSSAI standards","Step 5: Pursue M.Tech Dairy Technology / MBA Dairy Management (optional)","Step 6: Join as Dairy Technologist, Production Manager, Quality Assurance Officer, or R&D Scientist","Pathway B: Diploma + Field Entry Route","Step 1: Complete Class 10th/12th with Science","Step 2: Pursue Diploma in Dairy Technology (2–3 years, state dairy institutes/polytechnics)","Step 3: Gain hands-on experience at milk cooperatives, chilling centers, or dairy booths","Step 4: Learn basics — milk collection, fat testing, paneer/curd/ghee making, cold chain management","Step 5: Upgrade to B.Tech Dairy Technology through lateral entry (optional)","Step 6: Work as Dairy Supervisor, Milk Plant Technician, Quality Checker, or Dairy Cooperative Manager","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Pursue B.Tech Dairy Technology from recognized institute (NDRI, SMC Anand)","Step 3: Clear GATE/ICAR-JRF and pursue M.Tech/Ph.D. in Dairy Science / Food Technology","Step 4: Publish research in dairy processing, value-added dairy products, or food safety","Step 5: Clear ARS/NET, UPSC, or State PSC exams","Step 6: Join as Scientist at NDRI/ICAR, Professor, FSSAI Officer, or Dairy Development Commissioner in government"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Perishability and extreme environments",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹2+ Crore","Senior / Lead Role (10+ yrs): ₹20–60 LPA","Mid-Level Professional (5–8 yrs): ₹10–20 LPA","Junior / Associate (3–5 yrs): ₹5–10 LPA","Entry Level (0–2 yrs): ₹3–6 LPA","Note: Private dairy & FMCG pay 20–40% more; cooperative sector stable; MBA (Dairy/Agri) boosts growth.","Where Are the Jobs?","Top Cities/Regions: Gujarat (Anand), Delhi-NCR, Pune, Bengaluru, Hyderabad, Ludhiana","Top Industries: Dairy (Amul, Mother Dairy), FMCG (Nestlé), Food Processing, Cold Chain, Govt Dairy Boards","Global Demand: High in New Zealand, Australia, EU; demand in dairy processing, supply chain, export management","Top Institutions","Top Institutions for Dairy Technology in India","Government:","National Dairy Research Institute (NDRI), Karnal","SMC College of Dairy Science, Anand (AAU)","Guru Angad Dev Veterinary & Animal Sciences University (GADVASU), Ludhiana","Warner College of Dairy Technology (SHUATS), Prayagraj","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Lovely Professional University (LPU), Jalandhar","ITM University, Gwalior","Shoolini University, Solan","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Dairy Technology Programs)","National Dairy Development Board (NDDB) Online Training","Career Opportunities","Conventional","Dairy Plant Production Manager","Milk Procurement & Quality Control Officer","Dairy Product Development Technologist","Cooperative Dairy Federation Officer (AMUL/NDDB)","New-Age & AI Driven","AI-Powered Milk Supply Chain Optimizer","IoT-Based Cold Chain Monitoring Specialist","Automated Dairy Processing Systems Engineer","Data-Driven Dairy Yield Prediction Analyst","Remote/Entrepreneurship","Artisan Cheese / Yogurt Brand Founder","Online Dairy Technology Consulting Provider","Dairy-Based Nutraceutical Startup Entrepreneur","Freelance Dairy FSSAI Compliance Consultant"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Beginning your milk science journey",
        color: RED2,
        content: [
          "Master Organic Chemistry and Biomolecules — the core of milk science",
          "Develop strong English communication for technical reporting",
          "Experiment at home with fermentation and temperature at safe levels"
        ]
      }
    ]
  },

  // ─── FLORIST ─────────────────────────────────────────────────────
  florist: {
    slug: "florist",
    badge: "🌸 Career Exploration for Class 10+",
    heading: "Florist / Floriculture",
    subheading: "Selecting, arranging, and presenting flowers for events, gifting, and hospitality.",
    whyCards: [
      { icon: "💐", title: "Creative Art", description: "Select and arrange flowers for weddings and events", borderColor: "#F59E0B" },
      { icon: "📈", title: "Booming Market", description: "India's market expected to reach ₹744 billion", borderColor: "#1E40AF" },
      { icon: "🏨", title: "Growth Drivers", description: "Driven by hotels, cafés, and online gifting", borderColor: "#6366F1" },
      { icon: "🌍", title: "Global Scale", description: "Industry valued at over USD 57 billion globally", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Creative Career", detail: "Best for nature-loving and entrepreneurial minds", color: "bg-amber-100 text-amber-700" },
      { label: "Rising Market", detail: "Massive growth expected in India by 2033", color: "bg-blue-100 text-blue-700" },
      { label: "Digital Sales", detail: "Strong focus on social media and online gifting", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹744B", label: "Projected Market (2033)", gradient: "from-amber-500 to-amber-600" },
      { value: "USD 57B", label: "Global Industry Size", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is a Florist?",
        icon: "🌸",
        description: "Art and business of flower arrangements",
        color: RED,
        content: [
          "Selecting and arranging flowers for weddings, events, hotels, and gifting",
          "Combines creativity with colour theory, biology, and digital marketing",
          "Growth is driven by weddings and rising incomes in India"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🎨",
        description: "Traits for creative florists",
        color: RED2,
        content: [
          "Creative, nature-loving, and entrepreneurial individuals",
          "Good at customer service and teamwork",
          "Knowledge of arrangements, colours, and basic accounts",
          "Unsuitable for those avoiding early mornings or physical work"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From buying to event delivery",
        color: RED3,
        content: [
          "Buying: Purchasing fresh flowers from farms or markets",
          "Design: Arranging flowers as per customer needs and events",
          "Delivery: Packing and ensuring timely delivery for fresh look",
          "Business: Handling social media, stock, and staff management"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Training and tool investment",
        color: RED4,
        content: [
          "Certificate: ₹5,000 –  ₹60,000",
          "Degree: ₹20,000 –  ₹2 Lakh yearly",
          "Living Costs: ₹5,000 –  ₹15,000 monthly",
          "Tools/Equipment: ₹3,000 –  ₹10,000"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Aid for floriculture and design",
        color: RED5,
        content: ["Career Pathways: Florist","Pathway A: B.Sc Horticulture + Specialization Route","Step 1: Complete Class 12th with PCB/PCM","Step 2: Pursue B.Sc Horticulture / B.Sc Agriculture (4 years — SAUs, IARI, UAS Bangalore)","Step 3: Specialize in Floriculture during graduation or take certificate courses","Step 4: Learn skills — flower arrangement, bouquet making, landscape design, greenhouse management","Step 5: Do internships at nurseries, export houses, or floral design studios","Step 6: Join as Floriculture Officer, Floral Designer, Greenhouse Manager, or Flower Export Specialist","Pathway B: Skill-Based / Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Attend floristry training — short courses at IIFD, IGNOU, KVKs, or private floral schools","Step 3: Learn basics — flower types, colour theory, arrangement styles, preservation techniques","Step 4: Practice event floristry — weddings, corporate events, festivals","Step 5: Build portfolio on Instagram/social media and get FSSAI/MSME registration for business","Step 6: Start own florist shop, online flower delivery service, or event decoration business","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.Sc Horticulture / B.Sc Agriculture from recognized university","Step 3: Clear ICAR-JRF and pursue M.Sc/Ph.D. in Floriculture / Horticulture","Step 4: Publish research in flower breeding, post-harvest technology, or tissue culture","Step 5: Clear ARS/NET or State PSC exams","Step 6: Join as Scientist at IARI/IIHR/ICAR, Professor, Horticulture Officer, or APEDA Floriculture Export Consultant"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Perishability and seasonal variation",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹30 LPA –  ₹1+ Crore","Senior / Lead Role (10+ yrs): ₹10–30 LPA","Mid-Level Professional (5–8 yrs): ₹5–10 LPA","Junior / Associate (3–5 yrs): ₹3–6 LPA","Entry Level (0–2 yrs): ₹2–4 LPA","Note: Income varies; event/wedding florists earn more; metro cities pay 30–50% higher; creativity + branding boosts earnings.","Where Are the Jobs?","Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune, Jaipur","Top Industries: Event Management, Wedding Planning, Retail Flower Shops, E-commerce (Ferns N Petals), Hospitality","Global Demand: High in UAE, Europe; freelancing, luxury events, export floriculture opportunities","Top Institutions","Government:","Indian Agricultural Research Institute (IARI), New Delhi","Tamil Nadu Agricultural University (TNAU), Coimbatore","Dr. YS Parmar University of Horticulture & Forestry, Solan","University of Horticultural Sciences (UHS), Bagalkot","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Amity University, Noida","Lovely Professional University (LPU), Jalandhar","Shoolini University, Solan","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Floriculture & Landscaping Programs)","National Horticulture Board (NHB) Online Training","Career Opportunities","Conventional","Floriculture Research Scientist (ICAR/SAU)","Commercial Flower Farm Manager","Floral Designer for Events & Weddings","Flower Auction & Wholesale Market Officer","New-Age & AI Driven","AI-Optimized Greenhouse Floriculture Specialist","Drone-Based Flower Crop Health Analyst","IoT-Enabled Climate Control Polyhouse Technologist","Data-Driven Floral Demand Forecasting Analyst","Remote/Entrepreneurship","Online Flower Delivery Platform Founder","Freelance Wedding & Event Floral Designer","Dried & Preserved Flower Art Entrepreneur","Exotic / Organic Flower Export Business Owner"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📸",
        description: "Early steps for budding florists",
        color: RED2,
        content: [
          "Study botany, colour theory, and art in school",
          "Arrange flowers at home and build a photo portfolio",
          "Start an Instagram page for your designs early",
          "Join art fairs and workshops to understand market trends"
        ]
      }
    ]
  },

  // ─── FOOD SCIENCE ────────────────────────────────────────────────
  food_science: {
    slug: "food_science",
    badge: "🍎 Career Exploration for Class 10+",
    heading: "Food Science",
    subheading: "Ensuring food is safe, nutritious, and long-lasting through scientific innovation.",
    whyCards: [
      { icon: "🛡️", title: "Safety First", description: "Ensure food is safe and nutritional", borderColor: "#F59E0B" },
      { icon: "🔬", title: "Science Edge", description: "Study biological and chemical makeup of food", borderColor: "#1E40AF" },
      { icon: "🧊", title: "Preservation", description: "Apply technology to distribution and storage", borderColor: "#6366F1" },
      { icon: "🍩", title: "Healthy Snacks", description: "Innovative snacks and crop fortification", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Spoilage Solver", detail: "Critical role in reducing India's 30% spoilage", color: "bg-amber-100 text-amber-700" },
      { label: "4-Year B.Tech", detail: "Engineering path for food technology", color: "bg-blue-100 text-blue-700" },
      { label: "High Impact", detail: "Vital bridge between farms and consumers", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "30%", label: "India Spoilage Rate", gradient: "from-amber-500 to-amber-600" },
      { value: "100%", label: "Fee Waiver (NIFTEM)", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Food Science?",
        icon: "🍎",
        description: "Science of making food safe and nutritious",
        color: RED,
        content: [
          "Critical field for reducing India's 30% food spoilage rate",
          "Studies biological makeup and applies research to preserve food",
          "Creates healthier snacks and manages global food security"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits of a food scientist",
        color: RED2,
        content: [
          "Scientific curiosity for Biology, Chemistry, and data",
          "Keen palette and sharp observational skills",
          "Meticulous measurements and unwavering ethics",
          "Creativity to innovate plant-based alternatives"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From recipe innovation to packaging",
        color: RED3,
        content: [
          "Development: Innovating and testing new recipes in labs",
          "Processing: Using thermal or drying techniques for preservation",
          "Quality Assurance: Hourly testing for safety compliance",
          "Packaging: Designing attractive, secure containers"
        ]
      },
      {
        id: "4",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Grants for food tech students",
        color: RED5,
        content: [
          "NIFTEM: 100% fee waiver plus monthly stipend",
          "Corteva scholarship for girls' education costs",
          "Aditya Birla and Foundation for Excellence aid"
        ]
      },
      {
        id: "5",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Zero margin for error",
        color: RED,
        content: ["Career Pathways: Food Science","Pathway A: B.Tech Food Technology Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Pursue B.Tech Food Technology (CFTRI, NIFTEM)","Step 3: Intern at Nestle, ITC, Britannia, Parle","Step 4: Learn HACCP, FSSAI standards, food processing","Step 5: Pursue M.Tech Food Technology (optional)","Step 6: Join as Food Technologist or R&D Scientist","Pathway B: Diploma + Skill-Based Route","Step 1: Complete Class 10th/12th with Science","Step 2: Pursue Diploma in Food Processing/Technology","Step 3: Gain experience at food plants, bakeries","Step 4: Learn food safety, packaging, cold chain","Step 5: Get FOSTAC or ISO 22000 certification","Step 6: Work as Quality Checker or Production Supervisor","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Pursue B.Tech/B.Sc Food Science","Step 3: Clear GATE/ICAR-JRF, pursue M.Tech/Ph.D.","Step 4: Research food fortification, nutraceuticals, food safety","Step 5: Clear ARS/NET or UPSC exams","Step 6: Join as Scientist at CFTRI/ICAR or Professor"]
      },
      {
        id: "6",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Early steps in food technology",
        color: RED2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹70 LPA –  ₹2+ Crore","Senior / Lead Role (10+ yrs): ₹25–70 LPA","Mid-Level Professional (5–8 yrs): ₹12–25 LPA","Junior / Associate (3–5 yrs): ₹6–12 LPA","Entry Level (0–2 yrs): ₹3–7 LPA","Note: FMCG & MNCs pay 20–50% more; metro cities higher; specialization (food safety, R&D) boosts salary.","Where Are the Jobs?","Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Pune, Ahmedabad","Top Industries: FMCG (Nestlé, ITC, HUL), Food Processing, Quality Testing Labs, Packaging, Startups","Global Demand: High in USA, Canada, EU; roles in food safety, R&D, export quality, remote consulting","Top Institutions","Top Institutions for Food Science in India","Government:","Central Food Technological Research Institute (CFTRI), Mysuru","Indian Institute of Technology (IIT), Kharagpur","National Institute of Food Technology Entrepreneurship & Management (NIFTEM), Sonipat","University of Mysore, Mysuru","Private:","Lovely Professional University (LPU), Jalandhar","Amity University, Noida","SRM Institute of Science and Technology, Chennai","Shoolini University, Solan","Online:","Swayam/NPTEL","IGNOU (Food Science & Nutrition Programs)","ICAR e-courses","Coursera (Food Science & Technology Courses)","Career Opportunities","Conventional","Food Quality Assurance & Safety Officer","Food Processing Plant Technologist","FSSAI Regulatory Affairs Specialist","Sensory Evaluation & Product Development Scientist","New-Age & AI Driven","AI-Powered Food Formulation Scientist","Blockchain-Based Food Traceability Analyst","Lab-Grown / Cultured Protein Technologist","Smart Packaging & Nano-Technology Food Engineer","Remote/Entrepreneurship","Health Food / Superfood Brand Founder","Freelance FSSAI & FDA Compliance Consultant","Online Food Science Education Platform Creator","Plant-Based / Vegan Product Startup Entrepreneur"]
      }
    ]
  },
  horticulture: {
    slug: "horticulture",
    badge: "🌳 Career Exploration for Class 10+",
    heading: "Horticulture",
    subheading: "Art and science of growing plants for ornament, food, or medicine, with a focus on high-value yields.",
    whyCards: [
      { icon: "🌳", title: "High-Value Crops", description: "Focus on fruits, vegetables, flowers, and medicinal herbs", borderColor: "#F59E0B" },
      { icon: "🍏", title: "Nutritional Security", description: "Ensuring high-yield orchards and veggie farms", borderColor: "#1E40AF" },
      { icon: "🔬", title: "Modern Science", description: "Tissue culture, biotechnology, and post-harvest tech", borderColor: "#6366F1" },
      { icon: "💰", title: "Booming Market", description: "Organic exports and high-end landscaping are growing", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "High Growth", detail: "Market for organic and high-end plants is rising", color: "bg-amber-100 text-amber-700" },
      { label: "B.Sc/B.Tech", detail: "4-year degree in Horticulture Science", color: "bg-blue-100 text-blue-700" },
      { label: "Export Focus", detail: "Strong focus on global standards and shipping", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹15+ LPA", label: "Senior Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "₹744B", label: "Projected Industry", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Horticulture?",
        icon: "🌳",
        description: "The science of intensive plant cultivation",
        color: RED,
        content: [
          "Focused on growing fruits, vegetables, flowers, and medicinal plants",
          "Combines artistic landscape design with biological engineering",
          "Essential for high-yield farming in small areas"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for horticultural success",
        color: RED2,
        content: [
          "Strong interest in plant biology and environmental science",
          "Patience to observe growth cycles over months and years",
          "Creative eye for landscape and floral arrangement",
          "Business acumen for nursery and export management"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From seed selection to harvest logistics",
        color: RED3,
        content: [
          "Cultivation: Managing soil health and precise irrigation",
          "Breeding: Developing pest-resistant and high-yield varieties",
          "Design: Planning gardens, parks, and urban green spaces",
          "Logistics: Managing the supply chain for perishable goods"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Educational investment in horticulture",
        color: RED4,
        content: [
          "Govt Tuition: ₹20,000 –  ₹1.5 Lakh total for 4 years",
          "Private Tuition: ₹5 Lakh –  ₹12 Lakh total",
          "Living Costs: ₹10,000 –  ₹25,000 monthly",
          "Nursery Tools: ₹5,000 –  ₹15,000 for personal kits"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Funding for future horticulturists",
        color: RED5,
        content: ["Career Pathways: Horticulture","Pathway A: B.Sc Horticulture Route","Step 1: Complete Class 12th with PCB/PCM","Step 2: Pursue B.Sc Horticulture (IARI, UAS, SAUs)","Step 3: Intern at nurseries, plantations, export houses","Step 4: Learn landscaping, greenhouse management, organic farming","Step 5: Pursue M.Sc Horticulture or MBA Agri-Business","Step 6: Join as Horticulture Officer or Plantation Manager","Pathway B: Diploma + Skill-Based Route","Step 1: Complete Class 10th/12th with Science","Step 2: Pursue Diploma in Horticulture (state polytechnics)","Step 3: Gain experience at nurseries, KVKs, farms","Step 4: Learn fruit/vegetable cultivation, drip irrigation, composting","Step 5: Get organic certification or MSME registration","Step 6: Work as Nursery Manager or start own business","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.Sc Horticulture from recognized university","Step 3: Clear ICAR-JRF, pursue M.Sc/Ph.D. Horticulture","Step 4: Research plant breeding, post-harvest technology","Step 5: Clear ARS/NET or State PSC exams","Step 6: Join as Scientist at IIHR/ICAR or Professor"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Pests and climate unpredictability",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1.2+ Crore","Senior / Lead Role (10+ yrs): ₹15–40 LPA","Mid-Level Professional (5–8 yrs): ₹8–15 LPA","Junior / Associate (3–5 yrs): ₹4–8 LPA","Entry Level (0–2 yrs): ₹2.5–5 LPA","Note: Floriculture/export firms pay 20–40% more; metro landscaping pays higher; greenhouse, hydroponics skills boost income.","Where Are the Jobs?","Top Cities/Regions: Bengaluru, Pune, Hyderabad, Delhi-NCR, Himachal, Uttarakhand","Top Industries: Floriculture, Landscaping, Nurseries, Agri-Exports, Govt Horticulture Dept","Global Demand: High in Netherlands, UAE, Australia; demand in greenhouse tech, export farming, urban landscaping","Top Institutions","Government:","Indian Agricultural Research Institute (IARI), New Delhi","Dr. YS Parmar University of Horticulture & Forestry, Solan","University of Horticultural Sciences (UHS), Bagalkot","Tamil Nadu Agricultural University (TNAU), Coimbatore","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Amity University, Noida","Lovely Professional University (LPU), Jalandhar","Shoolini University, Solan","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Horticulture Programs)","National Horticulture Board (NHB) Online Training","Career Opportunities","Conventional","Horticulture Development Officer (State/Central Govt)","Fruit & Vegetable Production Specialist","Plantation Crop Estate Manager","Post-Harvest Technology & Storage Officer","New-Age & AI Driven","AI-Based Crop Disease Detection Specialist","Vertical Farming & Hydroponics Technologist","Drone-Assisted Orchard Management Analyst","IoT-Enabled Smart Greenhouse Systems Engineer","Remote/Entrepreneurship","Organic Farm-to-Table Brand Founder","Freelance Landscape & Garden Design Consultant","Exotic Fruit / Herb Export Business Owner","Online Nursery & Plant E-Commerce Entrepreneur"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap for budding plant scientists",
        color: RED2,
        content: [
          "Master plant anatomy and soil chemistry in school",
          "Start a kitchen garden or maintain a nursery at home",
          "Visit local botanical gardens and high-tech farms"
        ]
      }
    ]
  },
  poultry: {
    slug: "poultry",
    badge: "🍗 Career Exploration for Class 10+",
    heading: "Poultry Science",
    subheading: "Commercial management of birds like chickens and ducks for meat and egg production.",
    whyCards: [
      { icon: "🍗", title: "Protein Source", description: "Vital role in affordable nutrition for millions", borderColor: "#F59E0B" },
      { icon: "🤖", title: "Automation", description: "Automated feeding and climate control systems", borderColor: "#1E40AF" },
      { icon: "📈", title: "Fast Returns", description: "Quick growth cycles and rapid ROI", borderColor: "#6366F1" },
      { icon: "🛡️", title: "Bio-Security", description: "High-tech health management and safety", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Protein Backbone", detail: "Essential for India's food security", color: "bg-amber-100 text-amber-700" },
      { label: "Tech-Driven", detail: "Modern farms use AI and IoT for monitoring", color: "bg-blue-100 text-blue-700" },
      { label: "Massive Industry", detail: "One of the fastest-growing agri-sectors", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "No. 3", label: "Global Egg Producer", gradient: "from-amber-500 to-amber-600" },
      { value: "₹1.2L Cr", label: "Industry Valuation", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Poultry Science?",
        icon: "🍗",
        description: "Science-led bird rearing for food",
        color: RED,
        content: [
          "Focuses on breeding, hatching, and raising domestic birds",
          "Ensures meat and egg production meets health standards",
          "Utilizes advanced genetics and nutritional planning"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🎯",
        description: "Traits for poultry management",
        color: RED2,
        content: [
          "Resilience to work in farm environments and odd hours",
          "Analytical mind to track feed-to-meat conversion rates",
          "Strong focus on hygiene and disease prevention",
          "Entrepreneurial spirit for farm ownership"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Managing bird health and production cycles",
        color: RED3,
        content: [
          "Nutrition: Formulating precise feed balances",
          "Health Control: Implementing vaccines and biosecurity",
          "Operations: Managing automated farm environments",
          "Marketing: Connecting with meat and egg supply chains"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in poultry education",
        color: RED4,
        content: [
          "Diploma/Cert: ₹10,000 –  ₹50,000",
          "Degree Path: ₹3 Lakh –  ₹8 Lakh total",
          "Training: Specialized workshops cost ₹5k-15k"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Support for poultry science",
        color: RED5,
        content: ["Pathway A: B.V.Sc / B.Sc Poultry Science Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.V.Sc or B.Sc Poultry Science (CARI, SAUs)","Step 3: Intern at poultry farms, hatcheries, feed mills","Step 4: Learn broiler/layer management, nutrition, disease control","Step 5: Pursue M.V.Sc Poultry Science or MBA Agri-Business","Step 6: Join as Poultry Manager or Production Specialist","Pathway B: Diploma + Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Attend poultry training at CARI, KVKs, NABARD","Step 3: Learn basics — chick rearing, feeding, vaccination","Step 4: Get FSSAI license and poultry farm registration","Step 5: Apply for subsidies — NABARD, PMMSY, NLM schemes","Step 6: Start own poultry farm — broiler, layer, or desi breeds","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.V.Sc from recognized veterinary college","Step 3: Clear ICAR-JRF, pursue M.V.Sc/Ph.D. Poultry Science","Step 4: Research poultry genetics, nutrition, disease management","Step 5: Clear ARS/NET or State PSC exams","Step 6: Join as Scientist at CARI/ICAR or Professor"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Viral risks and market price swings",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1.5+ Crore","Senior / Lead Role (10+ yrs): ₹15–40 LPA","Mid-Level Professional (5–8 yrs): ₹8–15 LPA","Junior / Associate (3–5 yrs): ₹4–8 LPA","Entry Level (0–2 yrs): ₹2.5–5 LPA","Note: Income varies; poultry farm owners earn more; contract farming stable; metro-integrated supply chains pay higher.","Where Are the Jobs?","Top Regions: Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Punjab, Haryana","Top Industries: Poultry Farms (Suguna, Venky’s), Feed Companies, Hatcheries, Processing Units, Retail Chains","Global Demand: High in Middle East, Africa; demand in poultry management, processing, export logistics, advisory roles","Top Institutions","Government:","Central Poultry Development Organisation (CPDO), Chandigarh","Indian Veterinary Research Institute (IVRI), Bareilly","Guru Angad Dev Veterinary & Animal Sciences University (GADVASU), Ludhiana","Tamil Nadu Veterinary & Animal Sciences University (TANUVAS), Chennai","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Lovely Professional University (LPU), Jalandhar","Amity University, Noida","Shoolini University, Solan","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Poultry Farming Programs)","National Institute of Open Schooling (NIOS) Poultry Training","Career Opportunities","Conventional","Poultry Farm Production Manager","Poultry Feed Formulation Specialist","Poultry Health & Disease Management Officer","Hatchery Operations & Breeding Manager","New-Age & AI Driven","AI-Powered Poultry Flock Monitoring Analyst","IoT-Based Smart Poultry House Technologist","Automated Egg Grading & Sorting Systems Engineer","Data-Driven Poultry Growth Optimization Specialist","Remote/Entrepreneurship","Country / Desi Poultry Brand Founder","Freelance Poultry Farm Setup Consultant","Online Poultry Farming Training Academy Creator","Value-Added Poultry Products Startup Entrepreneur"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap to poultry expertise",
        color: RED2,
        content: [
          "Study avian biology and genetics in school",
          "Visit poultry research labs or modern farms",
          "Learn basic farm accounting and stock management"
        ]
      }
    ]
  },
  sericulture: {
    slug: "sericulture",
    badge: "🐛 Career Exploration for Class 10+",
    heading: "Sericulture",
    subheading: "Cultivation of silkworms to produce luxury silk fiber, supporting rural economies.",
    whyCards: [
      { icon: "🐛", title: "Silk Artistry", description: "Creating raw silk from silkworm cocoons", borderColor: "#F59E0B" },
      { icon: "🌾", title: "Rural Growth", description: "Empowering millions of rural households", borderColor: "#1E40AF" },
      { icon: "👗", title: "Eco-Luxury", description: "Sustainable alternative to synthetic fabrics", borderColor: "#6366F1" },
      { icon: "🌍", title: "Export Power", description: "India is a major global silk exporter", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Silk Hub", detail: "India is the 2nd largest producer globally", color: "bg-amber-100 text-amber-700" },
      { label: "High Employment", detail: "80 lakh+ people employed in silk industry", color: "bg-blue-100 text-blue-700" },
      { label: "Rural Impact", detail: "Vital for rural and tribal livelihoods", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "No. 2", label: "Global Producer", gradient: "from-amber-500 to-amber-600" },
      { value: "8M+", label: "People Employed", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Sericulture?",
        icon: "🐛",
        description: "Production of raw silk via silkworms",
        color: RED,
        content: [
          "Focuses on rearing silkworms and mulberry cultivation",
          "Integral to India's textile and luxury heritage",
          "Combines agriculture with high-end fabric technology"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for sericulture success",
        color: RED2,
        content: [
          "Interest in entomology (study of insects) and biology",
          "Patience for intensive indoor rearing processes",
          "Deep empathy for rural development and craft",
          "Eye for detail in silk quality and grading"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From mulberry farms to reeling units",
        color: RED3,
        content: [
          "Farming: Cultivating mulberry leaves for worm feed",
          "Rearing: Managing temperature for silkworm growth",
          "Harvest: Collecting cocoons for silk extraction",
          "Reeling: Unwinding silk threads using machines"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in sericulture training",
        color: RED4,
        content: [
          "Certificate/Short Course: ₹5,000 –  ₹20,000",
          "B.Sc Sericulture: ₹2 Lakh –  ₹5 Lakh total",
          "Govt training is often free or highly subsidized"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Grants for silk science",
        color: RED5,
        content: ["Pathway A: B.Sc Sericulture Route","Step 1: Complete Class 12th with PCB/PCM","Step 2: Pursue B.Sc Sericulture (Mysore University, UAS, SAUs)","Step 3: Intern at silk farms, CSB centres, reeling units","Step 4: Learn silkworm rearing, mulberry cultivation, silk reeling","Step 5: Pursue M.Sc Sericulture or MBA Agri-Business","Step 6: Join as Sericulture Officer or Silk Production Manager","Pathway B: Diploma + Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Attend training at CSB, KVKs, state sericulture departments","Step 3: Learn basics — mulberry farming, worm rearing, cocoon harvesting","Step 4: Get MSME registration and silk mark certification","Step 5: Apply for subsidies — CSB, NABARD, CDP schemes","Step 6: Start own silk farm or cocoon trading business","Pathway C: Research + Government Route","Step 1: Complete Class 12th with PCB","Step 2: Pursue B.Sc Sericulture/Zoology from recognized university","Step 3: Clear ICAR-JRF, pursue M.Sc/Ph.D. in Sericulture","Step 4: Research silkworm genetics, disease control, silk technology","Step 5: Clear ARS/NET or State PSC exams","Step 6: Join as Scientist at CSRTI/CSB or Professor"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Pests and labor intensity",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹25 LPA –  ₹1 Crore","Senior / Lead Role (10+ yrs): ₹10–25 LPA","Mid-Level Professional (5–8 yrs): ₹5–10 LPA","Junior / Associate (3–5 yrs): ₹3–6 LPA","Entry Level (0–2 yrs): ₹2–4 LPA","Note: Income varies; entrepreneurs earn more via silk production; govt schemes + export markets boost earnings.","Where Are the Jobs?","Top Regions: Karnataka, Andhra Pradesh, Tamil Nadu, West Bengal, Assam, Jammu & Kashmir","Top Industries: Silk Production, Handloom/Textile, Sericulture Dept, KVIC, Export Firms","Global Demand: High in China, Italy, Japan; demand in silk processing, export trade, rural entrepreneurship","Top Institutions","Government:","Central Silk Board (CSB), Bangalore","Central Sericultural Research & Training Institute (CSRTI), Mysuru","University of Agricultural Sciences (UAS), Bangalore","Assam Agricultural University (AAU), Jorhat","Private:","Sam Higginbottom University (SHUATS), Prayagraj","Lovely Professional University (LPU), Jalandhar","Amity University, Noida","Shoolini University, Solan","Online:","ICAR e-courses","Swayam/NPTEL","IGNOU (Sericulture Programs)","Central Silk Board (CSB) Online Training","Career Opportunities","Conventional","Sericulture Development Officer (State/Central Govt)","Silkworm Rearing & Breeding Specialist","Silk Reeling & Processing Unit Manager","Central Silk Board Research Scientist","New-Age & AI Driven","AI-Based Silkworm Disease Detection Analyst","IoT-Enabled Smart Silkworm Rearing Technologist","Genetic Improvement & Biotech Silk Researcher","Automated Silk Quality Grading Systems Engineer","Remote/Entrepreneurship","Handloom Silk Brand Founder & Exporter","Freelance Sericulture Project Consultant","Online Silk Craft & Training Platform Creator","Organic / Ahimsa Silk Startup Entrepreneur"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap to silk mastery",
        color: RED2,
        content: [
          "Learn about insect biology and textile fibers in school",
          "Visit silk cooperatives or Government Grainage centers",
          "Study the history of silk trade and global fashion trends"
        ]
      }
    ]
  },
  vertical_farming: {
    slug: "vertical_farming",
    badge: "🏙️ Career Exploration for Class 10+",
    heading: "Vertical Farming",
    subheading: "Growing crops in stacked layers indoors using hydroponics, aeroponics, and IoT.",
    whyCards: [
      { icon: "🏙️", title: "Urban Future", description: "Grow food in cities with zero soil requirement", borderColor: "#F59E0B" },
      { icon: "💧", title: "90% Water Savings", description: "Massive eco-efficiency and water conservation", borderColor: "#1E40AF" },
      { icon: "🧪", title: "Tech-Savvy", description: "Control nutrients, light, and climate precisely", borderColor: "#6366F1" },
      { icon: "🔋", title: "Year-Round", description: "Harvest fresh food regardless of outside weather", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Soilless Farming", detail: "Grow plants in air or nutrient-rich water", color: "bg-amber-100 text-amber-700" },
      { label: "Urban Impact", detail: "Solving fresh food access in crowded cities", color: "bg-blue-100 text-blue-700" },
      { label: "High-Tech", detail: "Requires knowledge of IoT and climate control", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "90%", label: "Water Saved", gradient: "from-amber-500 to-amber-600" },
      { value: "₹40+ LPA", label: "Top Designer Salary", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is Vertical Farming?",
        icon: "🏙️",
        description: "High-tech urban agriculture",
        color: RED,
        content: [
          "Growing crops in vertically stacked layers without soil",
          "Uses Hydroponics (water) or Aeroponics (mist) for nutrients",
          "Essential for future food security in dense urban areas"
        ]
      },
      {
        id: "2",
        title: "Who Should Consider This Career?",
        icon: "🧪",
        description: "Traits for the future farmer",
        color: RED2,
        content: [
          "Interest in both agriculture and digital technology",
          "Precision-oriented mind for nutrient management",
          "Passion for sustainability and resource conservation",
          "Comfortable with IoT, sensors, and LED lighting tech"
        ]
      },
      {
        id: "3",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Designing and managing indoor farms",
        color: RED3,
        content: [
          "System Design: Placing layers and installing lights/pipes",
          "Monitoring: Tracking pH, water temp, and light via tablets",
          "Nutrients: Mixing precise mineral cocktails for plants",
          "Maintenance: Maintaining complex pumps and electronics"
        ]
      },
      {
        id: "4",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Cost of vertical farming education",
        color: RED4,
        content: [
          "Certifications: ₹50,000 –  ₹1.5 Lakh for specialist courses",
          "Degree Path: ₹4 Lakh –  ₹10 Lakh (B.Tech Agri/Electronics)",
          "Small Scale Kits: ₹5k-20k for home experimentation"
        ]
      },
      {
        id: "5",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Funding for agri-tech innovators",
        color: RED5,
        content: ["Pathway A: B.Sc/B.Tech Agriculture Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Pursue B.Tech Agriculture / B.Sc Horticulture (IARI, SAUs)","Step 3: Intern at vertical farms — UrbanKisaan, Barton Breeze","Step 4: Learn hydroponics, aeroponics, LED grow systems, IoT","Step 5: Pursue M.Tech CEA or PG in Agri-Tech","Step 6: Join as Vertical Farm Manager or CEA Specialist","Pathway B: Skill-Based / Entrepreneurship Route","Step 1: Complete Class 10th/12th (any stream)","Step 2: Take hydroponics/vertical farming training courses online/offline","Step 3: Learn basics — nutrient solutions, climate control, crop cycles","Step 4: Get FSSAI license and MSME/startup registration","Step 5: Apply for subsidies — NABARD, RKVY, agri-startup schemes","Step 6: Start own vertical farm or urban microgreens business","Pathway C: Research + Agri-Tech Route","Step 1: Complete Class 12th with PCM/PCB","Step 2: Pursue B.Tech Agricultural Engineering / Biotechnology","Step 3: Clear GATE, pursue M.Tech in CEA/Protected Cultivation","Step 4: Research AI-based farming, sensor technology, crop optimization","Step 5: Work at agri-tech startups — CropIn, Clover, Bioprime","Step 6: Join as Agri-Tech Researcher or Innovation Scientist"]
      },
      {
        id: "6",
        title: "Key Challenges",
        icon: "⚠️",
        description: "High costs and energy needs",
        color: RED,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹2+ Crore","Senior / Lead Role (10+ yrs): ₹20–60 LPA","Mid-Level Professional (5–8 yrs): ₹10–20 LPA","Junior / Associate (3–5 yrs): ₹5–10 LPA","Entry Level (0–2 yrs): ₹3–7 LPA","Note: Startup ecosystem pays higher; metro cities lead; skills in hydroponics, IoT, automation boost salaries significantly.","Where Are the Jobs?","Top Cities: Bengaluru, Hyderabad, Pune, Delhi-NCR, Mumbai, Chennai","Top Industries: Agri-tech startups (UrbanKisaan, Barton Breeze), Hydroponics Firms, Retail Chains, Food Supply Startups","Global Demand: High in UAE, Singapore, USA; demand in smart farming, controlled environment agriculture, remote monitoring roles","Top Institutions","Government:","Indian Agricultural Research Institute (IARI), New Delhi","Indian Institute of Horticultural Research (IIHR), Bangalore","Tamil Nadu Agricultural University (TNAU), Coimbatore","National Institute of Plant Genome Research (NIPGR), New Delhi","Private:","Amity University, Noida","Lovely Professional University (LPU), Jalandhar","Shoolini University, Solan","SRM Institute of Science and Technology, Chennai","Online:","Swayam/NPTEL","ICAR e-courses","Coursera (Vertical Farming & Urban Agriculture Courses)","Udemy (Vertical Farming & Hydroponics Programs)","Career Opportunities","Conventional","Vertical Farm Operations Manager","Controlled Environment Agriculture (CEA) Technician","Nutrient Solution & Fertigation Specialist","Vertical Farm Crop Production Supervisor","New-Age & AI Driven","AI-Powered Climate Control Systems Engineer","IoT-Based Automated Vertical Farm Technologist","Machine Learning Crop Yield Optimization Analyst","LED Grow Light & Photobiology Research Scientist","Remote/Entrepreneurship","Urban Vertical Farm Startup Founder","Freelance Hydroponics / Aeroponics Consultant","Online Vertical Farming Course & Training Creator","Microgreens & Specialty Herbs Brand Entrepreneur"]
      },
      {
        id: "7",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Building your indoor farming base",
        color: RED2,
        content: [
          "Assemble a small DIY hydroponic kit at home",
          "Learn basics of IoT sensors and Arduino programming",
          "Study plant physiology and nutrient absorption in science"
        ]
      }
    ]
  },

  // ─── FORENSIC SCIENTIST ──────────────────────────────────────────
  forensic_scientist: {
    slug: "forensic_scientist",
    badge: "🔬 Career Exploration for Class 10+",
    heading: "The Science of Truth",
    subheading:
      "A Forensic Scientist applies scientific principles to legal problems. You are the voice of the silent victims—using chemistry, biology, physics, and computer science to analyze evidence and ensure justice. In today's India, with the new Bharatiya Nyaya Sanhita laws emphasizing forensic evidence, this career has moved to center stage.",
    whyCards: [
      { icon: "🔬", title: "Justice Seeker", description: "Protect the innocent and ensure the guilty face justice", borderColor: "#F59E0B" },
      { icon: "🧬", title: "Science-Driven", description: "Use cutting-edge DNA, ballistics, and digital forensics", borderColor: "#1E40AF" },
      { icon: "📈", title: "Growing Demand", description: "12–15% annual growth driven by government initiatives", borderColor: "#6366F1" },
      { icon: "🌐", title: "Global Recognition", description: "Skills recognized internationally in 190+ countries", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹4L–₹50L+ annually", color: "bg-amber-100 text-amber-700" },
      { label: "Market Growth", detail: "12–15% annual job growth", color: "bg-blue-100 text-blue-700" },
      { label: "Duration", detail: "3–5 years (B.Sc + M.Sc)", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹4L–₹50L+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "12–15% CAGR", label: "Job Market Growth", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "🔬",
        description: "Understanding forensic science and its role in the justice system",
        color: RED,
        content: [
          "Forget what you see in movies where a detective solves a murder in 45 minutes using a magic computer. Real Forensic Science is slower, harder, but infinitely more important.",
          "A Forensic Scientist applies scientific principles to legal problems. You are the voice of the silent victims. You use chemistry, biology, physics, and computer science to analyze evidence found at crime scenes—whether it's a drop of blood, a deleted email, a shattered bullet, or a fake signature.",
          "In today's India, the justice system relies heavily on 'evidence-based conviction' rather than just witness statements. With the new Bharatiya Nyaya Sanhita (BNS) laws emphasizing forensic evidence in serious crimes, this career has moved from the sidelines to the center stage of the Indian justice system.",
          "You don't just work in a lab; you protect the innocent and ensure the guilty face justice.",
          "Forensic scientists work in government labs, police departments, private firms, and international organizations."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working forensic scientist",
        color: RED2,
        content: [
          "08:30 AM -  Arjun clocks in at the State Forensic Science Laboratory (FSL) in Lucknow: The smell of chemicals hangs faintly in the air. He dons his white coat and checks the 'Chain of Custody' log. A sealed packet arrived last night from a robbery case.",
          "10:00 AM -  Lab Analysis. Arjun specializes in Serology (body fluids): He carefully opens the packet containing a stained shirt. Using a high-powered microscope and chemical reagents, he tests the stain. Is it blood? Yes. Is it human? Yes. He prepares the sample for DNA profiling.",
          "01:00 PM -  Lunch :He eats quickly with colleagues from the Ballistics division. They discuss a new case involving a country-made pistol.",
          "02:30 PM -  Court Summons: Arjun has to testify in the High Court today regarding a case he analyzed two years ago. He stands in the witness box, facing a barrage of questions from the defense lawyer. 'Dr. Arjun, are you 100% sure the sample wasn't contaminated?' He calmly explains his scientific process.",
          "05:00 PM -  Back to the Lab: A rush request comes in from the Cyber Cell. They need help lifting latent fingerprints from a seized hard drive before they analyze the data. Arjun dusts the drive using magnetic powder, photographs the prints, and uploads them to the database.",
          "06:30 PM -  Paperwork: He spends an hour writing a detailed report. In forensics, if you didn't document it, you didn't do it. He logs off, mentally tired but knowing his work today moved three cases closer to justice."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited for forensic science",
        color: RED3,
        content: [
          "The Skeptic: You don't take things at face value. You need proof.",
          "The Detail-Obsessive: You notice if a picture frame is tilted by 2 degrees.",
          "The Iron Stomach: Can you handle bad smells, blood, and disturbing images without fainting? (This is non-negotiable for bio-forensics).",
          "The Patient Monk: Real lab work is repetitive. You might test 50 samples to get 1 match.",
          "Integrity: You must be unbribable and objective.",
          "Communication: Ability to explain complex science to a judge.",
          "Tech-Savvy: Comfortable with lab equipment, databases, and increasingly, coding."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📊",
        description: "Core duties of a forensic scientist",
        color: RED4,
        content: [
          "The workflow generally follows the 'Locard's Exchange Principle' (Every contact leaves a trace):",
          "1. Evidence Collection: Carefully bagging items without contamination.",
          "2. Analysis: Testing the evidence in a controlled lab environment (e.g., matching a bullet striation to a gun).",
          "3. Interpretation: Connecting the dots. 'The soil on the shoe matches the soil from the garden, placing the suspect at the scene.'",
          "4. Reporting: Writing a legally admissible report.",
          "5. Testimony: Defending your findings in a court of law.",
          "6. Documentation: Maintaining chain of custody and detailed records."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become a forensic scientist in India",
        color: RED5,
        content: [
          "Pathway A: The Specialized Route (Best for core Forensics):",
          "  • Class 12: Science Stream (PCB or PCM) with at least 50–60%",
          "  • Entrance Exam: NFAT (National Forensic Admission Test) or CUET-UG",
          "  • Undergraduate: B.Sc. in Forensic Science (3–4 Years) or B.Sc. -  M.Sc. Integrated (5 Years)",
          "  • Postgraduate: M.Sc. in Forensic Science (Specializing in DNA, Ballistics, or Cyber)",
          "Pathway B: The General Science Route (Safety Net):",
          "  • Undergraduate: B.Sc. in Chemistry/Botany/Zoology/Physics",
          "  • Postgraduate: M.Sc. in Forensic Science",
          "Pathway C: The Cyber/Digital Route (Fastest Growth):",
          "  • Undergraduate: B.Tech in CS/BCA/B.Sc. IT",
          "  • Postgraduate: M.Sc. in Digital Forensics or CHFI certification"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and job market data for forensic scientists",
        color: RED,
        content: [
          "Growth: The sector is witnessing 12–15% annual growth, driven by the government's push to set up mobile forensic units in every district.",
          "Hiring Trends: High demand for Cyber Forensic Experts and DNA Analysts.",
          "Salary Ranges (Annual CTC in INR):",
          "  • Entry-Level (0–2 years): ₹4L–₹6L (Govt), ₹3L–₹5L (Private)",
          "  • Mid-Level (3–7 years): ₹8L–₹12L (Govt), ₹7L–₹15L (Private)",
          "  • Senior-Level (8–12 years): ₹14L–₹20L (Govt), ₹18L–₹30L (Private)",
          "  • Leadership: ₹25L+ (Govt), ₹50L+ (Consulting)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Industries and sectors hiring forensic scientists",
        color: RED2,
        content: [
          "Government (The Big Recruiters):",
          "  • CFSLs: Central Forensic Science Laboratories (under CBI)",
          "  • SFSLs: State Forensic Science Laboratories (one in almost every state capital)",
          "  • Police Departments: Crime Scene Units",
          "  • Intelligence Bureau (IB) & NIA",
          "Private Sector:",
          "  • Banks & Insurance: Investigating fraud and forged documents",
          "  • Cyber Security Firms: Investigating data breaches (KPMG, Deloitte, PwC)",
          "  • Private Detective Agencies",
          "Geography: Hubs in Delhi, Gandhinagar (Gujarat), Hyderabad, Mumbai, Bangalore."
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required for forensic science education",
        color: RED3,
        content: [
          "NFSU (Govt): ₹2.5L–₹4L (M.Sc total)",
          "State Universities (DU/Panjab): ₹20,000–₹50,000 (Very affordable)",
          "Private Universities (Amity/LPU): ₹6L–₹10L (Good infrastructure but pricey)",
          "Additional Costs: ₹10,000 for lab coats, records, field visits",
          "Living Costs: ₹15,000–₹25,000 per month in major cities",
          "Study Materials: ₹50,000–₹1L for specialized courses",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support available for forensic science students",
        color: RED5,
        content: [
          "INSPIRE Scholarship (SHE): For top 1% students in Class 12 Boards pursuing Basic/Natural Sciences",
          "NFSU Merit Scholarship: Specific to NFSU students based on semester performance",
          "Post-Matric Scholarship: For SC/ST/OBC students by State Governments",
          "Police Welfare Scholarships: Some states offer scholarships to wards of police personnel",
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional degrees",
          "Institutional: Need-based financial assistance at various universities",
          "Merit-Based: Top performers in entrance exams receive full or partial scholarships"
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "Certifications:",
          "  • UGC-NET (Forensic Science): Mandatory if you want to become a Professor or go into research (JRF)",
          "  • CHFI (Computer Hacking Forensic Investigator): Essential for digital forensics",
          "  • CFE (Certified Fraud Examiner): Great for corporate jobs",
          "Professional Bodies:",
          "  • Indian Academy of Forensic Medicine (IAFM)",
          "  • International Society of Forensic Genetics (ISFG)",
          "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually"
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse career paths for forensic scientists",
        color: RED2,
        content: [
          "Conventional Careers:",
          "  • Forensic Toxicologist: Finds poisons/drugs in body fluids",
          "  • Ballistics Expert: Studies guns and bullets",
          "  • Forensic Serologist: Analyzes blood and biological stains",
          "New-Age Careers:",
          "  • Digital Forensic Analyst: Recovering data from smashed phones or cloud servers",
          "  • Forensic Odontologist: Identifying victims via dental records",
          "  • Forensic Psychologist: Profiling criminals' minds",
          "Freelancing:",
          "  • Questioned Document Examiner: Checking fake wills/cheques",
          "  • Legal Consultant: Advising lawyers on scientific validity of evidence"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges to be aware of in the forensic science profession",
        color: RED3,
        content: [
          "The 'Yuck' Factor: You will deal with decomposed bodies, maggots, and gruesome crime scenes. It is not for the faint-hearted.",
          "Slow Justice: You might analyze a sample today, but the court case might happen 5 years later. It requires immense patience.",
          "Backlog: Indian labs are overburdened. You may have hundreds of pending cases, leading to high work pressure.",
          "Smell: Labs often smell of chemicals (Formalin) and biological decay.",
          "Emotional Toll: Exposure to disturbing crime scenes can affect mental health.",
          "Long Hours: During high-profile cases, you might work extended hours.",
          "Accuracy Pressure: One mistake could send an innocent person to jail."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of the forensic science profession",
        color: RED4,
        content: [
          "Portable Forensics: 'Lab-on-a-chip' devices will allow police to test DNA/Drugs instantly at the crime scene, rather than sending it to a lab.",
          "Digital Forensics Explosion: As crime moves to the Metaverse and Crypto, 'Blockchain Forensics' will become a massive field.",
          "AI in Forensics: AI tools will be used to match fingerprints and faces 100x faster than humans.",
          "Regulatory Evolution: New regulations on cybercrime and digital evidence will create specialized roles.",
          "Automation: Routine analysis will be automated; strategic interpretation will be premium.",
          "Global Opportunities: Indian forensic scientists increasingly sought in international markets.",
          "Salary Growth: Expected 10–12% annual salary growth in the next decade."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Steps to build a strong foundation for a forensic science career",
        color: RED5,
        content: [
          "Read Mysteries: Read Sherlock Holmes or watch Forensic Files. Try to guess the 'how' before they reveal it.",
          "Master Biology & Chemistry: Pay attention to practicals. Learning how to use a microscope properly is half the job.",
          "Photography: Learn to take clear, detailed photos. Crime scene photography is a critical skill.",
          "Logic Puzzles: Solve 'Lateral Thinking' puzzles to train your brain to look for non-obvious answers.",
          "Learn Python: Basic coding skills will give you a competitive edge.",
          "Case Studies: Analyze real forensic cases and understand the methodology.",
          "Networking: Join science clubs and attend forensic seminars."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "⭐",
        description: "Inspiring forensic scientists who shaped India's justice system",
        color: RED,
        content: [
          "Dr. J.M. Vyas: The Vice-Chancellor of NFSU. He is a titan in the field who helped transform Gujarat Forensic Science University into an Institute of National Importance.",
          "Dr. T.D. Dogra: A legendary expert from AIIMS who handled high-profile cases like the assassination of Indira Gandhi and the Batla House encounter.",
          "Dr. Rukmani Krishnamurthy: Former Director of Directorate of Forensic Science Labs, Maharashtra, and a pioneer in forensic psychology and crisis management.",
          "Dr. Rajesh Verma: Leading digital forensics expert who has trained hundreds of police officers in cyber forensics.",
          "Dr. Anil Sharma: Renowned ballistics expert who has solved numerous high-profile cases through innovative forensic techniques."
        ]
      }
    ]
  },

  // ─── LAWYER / LEGAL PROFESSIONAL ─────────────────────────────────
  lawyer: {
    slug: "lawyer",
    badge: "⚖️ Career Exploration for Class 10+",
    heading: "The Defenders of Justice",
    subheading:
      "Lawyers are problem-solvers and strategists who understand the rules governing society. They help individuals, companies, and governments navigate complex legal systems. In today's India, lawyers are the 'social engineers' who draft contracts, protect rights, and ensure justice is delivered.",
    whyCards: [
      { icon: "⚖️", title: "Justice Seeker", description: "Protect rights and ensure justice is delivered", borderColor: "#F59E0B" },
      { icon: "🧠", title: "Problem Solver", description: "Strategy, negotiation, and critical thinking daily", borderColor: "#1E40AF" },
      { icon: "📈", title: "High Earning", description: "₹12L–₹1Cr+ for experienced professionals", borderColor: "#6366F1" },
      { icon: "🌐", title: "Global Opportunities", description: "Indian lawyers in demand worldwide", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹2.5L–₹1Cr+ annually", color: "bg-amber-100 text-amber-700" },
      { label: "Market Growth", detail: "10–12% annual growth in corporate law", color: "bg-blue-100 text-blue-700" },
      { label: "Duration", detail: "5-year integrated or 3-year LLB", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹2.5L–₹1Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "10–12% CAGR", label: "Corporate Law Growth", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "⚖️",
        description: "Understanding the lawyer's role in society and the justice system",
        color: RED,
        content: [
          "When you hear the word 'Lawyer,' you might picture a person in a black coat shouting 'Objection!' in a courtroom. While that happens, it is only 10% of the job.",
          "A career in law is primarily about problem-solving and strategy. Lawyers are the experts who understand the rules (laws) that govern our society and help individuals, companies, and governments navigate them.",
          "Whether it is helping a startup register its logo (Intellectual Property), defending an innocent person in court (Criminal Law), or helping two companies merge into one (Corporate Law), a lawyer is the architect of the deal and the protector of rights.",
          "In today's India, with a booming economy and a complex constitution, lawyers are the 'social engineers.' They don't just fight cases; they draft the contracts that build our highways, protect our data privacy, and ensure justice is delivered."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working lawyer",
        color: RED2,
        content: [
          "09:00 AM -  Ananya reaches her office at a Law Firm in New Delhi. There is no court hearing today, so she is in 'Drafting Mode.' She grabs a coffee and opens her laptop. A client—a large shoe company—is being sued for a trademark violation. She needs to draft a 'Written Statement' (a formal reply) to defend them.",
          "11:00 AM -  Research time. She logs into Manupatra (a legal search engine) to find past Supreme Court judgments that support her client's case. Law is built on 'precedents'—what judges decided in the past matters today. She reads through 50 pages of judgments to find one golden paragraph she can use.",
          "01:30 PM -  Lunch with colleagues. They discuss the new Bharatiya Nyaya Sanhita (BNS) laws that recently replaced the old penal code. Staying updated is survival in this field.",
          "03:00 PM -  Client Meeting. The CEO of a tech startup walks in. He wants to know if his new app violates any privacy laws. She explains complex legal rules in simple English. She isn't just a lawyer here; she is a business advisor.",
          "05:00 PM -  Court Clerk visit. She rushes to the Delhi High Court registry to physically file a petition before the counter closes. The digital world hasn't fully replaced the physical paperwork yet!",
          "07:30 PM -  Back at the desk. She reviews a contract for a senior partner. She spots a tiny error in Clause 4 that could have cost the client lakhs. She fixes it. Precision is her superpower.",
          "08:30 PM -  Logs off. It was a long day, but she feels the thrill of knowing her arguments might win the case next week."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited for a legal career",
        color: RED3,
        content: [
          "The Bookworm: Do you have the patience to read 100 pages to find one important sentence? (Law involves a lot of reading).",
          "The Debater: Do you look at both sides of an argument naturally? Can you argue for a side you personally disagree with?",
          "The Detail-Oriented: Do you spot typos in menus or loopholes in school rules?",
          "The Resilient: Can you handle losing? You will lose cases. Can you bounce back?",
          "Oral Advocacy: Strong speaking and persuasion skills.",
          "Empathy: Especially for family/criminal law, understanding client needs.",
          "High Stress Tolerance: Legal work can be intense and demanding."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📋",
        description: "Core duties of a lawyer",
        color: RED4,
        content: [
          "A lawyer's work generally follows the 'ACDR' cycle:",
          "1. Advisory: Listening to the client's problem and telling them where they stand legally.",
          "2. Compliance/Drafting: Writing the contracts, wills, or petitions. This is 60% of the work.",
          "3. Dispute Resolution: Negotiating with the other side to settle without going to court.",
          "4. Representation: If settlement fails, arguing the case before a Judge or Tribunal.",
          "5. Documentation: Maintaining detailed records and legal files.",
          "6. Continuous Learning: Staying updated on new laws and precedents."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become a lawyer in India",
        color: RED5,
        content: [
          "Pathway A: The 5-Year Integrated Route (After Class 12) -  Most Popular:",
          "  • Class 12: Any stream with 45%+ marks",
          "  • Entrance Exam: CLAT (for 24 NLUs), AILET (for NLU Delhi), LSAT-India, or MHCET Law",
          "  • Degree: B.A. LL.B (Hons), B.B.A. LL.B (Hons), or B.Com LL.B",
          "  • Duration: 5 Years",
          "Pathway B: The 3-Year LLB Route (After Graduation):",
          "  • Graduation: Complete any Bachelor's degree",
          "  • Entrance Exam: CUET-PG, NLSAT, or State exams",
          "  • Degree: LL.B",
          "  • Duration: 3 Years",
          "Pathway C: The Company Secretary (CS) Route (Corporate Focus):",
          "  • Many students pursue CS along with their Law degree for corporate expertise"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and job market data for lawyers",
        color: RED,
        content: [
          "Market Trends: The legal market is shifting towards Specialization. General lawyers are less in demand compared to experts in Data Privacy, Insolvency, and M&A.",
          "Hiring: Corporate hiring is robust, growing at 10–12% annually. Litigation remains competitive but stable.",
          "Salary Ranges (Annual CTC in INR):",
          "  • Entry-Level (0–2 years): ₹12L–₹18L (Corporate), ₹2.5L–₹4.5L (Litigation)",
          "  • Mid-Level (3–6 years): ₹25L–₹45L (Corporate), ₹6L–₹15L (Litigation)",
          "  • Senior (7–10 years): ₹50L–₹80L (Corporate), ₹15L–₹40L+ (Litigation)",
          "  • Leadership: ₹1Cr+ (Partner/Senior Counsel)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Industries and sectors hiring lawyers",
        color: RED2,
        content: [
          "Top Industries:",
          "  • Law Firms: Shardul Amarchand Mangaldas, Cyril Amarchand Mangaldas, Trilegal, Khaitan & Co",
          "  • Corporate In-House: Legal teams of Google, Tata, Reliance, ICICI Bank",
          "  • LPOs (Legal Process Outsourcing): Pangea3, QuisLex",
          "  • Judiciary: Judges in Lower Courts (via PCS-J exam)",
          "Top Cities: Mumbai (Corporate/Finance Law), Delhi (Litigation), Bangalore (Tech Law)",
          "International: Indian lawyers with dual qualification in high demand in London and Dubai"
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required for legal education",
        color: RED3,
        content: [
          "National Law Universities (NLUs): ₹12L–₹18L (5 years)",
          "Private Universities (Jindal/Symbiosis): ₹20L–₹40L (5 years)",
          "Government Colleges (DU/GLC Mumbai): ₹20,000–₹1L (Extremely affordable, high ROI)",
          "Living Costs: ₹2L per year for hostel/mess in metro cities",
          "Study Materials: ₹50,000–₹1L for books and online resources",
          "Entrance Exam Fees: ₹5,000–₹10,000 per exam",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support available for law students",
        color: RED5,
        content: [
          "IDIA (Increasing Diversity by Increasing Access): Specifically trains and funds underprivileged students for CLAT",
          "Aditya Birla Scholarship: For top rankers in CLAT joining top NLUs (covers full fees)",
          "University Scholarships: Most NLUs have 'Means-cum-Merit' waivers for students with family income < ₹6–8 LPA",
          "State Schemes: E.g., Post-Metric Scholarship for SC/ST students",
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional degrees",
          "Institutional: Need-based financial assistance at various universities",
          "Merit-Based: Top performers in entrance exams receive full or partial scholarships"
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "AIBE (All India Bar Examination): Mandatory. After graduating, you must pass this open-book exam to practice law in Indian courts.",
          "Bar Council of India (BCI): The regulatory body you must register with.",
          "State Bar Councils: You enroll in your specific state (e.g., Bar Council of Delhi).",
          "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually.",
          "Professional Associations: Indian Bar Association, various state bar associations.",
          "International Recognition: Indian lawyers can pursue dual qualifications (e.g., Solicitor exam in UK)."
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse career paths for lawyers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "  • Litigator: Arguing in court (Civil/Criminal)",
          "  • Corporate Lawyer: Mergers, contracts, banking deals",
          "  • Judge: Clearing the Judicial Services Exam (PCS-J) to become a Civil Judge",
          "New-Age Careers:",
          "  • Cyber Lawyer: Handling hacking, crypto, and data theft cases",
          "  • Sports Lawyer: Managing athlete contracts and IP rights",
          "  • Space Law: Dealing with satellite regulations",
          "Freelancing:",
          "  • Legal Journalism: Writing for LiveLaw or Bar & Bench",
          "  • Contract Drafting: Freelancing for startups via Upwork"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges to be aware of in the legal profession",
        color: RED3,
        content: [
          "The 'Struggle' Period: If you choose litigation, the first 3–5 years are tough. Pay is low (sometimes ₹10k/month), and work is hard. You need family support or savings.",
          "Nepotism: It helps to have a 'Godfather' in the industry, though first-generation lawyers are increasingly breaking this barrier through corporate firms.",
          "Mental Health: Long hours (12–14 hours/day in firms) can lead to burnout.",
          "Toxic Culture: Courtrooms can be aggressive environments.",
          "Competitive Market: High competition for top positions and cases.",
          "Continuous Learning: Laws change frequently; staying updated is mandatory."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of the legal profession",
        color: RED4,
        content: [
          "AI is the New Assistant: Tools like Vidur and Harvey are automating legal research. Lawyers won't be replaced by AI, but lawyers who use AI will replace those who don't.",
          "Virtual Courts: Post-COVID, minor hearings often happen online. Being tech-savvy is now a requirement.",
          "ODR (Online Dispute Resolution): Small disputes (e-commerce refunds, challans) will increasingly be settled online without entering a courtroom.",
          "Specialization: Demand for specialists in Data Privacy, ESG, and Blockchain law will surge.",
          "Global Opportunities: Indian lawyers increasingly sought in international markets.",
          "Salary Growth: Expected 10–12% annual salary growth in the next decade."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Steps to build a strong foundation for a legal career",
        color: RED5,
        content: [
          "Read the Newspaper: Law is about what's happening now. Read the Editorial page of The Hindu or Indian Express.",
          "Debating / MUNs: Join Model United Nations. It teaches you to argue a point you might not personally agree with—a core legal skill.",
          "Improve English: Work on your vocabulary. Law uses precise language.",
          "Visit a Court: If possible, go sit in a local District Court for 2 hours. It's an eye-opener.",
          "Logic Puzzles: Solve lateral thinking puzzles to train your brain.",
          "Case Studies: Read about famous Indian court cases.",
          "Networking: Join debate clubs and attend legal seminars."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "⭐",
        description: "Inspiring lawyers who shaped India's legal landscape",
        color: RED,
        content: [
          "Dr. D.Y. Chandrachud: Chief Justice of India (CJI). Known for progressive judgments on privacy and gender rights.",
          "Harish Salve: One of India's most expensive and brilliant corporate lawyers. Represented India at the International Court of Justice (ICJ).",
          "Menaka Guruswamy: A senior advocate famous for leading the fight against Section 377 (decriminalizing homosexuality).",
          "Zia Mody: Founder of AZB & Partners. A corporate law giant who dominates the Merger & Acquisition space.",
          "Ram Jethmalani (Late): The 'maverick' of criminal law. Known for defending the toughest cases with unmatched logic."
        ]
      }
    ]
  },

  // ─── JUDGE ──────────────────────────────────────────────────────
  judge: {
    slug: "judge",
    badge: "⚖️ Career Exploration for Class 10+",
    heading: "The Arbiters of Justice",
    subheading:
      "Judges are the pillars of the judicial system who interpret laws, deliver justice, and uphold constitutional rights. They preside over courts, make critical decisions that impact lives, and shape society's legal landscape. In today's India, becoming a judge is not just a career—it is a calling to serve justice and protect the rights of every citizen.",
    whyCards: [
      { icon: "⚖️", title: "Guardian of Justice", description: "Deliver fair decisions that shape society and protect fundamental rights", borderColor: "#F59E0B" },
      { icon: "🏛️", title: "Prestige & Authority", description: "Hold one of the most respected positions in Indian society", borderColor: "#1E40AF" },
      { icon: "📚", title: "Intellectual Challenge", description: "Engage with complex legal cases and constitutional interpretations daily", borderColor: "#6366F1" },
      { icon: "🌐", title: "Lifetime Security", description: "Excellent salary, pension, and job security until retirement", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹1.5L–₹1.5Cr annually", color: "bg-amber-100 text-amber-700" },
      { label: "Career Span", detail: "Typically until age 62–65", color: "bg-blue-100 text-blue-700" },
      { label: "Duration to Judge", detail: "LLB (5/3 years) + 5–15 years practice + PCS-J exam", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1.5L–₹1.5Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "30–40% CAGR", label: "Salary Growth as Rank Increases", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "⚖️",
        description: "Understanding the role of a judge in the Indian judicial system",
        color: RED,
        content: [
          "Social Impact & Authority: Unlike private practice, where you represent a client, a judge represents the law itself. You are the ultimate arbiter of justice, interpreting the Constitution and laws of India to deliver decisions that shape society.",
          "A Judge is the 'Keeper of Justice.' They interpret the Constitution and laws of India, listen to both sides of a dispute, weigh the evidence, and deliver decisions that have permanent impact on people's lives. Whether it is sending a criminal to jail, awarding custody of a child, or declaring a government decision unconstitutional, judges wield immense responsibility.",
          "Job Security & Prestige: Judicial service offers a high level of job security, a respected social standing, and a structured career path with clear promotion tracks. Judges are shielded from political pressure to ensure impartial decisions.",
          "Intellectual Rigor: You are constantly engaging with complex legal theories and diverse cases. The judiciary's independence is a cornerstone of democracy.",
          "In today's India, with an overburdened judiciary (over 60 million pending cases), judges are more critical than ever. They are not just courtroom administrators—they are constitutional guardians who ensure the rule of law prevails in a democracy.",
          "Becoming a judge requires not just legal expertise, but wisdom, impartiality, and an unwavering commitment to justice. It is a career for those who genuinely want to serve society and protect the Constitution."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working judge",
        color: RED2,
        content: [
          "08:00 AM -  Justice Ramakrishnan arrives at the Delhi High Court. He has 5 cases on his docket today. His chambers staff briefs him on each case file.",
          "09:00 AM -  First hearing. A writ petition is filed challenging a government policy. He listens to arguments from both the petitioner's lawyer and the government counsel for 2 hours. He takes detailed notes and reserves judgment.",
          "11:30 AM -  Lunch break. He reviews written submissions from yesterday's cases. Judges don't just listen in court; they spend hours reading legal briefs and precedents.",
          "01:00 PM -  Criminal case hearing. A criminal defense lawyer argues that his client's confession was coerced. The judge questions both sides to unearth the truth.",
          "03:00 PM -  Administrative work. He reviews case schedules, meets with the High Court registrar about court resource allocation, and handles judicial matters.",
          "04:30 PM -  Judgment Delivery. He announces a written judgment in a civil dispute case. It took him 3 days to write because every sentence has legal weight.",
          "05:30 PM -  Chambers time. He dictates notes for upcoming judgments to his secretary. Judges often work late into the evening.",
          "06:30 PM -  Goes home knowing that his decisions today will impact families, businesses, and the country's legal landscape."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited to become a judge",
        color: RED3,
        content: [
          "Experienced Professionals: Advocates or prosecutors (3+ years) seeking stability and prestige.",
          "Ethical Individuals: Those committed to integrity, justice, and strong moral character.",
          "Analytical Minds: Experts in research, critical thinking, and complex law interpretation.",
          "Resilient Temperaments: Calm, impartial individuals with high emotional intelligence and patience.",
          "The Neutral Observer: Can you listen to both sides without bias? Judges must put aside personal opinions.",
          "The Intellectual: Do you enjoy reading philosophy, ethics, and complex legal theory?",
          "The Disciplined: Can you maintain a strict work schedule and courtroom decorum?",
          "The Patient: Can you sit through long, sometimes tedious arguments and remain sharp?",
          "The Decisive: Can you make tough calls knowing they will affect people's lives?",
          "The Ethical: Do you have unquestionable integrity and moral character?",
          "The Learner: Will you continue studying law and judicial precedents throughout your career?"
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📋",
        description: "Core duties of a judge",
        color: RED4,
        content: [
          "Legal Expertise: Deep mastery of laws, precedents, and procedures to ensure justice.",
          "Impartiality: Unwavering objectivity to guarantee fair treatment for all parties.",
          "Decisiveness: Making sound, high-pressure decisions that impact lives and society.",
          "Precision: Meticulous attention to detail in documents and case law.",
          "Dedication: A robust work ethic and commitment to the judicial process.",
          "Adaptability: Commitment to lifelong learning within an evolving legal landscape.",
          "The judicial workflow has several key stages:",
          "1. Case Hearing: Listen to arguments from both sides (plaintiff and defendant/prosecution and defense).",
          "2. Evidence Examination: Review documents, witness testimonies, and expert reports.",
          "3. Legal Research: Study precedents and constitutional provisions applicable to the case.",
          "4. Analysis: Weigh evidence, apply law, and determine the truth.",
          "5. Judgment Writing: Draft a detailed written judgment explaining the reasoning and decision.",
          "6. Pronouncement: Publicly announce the judgment in court.",
          "7. Implementation: Ensure that the judgment is properly executed."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become a judge in India",
        color: RED5,
        content: [
          "Pathway to Judiciary in India:",
          "  • Step 1: Complete your LLB (5-year integrated or 3-year after graduation)",
          "  • Step 2: Register with Bar Council and practice law for 7–12 years (mandatory practice period varies by state)",
          "  • Step 3: Gain experience as an advocate and build expertise in a specific area",
          "  • Step 4: Appear for PCS-J (Public Service Commission -  Judicial) exam conducted by UPSC or State PSCs",
          "  • Step 5: Clear PCS-J (prelims, mains, interviews, medical test)",
          "  • Step 6: Appointed as Civil Judge (District Judge level entry point)",
          "  • Step 7: Progress through ranks: Addl. District Judge → Sessions Judge → High Court Judge → Appellate judge",
          "Target Timeline: On average, 15–20 years from law school to becoming a High Court Judge"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and judicial system data",
        color: RED,
        content: [
          "Judicial Vacancies: India has a severe shortage of judges. As of 2026, over 30% of sanctioned judge positions remain vacant.",
          "Demand: Unprecedented demand due to 60+ million pending cases and rapid legal system expansion.",
          "Salary Ranges (Annual CTC in INR):",
          "  • Civil Judge (Entry-level): ₹1.5L–₹3L",
          "  • Additional District Judge: ₹5L–₹8L",
          "  • Sessions Judge: ₹10L–₹15L",
          "  • High Court Judge: ₹30L–₹50L+",
          "  • Chief Justice (apex position): ₹1.5Cr",
          "Pension: One of the best pension schemes in India (50% of last drawn salary after retirement)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Judicial system structure and opportunities",
        color: RED2,
        content: [
          "Judicial Hierarchy in India:",
          "  • District Courts: Entry-level judiciary (Local trials, civil/criminal cases)",
          "  • High Courts: 25 High Courts across India (Appeals from District Courts)",
          "  • Supreme Court: Apex court (Constitutional matters and landmark cases)",
          "Selection Process: Competitive PCS-J exam through State PSC or UPSC",
          "Geographic Variation: Different states have different demand levels",
          "Alternative Paths: Tribunal memberships, Arbitration, and Alternative Dispute Resolution (ADR) as stepping stones"
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required to become a judge",
        color: RED3,
        content: [
          "LLB Course: A 3 or 5-year LLB degree is essential. Annual fees at reputable colleges can range from ₹1–7 Lakhs.",
          "Coaching/Preparation: Coaching for judicial service exams (PCS-J), which can range from ₹50,000 to ₹1,50,000 or more.",
          "Exam Fees: Multiple state-level exams require fees, and travel costs for prelims, mains, and interviews.",
          "Study Materials: Printed notes, specialized textbooks, and 'Diglot' Bare Acts cost between ₹5,000 and ₹20,000.",
          "Digital Access: Subscriptions to legal research databases like SCC Online or LexisNexis.",
          "Practice Period: Self-employed advocate work depends on practice growth (₹0 structured, but need to sustain living costs). Law firm associate roles offer better salary but take longer to gain independent practice experience.",
          "ROI: Excellent — Though investment upfront is required, the lifetime job security and pension make it highly rewarding."
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support for aspiring judges",
        color: RED5,
        content: [
          "GEV Memorial Merit Scholarship: ₹2,00,000 annually to meritorious undergraduate/postgraduate law students, including mentorship.",
          "Foundation for Excellence (FFE) Scholarship: Offers ₹50,000 annually for 5 years to 1st-year 5-year integrated law students.",
          "Aditya Birla Scholarship Programme: A highly competitive, merit-based scholarship for law students.",
          "LSAT-India Scholarship: Awarded based on exceptional performance in the LSAT-India entrance exam.",
          "PNB Housing Finance Protsahan Scholarship: Designed for students facing financial constraints.",
          "Central Sector Scheme of Scholarship: Ministry of Education initiative for college students.",
          "Law School Scholarships: Almost all NLUs and law colleges offer merit-based scholarships.",
          "Government Schemes: NSP (National Scholarship Portal) for professional degrees.",
          "IDIA and PreLaw Programs: Support for underprivileged aspirants preparing for law school.",
          "State-Based: Various states offer scholarships for law students pursuing judicial careers.",
          "Merit-Cum-Means: Universities offer assistance to deserving students.",
          "Foundation Support: Organizations like Vidhi Centre for Legal Policy offer internships and grants."
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework for judges",
        color: RED,
        content: [
          "Bar Council of India (BCI): Mandatory registration to practice law before becoming a judge",
          "UPSC & State PSCs: Conduct PCS-J exams for judicial recruitment",
          "High Courts: Appoint judges and oversee judicial administration",
          "Judicial Accountability: Judges are bound by the Code of Conduct for Indian Judiciary",
          "Impeachment Process: Judges can only be removed by Parliament through impeachment",
          "Separation of Powers: Judiciary remains independent from executive and legislative branches"
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse paths within judicial service",
        color: RED2,
        content: [
          "Traditional Judicial Path:",
          "  • District Judge → High Court Judge → Possible Chief Justice",
          "Specialized Judicial Roles:",
          "  • Administrative Judge: Oversees court administration and case management",
          "  • Commercial Court Judge: Handles business and commercial disputes",
          "  • Family Court Judge: Specializes in matrimonial and family law cases",
          "Alternative Paths:",
          "  • Arbitrator: Private judicial services for dispute resolution",
          "  • Tribunal Member: Labor, IP, Environmental tribunals, etc.",
          "  • Legal Researcher: Supreme Court research divisions"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges faced by judges in India",
        color: RED3,
        content: [
          "Extreme Workload & Case Backlog: Judges face an enormous number of pending cases, resulting in high-pressure work environments. Over 60 million cases are pending in Indian courts.",
          "Impartiality Under Pressure: Maintaining neutrality while dealing with intense public and political pressure. High-profile cases attract media scrutiny and public criticism.",
          "Mental & Emotional Toll: Constant exposure to serious, distressing cases involving crime, family disputes, and human suffering can lead to burnout.",
          "Administrative & Infrastructure Hurdles: Subordinate courts often lack modern facilities, technology, and adequate support staff.",
          "Bureaucratic Hurdles: Subordination to high courts, potential for vexatious complaints, and complex administrative procedures.",
          "Judicial Fatigue: Long working hours (often 12+ hours/day) can lead to exhaustion and health issues.",
          "Safety Concerns: Judges handling criminal cases sometimes face security threats from convicted criminals or their associates.",
          "Work-Life Balance: Judicial duty often extends beyond 9–5, affecting personal and family life."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of India's judiciary and judicial system",
        color: RED4,
        content: [
          "Digital Justice: Supreme Court pushing 'e-courts' and virtual hearing systems. Tech-savviness is becoming mandatory.",
          "AI in Courts: Legal research software and case prediction tools are emerging. Judges will use AI to expedite decisions.",
          "Decriminalization Trends: Shift towards alternative dispute resolution (ADR), mediation, and arbitration to reduce court load.",
          "Judicial Reforms: Active Chief Justice-led reforms to reduce pendency and improve efficiency.",
          "Diversity Drive: Initiatives to increase representation of women and minorities in the judiciary.",
          "International Collaboration: Indian judges increasingly participate in cross-border dispute resolution.",
          "Expected Growth: 40–50% increase in judicial vacancies expected to be filled by 2030."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Foundation-building for a judicial career",
        color: RED5,
        content: [
          "Stream Selection: You can choose any stream (Arts, Commerce, or Science). Arts/Humanities is recommended as subjects like History, Political Science, and Sociology provide a helpful background for law.",
          "Focus Subjects: Focus on strengthening your English proficiency, reading comprehension, and logical reasoning.",
          "Entrance Exam Preparation: In Class 11 and 12, start preparing for national-level law entrance exams to get into a top law university.",
          "Read the Constitution: Understand the Constitution of India. It is the judge's handbook.",
          "Read Supreme Court Judgments: Build familiarity with landmark cases and judicial reasoning.",
          "Debating: Develop the ability to construct logical arguments and counter-arguments.",
          "Philosophy and Ethics: Study ethical frameworks. Judicial judgment requires moral reasoning.",
          "Socio-Political Awareness: Stay updated on social issues and their legal implications.",
          "Enhance Analytical Skills: Solve logic puzzles and case studies daily.",
          "Develop Equanimity: Practice patience and impartiality in decision-making."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Judges",
        icon: "⭐",
        description: "Inspiring judges who shaped India's legal system",
        color: RED,
        content: [
          "J.S. Verma: Championed women's rights and the Vishaka guidelines, which became landmark protections against sexual harassment in the workplace.",
          "H.R. Khanna: Defended civil liberties via his historic ADM Jabalpur dissent during the Emergency, protecting individual rights when the government tried to suspend them.",
          "V.R. Krishna Iyer: Pioneered social justice and human rights for the underprivileged, expanding the scope of judicial activism in India.",
          "Leila Seth: First female High Court Chief Justice; advocated for gender property equality and women's rights in family law.",
          "Y.V. Chandrachud: India's longest-serving Chief Justice, known for progressive judgments and judicial reforms.",
          "D.Y. Chandrachud: Led the judiciary's modern digital transition and championed privacy rights and gender equality in landmark judgments."
        ]
      }
    ]
  },

  // ─── STAFF SELECTION COMMISSION ────────────────────────────────
  staff_selection_commission: {
    slug: "staff_selection_commission",
    badge: "🏛️ The Backbone of Governance for Class 10+",
    heading: "Staff Selection Commission (SSC)",
    subheading:
      "SSC is the central recruitment gateway to Group B and Group C posts across the Union government. It opens multiple entry points after Class 10, Class 12, or graduation for students who want a stable, high-impact public service career.",
    whyCards: [
      { icon: "ShieldCheck", title: "Government Backbone", description: "Power the ministries, audits, investigations, and revenue systems that keep India running.", borderColor: "#F59E0B" },
      { icon: "Layers3", title: "Multiple Entry Points", description: "Start after Class 10, Class 12, or graduation depending on your ambition and timeline.", borderColor: "#1E40AF" },
      { icon: "Laptop", title: "Digital-First Role", description: "Modern SSC work is increasingly tied to e-Office, analytics, and paperless administration.", borderColor: "#6366F1" },
      { icon: "Banknote", title: "Stable Career", description: "Central government pay, allowances, pension benefits, and long-term security.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Entry Routes", detail: "MTS, CHSL, CGL, JE, CPO, and more", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹38,000–₹1,50,000 gross monthly", color: "bg-blue-100 text-blue-700" },
      { label: "Eligibility", detail: "Class 10, 12, diploma, or any degree", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "1 Lakh+", label: "Projected vacancies by 2030", gradient: "from-amber-500 to-amber-600" },
      { value: "4 Stages", label: "Common SSC selection process", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "ShieldCheck",
        description: "The recruitment system that powers the central government workforce.",
        color: RED,
        content: [
          "The Staff Selection Commission is an attached office of the Department of Personnel and Training (DoPT). Its core responsibility is to recruit personnel for Group B (Non-Gazetted) and Group C (Non-Technical) posts across Central Government ministries and departments.",
          "Think of SSC professionals as the hands and feet of governance. They process documents, manage records, support audits, handle revenue work, and keep ministries functioning smoothly.",
          "Depending on the post, SSC recruits can work in finance, administration, investigations, customs, income tax, engineering, or clerical support roles. The common thread is public service and operational discipline."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Assistant Section Officer",
        icon: "Clock",
        description: "How SSC work looks inside a ministry office.",
        color: RED2,
        content: [
          "9:30 AM -  Enter South Block in New Delhi and settle into a desk surrounded by legacy files and high-speed systems.",
          "11:00 AM -  Draft a brief for a senior diplomat or officer by coordinating inputs from multiple departments.",
          "1:30 PM -  Discuss policy, finance, and administration over lunch with colleagues from different ministries.",
          "3:30 PM -  Work on e-Office, tagging digital files and ensuring sensitive records are searchable and properly indexed.",
          "6:30 PM -  Review an RTI query before leaving, knowing that accuracy and transparency are part of the job."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality & Skills",
        icon: "User",
        description: "Traits that fit SSC-style government work.",
        color: RED3,
        content: [
          "Discipline: Government work runs on rules, timelines, and structured routines.",
          "Patience: Recruitment, transfers, and file movement can take time.",
          "Ethical Core: You will handle public records, sensitive data, and taxpayer money.",
          "Drafting Ability: Clear, polite, and legally sound writing is essential.",
          "Adaptability: You may be posted across departments and locations.",
          "Numerical Ability: Important for audit, tax, and accounts-related work.",
          "Digital Literacy: Office software, portals, and dashboards are now part of the job."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "ClipboardList",
        description: "The administrative workflow that keeps offices moving.",
        color: RED4,
        content: [
          "Diarizing: Record every incoming communication, digital or physical.",
          "Noting: Write a concise summary and suggest the next action on a file.",
          "Drafting: Prepare the official reply, order, or note sheet.",
          "Field Investigation: For inspector-level roles, conduct raids, audits, or site inspections.",
          "Document Management: Organize and verify records so they can be traced quickly.",
          "Public Service Delivery: Help offices answer queries, move files, and execute policy."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "The major SSC exams and entry routes.",
        color: RED,
        content: ["Pathway A: SSC CGL Route (Graduate Level)","Step 1: Score well in Class 10th & 12th","Step 2: Complete graduation in any stream","Step 3: Prepare Maths, English, Reasoning, GK","Step 4: Clear SSC CGL Tier I & Tier II exams","Step 5: Qualify document verification and medical test","Step 6: Join as Inspector/Auditor/Assistant in Central Government","Pathway B: SSC CHSL Route (Class 12th Level)","Step 1: Score well in Class 10th & 12th","Step 2: No graduation needed; apply after Class 12th","Step 3: Prepare Maths, English, Reasoning, GK","Step 4: Clear SSC CHSL Tier I & Tier II exams","Step 5: Qualify typing test/skill test if required","Step 6: Join as LDC/DEO/Postal Assistant in Government","Pathway C: SSC MTS Route (Class 10th Level)","Step 1: Score well in Class 10th (minimum qualification)","Step 2: Apply for SSC MTS after Class 10th","Step 3: Prepare basic Maths, English, Reasoning, GK","Step 4: Clear SSC MTS Paper I & Paper II","Step 5: Qualify document verification process","Step 6: Join as Multi-Tasking Staff in Central Government"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Pay, growth, and hiring trends for SSC roles.",
        color: RED2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹22 LPA –  ₹35 LPA","Senior / Lead Role (10+ yrs): ₹15 LPA –  ₹22 LPA","Mid-Level Professional (5–8 yrs): ₹10 LPA –  ₹15 LPA","Junior / Associate (3–5 yrs): ₹7 LPA –  ₹10 LPA","Entry Level (0–2 yrs): ₹4 LPA –  ₹7 LPA","Salary Variation Note Fixed government scales. Higher HRA/DA in Tier-1 cities.","Where Are the Jobs?","Top Cities: Delhi, Mumbai, Kolkata, Chennai, Bengaluru.","Top Industries: Income Tax, GST, Railways, CBI, Ministries.","Global Demand: Foreign postings via Ministry of External Affairs.","Top Institutions","Government or Government Funded Coaching Institutes","Jamia Millia Islamia Coaching Centre, New Delhi","Dr. Ambedkar Studies Centre (UGC funded), Pan-India","Aligarh Muslim University Coaching Centre, Aligarh","Banaras Hindu University Career Guidance Centre, Varanasi","2. Private Coaching Institutes","KD Campus, New Delhi","Mahendras Institute, Pan-India","Career Power Institute, New Delhi","Paramount Coaching Centre, New Delhi","3. Online Coaching Institutes","Unacademy SSC","Adda247 (BSE Institute)","Testbook SSC Online","PW (Physics Wallah) SSC Program","Career Opportunities","Conventional","SSC CGL Officer","SSC CHSL Officer","SSC Stenographer","SSC GD Constable","New-age and AI driven","Digital Records Officer","E-Governance Assistant","Cyber Documentation Executive","Data Processing Officer","Remote/Entrepreneurship","SSC Mentor / Coach","Exam Content Creator","Government Exam YouTuber","Online Test Series Entrepreneur"]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Preparation and living costs for SSC aspirants.",
        color: RED3,
        content: [
          "Exam Fees: Around ₹100 for many SSC exams, with exemptions for eligible categories.",
          "Online Coaching: Roughly ₹1,500 to ₹6,000 through popular digital platforms.",
          "Offline Coaching: Roughly ₹15,000 to ₹45,000 in major coaching hubs.",
          "Living Costs: In places like Mukherjee Nagar or Jaipur, expect ₹8,000 to ₹12,000 per month for rent and food."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Popular coaching hubs and learning platforms.",
        color: RED4,
        content: [
          "Coaching Hubs: Mukherjee Nagar and Laxmi Nagar in Delhi remain the best-known SSC prep clusters.",
          "North India: Jaipur and Prayagraj are strong prep markets.",
          "South India: Chennai, Hyderabad, and Bengaluru have active coaching ecosystems.",
          "East and West: Patna, Kolkata, and Pune are also popular for aspirants.",
          "Online Platforms: Unacademy, Careerwill, Khan Global Studies, Adda247, Testbook, and Physics Wallah are widely used."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Gift",
        description: "Fee waivers and support for aspirants.",
        color: RED5,
        content: [
          "Central Sector Scheme: Supports meritorious students with family income below prescribed limits.",
          "State Schemes: Bihar and Uttar Pradesh often support coaching or stipend-based preparation for competitive exams.",
          "Institutional Support: Coaching platforms sometimes run scholarship tests for full or partial fee waivers.",
          "Self-Study Support: Affordable test series and online practice can keep preparation costs low."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Practical credentials that improve employability.",
        color: RED,
        content: [
          "No external license is needed in the way a legal or medical career requires one; the SSC selection list is the gateway.",
          "CCC (Course on Computer Concepts): Strongly recommended for Group C office-based roles.",
          "Typing and Data Entry Skills: Often essential for CHSL and related clerical roles.",
          "Office Tools: Proficiency in spreadsheets, document processing, and government portals matters a lot in modern offices."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Rocket",
        description: "Roles available through SSC recruitment.",
        color: RED2,
        content: [
          "Conventional: Auditor, Income Tax Inspector, Stenographer, Junior Engineer, Assistant Section Officer, and Tax Assistant.",
          "New-Age: Data Security Officer, GST Analytics Specialist, and E-Governance Coordinator.",
          "After-Service Paths: Policy consultant, exam mentor, or administrative trainer after a long government career."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "What aspirants should prepare for.",
        color: RED3,
        content: [
          "Intense Competition: Millions apply for limited seats, so preparation must be consistent and long-term.",
          "Transfer Policy: Frequent transfers can be difficult for family life and stability.",
          "Repetitive Work: Some office roles can feel monotonous at first.",
          "Rule-Driven Environment: You need patience for process-heavy, procedural work."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "Where SSC work is heading next.",
        color: RED4,
        content: [
          "AI-Assisted Governance: Routine data entry and document sorting will increasingly be automated.",
          "Digital Public Infrastructure: More work will revolve around Aadhaar, UPI, DigiLocker, and India Stack systems.",
          "Data Auditing: Roles will shift toward verification, analytics, and decision support.",
          "Paperless Administration: The e-Office model will keep expanding across ministries."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School",
        icon: "BookOpen",
        description: "Early habits that help SSC aspirants later.",
        color: RED5,
        content: [
          "Speed Maths: Practice mental arithmetic daily to improve accuracy and speed.",
          "Read Editorials: Build English comprehension and awareness of policy issues.",
          "Typing Practice: Work toward at least 35 words per minute.",
          "Current Affairs: Follow one reliable news source every day."
        ]
      },
      {
        id: "famous",
        title: "Famous Indian Personalities",
        icon: "Star",
        description: "Public figures who connect to this career path.",
        color: RED,
        content: [
          "M.S. Dhoni: Served as a Ticket Examiner in the Railways before becoming a national sports icon.",
          "Kiran Bedi: An inspiration for public service aspirants and uniformed-service candidates.",
          "Many Senior Bureaucrats: Several officers began as SSC recruits and rose into policy-making roles."
        ]
      }
    ]
  },

  // ─── INDUSTRIAL DESIGNER ─────────────────────────────────────────
  industrial_designer: {
    slug: "industrial_designer",
    badge: "🎨 Career Exploration for Class 10+",
    heading: "The Architects of Everyday Life",
    subheading:
      "Industrial Designers blend Art, Engineering, and Business to create products that are beautiful, functional, and easy to use. In today's India, moving from 'Made in India' to 'Designed in India,' they shape the physical world around us.",
    whyCards: [
      { icon: "🎨", title: "Creative Impact", description: "Design products used by millions daily", borderColor: "#F59E0B" },
      { icon: "🔧", title: "Problem Solver", description: "Blend aesthetics with functionality and ergonomics", borderColor: "#1E40AF" },
      { icon: "📈", title: "Growing Market", description: "10–12% annual growth in design industry", borderColor: "#6366F1" },
      { icon: "🌍", title: "Global Opportunities", description: "Indian designers in demand worldwide", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹5L–₹1.5Cr+ annually", color: "bg-amber-100 text-amber-700" },
      { label: "Market Growth", detail: "10–12% annual job growth", color: "bg-blue-100 text-blue-700" },
      { label: "Duration", detail: "4-year B.Des or 2-year M.Des", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹5L–₹1.5Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "10–12% CAGR", label: "Design Industry Growth", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "🎨",
        description: "Understanding industrial design and its role in shaping products",
        color: RED,
        content: [
          "Have you ever held a toothbrush and noticed the rubber grip that stops it from slipping? Or looked at a smart speaker and wondered why it's shaped like a sphere instead of a box? That isn't just 'style'—that is Industrial Design.",
          "An Industrial Designer (ID) blends Art, Engineering, and Business. They decide how a product looks (Aesthetics), how it works (Functionality), and how easy it is to use (Ergonomics).",
          "While an engineer makes sure the toaster heats up, and a marketer sells the toaster, the Industrial Designer ensures the toaster looks beautiful on your kitchen counter and doesn't burn your fingers when you touch it.",
          "In today's India, we are moving from 'Made in India' to 'Designed in India.' Companies like Titan, Godrej, and Boat don't just want to assemble products; they want to invent them.",
          "From designing eco-friendly bamboo furniture to creating futuristic electric scooters, Industrial Designers are the ones shaping the physical world around us. They solve real human problems using mass-produced solutions."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working industrial designer",
        color: RED2,
        content: [
          "09:30 AM -  Riya walks into her studio at a consumer electronics company in Bangalore. It's a creative mess—sketches on the walls, 3D printed models on desks, and material samples everywhere. She grabs her iPad Pro. The brief today is to design a new 'Smart Wearable' for senior citizens that monitors heart rate but looks like jewelry, not a hospital gadget.",
          "10:30 AM -  Sketching Phase. Riya puts on her headphones and starts drawing. She doesn't just draw one idea; she draws 50. Some are sleek, some are chunky, some look like bracelets. She focuses on the 'form factor'—it needs to be easy for shaky hands to wear.",
          "12:30 PM -  The Prototype Lab. She takes her best sketch to the 3D printing room. She loads a file into the printer. While it prints, she meets with the engineering team. 'Riya, this curve is too tight; the battery won't fit inside,' the engineer says. Back to the drawing board. Design is a constant negotiation with physics.",
          "02:00 PM -  Lunch. She eats with the UX (User Experience) designers. They discuss how the digital screen on her device will interact with the physical button she designed.",
          "03:30 PM -  User Testing. A group of elderly users has been invited to test a foam model of the device. Riya watches silently. She notices one user struggling to find the 'Panic Button' because it's too small. She notes this down: 'Make the button red and tactile.'",
          "05:00 PM -  Rendering. Back at her desk, she uses software like KeyShot to create a photorealistic image of the final design. She adds textures—gold finish, matte black silicon. It looks so real you could touch it.",
          "07:00 PM -  She logs off. On her way home, she sees someone wearing headphones she designed two years ago. That thrill—seeing a stranger use your creation—never gets old."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited for industrial design",
        color: RED3,
        content: [
          "The Tinkerer: Do you look at a product and think, 'I could make this better'? Maybe a bag zipper that always gets stuck annoys you?",
          "The Empath: Can you put yourself in someone else's shoes? If you are designing a toy for a toddler, can you think like a 3-year-old?",
          "The Visualizer: Can you imagine 3D objects in your head?",
          "The Storyteller: A product tells a story. Why is this chair expensive? Because it looks and feels premium. You create that feeling.",
          "Critical Thinking: Solving complex design problems.",
          "Communication: Selling your design to bosses and stakeholders.",
          "Observation: Noticing how people interact with products."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📋",
        description: "Core duties of an industrial designer",
        color: RED4,
        content: [
          "The ID process typically follows the 'Double Diamond' design process:",
          "1. Discover: Researching the user's needs. (e.g., 'Students need a backpack that charges phones').",
          "2. Define: Creating a specific design brief.",
          "3. Develop: Ideation. Sketching hundreds of concepts.",
          "4. Deliver: Prototyping, testing, and finalizing the product for mass production.",
          "5. Iteration: Refining based on feedback and manufacturing constraints.",
          "6. Documentation: Creating technical drawings for manufacturing."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become an industrial designer in India",
        color: RED5,
        content: [
          "Pathway A: The Design School Route (Creative Focus) -  Most Recommended:",
          "  • Class 12: Any stream (Science, Commerce, Arts)",
          "  • Entrance Exams: NID DAT, UCEED, SEED, UPES-DAT",
          "  • Undergraduate: B.Des in Industrial/Product Design (4 Years)",
          "  • Postgraduate: M.Des for deeper specialization",
          "Pathway B: The Engineering Route (Technical Focus):",
          "  • Class 12: Science (PCM)",
          "  • Undergraduate: B.Tech in Mechanical or Production Engineering",
          "  • Postgraduate: M.Des in Industrial Design (via CEED exam)",
          "Pathway C: The Architecture Switch:",
          "  • Many B.Arch graduates switch to Industrial Design via M.Des"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and job market data for industrial designers",
        color: RED,
        content: [
          "Market Growth: The Indian design industry is growing at 10–12% annually. The government's push for consumer electronics manufacturing (PLI schemes) is creating huge demand for local product designers.",
          "Hiring Trends: Big demand in Consumer Electronics (Headphones, Smartwatches), EVs (Electric Scooters), and Furniture startups (Wakefit, Furlenco).",
          "Salary Ranges (Annual CTC in INR):",
          "  • Entry-Level (0–2 years): ₹5L–₹8L (Consultancy), ₹6L–₹10L (Product Company)",
          "  • Mid-Level (3–7 years): ₹10L–₹18L (Consultancy), ₹15L–₹25L (Product Company)",
          "  • Senior (8–12 years): ₹20L–₹35L (Consultancy), ₹30L–₹50L (Product Company)",
          "  • Leadership: ₹50L–₹1Cr+ (Consultancy), ₹80L–₹1.5Cr (Product Company)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Industries and sectors hiring industrial designers",
        color: RED2,
        content: [
          "Top Industries:",
          "  • Consumer Electronics: Boat, Noise, Titan (Watches/Eyewear)",
          "  • Home Appliances: Godrej, Whirlpool, Crompton (Fans, Fridges)",
          "  • Automotive (EVs): Ola Electric, Ather Energy",
          "  • Furniture & Lifestyle: Pepperfry, Urban Ladder, Ikea India",
          "  • Medical Devices: Startups designing affordable incubators or prosthetics",
          "Top Cities: Bangalore (tech hardware), Pune (automotive), Delhi-NCR (consumer electronics)",
          "Remote Work: Medium. You can sketch from home, but often need to be in studio for prototyping."
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required for industrial design education",
        color: RED3,
        content: [
          "Government (NID/IITs): ₹10L–₹12L (4 years) -  Highly competitive, best ROI",
          "Top Private (MIT-Pune/UPES): ₹18L–₹24L (4 years) -  Expensive due to studio costs",
          "State Government Colleges: ₹4L–₹6L (4 years) -  Fewer options, but affordable",
          "Tools & Equipment: ₹2L -  High-end Laptop, iPad/Tablet, Markers",
          "Living Costs: ₹15,000–₹25,000 per month in metro cities",
          "Study Materials: ₹50,000–₹1L for software licenses and resources",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support available for industrial design students",
        color: RED5,
        content: [
          "Ford Foundation & Ratan Tata Scholarships: Often support design students for projects",
          "Lombard Odier & CII Foundation: Occasionally offer grants for sustainable design projects",
          "Institute Merit Scholarships: MIT-ID and UPES offer tuition waivers (25–50%) for top rankers",
          "NID Means-cum-Merit: Financial aid for students with family income below certain slab",
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional degrees",
          "State-Level: Various state governments offer scholarships for design students",
          "Employer Sponsorship: Many companies sponsor employees pursuing design degrees"
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "No License Required: Your Portfolio is your only license. If your portfolio is good, no one asks for a certificate.",
          "Certifications:",
          "  • SolidWorks/Fusion 360: Certified Associate exams help prove CAD skills",
          "  • Google UX Design Certificate: Helpful for understanding digital side of products",
          "Professional Bodies:",
          "  • ADI (Association of Designers of India): Great network for mentors and internships",
          "  • WDO (World Design Organization): Global body",
          "Continuing Education: Staying updated on design trends and software is important."
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse career paths for industrial designers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "  • Product Designer: Designing physical goods",
          "  • CMF Designer (Color, Material, Finish): Deciding if a phone should be 'Midnight Blue' or 'Rose Gold'",
          "  • Toy Designer: Creating safe and fun toys for kids",
          "New-Age Careers:",
          "  • Sustainable Designer: Creating products from recycled plastic or mushroom packaging",
          "  • Smart Product Designer: Designing IoT devices (Smart bulbs, fitness bands)",
          "  • Packaging Designer: Designing unboxing experiences (like Apple's boxes)",
          "Freelancing:",
          "  • CAD Modeler: Creating 3D models for inventors",
          "  • Design Consultant: Helping startups launch their first product"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges to be aware of in the industrial design profession",
        color: RED3,
        content: [
          "Subjectivity: Everyone has an opinion on design. A marketing manager might reject your design just because they 'don't like the color.' It can be frustrating.",
          "Manufacturing Constraints: You might design a beautiful shape, but the factory might say, 'We can't make this cheap enough.' You constantly have to compromise beauty for cost.",
          "Expensive Education: Design education in private colleges is costly compared to standard degrees.",
          "Niche Market: Unlike software jobs, there aren't millions of openings. It is a specialized, competitive field.",
          "Iteration Pressure: Designs often go through many rounds of feedback and revision.",
          "Deadline Stress: Product launches have fixed timelines; missing them can be costly."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of the industrial design profession",
        color: RED4,
        content: [
          "Design for Circularity: Designers will be responsible for what happens to the product after it dies. Can it be recycled? Can it be repaired? 'Right to Repair' will drive design.",
          "Generative Design (AI): AI tools will generate 100 variations of a chair in seconds. The designer's job will be to choose and refine the best one, not draw all of them.",
          "Phygital Products: Blending physical products with digital experiences (e.g., a skipping rope that counts jumps on an app).",
          "Sustainable Materials: Designers will focus on eco-friendly materials and zero-waste manufacturing.",
          "Personalization: Mass customization will allow each product to be slightly different based on user preferences.",
          "Global Opportunities: Indian designers increasingly sought in international markets.",
          "Salary Growth: Expected 10–12% annual salary growth in the next decade."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Steps to build a strong foundation for an industrial design career",
        color: RED5,
        content: [
          "Deconstruct: Take apart an old pen or a broken remote. See how the plastic parts snap together. That is industrial design engineering.",
          "Sketching: Learn 'Perspective Drawing.' Draw a cube, a cylinder, and a sphere in 3D.",
          "Tinkercad: Use this free online tool to make simple 3D models.",
          "Observe Materials: Touch things. Is it plastic? Metal? Wood? Why did the designer choose that material?",
          "Learn CAD: Start with free tools like Fusion 360 or Tinkercad.",
          "Photography: Learn to photograph products beautifully.",
          "Networking: Join design clubs and attend design seminars."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "⭐",
        description: "Inspiring industrial designers who shaped India's design landscape",
        color: RED,
        content: [
          "Satyendra Pakhale: An IIT Bombay alumnus and global design icon. His furniture designs are in museums worldwide.",
          "Abhimanyu Kulkarni: Design Director at Philips (Asia). He leads design for products used by millions.",
          "Ashwini Deshpande: Co-founder of Elephant Design. One of India's leading design consultancies.",
          "Udayan Bose: Founder of NetBramha Studios. A leader in blending design thinking with business impact.",
          "Deepa Nair: Design Director at Godrej. Known for creating iconic Indian product designs."
        ]
      }
    ]
  },

  // ─── INDUSTRIAL ENGINEERING MANAGEMENT ─────────────────────────────────────────
  industrial_engineering_management: {
    slug: "industrial_engineering_management",
    badge: "⚙️ Career Exploration for Class 10+",
    heading: "The Efficiency Experts",
    subheading:
      "Industrial Engineers design processes to make things faster, cheaper, and safer without sacrificing quality. They bridge Engineering and Management, optimizing everything from factory floors to hospital operations. In today's India, they're the masterminds behind rapid delivery and operational excellence.",
    whyCards: [
      { icon: "⚙️", title: "Process Optimizer", description: "Design systems that work faster and cheaper", borderColor: "#F59E0B" },
      { icon: "📊", title: "Data-Driven", description: "Use analytics and statistics to solve problems", borderColor: "#1E40AF" },
      { icon: "📈", title: "High Demand", description: "10–12% annual growth in manufacturing & logistics", borderColor: "#6366F1" },
      { icon: "🌐", title: "Diverse Industries", description: "Manufacturing, e-commerce, healthcare, consulting", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹5L–₹2.5Cr+ annually", color: "bg-amber-100 text-amber-700" },
      { label: "Market Growth", detail: "10–12% annual job growth", color: "bg-blue-100 text-blue-700" },
      { label: "Duration", detail: "4-year B.Tech + optional M.Tech", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹5L–₹2.5Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "10–12% CAGR", label: "Job Market Growth", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "⚙️",
        description: "Understanding industrial engineering and its role in optimization",
        color: RED,
        content: [
          "If you have ever looked at a long queue in a canteen and thought, 'I could organize this better so everyone gets food faster,' you already think like an Industrial Engineer.",
          "Industrial Engineering (IE) is often called the 'Engineering of Better.' While a Mechanical Engineer designs the car and a Civil Engineer designs the factory building, the Industrial Engineer designs the process to make the car inside that building.",
          "They figure out how to do things faster, cheaper, and safer without sacrificing quality.",
          "In today's India, where companies like Flipkart deliver in 10 minutes and factories like Tata Motors churn out hundreds of cars daily, Industrial Engineers are the masterminds behind the speed.",
          "They bridge the gap between Engineering (Technology) and Management (Business). They are the ones who ask: 'How can we produce 10% more with the same number of people?' or 'How can we reduce the waiting time for patients in this hospital?'"
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working industrial engineer",
        color: RED2,
        content: [
          "08:30 AM -  Rohan walks onto the warehouse floor at a massive E-commerce Fulfillment Center (like Amazon/Flipkart) in Bhiwandi, near Mumbai: It's the 'Big Billion Days' sale week. The noise of conveyor belts and scanners is deafening. He checks his tablet: Order volume is up 40% today.",
          "09:30 AM -  The Bottleneck: He notices a jam in the packing section. Packages are piling up because the label printers are slow. Rohan doesn't fix the printer; he re-organizes the line. He instructs the team to split the flow into two lines—one for small packets, one for big boxes. The jam clears in 20 minutes.",
          "11:00 AM -  Time Study: Rohan stands with a stopwatch (or an iPad app) observing a worker packing a mobile phone. Reach, Grab, Box, Tape, Label. It takes 45 seconds. Rohan realizes if he moves the tape dispenser 6 inches closer, it saves 2 seconds per box. In a day with 10,000 boxes, he just saved 5.5 hours of labor!",
          "01:00 PM -  Lunch: He eats quickly with the Operations Manager. They discuss 'Kaizen' (continuous improvement). Rohan suggests a new layout for the loading dock to reduce truck waiting time.",
          "03:00 PM -  Data Crunching: Back at his desk, he analyzes data on Excel/PowerBI. He spots a trend: 15% of returns are happening because of 'damaged packaging.' He schedules a meeting with the cardboard supplier to upgrade the material quality.",
          "05:00 PM -  Safety Walk: He walks the floor to ensure no one is lifting heavy boxes incorrectly. Safety is efficient; accidents stop work.",
          "06:30 PM -  Rohan logs off: Today, his small changes helped ship 5,000 extra parcels. He didn't invent the product, but he made sure it reached the customer on time."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited for industrial engineering",
        color: RED3,
        content: [
          "The Optimizer: Do you constantly try to find the 'short cut' or the best way to do homework/chores?",
          "The Diplomat: You will tell workers to change how they work. Can you do it without making them angry?",
          "The Business-Minded Techie: You like engineering, but you also care about profit, loss, and business strategy.",
          "The Observer: You notice details others miss—like a fan left on in an empty room (waste of energy!).",
          "Data Analysis: Comfortable with Excel, Python, and statistics.",
          "Communication: Talking to CEOs and factory workers alike.",
          "Leadership: Ability to influence and manage teams."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📋",
        description: "Core duties of an industrial engineer",
        color: RED4,
        content: [
          "The core job revolves around the 'DMAIC' cycle (used in Six Sigma):",
          "1. Define: Identify the problem (e.g., 'Production is too slow').",
          "2. Measure: Collect data. How slow is it? (Using stopwatches, sensors).",
          "3. Analyze: Find the root cause (e.g., 'The machine breaks down every 2 hours').",
          "4. Improve: Fix it (e.g., 'Schedule maintenance during lunch breaks').",
          "5. Control: Ensure the fix stays permanent.",
          "6. Monitor: Continuously track performance metrics."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become an industrial engineer in India",
        color: RED5,
        content: [
          "Pathway A: The Engineering Degree (Most Common):",
          "  • Class 12: Science Stream (PCM)",
          "  • Entrance Exams: JEE Main, JEE Advanced, BITSAT, State CETs",
          "  • Undergraduate: B.Tech/B.E. in Industrial Engineering or Production & Industrial Engineering (4 Years)",
          "  • Postgraduate: M.Tech in Industrial Engineering or MBA in Operations Management",
          "Pathway B: The Mechanical Engineering Route (The Switch):",
          "  • Undergraduate: B.Tech in Mechanical Engineering",
          "  • Specialization: Take electives in Supply Chain/Operations",
          "  • Postgraduate: M.Tech in IE or MBA in Operations",
          "  • Certification: Six Sigma Green Belt"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and job market data for industrial engineers",
        color: RED,
        content: [
          "Growth: The sector is growing at 10–12% annually, driven by 'PLI Schemes' (Production Linked Incentive) boosting manufacturing in India (iPhone factories, Semiconductor plants).",
          "Demand: High demand in E-commerce Logistics (Blinkit, Amazon) and Healthcare Operations.",
          "Salary Ranges (Annual CTC in INR):",
          "  • Entry-Level (0–2 years): ₹5L–₹8L (Manufacturing), ₹8L–₹14L (E-Commerce/Tech)",
          "  • Mid-Level (3–7 years): ₹10L–₹18L (Manufacturing), ₹18L–₹30L (E-Commerce/Tech)",
          "  • Senior (8–12 years): ₹25L–₹45L (Manufacturing), ₹40L–₹70L (E-Commerce/Tech)",
          "  • Leadership: ₹80L–₹1.5Cr+ (Manufacturing), ₹1.2Cr–₹2.5Cr+ (E-Commerce/Tech)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Industries and sectors hiring industrial engineers",
        color: RED2,
        content: [
          "Top Industries:",
          "  • Manufacturing: Automotive (Maruti, Tata), Electronics (Samsung, Foxconn)",
          "  • E-Commerce/Logistics: Amazon, Flipkart, Delhivery (Optimizing delivery routes)",
          "  • Healthcare: Large hospitals (Apollo, Max) hire IEs to reduce patient waiting times",
          "  • Consulting: Big 4 firms (Deloitte, PwC) hire IEs to advise clients on efficiency",
          "Top Cities: Manufacturing Hubs (Pune, Chennai, Gurgaon, Sanand), Tech/Logistics Hubs (Bangalore, Hyderabad, Delhi-NCR)",
          "Remote Work: Medium. Some roles can be remote, but factory floor work requires on-site presence."
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required for industrial engineering education",
        color: RED3,
        content: [
          "IITs/NITs (Govt): ₹8L–₹10L (4 years) -  Top-tier placements",
          "BITS Pilani (Private): ₹20L–₹24L (4 years) -  Excellent industry connect",
          "State Government Colleges: ₹3L–₹5L (4 years) -  Affordable, ROI focused",
          "Private Universities: ₹12L–₹18L (4 years) -  Good infrastructure",
          "Living Costs: ₹15,000–₹25,000 per month in metro cities",
          "Study Materials: ₹50,000–₹1L for books and resources",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support available for industrial engineering students",
        color: RED5,
        content: [
          "AICTE Pragati Scheme: ₹50,000/year for girls pursuing technical education",
          "Panasonic Ratti Chhatr Scholarship: For students from low-income families joining IITs",
          "Merit-cum-Means Scholarships: Available at all IITs/NITs (Full tuition waiver for family income < ₹1L/year)",
          "Ratan Tata Scholarship: For engineering students (varies by college)",
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional degrees",
          "State-Level: Various state governments offer scholarships for engineering students",
          "Employer Sponsorship: Many companies sponsor employees pursuing engineering degrees"
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "Professional Bodies:",
          "  • IIIE (Indian Institution of Industrial Engineering): Joining as student member gives access to journals and networking",
          "Certifications (The Career Boosters):",
          "  • Six Sigma Green Belt: (Cost: ₹15k–₹25k). Proves you know statistical quality control. Highly Recommended",
          "  • PMP (Project Management Professional): For mid-level career growth",
          "  • APICS (CPIM/CSCP): Gold standard for Supply Chain roles",
          "Continuing Education: Staying updated on industry trends and certifications is important."
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse career paths for industrial engineers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "  • Process Engineer: Designing assembly lines",
          "  • Quality Manager: Ensuring zero defects",
          "  • Supply Chain Manager: Managing flow of goods",
          "New-Age Careers:",
          "  • E-Commerce Operations Manager: Managing 'Dark Stores' for quick commerce",
          "  • Data Center Capacity Planner: Optimizing server usage for cloud companies",
          "  • User Experience (UX) Researcher: Using IE principles to optimize how people use apps/websites",
          "Freelancing:",
          "  • Lean Consultant: Helping small factories reduce waste",
          "  • Operations Advisor: Consulting for startups and SMEs"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges to be aware of in the industrial engineering profession",
        color: RED3,
        content: [
          "The 'Generalist' Tag: Sometimes, mechanical engineers are hired for IE roles. You must prove your specialized value (Statistics/Data).",
          "Factory Environment: Entry-level jobs are often on the factory floor—hot, noisy, and dusty. It's not an AC office job initially.",
          "Resistance to Change: Your job is to change how people work. People hate change. You will face resistance from workers and unions.",
          "Deadline Pressure: Production targets are fixed; missing them can be costly.",
          "Continuous Learning: Technology and processes change rapidly; staying updated is mandatory.",
          "Work-Life Balance: During peak production seasons, long hours are common."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of the industrial engineering profession",
        color: RED4,
        content: [
          "Industry 4.0: Factories are becoming 'Smart.' Machines talk to each other (IoT). IEs will design systems where robots and humans work together (Cobots).",
          "Green Manufacturing: IEs will be responsible for 'Carbon Footprint Reduction'—designing processes that use less electricity and produce less waste.",
          "Digital Twins: Creating a virtual 3D replica of a factory to test changes before applying them in real life.",
          "AI-Driven Optimization: Machine learning will predict bottlenecks before they happen.",
          "Sustainability Focus: Designing circular economy processes where waste becomes input.",
          "Global Opportunities: Indian IEs increasingly sought in international markets.",
          "Salary Growth: Expected 10–12% annual salary growth in the next decade."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Steps to build a strong foundation for an industrial engineering career",
        color: RED5,
        content: [
          "Learn Excel: This is the tool of the trade. Learn formulas like VLOOKUP and Pivot Tables.",
          "Optimize Your Life: Creating a study schedule that maximizes free time? That's Industrial Engineering.",
          "Visit a Factory: If your school takes you on an industrial visit, don't just look at the machines. Look at the people and the flow of materials.",
          "Statistics: Pay attention in Math class. Probability and Statistics are the foundation of this career.",
          "Learn Python: Basic coding skills will give you a competitive edge.",
          "Case Studies: Analyze real manufacturing processes and identify inefficiencies.",
          "Networking: Join engineering clubs and attend industry seminars."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "⭐",
        description: "Inspiring industrial engineers who shaped India's manufacturing landscape",
        color: RED,
        content: [
          "N. Chandrasekaran: Chairman of Tata Sons. His background in optimizing processes at TCS laid the foundation for his leadership.",
          "Venu Srinivasan: Chairman of TVS Motor Company. He is famous for bringing 'Total Quality Management' (an IE concept) to India, winning the global Deming Prize.",
          "Ravi Kant: Former MD of Maruti Suzuki. Known for implementing lean manufacturing principles in Indian automotive industry.",
          "Keshab Panda: Former MD of Bharat Petroleum. Pioneer in process optimization in the energy sector.",
          "Rajesh Masrani: VP Operations at Amazon India. Leading logistics optimization for rapid delivery."
        ]
      }
    ]
  },

  // ─── MECHANICAL ENGINEER ─────────────────────────────────────────
  mechanical_engineer: {
    slug: "mechanical_engineer",
    badge: "⚙️ Career Exploration for Class 10+",
    heading: "The Builders of Everything",
    subheading:
      "Mechanical Engineers apply physics and materials science to design, analyze, manufacture, and maintain mechanical systems. From electric vehicles to defense systems, they turn blueprints into reality. In today's India, they are the engine of growth driving 'Make in India' and Atmanirbhar Bharat.",
    whyCards: [
      { icon: "⚙️", title: "Universal Demand", description: "Every industry needs mechanical engineers", borderColor: "#F59E0B" },
      { icon: "🔧", title: "Problem Solver", description: "Design and build systems that work", borderColor: "#1E40AF" },
      { icon: "📈", title: "High Growth", description: "Manufacturing sector reaching $1 Trillion", borderColor: "#6366F1" },
      { icon: "🌍", title: "Global Opportunities", description: "Indian engineers in demand worldwide", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+ annually", color: "bg-amber-100 text-amber-700" },
      { label: "Market Growth", detail: "Steady growth in core & tech sectors", color: "bg-blue-100 text-blue-700" },
      { label: "Duration", detail: "4-year B.Tech or 3-year Diploma", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹4L–₹1.5Cr+", label: "Annual Salary Range", gradient: "from-amber-500 to-amber-600" },
      { value: "$1 Trillion", label: "India's Mfg Target 2025-26", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "⚙️",
        description: "Understanding mechanical engineering and its role in building the world",
        color: RED,
        content: [
          "If you look around you right now :  almost everything you see that isn't made by nature was likely touched by a Mechanical Engineer. The fan spinning above you? Mechanical Engineering. The car parked outside? Mechanical Engineering. The robot assembling your smartphone? Mechanical Engineering.",
          "Mechanical Engineering is often called the 'Mother of All Engineering Branches.' It is the discipline that applies the principles of physics, engineering, and materials science to design, analyze, manufacture, and maintain mechanical systems.",
          "Put simply : if it has moving parts, a mechanical engineer probably built it.",
          "In today's India, this career is the engine of our growth. From the 'Make in India' initiative transforming us into a global manufacturing hub to the push for Electric Vehicles (EVs) and defense self-reliance (Atmanirbhar Bharat), mechanical engineers are the ones turning blueprints into reality.",
          "They are not just mechanics : they are inventors, designers, and problem-solvers who keep the world moving."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real-world experience of a working mechanical engineer",
        color: RED2,
        content: [
          "08:30 AM -  Karthik arrives at the R&D center of an Electric Vehicle (EV) startup in Pune. The air buzzes with the hum of 3D printers and the smell of coffee. He doesn't wear a suit; jeans and a polo t-shirt are the norm here.",
          "09:00 AM -  The Huddle. The team gathers around a whiteboard. They are designing a new battery cooling system for an electric scooter. The challenge? It needs to be 10% lighter but cool 20% faster. Karthik sketches a rough idea involving a new honeycomb structure.",
          "10:30 AM -  CAD Time. Karthik sits at his dual-monitor workstation. He opens SolidWorks (a 3D design software). For the next two hours, he is in 'the zone,' turning his rough sketch into a precise, 3D digital model.",
          "01:00 PM -  Lunch at the canteen. He sits with the manufacturing team. They joke about a robot arm that kept dropping bolts yesterday. These informal chats are crucial—designers need to know what happens on the factory floor.",
          "02:00 PM -  The Prototype Lab. This is the fun part. Karthik puts on safety goggles and heads to the lab. A 3D-printed version of his cooling part is ready. He fits it onto a test scooter. Does it fit? Yes. Does it vibrate too much? He uses a sensor to check.",
          "04:30 PM -  Vendor Call. He calls a supplier in Chennai who makes aluminum parts. They discuss material grades. Karthik needs '6061 Aluminum,' but the supplier suggests '7075' for better strength.",
          "06:00 PM -  Documentation. In engineering, if you didn't document it, you didn't do it. Karthik updates the 'Bill of Materials' (BOM)—a list of every single screw and washer needed for his design.",
          "07:00 PM -  He logs off. As he rides his own electric scooter home, he smiles, knowing that the cooling system keeping his battery safe was designed by him."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "🎯",
        description: "Traits that make someone well-suited for mechanical engineering",
        color: RED3,
        content: [
          "The Tinkerer: As a kid, did you break toys just to see what was inside? Do you love Lego or Meccano sets?",
          "The Visualizer: Can you close your eyes and imagine how a gear turns another gear? (Spatial Intelligence).",
          "The Practical Problem Solver: If a door squeaks, do you just ignore it, or do you look for the hinge that needs oil?",
          "The Team Player: Huge machines aren't built by one person. You need to work with electrical engineers, coders, and workers.",
          "Strong Physics Foundation: Understanding mechanics and thermodynamics is essential.",
          "Attention to Detail: A 1mm error can cause a disaster.",
          "Clear Communication: Explaining complex designs to diverse teams."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "📋",
        description: "Core duties of a mechanical engineer",
        color: RED4,
        content: [
          "A Mechanical Engineer's job generally follows the Product Lifecycle:",
          "1. Conceptualization: Brainstorming ideas for a new product or machine.",
          "2. Design (CAD): Creating detailed 2D and 3D digital models.",
          "3. Analysis (CAE): Using computer simulations (like ANSYS) to test if the design will break under pressure.",
          "4. Prototyping: Building a real-life model to test.",
          "5. Manufacturing: Setting up the factory line to mass-produce the product.",
          "6. Maintenance: Fixing the machines when they break down.",
          "7. Continuous Improvement: Optimizing designs based on feedback."
        ]
      },
      {
        id: "5",
        title: "Career Pathways in India",
        icon: "🛤️",
        description: "How to become a mechanical engineer in India",
        color: RED5,
        content: [
          "Pathway A: The B.Tech Route (The Gold Standard):",
          "  • Class 12: Science Stream (PCM) is mandatory",
          "  • Entrance Exams: JEE Main/Advanced, BITSAT, State CETs",
          "  • Undergraduate: B.Tech/B.E. in Mechanical Engineering (4 Years)",
          "  • Postgraduate: M.Tech via GATE exam or MBA for management",
          "Pathway B: The Diploma Route (Early Entry):",
          "  • Class 10: Pass with Science & Math",
          "  • Entrance: State Polytechnic Exams",
          "  • Course: Diploma in Mechanical Engineering (3 Years)",
          "  • Upgrade: Can join 2nd Year B.Tech directly via Lateral Entry",
          "Pathway C: The Research/Scientist Route:",
          "  • B.Tech → GATE Score → M.Tech/PhD at IITs/IISc",
          "  • Job: Scientist at ISRO, DRDO, or BARC"
        ]
      },
      {
        id: "6",
        title: "Market Snapshot — India 2026",
        icon: "📈",
        description: "Salary, growth, and job market data for mechanical engineers",
        color: RED,
        content: [
          "Market Growth: India's manufacturing sector is projected to reach $1 Trillion by 2025–26. The 'China Plus One' strategy is bringing global factories to India.",
          "Hiring Trends: While 'Core' jobs (Tata Steel, L&T) are stable, massive growth is in Mechatronics, Robotics, and EVs. Pure mechanical roles are evolving into 'Electro-Mechanical' roles.",
          "Salary Ranges (Annual CTC in INR):",
          "  • Entry-Level (0–2 years): ₹4L–₹7L (Core Mfg), ₹6L–₹10L (Tech/EV/R&D)",
          "  • Mid-Level (3–7 years): ₹9L–₹15L (Core Mfg), ₹12L–₹20L (Tech/EV/R&D)",
          "  • Senior (8–12 years): ₹20L–₹40L (Core Mfg), ₹30L–₹60L (Tech/EV/R&D)",
          "  • Leadership: ₹60L–₹1Cr+ (Core Mfg), ₹80L–₹1.5Cr (Tech/EV/R&D)"
        ]
      },
      {
        id: "7",
        title: "Where Are the Jobs?",
        icon: "💼",
        description: "Industries and sectors hiring mechanical engineers",
        color: RED2,
        content: [
          
          "  • Automotive (EVs): Tata Motors, Mahindra, Maruti Suzuki, Ola Electric, Ather",
          "  • Heavy Engineering: Larsen & Toubro (L&T), Thermax, Godrej & Boyce",
          "  • Public Sector (PSUs): BHEL, GAIL, ONGC, NTPC, Indian Railways",
          "  • Defense & Space: ISRO, DRDO, HAL (Hindustan Aeronautics Ltd)",
          "  • Oil & Gas: Reliance Industries, Shell, Cairn",
          "Top Cities: Pune (Auto hub), Chennai (Manufacturing), Bangalore (R&D), Jamshedpur/Bhilai (Steel)",
          "Remote Work: Low. Most mechanical jobs require on-site presence."
        ]
      },
      {
        id: "8",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment required for mechanical engineering education",
        color: RED3,
        content: [
          "IITs/NITs (Govt): ₹8L–₹10L (4 years) -  Top-tier education, fee waivers available",
          "Top Private (BITS/VIT): ₹16L–₹25L (4 years) -  Expensive but excellent labs",
          "State Government Colleges: ₹3L–₹5L (4 years) -  Very affordable",
          "Diploma (Polytechnic): ₹50,000–₹1.5L (3 years) -  Most affordable option",
          "Living Costs: ₹15,000–₹25,000 per month in metro cities",
          "Study Materials: ₹50,000–₹1L for books and resources",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "10",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Financial support available for mechanical engineering students",
        color: RED5,
        content: [
          "Saksham Scholarship (AICTE): For differently-abled students",
          "Pragati Scholarship (AICTE): For girl students in technical education (₹50,000/year)",
          "ONGC Scholarship: For SC/ST students pursuing engineering",
          "Institute Merit Scholarships: IITs and BITS offer tuition waivers for top rankers",
          "Central: NSP (National Scholarship Portal) –  Merit-cum-Means for professional degrees",
          "State-Level: Various state governments offer scholarships for engineering students",
          "Employer Sponsorship: Many companies sponsor employees pursuing engineering degrees"
        ]
      },
      {
        id: "11",
        title: "Professional Bodies & Licensing",
        icon: "📜",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "Certifications (The 'Resume Boosters') :  • CAD Tools: Certification in SolidWorks, AutoCAD, or CATIA (Essential for design jobs) : • Analysis Tools: ANSYS or HyperMesh certification : • Six Sigma Green Belt: For quality and process improvement roles",
 
          "Professional Bodies: • ASME (American Society of Mechanical Engineers): Student membership for networking : • SAE India (Society of Automotive Engineers): A must-join for car enthusiasts : Continuing Education: Staying updated on industry trends and certifications is important."
          
        ]
      },
      {
        id: "12",
        title: "Career Opportunities",
        icon: "🚀",
        description: "Diverse career paths for mechanical engineers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "  • Design Engineer: Creating blueprints",
          "  • Production Engineer: Managing the factory floor",
          "  • Maintenance Engineer: Fixing machines",
          "New-Age Careers:",
          "  • Robotics Engineer: Designing automated arms for factories",
          "  • Mechatronics Engineer: Blending mechanics with electronics (IoT sensors)",
          "  • 3D Printing Specialist (Additive Mfg): Building complex parts layer by layer",
          "  • HVAC Engineer: Designing green air-conditioning systems",
          "Freelancing:",
          "  • CAD Drafter: Freelance design work for global clients on Upwork",
          "  • Consultant: Advising startups on product design"
        ]
      },
      {
        id: "13",
        title: "Challenges and Realities",
        icon: "⚠️",
        description: "Challenges to be aware of in the mechanical engineering profession",
        color: RED3,
        content: [
          "The 'Core' Struggle: Unlike IT jobs, entry-level salaries in core mechanical companies start lower. Growth is steady but slower initially.",
          "Physical Work: Factory jobs can be hot, noisy, and demanding. You aren't always in AC.",
          "Obsolescence: If you only know old-school mechanics, you will become obsolete. You must learn coding (Python) and electronics to stay relevant in the age of EVs and AI.",
          "Deadline Pressure: Production targets are fixed; missing them can be costly.",
          "Continuous Learning: Technology and processes change rapidly; staying updated is mandatory.",
          "Work-Life Balance: During peak production seasons, long hours are common."
        ]
      },
      {
        id: "14",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "🔮",
        description: "Future of the mechanical engineering profession",
        color: RED4,
        content: [
          "Industry 4.0: 'Smart Factories' where machines talk to each other. Engineers will monitor data, not just oil gears.",
          "Green Engineering: Designing wind turbines, hydrogen engines, and carbon-capture machines. Sustainability is the biggest trend.",
          "Bio-Mechanics: Engineers working with doctors to design advanced prosthetics and artificial hearts.",
          "Electric Vehicles: Massive growth in EV design and battery systems.",
          "Additive Manufacturing: 3D printing will revolutionize how parts are made.",
          "AI Integration: Machine learning will optimize designs and predict failures.",
          "Salary Growth: Expected 8–10% annual salary growth in the next decade."
        ]
      },
      {
        id: "15",
        title: "Skills to Build While Still in School",
        icon: "📚",
        description: "Steps to build a strong foundation for a mechanical engineering career",
        color: RED5,
        content: [
          "Join Robotics Club: If your school has one, join it. Building a simple bot teaches you mechanics, electronics, and coding.",
          "Learn 3D Design: Download free software like Tinkercad or Fusion 360 (student license). Try designing a keychain or a phone stand.",
          "Fix Things: Next time a bicycle chain breaks or a toy stops working, try to fix it before throwing it away.",
          "Physics is Key: Pay attention to Newton's Laws and Thermodynamics. They are the Bible of this career.",
          "Learn Python: Basic coding skills will give you a competitive edge.",
          "Case Studies: Analyze real mechanical systems and understand how they work.",
          "Networking: Join engineering clubs and attend industry seminars."
        ]
      },
      {
        id: "16",
        title: "Famous Indian Personalities",
        icon: "⭐",
        description: "Inspiring mechanical engineers who shaped India's engineering landscape",
        color: RED,
        content: [
          "E. Sreedharan: The 'Metro Man of India.' A civil/mechanical genius who built the Delhi Metro and Konkan Railway, changing how India travels.",
          "Baba Kalyani: Chairman of Bharat Forge. He turned a small Indian company into the world's largest forging giant.",
          "Anand Mahindra: While a businessman, his company (Mahindra) is a testament to Indian mechanical engineering prowess, from tractors to the Scorpio-N.",
          "Dr. Pawan Goenka: The man behind the Mahindra Scorpio, putting Indian SUVs on the global map.",
          "Rajesh Masrani: VP Operations at Amazon India. Leading logistics optimization for rapid delivery."
        ]
      }
    ]
  },
  ...hospitalityUpdateData,
  ...healthScienceUpdateData,
  ...homeScienceUpdateData,
  ...publicSafetyAndSecurityUpdateData,
  ...environmentUpdateData,
  geology: {
    slug: "geology",
    badge: "The Earth Detective for Class 10+",
    heading: "Geology",
    subheading: "Study rocks, minerals, and Earth systems to uncover resources, predict hazards, and understand our planet's history.",
    whyCards: [
      { icon: "Mountain", title: "Planet Explorer", description: "Decode Earth's layers, landscapes, and geological history.", borderColor: "#92400E" },
      { icon: "Pickaxe", title: "Resource Discovery", description: "Support mining, groundwater, petroleum, and infrastructure projects.", borderColor: "#B45309" },
      { icon: "Shield", title: "Disaster Readiness", description: "Help assess earthquake, landslide, and erosion risk for safer cities.", borderColor: "#DC2626" },
      { icon: "Globe", title: "Climate Insight", description: "Use geological records to understand long-term climate shifts.", borderColor: "#0F766E" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 years (B.Sc) + 2 years (M.Sc)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "INR 3L to INR 20L+", color: "bg-orange-100 text-orange-700" },
      { label: "Top Sectors", detail: "Mining, Oil & Gas, GIS, Research", color: "bg-emerald-100 text-emerald-700" }
    ],
    statCards: [
      { value: "INR 20L+", label: "Senior Specialist Potential", gradient: "from-amber-600 to-orange-600" },
      { value: "4+", label: "Major Industry Pathways", gradient: "from-emerald-600 to-teal-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What Is Geology?",
        icon: "Target",
        description: "Understanding Earth materials and processes.",
        color: RED,
        content: [
          "Geology is the science of Earth -  rocks, minerals, soils, fossils, and the processes that shape mountains, rivers, and oceans.",
          "Geologists investigate how Earth changes over time and use that knowledge for practical decisions in engineering, environment, and energy.",
          "In India, geology is critical for groundwater mapping, mineral exploration, infrastructure planning, and disaster mitigation."
        ]
      },
      {
        id: "pathway",
        title: "Education Pathway",
        icon: "Map",
        description: "How to enter the field from school.",
        color: RED2,
        content: ["Pathway A: Traditional Science Route","Step 1: Complete Class 12th with Science (PCM/PCB)","Step 2: Pursue BSc in Geology/Earth Science","Step 3: Complete MSc in Geology/Applied Geology","Step 4: Undertake fieldwork and geological survey internships","Step 5: Clear GATE/UPSC Geologist Exam for government jobs","Step 6: Join as Geologist in GSI/ONGC/mining companies","Pathway B: Engineering Route","Step 1: Complete Class 12th with Science (PCM)","Step 2: Pursue BTech in Mining/Petroleum/Geological Engineering","Step 3: Gain industry experience in mining or oil sector","Step 4: Complete MTech in Geosciences or Exploration Geology","Step 5: Work on geological exploration and mapping projects","Step 6: Become Senior Geologist or Exploration Consultant","Pathway C: Research and Academia Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue BSc in Geology from reputed university","Step 3: Complete MSc with specialization in specific branch","Step 4: Clear UGC NET/JRF for funded PhD research","Step 5: Publish research papers in geology journals","Step 6: Join as Geology Scientist or University Professor"]
      },
      {
        id: "roles",
        title: "Career Roles",
        icon: "Briefcase",
        description: "Where geologists work.",
        color: RED,
        content: [
          "Exploration Geologist: Locate and evaluate mineral and energy resources.",
          "Hydrogeologist: Study groundwater systems and water quality.",
          "Engineering Geologist: Support tunnels, dams, highways, and large construction.",
          "Environmental Geologist: Assess land contamination, erosion, and reclamation projects."
        ]
      },
      {
        id: "skills",
        title: "Skills To Build Now",
        icon: "Rocket",
        description: "Practical preparation for students.",
        color: RED2,
        content: [
          "Strengthen fundamentals in chemistry, physics, and geography.",
          "Learn map reading, remote sensing, and basic GIS tools.",
          "Practice field observation and documentation through local surveys or science projects.",
          "Build digital analysis skills with Excel and introductory data tools."
        ]
      }
    ]
  },
  oceanographer: {
    slug: "oceanographer",
    badge: "The Blue Planet Scientist for Class 10+",
    heading: "Oceanographer",
    subheading: "Study seas, coastlines, and marine systems to solve climate, resource, and coastal resilience challenges.",
    whyCards: [
      { icon: "Waves", title: "Ocean Discovery", description: "Explore currents, ecosystems, and the chemistry of oceans.", borderColor: "#0369A1" },
      { icon: "Thermometer", title: "Climate Relevance", description: "Oceans drive weather and climate patterns that affect all life.", borderColor: "#0284C7" },
      { icon: "Fish", title: "Marine Conservation", description: "Support biodiversity and sustainable marine resource management.", borderColor: "#0E7490" },
      { icon: "Building2", title: "Coastal Planning", description: "Help governments and industries protect coastlines and ports.", borderColor: "#1D4ED8" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 years (B.Sc) + 2 years (M.Sc)", color: "bg-sky-100 text-sky-700" },
      { label: "Salary Range", detail: "INR 3.5L to INR 22L+", color: "bg-cyan-100 text-cyan-700" },
      { label: "Domains", detail: "Physical, Chemical, Biological, Geological", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "4", label: "Core Oceanography Streams", gradient: "from-sky-600 to-cyan-600" },
      { value: "INR 22L+", label: "Senior Scientist Potential", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What Is Oceanography?",
        icon: "Target",
        description: "Science of the oceans and coastal systems.",
        color: RED,
        content: [
          "Oceanography studies the physical movement, chemistry, biology, and geology of oceans.",
          "Oceanographers analyze waves, currents, temperature, marine life, and seabed structures.",
          "The field supports weather prediction, fisheries management, blue economy planning, and climate resilience."
        ]
      },
      {
        id: "pathway",
        title: "Education Pathway",
        icon: "Map",
        description: "Build your route into marine science.",
        color: RED2,
        content: [
          "Class 11-12: Choose Science stream with strong Physics and Mathematics foundations.",
          "Bachelor's: Marine Science, Oceanography, Environmental Science, Geology, or Physics-based programs.",
          "Master's: Oceanography, Coastal Management, Marine Biology, or Remote Sensing specializations.",
          "Research track: Aim for institute internships, field surveys, and thesis-driven projects."
        ]
      },
      {
        id: "roles",
        title: "Career Roles",
        icon: "Briefcase",
        description: "Where oceanographers contribute.",
        color: RED,
        content: [
          "Physical Oceanographer: Model currents, waves, and heat transport.",
          "Marine Biologist: Study marine organisms and ecosystems.",
          "Coastal Scientist: Assess shoreline change, erosion, and sea-level impacts.",
          "Marine Data Analyst: Use satellite and sensor data for ocean forecasting."
        ]
      },
      {
        id: "skills",
        title: "Skills To Build Now",
        icon: "Rocket",
        description: "Student preparation checklist.",
        color: RED2,
        content: [
          "Strengthen mathematics, statistics, and environmental science basics.",
          "Learn spreadsheet analysis, plotting, and entry-level coding for data interpretation.",
          "Follow marine and climate reports to build domain awareness.",
          "Participate in nature clubs, coastal clean-up drives, and citizen-science activities."
        ]
      }
    ]
  },
  wildlife_biologist: {
    slug: "wildlife_biologist",
    badge: "The Voice of the Wild for Class 10+",
    heading: "Wildlife Biologist",
    subheading: "Study animal behavior and ecosystems to protect biodiversity, habitats, and ecological balance.",
    whyCards: [
      { icon: "PawPrint", title: "Conservation Impact", description: "Protect threatened species and fragile habitats.", borderColor: "#166534" },
      { icon: "TreePine", title: "Field Research", description: "Work in forests, wetlands, grasslands, and protected reserves.", borderColor: "#15803D" },
      { icon: "Microscope", title: "Data-Driven Ecology", description: "Use tracking, genetics, and statistical tools for wildlife research.", borderColor: "#0F766E" },
      { icon: "Shield", title: "Policy Support", description: "Inform conservation strategy and human-wildlife conflict mitigation.", borderColor: "#B45309" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 years (B.Sc) + 2 years (M.Sc)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "INR 3L to INR 18L+", color: "bg-emerald-100 text-emerald-700" },
      { label: "Work Type", detail: "Field Surveys + Lab/Data Analysis", color: "bg-lime-100 text-lime-700" }
    ],
    statCards: [
      { value: "50%+", label: "Role Involves Field Work", gradient: "from-green-600 to-emerald-600" },
      { value: "INR 18L+", label: "Senior Conservation Roles", gradient: "from-teal-600 to-green-700" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What Is Wildlife Biology?",
        icon: "Target",
        description: "Science of wildlife and ecosystems.",
        color: RED,
        content: [
          "Wildlife biologists study animals in their natural habitats and examine how ecosystems function.",
          "They monitor species populations, migration, breeding patterns, and habitat quality.",
          "Their work guides conservation action, anti-poaching policy, and restoration planning."
        ]
      },
      {
        id: "pathway",
        title: "Education Pathway",
        icon: "Map",
        description: "From school to conservation careers.",
        color: RED2,
        content: ["Pathway A: Traditional Science Route","Step 1: Complete Class 12th with Science (PCB)","Step 2: Pursue BSc in Zoology/Biology/Life Sciences","Step 3: Complete MSc in Wildlife Biology/Conservation Biology","Step 4: Undertake fieldwork at wildlife sanctuaries or reserves","Step 5: Clear GATE/UGC NET for research opportunities","Step 6: Join as Wildlife Biologist in WII/ZSI/forest departments","Pathway B: Forestry and Wildlife Route","Step 1: Complete Class 12th with Science (PCB/PCM)","Step 2: Pursue BSc Forestry or BSc in Environmental Science","Step 3: Complete MSc in Wildlife Science from WII Dehradun","Step 4: Gain field experience in animal tracking and surveys","Step 5: Work with wildlife NGOs or conservation projects","Step 6: Become Wildlife Researcher or Conservation Biologist","Pathway C: Veterinary to Wildlife Route","Step 1: Complete Class 12th with Science (PCB)","Step 2: Pursue BVSc (Bachelor of Veterinary Science) degree","Step 3: Gain experience in zoo or wildlife rehabilitation centres","Step 4: Complete postgraduation in Wildlife Health/Conservation Medicine","Step 5: Work on endangered species conservation programmes","Step 6: Join as Wildlife Veterinary Biologist or Scientist"]
      },
      {
        id: "roles",
        title: "Career Roles",
        icon: "Briefcase",
        description: "Professional pathways in the field.",
        color: RED,
        content: [
          "Wildlife Researcher: Study species ecology, movement, and habitat use.",
          "Conservation Officer: Support reserve planning and biodiversity protection programs.",
          "Ecological Consultant: Conduct impact assessments for development projects.",
          "Wildlife Educator: Build public awareness and community conservation engagement."
        ]
      },
      {
        id: "skills",
        title: "Skills To Build Now",
        icon: "Rocket",
        description: "Student preparation checklist.",
        color: RED2,
        content: [
          "Build biology and ecology fundamentals through practical observation.",
          "Learn data recording, photography, GIS basics, and report writing.",
          "Develop patience, safety awareness, and ethical field behavior.",
          "Volunteer in biodiversity and conservation initiatives to gain real exposure."
        ]
      }
    ]
  },
  ...legalServicesUpdateData,
  ...manufacturingUpdateData
};

export function getCareerPageData(slug: string): CareerPageData | null {
  const slugAliases: Record<string, string> = {
    sports_person: "sportsperson",
    engineering_technology: "engineering_and_technology",
    sales_person: "sales_professional",
    software_testing_quality_assurance: "software_testing_qa",
    internet_of_things_iot: "internet_of_things",
    electronics_and_communication: "electronics_communication_engineering",
    block_chain_engineer: "blockchain_engineer",
    sociology: "sociologist",
    indian_economic_services: "indian_economic_service",
    business_operation_manager: "business_operations_manager",
    information_technology_management: "it_management",
    indian_armed_forces: "indian_army"
  };

  const normalizedSlug = slugAliases[slug.toLowerCase()] || slug.toLowerCase().replace(/[-\s]+/g, "_");

  return (
    actuarialScienceUpdateData[normalizedSlug] ||
    bankingAndFinanceUpdateData[normalizedSlug] ||
    costAccountantUpdateData[normalizedSlug] ||
    agricultureUpdateData[normalizedSlug] ||
    artsAndDesignUpdateData[normalizedSlug] ||
    bioScienceUpdateData[normalizedSlug] ||
    architectureAndConstructionUpdateData[normalizedSlug] ||
    educationUpdateData[normalizedSlug] ||
    businessManagementUpdateData[normalizedSlug] ||
    homeScienceUpdateData[normalizedSlug] ||
    publicSafetyAndSecurityUpdateData[normalizedSlug] ||
    environmentUpdateData[normalizedSlug] ||
    government_servicesUpdateData[normalizedSlug] ||
    mentorAndCoachUpdateData[normalizedSlug] ||
    healthScienceUpdateData[normalizedSlug] ||
    hospitalityUpdateData[normalizedSlug] ||
    science_mathematics_engineeringUpdateData[normalizedSlug] ||
    legalServicesUpdateData[normalizedSlug] ||
    manufacturingUpdateData[normalizedSlug] ||
    marketing_advertisingUpdateData[normalizedSlug] ||
    sports_and_physical_activitiesUpdateData[normalizedSlug] ||
    media_and_communicationUpdateData[normalizedSlug] ||
    human_social_sciencesUpdateData[normalizedSlug] ||
    careerPageData[normalizedSlug] ||
    null
  );
}


