import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";

export const agricultureUpdateData: Record<string, CareerPageData> = {
  agri_business_management: {
    slug: "agri_business_management",
    badge: "🌾 Cultivating the Future for Class 10+",
    heading: "Agri-Business Management",
    subheading: "Bridge the gap between farm and table. Apply modern business principles to agriculture—manage food brands, optimize exports, and lead Agritech startups.",
    whyCards: [
      { icon: "Building2", title: "High-Tech Boardrooms", description: "Transition from traditional tilling to advanced business boardrooms and global supply chains.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Supply Chain", description: "Optimize organic exports and manage international food brands worth millions.", borderColor: "#059669" },
      { icon: "LineChart", title: "Agritech Leadership", description: "Lead startups using AI and satellite-driven data analytics to predict crop yields.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "National Impact", description: "Reduce India's 40% produce waste and ensure global food security for billions.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2-4 Years (MBA/PGDM)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4.5L–₹1Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "4.21% CAGR, 25% Organic Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$578B", label: "Indian Agriculture Market by 2031", gradient: "from-green-500 to-green-600" },
      { value: "40%", label: "Produce Waste to Reduce", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Bridging farm and table through modern business.",
        color: RED,
        content: [
          "The Bridge: Agri-Business Management (ABM) is the bridge between the farm and the table. It applies modern business principles—like finance, marketing, and logistics—to the vast world of agriculture.",
          "Modern Roles: Professionals aren't just 'farming'; they are managing multi-million-dollar food brands, optimizing global exports of organic spices, or running 'Agritech' startups that use AI to predict crop yields.",
          "Critical Problem: While India is the world's second-largest producer of fruits and vegetables, we still lose nearly 40% of produce to waste.",
          "The Solution: ABM professionals are the heroes who solve this, ensuring food security for billions while making farming a profitable venture.",
          "Why It Matters: In the 21st century, agriculture is shifting from traditional tilling to high-tech boardrooms and global supply chains."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Agri-Entrepreneur",
        icon: "Clock",
        description: "Real workflow of an agri-business professional.",
        color: RED2,
        content: [
          "7:30 AM - The Rural Connection: Start your day on a tablet checking a weather-monitoring app for a cluster of 500 contracted farmers in Maharashtra. If there's a sudden hailstorm alert, coordinate immediate protection measures with field officers.",
          "10:30 AM - Quality and Tech: Arrive at the factory. A new batch of organic mangoes is arriving. Scan a QR code on a crate that tracks the fruit back to the specific tree using Blockchain technology. Meet the Quality Control team to ensure mangoes meet strict standards for export to the UK.",
          "1:30 PM - The Price War: Spend the afternoon analyzing commodity prices on the NCDEX (National Commodity and Derivatives Exchange). Decide whether to buy more wheat now for your cereal line or wait for next week's market dip. It's like being on a stock market floor, but with grain instead of shares.",
          "4:00 PM - Pitching to Investors: Join a Zoom call with venture capitalists. Present a new 'Farm-to-Fork' digital platform that helps urban customers buy fresh produce directly from farmers. Explain how it cuts out middlemen and increases a farmer's income by 25%.",
          "7:00 PM - Planning the Harvest: Review supply chain logistics. A truck carrying perishables is stuck at a state border. Use GPS tracking to reroute the driver through a faster corridor, ensuring the fruit stays fresh. End your day knowing your work helped a farmer get a fair price."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Resilience (agriculture depends on nature), empathy (you work with people from all walks of life), and a passion for sustainability.",
          "Soft Skills: Negotiation, crisis management (thinking on your feet when a crop fails), and cross-cultural communication.",
          "Hard Skills: Financial literacy (P&L statements), data analytics (using satellite imagery), and knowledge of agricultural economics.",
          "The Heart: You have a heart for the rural world but a mind for the global economy."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Value Chain",
        icon: "Briefcase",
        description: "The complete agribusiness workflow.",
        color: RED2,
        content: [
          "Input Management: Sourcing the best seeds, fertilizers, and technology for farmers.",
          "Production Planning: Guiding farmers on what to grow based on market demand.",
          "Processing & Value Addition: Turning raw milk into cheese or raw cotton into branded clothing.",
          "Supply Chain & Logistics: Managing the 'Cold Chain' (refrigerated transport) to keep food fresh.",
          "Marketing & Sales: Branding and selling products in local supermarkets or international markets."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Enroll in a Diploma in Agriculture or Agri-Marketing (1–2 years). Start as a Field Assistant or Crop Technician.",
          "After Class 12 (Science/Commerce/Humanities): Appear for CUET or State Agri Exams for a B.Sc. (Hons) Agriculture or BBA in Agribusiness. Secure roles as Sales Officers or Farm Supervisors.",
          "After Graduation (B.Sc/B.Tech/BBA): Appear for CAT/XAT/CMAT for an MBA/PGDM in Agri-Business Management. Target Managerial roles in MNCs, Rural Banks, or Agritech startups."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-level: ₹4.5 Lakhs – ₹8 Lakhs annually.",
          "Mid-level (5–10 years): ₹15 Lakhs – ₹25 Lakhs annually.",
          "Senior/Leadership: ₹35 Lakhs – ₹80 Lakhs annually.",
          "CXO Level: ₹1 Crore+ (Common in top food processing and fertilizer giants).",
          "Market Size: Indian agriculture market valued at $471 Billion in 2026, expected to reach $578 Billion by 2031.",
          "Growth Rate: 4.21% CAGR (2026–2031) with 25% CAGR in organic product demand."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Institutions (IIMs, MANAGE): ₹15,000 to ₹8 Lakhs (depending on the specific program).",
          "Private Institutions: ₹7 Lakhs – ₹18 Lakhs.",
          "Additional Costs: High-performance laptop for data software (₹60k), and travel for field internships.",
          "Living Costs: ₹15,000 – ₹25,000 per month in cities like Ahmedabad or Hyderabad."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public: IIM Ahmedabad (PGP-FABM), IIM Lucknow, MANAGE Hyderabad, IRMA Anand, Banaras Hindu University (BHU).",
          "Private: SIIB Pune, Symbiosis SIBM, Amity University, Lovely Professional University (LPU).",
          "Geographic Diversity: North (BHU, IIML), South (MANAGE, NITTE), West (IIMA, IRMA), East (Centurion University)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central Government: National Scholarship Portal (NSP) merit-cum-means for minorities/SC/ST.",
          "AICTE Pragati: For girl students in technical degrees.",
          "Corporate: L&T Build India Scholarship, Mahindra All India Talent Scholarship.",
          "Institutional: Many colleges offer fee waivers for economically weaker sections."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "Certifications: Six Sigma (for supply chain), NISM (for commodity trading), and Google/IBM Data Analytics.",
          "Memberships: International Food and Agribusiness Management Association (IFAMA).",
          "Commodity Trading: NCDEX certification for trading in agricultural commodities.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Commodity Trader, Rural Bank Manager, Supply Chain Coordinator, Food Processing Manager.",
          "New-Age: Precision Farming Consultant, Carbon Credit Auditor, Agritech Product Manager, Urban Farm Manager.",
          "Entrepreneurship: Export-Import business, Organic food brands, Drone-as-a-Service for farmers, Farm-to-Fork platforms."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "The 'Phygital' Divide: You have to balance high-tech office work with dusty field visits.",
          "Climate Dependency: A bad monsoon can disrupt the entire supply chain, making the job high-pressure during certain seasons.",
          "Rural Stigma: Some people still wrongly think agriculture isn't 'glamorous,' but that is changing fast with high-paying corporate roles.",
          "Market Volatility: Commodity prices fluctuate wildly, requiring constant monitoring and quick decision-making."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agri-business.",
        color: RED2,
        content: [
          "AI-Literate Farming: By 2030, most agribusinesses will use Agentic AI to manage irrigation and pests automatically.",
          "Blockchain Traceability: Consumers will want to see the 'DNA' of their food via QR codes.",
          "Vertical Farming: Growing crops in urban skyscrapers will create thousands of 'Urban Farm Manager' roles.",
          "Climate-Smart Agriculture: Designing farming practices that adapt to and mitigate climate change.",
          "Direct-to-Consumer Models: Farm-to-Fork platforms cutting out middlemen and increasing farmer income."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Data Play: Learn the basics of Microsoft Excel. It is the lifeblood of agribusiness.",
          "Environment Awareness: Join a local 'Organic Gardening' club or start a compost pit at home.",
          "Read the News: Follow the 'Financial Express' or 'Economic Times' agriculture section.",
          "Volunteer: Visit a local Mandi (market) with your parents and observe how traders negotiate.",
          "Tech Exploration: Learn about GIS mapping and basic data analytics through free online courses."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Agri-Business Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. Verghese Kurien: The 'Father of the White Revolution.' He turned India from a milk-deficient nation into the world's largest producer through Amul.",
          "Shashank Kumar: Founder of DeHaat, one of India's most successful Agritech startups providing end-to-end services to farmers.",
          "Sangita Reddy: For her work in integrating technology and health with rural development and nutrition.",
          "Kalaari Capital's Vani Kola: While a VC, she has been a major force in funding the next generation of Agri-entrepreneurs.",
          "Shanu M: A young fire-and-safety officer who quit his job to become a successful organic agri-entrepreneur in Kerala."
        ]
      }
    ]
  },
  agricultural_engineer: {
    slug: "agricultural_engineer",
    badge: "🌾 Engineering the Future of Food for Class 10+",
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
        color: RED,
        content: [
          "The Brain and Hands: If a Farmer is the 'Heart' of Indian agriculture, an Agricultural Engineer is the 'Brain' and 'Hands' that make the system smarter and more powerful.",
          "Beyond Tractors: It's not just about tractors; it's about using drones to map soil health, designing automated irrigation systems that save every drop of water, and creating robotic harvesters that can pick delicate fruits without bruising them.",
          "Solving the Puzzle: With a population of over 1.4 billion, we need to grow more food using less land and less water. Agricultural Engineers solve the 'Food-Energy-Water' puzzle.",
          "Modern Industry: They ensure that farming is not just a tradition, but a high-tech, profitable, and sustainable industry for the 21st century.",
          "Global Priority: In today's India, this career is a global priority as we become a leader in agricultural innovation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Agri-Tech Pioneer",
        icon: "Clock",
        description: "Real workflow of an agricultural engineer.",
        color: RED2,
        content: [
          "8:30 AM - The Field Briefing: Start your day on a sprawling farm. You're not holding a shovel; you're holding a tablet. Check telemetry data from a fleet of autonomous tractors currently tilling the soil. One tractor has flagged a sensor error—quickly recalibrate the GPS settings from your screen.",
          "10:30 AM - Drone Scouting: Launch a thermal-imaging drone to fly over the 50-acre wheat field. As the drone sends back live data, identify a 'stressed' patch of crops that isn't getting enough nitrogen. Send a command to the automated sprinkler system to deliver a precise dose of liquid fertilizer to only that specific patch. This is Precision Agriculture in action.",
          "1:30 PM - Designing the Future: Head to the R&D lab after lunch. Work on a 3D model of a new 'Solar-Powered Cold Storage' unit. In India, 40% of fresh produce is wasted due to heat. Design uses affordable, locally sourced materials and solar panels to keep vegetables fresh in remote villages without electricity.",
          "4:00 PM - The Client Meeting: Meet with a group of local farmers to explain how a new moisture-sensing probe works. Translate complex engineering jargon into simple language, showing them how they can save 30% on their water bills.",
          "6:30 PM - Data Analytics: Review the day's data logs and prepare a report on how the new robotic seeder performed compared to manual labor. As you drive home, see the green fields and feel proud—you helped secure the food on a thousand plates."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
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
        color: RED2,
        content: [
          "Requirement Analysis: Talk to farmers or companies to understand a problem (e.g., 'We are losing too much water during irrigation').",
          "Design & Modeling: Use software like AutoCAD or SolidWorks to design a solution (e.g., a smart drip-irrigation valve).",
          "Prototyping: Build a small version of the machine or system in a lab.",
          "Field Testing: Take the prototype to a real farm to see if it works under heat, rain, and mud.",
          "Quality Control: Ensure the final product follows safety codes and is durable.",
          "Maintenance & Support: Teach others how to use the technology and fix it if it malfunctions."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Take a 3-Year Diploma in Agricultural Engineering → Lateral Entry to B.Tech. Exams: State Polytechnic Exams (e.g., JEECUP, DET).",
          "After Class 12 (Science): Pursue 4-Year B.Tech/B.E. in Agricultural Engineering. Exams: JEE Main, ICAR AIEEA (UG), State CETs (e.g., MHT-CET, KCET).",
          "After Graduation: Take 2-Year M.Tech or PhD for Research/Teaching roles. Exams: GATE (Agricultural Engineering Paper), ICAR AIEEA (PG).",
          "Note: B.Tech requires Physics, Chemistry, and Math (PCM) in Class 12. Humanities and Commerce students can enter via Agri-Business Management but cannot pursue the 'Engineering' degree directly."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level (Fresher): ₹3.5 Lakhs – ₹7 Lakhs annually.",
          "Mid-Level (5–8 years): ₹10 Lakhs – ₹18 Lakhs annually.",
          "Senior/Leadership: ₹20 Lakhs – ₹45 Lakhs annually.",
          "CXO/Startup Founder: ₹60 Lakhs+ annually.",
          "Metro Cities (Bengaluru, Pune): Higher starting pay (₹6L–₹8L) in Agri-Tech R&D centers.",
          "Tier-2/3 Cities: Starting pay (₹3.5L–₹5L) but often includes housing/field allowances in manufacturing hubs.",
          "Market Growth: Industry growing at CAGR of over 5.2%. Fastest-growing segments are Precision Farming and Automated Machinery.",
          "Market Size: Indian Agricultural Equipment market expected to reach $13.79 Billion by 2030."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Institutions: ₹50,000 – ₹2,50,000 (Total 4-year degree fees).",
          "Private Institutions: ₹4,00,000 – ₹12,00,000 (Total 4-year degree fees).",
          "Duration: 4 Years (B.Tech) or 3 Years (Diploma).",
          "Living/Hostel Costs: ₹8,000 – ₹15,000 per month in cities like Pantnagar, Ludhiana, or Coimbatore.",
          "Additional Costs: High-end laptop (₹60k+), certification exams (₹5k–₹15k)."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public/Government: IIT Kharagpur (West), Punjab Agricultural University (PAU), Ludhiana (North), Tamil Nadu Agricultural University (TNAU), Coimbatore (South), GB Pant University of Agriculture & Technology, Pantnagar (North).",
          "Private: Vellore Institute of Technology (VIT), Lovely Professional University (LPU), SRM University.",
          "Distance/Online: Not recommended for B.Tech as this is a highly hands-on lab-based field."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls).",
          "ICAR: National Talent Scholarship (NTS) for students moving to a different state for studies.",
          "State: e.g., Krishi Vidya Nidhi (Odisha) or MOMA scholarship for minorities.",
          "Private: Corteva Agriscience Scholarship (₹25k–₹50k) for students in agri-allied streams."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "ISAE (Indian Society of Agricultural Engineers): The primary professional body for networking.",
          "Certifications: Drone Pilot License (DGCA approved), GIS & Remote Sensing (IIRS/ISRO), Data Analytics (Google/IBM).",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Farm Machinery Design, Irrigation Engineer, Soil & Water Conservationist, Food Processing Engineer.",
          "New-Age: Drone Data Analyst, Precision Agriculture Specialist, Climate-Smart Systems Engineer, AI-Agriculture Specialist.",
          "Freelancing: Independent Farm Consultant, Custom Hiring Center (CHC) Entrepreneur, Agri-Visualization Specialist."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Physical Environment: You will often work in dusty, hot, and muddy conditions.",
          "Seasonal Peak: During harvest seasons, your workload might triple.",
          "Translational Gap: Designing a machine in a lab is easy; making it work for a small Indian farmer with a 1-acre plot is the real, hard challenge.",
          "Adoption Resistance: Convincing traditional farmers to adopt new technology requires patience and cultural sensitivity."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agricultural engineering.",
        color: RED2,
        content: [
          "The Drone Revolution: By 2030, drones will be used for everything from spraying pesticides to planting seeds.",
          "Vertical Farming: Engineering farms inside urban skyscrapers to grow 'Zero-Mile' food.",
          "AI & IoT: Sensors in the soil that 'talk' to the farmer's phone, telling them exactly when the plant is thirsty.",
          "Robotics: Autonomous harvesters and weeders that work 24/7 without human intervention.",
          "Climate-Adaptive Engineering: Designing systems that help farms adapt to extreme weather and changing rainfall patterns."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science & Math: Focus on Mechanics (Physics) and Geometry—these are your foundation.",
          "Coding: Learn basic Python. It's the language of AI and drone data.",
          "Observation: Visit a local farm or a 'Kisan Mela.' Ask how a tractor works or why a pump fails.",
          "Projects: Build a simple solar-powered lamp or a DIY watering system for your balcony plants.",
          "Tech Exploration: Follow YouTube channels on agricultural technology and drone applications."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Agricultural Engineers",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. A.M. Michael: A pioneer in Irrigation Engineering who revolutionized how India manages its water resources.",
          "Vidyut Mohan: A young innovator (Takachar) who turned farm waste into biofuel and won the Earthshot Prize.",
          "Bhavarlal Jain: Founder of Jain Irrigation; he pioneered drip irrigation in India, saving billions of liters of water.",
          "M.S. Swaminathan: Though a scientist, his vision for 'Farm Mechanization' as part of the Green Revolution paved the way for modern agricultural engineering.",
          "Dr. Rajendra Singh: Known as the 'Water Man of India,' he pioneered water harvesting and conservation engineering techniques."
        ]
      }
    ]
  },
  agriculture_research: {
    slug: "agriculture_research",
    badge: "🌾 The Science of Life and Food for Class 10+",
    heading: "Agriculture & Plant Research",
    subheading: "Decode plant blueprints to create climate-resilient crops. Ensure food security for 1.4 billion people through cutting-edge biotechnology and genetic research.",
    whyCards: [
      { icon: "Microscope", title: "Climate Resilience", description: "Develop crops that thrive with 50% less water and resist extreme heat waves.", borderColor: "#10B981" },
      { icon: "Dna", title: "Genetic Innovation", description: "Decode plant blueprints to maximize yields on shrinking arable land.", borderColor: "#059669" },
      { icon: "ThermometerSun", title: "Food Security", description: "Act as a Doctor of the Green World ensuring national food safety for billions.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "Extended Shelf Life", description: "Gene editing research to reduce food spoilage and improve nutrition across the supply chain.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4-9 Years (B.Sc + M.Sc + Ph.D)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4.5L–₹55L+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "$300B Bio-economy by 2030", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "50%", label: "Less Water Needed", gradient: "from-green-500 to-green-600" },
      { value: "7-12Y", label: "New Variety Development", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The laboratory where agriculture's future is designed.",
        color: RED,
        content: [
          "Scientific Pursuit: If Agriculture is the engine of India, then Agriculture and Plant Research is the laboratory where that engine is designed, refined, and made future-ready. This career isn't about traditional farming; it is a high-tech scientific pursuit.",
          "Decoding Plants: Professionals—often called Plant Scientists, Agronomists, or Biotechnologists—spend their time decoding the 'blueprints' of plants.",
          "Critical Questions: How can we make rice grow with 50% less water? How do we make wheat resistant to a 45°C heatwave? Can we 'edit' a tomato's genes to make it last longer on a kitchen shelf?",
          "National Security: With a population of 1.4 billion and shrinking arable land, we need scientists to ensure our food supply never runs dry.",
          "The Doctors: These researchers are the 'Doctors of the Green World,' working to heal the soil and strengthen the crops that feed us."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Plant Geneticist",
        icon: "Clock",
        description: "Real workflow of an agriculture researcher.",
        color: RED2,
        content: [
          "8:00 AM - The Greenhouse Check-up: Start your day in a lab coat. First stop is the Climate-Controlled Greenhouse. Inspect a new variety of chickpea. Use a handheld hyperspectral sensor to measure the plant's stress levels.",
          "10:30 AM - Decoding DNA: Move to your high-powered workstation. Analyze results from a CRISPR-Cas9 experiment. Try to 'knock out' a specific gene that makes the plant vulnerable to a common fungus. On your screen, strings of A, T, G, and C (DNA bases) dance in patterns. Find a successful mutation and mark it for the next round of breeding.",
          "1:30 PM - Collaboration & Coffee: Quick lunch with a team of Soil Scientists and Data Analysts. Discuss a 'Smart Farm' project in Punjab. Explain how your new seeds will perform if soil salinity increases. Science is a team sport.",
          "4:00 PM - Field Visit: Travel to a nearby experimental plot. Meet with local farmers who are testing your previous year's 'Drought-Resistant' seeds. Collect soil samples and record farmers' feedback. Seeing your lab work actually sprouting in the real world is the best part of your day.",
          "6:30 PM - Writing the Future: End your day at your desk, writing a research paper for an international journal. Document a breakthrough in bio-fortification—increasing the Iron and Zinc content in bajra. Know your work might one day prevent malnutrition for millions of children."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Curiosity & Observation: Do you notice why one plant in your balcony is greener than the others?",
          "Patience & Persistence: In research, experiments fail 90% of the time. Can you try again for the 91st time?",
          "Methodical Nature: You must love following protocols. Science requires extreme accuracy.",
          "Ethics & Empathy: You are working on things that affect human health and the environment. Integrity is non-negotiable.",
          "Analytical Skills: Comfort with statistics and data software is essential to prove your theories."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Lab-to-Land Cycle",
        icon: "Briefcase",
        description: "The complete research workflow.",
        color: RED2,
        content: [
          "Hypothesis: Identifying a problem (e.g., 'Pests are destroying 30% of cotton crops').",
          "Laboratory Research: Studying plant cells, DNA, and pathogens under controlled conditions.",
          "Controlled Testing: Growing plants in high-tech greenhouses to see how they react.",
          "Field Trials: Testing the successful varieties in different climates across India.",
          "Certification: Getting approval from government bodies like the GEAC (Genetic Engineering Appraisal Committee).",
          "Extension: Teaching farmers how to grow the new varieties effectively."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Focus on Biology and Chemistry. No direct research entry, but a Diploma in Agri-Lab Tech is possible.",
          "After Class 12 (Science): Clear CUET or ICAR AIEEA (UG). Enroll in 4-year B.Sc. (Hons) Agriculture or B.Tech Biotechnology.",
          "After Graduation (B.Sc): Appear for ICAR AIEEA (PG) or GATE. Pursue M.Sc. in Plant Breeding, Genetics, or Pathology.",
          "Ph.D. Path: For a serious research career, a Ph.D. is almost mandatory to lead projects. Pursue via CSIR-NET or direct admission."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level (Junior Research Fellow): ₹4.5 Lakhs – ₹7 Lakhs annually.",
          "Mid-Level (Scientist B/C): ₹12 Lakhs – ₹20 Lakhs annually.",
          "Senior (Principal Scientist/R&D Head): ₹25 Lakhs – ₹45 Lakhs annually.",
          "Leadership/Director: ₹55 Lakhs+ annually.",
          "Metros (Bengaluru, Delhi, Hyderabad): Higher pay in private R&D and Biotech firms.",
          "Tier-2/3 (Pantnagar, Ludhiana): Competitive pay in Government University setups with lower living costs.",
          "Bio-economy: Indian Bio-economy reached $165.7 Billion in 2024, on track for $300 Billion by 2030."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Govt. Institutions (State Agri Universities): ₹20,000 – ₹1.5 Lakhs (Total degree).",
          "Private Institutions: ₹5 Lakhs – ₹12 Lakhs.",
          "Duration: 4 years (B.Sc) + 2 years (M.Sc) + 3-5 years (Ph.D).",
          "Living Costs: ₹10k–₹20k/month. Research fellows (JRF/SRF) usually get a monthly stipend of ₹31,000 to ₹35,000, which covers these costs."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public: IARI (Pusa) New Delhi, GB Pant University (Pantnagar), Punjab Agricultural University (Ludhiana), TNAU (Coimbatore).",
          "Private: Amity Institute of Biotechnology, Lovely Professional University (LPU), Vellore Institute of Technology (VIT).",
          "East/NE: Assam Agricultural University (Jorhat); Bihar Agricultural University."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central: ICAR National Talent Scholarship (NTS); CSIR-UGC NET JRF (Stipend for Ph.D.).",
          "Private: Corteva Agriscience Scholarship (up to ₹50,000 for PG female students).",
          "International: Fulbright-Nehru Fellowship; Commonwealth Scholarship.",
          "Research Stipends: JRF/SRF stipends of ₹31,000-₹35,000 per month during Ph.D."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "ICAR (Indian Council of Agricultural Research): The apex body for all agri-researchers.",
          "ASRB (Agricultural Scientists Recruitment Board): Conducts exams for the ARS (Agricultural Research Service).",
          "Certifications: GIS and Remote Sensing (IIRS), Bioinformatics, and Seed Technology.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Plant Breeder, Plant Pathologist, Soil Scientist, Agronomist.",
          "New-Age: Genome Editor (CRISPR), Phenomics Expert, Agri-Data Scientist, Vertical Farm Scientist.",
          "Freelancing: Independent Crop Consultant, Technical Writer for Agri-Journals.",
          "Specializations: Bio-fortification Specialist, Climate-Adaptive Crop Developer, Seed Technology Expert."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Long Timelines: Developing one new seed variety can take 7 to 12 years.",
          "Regulatory Hurdles: Dealing with government permissions for Genetically Modified (GM) crops is complex.",
          "Physical Toll: Long hours in greenhouses or fields under the sun.",
          "Publication Pressure: Constant need to publish research papers to advance your career.",
          "Funding Challenges: Securing research grants is competitive and time-consuming."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agriculture research.",
        color: RED2,
        content: [
          "AI & Machine Learning: AI will predict which plant cross-breeds will be successful before we even plant them.",
          "Space Farming: Research into growing microalgae and hardy plants for future space missions.",
          "Personalized Nutrition: Crops tailored to provide specific nutrients for certain patient profiles (Bio-fortification).",
          "Gene Editing: CRISPR and newer gene-editing technologies will accelerate crop improvement.",
          "Climate Adaptation: Developing crops that thrive in extreme weather conditions and changing rainfall patterns."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Fairs: Participate in school biology projects. Try growing a plant under different lights.",
          "Read Up: Follow journals like Nature Plants or Indian sites like PIB (Science & Tech section).",
          "Basic Coding: Learn R or Python. Modern plant research relies heavily on data analysis.",
          "Gardening: Start your own vegetable patch. Understanding a plant's life cycle firsthand is the best lesson.",
          "Lab Exposure: Visit agricultural research centers and talk to scientists about their work."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Agriculture Researchers",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. M.S. Swaminathan: The architect of India's Green Revolution; his research on high-yielding wheat varieties saved India from famine.",
          "Janaki Ammal: A pioneering female botanist whose work on cytogenetics helped create sweeter, high-yielding sugarcane.",
          "Sanjay Rajaram: A world-renowned wheat breeder who developed hundreds of varieties grown globally.",
          "Ashok Kumar Singh: Director of IARI, a leading figure in modern Basmati rice research.",
          "Anand Kumar: Known for his work in dryland agriculture and improving pulse production in India."
        ]
      }
    ]
  },

  animal_science: {
    slug: "animal_science",
    badge: "🌾 The Guardians of the Voiceless for Class 10+",
    heading: "Animal Science",
    subheading: "Ensure food security and public health by caring for animals. From treating pets to managing dairy farms and preventing zoonotic diseases.",
    whyCards: [
      { icon: "Stethoscope", title: "Multitasker for Nature", description: "Ensure food supply safety, protect humans from zoonotic diseases, and preserve wildlife.", borderColor: "#10B981" },
      { icon: "Heart", title: "Zoonotic Protection", description: "Prevent diseases like Rabies and Bird Flu from jumping to humans.", borderColor: "#059669" },
      { icon: "ShieldPlus", title: "Global Dairy Leader", description: "Support India's position as the world's #1 dairy producer with healthy livestock.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Conservation & Welfare", description: "Lead wildlife preservation efforts and ensure ethical animal care standards.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5.5 Years (B.V.Sc & AH)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4.5L–₹1Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "7.5% CAGR, Global Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "No. 1", label: "Global Dairy Producer", gradient: "from-green-500 to-green-600" },
      { value: "7.5%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The laboratory where animal welfare meets national security.",
        color: RED,
        content: [
          "Beyond Treating Pets: This field isn't just 'treating sick pets'; it's the scientific study of the biology, management, and care of animals that live alongside humans—from cats in our living rooms to livestock that provides our milk and eggs.",
          "Multitasker for Nature: An Animal Science professional in India ensures our food supply is safe, protects humans from diseases that jump from animals (like Rabies or Bird Flu), and preserves the majestic wildlife in our national parks.",
          "Global Leadership: As India aims to become a global leader in dairy and meat exports, these professionals are the scientific backbone ensuring our animals are healthy, happy, and productive.",
          "The Voice: Since animals can't speak, you become their voice—diagnosing their ailments and ensuring their welfare."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Veterinary Surgeon",
        icon: "Clock",
        description: "Real workflow of an animal science professional.",
        color: RED2,
        content: [
          "8:00 AM - The Morning Rounds: Start your day with 'rounds.' Check on inpatients—a Labrador recovering from surgery and a rescued peacock with a wing injury. Adjust medications and ensure they are comfortable.",
          "10:30 AM - The Operating Theater: Time for a scheduled surgery. Perform a delicate procedure on a cat to remove a bladder stone. Precision is key. Monitor the cat's vitals closely. In animal science, 'patients' can't tell you where it hurts, so you have to be their voice.",
          "1:00 PM - The Rural Outreach: Grab your medical kit and head to a nearby village. A dairy farmer reports that several cows are refusing to eat. Examine them, take blood samples, and realize it's a localized parasitic infection. Provide treatment and teach the farmer how to improve the herd's hygiene.",
          "4:00 PM - Tech and Research: Back at your base, spend an hour on a tele-consultation app. Help a junior vet in remote Himachal Pradesh diagnose a rare skin condition in a sheep using high-definition camera to look at tissue in real-time.",
          "6:30 PM - Data and Documentation: End your day with paperwork—recording cases for the national livestock database. This data helps the government track disease outbreaks before they become epidemics. Feel a deep sense of peace knowing you healed today."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Empathy & Compassion: Can you feel for a creature that cannot speak?",
          "Observation Skills: Are you good at noticing small changes? Like a pet walking slightly differently.",
          "Physical & Mental Stamina: You might be on your feet for hours or dealing with large, frightened animals.",
          "Strong Decision-Making: In an emergency, can you stay calm and decide the best course of action?",
          "Communication: You don't just talk to animals; you have to explain complex medical issues to anxious owners."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete animal science process.",
        color: RED2,
        content: [
          "Diagnosis: Using physical exams, blood tests, and X-rays to find out what's wrong.",
          "Treatment Planning: Choosing between surgery, medication, or diet changes.",
          "Preventive Care: Administering vaccinations and deworming programs.",
          "Nutrition Management: Designing feeding programs for pets or livestock.",
          "Public Health: Monitoring 'Zoonotic' diseases (diseases that spread from animals to humans).",
          "Documentation: Recording cases for disease tracking and epidemiological monitoring."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Choose the Science Stream with Biology (PCB: Physics, Chemistry, Biology). Optional short-term Animal Husbandry Diplomas are available for paraprofessional roles.",
          "After Class 12: The Main Route: Clear NEET-UG or state-level entrance exams. Enroll in B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry). This is a 5.5-year degree, including a one-year mandatory internship.",
          "After Graduation: Specialization: Take ICAR AIEEA (PG) exam for M.V.Sc (Master of Veterinary Science) in Surgery, Medicine, or Pathology. MBA Route: Some graduates take CAT to pursue MBA in Agribusiness Management to lead dairy or pharma companies."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level (Veterinary Officer, Assistant Surgeon): ₹4.5 Lakhs – ₹8 Lakhs annually.",
          "Mid-Level (Senior Researcher, Pharma Product Manager): ₹12 Lakhs – ₹20 Lakhs annually.",
          "Senior/Leadership (Chief Veterinary Officer, R&D Head): ₹25 Lakhs – ₹45 Lakhs annually.",
          "CXO/Private Practice (Clinic Owner, Dairy Industry Leader): ₹60 Lakhs – ₹1 Crore+ annually.",
          "Growth Trajectory: Takes roughly 8–10 years of consistent practice and specialization to reach senior/leadership position.",
          "Metro vs. Tier-2: Freshers in cities like Bengaluru or Mumbai can earn 20% more in premium pet clinics, while government roles offer stable pay and housing across all tiers.",
          "Market Growth: Indian animal healthcare and pharmaceuticals market growing at 7.5% CAGR."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Institutions: ₹30,000 – ₹1.5 Lakhs (Total degree fees).",
          "Private Institutions: ₹10 Lakhs – ₹25 Lakhs (Total degree fees).",
          "Duration: 5.5 Years (B.V.Sc & AH) including one-year mandatory internship.",
          "Hostel/Living: ₹10,000 – ₹18,000 per month in cities like Bareilly or Ludhiana.",
          "Additional: Medical equipment (stethoscopes, kits) and NEET coaching (₹50k–₹1 Lakh)."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public Leaders: Indian Veterinary Research Institute (IVRI), Bareilly; GADVASU, Ludhiana; Madras Veterinary College, Chennai.",
          "South: Veterinary College, Bangalore; SVVU, Tirupati.",
          "West: Bombay Veterinary College, Mumbai; Navsari Agricultural University.",
          "East/NE: Assam Agricultural University, Guwahati; West Bengal University of Animal and Fishery Sciences."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "ICAR NTS: ₹3,000/month for UG students studying outside their home state.",
          "ICAR-JRF/SRF: Up to ₹35,000/month for PG and PhD research.",
          "Post-Matric Scholarships: Available on National Scholarship Portal (NSP) for SC/ST/OBC students.",
          "VCI Merit Scholarship: Awarded to top-ranking students in the All India Quota."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: RED,
        content: [
          "Veterinary Council of India (VCI): The mandatory licensing body. You must register with VCI or your State Veterinary Council to practice.",
          "Indian Veterinary Association (IVA): The primary association for networking and advocacy.",
          "Specialization Certifications: Available in Surgery, Medicine, Pathology, and other veterinary disciplines.",
          "International Licensing: NAVLE (North American Veterinary Licensing Examination) for practice in USA/Canada."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Veterinary Surgeon, Dairy Farm Manager, Poultry Specialist, Government Veterinary Officer.",
          "New-Age: Animal Nutritionist (for specialized pet diets), Wildlife Veterinarian, Animal Physiotherapist, Tele-Veterinary Consultant.",
          "Entrepreneurship: Starting a multi-specialty pet hospital, high-tech dairy farm, organic pet-food brand, or animal rehabilitation center."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Physical Risks: Being bitten, kicked, or scratched is a part of the job. Exposure to zoonotic diseases is a real occupational hazard.",
          "Emotional Stress: Dealing with sick animals and making 'end-of-life' decisions (euthanasia) can be emotionally draining.",
          "Irregular Hours: Emergencies don't follow a 9-to-5 schedule. You may be called in at midnight for a critical case.",
          "Compassion Fatigue: The constant emotional investment in animal welfare can lead to burnout if not managed properly."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in animal science.",
        color: RED2,
        content: [
          "AI in Diagnosis: AI software that analyzes X-rays and blood work instantly, improving diagnostic accuracy.",
          "Tele-Veterinary: Remote consultations for farmers using high-speed 5G networks.",
          "Genomics: Breeding animals that are naturally resistant to heat and diseases through genetic selection.",
          "Precision Livestock Farming: Using IoT sensors to monitor individual animal health in real-time.",
          "One Health Approach: Integrating human, animal, and environmental health to prevent pandemics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Volunteer: Spend weekends at an animal shelter or local gaushala to gain hands-on experience.",
          "Biology Focus: Master chapters on Animal Kingdom and Physiology—these are crucial for NEET.",
          "Communication: Join a debate club to practice explaining complex medical information clearly.",
          "Tech-Savvy: Learn to use basic health-tracking apps and data tools used in modern veterinary diagnostics.",
          "NEET Preparation: Start early with focused biology coaching and practice tests."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Animal Science Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. Verghese Kurien: The 'Milkman of India.' While an engineer, he revolutionized animal science by building the Amul cooperative, transforming India's dairy sector.",
          "Dr. Parikshit Kakati: A leading wildlife veterinarian with WWF-India, famous for his work in rhino conservation and wildlife health management.",
          "Dr. Umesh Chandra Sharma: Current President of the VCI and a key leader in modernizing veterinary education across India.",
          "Dr. S.A. Ghadge: A pioneer in poultry science who helped India become a global poultry hub with advanced breeding techniques.",
          "Dr. K. Mani: Known for extensive research in livestock production and management in South India, improving dairy productivity."
        ]
      }
    ]
  },

  dairy_technology: {
    slug: "dairy_technology",
    badge: "🌾 The Science of the Milky Way for Class 10+",
    heading: "Dairy Technology",
    subheading: "Master milk processing and quality assurance. Transform raw milk into premium products while ensuring 100% safety for millions.",
    whyCards: [
      { icon: "Milk", title: "Quality Guardian", description: "Ensure milk safety and nutrient-density in the world's #1 producer.", borderColor: "#10B981" },
      { icon: "HardHat", title: "Value Addition", description: "Transform raw milk into premium products like cheese, paneer, and ghee.", borderColor: "#059669" },
      { icon: "Factory", title: "Industrial Innovation", description: "Master pasteurization, homogenization, and fortification in modern factories.", borderColor: "#3B82F6" },
      { icon: "ShieldCheck", title: "Cold Chain Logistics", description: "Use high-tech logistics to maintain product integrity from farm to consumer.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "11.7% CAGR, ₹21.3T Market", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "No. 1", label: "Global Milk Producer", gradient: "from-green-500 to-green-600" },
      { value: "11.7%", label: "Annual Market Growth", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science between the farm and your fridge.",
        color: RED,
        content: [
          "Beyond the Cow: If you think milk just 'comes from a cow,' think again! Between the farm and your fridge lies a world of high-tech science called Dairy Technology.",
          "The Science: Dairy Technology is the branch of food science that deals with processing, storage, packaging, and distribution of milk and its 'avatars' like cheese, butter, ice cream, and yogurt.",
          "National Mission: In India—the world's largest milk producer—this isn't just a business; it's a mission. As a Dairy Technologist, you are a scientist, an engineer, and a quality guardian all rolled into one.",
          "The Guardian: You ensure that the milk millions of Indian children drink is not only delicious but 100% safe, nutrient-rich, and free from spoilage."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Quality Control Executive",
        icon: "Clock",
        description: "Real workflow of a dairy technologist.",
        color: RED2,
        content: [
          "5:30 AM - The Fresh Arrival: Start your day as the first stainless steel milk tankers roll in. Don't just open the lid; take a sample and head to the lab.",
          "7:00 AM - The 'Sip' Test: Using advanced equipment, test for 'adulterants'—illegal additives like urea or detergent. Perform an 'organoleptic' test using your senses to check the milk's smell, color, and taste. One wrong result, and the entire 10,000-liter tanker is sent back.",
          "10:00 AM - The Heat is On: Move to the plant floor. Monitor the Pasteurization unit—a giant machine that heats milk to exactly 71.7°C for 15 seconds to kill harmful bacteria without destroying nutrients. Check the flow-rate and digital temperature sensors.",
          "1:00 PM - The Innovation Hour: After lunch, join the R&D (Research & Development) team. Experiment with new products like 'Probiotic Mango Lassi' that needs a shelf-life of 30 days without refrigeration. Analyze texture and pH levels of trial batches.",
          "4:00 PM - Packaging Precision: Spend the afternoon in the packaging section. Ensure Tetra Paks are perfectly sealed and 'Best Before' dates are printed clearly. A tiny leak could spoil thousands during transport.",
          "6:30 PM - Data and Clean-up: Review the plant's hygiene reports. In a dairy, 'clean' isn't enough; everything must be 'sterile.' Sign off on sanitation of massive pipes and silos, knowing tomorrow the cycle starts again."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Attention to Detail: Can you spot a tiny change in a color-changing chemical test?",
          "Scientific Curiosity: Do you enjoy Biology and Chemistry?",
          "Honesty & Integrity: You are dealing with people's health. You can never 'cut corners.'",
          "Stamina: You might have to spend hours in a cold storage room or on a bustling factory floor.",
          "Problem-Solving: If a batch of curd isn't setting correctly, can you figure out why?"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete dairy technology process.",
        color: RED2,
        content: [
          "Procurement: Collecting raw milk from farmers and cooling it immediately.",
          "Processing: Pasteurization, Homogenization (making the milk smooth), and Fortification (adding vitamins).",
          "Value Addition: Turning milk into 'Solid Gold' (Cheese, Paneer, Ghee).",
          "Quality Assurance: Constant lab testing at every single stage.",
          "Distribution: Managing the 'Cold Chain' to ensure the product stays chilled until it reaches the shop.",
          "Documentation: Recording all test results and maintaining compliance with FSSAI standards."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Enroll in a 3-year Diploma in Dairy Technology. Start as a Plant Technician or Supervisor.",
          "After Class 12 (Science PCM/PCB): Appear for ICAR AIEEA (UG) or State CETs. Enroll in a 4-year B.Tech in Dairy Technology.",
          "After Graduation: Appear for ICAR AIEEA (PG) or GATE. Pursue M.Tech or PhD for Research/Teaching roles.",
          "Note: For B.Tech degree, Maths (PCM) is usually mandatory, though some state universities allow PCB students."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level (Fresher): ₹4 Lakhs – ₹7 Lakhs annually.",
          "Mid-Level (5–10 years): ₹12 Lakhs – ₹22 Lakhs annually.",
          "Senior/Plant Head: ₹30 Lakhs – ₹55 Lakhs annually.",
          "Leadership/CXO: ₹80 Lakhs – ₹1.5 Crore+ (Common in top cooperatives like Amul).",
          "Market Size: Indian dairy market valued at ₹21,318 Billion in 2025.",
          "Growth Rate: Growing at massive 11.7% annually (Source: IMARC Group).",
          "Demand: India accounts for 24% of global milk production. Thousands of new technologists needed."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Colleges: ₹20,000 – ₹1.5 Lakhs (Total 4-year degree fees).",
          "Private Institutions: ₹5 Lakhs – ₹12 Lakhs (Total 4-year degree fees).",
          "Duration: 4 Years (B.Tech) or 3 Years (Diploma).",
          "Living Costs: ₹10,000 – ₹20,000 per month in education hubs.",
          "Preparation: Coaching for entrance exams (NEET/JEE/ICAR) can cost ₹50,000 – ₹1 Lakh."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public/Premier: NDRI (National Dairy Research Institute), Karnal – The 'IIT' of Dairying.",
          "Other Public: Anand Agricultural University, Gujarat; Sanjay Gandhi Institute of Dairy Technology, Patna; Dairy Science College, Bengaluru.",
          "Private: Parul University (Gujarat), NIMS University (Jaipur), Centurion University (Odisha).",
          "Distance/Online: Limited options; hands-on lab work is essential for this field."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Talent Scholarship (ICAR): ₹3,000 per month for UG students studying in a state other than their home state.",
          "Institute Scholarships: NDRI offers merit-based stipends of approx. ₹7,500/month for PG students.",
          "State Schemes: Post-Matric Scholarships via the National Scholarship Portal (NSP).",
          "Research Fellowships: ICAR-JRF/SRF for PhD students with monthly stipends."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "Indian Dairy Association (IDA): The apex body for networking and industry trends.",
          "FSSAI Certification: Essential for those going into Food Safety and Inspection.",
          "HACCP/ISO Auditor: High-value certifications for Quality Assurance managers.",
          "BIS Certification: Bureau of Indian Standards certification for quality compliance.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Dairy Plant Manager, Quality Control Officer, Production Supervisor, Process Engineer.",
          "New-Age: Plant-Based Dairy Specialist (Oat/Almond milk), Agri-Data Analyst, Sustainability Consultant (Reducing carbon footprint).",
          "Entrepreneurship: Starting a 'Farm-to-Table' organic dairy brand, specialized cheese boutique, or probiotic dairy products company."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Perishability: Milk doesn't wait. You often work in shifts (including night shifts) because processing never stops.",
          "Physical Environment: Parts of the plant can be very hot (near boilers) or very cold (near chillers).",
          "High Pressure: One batch of bad milk can lead to massive financial losses and a brand crisis.",
          "Regulatory Compliance: Constant adherence to FSSAI, BIS, and international food safety standards."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in dairy technology.",
        color: RED2,
        content: [
          "AI & Robotics: Automated milking and AI sensors that detect 'mastitis' (cow illness) before it shows symptoms.",
          "A2 and Organic Milk: Huge growth in premium milk segments that are chemical-free and health-focused.",
          "Smart Packaging: QR codes that tell the consumer exactly which farm their milk came from and its current temperature history.",
          "Precision Fermentation: Lab-grown dairy proteins that replicate milk without cows.",
          "Sustainability: Focus on reducing carbon footprint and water usage in dairy processing."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Master Chemistry: Focus on 'Organic Chemistry' and 'Biomolecules'—these are crucial.",
          "English Communication: You'll need to write technical reports and lead teams.",
          "Basic Lab Skills: Take your school Chemistry/Biology practicals seriously.",
          "DIY Experiments: Try making paneer or yogurt at home and observe how temperature and 'culture' change the milk.",
          "Industry Awareness: Follow dairy industry news and visit local dairy plants for exposure."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Dairy Technology Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. Verghese Kurien: The 'Father of the White Revolution' and the man behind Amul. He turned India from a milk-deficient country into a global powerhouse.",
          "Dr. R.S. Sodhi: Former MD of Amul, who scaled Indian dairy to global heights during the digital era with innovative processing technologies.",
          "Dr. Amrita Patel: Former Chairperson of NDDB, instrumental in the 'Operation Flood' program that empowered millions of rural women and transformed dairy production.",
          "Dr. Rajendra Singh: Known for pioneering sustainable dairy practices and water conservation in dairy farming.",
          "Dr. Anand Sharma: Leading researcher in dairy technology innovation and food safety at NDRI."
        ]
      }
    ]
  },

  food_science: {
    slug: "food_science",
    badge: "🌾 The Magic Behind Your Plate for Class 10+",
    heading: "Food Science and Technology",
    subheading: "Bridge the farm and kitchen. Develop safe, nutritious, and innovative food products while reducing India's 30% food waste.",
    whyCards: [
      { icon: "FlaskConical", title: "Nutrition Engineering", description: "Design healthier, safer, and more sustainable food products for billions.", borderColor: "#10B981" },
      { icon: "Pizza", title: "Safety Standards", description: "Enforce quality across the $700B Indian food processing market.", borderColor: "#059669" },
      { icon: "PackageCheck", title: "Innovative Processing", description: "Use chemistry to develop new flavors and extend shelf life sustainably.", borderColor: "#3B82F6" },
      { icon: "AlertCircle", title: "Global Compliance", description: "Master international standards for exports and global food security.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech/B.Sc)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3.5L–₹1.5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "14% CAGR, $700B Market by 2030", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "30%", label: "India's Food Waste", gradient: "from-green-500 to-green-600" },
      { value: "14%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science between the farm and your kitchen.",
        color: RED,
        content: [
          "The Mystery: Have you ever wondered why a packet of chips stays crunchy for months, or how 'instant' noodles actually become instant? That isn't just luck; it's Food Science and Technology.",
          "The Definition: Food science is the study of the physical, biological, and chemical makeup of food. Food technology is the application of that science to select, preserve, process, package, and distribute safe and nutritious food.",
          "National Superpower: In a country like India, which is the world's second-largest producer of food but loses nearly 30% of it to spoilage, this career is a superpower.",
          "The Bridge: A Food Technologist is the bridge between the farm and your kitchen. They figure out how to keep milk fresh without chemicals, fortify rice with vitamins to fight malnutrition, and create the next viral snack that tastes amazing but is also healthier."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Junior Food Technologist",
        icon: "Clock",
        description: "Real workflow of a food science professional.",
        color: RED2,
        content: [
          "8:30 AM - The Lab Briefing: Start your day in the R&D (Research & Development) lab. Work on a new 'Zero Sugar' fruit drink. Begin by testing the stability of a natural sweetener under different temperatures.",
          "10:30 AM - The Taste Test (Sensory Evaluation): Lead a 'Sensory Panel.' Five people sit in small booths, tasting three different versions of the drink. Record data on 'mouthfeel,' 'aftertaste,' and 'aroma'—not just if it's 'tasty.'",
          "1:30 PM - Scaling Up (Pilot Plant): Move to the 'Pilot Plant'—a miniature factory. Try to see if the recipe made in a small beaker can be produced in a 500-liter tank. Monitor the Pasteurization unit, ensuring heat kills bacteria without destroying the fruit's natural vitamins.",
          "4:00 PM - Quality Control (The Plant Floor): Put on a hairnet and lab coat to visit the main factory floor. Check the 'Modified Atmosphere Packaging' (MAP) section. Ensure nitrogen levels inside packets are perfect so the drink stays fresh for 12 months.",
          "6:00 PM - Regulatory Reporting: Back at your desk, review the latest FSSAI (Food Safety and Standards Authority of India) guidelines. Ensure the label on the new drink follows every legal rule, from font size to calorie counts.",
          "7:30 PM - Heading Home: Walk through the supermarket on your way home. Look at the shelves differently. Know the science, the sweat, and the technology that went into every single box."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Scientific Curiosity: Do you enjoy Biology and Chemistry? Are you the kid who reads the 'Nutrition Facts' on the back of every chocolate bar?",
          "Keen Senses: Do you have a sensitive palate or a good nose for detail?",
          "Problem-Solver: Can you figure out why a cake didn't rise or why the milk turned sour too fast?",
          "Precision & Ethics: You are dealing with people's health. You must be honest and extremely careful with measurements.",
          "Creative Mind: Can you imagine a food that doesn't exist yet—like a meat-free burger that tastes like the real thing?"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete farm-to-fork cycle.",
        color: RED2,
        content: [
          "Selection: Choosing the best raw materials (grains, fruits, dairy).",
          "Product Development: Mixing ingredients to create new recipes in a lab.",
          "Processing: Using heat, cold, or drying to preserve the food.",
          "Quality Assurance (QA): Testing samples every hour for bacteria or chemical safety.",
          "Packaging: Designing boxes or wraps that keep the food safe and look great.",
          "Regulatory Compliance: Ensuring all products meet FSSAI and international standards."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Continue to Class 11 & 12 with Science (PCM or PCB). This is the strongest foundation. Alternative: Some states offer a Diploma in Food Technology (3 years) for entry-level technician roles.",
          "After Class 12: B.Tech in Food Technology: A 4-year engineering-heavy course (Recommended for machinery and large-scale factory work). B.Sc. in Food Science/Nutrition: A 3-year science-focused course (Recommended for R&D and lab work). Entrance Exams: JEE Main, ICAR AIEEA (UG), CUET, or state-level CETs.",
          "After Graduation: M.Tech/M.Sc. in Food Technology: Essential for high-paying R&D or leadership roles. MBA in Agribusiness/Operations: For those who want to lead the business side of food giants like Nestlé or Amul."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: RED2,
        content: [
          "Entry-Level: ₹3.5 Lakhs – ₹6 Lakhs annually.",
          "Mid-Level (5–10 years): ₹12 Lakhs – ₹22 Lakhs annually.",
          "Senior/Plant Head: ₹30 Lakhs – ₹55 Lakhs annually.",
          "Leadership/CXO: ₹80 Lakhs – ₹1.5 Crore+ (Top 10% earn > ₹33 Lakhs).",
          "Market Size: Indian food processing industry expected to reach $700 Billion by 2030.",
          "Growth Rate: Sector growing at CAGR of 14% (2024–2030). As middle class grows, demand for 'Ready-to-Eat' and healthy packaged snacks is exploding."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: RED2,
        content: [
          "Government Institutions: ₹40,000 – ₹2 Lakhs (Total 4-year degree fees).",
          "Private Institutions: ₹5 Lakhs – ₹15 Lakhs (Total 4-year degree fees).",
          "Duration: 4 Years (B.Tech) or 3 Years (B.Sc).",
          "Living/Hostel: ₹12,000 – ₹22,000 per month in cities like Noida, Mumbai, or Coimbatore.",
          "Additional: Lab kits, certification exams (ISO/HACCP), and coaching (₹40k–₹80k)."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Public/Premier: NIFTEM (Kundli/Thanjavur) – The apex body for food technology. ICT Mumbai – World-renowned for chemical and food tech. IIT Kharagpur – Top-tier engineering approach. CFTRI (Mysuru) – The premier research institute.",
          "Private: Amity University (Noida), LPU (Jalandhar), SRM University (Chennai), Chandigarh University.",
          "Geographic Diversity: North (PAU Ludhiana), South (TNAU Coimbatore), East (NIT Rourkela), West (Anand Agricultural University)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central: NSP (National Scholarship Portal) schemes for minority and meritorious students.",
          "NIFTEM Merit Scholarship: Full tuition fee waiver + monthly stipend (₹1,000/month).",
          "Private: Corteva Agriscience Scholarship (₹25k–₹50k for female students in agri-allied streams).",
          "Research Fellowships: ICAR-JRF/SRF for PhD students with monthly stipends."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: RED,
        content: [
          "AFST(I): Association of Food Scientists and Technologists (India).",
          "Certifications: HACCP (Hazard Analysis Critical Control Point), ISO 22000 (Food Safety Management), Six Sigma.",
          "Mandatory: Every food plant in India operates under an FSSAI License.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: RED2,
        content: [
          "Conventional: Food Technologist, QA Manager, Production Supervisor, Food Safety Officer, Plant Manager.",
          "New-Age: Plant-Based Meat Scientist, Food 3D-Printing Engineer, Agri-Data Analyst, Personal Nutrition Coach (AI-driven).",
          "Freelancing: Technical Auditor, Food Startup Consultant, Specialized Baker/Chef-Scientist."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: RED,
        content: [
          "Shift Work: Factories run 24/7. You may have to work night shifts occasionally.",
          "Zero Error Margin: One tiny mistake in food safety can lead to a national recall and serious health risks.",
          "Physical Demands: Long hours on the factory floor in hot or cold environments.",
          "Regulatory Pressure: Constant need to stay updated with changing FSSAI and international food safety standards."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in food science.",
        color: RED2,
        content: [
          "AI & Robotics: AI will 'predict' when a batch of milk will spoil before it actually does.",
          "Clean Label: Removing all artificial colors and preservatives to go '100% natural.'",
          "Sustainable Packaging: Using seaweed or mushroom-based wraps that dissolve in water.",
          "Precision Fermentation: Lab-grown dairy proteins and meat alternatives that replicate real products.",
          "Personalized Nutrition: AI-driven food products tailored to individual health profiles."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Chemistry Practical: Pay attention to titration and pH tests—they are the bread and butter of food labs.",
          "Cooking Experiments: Try making jam or pickles at home. Note how sugar or salt acts as a preservative.",
          "Read Labels: Start a 'Label Diary.' Compare ingredients in three different biscuit brands.",
          "Tech Skills: Learn basic Microsoft Excel. Every food plant uses it to track data.",
          "Industry Awareness: Follow food industry news and visit local food processing plants for exposure."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Food Science Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: RED2,
        content: [
          "Dr. V. Prakash: Former Director of CFTRI and a global authority on food science and nutrition.",
          "Shalini S. Arya: A renowned technologist at ICT Mumbai who improved the nutritional value of traditional Indian flatbreads (chapattis).",
          "Dr. Coluthur Gopalan: The 'Father of Indian Nutrition Science,' who dedicated his life to fighting malnutrition in India.",
          "M.S. Swaminathan: Though a plant breeder, his 'Green Revolution' provided the raw materials that made the Indian food processing industry possible.",
          "Dr. Verghese Kurien: The 'Milkman of India.' He used dairy technology to turn India into the world's largest milk producer via Amul."
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
  },
  environmental_scientist: {
    slug: "environmental_scientist",
    badge: "🌍 The Earth's Detective for Class 10+",
    heading: "Environmental Scientist",
    subheading: "Solve crimes against nature. Protect air, water, and soil. Join India's fastest-growing field with 8% CAGR and massive demand from ESG-focused companies.",
    whyCards: [
      { icon: "Leaf", title: "8% Market CAGR", description: "India Environmental Testing market reaching $1.6B by 2030. Rapid growth in pollution control and ESG compliance.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹1.5Cr+ Salaries", description: "Entry-level ₹4L–₹7L. Senior specialists ₹20L–₹35L+. Leadership roles ₹50L–₹1.5Cr+ in MNCs.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in World Bank, UN Environment Programme, and international climate NGOs.", borderColor: "#3B82F6" },
      { icon: "Award", title: "AI & Satellite Tech Future", description: "Work with AI to spot forest fires, illegal mining from space. Carbon markets creating new jobs.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (B.Sc./B.Tech)", color: "bg-green-100 text-green-700" },
      { label: "Entry Exam", detail: "CUET-UG, State Exams, GATE", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$1.6B", label: "India Environmental Testing Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "8%", label: "Market CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Solving crimes against nature and protecting the environment.",
        color: RED,
        content: [
          "Environmental Scientist Definition: A specialist who studies physical, chemical, and biological parts of environment to protect it and us. A detective solving crimes against nature.",
          "The Role: The Field Detective (collect samples from soil, air, water), The Lab Analyst (use chemicals and technology to find hidden pollutants), The Compliance Expert (compare results with India's environmental laws), The Solution Architect (recommend ways to fix damage or prevent it).",
          "What They Do: Conduct site assessments, perform lab analysis, check compliance with environmental laws, write Environmental Impact Assessment (EIA) reports, recommend mitigation strategies, monitor pollution levels.",
          "Why It Matters: India facing rapid urbanization challenges—air pollution in Delhi, water scarcity in Bengaluru, Western Ghats protection. Environmental Scientists don't just identify problems; they find solutions.",
          "The Scope: Work in government pollution control boards, private environmental consultancies, energy companies, green-tech startups, or international organizations.",
          "The Impact: You're guardians of our future, ensuring that as India progresses, our air, water, and soil remain healthy for generations to come."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Earth's Detective",
        icon: "Clock",
        description: "Real workflow of an environmental scientist.",
        color: RED2,
        content: [
          "8:00 AM - The Field Call: Start day not at desk, but at edge of local lake. Dressed in waterproof boots and carrying mobile lab kit, collect water samples from three different spots. Investigating tip about illegal chemical discharge.",
          "11:30 AM - Laboratory Deep-Dive: Back at firm's high-tech lab. Meticulously test water samples for pH levels, heavy metals, and oxygen content. Wear white lab coat and safety goggles, look into microscope to identify harmful microorganisms.",
          "2:00 PM - The Data Puzzle: After lunch, sit at computer. Use GIS (Geographic Information System) software to map where pollution is moving in lake. Compare today's data with last month's records. It's a puzzle—find exact source.",
          "4:30 PM - The Strategy Meeting: Meet with senior Environmental Engineer and legal expert. Present findings. Discuss how to help nearby factory update waste-treatment plant so lake stays clean. Explain data clearly so everyone understands risk.",
          "7:00 PM - Research & Learning: Before heading home, read new government notification about India's updated Plastic Waste Management rules. In this field, rules change as we find better ways to protect Earth. Staying updated is part of job."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Green DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Curiosity (always ask 'Why is this river turning brown?' or 'How does forest survive drought?'), Analytical Thinking (break big problem into small pieces, look at facts), Patience (scientific research takes time—test 100 samples before finding answer), Ethics (care deeply about truth and doing right for planet).",
          "Soft Skills: Communication (explain complex science to non-scientists like politicians or factory owners), Problem-Solving (creative solutions for environmental challenges), Resilience (handle frustration when business interests conflict with environmental needs), Leadership (guide teams toward sustainable solutions).",
          "Hard Skills: Knowledge of chemistry and biology, Understanding of GIS and data analysis, Lab analysis expertise, Environmental law knowledge, Technical proficiency with monitoring equipment.",
          "The Self-Check: Do you always ask 'Why?' about environmental issues? Can you break down complex problems? Do you have patience for long-term research? If yes, you have the Green DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Diagnostic Workflow",
        icon: "Briefcase",
        description: "The complete environmental science cycle.",
        color: RED2,
        content: [
          "Site Assessment: Visiting location to observe and collect samples of soil, air, or water. Understanding environmental conditions.",
          "Lab Analysis: Using chemicals and technology to find hidden pollutants. Identifying contaminants and their concentrations.",
          "Compliance Check: Comparing results with India's environmental laws (CPCB standards). Ensuring regulatory compliance.",
          "Reporting: Writing detailed 'Environmental Impact Assessment' (EIA) report. Documenting findings comprehensively.",
          "Mitigation: Recommending ways to fix damage or prevent it in future. Proposing solutions and strategies.",
          "Monitoring: Tracking pollution levels over time. Ensuring effectiveness of mitigation measures.",
          "Collaboration: Working with engineers, lawyers, and government officials. Ensuring holistic environmental protection.",
          "Documentation: Maintaining detailed records of all assessments and findings. Ensuring traceability and accountability."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "After Class 10: Focus on Science (PCB or PCM). This is mandatory for environmental science degrees. Board Exams (Focus: Chemistry and Biology).",
          "After Class 12 (Science): Enroll in 3-year B.Sc. Environmental Science or 4-year B.Tech Environmental Engineering. Entrance Exams: CUET-UG, State-level entrance exams.",
          "After Graduation: Specialize for higher pay and career advancement. Pursue M.Sc. or M.Tech in specialized areas like Climate Science, Toxicology, or Environmental Management. Entrance Exams: GATE, UGC-NET.",
          "Top Institutions: Jawaharlal Nehru University (JNU) Delhi, Banaras Hindu University (BHU) Varanasi, Indian Institute of Science (IISc) Bengaluru, IIT Bombay & IIT Kanpur, Anna University Chennai.",
          "Specializations: Climate Science, Toxicology, Waste Management, Water Resources, Air Quality Management, Environmental Impact Assessment."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Entry-Level (0-2 years): ₹4L–₹7L per annum. Government pollution control boards or private consultancies.",
          "Mid-Level (5-10 years): ₹12L–₹18L per annum. Senior positions in consultancies or government agencies.",
          "Senior-Level (10+ years): ₹20L–₹35L per annum. Leading environmental departments or consultancies.",
          "Leadership/CXO (Sustainability Head): ₹50L–₹1.5Cr+ per annum. Common in MNCs with strong ESG goals.",
          "Metro vs. Tier-2: Metros (Delhi, Mumbai, Bengaluru) highest salaries. Tier-2/3 (Vapi, Kanpur, Nagpur) growing demand in industrial hubs.",
          "Market Size: India Environmental Testing market expected to reach $1.6B by 2030, growing at 8% annually.",
          "Growth Trajectory: Entry to Senior Specialist takes 8-12 years with consistent experience and specialization."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹15,000–₹60,000 (Total 3-year B.Sc. fees). Very affordable but highly competitive.",
          "Private Institutions: ₹2L–₹6L (Total 3-year B.Sc. fees). Better infrastructure and placement support.",
          "Living Costs: ₹12,000–₹20,000 per month in cities like Delhi or Pune.",
          "Additional Costs: Certifications in GIS or Carbon Accounting (₹5k–₹20k), entrance coaching (₹20k–₹50k), lab equipment (₹10k–₹20k).",
          "Total Investment: Approximately ₹8L–₹18L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top environmental science institutes across India.",
        color: RED,
        content: [
          "Government/Premier: Jawaharlal Nehru University (JNU) Delhi, Banaras Hindu University (BHU) Varanasi, Indian Institute of Science (IISc) Bengaluru, IIT Bombay, IIT Kanpur.",
          "South: Anna University Chennai, University of Madras, Manipal Academy of Higher Education.",
          "East: Jadavpur University Kolkata, University of Calcutta.",
          "Private: Amity University Noida, TERI School of Advanced Studies Delhi, Lovely Professional University (LPU).",
          "Note: Choose institutes with strong faculty, modern lab facilities, field exposure, and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "Central: NSP (National Scholarship Portal) schemes for meritorious students. Post-matric and merit-cum-means scholarships.",
          "Fellowships: UGC-NET JRF provides monthly stipend of approx. ₹37,000 for Ph.D. students. CSIR-NET JRF for research positions.",
          "Private: British Council Scholarships for Women in STEM, Tata Trusts scholarships for developmental studies.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Environment occasionally sponsors students for specialized environmental training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "QCI (Quality Council of India): For NABET accreditation (essential for EIA consultants). Mandatory for environmental consultancy firms.",
          "LEED Certification: If you want to specialize in 'Green Buildings.' Globally recognized credential.",
          "ISO 14001 Auditor: Globally recognized certification for environmental management systems. High demand in industry.",
          "Professional Memberships: Indian Association of Environmental Professionals, Environmental Engineers Association.",
          "Continuing Education: Must stay updated on latest environmental regulations and technologies. Annual professional development required."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in environmental science careers.",
        color: RED2,
        content: [
          "Conventional Careers: Environmental Consultant, Pollution Control Officer, Waste Management Specialist, Environmental Auditor, EIA Specialist.",
          "New-Age Careers: Sustainability Manager (Carbon footprint expert), Climate Modeler (using AI to predict weather), Ecotoxicologist, Carbon Accountant, ESG Consultant.",
          "Entrepreneurship: Starting waste-to-wealth startup, green-audit agency, environmental consulting firm, or sustainability consulting business.",
          "Freelancing: Environmental audits, compliance consulting, data analysis, research writing, environmental impact assessments.",
          "Specialized Roles: Air Quality Specialist, Water Resources Manager, Soil Scientist, Environmental Health Officer, Climate Change Analyst."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of environmental science.",
        color: RED,
        content: [
          "Slow Impact: Environmental change takes years. You may not see your results immediately. Patience essential.",
          "Policy Hurdles: Sometimes business interests conflict with environmental needs, requiring tough negotiations.",
          "Field Hardships: You might have to visit remote areas with no basic facilities to collect data. Physical demands high.",
          "Bureaucratic Delays: Government approvals and policy changes can be slow. Frustration common.",
          "Limited Resources: Many organizations underfunded. You may work with limited equipment and budget.",
          "Emotional Toll: Seeing environmental destruction can be emotionally draining. Self-care important.",
          "Competitive Field: Growing number of environmental professionals. Need to differentiate through specialization.",
          "Continuous Learning: Must stay updated on latest environmental regulations, technologies, and research. Ongoing professional development required."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in environmental science.",
        color: RED2,
        content: [
          "AI & Satellite Tech: Use AI to spot forest fires or illegal mining from space in real-time. Satellite monitoring becoming standard.",
          "Carbon Markets: Companies will 'buy and sell' air quality, creating thousands of jobs for Carbon Accountants. New economic model emerging.",
          "Circular Economy: Designing products that never become waste—everything will be recycled. Zero-waste future.",
          "Climate Modeling: Advanced AI models predicting climate impacts with precision. Predictive environmental management.",
          "Precision Monitoring: Real-time environmental monitoring through IoT sensors and wearables. Data-driven decisions.",
          "Global Standardization: International environmental standards becoming more stringent. Global opportunities increasing.",
          "Green Tech Innovation: Rapid development of clean energy and environmental remediation technologies. New career paths emerging.",
          "ESG Integration: Companies integrating Environmental, Social, Governance goals. Massive demand for ESG consultants."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Mastery: Focus on Chemistry and Biology. Build strong foundation in environmental sciences.",
          "Learn GIS: Start exploring Google Earth Pro for free to understand mapping and spatial analysis.",
          "Eco-Clubs: Join or start green club in school to practice leadership and environmental advocacy.",
          "Read Up: Follow 'Centre for Science and Environment' (CSE) or Down to Earth magazine. Stay informed on environmental issues.",
          "Data Analysis: Learn basic Excel and data visualization. Environmental work is increasingly data-driven.",
          "Field Work: Volunteer for environmental NGOs or local cleanup drives. Gain practical field experience.",
          "Tech Skills: Learn basic coding and GIS software. Technical skills increasingly important.",
          "Research Interest: Read research papers on environmental science. Understand evidence-based approach.",
          "Networking: Connect with environmental professionals and organizations. Learn about different career paths.",
          "Entrance Prep: Start early preparation for entrance exams (CUET, State exams). Join coaching if needed."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Environmental Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Sunderlal Bahuguna: Leader of Chipko Movement who taught world that trees are worth more than gold. Environmental activism pioneer.",
          "Medha Patkar: Woman behind Narmada Bachao Andolan, fighting for both nature and people. Social-environmental justice advocate.",
          "Salim Ali: The 'Birdman of India' who pioneered nature conservation and ornithology. Founder of Bombay Natural History Society.",
          "Rajendra Singh: The 'Waterman of India' who revived dead rivers in Rajasthan using traditional methods. Water conservation hero.",
          "M.S. Swaminathan: Known as 'Father of Green Revolution,' combined agricultural science with environmental care. Sustainable agriculture pioneer.",
          "Vandana Shiva: Environmental activist and physicist fighting for biodiversity and farmers' rights. Global environmental leader.",
          "Anil Agarwal: Founder of Centre for Science and Environment (CSE). Environmental journalism and advocacy pioneer."
        ]
      }
    ]
  }
};

