import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";

export const agricultureUpdateData: Record<string, CareerPageData> = {
  agri_business_management: {
    slug: "agri_business_management",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Agri-Business Management",
    subheading: "Transitioning agriculture from traditional tilling to global supply chains.",
    whyCards: [
      { icon: "Building2", title: "High-Tech Boardrooms", description: "Transition from traditional tilling to advanced business boardrooms.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Supply Chain", description: "Optimize organic exports and manage international food brands.", borderColor: "#059669" },
      { icon: "LineChart", title: "Agritech Leadership", description: "Lead startups using AI and satellite-driven data analytics.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "National Impact", description: "Reduce India's 40% produce waste and ensure global food security.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2-4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Resilient, Empathic, Passionate", color: "bg-blue-100 text-blue-700" },
      { label: "Key Skills", detail: "Negotiation, Analytics, Crisis Management", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "40%", label: "Produce Waste Reduction", gradient: "from-green-500 to-green-600" },
      { value: "$535B", label: "Indian Food Market", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "High-Tech Evolution: Agriculture is shifting from traditional tilling to advanced business boardrooms and global supply chains.",
          "Modern Integration: ABM applies business principles like finance, marketing, and logistics to the agricultural sector.",
          "Diverse Roles: Professionals manage food brands, optimize organic exports, or lead Agritech startups using AI.",
          "Critical Impact: By reducing India’s 40% produce waste, ABM experts ensure global food security and transform farming into a venture."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Resilience to nature’s unpredictability, empathy for diverse stakeholders, and a deep passion for sustainability.",
          "Soft Skills: Expertise in negotiation, crisis management during crop failures, and effective cross-cultural communication.",
          "Hard Skills: Mastery of financial literacy, satellite-driven data analytics, and a solid foundation in agricultural economics."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Input & Production: Sourcing quality seeds and technology while guiding farmers based on market demand.",
          "Value Addition: Processing raw goods into branded products, like turning milk into cheese.",
          "Logistics & Sales: Managing refrigerated \"cold chains\" and branding products for local and global supermarket shelves."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Tuition Fees: Government colleges cost ₹15,000–₹8 lakh; private colleges ₹7–18 lakh.",
          "Laptop: Around ₹60,000 needed for a good laptop.",
          "Living: Monthly expenses in cities like Hyderabad cost ₹15,000–₹25,000.",
          "Internship: Extra money needed for travel during rural field training."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "National Scholarship Portal (NSP): Gives money help to minority, SC, and ST students for fees and living costs.",
          "Pragati: ₹50,000 yearly for girls studying technical courses.",
          "L&T: Pays full M.Tech fees at IITs/NITs with stipend and job offer.",
          "Mahindra: ₹10,000 yearly for diploma students from low-income families."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Phygital Balance: Managing the shift between high-tech office analysis and intensive, dusty field visits.",
          "Climate Pressure: High-stress seasons occur when bad monsoons disrupt entire supply chains.",
          "Evolving Perception: Overcoming the \"rural stigma\" as high-paying corporate and agritech roles redefine the industry's glamour."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Data Play: Master Microsoft Excel, as it is the fundamental tool for agribusiness operations.",
          "Environmental Awareness: Join organic gardening clubs or start composting to understand natural cycles.",
          "Stay Informed: Follow agricultural business news in the Financial Express or Economic Times.",
          "Field Observation: Visit local Mandis to observe real-world trader negotiations and market dynamics."
        ]
      }
    ]
  },
  agricultural_engineer: {
    slug: "agricultural_engineer",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Agricultural Engineering",
    subheading: "Applying engineering principles to optimize agricultural production.",
    whyCards: [
      { icon: "Cpu", title: "Precision Farming", description: "Use drones for soil mapping and precision robotic harvesters.", borderColor: "#10B981" },
      { icon: "Tractor", title: "Resource Optimization", description: "Solve the Food-Energy-Water puzzle for 1.4 billion people.", borderColor: "#059669" },
      { icon: "Droplets", title: "Smart Systems", description: "Design automated irrigation and high-tech processing systems.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Sustainable Innovation", description: "Transform traditional farming into resource-efficient industries.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Technical, Analytical, Resilient", color: "bg-blue-100 text-blue-700" },
      { label: "Tools", detail: "AutoCAD, Drone Data, IoT", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1.4B", label: "People to Feed", gradient: "from-green-500 to-green-600" },
      { value: "95%", label: "Water Saving Tech", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Defining the Role: It applies engineering principles to optimize agricultural production and processing systems.",
          "Technological Integration: Focuses on using drones for soil mapping, automated irrigation, and precision robotic harvesters.",
          "National Priority: In India, these professionals solve the \"Food-Energy-Water\" puzzle to feed 1.4 billion people.",
          "Sustainable Future: They transform traditional farming into a high-tech, profitable, and resource-efficient 21st-century industry."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Technical Passion: Natural interest in mechanics, engines, and building or fixing complex systems.",
          "Analytical Thinking: Strong foundation in Math and Physics for data-driven problem-solving.",
          "Resilience: Comfortable working in both high-tech labs and rugged, dusty farm environments.",
          "Environmental Focus: Deep commitment to climate change, water conservation, and sustainable innovation."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Analysis & Design: Analyzing farm issues like water loss and designing technical solutions using AutoCAD or SolidWorks.",
          "Prototyping & Testing: Building lab models and conducting rigorous field tests under real-world weather conditions.",
          "Execution: Overseeing quality control, ensuring durability, and providing technical training and maintenance support."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Duration: B.Tech in Agricultural Engineering takes 4 years.",
          "Fees: Government colleges cost ₹50,000–₹2.5 lakh; private ₹4–12 lakh for 4 years.",
          "Living: Hostel and monthly expenses are ₹8,000–₹15,000.",
          "Extras: Around ₹60,000 for laptop and ₹5,000–₹15,000 for exams."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "National Scholarship Portal (NSP): Gives financial help to minority, SC, and ST students.",
          "Pragati: ₹50,000 yearly for girls in technical courses.",
          "ICAR: Supports agriculture students studying in another state.",
          "State: Odisha and private groups give ₹25,000–₹50,000 scholarships."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Harsh Environments: Be prepared to work frequently in hot, dusty, and muddy outdoor conditions.",
          "Seasonal Peaks: Expect workloads to triple during intense harvest periods.",
          "The Scaling Challenge: The true difficulty lies in adapting high-tech lab designs for practical use on small, 1-acre Indian farm plots."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Science & Math: Master Physics (Mechanics) and Geometry as foundational engineering pillars.",
          "Coding: Learn Python, the essential language for agricultural AI and drone data analysis.",
          "Practical Observation: Visit \"Kisan Melas\" to study farm machinery and understand common equipment failures.",
          "DIY Projects: Build simple solar lamps or automated balcony irrigation systems to practice design."
        ]
      }
    ]
  },
  agriculture_research: {
    slug: "agriculture_research",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Agriculture Research",
    subheading: "Developing climate-resilient crops and ensuring food security.",
    whyCards: [
      { icon: "Microscope", title: "Climate Resilience", description: "Develop crops that thrive with 50% less water and resist heat.", borderColor: "#10B981" },
      { icon: "Dna", title: "Genetic Innovation", description: "Decode plant blueprints to maximize yields on shrinking land.", borderColor: "#059669" },
      { icon: "ThermometerSun", title: "Food Security", description: "Act as a Doctor of the Green World ensuring national food safety.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "Extended Shelf Life", description: "Gene editing research to reduce food spoilage across the chain.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4-9 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Curious, Persistent, Accurate", color: "bg-blue-100 text-blue-700" },
      { label: "Earnings", detail: "Stipends up to ₹35k/mo", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "50%", label: "Less Water Needed", gradient: "from-green-500 to-green-600" },
      { value: "7-12Y", label: "Research Period", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Scientific Core: This is a high-tech pursuit involving Plant Scientists and Biotechnologists decoding plant \"blueprints\" to solve global challenges.",
          "Climate Resilience: Research focuses on developing crops that thrive with 50% less water, resist extreme heatwaves, and have extended shelf lives via gene editing.",
          "National Security: In a nation of 1.4 billion, these \"Doctors of the Green World\" ensure food security by maximizing yields on shrinking arable land."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Curiosity: Observe plants carefully and study their growth.",
          "Persistence: Stay patient even if experiments fail.",
          "Accuracy: Follow rules and record data correctly.",
          "Analysis: Use statistics and software to check results.",
          "Ethics: Be honest and care about environment and people’s health."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Hypothesis & Lab Work: Identifying agricultural threats and decoding plant DNA or pathogens under controlled laboratory settings.",
          "Tiered Testing: Scaling from high-tech greenhouse trials to diverse, multi-climatic field trials across India.",
          "Approval & Extension: Securing government certification (e.g., GEAC) and educating farmers on optimizing new crop varieties."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Tuition Fees: Government universities cost ₹20,000–₹1.5 lakh; private ₹5–12 lakh.",
          "Duration: 4 years B.Sc, 2 years M.Sc, 3–5 years Ph.D.",
          "Stipend: Living costs ₹10,000–₹20,000 monthly; research students earn ₹31,000–₹35,000 per month."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "The ICAR National Talent Scholarship (NTS): NTS helps agriculture students studying in other states.",
          "JRF: CSIR-UGC NET gives monthly money for Ph.D. study.",
          "Corteva: ₹50,000 yearly for girls in agriculture postgraduation.",
          "Global: Fulbright and Commonwealth fund study in USA and UK."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Extended Timelines: Developing and stabilizing a single new seed variety is a marathon, often requiring 7 to 12 years of research.",
          "Regulatory Complexity: Navigating strict government approvals and ethical clearances for Genetically Modified (GM) crops remains a significant hurdle.",
          "Physical Demands: Requires high stamina for extended hours conducting field trials and greenhouse monitoring under intense heat."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Science Fairs: Participate in school biology projects. Try growing a plant under different lights.",
          "Read Up: Follow journals like Nature Plants or Indian sites like PIB (Science & Tech section).",
          "Basic Coding: Learn R or Python. Modern plant research relies heavily on data analysis.",
          "Gardening: Start your own vegetable patch. Understanding a plant’s life cycle first-hand is the best lesson."
        ]
      }
    ]
  },
  animal_science: {
    slug: "animal_science",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Animal / Veterinary Science",
    subheading: "Safeguarding animal welfare and national food supply.",
    whyCards: [
      { icon: "Stethoscope", title: "Holistic Welfare", description: "Scientific study of biology and management for all animal species.", borderColor: "#10B981" },
      { icon: "Heart", title: "Zoonotic Protection", description: "Prevent health crises by monitoring diseases jumping to humans.", borderColor: "#059669" },
      { icon: "ShieldPlus", title: "Economic Backbone", description: "Support India's position as a global leader in dairy production.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Conservation Leader", description: "Lead efforts in wildlife preservation and ethical livestock care.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5-6 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Empathic, Observant, Resilient", color: "bg-blue-100 text-blue-700" },
      { label: "Scope", detail: "Pets to Large Livestock", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "No. 1", label: "Global Dairy Leader", gradient: "from-green-500 to-green-600" },
      { value: "200M+", label: "Livestock Population", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Beyond Clinical Care: It is the scientific study of animal biology, management, and welfare, covering everything from domestic pets to large-scale livestock systems.",
          "A National Pillar: Professionals safeguard India’s food supply, prevent zoonotic diseases (like Rabies), and lead wildlife conservation efforts.",
          "Economic Backbone: As a global leader in dairy, India relies on these experts to ensure healthy, productive animals for sustainable and ethical exports in the 21st century."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Empathy & Observation: Deep compassion for non-verbal creatures and a keen eye for subtle behavioural or physical changes.",
          "Resilience: High stamina for long hours and the physical strength to handle large, stressed livestock.",
          "Critical Thinking: Calm, decisive action during emergencies and the ability to simplify complex medical data for pet owners."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Clinical Care: Diagnosing ailments via exams and imaging, then executing surgical or medicinal treatment plans.",
          "Preventive Health: Managing vaccinations, deworming, and tailored nutrition programs for livestock and pets.",
          "Public Safety: Monitoring \"Zoonotic\" diseases to prevent health crises from jumping from animal populations to humans."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Tuition Fees: Government colleges cost ₹30,000–₹1.5 lakh; private ₹10–25 lakh.",
          "Living: Monthly hostel expenses are ₹10,000–₹18,000.",
          "Coaching: NEET coaching may cost ₹50,000–₹1 lakh.",
          "Equipment: Extra money needed for medical tools like stethoscope."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "ICAR National Talent Scholarship (NTS): ₹3,000 per month for students studying in another state.",
          "Fellowship: ICAR-JRF/SRF gives up to ₹35,000 monthly for higher research.",
          "Merit: VCI scholarship for top All-India Quota students.",
          "Category: NSP gives Post-Matric help to SC, ST, and OBC students."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Physical Risks: Professionals face regular occupational hazards, including the potential for being bitten, kicked, or scratched by stressed or frightened animals.",
          "Emotional Toll: Managing terminal illnesses and facilitating \"end-of-life\" decisions or euthanasia requires significant mental resilience and compassion.",
          "Unpredictable Schedule: Veterinary emergencies and livestock crises often demand irregular, long hours that extend far beyond a standard 9-to-5 workday."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Practical Exposure: Volunteer at local animal shelters or gaushalas to gain hands-on experience with animal behaviour and care.",
          "Academic Foundation: Focus intensely on Biology, specifically mastering chapters on the Animal Kingdom and Physiology.",
          "Soft Skills: Join debate or public speaking clubs to refine your ability to communicate complex medical information clearly to pet owners.",
          "Digital Literacy: Familiarize yourself with health-tracking apps and data tools used in modern veterinary diagnostics."
        ]
      }
    ]
  },
  apiculture: {
    slug: "apiculture",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Apiculture",
    subheading: "Managing bee colonies and contributing to global food security through pollination.",
    whyCards: [
      { icon: "Flower2", title: "Pollination Power", description: "Protect biodiversity by managing bees that pollinate 1/3 of food.", borderColor: "#10B981" },
      { icon: "Sprout", title: "Sustainable Business", description: "Start profitable ventures in honey, wax, and bee products.", borderColor: "#059669" },
      { icon: "Box", title: "Liquid Gold", description: "Contribute to India's rank as the 7th largest global honey producer.", borderColor: "#3B82F6" },
      { icon: "Store", title: "Nature Connection", description: "A peaceful outdoor career blending biology with entrepreneurship.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Short Courses", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Patient, Calm, Nature-loving", color: "bg-blue-100 text-blue-700" },
      { label: "Products", detail: "Honey, Wax, Pollen, Royal Jelly", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "7th", label: "Global Honey Producer", gradient: "from-green-500 to-green-600" },
      { value: "1/3", label: "Pollination Share", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Meaning: Apiculture means keeping bees to produce honey and other bee products.",
          "Role: Beekeepers manage bee colonies and collect honey safely.",
          "Pollination: Bees help grow one-third of the food we eat.",
          "India: India is the 7th largest honey producer with many beekeepers.",
          "Future: A modern career mixing biology, farming, business, and sustainability."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Love nature, biology, and outdoor work. Patient, calm, and ready to start own business.",
          "Soft Skills: Good observation, problem-solving, and communication.",
          "Hard Skills: Learn bee care, disease control, honey processing, and marketing."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Inspection: Check hive health weekly and control pests/diseases.",
          "Harvest: Collect and bottle honey 2–4 times yearly.",
          "Maintenance: Clean and repair equipment monthly and keep records."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Course: Certificate ₹2,000–₹25,000; B.Sc ₹15,000–₹1.5 lakh yearly.",
          "Starter: Bee boxes and tools cost ₹25,000–₹60,000.",
          "License: FSSAI registration ₹2,000–₹5,000.",
          "Living: ₹5,000–₹8,000 monthly hostel."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "NSP: Income-based help for students from Class 9 onward.",
          "KVIC: Subsidy and stipend for SC/ST, women, rural youth.",
          "Mudra: Loan for starting bee business.",
          "NABARD: Fellowship for graduates working in rural farming."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Seasonal: Income depends on flowers and weather.",
          "Health: Bee stings and allergies are risks.",
          "Losses: Pesticides and diseases can kill colonies."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Study Biology, Chemistry, and pollination topics.",
          "Visit: Go to KVK or local bee farms and start school projects.",
          "Business: Learn basic profit and loss and inform yourself about honey industry."
        ]
      }
    ]
  },
  aquaculture: {
    slug: "aquaculture",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Aquaculture",
    subheading: "Farming aquatic organisms like fish and shrimp in a growing global market.",
    whyCards: [
      { icon: "Waves", title: "Blue Revolution", description: "Farm aquatic organisms in a market projected to double by 2033.", borderColor: "#10B981" },
      { icon: "Fish", title: "Global Exports", description: "Join India's ranks as the 4th largest seafood exporter in the world.", borderColor: "#059669" },
      { icon: "Ship", title: "Food Innovation", description: "Ensure sustainable protein sources through controlled fish farming.", borderColor: "#3B82F6" },
      { icon: "Target", title: "Huge Employment", description: "Targets 55 lakh new fisheries jobs by 2025 across coastal India.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Observant, Fit, Outdoor-loving", color: "bg-blue-100 text-blue-700" },
      { label: "Export Rank", detail: "4th in Seafood Globally", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "3rd", label: "Global Fish Producer", gradient: "from-green-500 to-green-600" },
      { value: "2X", label: "Projected Growth by 2033", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Definition: Aquaculture involves farming aquatic organisms like fish, shrimp, and crabs under controlled conditions.",
          "India: 3rd-largest fish producer and 4th-largest seafood exporter.",
          "Growth: The market is projected to nearly double by 2033.",
          "Jobs: Government targets 55 lakh new fisheries jobs by 2025."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Observant, patient, independent, physically fit, and comfortable outdoors.",
          "Soft Skills: Attention to detail, problem-solving, and basic business sense.",
          "Hard Skills: Water quality, fish nutrition, and disease identification."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Operations: Prepare ponds, test water, and monitor feeding and health.",
          "Harvest: Plan timing, supervise sorting, and coordinate packaging and sales.",
          "Management: Track finances and liaise with government departments."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Bachelor: Govt ₹20,000–₹50,000; private ₹50,000–₹1.5 lakh yearly.",
          "Living: ₹4,000–₹12,000 per month.",
          "Extras: Coaching and certificates cost extra."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "Central: ST, ICAR-JRF, and ex-servicemen help through NSP.",
          "State: Andhra, Kerala, Tamil Nadu offer specific fisheries scholarships.",
          "Institutional: CIFE and ICAR universities give merit aid."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Weather: Floods and cyclones can destroy fish farms suddenly.",
          "Market: Fish rates fluctuate due to global supply and demand.",
          "Location: Most jobs are in coastal or rural areas."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Learn Biology, Chemistry, and ecology carefully.",
          "Practice: Visit fish farms and participate in science fairs like INSPIRE Awards.",
          "Reading: Keep updated with CMFRI and industry websites."
        ]
      }
    ]
  },
  dairy_technology: {
    slug: "dairy_technology",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Dairy Technology",
    subheading: "Pioneering quality milk processing and value-added product development.",
    whyCards: [
      { icon: "Milk", title: "Quality Guardian", description: "Ensure milk safety and nutrient-density in the world's #1 producer.", borderColor: "#10B981" },
      { icon: "HardHat", title: "Value Addition", description: "Transform raw milk into premium products like cheese and ghee.", borderColor: "#059669" },
      { icon: "Factory", title: "Industrial Innovation", description: "Master pasteurization and fortification in modern factories.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "Cold Chain Logistics", description: "Use high-tech logistics to maintain product integrity globally.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Precise, Ethical, Analytical", color: "bg-blue-100 text-blue-700" },
      { label: "Market Rank", detail: "No. 1 Globally", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "No. 1", label: "Global Milk Producer", gradient: "from-green-500 to-green-600" },
      { value: "100%", label: "Safety Compliance", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Core Focus: Specialized food science branch on milk processing, packaging, and distribution.",
          "Guardian Role: Ensuring milk safety, quality, and nutrient-density.",
          "National Mission: Transforming raw milk into global-standard dairy goods in the world's largest producing nation."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Precision & Ethics: Attention to detail and unwavering integrity for consumer health.",
          "Scientific Stamina: Solid base in Biology and Chemistry and physical endurance for factory environments.",
          "Problem-Solving: Expert skills to troubleshoot production and fermentation issues."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Procurement: Collecting raw milk for pasteurization and fortification.",
          "Value Addition: Creating premium products like cheese, paneer, and ghee.",
          "logistics: Managing the \"cold chain\" to maintain product integrity until delivery."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Tuition (Govt): ₹20,000–₹1.5 lakh for 4 years.",
          "Private: ₹5–12 lakh total.",
          "Living: ₹10,000–₹20,000 monthly for food and hostel."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "ICAR NTS: ₹3,000 monthly for UG students studying in other states.",
          "NDRI: Stipends and research support for Master's students.",
          "NSP: Fee waivers and allowances based on income/category."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Operations: 24/7 processing cycles with rotating shift work.",
          "Environments: Fluctuating between industrial heat and sub-zero cold storage.",
          "High Stakes: Critical accountability where minor errors impact safety and finance."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic Focus: Master Organic Chemistry and Biomolecules.",
          "Soft Skills: develop English for technical reporting and leadership.",
          "Experiment: Try home fermentation to understand milk's transformation."
        ]
      }
    ]
  },
  florist: {
    slug: "florist",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Florist",
    subheading: "Crafting beautiful floral arrangements for a booming high-value market.",
    whyCards: [
      { icon: "Flower", title: "Creative Design", description: "Blend plant biology with color theory for stunning arrangements.", borderColor: "#10B981" },
      { icon: "Palette", title: "Sparking Joy", description: "Join a booming wedding and corporate event decoration industry.", borderColor: "#059669" },
      { icon: "ShoppingCart", title: "Digital Branding", description: "Use online platforms to scale a high-growth gifting business.", borderColor: "#3B82F6" },
      { icon: "Sparkles", title: "Global Scale", description: "A global industry valued over $57 billion with immense potential.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Short Courses", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Creative, Entrepreneurial", color: "bg-blue-100 text-blue-700" },
      { label: "Potential", detail: "High-Growth Event Sector", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹744B", label: "Market Potential (2033)", gradient: "from-green-500 to-green-600" },
      { value: "$57B+", label: "Global Industry", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Core Work: Selecting and arranging flowers for events, gifting, and decoration.",
          "Skill Mix: Creativity, colour theory, and digital marketing.",
          "Market: Huge growth driven by weddings, hotels, and online platforms.",
          "Scale: Global industry valued over USD 57 billion."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Creativity: Passion for design and nature-based aesthetics.",
          "Business Mindset: Entrepreneurial interest and customer service focus.",
          "Skills: Knowledge of plant biology and arrangement techniques."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Selection: Sourcing fresh flowers from markets or farms.",
          "Design: Creating custom arrangements based on customer needs.",
          "Operations: handling bookings, delivery, and social media branding."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Degree: Govt ₹20,000–₹50,000; private ₹50,000–₹2 lakh yearly.",
          "Certificates: ₹5,000–₹60,000 depending on the provider.",
          "Tools: Minimal starter kit cost around ₹3,000–₹10,000."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "NSP: Central government aid and PMKVY free training schemes.",
          "State Portals: Subsidies available in flower-growing states.",
          "Institutional: Pearl Academy and major agri-universities offer merit aid."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Perishability: Immediate financial loss if stock remains unsold.",
          "Seasonality: Earnings vary greatly with wedding and holiday cycles.",
          "Competition: Street-level pricing vs boutique design branding."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Study Botany, art, and colour theory.",
          "Portfolio: Practice arrangements and build an Instagram presence.",
          "Observation: Visit florists to understand market trends and sourcing."
        ]
      }
    ]
  },
  food_science: {
    slug: "food_science",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Food Science",
    subheading: "Ensuring food safety, quality, and nutritional security through science.",
    whyCards: [
      { icon: "FlaskConical", title: "Nutrition Engineering", description: "Design healthier, safer, and more sustainable food products.", borderColor: "#10B981" },
      { icon: "Pizza", title: "Safety Standards", description: "Enforce quality across the $535B Indian food market.", borderColor: "#059669" },
      { icon: "PackageCheck", title: "Innovative Processing", description: "Use chemistry to develop new flavors and extend shelf life.", borderColor: "#3B82F6" },
      { icon: "AlertCircle", title: "Global Compliance", description: "Master international standards for exports and distribution.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Scientific, Precise, Ethical", color: "bg-blue-100 text-blue-700" },
      { label: "Market Size", detail: "$535B Indian Food Market", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "40%", label: "India's Food Waste", gradient: "from-green-500 to-green-600" },
      { value: "$535B", label: "Market Value", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Meaning: Food Science uses biology and chemistry to study food and improve processing.",
          "Role: Ensure what we eat is safe, healthy, and stays fresh longer.",
          "Process: Control food from the farm to the store shelf.",
          "National Level: Combat India's 40% food waste and malnutrition."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Curious about science, precise, and cares about public health.",
          "Soft Skills: Teamwork, communication, and ethical thinking.",
          "Hard Skills: Microbiology, Chemistry, and food processing tech."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Quality: Test food for safety, toxins, and nutrients.",
          "Research: Develop new products like plant-based meat.",
          "Operations: Design better packaging to keep food fresh."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Bachelor: Govt ₹20,000–₹1 lakh; private ₹50,000–₹2.5 lakh yearly.",
          "Master/PhD: Extra 2-5 years needed for good jobs.",
          "Living: ₹5,000–₹15,000 monthly."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "National: ICAR, CSIR, and DBT scholarships available.",
          "Institutional: IITs, CFTRI, and NIFTEM offer merit-based aid.",
          "Private: Industry grants from Neslte or ITC for research."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Workload: Long hours in labs and factories.",
          "Accuracy: Small errors can cause big health risks.",
          "Learning: Must keep up with changing global safety rules."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Master Biology and Organic Chemistry.",
          "Practice: Read food labels and understand preservation methods.",
          "Science: Participate in school projects on hygiene and nutrition."
        ]
      }
    ]
  },
  horticulture: {
    slug: "horticulture",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Horticulture",
    subheading: "Growing fruits, vegetables, and ornamental plants for health and beauty.",
    whyCards: [
      { icon: "Trees", title: "High-Value Crops", description: "Cultivate exotic fruits, vegetables, and medicinal plants.", borderColor: "#10B981" },
      { icon: "Apple", title: "Green Space Design", description: "Lead urban landscaping and sustainable park developments.", borderColor: "#059669" },
      { icon: "Sun", title: "Greenhouse Mastery", description: "Control environments to grow premium produce year-round.", borderColor: "#3B82F6" },
      { icon: "CloudRain", title: "Export Potential", description: "Tap into India's growing market for specialized farm products.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Observant, Creative, Fit", color: "bg-blue-100 text-blue-700" },
      { label: "Rank", detail: "2nd Globally in Fruit", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "2nd", label: "Global Fruit Producer", gradient: "from-green-500 to-green-600" },
      { value: "High", label: "Profitability Potential", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Meaning: Horticulture is the science and art of growing fruits, veggies, and flowers.",
          "Specialties: Includes Pomology (fruits), Olericulture (veggies), and Floriculture (flowers).",
          "Success: India is the 2nd largest producer of fruits and vegetables in the world.",
          "Future: High-value farming for nutritional security and green cities."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Love for plants, patience, and a creative eye for design.",
          "Soft Skills: Resilience to weather and good problem-solving.",
          "Hard Skills: Plant physiology, greenhouse management, and irrigation tech."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Production: Managing seeds, soil, and plant health in farms or greenhouses.",
          "Processing: Handling post-harvest cooling and storage to prevent spoilage.",
          "Design: Planning gardens or urban green spaces (Landscaping)."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "B.Sc: Govt ₹10,000–₹50,000; private ₹50,000–₹1.5 lakh yearly.",
          "Living: Hostel costs ₹3,000–₹10,000 monthly in rural agri-hubs.",
          "Tools: Minimal costs for basic field gear."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "ICAR NTS: ₹3,000 monthly for students away from home state.",
          "NSP: Various state and central aid for low-income backgrounds.",
          "National Horticulture Board (NHB): grants for startups and training."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Perishability: Fruits and veggies rot fast; requires expert storage.",
          "Market: prices can drop suddenly due to high local supply.",
          "Climate: pests and unexpected rain are constant threats."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Master Botany and environmental studies.",
          "Practice: Start a terrace or kitchen garden to learn life cycles.",
          "Visit: Go to local nurseries and \"Mandi\" to see trade in action."
        ]
      }
    ]
  },
  poultry: {
    slug: "poultry",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Poultry",
    subheading: "Leading-edge livestock management for a secure protein supply.",
    whyCards: [
      { icon: "Egg", title: "Protein Security", description: "Support one of India's fastest-growing agri-sectors for nutrition.", borderColor: "#10B981" },
      { icon: "Home", title: "Automated Farming", description: "Manage high-tech farms with digital feeding and climate control.", borderColor: "#059669" },
      { icon: "Factory", title: "Integrated Business", description: "Oversight from hatchery to processing and retail distribution.", borderColor: "#3B82F6" },
      { icon: "LineChart", title: "Precision Nutrition", description: "Optimize feed formulations for healthy and productive birds.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Short Courses to 4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Diligent, Observant, Disciplined", color: "bg-blue-100 text-blue-700" },
      { label: "Industry Size", detail: "Over 10 Lakh Employed", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "3rd", label: "Global Egg Producer", gradient: "from-green-500 to-green-600" },
      { value: "10L+", label: "People Employed", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Definition: Poultry science involves raising birds like chickens and ducks for meat and eggs.",
          "Scale: Over 10 lakh people in India are employed in this sector.",
          "India: 3rd-largest egg producer and 5th-largest broiler meat producer.",
          "Focus: Modern automation, genetics, and bird health."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Disciplined, detail-oriented, and comfortable with animal care.",
          "Soft Skills: Resilience and quick decision-making for health crises.",
          "Skill Set: understanding of biology, nutrition, and biosecurity."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Health: Managing vaccinations and ensuring clean air/water.",
          "Nutrition: Formulating high-protein feed for optimal growth.",
          "Management: Overseeing automation and waste recycling systems."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Vocational: ₹5,000–₹25,000 for short training.",
          "B.Sc/B.V.Sc: Govt ₹10,000–₹50,000; private ₹50,000–₹2 lakh yearly.",
          "Living: Mostly rural-based with low hostel costs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "NSP: Post-matric aid and SC/ST scholarships.",
          "NABARD: Loans and grants for setting up poultry farms.",
          "ICAR: Fellowships for research in avian sciences."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Diseases: Avian flu can cause 100% loss in a single day.",
          "Input Costs: High prices for bird feed impact profits.",
          "Work Life: Requires daily monitoring without long breaks."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: focus on Biology and animal physiology.",
          "Practice: Visit local poultry farms and study bird behaviour.",
          "Learning: Take free online courses from ICAR-CARI on poultry."
        ]
      }
    ]
  },
  sericulture: {
    slug: "sericulture",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Sericulture",
    subheading: "Harvesting the 'Queen of Textiles' through advanced silkworm rearing.",
    whyCards: [
      { icon: "Scissors", title: "Silk Legacy", description: "Support India's position as the #1 consumer and #2 producer of silk.", borderColor: "#10B981" },
      { icon: "Shirt", title: "Natural Textile", description: "Blend traditional weaving with modern biological management.", borderColor: "#059669" },
      { icon: "Bug", title: "Rural Empowerment", description: "Directly impact millions of rural households via silk production.", borderColor: "#3B82F6" },
      { icon: "Settings", title: "Global Fashion", description: "Provide raw material for the high-end international silk market.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "1-4 Years", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Patience, Delicate, Observant", color: "bg-blue-100 text-blue-700" },
      { label: "Heritage", detail: "Unique 5-Type Silk Producer", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "2nd", label: "Global Silk Producer", gradient: "from-green-500 to-green-600" },
      { value: "Single", label: "5-Type Silk Producer", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Meaning: Sericulture is the science of rearing silkworms to produce raw silk.",
          "Role: Managing silkworms from egg to cocoon and processing silk threads.",
          "Focus: Improving silk quality through genetic cross-breeding.",
          "National Context: India is the only country producing all 5 types of commercial silk."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: Precise, observant, and patient with long cycles.",
          "Soft Skills: Good management and attention to environment changes.",
          "Hard Skills: Mulberry cultivation, silkworm biology, and reeling tech."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Rearing: Feeding worms and controlling temperature/humidity.",
          "Harvest: Gathering cocoons and boiling them to extract silk threads.",
          "Sales: Marketing raw silk to textile millers and designers."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "Diploma/Degree: Govt ₹10,000–₹40,000 yearly.",
          "Living: Mostly based in silk hubs like Mysore or Bhagalpur; low costs.",
          "Business: Setting up a small unit costs ₹50,000–₹2 lakh."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "Central Silk Board: Offers training stipends and specific aid.",
          "NSP: Tribal and category-based help for silk-farming families.",
          "State: Karnataka and West Bengal provide subsidies for silkworm boxes."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Disease: Silkworms are very fragile; one infection can end a batch.",
          "Climate: Unexpected hot waves kill worms instantly.",
          "Competition: Cheap synthetic silk (polyester) hurts real silk prices."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Master Biology and environmental impact.",
          "Practice: Learn to identify different types of silk at home.",
          "Visit: Go to a silk weaving centre or sericulture museum."
        ]
      }
    ]
  },
  vertical_farming: {
    slug: "vertical_farming",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "Vertical Farming",
    subheading: "Revolutionizing urban agriculture with stacked, climate-controlled systems.",
    whyCards: [
      { icon: "Building", title: "Urban Agriculture", description: "Grow food in the heart of cities without soil or pesticides.", borderColor: "#10B981" },
      { icon: "LayoutGrid", title: "Water Efficiency", description: "Use 95% less water than traditional farming via hydroponics.", borderColor: "#059669" },
      { icon: "Lightbulb", title: "Tech-Driven Growth", description: "Master IoT sensors and LED control for 365-day harvests.", borderColor: "#3B82F6" },
      { icon: "Droplets", title: "Zero Food Miles", description: "Produce ultra-fresh greens directly next to the consumer.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years + Tech Training", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Tech-savvy, Innovative", color: "bg-blue-100 text-blue-700" },
      { label: "Efficiency", detail: "95% Water Saving", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "95%", label: "Less Water Used", gradient: "from-green-500 to-green-600" },
      { value: "365", label: "Days of Harvest", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the core focus and national priority of this profession.",
        color: RED,
        content: [
          "Concept: Growing crops in stacked layers using LEDs and nutrient solutions.",
          "Methods: Hydroponics (water), Aeroponics (mist), or Aquaponics (fish).",
          "Impact: Uses 95% less water and brings farms into the heart of cities.",
          "India: Booming in Bengaluru and Mumbai to provide fresh greens daily."
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Essential traits and skills required for success.",
        color: RED2,
        content: [
          "Personality: loves technology, innovation, and urban sustainability.",
          "Soft Skills: Data analysis and project management.",
          "Hard Skills: IoT sensors, LED lighting, and hydroponic chemistry."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Day-to-day work from inputs to final execution.",
        color: RED,
        content: [
          "Engineering: Setting up climate control and automated lighting.",
          "Operations: Monitoring nutrient levels and harvesting cycles via apps.",
          "Sales: Supplying local restaurants and luxury supermarkets."
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "IndianRupee",
        description: "A complete look at educational and living expenses.",
        color: RED2,
        content: [
          "B.Tech/Agri: Govt ₹50,000–₹2 lakh; private ₹4–12 lakh total.",
          "Training: Specialized hydroponic courses ₹10,000–₹50,000.",
          "Living: Mostly metro-based; high costs (₹15,000–₹25,000 monthly)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid to help speed up your education journey.",
        color: RED,
        content: [
          "NSP: Technical and engineering aid available.",
          "Pragati: AICTE aid for women in technological agriculture.",
          "Venture Grants: Agri-startups can get funding from MeitY or MSME."
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertTriangle",
        description: "The difficult realities you must be ready to face.",
        color: RED2,
        content: [
          "Energy: High electricity bills for 24/7 LED lights and sensors.",
          "Technical: System failure (e.g., pump stop) can kill crops in hours.",
          "Cost: Very high initial setup cost for sensors and steel racks."
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps you can take today.",
        color: RED,
        content: [
          "Academic: Master Physics (Optics) and Chemistry (Nutrients).",
          "Learning: Start a small DIY hydroponic kit at home.",
          "Digital: Learn basic coding and IoT from YouTube or free platforms."
        ]
      }
    ]
  }
};
