export interface CareerVideo {
  id: number;
  title: string;
  url: string;
}

export const careerVideos: Record<string, CareerVideo[]> = {
  physiology: [
    {
      id: 1,
      title: "Physiology Career Overview",
      url: "https://www.youtube.com/embed/QrXc9GTnEg0",
    },
  ],
  microbiology: [
    {
      id: 1,
      title: "Microbiology Career Overview",
      url: "https://www.youtube.com/embed/8zQnyVDtWfc",
    },
    {
      id: 2,
      title: "Disease Detection & Lab Work",
      url: "https://www.youtube.com/embed/4H0RC_5HUDU",
    },
  ],
  fishery_biologist: [
    {
      id: 1,
      title: "Fishery Biologist Career Overview",
      url: "https://www.youtube.com/embed/AEO2H4BVo50",
    },
    {
      id: 2,
      title: "Blue Economy & Sustainable Fishing",
      url: "https://www.youtube.com/embed/epG8KVzWGhU",
    },
  ],
  genetics: [
    {
      id: 1,
      title: "Genetics Career Overview",
      url: "https://www.youtube.com/embed/LDdBbjtc6mk",
    },
    {
      id: 2,
      title: "DNA Detective & Gene Editing",
      url: "https://www.youtube.com/embed/QyfeJhuOve8",
    },
  ],
  clinical_research: [
    {
      id: 1,
      title: "Clinical Research Career Overview",
      url: "https://www.youtube.com/embed/ZGGY5RhW-S4",
    },
    {
      id: 2,
      title: "Clinical Trials & Drug Development",
      url: "https://www.youtube.com/embed/rfpmfjR0ECQ",
    },
  ],
  biotechnology_research: [
    {
      id: 1,
      title: "Biotechnology Research Career Overview",
      url: "https://www.youtube.com/embed/Tc3M89_C5GM",
    },
    {
      id: 2,
      title: "Gene Editing & Biotech Innovation",
      url: "https://www.youtube.com/embed/-0_ZMlrEyIg",
    },
  ],
  bioinformatics: [
    {
      id: 1,
      title: "Bioinformatics Career Overview",
      url: "https://www.youtube.com/embed/8biGt6JIQn8",
    },
  ],
  biochemistry: [
    {
      id: 1,
      title: "Biochemistry Career Overview",
      url: "https://www.youtube.com/embed/jMryl1x-418",
    },
    {
      id: 2,
      title: "Molecular Architecture & Drug Development",
      url: "https://www.youtube.com/embed/PnGnbRSOHw0",
    },
  ],
  youtuber: [
    {
      id: 1,
      title: "YouTuber Career Overview",
      url: "https://www.youtube.com/embed/AB-dnRpw4fs",
    },
    {
      id: 2,
      title: "Content Creation & Monetization",
      url: "https://www.youtube.com/embed/ns1BOVFab8E",
    },
    {
      id: 3,
      title: "Building Your Personal Brand",
      url: "https://www.youtube.com/embed/O3jMpgA5Ww4",
    },
    {
      id: 4,
      title: "YouTube Algorithm & Growth Hacks",
      url: "https://www.youtube.com/embed/5Jued-749HY",
    },
  ],
  accessory_design: [
    {
      id: 1,
      title: "Accessory Design Career Overview",
      url: "https://www.youtube.com/embed/CW8U4FSSWHQ",
    },
    {
      id: 2,
      title: "From Sketch to Showcase",
      url: "https://www.youtube.com/embed/UXtKeidzjA8",
    },
    {
      id: 3,
      title: "Materials & Craftsmanship",
      url: "https://www.youtube.com/embed/30-QV_njI6k",
    },
  ],
  animator: [
    {
      id: 1,
      title: "Animator Career Overview - The Illusionist",
      url: "https://www.youtube.com/embed/gCWcaTwVJ_g",
    },
    {
      id: 2,
      title: "From Concept to Animation",
      url: "https://www.youtube.com/embed/pSae3vc1YoM",
    },
    {
      id: 3,
      title: "3D Animation & VFX Magic",
      url: "https://www.youtube.com/embed/GKbGus5vY1s",
    },
  ],
  cosmetology: [
    {
      id: 1,
      title: "Cosmetology Career Overview - The Aesthetics Architect",
      url: "https://www.youtube.com/embed/14HCXIItCWo",
    },
    {
      id: 2,
      title: "Skin Science & Laser Treatments",
      url: "https://www.youtube.com/embed/cjRLPcbM3WY",
    },
  ],
  creative_writer: [
    {
      id: 1,
      title: "Creative Writer Career Overview - The Architect of Worlds",
      url: "https://www.youtube.com/embed/y2Z-bisgFzc",
    },
    {
      id: 2,
      title: "Screenwriting & Storytelling Craft",
      url: "https://www.youtube.com/embed/FGbrhOeayOc",
    },
  ],
  fashion_designing: [
    {
      id: 1,
      title: "Fashion Design Career Overview - The Style Visionary",
      url: "https://www.youtube.com/embed/kymctE5i4Xc",
    },
    {
      id: 2,
      title: "From Sketch to Stitch - Design Process",
      url: "https://www.youtube.com/embed/Yd_AvPj_zt0",
    },
    {
      id: 3,
      title: "Sustainable Fashion & Material Innovation",
      url: "https://www.youtube.com/embed/AsaeRam9HS8",
    },
    {
      id: 4,
      title: "Fashion Industry Trends & Career Opportunities",
      url: "https://www.youtube.com/embed/jDptwnCtrqM",
    },
  ],
  fine_arts: [
    {
      id: 1,
      title: "Fine Arts Career Overview - The Visionary's Canvas",
      url: "https://www.youtube.com/embed/50NDe9T1qH4",
    },
    {
      id: 2,
      title: "From Studio to Gallery - Artist's Journey",
      url: "https://www.youtube.com/embed/Zwoaq862irw",
    },
  ],
  graphical_designing: [
    {
      id: 1,
      title: "Graphic Design Career Overview - The Visual Storyteller",
      url: "https://www.youtube.com/embed/Nb99U_fW1WY",
    },
    {
      id: 2,
      title: "UI/UX Design & Digital Experience",
      url: "https://www.youtube.com/embed/DMx_FEkAPzM",
    },
    {
      id: 3,
      title: "Brand Identity & Logo Design Mastery",
      url: "https://www.youtube.com/embed/5nh6taJnbaI",
    },
  ],
  interior_designing: [
    {
      id: 1,
      title: "Interior Design Career Overview - The Space Magician",
      url: "https://www.youtube.com/embed/GkUHvrwZ7Ls",
    },
  ],
  interpreter_and_translator: [
    {
      id: 1,
      title: "Interpreter and Translator Career Overview - The Bridge Builders",
      url: "https://www.youtube.com/embed/drXe07iqVHI",
    },
    {
      id: 2,
      title: "Language Services & Global Opportunities",
      url: "https://www.youtube.com/embed/KIBKRotpPYE",
    },
  ],
  liberal_arts: [
    {
      id: 1,
      title: "Liberal Arts Career Overview - The Master Key",
      url: "https://www.youtube.com/embed/ilzUN1zzbfk",
    },
    {
      id: 2,
      title: "Interdisciplinary Thinking & Global Careers",
      url: "https://www.youtube.com/embed/NpLjq6ysQSQ",
    },
  ],
  performing_arts: [
    {
      id: 1,
      title: "Performing Arts Career Overview - The Stage is Yours",
      url: "https://www.youtube.com/embed/aj59BY9mrpA",
    },
    {
      id: 2,
      title: "Acting, Dance & Music Careers in India",
      url: "https://www.youtube.com/embed/VhsF0Uv77QI",
    },
    {
      id: 3,
      title: "Live Performance & Entertainment Industry",
      url: "https://www.youtube.com/embed/55AzTF6_kwE",
    },
  ],
  photography: [
    {
      id: 1,
      title: "Photography Career Overview - The Visual Storyteller",
      url: "https://www.youtube.com/embed/FEnQA0QUS6M",
    },
    {
      id: 2,
      title: "Professional Photography & Post-Production",
      url: "https://www.youtube.com/embed/Zxyot_6opLw",
    },
    {
      id: 3,
      title: "E-commerce & Fashion Photography",
      url: "https://www.youtube.com/embed/ygXrtoH5aFk",
    },
  ],
  product_designing: [
    {
      id: 1,
      title: "Product Designing Career Overview - The Functional Artist",
      url: "https://www.youtube.com/embed/J101Zka0Lrs",
    },
    {
      id: 2,
      title: "Design Thinking & Product Development",
      url: "https://www.youtube.com/embed/yNR7wOgFR4E",
    },
  ],
  website_designer: [
    {
      id: 1,
      title: "Website Designer Career Overview - The Digital Architect",
      url: "https://www.youtube.com/embed/m6V-InNnbKY",
    },
    {
      id: 2,
      title: "UI/UX Design & Web Development",
      url: "https://www.youtube.com/embed/yF1T0Uw4jSQ",
    },
  ],
  construction: [
    {
      id: 1,
      title: "Construction Career Overview - Building the New India",
      url: "https://www.youtube.com/embed/GHcZ7833BV0",
    },
    {
      id: 2,
      title: "Site Engineering & Project Management",
      url: "https://www.youtube.com/embed/-hFXI8JC4Ec",
    },
  ],
  architect: [
    {
      id: 1,
      title: "Architect Career Overview - Designing the Future of India",
      url: "https://www.youtube.com/embed/DTJLm5iXK_c",
    },
    {
      id: 2,
      title: "Design Process & Green Building",
      url: "https://www.youtube.com/embed/ViZQBIwf3oU",
    },
    {
      id: 3,
      title: "From Concept to Construction",
      url: "https://www.youtube.com/embed/Siyi8ka6mDk",
    },
  ],
  maintenance_and_operation_management: [
    {
      id: 1,
      title: "Maintenance & Operations Career Overview - The Guardians of Industry",
      url: "https://www.youtube.com/embed/tdZOjBODtE4",
    },
    {
      id: 2,
      title: "Predictive Maintenance & Smart Operations",
      url: "https://www.youtube.com/embed/rF5VIXn6wDQ",
    },
    {
      id: 3,
      title: "Plant Management & Efficiency Optimization",
      url: "https://www.youtube.com/embed/rF5VIXn6wDQ",
    },
    {
      id: 4,
      title: "Industry 4.0 & Digital Twins",
      url: "https://www.youtube.com/embed/GHQWUWLn-bQ",
    },
  ],
  urban_planning_and_management: [
    {
      id: 1,
      title: "Urban Planning Career Overview - The City Surgeons",
      url: "https://www.youtube.com/embed/kenPO2ntgOw",
    },
    {
      id: 2,
      title: "Smart Cities & Sustainable Urban Development",
      url: "https://www.youtube.com/embed/S4AuhzDelwM",
    },
  ],
  agri_business_management: [
    {
      id: 1,
      title: "Agri-Business Management Career Overview - Cultivating the Future",
      url: "https://www.youtube.com/embed/Ku1oDYDrCco",
    },
    {
      id: 2,
      title: "Farm-to-Fork Supply Chain & Digital Platforms",
      url: "https://www.youtube.com/embed/HlW2vNg57Nw",
    },
    {
      id: 3,
      title: "Agritech Startups & Precision Farming",
      url: "https://www.youtube.com/embed/rcHWzSje3uw",
    },
  ],
  agricultural_engineer: [
    {
      id: 1,
      title: "Agricultural Engineering Career Overview - Engineering the Future of Food",
      url: "https://www.youtube.com/embed/XYLggvMiU2M",
    },
    {
      id: 2,
      title: "Precision Agriculture & Drone Technology",
      url: "https://www.youtube.com/embed/mr9u96r985Y",
    },
    {
      id: 3,
      title: "Automated Machinery & Sustainable Systems",
      url: "https://www.youtube.com/embed/hpR_pTaANSg",
    },
  ],
  agriculture_research: [
    {
      id: 1,
      title: "Agriculture and Plant Research Career Overview - The Science of Life and Food",
      url: "https://www.youtube.com/embed/gkBYovhzsEE",
    },
    {
      id: 2,
      title: "Plant Breeding & Genetic Engineering",
      url: "https://www.youtube.com/embed/Iot1IzRk-8Q",
    },
  ],
  animal_science: [
    {
      id: 1,
      title: "Animal Science Career Overview - The Guardians of the Voiceless",
      url: "https://www.youtube.com/embed/HHjVGCv1N6s",
    },
    {
      id: 2,
      title: "Veterinary Medicine & Zoonotic Disease Prevention",
      url: "https://www.youtube.com/embed/OUM8G2h6U4M",
    },
  ],
  dairy_technology: [
    {
      id: 1,
      title: "Dairy Technology Career Overview - The Science of the Milky Way",
      url: "https://www.youtube.com/embed/DYareilr3qI",
    },
    {
      id: 2,
      title: "Milk Processing & Quality Assurance",
      url: "https://www.youtube.com/embed/1NM-17gMZmc",
    },
    {
      id: 3,
      title: "Cold Chain Logistics & Product Innovation",
      url: "https://www.youtube.com/embed/oqy11oJ-dWI",
    },
  ],
  food_science: [
    {
      id: 1,
      title: "Food Science and Technology Career Overview - The Magic Behind Your Plate",
      url: "https://www.youtube.com/embed/U6G17_P_BKY",
    },
    {
      id: 2,
      title: "Food Processing, Safety & Innovation",
      url: "https://www.youtube.com/embed/zQqEejPXVC8",
    },
  ],
  environmental_scientist: [
    {
      id: 1,
      title: "Environmental Scientist Career Overview - The Earth's Detective",
      url: "https://www.youtube.com/embed/nDw6caTbhuc",
    },
    {
      id: 2,
      title: "Pollution Control & Environmental Impact Assessment",
      url: "https://www.youtube.com/embed/kVxbnf-cLIQ",
    },
    {
      id: 3,
      title: "Climate Science & Sustainability Careers",
      url: "https://www.youtube.com/embed/_m-IIBpcZl4",
    },
  ],
  forest_officer: [
    {
      id: 1,
      title: "Forest Officer Career Overview - The Guardian of the Wild",
      url: "https://www.youtube.com/embed/PzzE1706jds",
    },
  ],
  geology: [
    {
      id: 1,
      title: "Geology Career Overview - The Earth's Detective",
      url: "https://www.youtube.com/embed/3dKvcdSRP6s",
    },
    {
      id: 2,
      title: "Mineral Exploration & Critical Minerals for EV Revolution",
      url: "https://www.youtube.com/embed/DA67iXuV77g",
    },
  ],
  oceanography: [
    {
      id: 1,
      title: "Oceanography Career Overview - Decoding the Blue Heart of Earth",
      url: "https://www.youtube.com/embed/zwA8h7XyLZ4",
    },
    {
      id: 2,
      title: "Ocean Research, Monsoon Prediction & Blue Economy",
      url: "https://www.youtube.com/embed/5TmrERR819o",
    },
  ],
  wildlife_biologist: [
    {
      id: 1,
      title: "Wildlife Biologist Career Overview - The Voice of the Wild",
      url: "https://www.youtube.com/embed/K3oAXHOUKzE",
    },
  ],
  actuarial_science: [
    {
      id: 1,
      title: "Actuarial Science Career Overview - The Architects of Risk",
      url: "https://www.youtube.com/embed/k7Pk20LFhsQ",
    },
    {
      id: 2,
      title: "Risk Modeling & Financial Forecasting",
      url: "https://www.youtube.com/embed/CG5vKhN7scY",
    },
  ],
  banking_and_related_services: [
    {
      id: 1,
      title: "Banking Career Overview - The Engine of the Indian Economy",
      url: "https://www.youtube.com/embed/ivsg7Cs3atw",
    },
    {
      id: 2,
      title: "Digital Banking & Fintech Innovation",
      url: "https://www.youtube.com/embed/Cd2KJ8oXqwY",
    },
    {
      id: 3,
      title: "Loan Processing & Risk Management",
      url: "https://www.youtube.com/embed/VokUwWw_6cg",
    },
    {
      id: 4,
      title: "Career Paths in Banking & Finance",
      url: "https://www.youtube.com/embed/dmX2g59_90A",
    },
  ],
  chartered_accountant: [
    {
      id: 1,
      title: "Chartered Accountant Career Overview - The Financial Architect of India",
      url: "https://www.youtube.com/embed/KUMT6hlr6gA",
    },
    {
      id: 2,
      title: "Auditing, Taxation & Financial Advisory",
      url: "https://www.youtube.com/embed/CqZSxeo9gUQ",
    },
  ],
  company_secretary: [
    {
      id: 1,
      title: "Company Secretary Career Overview - The Backbone of Corporate Governance",
      url: "https://www.youtube.com/embed/1_ih99HhknK",
    },
  ],
  cost_accountant: [
    {
      id: 1,
      title: "CMA Career Overview - The Efficiency Engineers of Business",
      url: "https://www.youtube.com/embed/pv0svx6zKVU",
    },
    {
      id: 2,
      title: "Cost Accounting & Manufacturing Excellence",
      url: "https://www.youtube.com/embed/5ZyWaJHieI0",
    },
    {
      id: 3,
      title: "CMA Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/O8HsX1Ptj9s",
    },
  ],
  economics: [
    {
      id: 1,
      title: "Economics Career Overview - The Science of Smart Decisions",
      url: "https://www.youtube.com/embed/wCkXpHbPeoU",
    },
    {
      id: 2,
      title: "Data Analysis & Policy Making in Economics",
      url: "https://www.youtube.com/embed/5MtXpudqW_U",
    },
    {
      id: 3,
      title: "Economics Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/F15qQRoRXqc",
    },
  ],
  financial_analyst: [
    {
      id: 1,
      title: "Financial Analyst Career Overview - The Navigators of Wealth",
      url: "https://www.youtube.com/embed/E0w5tN77vPk",
    },
    {
      id: 2,
      title: "Financial Modeling & Investment Analysis",
      url: "https://www.youtube.com/embed/pbw1haJjJRo",
    },
  ],
  financial_and_investment_planning: [
    {
      id: 1,
      title: "Financial Planning Career Overview - The Architects of Personal Wealth",
      url: "https://www.youtube.com/embed/6nK59ZbpsbA",
    },
    {
      id: 2,
      title: "Building Wealth Through Smart Investment Planning",
      url: "https://www.youtube.com/embed/J9x-ND5vLF8",
    },
    {
      id: 3,
      title: "Financial Planning Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/Aizg6iIioPQ",
    },
  ],
  financial_risk_management: [
    {
      id: 1,
      title: "Financial Risk Management Career Overview - The Guardians of Economic Stability",
      url: "https://www.youtube.com/embed/KYtI8XVehfA",
    },
    {
      id: 2,
      title: "Risk Analysis & Mitigation Strategies",
      url: "https://www.youtube.com/embed/ZqaDY5924uA",
    },
    {
      id: 3,
      title: "Financial Risk Management Career Path & Opportunities in India",
      url: "https://www.youtube.com/embed/iBFdbfFA33I",
    },
  ],
  forensic_scientist: [
    {
      id: 1,
      title: "Forensic Scientist Career Overview - The Science of Truth",
      url: "https://www.youtube.com/embed/5OXhjgpyjRE",
    },
    {
      id: 2,
      title: "Crime Scene Investigation & Forensic Analysis",
      url: "https://www.youtube.com/embed/lv1RJglpR5c",
    },
  ],
  lawyer: [
    {
      id: 1,
      title: "Lawyer Career Overview - The Defenders of Justice",
      url: "https://www.youtube.com/embed/wuKyQErklQs",
    },
    {
      id: 2,
      title: "Legal Career Paths & Specializations in India",
      url: "https://www.youtube.com/embed/l7zPDlHW_fA",
    },
    {
      id: 3,
      title: "Corporate Law vs Litigation: Which Path is Right for You?",
      url: "https://www.youtube.com/embed/U6lMckVjB8E",
    },
  ],
  industrial_designer: [
    {
      id: 1,
      title: "Industrial Design Career Overview - The Architects of Everyday Life",
      url: "https://www.youtube.com/embed/h_TUYyczky8",
    },
    {
      id: 2,
      title: "Product Design Process & Career Opportunities",
      url: "https://www.youtube.com/embed/vwOSbNmx8RI",
    },
  ],
  industrial_engineer: [
    {
      id: 1,
      title: "Industrial Engineering Career Overview - The Efficiency Experts",
      url: "https://www.youtube.com/embed/4qv2qKJ6f70",
    },
    {
      id: 2,
      title: "Process Optimization & Operations Management",
      url: "https://www.youtube.com/embed/cfQKF47nfVc",
    },
  ],
  mechanical_engineer: [
    {
      id: 1,
      title: "Mechanical Engineering Career Overview - The Builders of Everything",
      url: "https://www.youtube.com/embed/Un1ipH1cqzQ",
    },
    {
      id: 2,
      title: "Manufacturing & Innovation in Mechanical Engineering",
      url: "https://www.youtube.com/embed/NDa3AGPobS4",
    },
  ],
  mass_communication: [
    {
      id: 1,
      title: "Mass Communication Career Overview - The Voice of the World",
      url: "https://www.youtube.com/embed/BG1-Q96moZI",
    },
    {
      id: 2,
      title: "BJMC Job Roles & Salary 2026",
      url: "https://www.youtube.com/embed/lPHrwMCbQ-0",
    },
  ],
  public_relations_officer: [
    {
      id: 1,
      title: "Public Relations Career Overview - The Image Architects",
      url: "https://www.youtube.com/embed/9xQnMDFXRu4",
    },
    {
      id: 2,
      title: "PR Officer Roles & Crisis Management",
      url: "https://www.youtube.com/embed/iROfajgB430",
    },
  ],
  journalist: [
    {
      id: 1,
      title: "Journalism Career Overview - The Truth Seekers",
      url: "https://www.youtube.com/embed/V2Trq7iwOGU",
    },
    {
      id: 2,
      title: "Digital Journalism & Fact-Checking",
      url: "https://www.youtube.com/embed/e0B9EquB_Vs",
    },
  ],
  international_relations: [
    {
      id: 1,
      title: "International Relations Career Overview - The Global Strategists",
      url: "https://www.youtube.com/embed/o97t1Ou3EPY",
    },
    {
      id: 2,
      title: "Diplomacy & Foreign Policy Career Path",
      url: "https://www.youtube.com/embed/17bHMqgiVoE",
    },
  ],
  civil_administrative_services: [
    {
      id: 1,
      title: "Civil Administrative Services - The Architects of a Nation",
      url: "https://www.youtube.com/embed/12FxK7ejYwU",
    },
    {
      id: 2,
      title: "IAS/IPS Salary & Promotion Chart 2026",
      url: "https://www.youtube.com/embed/12FxK7ejYwU",
    },
  ],
  indian_economic_service: [
    {
      id: 1,
      title: "Indian Economic Service - The Architects of the Economy",
      url: "https://www.youtube.com/embed/HqdDEG7JrwM",
    },
    {
      id: 2,
      title: "IES Career Path & Economic Policy Making",
      url: "https://www.youtube.com/embed/fEi7Cb300R4",
    },
  ],
  sports_physiotherapist: [
    {
      id: 1,
      title: "Sports Physiotherapist Career - The Body Mechanics of Sports",
      url: "https://www.youtube.com/embed/E185pVJMFnQ",
    },
    {
      id: 2,
      title: "Sports Injury Prevention & Rehabilitation",
      url: "https://www.youtube.com/embed/eka6osF5I7E",
    },
  ],
  sportsperson: [
    {
      id: 1,
      title: "Sportsperson Career - The Champions of India",
      url: "https://www.youtube.com/embed/7lwoUf6nevA",
    },
    {
      id: 2,
      title: "Professional Sports Career Path & Opportunities",
      url: "https://www.youtube.com/embed/z3F_9M0o5es",
    },
  ],
  sports_management: [
    {
      id: 1,
      title: "Sports Management Career in India - Complete Guide",
      url: "https://www.youtube.com/embed/WOOfEtRBDxM",
    },
    {
      id: 2,
      title: "Sports Management Career Pathways and Opportunities",
      url: "https://www.youtube.com/embed/wJfMjp0KwWw",
    },
  ],
  physical_trainer: [
    {
      id: 1,
      title: "Physical Trainer Career - The Architects of Health",
      url: "https://www.youtube.com/embed/XN8MX208dS8",
    },
    {
      id: 2,
      title: "Fitness Coaching & Personal Training Career Path",
      url: "https://www.youtube.com/embed/qI3pP3VIJ1U",
    },
  ],
  astronomer: [
    {
      id: 1,
      title: "Astronomer Career - The Cosmic Detectives",
      url: "https://www.youtube.com/embed/EXn9EPKhOow",
    },
    {
      id: 2,
      title: "Astrophysics & Space Research Career Path",
      url: "https://www.youtube.com/embed/xPuGqry4_Gc",
    },
  ],
  chemical_engineer: [
    {
      id: 1,
      title: "Chemical Engineering Career - The Architects of Scale",
      url: "https://www.youtube.com/embed/DX-I4lt4pQ8",
    },
    {
      id: 2,
      title: "Process Engineering & Industrial Chemistry",
      url: "https://www.youtube.com/embed/AYX6bVz1X6E",
    },
  ],
  engineering_and_technology: [
    {
      id: 1,
      title: "Engineering & Technology Career Overview - The Builders of Tomorrow",
      url: "https://www.youtube.com/embed/ejDdw1aUkf0",
    },
    {
      id: 2,
      title: "Tech Innovation & Engineering Excellence",
      url: "https://www.youtube.com/embed/Hqm3rC_7eq8",
    },
  ],
  mathematician: [
    {
      id: 1,
      title: "Mathematician Career Overview - The Pattern Finder",
      url: "https://www.youtube.com/embed/bBJbHgpchqE",
    },
    {
      id: 2,
      title: "Mathematics in AI, Finance & Space Exploration",
      url: "https://www.youtube.com/embed/qKswFu_MI0Y",
    },
  ],
  nanotechnologist: [
    {
      id: 1,
      title: "Nanotechnologist Career Overview - The Atomic Architect",
      url: "https://www.youtube.com/embed/7-bQ4bJJ4UA",
    },
  ],
  robotics_engineer: [
    {
      id: 1,
      title: "Robotics Engineering Career Overview - The Multi-Disciplinary Creator",
      url: "https://www.youtube.com/embed/EFppqtInU5s",
    },
    {
      id: 2,
      title: "Building Robots: From Drones to Surgical Bots",
      url: "https://www.youtube.com/embed/pmkwd3tpbqI",
    },
  ],
  statistician: [
    {
      id: 1,
      title: "Statistician Career Overview - The Data Detective",
      url: "https://www.youtube.com/embed/ByPfyNX2rQ4",
    },
    {
      id: 2,
      title: "Data Analytics & Statistical Modeling in India",
      url: "https://www.youtube.com/embed/1S_JYp6eNIY",
    },
  ],
  advertising_and_communication: [
    {
      id: 1,
      title: "Advertising & Communication Career Overview - The Storytellers of Commerce",
      url: "https://www.youtube.com/embed/ZsDOcNGJ8a0",
    },
    {
      id: 2,
      title: "Creative Campaigns & Digital Marketing in India",
      url: "https://www.youtube.com/embed/7uv4H1AF49w",
    },
  ],
  digital_marketing: [
    {
      id: 1,
      title: "Digital Marketing Career Overview - The Screen Whisperers",
      url: "https://www.youtube.com/embed/KZLroOQKT-g",
    },
    {
      id: 2,
      title: "SEO, Social Media & Performance Marketing in India",
      url: "https://www.youtube.com/embed/3J6EW0FQ2tQ",
    },
  ],
  entrepreneurship_and_management: [
    {
      id: 1,
      title: "Entrepreneurship & Management Career Overview - The Architects of Tomorrow",
      url: "https://www.youtube.com/embed/KZLroOQKT-g",
    },
  ],
  marketing: [
    {
      id: 1,
      title: "Marketing Career Overview - The Pulse of Business",
      url: "https://www.youtube.com/embed/DGcopLXJUzU",
    },
    {
      id: 2,
      title: "Brand Management & Consumer Marketing in India",
      url: "https://www.youtube.com/embed/1Tf9NHbRPYM",
    },
  ],
  sales_professional: [
    {
      id: 1,
      title: "Sales Professional Career Overview - The Engine of Business",
      url: "https://www.youtube.com/embed/ZUKLrTl22gg",
    },
    {
      id: 2,
      title: "B2B Sales, FMCG & Real Estate Sales in India",
      url: "https://www.youtube.com/embed/wEUPzdCDHSs",
    },
  ],
  visual_merchandiser: [
    {
      id: 1,
      title: "Visual Merchandiser Career Overview - The Silent Sellers",
      url: "https://www.youtube.com/embed/ZUKLrTl22gg",
    },
  ],
  aeronautical_engineer: [
    {
      id: 1,
      title: "Aeronautical Engineer Career Overview - The Sky Architects",
      url: "https://www.youtube.com/embed/HfNObEh1scg",
    },
    {
      id: 2,
      title: "Aircraft Design, Drones & Aerospace Engineering in India",
      url: "https://www.youtube.com/embed/NItaQ50mpJM",
    },
  ],
  air_traffic_controller: [
    {
      id: 1,
      title: "Air Traffic Controller Career Overview - The Sky Guardians",
      url: "https://www.youtube.com/embed/1UM8ssea-uA",
    },
    {
      id: 2,
      title: "Radar Systems, Flight Safety & ATC Operations in India",
      url: "https://www.youtube.com/embed/N1gw9orDqnw",
    },
  ],
  automotive_design: [
    {
      id: 1,
      title: "Automotive Design Career Overview - The Sculptors of Speed",
      url: "https://www.youtube.com/embed/SSGSdSKLJVM",
    },
    {
      id: 2,
      title: "EV Design, Clay Modeling & Automotive Innovation in India",
      url: "https://www.youtube.com/embed/qEi4KyNTiN4",
    },
  ],
  aviation_management: [
    {
      id: 1,
      title: "Aviation Management Career Overview - The Ground Commanders",
      url: "https://www.youtube.com/embed/m_2b4f87nDY",
    },
    {
      id: 2,
      title: "Airport Operations, Airlines & Aviation Industry in India",
      url: "https://www.youtube.com/embed/02Agmdg8D5o",
    },
  ],
  commercial_pilot: [
    {
      id: 1,
      title: "Commercial Pilot Career Overview - The Captains of the Clouds",
      url: "https://www.youtube.com/embed/Edk3FlhuvC8",
    },
    {
      id: 2,
      title: "Flight Training, Cockpit Operations & Pilot Life in India",
      url: "https://www.youtube.com/embed/YztqsEiXVuY",
    },
  ],
  merchant_navy_officer: [
    {
      id: 1,
      title: "Merchant Navy Officer Career Overview - The Global Nomads",
      url: "https://www.youtube.com/embed/bY01tHJG3OM",
    },
    {
      id: 2,
      title: "Ship Operations, Maritime Training & Life at Sea in India",
      url: "https://www.youtube.com/embed/n0JaPBJQdGY",
    },
  ],
  supply_chain_management: [
    {
      id: 1,
      title: "Supply Chain Management Career Overview - The Masterminds of Movement",
      url: "https://www.youtube.com/embed/52VcoVTsVUY",
    },
  ],
  artificial_intelligence: [
    {
      id: 1,
      title: "Artificial Intelligence Career Overview - The Architect of Intelligence",
      url: "https://www.youtube.com/embed/qzAHXO-cN5Q",
    },
    {
      id: 2,
      title: "Machine Learning, AI Engineering & Future of AI in India",
      url: "https://www.youtube.com/embed/HAN2z7vLsIE",
    },
  ],
  blockchain_engineer: [
    {
      id: 1,
      title: "Blockchain Engineer Career Overview - The Architect of Trust",
      url: "https://www.youtube.com/embed/TO7E7NcdEEY",
    },
    {
      id: 2,
      title: "Smart Contracts, Web3 Development & Blockchain Future in India",
      url: "https://www.youtube.com/embed/ShoJmT3GWfk",
    },
  ],
  data_scientist: [
    {
      id: 1,
      title: "Data Scientist Career Overview - The Modern-Day Oracle",
      url: "https://www.youtube.com/embed/a3RSa1U6ae8",
    },
    {
      id: 2,
      title: "Machine Learning, AI & Data Science Future in India",
      url: "https://www.youtube.com/embed/XKlfQbxDOO0",
    },
  ],
  electronics_communication_engineering: [
    {
      id: 1,
      title: "Electronics & Communication Engineering Career Overview - The Architects of the Future",
      url: "https://www.youtube.com/embed/Z3ruVE-uQFY",
    },
    {
      id: 2,
      title: "VLSI, 5G & Semiconductor Future in India",
      url: "https://www.youtube.com/embed/Z3ruVE-uQFY",
    },
  ],
  ethical_hacking: [
    {
      id: 1,
      title: "Ethical Hacking Career Overview - The Digital Bodyguard",
      url: "https://www.youtube.com/embed/rF5VIXn6wDQ",
    },
    {
      id: 2,
      title: "Penetration Testing, Bug Bounty & Cybersecurity Future in India",
      url: "https://www.youtube.com/embed/hEQM3SRWC54",
    },
  ],
  gis_expert: [
    {
      id: 1,
      title: "GIS Expert Career Overview - The Map Magicians",
      url: "https://www.youtube.com/embed/xMwxvq19XxU",
    },
    {
      id: 2,
      title: "Satellite Mapping, Smart Cities & Geospatial Future in India",
      url: "https://www.youtube.com/embed/UKoj5xoyfDQ",
    },
  ],
  internet_of_things: [
    {
      id: 1,
      title: "IoT Career Overview - The Magicians of Connected Things",
      url: "https://www.youtube.com/embed/jqae_v4bx5w",
    },
    {
      id: 2,
      title: "Smart Devices, 5G & IoT Future in India",
      url: "https://www.youtube.com/embed/RtnJ7roVmYM",
    },
  ],
  it_business_analyst: [
    {
      id: 1,
      title: "IT Business Analyst Career Overview - The Bridge Builder",
      url: "https://www.youtube.com/embed/FY69oncFXQE",
    },
    {
      id: 2,
      title: "Business Analysis, Product Management & Digital Transformation in India",
      url: "https://www.youtube.com/embed/FP0rOvPwMdQ",
    },
  ],
  it_project_manager: [
    {
      id: 1,
      title: "IT Project Manager Career Overview - The Captain of the Ship",
      url: "https://www.youtube.com/embed/qrVikzCXkq0",
    },
    {
      id: 2,
      title: "Project Manager vs Product Manager & Leadership in India",
      url: "https://www.youtube.com/embed/azaeoANOLWA",
    },
  ],
  mobile_app_developer: [
    {
      id: 1,
      title: "Mobile App Developer Career Overview - The Architects of the Pocket",
      url: "https://www.youtube.com/embed/tZTzidVpZ6c",
    },
    {
      id: 2,
      title: "Flutter vs Native Development & Mobile App Future in India",
      url: "https://www.youtube.com/embed/x-8tqQj0Igk",
    },
  ],
  software_engineer: [
    {
      id: 1,
      title: "Software Engineer Career Overview - The Code to Your Future",
      url: "https://www.youtube.com/embed/KMtaud07YEo",
    },
    {
      id: 2,
      title: "Day in the Life of a Software Engineer in Bangalore",
      url: "https://www.youtube.com/embed/IMl-opomOgU",
    },
  ],
  software_testing_qa: [
    {
      id: 1,
      title: "Software Testing & QA Career Overview - The Digital Detectives",
      url: "https://www.youtube.com/embed/B_3J4nJ3uOg",
    },
    {
      id: 2,
      title: "SDET, Automation & QA Future in India",
      url: "https://www.youtube.com/embed/KMAp1iSM7S0",
    },
  ],
  video_game_designer: [
    {
      id: 1,
      title: "Video Game Designer Career Overview - Creating Digital Worlds",
      url: "https://www.youtube.com/embed/rJ1iA-33fss",
    },
    {
      id: 2,
      title: "Game Design in India - From Concept to Console",
      url: "https://www.youtube.com/embed/iohbl9IpPgA",
    },
  ],
  anthropologist: [
    {
      id: 1,
      title: "Anthropologist Career Overview - Understanding Human Diversity",
      url: "https://www.youtube.com/embed/mWCNjRjb4aw",
    },
    {
      id: 2,
      title: "Anthropology in India - Preserving Cultural Heritage",
      url: "https://www.youtube.com/embed/FXuqUOXX4WY",
    },
  ],
  archaeologist: [
    {
      id: 1,
      title: "Archaeologist Career Overview - Uncovering the Past",
      url: "https://www.youtube.com/embed/5Cr6VUboOr0",
    },
    {
      id: 2,
      title: "Archaeology in India - Discovering Ancient Civilizations",
      url: "https://www.youtube.com/embed/Hry0qO3oA7w",
    },
  ],
  airhostess: [
    {
      id: 1,
      title: "Air Hostess Career Overview - Safety and Service at 35,000 Feet",
      url: "https://www.youtube.com/embed/IZgxgimlWH8",
    },
    {
      id: 2,
      title: "Aviation Career in India - The Sky's Professional",
      url: "https://www.youtube.com/embed/1NHPoRUsDds",
    },
  ],
  culinary_arts: [
    {
      id: 1,
      title: "Culinary Arts Career Overview - The Art and Science of Food",
      url: "https://www.youtube.com/embed/bGDMOwvEjLw",
    },
    {
      id: 2,
      title: "Chef Career in India - From Kitchen to Global Stage",
      url: "https://www.youtube.com/embed/tQkI7zgbn78",
    },
  ],
  event_planner: [
    {
      id: 1,
      title: "Event Planning Career Overview - The Architect of Experiences",
      url: "https://www.youtube.com/embed/I8tLqq9iqv0",
    },
    {
      id: 2,
      title: "Event Planning in India - Creating Unforgettable Moments",
      url: "https://www.youtube.com/embed/HxCsd0oYYVs",
    },
  ],
  hotel_management: [
    {
      id: 1,
      title: "Hotel Management Career Overview - The CEO of Hospitality",
      url: "https://www.youtube.com/embed/aRjXaBQibmI",
    },
    {
      id: 2,
      title: "Hotel Management in India - Creating Guest Experiences",
      url: "https://www.youtube.com/embed/aM-7IIOsDWQ",
    },
  ],
  travel_and_tourism: [
    {
      id: 1,
      title: "Travel and Tourism Career Overview - Designer of Adventures",
      url: "https://www.youtube.com/embed/o6GgQPiX-TA",
    },
    {
      id: 2,
      title: "Travel and Tourism in India - Enabling Experiences",
      url: "https://www.youtube.com/embed/NVgmdhDxPbw",
    },
  ],
  wedding_planner: [
    {
      id: 1,
      title: "Wedding Planning Career Overview - Architect of Happily Ever After",
      url: "https://www.youtube.com/embed/lw9vvSpgyQU",
    },
    {
      id: 2,
      title: "Wedding Planning in India - Creating Cherished Moments",
      url: "https://www.youtube.com/embed/EpCZrRczHDw",
    },
  ],
  alternative_medicine: [
    {
      id: 1,
      title: "Alternative Medicine Career Overview - Healer of Nature",
      url: "https://www.youtube.com/embed/tl9e4AVFfAE",
    },
    {
      id: 2,
      title: "AYUSH Careers in India - Healing Through Nature's Wisdom",
      url: "https://www.youtube.com/embed/Vf15QtNbK8k",
    },
    {
      id: 3,
      title: "Alternative Medicine - Bridging Ancient Wisdom and Modern Science",
      url: "https://www.youtube.com/embed/433t8-kGe5A",
    },
  ],
  audiologist: [
    {
      id: 1,
      title: "Audiologist Career Overview - The Science of Sound and Balance",
      url: "https://www.youtube.com/embed/EAmxL45mRgE",
    },
    {
      id: 2,
      title: "Hearing Aids, Cochlear Implants & Life-Changing Technology",
      url: "https://www.youtube.com/embed/rP1GHHEbixY",
    },
  ],
  dentist: [
    {
      id: 1,
      title: "Dentist Career Overview - The Architect of Smiles",
      url: "https://www.youtube.com/embed/lvHVmP5iEpw",
    },
    {
      id: 2,
      title: "Cosmetic Dentistry, Implants & Digital Smile Design",
      url: "https://www.youtube.com/embed/BrzKN_PJ8X4",
    },
    {
      id: 3,
      title: "Dental Specializations & Career Opportunities",
      url: "https://www.youtube.com/embed/ttf_yn5bNbA",
    },
  ],
  dietician: [
    {
      id: 1,
      title: "Dietician Career Overview - The Architect of Health Through Food",
      url: "https://www.youtube.com/embed/GHcZ7833BV0",
    },
    {
      id: 2,
      title: "Nutrition Science, Sports Nutrition & Wellness Coaching",
      url: "https://www.youtube.com/embed/cSdHJHSVhFE",
    },
    {
      id: 3,
      title: "Nutrigenomics, AI Integration & Future of Nutrition",
      url: "https://www.youtube.com/embed/5GIwXzPt3PM",
    },
  ],
  general_physician: [
    {
      id: 1,
      title: "General Physician Career Overview - The Guardian of First Contact",
      url: "https://www.youtube.com/embed/xBkZe-GNIRM",
    },
    {
      id: 2,
      title: "MBBS, MD Specialization & Medical Career Pathways",
      url: "https://www.youtube.com/embed/tdFGxIeG-o4",
    },
  ],
  homeopathy: [
    {
      id: 1,
      title: "Homeopathy Career Overview - The Art of Individualized Healing",
      url: "https://www.youtube.com/embed/gVqcySApvZ0",
    },
    {
      id: 2,
      title: "Case-Taking, Materia Medica & Homeopathic Principles",
      url: "https://www.youtube.com/embed/VSpbMiwmVx4",
    },
    {
      id: 3,
      title: "BHMS Education, Career Opportunities & Global Demand",
      url: "https://www.youtube.com/embed/oWvQ22oF9G8",
    },
  ],
  hospital_management: [
    {
      id: 1,
      title: "Hospital Management Career Overview - The Architects of Healthcare",
      url: "https://www.youtube.com/embed/J2aRx-2NAOE",
    },
    {
      id: 2,
      title: "MHA, MBA Healthcare & Healthcare Administration Careers",
      url: "https://www.youtube.com/embed/Kc0FNH0HzZ8",
    },
  ],
  medical_diagnostic_services: [
    {
      id: 1,
      title: "Medical Diagnostic Services Career Overview - The Detectives of Healthcare",
      url: "https://www.youtube.com/embed/yV8FGTrkRZ0",
    },
    {
      id: 2,
      title: "DMLT, B.Sc. MLT & Diagnostic Technology Careers",
      url: "https://www.youtube.com/embed/Ovbe9lnLyrc",
    },
  ],
  medical_transcription: [
    {
      id: 1,
      title: "Medical Transcription Career Overview - The Silent Scribes of Healthcare",
      url: "https://www.youtube.com/embed/QbeCOWOEi5M",
    },
    {
      id: 2,
      title: "MT Diploma, AHDI Certification & Remote Work Opportunities",
      url: "https://www.youtube.com/embed/cL-pcUQkcuo",
    },
  ],
  nurse_medical_assistant: [
    {
      id: 1,
      title: "Nursing Career Overview - The Heartbeat of Healthcare",
      url: "https://www.youtube.com/embed/9WqwmAYktAQ",
    },
    {
      id: 2,
      title: "ANM, GNM, B.Sc. Nursing & International Opportunities",
      url: "https://www.youtube.com/embed/4bDw80g4YQ8",
    },
  ],
  operation_theatre_technician: [
    {
      id: 1,
      title: "OT Technician Career Overview - The Invisible Heroes of Surgery",
      url: "https://www.youtube.com/embed/ndqK-rnrVmA",
    },
    {
      id: 2,
      title: "DOTT, B.Sc. OT Technology & Robotic Surgery Careers",
      url: "https://www.youtube.com/embed/HB79LttplFQ",
    },
  ],
  optometry: [
    {
      id: 1,
      title: "Optometry Career Overview - The Visionaries of Healthcare",
      url: "https://www.youtube.com/embed/ivrgSeiEl2Y",
    },
    {
      id: 2,
      title: "B.Optom Course Details & Vision Care Career Opportunities",
      url: "https://www.youtube.com/embed/_Hb_otWjfG8",
    },
  ],
  pharmacist: [
    {
      id: 1,
      title: "Pharmacist Career Overview - The Master of Molecules",
      url: "https://www.youtube.com/embed/23M4ZBMab60",
    },
    {
      id: 2,
      title: "B.Pharm, M.Pharm & Pharmaceutical Industry Careers",
      url: "https://www.youtube.com/embed/hVw1sgXFNQA",
    },
  ],
  public_healthcare_administration: [
    {
      id: 1,
      title: "Public Healthcare Administration Career Overview - Architects of Healthy Nations",
      url: "https://www.youtube.com/embed/-0TwvSx6a9I",
    },
  ],
  medical_radiology_technician: [
    {
      id: 1,
      title: "Medical Radiology Technician Career Overview - The Invisible Detectives",
      url: "https://www.youtube.com/embed/yxBtXkERNH4",
    },
    {
      id: 2,
      title: "X-Ray, CT, MRI & Imaging Technology Careers",
      url: "https://www.youtube.com/embed/KIVQLvzH368",
    },
  ],
  therapy_science: [
    {
      id: 1,
      title: "Therapy Science Career Overview - The Architects of Recovery",
      url: "https://www.youtube.com/embed/heNQ3ZzlLrM",
    },
    {
      id: 2,
      title: "Physiotherapy, Occupational Therapy & Mental Health Careers",
      url: "https://www.youtube.com/embed/sDQdfEMtDkQ",
    },
  ],
  corporate_trainer: [
    {
      id: 1,
      title: "Corporate Trainer Career Overview - The Catalyst of Growth",
      url: "https://www.youtube.com/embed/C_qFC5NF9X8",
    },
  ],
  image_consultant: [
    {
      id: 1,
      title: "Image Consultant Career Overview - The Architect of Presence",
      url: "https://www.youtube.com/embed/q6BwwXJLhwE",
    },
  ],
  librarian_and_education_administration: [
    {
      id: 1,
      title: "Librarian Career Overview - The Information Alchemist",
      url: "https://www.youtube.com/embed/9WX3sBt_Uck",
    },
    {
      id: 2,
      title: "Education Administration & Library Management",
      url: "https://www.youtube.com/embed/YOcEWTFF1_M",
    },
    {
      id: 3,
      title: "Digital Libraries & Information Science",
      url: "https://www.youtube.com/embed/ZTdE3wfakio",
    },
  ],
  professor: [
    {
      id: 1,
      title: "Professor Career Overview - Architect of Minds",
      url: "https://www.youtube.com/embed/18nnZ0wcwu8",
    },
    {
      id: 2,
      title: "Career as a Professor: Eligibility and Salary",
      url: "https://www.youtube.com/embed/x1ZrGvleCXI",
    },
  ],
  school_teacher: [
    {
      id: 1,
      title: "School Teacher Career Overview - The Nation Builder",
      url: "https://www.youtube.com/embed/68mqDbJkv2A",
    },
    {
      id: 2,
      title: "Teacher Training and Eligibility in India 2026",
      url: "https://www.youtube.com/embed/V8WfZ_ra3ek",
    },
  ],
  technical_trainer: [
    {
      id: 1,
      title: "Technical Trainer Career Overview - The Skill Architect",
      url: "https://www.youtube.com/embed/V8WfZ_ra3ek",
    },
  ],
  bpo: [
    {
      id: 1,
      title: "BPO Career Overview - The Global Engine",
      url: "https://www.youtube.com/embed/7L4mokvB1jU",
    },
    {
      id: 2,
      title: "BPO Industry Growth and Career Opportunities in India",
      url: "https://www.youtube.com/embed/BubEjtvjNJQ",
    },
  ],
  business_analytics: [
    {
      id: 1,
      title: "Business Analytics Career Overview - The Data Detective",
      url: "https://www.youtube.com/embed/5MCPe0NY4q4",
    },
    {
      id: 2,
      title: "Data Analytics Career Path and Salary in India",
      url: "https://www.youtube.com/embed/BwxJaS9pm98",
    },
    {
      id: 3,
      title: "Business Analytics Skills and Job Opportunities",
      url: "https://www.youtube.com/embed/GNgeQ4H9QB0",
    },
  ],
  business_financial_management: [
    {
      id: 1,
      title: "Business Financial Management Career Overview - The Engine of Growth",
      url: "https://www.youtube.com/embed/5XILI2TnrPk",
    },
    {
      id: 2,
      title: "Financial Strategy & Corporate Finance in India",
      url: "https://www.youtube.com/embed/96VY-9__yrI",
    },
  ],
  business_operations_manager: [
    {
      id: 1,
      title: "Business Operations Manager Career Overview - The Master Orchestrator",
      url: "https://www.youtube.com/embed/XUxgmo_ozjU",
    },
    {
      id: 2,
      title: "Operations Management & Process Optimization in India",
      url: "https://www.youtube.com/embed/lqQA7U0EcUg",
    },
  ],
  fashion_management: [
    {
      id: 1,
      title: "Fashion Management Career Overview - The Style Architect",
      url: "https://www.youtube.com/embed/6Ivvkp4WMOQ",
    },
    {
      id: 2,
      title: "Fashion Retail & E-commerce Management in India",
      url: "https://www.youtube.com/embed/zaml2MNNqyw",
    },
  ],
  human_resources: [
    {
      id: 1,
      title: "Human Resources Career Overview - The People Powerhouse",
      url: "https://www.youtube.com/embed/aBifB6tGay0",
    },
    {
      id: 2,
      title: "HR Management & Talent Acquisition in India",
      url: "https://www.youtube.com/embed/cJ1M2YGiBSU",
    },
    {
      id: 3,
      title: "Employee Relations & Organizational Development",
      url: "https://www.youtube.com/embed/EKxbMZDk0EU",
    },
  ],
  international_business: [
    {
      id: 1,
      title: "International Business Career Overview - The Global Bridge",
      url: "https://www.youtube.com/embed/jTLX0V8l1w8",
    },
    {
      id: 2,
      title: "Global Trade & International Expansion in India",
      url: "https://www.youtube.com/embed/-n-r0I4lOh0",
    },
  ],
  it_management: [
    {
      id: 1,
      title: "IT Management Career Overview - The Digital Architect",
      url: "https://www.youtube.com/embed/bSsnjFzaNK8",
    },
    {
      id: 2,
      title: "IT Leadership & Digital Transformation in India",
      url: "https://www.youtube.com/embed/N_ya6gWM7Ro",
    },
  ],
  project_management: [
    {
      id: 1,
      title: "Project Management Career Overview - The Master Strategist",
      url: "https://www.youtube.com/embed/hiDOu4L5Lvo",
    },
    {
      id: 2,
      title: "Project Leadership & Delivery Excellence in India",
      url: "https://www.youtube.com/embed/IYV3XgG1Zks",
    },
  ],
  retail_management: [
    {
      id: 1,
      title: "Retail Management Career Overview - The Retail Revolution",
      url: "https://www.youtube.com/embed/vVfCC7t1ohY",
    },
    {
      id: 2,
      title: "Retail Leadership & Store Operations in India",
      url: "https://www.youtube.com/embed/qetB7DIQX-A",
    },
  ],
  political_scientist: [
    {
      id: 1,
      title: "Political Scientist Career Overview - The Power Analyst",
      url: "https://www.youtube.com/embed/XUtuzb6oE9w",
    },
    {
      id: 2,
      title: "Policy Analysis & Governance in India",
      url: "https://www.youtube.com/embed/jqP-_nidvuA",
    },
    {
      id: 3,
      title: "Political Research & Social Change",
      url: "https://www.youtube.com/embed/NrPYmPFr2P0",
    },
  ],
  sociologist: [
    {
      id: 1,
      title: "Sociologist Career Overview - The Society Scientist",
      url: "https://www.youtube.com/embed/yy0eICeMRJo",
    },
  ],
  indian_navy: [
    {
      id: 1,
      title: "Indian Navy Career Overview - The Silent Guardians of the Seas",
      url: "https://www.youtube.com/embed/DdVOeCAO6T8",
    },
    {
      id: 2,
      title: "Naval Operations & Career Opportunities in the Indian Navy",
      url: "https://www.youtube.com/embed/oJ24JpmC3lU",
    },
  ],
  indian_police: [
    {
      id: 1,
      title: "Indian Police Career Overview - The Shield of the Nation",
      url: "https://www.youtube.com/embed/eQB7zyUEHqQ",
    },
    {
      id: 2,
      title: "Police System Reality & Reforms in India",
      url: "https://www.youtube.com/embed/dWHy4RxPDHY",
    },
  ],
  disaster_management: [
    {
      id: 1,
      title: "Disaster Management Career Overview - The Guardians of Safety",
      url: "https://www.youtube.com/embed/EnObsrW5yRI",
    },
    {
      id: 2,
      title: "Disaster Response & Emergency Management in India",
      url: "https://www.youtube.com/embed/tmj7fDPFlTA",
    },
  ],
  indian_army: [
    {
      id: 1,
      title: "Indian Army Career Overview - The Ultimate Badge of Honour",
      url: "https://www.youtube.com/embed/xcu470wmte0",
    },
    {
      id: 2,
      title: "Army Officer Life & Career Opportunities in India",
      url: "https://www.youtube.com/embed/DnfE13xFYko",
    },
  ],
  indian_air_force: [
    {
      id: 1,
      title: "Indian Air Force Career Overview - Touch the Sky with Glory",
      url: "https://www.youtube.com/embed/VL1CzT6X7JQ",
    },
    {
      id: 2,
      title: "Fighter Pilot Life & IAF Career Opportunities in India",
      url: "https://www.youtube.com/embed/XOwujug8SvU",
    },
  ],
  merchant_navy: [
    {
      id: 1,
      title: "Merchant Navy Career Overview - The Silent Guardians of the Seas",
      url: "https://www.youtube.com/embed/DdVOeCAO6T8",
    },
    {
      id: 2,
      title: "Naval Operations & Career Opportunities in the Merchant Navy",
      url: "https://www.youtube.com/embed/oJ24JpmC3lU",
    },
  ],
  biomedical_engineer: [
    {
      id: 1,
      title: "Biomedical Engineering Career Overview - The Bridge Between Engineering and Medicine",
      url: "https://www.youtube.com/embed/8UmxpxPmSBc",
    },
    {
      id: 2,
      title: "Medical Device Innovation & Healthcare Technology in India",
      url: "https://www.youtube.com/embed/CcvK1VeICp0",
    },
  ],
  staff_selection_commission: [
    {
      id: 1,
      title: "SSC Career Overview - The Backbone of Governance",
      url: "https://www.youtube.com/embed/nq2VQbUDyr4",
    },
    {
      id: 2,
      title: "Mastering the SSC CGL Exam Roadmap",
      url: "https://www.youtube.com/embed/5cnYYUp2feU",
    },
  ],
};

