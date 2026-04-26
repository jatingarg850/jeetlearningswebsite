import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const architectureAndConstructionUpdateData: Record<string, CareerPageData> = {
  construction: {
    slug: "construction",
    badge: "🏗️ Building the New India for Class 10+",
    heading: "Construction",
    subheading: "If architects are the 'dreamers' who draw the soul of a building, construction professionals are the 'doers' who give it a body. Turn blueprints into reality and build the infrastructure that powers India.",
    whyCards: [
      { icon: "Building2", title: "Backbone of Economy", description: "From Atal Setu to Gati Shakti projects, construction professionals build roads, bridges, and smart cities.", borderColor: "#10B981" },
      { icon: "Zap", title: "Tangible Results", description: "See immediate, visible results—an empty plot becomes a 50-story skyscraper or high-speed railway.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "8.1% Market Growth", description: "Indian construction market projected to grow at 8.1% in 2025-26, creating thousands of jobs.", borderColor: "#3B82F6" },
      { icon: "Briefcase", title: "Leadership Potential", description: "Fast-track to senior management roles—Project Managers and Site Engineers lead teams of 500+.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (Degree) or 3 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "8.1% CAGR, High Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "8.1%", label: "Market Growth Rate 2025-26", gradient: "from-green-500 to-green-600" },
      { value: "₹1.5Cr+", label: "Senior Leadership Salary", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Turning blueprints into reality—the backbone of infrastructure.",
        color: BLUE,
        content: [
          "Construction is a high-energy, multi-billion-dollar industry that turns blueprints into reality. It isn't just about bricks and mortar; it's about engineering marvels, managing thousands of workers, and using cutting-edge technology.",
          "The Doers: While architects dream, construction professionals execute. They build the roads, bridges, tunnels, smart cities, and green energy plants that define India in 2030.",
          "Multi-Disciplinary: Construction involves Civil Engineers (structure), Electrical Engineers (power systems), Mechanical Engineers (HVAC), and Project Managers (coordination).",
          "Technology Integration: Modern construction uses BIM (Building Information Modeling), drones for site surveying, and AI for project management.",
          "Why It Matters: India's infrastructure boom means construction professionals are in high demand. From metro rails to renewable energy plants, your work directly impacts millions of lives."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Site Engineer",
        icon: "Clock",
        description: "Real workflow of a construction professional.",
        color: BLUE2,
        content: [
          "7:00 AM - The Early Bird Gets the Site: Arrive at the site just as the sun rises. Wear your 'armor': bright yellow hard hat, high-visibility vest, and steel-toed boots. Do a quick safety walk ensuring no hazards before 500+ workers arrive.",
          "9:00 AM - The Toolbox Talk: Gather supervisors and laborers for a 'Toolbox Talk.' Explain the day's goals—pouring concrete for the 12th-floor slab. Emphasize safety protocols and harness checks for those working at heights.",
          "11:30 AM - The Tech Check: Pull out a tablet and open a BIM app. Compare the 3D digital model with what's actually being built. Spot a clash: a plumbing pipe exactly where an electrical conduit should go. Mark it for the design team.",
          "1:30 PM - Quality & Math: A fleet of transit mixers arrives. Supervise the 'Slump Test' to check concrete quality. Do quick mental math to ensure the volume matches the order.",
          "4:00 PM - The Client Update: Meet with the Project Manager and Client. Discuss budget and timeline. There's a delay in steel delivery due to rain—figure out how to adjust the schedule so the project doesn't fall behind.",
          "7:00 PM - Planning Tomorrow: Finish your Daily Progress Report (DPR). Check the weather forecast. If it rains tomorrow, prepare a Plan B. Look back at the rising structure with pride—you didn't just work today; you built a landmark."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Physical & Mental Resilience: You might work outdoors in heat or cold. You need 'grit' and the ability to handle physical demands.",
          "Leadership & People Skills: You will manage diverse teams—from highly skilled engineers to daily-wage laborers. You must be firm yet empathetic.",
          "Spatial Visualization: Can you look at a flat drawing and 'walk through' the building in your mind? Can you visualize 3D structures from 2D plans?",
          "Safety Conscious: If you're the person who always reminds friends to wear helmets, your mindset fits this high-risk industry.",
          "Problem-Solving: When a machine breaks or material doesn't arrive, can you think on your feet and find solutions quickly?"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Project Life Cycle",
        icon: "Briefcase",
        description: "The complete construction workflow.",
        color: BLUE2,
        content: [
          "Pre-Construction: Estimating costs, bidding for the project, and getting government permits.",
          "Procurement: Buying tons of steel, cement, and glass, and hiring specialized contractors.",
          "Site Mobilization: Setting up cranes, labor camps, and safety fences.",
          "Execution: The actual building phase—excavation, foundation, structure (RCC), and finishing (plumbing, painting).",
          "Quality Control: Constantly testing materials to ensure the building lasts 100 years.",
          "Handover: Final inspection and giving the keys to the owner."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Take a 3-Year Diploma in Civil/Electrical/Mechanical Engineering (Polytechnic). Result: Junior Engineer (JE) / Supervisor role.",
          "After Class 12 (Science): Clear JEE Main/Advanced or State CETS → 4-Year B.Tech/B.E. in Civil Engineering. Result: Graduate Engineer Trainee (GET).",
          "After Class 12 (Commerce/Arts): Pursue 3-Year BBA/B.Com → MBA in Construction Management (e.g., at NICMAR). Result: Construction Manager / Real Estate Analyst.",
          "After Graduation (B.Tech/B.Arch): Take 2-Year M.Tech or PGP in Construction Management. Result: Project Manager / Planning Engineer."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Entry-Level (Fresh Graduate): ₹4 Lakhs – ₹7 Lakhs annually.",
          "Mid-Level (5–10 years): ₹10 Lakhs – ₹18 Lakhs annually.",
          "Senior/Project Head: ₹25 Lakhs – ₹45 Lakhs annually.",
          "Leadership/CXO: ₹60 Lakhs – ₹1.5 Crore+ (Common in top firms like L&T or Tata Projects).",
          "City-Wise: Metros (Mumbai, Delhi, Bengaluru) offer highest salaries, often 20% higher than national average. Tier-2/3 cities have lower salaries but better cost-of-living advantage.",
          "Market Growth: Indian construction market projected to grow at 8.1% in 2025-26."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and opportunities.",
        color: BLUE,
        content: [
          "Top Industries: Infrastructure (Highways, Bridges), Metro Rail, Real Estate (Apartments, Malls), Industrial Plants (Refineries, Factories).",
          "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, and Pune.",
          "Remote/Gig Economy: 'Quantity Surveying' and 'BIM Modeling' can often be done remotely as a freelancer.",
          "International: Huge demand for Indian construction professionals in the Middle East (Dubai, Qatar) and Australia.",
          "Emerging Roles: Sustainability Manager (Green Buildings), BIM Manager, Drone Pilot (for site surveying)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹2 Lakhs – ₹5 Lakhs (Total 4-year degree).",
          "Private Universities: ₹8 Lakhs – ₹20 Lakhs.",
          "Hostel/Living: ₹1.5 Lakhs – ₹2.5 Lakhs per year.",
          "Tools: A good laptop for heavy software like AutoCAD/Revit (₹70k+).",
          "Duration: 3-4 years for B.Tech; 3 years for Diploma; 2 years for M.Tech."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Public: IIT Bombay, IIT Roorkee, NIT Trichy, School of Planning and Architecture (SPA).",
          "Private: NICMAR University (Pune/Hyderabad) — The 'Gold Standard' for Construction Management.",
          "Online/Distance: IGNOU (Diploma), Amity Online (MBA in Construction Management).",
          "Polytechnics: Government polytechnics across all states offer affordable 3-year diploma programs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: PM-USP Central Sector Scheme (based on Class 12 marks).",
          "Institutional: Most NITs/IITs offer tuition fee waivers for students with family income <₹5 Lakhs.",
          "Corporate: L&T Build India Scholarship (Full sponsorship for M.Tech at IITs + job guarantee).",
          "State Schemes: Many states offer scholarships for engineering students from economically weaker sections."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: BLUE,
        content: [
          "CIDC (Construction Industry Development Council): Apex body for Indian construction.",
          "PMP (Project Management Professional): A global gold-standard certification for managers.",
          "RICS (Royal Institution of Chartered Surveyors): Adds massive value for international jobs.",
          "BIM Certification: Autodesk Certified Professional in Revit or other BIM tools.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE2,
        content: [
          "Conventional: Site Engineer, Quantity Surveyor, Structural Engineer, Project Manager.",
          "New-Age: Sustainability Manager (Green Buildings), BIM Manager, Drone Pilot (for site surveying), AI Project Coordinator.",
          "Entrepreneurship: Starting a 'Civil Consultancy' or a construction material startup.",
          "Specializations: Tunneling Engineer, Bridge Engineer, Metro Rail Specialist, Green Building Specialist."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "Location Transfers: You go where the project is. Today you might be in Mumbai, next year in a remote tunnel project in Himachal.",
          "Work-Life Balance: Project deadlines can be stressful, sometimes requiring 10-12 hour days.",
          "Safety Risks: Construction sites are inherently dangerous; strict discipline and safety protocols are required.",
          "Weather Dependency: Rain, extreme heat, or cold can delay projects and disrupt schedules.",
          "Physical Strain: Long hours on-site can lead to fatigue and health issues."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in construction.",
        color: BLUE2,
        content: [
          "AI & Robotics: Robots for bricklaying and drones for progress monitoring will revolutionize construction.",
          "Prefab Construction: Buildings made in a factory and 'assembled' on-site (like Lego!).",
          "Green Materials: Using 'Self-healing concrete' or plastic-waste bricks for sustainable construction.",
          "Real-Time Monitoring: IoT sensors tracking structural health and worker safety in real-time.",
          "Modular Construction: Faster, more efficient building methods reducing project timelines by 30-40%."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Math & Physics: Focus on mechanics and geometry—these are the foundation of construction.",
          "Gaming for Good: Games like SimCity or Minecraft help you understand planning and resource management.",
          "Observation: Visit a nearby house being built. Ask the supervisor why they use 'curing' (watering) on concrete.",
          "Soft Skills: Join the school's organizing committee for events to learn team management.",
          "Technical Skills: Learn basic AutoCAD or Revit through free online tutorials on YouTube."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Construction Personalities",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Sir M. Visvesvaraya: The 'Father of Indian Engineering.' His birthday (Sept 15) is celebrated as Engineer's Day.",
          "E. Sreedharan: Known as the 'Metro Man' for building the Delhi Metro and Konkan Railway—a visionary who transformed urban transport.",
          "A.M. Naik: The legendary former Chairman of L&T who grew a small company into a global construction giant.",
          "V.G. Siddhartha: Though known for Cafe Coffee Day, he played a huge role in infrastructure development in Karnataka.",
          "Hafeez Contractor: An architect-builder who changed the skyline of modern India with iconic structures."
        ]
      }
    ]
  },
  architect: {
    slug: "architect",
    badge: "🏛️ Designing the Future of India for Class 10+",
    heading: "Architect",
    subheading: "Imagine walking through a city. Every home, school, mall, and airport started as an idea in someone's mind. That someone is an Architect. Create spaces that are safe, functional, and beautiful.",
    whyCards: [
      { icon: "Palette", title: "Art Meets Science", description: "Perfect marriage of creativity and engineering—design buildings that are both beautiful and structurally sound.", borderColor: "#10B981" },
      { icon: "Globe", title: "Climate Champion", description: "Design green buildings that use less electricity and water—be a frontline warrior against climate change.", borderColor: "#059669" },
      { icon: "Building2", title: "Smart Cities Boom", description: "India is building smart cities, eco-friendly homes, and massive transport hubs—architects are in high demand.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "$1 Trillion Market", description: "Indian real estate sector expected to reach $1 trillion by 2030—massive growth and opportunities.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5 Years (B.Arch) + 2 Years (M.Arch)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3.5L–₹1Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High Demand, Global Opportunities", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$1T", label: "Real Estate Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "5-7 yrs", label: "Path to Senior Architect", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The perfect marriage of art and science.",
        color: BLUE,
        content: [
          "Architecture is the art and science of designing buildings and spaces. It isn't just about making buildings look 'pretty'; it's about creating spaces that are safe, functional, and comfortable for the people who use them.",
          "The Visionary: An architect thinks about where sunlight will fall, how wind will move through a room to keep it cool, and how a family will feel living inside those walls.",
          "The Problem-Solver: You balance aesthetics with engineering, client budgets with structural requirements, and environmental impact with functionality.",
          "The Climate Champion: Modern architects design 'green buildings' that use less electricity and water—you become a frontline warrior against climate change.",
          "Why It Matters: India is building Smart Cities, eco-friendly homes, and massive transport hubs. With a growing population, we need architects to design vertical cities (skyscrapers) and sustainable villages."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Creative Visionary",
        icon: "Clock",
        description: "Real workflow of an architect.",
        color: BLUE2,
        content: [
          "8:30 AM - The Creative Spark: Start your day not at a desk, but with a sketchbook. You're working on a new design for a community library. You doodle shapes, thinking about how to keep the reading room quiet while letting in enough natural light.",
          "10:30 AM - Tech Time: Move to your computer. Use software like Revit and AutoCAD to turn your doodles into precise 3D models. You're not just drawing lines; you're adding data—what kind of glass will the windows use? How thick should the concrete walls be?",
          "1:30 PM - The Strategy Meeting: Join your Senior Architect and a Structural Engineer. Discuss a problem: the library's roof design is beautiful, but the engineer says it might be too heavy. Brainstorm together, shifting columns and changing materials until the design is both stunning and safe.",
          "3:30 PM - Site Visit: Put on a hard hat and neon vest. You're at a construction site for a residential project. Walk through the dusty floors, checking if builders are following your blueprints exactly. Spot a pipe placed in the wrong spot and coordinate with the contractor to fix it immediately.",
          "6:00 PM - The Client Pitch: Back at the office, prepare a presentation for a client. Use a Virtual Reality (VR) headset to show them what it will feel like to walk through their future home before a single brick is laid.",
          "7:30 PM - Wrapping Up: Head home, tired but inspired. As you drive, look at buildings around you differently, constantly thinking, 'How could I make this better?'"
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Visual-Spatial Intelligence: Can you look at a 2D map and 'see' it as a 3D building in your head?",
          "Creative Problem-Solving: If a client wants a large balcony but has a small budget, can you find a clever way to give them both?",
          "Mathematical Aptitude: You don't need to be a math genius, but you must be comfortable with geometry and basic physics to ensure structures don't collapse.",
          "Patience & Detail-Oriented: Designing a building takes months. One wrong measurement in a drawing can lead to disaster on-site.",
          "Environmental Sensitivity: A 21st-century architect must care about nature and sustainability."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Design Workflow",
        icon: "Briefcase",
        description: "The complete architectural process.",
        color: BLUE2,
        content: [
          "Client Briefing: Understanding what the client needs (a 3-bedroom house, a 500-student school, etc.).",
          "Site Analysis: Studying the land—the soil, the direction of the sun, and local building laws.",
          "Schematic Design: Creating rough sketches and 3D models to show the general 'look and feel.'",
          "Design Development: Adding technical details—plumbing, electrical layouts, and structural supports.",
          "Documentation: Creating the final set of 'blueprints' that the government approves and builders follow.",
          "Construction Supervision: Visiting the site regularly to ensure the vision becomes a reality."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Continue to Class 11 & 12 (Science Stream with Physics, Chemistry, Math). OR enroll in a 3-year Diploma in Architecture Assistantship.",
          "Entrance Exams: Appear for NATA (National Aptitude Test in Architecture) or JEE Main Paper 2.",
          "Undergraduate: Complete a 5-year Bachelor of Architecture (B.Arch) degree. For diploma holders: secure lateral entry into the 2nd year of B.Arch.",
          "Post-Graduation (Optional): Pursue 2-year M.Arch in Urban Design, Landscape, or Sustainability.",
          "Final Step: Register with the Council of Architecture (COA) to get your license to practice.",
          "Note: For IITs, you must clear JEE Main, JEE Advanced, and the Architecture Aptitude Test (AAT)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Entry-Level: ₹3.5 Lakhs – ₹6 Lakhs annually.",
          "Mid-Level (5–10 years): ₹8 Lakhs – ₹15 Lakhs annually.",
          "Senior/Associate (10+ years): ₹18 Lakhs – ₹35 Lakhs+ annually.",
          "Principal Architect/Partner: ₹50 Lakhs – ₹1 Crore+ (Profit sharing in firms).",
          "Metro vs. Tier-2/3: Metros (Delhi, Mumbai, Bengaluru) offer higher starting salaries but higher cost of living. Tier-2/3 (Indore, Jaipur, Kochi) have 15-20% lower salaries but rising quickly due to Smart City projects.",
          "Growth Trajectory: Typically takes 5–7 years to move from Junior Architect to Senior Architect/Project Manager role."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and opportunities.",
        color: BLUE,
        content: [
          "Industries: Private Architecture Firms, Real Estate Developers (DLF, Godrej), Government Bodies (CPWD, PWD, ISRO, Metro Rail), and Interior Design Firms.",
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Pune, and Ahmedabad.",
          "Remote Work: While site visits are essential, 'BIM Modeling' and '3D Visualization' roles offer high remote work potential.",
          "International: Indian B.Arch degrees are respected globally. Many architects work for global firms in Dubai, Singapore, and the UK."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: BLUE2,
        content: [
          "Government (SPA, NIT, IIT): ₹2.5 Lakh – ₹6 Lakh (Total 5 years).",
          "Top Private (CEPT, Manipal): ₹12 Lakh – ₹25 Lakh (Total 5 years).",
          "Hostel/Living: ₹15k–₹25k/month in metros.",
          "Tools: High-end Laptop (₹80k+), Drafting tools (₹10k).",
          "Duration: 5 years for B.Arch; 3 years for Diploma; 2 years for M.Arch."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "North: School of Planning and Architecture (SPA) Delhi; IIT Roorkee; Jamia Millia Islamia.",
          "South: NIT Calicut; SPA Vijayawada; Manipal School of Architecture.",
          "West: CEPT University (Ahmedabad); Sir J.J. College of Architecture (Mumbai).",
          "East: IIT Kharagpur; IIEST Shibpur (West Bengal).",
          "Northeast: NIT Hamirpur (North); National Institute of Technology, Silchar."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: AICTE Pragati Scholarship (for girls); Merit-cum-Means Scholarship for Minorities (NSP).",
          "State: Post-Matric Scholarships provided by various state governments (UP, Maharashtra, etc.).",
          "Private: Mohan T. Advani Centennial Scholarship (up to ₹1 Lakh per year); Aditya Birla Group Scholarship.",
          "Institutional: Most government colleges offer fee waivers for economically weaker sections."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: BLUE2,
        content: [
          "Council of Architecture (COA): The mandatory licensing body in India.",
          "Indian Institute of Architects (IIA): The national body for professional networking.",
          "LEED Certification: Highly recommended for those interested in 'Green Building' design.",
          "GRIHA Certification: Green Rating for Integrated Habitat Assessment—India's own green building standard.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE,
        content: [
          "Conventional: Residential Architect, Commercial Architect, Urban Planner.",
          "New-Age: Sustainable Design Consultant, BIM Specialist, Computational Designer (using AI to generate forms), VR/AR Visualizer.",
          "Freelancing: Starting your own studio, independent Interior Design, or Architectural Photography.",
          "Specializations: Heritage Conservation Architect, Landscape Architect, Industrial Architect, Healthcare Architect."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "Long Hours: Especially during 'jury' (college exams) and project deadlines in the office.",
          "Slow Start: Entry-level salaries can be lower compared to IT or Finance.",
          "Coordination Stress: You have to manage difficult clients, contractors, and local authorities.",
          "Perfectionism Pressure: The pursuit of the 'perfect design' can lead to burnout.",
          "Budget Constraints: Balancing creative vision with client budgets is a constant challenge."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in architecture.",
        color: BLUE2,
        content: [
          "AI in Design: AI will help architects quickly calculate energy efficiency and generate 100s of design options in seconds.",
          "3D Printed Buildings: Buildings will be 'printed' using giant robotic arms, making construction faster and cheaper.",
          "Circular Architecture: Using recycled materials like plastic waste or old shipping containers to build homes.",
          "Biophilic Design: Integrating nature into buildings—living walls, green roofs, and natural light optimization.",
          "Adaptive Reuse: Converting old buildings into new purposes rather than demolishing them—sustainable and creative."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Freehand Sketching: Start a 'Visual Journal'—draw buildings you see around you.",
          "Software: Try free versions of Sketchup or Tinkercad.",
          "Competitions: Participate in NASA (National Association of Students of Architecture) school-level workshops or art competitions.",
          "Observation: Visit local historical monuments; try to understand how they stay cool without AC.",
          "Design Thinking: Redesign your room or school spaces—think about functionality and aesthetics."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Architects",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "B.V. Doshi: India's first Pritzker Prize (the 'Nobel' of Architecture) winner. He designed IIM Bangalore.",
          "Charles Correa: The man who defined modern Indian architecture; designer of the Jawahar Kala Kendra in Jaipur.",
          "Hafeez Contractor: Famous for his skyscrapers and commercial designs that shaped modern Mumbai.",
          "Sheila Sri Prakash: India's first woman to start her own architectural firm; a pioneer in sustainable urban design.",
          "Anupama Kundoo: Known for using traditional Indian crafts and eco-friendly materials to build low-cost, beautiful homes."
        ]
      }
    ]
  },
  maintenance_and_operation_management: {
    slug: "maintenance_and_operation_management",
    badge: "⚙️ The Guardians of Industry for Class 10+",
    heading: "Maintenance & Operation Management",
    subheading: "If an architect is the brain and a construction engineer is the muscle, M&O professionals are the 'life support system.' Keep the world's machines, buildings, and infrastructure running at peak efficiency.",
    whyCards: [
      { icon: "Zap", title: "Zero Downtime Mission", description: "Prevent breakdowns before they happen using AI and predictive analytics—every hour saved is crores earned.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "12% Hiring Growth", description: "Operations segment expected to see 12% year-on-year hiring growth until 2030 as India becomes a manufacturing hub.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Demand", description: "High demand in Germany, Singapore, and Middle East for specialized plant managers and operations experts.", borderColor: "#3B82F6" },
      { icon: "Briefcase", title: "Leadership Fast-Track", description: "Move from technician to Plant Head or COO—operations is a direct path to C-suite roles.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (Degree) or 3 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4.5L–₹1.2Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "12% CAGR, High Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "12%", label: "Annual Hiring Growth Until 2030", gradient: "from-green-500 to-green-600" },
      { value: "₹1.2Cr+", label: "COO Salary Potential", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The life support system of industry.",
        color: BLUE,
        content: [
          "Maintenance and Operation Management (M&O) is the career dedicated to ensuring that physical assets—machines, buildings, and technology—run at peak efficiency, safely, and without breaking down.",
          "The Life Support System: If an architect is the brain and a construction engineer is the muscle, M&O professionals are the 'life support system' that keeps everything functioning.",
          "Predictive Experts: Modern M&O professionals use data, AI, and engineering skills to predict problems before they happen—not just fix them after.",
          "The Guardians: In a massive airport, high-speed metro line, or chocolate factory, M&O professionals ensure zero downtime. A single hour of shutdown can cost crores of rupees.",
          "Why It Matters: As India builds world-class infrastructure and becomes a global manufacturing hub, we can't afford 'downtime.' M&O professionals are the experts who keep the nation's productivity engine running."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Operations Guardian",
        icon: "Clock",
        description: "Real workflow of an M&O professional.",
        color: BLUE2,
        content: [
          "8:00 AM - The Morning Huddle: Start your day by reviewing the 'night shift' reports. Check a digital dashboard showing how much electricity the solar panels produced overnight. Everything looks green, but a sensor on 'Block C' is reporting a slight temperature spike.",
          "10:30 AM - Predictive Analysis: Use an AI-powered software tool. It tells you that the cooling fan in Block C is likely to fail in the next 48 hours. Create a digital 'Work Order' and assign a technician to replace the fan during low-demand afternoon hours. This is Predictive Maintenance—solving a problem before it even exists.",
          "1:00 PM - The Floor Walk: Put on safety gear and walk through the facility. Don't just look at machines; talk to your team. Notice a technician struggling with a heavy tool and make a note to order an ergonomic lift. In M&O, managing people is just as important as managing machines.",
          "3:30 PM - The Efficiency Meeting: Meet with Finance and Sustainability teams. Look for ways to reduce water usage during panel cleaning. Propose a new robotic dry-cleaning system researched. Explain how the initial cost will be recovered in six months through water savings.",
          "6:00 PM - Wrapping Up: Check the schedule for tomorrow's safety drill. Ensure all emergency protocols are updated. As you drive home, see the lights of the city flickering on, knowing your plant helped keep them glowing."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Analytical Thinking: You love looking at charts and data to find 'patterns' and anomalies.",
          "The 'Problem-Solver' Mindset: You don't panic when things break; you immediately start thinking of the fastest way to fix them.",
          "Safety-First Attitude: You have a natural respect for rules and protocols—safety is non-negotiable.",
          "Communication Skills: You can explain technical machine problems to a non-technical boss or team member.",
          "Tech-Savvy: You are comfortable using apps and software to track physical objects and monitor systems.",
          "DIY Inclination: Do you like taking things apart to see how they work? Are you the one who keeps gadgets in perfect condition?"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete M&O cycle.",
        color: BLUE2,
        content: [
          "Asset Tracking: Knowing exactly what equipment the company owns and where it is located.",
          "Scheduling: Deciding when each machine needs a 'health checkup' (Preventive Maintenance).",
          "Real-Time Monitoring: Using sensors (Internet of Things) to watch machines 24/7.",
          "Resource Management: Ensuring the right spare parts and tools are always in stock.",
          "Compliance: Ensuring the facility follows all Indian government laws regarding environment and safety.",
          "Continuous Improvement: Using data to optimize operations and reduce costs."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Take a 3-Year Diploma in Engineering (Mechanical/Electrical/Production) from a Polytechnic. Result: Junior Maintenance Engineer, Site Supervisor.",
          "After Class 12 (Science): Pursue 4-Year B.Tech/B.E. (Civil/Mechanical/Electrical/Industrial) + Optional PGP in Operations. Result: Graduate Engineer Trainee (GET), Operations Executive.",
          "After Class 12 (Commerce/Arts): Take 3-Year BBA/B.Com → MBA in Operations Management. Result: Facilities Manager, Operations Planner, Supply Chain Executive.",
          "After Graduation: Lateral Entry—Engineers switching to management via PGDM in Operations or specialized certifications. Result: Operations Manager, Plant Head, Quality Manager."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Entry-Level: ₹4.5 Lakhs – ₹8 Lakhs annually.",
          "Mid-Level (7-12 years): ₹15 Lakhs – ₹28 Lakhs annually.",
          "Senior/Leadership: ₹35 Lakhs – ₹70 Lakhs+ annually.",
          "CXO (Chief Operating Officer): ₹1.2 Crore+ annually.",
          "Growth: The 'Operations' segment is expected to see 12% hiring growth year-on-year until 2030.",
          "Metro vs. Tier-2: While Metros offer higher base pay, Industrial Hubs like Pune, Nashik, Hosur, and Sanand (Gujarat) are the real 'hotspots' for this career."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and opportunities.",
        color: BLUE,
        content: [
          "Top Sectors: E-commerce (Amazon/Flipkart warehouses), Renewable Energy, Metro Rail, Pharmaceuticals, and Data Centers.",
          "Top Cities: Bengaluru (Tech Ops), Pune (Manufacturing), Chennai (Automobile), Gurgaon (Logistics), and Hyderabad (Pharma).",
          "International: High demand in Germany, Singapore, and the Middle East for specialized plant managers.",
          "Emerging Roles: Sustainability Manager (Carbon footprint reduction), Smart Factory Consultant, Reliability Engineer (Data-driven maintenance)."
        ]
      },
      
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: NIT Trichy (MBA Operations), IIT Delhi (DMS), IIM Mumbai (formerly NITIE—the best for Operations).",
          "Private: SIBM Pune, SPJIMR Mumbai, NMIMS.",
          "North: IIT Kanpur, MDI Gurgaon.",
          "South: BIM Trichy, NIT Warangal.",
          "East: IIM Calcutta, IIT Kharagpur.",
          "West: CEPT University (Facilities Management)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "AICTE Pragati: Up to ₹50,000/year for girls in technical degrees.",
          "Post-Matric Scholarships: Available through the National Scholarship Portal (NSP) for various categories.",
          "Aditya Birla Group Scholarship: Aimed at top-ranking students in IIMs and IITs.",
          "Institutional: Most government colleges offer fee waivers for economically weaker sections."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: BLUE2,
        content: [
          "SMRP (Society for Maintenance & Reliability Professionals): Offers the CMRP certification (Gold standard).",
          "Lean Six Sigma (Green/Black Belt): Essential for anyone wanting to prove they can reduce waste and improve efficiency.",
          "PMP (Project Management Professional): Great for large-scale operation shutdowns and upgrades.",
          "ISO 9001/14001 Certifications: Quality and Environmental Management standards.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE,
        content: [
          "Conventional: Plant Manager, Maintenance Engineer, Quality Control Officer, Facilities Manager.",
          "New-Age: Sustainability Manager (Carbon footprint reduction), Smart Factory Consultant, Reliability Engineer (Data-driven maintenance), Digital Twin Specialist.",
          "Freelancing/Entrepreneurship: Setting up an O&M consultancy for MSMEs (Small businesses) or a specialized technical audit firm.",
          "Specializations: Energy Manager, Safety Manager, Supply Chain Operations, Warehouse Operations Manager."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "24/7 Responsibility: Machines don't sleep. You may occasionally get a call at 2 AM if a critical system fails.",
          "High Pressure: Every minute of a breakdown is lost money, which can make the environment intense.",
          "Continuous Learning: Technology changes fast; you must constantly learn about new sensors, AI, and robotics.",
          "Physical Demands: Site visits and inspections can be physically demanding and sometimes in harsh conditions.",
          "Accountability: You are responsible for safety, efficiency, and compliance—mistakes can have serious consequences."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in M&O.",
        color: BLUE2,
        content: [
          "The Rise of AI: Maintenance will become 'Self-Healing.' AI will automatically adjust machine speeds to prevent wear and tear.",
          "Digital Twins: Every factory will have a 'virtual copy' (Digital Twin) where managers can test changes before doing them in real life.",
          "Green Operations: The focus will shift to 'Zero Waste' and 'Carbon Neutral' maintenance.",
          "IoT Everywhere: Every machine will be connected and communicating real-time data to central dashboards.",
          "Autonomous Maintenance: Robots will perform routine maintenance tasks, freeing humans for strategic decisions."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Excel/Spreadsheets: Learn how to organize data. It's the secret weapon of every Operations Manager.",
          "Coding Basics: Understanding logic (Python) helps you interact with the software that runs modern factories.",
          "Read Up: Follow news about 'Industry 4.0' or 'Smart Manufacturing' on platforms like LinkedIn.",
          "DIY Projects: Help fix things around the house (with supervision!). Understand the difference between a bolt and a screw.",
          "Observation: Visit a local factory or power plant. Ask questions about how they maintain equipment."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian M&O Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "E. Sreedharan: While known as the 'Metro Man,' his real genius lay in the Operations and Maintenance protocols that keep the Delhi Metro running with 99.9% punctuality.",
          "T.S. Mukunthamani: A veteran with over 42 years of experience in Power Plant O&M, showing how deep technical expertise leads to leadership.",
          "Vipul Vij: A recognized leader in operations management, currently driving excellence in large-scale industrial manufacturing.",
          "Munish Kumar: CEO of Facility Management at Quess Corp, highlighting how O&M is a massive service industry.",
          "Rajesh Masrani: Operations Director at major renewable energy firms, pioneering predictive maintenance in India's green energy sector."
        ]
      }
    ]
  },
  urban_planning_and_management: {
    slug: "urban_planning_and_management",
    badge: "🏙️ The City Surgeons for Class 10+",
    heading: "Urban Planning & Management",
    subheading: "Design entire neighborhoods, cities, and regions. Diagnose urban problems and perform 'surgery' through better transport, waste management, and green spaces.",
    whyCards: [
      { icon: "Map", title: "Massive Shortage", description: "India has only 1 planner per 4,00,000 citizens vs. ideal 1 per 10,000—huge demand and job security.", borderColor: "#10B981" },
      { icon: "Globe", title: "100+ Smart Cities", description: "India is building 100+ Smart Cities and renovating 500+ existing ones under AMRUT mission.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "10-15% Growth", description: "Annual salary increases as India invests massively in urban infrastructure and sustainability.", borderColor: "#3B82F6" },
      { icon: "Briefcase", title: "Global Opportunities", description: "World Bank, UN-Habitat, and ADB frequently hire Indian planners for developing nations.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Plan) or 2 Years (M.Plan)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4.5L–₹70L+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "10-15% CAGR, Critical Shortage", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "100+", label: "Smart Cities Being Built", gradient: "from-green-500 to-green-600" },
      { value: "1:4L", label: "Current Planner-to-Citizen Ratio", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Designing cities and regions for sustainable growth.",
        color: BLUE,
        content: [
          "Urban Planning is the art and science of designing cities, neighborhoods, and regions. If an Architect designs a building, an Urban Planner designs the entire neighborhood, city, or even a whole region.",
          "The City Surgeons: Think of them as 'City Surgeons.' They diagnose problems like traffic congestion, pollution, and housing shortages, and then perform 'surgery' by designing better public transport, waste management systems, and green spaces.",
          "The Big Picture Thinkers: Urban Planners work at the macro level—thinking about how millions of people will live, work, and move in a city.",
          "Sustainability Focus: Modern planners ensure that as India grows, it grows sustainably—meaning we build for today without destroying the environment for tomorrow.",
          "Why It Matters: We are in the middle of the largest urban migration in human history. Millions of people are moving to cities. Without skilled planners, our cities would collapse under the pressure."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The City Architect",
        icon: "Clock",
        description: "Real workflow of an urban planner.",
        color: BLUE2,
        content: [
          "9:00 AM - The Bird's Eye View: Start your day by opening GIS (Geographic Information System) software. On your screen is a digital map of a proposed 'Smart District.' Analyze data layers showing groundwater levels and existing traffic flow to decide where the new primary school should be located.",
          "11:00 AM - The Public Hearing: Head to a community center. Present a plan for a new 'Cyclists Only' lane to local residents. Some are excited; others are worried about parking. Listen, take notes, and explain how the lane will actually reduce traffic for everyone. Being a good listener is as important as being a good designer.",
          "1:30 PM - The Multi-Department Sync: Quick lunch during a meeting with Civil Engineers, Environmental Scientists, and Government Officials. Discuss a 'Sponge City' initiative—using special pavements and parks to soak up rainwater and prevent monsoon flooding.",
          "3:30 PM - Site Inspection: Leave the office to visit an old industrial area that the city wants to turn into a 'Startup Hub' with affordable housing. Walk through the site, checking if old warehouses can be repurposed instead of torn down.",
          "6:00 PM - The Policy Draft: Back at your desk, work on a policy document regarding 'Transit-Oriented Development.' Write rules that will encourage builders to create tall buildings near Metro stations so people don't have to use cars.",
          "7:30 PM - Heading Home: Take the Metro home. Look out the window—you don't just see buildings; you see a complex, living puzzle that you are helping to solve."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Big Picture Thinkers: Do you love maps? If you can spend hours looking at Google Earth, you have the visual foundation.",
          "Social Advocate: Do you care about things like poverty, climate change, and justice? Planners design for everyone, not just the rich.",
          "Patient & Persistent: Cities aren't built in a day. You need the stamina to see projects through years of planning and construction.",
          "Analytical Skills: Can you look at a spreadsheet of population data and 'see' the need for a new hospital?",
          "Negotiation Skills: You will often be the middleman between the government, private builders, and angry citizens. You need to be a diplomat."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete urban planning process.",
        color: BLUE2,
        content: [
          "Data Collection: Gathering information on population, land use, and transport patterns.",
          "Analysis: Using software to predict future needs (e.g., 'How many people will live here in 2040?').",
          "Plan Formulation: Drafting the 'Master Plan' or 'Zonal Plan' for the city or region.",
          "Public Consultation: Presenting the plan to the people and revising it based on feedback.",
          "Implementation: Working with engineers and builders to ensure the plan is followed.",
          "Monitoring: Checking if the plan worked or if it needs adjustments."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Focus on Science (PCM) or Humanities (with Geography/Math). No direct diplomas in Urban Planning at this stage, but Diploma in Civil Engineering or Architecture Assistantship can be stepping stones.",
          "After Class 12 (Science): The most direct route. Appear for JEE Main (Paper 2B) to get into a Bachelor of Planning (B.Plan) program.",
          "After Class 12 (Humanities/Commerce with Math): Some universities allow entry into B.Plan if you have Mathematics as a core subject.",
          "After Graduation (B.Arch/B.E. Civil): Take the GATE exam (Architecture and Planning paper) to enter a 2-year M.Plan (Master of Planning).",
          "After Graduation (Geography/Economics/Sociology): Many top institutes like SPA allow students from these backgrounds into M.Plan through their own entrance exams."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Entry-Level (Junior Planner): ₹4.5 Lakhs – ₹8 Lakhs annually.",
          "Mid-Level (Associate/Senior): ₹12 Lakhs – ₹22 Lakhs annually.",
          "Leadership (Director/Chief Planner): ₹30 Lakhs – ₹55 Lakhs annually.",
          "CXO/Private Consultant: ₹70 Lakhs+ (For partners in international firms).",
          "Metro vs. Tier-2: Metros offer 20-25% higher pay, but Tier-2 cities are where the most 'Smart City' hiring is happening currently.",
          "Growth: Expect 10-15% annual salary increase as India aims to build 100+ Smart Cities and renovate 500+ existing ones under AMRUT mission."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "Briefcase",
        description: "Industries, cities, and opportunities.",
        color: BLUE,
        content: [
          "Public Sector: NITI Aayog, Town and Country Planning Organizations (TCPO), Development Authorities (DDA, BDA, MMRDA), Municipal Corporations, and Smart City SPVs.",
          "Private Sector: Real estate giants (DLF, Tata Housing), Infrastructure firms (L&T), and Global Consultancies (PwC, KPMG, JLL, Knight Frank).",
          "International: World Bank, UN-Habitat, and ADB frequently hire Indian planners for developing nations.",
          "Remote Potential: Moderate. Data analysis and GIS mapping can be remote, but community meetings and site visits are essential."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: BLUE2,
        content: [
          "Government (SPA, NIT): ₹2 Lakh – ₹6 Lakh (Total for B.Plan, 4 years).",
          "Private (Amity, Anant): ₹8 Lakh – ₹15 Lakh (Total for B.Plan, 4 years).",
          "Master's (M.Plan): ₹1 Lakh – ₹4 Lakh (Government), 2 years.",
          "Hostel/Living: ₹15,000 – ₹25,000 per month in major cities.",
          "Tools: A laptop capable of running GIS and CAD software (₹75k+)."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "North: School of Planning and Architecture (SPA) Delhi; Amity University, Noida.",
          "South: NIT Calicut; School of Planning and Architecture, Vijayawada; Anna University, Chennai.",
          "West: CEPT University, Ahmedabad (Ranked #1 for Planning); Maulana Azad NIT, Bhopal.",
          "East/Northeast: IIT Kharagpur (M.Plan); Jadavpur University; Mizoram University (B.Plan)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "GATE Stipend: ₹12,400/month for M.Plan students in government colleges.",
          "AICTE Pragati: For girl students in technical education.",
          "NSP (National Scholarship Portal): Various merit-cum-means scholarships for minority and SC/ST students.",
          "Institutional: CEPT and SPAs offer significant fee waivers based on family income."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials that boost your resume.",
        color: BLUE2,
        content: [
          "ITPI (Institute of Town Planners, India): The primary body. Becoming an Associate Member of ITPI is essential for high-level government jobs.",
          "GIS Certifications: Short courses in ArcGIS or QGIS add massive value to your profile.",
          "GATE Qualification: Essential for M.Plan admission and government job eligibility.",
          "Environmental Impact Assessment (EIA) Certification: Highly valued for sustainability-focused roles.",
          "These certifications significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE,
        content: [
          "Conventional: Town Planner, Transport Planner, Housing Policy Analyst, Zoning Officer.",
          "New-Age: Smart City Manager, Climate Resilient Specialist, Urban Data Scientist (using Big Data to track city movement), 15-Minute City Designer.",
          "Freelancing: Independent GIS Consultant, Environmental Impact Assessment (EIA) specialist, Urban Designer, or Urban Researcher.",
          "Specializations: Transit-Oriented Development Specialist, Green Infrastructure Planner, Heritage Conservation Planner."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "Political Pressure: Planners often suggest what's best for the city, but politicians might push for what's popular. You need a 'thick skin.'",
          "Slow Progress: It can take 10 years for a park or highway you designed to actually be built.",
          "Bureaucracy: Dealing with government paperwork and multiple departments can be frustratingly slow.",
          "Conflicting Interests: Balancing the needs of residents, businesses, and environmental concerns is challenging.",
          "Implementation Gaps: Your perfect plan might be compromised during execution due to budget or political constraints."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in urban planning.",
        color: BLUE2,
        content: [
          "Digital Twins: Planners will use 3D virtual copies of cities to test how a new skyscraper affects wind or shadows before building it.",
          "15-Minute Cities: The trend of designing neighborhoods where everything (work, school, groceries) is within a 15-minute walk.",
          "EV Infrastructure: Designing cities with charging stations integrated into every street.",
          "Climate Resilience: Planning for extreme weather events and rising temperatures—'Climate-Adaptive Cities.'",
          "Circular Economy: Designing waste management systems where nothing is wasted—everything is recycled or repurposed."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Geography & Math: These are your foundation. Focus on maps, demographics, and statistics.",
          "Photography/Sketching: Take photos of 'problems' in your city—a broken sidewalk or a messy market. Sketch how you would fix it.",
          "Learn Google Earth Pro: It's free. Try to map your own neighborhood and identify issues.",
          "Volunteer: Join a local 'Clean City' or 'Green Club' to understand community dynamics.",
          "Read Urban News: Follow stories about Smart Cities, metro projects, and urban development in your region."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Urban Planners",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Dr. Bimal Patel: The brain behind the Sabarmati Riverfront and the Central Vista Project in Delhi.",
          "Christopher Benninger: A pioneer in sustainable urbanism in India; founder of the School of Planning at CEPT.",
          "Anita Patil-Deshmukh: A physician turned urban social researcher working on improving life in Mumbai's slums (Pukar).",
          "Vidyadhar Phatak: A veteran planner known for his work with MMRDA in shaping modern Mumbai.",
          "Reema Nanavaty: While known for SEWA, her work in rural and urban development planning has empowered millions."
        ]
      }
    ]
  }
};
