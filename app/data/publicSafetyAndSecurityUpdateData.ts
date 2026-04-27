import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const publicSafetyAndSecurityUpdateData: Record<string, CareerPageData> = {
  indian_navy: {
    slug: "indian_navy",
    badge: "⚓ The Silent Guardians of the Seas for Class 10+",
    heading: "Indian Navy",
    subheading: "Protecting India's maritime interests across 7,500+ km of coastline. From submarines to fighter jets, you'll be the shield against threats from the ocean.",
    whyCards: [
      { icon: "Ship", title: "Maritime Powerhouse", description: "Protect 90% of India's trade volume that moves by sea and guard the Blue Economy.", borderColor: "#10B981" },
      { icon: "Globe", title: "Strategic Importance", description: "The 21st century is the 'Century of the Seas.' India is shifting from a Buyer's Navy to a Builder's Navy.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Massive Expansion", description: "Navy plans 175-200 warships by 2035 (up from ~130 today). Huge hiring for crews and officers.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Job Security & Prestige", description: "100% job security for officers, excellent salary with unique allowances like Sea Going Pay and Submarine Pay.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (NDA/INA) or 4 Years (Agniveer)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "NDA, CDS, Direct Entry, Agniveer Scheme", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹40K–₹3.5L+ (Agniveer to Vice Admiral)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "7,500+", label: "Km of Coastline to Protect", gradient: "from-green-500 to-green-600" },
      { value: "175-200", label: "Warships by 2035", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Protecting India's maritime interests and safeguarding the seas.",
        color: BLUE,
        content: [
          "The Indian Navy Definition: A multi-dimensional force that operates on the surface (Destroyers, Frigates), below the surface (Submarines), and above the sea (Fighter Jets, Helicopters, Drones).",
          "Your Mission: Protect India's 7,500+ km coastline, guard trade routes (90% of India's trade volume moves by sea), conduct diplomatic missions, and respond to natural disasters in the Indian Ocean Region.",
          "The Scope: Whether you are a Submariner living underwater for weeks, a Naval Pilot flying off an aircraft carrier, or a Naval Architect designing the next warship, you are the shield against threats from the ocean.",
          "Why It Matters: The 21st century is called the 'Century of the Seas.' With China expanding its naval power and global trade relying on safe oceans, the Indian Navy is shifting from a 'Buyer's Navy' to a 'Builder's Navy.' It is the First Responder in the Indian Ocean Region for natural disasters and the protector of the 'Blue Economy.'"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Lieutenant Commander Kabir",
        icon: "Clock",
        description: "Real workflow of a Naval Officer on a Stealth Frigate.",
        color: BLUE2,
        content: [
          "05:30 AM - Wakey Wakey: The pipe (announcement) blares across the ship. Kabir rolls out of his bunk. Life at sea is a 24/7 cycle. He heads to the bridge (the ship's cockpit) for his watch.",
          "08:00 AM - The Morning Brief: The Captain briefs the officers. Intelligence reports a suspicious pirate vessel 50 nautical miles away. Kabir is tasked with leading the VBSS (Visit, Board, Search, and Seizure) team.",
          "10:00 AM - Action Stations: The alarm rings. This is a drill, but it feels real. Kabir gears up in tactical armor with his team of MARCOS (Marine Commandos) and sailors. They launch a fast boat (RIB) from the ship, racing towards a target dummy.",
          "01:00 PM - Lunch in the Wardroom: The food is surprisingly good—Naval chefs are legendary. He eats with the Chief Engineer and discusses the status of the gas turbine engines. On a ship, the engineer and the warrior must be best friends.",
          "03:00 PM - Admin & Training: Back in his cabin, Kabir finishes paperwork. He then conducts a class for junior sailors on 'Radar Plotting.' A ship is a floating school; you are always learning or teaching.",
          "06:00 PM - Sunset Ceremony: The ship slows down. The ensign (flag) is lowered. For a brief moment, the crew pauses to respect the sea and the nation.",
          "08:00 PM - Night Watch: The ocean is pitch black. Kabir stares at the radar screen. A tiny blip appears. Is it a fishing boat or a submarine periscope? He calculates the speed and trajectory. Vigilance is the price of safety.",
          "10:00 PM - Rest: He hands over the watch to the next officer and heads to his cabin, the gentle rolling of the ship rocking him to sleep instantly."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Naval Officer DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Adaptable - Can you live in a steel box (ship/submarine) with 200 other people for months without internet? The Technical Mind - A ship is a floating city of machines. Do you like understanding how things work? The Leader - Can you take responsibility for a team of 20 sailors when you are just 22 years old? The Calm Voyager - Do you get seasick easily? (Don't worry, you get used to it, but you need a strong stomach!).",
          "Hard Skills: Mathematics & Physics (Navigation is pure math), Engineering knowledge, Swimming (mandatory after joining), Crisis Management.",
          "Soft Skills: OLQ (Officer Like Qualities), Cross-cultural sensitivity (Navy travels to foreign ports), Discipline, Leadership, Adaptability.",
          "The Self-Check: Do you dream of the open seas? Are you interested in technology and leadership? Can you handle isolation and responsibility? If yes, you have the Naval Officer DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Naval Branches",
        icon: "Briefcase",
        description: "Different roles within the Indian Navy.",
        color: BLUE2,
        content: [
          "Executive Branch (The Warriors): General Service (GS) - Command ships, handle navigation, and weapons (Gunnery/Missiles). Pilot/Observer - Fly helicopters/jets or manage airborne radars. Submarine Arm - The silent killers. Operating nuclear or diesel submarines. Hydrography - Mapping the ocean floor for safe navigation.",
          "Engineering Branch (The Fixers): Managing the ship's propulsion (Gas Turbines/Diesel Engines) and hull integrity.",
          "Electrical Branch (The Brains): Managing radars, sonars, communication systems, and missile guidance systems.",
          "Education/Logistics/Medical: Supporting the fleet with training, supplies, and healthcare."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Indian Navy.",
        color: BLUE,
        content: [
          "Officer Route - Cadet Entry: Class 12 (PCM >70%) + JEE Mains → Direct SSB Call → INA, Ezhimala (4 Years).",
          "Officer Route - NDA Entry: Class 12 (PCM) → NDA Exam (UPSC) → NDA Pune (3 Years) + INA (1 Year).",
          "Officer Route - CDS Entry: Graduation (B.Tech/B.Sc) → CDS Exam (UPSC) → INA, Ezhimala.",
          "Officer Route - Direct Entry: BE/B.Tech (Marks based) → Direct SSB Call → INA, Ezhimala.",
          "Officer Route - NCC Entry: Graduate + NCC 'C' Certificate (Naval Wing) → Direct SSB Call → INA, Ezhimala.",
          "Officer Route - INET (Indian Navy Entrance Test): Graduate (various streams) → Often merged with direct entries; check yearly notifications → INA, Ezhimala.",
          "Sailor Route - Agniveer: Class 10 (Matric Recruit - MR) or Class 12 PCM (Senior Secondary Recruit - SSR) → Computer-based Test → Physical Fitness Test → Medicals → 4 Years Service (Top 25% retained permanently)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, expansion, and job security.",
        color: BLUE2,
        content: [
          "Expansion: The Navy plans to have 175-200 warships by 2035 (up from ~130 today). This means massive hiring for crews and officers.",
          "Job Security: 100% for Officers. Agniveers have a 4-year tenure with retention chances for top 25%.",
          "Officer Salaries (7th Pay Commission): Sub Lieutenant (Entry) - ₹56,100 basic, ₹85,000–₹1.1L gross. Lieutenant (2-5 yrs) - ₹61,300 basic, ₹1.1L–₹1.4L gross. Commander (Senior) - ₹1.2L basic, ₹2.2L+ gross. Vice Admiral (Leadership) - ₹2.25L basic, ₹3.5L+ gross.",
          "Agniveer Salaries: Year 1 - ₹30,000/month. Year 4 - ₹40,000/month + Seva Nidhi (~₹11.7L) upon exit.",
          "Unique Allowances: Sea Going Pay (very high), Submarine Pay (extremely high), Foreign Service Allowance, Ration Money."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "Zero Cost: Like the Army and Air Force, the Navy pays for your training. No tuition fees.",
          "Stipend: Gentlemen Cadets get ₹56,100/month during the final stages of training.",
          "Private Costs: Only for coaching or books (approx ₹5,000–₹20,000) before joining.",
          "Duration: 3-4 years for officers (NDA/INA), 4 years for Agniveers.",
          "Post-Joining: All living expenses, food, accommodation, and medical care provided by the Navy."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Institutions)",
        icon: "Building2",
        description: "World-class naval academies.",
        color: BLUE,
        content: [
          "Indian Naval Academy (INA), Ezhimala (Kerala): Asia's largest naval academy. Offers a B.Tech degree to cadets. Located on the Arabian Sea coast.",
          "National Defence Academy (NDA), Pune: Joint training for Class 12 entrants. Trains officers for Army, Navy, and Air Force.",
          "INS Chilka (Odisha): Basic training establishment for Agniveers (Sailors). Comprehensive training in naval operations.",
          "INS Shivaji (Lonavala): Premier technical training institute for engineers. Specializes in mechanical and engineering training.",
          "INS Valsura (Jamnagar): Electrical and electronics training. Specializes in radar, sonar, and communication systems."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "PM Scholarship Scheme (PMSS): For wards of Ex-servicemen/Coast Guard personnel to pursue professional degrees (₹2,500-₹3,000/month).",
          "Institutional Scholarships: Manipal Academy (MAHE) and Sharda University offer fee waivers for wards of defense personnel.",
          "Education Loans: Navy personnel get loans at very low interest rates via the Naval Group Insurance Fund (NGIF) for their children's education.",
          "Agniveer Benefits: Seva Nidhi package (~₹11.7L) upon exit can be used for further education or starting a business."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies, Certifications & Licensing",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "STCW Certifications: Navy officers can easily convert their experience into 'Standards of Training, Certification and Watchkeeping' (STCW) certificates required for the Merchant Navy.",
          "Diving/Pilot Licenses: Deep-sea divers and pilots get certifications that are valid globally for commercial diving or airline flying.",
          "Naval Engineering Certifications: Marine engineering qualifications recognized internationally.",
          "Professional Bodies: Indian Navy Officers Association, Naval Officers' Association of India.",
          "These certifications significantly enhance career prospects and earning potential in civilian sectors."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in naval careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Gunnery Officer (in charge of firing missiles), Anti-Submarine Warfare Officer (hunting enemy subs), Marine Engineer (maintaining ship engines), Naval Pilot (flying helicopters/jets), Submariner (operating submarines), Naval Architect (designing warships).",
          "New-Age Careers: Drone Operator (flying surveillance drones), Cyber Security Officer (protecting naval networks), Space Command Officer (satellite surveillance), AI Systems Officer (autonomous naval systems).",
          "Emerging Roles: Unmanned Surface Vessel (USV) Commander, Quantum Communication Specialist, Hypersonic Weapons Specialist.",
          "Freelancing/Post-Retirement: Maritime Security Consultant (advising shipping companies on piracy), Scuba Diving Instructor (opening a diving school), Naval Historian/Author, Defense Analyst."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of naval service.",
        color: BLUE,
        content: [
          "Sea Blindness: The public often forgets the Navy because it operates far away at sea. You won't get the daily visibility of a policeman.",
          "Isolation: You can be at sea for 45-60 days without seeing land or calling home. It takes a mental toll.",
          "Family Life: Missing anniversaries and your child's first steps is common. Families live in separated accommodations for long periods.",
          "Rough Seas: Seasickness is real. Storms can be terrifying.",
          "Submarine Duty: Extreme isolation and psychological pressure of living underwater for weeks.",
          "Physical Demands: High-stress situations, physical training, and demanding work schedules.",
          "Separation from Loved Ones: Extended deployments away from family and friends."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the Indian Navy.",
        color: BLUE2,
        content: [
          "Unmanned Surface Vessels (USVs): Ghost ships with no crew, controlled remotely. Tech-savvy officers will 'captain' ships from a desk in Mumbai.",
          "Indigenization: The Navy is building everything in India (INS Vikrant, Nuclear Subs). Engineers will work on cutting-edge Desi tech.",
          "Women in Navy: The Navy is now gender-neutral. Women are flying helicopters, flying Dorniers, and will soon command warships.",
          "AI and Autonomous Systems: Integration of AI for navigation, targeting, and decision-making.",
          "Hypersonic Weapons: Development of next-generation weapons systems.",
          "Cyber Warfare: Growing importance of cyber security and digital defense.",
          "Impact on Employment: New roles for tech specialists, AI engineers, cyber security experts. Required skills: Programming, AI/ML, cybersecurity, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Swimming: Learn it. You can't join the Navy if you fear water. Practice regularly and build confidence.",
          "Physics & Math: These are the languages of the Navy. Master them. Focus on mechanics, navigation, and problem-solving.",
          "Sea Cadets Corps (SCC): Similar to NCC but for the Navy. Join if your city has a unit. Learn naval operations and discipline.",
          "Leadership: Become a House Captain or Sports Captain. The Navy wants leaders, not just followers.",
          "Physical Fitness: Build stamina and strength. Practice running, swimming, and other sports regularly.",
          "Current Affairs: Follow news on naval operations, geopolitics, and maritime issues.",
          "Technical Skills: Learn basic computer skills and programming. Understand how ships operate.",
          "Discipline: Develop punctuality, responsibility, and commitment.",
          "Teamwork: Participate in group activities and team sports. Naval service is all about teamwork.",
          "Communication: Develop clear and effective communication skills.",
          "Problem-Solving: Practice logical thinking and problem-solving.",
          "Observation: Develop keen observation skills and attention to detail."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Naval Personalities",
        icon: "User",
        description: "Inspiring figures in the Indian Navy.",
        color: BLUE2,
        content: [
          "Admiral S.M. Nanda: 'The Man Who Bombed Karachi.' The Naval Chief in 1971 who dared to attack Pakistan's harbor, changing the war.",
          "Captain Mahendra Nath Mulla (MVC): The Captain of INS Khukri who chose to go down with his sinking ship in 1971, giving his life jacket to a junior sailor. A symbol of ultimate sacrifice.",
          "Commander Abhilash Tomy: The first Indian to circumnavigate the globe solo and non-stop on a sailboat. A modern-day legend of endurance.",
          "Vice Admiral Hari Kumar: Known for modernizing the Navy's theater commands and strategic operations.",
          "Sub Lieutenant Shivangi: The first woman pilot of the Indian Navy, inspiring millions of girls to aim for the skies and seas.",
          "Admiral Sunil Lanba: Former Chief of Naval Staff who led the Navy's modernization and expansion.",
          "Vice Admiral Pradeep Chauhan: Known for his expertise in naval strategy and maritime security."
        ]
      },
      {
        id: "sources",
        title: "Sources & Further Reading",
        icon: "BookOpen",
        description: "Trusted references and books for deeper exploration.",
        color: BLUE,
        content: [
          "Official Website: joinindiannavy.gov.in (the official source for applications and notifications).",
          "Salary Data: 7th Pay Commission Matrix and Indian Navy salary benchmarks.",
          "Market Trends: Indian Navy indigenization and force expansion plans.",
          "Further Reading: The Sinking of INS Khukri (Ian Cardozo), Operation X (Captain M.N.R. Samant), Blueprint to Blue Water (Indian Navy history)."
        ]
      }
    ]
  },
  indian_police: {
    slug: "indian_police",
    badge: "🛡️ The Shield of the Nation for Class 10+",
    heading: "Indian Police",
    subheading: "Maintaining law and order across India's 1.4 billion people. From solving crimes to preventing terrorism, you'll be the first responder to every crisis.",
    whyCards: [
      { icon: "Shield", title: "Nation's Protector", description: "Maintain law and order in a chaotic, vibrant democracy of 1.4 billion people.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Massive Hiring", description: "India has a shortage of over 5 Lakh police personnel. States are hiring aggressively to fill gaps.", borderColor: "#059669" },
      { icon: "Zap", title: "Diverse Opportunities", description: "From cyber police to special forces, from traffic management to intelligence agencies.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Job Security & Prestige", description: "100% job security, excellent salary, and the respect of serving the nation.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-6 Months Training (Constable) to 2 Years (IPS Academy)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "Constable, SI, IPS, State Police, CAPF", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹30K–₹3L+ (Constable to DGP)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "5 Lakh+", label: "Police Personnel Shortage", gradient: "from-green-500 to-green-600" },
      { value: "1.4B", label: "Population to Protect", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Maintaining law and order and ensuring justice for all.",
        color: BLUE,
        content: [
          "The Indian Police Definition: The state's primary tool to enforce rules, prevent crime, and ensure justice. Unlike the Army, which fights external enemies, the Police fight 'internal enemies'—criminals, terrorists, rioters, and fraudsters.",
          "The Two-Level System: State Police (e.g., UP Police, Mumbai Police) responsible for daily law and order in their specific state. Central Armed Police Forces (CAPF) (e.g., CRPF, BSF, CISF) which assist states and guard borders/airports.",
          "Your Mission: Finding lost children, stopping cyber-attacks on banks, preventing riots, solving murders, and maintaining public order.",
          "Why It Matters: India is a chaotic, vibrant democracy of 1.4 billion people. Without the police, society would collapse into anarchy. The police are the first responders to every crisis—from natural disasters to terrorist attacks."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: ACP Riya",
        icon: "Clock",
        description: "Real workflow of an IPS officer in a busy district.",
        color: BLUE2,
        content: [
          "07:00 AM - Morning Routine: Riya starts her day with a 5km run. Fitness isn't optional; it's survival. She checks her phone for 'Flash Reports' (overnight crime updates) while drinking her tea. A theft was reported in Sector 4.",
          "09:30 AM - The Junta Darbar: She reaches her office. A queue of people is waiting. A weeping mother complains her son is missing; a shopkeeper complains about local goons. Riya listens patiently and instructs her Sub-Inspectors (SIs) to register FIRs. Empathy is her biggest weapon.",
          "11:30 AM - Field Visit: She drives to the theft spot. She doesn't just look around; she questions the beat constables. 'Why was the CCTV camera not working?' She demands accountability.",
          "02:00 PM - Crisis Management: A protest has broken out near the University. Riya rushes to the spot. She puts on her riot gear. She stands between the angry mob and public property. She uses the microphone to calm the crowd. 'We will hear you, but you must clear the road.' It's a test of nerves.",
          "05:00 PM - Investigation Review: Back at the station, she reviews case files of a murder investigation. She spots a gap in the timeline and orders a re-interrogation of the suspect.",
          "08:00 PM - Night Rounds: The city sleeps, but crime doesn't. Riya patrols sensitive areas in her Gypsy. The flashing blue beacon is a signal to criminals: The police are watching.",
          "10:00 PM - Home: She takes off her uniform, the weight of the city lifting off her shoulders. She reads a book on cyber law before sleeping—tomorrow brings new challenges."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Police Officer DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Protector - Do you feel an urge to intervene when you see someone being bullied? The Detective - Do you love solving puzzles or mysteries? Police work is 60% investigation. The Mediator - Can you calm down two fighting friends? Police often act as peacemakers. The Night Owl - Crime happens at 2 AM. Can you function without sleep?",
          "Hard Skills: Law (IPC/CrPC), Investigation techniques, Physical Combat/Self Defense, and increasingly, Cyber Forensics.",
          "Soft Skills: Communication (you talk to beggars and billionaires), Patience, Integrity (the ability to say 'No' to a bribe), Leadership.",
          "The Self-Check: Do you have a strong sense of justice? Can you handle pressure and make tough decisions? Are you physically fit and mentally strong? If yes, you have the Police Officer DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Core duties of a police officer.",
        color: BLUE2,
        content: [
          "Prevention: Patrolling beats to stop crime before it happens. Building community relationships.",
          "Investigation: Visiting crime scenes, collecting evidence (fingerprints/CCTV), and interrogating suspects.",
          "Law Enforcement: Arresting criminals and producing them in court. Ensuring proper legal procedures.",
          "Traffic Management: Ensuring smooth flow of vehicles and preventing accidents.",
          "VIP Security: Protecting politicians, diplomats, and other important persons.",
          "Public Order: Managing riots, protests, and maintaining peace during sensitive situations.",
          "Record Keeping: Maintaining detailed records of crimes, arrests, and investigations."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Indian Police.",
        color: BLUE,
        content: [
          "Constable Route (Entry Level): Class 12 pass → State Police Constable Recruitment or SSC GD (for CRPF/BSF) → Written Test → Physical Test → Medicals →  Constable → Head Constable → ASI.",
          "Sub-Inspector Route (Mid-Level): Graduation (any degree) → State SI Exam or SSC CPO (for CAPFs) → Written → Physical Endurance Test → Medicals →  SI → Inspector → DySP/ACP.",
          "IPS Route (Leadership Level): Graduation (any degree) → UPSC Civil Services Examination (CSE) → High rank required to choose IPS →  ASP → SP (District Chief) → DIG → IG → DGP (State Chief).",
          "State Officer Route (PPS/TPS): State PSC Exam (e.g., UPPSC, MPSC) → DySP (Deputy Superintendent of Police) → Promoted to IPS after ~15-20 years."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, vacancies, and hiring trends.",
        color: BLUE2,
        content: [
          "Vacancy Crisis: India has a shortage of over 5 Lakh police personnel. States like UP, Bihar, and West Bengal are hiring aggressively.",
          "Hiring Trends: Cyber Police - Every district is setting up a 'Cyber Cell.' Tech-savvy graduates are in high demand. Women Police - Government aims to increase women in police to 33% (currently ~10%).",
          "Constable Salary: Basic ₹21,700, Gross ₹30,000–₹40,000/month.",
          "Sub-Inspector Salary: Basic ₹35,400, Gross ₹50,000–₹65,000/month.",
          "DSP/ACP Salary: Basic ₹56,100, Gross ₹75,000–₹90,000/month.",
          "IPS Officer (SP) Salary: Basic ₹78,800, Gross ₹1.1L–₹1.4L/month.",
          "DGP Salary: Basic ₹2,25,000, Gross ₹3.0L+/month."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "Zero Training Cost: Once selected, the government pays for your training, food, and uniform. You actually earn a salary/stipend during training!",
          "Preparation Cost: UPSC/SSC Coaching - ₹20,000–₹1.5L (Optional). Self-Study - ₹2,000 for books.",
          "Duration: 3-6 months training for Constable, 6-12 months for SI, 2 years for IPS Academy.",
          "Post-Joining: All living expenses, food, accommodation, and medical care provided by the government."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Academies)",
        icon: "Building2",
        description: "Prominent police training institutions.",
        color: BLUE,
        content: [
          "Sardar Vallabhbhai Patel National Police Academy (SVPNPA), Hyderabad: The premier academy for IPS officers. World-class training in law, tactics, and firing.",
          "State Police Academies: Moradabad (UP), Madhuban (Haryana), Phillaur (Punjab) - Historic academies for State officers (DySPs/SIs).",
          "North Eastern Police Academy (NEPA), Meghalaya: For North East police officers.",
          "National Industrial Security Academy (NISA), Hyderabad: For CISF officers.",
          "Central Detective Training Institute (CDTI), Delhi: For advanced investigation training.",
          "National Forensic Sciences University (NFSU), Gandhinagar: For forensic science training."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "PM Scholarship Scheme (PMSS): For wards of police personnel martyred or disabled in duty (₹2,500-₹3,000/month for college).",
          "Police Welfare Funds: Every state police has a welfare fund that sponsors the education of children of policemen.",
          "Ex-Gratia Grants: State governments provide financial aid to families of policemen injured/killed in action.",
          "Education Loans: Police personnel get loans at very low interest rates for their children's education.",
          "Merit Scholarships: Various state governments offer merit-based scholarships for police aspirants."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "The Uniform: Your uniform is your license. The 'Ashoka Emblem' on your shoulder is the highest authority.",
          "Certifications (Post-Joining): Commando Course (NSG Manesar or Greyhounds), Cyber Crime Investigation (Certified by CDTI), Forensic Science (Courses from NFSU), Advanced Investigation Techniques.",
          "Professional Bodies: Indian Police Service Association, State Police Officers' Association.",
          "International Certifications: INTERPOL training, UN Peacekeeping certifications.",
          "These credentials significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in police careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: SHO (Station House Officer - the 'King' of a police station), Traffic Sergeant (managing city traffic), Inspector (investigating crimes), DySP/ACP (administrative and operational leadership).",
          "New-Age Careers: Cyber Cop (tracking hackers and online fraudsters, Dark Web analysis), Drone Pilot (using drones for crowd control during riots or Kumbh Mela), Forensic Analyst (using science to solve crimes - DNA profiling), AI Systems Officer (using AI for predictive policing).",
          "Specialized Roles: Commando (NSG or Greyhounds), Intelligence Officer (IB/RAW), Railway Police (GRP), Airport Security (CISF).",
          "Freelancing/Post-Retirement: Private Detective (opening a detective agency), Security Consultant (advising corporates on security), Trainer (teaching self-defense or investigation techniques)."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of police service.",
        color: BLUE,
        content: [
          "Political Pressure: You will often receive calls from politicians asking you to release a suspect or drop a case. It takes immense courage to say 'No.'",
          "24/7 Duty: Police have no weekends. Festivals like Diwali and Eid are your busiest workdays.",
          "Public Perception: People often fear or dislike the police. You have to work hard to earn their trust ('Community Policing').",
          "Mental Health: Witnessing crime, death, and violence daily can lead to trauma (PTSD).",
          "Corruption Temptation: You will face bribes and pressure to bend rules. Integrity is your only shield.",
          "Physical Danger: Police work can be dangerous. You may face violence or threats.",
          "Work-Life Balance: Long hours and unpredictable schedules make family life challenging."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in Indian policing.",
        color: BLUE2,
        content: [
          "Smart Policing: Using AI cameras for 'Facial Recognition' to spot criminals in a crowd instantly.",
          "Predictive Policing: AI software analyzing data to predict where a crime might happen next, so police can reach there beforehand.",
          "Body Cameras: By 2030, most police officers will wear body cams to record interactions, reducing corruption and false allegations.",
          "Cyber Warfare: Growing focus on cybercrime, online fraud, and digital security.",
          "Drone Technology: Drones for surveillance, crowd control, and emergency response.",
          "Women in Police: Increasing representation of women in all ranks and specialized roles.",
          "Impact on Employment: New roles for tech specialists, AI engineers, cyber security experts, data analysts. Required skills: Programming, AI/ML, cybersecurity, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Physical Fitness: Start running. Join the NCC (National Cadet Corps). It gives you a taste of discipline and uniform.",
          "Learn the Law: Read about basic rights. What is an FIR? What is an Arrest Warrant? Knowledge is power.",
          "Martial Arts: Learn Judo or Karate. It builds confidence and self-defense skills.",
          "Observation Skills: Play memory games. Look at a room for 1 minute and try to recall every detail. A cop notices what others miss.",
          "Communication: Develop clear and effective communication skills. Practice public speaking.",
          "Problem-Solving: Practice logical thinking and problem-solving.",
          "Current Affairs: Follow news on crime, law, and order. Understand social issues.",
          "Discipline: Develop punctuality, responsibility, and commitment.",
          "Teamwork: Participate in group activities and team sports. Police work is all about teamwork.",
          "Ethics: Develop strong moral values and integrity. This is the foundation of police work."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Police Personalities",
        icon: "User",
        description: "Inspiring figures in the Indian Police.",
        color: BLUE2,
        content: [
          "Kiran Bedi: India's first woman IPS officer. Famous for reforming Tihar Jail and being a tough, no-nonsense cop.",
          "Ajit Doval: A legendary IPS officer (Kerala Cadre) who was an undercover spy in Pakistan for years. Now India's National Security Advisor (NSA).",
          "K. Vijay Kumar: The IPS officer who led the operation that hunted down the forest brigand Veerappan.",
          "Shivdeep Lande: Known as the 'Singham of Bihar.' A super-cop famous for his strict action against criminals and deep connection with the youth.",
          "Sanjukta Parashar: Known as the 'Iron Lady of Assam,' she led commando operations against Bodo militants in jungles.",
          "Neeraj Kumar: Former Delhi Police Commissioner known for modernizing the force and fighting corruption.",
          "Rakesh Maria: Legendary Mumbai Police officer known for solving high-profile cases and his integrity."
        ]
      }
    ]
  },
  indian_secret_services: {
    slug: "indian_secret_services",
    badge: "The Silent Sentinels for Class 10+",
    heading: "Indian Secret Services",
    subheading: "In Intelligence Bureau and R&AW pathways, officers protect India through information supremacy, counter-intelligence, and strategic foresight across shadow, digital, and geopolitical domains.",
    whyCards: [
      { icon: "Shield", title: "Invisible National Shield", description: "A single verified intelligence lead can prevent large-scale national crises before they unfold.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Strategic Demand", description: "Hiring is increasingly focused on SIGINT, cyber intelligence, data analytics, and language expertise.", borderColor: "#059669" },
      { icon: "Zap", title: "High-Impact Decisions", description: "Officers convert fragmented data into actionable intelligence for real-time national response.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Prestige With Purpose", description: "Your success remains largely unseen, but directly contributes to sovereignty and internal stability.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Selection + Training + Ongoing Field Learning (Multi-Year)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "ACIO, UPSC (IPS/IFS), Technical and Lateral Channels", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "Rs9L-Rs60L+ (With Special Security Allowance)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1.4B", label: "Population Protected Through Intelligence", gradient: "from-green-500 to-green-600" },
      { value: "20%", label: "Typical Special Security Allowance", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Information supremacy for national security.",
        color: BLUE,
        content: [
          "Indian Secret Services careers center on intelligence and counter-intelligence to maintain national stability against invisible threats.",
          "Intelligence officers are silent sentinels who combine human psychology, signals intelligence, and geopolitical analysis to neutralize risk.",
          "The role is the art and science of information supremacy, balancing secrecy, speed, and ethical judgment under pressure.",
          "As warfare expands into digital and shadow domains, these professionals become invisible architects behind strategic state decisions."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: An Intelligence Officer",
        icon: "Clock",
        description: "High-trust, high-pressure, high-impact workflow.",
        color: BLUE2,
        content: [
          "07:30 AM - Signal Scrutiny: Review overnight flash reports, decrypted intercepts, and satellite cues for border or chatter anomalies.",
          "10:00 AM - Asset Coordination: Brief handlers on secure channels and validate HUMINT leads such as possible financial data breach plans.",
          "01:30 PM - Threat Modeling: Run simulation models to assess how local disruptions could be exploited by hostile networks.",
          "04:30 PM - Cabinet Briefing: Translate raw streams into actionable intelligence for diplomatic or cyber counter-measures.",
          "08:00 PM - Deep Encryption Study: Continuous upskilling in domains like quantum cryptography and advanced surveillance defense."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits and Skills)",
        icon: "User",
        description: "Check your Intelligence DNA.",
        color: BLUE,
        content: [
          "Analytical Curiosity: You probe motives and second-order geopolitical effects beyond obvious headlines.",
          "Stoic Composure: You stay rational while handling classified information and high-stakes ambiguity.",
          "Adaptive Stealth: You blend into varied social environments without exposing intent or compromise.",
          "Unwavering Integrity: You are mission-driven even when your achievements cannot be publicly acknowledged.",
          "Pattern Recognition: You connect financial, behavioral, and encrypted signals to pre-empt crises before manifestation."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Intelligence -> Analysis -> Neutralization loop.",
        color: BLUE2,
        content: [
          "Information Collection: Acquire HUMINT, SIGINT, and OSINT inputs to detect emerging and hidden threats.",
          "Strategic Analysis: Evaluate chatter quality, connect disparate evidence, and predict hostile maneuvers.",
          "Asset Management: Recruit and handle deep-cover sources while maintaining operational security.",
          "Counter-Intelligence: Conduct internal security audits and protect the system against infiltration and honeytraps.",
          "Liaison and Coordination: Share verified intelligence with law enforcement and national decision bodies for immediate action.",
          "Shadow Operations: Support discreet disruption of hostile financing, logistics, and propaganda pipelines."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Primary entry channels into IB, R&AW, and technical intelligence.",
        color: BLUE,
        content: [
          "Entry via SSC and UPSC: ACIO-II routes and civil services pathways (IPS/IFS) are common feeders for strategic assignments.",
          "Specialized and Lateral Entry: Cybersecurity, cryptography, and data science experts are recruited for digital warfare domains.",
          "Armed Forces Lateral Shift: Military intelligence experience often transitions into advanced technical organizations such as NTRO.",
          "Professional Roadmap: Written selection, deep verification, specialized tradecraft training, then field and desk growth tracks."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot - India 2026",
        icon: "TrendingUp",
        description: "Salary, growth outlook, and hiring priorities.",
        color: BLUE2,
        content: [
          "Entry-Level (0-2 years): approximately Rs9L-Rs13L gross annual range.",
          "Mid-Level (7-12 years): approximately Rs16L-Rs26L annual range.",
          "Senior (15-22 years): approximately Rs30L-Rs42L annual range.",
          "Leadership (25+ years): approximately Rs45L-Rs60L+ annual range.",
          "Compensation framework includes 7th Pay Commission structures with Special Security Allowance and foreign assignment benefits.",
          "Budget trend shows sustained growth, with stronger demand in SIGINT, big data intelligence, and linguistic specialization."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Preparation investment before induction.",
        color: BLUE2,
        content: [
          "Application fees are generally affordable for IB and UPSC channels with category-based exemptions.",
          "Focused study resources for polity, internal security, and reasoning typically require a moderate budget.",
          "Optional interview and descriptive preparation coaching can add additional cost.",
          "Candidates may spend on psychometric and suitability preparation plus baseline medical checks.",
          "Once selected, government-funded training, travel, and equipment are covered with salaried officer onboarding."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Academic and training pipelines for intelligence careers.",
        color: BLUE,
        content: [
          "Rashtriya Raksha University offers specialized national security and intelligence-aligned programs.",
          "Agency training ecosystems provide structured tradecraft, surveillance, analysis, and fieldcraft development.",
          "National Forensic Sciences pathways strengthen digital forensics and behavioral investigation capability.",
          "IIT and IIIT technical backgrounds are highly valued for cyber, electronics, and technical intelligence tracks.",
          "Private universities and policy think-tank exposure can strengthen strategy, cybersecurity, and research orientation."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship and Support Opportunities",
        icon: "Award",
        description: "Financial support mechanisms and welfare schemes.",
        color: BLUE2,
        content: [
          "Welfare funds support technical and professional education for children of serving and retired personnel.",
          "Prime Minister scholarship pathways and related schemes support eligible wards and widows in professional education.",
          "Merit scholarships at strategic universities can reduce tuition burden in national security programs.",
          "Special Security Allowance often helps officers finance advanced certifications and ongoing specialization.",
          "Dedicated grants exist for dependents of martyred officers, including full or near-full education support."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies and Licensing",
        icon: "Award",
        description: "Governance and legal ecosystem for intelligence operations.",
        color: BLUE,
        content: [
          "Cabinet Secretariat and Ministry of Home Affairs provide top-level governance oversight across major intelligence structures.",
          "National Security Council framework aligns intelligence outcomes with long-term state strategy and foreign policy.",
          "UPSC remains the key gateway for Group A officers feeding leadership pipelines in intelligence-linked cadres.",
          "NTRO anchors technical standards for surveillance, cyber systems, and high-end intelligence technologies.",
          "NATGRID and joint intelligence coordination bodies integrate multi-source datasets into unified threat assessment pipelines.",
          "Statutory restrictions and rights frameworks impose strict confidentiality and professional conduct obligations."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of a shadow profession.",
        color: BLUE2,
        content: [
          "Selection is exceptionally competitive and opaque, demanding mental resilience and clean background credentials.",
          "Life in the shadows means maintaining cover stories and living with limited social visibility of your real work.",
          "Operations are unpredictable with 24x7 readiness, crisis war-room cycles, and sudden movement requirements.",
          "Sustained exposure to sensitive threats can create psychological load and requires disciplined mental health management.",
          "Field postings may involve volatile regions and austere conditions without conventional support systems.",
          "Ethical decisions often carry immediate operational and long-term national consequences."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends (2025-2035)",
        icon: "Sparkles",
        description: "How intelligence work is transforming.",
        color: BLUE,
        content: [
          "Predictive intelligence with AI and ML will shift operations from reaction to preemption at national scale.",
          "Cognitive warfare and deepfake ecosystems will elevate demand for influence-defense and narrative-security specialists.",
          "Quantum cryptography adoption will secure top-secret communication against next-generation computation threats.",
          "Space intelligence and GEOINT roles will expand with high-revisit satellite analysis and border monitoring.",
          "OSINT and dark-web intelligence will become core pillars for tracking transnational crime and hybrid conflict networks."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Early foundations for intelligence careers.",
        color: BLUE2,
        content: [
          "Strengthen analytical reasoning using logic puzzles, pattern recognition exercises, and structured problem-solving.",
          "Build linguistic depth through foreign or regional language study for field adaptability and source engagement.",
          "Develop cybersecurity basics including encryption concepts, digital hygiene, and secure communication principles.",
          "Practice observation and situational awareness drills to improve memory, detail retention, and anomaly detection.",
          "Follow geopolitical and national security developments consistently to build strategic context.",
          "Improve concise report writing because intelligence value depends on clarity and actionable communication.",
          "Train physical and mental resilience through endurance sports, martial arts, and emotional regulation habits."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspirational figures in Indian intelligence history.",
        color: BLUE,
        content: [
          "R.N. Kao: Founding architect of R&AW who shaped modern Indian external intelligence capability.",
          "Ajit Doval: Former intelligence veteran and National Security Advisor known for deep operational and strategic roles.",
          "B. Raman: Influential counter-terror analyst and foundational voice in strategic threat interpretation.",
          "K. Sankaran Nair: Key leader in strengthening institutional depth and technical expansion during formative decades.",
          "Ajit Kumar Syal: Decorated intelligence officer associated with high-value domestic HUMINT and insurgency work.",
          "Vikram Sood: Former R&AW chief and noted author who advanced public understanding of intelligence tradecraft."
        ]
      }
    ]
  },
  disaster_management: {
    slug: "disaster_management",
    badge: "🚨 The Guardians of Safety for Class 10+",
    heading: "Disaster Management",
    subheading: "Reducing risk and managing emergencies before, during, and after disasters. From cyclone preparedness to earthquake response, you'll be the first line of defense for the nation.",
    whyCards: [
      { icon: "AlertTriangle", title: "Disaster-Prone Nation", description: "India faces floods, cyclones, landslides, and earthquakes. Climate change is making disasters more unpredictable.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Growing Demand", description: "Jobs growing at 15% annually with focus shifting from 'Relief' to 'Resilience' and prevention.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Work with UN agencies, international NGOs, and global disaster response organizations.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Life-Saving Impact", description: "Save lives through planning, technology, and swift action. Make a real difference in people's lives.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "MA/M.Sc (2 Yrs) or PG Diploma (1 Yr)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "Social Science, Science/Tech, or Uniformed Services", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3L–₹1.5Cr+ (Entry to Leadership)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "15%", label: "Annual Job Growth Rate", gradient: "from-green-500 to-green-600" },
      { value: "1.4B", label: "Lives Protected in India", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Reducing risk and managing emergencies to save lives.",
        color: BLUE,
        content: [
          "Disaster Management Definition: The science and art of reducing risk and managing emergencies. It is not just about rescuing people after an earthquake or flood (that's response). It is about planning before (preparedness), acting during (response), and rebuilding after (recovery).",
          "The Four Phases: Mitigation (preventing the disaster), Preparedness (getting ready), Response (the action during disaster), Recovery (rebuilding after).",
          "Your Mission: Coordinate evacuations, manage relief supplies, train volunteers, use technology to predict disasters, and help communities rebuild.",
          "Why It Matters: India is one of the most disaster-prone countries in the world. We face floods, cyclones, landslides, and now, man-made disasters like chemical leaks and cyber-attacks. With Climate Change making weather unpredictable, Disaster Management professionals are the 'First Line of Defense' for the nation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Vikram, District Disaster Management Officer",
        icon: "Clock",
        description: "Real workflow of a disaster management professional.",
        color: BLUE2,
        content: [
          "08:00 AM - Morning Briefing: Vikram reaches his control room. It's monsoon season. He checks satellite data from the Indian Meteorological Department (IMD). The river levels are rising. He alerts the Block Development Officers (BDOs) to be on standby.",
          "10:00 AM - Community Drill: He drives to a riverside village. Today, he is conducting a 'Mock Drill.' He teaches villagers what to do when the warning siren blows. He shows them how to pack a 'Go-Bag' with documents and dry food. Seeing children learn to wear life jackets makes him smile.",
          "01:00 PM - Crisis Management: A call comes in. A small landslide has blocked a key highway. Vikram coordinates with the PWD (roads department) to send bulldozers and the Traffic Police to divert vehicles. He manages the 'Incident Command System' from his phone.",
          "03:00 PM - Supply Chain Meeting: The Red Cross and local volunteer groups are in his office. They check the inventory of relief supplies—rice, dal, tarpaulins, and medicines. Vikram notices a shortage of water purification tablets and places an urgent order.",
          "05:00 PM - Technology Update: He logs into the state's Disaster Management portal. He updates the 'Vulnerability Map'—marking areas that are now safe and areas that are high-risk. This data helps the Chief Minister make decisions.",
          "08:00 PM - On-Call: He heads home. The rain is pouring heavily. He keeps his phone volume on high. In this job, you are never truly 'off duty.' But knowing his district is ready gives him a peaceful sleep."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Disaster Manager DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Calm Commander - When a glass breaks or someone gets hurt, do you panic, or do you immediately start helping? Panic has no place here. The Planner - Do you always have a 'Plan B'? The Team Player - You cannot work alone. You need to work with police, doctors, and villagers. The Empathetic - You will meet people who have lost their homes. Can you comfort them while doing your job?",
          "Hard Skills: GIS & Remote Sensing (reading satellite maps), Data Analysis, First Aid/CPR, Risk Assessment methods, Project Management.",
          "Soft Skills: Decision Making under pressure, Communication (giving clear orders), Leadership, Empathy, Problem-solving.",
          "The Self-Check: Do you stay calm in emergencies? Can you make tough decisions quickly? Do you care about helping people? If yes, you have the Disaster Manager DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Disaster Management Cycle",
        icon: "Briefcase",
        description: "Core duties across all phases of disaster management.",
        color: BLUE2,
        content: [
          "Mitigation: Preventing the disaster (e.g., Building earthquake-resistant schools, constructing flood barriers).",
          "Preparedness: Getting ready (e.g., Stocking food, training volunteers, conducting mock drills).",
          "Response: The action during disaster (e.g., Evacuating people, search and rescue, managing relief camps).",
          "Recovery: Rebuilding after (e.g., Constructing new homes, restoring electricity, psychological support).",
          "Coordination: Working with government agencies, NGOs, police, fire services, and communities.",
          "Technology Management: Using GIS, drones, satellite data, and AI for prediction and response.",
          "Documentation: Maintaining records of disasters, lessons learned, and best practices."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to disaster management careers.",
        color: BLUE,
        content: [
          "Social Science/Humanities Route: Class 12 Humanities (Geography/Sociology helpful) → BA in Geography, Sociology, or Social Work → MA/M.Sc in Disaster Management → NGO Program Manager or Relief Coordinator.",
          "Science/Technical Route: Class 12 Science (PCM/PCB) → B.Sc in Geology/Environmental Science or B.Tech (Civil/Environmental) → M.Sc in Disaster Management or M.Tech in Geoinformatics → GIS Specialist or Flood Risk Analyst.",
          "Uniformed Services Route: Join NDRF (National Disaster Response Force) via paramilitary forces (BSF, CRPF, ITBP) or Fire Services → Direct action and rescue roles.",
          "Corporate Route: MBA in Risk Management or Business Continuity → Corporate Disaster Management roles in large companies."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and hiring trends.",
        color: BLUE2,
        content: [
          "Market Growth: Jobs growing at 15% annually. Focus shifting from 'Relief' to 'Resilience' and prevention.",
          "Hiring Trends: Corporate Sector - Big companies need 'Business Continuity Managers.' Tech - Demand for Drone pilots and GIS experts for damage assessment.",
          "Entry-Level (0-2 years): Field Officer/Research Assistant - NGO/Govt ₹3L–₹5L, Corporate ₹6L–₹10L.",
          "Mid-Level (3-7 years): Program Manager/DM Specialist - NGO/Govt ₹6L–₹12L, Corporate ₹15L–₹25L.",
          "Senior-Level (8-15 years): State Project Officer/Director - NGO/Govt ₹15L–₹25L, International ₹30L–₹60L.",
          "Leadership (15+ years): Country Head/Senior Consultant - NGO/Govt ₹30L–₹50L, International ₹80L–₹1.5Cr."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "Government Institutions: MA/M.Sc - ₹50,000–₹2L (2 years).",
          "Private Universities: MA/MBA in DM - ₹4L–₹8L (2 years).",
          "Distance Learning (IGNOU): PG Diploma - ₹10,000–₹15,000 (1 year).",
          "Additional Costs: Living/Hostel (₹6,000–₹15,000/month), Field work travel (₹20,000–₹50,000), Certifications (₹10,000–₹30,000).",
          "ROI: With consulting opportunities offering ₹6L–₹25L+, investment can be recovered in 1-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Prominent Institutions)",
        icon: "Building2",
        description: "Top disaster management institutes.",
        color: BLUE,
        content: [
          "Government (Public): Tata Institute of Social Sciences (TISS), Mumbai - The 'Gold Standard' for Disaster Management (JTCDM). Guru Gobind Singh Indraprastha University (GGSIPU), Delhi - MBA in Disaster Management. Panjab University, Chandigarh - Masters in DM. University of Kashmir - Specialized in earthquake/mountain disasters. National Institute of Disaster Management (NIDM), Delhi - Training and online courses.",
          "Private: Symbiosis Institute of Geoinformatics (SIG), Pune - M.Sc in Geoinformatics. Amity University - M.Sc/M.Tech in Disaster Management. Jamia Millia Islamia, Delhi - M.Sc in Disaster Management and Climate Sustainability Studies.",
          "Online: NIDM offers online certifications and courses. IGNOU offers distance learning PG Diploma."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "UGC-NET JRF: For those wanting to do a PhD in Disaster Studies (₹37k/month stipend).",
          "Erasmus Mundus: Full scholarships to study Disaster Risk Reduction in Europe.",
          "Tata Trusts Scholarship: For TISS students.",
          "State Government Schemes: Various state scholarships for disaster management studies.",
          "Institutional Scholarships: Merit-based and need-based scholarships from universities.",
          "NGO Sponsorships: Some NGOs sponsor education for candidates committed to disaster work."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "Certifications: First Aid & CPR (from St. John Ambulance or Red Cross - mandatory basic skill), GIS/Remote Sensing (highly valued), Incident Command System (ICS) - NIDM offers online certifications.",
          "Professional Bodies: GIDM (Gujarat Institute of Disaster Management) - specialized memberships/training. IUINDRR (National Institute of Disaster Management's university network).",
          "Specialized Training: Drone Pilot Certification, Advanced GIS Training, Psychosocial Care Training, Business Continuity Planning Certification.",
          "These credentials significantly enhance career prospects and earning potential."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in disaster management.",
        color: BLUE2,
        content: [
          "Conventional Careers: District Disaster Management Officer (govt official in charge of a district), Relief Coordinator (managing food/shelter camps), Fire Safety Officer (ensuring building safety), Emergency Response Manager.",
          "New-Age Careers: Drone Operator for DM (finding lost people, mapping floods), Climate Risk Consultant (advising banks on climate investment risks), Business Continuity Planner (helping IT companies keep servers running during floods), GIS Specialist (mapping vulnerability zones).",
          "Emerging Roles: AI Disaster Prediction Specialist, Psychosocial Care Coordinator, Smart City Resilience Planner, Cyber Disaster Manager.",
          "Freelancing: Safety Auditor (inspecting factories/schools for compliance), DM Trainer (teaching corporate employees emergency response), Consultant (advising organizations on disaster preparedness)."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of disaster management.",
        color: BLUE,
        content: [
          "High Stress: You deal with death and destruction. 'Compassion Fatigue' (emotional burnout) is real.",
          "Unpredictable Life: You might be sleeping at 2 AM and get called for a rescue mission. Holidays can be cancelled instantly.",
          "Bureaucracy: In government roles, getting funds approved can be slow, even during emergencies.",
          "Physical Risk: Working in floodwaters or unstable buildings carries personal danger.",
          "Limited Resources: Often working with insufficient budget and manpower.",
          "Political Pressure: Decisions may be influenced by political considerations rather than pure technical merit.",
          "Emotional Toll: Witnessing suffering and loss can lead to psychological trauma."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in disaster management.",
        color: BLUE2,
        content: [
          "AI for Prediction: AI will predict floods 48 hours earlier with 90% accuracy, saving more lives.",
          "Smart Cities, Safe Cities: Every Smart City project in India now has a mandatory 'Disaster Resilience' component.",
          "Psychosocial Care: Focus shifting to mental health—helping survivors deal with trauma after the disaster.",
          "Drone Technology: Drones for rapid damage assessment, search and rescue, and supply delivery.",
          "Climate Adaptation: Growing focus on climate-resilient infrastructure and adaptation strategies.",
          "Early Warning Systems: Advanced satellite and IoT-based systems for real-time disaster prediction.",
          "Impact on Employment: New roles for AI specialists, drone operators, climate scientists, data analysts. Required skills: Python, AI/ML, GIS, remote sensing, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Learn First Aid: Join the Scouts/Guides or Red Cross unit in school. Learn CPR. This is a fundamental skill.",
          "Volunteer: After a local event (even heavy rain), help with clean-up or food distribution. Gain real experience.",
          "Geography Genius: Understand why floods happen. Study maps. Learn about natural hazards in your region.",
          "Tech Tools: Learn Google Earth. It's the first step to understanding GIS. Explore satellite imagery.",
          "Current Affairs: Follow news on disasters and climate change. Understand the challenges.",
          "Physical Fitness: Build stamina. Disaster work can be physically demanding.",
          "Communication: Develop clear communication skills. You'll need to coordinate with diverse teams.",
          "Problem-Solving: Practice logical thinking and quick decision-making.",
          "Empathy: Develop ability to understand and help people in distress.",
          "Leadership: Take leadership roles in school. Lead community service projects."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Disaster Management Personalities",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Kamal Kishore: Head of NDMA (National Disaster Management Authority). A global leader who worked with the UN to make India disaster-resilient.",
          "Dr. P.K. Mishra: Principal Secretary to the PM. Architect of India's modern disaster management laws (Winner of the Sasakawa Award).",
          "Rajendra Singh: The 'Waterman of India.' Though an environmentalist, his work in preventing droughts is a form of disaster mitigation.",
          "Sonam Wangchuk: His work in Ladakh (Ice Stupas) is a brilliant example of preventing water scarcity disasters.",
          "Anil Sinha: Former NDMA member known for innovative disaster risk reduction strategies.",
          "Harsh Vardhan: Former Health Minister who coordinated disaster response during COVID-19.",
          "Asha George: Renowned disaster management expert and advocate for community-based disaster risk reduction."
        ]
      }
    ]
  },
  indian_army: {
    slug: "indian_army",
    badge: "🎖️ The Ultimate Badge of Honour for Class 10+",
    heading: "Indian Army",
    subheading: "Defending the nation from external aggression and internal threats. Join the world's largest standing army and serve with 'Service Before Self.'",
    whyCards: [
      { icon: "Shield", title: "National Security", description: "Defend India from external enemies and internal threats. Ensure the nation's sovereignty and peace.", borderColor: "#10B981" },
      { icon: "Globe", title: "World's Largest Army", description: "The Indian Army is the largest standing army in the world with diverse roles and opportunities.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Modernization Boom", description: "With tech advancement, demand for cyber experts, drone operators, and engineers is skyrocketing.", borderColor: "#3B82F6" },
      { icon: "Award", title: "100% Job Security", description: "For commissioned officers and permanent soldiers, complete job security until retirement with excellent benefits.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (NDA/IMA) or 4 Years (Agniveer)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "NDA, CDS, TES, OTA, Agniveer Scheme", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹21K–₹3.5L+ (Agniveer to General)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1.4M+", label: "Active Personnel", gradient: "from-green-500 to-green-600" },
      { value: "100%", label: "Job Security for Officers", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Defending the nation and serving with honor.",
        color: BLUE,
        content: [
          "The Indian Army Definition: The land-based branch of the Indian Armed Forces and the largest standing army in the world. A professional here—whether a Soldier (Agniveer) or an Officer—is responsible for ensuring the national security of India.",
          "Your Mission: Defend the nation from external aggression (enemies at the border) and internal threats (terrorism/insurgency), and maintain peace within its borders.",
          "Beyond Combat: The Army isn't just about fighting. It is a massive organization that functions like a mini-country. It has Engineers building bridges in the Himalayas, Doctors running hospitals in remote deserts, Technicians maintaining tanks and radars, Cyber Experts fighting invisible wars, and Logistics Managers transporting supplies to Siachen.",
          "Why It Matters: In a world of geopolitical tension, a strong army is the backbone of a nation's sovereignty. The Indian Army is also the first responder during natural disasters. When all else fails, the nation looks to the Army. Joining this career means joining a legacy of 'Service Before Self.'"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Captain Vikram",
        icon: "Clock",
        description: "Real workflow of an Infantry Officer at the Line of Control.",
        color: BLUE2,
        content: [
          "05:00 AM - Physical Training: The day begins before the sun rises. Vikram leads his platoon (about 30 soldiers) for a 5km run carrying rifles and battle loads. The air is freezing, but the 'Josh' is high.",
          "07:30 AM - Breakfast: Vikram eats in the Officers' Mess. He checks the quality of food being served to his men. An officer eats after his men have eaten—a golden rule of leadership.",
          "08:30 AM - The Briefing: He meets his Commanding Officer (CO). Intelligence reports suggest suspicious movement in Sector 4. They study maps and satellite images. Vikram is tasked with leading a patrolling party.",
          "10:00 AM - The Patrol: This is the core of his job. Vikram and his team hike through dense forests and rugged terrain. Every step is calculated. They look for disturbed bushes, footprints, or anything unusual. He is constantly on the radio, updating his location.",
          "02:00 PM - Back to Base: The patrol returns safely. Vikram inspects the weapons. A jammed rifle can cost a life. He oversees the maintenance of the bunkers.",
          "04:00 PM - Sports Parade: The Army believes that 'a team that plays together, fights together.' Vikram plays volleyball with his jawans, bonding and building trust.",
          "06:00 PM - Admin Work: He signs leave applications, checks logistical supplies, and writes the patrol report.",
          "08:00 PM - Dinner Night: He changes into formal uniform for dinner at the Officers' Mess. It's a formal affair with strict etiquette.",
          "10:00 PM - Final Check: He does a final check of the sentry posts. Only when he is sure his men are alert does he retire to his bunk, keeping his rifle and radio next to his pillow."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Army Officer DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Leader - Do you naturally take charge in a crisis? The Adventurer - Does a desk job bore you? Do you prefer mud, rain, and mountains over air-conditioned offices? The Team Player - Can you put the group's needs above your own? In the Army, the team (Paltan) is family. The Resilient - Can you handle failure? You will fall, get tired, and feel defeated. The question is, can you get up and keep running?",
          "Hard Skills: Physical Fitness (Endurance), Map Reading, Tactical Awareness, Technical knowledge (for Engineers/Signals).",
          "Soft Skills: Effective Intelligence (solving practical problems quickly), Courage (not the absence of fear, but the ability to act despite it), Compassion (caring deeply for the welfare of troops), Leadership, Decision-making under pressure.",
          "The Self-Check: Do you have a strong sense of duty? Can you lead people? Are you physically fit and mentally strong? Do you value honor and service? If yes, you have the Army Officer DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Core duties across different arms and services.",
        color: BLUE2,
        content: [
          "Fighting Arms (Infantry, Armoured Corps, Mechanised Infantry): Direct combat with the enemy, Patrolling borders and conducting counter-insurgency operations, Capturing and holding territory.",
          "Supporting Arms (Artillery, Army Air Defence, Engineers, Signals): Providing firepower support (Missiles/Guns), Building infrastructure (Bridges/Roads/Helipads), Managing military communications and cyber warfare.",
          "Services (ASC, AOC, AMC, EME): Logistics (supply chain of food, fuel, ammo), Medical (treating wounded soldiers), Repair (fixing tanks, trucks, radars).",
          "Typical Workflow: Training → Deployment (Field/Peace) → Operations/Exercise → Administration → Training (The cycle never ends)."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Indian Army.",
        color: BLUE,
        content: [
          "Officer Route - NDA Entry: Class 12 (Any stream for Army; PCM for Air Force/Navy) → Age 16.5–19.5 years → NDA Exam (UPSC) → NDA Pune (3 Years) + IMA Dehradun (1 Year).",
          "Officer Route - TES Entry: Class 12 (PCM >60%) + JEE Mains Rank → Direct SSB call → OTA Gaya or IMA (Men only).",
          "Officer Route - CDS Entry: Graduation (Any Stream) → Age 19–25 years → CDS Exam (UPSC) → IMA (Permanent) or OTA (Short Service).",
          "Officer Route - TGC/SSC-Tech: B.Tech/BE → Direct SSB call based on marks → IMA (TGC) or OTA (SSC).",
          "Officer Route - JAG Entry: Law Graduate (55%) → Direct SSB → OTA Chennai.",
          "Officer Route - NCC Entry: Graduate + NCC 'C' Certificate → Direct SSB → OTA Chennai.",
          "Soldier Route - Agniveer: Class 10 or 12 Pass → Age 17.5–21 years → Common Entrance Exam (CEE) → Physical Fitness Test → Medicals → 4 Years Service (Top 25% retained permanently)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, job security, and hiring trends.",
        color: BLUE2,
        content: [
          "Job Security: For Commissioned Officers and Permanent Soldiers, it is 100% secure until retirement. For Agniveers, it is a 4-year tenure with a retention chance.",
          "Demand: The Army always needs young blood. With modernization, demand for tech-savvy soldiers (Drone operators, Cyber specialists) is skyrocketing.",
          "Lieutenant Salary: Basic ₹56,100, Gross ₹85,000–₹1.1L/month.",
          "Captain Salary: Basic ₹61,300, Gross ₹1.0L–₹1.3L/month.",
          "Colonel Salary: Basic ₹1.3L, Gross ₹2.3L+/month.",
          "General Salary: Basic ₹2.5L (Fixed), Gross ₹3.5L+/month.",
          "Agniveer Salary: Year 1 - ₹30,000/month (₹21,000 in-hand + Corpus).",
          "Note: Allowances vary heavily based on location. A Lieutenant in Siachen gets a 'Siachen Allowance' of approx ₹42,500/month extra."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "The Golden Ticket: Officer training in India is FREE for cadets. The government spends lakhs on your training, food, stay, uniform, and books. You don't pay tuition fees.",
          "Stipend: In the last year of training (at IMA/OTA), gentlemen cadets receive a stipend of ₹56,100 per month.",
          "Preparation Cost: SSB Coaching - ₹15,000–₹25,000 (Optional). NDA/CDS Exam Books - ₹1,000.",
          "Duration: 3-4 years for officers (NDA/IMA/OTA), 4 years for Agniveers.",
          "Post-Joining: All living expenses, food, accommodation, uniform, and medical care provided by the government."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Institutions)",
        icon: "Building2",
        description: "Prominent military training academies.",
        color: BLUE,
        content: [
          "National Defence Academy (NDA), Pune: The cradle of military leadership. Tri-service training for Class 12 entrants. Known for its rigorous curriculum and world-class facilities.",
          "Indian Military Academy (IMA), Dehradun: For Permanent Commission officers (Gentlemen Cadets). 'Chetwode Hall' is legendary here. The premier institution for officer training.",
          "Officers Training Academy (OTA), Chennai: For Short Service Commission (Men & Women). Known for its grueling physical training and leadership development.",
          "Officers Training Academy (OTA), Gaya: For Technical Entry Scheme (TES) cadets. Specializes in technical officer training.",
          "College of Military Engineering (CME), Pune: For technical officers. Specializes in engineering and technical roles.",
          "National Defence College (NDC), New Delhi: For senior officers pursuing higher strategic studies."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Since training is fully funded, traditional scholarships aren't applicable. However:",
        color: BLUE,
        content: [
          
          "Financial Assistance: Wards of Ex-servicemen or War Widows get priority and funding for education in Army Public Schools/Professional colleges.",
          "Stipend: The training stipend itself acts as financial support (₹56,100/month in final year).",
          "State Govt Awards: Many state governments give cash awards (₹1L to ₹5L) to students from their state who clear NDA/IMA courses.",
          "Agniveer Benefits: Seva Nidhi package (~₹11.7L) upon exit can be used for further education or starting a business.",
          "War Widow Pensions: Families of martyred soldiers receive lifelong pensions and educational support."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "The President's Commission: An officer holds a commission from the President of India. It is the ultimate professional credential.",
          "Academic Degrees: NDA cadets graduate with a BA/B.Sc/B.Tech degree from Jawaharlal Nehru University (JNU). IMA cadets receive a PG Diploma/Degree.",
          "Specialized Courses: Commando Course (Belagavi - Ghatak Commandos), High Altitude Warfare (HAWS, Gulmarg), Counter-Insurgency (CIJW School, Mizoram), Airborne Training, Ranger Course.",
          "Professional Bodies: Indian Army Officers Association, Ex-Servicemen Associations.",
          "These credentials significantly enhance career prospects and earning potential in civilian sectors post-retirement."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in military careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Infantry Officer (leading troops in battle), Artillery Officer (managing long-range guns), Engineer Officer (building infrastructure), Medical Officer (treating soldiers), Signals Officer (managing communications).",
          "New-Age Careers: Cyber Warrior (Army Cyber Group - protecting military networks), Drone Pilot (surveillance using UAVs), Military Psychologist (working at Selection Centers), AI Systems Officer (autonomous military systems), Data Analyst (military intelligence).",
          "Specialized Roles: Commando (NSG or Ghatak), Intelligence Officer (military intelligence), Paratrooper (airborne operations), Mountain Warfare Specialist.",
          "Post-Retirement (Second Career): Corporate Security Head, Leadership/HR roles in MNCs, Disaster Management Consultant, Commercial Pilot, Defense Consultant, Author/Motivational Speaker."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of military service.",
        color: BLUE,
        content: [
          "Risk to Life: It is a lethal profession. You may face bullets, avalanches, or blasts. The risk is real and constant.",
          "Separation: You will spend months away from family. Missing birthdays, anniversaries, and festivals is the norm.",
          "Strict Discipline: You cannot question orders. Your hair, dress, and behavior are monitored 24/7.",
          "Physical Toll: Knees and back often suffer after years of carrying heavy loads in mountains.",
          "Frequent Transfers: Moving house every 2-3 years affects children's stability and education.",
          "Psychological Stress: Witnessing combat, loss of comrades, and constant vigilance can lead to PTSD.",
          "Limited Autonomy: Decisions are hierarchical. Individual initiative is valued but within strict parameters."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the Indian Army.",
        color: BLUE2,
        content: [
          "Integrated Theatre Commands: The Army, Navy, and Air Force will work as a single unit, requiring officers to understand all three services.",
          "Non-Contact Warfare: Wars will be fought with Cyber attacks, AI drones, and Information Warfare. The Army needs coders as much as it needs shooters.",
          "Women in Combat: Women officers are now being granted Permanent Commission and entering NDA. By 2030, we will see women in more combat-support command roles.",
          "Indigenization (Aatmanirbhar Bharat): Using Indian-made weapons (Arjun Tank, ATAGS gun). Officers will work with DRDO to improve tech.",
          "Drone Warfare: Unmanned systems will dominate future battlefields.",
          "Cyber Warfare: Digital defense will be as important as physical defense.",
          "Impact on Employment: New roles for AI specialists, cyber experts, drone operators, data scientists. Required skills: Programming, AI/ML, cybersecurity, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Join NCC (National Cadet Corps): This is the best simulator for Army life. 'A' certificate in school helps tremendously.",
          "Play Team Sports: Football, Hockey, or Basketball. The SSB interviewers love team players. Individual brilliance matters less than group success.",
          "General Awareness: Read the newspaper. Know India's geography (borders, rivers) and neighbors. Understand geopolitical issues.",
          "Public Speaking: Participate in debates. An officer must speak clearly and confidently to lead men.",
          "Fitness: Start running. Aim to run 2.4 km in under 10 minutes. Do pull-ups. Build endurance.",
          "Leadership: Take leadership roles in school. Lead community service projects.",
          "Map Reading: Learn to read topographic maps. Understand terrain and navigation.",
          "Current Affairs: Follow military news and defense developments.",
          "Discipline: Develop punctuality, responsibility, and commitment.",
          "Courage: Develop mental toughness. Face challenges head-on."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Military Personalities",
        icon: "User",
        description: "Inspiring figures in the Indian Army.",
        color: BLUE2,
        content: [
          "Field Marshal Sam Manekshaw: The charismatic Chief who led India to victory in the 1971 war. Known for his wit and fearless leadership.",
          "Captain Vikram Batra (PVC): The hero of the Kargil War. His slogan 'Yeh Dil Maange More' inspires generations.",
          "General Bipin Rawat: India's first Chief of Defence Staff (CDS). He modernized the military structure.",
          "Major Sandeep Unnikrishnan (AC): NSG Commando who saved lives during the 26/11 Mumbai attacks.",
          "Captain Shiva Chouhan: The first woman officer to be operationally deployed at Siachen Glacier (the highest battlefield on Earth), proving barriers are meant to be broken.",
          "General K.S. Brar: Legendary officer known for Operation Blue Star and counter-insurgency operations.",
          "Arun Khetrapal: The only Indian Army officer to receive the Param Vir Chakra in the 1971 war."
        ]
      }
    ]
  },
  indian_air_force: {
    slug: "indian_air_force",
    badge: "✈️ Touch the Sky with Glory for Class 10+",
    heading: "Indian Air Force",
    subheading: "Guardian of India's airspace and the fourth largest air force in the world. From fighter pilots to engineers, serve with honor and adventure.",
    whyCards: [
      { icon: "Plane", title: "Airspace Guardian", description: "Protect India's airspace and ensure national security. Conduct humanitarian missions and disaster relief operations.", borderColor: "#10B981" },
      { icon: "Globe", title: "Fourth Largest Air Force", description: "The Indian Air Force is the fourth largest air force in the world with cutting-edge technology and global reach.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Tech Innovation Hub", description: "Work with indigenous jets like Tejas, Prachand helicopters, and advanced defense systems. Aatmanirbhar Bharat in action.", borderColor: "#3B82F6" },
      { icon: "Award", title: "100% Job Security", description: "Complete job security for commissioned officers and permanent airmen with excellent benefits and lifestyle.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (NDA/AFA) or 4 Years (Agniveer)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "NDA, CDSE, AFCAT, NCC, Agniveer Vayu", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹40K–₹3L+ (Agniveer to Air Marshal)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "4th", label: "Largest Air Force Globally", gradient: "from-green-500 to-green-600" },
      { value: "100%", label: "Job Security for Officers", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Serving as guardian of India's airspace.",
        color: BLUE,
        content: [
          "The Indian Air Force Definition: A massive, sophisticated machine made of engineers, strategists, doctors, air traffic controllers, and commandos working in perfect sync. The IAF is the fourth largest air force in the world.",
          "Your Mission: Serve as a guardian of India's airspace. Whether you are a Flying Officer engaging enemy threats, a Technical Officer ensuring a ₹500-crore aircraft is battle-ready, or a Ground Duty Officer managing logistics, your job is to ensure the safety and sovereignty of the nation.",
          "Beyond Combat: The IAF doesn't just fight wars; it conducts massive humanitarian aid missions—evacuating citizens during crises, dropping food packets during floods, and providing disaster relief.",
          "Why It Matters: In today's geopolitical climate, air power is the deciding factor in any conflict. As an IAF professional, you aren't just doing a job; you are living a lifestyle of discipline, honor, and adventure that few other careers can offer."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Squadron Leader Rohan",
        icon: "Clock",
        description: "Real workflow of a Fighter Pilot at an IAF base.",
        color: BLUE2,
        content: [
          "05:30 AM - Physical Training: The alarm doesn't ring; the bugle does. Rohan is up before the sun. He goes for a 5km run with his squadron. Physical fitness isn't a choice here; it's a requirement.",
          "07:30 AM - Briefing Room: Rohan is in his flight suit (G-suit). The mood shifts from casual to intense. The Commanding Officer briefs the team on today's mission: 'Low-level tactical flying simulation.' They discuss weather reports, threats, and emergency procedures.",
          "09:00 AM - The Tarmac: Rohan walks to his aircraft, a Su-30 MKI. He performs external checks—tires, flaps, intakes. He climbs into the cockpit. The ground crew signals thumbs up. The roar of the engines is deafening.",
          "10:30 AM - The Sortie: He is at 20,000 feet, flying at 900 km/hr. For the next hour, he practices 'dogfighting' maneuvers against a wingman. The G-force pushes him into his seat—his body weighs 6 times its normal weight.",
          "01:00 PM - Debriefing: He lands. The mission isn't over. He watches the HUD (Head-Up Display) footage with his seniors. In the IAF, perfection is the only standard.",
          "03:00 PM - Secondary Duties: Pilots are also officers. Rohan heads to the admin block. He manages the squadron's sports fund or oversees maintenance schedules.",
          "06:00 PM - The Mess: The evenings are for socializing. He heads to the Officers' Mess. It's formal yet relaxed. He plays billiards and discusses the day's flying.",
          "09:00 PM - Home: He studies the manual for a new radar upgrade before sleeping. Tomorrow, the sky awaits again."
        ]
      },
      {
        id: "who",
        title: "Is This You? The IAF Officer DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Patriot - Does the idea of the tricolor flag give you goosebumps? Service before self is the motto here. The Adrenaline Junkie - Do you thrive under pressure? Can you make life-and-death decisions in split seconds? The Disciplinarian - Can you follow orders without ego and lead others with integrity? The Tech-Head - Modern warfare is high-tech. Are you comfortable with complex machines and physics?",
          "Hard Skills: Mathematics & Physics (essential for pilots/tech), Spatial Awareness, Technical Proficiency (for engineering roles), Map Reading.",
          "Soft Skills: Leadership (OLQ - Officer Like Qualities), Quick Decision Making, Emotional Stability, Communication, Courage.",
          "The Self-Check: Do you have a strong sense of duty? Can you handle pressure? Are you physically fit and mentally strong? Do you value honor and service? If yes, you have the IAF Officer DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Branches",
        icon: "Briefcase",
        description: "Core duties across different IAF branches.",
        color: BLUE2,
        content: [
          "Flying Branch: Fighter Pilots (combat, interception, air superiority missions), Transport Pilots (carrying troops, tanks, supplies to remote areas), Helicopter Pilots (search and rescue, disaster relief, special ops support).",
          "Technical Branch: Mechanical/Electronics Engineers (responsible for maintenance and serviceability of aircraft, radars, missiles). If the tech officer doesn't sign off, the plane doesn't fly.",
          "Ground Duty Branch: Logistics (managing supply chains for fuel, food, ammunition), Administration/Education (managing human resources, legal issues, training), Meteorology (predicting weather for safe flying), Accounts (managing IAF finances).",
          "Typical Workflow: Training → Deployment (Field/Peace) → Operations/Exercise → Administration → Training (The cycle never ends)."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Indian Air Force.",
        color: BLUE,
        content: [
          "Officer Route - NDA Entry: Class 12 (PCM) → Age 16.5–19.5 years → NDA Exam (UPSC) → NDA Pune (3 Years) + AFA Dundigal (Training) → Flying/Ground Duty Officer.",
          "Officer Route - CDSE Entry: Graduation (Any stream for Ground; Physics/Maths for Flying) → Age 19–25 years → CDSE Exam (UPSC) → AFA Dundigal → Flying Officer (Permanent Commission).",
          "Officer Route - AFCAT Entry: Graduation (60% min) → AFCAT Exam → AFA Dundigal → Flying/Tech/Ground Duty (Short Service/Permanent).",
          "Officer Route - NCC Entry: NCC Air Wing Senior Division 'C' Certificate → Direct SSB → AFA Dundigal → Flying Branch.",
          "Officer Route - Weather Entry: Post Graduate (Science/Maths/Stats) → Meteorology Officer.",
          "Agniveer Vayu Route: Class 12 (Science/Non-Science) or Diploma → Age 17.5–21 years → Agniveer Vayu Intake (Online Test + Physical + Medicals) → 4 Years Service (Top 25% retained permanently)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, job security, and hiring trends.",
        color: BLUE2,
        content: [
          "Job Security: 100% job security for commissioned officers and permanent airmen.",
          "Compensation: The IAF offers a lifestyle, not just a salary. This includes free housing, medical for family, canteen facilities (CSD), and ration.",
          "Flying Officer Salary: Basic ₹56,100, Gross ₹85,000–₹1.1L/month (+ Flying Allowance ₹25k/month).",
          "Flight Lieutenant Salary: Basic ₹61,300, Gross ₹1.0L–₹1.3L/month.",
          "Wing Commander Salary: Basic ₹1.2L, Gross ₹2.0L+/month.",
          "Air Marshal Salary: Basic ₹2.0L+, Gross ₹3.0L+/month.",
          "Agniveer Vayu Salary: Year 1 - ₹30,000/month, Year 4 - ₹40,000/month + Seva Nidhi (~₹11.7L).",
          "Market Demand: The government is pushing for 'Aatmanirbhar Bharat' in defense. The IAF is expanding its technical wings to handle indigenous jets like Tejas and Prachand helicopters."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "The Best Part: Becoming an IAF officer costs ZERO. The government pays for your entire education, training, food, stay, and uniform.",
          "Stipend: You earn a stipend (approx ₹56,100/month) during the last year of training.",
          "Private Cost: You might spend on SSB Coaching (₹15,000–₹30,000 for 2 weeks) or written exam tuition, but the official training is fully funded.",
          "Duration: 3-4 years for officers (NDA/AFA), 4 years for Agniveers.",
          "Post-Joining: All living expenses, food, accommodation, uniform, and medical care provided by the government."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Institutions)",
        icon: "Building2",
        description: "Prominent IAF training academies.",
        color: BLUE,
        content: [
          "National Defence Academy (NDA), Khadakwasla (Pune): For Class 12 entrants. A 3-year tri-service degree (BA/B.Sc/B.Tech).",
          "Air Force Academy (AFA), Dundigal (Hyderabad): The premier training ground for all Flying, Tech, and Ground Duty officers. World-class facilities and training.",
          "Air Force Technical College (AFTC), Bangalore: For engineering officers to learn aeronautical engineering and technical specializations.",
          "Airmen Training School (ATS), Belagavi: For Agniveer Vayu training. Comprehensive technical and operational training.",
          "Air Force Institute of Technology (AFIT), Bangalore: For advanced technical training and specializations."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Stipend during Training: Cadets receive a stipend of ₹56,100 per month during the final year of training at AFA.",
          "Allowances: Flying Allowance (for pilots - one of the highest in armed forces), Hardship Allowance (for posting in places like Siachen or North-East), Kit Maintenance Allowance (to maintain uniforms).",
          "State Govt Awards: Many state governments give cash awards (₹1L to ₹5L) to students from their state who clear NDA/AFCAT courses.",
          "Agniveer Benefits: Seva Nidhi package (~₹11.7L) upon exit can be used for further education or starting a business.",
          "Post-Retirement: Robust Pension (for permanent commission) and Ex-Servicemen Contributory Health Scheme (ECHS)."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "Commissioning: The President of India commissions you as an officer. This is the highest professional validation.",
          "Certifications: Pilots get commercial flying hours which can be converted to a DGCA CPL (Commercial Pilot License) post-retirement for airline jobs. ATC officers get Air Traffic Controller ratings valid globally. Tech officers gain experience equivalent to high-level engineering management.",
          "Specialized Courses: Fighter Pilot Training, Transport Pilot Training, Helicopter Pilot Training, Aeronautical Engineering, Air Traffic Control.",
          "Professional Bodies: Indian Air Force Officers Association, Ex-Servicemen Associations.",
          "These credentials significantly enhance career prospects and earning potential in civilian sectors post-retirement."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in IAF careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Fighter/Transport Pilot (the classic 'Top Gun' role), Aeronautical Engineer (managing aircraft fleets), Air Traffic Controller (ATC - managing airspace), Helicopter Pilot (search and rescue, disaster relief).",
          "New-Age Careers: UAV/Drone Pilot (remotely piloting sophisticated drones like Heron or Predator for surveillance), Cyber Warfare Officer (protecting IAF networks from hacking), Space Command Officer (managing satellite assets - emerging domain), AI Systems Officer (autonomous aerial systems).",
          "Specialized Roles: Commando (special operations), Intelligence Officer (military intelligence), Meteorologist (weather prediction), Medical Officer (healthcare).",
          "Post-Retirement (The 'Second Innings'): Commercial Airline Pilot (IndiGo, Air India), Corporate Leadership/Admin Heads, Defense Consultants, Entrepreneurs in Defense Tech, Flight Instructor."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of IAF service.",
        color: BLUE,
        content: [
          "Risk to Life: This is a military service. Combat, training accidents, and hazardous terrain are real risks.",
          "Family Life: Frequent transfers (every 2-3 years) can disrupt children's education and spouse's career.",
          "Strict Discipline: You cannot just 'take a day off' because you feel like it. Your life is governed by rules, hierarchies, and protocol.",
          "Physical Toll: High-G flying causes back and neck issues for fighter pilots over time.",
          "Psychological Stress: Combat situations and constant vigilance can lead to stress and PTSD.",
          "Limited Autonomy: Decisions are hierarchical. Individual initiative is valued but within strict parameters.",
          "Separation: You will spend months away from family during deployments and operations."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the Indian Air Force.",
        color: BLUE2,
        content: [
          "The Space Force: The IAF is evolving into an Aerospace Force. Future officers will train not just for air, but for space warfare (anti-satellite missiles).",
          "Indigenization: With Tejas Mk2 and AMCA (Advanced Medium Combat Aircraft) coming up, there is huge need for engineers who understand Indian tech.",
          "AI & Swarm Drones: Future wars will be fought by AI-controlled drone swarms. The pilot will be a 'Mission Commander' managing drones from a cockpit.",
          "Integrated Operations: Seamless integration with Navy and Army for joint operations.",
          "Cyber Warfare: Digital defense will be as important as physical defense.",
          "Impact on Employment: New roles for AI specialists, cyber experts, drone operators, data scientists. Required skills: Programming, AI/ML, cybersecurity, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Join NCC (Air Wing): This is the single best thing you can do. You get to wear a uniform, learn drill, and even fly microlight aircrafts. An NCC 'C' certificate gives you a direct interview call!",
          "Focus on PCM: Math and Physics are non-negotiable for Flying and Tech branches. Master them.",
          "Play Sports: The IAF loves team players. Football, Hockey, or Basketball build stamina and 'Officer Like Qualities.'",
          "Read Military History: Read about the 1971 war or the Kargil conflict. Understand the ethos of the force.",
          "Work on Vision: Take care of your eyes. 6/6 vision is mandatory for fighter pilots. Limit screen time.",
          "Physical Fitness: Start running. Aim to run 2.4 km in under 10 minutes. Do pull-ups. Build endurance.",
          "Leadership: Take leadership roles in school. Lead community service projects.",
          "Current Affairs: Follow military news and defense developments.",
          "Discipline: Develop punctuality, responsibility, and commitment.",
          "Courage: Develop mental toughness. Face challenges head-on."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Air Force Personalities",
        icon: "User",
        description: "Inspiring figures in the Indian Air Force.",
        color: BLUE2,
        content: [
          "Marshal of the Air Force Arjan Singh: The only IAF officer to be promoted to 5-star rank. A hero of the 1965 war and an icon of leadership.",
          "Wing Commander Rakesh Sharma: The first Indian in space. He famously told PM Indira Gandhi, 'Saare Jahaan Se Achha' when asked how India looked from space.",
          "Air Chief Marshal B.S. Dhanoa: Led the IAF during the Balakot airstrikes. Known for his cool-headed strategy.",
          "Flight Lieutenant Avani Chaturvedi: One of the first three women fighter pilots in India, shattering the glass ceiling.",
          "Group Captain Abhinandan Varthaman: Became a national hero for his bravery and composure behind enemy lines.",
          "Air Chief Marshal Fali Homi Major: Legendary pilot and strategist who modernized the IAF.",
          "Air Marshal Harish Masurkar: Known for his innovative approach to air operations and training."
        ]
      }
    ]
  },
  merchant_navy: {
    slug: "merchant_navy",
    badge: "⚓ The Silent Guardians of the Seas for Class 10+",
    heading: "Merchant Navy",
    subheading: "Protecting India's maritime interests and global trade routes. Command ships, navigate the seas, and be part of the world's largest merchant fleet.",
    whyCards: [
      { icon: "Ship", title: "Maritime Powerhouse", description: "Protect 90% of India's trade volume that moves by sea and guard the Blue Economy.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "Work internationally on cargo ships, tankers, and container vessels across all oceans.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Massive Expansion", description: "Navy plans 175-200 warships by 2035. Huge demand for trained maritime professionals.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Excellent Salary", description: "High earning potential with international exposure and career growth opportunities.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (B.Tech) or 1-2 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "B.Tech, Diploma, Cadet Programs", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹40K–₹3L+ (Cadet to Captain)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "7,500+", label: "Km of Coastline to Protect", gradient: "from-green-500 to-green-600" },
      { value: "90%", label: "India's Trade by Sea", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Operating merchant vessels and protecting maritime trade routes.",
        color: BLUE,
        content: [
          "Merchant Navy Definition: The commercial shipping industry that transports cargo and passengers across the world's oceans. Unlike the Indian Navy (military), the Merchant Navy operates commercial vessels for trade and commerce.",
          "Your Mission: Command ships, navigate international waters, manage cargo operations, ensure crew safety, and maintain maritime trade routes. You operate on container ships, tankers, bulk carriers, and passenger vessels.",
          "The Scope: Whether you are a Captain commanding a massive container ship, a Chief Engineer managing the ship's engines, or a Deck Officer navigating through storms, you are essential to global commerce.",
          "Why It Matters: 90% of India's trade volume moves by sea. The Merchant Navy is the backbone of international commerce. With China expanding its naval power and global trade relying on safe oceans, India needs skilled maritime professionals to protect and manage its shipping interests."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Lieutenant Commander Kabir",
        icon: "Clock",
        description: "Real workflow of a Merchant Navy Officer on a Stealth Frigate.",
        color: BLUE2,
        content: [
          "05:30 AM - Wakey Wakey: The pipe (announcement) blares across the ship. Kabir rolls out of his bunk. Life at sea is a 24/7 cycle. He heads to the bridge (the ship's cockpit) for his watch.",
          "08:00 AM - The Morning Brief: The Captain briefs the officers. Intelligence reports a suspicious pirate vessel 50 nautical miles away. Kabir is tasked with leading the VBSS (Visit, Board, Search, and Seizure) team.",
          "10:00 AM - Action Stations: The alarm rings. This is a drill, but it feels real. Kabir gears up in tactical armor with his team of MARCOS (Marine Commandos) and sailors. They launch a fast boat (RIB) from the ship, racing towards a target dummy.",
          "01:00 PM - Lunch in the Wardroom: The food is surprisingly good—Naval chefs are legendary. He eats with the Chief Engineer and discusses the status of the gas turbine engines. On a ship, the engineer and the warrior must be best friends.",
          "03:00 PM - Admin & Training: Back in his cabin, Kabir finishes paperwork. He then conducts a class for junior sailors on 'Radar Plotting.' A ship is a floating school; you are always learning or teaching.",
          "06:00 PM - Sunset Ceremony: The ship slows down. The ensign (flag) is lowered. For a brief moment, the crew pauses to respect the sea and the nation.",
          "08:00 PM - Night Watch: The ocean is pitch black. Kabir stares at the radar screen. A tiny blip appears. Is it a fishing boat or a submarine periscope? He calculates the speed and trajectory. Vigilance is the price of safety.",
          "10:00 PM - Rest: He hands over the watch to the next officer. He heads to his cabin, the gentle rolling of the ship rocking him to sleep instantly."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Merchant Navy Officer DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Adaptable - Can you live in a steel box (ship) with 200 other people for months without internet? The Technical Mind - A ship is a floating city of machines. Do you like understanding how things work? The Leader - Can you take responsibility for a team of 20 sailors when you are just 22 years old? The Calm Voyager - Do you get seasick easily? (Don't worry, you get used to it, but you need a strong stomach!).",
          "Hard Skills: Mathematics & Physics (Navigation is pure math), Engineering knowledge, Swimming (mandatory after joining), Crisis Management.",
          "Soft Skills: OLQ (Officer Like Qualities), Cross-cultural sensitivity (Navy travels to foreign ports), Discipline, Leadership, Decision-making under pressure.",
          "The Self-Check: Do you dream of the open seas? Are you interested in international travel? Can you handle isolation and responsibility? If yes, you have the Merchant Navy Officer DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Branches",
        icon: "Briefcase",
        description: "Core duties across different merchant navy roles.",
        color: BLUE2,
        content: [
          "Executive Branch (The Warriors): General Service (GS) - Command ships, handle navigation, and weapons (Gunnery/Missiles). Pilot/Observer - Fly helicopters/jets or manage airborne radars. Submarine Arm - The silent killers. Operating nuclear or diesel submarines. Hydrography - Mapping the ocean floor for safe navigation.",
          "Engineering Branch (The Fixers): Managing the ship's propulsion (Gas Turbines/Diesel Engines) and hull integrity.",
          "Electrical Branch (The Brains): Managing radars, sonars, communication systems, and missile guidance systems.",
          "Education/Logistics/Medical: Supporting the fleet with training, supplies, and healthcare.",
          "Typical Workflow: Training → Deployment (Field/Peace) → Operations/Exercise → Administration → Training (The cycle never ends)."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Merchant Navy.",
        color: BLUE,
        content: [
          "Officer Route - B.Tech Entry: Class 12 (PCM >70%) + JEE Mains Rank → Direct SSB Call → INA, Ezhimala (4 Years).",
          "Officer Route - NDA Entry: Class 12 (PCM) → NDA Exam (UPSC) → NDA Pune (3 Years) + INA (1 Year).",
          "Officer Route - CDS Entry: Graduation (B.Tech/B.Sc) → CDS Exam (UPSC) → INA, Ezhimala.",
          "Officer Route - Direct Entry: BE/B.Tech (Marks based) → Direct SSB Call → INA, Ezhimala.",
          "Officer Route - NCC Entry: Graduate + NCC 'C' Certificate (Naval Wing) → Direct SSB Call → INA, Ezhimala.",
          "Officer Route - INET Entry: Graduate (Various Streams) → Indian Navy Entrance Test → INA, Ezhimala.",
          "Sailor Route - Agniveer: Class 10 (Matric Recruit - MR) or Class 12 PCM (Senior Secondary Recruit - SSR) → Computer-based Test → Physical Fitness Test → Medicals → 4 Years Service (Top 25% retained permanently)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, expansion, and job security.",
        color: BLUE2,
        content: [
          "Expansion: The Navy plans to have 175-200 warships by 2035 (up from ~130 today). This means massive hiring for crews and officers.",
          "Job Security: 100% for Officers. Agniveers have a 4-year tenure with retention chances.",
          "Sub Lieutenant Salary: Basic ₹56,100, Gross ₹85,000–₹1.1L/month.",
          "Lieutenant Salary: Basic ₹61,300, Gross ₹1.1L–₹1.4L/month.",
          "Commander Salary: Basic ₹1.2L, Gross ₹2.2L+/month.",
          "Vice Admiral Salary: Basic ₹2.25L, Gross ₹3.5L+/month.",
          "Agniveer Sailor Salary: Year 1 - ₹30,000/month, Year 4 - ₹40,000/month + Seva Nidhi (~₹11.7L).",
          "Unique Allowances: Sea Going Pay (very high), Submarine Pay (extremely high), Foreign Service Allowance, Ration Money."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "Zero Cost: Like the Army and Air Force, the Navy pays for your training. No tuition fees.",
          "Stipend: Gentlemen Cadets get ₹56,100/month during the final stages of training.",
          "Private Costs: Only for coaching or books (approx ₹5,000–₹20,000) before joining.",
          "Duration: 3-4 years for officers (B.Tech/NDA/IMA), 4 years for Agniveers.",
          "Post-Joining: All living expenses, food, accommodation, and medical care provided by the Navy."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Institutions)",
        icon: "Building2",
        description: "World-class naval academies.",
        color: BLUE,
        content: [
          "Indian Naval Academy (INA), Ezhimala (Kerala): Asia's largest naval academy. It offers a B.Tech degree to cadets. Located on the Arabian Sea coast.",
          "National Defence Academy (NDA), Pune: Joint training for Class 12 entrants. Trains officers for Army, Navy, and Air Force.",
          "INS Chilka (Odisha): Basic training establishment for Agniveers (Sailors). Comprehensive training in naval operations.",
          "INS Shivaji (Lonavala): Premier technical training institute for engineers. Specializes in mechanical and engineering training.",
          "INS Valsura (Jamnagar): Electrical and electronics training. Specializes in radar, sonar, and communication systems."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "PM Scholarship Scheme (PMSS): For wards of Ex-servicemen/Coast Guard personnel to pursue professional degrees (₹2,500-₹3,000/month).",
          "Institutional Scholarships: Manipal Academy (MAHE) and Sharda University offer fee waivers for wards of defense personnel.",
          "Education Loans: Navy personnel get loans at very low interest rates via the Naval Group Insurance Fund (NGIF) for their children's education.",
          "Agniveer Benefits: Seva Nidhi package (~₹11.7L) upon exit can be used for further education or starting a business.",
          "War Widow Pensions: Families of martyred sailors receive lifelong pensions and educational support."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "STCW Certifications: Navy officers can easily convert their experience into 'Standards of Training, Certification and Watchkeeping' (STCW) certificates required for the Merchant Navy.",
          "Diving/Pilot Licenses: Deep-sea divers and pilots get certifications that are valid globally for commercial diving or airline flying.",
          "Naval Engineering Certifications: Marine engineering qualifications recognized internationally.",
          "Professional Bodies: Indian Navy Officers Association, Naval Officers' Association of India.",
          "These certifications significantly enhance career prospects and earning potential in civilian maritime sectors."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in merchant navy careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Gunnery Officer (in charge of firing missiles), Anti-Submarine Warfare Officer (hunting enemy subs), Marine Engineer (maintaining ship engines), Naval Pilot (flying helicopters/jets), Submariner (operating submarines), Naval Architect (designing warships).",
          "New-Age Careers: Drone Operator (flying surveillance drones), Cyber Security Officer (protecting naval networks), Space Command Officer (satellite surveillance), AI Systems Officer (autonomous naval systems).",
          "Emerging Roles: Unmanned Surface Vessel (USV) Commander, Quantum Communication Specialist, Hypersonic Weapons Specialist.",
          "Freelancing/Post-Retirement: Maritime Security Consultant (advising shipping companies on piracy), Scuba Diving Instructor (opening a diving school), Naval Historian/Author, Defense Analyst."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of naval service.",
        color: BLUE,
        content: [
          "Sea Blindness: The public often forgets the Navy because it operates far away at sea. You won't get the daily visibility of a policeman.",
          "Isolation: You can be at sea for 45-60 days without seeing land or calling home. It takes a mental toll.",
          "Family Life: Missing anniversaries and your child's first steps is common. Families live in separated accommodations for long periods.",
          "Rough Seas: Seasickness is real. Storms can be terrifying.",
          "Submarine Duty: Extreme isolation and psychological pressure of living underwater for weeks.",
          "Physical Demands: High-stress situations, physical training, and demanding work schedules.",
          "Separation from Loved Ones: Extended deployments away from family and friends."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the Merchant Navy.",
        color: BLUE2,
        content: [
          "Unmanned Surface Vessels (USVs): Ghost ships with no crew, controlled remotely. Tech-savvy officers will 'captain' ships from a desk in Mumbai.",
          "Indigenization: The Navy is building everything in India (INS Vikrant, Nuclear Subs). Engineers will work on cutting-edge Desi tech.",
          "Women in Navy: The Navy is now gender-neutral. Women are flying helicopters, flying Dorniers, and will soon command warships.",
          "AI and Autonomous Systems: Integration of AI for navigation, targeting, and decision-making.",
          "Hypersonic Weapons: Development of next-generation weapons systems.",
          "Cyber Warfare: Growing importance of cyber security and digital defense.",
          "Impact on Employment: New roles for tech specialists, AI engineers, cyber security experts. Required skills: Programming, AI/ML, cybersecurity, data analysis."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Swimming: Learn it. You can't join the Navy if you fear water. Practice regularly and build confidence.",
          "Physics & Math: These are the languages of the Navy. Master them. Focus on mechanics, navigation, and problem-solving.",
          "Sea Cadets Corps (SCC): Similar to NCC but for the Navy. Join if your city has a unit. Learn naval operations and discipline.",
          "Leadership: Become a House Captain or Sports Captain. The Navy wants leaders, not just followers.",
          "Physical Fitness: Build stamina and strength. Practice running, swimming, and other sports regularly.",
          "Current Affairs: Follow news on naval operations, geopolitics, and maritime issues.",
          "Technical Skills: Learn basic computer skills and programming. Understand how ships operate.",
          "Discipline: Develop punctuality, responsibility, and commitment.",
          "Teamwork: Participate in group activities and team sports. Naval service is all about teamwork.",
          "Communication: Develop clear and effective communication skills."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Naval Personalities",
        icon: "User",
        description: "Inspiring figures in the Indian Navy.",
        color: BLUE2,
        content: [
          "Admiral S.M. Nanda: 'The Man Who Bombed Karachi.' The Naval Chief in 1971 who dared to attack Pakistan's harbor, changing the war.",
          "Captain Mahendra Nath Mulla (MVC): The Captain of INS Khukri who chose to go down with his sinking ship in 1971, giving his life jacket to a junior sailor. A symbol of ultimate sacrifice.",
          "Commander Abhilash Tomy: The first Indian to circumnavigate the globe solo and non-stop on a sailboat. A modern-day legend of endurance.",
          "Vice Admiral Hari Kumar: Known for modernizing the Navy's theater commands and strategic operations.",
          "Sub Lieutenant Shivangi: The first woman pilot of the Indian Navy, inspiring millions of girls to aim for the skies and seas.",
          "Admiral Sunil Lanba: Former Chief of Naval Staff who led the Navy's modernization and expansion.",
          "Vice Admiral Pradeep Chauhan: Known for his expertise in naval strategy and maritime security."
        ]
      }
    ]
  },
  central_reserve_forces: {
    slug: "central_reserve_forces",
    badge: "🛡️ India's Internal Security Shield for Class 10+",
    heading: "Central Reserve Forces (CRF)",
    subheading: "Protecting India's internal security, borders, and critical infrastructure. From counter-terrorism to disaster relief, you'll be the nation's first line of defense against internal threats.",
    whyCards: [
      { icon: "Shield", title: "Internal Security Powerhouse", description: "Guard India's borders, counter terrorism, and maintain internal security with 9+ lakh personnel across 5 major forces.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Massive Expansion", description: "CRF forces are expanding rapidly with new battalions and specialized units. Huge hiring for constables, officers, and specialists.", borderColor: "#059669" },
      { icon: "Zap", title: "Diverse Opportunities", description: "From border security to counter-terrorism, cyber operations to disaster management. Multiple career paths available.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Job Security & Prestige", description: "100% job security, excellent salary, unique allowances, and the honor of serving the nation's internal security.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-6 Months (Constable) to 2 Years (Officer Training)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "Constable, SI, Officer, Direct Entry, NCC", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹21K–₹2.5L+ (Constable to Senior Officer)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "9+ Lakh", label: "Total CRF Personnel", gradient: "from-green-500 to-green-600" },
      { value: "5", label: "Major Paramilitary Forces", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the Central Reserve Forces and their critical role.",
        color: BLUE,
        content: [
          "The Central Reserve Forces Definition: A collective term for India's five major paramilitary forces under the Ministry of Home Affairs. These forces operate under the central government and are deployed across India to maintain internal security, guard borders, and respond to emergencies.",
          "The Five Forces: CRPF (Central Reserve Police Force) - 5 lakh+ personnel, India's largest paramilitary force. BSF (Border Security Force) - 2.5 lakh+ personnel, guards India's land borders. CISF (Central Industrial Security Force) - 1.6 lakh+ personnel, protects critical infrastructure. ITBP (Indo-Tibetan Border Police) - 60,000+ personnel, guards high-altitude borders. SSB (Sashastra Seema Bal) - 50,000+ personnel, guards India's eastern borders.",
          "Your Mission: Counter terrorism and insurgency, guard national borders, protect critical infrastructure (airports, ports, power plants), conduct disaster relief operations, and maintain internal security during communal tensions.",
          "Why It Matters: Unlike the Army which fights external enemies, the CRF fights internal threats. In a nation of 1.4 billion people with diverse religions, languages, and ideologies, internal security is paramount. The CRF is the first responder to terrorism, riots, and natural disasters. They are the 'Sentinels of Internal Security.'"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Constable Rajesh (CRPF)",
        icon: "Clock",
        description: "Real workflow of a CRPF constable during counter-terrorism operations.",
        color: BLUE2,
        content: [
          "04:30 AM - Wake-up Call: The bugle sounds. Rajesh jumps out of his bunk in the CRPF camp in Chhattisgarh. He is part of a counter-insurgency unit deployed in a Naxal-affected area.",
          "05:30 AM - Physical Training: The platoon does PT (Physical Training). Running, push-ups, and tactical drills. Fitness is non-negotiable in the CRF.",
          "07:00 AM - Breakfast & Briefing: The Platoon Commander briefs the team. 'Intelligence suggests Naxal activity in Sector 5. We will conduct a patrol.' Rajesh checks his rifle, ammunition, and communication device.",
          "08:30 AM - The Patrol: Rajesh and his team move into the dense forest. Every step is calculated. They look for signs of Naxal camps—disturbed vegetation, abandoned weapons, or food remnants. The tension is palpable.",
          "01:00 PM - Lunch in the Field: They eat packed rations (Biscuits, Canned food) in the forest. No hot meals during operations. Rajesh drinks water from his bottle and checks his ammunition count.",
          "03:00 PM - Contact!: Suddenly, gunfire erupts. A Naxal group has opened fire. Rajesh takes cover behind a tree. He returns fire, coordinating with his team. The firefight lasts 15 minutes. The Naxals retreat. No casualties on Rajesh's side.",
          "05:00 PM - Return to Base: The team returns to the camp. Rajesh is exhausted but alert. He cleans his rifle meticulously. A dirty rifle can jam during the next encounter.",
          "07:00 PM - Dinner & Rest: He eats dinner in the mess. The food is simple but nutritious. He writes a letter to his family (mail is sent once a week).",
          "09:00 PM - Night Duty: Rajesh is assigned night sentry duty. He stands guard at the camp perimeter for 4 hours, watching for any suspicious movement. Vigilance is the price of safety."
        ]
      },
      {
        id: "who",
        title: "Is This You? The CRF Personnel DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Check: The Patriot - Do you have an unwavering commitment to the nation? The Brave - Can you face danger without hesitation? The Disciplined - Can you follow orders without question? The Team Player - Can you trust your teammates with your life? The Adaptable - Can you function in extreme conditions (high altitude, dense forests, urban chaos)?",
          "Hard Skills: Physical Fitness (Endurance and strength), Weapon Handling, Tactical Awareness, First Aid, Communication.",
          "Soft Skills: Courage (not the absence of fear, but acting despite it), Discipline, Loyalty, Quick Decision-Making, Empathy (treating civilians with respect), Leadership (for officer roles).",
          "The Self-Check: Do you have a strong sense of duty? Can you handle stress and danger? Are you physically fit and mentally strong? Do you value discipline and honor? If yes, you have the CRF Personnel DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Core duties across different CRF forces.",
        color: BLUE2,
        content: [
          "CRPF (Counter-Terrorism & Insurgency): Counter-Naxal operations in central India, Counter-terrorism in J&K, Riot control and crowd management, VIP security, Disaster relief.",
          "BSF (Border Security): Guarding India's land borders (Pakistan, Bangladesh, Myanmar), Preventing smuggling and infiltration, Border patrol and surveillance, Counter-insurgency in border areas.",
          "CISF (Critical Infrastructure Protection): Airport security, Port security, Power plant protection, Railway station security, Cyber security for critical infrastructure.",
          "ITBP (High-Altitude Border Security): Guarding India-China border in Ladakh and Himachal, High-altitude mountaineering and rescue, Counter-insurgency in Himalayan regions.",
          "SSB (Eastern Border Security): Guarding India-Bangladesh and India-Myanmar borders, Counter-smuggling operations, Disaster management in eastern states."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to join the Central Reserve Forces.",
        color: BLUE,
        content: [
          "Constable Route (Entry Level): Class 10 Pass → SSC GD (General Duty) Exam → Written Test → Physical Fitness Test → Medicals → 3-6 months training → Deployment. Growth: Constable → Head Constable → Naib Subedar → Subedar.",
          "Sub-Inspector Route (Mid-Level): Graduation (any degree) → SSC CPO (Central Police Organization) Exam → Written → Physical Endurance Test → Medicals → 6-12 months training → Deployment. Growth: SI → Inspector → Deputy Commandant.",
          "Officer Route (Leadership Level): Graduation (any degree) → UPSC CAPF (AC) Exam → High rank required to choose CRF → Training at CRPF Academy Indore or respective force academy → Deployment. Growth: Assistant Commandant → Commandant → Senior Commandant → Inspector General.",
          "Direct Entry (Specialized Roles): B.Tech/BE (Engineering) → Direct recruitment for technical positions → Training → Deployment. B.Tech (Computer Science) → Cyber Security Officer roles.",
          "NCC Entry: Graduate + NCC 'C' Certificate → Direct recruitment as Officer → Training → Deployment."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, expansion, and job security.",
        color: BLUE2,
        content: [
          "Expansion Plans: CRPF plans to raise 10 new battalions by 2026. BSF is expanding its presence in eastern borders. CISF is recruiting for new airport and port security contracts.",
          "Job Security: 100% for permanent personnel. Constables and Officers have secure careers until retirement.",
          "Constable Salary: Basic ₹21,700, Gross ₹30,000–₹40,000/month. Includes allowances for location (Border allowance, High-altitude allowance).",
          "Sub-Inspector Salary: Basic ₹35,400, Gross ₹50,000–₹65,000/month.",
          "Deputy Commandant Salary: Basic ₹56,100, Gross ₹75,000–₹90,000/month.",
          "Commandant Salary: Basic ₹78,800, Gross ₹1.1L–₹1.4L/month.",
          "Inspector General Salary: Basic ₹2,25,000, Gross ₹3.0L+/month.",
          "Unique Allowances: Border Allowance (₹5,000–₹15,000/month), High-Altitude Allowance (₹10,000–₹20,000/month), Counter-Insurgency Allowance, Operational Allowance."
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Training costs and financial support.",
        color: BLUE2,
        content: [
          "Zero Training Cost: Once selected, the government pays for all training, food, uniform, and accommodation. You actually earn a salary/stipend during training.",
          "Preparation Cost: SSC/UPSC Coaching - ₹15,000–₹1.2L (Optional). Self-Study - ₹2,000–₹5,000 for books and study materials.",
          "Duration: 3-6 months for Constable training, 6-12 months for SI training, 1-2 years for Officer training.",
          "Post-Joining: All living expenses, food, accommodation, medical care, and uniform provided by the force. Free housing in camps or government quarters.",
          "Family Benefits: Spouse and children get government accommodation and medical benefits."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study? (Training Institutions)",
        icon: "Building2",
        description: "World-class training academies for CRF forces.",
        color: BLUE,
        content: [
          "CRPF Academy, Indore (Madhya Pradesh): Premier training institute for CRPF officers. Offers comprehensive training in counter-terrorism, riot control, and leadership.",
          "BSF Academy, Tekanpur (Madhya Pradesh): Training center for BSF personnel. Specializes in border security and counter-insurgency operations.",
          "CISF Academy, Kadarpur (Haryana): Training institute for CISF personnel. Focuses on critical infrastructure protection and security operations.",
          "ITBP Academy, Auli (Uttarakhand): High-altitude training center for ITBP personnel. Specializes in mountaineering, high-altitude operations, and rescue.",
          "SSB Academy, Mussoorie (Uttarakhand): Training center for SSB personnel. Focuses on border security and counter-insurgency in eastern regions.",
          "Central Paramilitary Forces Training Centre (CPMF), Belgaum (Karnataka): Advanced training for specialized roles across all CRF forces."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "PM Scholarship Scheme (PMSS): For wards of CRF personnel to pursue professional degrees (₹2,500–₹3,000/month).",
          "CRF Welfare Fund: Each force has a welfare fund that provides educational assistance to children of personnel.",
          "Institutional Scholarships: Universities like Delhi University and Banaras Hindu University offer fee waivers for wards of defense and paramilitary personnel.",
          "Education Loans: CRF personnel get loans at very low interest rates (2–3%) for their children's education through government banks.",
          "Post-Retirement Benefits: Gratuity and pension can be used for children's higher education or starting a business.",
          "Agniveer Benefits: Similar to Army Agniveers, CRF Agniveers get a Seva Nidhi package (~₹11.7L) upon exit for further education or business."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional recognition.",
        color: BLUE2,
        content: [
          "Commando Training Certification: Advanced combat and tactical training recognized internationally.",
          "Cyber Security Certifications: CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional) for cyber specialists.",
          "First Aid & Medical Certifications: CPR, Advanced First Aid, recognized by international medical bodies.",
          "Mountaineering Certifications: ITBP personnel get mountaineering certifications recognized by the Indian Mountaineering Foundation.",
          "Dog Handler Certifications: Specialized training for K-9 units, recognized by international dog training organizations.",
          "Professional Bodies: Central Paramilitary Forces Officers Association, CRF Personnel Welfare Association.",
          "These certifications significantly enhance career prospects in civilian sectors like private security, disaster management, and international peacekeeping."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in CRF careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Counter-Terrorism Specialist (leading anti-terror operations), Border Security Officer (guarding national borders), Critical Infrastructure Protection Officer (securing airports/ports), Riot Control Specialist (managing public order), Commando (specialized combat operations).",
          "New-Age Careers: Cyber Security Officer (protecting CRF networks from cyber attacks), Drone Operator (surveillance and reconnaissance), AI Systems Specialist (autonomous security systems), Data Analyst (analyzing intelligence data), Biometric Security Expert (facial recognition systems).",
          "Emerging Roles: Autonomous Border Patrol Operator, Quantum Communication Specialist, AI-based Threat Detection Officer, Climate Disaster Response Coordinator.",
          "Post-Retirement Opportunities: Private Security Consultant (advising corporates on security), Disaster Management Coordinator (NGOs and government agencies), Security Trainer (training corporate security teams), International Peacekeeping (UN missions), Defense Analyst/Author."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of CRF service.",
        color: BLUE,
        content: [
          "Risk to Life: Counter-terrorism and border operations carry significant risk. Casualties do occur. You must be prepared for the ultimate sacrifice.",
          "Frequent Transfers: You may be transferred every 2-3 years. Family life becomes challenging with constant relocations.",
          "Strict Discipline: Military-style discipline is non-negotiable. Disobedience can result in court-martial.",
          "Psychological Stress: Witnessing violence, death, and destruction takes a mental toll. PTSD (Post-Traumatic Stress Disorder) is common.",
          "Family Separation: Extended deployments mean months away from family. Anniversaries and children's milestones are often missed.",
          "Limited Privacy: Life in camps means limited personal space and privacy.",
          "Bureaucratic Delays: Promotions and transfers can be slow due to bureaucratic processes.",
          "Political Pressure: Decisions may be influenced by political considerations rather than pure operational merit."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the Central Reserve Forces.",
        color: BLUE2,
        content: [
          "AI-Based Surveillance: AI will monitor borders and critical infrastructure 24/7 with 95% accuracy. Fewer human patrols, more tech-based monitoring.",
          "Drone Technology: Autonomous drones for border patrol, surveillance, and even counter-terrorism operations. Drone operators will be in high demand.",
          "Cyber Warfare: Growing importance of cyber security. CRF networks will be targets for cyber attacks. Cyber specialists will be critical.",
          "Women Recruitment: Government aims to increase women in CRF to 33% (currently ~5%). More opportunities for women in combat and leadership roles.",
          "Modernization: New weapons, vehicles, and communication systems. Personnel will need to be tech-savvy.",
          "Climate Adaptation: CRF will play a larger role in climate disaster management. New roles for climate specialists.",
          "International Cooperation: CRF personnel will increasingly participate in UN peacekeeping missions and international security operations.",
          "Impact on Employment: New roles for AI specialists, drone operators, cyber security experts, climate scientists. Required skills: Programming, AI/ML, cybersecurity, data analysis, drone operation."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Physical Fitness: This is non-negotiable. Start running, swimming, and strength training now. Aim for 5km run in under 25 minutes.",
          "NCC (National Cadet Corps): Join NCC in school. Learn discipline, leadership, and basic military training. NCC 'C' Certificate gives direct entry to officer roles.",
          "Current Affairs: Follow news on national security, terrorism, border issues, and internal security. Read newspapers daily.",
          "Leadership: Take leadership roles in school—House Captain, Sports Captain, Student Council. CRF values leaders.",
          "Discipline: Develop punctuality, responsibility, and commitment. These are fundamental to military life.",
          "Physical Courage: Participate in adventure activities—rock climbing, trekking, water sports. Build confidence in challenging situations.",
          "Communication: Develop clear and effective communication skills. You'll need to coordinate with diverse teams.",
          "Problem-Solving: Practice logical thinking and quick decision-making. Military operations require rapid problem-solving.",
          "Teamwork: Participate in team sports and group activities. CRF is all about teamwork.",
          "Technical Skills: Learn basic computer skills and programming. Cyber operations are becoming increasingly important.",
          "First Aid: Learn CPR and basic first aid. This can save lives.",
          "Patriotism: Develop a strong sense of duty and patriotism. This is the foundation of CRF service."
        ]
      },
      {
        id: "personalities",
        title: "Famous CRF Personalities",
        icon: "User",
        description: "Inspiring figures in the Central Reserve Forces.",
        color: BLUE2,
        content: [
          "Rajesh Dixit (CRPF): Legendary counter-terrorism expert who led successful operations against Naxals in Chhattisgarh. Known for his tactical brilliance and compassion for civilians.",
          "Hemant Karkare (CRPF): Martyred during the 26/11 Mumbai terror attacks. A symbol of courage and sacrifice. His legacy inspires thousands of CRPF personnel.",
          "Ajay Sharma (BSF): Recipient of the Ashoka Chakra for his bravery during counter-insurgency operations in J&K. Known for his innovative tactics.",
          "Priya Joshi (CISF): First woman Commandant of CISF. Pioneered women recruitment in critical infrastructure protection.",
          "Dorje Morup (ITBP): Legendary mountaineer and ITBP officer. Led successful rescue operations in high-altitude regions. Recipient of the Padma Shri.",
          "Rajendra Singh (SSB): Known for his work in border security and counter-smuggling operations. Recipient of the President's Police Medal.",
          "Kiran Bedi (Former CRPF): First woman IPS officer in India. Pioneered women recruitment in paramilitary forces. Now a social activist and author."
        ]
      }
    ]
  }
};

publicSafetyAndSecurityUpdateData.indian_paramilitary_forces = {
  ...publicSafetyAndSecurityUpdateData.central_reserve_forces,
  slug: "indian_paramilitary_forces",
  badge: "🛡️ India's Internal Security Frontline for Class 10+",
  heading: "Indian Paramilitary Forces",
  subheading: "Serve in CRPF, BSF, CISF, ITBP, and SSB to protect borders, internal security, and critical infrastructure across India.",
  quickFacts: [
    { label: "Duration", detail: "3-6 Months (Constable) to 2 Years (Officer Training)", color: "bg-green-100 text-green-700" },
    { label: "Entry Routes", detail: "SSC GD, SSC CPO, UPSC CAPF (AC), State Police, NCC", color: "bg-blue-100 text-blue-700" },
    { label: "Salary Range", detail: "₹21K–₹2.5L+ (Constable to Senior Officer)", color: "bg-purple-100 text-purple-700" }
  ],
  statCards: [
    { value: "9+ Lakh", label: "Personnel Across Forces", gradient: "from-green-500 to-green-600" },
    { value: "5", label: "Major Forces (CRPF, BSF, CISF, ITBP, SSB)", gradient: "from-blue-500 to-blue-600" }
  ],
  guideSections: publicSafetyAndSecurityUpdateData.central_reserve_forces.guideSections.map((section) => ({
    ...section,
    title: section.title.replace(/\bCRF\b/g, "Indian Paramilitary Forces"),
    description: section.description.replace(/\bCRF\b/g, "Indian Paramilitary Forces"),
    content: section.content.map((item) => item.replace(/\bCRF\b/g, "Indian Paramilitary Forces"))
  }))
};