export function getCareerVideos(careerSlug: string): CareerVideo[] {
  const normalizedInput = careerSlug.toLowerCase().replace(/[-\s]+/g, "_");

  const normalizedSlug = normalizedInput === "sports_person"
    ? "sportsperson"
    : normalizedInput === "engineering_technology"
      ? "engineering_and_technology"
      : normalizedInput === "sales_person"
        ? "sales_professional"
        : normalizedInput === "software_testing_quality_assurance"
          ? "software_testing_qa"
        : normalizedInput === "electronics_and_communication"
          ? "electronics_communication_engineering"
        : normalizedInput === "block_chain_engineer"
          ? "blockchain_engineer"
        : normalizedInput === "sociology"
          ? "sociologist"
        : normalizedInput === "mentor_and_coach"
          ? "school_teacher"
        : normalizedInput === "indian_economic_services"
          ? "indian_economic_service"
        : normalizedInput === "information_technology_management"
          ? "it_management"
        : normalizedInput === "indian_armed_forces"
          ? "indian_army"
        : normalizedInput === "oceanographer"
          ? "oceanography"
          : normalizedInput;
  const videos = careerVideos[normalizedSlug];
  
  // If no videos exist for this career, return empty array
  // The component will handle empty arrays gracefully
  if (!videos || videos.length === 0) {
    return [];
  }
  
  return videos;
}
