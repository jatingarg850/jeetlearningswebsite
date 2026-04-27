import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const businessManagementUpdateData: Record<string, CareerPageData> = {
  bpo: {
    slug: "bpo",
    badge: "🌍 The Global Engine for Class 10+",
    heading: "Business Process Outsourcing (BPO)",
    subheading: "Connect the world. Solve problems across continents. Build careers in India's $45B export powerhouse. ₹3L–₹55L+ salaries with 13% CAGR growth.",
    whyCards: [
      { icon: "Globe", title: "$45B Export Value by 2026", description: "India's BPO sector reaching $45B by late 2026. Millions of jobs. Global companies depend on Indian talent.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹3L–₹55L+ Salaries", description: "Entry-level ₹3L–₹4.5L. Mid-level ₹6L–₹10L. Senior ₹15L–₹25L. Leadership ₹35L–₹55L+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Zap", title: "13% CAGR Growth", description: "Growing faster than traditional IT services. Emerging hubs in Tier-2 cities. Remote work opportunities abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Back Office to Experience Center", description: "India evolving from 'Back Office of World' to high-tech 'Experience Center.' Humans and AI working together 24/7.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Class 12 + 1-3 Month Training", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "No Exam - Direct Hiring", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3L–₹55L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$45B", label: "Export Value by 2026", gradient: "from-green-500 to-green-600" },
      { value: "13%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Handling non-core business tasks for global companies.",
        color: BLUE,
        content: [
          "BPO Definition: Business Process Outsourcing—when company hires specialized company (Genpact, Wipro, Concentrix) to handle non-core tasks. India is 'Back Office of World' evolving into high-tech 'Experience Center.'",
          "The Role: The Problem Solver (handle customer queries via phone, email, chat), The Data Architect (manage massive information—medical records, insurance claims, e-commerce orders), The Process Expert (ensure payroll, accounting, HR functions happen without mistakes).",
          "What They Do: Handle customer service calls, process data, manage back-office operations, provide technical support, handle billing inquiries, process insurance claims, manage HR functions, ensure quality compliance.",
          "Why It Matters: India's BPO sector is powerhouse set to reach $45B export value by 2026. Provides millions of jobs. Allows global businesses to be faster, cheaper, smarter. You keep world's biggest companies running 24/7.",
          "The Scope: Work in BFSI, Healthcare, E-commerce, Travel & Hospitality, Tech Support, or as independent consultant.",
          "The Impact: You're not just processing data—you're solving problems for people across continents, enabling global businesses to scale, and representing India on world stage."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Voice of the Brand",
        icon: "Clock",
        description: "Real workflow of a BPO professional.",
        color: BLUE2,
        content: [
          "2:30 PM - The Shift Begins: Arrive at modern glass-fronted office in Gurgaon. Supporting company in UK, day starts in afternoon. Swipe ID card, grab coffee, join 10-minute 'huddle' where Team Lead discusses day's targets.",
          "4:00 PM - The Deep Dive: Log into system. One screen has customer's history; other has AI assistant suggesting solutions. Handle mix of calls and 'live chats.' One moment helping track lost parcel; next explaining complex billing error.",
          "7:30 PM - The Cafeteria Buzz: Lunch break (or dinner!). Cafeteria alive with energy. Sit with friends working different 'processes'—one handles Travel, another Finance. Mini-world under one roof.",
          "10:00 PM - Quality & Feedback: Last hour reviewing 'Customer Satisfaction' scores. Listen to recording of call with trainer to see how to sound more empathetic or solve problems faster.",
          "11:30 PM - The Ride Home: Board company-provided cab. Look out at city lights. Feel sense of pride. Spent day helping people across ocean solve their problems."
        ]
      },
      {
        id: "who",
        title: "Is This You? The BPO Spark",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Communication Mastery (explain complex idea clearly and politely?), Empathy (stay calm and helpful even when customer frustrated?), Tech-Savviness (comfortable using multiple software screens and AI tools simultaneously?).",
          "Soft Skills: Adaptability (okay with 'Rotational Shifts'—working nights or weekends?), Problem-Solving (enjoy puzzles and finding quickest way to solution?), Patience (handle repetitive tasks with grace).",
          "Hard Skills: CRM Software Proficiency, Data Entry Speed (35-40 WPM), Customer Service Expertise, Technical Knowledge (for tech support roles), Language Skills (English + other languages).",
          "The Self-Check: Can you communicate clearly? Do you stay calm under pressure? Are you tech-savvy? If yes, you have the BPO Spark."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Service Delivery Cycle",
        icon: "Briefcase",
        description: "The complete BPO professional workflow.",
        color: BLUE2,
        content: [
          "Inbound/Outbound Interaction: Receiving query or reaching out to client. Handling customer communication.",
          "Data Processing: Updating records in CRM (Customer Relationship Management) tool. Maintaining accurate information.",
          "SOP Adherence: Following 'Standard Operating Procedure' to ensure solution is legal and correct. Quality compliance.",
          "Feedback Loop: Learning from every interaction to improve next one. Continuous improvement mindset.",
          "Customer Satisfaction: Ensuring customer is satisfied with resolution. Building positive relationships.",
          "Documentation: Maintaining detailed records of interactions and resolutions.",
          "Team Collaboration: Working with colleagues to meet team targets and KPIs.",
          "Quality Assurance: Participating in quality checks and training sessions."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Pursue Class 12. Most BPOs require 10+2 qualification. Board Exams (Focus: English and Communication).",
          "After Class 12: Apply for Domestic BPO roles or specialized Diploma courses. Certificate in BPO Soft Skills. Duration: 1-3 months.",
          "After Graduation: Apply for International BPO/KPO roles. Any stream (Arts/Comm/Sci) works! B.A./B.Com/B.Sc Degree.",
          "Career Growth: Associate → Team Lead (2-3 years) → Operations Manager (5-8 years) → Senior Management (10+ years).",
          "Top Training Centers: IGNOU, NIESBUD, TimesPro, NIIT, Aptech.",
          "Specializations: Voice Support, Non-Voice (Email/Chat), Technical Support, Finance & Accounting, Healthcare, Travel & Hospitality."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Associate, 0-2 years): ₹3L–₹4.5L per annum. Domestic or international voice/non-voice roles.",
          "Mid-Level (Team Lead/TL, 2-5 years): ₹6L–₹10L per annum. Leading small teams and handling quality.",
          "Senior (Operations Manager, 5-10 years): ₹15L–₹25L per annum. Managing large operations and processes.",
          "Leadership (VP/Head, 10+ years): ₹35L–₹55L+ per annum. Strategic leadership and business development.",
          "Market Size: Projected to hit $45B by late 2026. Growing at CAGR of ~13%, faster than traditional IT services.",
          "City Trends: Bangalore, Delhi-NCR, Mumbai/Pune pay highest. Tier-2 cities (Jaipur, Indore, Coimbatore) booming with lower costs.",
          "Growth Trajectory: You can move from Associate to Team Lead in just 2–3 years if high-performing."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government/Vocational: ₹5,000–₹15,000 (Short-term certifications). Very affordable.",
          "Private Training: ₹20,000–₹50,000 (Personality development and accent training).",
          "Duration: Training usually lasts 1 to 3 months.",
          "Living Costs: ₹12,000–₹20,000 per month in major BPO hubs.",
          "Additional Costs: Language courses (₹10k–₹30k), certification exams (₹5k–₹15k).",
          "Total Investment: Approximately ₹50k–₹1L for complete training.",
          "ROI: With entry-level salaries of ₹3L–₹4.5L per annum, you can recover investment in 2-3 months. Fastest ROI among all careers!"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top BPO training institutes across India.",
        color: BLUE,
        content: [
          "Government/Public: IGNOU (Certificate in BPO), NIESBUD, State Skill Development Missions.",
          "Private: TimesPro, NIIT, Aptech, offer job-linked training programs.",
          "Geographic Diversity: North (Delhi/Gurgaon), South (Bangalore/Chennai), West (Mumbai/Pune), East (Kolkata).",
          "Company Training: Most BPOs provide in-house training for new hires. Free training upon joining!",
          "Online: Many platforms offer BPO soft skills and customer service training.",
          "Note: Choose institutes with strong placement record and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "National Scholarship Portal (NSP): Post-Matric scholarships for minority and EWS students.",
          "Tech Mahindra SMART Academy Scholarships: Up to 80% fee waiver for vocational courses.",
          "State-specific: Mukhyamantri Yuva Sambal Yojana (Rajasthan) providing stipends for skill training.",
          "Company Sponsorships: Many BPOs sponsor training for promising candidates.",
          "Merit-Based: Most institutes offer scholarships for top performers.",
          "Government Sponsorships: Ministry of Skill Development occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "NASSCOM: Primary industry body for IT-BPO. Offers certifications and networking.",
          "CompTIA A+: For tech support roles. Industry-recognized certification.",
          "Six Sigma Green Belt: For process quality and optimization roles.",
          "CEFR Language Certifications: For international voice roles. English proficiency crucial.",
          "Customer Service Certifications: Various platforms offer customer service excellence certifications.",
          "Continuing Education: Must stay updated with latest tools, processes, and customer service trends."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in BPO careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Customer Service Associate, Technical Support Executive, Data Entry Operator, Team Lead.",
          "New-Age Careers: AI Prompt Engineer (for chatbots), Social Media Content Moderator, Data Privacy Officer, Process Analyst.",
          "Specialized Roles: Finance & Accounting Specialist, Healthcare Claims Processor, Travel Consultant, Technical Support Expert.",
          "Entrepreneurship: Starting niche 'Boutique BPO' or recruitment consultancy for ITES sector.",
          "Consulting: BPO process consultant, quality assurance consultant, training consultant.",
          "International: Opportunities in USA, UK, Australia for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of BPO career.",
        color: BLUE,
        content: [
          "Rotational Shifts: Working at night can be tough on sleep cycle and social life.",
          "High Pressure: Often timed on every call (Average Handling Time), which can feel stressful.",
          "Repetitive Tasks: Some back-office roles can feel monotonous after few months.",
          "Attrition: High turnover in industry. Need to stay motivated and engaged.",
          "Work-Life Balance: Shift work can impact personal relationships and health.",
          "Emotional Labor: Dealing with frustrated customers requires emotional resilience.",
          "Limited Growth: Without further education, career growth can plateau.",
          "Continuous Learning: Must stay updated with new processes and technologies."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in BPO careers.",
        color: BLUE2,
        content: [
          "AI Augmentation: AI won't replace you; it becomes your 'Co-pilot,' handling typing while you handle thinking.",
          "KPO Shift: India moving from BPO to KPO (Knowledge Process Outsourcing)—handling high-value work like legal research and financial analytics.",
          "Hyper-Personalization: Using data to know exactly what customer needs before they even ask.",
          "Automation: Routine tasks increasingly automated. Focus shifting to complex problem-solving.",
          "Remote-First: Work-from-home becoming standard. Geographic boundaries disappearing.",
          "Skill Specialization: Demand for specialized skills (AI, data analytics, compliance) increasing.",
          "Global Collaboration: Working with teams across multiple countries and time zones.",
          "Wellness Focus: Companies investing in employee mental health and work-life balance."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Speak Up: Join school's debate club or drama team to build vocal confidence.",
          "Learn a Language: Besides English, learning Spanish, German, or French can double starting salary.",
          "Type Fast: Aim for speed of 35-40 words per minute. Practice typing regularly.",
          "Listen Actively: Practice summarizing what people say to you—#1 skill in customer service.",
          "Communication: Excel in English and presentation skills. Core BPO competencies.",
          "Tech Skills: Get comfortable with computers and basic software. Learn CRM basics.",
          "Empathy: Volunteer in customer service roles. Develop patience and understanding.",
          "Networking: Connect with BPO professionals. Learn about different roles and companies.",
          "Soft Skills: Work on confidence, clarity, and professionalism.",
          "Entrance Prep: No entrance exam needed! Focus on soft skills and language proficiency."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian BPO Leaders & Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Pramod Bhasin: Known as 'Father of BPO in India.' Founded Genpact and pioneered entire industry.",
          "Raman Roy: Often called 'Architect of Indian BPO.' Led early success of Spectramind and Quatrro.",
          "Keshav Murugesh: CEO of WNS Global Services and former Chairman of NASSCOM. Transformed BPO into 'high-value' industry.",
          "Tiger Tyagarajan: Long-time CEO of Genpact. Successfully steered industry through AI revolution.",
          "Anitha Rao: Symbol of female leadership in sector. Leading large-scale operations for global MNCs.",
          "Srinivas Kandula: Visionary leader in BPO transformation and digital innovation.",
          "Rajesh Masrani: Pioneer in KPO (Knowledge Process Outsourcing) and high-value services."
        ]
      }
    ]
  },
  business_analytics: {
    slug: "business_analytics",
    badge: "📊 The Data Detective for Class 10+",
    heading: "Business Analytics",
    subheading: "Turn data into decisions. Predict the future. Drive billion-dollar strategies. Join ₹6L–₹1.2Cr+ market with 35.8% CAGR growth.",
    whyCards: [
      { icon: "TrendingUp", title: "$21B Market by 2030", description: "Indian Data Analytics market growing at massive 35.8% CAGR. Expected to reach $21B by 2030. Explosive growth opportunity.", borderColor: "#10B981" },
      { icon: "Zap", title: "₹6L–₹1.2Cr+ Salaries", description: "Entry-level ₹6L–₹9L. Mid-level ₹15L–₹25L. Senior ₹35L–₹60L. CXO/CDO ₹1.2Cr+. Fastest salary growth in India.", borderColor: "#059669" },
      { icon: "Globe", title: "40% Talent Shortage", description: "In 2026, 40% shortage of skilled analysts in India. Job-seeker's market. High demand globally. Remote opportunities abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "India's Data Capital", description: "India has 900M+ internet users creating massive data trails. Companies desperate for 'Data Detectives' to unlock insights and competitive advantage.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/PG Diploma (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, GMAT, or Certification Programs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹6L–₹1.2Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$21B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "35.8%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Turning raw data into smart business decisions.",
        color: BLUE,
        content: [
          "Business Analytics Definition: Art and science of turning 'raw data' into 'smart decisions.' Every purchase, video watch, UPI transaction creates digital footprints. You decode them.",
          "The Role: The Storyteller (look at thousands of numbers and find 'story' they're telling), The Predictor (use math to guess what happens next), The Problem Solver (help companies figure out how to deliver faster or predict customer behavior).",
          "What They Do: Analyze data, create dashboards, build predictive models, identify trends, make recommendations, present findings, solve business problems, optimize processes, drive strategy.",
          "Why It Matters: India is world's 'Data Capital' with 900M+ internet users. Companies have more data than they know what to do with. They need 'Data Detectives' to help them grow in super-competitive market.",
          "The Scope: Work in FinTech, E-commerce, EdTech, Healthcare, Consulting, or as freelance data consultant.",
          "The Impact: You're not just analyzing numbers—you're making decisions that affect millions of people, driving company growth, and shaping the future of Indian business."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Decision Architect",
        icon: "Clock",
        description: "Real workflow of a business analyst.",
        color: BLUE2,
        content: [
          "9:30 AM - The Morning Dashboard: Day begins at high-tech office in Gurgaon. First thing: check 'Dashboard'—screen full of colorful charts. Notice sales for new energy drink dropped 10% yesterday. Don't panic—start digging into 'Why.'",
          "11:00 AM - The Data Deep-Dive: Use SQL to pull data from company's massive digital warehouse. Realize sales drop happened only in cities where it rained heavily. Delivery bikes couldn't reach customers. Found 'Smoking Gun.'",
          "1:30 PM - The Strategy Lunch: Over lunch with Marketing team, present findings. Suggest that next storm prediction, app should offer 'Stay-at-Home' discounts to encourage early orders. Not just 'math person'—business strategist.",
          "4:00 PM - Visualizing the Future: Spend afternoon on Tableau creating beautiful map showing exactly where company should open next five warehouses. Looks like art, but actually multi-crore investment plan.",
          "6:30 PM - The Global Sync: Video call with team in New York. Explain 'Rainy Day Strategy.' They're impressed and want to try in their cities. Head home knowing work today will save company millions tomorrow."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Analyst DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: The Curious Mind (find yourself asking 'Why did that happen?' or 'What if we tried this?'), The Puzzle Lover (enjoy Sudoku, riddles, strategy games like Chess or Catan?), Detail-Oriented (notice small patterns others miss?).",
          "Soft Skills: The Balanced Brain (handle bit of math but also enjoy talking to people), Communication (explain complex findings simply), Creativity (find innovative solutions), Storytelling (make data compelling).",
          "Hard Skills: SQL, Python, Excel, Tableau/Power BI, Statistics, Data Modeling, Business Acumen, Problem-Solving.",
          "The Self-Check: Do you love puzzles? Can you see patterns? Do you ask 'why' constantly? If yes, you have the Analyst DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Intelligence Cycle",
        icon: "Briefcase",
        description: "The complete business analyst workflow.",
        color: BLUE2,
        content: [
          "Descriptive (What happened?): Summarizing past data. Creating dashboards and reports.",
          "Diagnostic (Why did it happen?): Finding root causes. Analyzing trends and patterns.",
          "Predictive (What will happen?): Using trends to forecast. Building predictive models.",
          "Prescriptive (What should we do?): Making final recommendations. Driving business strategy.",
          "Data Collection: Gathering data from multiple sources. Ensuring data quality.",
          "Analysis: Performing statistical analysis and modeling. Finding insights.",
          "Visualization: Creating compelling dashboards and reports. Telling data stories.",
          "Stakeholder Communication: Presenting findings to business leaders. Driving action."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose Commerce or Science with Math. Math is 'language' of analytics. Class 12 Boards (Focus: Math and Economics).",
          "After Class 12: Pursue degree in B.Tech, B.Sc (Stats/Math), BBA, or BCA. Graduation (3-4 years).",
          "After Graduation: Get MBA in Business Analytics or PG Diploma (PGDBA). Post-Graduation (2 years).",
          "Career Switchers: Professionals in Finance/HR take 6-month Certification bootcamps.",
          "Key Entrance Exams: CAT, XAT, GMAT (for MBA); GATE (for M.Tech); CUET (for top undergrad colleges).",
          "Top Institutions: IIM Bangalore (PGPBA), IIM Calcutta (PGDBA), ISB Hyderabad, SPJIMR Mumbai.",
          "Specializations: Financial Analytics, Marketing Analytics, Supply Chain Analytics, Healthcare Analytics."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹6L–₹9L per annum. Analytics departments or consulting firms.",
          "Mid-Level (5-8 years): ₹15L–₹25L per annum. Senior positions in tech or finance companies.",
          "Senior/Director (8+ years): ₹35L–₹60L per annum. Leading analytics teams and strategy.",
          "CXO/Chief Data Officer (10+ years): ₹1.2Cr+ per annum. C-suite leadership roles.",
          "Market Growth: Indian Data Analytics market growing at 35.8% CAGR, expected to reach $21B by 2030.",
          "Hiring Trends: 40% shortage of skilled analysts in India in 2026. Job-seeker's market.",
          "Growth Trajectory: Entry to Senior typically takes 8–12 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹1.5L–₹10L (Total for 2-year MBA at IIMs/IITs). Very affordable but highly competitive.",
          "Private Fees: ₹15L–₹25L (ISB, NMIMS, etc.). Better infrastructure and placement support.",
          "Online Certifications: ₹50k–₹2L (upGrad, Great Learning, Coursera). Flexible and affordable.",
          "Duration: 2 years (Full-time PG) or 6–11 months (Online Certifications).",
          "Living Costs: ₹15,000–₹25,000 per month in cities like Bangalore or Delhi.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), software tools (₹10k–₹30k), certifications (₹20k–₹100k).",
          "Total Investment: Approximately ₹5L–₹20L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹6L–₹9L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top business analytics institutes across India.",
        color: BLUE,
        content: [
          "Public/Govt: IIM Bangalore (PGPBA), IIM Calcutta (PGDBA), IIT Bombay, IIT Kharagpur.",
          "Private: ISB Hyderabad, SPJIMR Mumbai, NMIMS, Great Lakes Chennai, FLAME Pune.",
          "Online: upGrad (IIT-B / IIIT-B), Great Learning, Coursera (Google/IBM Professional Certificates).",
          "Specialized: Simplilearn, DataCamp, Udacity for specialized certifications.",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: NSP (National Scholarship Portal) – Merit-cum-Means scholarships.",
          "Institutional: Most IIMs offer 100% fee waivers for students with annual family income below ₹5L.",
          "Private: Tata Trusts and Reliance Foundation offer grants for students in Data Science/AI fields.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "CAP (Certified Analytics Professional): Industry-recognized certification for analytics professionals.",
          "Tableau Desktop Specialist: Certification for data visualization expertise.",
          "Google Data Analytics Professional Certificate: Comprehensive certification from Google.",
          "Microsoft Certified: Data Analyst Associate: For Power BI and data analysis skills.",
          "NASSCOM: Industry body providing certifications and networking opportunities.",
          "Analytics Society of India: Professional body for analytics professionals.",
          "Continuing Education: Must stay updated with latest tools and methodologies."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in analytics careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Business Analyst, Marketing Analyst, Financial Analyst, Operations Analyst.",
          "New-Age Careers: AI Strategy Consultant, Customer Success Analyst, ESG (Sustainability) Data Analyst, Product Analyst.",
          "Specialized Roles: Financial Risk Analyst, Healthcare Data Analyst, Supply Chain Analyst, Fraud Detection Specialist.",
          "Entrepreneurship: Starting 'Niche Analytics Agency' for small Kirana stores or D2C brands.",
          "Consulting: Analytics consultant for enterprises, strategy development, training.",
          "International: Opportunities in USA, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of analytics career.",
        color: BLUE,
        content: [
          "The 'Dirty' Work: 70% of time spent 'Cleaning Data' (fixing typos and errors)—not all fancy charts.",
          "Rapid Change: Tools like ChatGPT-6 or Python 4.0 change every year. Must be 'Permanent Student.'",
          "Sitting Time: Spend 8–10 hours in front of screen. Back-care and exercise mandatory!",
          "Pressure to Deliver: Expected to provide insights that drive business decisions. High stakes.",
          "Data Quality Issues: Often working with incomplete or inaccurate data. Frustrating.",
          "Stakeholder Management: Explaining complex findings to non-technical people challenging.",
          "Continuous Learning: Must stay updated with latest tools, languages, and methodologies.",
          "Work-Life Balance: Tight deadlines and complex projects can demand long hours."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in analytics careers.",
        color: BLUE2,
        content: [
          "AI Co-Pilots: AI will do coding; you do 'Thinking.' Augmented analytics becoming standard.",
          "Edge Analytics: Analyzing data directly on smartwatch or fridge without sending to server.",
          "Ethical AI: Ensuring data doesn't discriminate based on gender or religion. Compliance critical.",
          "Real-Time Analytics: Moving from batch processing to real-time decision-making.",
          "Automated Insights: AI automatically generating insights and recommendations.",
          "Privacy-First Analytics: Analyzing data while maintaining user privacy. Differential privacy emerging.",
          "Sustainability Analytics: ESG data analysis becoming critical for business decisions.",
          "Democratization: Non-technical users able to perform analytics with AI assistance."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master Excel: It's 'Swiss Army Knife' of business. Learn advanced formulas and pivot tables.",
          "Learn a Language: Start with Python. Easier than French or Sanskrit! Build coding foundation.",
          "Read Business News: Follow The Economic Times or The Morning Context. Understand business.",
          "Play Strategy Games: Age of Empires, SimCity, Fantasy Cricket help build analytical mind.",
          "Math Foundation: Excel in statistics and probability. Core to analytics.",
          "Data Exploration: Find datasets on Kaggle. Practice analyzing and visualizing.",
          "Communication: Excel in English and presentation skills. Core analyst competencies.",
          "Networking: Connect with data professionals. Learn about different specializations.",
          "Online Courses: Take free courses on Coursera or DataCamp. Build skills early.",
          "Entrance Prep: Start early preparation for CAT, GMAT, or other entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Data Analytics Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Anand S. Anand: CEO of Gramener. Pioneer in visual storytelling with data.",
          "Goda Ramkumar: Leading Data Scientist (formerly Ola/Swiggy). Known for making apps 'smart.'",
          "Abhishek Thakur: World's first 4x Kaggle Grandmaster. 'Sachin Tendulkar' of data competitions.",
          "Mathangi Sri: Tech leader who built massive data teams at PhonePe and Gojek.",
          "Dr. Pulak Ghosh: Professor at IIM Bangalore. Global expert on Big Data in Finance.",
          "Anirudh Koul: AI researcher and entrepreneur. Pioneer in machine learning applications.",
          "Srinivas Kandula: Visionary in data-driven business transformation."
        ]
      }
    ]
  },
  business_financial_management: {
    slug: "business_financial_management",
    badge: "💰 The Engine of Growth for Class 10+",
    heading: "Business Financial Management",
    subheading: "Master money. Drive strategy. Build billion-dollar companies. Join ₹6L–₹1.5Cr+ market with 11% CAGR growth.",
    whyCards: [
      { icon: "TrendingUp", title: "11% CAGR Growth", description: "Indian Financial Services market growing at 11% CAGR. Driven by Fintech and Digital Banking. Explosive opportunities.", borderColor: "#10B981" },
      { icon: "Zap", title: "₹6L–₹1.5Cr+ Salaries", description: "Entry-level ₹6L–₹10L. Mid-level ₹15L–₹25L. Senior ₹35L–₹60L. CFO ₹1.5Cr+. Highest-paying career in India.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in London, Dubai, Singapore for Indian CA/CFA professionals. International finance hubs booming.", borderColor: "#3B82F6" },
      { icon: "Award", title: "$5T Economy Mission", description: "India aiming for $5 Trillion economy. Every startup and factory needs Finance Managers. You're essential to nation's growth.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "B.Com + CA/MBA (5-7 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CA Foundation, CAT, or CFA", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹6L–₹1.5Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$5T", label: "India's Economy Target", gradient: "from-green-500 to-green-600" },
      { value: "11%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Managing company's money and driving financial strategy.",
        color: BLUE,
        content: [
          "Business Financial Management Definition: Art and science of managing company's money. Not just 'counting cash'—making big decisions that decide if company succeeds or fails.",
          "The Role: The Investment Architect (decide whether company should spend ₹100 crores on new factory or tech startup), The Profit Guardian (find ways to reduce costs), The Capital Raiser (convince banks/investors to give money), The Risk Watchdog (predict financial storms and protect company).",
          "What They Do: Forecast revenue and expenses, create budgets, manage cash flow, raise capital, analyze investments, manage risks, prepare financial reports, advise on strategy, optimize costs, ensure compliance.",
          "Why It Matters: In 'New India' aiming for $5T economy, every startup in Bengaluru and factory in Pune needs Finance Manager. Without them, companies guessing; with them, growing.",
          "The Scope: Work in banking, consulting, tech giants, startups, manufacturing, or as independent financial advisor.",
          "The Impact: You're not just managing money—you're making decisions that affect thousands of employees, millions of customers, and shaping India's economic future."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Money Strategist",
        icon: "Clock",
        description: "Real workflow of a finance manager.",
        color: BLUE2,
        content: [
          "9:00 AM - The Market Pulse: Walk into glass-walled office in Mumbai's BKC. Check 'Bloomberg Terminal'—screen full of red and green numbers. Indian Rupee weakened against Dollar. Problem: company imports raw materials. Call treasury team to 'hedge' risk.",
          "11:30 AM - The CEO Huddle: Sit with CEO. She wants launch new product in Middle East. Your job isn't 'yes' or 'no'—show math. Present spreadsheet: ₹20 crores to launch, ₹50 crores within two years. You're 'reality check' for company's dreams.",
          "1:30 PM - Lunch & Networking: Lunch with bank representative. Negotiating interest rate for new loan. Every 0.5% saved means millions kept for company. Not just eating—deal-making.",
          "4:00 PM - The Data Deep-Dive: Afternoon with Data Analytics team. Using AI tool to predict next month's sales. Notice people buying more through mobile app than stores. Decide to shift budget to digital marketing.",
          "6:30 PM - The Investors' Call: Day ends with video call with investors in London. They want know why profit grew only 5% last quarter. Explain long-term strategy with confidence. Head home knowing you managed company's future."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Finance DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Analytical Mind (love puzzles and finding patterns in numbers?), The 'Forward' Thinker (often think about what will happen tomorrow because of what you do today?), High Integrity (in finance, word is bond—naturally honest and ethical?).",
          "Soft Skills: Communication Mastery (explain complex math to grandmother in way she understands?), Leadership (guide teams and make tough decisions), Attention to Detail (catch small errors before they become big problems).",
          "Hard Skills: Excel Mastery, Financial Analysis, Accounting Knowledge, Data Interpretation, Risk Management, Strategic Thinking, Compliance Knowledge.",
          "The Self-Check: Do you love numbers and patterns? Can you think strategically? Are you naturally ethical? If yes, you have the Finance DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Financial Life Cycle",
        icon: "Briefcase",
        description: "The complete finance manager workflow.",
        color: BLUE2,
        content: [
          "Forecasting: Predicting how much money company will earn and spend. Revenue and expense projections.",
          "Budgeting: Deciding exactly where every rupee will go. Resource allocation and planning.",
          "Treasury Management: Ensuring always enough cash to pay salaries and bills. Liquidity management.",
          "Reporting: Creating 'Report Card' (Balance Sheet) telling everyone how company doing. Financial statements.",
          "Investment Analysis: Evaluating investment opportunities. Capital allocation decisions.",
          "Risk Management: Identifying and mitigating financial risks. Hedging strategies.",
          "Compliance: Ensuring company follows all financial regulations and laws.",
          "Strategic Planning: Advising leadership on financial strategy and growth opportunities."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose Commerce with Mathematics. Math is 'alphabet' of finance. Board Exams (Focus: Accounting and Economics).",
          "After Class 12: Pursue 3-year Bachelor's in Commerce or Management. B.Com (Hons) / BBA (Finance) / BMS. Duration: 3 years.",
          "Professional Path: Start specialized certification right after Class 12. CA (ICAI) / CMA / CS. Duration: 4.5-5 years.",
          "After Graduation: Pursue specialized Master's degree or global certification. MBA (Finance) / CFA / ACCA. Duration: 2 years or 3-4 years.",
          "Top Institutions: SRCC (Delhi), IIM Bangalore, IIM Calcutta, JBIMS (Mumbai), SPJIMR (Mumbai).",
          "Specializations: Investment Banking, Corporate Finance, Treasury Management, Risk Management, Wealth Management."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹6L–₹10L per annum. Finance departments or consulting firms.",
          "Mid-Level (5-10 years): ₹15L–₹25L per annum. Senior positions in banks or tech companies.",
          "Senior/VP Level (10+ years): ₹35L–₹60L+ per annum. Leading finance teams and strategy.",
          "Leadership/CFO (15+ years): ₹1.5Cr+ per annum. C-suite leadership roles.",
          "Market Size: Indian Financial Services market growing at 11% CAGR, driven by Fintech and Digital Banking.",
          "City Trends: Mumbai (Financial Capital) offers highest salaries. GIFT City (Gujarat) emerging as massive hub for international finance.",
          "Growth Trajectory: Entry to CFO typically takes 15–20 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹1.5L–₹5L (Total for 3 years, e.g., DU/SRCC). Very affordable but highly competitive.",
          "Private Fees: ₹10L–₹25L (Total for 3 years/MBA). Better infrastructure and placement support.",
          "Professional Certs: CA costs approx. ₹2L–₹3L (including coaching); CFA costs ₹3L–₹5L.",
          "Living Costs: ₹15,000–₹25,000 per month in major metros.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), study materials (₹10k–₹30k), certifications (₹50k–₹200k).",
          "Total Investment: Approximately ₹8L–₹20L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹6L–₹10L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top finance institutes across India.",
        color: BLUE,
        content: [
          "North: SRCC (Delhi), IIM Lucknow, FMS Delhi, Delhi School of Economics.",
          "South: IIM Bangalore, Loyola College (Chennai), IIM Kozhikode, ISB Hyderabad.",
          "East: IIM Calcutta (The 'Finance Campus' of India), XLRI Jamshedpur, Jadavpur University.",
          "West: IIM Ahmedabad, JBIMS (Mumbai), SPJIMR (Mumbai), FLAME Pune.",
          "Distance: IGNOU and Amity Online offer flexible B.Com/MBA options.",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: NSP schemes for meritorious students from low-income families.",
          "Institutional: IIMs offer 100% need-based scholarships for students with family income below ₹5L.",
          "Private: Aditya Birla Group Scholarship and TATA Trusts for professional finance courses.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "ICAI (Institute of Chartered Accountants of India): Mandatory body for CAs. Most prestigious in India.",
          "CFA Institute: Global body for Investment Management. Highly respected internationally.",
          "SEBI: Securities and Exchange Board of India. Licensing required for Stock Market/Investment Advisory roles.",
          "CA (Chartered Accountant): India's most respected finance credential. Rigorous qualification.",
          "CMA (Cost Management Accountant): Specialization in cost and management accounting.",
          "CS (Company Secretary): Specialization in corporate governance and compliance.",
          "Continuing Education: Must stay updated with latest tax laws, accounting standards, and regulations."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in finance careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Investment Banker, Corporate Accountant, Auditor, Financial Analyst, CFO.",
          "New-Age Careers: Fintech Product Manager, Sustainable Finance Expert (ESG), Crypto-Asset Analyst, Virtual CFO.",
          "Specialized Roles: Treasury Manager, Risk Manager, Wealth Manager, Tax Consultant, Compliance Officer.",
          "Entrepreneurship: Starting 'Wealth Management' firm or Finance-Education YouTube channel.",
          "Consulting: Financial consultant for enterprises, strategy development, M&A advisory.",
          "International: Opportunities in USA, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of finance career.",
        color: BLUE,
        content: [
          "High Pressure: During 'Audit Season' (March-April), 14-hour workdays are common.",
          "Zero-Error Margin: Single missing zero in report can cost company crores. Extreme precision required.",
          "Continuous Learning: Tax laws and tech change every year. Must keep studying.",
          "Work-Life Balance: Tight deadlines and complex projects can demand long hours.",
          "Emotional Stress: Making decisions affecting thousands of employees and millions of customers.",
          "Regulatory Compliance: Constantly changing regulations and compliance requirements.",
          "Market Volatility: External factors like currency fluctuations can impact company finances.",
          "Responsibility: Accountable for company's financial health and stakeholder trust."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in finance careers.",
        color: BLUE2,
        content: [
          "AI-Finance: AI will handle data entry; Finance Managers will focus on 'AI-Output Strategy.'",
          "Blockchain Accounting: Real-time auditing where every transaction verified by code, not paper.",
          "Green Finance: Companies judged by 'Carbon Footprint' as much as profit. ESG becoming critical.",
          "Real-Time Analytics: Moving from batch processing to real-time financial decision-making.",
          "Automated Compliance: AI automating regulatory compliance and reporting.",
          "Personalized Finance: AI-driven personalized financial advice for customers.",
          "Decentralized Finance: Blockchain-based financial systems emerging.",
          "Sustainability Reporting: Mandatory ESG and sustainability reporting becoming standard."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master Excel: It's 'magic wand' of finance. Learn basic formulas today.",
          "Read Business News: Follow Moneycontrol or The Economic Times. Understand business.",
          "Stock Market Simulations: Try 'Paper Trading' apps to understand how markets move.",
          "Volunteer: Offer to manage budget for school's annual fest or local NGO drive.",
          "Math Foundation: Excel in mathematics and statistics. Core to finance.",
          "Accounting Basics: Learn basic accounting principles and bookkeeping.",
          "Communication: Excel in English and presentation skills. Core finance competencies.",
          "Networking: Connect with finance professionals. Learn about different specializations.",
          "Online Courses: Take free courses on Coursera or Khan Academy. Build skills early.",
          "Entrance Prep: Start early preparation for CA Foundation, CAT, or other entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Finance Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Deepak Parekh: Legendary leader of HDFC. Built modern Indian housing finance.",
          "Arundhati Bhattacharya: Former Chairperson of SBI. Pioneer for women in high-stakes finance.",
          "Sankaran Naren: One of India's most respected fund managers. Known for deep market insights.",
          "V. Anantha Nageswaran: Chief Economic Advisor of India. Master of macroeconomic strategy.",
          "Naina Lal Kidwai: First Indian woman to graduate from Harvard Business School. Led foreign bank in India.",
          "Uday Kotak: Founder of Kotak Mahindra Bank. Visionary in Indian banking.",
          "Chanda Kochhar: Former CEO of ICICI Bank. Pioneer in banking innovation."
        ]
      }
    ]
  },
  business_operations_manager: {
    slug: "business_operations_manager",
    badge: "⚙️ The Master Orchestrator for Class 10+",
    heading: "Business Operations Manager",
    subheading: "Turn chaos into systems. Optimize every process. Drive efficiency that saves millions. ₹4.5L–₹60L+ salaries with 23.5% CAGR growth.",
    whyCards: [
      { icon: "Zap", title: "$4.2B Market by 2030", description: "Business Process Management sector in India growing at 23.5% CAGR. Expected to reach $4.2B by 2030. Explosive growth in operations roles.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4.5L–₹60L+ Salaries", description: "Entry-level ₹4.5L–₹7.5L. Mid-level ₹12L–₹22L. Senior ₹35L–₹60L+. Leadership ₹75L+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Globe", title: "High Demand Globally", description: "India becoming 'World's Back Office' and manufacturing hub. Operations managers critical for scaling. Remote opportunities abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Efficiency = Profit", description: "Every 1% efficiency gain saves companies crores. Operations managers are profit multipliers. Valued across all industries.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + 2 years experience + MBA", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, XAT, GMAT (for MBA)", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4.5L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$4.2B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "23.5%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Making companies run like well-oiled machines.",
        color: BLUE,
        content: [
          "Business Operations Definition: Art and science of making a company efficient. While salespeople sell and coders build, operations managers ensure entire process—from buying materials to delivering product—happens at lowest cost and highest speed.",
          "The Role: The Process Architect (design 'how-to' for every task), The Problem Solver (find solutions before customers notice issues), The Budget Guardian (monitor spending for profitability), The Bridge Builder (coordinate between departments).",
          "What They Do: Design processes, optimize workflows, manage budgets, coordinate departments, solve problems, monitor KPIs, implement systems, drive efficiency, manage teams, ensure quality.",
          "Why It Matters: India becoming 'World's Back Office' and manufacturing hub. With projected $1.6 trillion in annual productivity gains for Indian businesses by 2030, operations managers are most critical players in economic growth.",
          "The Scope: Work in E-commerce, Manufacturing, Tech, Finance, Healthcare, Logistics, or as operations consultant.",
          "The Impact: You're not just managing processes—you're saving companies millions, enabling growth, and shaping how modern businesses operate."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Chaos Tamer",
        icon: "Clock",
        description: "Real workflow of an operations manager.",
        color: BLUE2,
        content: [
          "9:00 AM - The Morning Dashboard: Day begins at tech hub in Bengaluru. Log into digital dashboard to check KPIs. Notice 'delivery success rate' in North India dipped 4% last night. Don't panic—start trace immediately.",
          "11:00 AM - The Strategy Huddle: Meet with Logistics team. Discover local strike delayed trucks. Quickly negotiate with secondary courier partner to reroute high-priority packages. Problem solved before afternoon rush.",
          "1:30 PM - The Efficiency Lunch: Lunch with Head of Engineering. Discussing new AI tool that can automate customer query sorting. Not just eating—calculating 'Return on Investment' (ROI) of this tech.",
          "3:30 PM - Process Mapping: Spend afternoon in 'War Room' with whiteboards. Mapping new workflow for customer support team to reduce response time from 10 minutes to 2 minutes. Literally 're-wiring' how company works.",
          "6:00 PM - The Global Sync: Video call with US headquarters. Present report showing operational changes saved company ₹50 lakhs this month. Head home knowing you were reason company didn't just survive—it thrived."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Operations DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: The 'Lego' Mindset (love building complex structures and seeing how parts fit together?), Calm Under Pressure (when things go wrong, stay cool and find solution?), Data-Driven (like using numbers and charts to prove point?), High Empathy (listen to worker's struggle and find way to help?).",
          "Soft Skills: Problem-Solving, Leadership, Communication, Adaptability, Attention to Detail, Strategic Thinking, Stakeholder Management.",
          "Hard Skills: Process Mapping, Data Analysis, Excel, Project Management, Supply Chain Knowledge, Budget Management, Six Sigma.",
          "The Self-Check: Do you love organizing chaos? Can you see inefficiencies? Do you enjoy solving complex problems? If yes, you have Operations DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Operational Cycle",
        icon: "Briefcase",
        description: "The complete operations manager workflow.",
        color: BLUE2,
        content: [
          "Strategic Planning: Setting monthly goals (e.g., 'Reduce waste by 10%'). Defining operational targets.",
          "Supply Chain Management: Ensuring company has materials needed to work. Managing vendors and suppliers.",
          "Human Resource Liaison: Making sure right people in right roles. Managing team performance.",
          "Financial Monitoring: Checking budgets and cutting unnecessary costs. Ensuring profitability.",
          "Process Optimization: Continuously improving workflows and systems. Implementing efficiency measures.",
          "Quality Assurance: Monitoring quality standards and compliance. Ensuring customer satisfaction.",
          "Risk Management: Identifying and mitigating operational risks. Planning for contingencies.",
          "Performance Tracking: Monitoring KPIs and metrics. Reporting to leadership."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose Commerce or Science (PCM). Math and logical thinking essential. Class 12 Boards.",
          "After Class 12: Pursue Bachelor's in BBA, BMS, or B.Tech (Engineering). Entrance Exams: IPMAT, CUET, NPAT.",
          "After Graduation: Gain 2 years work experience in operations, logistics, or supply chain roles.",
          "Post-Experience: Pursue MBA in Operations or Business Management. Entrance Exams: CAT, XAT, GMAT.",
          "Lateral Entry: Professionals from Logistics, Sales, or HR can switch with Six Sigma Certification.",
          "Key Certifications: Six Sigma Green Belt, PMP (Project Management Professional), APICS (CSCP/CPIM).",
          "Top Institutions: IIM Bangalore, IIM Calcutta, XLRI Jamshedpur, ISB Hyderabad, SPJIMR Mumbai."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹4.5L–₹7.5L per annum. Operations coordinator or assistant roles.",
          "Mid-Level (5-10 years): ₹12L–₹22L per annum. Operations manager or senior coordinator positions.",
          "Senior/Leadership (10+ years): ₹35L–₹60L+ per annum. Director or VP of Operations roles.",
          "Market Growth: Business Process Management sector growing at 23.5% CAGR, expected to reach $4.2B by 2030.",
          "Industry Trends: Operations roles booming in E-commerce, FinTech, and Renewable Energy sectors.",
          "City Trends: Mumbai (Financial Ops), Bengaluru (Tech Ops), Gurgaon (Corporate Ops), Pune (Manufacturing Ops).",
          "International: High demand in Singapore, Dubai, Germany for Indian managers skilled in lean manufacturing."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹2L–₹25L (Total for MBA at IIMs/FMS). Very affordable but highly competitive.",
          "Private Fees: ₹15L–₹30L (XLRI, SPJIMR, NMIMS). Better infrastructure and placement support.",
          "Certification Programs: ₹15k–₹50k (Six Sigma Green Belt, PMP). Flexible and affordable.",
          "Duration: 3 years (Undergrad) + 2 years (MBA) = 5 years total.",
          "Living Costs: ₹15,000–₹25,000 per month in major cities.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), certifications (₹50k–₹100k), software tools (₹10k–₹30k).",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹4.5L–₹7.5L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top operations management institutes across India.",
        color: BLUE,
        content: [
          "North: FMS Delhi, IIM Lucknow, MDI Gurgaon, Delhi University.",
          "South: IIM Bangalore, NITIE (IIM Mumbai), ISB Hyderabad, IIM Kozhikode.",
          "East: IIM Calcutta, XLRI Jamshedpur, IIT Kharagpur (VGSoM), Jadavpur University.",
          "West: IIM Ahmedabad, SPJIMR Mumbai, JBIMS Mumbai, Symbiosis Pune.",
          "Distance: Symbiosis (SCDL), IGNOU offer respected distance diplomas in management.",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: NSP (National Scholarship Portal) – Post-matric and merit-based scholarships.",
          "Institutional: IIMs offer 100% need-based scholarships for families earning < ₹5L annually.",
          "Private: IDFC FIRST Bank MBA Scholarship (₹2L for 2 years). Various corporate scholarships.",
          "State: Odisha Mukhyamantri Medhabi Chhatra Protsahan Yojana for technical/professional courses.",
          "Company Sponsorships: Many companies sponsor MBA for high-performing employees.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Skill Development occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "Six Sigma: Green Belt and Black Belt certifications. Global standard for process improvement.",
          "PMP: Project Management Professional. Managed by PMI. Essential for senior roles.",
          "APICS: CSCP (Certified Supply Chain Professional) and CPIM. For supply chain specialists.",
          "IIBA: International Institute of Business Analysis. For business analysis roles.",
          "ASQ: American Society for Quality. For quality management certifications.",
          "Continuing Education: Must stay updated with latest tools, methodologies, and industry trends."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in operations careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Operations Coordinator, Operations Manager, Supply Chain Manager, Plant Manager.",
          "New-Age Careers: Sustainability Operations Manager, AI-Process Automator, Customer Experience (CX) Operations Manager.",
          "Specialized Roles: Logistics Manager, Quality Assurance Manager, Process Improvement Specialist, Inventory Manager.",
          "Entrepreneurship: Starting Operations Consultancy for small D2C brands or manufacturing units.",
          "Consulting: Operations consultant for management consulting firms. Helping companies optimize.",
          "International: Opportunities in Singapore, Dubai, Germany for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of operations career.",
        color: BLUE,
        content: [
          "The 'Always-On' Mode: Operations doesn't stop. Might get emergency call at 2AM about warehouse fire.",
          "The Middleman Stress: Often stuck between boss's demands and workers' struggles.",
          "Data Overload: Spend hours looking at spreadsheets. If you hate math, this will be tough.",
          "High Pressure: Responsible for company's efficiency and profitability. Mistakes are costly.",
          "Continuous Problem-Solving: Every day brings new challenges and unexpected issues.",
          "Work-Life Balance: Crisis situations can require long hours and weekend work.",
          "Resistance to Change: Implementing new processes often faces resistance from teams.",
          "Continuous Learning: Must stay updated with new tools, methodologies, and best practices."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in operations careers.",
        color: BLUE2,
        content: [
          "Hyper-Automation: AI will handle routine scheduling. Managers will focus on Human-AI Collaboration.",
          "Circular Operations: Focus on 'Zero-Waste' and ESG (Environmental, Social, Governance) standards.",
          "Cloud Operations: Managing massive global teams from single laptop using real-time cloud data.",
          "Predictive Analytics: Using AI to predict problems before they happen. Proactive management.",
          "Remote-First: Work-from-home becoming standard. Geographic boundaries disappearing.",
          "Sustainability Focus: Operations increasingly focused on environmental impact and sustainability.",
          "Global Collaboration: Managing operations across multiple countries and time zones.",
          "Continuous Improvement: Lean Six Sigma and continuous improvement becoming standard practice."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Excel is King: Learn it early. It's the 'Magic Wand' of Operations. Master formulas and pivot tables.",
          "Organize Events: Be the one who manages school fest or local club tournament. Real operations experience.",
          "Read Case Studies: Follow stories of how companies like Zomato or Blinkit delivery systems work.",
          "Public Speaking: Master of spoken word to lead teams. Join debate club or toastmasters.",
          "Math Foundation: Excel in mathematics and statistics. Core to operations.",
          "Logical Thinking: Solve puzzles and logic problems. Develop analytical mindset.",
          "Leadership: Take leadership roles in school clubs and projects. Develop team management skills.",
          "Networking: Connect with operations professionals. Learn about different roles and companies.",
          "Online Courses: Take free courses on Coursera or edX. Learn about supply chain and operations.",
          "Entrance Prep: Start early preparation for CAT, XAT, or other MBA entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Operations Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Vipul Vij: Chief Operations Officer at PGP Glass. Leader in operational excellence.",
          "Manoj Chhablani: COO of Webgility. Expert in scaling software operations globally.",
          "Jison John: CEO & MD of Allianz Services India. Master of large-scale global service operations.",
          "Colonel Shubhodoy Mukherjee: CEO of Mumbai Metro One. Bringing military-grade operational discipline to public transport.",
          "Gagan Arora: Founder & CEO of Vertex Global Services. Leader in strategic growth and innovative operations.",
          "Rajesh Masrani: Pioneer in operational transformation and digital innovation.",
          "Anitha Rao: Symbol of female leadership in operations. Leading large-scale operations for global MNCs."
        ]
      }
    ]
  },
  human_resources: {
    slug: "human_resources",
    badge: "👥 The People Powerhouse for Class 10+",
    heading: "Human Resources (HR)",
    subheading: "Build winning teams. Shape company culture. Drive growth through people. ₹3.5L–₹1.5Cr+ salaries with 15% annual growth.",
    whyCards: [
      { icon: "Users", title: "15% Annual Growth", description: "HR hiring projected to grow 15% annually as more Global Capability Centers (GCCs) open in India.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹3.5L–₹1.5Cr+ Salaries", description: "Entry-level ₹3.5L–₹7.5L. Mid-level ₹12L–₹22L. Senior ₹35L–₹65L+. CHRO ₹1.5Cr+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Globe", title: "World's Largest Young Workforce", description: "India has world's largest young workforce. Global companies rushing to India need HR experts to manage this talent.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Strategic Leadership Role", description: "HR is no longer just 'hiring and firing.' Today, HR leaders sit at the C-suite table shaping company strategy.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/PG Diploma (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, XAT, TISSNET, CUET-PG", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3.5L–₹1.5Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "15%", label: "Annual Growth Rate", gradient: "from-green-500 to-green-600" },
      { value: "1.4B+", label: "Young Workforce in India", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Finding, developing, and retaining the best talent.",
        color: BLUE,
        content: [
          "Human Resources Definition: Department responsible for finding, screening, recruiting, and training job applicants, as well as administering employee-benefit programs.",
          "The Talent Scout: Find the 'hidden gems'—talented people who will make company successful. Spot potential before competitors do.",
          "The Culture Architect: Design the 'vibe' of office. Should it be fun and casual? Or serious and high-performance? You shape it.",
          "The Problem Solver: Act as bridge. If employee has problem with boss, or vice versa, HR manager steps in to fix it fairly.",
          "The Growth Specialist: Identify what skills employees need to learn to get promoted and stay ahead of competition.",
          "Why It Matters: India has world's largest young workforce. As global companies rush to India, they need experts who understand how to manage, motivate, and retain this massive pool of talent."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The People Champion",
        icon: "Clock",
        description: "Real workflow of an HR professional.",
        color: BLUE2,
        content: [
          "9:00 AM - The Morning Huddle: Arrive at vibrant office in Gurgaon. Day starts with 'Culture Check.' Walk through office, greeting employees. Notice engineering team looks stressed—working late. Make mental note to organize 'Fun Friday' or team-building session.",
          "11:00 AM - The Interview Marathon: In glass cabin, interviewing three candidates for new AI Engineer role. Not just checking coding skills—checking if they are team players. Looking for 'Cultural Fit.'",
          "1:30 PM - Strategy Lunch: Over lunch with CEO, discuss 'Attrition Rate' (how many people leaving company). Propose new 'Flexible Work Policy' or better health insurance to keep best people from moving to competitors.",
          "3:30 PM - The Policy Workshop: Spend afternoon in boardroom, explaining new Labor Law changes to senior managers. Use data and charts to show how changes will impact company's payroll.",
          "5:30 PM - The Conflict Resolution: Junior designer and senior manager have disagreement over project deadline. Sit them both down and act as neutral mediator. By time they leave, they have 'Handshake Agreement' and clear plan forward.",
          "7:00 PM - The Review Wrap-up: Before leaving, review feedback from today's training session on 'Inclusive Leadership.' Head home knowing you've made workplace better for 500 people."
        ]
      },
      {
        id: "who",
        title: "Is This You? The HR DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Empath: Can you sense when someone is upset, even if they don't say it?",
          "The Diplomat: Are you the person friends come to when they are fighting?",
          "The Ethical Champion: Do you have strong sense of right and wrong?",
          "Multitasker: Can you handle hundred different names, faces, and problems at once?",
          "Hard Skills: Knowledge of Labor Laws, Payroll Software (like DarwinBox), Psychology, Data Analysis.",
          "Soft Skills: Communication, Empathy, Problem-Solving, Leadership, Conflict Resolution.",
          "The Self-Check: Do you care about people? Can you see potential in others? Do you enjoy solving interpersonal problems? If yes, you have HR DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Employee Lifecycle",
        icon: "Briefcase",
        description: "The complete HR workflow.",
        color: BLUE2,
        content: [
          "Talent Acquisition: Finding and hiring right people. Sourcing, screening, interviewing candidates.",
          "Onboarding: Welcoming new employees and showing them 'how things work here.' First impression matters.",
          "Performance Management: Setting goals and giving feedback (The 'Report Card'). Annual reviews and appraisals.",
          "Learning & Development (L&D): Helping employees learn new skills. Training programs and career development.",
          "Employee Relations: Keeping everyone happy and following rules. Handling grievances and conflicts.",
          "Compensation & Benefits: Managing salaries, bonuses, health insurance, and other benefits.",
          "Compliance: Ensuring company follows all labor laws and regulations. Staying updated with legal changes.",
          "Culture Building: Creating positive work environment. Organizing events and initiatives."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose any stream. Humanities (Psychology/Sociology) or Commerce (Business Studies) ideal. Class 12 Boards.",
          "After Class 12: Pursue BBA (HR), BMS, or degree in Psychology/Law. Entrance: CUET, SET, NPAT.",
          "After Graduation: Pursue MBA in HR or MA in HRM & Labour Relations. Entrance: CAT, XAT, TISSNET, CUET-PG.",
          "Lateral Entry: Professionals from Sales or Ops can switch by doing PG Diploma in HRM. Cert: SHRM-CP.",
          "Top Institutions: XLRI Jamshedpur (The 'Mecca' of HR), TISS Mumbai, MDI Gurgaon, IIM Ranchi.",
          "Specializations: Talent Acquisition, Learning & Development, Compensation & Benefits, Employee Relations."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (HR Executive): ₹3.5L–₹7.5L per annum. Recruitment or HR operations roles.",
          "Mid-Level (HR Manager): ₹12L–₹22L per annum. Managing teams and specific HR functions.",
          "Senior-Level (Director of HR): ₹35L–₹65L+ per annum. Strategic HR leadership roles.",
          "Leadership (CHRO): ₹1.5Cr+ per annum. Chief Human Resources Officer at large organizations.",
          "Market Growth: Hiring for HR roles projected to grow 15% annually as more GCCs open in India.",
          "Metro vs. Tier-2: Bangalore and Mumbai pay most. Tier-2 cities like Visakhapatnam and Indore seeing 20% jump in HR hiring.",
          "Industry Trends: Tech companies and startups hiring aggressively. Remote HR roles increasing."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹2L–₹18L (Total for MBA at IIMs/TISS). Highly competitive but affordable.",
          "Private Fees: ₹10L–₹25L (XLRI, MDI, SIBM). Better infrastructure and placement support.",
          "Duration: 3-4 years (Undergrad) + 2 years (MBA) = 5-6 years total.",
          "Living Costs: ₹15,000–₹25,000 per month in Tier-1 cities.",
          "Certifications: SHRM or HRCI certifications cost ₹30,000–₹50,000.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), software tools (₹10k–₹30k).",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹3.5L–₹7.5L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top HR institutes across India.",
        color: BLUE,
        content: [
          "Elite: XLRI Jamshedpur (The 'Mecca' of HR), TISS Mumbai, MDI Gurgaon.",
          "Government: IIM Ranchi (MBA-HR), IIM Indore, FMS Delhi, IIM Calcutta.",
          "Private: SIBM Pune, NMIMS Mumbai, XIMB Bhubaneswar, Great Lakes Chennai.",
          "Regional: Loyola Chennai (South), IISWBM Kolkata (East), FLAME Pune (West).",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: National Scholarship Portal (NSP) – Post-matric scholarships for meritorious students from low-income families.",
          "Institutional: TISS and IIMs offer 100% need-based scholarships for eligible students.",
          "Private: Tata Capital Scholarship, L'Oréal India For Young Women in Science (can be used for management degrees).",
          "Company Sponsorships: Many companies sponsor MBA for high-performing employees.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Skill Development occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "SHRM (Society for Human Resource Management): Global leader in HR certification. SHRM-CP and SHRM-SCP.",
          "ISTD (Indian Society for Training and Development): Great for L&D specialization.",
          "NHRDN (National HRD Network): India's largest networking body for HR professionals.",
          "HRCI (Human Resources Certification Institute): Offers PHR and SPHR certifications.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in HR careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Recruiter, HR Generalist, Payroll Manager, HR Manager, HR Director.",
          "New-Age Careers: AI HR Technologist, DEI (Diversity, Equity & Inclusion) Lead, Happiness Officer, Remote HR Manager.",
          "Specialized Roles: Talent Acquisition Manager, Learning & Development Manager, Compensation & Benefits Manager, Employee Relations Manager.",
          "Entrepreneurship: Starting 'Headhunting' agency or HR Tech startup.",
          "Consulting: HR consultant for management consulting firms. Helping companies optimize HR practices.",
          "International: Opportunities in USA, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of HR career.",
        color: BLUE,
        content: [
          "The 'Middle-Man' Paradox: Often stuck between management's goals and employees' needs.",
          "Tough Conversations: You have to be the one to fire people or deliver bad news about bonuses.",
          "Administrative Heavy: Early years involve lot of paperwork and spreadsheets.",
          "Emotional Labor: Dealing with people's personal problems and conflicts daily.",
          "Compliance Pressure: Must stay updated with constantly changing labor laws.",
          "Work-Life Balance: Crisis situations (layoffs, conflicts) can require long hours.",
          "Resistance to Change: Implementing new policies often faces resistance from teams.",
          "Continuous Learning: Must stay updated with HR trends, technologies, and best practices."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in HR careers.",
        color: BLUE2,
        content: [
          "AI Co-pilots: AI will handle 80% of resume screening. HR will focus on Emotional Intelligence and Strategy.",
          "The 'Gig' Workforce: Managing 'Digital Nomads' who work for company from five different countries.",
          "Metaverse Onboarding: New employees joining company via Virtual Reality (VR) headsets from their homes.",
          "Predictive Analytics: Using AI to predict which employees might leave. Proactive retention.",
          "Remote-First: Work-from-home becoming standard. Managing distributed global teams.",
          "Wellness Focus: Mental health and employee wellbeing becoming core HR responsibility.",
          "DEI Integration: Diversity, Equity & Inclusion becoming mainstream HR practice.",
          "Continuous Learning: Shift from annual reviews to continuous feedback and development."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Public Speaking: Join school debate club. HR is all about clear communication.",
          "Psychology Reading: Start with books like 'How to Win Friends and Influence People' by Dale Carnegie.",
          "Organize Events: Be lead for school fest. Teaches you how to manage people and deadlines.",
          "Excel Skills: In 21st century, HR is data-driven science. Learn 'Pivot Tables' today!",
          "Conflict Resolution: Volunteer as mediator in school disputes. Develop negotiation skills.",
          "Leadership: Take leadership roles in school clubs and projects. Develop team management skills.",
          "Networking: Connect with HR professionals. Learn about different roles and companies.",
          "Online Courses: Take free courses on Coursera or edX. Learn about HR fundamentals.",
          "Entrance Prep: Start early preparation for CAT, XAT, or other MBA entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian HR Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Sandeep Chaudhary: Managing Director at Randstad India. Legend in recruitment and staffing.",
          "Ritu Marya: CHRO at SAP India. Leader in using tech to drive diverse work cultures.",
          "Leena Nair: Global CEO of Chanel (formerly CHRO at Unilever). Proved HR leaders can become top boss of global empires.",
          "Prabir Jha: Global HR thought leader known for transforming cultures of companies like Tata Motors and Reliance.",
          "Radhika Gupta: MD & CEO of Edelweiss AMC. Celebrated for 'human-first' leadership and employer branding.",
          "Kalpana Morparia: Former CHRO at ICICI Bank. Pioneer in banking HR and women leadership.",
          "Sanjay Mehta: CHRO at Infosys. Known for building inclusive and innovative HR practices."
        ]
      }
    ]
  },
  international_business: {
    slug: "international_business",
    badge: "🌍 The Global Bridge for Class 10+",
    heading: "International Business",
    subheading: "Navigate the borderless world. Connect markets across continents. Drive global growth. ₹6L–₹1.2Cr+ salaries with 12% CAGR growth.",
    whyCards: [
      { icon: "Globe", title: "$2T Export Target by 2030", description: "India's exports targeted to reach $2 Trillion by 2030. Companies hiring thousands of IB experts to manage this growth.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹6L–₹1.2Cr+ Salaries", description: "Entry-level ₹6L–₹12L. Mid-level ₹16L–₹28L. Senior ₹35L–₹60L. VP/CXO ₹1.2Cr+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Zap", title: "12% CAGR Growth", description: "Growing at 12% CAGR in services and manufacturing sectors. Fastest-growing major economy.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Global Opportunities", description: "Work with companies like TCS, Infosys, Amazon, Flipkart. Remote roles managing teams across continents.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/PG Diploma (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, XAT, GMAT, IIFT Entrance", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹6L–₹1.2Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$2T", label: "Export Target by 2030", gradient: "from-green-500 to-green-600" },
      { value: "12%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Managing business operations across multiple countries.",
        color: BLUE,
        content: [
          "International Business Definition: Study and practice of managing business operations in more than one country. Not just 'selling things abroad'—understanding 'rules of game' in different parts of world.",
          "The Cultural Translator: Ensure marketing campaign that works in India doesn't accidentally offend someone in Japan because of color or word choice.",
          "The Global Mechanic: Figure out best way to move goods across oceans, navigate custom duties (taxes), and handle different currencies like Dollars, Euros, and Yen.",
          "The Explorer: Find new markets where company can grow. For example, helping Indian electric scooter brand launch in Europe.",
          "Why It Matters: India is fastest-growing major economy. With 'Make in India' initiative and new trade deals being signed globally, Indian companies going global and global companies rushing to India. We need experts who can navigate this 'borderless' world."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Global Strategist",
        icon: "Clock",
        description: "Real workflow of an international business professional.",
        color: BLUE2,
        content: [
          "9:00 AM - The Morning Briefing (IST): Start day in high-tech office in Gurgaon. First task: check overnight news from New York. Did US Federal Reserve change interest rates? If so, cost of company's imports might go up. Send quick summary to boss.",
          "11:30 AM - The Cultural Strategy Meet: Video call with creative team. Launching new snack brand in Dubai. Point out packaging needs to be translated into Arabic and must strictly follow local food safety laws. Not just manager—cultural expert.",
          "1:30 PM - The Supply Chain Puzzle: Lunch while tracking shipment of raw materials from Vietnam. Delay at Singapore port. Quickly call logistics partner in Singapore to find alternative route. Professional problem-solver.",
          "4:00 PM - The Negotiation: Join Zoom call with potential partner in Germany. Spent weeks studying German business etiquette. Know they value punctuality and directness. Present proposal clearly, focusing on data. By end of hour, have 'Letter of Intent.'",
          "7:00 PM - The Evening Wrap-Up: Send email to team in Brazil, just starting their workday. Update them on German deal. Head home knowing while working in one building, influence moved across three continents."
        ]
      },
      {
        id: "who",
        title: "Is This You? The International Business DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Curiosity (love learning about other countries, languages, foods?), Adaptability (stay calm when plans change due to global event?), Resilience (doing business across time zones means early mornings or late nights).",
          "Soft Skills: Cross-Cultural Intelligence (ability to respect and understand different customs), Negotiation (find 'win-win' solution even when people have different interests), Communication (explain complex ideas across cultures).",
          "Hard Skills: Foreign Languages (knowing French, Spanish, German, or Mandarin like having superpower), Data Analytics (understanding global market trends using numbers), Excel & Business Tools.",
          "The Self-Check: Do you love learning about world? Can you adapt to different cultures? Do you enjoy solving complex problems? If yes, you have International Business DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Global Expansion Process",
        icon: "Briefcase",
        description: "The complete international business workflow.",
        color: BLUE2,
        content: [
          "Market Entry Research: Analyzing if people in foreign country actually want what you're selling. Market feasibility studies.",
          "Compliance & Legal: Checking laws of new country (labor laws, taxes, regulations). Ensuring legal compliance.",
          "Global Logistics: Finding cheapest and fastest way to ship products (Air, Sea, or Land). Managing supply chain.",
          "Forex Management: Handling 'Foreign Exchange' so company doesn't lose money when currency values change.",
          "Cultural Adaptation: Modifying products and marketing for local markets. Respecting cultural nuances.",
          "Relationship Building: Establishing partnerships with local distributors and suppliers. Networking globally.",
          "Risk Management: Identifying and mitigating geopolitical and business risks. Contingency planning.",
          "Performance Monitoring: Tracking international operations and ensuring profitability."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose any stream. Commerce or Humanities often preferred for focus on economics and geography. Class 12 Boards.",
          "After Class 12: Pursue Bachelor's in Business Administration (BBA) with focus on International Business. Exams: CUET, SET, IPMAT.",
          "After Graduation: Apply for MBA in International Business. Exams: CAT, XAT, GMAT, or IIFT Entrance Exam.",
          "Lateral Entry: Professionals from Sales/Logistics can do 1-year PG Diploma.",
          "Top Institutions: IIFT (Delhi/Kolkata) - The gold standard, MDI Gurgaon, Symbiosis, SPJIMR Mumbai, FORE School of Management.",
          "Specializations: Export-Import, International Marketing, Global Supply Chain, International Finance."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Management Trainee): ₹6L–₹12L per annum. Export-import or international operations roles.",
          "Mid-Level (Export Manager/International Lead): ₹16L–₹28L per annum. Leading international teams and projects.",
          "Senior-Level (Director/Country Head): ₹35L–₹60L per annum. Strategic leadership roles.",
          "Leadership (Vice President/CXO): ₹1.2Cr+ per annum. C-suite international leadership.",
          "Market Demand: India's exports targeted to reach $2 Trillion by 2030. Companies hiring thousands of IB experts.",
          "Industry Growth: Growing at CAGR of ~12% in services and manufacturing sectors.",
          "Growth Trajectory: Entry to Senior typically takes 8–12 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹2,000–₹22L (Total for IIFT, DSE, Central Universities). Highly competitive but affordable.",
          "Private Fees: ₹15L–₹32L (MDI, Symbiosis, Amity). Better infrastructure and placement support.",
          "Duration: 3 years (Bachelor's) + 2 years (Master's) = 5 years total.",
          "Living Costs: ₹15,000–₹25,000 per month in major cities.",
          "Additional Costs: Foreign language certifications (A1 to C2 levels) ₹10,000–₹50,000. Entrance coaching ₹20k–₹50k.",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹6L–₹12L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top international business institutes across India.",
        color: BLUE,
        content: [
          "Government/Public: IIFT (Delhi/Kolkata) - The gold standard, Delhi School of Economics (DSE), IIMs (Bangalore, Calcutta, Indore).",
          "Private: MDI Gurgaon, Symbiosis (SIB-M/SIB-P), SPJIMR Mumbai, FORE School of Management, NMIMS Mumbai.",
          "Online/Distance: IGNOU (MBA-IB), Amity Online.",
          "Geographic Diversity: North (MDI Gurgaon), South (Christ University Bangalore), East (IIM Calcutta), West (NMIMS Mumbai).",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central Govt: National Overseas Scholarship (for SC/ST/Minorities to study abroad).",
          "State Govt: Rajarshi Shahu Maharaj Scholarship (Maharashtra); SVSAES (Rajasthan).",
          "Institutional: IIFT and IIMs offer 100% need-based scholarships for families earning < ₹6L/annum.",
          "Corporate: Tata Scholarship at Cornell (USA); Reliance Foundation Scholarships.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Commerce & Industry occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "Certifications: Certified International Trade Professional (CITP), Six Sigma (for logistics), ICCWC (International Chamber of Commerce).",
          "Bodies: FIEO (Federation of Indian Export Organisations), NASSCOM (for IT exports), APEDA (Agricultural Products).",
          "Language Certifications: DELF/DALF (French), DELE (Spanish), Goethe (German), HSK (Mandarin).",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in international business.",
        color: BLUE2,
        content: [
          "Conventional Careers: Export-Import (EXIM) Manager, International Marketing Manager, Logistics Head, Country Manager.",
          "New-Age Careers: Global Sustainability Manager, International AI Compliance Officer, Digital Nomad Recruiter, Global Market Analyst.",
          "Specialized Roles: International Trade Analyst, Global Supply Chain Manager, Foreign Market Entry Manager, International Finance Manager.",
          "Entrepreneurship: Foreign Market Entry Consultant for small startups; Global Sourcing Agent.",
          "Consulting: International business consultant for management consulting firms.",
          "International: Opportunities in USA, UK, Singapore, UAE for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of international business.",
        color: BLUE,
        content: [
          "Geopolitical Risks: War or change in government in foreign country can shut down business overnight.",
          "Travel Fatigue: Might spend more time in hotels and airports than at home.",
          "Regulatory Complexity: Keeping track of 195 different sets of laws is mental marathon.",
          "Currency Volatility: Exchange rate fluctuations can impact profitability significantly.",
          "Cultural Misunderstandings: Small mistakes in cultural etiquette can damage business relationships.",
          "Time Zone Challenges: Managing teams across multiple time zones requires flexibility.",
          "Continuous Learning: Must stay updated with global trade policies and regulations.",
          "High Pressure: Responsible for company's international growth and profitability."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in international business.",
        color: BLUE2,
        content: [
          "AI-Driven Logistics: AI will predict shipping delays before they happen. Optimize routes automatically.",
          "The 'Fracturing' World: Shift from 'Global' to 'Regional' trade blocks (like India-Middle East-Europe corridor).",
          "Green Trade: Every product will have 'Carbon Passport'—showing exactly how much pollution it caused during transport.",
          "Digital Trade: Blockchain for supply chain transparency. Smart contracts for international agreements.",
          "Nearshoring: Companies moving manufacturing closer to home markets. Less reliance on distant suppliers.",
          "Sustainability Focus: ESG (Environmental, Social, Governance) becoming mandatory for international trade.",
          "Remote-First: Managing international operations from anywhere. Digital nomad professionals."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Model UN (MUN): Participate in MUNs to learn how countries negotiate. Understand global politics.",
          "Learn a Language: Start with Spanish, French, or Mandarin. Opens up entire continents for you.",
          "Read World News: Follow The Economist or BBC Global News. See how world is connected.",
          "Geography & Economics: Don't just study for marks; understand why some countries are rich and others are not.",
          "International Clubs: Join school's international club or cultural exchange programs.",
          "Networking: Connect with international business professionals. Learn about different roles.",
          "Online Courses: Take free courses on Coursera about international trade and business.",
          "Entrance Prep: Start early preparation for CAT, XAT, or IIFT entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian International Business Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Satya Nadella: Born in Hyderabad, leads Microsoft. Proves Indian can manage one of most complex global businesses.",
          "Sundar Pichai: From Chennai, leads Google (Alphabet). Managing teams in almost every country on Earth.",
          "Indra Nooyi: Former CEO of PepsiCo. Legend in world of global strategy and leadership.",
          "Leena Nair: First Indian-origin woman to lead Chanel as Global CEO. Redefining luxury business.",
          "Shantanu Narayen: CEO of Adobe. Turned software company into global cloud powerhouse.",
          "Rajesh Masrani: Pioneer in global operations and international expansion strategies.",
          "Kiran Mazumdar-Shaw: Founder of Biocon. Built global biotech empire from India."
        ]
      }
    ]
  },
  it_management: {
    slug: "it_management",
    badge: "💻 The Digital Architect for Class 10+",
    heading: "Information Technology (IT) Management",
    subheading: "Command the digital world. Lead tech teams. Secure the future. ₹5L–₹1.2Cr+ salaries with 13% CAGR growth.",
    whyCards: [
      { icon: "Zap", title: "$166B Market by 2030", description: "India's IT services market reaching $166 Billion by 2030. World's IT superpower needs leaders.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹5L–₹1.2Cr+ Salaries", description: "Entry-level ₹5L–₹9L. Mid-level ₹15L–₹30L. Senior ₹35L–₹75L. CIO/CTO ₹1.2Cr+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Globe", title: "13% CAGR Growth", description: "Growing at 13% CAGR (2025-2030). Massive demand for Cybersecurity Managers and Cloud Architects.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Global Leadership", description: "Lead distributed teams globally. Remote work opportunities abundant. Shape the digital future.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "B.Tech + MBA/Certifications (2-4 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "JEE, GATE, CAT, AWS, CISSP", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹5L–₹1.2Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$166B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "13%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Managing technology systems and teams that power businesses.",
        color: BLUE,
        content: [
          "IT Management Definition: 'Command and Control' of tech world. Bridge between Business (what company wants to do) and Technology (how to actually do it).",
          "The Orchestrator: Don't just write code—manage teams that build software, ensuring everyone meets deadlines.",
          "The Cyber-Guardian: Design 'fortress' that protects company's secret data from digital thieves.",
          "The Efficiency Expert: Decide which new tech—like AI or Cloud Computing—worth spending money on and which is just passing trend.",
          "Why It Matters: India is world's IT superpower. As we move towards $166 Billion IT services market by 2030, companies hunting for leaders who can manage machines and people behind them."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Tech Conductor",
        icon: "Clock",
        description: "Real workflow of an IT manager.",
        color: BLUE2,
        content: [
          "8:30 AM - The Morning Radar: Walk into high-tech office in Bangalore (Silicon Valley of India). First task: 'Security Huddle.' Dashboard shows minor attempted breach from suspicious IP address. Oversee cybersecurity team as they patch vulnerability before most people finish first cup of chai.",
          "11:00 AM - The Strategy Scrum: Meet with CEO. Company wants to move all data to 'Hybrid Cloud.' Don't talk in jargon—explain how this saves ₹50 Lakhs in server costs next year. 'Translator' between geek-speak and business-speak.",
          "1:30 PM - The Global Sync: Quick lunch before video call with team in Seattle. Managing project where Indian developers and American designers build new AI shopping assistant. Ensure 'workflow' smooth across time zones.",
          "4:00 PM - Mentorship and Troubleshooting: Junior developer stuck on 'bug' delaying app launch. Don't fix it for them—guide through logic. Managing hardware and growing human talent.",
          "6:30 PM - The Future Pulse: Spend 30 minutes reading about 'Agentic AI'—next big trend. If you stop learning for month, you're year behind. Leave office knowing company's digital heart beating perfectly."
        ]
      },
      {
        id: "who",
        title: "Is This You? The IT Manager DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Puzzle Solver: Do you love figuring out how things work?",
          "The Calm Leader: When internet goes down or app crashes, are you one who stays cool while everyone else panics?",
          "The Tech-Translator: Can you explain complex video game or app feature to your grandparents?",
          "Hard Skills: Knowledge of Cloud (AWS/Azure), Cybersecurity, Agile Project Management, ITIL.",
          "Soft Skills: High emotional intelligence, negotiation, strategic thinking, leadership.",
          "The Self-Check: Do you love technology? Can you lead teams? Do you stay calm under pressure? If yes, you have IT Manager DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & IT Lifecycle",
        icon: "Briefcase",
        description: "The complete IT manager workflow.",
        color: BLUE2,
        content: [
          "Planning: Understanding business goal and translating to tech requirements.",
          "Implementation: Overseeing development of tech solutions. Managing projects.",
          "Governance: Ensuring tech follows laws (like Data Privacy). Compliance management.",
          "Security: Constant 24/7 monitoring of network. Threat detection and prevention.",
          "Team Management: Leading developers, engineers, and support staff. Performance management.",
          "Budget Management: Managing IT budgets and ensuring ROI on tech investments.",
          "Infrastructure Management: Overseeing servers, networks, and cloud systems.",
          "Continuous Improvement: Staying updated with latest tech trends and innovations."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose Science (PCM) or Commerce with Math/IP. Focus on logical reasoning and basic coding.",
          "After Class 12: Pursue B.Tech (CS/IT), BCA, or B.Sc (IT). Clear entrance exams like JEE Main, MHT-CET, or VITEE.",
          "After Graduation: Entry-level role as System Analyst or DevOps Engineer. Get specialized certifications (AWS, Cisco).",
          "Career Growth: Pursue MBA (IT) or MCA for management roles. Lateral entry for Engineers with 3-5 years experience.",
          "Top Institutions: IIT Bombay, IIT Delhi, NIT Trichy, IIIT Hyderabad, BITS Pilani, VIT Vellore.",
          "Specializations: Cloud Architecture, Cybersecurity, DevOps, AI/ML, Enterprise Architecture."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Systems Analyst): ₹5L–₹9L per annum. System administration and support roles.",
          "Mid-Level (IT Manager): ₹15L–₹30L per annum. Managing teams and projects.",
          "Senior-Level (Director of IT): ₹35L–₹75L per annum. Strategic IT leadership roles.",
          "Leadership (CIO/CTO): ₹1.2Cr+ per annum. Chief Information/Technology Officer positions.",
          "Metro vs. Tier-2: Bangalore and Hyderabad pay 20-30% more. Tier-2 cities like Jaipur and Kochi catching up.",
          "Industry Growth: Growing at 13% CAGR (2025-2030). Massive demand for Cybersecurity and Cloud roles.",
          "Growth Trajectory: Entry to Senior typically takes 8–12 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions (IITs/NITs): ₹6L–₹12L (Total B.Tech). Highly competitive but affordable.",
          "Private Institutions: ₹10L–₹25L (Total B.Tech/MBA). Better infrastructure and placement support.",
          "Certifications: ₹15,000–₹40,000 per exam (AWS, PMP, CISSP). Multiple certifications recommended.",
          "Duration: 4 years (Undergrad) + 2 years (Optional Masters) = 6 years total.",
          "Living Costs: ₹15,000–₹25,000 per month in major cities.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), software tools (₹10k–₹30k).",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹5L–₹9L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top IT institutes across India.",
        color: BLUE,
        content: [
          "Government: IIT Bombay, IIT Delhi, NIT Trichy, IIIT Hyderabad, IIT Kharagpur, IIT Madras.",
          "Private: BITS Pilani, VIT Vellore, Manipal (MAHE), SPJIMR Mumbai (for MBA-IT), NMIMS Mumbai.",
          "Geographic Diversity: North (DTU Delhi), South (IIIT Bangalore), East (IIT Kharagpur), West (COEP Pune).",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: AICTE Pragati (for girls), NSP Merit-cum-Means scholarships.",
          "Institutional: Full/Partial fee waivers at IIMs for families with income < ₹6L/annum.",
          "Corporate: Google/Microsoft offer fellowships for meritorious CS students.",
          "Company Sponsorships: Many tech companies sponsor education for high-performing employees.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Education occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "Certifications: PMP (Project Management), CISSP (Security), AWS Solutions Architect, ITIL 4 Foundation, Azure Administrator.",
          "Bodies: NASSCOM (The voice of Indian IT industry), IEEE, ACM.",
          "Cloud Certifications: AWS, Microsoft Azure, Google Cloud certifications.",
          "Security Certifications: CompTIA Security+, Certified Ethical Hacker (CEH).",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in IT management.",
        color: BLUE2,
        content: [
          "Conventional Careers: IT Manager, Project Manager, Database Administrator, Systems Administrator.",
          "New-Age Careers: AI Ethics Manager, Cloud Architect, Chief Digital Officer (CDO), Quantum Computing Manager.",
          "Specialized Roles: Cybersecurity Manager, DevOps Manager, Enterprise Architect, IT Service Manager.",
          "Entrepreneurship: Starting IT consulting firm or becoming 'Fractional CTO' for startups.",
          "Consulting: IT consultant for management consulting firms. Helping companies optimize IT.",
          "International: Opportunities in USA, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of IT management.",
        color: BLUE,
        content: [
          "The 'Always-On' Stress: If server crashes at 2 AM, your phone will ring.",
          "The Skill Treadmill: Must learn new programming language or tool every year.",
          "Management Friction: Often have to tell developers 'No' to keep project on budget.",
          "Cybersecurity Pressure: Constant threat of data breaches and cyber attacks.",
          "Work-Life Balance: Crisis situations can require long hours and weekend work.",
          "Rapid Change: Technology landscape changes rapidly. Must stay constantly updated.",
          "Budget Constraints: Often need to do more with less resources.",
          "Continuous Learning: Must stay updated with latest tech trends and innovations."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in IT management.",
        color: BLUE2,
        content: [
          "Agentic AI: AI 'agents' will start managing routine IT tasks autonomously. Managers focus on high-level strategy.",
          "Quantum Computing: Within decade, IT managers will need to protect networks against quantum hacks.",
          "Green IT: Managing data centers running on 100% renewable energy will be major responsibility.",
          "Edge Computing: Shift from centralized cloud to distributed edge computing systems.",
          "Zero Trust Security: Every access request verified. Security becomes everyone's responsibility.",
          "Autonomous Systems: Self-healing networks and systems that fix problems automatically.",
          "Sustainability Focus: ESG (Environmental, Social, Governance) becoming mandatory for IT operations.",
          "Remote-First: Managing fully distributed global teams becoming standard practice."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Classes 9-10: Master Python. Start small blog or personal website. Learn basic coding.",
          "Classes 11-12: Get familiar with GitHub. Join coding competitions like CodeChef or HackerRank.",
          "Project Work: Try to 'manage' small project—like school event app or family digital photo archive.",
          "Leadership: Take leadership roles in tech clubs or coding competitions.",
          "Networking: Connect with IT professionals. Learn about different roles and companies.",
          "Online Courses: Take free courses on Coursera or edX about cloud computing and cybersecurity.",
          "Certifications: Start with CompTIA A+ or AWS Cloud Practitioner.",
          "Entrance Prep: Start early preparation for JEE or other engineering entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian IT Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Satya Nadella: CEO of Microsoft. Legendary leader showing how technologist becomes global manager.",
          "Sundar Pichai: CEO of Alphabet (Google). Indian tech-manager who redefined digital world.",
          "N.R. Narayana Murthy: Founder of Infosys. Man who proved India can lead world in IT management.",
          "Roshni Nadar Malhotra: Chairperson of HCL. Pioneer showing how to lead massive tech organizations.",
          "K. Krithivasan: CEO of TCS. Leading India's largest IT firm into era of AI.",
          "Vishal Sikka: Former CEO of Infosys. Visionary in digital transformation and innovation.",
          "Keshab Panda: CTO of Infosys. Pioneer in emerging technologies and digital innovation."
        ]
      }
    ]
  },
  project_management: {
    slug: "project_management",
    badge: "📊 The Master Strategist for Class 10+",
    heading: "Project Management",
    subheading: "Turn visions into reality. Lead teams to success. Deliver on time, on budget. ₹4L–₹60L+ salaries with 22.1% CAGR growth.",
    whyCards: [
      { icon: "Target", title: "$1.16B Market by 2030", description: "India project management software market growing at 22.1% CAGR, reaching $1.16B by 2030.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹60L+ Salaries", description: "Entry-level ₹4L–₹7.5L. Mid-level ₹15L–₹25L. Senior ₹35L–₹60L+. Leadership ₹75L+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Zap", title: "4.1M New Roles by 2030", description: "India needs 4.1 million new project management roles by 2030 to reach $5 trillion economy goal.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Every Industry Needs PMs", description: "From tech startups to infrastructure projects, every organization needs skilled project managers.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Certifications (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "IPMAT, CUET, JEE, CAPM, PMP", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$1.16B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "22.1%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Turning visions into reality through strategic planning and execution.",
        color: BLUE,
        content: [
          "Project Management Definition: Art and science of turning vision into reality. Project is temporary task with clear beginning and end—like launching app, building bridge, or organizing nationwide vaccination drive.",
          "The Planner: Break huge goal into small, manageable steps. Create roadmap for success.",
          "The Budget Guardian: Ensure project doesn't cost more than planned. Manage resources wisely.",
          "The Problem Solver: When things go wrong (and they always do!), find 'Plan B.' Navigate obstacles.",
          "The Leader: Motivate diverse teams—engineers, designers, accountants—to work as one.",
          "Why It Matters: India is world's fastest-growing major economy. To reach $5 trillion economy goal, we need 4.1 million new project management roles by 2030. Without Project Managers, great ideas remain just ideas."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Chaos Tamer",
        icon: "Clock",
        description: "Real workflow of a project manager.",
        color: BLUE2,
        content: [
          "8:30 AM - The Morning 'Stand-up': Day begins at tech-hub in Gurgaon. Standing with team in 15-minute 'scrum' meeting where everyone shares what they did yesterday and what they'll do today. Spot 'bottleneck'—testing team waiting for code. Make quick call to resolve.",
          "11:00 AM - The Stakeholder Sync: Video call with clients in London and finance team in Mumbai. Show 'Gantt Chart'—colorful bar chart proving project on track. Handle tough questions about budget with calm, data-backed confidence.",
          "1:30 PM - The Strategy Lunch: Chat with junior developer feeling burnt out. Project management isn't just about tools—it's about people. Offer encouragement and adjust schedule for next week.",
          "3:30 PM - Risk Mitigation: Spend afternoon in 'Deep Work.' Looking at 'Risk Register.' What if monsoon delays hardware delivery? Negotiate backup contract with local supplier. Predicting future, not just managing present.",
          "6:00 PM - The Impact Check: Review 'KPIs' (Key Performance Indicators). Project 65% complete, saved 5% of budget so far. Head home knowing you're glue holding multi-crore dream together."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Managerial DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Calmness (stay cool when everyone panicking?), Detail-Oriented (notice 'small stuff' others miss?), Adaptability (okay with 'Plan A' failing and jumping to 'Plan B'?).",
          "Soft Skills: Communication (explain complex tech problem to non-tech boss?), Negotiation (convince two fighting teams to agree?), Leadership (motivate diverse teams?).",
          "Hard Skills: Budgeting (basic math to keep project 'in green'), Tool Mastery (JIRA, Asana, Microsoft Project), Data Analysis.",
          "The Self-Check: Do you love organizing? Can you stay calm under pressure? Do you enjoy solving problems? If yes, you have Managerial DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Project Lifecycle",
        icon: "Briefcase",
        description: "The complete project management workflow.",
        color: BLUE2,
        content: [
          "Initiation: Defining 'What' and 'Why' of project. Getting stakeholder buy-in.",
          "Planning: Creating roadmap (The 'How'). Breaking down into tasks and timelines.",
          "Execution: Putting plan into action. Coordinating teams and resources.",
          "Monitoring & Control: Checking progress and fixing errors (The 'Are we there yet?'). Tracking KPIs.",
          "Closing: Finalizing everything and learning from mistakes. Post-project review.",
          "Risk Management: Identifying and mitigating risks. Contingency planning.",
          "Stakeholder Management: Keeping everyone informed and satisfied.",
          "Quality Assurance: Ensuring deliverables meet standards and expectations."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose any stream. Commerce or Science (PCM) preferred for logical grounding. Board Exams.",
          "After Class 12: Pursue BBA, BMS, or B.Tech. Engineering great start for 'Technical PM' roles. Entrance: IPMAT, CUET, JEE.",
          "After Graduation: Gain 2 years experience as Project Coordinator. Cert: CAPM (Entry-level).",
          "Career Peak: Pursue MBA in Operations/Project Management or get PMP Certified. Cert: PMP (Senior level).",
          "Top Institutions: IIT Delhi, IIM Calcutta, IIM Lucknow, NITIE (IIM Mumbai), Symbiosis Pune, S.P. Jain Mumbai.",
          "Specializations: IT Project Management, Construction PM, Agile/Scrum, Program Management."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Project Coordinator): ₹4L–₹7.5L per annum. Coordinating small projects.",
          "Mid-Level (Project Manager): ₹15L–₹25L per annum. Managing medium to large projects.",
          "Senior-Level (Program/Portfolio Manager): ₹35L–₹60L+ per annum. Strategic project leadership.",
          "City Comparison: Bangalore offers highest pay (20% above national average), followed by Gurgaon and Mumbai.",
          "Market Size: India project management software market growing at 22.1% CAGR, reaching $1.16B by 2030.",
          "Hiring Trends: Massive demand across IT, Construction, Healthcare, and Manufacturing sectors.",
          "Growth Trajectory: Entry to Senior typically takes 8–12 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government/Public: ₹1.5L–₹10L (Total for 3-4 years). Highly competitive but affordable.",
          "Private: ₹10L–₹25L (Total for premium BBA/B.Tech). Better infrastructure and placement support.",
          "Certifications: CAPM ~₹20,000; PMP ~₹45,000 (plus training ₹15k-₹30k).",
          "Duration: 3-4 years (Degree) + 3-6 months (High-level certification).",
          "Living Costs: ₹15,000–₹25,000 per month in major cities.",
          "Additional Costs: Entrance coaching (₹20k–₹50k), software tools (₹10k–₹30k).",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹4L–₹7.5L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top project management institutes across India.",
        color: BLUE,
        content: [
          "Public: IIT Delhi, IIM Calcutta, IIM Lucknow, NITIE (IIM Mumbai), IIM Ranchi.",
          "Private: Symbiosis (SCMHRD/SIMS) Pune, S.P. Jain Mumbai, BITS Pilani, NICMAR (for Construction PM).",
          "Online: upGrad (Duke/IIM-K), Coursera (Google PM Certificate), Great Learning.",
          "Geographic Diversity: North (IIT Delhi), South (IIIT Bangalore), East (IIM Calcutta), West (BITS Pilani).",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: PM-YASASVI for OBC/EBC students; AICTE Pragati for girls in technical education.",
          "Institutional: IIMs offer 100% need-based scholarships for families earning < ₹6L/annum.",
          "Private: PMI Education Foundation (PMIEF) scholarships specifically for project management students.",
          "Company Sponsorships: Many companies sponsor education for high-performing employees.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Education occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "PMI (Project Management Institute): World's leading authority in project management.",
          "Certifications: CAPM (for students/freshers), PMP (Gold Standard for 3+ years experience), PRINCE2 (popular in European firms).",
          "Agile Certifications: Certified Scrum Master (CSM), Certified Scrum Product Owner (CSPO).",
          "Specialized: Six Sigma, ITIL, Construction Management certifications.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in project management.",
        color: BLUE2,
        content: [
          "Conventional Careers: IT Project Manager, Construction Manager, Project Coordinator, Program Manager.",
          "New-Age Careers: AI Project Manager, Sustainability/Green PM, Digital Transformation Lead, Remote PM.",
          "Specialized Roles: Agile Coach, Scrum Master, Portfolio Manager, PMO Director.",
          "Entrepreneurship: Starting 'Project Management Consultancy' (PMC) for SMEs.",
          "Consulting: PM consultant for management consulting firms. Helping companies optimize projects.",
          "International: Opportunities in USA, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of project management.",
        color: BLUE,
        content: [
          "Accountability: When project fails, you are first person asked 'Why?'",
          "Stress: Deadlines lead to long hours, especially in final weeks (The 'Crunch').",
          "Meeting Fatigue: Spend 60-70% of day in meetings or on calls.",
          "Scope Creep: Projects often expand beyond original scope, causing delays.",
          "Resource Constraints: Often need to do more with less resources.",
          "Stakeholder Management: Balancing conflicting interests and expectations.",
          "Work-Life Balance: Crisis situations can require long hours and weekend work.",
          "Continuous Learning: Must stay updated with latest PM methodologies and tools."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in project management.",
        color: BLUE2,
        content: [
          "GenAI as Assistant: AI will handle scheduling and budget tracking. PMs focus on Human-Centric Leadership.",
          "Agile Everywhere: Not just in software, but in construction and marketing.",
          "Remote-First PM: Leading 'Global Distributed Teams' across 5 continents from home office in India.",
          "Predictive Analytics: AI predicting project risks before they happen.",
          "Sustainability Focus: Green PM becoming mainstream. ESG metrics becoming standard.",
          "Hybrid Methodologies: Combining Agile, Waterfall, and Lean approaches.",
          "Autonomous Teams: Self-organizing teams with minimal PM intervention.",
          "Virtual Reality: Using VR for project visualization and team collaboration."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Organize Events: Be lead for school fest or sports day. Track budget and timeline.",
          "Master Tools: Try using Trello or Notion to manage homework and exam schedule.",
          "Read Management Books: Start with 'The 7 Habits of Highly Effective People' by Stephen Covey.",
          "Volunteer: Lead local cleaning drive or charity event. Manage volunteers and resources.",
          "Leadership: Take leadership roles in school clubs and projects.",
          "Networking: Connect with project managers. Learn about different roles and industries.",
          "Online Courses: Take free courses on Coursera about project management fundamentals.",
          "Entrance Prep: Start early preparation for IPMAT, CUET, or other entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Project Management Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "E. Sreedharan: Known as 'Metro Man of India.' Managed massive Delhi Metro project with legendary precision and zero delays.",
          "Ratan Tata: Master of 'Portfolio Management,' overseeing 100+ diverse companies and global projects like Nano.",
          "Dr. K. Sivan: Former ISRO Chief. Managed complex Chandrayaan-2 mission—peak example of scientific project management.",
          "Amanat Khan Shirazi: Historical 'Project Manager' for calligraphy and artistic execution of Taj Mahal.",
          "Vineet Nayar: Former CEO of HCL. Revolutionized project management with 'Employees First, Customers Second' philosophy.",
          "Kiran Mazumdar-Shaw: Founder of Biocon. Built global biotech empire through excellent project execution.",
          "Rajesh Masrani: Pioneer in operational transformation and project management excellence."
        ]
      }
    ]
  },
  retail_management: {
    slug: "retail_management",
    badge: "🛍️ The Retail Revolution for Class 10+",
    heading: "Retail Management",
    subheading: "Curate experiences. Drive sales. Lead teams. Build brands. ₹3.5L–₹65L+ salaries with 15% CAGR growth.",
    whyCards: [
      { icon: "ShoppingCart", title: "$1.93T Market by 2030", description: "India's retail sector projected to reach $1.93 Trillion by 2030. Fastest-growing retail market globally.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹3.5L–₹65L+ Salaries", description: "Entry-level ₹3.5L–₹6L. Mid-level ₹12L–₹25L. Senior ₹35L–₹65L. Leadership ₹1.2Cr+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Zap", title: "15% CAGR Growth", description: "Retail sector growing at 15% CAGR. E-commerce and quick commerce creating massive opportunities.", borderColor: "#3B82F6" },
      { icon: "Award", title: "10% of India's GDP", description: "Retail contributes over 10% to India's GDP. $1.1 Trillion industry powering economic growth.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/PG Diploma (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "SET, CUET, NPAT, CAT, MAT, XAT", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3.5L–₹65L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$1.93T", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "15%", label: "CAGR Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Running stores and creating magical shopping experiences.",
        color: BLUE,
        content: [
          "Retail Management Definition: Art and science of running store—whether physical outlet like Reliance Digital, high-end luxury boutique, or digital giant like Flipkart.",
          "The Experience Curator: Ensure store looks inviting and customers find what they need. Create memorable shopping moments.",
          "The Inventory Wizard: Use software to predict what people will buy next week so shelves never empty. Optimize stock levels.",
          "The People Leader: Manage team of sales associates, ensuring they motivated and well-trained. Build high-performing teams.",
          "The Profit Pilot: Analyze sales data to cut costs and increase earnings. Drive profitability.",
          "Why It Matters: India's retail sector is $1.1 Trillion giant, contributing over 10% to India's GDP. From 'Quick Commerce' (10-minute deliveries) to massive malls, this industry is heartbeat of India's growing middle class."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Store Commander",
        icon: "Clock",
        description: "Real workflow of a retail manager.",
        color: BLUE2,
        content: [
          "9:00 AM - The Strategy Huddle: Day begins at large lifestyle store in Bangalore. Before shutters go up, lead 15-minute 'pep talk' with team. Review today's sales targets and announce 'Top Seller' from yesterday.",
          "11:30 AM - Visual Merchandising Check: Store buzzing. Walk floor, checking 'Visual Merchandising.' Notice new summer collection isn't catching enough light. Call display team to adjust mannequins. Retail is in details!",
          "1:30 PM - The Inventory Deep-Dive: Quick lunch while checking 'Inventory Dashboard.' Notice specific brand of smartwatches selling out faster than expected in Tier-2 cities. Immediately authorize stock transfer from warehouse.",
          "4:00 PM - The Tech Update: Meet with developer installing new AI-based 'Smart Mirrors' in trial rooms. These mirrors allow customers to virtually 'try on' clothes without changing. Managing innovation hub.",
          "7:30 PM - The Evening Rush: Store packed. Customer unhappy about billing error. Step in, apologize, resolve with smile. Turned potential 'bad review' into 'loyal customer.'"
        ]
      },
      {
        id: "who",
        title: "Is This You? The Retail DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "High Energy: Can you stay active and enthusiastic for 8-hour shift?",
          "Communication Power: Do you enjoy talking to people and convincing them with logic and charm?",
          "Analytical Mind: Do you like looking at charts and understanding why 'Red Shirt' sells better than 'Blue'?",
          "Calm Under Pressure: Can you handle crowd of 200 people during Diwali sale without losing cool?",
          "Customer Focus: Do you genuinely care about customer satisfaction and experience?",
          "Leadership: Can you motivate and manage diverse teams?",
          "The Self-Check: Do you love shopping? Can you stay energetic? Do you enjoy leading people? If yes, you have Retail DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Operations Cycle",
        icon: "Briefcase",
        description: "The complete retail manager workflow.",
        color: BLUE2,
        content: [
          "Sourcing: Ensuring right products bought from suppliers. Vendor management.",
          "Logistics: Moving products from warehouse to store. Supply chain coordination.",
          "Merchandising: Displaying products beautifully. Visual merchandising and layout.",
          "Sales & Service: Final step where customer buys product. Sales team management.",
          "Post-Sales: Handling returns and gathering feedback. Customer satisfaction.",
          "Inventory Management: Monitoring stock levels and preventing stockouts.",
          "Team Management: Hiring, training, and motivating sales associates.",
          "Financial Management: Monitoring budgets and ensuring profitability."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Complete Class 12. Focus on English and Communication. Choose Commerce or Humanities.",
          "After Class 12: Pursue BBA in Retail Management or B.Voc in Retail. Entrance Exams: SET, CUET, NPAT.",
          "After Graduation: Enroll in MBA in Retail Management or PGDM. Entrance Exams: CAT, MAT, XAT, CMAT.",
          "Lateral Entry: Professionals from Marketing or Supply Chain can switch into Retail.",
          "Top Institutions: BIMTECH (Noida), Welingkar (Mumbai), Loyola (Chennai), SCMS (Cochin), ITM (Navi Mumbai).",
          "Specializations: Store Management, E-commerce, Visual Merchandising, Category Management."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Store Executive): ₹3.5L–₹6L per annum. Store operations and customer service.",
          "Mid-Level (Store Manager): ₹12L–₹25L per annum. Managing store operations and teams.",
          "Senior (Regional/National Manager): ₹35L–₹65L per annum. Strategic retail leadership.",
          "Leadership (CXO/Director): ₹1.2Cr+ per annum. C-suite retail leadership.",
          "Market Growth: India's retail sector projected to reach $1.93 Trillion by 2030.",
          "City Comparison: Metro cities pay roughly 25% more. Tier-2 and Tier-3 cities account for 60% of e-commerce.",
          "Growth Trajectory: Entry to Senior typically takes 8–12 years with consistent performance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government (Anna Univ, Andhra Univ): ₹20,000–₹1.5L (Total). Highly affordable.",
          "Private (BIMTECH, Welingkar): ₹10L–₹18L (Total). Better infrastructure and placement support.",
          "Duration: 3 years for Bachelor's; 2 years for MBA.",
          "Living Costs: ₹15,000–₹25,000 per month in major cities.",
          "Additional Costs: Certification exams (RAI) ₹5,000–₹15,000. Entrance coaching ₹20k–₹50k.",
          "Total Investment: Approximately ₹5L–₹20L for complete education and certifications.",
          "ROI: With entry-level salaries of ₹3.5L–₹6L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top retail management institutes across India.",
        color: BLUE,
        content: [
          "North: BIMTECH (Noida), Jaipuria Institute of Management (Lucknow), JIMS (Delhi).",
          "South: Loyola (Chennai), SVPISTM (Coimbatore), SCMS (Cochin).",
          "East: IMIS (Bhubaneswar).",
          "West: Welingkar (Mumbai), ITM (Navi Mumbai).",
          "Distance: IGNOU (BBA in Retailing).",
          "Note: Choose institutes with strong faculty, industry connections, and good placement record."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: PM-USP Scheme (NSP) for meritorious students (Family income < ₹4.5L).",
          "Loan Schemes: PM-Vidyalaxmi provides 3% interest subvention for loans up to ₹10L.",
          "Institutional: Many private colleges offer 25-50% fee waivers based on CAT/MAT scores.",
          "Company Sponsorships: Many retail companies sponsor education for high-performing employees.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Government Sponsorships: Ministry of Education occasionally sponsors training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "Retailers Association of India (RAI): Apex body offering professional retailing skills (PRS) certificates.",
          "FSSAI (FoSTaC): Mandatory for food retailers. Food safety certification.",
          "Certifications: Visual Merchandising, Retail Analytics, CRM Mastery, E-commerce Management.",
          "Specialized: Six Sigma, Lean Retail, Omnichannel Management.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in retail management.",
        color: BLUE2,
        content: [
          "Conventional Careers: Store Manager, Floor Supervisor, Retail Buyer, Category Manager.",
          "New-Age Careers: Omnichannel Strategist, E-commerce Category Manager, Retail AI Analyst, Quick Commerce Manager.",
          "Specialized Roles: Visual Merchandiser, Inventory Manager, Customer Experience Manager, Regional Manager.",
          "Entrepreneurship: Starting 'D2C' (Direct-to-Consumer) brand or 'Quick Commerce' dark store.",
          "Consulting: Retail consultant for management consulting firms. Helping companies optimize retail.",
          "International: Opportunities in UAE, UK, Singapore for senior roles and management positions."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of retail management.",
        color: BLUE,
        content: [
          "Long Hours: Expect to work weekends and holidays—that's when customers shop most!",
          "The 'Feet on Ground' Reality: You will be on feet most of day; it's physically demanding.",
          "Target Pressure: Monthly sales targets can be stressful, requiring high-performing team.",
          "Customer Complaints: Dealing with unhappy customers daily. Emotional labor required.",
          "Inventory Challenges: Managing stock levels and preventing stockouts or overstock.",
          "Work-Life Balance: Retail operates 365 days. Holidays often spent at work.",
          "Rapid Change: Retail landscape changing rapidly with e-commerce and tech.",
          "Continuous Learning: Must stay updated with latest retail trends and technologies."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in retail management.",
        color: BLUE2,
        content: [
          "Hyper-Personalization: AI predicting exactly what you want before you even walk in.",
          "Circular Fashion: Stores shifting to 'buy-back' and 'resale' models for sustainability.",
          "Check-out Free Stores: Using computer vision (like Amazon Go) to remove queues entirely.",
          "Metaverse Retail: Virtual stores where customers shop in digital worlds.",
          "Sustainability Focus: Eco-friendly packaging and zero-waste retail becoming standard.",
          "AI-Powered Inventory: Robots managing warehouses and automated stock replenishment.",
          "Omnichannel Excellence: Seamless integration of online and offline shopping.",
          "Data-Driven Decisions: Every decision backed by real-time analytics and AI insights."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Observation: Visit 5 different stores and note what you like and dislike about each.",
          "Communication: Join debate club or take leadership role in school fest.",
          "Tech-Check: Master basic Excel. In retail, data is your best friend.",
          "Reading: Follow news about Reliance Retail, Tata (Trent), and Nykaa.",
          "Leadership: Take leadership roles in school clubs and projects.",
          "Networking: Connect with retail professionals. Learn about different roles.",
          "Online Courses: Take free courses on Coursera about retail management.",
          "Entrance Prep: Start early preparation for SET, CUET, or other entrance exams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Retail Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "B.S. Nagesh: Former MD of Shoppers Stop. 'Father of Modern Indian Retail.' Pioneer who built retail sector.",
          "Falguni Nayar: Founder of Nykaa. Revolutionized beauty retail in India. Built billion-dollar brand.",
          "Kishore Biyani: Visionary behind Future Group and Big Bazaar. Shaped Indian retail landscape.",
          "Peyush Bansal: Founder of Lenskart. Turned eyewear into tech-driven retail experience.",
          "Isha Ambani: Leading massive digital and physical expansion of Reliance Retail.",
          "Mukesh Ambani: Founder of Reliance Retail. Built India's largest retail empire.",
          "Sanjiv Goenka: Founder of Spencer Retail. Pioneer in organized retail sector."
        ]
      }
    ]
  }
};
