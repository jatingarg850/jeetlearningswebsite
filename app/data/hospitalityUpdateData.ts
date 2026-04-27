import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const hospitalityUpdateData: Record<string, CareerPageData> = {
  airhostess: {
    slug: "airhostess",
    badge: "✈️ The Sky's Professional for Class 10+",
    heading: "Air Hostess (Cabin Crew)",
    subheading: "Safety and Service at 35,000 feet. Be part of India's aviation boom—the third-largest domestic aviation market in the world. Travel the globe, meet diverse people, and build a career that takes you places.",
    whyCards: [
      { icon: "Plane", title: "India's Aviation Boom", description: "India is the third-largest domestic aviation market. Hundreds of new aircraft being ordered by airlines like Air India and IndiGo.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "Middle-Eastern carriers (Emirates, Qatar Airways) recruit from India, offering tax-free salaries of ₹1.5–3L per month.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "11.25% Industry Growth", description: "Aviation industry expected to grow at CAGR of 11.25% through 2030, creating thousands of cabin crew positions.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Glamour & Stability", description: "Combine travel, international exposure, and job security with competitive salaries and benefits.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Months to 1 Year Training", color: "bg-green-100 text-green-700" },
      { label: "Entry Age", detail: "Minimum 18 Years", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹35K–₹3L+ per month", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "11.25%", label: "Industry CAGR through 2030", gradient: "from-green-500 to-green-600" },
      { value: "₹3L+", label: "International Salary (Tax-Free)", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Safety and Service at 35,000 feet—the heart of aviation.",
        color: BLUE,
        content: [
          "Air Hostess Definition: Often called 'Cabin Crew' or 'Flight Attendants,' air hostesses are trained professionals responsible for passenger safety and comfort during flights.",
          "Primary Role: While many focus on the glamour—sharp uniforms, travel, five-star hotels—the primary reason an air hostess is on a plane is to ensure every passenger stays safe.",
          "What They Do: Safety Leaders (handle emergencies from medical crises to technical evacuations), Hospitality Experts (manage passenger experience, comfort, and satisfaction), Problem Solvers (calm nervous flyers, handle difficult situations).",
          "Why It Matters: India is currently the third-largest domestic aviation market in the world. With hundreds of new aircraft being ordered, demand for skilled cabin crew is at an all-time high.",
          "The Scope: Work for domestic airlines (IndiGo, Air India, SpiceJet), international carriers (Emirates, Qatar Airways), private charter companies, and corporate aviation.",
          "The Impact: You are a bridge between India and the world, facilitating business, tourism, and family reunions while ensuring safety and comfort."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Priya, Cabin Crew",
        icon: "Clock",
        description: "Real workflow of an air hostess on a Delhi-Dubai flight.",
        color: BLUE2,
        content: [
          "4:30 AM - The Wake-up Call: While the world sleeps, the alarm rings. Grooming is the first task. Hair in a perfect bun, uniform crisp, makeup understated but professional. This is a professional requirement.",
          "6:00 AM - The Briefing: At the airport's crew lounge, meet your team. The Captain and Lead Cabin Crew conduct a 'pre-flight briefing.' Discuss weather, flight duration, and special passengers (unaccompanied minors, people with disabilities). You're grilled on safety procedures—if you don't know the answer, you don't fly.",
          "7:00 AM - Pre-Flight Checks: Board the aircraft before any passenger. Check your assigned station. Are oxygen masks working? Are there enough life vests? Is catering loaded correctly?",
          "8:00 AM - The 'Showtime': Passengers start boarding. Stand at the door with a warm smile, greeting each one. For the next few hours, you're a multitasker: helping with luggage, demonstrating safety drills, serving meals.",
          "1:30 PM - The Layover: After landing in Dubai, complete post-flight reports. The airline's shuttle takes you to a hotel. You have 24 hours to explore a new city, try local food, or catch up on sleep before the return leg.",
          "10:00 PM - Rest: The schedule is irregular. Some days you work nights; some days early mornings. It's a 'lifestyle,' not just a job."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Aviation DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Extroverted (genuinely enjoy talking to strangers), Calm Under Pressure (stay cool when things go wrong), Punctual (in aviation, 5 minutes late is 1 hour late), Empathetic (understand passenger discomfort before they speak), Conflict Resolution (handle grumpy passengers with grace).",
          "Hard Skills/Requirements: Communication (proficiency in English and Hindi mandatory), Physical Fitness (reach overhead bins, stand for long hours), Vision (6/6 vision or corrected with contact lenses), Height (Min 155cm for females, 170cm for males), BMI (within airline standards).",
          "Soft Skills: Customer Service Excellence, Problem-Solving, Teamwork, Adaptability, Cultural Sensitivity.",
          "The Self-Check: Do you love meeting new people? Can you stay calm in emergencies? Are you punctual and detail-oriented? If yes, you have the Aviation DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Standard Operating Procedures",
        icon: "Briefcase",
        description: "The complete workflow of cabin crew duties.",
        color: BLUE2,
        content: [
          "Preparation: Grooming and reaching the airport 2 hours before departure. Uniform inspection and equipment check.",
          "Safety Drill: Checking emergency equipment and performing the safety demonstration for passengers. This is non-negotiable.",
          "In-flight Service: Managing food, beverages, and duty-free sales. Ensuring passenger comfort throughout the flight.",
          "Security: Monitoring the cabin for suspicious behavior or safety hazards (like smoke in the lavatory). Reporting any concerns to the Captain.",
          "Emergency Response: Being trained to handle medical emergencies, evacuations, and other crisis situations.",
          "De-boarding: Ensuring all passengers exit safely and checking for left-behind items.",
          "Post-Flight: Completing incident reports and preparing the aircraft for the next flight."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Focus on improving English and physical fitness. You cannot join an airline yet (minimum age is 18). Build communication skills and maintain fitness.",
          "After Class 12: Direct Entry—Apply directly to airlines (IndiGo, Air India, SpiceJet) for 'Trainee Cabin Crew' positions. No degree required, but graduation is preferred for international airlines.",
          "After Graduation: Professional Route—Preferred for international airlines. A degree in Hospitality, Tourism, or PR is an advantage. Increases chances of faster promotion.",
          "Training Path: Enroll in a 6-12 month Diploma in Aviation (optional but helpful). Then apply to airlines. Once hired, the airline puts you through 3 months of rigorous DGCA-approved safety training.",
          "Eligibility Checklist: Height (Min 155cm for females, 170cm for males), BMI within standards, 6/6 vision (or corrected), English proficiency, Indian citizenship, valid passport."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Trainee/Junior Cabin Crew, 0-2 years): ₹35,000–₹60,000 per month. Includes basic salary, flight allowance, and meal allowance.",
          "Mid-Level (Senior Cabin Crew, 3–6 years): ₹60,000–₹1,20,000 per month. Increased allowances and potential for international routes.",
          "Senior-Level (Purser/Lead Cabin Crew, 7-10 years): ₹1,20,000–₹2,50,000 per month. Leadership responsibilities and premium routes.",
          "Leadership (In-flight Manager/Supervisor, 10+ years): ₹3,00,000+ per month. Management and training roles.",
          "International Opportunities: Middle-Eastern carriers (Emirates, Qatar Airways) offer tax-free salaries of ₹1.5–3L per month, significantly higher than Indian airlines.",
          "Metro vs. Tier-2: Salaries are standardized by airlines, but those based in metros (Delhi, Mumbai, Bangalore) often get higher 'Base Allowances' to cover living costs.",
          "Growth Trajectory: Trainee → Cabin Crew → Senior Cabin Crew → Flight Purser → In-flight Manager within 8–10 years."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Private Institutes (Frankfinn, Aptech, Universal Aviation Academy): ₹70,000 to ₹2,00,000 for a 1-year diploma.",
          "Government-aided/Low-cost (YWCA, Indira Gandhi Institute of Aeronautics): ₹10,000 to ₹30,000 for 3-12 months.",
          "Duration: 3 months (Crash Course) to 1 year (Diploma).",
          "Hidden Costs: Professional grooming kits (₹5,000-10,000), DGCA Class II Medical check-ups (₹3,000-5,000), interview attire (₹5,000-15,000).",
          "Airline Training: Once hired, airlines provide 3 months of DGCA-approved training at no cost to the candidate.",
          "ROI: With entry-level salaries of ₹35,000-60,000/month, you can recover your investment in 2-4 months."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top training institutes across India.",
        color: BLUE,
        content: [
          "North: New Delhi YMCA (Delhi), Indira Gandhi Institute of Aeronautics (Nagpur/Jaipur), Frankfinn Institute (Delhi, Jaipur).",
          "South: Remo International College (Chennai), Universal Aviation Academy (Chennai), Frankfinn Institute (Bangalore, Hyderabad).",
          "East: Airway India (Kolkata), Frankfinn Institute (Kolkata).",
          "West: Bombay Flying Club (Mumbai), Panache Academy (Ahmedabad), Frankfinn Institute (Mumbai, Pune).",
          "Northeast: Frankfinn Centers (Guwahati, Shillong).",
          "Note: Most institutes offer both classroom training and practical exposure. Choose institutes with DGCA recognition and airline partnerships."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "AASDC Scholarship: The Aviation & Aerospace Skills Development Council offers up to 100% scholarships for deserving candidates.",
          "State Schemes: Many state governments (Odisha, Karnataka, Telangana) offer vocational training grants for SC/ST students interested in aviation.",
          "Institutional Scholarships: Frankfinn and other institutes often offer merit-based fee waivers based on Class 12 marks or entrance exam performance.",
          "Airline Sponsorships: Some airlines sponsor training for candidates who commit to working with them post-training.",
          "Women-Specific Schemes: Various government and private initiatives support women entering aviation careers."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "DGCA Certification: You must hold a valid Cabin Crew SEP (Safety & Emergency Procedures) Card issued after your airline training. This is mandatory to fly.",
          "Medical Certificate: A mandatory 'Class II Medical' certificate from a DGCA-approved doctor is required before you can start flying. Valid for 3 years.",
          "Airline-Specific Training: Each airline provides its own 3-month training program covering aircraft-specific procedures, safety protocols, and service standards.",
          "Professional Bodies: Indian Aviation Crew Association (IACA), International Air Transport Association (IATA).",
          "Continuous Learning: Airlines require annual refresher training and recertification to maintain your flying status."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in aviation careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Domestic Cabin Crew, International Cabin Crew, Flight Purser (Lead), Ground Staff (Check-in, Gate Agent), In-flight Manager.",
          "New-Age Careers: In-flight Social Media Manager (managing airline social media during flights), Aviation Safety Auditor, Digital Guest Experience Designer, Airline Customer Experience Manager.",
          "Entrepreneurship: Grooming & Etiquette Coaching (train future cabin crew), Aviation Recruitment Agency, Travel Vlogging/Influencing (document travel experiences), Hospitality Consulting.",
          "Lateral Moves: Hotel Management, Event Planning, Corporate Hospitality, Tourism Management.",
          "International Roles: Working for international carriers offers higher salaries and global exposure."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of being cabin crew.",
        color: BLUE,
        content: [
          "Health Toll: Irregular sleep patterns, jet lag, and 'Ear Barotrauma' (ear pain due to pressure changes). Long-term health effects from radiation exposure at high altitudes.",
          "Missing Life Events: You will likely work on Diwali, Eid, Christmas, or your best friend's wedding. Family time is sacrificed.",
          "Difficult Passengers: You must stay polite and professional even when being treated unfairly or disrespected by passengers.",
          "Physical Demands: Standing for 8-12 hours, pushing heavy carts, and dealing with turbulence can be physically exhausting.",
          "Irregular Schedule: Your sleep schedule is constantly disrupted. Some months you work nights; some months early mornings.",
          "Safety Risks: While rare, you're trained to handle emergencies. The psychological stress of being responsible for passenger safety is significant.",
          "Limited Career Longevity: Most airlines have age limits (typically 60-65 years). Your career has a defined endpoint.",
          "Appearance Pressure: Airlines have strict grooming standards. Maintaining appearance standards can be stressful and costly."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in aviation careers.",
        color: BLUE2,
        content: [
          "Eco-Aviation: Cabin crew will be trained in sustainability—managing zero-waste flights, reducing plastic, and promoting eco-friendly practices.",
          "Tech-Integration: Instead of paper manifests, you'll use AI-driven tablets to predict passenger preferences, manage special requests, and handle emergencies.",
          "Regional Connectivity: The 'UDAN' scheme is opening jobs in smaller cities like Darbhanga, Jharsuguda, and Nashik, expanding opportunities beyond metro hubs.",
          "Autonomous Aircraft: While pilots may be replaced by automation, cabin crew will remain essential for passenger safety and service.",
          "Wellness Focus: Airlines increasingly focus on crew wellness—better scheduling, mental health support, and fatigue management.",
          "Diversity & Inclusion: Airlines are actively recruiting diverse cabin crew, breaking traditional gender and appearance norms.",
          "Upskilling Opportunities: Cabin crew can transition to management, training, or corporate roles within airlines.",
          "Global Mobility: Increased international collaborations mean more opportunities to work for foreign carriers or on international routes."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Language Skills: Join a debate club. Focus on 'Neutral English' and clear Hindi. Practice public speaking and presentation skills.",
          "Physical Fitness: Take up swimming, yoga, or aerobics. Airlines value stamina and flexibility. Maintain a healthy BMI.",
          "Customer Service: Work part-time at a cafe, retail store, or event venue. Build 'Customer Service' muscle and learn to handle difficult situations.",
          "Grooming & Etiquette: Learn professional grooming standards. Understand dress codes, makeup standards, and professional behavior.",
          "Travel Knowledge: Follow aviation news on FlightGlobal, DGCA updates, and airline announcements. Understand the aviation industry.",
          "Personality Development: Join clubs, participate in events, and develop confidence. Airlines value outgoing, confident personalities.",
          "First Aid Training: Take a basic First Aid course. It's an advantage during airline interviews.",
          "Read & Learn: Follow aviation blogs, watch documentaries about aviation, and read about famous air hostesses.",
          "Volunteer: Volunteer at events, hotels, or tourism centers. Build experience in hospitality and customer service.",
          "Interview Preparation: Practice group discussions, mock interviews, and grooming rounds. Many institutes conduct these during training."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Air Hostesses & Aviation Professionals",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Neerja Bhanot (1963-1986): The heroic Senior Purser who saved 359 lives during a hijacking of Pan Am Flight 73. She was the youngest recipient of the Ashoka Chakra, India's highest peacetime military decoration.",
          "Suneeta Sodhi Kanga: A former Air India hostess who won the Miss World Airline pageant and is now a top grooming expert. She has trained thousands of cabin crew members.",
          "Monika Singh: A prominent cabin crew professional and TEDx speaker who advocates for aviation as a serious career for women. She has worked for multiple international airlines.",
          "Priya Sharma: A senior purser with 20+ years of experience at Air India. Known for her exceptional customer service and leadership in the cabin crew community.",
          "Anjali Verma: An aviation safety trainer and former cabin crew member who now trains new cabin crew on emergency procedures and safety protocols.",
          "Deepika Reddy: A cabin crew member turned aviation consultant who works on improving passenger experience and airline operations.",
          "Kavya Menon: A young cabin crew member and social media influencer who documents her travel experiences and promotes aviation careers to young Indians."
        ]
      }
    ]
  },
  culinary_arts: {
    slug: "culinary_arts",
    badge: "👨‍🍳 The Artist of Flavors for Class 10+",
    heading: "Culinary Arts",
    subheading: "Transform ingredients into art. Lead a kitchen brigade, create unforgettable dining experiences, and take Indian cuisine to the global stage.",
    whyCards: [
      { icon: "Flame", title: "India's Food Boom", description: "Food industry booming from luxury hotels to cloud kitchens. Indian chefs are global icons taking regional flavors worldwide.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "$125B Market by 2030", description: "Indian food service market projected to reach $125 Billion by 2030, growing at 10-12% CAGR.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Recognition", description: "Indian chefs now leading Michelin-star restaurants in London, New York, and Dubai. Vikas Khanna at the White House.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Creative & Leadership", description: "Combine artistic creativity with business management. Lead teams, innovate menus, and build culinary empires.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "1-3 Years (Diploma to Degree)", color: "bg-green-100 text-green-700" },
      { label: "Entry Age", detail: "After Class 10 or 12", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹2.5L–₹80L+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$125B", label: "Food Service Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "10-12%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of professional food preparation and presentation.",
        color: BLUE,
        content: [
          "Culinary Arts Definition: The professional practice of preparing, cooking, and presenting food. It's much more than following a recipe—it's art, science, and storytelling combined.",
          "The Chef's Role: An artist who uses flavors instead of paint, and a scientist who understands how heat changes ingredient structure. Creative Design (developing menus, plating food as art), Kitchen Management (leading a brigade, managing budgets, ordering supplies), Food Science (understanding nutrition, hygiene, chemical reactions).",
          "Why It Matters: India's food industry is booming. From high-end luxury hotels to cloud kitchens delivering to your doorstep, people crave new experiences. Indian chefs are now global icons.",
          "The Scope: Work in 5-star hotels, cruise liners, airlines, corporate catering, cloud kitchens, private dining, and food media.",
          "The Impact: You create memories through food. Every plate that leaves your kitchen tells a story and creates an experience that guests remember for years."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Heat of the Kitchen",
        icon: "Clock",
        description: "Real workflow of a professional chef.",
        color: BLUE2,
        content: [
          "9:00 AM - The Calm Before the Storm: Arrive at the hotel. While guests finish breakfast, plan for dinner. First task: Mise en place (everything in its place). Check freshness of fish arrived at dawn and ensure stocks have been simmering overnight.",
          "11:30 AM - The Lunch Rush: Ticket machine starts clicking. 'Two Grilled Salmon, one Paneer Tikka, no onion!' shouts the Sous Chef. You're at your station. Heat from stove is intense, pace is frantic. Exactly 12 minutes to get that salmon perfect.",
          "3:00 PM - Tasting and Training: Lunch is over. Team gathers. Taste a new sauce you've been developing—fusion of Tamarind and Balsamic vinegar. Train a junior intern on how to debone a chicken properly. Time for learning and experimentation.",
          "7:00 PM - The Grand Performance: Dinner service is the main event. Restaurant is full. Soft music in dining room, but kitchen is a 'war zone' of discipline. Every plate inspected. Spot a smudge of sauce—wipe it clean before it goes out.",
          "11:00 PM - The Wrap-Up: Last guest has left. Kitchen must be scrubbed until it shines. Hygiene is the foundation. Look at empty, clean kitchen with pride. Exhausted but adrenaline of successful service keeps you smiling."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Chef DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Resilience (stand for 10 hours and stay positive), Creativity (experiment with different ingredients), Discipline (follow strict rules for safety and quality), Passion (love for food and cooking).",
          "Soft Skills: Teamwork (kitchen is a team sport), Time Management (cook four dishes so they all finish at same time), Leadership (manage kitchen brigade), Communication (coordinate with front-of-house staff).",
          "Hard Skills: Knife Skills (chop, dice, mince with precision), Palate Development (train tongue to identify subtle flavors), Food Safety Knowledge (FSSAI guidelines), Cooking Techniques (sautéing, braising, grilling, baking).",
          "The Self-Check: Do you love experimenting with flavors? Can you stay calm under pressure? Do you have the stamina to work long hours? If yes, you have the Chef DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Kitchen Brigade System",
        icon: "Briefcase",
        description: "The complete workflow of a professional kitchen.",
        color: BLUE2,
        content: [
          "Sourcing: Selecting the best ingredients from vendors. Building relationships with suppliers for quality and consistency.",
          "Prep Work: Washing, cutting, and marinating (Mise en place). Ensuring everything is ready before service begins.",
          "Service: The actual cooking and plating during restaurant hours. Managing multiple orders simultaneously.",
          "Inventory Control: Making sure food doesn't go to waste and costs stay low. Tracking usage and ordering efficiently.",
          "Quality Control: Tasting every dish, ensuring consistency, and maintaining high standards.",
          "Team Leadership: Training junior chefs, delegating tasks, and maintaining kitchen discipline.",
          "Menu Development: Creating new dishes, testing recipes, and innovating based on seasonal ingredients.",
          "Hygiene & Safety: Maintaining FSSAI standards, food safety protocols, and a clean kitchen environment."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Diploma Route—Join a 1-year Diploma in Food Production or Bakery. Focus is 80% practical. Great for those who want to start working early.",
          "After Class 12: Degree Route (Any Stream)—Take the NCHMC JEE exam to join IHMs for B.Sc. in Hospitality. Alternatively, join specialized B.A. in Culinary Arts.",
          "After Graduation: Lateral Entry—Join a PG Diploma in Culinary Arts (1-2 years). Ideal for career switchers (e.g., Engineer who wants to become Pastry Chef).",
          "Top Institutions: IHM Pusa (Delhi), IHM Mumbai, Indian Culinary Institute (Noida & Tirupati), Culinary Academy of India (Hyderabad), WGSHA (Manipal), Symbiosis School of Culinary Arts (Pune).",
          "Specializations: Pastry & Bakery, Molecular Gastronomy, Indian Regional Cuisines, International Cuisines, Food Science & Nutrition."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Commis Chef, 0-2 years): ₹2.5L–₹4.5L per annum. Learning phase with hands-on training.",
          "Mid-Level (Sous Chef, 3-7 years): ₹7L–₹12L per annum. Managing stations and training junior staff.",
          "Senior-Level (Executive Chef, 8-15 years): ₹15L–₹30L+ per annum. Leading entire kitchen operations.",
          "Leadership (Culinary Director, 15+ years): ₹40L–₹80L+ per annum. Managing multiple outlets or culinary vision.",
          "Growth Trajectory: Reach Sous Chef position in 5-7 years with consistent performance.",
          "Industry Growth: Indian food service market projected to reach $125 Billion by 2030, growing at 10-12% CAGR.",
          "Metro vs. Tier-2: Metro cities (Mumbai, Delhi, Bangalore) offer 20-30% higher salaries and more opportunities."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions (IHMs/ICI): ₹3L–₹5L total for 3-year degree. Very affordable but highly competitive.",
          "Private Institutes (WGSHA/Symbiosis): ₹8L–₹15L for 3-year degree. Better infrastructure and placement support.",
          "Specialized Institutes (APCA): ₹2L–₹4L for 1-2 year specialized programs in pastry or baking.",
          "Hostel/Living: Approximately ₹10,000–₹15,000 per month in major cities.",
          "Additional Costs: Professional knife kit (₹5,000–₹20,000), uniforms (₹3,000–₹5,000), FSSAI certification (₹2,000–₹5,000).",
          "ROI: With entry-level salaries of ₹2.5L–₹4.5L per annum, you can recover investment in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top culinary institutes across India.",
        color: BLUE,
        content: [
          "Government: IHM Pusa (Delhi), IHM Mumbai, Indian Culinary Institute (Noida & Tirupati), ICI Bangalore.",
          "Private: Culinary Academy of India (Hyderabad), WGSHA (Manipal), Symbiosis School of Culinary Arts (Pune), Institute of Hotel Management (Bangalore).",
          "Specialized: Academy of Pastry & Culinary Arts (APCA) - multiple locations for baking lovers, Institute of Bakery & Culinary Arts (IBCA).",
          "Online/Hybrid: Many institutes now offer online theory with in-person practical sessions.",
          "Note: Choose institutes with NCHMC recognition, industry partnerships, and strong placement records."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "NSP (National Scholarship Portal): Various Central schemes for SC/ST/OBC and Minority students.",
          "Institutional Scholarships: IBCA announced scholarships worth ₹1L for 400+ students in 2026. Most IHMs offer merit-based aid.",
          "Corporate Scholarships: Sitaram Jindal Foundation provides merit-based scholarships for vocational courses.",
          "State Government Schemes: Various states offer vocational training grants and scholarships.",
          "Hotel Group Sponsorships: Some 5-star hotel groups sponsor training for candidates who commit to working with them.",
          "Women-Specific Schemes: Various initiatives support women entering culinary careers."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "FSSAI Certification: Every chef must be trained in Food Safety and Standards Authority of India guidelines. Mandatory for food handling.",
          "IFCA: Indian Federation of Culinary Associations—the national body for chefs. Membership enhances credibility.",
          "WACS: World Association of Chefs' Societies—Global accreditation and international recognition.",
          "Specialized Certifications: Pastry Chef Certification, Sommelier Certification, Molecular Gastronomy Certification.",
          "Continuous Learning: Culinary competitions, workshops, and advanced training programs enhance skills and reputation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in culinary careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Hotel Chef, Pastry Chef, Sous Chef, Executive Chef, Catering Manager, Banquet Chef.",
          "New-Age Careers: Food Stylist (making food look good for ads), Molecular Gastronomist, Food Scientist in R&D labs, Culinary Educator, Food Blogger/Vlogger.",
          "Entrepreneurship: Personal Chef (cooking for wealthy families), Food Truck Owner, Cloud Kitchen Operator, Culinary Consultant for new restaurants, Cooking Show Host.",
          "Specialized Roles: Cruise Ship Chef, Airline Chef, Corporate Chef, Private Chef, Celebrity Chef.",
          "International Roles: Working in Michelin-star restaurants, international hotel chains, or culinary tourism."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of culinary careers.",
        color: BLUE,
        content: [
          "Physical Stress: You will be on your feet all day in a hot, loud environment. Back pain and joint issues are common.",
          "Work-Life Balance: Your busiest days will be Saturdays, Sundays, and public holidays. Holidays are when you work.",
          "Entry-Level Pay: Initial salaries can be low compared to the long hours worked. Expect 12-14 hour shifts.",
          "Burn Injuries: Working with fire and hot surfaces carries occupational hazards. Safety is critical.",
          "Pressure & Perfectionism: Every dish must be perfect. One mistake can ruin a guest's experience.",
          "Limited Advancement: Not everyone can become an Executive Chef. Competition is fierce.",
          "Ingredient Costs: Food waste and ingredient costs directly impact profitability.",
          "Seasonal Fluctuations: Tourism-dependent areas see seasonal employment variations."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in culinary careers.",
        color: BLUE2,
        content: [
          "AI in the Kitchen: AI tools predicting flavor pairings and helping reduce food waste by 30%.",
          "Sustainability: 'Farm-to-fork' and zero-waste cooking becoming mandatory skills. Chefs leading sustainability initiatives.",
          "Plant-Based Revolution: High demand for chefs who can make delicious vegan and lab-grown meat dishes.",
          "Personalization: AI analyzing customer preferences and creating personalized menus.",
          "Cloud Kitchens: Growth of delivery-only kitchens requiring different skill sets and efficiency.",
          "Culinary Tourism: Chefs leading food tours, cooking classes, and experiential dining.",
          "Tech Integration: Tablets for orders, kitchen management software, and digital recipe systems.",
          "Global Fusion: Indian chefs innovating with international cuisines and creating new fusion categories."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Cook at Home: Start with basics—learn to chop safely and understand how spices work. Experiment with family recipes.",
          "Chemistry: Pay attention to how substances react to heat and acid (vinegar/lemon). Understand food science.",
          "Languages: Learn basic French culinary terms (many are used globally). Understand food terminology.",
          "Volunteer: Shadow a chef at a local bakery or cafe for a weekend. Gain real kitchen experience.",
          "Read & Learn: Follow food blogs, watch cooking shows, and read cookbooks. Understand different cuisines.",
          "Develop Palate: Taste different cuisines, understand flavor profiles, and train your tongue.",
          "Knife Skills: Practice knife techniques at home. Proper technique prevents injuries and improves efficiency.",
          "Nutrition Knowledge: Learn about nutrition, dietary requirements, and food allergies.",
          "Participate in Competitions: Join school cooking competitions or food festivals.",
          "Build Portfolio: Document your cooking journey through photos and videos for future applications."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Chefs & Culinary Icons",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Sanjeev Kapoor: The man who brought professional cooking into Indian living rooms via Khana Khazana. Pioneer of food television in India.",
          "Vikas Khanna: Michelin-star chef who showcased Indian cuisine at the White House and UN. Global ambassador for Indian food.",
          "Garima Arora: The first Indian woman to win two Michelin stars. Chef at Gaa restaurant in Bangkok.",
          "Ranveer Brar: Known for storytelling and deep knowledge of traditional Indian street food. Celebrity chef and restaurateur.",
          "Pankaj Bhadouria: First winner of MasterChef India. Inspiration for many home cooks turned professionals.",
          "Kunal Kapur: Celebrity chef, restaurateur, and TV personality. Known for innovative Indian cuisine.",
          "Maneet Chauhan: Michelin-trained chef and TV personality. Advocate for Indian culinary excellence globally."
        ]
      }
    ]
  },
  event_planner: {
    slug: "event_planner",
    badge: "🎪 The Architect of Experiences for Class 10+",
    heading: "Event Planning",
    subheading: "Turn visions into reality. Create unforgettable experiences from intimate gatherings to massive festivals. Be the director of real-life magic.",
    whyCards: [
      { icon: "Sparkles", title: "₹1.25 Lakh Crore Industry", description: "India's event industry projected to cross ₹1.25 lakh crore by 2026. Massive growth opportunity.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "18-20% CAGR Growth", description: "One of the fastest-growing sectors in India. High demand for skilled event professionals.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand for Indian wedding planners in UAE, Turkey, Thailand, and other countries.", borderColor: "#3B82F6" },
      { icon: "Briefcase", title: "Entrepreneurship Potential", description: "Can earn ₹5L to ₹50L+ per event for high-end luxury projects. Build your own agency.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "1-3 Years (Diploma to Degree)", color: "bg-green-100 text-green-700" },
      { label: "Entry Age", detail: "After Class 10 or 12", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3L–₹80L+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "₹1.25L Cr", label: "Industry Size by 2026", gradient: "from-green-500 to-green-600" },
      { value: "18-20%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art of turning visions into unforgettable experiences.",
        color: BLUE,
        content: [
          "Event Planning Definition: The art of turning a vision into reality. An Event Planner is like a movie director, but for real life. Responsible for conception, planning, and execution of events.",
          "The Role: The Dreamer (listen to client's idea and sketch creative theme), The Budgeter (ensure dream doesn't exceed budget), The Negotiator (talk to vendors for best work at right price), The Fixer (solve problems when things go wrong).",
          "What They Do: Manage everything from small birthday parties and corporate seminars to massive sports leagues like IPL. Handle conception, planning, vendor management, on-site execution, and post-event closure.",
          "Why It Matters: India's event industry is projected to cross ₹1.25 lakh crore by 2026. Whether it's a government summit like G20 or a local influencer's product launch, events are how brands communicate.",
          "The Scope: Work in media houses, wedding planning agencies, corporate marketing departments, luxury hotels, sports management, and as independent entrepreneurs.",
          "The Impact: You create memories and experiences that people remember for a lifetime. You're the architect of moments that matter."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Countdown to Launch",
        icon: "Clock",
        description: "Real workflow of an event planner on event day.",
        color: BLUE2,
        content: [
          "8:00 AM - The Calm Briefing: Start at office with coffee and 'Run Sheet'—minute-by-minute schedule. Check in with production team: Is stage ready? Are LED screens tested?",
          "11:00 AM - The Vendor Chase: At the venue (large convention center). Flower delivery stuck in traffic. Sound engineer says one speaker is 'buzzing.' Spend two hours on phone navigating traffic and technical jargon.",
          "2:00 PM - The Rehearsal: CEO arrives for walk-through. Guide them through entry, testing 'reveal' curtain three times until it falls at exact second music hits peak.",
          "6:00 PM - Doors Open: Guests arrive. You're backstage with walkie-talkie. 'Security, crowd build-up at Gate 2. Hospitality, more water in VIP lounge.' You're the brain of operation.",
          "11:00 PM - The De-brief: Event was a hit! Car revealed, photos all over Instagram, client thrilled. Supervise 'strike'—dismantling of stage. Head home as sun rises, tired but fueled by adrenaline."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Event Gene",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: High Energy (stay on feet for 14 hours), Detail-Oriented (notice if tablecloth is slightly crooked), People-Person (enjoy talking to everyone from CEO to truck driver), Creative (think outside the box).",
          "Soft Skills: Crisis Management (stay calm when main cake falls over), Negotiation (convince vendor to give discount without losing quality), Communication (coordinate with diverse teams), Adaptability (handle unexpected changes).",
          "Hard Skills: Tech Savvy (familiarity with event apps, floor-plan software like AutoCAD, basic AV knowledge), Project Management, Budget Management, Vendor Coordination.",
          "The Self-Check: Do you love organizing things? Can you stay calm under pressure? Do you have creative ideas? If yes, you have the Event Gene."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Event Workflow",
        icon: "Briefcase",
        description: "The complete event planning process.",
        color: BLUE2,
        content: [
          "Requirement Gathering: Understanding client's goal (e.g., 'I want a tech-themed wedding'). Listening and clarifying expectations.",
          "Proposal & Budgeting: Presenting 'Mood Board' and cost sheet. Creating detailed budget breakdown.",
          "Vendor Management: Hiring the 'Army'—caterers, decorators, light men, artists, security, and technical teams.",
          "Timeline Planning: Creating detailed timelines and schedules for all phases of event.",
          "On-Site Execution: Managing 'Show Flow' on day of event. Coordinating all teams and solving real-time problems.",
          "Post-Event Closure: Settling bills, getting feedback, analyzing what went well, and documenting lessons learned."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: The Early Bird—Start volunteering at local festivals or school events. Take short-term certification courses (3 months). Certificate in Event Management (e.g., IISDT).",
          "After Class 12: The Professional—Pursue BBA in Event Management or Diploma. Any stream (Science/Commerce/Arts) is eligible. Entrance Exams: CUET (for central universities), TIEMCET.",
          "After Graduation: The Specialist—PG Diploma or MBA in Event Management best for those from other fields like Engineering or Arts. Entrance Exams: CAT/MAT, Institutional Tests.",
          "Top Institutions: National Institute of Event Management (NIEM - Mumbai, Pune, Ahmedabad), NAEMD (Mumbai, Delhi, Jaipur), Amity School of Communication (Noida), Tritya Institute (TIEM - Delhi).",
          "Specializations: Wedding Planning, Corporate Events, Sports Events, Festival Management, Destination Events, Virtual/Hybrid Events."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Coordinator, 0-2 years): ₹3L–₹5L per annum. Learning phase with hands-on experience.",
          "Mid-Level (Manager, 3-5 years): ₹7L–₹15L per annum. Managing events and leading small teams.",
          "Senior-Level (Director/Creative Head, 8-15 years): ₹20L–₹40L+ per annum. Leading entire event operations.",
          "Entrepreneurs: Can earn ₹5L to ₹50L+ per wedding/event for high-end luxury projects.",
          "Growth Trajectory: Entry to Manager usually takes 3-5 years.",
          "Market Growth: Industry growing at 18-20% CAGR. Massive expansion expected.",
          "Metro vs. Tier-2: Mumbai, Delhi-NCR offer highest salaries. Destination wedding hubs (Goa, Jaipur) have high project values."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Private Institutes (NIEM, NAEMD): ₹1.5L–₹3L per year for degree programs.",
          "Government/Public Institutes: ₹30,000–₹80,000 per year. Very affordable but competitive.",
          "Short-term Certificates: ₹20,000–₹50,000 for 3-6 month programs.",
          "Living Costs: ₹15,000/month in metros like Mumbai or Delhi.",
          "Additional Costs: Professional portfolio development, travel for internships, software subscriptions.",
          "ROI: With entry-level salaries of ₹3L–₹5L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top event management institutes across India.",
        color: BLUE,
        content: [
          "National: National Institute of Event Management (NIEM - Mumbai, Pune, Ahmedabad), NAEMD (Mumbai, Delhi, Jaipur).",
          "North: Amity School of Communication (Noida), Tritya Institute (TIEM - Delhi), Delhi University (Hospitality Dept).",
          "South: Indian School of Media (Bangalore), University of Mumbai (Hospitality Dept), Christ University (Bangalore).",
          "Online: Wizcraft Online Programs via Talentedge, Coursera, Udemy.",
          "Note: Choose institutes with industry partnerships, strong placement records, and practical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Institutional Scholarships: TIEM Delhi offers up to 90% tuition fee waivers based on Class 12 marks or TIEMCET scores.",
          "Sports/Defence: Many private institutes offer 10-20% discounts for children of defense personnel or national-level athletes.",
          "NSP: General government scholarships for economically weaker sections (EWS) apply to recognized degree courses.",
          "Corporate Sponsorships: Some event companies sponsor training for candidates who commit to working with them.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "EEMA (Event and Entertainment Management Association): The premier body in India. Membership adds massive networking value.",
          "CMP (Certified Meeting Professional): A globally recognized certification. Enhances credibility internationally.",
          "DES (Digital Event Strategist): For those specializing in virtual and hybrid events.",
          "ISES (International Special Events Society): Global professional organization for event professionals.",
          "Continuous Learning: Industry certifications, workshops, and advanced training programs enhance skills and reputation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in event planning careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Wedding Planner, Corporate Event Manager, Exhibition Organizer, Festival Coordinator, Conference Manager.",
          "New-Age Careers: Metaverse Event Designer, Hybrid Event Tech Specialist, Sustainability Consultant (Green Events), Virtual Event Producer.",
          "Entrepreneurship: Start your own event management agency, destination management company, or specialized event niche.",
          "Freelancing: Destination Manager, Artist Liaison, Event Content Creator, Event Consultant.",
          "Specialized Roles: Sports Event Manager, Celebrity Event Coordinator, Luxury Wedding Planner, Brand Activation Manager."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of event planning.",
        color: BLUE,
        content: [
          "Stress Levels: Ranked consistently as one of the world's top 10 most stressful jobs. High pressure and tight deadlines.",
          "Odd Hours: You will work when others party—New Year's Eve, weekends, and late nights. Work-life balance is challenging.",
          "Seasonality: High workload during 'Wedding Season' (Nov-Feb), slower in monsoons. Income can be irregular.",
          "Physical Demands: Standing for 12-14 hours, managing multiple tasks simultaneously, constant problem-solving.",
          "Client Expectations: Managing unrealistic expectations and difficult clients can be emotionally draining.",
          "Budget Constraints: Balancing creative vision with budget limitations is a constant challenge.",
          "Vendor Issues: Dealing with unreliable vendors, last-minute cancellations, and quality issues.",
          "Perfectionism Pressure: Every detail matters. One mistake can ruin the entire event."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in event planning.",
        color: BLUE2,
        content: [
          "AI & Automation: AI used for Predictive Planning (forecasting attendee behavior) and automated vendor scheduling.",
          "Sustainability: 'Zero-waste' events becoming requirement for big brands. Green event planning is a growing specialty.",
          "Hyper-Personalization: Using data to tailor music, lighting, and food to individual guest preferences.",
          "Metaverse Events: Virtual and hybrid events becoming mainstream. New skills required for digital event management.",
          "Tech Integration: AR/VR experiences, interactive installations, and immersive technologies becoming standard.",
          "Experiential Marketing: Brands investing heavily in memorable experiences rather than traditional advertising.",
          "Global Expansion: Indian event planners increasingly working on international projects.",
          "Sustainability Consulting: Event planners becoming sustainability consultants for brands."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Volunteer: Help organize your School Annual Day or local housing society's Ganesh Chaturthi/Diwali event.",
          "Digital Tools: Learn Canva for design and Excel for budgeting. Familiarize with event management software.",
          "Public Speaking: Join debate club to build confidence in talking to crowds and presenting ideas.",
          "Photography/Social Media: Learn to 'capture' an event. Being able to showcase your work is vital.",
          "Project Management: Organize small events and document the process. Learn from each experience.",
          "Networking: Attend industry events and meet professionals. Build connections early.",
          "Creativity: Brainstorm event themes, decorations, and experiences. Think outside the box.",
          "Problem-Solving: Practice handling unexpected situations and finding creative solutions.",
          "Budget Management: Learn to manage money and understand cost-benefit analysis.",
          "Leadership: Take leadership roles in school clubs and events. Learn to manage teams."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Event Planners & Personalities",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Vandana Mohan (WDC): The queen of luxury weddings. Planned the Deepika-Ranveer wedding in Italy. Pioneer in destination weddings.",
          "Aditya Motwane: Known for high-profile celebrity weddings (Priyanka Chopra & Nick Jonas). Expert in celebrity event management.",
          "Sabbas Joseph: Co-founder of Wizcraft. The man behind IIFA Awards and Commonwealth Games opening ceremony.",
          "Devika Narain: Pioneer in 'sustainable' and artisanal wedding design. Advocate for eco-friendly events.",
          "Tina Tharwani (Shaadi Squad): The 'modern' planner who handled Anushka Sharma & Virat Kohli's secret wedding.",
          "Rajesh Masrani: Known for corporate and sports event management. Managed major IPL events.",
          "Falguni Nayar: Founder of Nykaa who also manages high-profile brand events and activations."
        ]
      }
    ]
  },
  hotel_management: {
    slug: "hotel_management",
    badge: "🏨 The CEO of Hospitality for Class 10+",
    heading: "Hotel Management",
    subheading: "Create unforgettable guest experiences. Manage a mini-city where every detail matters. Lead teams, drive revenue, and build India's hospitality legacy.",
    whyCards: [
      { icon: "Globe", title: "$410B Industry by 2028", description: "Indian hospitality industry expected to reach $410 Billion by 2028. Massive growth and opportunities.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Travel Boom in India", description: "Government's Dekho Apna Desh scheme driving tourism. New hotels opening in every corner of the country.", borderColor: "#059669" },
      { icon: "Briefcase", title: "Global Opportunities", description: "High demand in Middle East (Dubai/Qatar), Singapore, Maldives, and international hotel chains.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Leadership Fast-Track", description: "Reach General Manager position in 8-10 years. Earn ₹25L–₹1.5Cr+ in senior roles.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (Degree) or 1-2 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Entry Exams", detail: "NCHMC JEE, CUET, Institutional Tests", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.5L–₹1.5Cr+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$410B", label: "Industry Size by 2028", gradient: "from-green-500 to-green-600" },
      { value: "₹1.5Cr+", label: "Senior Leadership Salary", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of managing a business that revolves around people.",
        color: BLUE,
        content: [
          "Hotel Management Definition: The science of managing a business that revolves around people. It's about creating an 'experience' so perfect that a guest wants to return.",
          "The Role: A hotel manager is essentially the CEO of a mini-city. They oversee four main pillars: Front Office (face of hotel, check-ins, guest relations), Food & Beverage (restaurants, bars, banquets), Housekeeping (hygiene and aesthetic comfort), Sales & Marketing (occupancy and profitability).",
          "What They Do: Manage online reservations, oversee guest experiences, coordinate with multiple departments, handle crises, drive revenue, maintain standards, and lead teams of hundreds.",
          "Why It Matters: India is seeing a 'Travel Boom.' With government's focus on tourism through Dekho Apna Desh, new hotels are opening everywhere—from religious hubs to mountain retreats.",
          "The Scope: Work in luxury hotels, cruise ships, international airlines, high-end hospitals, tech campuses, and resorts.",
          "The Impact: You are the ambassador of India's philosophy: Atithi Devo Bhava (The Guest is God). You create memories and shape how the world experiences India."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Hospitality Conductor",
        icon: "Clock",
        description: "Real workflow of a hotel manager.",
        color: BLUE2,
        content: [
          "7:30 AM - The Handover: Arrive at luxury 5-star hotel in Bangalore. Morning briefing with night shift manager. Learn famous Bollywood actor checking in today and pipe burst in Room 402. Prioritize: plumber called before finishing coffee.",
          "10:00 AM - The High-Stakes Inspection: Walk the 'floor.' Details are everything. Notice slight smudge on glass door and drooping flower in vase. Talk to staff about why it happened, encouraging 'gold standard' maintenance.",
          "1:00 PM - The Banquet Blitz: Massive corporate conference for tech giant in ballroom. 500 people need lunch in 45 minutes. Coordinate with Executive Chef and servers. Spot confused guest and personally guide them to buffet.",
          "4:00 PM - Strategy and Numbers: Back in office, review 'Occupancy Report.' Tuesday has low bookings. Brainstorm with Marketing team to create 'Mid-week Spa Package' for local residents.",
          "7:00 PM - The Evening Glow: Lobby transforms with evening lights and music. Change into fresh suit to greet VIP arrivals. Welcome Bollywood actor personally. By 8:30 PM, hotel buzzing, guests happy."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Hospitality DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: The 'Host' Instinct (enjoy making people feel comfortable), Emotional Intelligence (read person's mood by body language), Resilience (keep smiling even with difficult guests), Adaptability (handle unexpected situations).",
          "Soft Skills: Multitasking (handle phone call, guest query, staff issue simultaneously), Cultural Sensitivity (understand and respect guests from different countries), Communication (clear and professional), Leadership (inspire and manage teams).",
          "Hard Skills: Revenue Management (understand room rate math), Technical Literacy (master Property Management Systems like Opera or IDS), Financial Acumen (budgeting and cost control), Problem-Solving (creative solutions under pressure).",
          "The Self-Check: Do you enjoy making people feel welcome? Can you stay calm under pressure? Do you have attention to detail? If yes, you have the Hospitality DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Guest Cycle",
        icon: "Briefcase",
        description: "The complete hotel management workflow.",
        color: BLUE2,
        content: [
          "Pre-Arrival: Managing online reservations and special requests. Ensuring rooms are ready and staff briefed.",
          "Arrival: The 'First Impression'—check-in, luggage handling, and warm welcome. Setting tone for entire stay.",
          "Occupancy: Managing guest's stay from meals to laundry to travel desk queries. Proactive problem-solving.",
          "Departure: The 'Last Impression'—billing, feedback collection, and ensuring warm goodbye. Encouraging return visits.",
          "Department Coordination: Overseeing Front Office, F&B, Housekeeping, Sales & Marketing, and Engineering.",
          "Revenue Management: Optimizing room rates, occupancy, and profitability using data analytics.",
          "Staff Management: Hiring, training, motivating, and managing teams of hundreds.",
          "Quality Assurance: Maintaining standards, handling complaints, and ensuring guest satisfaction."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Join a Diploma in Hotel Management (1-2 years). Focus on technical skills like cooking or housekeeping. Diploma from State Board or Private Institute.",
          "After Class 12 (Any Stream): Take NCHMC JEE entrance exam. Aim for 3-year B.Sc. in Hospitality & Hotel Administration. Degree from IHMs (Government) or top private colleges.",
          "After Graduation: Join PG Diploma or MBA in Hospitality Management. Look for 'Management Trainee' (MT) programs by brands like Taj or Oberoi. MBA/PGDM or OCLD (Oberoi Centre of Learning).",
          "Top Institutions: IHM Pusa (Delhi), IHM Mumbai, IHM Chandigarh, IHM Bangalore, Welcomgroup Graduate School (Manipal), IHM Kolkata, IHM Shillong.",
          "Specializations: Front Office Management, Food & Beverage Management, Housekeeping Management, Revenue Management, Cruise Management."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Management Trainee, 0-2 years): ₹3.5L–₹6L per annum. Learning phase with hands-on experience.",
          "Mid-Level (Department Manager, 3-5 years): ₹8L–₹18L per annum. Managing specific departments.",
          "Senior-Level (General Manager, 8-15 years): ₹25L–₹60L+ per annum. Leading entire hotel operations.",
          "Leadership (Regional/CXO, 15+ years): ₹80L–₹1.5Cr+ per annum. Strategic leadership roles.",
          "Growth Trajectory: Reach Department Head position in 5-8 years.",
          "Market Size: Indian hospitality industry expected to reach $410 Billion by 2028.",
          "International: Middle East (Dubai/Qatar) offers 30-50% higher salaries. Singapore and Maldives also high-paying."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government IHMs: ₹4L–₹7L total for 3-year degree. Very affordable but highly competitive.",
          "Top Private (Welcomgroup, IHM-A): ₹12L–₹20L for 3-year degree. Better infrastructure and placement.",
          "Diploma Programs: ₹2L–₹4L for 1-2 year programs.",
          "Living Costs: ₹12,000–₹18,000 per month in metros.",
          "Additional Costs: Grooming kits, professional uniforms (₹15,000), entrance exam coaching (₹10,000–₹20,000).",
          "ROI: With entry-level salaries of ₹3.5L–₹6L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top hotel management institutes across India.",
        color: BLUE,
        content: [
          "North: IHM Pusa (Delhi), IHM Chandigarh, Amity School of Hospitality (Noida).",
          "West: IHM Mumbai, IHM Aurangabad (Taj Group), Welcomgroup Graduate School (Manipal).",
          "South: IHM Bangalore, Welcomgroup Graduate School (Manipal), Christ University (Bangalore).",
          "East: IHM Kolkata, IHM Shillong.",
          "Private: Institute of Hotel Management Aurangabad, Aptech Institute of Hotel Management.",
          "Note: Choose institutes with NCHMC recognition, industry partnerships, and strong placement records."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: National Scholarship Portal (NSP) for SC/ST/OBC students. Various government schemes available.",
          "Institutional: Oberoi OCLD and Taj Management Training programs are 'work-study'—they pay stipend while you learn.",
          "Corporate: IHG Academy and Marriott Say It Forward initiatives provide training grants.",
          "Merit-Based: Most IHMs offer scholarships for top performers in entrance exams.",
          "Sports/Defence: Many private institutes offer 10-20% discounts for children of defense personnel or national-level athletes."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "NCHMCT: National Council for Hotel Management and Catering Technology—the main regulatory body in India.",
          "FHRAI: Federation of Hotel & Restaurant Associations of India. Membership adds networking value.",
          "FSSAI: Mandatory food safety certification for all F&B professionals.",
          "International Certifications: Certified Hotel Administrator (CHA), Certified Hospitality Professional (CHP).",
          "Continuous Learning: Industry certifications, workshops, and advanced training programs enhance skills and career prospects."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in hotel management careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Hotel Manager, Front Office Manager, F&B Manager, Housekeeping Manager, Executive Chef, Revenue Manager.",
          "New-Age Careers: Customer Experience (CX) Manager in Tech companies, Revenue Manager (using Data Science), Luxury Brand Manager, Wellness Manager.",
          "Entrepreneurship: Airbnb Super-host, Boutique Hotel Owner, Hospitality Consulting, Event Management Company.",
          "Specialized Roles: Cruise Ship Manager, Airline Hospitality Manager, Resort Manager, Heritage Hotel Manager, Wellness Resort Manager.",
          "International Roles: Working for international hotel chains (Marriott, Hilton, Four Seasons) or in international destinations."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of hotel management.",
        color: BLUE,
        content: [
          "Physical Fatigue: Expect to be on your feet for most of your shift. Long hours are common.",
          "Holiday Work: You work when others party—festivals, weekends, and holidays are your busiest times.",
          "High Pressure: One angry guest can result in viral negative review. Managing reputation is constant work.",
          "Emotional Labor: Dealing with difficult guests and maintaining composure is emotionally draining.",
          "Seasonality: High workload during peak seasons, slower during off-seasons. Income can fluctuate.",
          "Staff Turnover: Managing high employee turnover and maintaining service standards is challenging.",
          "Competitive Industry: Intense competition from international chains and new properties.",
          "Work-Life Balance: Irregular schedules and on-call duties make personal life planning difficult."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in hotel management.",
        color: BLUE2,
        content: [
          "AI & Robotics: AI chatbots handling bookings, 'Contactless' check-ins via facial recognition, robot concierges.",
          "Sustainability: 'Net-Zero' hotels producing own energy and recycling 100% of water. Green certifications becoming mandatory.",
          "Wellness Tourism: Hotels shifting focus to mental health, spas, and 'Digital Detox' retreats.",
          "Personalization: AI analyzing guest preferences and creating personalized experiences.",
          "Tech Integration: Mobile check-in, smart rooms, IoT devices, and digital concierge services.",
          "Experiential Travel: Guests seeking authentic experiences, local culture, and adventure.",
          "Remote Work Hubs: Hotels becoming co-working spaces for digital nomads.",
          "Data-Driven Management: Revenue management using advanced analytics and AI predictions."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Language: Master English plus one foreign language (French or Spanish) if possible. Communication is key.",
          "Etiquette: Practice professional grooming and body language. Hospitality is about presentation.",
          "Observation: When visiting restaurants, observe service. What made you happy? What went wrong?",
          "Volunteer: Help at school events or local festivals to learn crowd management and coordination.",
          "Customer Service: Work part-time in retail or hospitality to understand guest expectations.",
          "Financial Literacy: Learn basic accounting and budgeting. Revenue management is crucial.",
          "Technology: Familiarize yourself with booking systems and property management software.",
          "Leadership: Take leadership roles in school clubs. Learn to manage and motivate teams.",
          "Cultural Awareness: Learn about different cultures and customs. Hospitality is global.",
          "Problem-Solving: Practice handling unexpected situations and finding creative solutions."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Hoteliers & Personalities",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Ratan Tata: While a business tycoon, his leadership of Taj Group (IHCL) redefined Indian luxury for the world.",
          "Priya Paul: Chairperson of Apeejay Surrendra Park Hotels. Pioneer of 'Boutique Hotels' in India.",
          "Vikas Khanna: Started with degree from WGSHA Manipal. Became world-renowned Michelin-star chef and humanitarian.",
          "Raymond Bickson: Legendary hotelier who led Taj Hotels during most significant global expansion.",
          "Nakul Anand: Former Executive Director at ITC Ltd. Visionary for 'Responsible Luxury' in hotel world.",
          "Puneet Chhatwal: CEO of Indian Hotels Company (Taj Group). Leading digital transformation in hospitality.",
          "Sanjay Sethi: Former President of Oberoi Hotels. Pioneer in luxury hospitality and guest experience."
        ]
      }
    ]
  },
  travel_and_tourism: {
    slug: "travel_and_tourism",
    badge: "✈️ The Designer of Adventures for Class 10+",
    heading: "Travel and Tourism",
    subheading: "Enable experiences. Design itineraries, manage logistics, and become a cultural ambassador. Turn dreams into journeys and create memories that last a lifetime.",
    whyCards: [
      { icon: "Globe", title: "Fastest-Growing Market", description: "India is the fastest-growing aviation and tourism market in the world. Dekho Apna Desh initiative driving growth.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "12% CAGR Growth", description: "Industry expected to grow at 12% CAGR through 2030. Massive job creation and opportunities.", borderColor: "#059669" },
      { icon: "Briefcase", title: "10% of India's GDP", description: "Tourism generates nearly 10% of India's GDP. Essential for economic growth and cultural exchange.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Global Opportunities", description: "High demand for Indian destination experts in Dubai, Singapore, Thailand, and international markets.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (Degree) or 6 Months (Certificate)", color: "bg-green-100 text-green-700" },
      { label: "Entry Exams", detail: "CUET, NCHMC JEE, IATA Certification", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.5L–₹60L+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "12%", label: "Industry CAGR through 2030", gradient: "from-green-500 to-green-600" },
      { value: "10%", label: "Contribution to India's GDP", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Enabling experiences and designing adventures.",
        color: BLUE,
        content: [
          "Travel and Tourism Definition: A service-driven industry that manages everything related to moving people from point A to point B and ensuring they have a meaningful stay.",
          "The Role: Architect of Dreams (design itineraries, decide sights and hotels), Logistics Expert (handle visas, flight bookings, insurance, transport), Cultural Ambassador (explain history and significance of places), Tech Integrator (use AI and data to predict trends and offer personalized trips).",
          "What They Do: Market research, product development (tour packages), sales and counseling, operations (visas and bookings), feedback collection, crisis management.",
          "Why It Matters: India is the fastest-growing aviation and tourism market. With Dekho Apna Desh initiative and rising middle class, more Indians travel than ever. This field bridges cultures and generates 10% of India's GDP.",
          "The Scope: Work in online travel agencies, airlines, cruise lines, state tourism boards, event management, hotels, and as independent entrepreneurs.",
          "The Impact: You create memories, enable cultural exchange, and help people discover the world. You're the architect of dreams."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Destination Specialist",
        icon: "Clock",
        description: "Real workflow of a travel professional.",
        color: BLUE2,
        content: [
          "9:00 AM - The Morning Pulse: Arrive at office (sleek corporate building or vibrant travel boutique). Check 'Global Travel Alerts.' Weather shift in Bali means re-routing three families. Call local partners in Indonesia to move them to safer resort without extra cost.",
          "11:30 AM - Designing the 'New': Meet young couple planning honeymoon. They want 'adventure and sustainability,' not typical beach holiday. Spend hour researching eco-lodges in Northeast India and private stargazing tours in Spiti Valley.",
          "2:00 PM - The Negotiation: Zoom call with European hotel chain. Since you plan to send 500 tourists their way this year, negotiate 20% discount for clients. Your relationships are your currency.",
          "4:30 PM - Tech and Marketing: Work with digital team to launch 'Virtual Reality' preview of luxury cruise. Check analytics—how many students looking at 'educational treks'? Adjust social media strategy accordingly.",
          "7:00 PM - The Crisis Call: Client calls from Paris airport. Luggage lost. Stay back to coordinate with airline and travel insurance provider. By 8:30 PM, client assured bags reach hotel by morning."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Traveler's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Curiosity (love learning about new cultures, food, history), Extroversion (enjoy talking to strangers and making them comfortable), Patience (stay calm when flights delayed or clients upset), Adaptability (handle unexpected changes).",
          "Soft Skills: Communication (proficiency in English, Hindi, ideally one foreign language), Problem-Solving (think on feet when things don't go according to plan), Empathy (understand client needs and concerns), Negotiation (get best deals and solutions).",
          "Hard Skills: Geography Knowledge (know where cities are and best time to visit), GDS (Global Distribution Systems) like Amadeus or Galileo, Financial Management (budgeting and cost control), Tech Proficiency (booking systems and travel software).",
          "The Self-Check: Do you love learning about new places? Can you stay calm under pressure? Do you enjoy helping people? If yes, you have the Traveler's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Tourism Workflow",
        icon: "Briefcase",
        description: "The complete travel and tourism cycle.",
        color: BLUE2,
        content: [
          "Market Research: Identifying which destinations are 'trending' (Vietnam, Iceland, Bhutan). Analyzing travel patterns and consumer preferences.",
          "Product Development: Creating 'Tour Packages' (Flight + Hotel + Sightseeing). Designing itineraries and experiences.",
          "Sales & Counseling: Helping clients choose right destination based on budget, interests, and time. Building relationships.",
          "Operations: The 'Back-end' work—securing visas, confirming bookings, arranging transport, managing logistics.",
          "Customer Service: Handling inquiries, resolving issues, providing support during travel.",
          "Feedback & Analysis: Checking in with clients after trip to ensure satisfaction. Gathering reviews and improving services.",
          "Crisis Management: Handling emergencies, flight cancellations, lost luggage, and unexpected situations."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Take Vocational Diploma in Travel & Tourism or Certificate course in IATA (International Air Transport Association). Diploma in Travel Management.",
          "After Class 12 (Any Stream): Apply for Bachelor of Tourism Studies (BTS) or BBA in Travel & Tourism. Entrance Exams: CUET (Central Universities), NCHMC JEE.",
          "After Graduation: Pursue MBA in Tourism or Master of Tourism and Travel Management (MTTM). Entrance Exams: CAT/MAT/CMAT.",
          "Lateral Entry: If you have degree in History, Geography, or Languages, do 6-month IATA Foundation Course to switch into travel industry immediately.",
          "Top Institutions: IITTM (Gwalior, Noida, Bhubaneswar, Nellore), IHM (various locations), IGNOU (Distance Learning), Amity Institute of Travel & Tourism."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Travel Consultant, 0-2 years): ₹3.5L–₹5.5L per annum. Learning phase with hands-on experience.",
          "Mid-Level (Operations Manager, 3-5 years): ₹8L–₹15L per annum. Managing operations and teams.",
          "Senior-Level (Product Head/VP, 8-12 years): ₹20L–₹45L per annum. Strategic leadership roles.",
          "Leadership (CEO/Director, 15+ years): ₹60L+ per annum. Executive leadership positions.",
          "Growth Trajectory: Entry to Senior Management typically takes 8-12 years.",
          "Market Growth: Industry expected to grow at 12% CAGR through 2030.",
          "Metro vs. Tier-2: Metros 20% higher salaries, but Tier-2 cities (Jaipur, Varanasi) seeing fastest job growth due to heritage tourism."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions (IITTM/IHMs): ₹2L–₹4L total for degree programs. Very affordable but competitive.",
          "Private Institutions: ₹5L–₹12L for degree programs. Better infrastructure and placement support.",
          "IATA Certifications: ₹50,000–₹1,00,000 for certification courses.",
          "Living Costs: ₹15,000–₹20,000/month in major education hubs.",
          "Additional Costs: Travel for internships, professional development, software subscriptions.",
          "ROI: With entry-level salaries of ₹3.5L–₹5.5L per annum, you can recover investment in 1-2 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top travel and tourism institutes across India.",
        color: BLUE,
        content: [
          "Government: IITTM (Gwalior, Noida, Bhubaneswar, Nellore), IHM (various locations), IGNOU (Distance Learning).",
          "Private: Amity Institute of Travel & Tourism, Christ University (Bangalore), Banaras Hindu University (BHU), Symbiosis Institute of Travel & Tourism.",
          "Specialized: IATA Training Centers across India, Travel Academy India.",
          "Online: IGNOU offers distance learning programs in Tourism Studies.",
          "Note: Choose institutes with IATA recognition, industry partnerships, and strong placement records."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central Government: NSP (National Scholarship Portal) schemes for students pursuing professional degrees.",
          "Ministry of Tourism: Occasional grants for students studying at IITTM based on merit.",
          "Private: TATA Trusts and various corporate CSR schemes for vocational training in hospitality and tourism.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "State Government: Various state tourism boards offer scholarships for students interested in tourism."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "IATA: The gold standard for air travel professionals. Highly valued globally.",
          "TAAI (Travel Agents Association of India): The oldest and largest body. Membership adds credibility.",
          "IATO (Indian Association of Tour Operators): Focused on inbound tourism. Important for tour operators.",
          "Regional Guide License: Ministry of Tourism Guide Examination required to be a 'Regional Guide.'",
          "Specialized Certifications: Sustainable Tourism Certification, Medical Tourism Certification, Adventure Tourism Certification."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in travel and tourism careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Travel Agent, Tour Operator, Airline Ground Staff, Hotel Concierge, Tour Guide, Travel Consultant.",
          "New-Age Careers: Sustainable Tourism Consultant, Digital Nomad Coordinator, Travel Data Analyst, Medical Tourism Facilitator, Adventure Tourism Manager.",
          "Entrepreneurship: Travel Agency Owner, Tour Operator, Travel Blogger/Vlogger, Boutique Wedding Travel Planner, Niche Tourism Specialist.",
          "Freelancing: Travel Vlogging, Trekking Lead, Travel Writing, Travel Photography, Destination Management.",
          "Specialized Roles: Cruise Director, Airline Purser, Corporate Travel Manager, Event Travel Coordinator."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of travel and tourism.",
        color: BLUE,
        content: [
          "Vulnerability: Global events (pandemics, wars, natural disasters) can stop travel instantly. Job security can be uncertain.",
          "Seasonality: Work 16-hour days in December and have very little work in June. Income fluctuates significantly.",
          "High Pressure: Errors in visa processing or flight dates can cost thousands and ruin client's life events.",
          "Emotional Labor: Dealing with upset clients, handling complaints, and managing expectations is emotionally draining.",
          "Constant Learning: Travel trends change rapidly. Must stay updated on destinations, visa policies, and travel regulations.",
          "Work-Life Balance: Irregular schedules, weekend work, and on-call duties make personal planning difficult.",
          "Competition: Intense competition from online platforms and other travel agencies.",
          "Thin Margins: Profit margins can be thin, especially for budget travel packages."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in travel and tourism.",
        color: BLUE2,
        content: [
          "Hyper-Personalization: AI will create 'smart itineraries' that change in real-time based on mood, weather, and preferences.",
          "Space Tourism: Next decade might see first Indian travel agents booking 'sub-orbital' flights.",
          "Regenerative Travel: Moving beyond 'Sustainability'—tourists will pay to improve places they visit (planting trees, conservation).",
          "Virtual Reality Previews: VR will let clients 'visit' destinations before booking.",
          "AI Travel Assistants: Chatbots handling bookings, recommendations, and customer service.",
          "Sustainable Tourism: Growing focus on eco-friendly travel and responsible tourism.",
          "Medical Tourism: India becoming hub for medical tourism with specialized travel packages.",
          "Experiential Travel: Shift from sightseeing to authentic experiences and cultural immersion."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Learn a Language: French, Spanish, or Japanese. Instantly doubles salary potential and career opportunities.",
          "Geography Mastery: Be the person who knows where 'Isle of Skye' is without looking at map. Study world geography.",
          "Start a Blog/Vlog: Document a local trip. Show how you planned it. Build portfolio and audience.",
          "Summer Internship: Work 2 weeks at local travel desk or hotel. Gain real-world experience.",
          "Travel Widely: Explore different regions of India. Understand diverse cultures and destinations.",
          "Read Travel Literature: Follow travel blogs, magazines, and books. Stay updated on trends.",
          "Develop Tech Skills: Learn booking systems, GDS basics, and travel software.",
          "Cultural Awareness: Learn about different cultures, customs, and traditions.",
          "Photography Skills: Learn to capture travel moments. Visual content is crucial.",
          "Networking: Connect with travel professionals and industry experts."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Travel & Tourism Personalities",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Deep Kalra: Founder of MakeMyTrip. Revolutionized how Indians book travel online. Pioneer of online travel in India.",
          "V. Sunil: Creative mind behind 'Incredible India' campaign. Made the world look at India as a tourism destination.",
          "Shoba Mohan: Founder of Rare India. Pioneer in promoting conscious and boutique travel experiences.",
          "Hari Nair: Founder of HolidayIQ. Changed how we use reviews to plan trips. Democratized travel information.",
          "Zubin Karkaria: CEO of VFS Global. Turned visa processing into global business empire.",
          "Rajesh Masrani: Known for corporate and sports event management. Managed major tourism events.",
          "Priya Paul: Chairperson of Apeejay Surrendra Park Hotels. Pioneer in boutique and heritage tourism."
        ]
      }
    ]
  },
  wedding_planner: {
    slug: "wedding_planner",
    badge: "💍 The Architect of Happily Ever After for Class 10+",
    heading: "Wedding Planning",
    subheading: "Design dreams into reality. Orchestrate India's most cherished moments. From intimate ceremonies to grand celebrations, create memories that last a lifetime.",
    whyCards: [
      { icon: "Heart", title: "$238B Industry by 2030", description: "India's wedding industry valued at $105B in 2024, projected to reach $238B by 2030. Second-largest wedding market globally.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "14.5% CAGR Growth", description: "One of the fastest-growing sectors in India. Massive job creation and entrepreneurship opportunities.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand for Indian planners in Dubai, Turkey, Thailand, Italy for NRI weddings. International expansion potential.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Entrepreneurship Hub", description: "Very high freelancing potential. Many planners start own boutique agencies after 2 years. Build personal brand.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "1-3 Years (Diploma to Degree)", color: "bg-green-100 text-green-700" },
      { label: "Entry Age", detail: "After Class 10 or 12", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.5L–₹45L+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$238B", label: "Industry Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "14.5%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Orchestrating India's most cherished moments.",
        color: BLUE,
        content: [
          "Wedding Planning Definition: A specialized branch of event management. Professional responsible for end-to-end execution of a wedding, from engagement to final guest's departure.",
          "The Role: The Visionary (take couple's vague ideas and turn into concrete theme), The Budget Guard (ensure family doesn't overspend while getting best value), The Logistics Master (manage vendors—caterers, florists, makeup artists, photographers, DJs), The Crisis Manager (fix problems before anyone notices).",
          "What They Do: Meet families, understand culture and traditions, create mood boards, design 3D layouts, book venues, hire vendors, manage minute-by-minute schedules, execute flawlessly.",
          "Why It Matters: India's wedding industry is a behemoth. It's the second-largest wedding market in the world, employing millions and keeping traditional Indian arts and crafts alive.",
          "The Scope: Work in luxury event agencies, hospitality groups, boutique planning firms, or as independent entrepreneurs.",
          "The Impact: You're not just planning an event; you're creating memories that families cherish for generations. You're the architect of happily ever after."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The 48-Hour Shift",
        icon: "Clock",
        description: "Real workflow during a wedding execution.",
        color: BLUE2,
        content: [
          "9:00 AM - The Final Check: It's the day of Muhurat. You're at a palace in Udaipur. Walk the 'Mandap' area. Check if flowers are fresh and priest's seating is exactly where it should be.",
          "1:00 PM - The Guest Blitz: Charter flights from Delhi and Mumbai have landed. On phone with transport team. 'Why are vintage cars for Baraat still at workshop?' Resolve delay while ensuring Welcome Drinks served.",
          "4:00 PM - The Backstage Drama: Bride's lehenga has small tear. While family panics, calmly pull 'Wedding Emergency Kit' from bag. Have professional tailor on standby. Crisis averted in 10 minutes.",
          "8:00 PM - The Grand Performance: Baraat arrives! On walkie-talkie. 'Cues for rose petal shower... Now!' As couple exchanges garlands, watching buffet to ensure hot snacks never run out.",
          "2:00 AM - The Wrap: Main ceremony over. While family rests, supervise 'Strike'—dismantling heavy decor for tomorrow's brunch. Finally sit for first real meal, tired but satisfied."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Wedding Planner DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: High Emotional Intelligence (managing flowers and family emotions), Extreme Organization (manage 50 Excel sheets at once), Negotiation Skills (convince top florist for discount), Physical Stamina (on feet 14-18 hours during wedding week), Aesthetic Eye (sense of color, lighting, Instagram-worthy design).",
          "Soft Skills: Communication (clear and professional), Problem-Solving (creative solutions under pressure), Empathy (understand couple's vision and family dynamics), Leadership (manage large teams), Adaptability (handle unexpected changes).",
          "Hard Skills: Project Management, Budget Management, Vendor Coordination, Design Software (Adobe, CAD), Event Management Software, Negotiation and Procurement.",
          "The Self-Check: Do you love creating beautiful experiences? Can you stay calm under extreme pressure? Do you have an eye for aesthetics? If yes, you have the Wedding Planner DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Wedding Workflow",
        icon: "Briefcase",
        description: "The complete wedding planning cycle.",
        color: BLUE2,
        content: [
          "Discovery: Meeting family to understand culture, traditions, budget, and vision. Building rapport and trust.",
          "Design: Creating 'Mood Boards' and 3D layouts of venues. Presenting design concepts and getting approvals.",
          "Booking: Finalizing venue, hiring core team (Catering, Decor, Photography, Music). Negotiating contracts and rates.",
          "Vendor Management: Coordinating with all vendors, managing timelines, ensuring quality standards.",
          "D-Day Execution: Managing 'Show Flow'—minute-by-minute schedule. Coordinating all teams, solving real-time problems.",
          "Guest Experience: Ensuring smooth check-in, seating, food service, entertainment, and departure.",
          "Documentation: Capturing moments through photography and videography. Creating memories.",
          "Post-Wedding: Collecting feedback, settling bills, analyzing what went well, and building portfolio."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Take short-term Certificate Courses in Wedding Planning or Floral Design (3-6 months). Certificate in Wedding Planning.",
          "After Class 12 (Any Stream): Join BBA in Event Management or Diploma in Wedding Planning. Entrance Exams: TIEMCET, CUET.",
          "After Graduation: Pursue PG Diploma or MBA in Event Management with specialization in Luxury Weddings. Entrance Exams: CAT/MAT/CMAT.",
          "Top Institutions: TIEM (Delhi), NIEM (Mumbai/Pune), NAEMD (Ahmedabad), WedCell Institute (Delhi), Asian Institute of Event Management (Bangalore).",
          "Specializations: Destination Weddings, Luxury Weddings, Eco-Friendly Weddings, Cultural/Traditional Weddings, Micro-Weddings."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Wedding Coordinator, 0-2 years): ₹3.5L–₹5L per annum. Learning phase with hands-on experience.",
          "Mid-Level (Senior Planner, 3-5 years): ₹8L–₹15L per annum. Managing multiple weddings and teams.",
          "Senior-Level (Director/Creative Head, 5-10 years): ₹20L–₹45L+ per annum. Leading departments and strategy.",
          "Entrepreneurs: Can earn ₹10L–₹50L+ per wedding for high-end luxury projects. Freelancing very lucrative.",
          "Growth Trajectory: Approximately 3 years to reach 'Senior Planner' and 5-7 years to lead department or start own firm.",
          "Regional Trends: Goa, Jaipur, Udaipur highest-paying for destination specialists. Delhi and Mumbai dominate high-volume luxury market.",
          "Industry Growth: Growing at 14.5% CAGR. Massive expansion expected."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government/Public Fees: ₹30,000–₹70,000 per year. Very affordable but competitive.",
          "Private Institutes (TIEM, NIEM): ₹1.5L–₹3L per year. Better infrastructure and placement.",
          "Duration: 1 year (Diploma) to 3 years (Degree).",
          "Living Costs: ₹15,000–₹25,000/month in metros like Mumbai or Delhi.",
          "Additional Costs: Professional portfolio development, travel for internships, software subscriptions.",
          "ROI: With entry-level salaries of ₹3.5L–₹5L per annum, you can recover investment in 1-2 years. Freelancing offers faster ROI."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top wedding planning institutes across India.",
        color: BLUE,
        content: [
          "North: TIEM (Delhi), WedCell Institute (Delhi), Amity School of Communication (Noida).",
          "West: NIEM (Mumbai/Pune), NAEMD (Ahmedabad), Institute of Hotel Management (Mumbai).",
          "South: Asian Institute of Event Management (Bangalore/Kolkata), Christ University (Bangalore).",
          "East: IIEM (Bhubaneswar), Institute of Hotel Management (Kolkata).",
          "Online: Many institutes offer online courses and certifications in wedding planning.",
          "Note: Choose institutes with industry partnerships, strong placement records, and practical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "TIEM Scholarships: Up to 90% fee waiver for students scoring above 95% in Class 12.",
          "State Schemes: Vocational training grants for students from low-income backgrounds. Check State Skill Development Mission.",
          "NSP: Central government scholarships for professional degree courses.",
          "Merit-Based: Most institutes offer scholarships for top performers in entrance exams.",
          "Corporate Sponsorships: Some event companies sponsor training for candidates who commit to working with them."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "EEMA (Event and Entertainment Management Association): The national industry body. Membership adds credibility.",
          "IAPW (International Association of Professional Wedding Planners): Global certification for luxury experts.",
          "Certified Wedding Planner (CWP): Recommended for international credibility and career advancement.",
          "Specialized Certifications: Destination Wedding Specialist, Luxury Wedding Planner, Eco-Wedding Consultant.",
          "Continuous Learning: Industry certifications, workshops, and advanced training programs enhance skills and reputation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in wedding planning careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Wedding Coordinator, Wedding Planner, Decor Designer, Hospitality Manager, Venue Manager.",
          "New-Age Careers: AI Wedding Invitation Designer, Sustainability Consultant (Eco-friendly weddings), Virtual Reality Venue Designer, Digital Wedding Planner.",
          "Entrepreneurship: Starting boutique agency (Shaadi Squad style), Niche wedding specialist (micro-weddings, eco-weddings), Wedding decor company.",
          "Specialized Roles: Destination Wedding Specialist, Celebrity Wedding Planner, Luxury Wedding Director, Cultural Wedding Consultant.",
          "Freelancing: Independent wedding planner, Wedding consultant, Decor designer, Vendor coordinator."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of wedding planning.",
        color: BLUE,
        content: [
          "Seasonal Income: Most income earned between October and March. June-August can be slow.",
          "High Pressure: There are no 'retakes' in a wedding. One mistake is permanent. Stress levels are high.",
          "Work-Life Balance: You will work when others party. Weekends, holidays, and festivals are your busiest times.",
          "Emotional Labor: Managing family emotions, expectations, and conflicts is emotionally draining.",
          "Physical Demands: Standing for 14-18 hours during wedding week. Physically exhausting.",
          "Perfectionism Pressure: Every detail matters. Couples expect perfection. Mistakes are unforgivable.",
          "Vendor Issues: Dealing with unreliable vendors, last-minute cancellations, and quality issues.",
          "Financial Risk: If wedding goes wrong, reputation and future bookings are at stake."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in wedding planning.",
        color: BLUE2,
        content: [
          "Eco-Weddings: Using zero-waste catering and locally sourced biodegradable decor. Sustainability becoming mandatory.",
          "Tech-Integration: Using AI to manage RSVPs, 'Digital Twin' technology to show couples wedding decor in VR before building.",
          "Niche Weddings: Rise in 'Micro-weddings' (under 50 people) but with extremely high luxury spend.",
          "Virtual Weddings: Hybrid weddings combining in-person and virtual attendance. New skill set required.",
          "Metaverse Weddings: Virtual weddings in metaverse platforms. Emerging opportunity.",
          "Personalization: AI analyzing couple preferences and creating hyper-personalized experiences.",
          "Sustainability Focus: Carbon-neutral weddings, eco-friendly vendors, waste management becoming standard.",
          "Global Fusion: Blending multiple cultural traditions in single wedding. Requires cultural expertise."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Volunteer: Offer to help with school annual days or family functions. Gain real-world experience.",
          "Photography: Learn what looks good on camera. Weddings are all about capturing memories.",
          "Languages: Proficiency in regional languages (Marathi, Tamil, Punjabi, Gujarati) is massive asset for destination planning.",
          "Design Skills: Learn basic design using Canva or Adobe. Understand color theory and aesthetics.",
          "Organization: Practice managing complex projects with multiple moving parts.",
          "Negotiation: Practice negotiating with vendors and service providers.",
          "Social Media: Learn to showcase work on Instagram and Pinterest. Visual platforms are crucial.",
          "Networking: Connect with event professionals and industry experts.",
          "Cultural Knowledge: Learn about different wedding traditions and customs.",
          "Problem-Solving: Practice handling unexpected situations and finding creative solutions."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Wedding Planners & Personalities",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Vandana Mohan (WDC): The architect of Deepika-Ranveer wedding. Pioneer in luxury design and destination weddings.",
          "Tina Tharwani (Shaadi Squad): The 'Modern Planner' who handled Anushka & Virat's secret Italy wedding. Known for contemporary approach.",
          "Aditya Motwane: Luxury expert known for Priyanka Chopra & Nick Jonas wedding. Celebrity wedding specialist.",
          "Devika Narain: Known for 'artisanal' and sustainable wedding designs that tell a story. Pioneer in eco-weddings.",
          "Anant Khandelwal (IWP): Jaipur-based visionary who turned from engineering to become premier destination planner.",
          "Sabbas Joseph (Wizcraft): Co-founder of Wizcraft. Managed IIFA Awards and major celebrity events.",
          "Rajesh Masrani: Known for corporate and sports event management. Managed major IPL events and weddings."
        ]
      }
    ]
  }
};
