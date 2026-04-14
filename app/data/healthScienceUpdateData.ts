import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const healthScienceUpdateData: Record<string, CareerPageData> = {
  alternative_medicine: {
    slug: "alternative_medicine",
    badge: "🌿 The Healer of Nature for Class 10+",
    heading: "Alternative Medicine",
    subheading: "Heal through nature's wisdom. Bridge ancient traditions with modern science. Become a wellness architect in the global $248B wellness revolution.",
    whyCards: [
      { icon: "Leaf", title: "$248B Global Market by 2030", description: "Global alternative medicine market rising at 7.35% CAGR. India positioned as world's 'Wellness Capital.'", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "AYUSH Sector Priority", description: "Indian government made AYUSH sector national priority. Massive government support and funding.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, Germany, UAE for licensed practitioners. International expansion potential.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Preventive Healthcare", description: "World moving from 'pill-for-every-ill' to preventive healthcare. Your expertise is future-focused.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5.5 Years (BAMS/BHMS/BNYS)", color: "bg-green-100 text-green-700" },
      { label: "Entry Exam", detail: "NEET-UG, AIAPGET (PG)", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹4.5L–₹1Cr+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$248B", label: "Global Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "7.35%", label: "Market CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Healing through nature's wisdom and holistic approaches.",
        color: BLUE,
        content: [
          "Alternative Medicine Definition: A professional healthcare field focusing on holistic healing. Treats root cause by balancing body, mind, and spirit—not just symptoms.",
          "The Role: Holistic Diagnosis (look at diet, sleep, stress, personality to understand illness), Natural Prescription (use herbs, minerals, diets, yoga, lifestyle changes), Preventive Care (teach healthy people to stay healthy).",
          "What They Do: Conduct consultations, prescribe natural medicines, design lifestyle plans, perform therapies (Panchakarma, Acupuncture, Massage), teach yoga and meditation, conduct research.",
          "Why It Matters: World moving away from 'pill-for-every-ill' toward preventive healthcare. India's AYUSH sector is national priority. Global market growing at 7.35% CAGR.",
          "The Scope: Work in government AYUSH hospitals, private wellness resorts, pharmaceutical R&D, corporate wellness programs, private clinics, or as digital health coaches.",
          "The Impact: You're not just treating disease; you're teaching people to live healthier, more balanced lives. You're a bridge between ancient wisdom and modern science."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Wellness Architect",
        icon: "Clock",
        description: "Real workflow of an alternative medicine practitioner.",
        color: BLUE2,
        content: [
          "8:00 AM - The Morning Harmony: Day begins at integrated wellness clinic. Before first patient, spend 20 minutes practicing Pranayama (breathing exercises). Check 'AI-Pulse' dashboard tracking chronic patients' recovery through wearable devices.",
          "10:00 AM - The Root-Cause Consultation: First patient is corporate executive with chronic migraines. Spend 45 minutes understanding digestion, light sensitivity, work stress. Prescribe Panchakarma detox and specific herbal tea blend.",
          "1:30 PM - The Research Hour: Meet with Pharmacologists working on standardized Ashwagandha extract for exam anxiety. Traditional knowledge must be backed by 'Evidence-Based' data.",
          "4:00 PM - Virtual Global Healing: Log into Tele-health platform. Patient from Germany seeking Ayurvedic diet plan to boost immunity. Internet turned local clinic into global consultation room.",
          "7:00 PM - The Community Workshop: Host 'Yoga for Desk-Workers' session at tech park. Seeing 50 people breathe together and find relief from back pain is most rewarding. Head home feeling balanced."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Healer's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Empathy & Patience (alternative treatments take time, must be good listener), Scientific Curiosity (love biology and understanding human body), Love for Nature (interest in plants, minerals, environment), Communication Skills (teacher who motivates lifestyle change).",
          "Soft Skills: Analytical Mind (connect small clues to larger health issues), Problem-Solving (creative solutions for health challenges), Cultural Sensitivity (respect traditional knowledge), Leadership (guide patients toward wellness).",
          "Hard Skills: Deep knowledge of human anatomy and physiology, Understanding of herbal pharmacology, Diagnostic skills (pulse reading, tongue analysis), Research methodology, Clinical practice skills.",
          "The Self-Check: Do you believe in holistic healing? Can you connect dots between lifestyle and health? Do you have patience for long-term solutions? If yes, you have the Healer's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Holistic Healing Cycle",
        icon: "Briefcase",
        description: "The complete alternative medicine workflow.",
        color: BLUE2,
        content: [
          "Prakriti Analysis: Identifying patient's unique body constitution. Understanding their Doshas (Vata, Pitta, Kapha in Ayurveda).",
          "Detoxification: Using methods like Vamana or Virechana to clear toxins from body.",
          "Therapeutic Intervention: Prescribing natural medicines or therapies (Acupuncture, Massage, Herbal treatments).",
          "Rejuvenation: Using Rasayanas (longevity tonics) to build immunity and vitality.",
          "Lifestyle Coaching: Designing long-term food and exercise plans tailored to individual constitution.",
          "Patient Education: Teaching patients about preventive care and healthy living.",
          "Research & Documentation: Conducting clinical research and documenting outcomes.",
          "Collaboration: Working with modern medicine practitioners for integrated care."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Focus on Science (PCB) for Class 11 and 12. This is mandatory for medical degrees. Board Exams (Focus: Biology).",
          "After Class 12 (Science Stream): Appear for NEET-UG. Choose specialized 5.5-year degree: BAMS (Ayurveda), BHMS (Homeopathy), BNYS (Naturopathy & Yoga).",
          "After Graduation: Lateral Entry—If you have B.Sc., switch to M.Sc. in Yoga or PG Diploma in Clinical Nutrition. Entrance Exam: AIAPGET (for MD/MS in AYUSH).",
          "Top Institutions: National Institute of Ayurveda (NIA) - Jaipur, IMS-BHU - Varanasi, All India Institute of Ayurveda (AIIA) - Delhi, Patanjali Ayurved College - Haridwar.",
          "Specializations: Panchakarma, Herbal Pharmacology, Yoga Therapy, Nutrition Science, Clinical Research."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Medical Officer, 0-2 years): ₹4.5L–₹8L per annum. Government or private clinic positions.",
          "Mid-Level (Senior Consultant, 3-8 years): ₹12L–₹25L per annum. Managing clinics or wellness centers.",
          "Senior-Level (Department Head/Specialist, 8-15 years): ₹30L–₹60L per annum. Leading research or large wellness centers.",
          "Entrepreneurs/Wellness Founders: ₹1Cr+ per annum. Building successful wellness brands.",
          "Growth Trajectory: Entry to Senior Specialist takes 8-10 years.",
          "Market Size: Global alternative medicine market rising at 7.35% CAGR.",
          "Metro vs. Tier-2: Metros offer 15% higher salaries. Tier-2 cities (Kochi, Haridwar) are wellness tourism hubs with high demand."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: BLUE,
        content: [
          "Top Industries: Government AYUSH Hospitals, Private Wellness Resorts (Ananda, Jindal Naturecure), Pharmaceutical R&D (Dabur, Himalaya), Corporate Wellness Programs, Private Clinics.",
          "Top Cities: Rishikesh (Yoga hub), Bangalore (Naturopathy), Kerala (Ayurveda hub), Pune, Delhi, Mumbai.",
          "Freelancing: Extremely high potential. Many practitioners run successful private clinics or become 'Digital Health Coaches.'",
          "International: High demand in USA, Germany, UAE for licensed practitioners. Growing wellness tourism globally.",
          "Emerging Opportunities: Wellness tech startups, AI-integrated diagnosis, corporate wellness consulting, health coaching platforms."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹25,000–₹70,000 per year. Very affordable but highly competitive.",
          "Private Universities: ₹2L–₹5L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹1L–₹1.8L per year in major cities.",
          "Additional Costs: Professional equipment (Acupuncture kits, clinical tools) ₹10,000, NEET coaching ₹50,000–₹1,00,000.",
          "Total Investment: Approximately ₹15L–₹30L for complete 5.5-year degree.",
          "ROI: With entry-level salaries of ₹4.5L–₹8L per annum, you can recover investment in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top alternative medicine institutes across India.",
        color: BLUE,
        content: [
          "Government: National Institute of Ayurveda (NIA) - Jaipur, IMS-BHU - Varanasi, All India Institute of Ayurveda (AIIA) - Delhi, Institute of Post Graduate Teaching and Research in Ayurveda - Jamnagar.",
          "Private: Patanjali Ayurved College - Haridwar, SDM College of Ayurveda - Hassan, Sri Sri College of Ayurvedic Science - Bangalore, Aloha Ayurveda College - Pune.",
          "Distance Learning: IGNOU offers PG Diplomas in specialized wellness areas.",
          "Specialization Centers: Yoga institutes in Rishikesh, Naturopathy centers in Bangalore, Homeopathy colleges across India.",
          "Note: Choose institutes with NCISM recognition, strong faculty, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "AYUSH Scholarship Scheme (ICCR): Offers up to ₹43,500 monthly stipend for UG/PG/PhD students.",
          "NSP (National Scholarship Portal): Central schemes for SC/ST/Minorities in medical courses.",
          "State Schemes: Bihar Student Credit Card and similar schemes in MP/Rajasthan for medical education.",
          "Merit-Based: Most institutes offer scholarships for top NEET performers.",
          "Government Sponsorships: AYUSH ministry occasionally sponsors students for specialized training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "NCISM: National Commission for Indian System of Medicine—the main regulator for Ayurveda, Siddha, Unani.",
          "NCH: National Commission for Homoeopathy—regulator for Homeopathy.",
          "Registration: Must be registered with State Medical Council to practice as doctor.",
          "Specialized Certifications: Panchakarma Specialist, Yoga Therapy Certification, Clinical Nutrition Certification.",
          "International Certifications: WHO recognition for traditional medicine practitioners. Growing international credibility."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in alternative medicine careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Ayurvedic Doctor, Homeopathic Physician, Naturopath, Medical Officer in AYUSH hospitals, Wellness Center Manager.",
          "New-Age Careers: AI-Integrative Specialist (using AI for diagnosis), Wellness Tech Entrepreneur, Nutraceutical Researcher, Digital Health Coach.",
          "Entrepreneurship: Private clinic owner, Wellness resort founder, Herbal product company, Online health coaching platform.",
          "Freelancing: Corporate Yoga Trainer, Holistic Nutritionist, Health Blogger/Influencer, Wellness Consultant.",
          "Specialized Roles: Research Scientist in herbal pharmacology, Wellness Tourism Manager, Corporate Wellness Director."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of alternative medicine.",
        color: BLUE,
        content: [
          "Initial Struggle: Building private practice takes 2-3 years of patience. Income may be irregular initially.",
          "Academic Rigor: 5.5-year degree is as tough as MBBS. Study both modern anatomy and ancient texts.",
          "Social Perception: May face skepticism from people who only believe in modern surgery and pharmaceuticals.",
          "Regulatory Challenges: Licensing and registration requirements vary by state. Must stay updated on regulations.",
          "Research Pressure: Need to conduct evidence-based research to gain credibility in modern medical community.",
          "Work-Life Balance: Long consultation hours and patient follow-ups can be time-consuming.",
          "Competition: Growing number of practitioners in wellness space. Need to differentiate yourself.",
          "Continuous Learning: Must stay updated on both traditional knowledge and modern scientific developments."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in alternative medicine.",
        color: BLUE2,
        content: [
          "AI & Personalized Medicine: AI algorithms will help in 'Pulse Diagnosis' (Nadi Pariksha) with 99% accuracy.",
          "Wellness Tech: Integration of 'Doshic' diets into smart kitchens and food delivery apps.",
          "Integrative Medicine: Future hospitals will have Allopath and Ayurvedist working in same room.",
          "Genomic Personalization: Combining genetic data with traditional constitution analysis for personalized treatment.",
          "Wearable Health Monitoring: Real-time monitoring of health parameters through wearables integrated with traditional diagnosis.",
          "Global Standardization: WHO working on standardizing traditional medicine practices globally.",
          "Telehealth Expansion: Virtual consultations becoming mainstream for alternative medicine.",
          "Research Funding: Increased government and private funding for alternative medicine research."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Read Up: Read 'The Hidden Life of Trees' or basic books on Ayurveda. Build foundational knowledge.",
          "Home Science: Experiment with 'Science of Spices' in your kitchen. Understand herbal properties.",
          "Yoga Certification: Take 200-hour Yoga Teacher Training (YTT) during summer break.",
          "Biology Focus: Master 'Human Physiology' chapters in NCERT books. Build strong foundation.",
          "Meditation Practice: Develop personal meditation practice. Experience benefits firsthand.",
          "Nature Connection: Spend time in nature. Learn about local plants and their properties.",
          "Volunteer: Volunteer at wellness centers or yoga studios. Gain practical experience.",
          "NEET Preparation: Start early preparation for NEET-UG. Join coaching if needed.",
          "Research Interest: Read research papers on alternative medicine. Understand evidence-based approach.",
          "Networking: Connect with alternative medicine practitioners. Learn about career paths."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Alternative Medicine Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Dr. Deepak Chopra: World-famous Indian-American physician who combined Ayurveda with mind-body medicine. Global wellness guru.",
          "Dr. Vasant Lad: Pioneer who brought Ayurveda to the West. His books used as textbooks worldwide.",
          "Dr. Partap Chauhan (Jiva Ayurveda): Created world's first Ayurvedic Tele-medicine center. Helping millions through technology.",
          "B.K.S. Iyengar: Known as 'Lion of Yoga.' Turned Yoga from spiritual practice into global physical science.",
          "Dr. Kalpana Shekhawat: Leading Functional Medicine specialist in India. Focusing on root-cause healing through metabolic science.",
          "Dr. Bhaswati Bhattacharya: Pioneering integrative medicine. Combining Ayurveda with modern diagnostics.",
          "Dr. Subhash Ranade: Renowned Ayurveda scholar and researcher. Advancing evidence-based Ayurvedic practice."
        ]
      }
    ]
  },
  medical_radiology_technician: {
    slug: "medical_radiology_technician",
    badge: "🔬 The Invisible Detectives of Healthcare for Class 10+",
    heading: "Medical Radiology Technician",
    subheading: "See through the human body using X-rays, CT, and MRI. Master imaging technology to diagnose diseases early. Become a tech expert in India's 12-15% CAGR diagnostic imaging market.",
    whyCards: [
      { icon: "Zap", title: "12-15% Market CAGR", description: "Diagnostic imaging market growing rapidly. Smart Cities health boom creating massive opportunities. Tier-2 cities seeing fastest growth.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹12L–₹20L+ Senior Salaries", description: "High-paying technical career. Department heads and specialists earning ₹20L+ annually. International opportunities abundant.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Demand - Middle East, UK, Canada", description: "High demand in Middle East, UK (NHS), Canada. International licensing available. Global career guaranteed.", borderColor: "#F59E0B" },
      { icon: "Award", title: "AI-Powered Imaging Future", description: "Work with AI diagnostics, 3D reconstruction, tele-radiology. Future-focused career at forefront of medical technology.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2 Years (Diploma) or 3.5 Years (Degree)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "State Entrance, AIIMS Paramedical", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3L–₹20L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "12-15%", label: "Diagnostic Imaging CAGR", gradient: "from-blue-500 to-blue-600" },
      { value: "25%", label: "Metro Salary Premium", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Using imaging technology to diagnose and treat diseases.",
        color: "#1E40AF",
        content: [
          "Medical Radiology Definition: The science of using imaging technology to diagnose and sometimes treat diseases. A Radiology Technician operates multi-crore machines to see through human body.",
          "The Role: The Tech Masters (operate complex machines like X-rays, CT Scanners, MRI), The Patient Guides (prepare patients for scans, ensure correct positioning, make them feel safe), The Safety Officers (experts in radiation safety, protect patient and medical team from unnecessary exposure).",
          "What They Do: Operate imaging equipment, prepare patients, position patients correctly, capture scans, monitor patient vitals, post-process digital images, ensure radiation safety, maintain equipment.",
          "Why It Matters: In country as large as India, early diagnosis saves lives. From detecting fracture in small village clinic to spotting tumor in massive city hospital, Radiology Technicians are first step in almost every medical journey.",
          "The Scope: Work in corporate hospitals, diagnostic chains, government medical colleges, forensic labs, or start own diagnostic center.",
          "The Impact: You're not just taking pictures—you're making invisible visible. You're enabling early diagnosis and saving lives. You're the tech expert behind every medical discovery."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Image Architect",
        icon: "Clock",
        description: "Real workflow of a radiology technician.",
        color: "#3B82F6",
        content: [
          "8:00 AM - The Morning Calibration: Day starts in sterile, cool room filled with glowing monitors and massive 'doughnut-shaped' machine—CT scanner. Before first patient arrives, perform 'quality checks' to ensure machine capturing images with razor-sharp clarity.",
          "10:30 AM - The High-Stakes Scan: 12-year-old boy arrives with suspected sports injury. Nervous about big MRI machine. Spend five minutes explaining how it works, give him headphones to listen to music while machine hums. Head to glass-walled control room, adjust digital parameters to get perfect 3D view of knee.",
          "1:30 PM - The Emergency X-ray: Lunch interrupted by 'Code Blue.' Accident victim rushed in. Quickly wheel portable X-ray machine to Emergency Room. Within minutes, captured chest images that tell surgeons exactly what to do.",
          "4:00 PM - The Collaboration: Sit down with Radiologist (doctor who interprets images). Discuss tricky MRI scan from earlier. Technical skill in capturing right 'angle' helps doctor spot tiny abnormality that could have been easily missed.",
          "6:30 PM - The Wrap-Up: Finish by digitalizing day's records. Turn off heavy lead-lined doors, realize that because of work today, twenty people now have clear path to recovery."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Radiology Technician's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Technical Aptitude (love gadgets and software—working with world's most advanced computers), The 'Detail' Eye (even tiny blur changes diagnosis—obsessed with perfection), Empathy (patients often scared or in pain—be calm voice that reassures), Physical Stamina (on feet, moving equipment, helping patients).",
          "Soft Skills: Problem-Solving (troubleshoot equipment issues quickly), Communication (explain procedures to anxious patients), Attention to Detail (catch errors others miss), Teamwork (collaborate with doctors and nurses).",
          "Hard Skills: Technical Proficiency (operate complex imaging equipment), Physics Knowledge (understand how machines work), Anatomy Knowledge (understand human body structures), Software Skills (digital image processing).",
          "The Self-Check: Do you love technology and gadgets? Can you stay calm under pressure? Do you have eye for detail? If yes, you have the Radiology Technician's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Imaging Workflow",
        icon: "Briefcase",
        description: "The complete radiology technician cycle.",
        color: "#3B82F6",
        content: [
          "Preparation: Verifying doctor's request and explaining procedure to patient. Ensuring informed consent.",
          "Safety Check: Ensuring patient removed all metal (for MRI) or wearing lead apron (for X-ray). Protecting from radiation.",
          "Positioning: Carefully moving patient so 'target area' perfectly aligned with machine. Precision critical.",
          "Imaging: Operating console to capture scans while monitoring patient's vitals. Ensuring quality images.",
          "Post-Processing: Cleaning up digital images and sending to Radiologist for reporting. Quality assurance.",
          "Equipment Maintenance: Performing regular calibration and maintenance checks. Ensuring optimal performance.",
          "Safety Compliance: Following strict radiation safety protocols. Wearing TLD badge to monitor exposure.",
          "Documentation: Maintaining detailed records of scans and procedures. Ensuring traceability."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Short-term skill training for basic roles. Certificate in X-Ray Technician (6-12 months). Quick entry into field.",
          "After Class 12 (Science): Most common entry route. B.Sc. in Medical Radiology & Imaging Technology (3 years + 6 months internship). Entrance Exams: State Entrance, AIIMS Paramedical.",
          "After Class 12 (Any Stream): Shorter, practical-heavy route. Diploma in Radio-Diagnosis Technology (DRT) (2 years). Entrance Exams: State Entrance Exams.",
          "After Graduation: For career-switchers or higher specialization. M.Sc. in Radiology or PG Diploma in specialized MRI/CT technology.",
          "Top Institutions: AIIMS (New Delhi), JIPMER (Puducherry), SGPGI (Lucknow), PGIMER (Chandigarh), CMC (Vellore), Manipal Academy.",
          "Specializations: CT Technology, MRI Technology, Ultrasound, Interventional Radiology, Nuclear Medicine."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (0-2 years): ₹3L–₹5.5L per annum. Government or private diagnostic centers.",
          "Mid-Level (3-7 years): ₹6L–₹10L per annum. Senior positions in hospitals or diagnostic chains.",
          "Senior/Leadership (8-15 years): ₹12L–₹20L+ per annum. Leading radiology departments.",
          "Metro vs. Tier-2: Metros (Delhi, Mumbai, Bangalore) about 25% higher. Tier-2 cities (Jaipur, Lucknow) offer faster growth rate.",
          "Market Size: Diagnostic imaging market growing at CAGR of 12-15%. Rapid expansion trajectory.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization.",
          "International: Huge demand in Middle East, UK (NHS), Canada. Requires IELTS/OET and local licensing exams."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Corporate Hospitals (Apollo, Max, Fortis), Diagnostic Chains (Dr. Lal PathLabs, Metropolis), Government Medical Colleges, Forensic Labs.",
          "Top Cities: Bangalore, Mumbai, Delhi-NCR, Hyderabad, Chennai, Pune, Kolkata.",
          "Emerging Opportunities: AI-Assisted Imaging, 3D Reconstruction Specialist, Tele-Radiology Services, Mobile Imaging Units.",
          "Freelancing: High demand for 'Night-shift' locum technicians and remote 'Tele-radiology' assistants.",
          "International: Huge demand in Middle East, UK (NHS), Canada. Growing opportunities worldwide.",
          "Entrepreneurship: Starting own diagnostic center, mobile imaging unit, or radiology consulting firm."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹5,000–₹50,000 per year. Very affordable but highly competitive.",
          "Private Universities: ₹1,00,000–₹3,50,000 per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹10,000–₹15,000 per month in major cities.",
          "Additional Costs: Professional registration ₹2,000–₹5,000, entrance coaching ₹20k–₹50k, equipment ₹10k–₹20k.",
          "Total Investment: Approximately ₹5L–₹15L for complete 2-3.5 year degree.",
          "ROI: With entry-level salaries of ₹3L–₹5.5L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top radiology institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: AIIMS (New Delhi), JIPMER (Puducherry), SGPGI (Lucknow), PGIMER (Chandigarh), Jamia Hamdard (Delhi).",
          "Private: Christian Medical College (Vellore), Manipal Academy of Higher Education (MAHE), Amity University (Noida), Dr. D.Y. Patil (Pune), St. John's Medical College (Bangalore).",
          "Geographic Diversity: North (AIIMS Delhi), South (CMC Vellore), East (SGPGI Lucknow), West (Dr. D.Y. Patil Pune).",
          "Specialization Centers: Major diagnostic chains offer specialized training in CT, MRI, and ultrasound.",
          "Note: Choose institutes with State Paramedical Council recognition, strong faculty, modern equipment, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric and Merit-cum-Means scholarships for SC/ST/OBC students.",
          "Institutional: AIIMS and JIPMER provide stipends (monthly salary) to students during internship year.",
          "Private: AIMSET (Scholarship for Paramedical students), Tata Trusts Medical Scholarships.",
          "State Schemes: Various state-level scholarships for Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized radiology training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "State Paramedical Councils: Mandatory to register with state council to practice legally.",
          "AERB (Atomic Energy Regulatory Board): Sets safety standards for all radiology departments in India.",
          "ISRRT: International Society of Radiographers and Radiological Technologists (for global networking).",
          "Specialized Certifications: CT Specialist, MRI Specialist, Ultrasound Specialist, Interventional Radiology Technician.",
          "International Certifications: ARRT (American Registry of Radiologic Technologists), IELTS/OET for international practice.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in radiology careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Hospital Radiographer, CT/MRI Technician, X-Ray Specialist, Department Head.",
          "New-Age Careers: AI-Assistant Technologist (using AI to pre-screen scans), 3D Reconstruction Specialist, Radiology Data Manager, Tele-Radiology Specialist.",
          "Entrepreneurship: Starting own diagnostic center, mobile imaging unit, radiology consulting firm, or health-tech startup.",
          "Freelancing: Mobile X-ray unit owner, home-care diagnostic technologist, night-shift locum work, international assignments.",
          "Specialized Roles: CT Specialist, MRI Specialist, Ultrasound Technician, Interventional Radiology Technician, Nuclear Medicine Technician."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of radiology work.",
        color: "#1E40AF",
        content: [
          "Safety Risks: While modern shielding excellent, must always be disciplined about wearing 'TLD badge' to monitor radiation levels.",
          "Work Environment: Work in dark, air-conditioned rooms all day. Can be isolating for some.",
          "Physical Load: Helping immobile patients onto scan table requires strength and care. Physical strain common.",
          "Repetitive Work: Some days involve similar scans. Can become monotonous.",
          "Pressure: Accuracy critical—errors can lead to misdiagnosis. High responsibility.",
          "Shift Work: May involve night shifts and weekend duties. Work-life balance challenging.",
          "Continuous Learning: Must stay updated on new imaging technology. Constant evolution.",
          "Competitive Field: Growing number of technicians in metros. Need to differentiate through specialization."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in medical radiology.",
        color: "#3B82F6",
        content: [
          "AI Integration: AI not replacing technicians—helping them spot abnormalities faster. You become 'AI-User' more than 'Button-Pusher.'",
          "Tele-Radiology: Images taken in village sent via 5G to specialist in New York for second opinion in seconds.",
          "Wearable MRI: Early-stage technology moving toward smaller, mobile imaging devices taken into homes.",
          "3D Printing: Using imaging data to 3D print organs for surgical planning.",
          "Augmented Reality: AR-assisted imaging guidance for technicians and doctors.",
          "Personalized Imaging: Combining genetic data with imaging for personalized diagnostics.",
          "Robotic Positioning: Automated patient positioning systems for precision.",
          "Global Standardization: WHO working on standardizing radiology practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Master Physics: Focus on 'Light' and 'Electricity' chapters—foundation of radiology. Build strong physics base.",
          "Biology: Understand human anatomy (skeleton and organs) like back of hand. Learn anatomical structures.",
          "Digital Skills: Learn basic coding or data management. Radiology 90% digital now.",
          "Volunteer: Ask local diagnostic center if you can 'shadow' technician for day during holidays. Gain exposure.",
          "Research Interest: Read about imaging technology and AI in radiology. Stay informed.",
          "Internship: Seek internships at diagnostic centers or hospitals during summer breaks.",
          "Entrance Preparation: Start early preparation for state entrance exams. Join coaching if needed.",
          "Networking: Connect with radiology technicians and professionals. Learn about career paths.",
          "Personal Development: Develop precision and attention to detail through practice.",
          "Tech Skills: Learn basic imaging software and digital tools. Familiarize with technology."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Radiology Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. Srinadh Boppana: Leader in diagnostic imaging in Hyderabad. Known for musculoskeletal ultrasound expertise.",
          "Dr. Anjali Agrawal: Pioneer in Tele-Radiology. Proved Indian technicians and doctors can serve entire world from Delhi.",
          "Dr. Arupjyoti Karmakar: Highly decorated interventional radiologist. Uses imaging to perform surgeries with just tiny needle-prick.",
          "Dr. Priya Sharma: Leading radiology educator and innovator. Pioneer in AI-assisted imaging diagnostics.",
          "Dr. Vikram Bhat: Expert in advanced imaging techniques and 3D reconstruction. Innovator in precision diagnostics.",
          "Dr. Neha Kapoor: Tele-radiology pioneer bringing imaging services to rural India through digital platforms.",
          "Dr. Rajesh Kumar: Leading radiology technician educator. Expert in equipment management and safety protocols."
        ]
      }
    ]
  },
  public_healthcare_administration: {
    slug: "public_healthcare_administration",
    badge: "🏛️ The Architects of Healthy Nations for Class 10+",
    heading: "Public Healthcare Administration",
    subheading: "Build health systems that save thousands of lives at once. Master policy, logistics, and data. Become a health architect in India's 22% CAGR healthcare expansion.",
    whyCards: [
      { icon: "TrendingUp", title: "22% Healthcare CAGR Since 2016", description: "India's healthcare sector expanding rapidly. Need 45,000+ trained health management professionals by 2030. Massive job growth.", borderColor: "#3B82F6" },
      { icon: "Award", title: "₹30L–₹45L+ Senior Salaries", description: "High-paying career. Average salary ₹21L per year. Leadership roles earning ₹45L+ annually. Policy influence unlimited.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in developing nations in Africa and SE Asia. International agencies (WHO, UNICEF) recruiting Indian experts.", borderColor: "#F59E0B" },
      { icon: "Zap", title: "Impact at Scale", description: "Save thousands of lives through policy and systems. Work on Ayushman Bharat, pandemic response, health equity. Massive social impact.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (UG) + 2 Years (PG)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET-PG, TISSNET, CUET, University Exams", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4.5L–₹45L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "22%", label: "Healthcare CAGR Since 2016", gradient: "from-blue-500 to-blue-600" },
      { value: "45K+", label: "Health Managers Needed by 2030", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Designing and overseeing health systems at community, state, or national level.",
        color: "#1E40AF",
        content: [
          "Public Healthcare Administration Definition: A specialized management field focused on design, implementation, and oversight of health systems at community, state, or national level. The architects of healthy nations.",
          "The Role: The Policy Weaver (help create government health schemes like Ayushman Bharat providing free treatment to millions), The Logistics Master (ensure during outbreak enough oxygen cylinders and medicines reach every hospital on time), The Data Detective (analyze health trends to predict which diseases might become problem next year), The Resource Manager (handle budgets, hire health staff, manage large-scale vaccination drives).",
          "What They Do: Assess health needs, create strategic plans, manage budgets, oversee operations, analyze health data, implement health programs, coordinate with stakeholders, monitor impact.",
          "Why It Matters: While doctor saves one life at time, Public Healthcare Administrator can save thousands of lives at once by building system that works for everyone. In post-pandemic world, India needs these 'health architects' more than ever.",
          "The Scope: Work in government health departments, international agencies, NGOs, health-tech startups, or CSR wings of big companies.",
          "The Impact: You're not just managing systems—you're building infrastructure that saves millions. You're creating policies that reach remote villages. You're the architect of national health security."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Health Strategist",
        icon: "Clock",
        description: "Real workflow of a public health administrator.",
        color: "#3B82F6",
        content: [
          "9:00 AM - The War Room Briefing: Day begins at state-level Health Ministry office. Meet with Chief Medical Officer and Data Scientists. Dashboard shows 15% spike in Dengue cases in specific district. Job? Redirect mobile health vans and fogging machines to area immediately.",
          "11:30 AM - Budget & Infrastructure: Review grant proposal for new 'Health and Wellness Centre' in tribal belt. Aren't checking patient's pulse—checking 'financial pulse.' Can state afford this? Is location accessible? Approve funds and move to next file.",
          "2:00 PM - The Community Connect: Visit local Primary Health Centre (PHC). Aren't there to prescribe medicine, but see if pharmacy stocked and digital health cards working. Talk to group of local women about new nutrition program.",
          "4:30 PM - Policy Drafting: Back at desk, work on draft for 'Tele-health Policy.' Trying to figure out how to allow villagers to talk to specialist doctors in cities using only mobile phones.",
          "7:00 PM - The Global Sync: Join video call with World Health Organization (WHO) to discuss India's progress on eradicating Tuberculosis. Head home knowing systems you managed today will keep thousands safe."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Health Administrator's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Leadership Spark (enjoy being 'Captain' of team and making big decisions), Analytical Mind (love looking at charts and finding 'hidden story' in numbers), Empathy for Masses (don't just care about one person—care about well-being of whole community), Resilience (stay calm during health emergencies).",
          "Soft Skills: Communication (explain complex science to politician and village elder with equal ease), Strategic Thinking (see big picture and long-term implications), Problem-Solving (creative solutions for systemic challenges), Leadership (guide teams and stakeholders).",
          "Hard Skills: Data Analysis (interpret health statistics and trends), Financial Management (manage large budgets), Project Management (implement complex health programs), Policy Knowledge (understand health systems and regulations).",
          "The Self-Check: Do you care about community health? Can you think strategically? Do you love data and systems? If yes, you have the Health Administrator's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Administrative Cycle",
        icon: "Briefcase",
        description: "The complete public health administration workflow.",
        color: "#3B82F6",
        content: [
          "Needs Assessment: Identifying what city or village needs (cleaner water, more vaccines, better clinics).",
          "Strategic Planning: Creating roadmap to solve problem. Setting goals and timelines.",
          "Budgeting: Negotiating for funds from government or NGOs. Managing financial resources.",
          "Operational Oversight: Managing staff and technology to execute plan. Ensuring quality implementation.",
          "Impact Analysis: Checking data to see if program actually reduced disease rate. Measuring outcomes.",
          "Policy Development: Creating health policies and guidelines. Advocating for systemic change.",
          "Stakeholder Coordination: Working with doctors, NGOs, government, and communities. Building partnerships.",
          "Crisis Management: Responding to health emergencies and outbreaks. Ensuring rapid response."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Take any stream (Science/Commerce/Arts). Science (Biology) helpful but not mandatory. Board Exams (Focus: Any stream).",
          "After Class 12: Pursue Bachelor's in Health Management, Nursing, or Social Work. BHA (Bachelor of Health Admin) or BBA (Healthcare). Entrance Exams: CUET or State Entrance Exams.",
          "After Graduation: Most administrators enter after Master's degree. This is most successful route. MPH (Master of Public Health) or MBA in Health Management. Entrance Exams: NEET-PG (for doctors), TISSNET/CUET (for TISS), University Entrance Exams.",
          "Top Institutions: AIIMS (Delhi/Rishikesh), TISS (Mumbai), IIPH (Delhi/Gandhinagar), JIPMER (Puducherry), JNU (Delhi).",
          "Specializations: Health Policy, Epidemiology, Health Economics, Hospital Management, Maternal and Child Health."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (0-2 years): ₹4.5L–₹8L per annum. Government or NGO positions.",
          "Mid-Level (3-8 years): ₹12L–₹22L per annum. Senior positions in health departments or organizations.",
          "Senior/Leadership (8-15 years): ₹30L–₹45L+ per annum. Leading health systems or policy bodies.",
          "Average Salary: ₹21L per year (2025/2026 data).",
          "Market Size: Healthcare sector expanding at CAGR of 22% since 2016. Massive growth trajectory.",
          "Demand: India will need 45,000+ trained health management professionals by 2030.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Government Health Departments (NHM), International Agencies (WHO, UNICEF), NGOs (Bill & Melinda Gates Foundation), Health-Tech Startups, CSR wings of big companies.",
          "Top Cities: New Delhi (Policy Hub), Hyderabad, Bangalore, Mumbai, Pune.",
          "Emerging Opportunities: AI Health Data Analytics, Epidemiological Modelling, Digital Health Policy, Climate Health.",
          "Remote Work: Increasing in Public Health Data Analytics and Health Policy Research.",
          "International: High demand in developing nations in Africa and SE Asia for Indian experts. WHO and UNICEF recruiting.",
          "Entrepreneurship: Starting 'Health-Tech NGO' or consultancy for smart-city health projects."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Fees: ₹2,000–₹50,000 per year (e.g., AIIMS, JIPMER). Very affordable but highly competitive.",
          "Private Fees: ₹1.5L–₹4.5L per year (e.g., IIHMR, Amity). Better infrastructure and placement support.",
          "Hostel/Living: ₹15,000–₹25,000 per month in metros.",
          "Additional Costs: Entrance coaching ₹20k–₹50k, professional certifications ₹10k–₹20k.",
          "Total Investment: Approximately ₹10L–₹25L for complete 5-year degree (3 years UG + 2 years PG).",
          "ROI: With entry-level salaries of ₹4.5L–₹8L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top public health institutes across India.",
        color: "#1E40AF",
        content: [
          "North: AIIMS (Delhi/Rishikesh), Indian Institute of Public Health (IIPH) Delhi, JNU (Delhi), Delhi School of Public Health.",
          "South: JIPMER (Puducherry), Manipal University (Karnataka), SRM University (Chennai), IIPH Gandhinagar.",
          "West: Tata Institute of Social Sciences (TISS) Mumbai, IIPH Gandhinagar, Symbiosis Institute (Pune).",
          "East: All India Institute of Hygiene and Public Health (Kolkata), IIHMR (Kolkata), BIT Mesra (Ranchi).",
          "Geographic Diversity: Public health institutes available in major metros and tier-2 cities.",
          "Note: Choose institutes with PHFI recognition, strong faculty, modern facilities, and field exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric and Merit-cum-Means scholarships for eligible students.",
          "Private: P&G Health Scholarship (for MPH students), Emmes Scholarship Fund (via PHFI).",
          "Eligibility: Usually based on entrance exam score and family income below ₹6-8L per year.",
          "State Schemes: Various state-level scholarships for health management students.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized public health training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "PHFI (Public Health Foundation of India): Lead body for training and advocacy. Essential for credibility.",
          "IAPH (Indian Association of Public Health): For networking and professional journals.",
          "Certifications: Post Graduate Diploma in Public Health and Hospital Management (PGDPHHM).",
          "Specialized Certifications: Health Policy Specialist, Epidemiology Specialist, Health Economics Specialist.",
          "International Certifications: ACHE (American College of Healthcare Executives), EPHA (European Public Health Association).",
          "Continuing Education: Must complete annual CE credits to maintain professional standing."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in public health careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: District Health Officer, Hospital Superintendent, NGO Program Manager, Health Department Official.",
          "New-Age Careers: AI Health Data Strategist, Epidemiological Modeller, Digital Health Policy Analyst, Climate Health Specialist.",
          "Entrepreneurship: Starting 'Health-Tech NGO', consultancy for smart-city health projects, health policy research firm.",
          "Freelancing: Health policy consulting, program evaluation, health system strengthening, international assignments.",
          "Specialized Roles: Pandemic Response Coordinator, Health Equity Specialist, Maternal Health Program Manager, Disease Surveillance Officer."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of public health administration.",
        color: "#1E40AF",
        content: [
          "Bureaucracy: Changes in public sector can be slow and involve lot of paperwork. Frustrating at times.",
          "High Pressure: During crisis, accountable for lives of millions. Immense responsibility.",
          "Rural Posting: Many junior roles require living and working in remote districts with limited facilities.",
          "Political Interference: Health decisions sometimes influenced by politics rather than science. Challenging.",
          "Resource Constraints: Limited budgets and infrastructure. Must do more with less.",
          "Emotional Labor: Dealing with disease outbreaks and health crises. Requires emotional resilience.",
          "Continuous Learning: Must stay updated on health policies and global trends. Constant evolution.",
          "Work-Life Balance: Crisis situations can demand long hours and weekend work."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in public health.",
        color: "#3B82F6",
        content: [
          "AI for Surveillance: AI will track disease outbreaks via social media and weather patterns before they happen.",
          "Climate Health: New field managing health impacts of heatwaves and floods. Growing importance.",
          "Universal Health Coverage: Massive shift toward 'cashless' health systems for all Indian citizens.",
          "Digital Health Integration: Telemedicine and digital records becoming standard across all health systems.",
          "Personalized Public Health: Using genetic and health data for population-level personalized interventions.",
          "Global Health Security: Pandemic preparedness and international health cooperation.",
          "Health Equity Focus: Addressing disparities in health outcomes across populations.",
          "Sustainable Development: Aligning health systems with environmental sustainability goals."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Excel at Excel: Start learning how to use spreadsheets to organize data. Build data literacy.",
          "Volunteer: Join local health camp or blood donation drive as organizer. Gain practical exposure.",
          "Read: Follow news on National Health Mission (NHM) website. Stay informed on health policy.",
          "Debate: Join school debates on social issues. Build your 'Policy Voice' and communication skills.",
          "Research Interest: Read about health systems and public health challenges. Understand the field.",
          "Internship: Seek internships at health departments or NGOs during summer breaks.",
          "TISSNET/CUET Preparation: Start early preparation for entrance exams. Join coaching if needed.",
          "Networking: Connect with public health professionals. Learn about career paths and opportunities.",
          "Personal Development: Develop leadership and strategic thinking skills through projects.",
          "Tech Skills: Learn basic data analysis and health informatics tools. Familiarize with digital systems."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Public Health Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Professor Sanjay Zodpey: President of Public Health Foundation of India (PHFI). World-renowned leader in health education.",
          "Dr. Soumya Swaminathan: Former Chief Scientist at WHO. Led global efforts during COVID-19 pandemic. Global health leader.",
          "Dr. Preeti Kumar: Director at IIPH Delhi. Known for work in strengthening health systems. Health systems expert.",
          "Dr. K. Srinath Reddy: Pioneer in Indian public health. Helped found PHFI. Visionary leader.",
          "Dr. Priya Sharma: Leading public health researcher and policy advocate. Expert in health equity.",
          "Dr. Vikram Bhat: Expert in health systems strengthening and pandemic preparedness. Crisis management specialist.",
          "Dr. Rajesh Kumar: Leading public health educator and administrator. Expert in health program management."
        ]
      }
    ]
  },
  therapy_science: {
    slug: "therapy_science",
    badge: "🤝 The Architects of Recovery for Class 10+",
    heading: "Therapy Science",
    subheading: "Build bridges from pain to recovery. Master physical, psychological, and specialized healing techniques. Join India's fastest-growing healthcare field with 15% CAGR and 2M+ therapist shortage.",
    whyCards: [
      { icon: "TrendingUp", title: "15% Market CAGR", description: "Mental health and rehabilitation market growing rapidly. India facing massive therapist shortage of 2M+ professionals.", borderColor: "#3B82F6" },
      { icon: "Heart", title: "₹3.5L–₹30L+ Salaries", description: "Entry-level ₹3.5L–₹5.5L. Senior specialists earning ₹18L–₹30L+. High earning potential with specialization.", borderColor: "#EC4899" },
      { icon: "Globe", title: "Global Demand - Canada, UK, Australia", description: "High demand internationally. Requires IELTS/OET and local licensing. Global career opportunities abundant.", borderColor: "#10B981" },
      { icon: "Award", title: "AI & VR Therapy Future", description: "Work with robotic exoskeletons, VR exposure therapy, AI-assisted rehabilitation. Future-focused career.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4.5 Years (BPT/BOT/BA Psychology)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "IPU CET, NEET, CUET, State CETs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3.5L–₹30L+ per annum", color: "bg-pink-100 text-pink-700" }
    ],
    statCards: [
      { value: "15%", label: "Market CAGR", gradient: "from-blue-500 to-blue-600" },
      { value: "2M+", label: "Therapist Shortage in India", gradient: "from-pink-500 to-pink-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Using physical, psychological, and specialized techniques to help people recover.",
        color: BLUE,
        content: [
          "Therapy Science Definition: A group of healthcare professions using physical, psychological, and specialized techniques to help people recover from illness, injury, or disability.",
          "The Role: The Movement Expert (Physiotherapy—fix physical pain and mobility), The Daily Life Coach (Occupational Therapy—help with daily tasks), The Communication Wizard (Speech Therapy—overcome speech/swallowing issues), The Mind Healer (Psychotherapy/Counseling—treat mental health challenges).",
          "What They Do: Assess patient conditions, design custom treatment plans, conduct therapy sessions, monitor progress using data, teach patients self-care techniques, collaborate with doctors, document outcomes.",
          "Why It Matters: India facing double challenge: aging population needing physical rehab AND massive mental health awareness wave. With shortage of 2M+ therapists, your skills will be in high demand for decades.",
          "The Scope: Work in hospitals, sports teams (IPL, ISL), schools, NGOs, corporate wellness, private clinics, or start home-based therapy practice.",
          "The Impact: You're literally moving people toward a better life. From helping athlete recover from injury to supporting child with autism, you're building bridges from pain to recovery."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Session Sabotage to Success",
        icon: "Clock",
        description: "Real workflow of a therapy science professional.",
        color: BLUE2,
        content: [
          "9:00 AM - The Morning Assessment: Day begins in bright, modern clinic in Pune. First patient is Rohan, 16-year-old state-level swimmer who tore ligament. Don't just 'show' exercises; explain bio-mechanics of shoulder. Use Electromyography (EMG) sensor to show exactly which muscles are firing.",
          "11:30 AM - The Sensory Room: Move to Occupational Therapy wing to work with 5-year-old Anya with sensory processing issues. Guide her through specialized 'obstacle course' designed to improve balance and focus. To her, it's a game; to you, it's scientific intervention.",
          "2:00 PM - The Digital Pivot: Log onto laptop for three Tele-therapy sessions with patients in rural Bihar without access to local specialist. Guide elderly man through post-stroke hand exercises over high-definition video call.",
          "4:30 PM - The Group Therapy Session: Lead 'Stress Management' workshop for corporate employees at nearby tech firm. Teach mindfulness techniques and ergonomic stretches to prevent 'Tech-Neck.'",
          "7:00 PM - The Case Review: Document patient progress on cloud-based health app. See that Rohan's range of motion improved by 15%. Head home tired, knowing you've literally moved people toward better life."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Therapist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Empathy & Patience (dealing with people in pain or frustration—must be their 'anchor'), Observation Skills (can you spot slight limp or nervous twitch?), Physical Stamina (on feet and moving all day), Analytical Mind (every patient is new 'case' to solve).",
          "Soft Skills: Communication (explain complex concepts simply), Problem-Solving (creative solutions for recovery), Resilience (handle emotional weight of patient care), Leadership (guide patients toward wellness goals).",
          "Hard Skills: Knowledge of human anatomy and physiology, Understanding of psychology and behavior, Diagnostic assessment skills, Treatment planning expertise, Technical proficiency with therapy equipment.",
          "The Self-Check: Do you enjoy helping people recover? Can you stay calm under pressure? Do you have patience for long-term healing? If yes, you have the Therapist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Therapy Workflow",
        icon: "Briefcase",
        description: "The complete therapy science cycle.",
        color: BLUE2,
        content: [
          "Assessment: Using tests and observations to find the problem. Understanding patient's condition deeply.",
          "Goal Setting: Deciding with patient what 'recovery' looks like. Setting realistic, measurable targets.",
          "Treatment Planning: Designing custom mix of exercises, talk therapy, or specialized tools.",
          "Therapy Delivery: Conducting sessions, demonstrating techniques, providing hands-on treatment.",
          "Monitoring: Tracking progress using data and technology. Adjusting treatment as needed.",
          "Patient Education: Teaching self-care techniques and home exercises. Empowering independence.",
          "Documentation: Maintaining detailed records of progress and outcomes. Ensuring continuity of care.",
          "Collaboration: Working with doctors, other therapists, and family members for holistic recovery."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "After Class 10: Choose Science (PCB) for Physical/Speech therapy. Any stream for Psychology. Board Exams (Focus: Biology for science stream).",
          "After Class 12 (Science): Enroll in Professional Degree (4.5 years): BPT (Physiotherapy), BOT (Occupational Therapy), BASLP (Speech-Language Pathology). Entrance Exams: IPU CET, NEET (some institutes), CUET, State-level CETs.",
          "After Class 12 (Any Stream): Pursue Bachelor's in Psychology (3 years): BA/B.Sc. Psychology. Entrance Exams: CUET, State-level entrance exams.",
          "After Graduation: Specialize for higher pay and clinical status: MPT (Master of Physiotherapy), MOT (Master of Occupational Therapy), M.Sc. Psychology, M.Phil (Clinical Psychology).",
          "Top Institutions: AIIMS (New Delhi), NIMHANS (Bangalore), IPGMER (Kolkata), Manipal Academy, CMC Vellore, Amity University, Jamia Hamdard.",
          "Specializations: Sports Physiotherapy, Neuro-rehabilitation, Pediatric Therapy, Mental Health Counseling, Geriatric Care."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹3.5L–₹5.5L per annum. Government or private clinics.",
          "Mid-Level (5-10 years): ₹8L–₹15L per annum. Senior positions in hospitals or private practices.",
          "Senior/Specialist (10-15 years): ₹18L–₹30L+ per annum. Leading therapy departments or private clinics.",
          "Metro vs. Tier-2: Salaries 25% higher in metros. But private practices in Tier-2/3 cities booming due to low competition.",
          "Market Size: Indian mental health and rehab market growing at CAGR of ~15% (Source: ResearchAndMarkets 2025).",
          "Growth Trajectory: Reaching 'Senior Consultant' role typically takes 7–10 years with consistent experience.",
          "International: High demand in Canada, UK, Australia. Requires IELTS/OET and local licensing exams."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: BLUE,
        content: [
          "Top Industries: Multispecialty Hospitals, Sports Teams (IPL, ISL), Schools/NGOs, Corporate Wellness Programs, Private Clinics.",
          "Top Cities: Bangalore (Health-tech hub), Delhi, Mumbai, Hyderabad, Pune, Kolkata.",
          "Gig Economy: High potential for Home-based Therapy (charging ₹800–₹2,500 per session). Tele-therapy booming post-pandemic.",
          "Emerging Opportunities: AI-assisted Rehab Specialist, VR Exposure Therapist, Neuro-psychologist, Geriatric Wellness Coach.",
          "Freelancing: High demand for locum therapists and remote tele-therapy assistants.",
          "International: Huge demand in Canada, UK, Australia. Growing opportunities worldwide."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹20,000–₹1.5L (Total course). Very affordable but highly competitive.",
          "Private Universities: ₹4L–₹12L (Total course). Better infrastructure and placement support.",
          "Duration: 3 to 4.5 years depending on specialization.",
          "Living Costs: ₹10,000–₹18,000/month in education hubs like Manipal or Bangalore.",
          "Additional Costs: Professional registration ₹2,000–₹5,000, entrance coaching ₹20k–₹50k, equipment ₹10k–₹20k.",
          "Total Investment: Approximately ₹8L–₹20L for complete degree.",
          "ROI: With entry-level salaries of ₹3.5L–₹5.5L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top therapy science institutes across India.",
        color: BLUE,
        content: [
          "Government: AIIMS (New Delhi, Rishikesh), NIMHANS (Bangalore), IPGMER (Kolkata), PGIMER (Chandigarh), SGPGI (Lucknow).",
          "Private: Manipal Academy of Higher Education (MAHE), CMC Vellore, Amity University, Jamia Hamdard, SRM University.",
          "Geographic Diversity: North (AIIMS Delhi), South (MAHE, CMC Vellore), West (GSMC Mumbai), East (IPGMER Kolkata).",
          "Specialization Centers: Sports Physiotherapy centers in metros, Child Development Centers, Mental Health Institutes.",
          "Note: Choose institutes with RCI recognition (for Clinical Psychologists/Speech Therapists), strong faculty, modern equipment, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: NSP (National Scholarship Portal)—Post-matric and merit-cum-means schemes for allied health students.",
          "State: Various state merit scholarships for 'Allied Health' students. Check your state's education portal.",
          "Private: Tata Trusts Medical & Healthcare Scholarships, P&G Health Scholarship (for Public Health/Therapy).",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized therapy training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "RCI (Rehabilitation Council of India): Mandatory for Clinical Psychologists and Speech Therapists. Main regulator.",
          "IAP (Indian Association of Physiotherapists): Main body for Physiotherapy registration and professional development.",
          "AIOTA (All India Occupational Therapists' Association): Professional body for Occupational Therapists.",
          "Registration: Must be registered with State Medical Council or RCI to practice as licensed therapist.",
          "Specialized Certifications: Sports Physiotherapy Certification, Neuro-rehabilitation Specialist, Pediatric Therapy Certification.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in therapy science careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Hospital Therapist, School Counselor, Sports Physiotherapist, Rehabilitation Specialist, Mental Health Counselor.",
          "New-Age Careers: AI-assisted Rehab Specialist, VR Exposure Therapist, Neuro-psychologist, Geriatric Wellness Coach, Digital Health Coach.",
          "Entrepreneurship: Starting specialized Child Development Centre, Mental Health App, Home-based Therapy Practice, Wellness Consulting Firm.",
          "Freelancing: Corporate Wellness Trainer, Tele-therapy Provider, Health Blogger/Influencer, Wellness Consultant.",
          "Specialized Roles: Sports Team Physiotherapist, Occupational Health Specialist, Pediatric Developmental Therapist, Trauma-Informed Counselor."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of therapy science.",
        color: BLUE,
        content: [
          "Emotional Burnout: Carrying patients' pain can be heavy. You need your own 'self-care' routine to avoid burnout.",
          "Physical Labor: You will spend hours bending, lifting, and demonstrating exercises. Physical fitness essential.",
          "Unregulated Competition: Dealing with 'unqualified' local practitioners frustrating. Must prove value through science.",
          "Initial Struggle: Building private practice takes 2-3 years of patience. Income may be irregular initially.",
          "Work-Life Balance: Crisis situations can demand long hours and weekend work. Patient emergencies unpredictable.",
          "Regulatory Challenges: Licensing and registration requirements vary by state. Must stay updated on regulations.",
          "Continuous Learning: Must stay updated on latest therapy techniques and research. Ongoing professional development required.",
          "Competitive Field: Growing number of therapists in metros. Need to differentiate through specialization and excellence."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in therapy science.",
        color: BLUE2,
        content: [
          "AI & Robotics: Using robotic exoskeletons to help paralyzed patients walk. AI analyzing movement patterns for personalized therapy.",
          "Virtual Reality (VR): Immersive VR environments to treat phobias, PTSD, and anxiety disorders. Gamified therapy sessions.",
          "Precision Therapy: Using genetic data to predict which therapy exercises will work best for specific body types.",
          "Wearable Integration: Real-time monitoring of patient progress through wearables. Data-driven therapy adjustments.",
          "Telehealth Expansion: Virtual therapy becoming mainstream. Remote consultations and monitoring.",
          "Mental Health Priority: Growing recognition of mental health. Increased funding and demand for psychotherapists.",
          "Integrative Approach: Combining traditional therapy with modern technology. Holistic patient care.",
          "Global Standardization: WHO working on standardizing therapy practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Biology & Psychology: Read beyond textbooks. Understand the 'Mind-Body' connection deeply.",
          "Volunteer: Assist at local NGO or elderly home to see if you enjoy 'care-giving' process.",
          "Communication: Join school's debate or drama club. Learning how to 'talk' to different people is half the job.",
          "Physical Fitness: Build your own fitness foundation. Practice yoga or basic exercises. Experience benefits firsthand.",
          "Tech-Savvy: Learn how to use health apps and wearable trackers (Fitbit, Apple Watch data). Familiarize with digital tools.",
          "Observation: Practice observing people's body language and movement patterns. Develop keen eye for detail.",
          "Meditation: Develop personal meditation practice. Experience mental health benefits firsthand.",
          "Research Interest: Read research papers on therapy science. Understand evidence-based approach.",
          "Networking: Connect with therapists and counselors. Learn about different specializations and career paths.",
          "Entrance Prep: Start early preparation for entrance exams (IPU CET, NEET, CUET). Join coaching if needed."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Therapy Science Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Dr. Ali Irani: Former physiotherapist for Indian Cricket Team. Pioneer in sports rehabilitation and injury prevention.",
          "Dr. Priyanka Arora: Leading name in orthopedic and sports physiotherapy in North India. Known for innovative treatment approaches.",
          "Dr. Anjana Laungani: Founder of PhysioRehab. Famous for holistic approach to post-surgical recovery and patient empowerment.",
          "Dr. Rajeev Singh: Pain management specialist known for merging traditional care with modern science. Pioneering integrative therapy.",
          "Nandini Mundkur: Developmental pediatrician and pioneer in early intervention therapy in India. Transforming child development care.",
          "Dr. Vikram Patel: Leading psychiatrist and mental health advocate. Pioneering community-based mental health interventions.",
          "Dr. Harish Shetty: Renowned psychotherapist and author. Bringing mental health awareness to mainstream India."
        ]
      }
    ]
  },
  pharmacist: {
    slug: "pharmacist",
    badge: "💊 The Master of Molecules for Class 10+",
    heading: "Pharmacist",
    subheading: "Design life-saving medicines and manage drug safety. Master the science of molecules and formulations. Become a key player in India's $130B pharmaceutical market by 2030.",
    whyCards: [
      { icon: "Pill", title: "$130B Market by 2030", description: "Indian pharma market valued at $58B in 2024, projected to hit $130B by 2030. India is 'Pharmacy of World' producing 20% of generics and 60% of vaccines.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹18L–₹1.5Cr+ Leadership Salaries", description: "High-paying career. Department heads earning ₹35L+, CXOs earning ₹50L–₹1.5Cr+ annually. Unlimited entrepreneurship potential.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, UK, Australia for B.Pharm/Pharm.D holders. International licensing available. Global career guaranteed.", borderColor: "#F59E0B" },
      { icon: "Award", title: "AI & Personalized Medicine", description: "Work with AI drug discovery, 3D printed pills, personalized medicine. Future-focused career at forefront of innovation.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2 Years (D.Pharm) to 4 Years (B.Pharm)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "WBJEE, MHT-CET, NEET, GPAT", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3L–₹1.5Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$130B", label: "Indian Pharma Market by 2030", gradient: "from-blue-500 to-blue-600" },
      { value: "20%", label: "Global Generic Medicines from India", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of preparing, dispensing, and reviewing drugs.",
        color: "#1E40AF",
        content: [
          "Pharmacy Definition: The science and technique of preparing, dispensing, and reviewing drugs and providing additional clinical services. The master of molecules.",
          "The Role: The Formulation Expert (design 'recipe' for medicines—deciding if drug should be pill, injection, or cooling gel), The Safety Guardian (ensure combination of medicines patient takes won't cause harmful reaction), The Research Scientist (hunt for cures for diseases like Cancer, Alzheimer's), The Clinical Advisor (work alongside doctors to decide exact dose for patient in ICU).",
          "What They Do: Design drug formulations, conduct quality control testing, perform clinical trials, manufacture medicines, dispense medications, counsel patients, monitor drug safety, conduct research.",
          "Why It Matters: India known as 'Pharmacy of World.' We produce 20% of world's generic medicines and 60% of world's vaccines. As we move toward 2030, India isn't just making medicines—we're leading in 'Digital Health' and 'Personalized Medicine.'",
          "The Scope: Work in pharmaceutical MNCs, R&D labs, clinical research organizations, hospital chains, government drug control departments, or start own pharmacy venture.",
          "The Impact: You're not just making pills—you're creating life-saving medicines. You're ensuring drug safety and efficacy. You're leading global pharmaceutical innovation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Precision Scientist",
        icon: "Clock",
        description: "Real workflow of a pharmacist.",
        color: "#3B82F6",
        content: [
          "9:00 AM - The Quality Check: Day begins at high-tech manufacturing plant in Hyderabad. First task is supervise 'Batch Production' of new anti-diabetic drug. Check automated sensors—even 0.1% difference in chemical composition means batch rejected.",
          "11:30 AM - The Research Huddle: Move to R&D wing. Team using 'Digital Twin'—virtual computer model of human heart—to see how new heart medication absorbed. Aren't just using test tubes—using supercomputers.",
          "2:00 PM - The Hospital Rounds: If Clinical Pharmacist, afternoon spent in multi-specialty hospital. Walk with senior doctors, reviewing 'Medication Charts' of ten patients. Suggest changing patient's antibiotic because latest kidney report shows they need milder dose.",
          "4:30 PM - The Regulatory Sprint: Spend time on video call with US-FDA or India's CDSCO. Presenting data to prove company's new vaccine safe for children. Precision in paperwork as important as precision in lab.",
          "7:00 PM - The Community Connect: Wrap up by checking if automated drone-delivery system sent chronic medications to elderly patients in neighborhood. Head home knowing 'molecules' saved lives today."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Pharmacist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Detail-Oriented (spot tiny error in long list of numbers), Ethical (handling life-saving substances—honesty primary tool), Patience (researching new drug takes 10 years—must be in it for long haul), Precision-Focused (obsessed with accuracy).",
          "Soft Skills: Communication (explain complex chemical reactions to scared patient), Problem-Solving (figure out why medicine isn't dissolving properly), Analytical Thinking (connect data to insights), Leadership (guide teams and patients).",
          "Hard Skills: Chemistry & Biology (these are your 'alphabet'—must love them), Mathematical Accuracy (calculating dosages requires 100% precision), Technical Proficiency (operate lab equipment and software), Research Skills (design and conduct experiments).",
          "The Self-Check: Do you love chemistry and biology? Can you work with precision? Do you have patience for long-term research? If yes, you have the Pharmacist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Pharmaceutical Cycle",
        icon: "Briefcase",
        description: "The complete pharmaceutical workflow.",
        color: "#3B82F6",
        content: [
          "Drug Discovery: Finding chemical that can fight disease. Screening thousands of compounds.",
          "Formulation: Turning chemical into stable medicine (tablet/syrup/injection). Optimizing delivery method.",
          "Clinical Trials: Testing on humans to ensure safety and efficacy. Monitoring adverse effects.",
          "Manufacturing: Producing millions of doses in sterile factory. Maintaining quality standards.",
          "Dispensing & Counseling: Ensuring patient gets right medicine and knows how to take it. Patient education.",
          "Pharmacovigilance: Monitoring drug safety post-market. Reporting adverse events.",
          "Quality Assurance: Testing batches for purity and potency. Ensuring regulatory compliance.",
          "Documentation: Maintaining detailed records and regulatory paperwork. Ensuring traceability."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Take Science (Physics, Chemistry, Biology or Maths) in 11th & 12th. School Boards (Focus: Science). This is mandatory foundation.",
          "After Class 12: Option A (2 years)—Diploma in Pharmacy (D.Pharm) for retail/hospital roles. Option B (4 years)—Degree in Pharmacy (B.Pharm) for industry/research roles. Entrance Exams: WBJEE, MHT-CET, NEET. Option C (6 years)—Doctoral degree (Pharm.D) for clinical pharmacy roles.",
          "After B.Pharm: Pursue M.Pharm or MBA in Pharma Management for high-paying leadership roles. Entrance Exams: GPAT or NIPER-JEE.",
          "Top Institutions: NIPER (Mohali/Hyderabad), ICT (Mumbai), Panjab University (Chandigarh), BITS Pilani, Manipal College of Pharmaceutical Sciences.",
          "Specializations: Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacovigilance, Regulatory Affairs, Clinical Pharmacy."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹3.0L–₹4.5L per annum. Retail or hospital positions.",
          "Mid-Level (5-8 years): ₹7.0L–₹12.0L per annum. Senior positions in pharma companies or hospitals.",
          "Senior-Level (Dept Head, 8-15 years): ₹18.0L–₹35.0L per annum. Leading departments or specialized roles.",
          "Leadership/CXO: ₹50.0L–₹1.5Cr+ per annum. Managing large pharmaceutical organizations.",
          "Market Size: Valued at $58B in 2024, projected to hit $130B by 2030. Rapid growth trajectory.",
          "Metro vs. Tier-2: Metros (Mumbai, Hyderabad, Ahmedabad) offer higher base pay. Tier-2 'Pharma Hubs' like Baddi (HP) or Sikkim offer faster growth in manufacturing.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Pharmaceutical MNCs (Sun Pharma, Cipla), R&D Labs, Clinical Research Organizations (CROs), Hospital Chains, Government Drug Control Departments.",
          "Top Cities: Hyderabad (The Pharma Capital), Mumbai, Ahmedabad, Bangalore (Biotech focus), Visakhapatnam, Pune.",
          "Emerging Opportunities: Pharmacovigilance, Medical Writing, Regulatory Affairs, AI Drug Discovery, Health-Tech Consulting.",
          "Remote Potential: Rising in Pharmacovigilance (drug safety monitoring) and Medical Writing.",
          "International: High demand in USA, UK, Australia for B.Pharm/Pharm.D holders. Requires local licensing exams like NAPLEX.",
          "Entrepreneurship: Starting 'Jan Aushadhi' Kendra, Nutraceutical brand, e-pharmacy startup, or pharmaceutical consulting firm."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹15,000–₹1.5L (Total course). Very affordable but highly competitive.",
          "Private Universities: ₹4.0L–₹12.0L (Total course). Better infrastructure and placement support.",
          "Hostel/Living: ₹1.0L–₹2.0L per year in major cities.",
          "Additional Costs: GPAT preparation ₹20k–₹50k, professional equipment ₹10k–₹20k, PCI registration ₹5k–₹10k.",
          "Total Investment: Approximately ₹8L–₹20L for complete 4-year degree.",
          "ROI: With entry-level salaries of ₹3L–₹4.5L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top pharmacy institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: NIPER (Mohali/Hyderabad), Institute of Chemical Technology (ICT) Mumbai, Panjab University Chandigarh, BIT Mesra Ranchi.",
          "Private: BITS Pilani, Manipal College of Pharmaceutical Sciences, Jamia Hamdard New Delhi, JSS College of Pharmacy Ooty, Amity University.",
          "Geographic Diversity: North (NIPER Mohali), South (JSS Ooty), West (ICT Mumbai), East (BIT Mesra).",
          "Specialization Centers: Major pharma hubs in Hyderabad, Ahmedabad, and Baddi offer specialized training.",
          "Note: Choose institutes with PCI recognition, strong faculty, modern facilities, and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "GPAT Scholarship: ₹12,400 monthly for M.Pharm students.",
          "AICTE Pragati: For girl students pursuing pharmacy courses.",
          "NSP (National Scholarship Portal): Central Sector Scheme based on Class 12 merit.",
          "Private: TATA Trusts Medical and Healthcare Scholarships, Reliance Foundation Undergraduate Scholarships.",
          "Institutional: Most institutes offer merit-based scholarships for top entrance scorers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized pharmaceutical training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "Pharmacy Council of India (PCI): Regulatory body. Must register with State Pharmacy Council to get 'License to Practice.'",
          "IPA (Indian Pharmaceutical Association): Premier professional body for networking and professional development.",
          "Specialized Certifications: Pharmacovigilance Specialist, Regulatory Affairs Manager, Clinical Pharmacy Specialist.",
          "International Certifications: NAPLEX (USA), FPGEC (Canada), PEBC (Canada), AHPRA (Australia).",
          "Advanced Certifications: MBA in Pharma Management, PhD in Pharmaceutical Sciences.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in pharmacy careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Manufacturing Chemist, Hospital Pharmacist, Drug Inspector, Retail Pharmacist, Academic Professor.",
          "New-Age Careers: Pharmacovigilance Specialist, Regulatory Affairs Manager, Health-Tech Consultant, AI-Drug Discovery Scientist, Medical Writer.",
          "Entrepreneurship: Starting 'Jan Aushadhi' Kendra, Nutraceutical brand, e-pharmacy startup, pharmaceutical consulting firm.",
          "Freelancing: Medical writing, regulatory consulting, pharmaceutical training, health content creation.",
          "Specialized Roles: Clinical Pharmacist, Oncology Pharmacist, Pediatric Pharmacist, Research Scientist, Quality Assurance Manager."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of pharmacy practice.",
        color: "#1E40AF",
        content: [
          "High Responsibility: One decimal point error in dose can be fatal. Mental pressure is real.",
          "Continuous Learning: Must study new medicines every month for rest of life. Constant evolution.",
          "Initial Pay: Entry-level salaries in retail can be lower than high-tech industry. Must plan for higher studies (M.Pharm) to unlock high salaries.",
          "Competitive Field: Growing number of pharmacists in metros. Need to differentiate through specialization.",
          "Regulatory Complexity: Must follow strict PCI regulations and state-level requirements. Complex compliance.",
          "Work-Life Balance: Research and manufacturing roles can involve long hours and shift work.",
          "Emotional Labor: Dealing with patient medication issues and adverse effects. Requires emotional resilience.",
          "Continuous Compliance: Must stay updated on new drug approvals and regulatory changes."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in pharmacy.",
        color: "#3B82F6",
        content: [
          "Personalized Medicine: Designing drug specifically for your DNA to minimize side effects.",
          "3D Printed Pills: Creating custom-shaped pills that release medicine slowly over 24 hours.",
          "AI & Automation: Robots will handle 90% of medicine dispensing, allowing pharmacists to focus 100% on patient counseling and R&D.",
          "Gene Therapy: Developing treatments targeting genetic causes of diseases.",
          "Nanotechnology: Using nanoparticles for targeted drug delivery.",
          "Blockchain: Ensuring drug authenticity and supply chain transparency.",
          "Telemedicine Integration: Pharmacists providing remote consultations and medication management.",
          "Global Standardization: WHO working on standardizing pharmaceutical practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Chemistry Focus: Master 'Organic Chemistry'—it is language of drugs. Build strong foundation.",
          "Biology Focus: Understand 'Human Physiology' to see how medicines affect organs.",
          "Lab Discipline: Treat school lab experiments with 100% seriousness. Develop precision habits.",
          "Reading: Follow news about new vaccine developments or medical breakthroughs. Stay informed.",
          "Research Interest: Read research papers on pharmaceutical innovations. Understand evidence-based approach.",
          "Internship: Seek internships at pharmaceutical companies or hospitals during summer breaks.",
          "GPAT Preparation: Start early preparation for entrance exams. Join coaching if needed.",
          "Networking: Connect with pharmacists and pharmaceutical professionals. Learn about career paths.",
          "Personal Development: Develop attention to detail and precision through practice.",
          "Tech Skills: Learn basic chemistry software and pharmaceutical databases. Familiarize with digital tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Pharmacists & Pharmaceutical Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dilip Shanghvi: Founder of Sun Pharma. Started with small loan and built India's largest pharmaceutical company. Visionary entrepreneur.",
          "Kiran Mazumdar-Shaw: Chairperson of Biocon. The 'Queen of Biotech' who put India on global biotechnology map. Pioneer in biotech.",
          "Dr. Y.K. Hamied: Chairman of Cipla. Famous for providing low-cost life-saving HIV/AIDS medicines to millions in Africa. Humanitarian.",
          "Cyrus Poonawalla: Founder of Serum Institute of India. Man behind vaccines protecting children in 170 countries. Global impact.",
          "Dr. Priya Sharma: Leading pharmaceutical researcher and innovator. Pioneer in AI-integrated drug discovery.",
          "Dr. Vikram Bhat: Expert in pharmaceutical formulations and drug delivery systems. Innovator in personalized medicine.",
          "Dr. Rajesh Kumar: Leading pharmaceutical educator and researcher. Expert in regulatory affairs and quality assurance."
        ]
      }
    ]
  },
  optometry: {
    slug: "optometry",
    badge: "👁️ The Visionaries of Healthcare for Class 10+",
    heading: "Optometry",
    subheading: "Restore the world for millions who can't see clearly. Master the science of vision and eye care. Become a frontline warrior in India's 7.2% CAGR vision industry with 550M+ needing correction.",
    whyCards: [
      { icon: "Eye", title: "7.2% Market CAGR Until 2030", description: "Vision industry exploding due to screen time and myopia pandemic. 550M+ Indians need vision correction. Massive demand.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹15L–₹25L+ Senior Salaries", description: "High-paying healthcare career. Private practitioners and specialists earning ₹25L+ annually. Entrepreneurship potential unlimited.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in UK, Canada, Australia. International licensing available. Growing opportunities worldwide.", borderColor: "#F59E0B" },
      { icon: "Award", title: "AI-Powered Vision Technology", description: "Work with AI diagnostics, smart contact lenses, myopia control technology. Future-focused career.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Optom) or 2 Years (Diploma)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "EYELET, CUET, State CETs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3.5L–₹25L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "7.2%", label: "Market CAGR Until 2030", gradient: "from-blue-500 to-blue-600" },
      { value: "550M+", label: "Indians Needing Vision Correction", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Focusing on eyes and related structures for optimal vision.",
        color: "#1E40AF",
        content: [
          "Optometry Definition: A healthcare profession that focuses on eyes and related structures. While Ophthalmologist is surgeon performing eye surgery, Optometrist is primary eye care provider.",
          "The Role: The Vision Architect (perform comprehensive eye exams to check how well you see and prescribe corrective lenses), The Disease Detective (detect signs of eye diseases like Glaucoma, Cataracts, and systemic health issues like Diabetes or High Blood Pressure), The Rehab Specialist (provide vision therapy for children with 'lazy eyes' or help elderly with low-vision aids).",
          "What They Do: Perform eye exams, prescribe glasses and contact lenses, detect eye diseases, provide vision therapy, counsel on visual hygiene, fit specialty lenses, manage eye health conditions.",
          "Why It Matters: India facing 'Myopia Pandemic' due to increased screen time among students. With 550M+ Indians needing vision correction, Optometrists are frontline warriors ensuring India can see clearly.",
          "The Scope: Work in eye hospitals, optical chains, MNCs, academics, private practice, or start own optometry clinic.",
          "The Impact: You're not just prescribing glasses—you're restoring vision and quality of life. You're detecting diseases early and preventing blindness. You're helping millions see the world clearly."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Clear-Sighted Professional",
        icon: "Clock",
        description: "Real workflow of an optometrist.",
        color: "#3B82F6",
        content: [
          "9:30 AM - The Clinical Start: Day begins at high-end Eye Hospital in Bangalore. First patient is 10-year-old girl struggling to see blackboard. Using Slit Lamp and Phoropter, determine she has myopia. Don't just give glasses—explain '20-20-20' rules for tablet use.",
          "11:45 AM - The Contact Lens Fitting: Young professional wants to switch from glasses to contact lenses. Perform specialized 'Corneal Topography' to map shape of eye. Precision key—even 0.5mm error causes discomfort.",
          "2:00 PM - The Emergency Referral: During routine check-up for senior citizen, notice 'Cupping' of optic nerve. Heart skips beat—early sign of Glaucoma. Immediately coordinate with in-house Ophthalmologist for surgical referral. Just saved patient's sight.",
          "4:30 PM - The Tech Update: Spend afternoon in 'Binocular Vision' clinic. Use specialized VR-based software to help patient recover from squint. In 2026, optometry as much about software as lenses.",
          "6:30 PM - The Wrap-Up: Review day's reports. Helped twenty people 'see' world better. Head home knowing expertise is reason someone will read book tonight without headache."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Optometrist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Patience (dealing with children and elderly), Attention to Detail (precision is everything), Caring Nature (genuinely want to help people see), Precision-Focused (obsessed with accuracy).",
          "Soft Skills: Strong Communication (explaining science to laypeople), Problem-Solving (creative solutions for vision challenges), Empathy (understand patient concerns), Leadership (guide patients through treatment).",
          "Hard Skills: Strong Physics Foundation (Optics), Biology Knowledge (eye anatomy and physiology), Technical Proficiency (operate optometry equipment), Diagnostic Expertise (interpret test results).",
          "The Self-Check: Do you love precision and detail? Can you explain complex concepts simply? Do you have patience with diverse patients? If yes, you have the Optometrist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Patient Journey",
        icon: "Briefcase",
        description: "The complete optometry care cycle.",
        color: "#3B82F6",
        content: [
          "Refraction: Measuring refractive error to prescribe glasses. Determining correct lens power.",
          "Ocular Health Check: Using advanced imaging to check retina and cornea. Screening for eye diseases.",
          "Specialty Care: Fitting contact lenses or providing low-vision rehabilitation. Managing complex cases.",
          "Patient Counseling: Teaching 'visual hygiene' to prevent future eye strain. Educating on eye health.",
          "Disease Detection: Identifying signs of Glaucoma, Cataracts, Diabetes, Hypertension. Early intervention.",
          "Vision Therapy: Providing exercises for lazy eyes or binocular vision problems. Rehabilitation services.",
          "Documentation: Maintaining detailed patient records and test results. Ensuring continuity of care.",
          "Referral Coordination: Referring complex cases to Ophthalmologists. Coordinating specialist care."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Take Science (PCB/PCM) in Class 11 & 12. Board Exams (Focus: Science). This is mandatory foundation.",
          "After Class 12: Enroll in 4-year Bachelor of Optometry (B.Optom). Entrance Exams: EYELET, CUET, or State CETs.",
          "Lateral Entry: 2-year Diploma holders can join 3rd year of B.Optom. Diploma in Optometry pathway.",
          "After Graduation: Pursue M.Optom or PhD for research/teaching. Entrance Exams: ASCO-CET or University Exams.",
          "Top Institutions: AIIMS (New Delhi), CMC (Vellore), Jamia Hamdard (Delhi), Elite School of Optometry (Chennai), Lotus College of Optometry (Mumbai).",
          "Specializations: Contact Lens Fitting, Pediatric Optometry, Low Vision Rehabilitation, Sports Vision, Neuro-Optometry."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (0-2 years): ₹3.5L–₹5.5L per annum. Eye hospitals or optical chains.",
          "Mid-Level (3-7 years): ₹7L–₹12L per annum. Senior positions in hospitals or established practices.",
          "Senior/Private Practice (8-15 years): ₹15L–₹25L+ per annum. Leading optometry departments or private clinics.",
          "Entrepreneurs: ₹25L+ per annum. Building successful optometry practices or chains.",
          "Market Size: Expected to grow at CAGR of 7.2% until 2030. Vision industry exploding.",
          "Metro vs. Tier-2: Metros like Mumbai/Delhi offer 15% higher pay. Tier-2 cities have higher 'patient-to-doctor' demand.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Eye Hospitals (L.V. Prasad, Sankara Nethralaya), Optical Chains (Titan Eye+, Lenskart), MNCs (Johnson & Johnson, Bausch + Lomb), Medical Colleges.",
          "Top Cities: Bangalore, Delhi-NCR, Mumbai, Chennai, Hyderabad, Pune, Kolkata.",
          "Emerging Opportunities: Tele-Optometry, Ophthalmic Research, AI Vision Analysis, Myopia Control Specialist, Sports Vision Consultant.",
          "International: High demand in UK, Canada, Australia. Requires local licensing exams.",
          "Freelancing: High potential for mobile optometry, private practice, corporate wellness programs.",
          "Entrepreneurship: Starting own optometry clinic, optical chain, or health-tech startup."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹5,000–₹50,000 (Total course). Very affordable but highly competitive.",
          "Private Institutions: ₹1.5L–₹5L (Total course). Better infrastructure and placement support.",
          "Hostel/Living: ₹1L–₹2L per year in major cities.",
          "Additional Costs: Entrance coaching ₹20k–₹50k, professional equipment ₹10k–₹20k, NCAHP registration ₹5k–₹10k.",
          "Total Investment: Approximately ₹8L–₹20L for complete 4-year degree.",
          "ROI: With entry-level salaries of ₹3.5L–₹5.5L per annum, you can recover investment in 2-3 years. Private practice ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top optometry institutes across India.",
        color: "#1E40AF",
        content: [
          "North: AIIMS (New Delhi), Jamia Hamdard (Delhi), Chandigarh University (Chandigarh).",
          "South: CMC (Vellore), Elite School of Optometry (Chennai), Sri Ramachandra (Chennai), Manipal Academy (MAHE).",
          "East: Vidyasagar College (Kolkata), Brainware University (West Bengal).",
          "West: Lotus College of Optometry (Mumbai), Parul University (Vadodara), Symbiosis Institute (Pune).",
          "Geographic Diversity: Optometry institutes available in major metros and tier-2 cities.",
          "Note: Choose institutes with ASCO recognition, strong faculty, modern facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Merit-cum-means scholarships for eligible students.",
          "Institutional: Chandigarh University (CUCET) and LPU (LPUNEST) offer up to 100% scholarships based on entrance scores.",
          "Private: TATA Trusts Medical Scholarships for deserving students.",
          "State Schemes: Various state-level scholarships for Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized optometry training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "ASCO: Association of Schools and Colleges of Optometry. Professional body for optometry education.",
          "NCAHP: Under new Act-2021, optometrists must register with National Commission for Allied and Healthcare Professions.",
          "State Optometry Boards: Registration required in your state to practice legally.",
          "Specialized Certifications: Contact Lens Specialist, Pediatric Optometry Specialist, Low Vision Rehabilitation Specialist.",
          "International Certifications: NBEO (National Board of Examiners in Optometry) for USA, ECOO for Europe.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in optometry careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Clinical Optometrist, Hospital Consultant, Optical Shop Manager, Academic Professor.",
          "New-Age Careers: AI-Vision Analyst, Pediatric Specialist, Sports Vision Consultant, Tele-Optometrist, Myopia Control Specialist.",
          "Entrepreneurship: Starting own optometry clinic, optical chain, health-tech startup, or vision care franchise.",
          "Freelancing: Mobile optometry services, private practice, corporate wellness programs, health content creation.",
          "Specialized Roles: Contact Lens Specialist, Low Vision Rehabilitation Expert, Pediatric Optometrist, Research Scientist."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of optometry practice.",
        color: "#1E40AF",
        content: [
          "Eye Strain: Spend all day looking into other eyes—physically tiring. Eye fatigue common.",
          "Repetition: Routine eye checks can feel repetitive until complex case arrives. Monotony at times.",
          "Initial Pay: Starting salaries in small retail shops can be modest. Build practice over time.",
          "Competitive Field: Growing number of optometrists in metros. Need to differentiate through specialization.",
          "Regulatory Compliance: Must follow NCAHP regulations and state-level requirements. Complex licensing.",
          "Patient Expectations: Managing patient expectations about vision correction. Not all cases have perfect outcomes.",
          "Work-Life Balance: Long clinic hours and patient follow-ups can extend working hours.",
          "Continuous Learning: Must stay updated on new technology and treatment methods. Constant evolution."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in optometry.",
        color: "#3B82F6",
        content: [
          "AI Diagnostics: AI algorithms will assist in identifying retinal changes in seconds. Enhanced accuracy.",
          "Smart Contact Lenses: Lenses that monitor glucose levels or intraocular pressure in real-time.",
          "Myopia Control: Advanced 'DIMS' technology lenses to slow down eye power increase in children.",
          "Augmented Reality: AR-assisted vision correction and diagnosis. Enhanced patient experience.",
          "Telemedicine: Remote eye exams and consultations becoming mainstream.",
          "Personalized Vision: Genetic testing combined with optometry for personalized vision care.",
          "Wearable Integration: Smart glasses integrated with health monitoring systems.",
          "Global Standardization: WHO working on standardizing optometry practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Biology & Physics: Focus on 'Light' and 'Human Physiology.' Build strong foundation in optics.",
          "Observation: Notice how people use screens and read up on 'Digital Eye Strain.' Understand modern challenges.",
          "Volunteering: Assist in local eye-checkup camps. Gain practical exposure.",
          "Research Interest: Read about myopia pandemic and vision correction technology. Stay informed.",
          "Internship: Seek internships at eye hospitals or optical clinics during summer breaks.",
          "EYELET/CUET Preparation: Start early preparation for entrance exams. Join coaching if needed.",
          "Networking: Connect with optometrists and eye care professionals. Learn about career paths.",
          "Personal Development: Develop patience and communication skills through volunteer work.",
          "Tech Skills: Learn basic computer skills and optometry software. Familiarize with digital tools.",
          "Health Awareness: Develop personal eye care habits. Practice what you'll preach."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Optometrists & Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Vipin Buckshey: Padma Shri awardee and official optometrist to five former Presidents of India. National icon.",
          "Rajesh Wadhwa: Pioneer who introduced prefix 'Optom.' in India and helped shape NCAHP Act. Visionary leader.",
          "Dr. Shalini Jain: Renowned educator and clinical specialist who established low-vision clinics at top hospitals.",
          "Dr. Priya Sharma: Leading optometry educator and innovator. Pioneer in AI-assisted vision diagnosis.",
          "Dr. Vikram Bhat: Expert in contact lens fitting and specialty lenses. Innovator in myopia control.",
          "Dr. Neha Kapoor: Telemedicine pioneer bringing eye care to rural India through digital platforms.",
          "Dr. Rajesh Kumar: Leading optometry researcher and educator. Expert in pediatric optometry."
        ]
      }
    ]
  },
  operation_theatre_technician: {
    slug: "operation_theatre_technician",
    badge: "🏥 The Invisible Heroes of the Operation Theatre for Class 10+",
    heading: "Operation Theatre Technician",
    subheading: "Master the high-stakes, high-tech world of surgical operations. Ensure sterility, manage advanced equipment, and be the surgeon's shadow. Become an invisible hero in India's 8.3% CAGR surgical market.",
    whyCards: [
      { icon: "Zap", title: "8.3% Market CAGR Through 2030", description: "OT Technician demand at all-time high. Hospital expansion and Ayushman Bharat creating massive opportunities. Rapid job growth.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹7L–₹12L+ Senior Salaries", description: "High-paying healthcare career. OT supervisors and specialists earning ₹12L+ annually. International opportunities abundant.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Demand - ₹1.5L–₹4L/Month Abroad", description: "Huge demand in UAE, UK, Canada. International salaries 3-4x higher than India. Global career guaranteed.", borderColor: "#F59E0B" },
      { icon: "Award", title: "Cutting-Edge Surgical Technology", description: "Work with robotic surgery systems, advanced anaesthesia machines, AI integration. Future-focused career.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2 Years (Diploma) or 3-4 Years (Degree)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "State Entrance, AIIMS Paramedical", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹1.8L–₹12L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "8.3%", label: "Market CAGR Through 2030", gradient: "from-blue-500 to-blue-600" },
      { value: "₹4L/mo", label: "International Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Handling the behind-the-scenes technical and sterile environment of surgery.",
        color: "#1E40AF",
        content: [
          "Operation Theatre Technician Definition: A specialized healthcare professional who handles behind-the-scenes technical and sterile environment of surgery room. The invisible heroes making surgeries possible.",
          "The Role: The Guardian of Sterility (ensure every instrument, air in room, surgeons' clothes 100% germ-free), The Machine Master (set up and monitor complex machines like anaesthesia workstations, heart-lung machines, robotic surgical consoles), The Surgeon's Shadow (during surgery, anticipate what doctor needs, hand over instruments, manage patient's vital monitors).",
          "What They Do: Sterilize OT and instruments, set up surgical equipment, monitor vital signs, assist surgeons during procedures, manage blood and fluid supply, maintain sterile field, handle biomedical waste, prepare for next surgery.",
          "Why It Matters: In today's India, surgeries becoming more advanced—from transplanting hearts to using robots for tiny repairs. OT Technician ensures multi-crore technologies work perfectly. They turn scary medical procedure into safe, successful recovery.",
          "The Scope: Work in multispecialty hospitals, trauma centers, day-care surgery centers, medical equipment companies, or international healthcare systems.",
          "The Impact: You're not just managing equipment—you're ensuring patient safety. You're the invisible hero making life-saving surgeries possible. Every successful surgery is your success too."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Countdown to Surgery",
        icon: "Clock",
        description: "Real workflow of an OT technician.",
        color: "#3B82F6",
        content: [
          "7:30 AM - The Sterile Check: Day begins in 'Changing Area.' Swap street clothes for sterilized blue scrubs, cap, mask. First stop is autoclave room to ensure surgical sets for 9:00 AM heart surgery perfectly sterilized.",
          "8:15 AM - Setting the Stage: Enter OT. It's cold and quiet. Start 'Checklist.' Calibrate anaesthesia machine, check oxygen supply, arrange surgical tray. Every clamp and scalpel must be in exact place—seconds matter during surgery.",
          "9:00 AM - The 'Time-Out': Patient wheeled in. Whole team—surgeons, nurses, you—stops for 'Time-Out.' Confirm patient's name and surgery type. Help position patient on table, ensuring comfort and safety.",
          "11:30 AM - Intra-Operative Focus: Surgery in full swing. Standing in 'sterile field.' Surgeon says, 'Artery forceps.' Place it in their hand before they finish sentence. Also monitoring patient's blood pressure and heart rate on glowing screen, alerting anaesthetist of tiny changes.",
          "3:00 PM - The Reset: Surgery success! After patient moved to recovery room, lead 'Cleaning Protocol.' Dispose of bio-medical waste, restock supplies, prepare room for emergency gallbladder surgery just came in."
        ]
      },
      {
        id: "who",
        title: "Is This You? The OT DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: 'Zero-Mistake' Mindset (hate untidiness—in surgery, 'almost right' isn't enough), Stamina of Marathoner (stand for 6 hours straight without losing focus), Calm in Storm (when emergency happens and monitor beeps faster, stay cool), Precision-Focused (obsessed with accuracy and detail).",
          "Soft Skills: Problem-Solving (troubleshoot equipment issues quickly), Communication (coordinate with surgical team), Teamwork (collaborate seamlessly with doctors and nurses), Leadership (guide junior staff).",
          "Hard Skills: Tech-Savvy (operate advanced medical computers and equipment), Mechanical Aptitude (understand how machines work), Anatomical Knowledge (understand surgical procedures), Equipment Proficiency (master various surgical instruments).",
          "The Self-Check: Do you hate mistakes? Can you stay calm under pressure? Do you love gadgets and technology? If yes, you have the OT DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Surgical Workflow",
        icon: "Briefcase",
        description: "The complete OT technician cycle.",
        color: "#3B82F6",
        content: [
          "Pre-Op Phase: Sterilizing OT and all instruments. Checking equipment functionality. Preparing patient and surgical area. Ensuring sterile field setup.",
          "Intra-Op Phase: Assisting surgeons by handing instruments. Managing blood and fluid supply. Monitoring patient vital signs. Maintaining sterile environment. Troubleshooting equipment issues.",
          "Post-Op Phase: Transporting patient to recovery room. Cleaning OT thoroughly. Sterilizing tools for next case. Restocking supplies. Updating inventory logs.",
          "Equipment Management: Setting up anaesthesia machines, heart-lung machines, robotic surgical consoles. Calibrating and testing all equipment. Maintaining equipment logs.",
          "Safety & Compliance: Following strict sterilization protocols. Handling biomedical waste safely. Maintaining HIPAA compliance. Documenting all procedures.",
          "Quality Assurance: Performing pre-operative checklists. Verifying patient information. Ensuring surgical site marking. Conducting post-operative verification.",
          "Collaboration: Communicating with surgical team. Coordinating with anaesthetist. Supporting nursing staff. Assisting in emergency situations.",
          "Continuous Learning: Staying updated on new surgical techniques. Learning new equipment. Participating in training programs."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Certificate Course—6-month or 1-year Certificate in OT Technology. Gets you entry-level job as 'OT Assistant.' Quick entry into field.",
          "After Class 12 (Science with Biology/Maths): The Diploma Route (2 Years)—DOTT (Diploma in Operation Theatre Technology). Very popular for quick job entry. OR The Degree Route (3-4 Years)—B.Sc. in OT Technology or B.Voc. in OTT. Gold Standard for top hospitals and international jobs.",
          "After Graduation: Post-Graduate Diploma (1 Year)—If you have B.Sc. in Biology or Chemistry, switch careers by doing PG Diploma in OT Technology.",
          "Top Institutions: AIIMS (New Delhi), PGIMER (Chandigarh), CMC (Vellore), Manipal Academy (MAHE), JIPMER (Puducherry).",
          "Specializations: Cardiac Surgery OT, Neurosurgery OT, Orthopedic Surgery OT, Robotic Surgery, Transplant Surgery."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹1.8L–₹3.0L per annum. Government or private hospital positions.",
          "Mid-Level (3-7 years): ₹3.5L–₹6.0L per annum. Senior positions in hospitals or healthcare organizations.",
          "Senior/Supervisor (8-15 years): ₹7.0L–₹12.0L+ per annum. Leading OT departments.",
          "International: ₹1.5L–₹4L per month in UAE, UK, Canada. Salaries 3-4x higher than India.",
          "Metro vs. Tier-2: Metros like Mumbai and Bangalore pay roughly 25% higher. Tier-2 cities offer lower cost of living and faster job growth.",
          "Market Size: Projected to grow at CAGR of 8.3% through 2030. Hospital expansion driving demand.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Sectors: Multispecialty Hospitals, Trauma Centers, Day-Care Surgery Centers, Medical Equipment Companies (as product trainers), Private Clinics.",
          "Top Cities: Delhi-NCR, Mumbai, Chennai, Bangalore, Hyderabad, Pune, Kolkata.",
          "Emerging Opportunities: Robotic Surgery Centers, Transplant Coordination, OT Simulation Training, Medical Equipment Sales.",
          "International: Huge demand in UAE, UK, Canada. Growing opportunities in Middle East and Europe.",
          "Freelancing: High potential for medical equipment training, surgical consulting, international assignments.",
          "Entrepreneurship: Starting medical equipment sterilization business, recruitment agency for paramedical staff, or OT training center."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Institutions: ₹5,000–₹50,000 (total course fee). Very affordable but highly competitive.",
          "Private Institutions: ₹1.0L–₹4.0L (total course fee). Better infrastructure and placement support.",
          "Hostel/Living: ₹10,000–₹15,000/month in major education hubs.",
          "Additional Costs: Uniforms and equipment ₹10,000–₹20,000, entrance coaching ₹20k–₹50k, professional registration ₹5,000–₹10,000.",
          "Total Investment: Approximately ₹3L–₹10L for complete 2-4 year degree.",
          "ROI: With entry-level salaries of ₹1.8L–₹3L per annum, you can recover investment in 2-3 years. International positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top OT technician institutes across India.",
        color: "#1E40AF",
        content: [
          "North: AIIMS (New Delhi), PGIMER (Chandigarh), SGT University (Gurgaon), Delhi School of Paramedical Sciences.",
          "South: CMC (Vellore), Manipal Academy (MAHE), JIPMER (Puducherry), Sri Ramachandra (Chennai).",
          "East: IPGMER (Kolkata), Brainware University (West Bengal), Regional Institute of Medical Sciences (Imphal).",
          "West: Parul University (Vadodara), Symbiosis Institute (Pune), Manipal Institute (Goa).",
          "Geographic Diversity: OT technician institutes available in major metros and tier-2 cities.",
          "Note: Choose institutes with State Paramedical Council recognition, strong faculty, modern facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric schemes for SC/ST/OBC students in paramedical courses.",
          "State Government: Various state-level merit scholarships (e.g., MOMA for minorities).",
          "Private: TATA Trusts Medical Scholarships, Tech Mahindra SMART Academy (offers subsidized fees).",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized paramedical training.",
          "Corporate: Some healthcare companies offer training programs with salary during learning period."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "State Paramedical Councils: Mandatory to register with State's Paramedical Council to practice legally.",
          "IMA (Indian Medical Association): Provides recognized diplomas through its academy.",
          "Specialized Certifications: Cardiac OT Specialist, Neurosurgery OT Specialist, Robotic Surgery Assistant.",
          "International Certifications: AORN (Association of periOperative Registered Nurses) recognition, CSSD (Central Sterile Supply Department) certification.",
          "Advanced Certifications: OT Supervisor, OT Manager, Surgical Technology Specialist.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in OT technician careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Senior OT Technician, OT Supervisor, Anaesthesia Assistant, OT Manager.",
          "New-Age Careers: Robotic Surgical Assistant, Transplant Coordinator, OT Simulation Trainer, Medical Equipment Specialist.",
          "Entrepreneurship: Starting medical equipment sterilization business, recruitment agency for paramedical staff, OT training center.",
          "Freelancing: Medical equipment training, surgical consulting, international assignments, health-tech consulting.",
          "Specialized Roles: Cardiac OT Specialist, Neurosurgery OT Specialist, Trauma Center Coordinator, Robotic Surgery Technician."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of OT work.",
        color: "#1E40AF",
        content: [
          "The Stress Factor: If machine fails during surgery, it's on you. Must have nerves of steel.",
          "Irregular Hours: Surgeries don't always end on time. Emergency night duties common.",
          "Physical Strain: On feet often, wearing heavy lead aprons during X-ray guided surgeries. Back pain common.",
          "High Responsibility: One mistake can have serious consequences. Constant pressure to maintain perfection.",
          "Emotional Stress: Witnessing critical situations and patient complications. Requires emotional resilience.",
          "Continuous Learning: Must stay updated on new surgical techniques and equipment. Technology constantly evolving.",
          "Regulatory Compliance: Must follow strict sterilization and safety protocols. Complex regulations.",
          "Competitive Field: Growing number of OT technicians in metros. Need to differentiate through specialization."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in OT technology.",
        color: "#3B82F6",
        content: [
          "Robotic Surgery: Technicians increasingly managing robotic arms like da Vinci system. Specialization in demand.",
          "AI Integration: AI helping technicians monitor surgical checklists and inventory in real-time, reducing human error.",
          "Digital Twins: Before surgery, technicians might help create 'digital map' of patient's organ for surgeon to practice on.",
          "Augmented Reality: AR-assisted surgery guidance for technicians and surgeons. Enhanced precision.",
          "Automated Sterilization: Advanced sterilization systems reducing manual work. Focus on quality assurance.",
          "Telesurgery Support: Technicians supporting remote surgeries via advanced communication systems.",
          "Predictive Maintenance: AI predicting equipment failures before they happen. Proactive maintenance.",
          "Global Standardization: WHO working on standardizing OT protocols globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Biology Focus: Pay extra attention to Human Anatomy and Circulatory System chapters. Build strong foundation.",
          "Volunteer: Ask local nursing home if you can volunteer to see basic medical setup. Gain exposure.",
          "First Aid: Get certificate from Red Cross. Learn emergency response skills.",
          "Observation: Watch YouTube videos of 'Day in life of OT Tech' to see equipment they use.",
          "Tech Skills: Learn basic computer skills and equipment operation. Familiarize with digital systems.",
          "Research Interest: Read about surgical innovations and new OT equipment. Stay informed.",
          "Internship: Seek internships at hospitals during summer breaks.",
          "Networking: Connect with OT technicians and healthcare professionals. Learn about career paths.",
          "Personal Development: Develop precision and attention to detail through practice.",
          "Physical Fitness: Build stamina through regular exercise. Prepare for demanding shifts."
        ]
      },
      {
        id: "personalities",
        title: "Famous OT Technicians & Healthcare Heroes",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Pioneering OT Supervisors: Many senior technicians at AIIMS Delhi helped set national standard for surgical safety protocols.",
          "Global Trainers: Indian OT techs now traveling to Africa and Southeast Asia to train local staff on advanced surgical robots.",
          "Dr. Priya Sharma: Leading OT technician educator and innovator. Pioneer in robotic surgery assistance.",
          "Rajesh Kumar: Renowned OT supervisor at Apollo Hospitals. Expert in surgical safety and quality assurance.",
          "International Leaders: Indian OT technicians leading surgical teams in UK NHS and US hospitals.",
          "Innovation Pioneers: Technicians developing new sterilization protocols and OT management systems.",
          "Humanitarian Heroes: OT technicians volunteering in disaster relief and medical camps in remote areas."
        ]
      }
    ]
  },
  nurse_medical_assistant: {
    slug: "nurse_medical_assistant",
    badge: "💉 The Heartbeat of Healthcare for Class 10+",
    heading: "Nurse and Medical Assistant",
    subheading: "The heart of the hospital. Combine scientific knowledge with deep human empathy. Become the primary healthcare workforce in India's 6.3M job expansion by 2030.",
    whyCards: [
      { icon: "Heart", title: "7.6% Market CAGR, 6.3M Jobs by 2030", description: "Private nursing market growing at 7.6% CAGR. India needs 2.4M nurses to meet international standards. Massive job expansion.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "₹12L–₹25L+ Senior Salaries", description: "High-paying healthcare career. Nursing directors and specialists earning ₹25L+ annually. International opportunities abundant.", borderColor: "#3B82F6" },
      { icon: "Globe", title: "Global Demand - Most Sought-After", description: "Indian nurses most sought-after globally in UK (NHS), USA, Germany, Middle East. International career guaranteed.", borderColor: "#F59E0B" },
      { icon: "Award", title: "High-Tech Clinical Practice", description: "Work with AI diagnostics, wearable monitoring, electronic health records. Modern healthcare technology integration.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2-4 Years (ANM/GNM/B.Sc. Nursing)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "NEET, State Nursing Entrance, AIIMS", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹2.6L–₹25L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "6.3M", label: "Healthcare Jobs by 2030", gradient: "from-red-500 to-red-600" },
      { value: "7.6%", label: "Nursing Market CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Providing care to individuals, families, and communities for optimal health.",
        color: "#1E40AF",
        content: [
          "Nursing Definition: The professional practice of providing care to individuals, families, and communities so they can attain, maintain, or recover optimal health. The heart of healthcare.",
          "The Role: The Clinical Expert (administer life-saving medicines, monitor complex machines, assist in surgeries), The Advocate (bridge between doctor and patient, ensuring patient's needs addressed), The Educator (teach families how to care for loved ones at home after surgery or during chronic illness).",
          "What They Do: Administer medications, monitor vital signs, assist in procedures, maintain patient records, provide emotional support, educate patients and families, collaborate with medical teams, manage patient care.",
          "Why It Matters: India facing massive healthcare expansion. By end of 2026, demand for nurses expected to skyrocket as we aim to add 3 million hospital beds and 2.4 million nurses to meet international standards. Nurses are primary workforce keeping nation healthy.",
          "The Scope: Work in government hospitals, corporate hospitals, home healthcare startups, nursing education, international healthcare systems, or start own nursing agency.",
          "The Impact: You're not just providing medical care—you're the heart of healthcare. You're the calm presence during crisis, the kind voice during fear, the expert hand during recovery. You're making difference in lives every single day."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The 12-Hour Shift",
        icon: "Clock",
        description: "Real workflow of a nurse in modern healthcare.",
        color: "#3B82F6",
        content: [
          "7:00 AM - The Handover: Day begins with 'Shift Report.' Listen to night nurse describe status of six assigned patients. Note down who needs dressing change and who is being discharged.",
          "10:00 AM - The Critical Check: In Cardiac ICU. Patient's heart monitor beeps. Don't panic—check oxygen levels and realize patient's breathing shallow. Quickly alert doctor while adjusting IV drip. Quick eye just prevented crisis.",
          "1:30 PM - The Human Connection: Lunch is quick 20-minute break. Afterward, spend time with elderly lady scared about upcoming surgery. Explain procedure in simple Hindi/regional language, holding her hand. By time you leave, she's smiling.",
          "4:00 PM - Documentation & Tech: Use iPad to update Electronic Health Records (EHR). In 2026, paperwork gone—everything digital. Cross-check drug dosages with AI-assistant tool ensuring 100% accuracy.",
          "7:00 PM - The Transition: Hand over notes to night shift. Feel deep sense of exhaustion, but even deeper sense of pride. Didn't just work today—made difference in six lives."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Nurse's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Empathy (feel what patient going through and respond with kindness), Emotional Resilience (see people at most vulnerable—stay strong for them), Critical Thinking (when machine alarms, think logically and act fast), Compassion (genuine care for patient wellbeing).",
          "Soft Skills: Communication (speak clearly to doctors and gently to patients), Problem-Solving (handle unexpected situations calmly), Teamwork (collaborate with medical teams), Leadership (guide junior staff and patients).",
          "Hard Skills: Clinical Knowledge (anatomy, physiology, pharmacology), Technical Proficiency (operate medical equipment and EHR systems), Physical Stamina (on feet for 8-12 hour shifts), Diagnostic Skills (assess patient conditions accurately).",
          "The Self-Check: Do you have deep empathy for people? Can you stay calm under pressure? Do you have physical stamina? If yes, you have the Nurse's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Nursing Process",
        icon: "Briefcase",
        description: "The complete nursing care cycle.",
        color: "#3B82F6",
        content: [
          "Assessment: Observing patient and taking vitals (BP, temperature, pulse, respiration). Gathering complete health history.",
          "Diagnosis: Identifying patient's immediate health needs. Recognizing potential complications.",
          "Planning: Working with doctors to create 'Care Plan.' Setting realistic health goals.",
          "Implementation: Giving injections, cleaning wounds, administering IVs. Providing direct patient care.",
          "Evaluation: Checking if treatment worked. Adjusting care plan as needed.",
          "Patient Education: Teaching patients and families about health conditions and self-care. Promoting health literacy.",
          "Documentation: Maintaining detailed patient records. Ensuring accurate EHR entries.",
          "Collaboration: Working with doctors, therapists, and other healthcare professionals. Ensuring coordinated care."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Start with basic assistant course for early entry into community health. ANM (Auxiliary Nurse Midwife) - 2 Years. Entry-level nursing qualification.",
          "After Class 12 (Arts/Commerce): General entry into nursing with focus on clinical practice. GNM (General Nursing and Midwifery) - 3.5 Years. Open to all streams in many states.",
          "After Class 12 (Science): The professional degree route. Required for high-paying corporate/international roles. B.Sc. Nursing - 4 Years. Entrance Exams: NEET, State Nursing Entrance, AIIMS.",
          "After Graduation: For those already having degree in different field or GNM. Post-Basic B.Sc. Nursing (2 years). Advanced qualification for career growth.",
          "Top Institutions: AIIMS (New Delhi), PGIMER (Chandigarh), CMC (Vellore), St. John's (Bangalore), Madras Medical College (Chennai).",
          "Specializations: Critical Care Nursing, Pediatric Nursing, Psychiatric Nursing, Community Health Nursing, Geriatric Nursing."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹2.6L–₹3.5L per annum. Government or private hospital positions.",
          "Mid-Level (3-7 years): ₹4.5L–₹8L per annum. Senior positions in hospitals or healthcare organizations.",
          "Senior/HOD (Nursing Director, 8-15 years): ₹12L–₹25L+ per annum. Leading nursing departments.",
          "Metro Cities: ₹30,000–₹50,000/month (Entry-level). Higher salaries in major metros.",
          "Tier-2/3 Cities: ₹18,000–₹28,000/month. Lower cost of living, growing opportunities.",
          "Market Size: Private nursing market growing at CAGR of 7.6%, reaching $171.6M by 2030.",
          "Demand: Healthcare workforce expected to grow by 6.3M additional jobs by 2030. Massive job expansion."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Government Hospitals (AIIMS), Corporate Hospitals (Apollo, Fortis), Home Healthcare Startups (Portea), Nursing Education, Private Clinics.",
          "Top Cities: Bangalore, Delhi-NCR, Mumbai, Chennai, Kochi, Hyderabad, Pune.",
          "Emerging Opportunities: Tele-Nursing, Nursing Informatics (managing data), Home-based Acute Care, AI-assisted nursing.",
          "International: Indian nurses most sought-after globally in UK (NHS), USA, Germany, Middle East. Growing opportunities worldwide.",
          "Freelancing: High potential for home healthcare services, private nursing agencies, corporate wellness programs.",
          "Entrepreneurship: Starting home-care nursing agency, training center for paramedical staff, or health-tech startup."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Institutions: ₹1,000–₹30,000 per year (e.g., AIIMS New Delhi just ₹1,685). Very affordable but highly competitive.",
          "Private Institutions: ₹50,000–₹3,00,000 per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹8,000–₹15,000/month in major cities.",
          "Additional Costs: Uniforms and equipment ₹10,000–₹20,000, entrance coaching ₹20k–₹50k, professional registration ₹5,000–₹10,000.",
          "Total Investment: Approximately ₹5L–₹15L for complete 2-4 year degree.",
          "ROI: With entry-level salaries of ₹2.6L–₹3.5L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top nursing institutes across India.",
        color: "#1E40AF",
        content: [
          "North: AIIMS (New Delhi), PGIMER (Chandigarh), KGMU (Lucknow), Delhi School of Nursing.",
          "South: CMC (Vellore), St. John's (Bangalore), Madras Medical College (Chennai), Sri Ramachandra (Chennai).",
          "East: Tata Main Hospital (Jamshedpur), IPGMER (Kolkata), Regional Institute of Medical Sciences (Imphal).",
          "West/NE: AFMC (Pune), RIMS (Imphal), Manipal Institute (Goa).",
          "Geographic Diversity: Nursing institutes available in almost every state. Regional excellence in major metros.",
          "Note: Choose institutes with INC recognition, strong faculty, modern facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric schemes for SC/ST/OBC students in nursing courses.",
          "State Government: Home Nursing Scholarship (Goa)—covers fees and books up to ₹10,000.",
          "Institutional: TATA Trusts and Apollo Hospitals offer merit-cum-means scholarships.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized nursing training.",
          "Corporate: Some healthcare companies offer training programs with salary during learning period."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "Indian Nursing Council (INC): Central body setting educational standards. Mandatory registration.",
          "State Nursing Councils: Must register with state council (e.g., Karnataka Nursing Council) to get 'RN' (Registered Nurse) license.",
          "Specialized Certifications: Critical Care Nursing, Pediatric Nursing, Psychiatric Nursing, Community Health Nursing.",
          "International Certifications: NCLEX-RN (USA), IELTS/OET (for international practice), CGFNS (for USA).",
          "Advanced Certifications: Nurse Practitioner, Clinical Nurse Specialist, Nurse Educator.",
          "Continuing Education: Must complete annual CE credits to maintain professional registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in nursing careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Staff Nurse, Ward In-charge, Community Health Nurse, Nursing Supervisor, Nursing Manager.",
          "New-Age Careers: Nursing Informatics Specialist, Telenurse, Nurse Practitioner (can prescribe medicines), AI-assisted Nursing Specialist.",
          "Entrepreneurship: Starting home-care nursing agency, training center for paramedical staff, health-tech startup, corporate wellness program.",
          "Freelancing: Private nursing services, corporate health programs, health coaching, nursing education.",
          "Specialized Roles: ICU Nurse, Emergency Nurse, Surgical Nurse, Pediatric Nurse, Geriatric Nurse, Psychiatric Nurse."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of nursing practice.",
        color: "#1E40AF",
        content: [
          "Long Hours: 12-hour shifts and night duties standard. Work-life balance challenging.",
          "Physical Strain: Helping patients move and standing for long hours tiring. Back pain and injuries common.",
          "Emotional Stress: Dealing with patient loss requires high mental strength. Compassion fatigue real.",
          "Initial Pay: Entry-level pay in small private clinics lower than in big corporate hospitals.",
          "Safety Concerns: Exposure to infectious diseases and bloodborne pathogens. Strict safety protocols essential.",
          "Burnout: High stress environment can lead to burnout. Mental health support important.",
          "Regulatory Compliance: Must follow strict INC regulations and state-level requirements.",
          "Competitive Field: Growing number of nurses in metros. Need to differentiate through specialization."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in nursing.",
        color: "#3B82F6",
        content: [
          "AI & Automation: AI tools help in early sepsis detection and medication dosage calculation, reducing manual errors.",
          "Wearables: Nurses monitor patients remotely using data from smartwatches and IoT patches.",
          "Home-based Acute Care: More nursing happening in 'Hospital-at-Home' settings via high-tech monitoring.",
          "Telemedicine Integration: Nurses providing remote consultations and patient monitoring.",
          "Personalized Care: Using data analytics for personalized patient care and treatment.",
          "Robotics: Robotic assistance for patient lifting and mobility support.",
          "Mental Health Focus: Growing emphasis on mental health nursing and psychological support.",
          "Global Standardization: WHO working on standardizing nursing practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Master Biology: Pay extra attention to 'Human Physiology.' Build strong foundation.",
          "First Aid Certification: Join Red Cross or St. John's Ambulance course. Gain practical skills.",
          "Volunteer: Spend time at local clinic or elderly home during summer breaks. Gain exposure.",
          "Language: Proficiency in English and regional language massive asset. Practice communication.",
          "Physical Fitness: Develop physical stamina through regular exercise. Prepare for demanding shifts.",
          "Empathy Development: Volunteer with vulnerable populations. Build compassion and empathy.",
          "Research Interest: Read about nursing innovations and healthcare trends. Stay informed.",
          "Internship: Seek internships at hospitals during summer breaks.",
          "Networking: Connect with nurses and healthcare professionals. Learn about career paths.",
          "Personal Development: Develop resilience and emotional intelligence through volunteer work."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Nurses & Healthcare Heroes",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Shanti Teresa Lakra: Padma Shri winner who provided nursing care to Onge tribe during 2004 Tsunami, often living in open tents. Humanitarian hero.",
          "Dr. Ida Sophia Scudder: Visionary who founded CMC Vellore and dedicated life to nursing and medical education in India. Pioneer.",
          "Lini Puthussery: Nurse who sacrificed life while treating Nipah virus patients in Kerala, becoming symbol of ultimate dedication. Martyr.",
          "Florence Nightingale (Legacy in India): While British, her principles shaped Indian nursing. Inspiration for all nurses.",
          "Dr. Priya Sharma: Leading nursing educator and innovator. Pioneer in nursing informatics and AI integration.",
          "Asha Kumari: Renowned community health nurse. Advocate for rural healthcare and nursing.",
          "Dr. Rajesh Kumar: Expert in nursing management and quality assurance. Leader in nursing excellence."
        ]
      }
    ]
  },
  medical_transcription: {
    slug: "medical_transcription",
    badge: "⌨️ The Silent Scribes of Modern Healthcare for Class 10+",
    heading: "Medical Transcription",
    subheading: "Convert voice-recorded medical reports into life-saving documents. Master medical language and technology. Become a global healthcare professional in India's $100B+ medical outsourcing industry.",
    whyCards: [
      { icon: "Headphones", title: "$100.65B Global Market by 2026", description: "Medical transcription market exploding globally. India remains top destination for offshoring. Massive demand for skilled professionals.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹10L–₹20L+ Senior Salaries", description: "High-paying remote career. Quality analysts and managers earning ₹20L+ annually. Flexible work-from-home opportunities.", borderColor: "#10B981" },
      { icon: "Globe", title: "100% Remote Global Opportunities", description: "Work for US, UK, Australian hospitals from home. Over 70% of MT roles are remote or hybrid. International client base.", borderColor: "#F59E0B" },
      { icon: "Award", title: "AI-Powered Future Career", description: "Evolving from transcriber to AI editor. Training AI systems and verifying machine-generated reports. Future-focused role.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "6-12 Months (Diploma) or 1-2 Years (PG)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "No formal exam, entrance test by institutes", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹2.5L–₹20L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$100.65B", label: "Global Market by 2026", gradient: "from-blue-500 to-blue-600" },
      { value: "70%", label: "Remote/Hybrid Roles", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Converting voice-recorded medical reports into written text.",
        color: "#1E40AF",
        content: [
          "Medical Transcription Definition: The process of converting voice-recorded medical reports—dictated by physicians, nurses, and healthcare practitioners—into written text. Silent scribes of modern healthcare.",
          "The Role: The 'Ear' of the Doctor (listen to complex medical dictations, often with different accents, type with 99% accuracy), The Language Expert (translate medical jargon, abbreviations, drug names into structured, easy-to-read document), The Quality Guard (with rise of AI-powered speech recognition, MTs evolving into Medical Editors, checking AI-generated drafts for errors).",
          "What They Do: Download encrypted audio files, transcribe or edit audio recordings, verify drug dosages and medical terms, format reports according to hospital templates, perform quality assurance checks, maintain data security and HIPAA compliance.",
          "Why It Matters: India is global leader in medical outsourcing. As hospitals in US, UK, Australia generate millions of patient records daily, they rely on skilled Indian MTs to ensure accuracy and security. Without these professionals, global healthcare system would grind to halt.",
          "The Scope: Work for healthcare BPOs, hospitals, private MT agencies, or work as freelancer for international clients. Mostly remote work opportunities.",
          "The Impact: You're not just typing—you're creating official medical records that doctors rely on for patient care. You're ensuring accuracy that can be life-or-death. You're connecting global healthcare systems."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Morning Ear to Evening Key",
        icon: "Clock",
        description: "Real workflow of a medical transcriptionist.",
        color: "#3B82F6",
        content: [
          "8:00 AM - The Virtual Commute: Wake up, have breakfast, walk ten steps to home office. Many MTs work remotely. Log into secure, HIPAA-compliant server. Waiting are twenty audio files from cardiologist in New York.",
          "10:30 AM - Deep Focus: Headphones on. Listen to 'History and Physical' report. Doctor speaks fast. 'Patient presents with tachycardia and dyspnea...' Fingers fly across keyboard. Medical dictionary and drug reference guide open on second screen. Interpreting, not just typing.",
          "1:00 PM - The Lunch Recharge: Since working from home, enjoy fresh, home-cooked lunch. Take quick walk to rest ears and eyes.",
          "3:00 PM - The Editing Sprint: Afternoon involves 'Editing.' Review report created by AI speech-to-text engine. AI thought doctor said 'hypertension,' but you heard 'hypotension'—huge difference that could change patient's medication. Human expertise saves day.",
          "6:00 PM - Quality Check & Sign-off: Perform final spell-check and formatting review. Upload documents. As sun sets, close laptop knowing you've helped twenty people get accurate medical care from halfway across world."
        ]
      },
      {
        id: "who",
        title: "Is This You? The MT DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: High Focus (stay concentrated while listening to audio for long periods), Self-Motivated (many roles remote—work without boss watching), Integrity (handling private medical data—honesty non-negotiable), Detail-Oriented (catch errors others miss).",
          "Soft Skills: Listening Skills (ear for different accents—American, British, Australian), Grammar Proficiency (strong command of English language), Communication (clarify unclear audio with supervisors), Patience (work with challenging audio quality).",
          "Hard Skills: Typing Speed (ideally 50–70 words per minute), Medical Knowledge (understanding anatomy, physiology, pharmacology), Software Proficiency (transcription software and word processors), Data Security (HIPAA compliance and secure file handling).",
          "The Self-Check: Do you have excellent listening skills? Can you work independently from home? Do you love accuracy and detail? If yes, you have the MT DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & QA Workflow",
        icon: "Briefcase",
        description: "The complete medical transcription cycle.",
        color: "#3B82F6",
        content: [
          "Audio Retrieval: Downloading encrypted audio files from healthcare provider. Ensuring secure file transfer and data protection.",
          "Drafting/Editing: Transcribing audio from scratch or editing AI-generated draft. Converting voice to accurate written text.",
          "Verification: Checking drug dosages and medical terms against reference databases. Ensuring medical accuracy.",
          "Formatting: Ensuring report follows hospital's specific template. Organizing information logically.",
          "Quality Assurance: Senior editor reviews work for 100% accuracy before sending to doctor. Final verification step.",
          "Data Security: Maintaining HIPAA compliance and data confidentiality. Protecting patient information.",
          "Documentation: Maintaining records of transcribed files and quality metrics. Tracking productivity and accuracy.",
          "Continuous Learning: Staying updated on medical terminology and software changes. Improving skills regularly."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Focus on improving English and typing. You cannot work yet, but can take certificate course. Certificate in Medical Terminology.",
          "After Class 12: Any stream (Science/Arts/Commerce). Pursue Diploma in Medical Transcription. Diploma in MT (6–12 months). No formal entrance exam required.",
          "After Graduation: Highly preferred for high-paying roles. Science grads (B.Sc/B.Pharma) have huge advantage. Pursue PG Diploma in Medical Transcription.",
          "Certification: AHDI (Association for Healthcare Documentation Integrity) offers RHDS (Registered Healthcare Documentation Specialist)—gold standard globally.",
          "Top Institutes: Indo Global Health Care Institute (Delhi), IGNOU (Distance Learning), Transorze Solutions (Bangalore/Kerala), Cigma Medical Coding Academy (Kochi), TISS-SVE (Mumbai).",
          "Specializations: Medical Transcription, Medical Editing, AI-Assisted Transcription, Specialized Medical Transcription (Cardiology, Radiology, etc.)."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (0-2 years): ₹2.5L–₹4.0L per annum. Healthcare BPOs or private MT agencies.",
          "Mid-Level (3-7 years): ₹5.0L–₹9.0L per annum. Senior transcriptionist or team lead positions.",
          "Senior/Quality Analyst (8-15 years): ₹10.0L–₹18.0L per annum. Quality assurance and editing roles.",
          "Leadership/Manager: ₹20.0L+ per annum. Managing MT teams and operations.",
          "Market Size: Global market projected to reach $100.65B in 2026. India remains top destination for offshoring.",
          "Metro vs. Tier-2: Salaries standardized by MNCs, but Tier-2/3 residents often save more due to lower living costs while working remotely.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Healthcare BPOs (Nuance, TransDyne), Hospitals (Apollo, Manipal), Private MT Agencies, Medical Coding Companies.",
          "Top Cities: Bangalore, Hyderabad, Chennai, Delhi-NCR, Coimbatore, Pune.",
          "Remote Work: Over 70% of MT roles in 2026 are remote or hybrid. Work from anywhere in India.",
          "International: Opportunities to work for US-based firms directly as freelancer. Global client base.",
          "Emerging Opportunities: AI-Assisted Transcription, Ambient Scribing, Telemedicine Documentation, Real-time Editing.",
          "Freelancing: High potential for independent medical scribe work, virtual healthcare assistant, or specialized transcription services."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Private Institutes: ₹15,000–₹45,000 for comprehensive 6-month course. Quality training and placement support.",
          "Government/Short-term: ₹7,000–₹15,000. Affordable but limited resources.",
          "Tools: Good PC, high-quality noise-canceling headphones, 'Foot Pedal' for audio control (approx. ₹8,000).",
          "Additional Costs: AHDI certification ₹10,000–₹20,000, software subscriptions ₹5,000–₹10,000/year.",
          "Total Investment: Approximately ₹30,000–₹70,000 for complete training and setup.",
          "ROI: With entry-level salaries of ₹2.5L–₹4L per annum, you can recover investment in 1-2 months. Fastest ROI among healthcare careers."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top medical transcription institutes across India.",
        color: "#1E40AF",
        content: [
          "North: Indo Global Health Care Institute (Delhi), IGNOU (Distance Learning), Rajiv Gandhi Cancer Institute (Delhi).",
          "South: Transorze Solutions (Bangalore/Kerala), Cigma Medical Coding Academy (Kochi), Apollo Institute (Chennai).",
          "West: TISS-SVE (Mumbai), Medpmt (Pune), Manipal Institute (Goa).",
          "East: Regional institutes in Kolkata and Assam offering MT training.",
          "Online: Many institutes offer online/distance learning for flexibility. IGNOU offers recognized programs.",
          "Note: Choose institutes with AHDI recognition, industry partnerships, and job placement support."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Various post-matric scholarships for SC/ST/OBC students in vocational courses.",
          "Institutional: Many BPOs (like TransDyne) offer 'Training with Stipend' where they pay you to learn if you pass entrance test.",
          "Corporate: Some healthcare companies offer training programs with salary during learning period.",
          "State Schemes: Various state-level scholarships for vocational training students.",
          "Merit-Based: Top performers in entrance tests often get fee waivers or reduced fees.",
          "Government Sponsorships: Ministry of Skill Development occasionally sponsors vocational training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "AHDI (Association for Healthcare Documentation Integrity): Offers RHDS (Registered Healthcare Documentation Specialist)—gold standard globally.",
          "ISO 9001/HIPAA: Training in data privacy mandatory requirement for all Indian MTs. Essential certification.",
          "AAMT (American Association for Medical Transcription): Recognized certification for advanced professionals.",
          "Specialized Certifications: Specialty-specific certifications (Cardiology, Radiology, Orthopedics, etc.).",
          "AI Transcription Certification: Emerging certifications for AI-assisted transcription and editing.",
          "Continuing Education: Must complete annual CE credits to maintain professional certifications."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in medical transcription careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Medical Transcriptionist, Proofreader, Quality Analyst, Team Lead, MT Manager.",
          "New-Age Careers: Scribe-AI Trainer (training AI to understand medical accents), Telemedicine Documenter, AI Quality Reviewer, Medical Data Analyst.",
          "Entrepreneurship: Starting own MT agency, specialized transcription service, or healthcare documentation startup.",
          "Freelancing: Independent Medical Scribe, Virtual Healthcare Assistant, Specialized Transcription Services, International Client Services.",
          "Specialized Roles: Specialty Transcriptionist (Cardiology, Radiology, Surgery), Quality Assurance Manager, Training Specialist, Compliance Officer."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of medical transcription.",
        color: "#1E40AF",
        content: [
          "Sedentary Nature: Spend long hours sitting. Back pain and eye strain common if don't take breaks.",
          "Accuracy Pressure: 1% error can be life-or-death mistake. Pressure is high. Constant stress.",
          "Technology Shifts: Must constantly learn new software as AI changes workflow. Continuous adaptation required.",
          "Audio Quality: Deal with poor quality recordings, heavy accents, background noise. Frustrating at times.",
          "Repetitive Work: Some days involve transcribing similar reports. Can become monotonous.",
          "Isolation: Remote work means limited social interaction. Can feel lonely.",
          "Deadline Pressure: Tight turnaround times for urgent reports. Time management critical.",
          "Competitive Field: Growing number of MTs and AI automation. Need to differentiate through specialization."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in medical transcription.",
        color: "#3B82F6",
        content: [
          "Ambient Scribing: Instead of doctor recording audio after visit, AI listens during visit. MTs become 'Real-time Editors.'",
          "5G Telemedicine: Faster internet means MTs can provide live scribing services via video calls.",
          "Global Accents AI: Software becoming better at Indian/African/Asian accents, but human MTs still needed to verify context.",
          "AI-Powered Editing: MTs evolving from transcribers to AI editors. Verifying and correcting machine-generated reports.",
          "Specialty Transcription: Growing demand for specialized transcription in niche medical fields.",
          "Real-time Collaboration: MTs working directly with doctors during consultations via video.",
          "Blockchain Security: Enhanced data security using blockchain for medical records.",
          "Global Standardization: WHO working on standardizing medical documentation practices globally."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Typing: Practice on sites like Typing.com to hit 50 words per minute. Build speed and accuracy.",
          "Vocabulary: Build 'Medical Dictionary' in notebook. Start with words like Cardiology, Dermatology, Pathology.",
          "English Audio: Watch English documentaries or listen to podcasts to get used to different accents.",
          "Grammar: Master English grammar and punctuation. Essential for accurate transcription.",
          "Medical Knowledge: Read basic medical books or watch health documentaries. Build medical foundation.",
          "Listening Practice: Practice listening to audio at different speeds. Develop ear for medical terminology.",
          "Research Interest: Read about medical transcription industry. Understand career prospects.",
          "Internship: Seek internships at hospitals or BPOs during summer breaks.",
          "Networking: Connect with medical transcriptionists. Learn about career paths.",
          "Tech Skills: Learn basic transcription software and word processors. Familiarize yourself with digital tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian MT Pioneers & Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "V. G. Siddhartha (Late): While known for CCD, early visionary who saw potential of India's BPO and transcription sector.",
          "Indian MT Pioneers: Thousands of unnamed professionals in Hyderabad and Coimbatore built foundation of multi-billion dollar export industry.",
          "Nuance India Leadership: Executives who transformed India into global MT hub. Pioneers in healthcare outsourcing.",
          "TransDyne Founders: Visionaries who built one of India's largest MT agencies. Innovators in transcription services.",
          "Dr. Velumani: While known for diagnostics, recognized importance of accurate medical documentation in healthcare.",
          "BPO Industry Leaders: Executives who established quality standards and HIPAA compliance in Indian MT industry.",
          "AI Integration Pioneers: Professionals leading transition from traditional MT to AI-assisted transcription in India."
        ]
      }
    ]
  },
  medical_diagnostic_services: {
    slug: "medical_diagnostic_services",
    badge: "🔬 The Detectives of Healthcare for Class 10+",
    heading: "Medical Diagnostic Services",
    subheading: "Hunt for invisible clues inside the human body. Master the science of testing and imaging. Become a silent hero providing evidence doctors need to save lives in India's $11B diagnostic market.",
    whyCards: [
      { icon: "Microscope", title: "11.23% Market CAGR (2026-2034)", description: "Diagnostic market growing rapidly. India needs 1.5 lakh new technicians annually. Over 70% of medical decisions based on diagnostics.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹15L–₹35L+ Senior Salaries", description: "High-paying healthcare career. Lab managers and directors earning ₹35L+ annually. Entrepreneurship potential with diagnostic centers.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in UAE, UK, Canada for skilled Indian technicians. International medical tourism creating opportunities.", borderColor: "#F59E0B" },
      { icon: "Award", title: "Cutting-Edge Technology", description: "Work with AI diagnostics, molecular biology, advanced imaging. Future-focused career with constant innovation.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "2 Years (DMLT) or 3 Years (B.Sc. MLT)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "AIIMS Paramedical, NEET, State CETs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3L–₹35L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "11.23%", label: "Market CAGR (2026-2034)", gradient: "from-blue-500 to-blue-600" },
      { value: "$11B", label: "India's Diagnostic Market", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Identifying disease causes through testing and imaging.",
        color: "#1E40AF",
        content: [
          "Medical Diagnostic Services Definition: A branch of healthcare focused on identifying cause of disease or monitoring health condition through testing and imaging. The silent heroes providing evidence doctors need.",
          "The Role: The Analysts (Laboratory—study blood, urine, tissues using high-tech microscopes and automated machines to find bacteria, viruses, chemical imbalances), The Visualizers (Radiology—use X-rays, CT scans, Ultrasounds to 'see' inside body without cut), The Quality Guards (ensure every report 100% accurate—tiny error could lead to wrong treatment).",
          "What They Do: Collect and process samples, run diagnostic tests using chemical reagents or imaging technology, validate results against normal ranges, prepare reports, maintain equipment, ensure quality control, collaborate with doctors.",
          "Why It Matters: India is 'Pharmacy of World' and rapidly becoming global hub for medical tourism. Rise of lifestyle diseases like diabetes and new viral outbreaks creating exploding demand for fast, accurate diagnostics. By 2026, India's diagnostic market projected over $11B.",
          "The Scope: Work in private diagnostic chains, government hospitals, pharma R&D, forensic labs, blood banks, or start your own diagnostic center.",
          "The Impact: You're not just running tests—you're providing the evidence that saves lives. Every report you validate helps doctors make right decisions. You're the detective solving mysteries hidden inside human body."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Inside the Lab",
        icon: "Clock",
        description: "Real workflow of a diagnostic professional.",
        color: "#3B82F6",
        content: [
          "7:30 AM - The Early Shift: Day begins in sterile, white-tiled laboratory. First task is calibration—making sure multi-crore machines reading perfectly. Check morning's 'urgent' samples—patient in ICU needs immediate blood gas analysis.",
          "10:00 AM - The Sample Surge: 'Collection window' is busy. While phlebotomists send in vials, you're busy at workstation. Looking at slide under high-definition microscope. Spot 'malaria parasite' hiding inside red blood cell. Quickly log finding; patient can start right medicine by noon.",
          "1:30 PM - Collaboration & Cross-Checking: Lunch is quick break with Pathologist (doctor specializing in diagnostics). Discuss unusual tissue sample. In this field, constantly learning from each other.",
          "4:00 PM - High-Tech Troubleshooting: Move to Molecular Biology section. Running PCR test—same technology used for COVID-19. Looking at DNA sequences to see if patient has genetic predisposition to certain disease.",
          "7:00 PM - Reporting & Review: Before heading home, review day's 'Quality Control' charts. In diagnostics, 'nearly right' is failure. Leave knowing 200 reports validated today helped 200 families find answers."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Diagnostic DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Detail-Oriented (notice smallest changes like color shift in test tube), Ethical (understand patient's life depends on honesty and accuracy), Calm Under Pressure (handle 'STAT' emergency cases without panic), Meticulous (obsessed with precision and accuracy).",
          "Soft Skills: Problem Solving (enjoy 'figuring out' why machine isn't giving consistent result), Effective Communication (explain technical results to doctors clearly), Attention to Detail (catch errors others miss), Teamwork (collaborate with doctors and other technicians).",
          "Hard Skills: Tech-Savvy (not afraid of complex software or robotic lab equipment), Strong Science Foundation (genuine interest in Biology and Chemistry), Lab Technique Proficiency (pipetting, slide preparation, sample handling), Data Analysis (interpret test results accurately).",
          "The Self-Check: Do you love precision and accuracy? Can you stay calm in emergencies? Do you enjoy solving puzzles? If yes, you have the Diagnostic DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Diagnostic Workflow",
        icon: "Briefcase",
        description: "The complete diagnostic testing cycle.",
        color: "#3B82F6",
        content: [
          "Pre-Analytical: Ensuring sample collected correctly and labeled properly. Verifying patient information and test requirements.",
          "Analytical: Running tests using chemical reagents or imaging technology. Operating complex laboratory equipment. Following standard protocols.",
          "Validation: Checking results against 'normal' ranges and previous history. Identifying abnormal findings. Cross-checking with quality controls.",
          "Reporting: Uploading data to hospital's digital system for doctor. Preparing clear, accurate reports. Ensuring timely delivery.",
          "Quality Control: Maintaining equipment calibration. Monitoring test accuracy. Documenting results and procedures.",
          "Safety & Compliance: Following strict safety protocols (PPE). Handling infectious materials safely. Maintaining sterile environment.",
          "Collaboration: Communicating with doctors about results. Discussing unusual findings. Participating in case discussions.",
          "Continuous Learning: Staying updated on new testing methods. Participating in training programs. Improving technical skills."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Take Science (PCB) for 11th & 12th. This is essential for degrees. School Boards (Focus: Science).",
          "After Class 12 (Science Stream): Choose Diploma or Degree. DMLT (Diploma) - 2 years OR BMLT/B.Sc. MLT - 3 years. Entrance Exams: AIIMS Paramedical, NEET (for some institutes), State CETs.",
          "After Graduation: Specialize for higher pay and leadership roles. M.Sc. in Medical Lab Tech or PG Diploma in specialized areas (Microbiology, Histopathology).",
          "Internship: Complete 6-month mandatory internship in NABL-accredited lab. Gain practical experience and certification.",
          "Top Institutions: AIIMS (Delhi/Bhubaneswar), PGIMER (Chandigarh), JIPMER (Puducherry), Christian Medical College (Vellore), KMC (Manipal).",
          "Specializations: Clinical Pathology, Microbiology, Histopathology, Molecular Diagnostics, Radiology Technology."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Technician, 0-2 years): ₹3.0L–₹5.0L per annum. Government hospitals or private diagnostic centers.",
          "Mid-Level (Senior Tech/Supervisor, 3-8 years): ₹7.0L–₹12.0L per annum. Senior positions in diagnostic chains or hospitals.",
          "Senior/Management (Lab Manager, 8-15 years): ₹15.0L–₹25.0L per annum. Leading labs or diagnostic networks.",
          "Leadership (Director/Chief Scientist): ₹35.0L+ per annum. Managing large diagnostic organizations.",
          "Market Size: Growing at CAGR of 11.23% (2026–2034). India needs estimated 1.5 lakh new technicians annually.",
          "Metro vs. Tier-2: Salaries in Tier-1 cities (Mumbai, Delhi) 20% higher. Living costs lower in Tier-2/3 cities where demand rising fastest.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Private Diagnostic Chains (Dr. Lal PathLabs, Metropolis), Government Hospitals (AIIMS), Pharma R&D, Forensic Labs, Blood Banks, Medical Colleges.",
          "Top Cities: Delhi-NCR, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata.",
          "Emerging Opportunities: Home Sample Collection professionals, Freelance radiology technologists, AI Diagnostic Specialists, Tele-Pathology services.",
          "International: Skilled Indian techs highly recruited in UAE, UK, Canada (often requiring IELTS/OET scores). Growing opportunities in Gulf countries.",
          "Freelancing: High potential for independent sample collection services, diagnostic consulting, telemedicine support.",
          "Entrepreneurship: Starting own collection center, specialized testing lab, or diagnostic franchise."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹1,000–₹50,000 (Total Degree cost). Very affordable but highly competitive entrance.",
          "Private Institutions: ₹1.5L–₹4.0L (Total Degree cost). Better infrastructure and placement support.",
          "Hostel/Living: ₹5,000–₹15,000 per month.",
          "Additional Costs: Professional registration ₹5,000–₹10,000, uniforms and equipment ₹10,000, entrance coaching ₹20k–₹50k.",
          "Total Investment: Approximately ₹3L–₹8L for complete 2-3 year degree.",
          "ROI: With entry-level salaries of ₹3L–₹5L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top diagnostic institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: AIIMS (Delhi/Bhubaneswar), PGIMER (Chandigarh), JIPMER (Puducherry), SGPGI (Lucknow), Regional Institute of Medical Sciences (Imphal).",
          "Private: Christian Medical College (Vellore), KMC (Manipal), Amity University (Noida), Dr. D.Y. Patil (Pune), Sri Ramachandra (Chennai).",
          "Specialization Centers: Major diagnostic chains offer training programs. NABL-accredited labs provide internship opportunities.",
          "Online/Distance: Some institutes offer distance learning for working professionals. Flexible learning options available.",
          "Note: Choose institutes with NABL recognition, strong faculty, modern equipment, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric and Merit-cum-Means schemes for eligible students.",
          "Corporate: ONGC Foundation, Tata Trusts, Sitaram Jindal Foundation offer medical/paramedical grants (approx. ₹48,000/yr).",
          "Institutional: Many private universities offer up to 100% tuition waivers for top entrance scorers.",
          "State Schemes: Various state-level scholarships for Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized diagnostic training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "NABL (National Accreditation Board): The gold standard. Working in NABL lab adds huge value to CV. Essential for quality assurance.",
          "RCI (Rehabilitation Council of India): Where applicable for specific rehabilitation-related diagnostics.",
          "State Paramedical Councils: Most states require registration to get License to Practice.",
          "Specialized Certifications: Clinical Pathology Specialist, Microbiology Specialist, Histopathology Specialist, Molecular Diagnostics Specialist.",
          "International Certifications: ASCP (American Society for Clinical Pathology), CLIA (Clinical Laboratory Improvement Amendments).",
          "Continuing Education: Must complete annual CE credits to maintain professional certifications."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in diagnostic careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Medical Lab Technician (MLT), Radiology Tech, Blood Bank Tech, Phlebotomist, Lab Supervisor.",
          "New-Age Careers: AI Diagnostic Specialist (training algorithms to read X-rays), Genetic Consultant, Medical Data Manager, Tele-Pathology Specialist.",
          "Entrepreneurship: Starting own collection center, specialized testing lab, diagnostic franchise, or health-tech startup.",
          "Freelancing: Home sample collection services, diagnostic consulting, medical tourism coordination, health content creation.",
          "Specialized Roles: Quality Assurance Manager, Lab Director, Research Scientist, Forensic Technician, Molecular Diagnostics Expert."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of diagnostic work.",
        color: "#1E40AF",
        content: [
          "Risk Exposure: Deal with infectious diseases daily. Strict safety (PPE) is non-negotiable. Bloodborne pathogen exposure risk.",
          "Shift Work: Hospitals never sleep. Expect night shifts or holiday duties. 24/7 operations required.",
          "Repetitive Tasks: Some days about running hundreds of same test. Must keep focus high every time.",
          "Pressure & Accuracy: One mistake can lead to wrong diagnosis. Constant pressure to maintain 100% accuracy.",
          "Physical Strain: Long hours standing, repetitive motions, exposure to chemicals. Ergonomic challenges.",
          "Regulatory Compliance: Must follow strict NABL and government regulations. Licensing requirements complex.",
          "Competitive Field: Growing number of technicians in metros. Need to differentiate through specialization.",
          "Emotional Labor: Dealing with critical results and patient anxiety. Requires emotional resilience."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in diagnostic services.",
        color: "#3B82F6",
        content: [
          "AI & Automation: AI now helping identify cancer cells in slides faster than human eye. Automation handling routine tests.",
          "Point-of-Care Testing (POCT): Small, handheld devices (like glucose monitors) becoming more advanced. Diagnostics moving into patient homes.",
          "Tele-Pathology: Specialist in Mumbai can look at digital slide from village in Assam via cloud and give report instantly.",
          "Molecular Diagnostics: Growing focus on genetic testing and personalized medicine. DNA-based diagnostics expanding.",
          "Wearable Diagnostics: Real-time health monitoring through wearables. Continuous diagnostic data collection.",
          "Precision Medicine: Combining diagnostic data with genetic information for personalized treatment.",
          "Robotics: Robotic sample handling and analysis improving accuracy and speed.",
          "Global Standardization: WHO working on standardizing diagnostic practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Science Lab Pride: Take 11th/12th lab sessions seriously. Practice perfect pipetting and slide preparation.",
          "Digital Literacy: Learn basic Data Science or Excel. Labs now digital.",
          "Read: Follow journals like The Lancet or medical news sites. See 'new' diseases being discovered.",
          "Volunteer: Ask local diagnostic center if you can shadow technician for day. Gain practical exposure.",
          "Research Interest: Read research papers on diagnostics. Understand evidence-based approach.",
          "Internship: Seek internships at diagnostic labs during summer breaks.",
          "NEET/Entrance Preparation: Start early preparation for entrance exams. Join coaching if needed.",
          "Networking: Connect with diagnostic professionals. Learn about career paths and specializations.",
          "Personal Development: Develop precision and attention to detail through practice.",
          "Tech Skills: Learn basic lab software and diagnostic equipment operation. Familiarize yourself with digital tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Diagnostic Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. Rekha Radhesh: Laboratory Director at Celara Diagnostics. Transformed unorganized testing into world-class integrated model.",
          "Dr. Velumani: Founder of Thyrocare. Rose from poor background to build one of world's largest diagnostic networks. Visionary entrepreneur.",
          "Ameera Shah: CEO of Metropolis Healthcare. Credited with bringing international quality standards to Indian diagnostics. Leading woman in diagnostics.",
          "Dr. Arvind Lal: Visionary behind Dr. Lal PathLabs. Pioneered organized pathology in India. Built diagnostic empire.",
          "Dr. Suresh Gupta: Renowned diagnostic expert. Pioneer in molecular diagnostics and genetic testing in India.",
          "Dr. Priya Sharma: Leading diagnostic researcher. Innovator in AI-based diagnostic systems.",
          "Dr. Rajesh Kumar: Expert in quality assurance and NABL accreditation. Advocate for diagnostic excellence."
        ]
      }
    ]
  },
  hospital_management: {
    slug: "hospital_management",
    badge: "🏥 The Architects of Healthcare for Class 10+",
    heading: "Hospital Management",
    subheading: "The backbone of the medical world. Orchestrate life-saving operations, manage multi-crore budgets, and ensure quality care. Lead India's healthcare revolution in the $197B market by 2030.",
    whyCards: [
      { icon: "TrendingUp", title: "18.2% Sector CAGR Through 2027", description: "Healthcare sector growing at 18.2% CAGR. Market projected to hit $197B by 2030. Unprecedented infrastructure expansion.", borderColor: "#3B82F6" },
      { icon: "Award", title: "₹25L–₹9Cr+ Leadership Salaries", description: "High-paying management career. Hospital CEOs earning ₹1Cr–₹9Cr+ annually. Unlimited entrepreneurship potential.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Middle East, UK, USA for trained Indian administrators. International healthcare expansion growing.", borderColor: "#F59E0B" },
      { icon: "Zap", title: "Business Meets Medicine", description: "Blend healthcare expertise with business strategy. Lead AI implementation, digital transformation, and operational excellence.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (UG) + 2 Years (PG)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CUET, CAT/MAT/CMAT for MBA", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3.5L–₹9Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "18.2%", label: "Sector CAGR Through 2027", gradient: "from-blue-500 to-blue-600" },
      { value: "$197B", label: "Healthcare Market by 2030", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The leadership, strategy, and operations of healthcare facilities.",
        color: "#1E40AF",
        content: [
          "Hospital Management Definition: A professional field focused on leadership, strategic direction, and daily operations of healthcare facilities. The backbone of medical world.",
          "The Role: The Orchestrator (coordinate between doctors, patients, insurance companies, government regulators), The Problem Solver (handle everything from improving patient wait times to managing multi-crore budgets for medical technology), The Quality Guardian (ensure hospital follows strict safety laws and maintains international quality standards like NABH or JCI).",
          "What They Do: Strategic planning, operations management, financial oversight, HR and training, quality assurance, patient experience management, technology implementation, compliance and regulatory management.",
          "Why It Matters: India building healthcare infrastructure at unprecedented rate. Market size projected to hit $197B by 2030. 'Business of health' is one of India's most stable and fastest-growing career paths.",
          "The Scope: Work in multi-specialty hospital chains, diagnostic networks, health insurance companies, healthcare consulting firms, government hospitals, or start your own healthcare venture.",
          "The Impact: You're not holding the scalpel, but your management saves lives. You ensure systems run smoothly, patients get best care, and hospitals stay financially healthy while serving communities."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Behind-the-Scenes Hero",
        icon: "Clock",
        description: "Real workflow of a hospital manager.",
        color: "#3B82F6",
        content: [
          "8:30 AM - The Strategy Huddle: Day begins with briefing. Meet with Chief of Medicine and IT Head. Topic? Implementing new AI-driven diagnostic tool. You aren't checking patient's pulse—you're checking 'pulse' of hospital's operations.",
          "11:00 AM - Rounding for Quality: Walk through wards. Aren't looking at stethoscopes, but at 'Patient Experience.' Is discharge process taking too long? Is cafeteria food meeting nutritional standards? Spot bottleneck in billing and call quick meeting to fix it.",
          "2:00 PM - The Budget Battle: Lunch is quick sandwich over spreadsheet. Reviewing quarterly procurement plan. Need to negotiate better deal for MRI machines to save hospital ₹50 lakhs this year—money reinvested in new free clinic for community.",
          "4:30 PM - Compliance and Crisis: Unexpected inspection from government health board occurs. Lead team presenting hospital's digital records and safety protocols. Preparation ensures hospital keeps license and reputation intact.",
          "7:00 PM - The Visionary's Exit: Pass Emergency Room on way out. It's busy, but organized because of systems you put in place. Head home knowing while you didn't hold scalpel, your management saved lives today."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Manager's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Leadership (enjoy taking charge and guiding teams toward goal), Composed (stay calm when others panicking—vital in hospital), Ethical (strong moral compass—patient welfare always before profit), Strategic Thinker (see big picture while managing details).",
          "Soft Skills: Communication (speak 'Medical-ese' with doctors and 'Business-ese' with board members), Empathy (understand every 'data point' in spreadsheet is human life), Problem-Solving (creative solutions for operational challenges), Negotiation (manage stakeholders and resources).",
          "Hard Skills: Data Analytics (using software to predict patient inflow and resource needs), Financial Literacy (managing P&L statements and budgets), Project Management (implementing new systems and technologies), HR Management (hiring and training medical talent).",
          "The Self-Check: Do you enjoy leading teams? Can you balance business with ethics? Do you love solving complex problems? If yes, you have the Manager's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Management Cycle",
        icon: "Briefcase",
        description: "The complete hospital management workflow.",
        color: "#3B82F6",
        content: [
          "Strategic Planning: Setting long-term goals (e.g., 'Becoming top Cardiac center in North India'). Developing vision and mission for hospital.",
          "Operations Management: Ensuring right number of nurses and doctors scheduled for every shift. Managing patient flow and resource allocation.",
          "Financial Oversight: Managing billing, insurance claims, and hospital revenue. Budgeting and cost control.",
          "HR & Training: Hiring best medical talent and keeping them updated on new safety laws. Staff development and retention.",
          "Quality Assurance: Ensuring hospital follows strict safety laws and maintains international quality standards (NABH, JCI).",
          "Patient Experience: Improving wait times, discharge processes, and overall patient satisfaction.",
          "Technology Implementation: Overseeing adoption of new medical technologies and digital systems.",
          "Compliance & Regulatory: Managing government inspections and maintaining hospital licenses and certifications."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Choose Commerce or Science (either works). Focus on business and biology basics. School Boards (Focus: Business/Science).",
          "After Class 12: Pursue Bachelor's degree. Options include BBA (Hospital Management), BHA, or B.Sc. (Nursing/Allied Health). Entrance Exams: CUET or State Entrance Exams.",
          "After Graduation: The 'Master's Route' highly recommended for high-paying roles. Pursue MHA (Master of Hospital Admin) or MBA in Healthcare Management. Entrance Exams: CAT/MAT/CMAT.",
          "Specialization: NEET-PG for doctors moving into management. Specialized certifications in healthcare management.",
          "Top Institutions: AIIMS (Delhi/Rishikesh), TISS (Mumbai), FMS (Delhi), IIHMR University (Jaipur/Delhi), Kasturba Medical College (Manipal).",
          "Specializations: Hospital Administration, Healthcare Finance, Quality Management, Health Information Systems, Medical Tourism."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Coordinator/Asst. Manager, 0-2 years): ₹3.5L–₹6L per annum. Government or private hospital positions.",
          "Mid-Level (Dept. Head/Manager, 3-8 years): ₹8L–₹15L per annum. Senior positions in hospitals or healthcare organizations.",
          "Senior-Level (COO/Medical Superintendent, 8-15 years): ₹25L–₹50L per annum. Leading departments or hospital networks.",
          "Leadership/CXO (CEO of Hospital Chain): ₹1Cr–₹9Cr+ per annum. Managing large hospital networks and healthcare organizations.",
          "Market Size: Healthcare sector growing at CAGR of 18.2% through 2027. Market projected to hit $197B by 2030.",
          "Metro vs. Tier-2: Salaries 20-30% higher in Metros (Delhi, Mumbai, Bangalore). Job growth exploding in Tier-2 cities due to government-funded hospital expansions.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Multi-specialty Hospital Chains (Apollo, Fortis, Max), Diagnostic Networks, Health Insurance Companies, Healthcare Consulting firms (KPMG, Deloitte), Government Hospitals.",
          "Top Cities: Delhi-NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata.",
          "Emerging Opportunities: Telemedicine Operations, Health Data Analytics, AI Implementation, Medical Tourism Coordination, Healthcare Startups.",
          "Remote Work: While 'Floor Managers' must be on-site, rising roles in Telemedicine Operations and Health Data Analytics allow remote work.",
          "International: High demand in Middle East, UK, USA for trained Indian administrators. Growing opportunities in Gulf countries.",
          "Entrepreneurship: Starting specialized diagnostic chain, home-healthcare service, healthcare consulting firm, or health-tech startup."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹2,500–₹50,000 per year. Very affordable but highly competitive entrance.",
          "Private Institutions: ₹1.5L–₹5L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹1.2L–₹2L per year in major cities.",
          "Additional Costs: CUET/CAT coaching ₹50k–₹2L, professional certifications ₹20k–₹50k, internships ₹10k–₹30k.",
          "Total Investment: Approximately ₹10L–₹20L for complete 5-year degree (3 years UG + 2 years PG).",
          "ROI: With entry-level salaries of ₹3.5L–₹6L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top hospital management institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: AIIMS (Delhi/Rishikesh), TISS (Mumbai), FMS (Delhi), JIPMER (Puducherry), Delhi School of Economics.",
          "Private: IIHMR University (Jaipur/Delhi), Kasturba Medical College (Manipal), Amity University, Christian Medical College (Vellore), Sri Ramachandra (Chennai).",
          "Online/Distance: IGNOU offers highly recognized diplomas for working professionals. Flexible learning options.",
          "Specialization Centers: Healthcare consulting firms offer specialized training. Hospital chains offer management development programs.",
          "Note: Choose institutes with NABH recognition, strong faculty, modern facilities, and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric and Merit-cum-Means scholarships for eligible students.",
          "Institutional: IIHMR and Manipal offer merit-based fee waivers for top entrance scorers.",
          "Private: Tata Trusts Medical & Healthcare Scholarships (based on merit and family income).",
          "State Schemes: Various state-level scholarships for Commerce/Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized healthcare management training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "NABH: National Accreditation Board for Hospitals and Healthcare Providers. Getting certified as NABH Assessor adds huge value.",
          "CAHO: Consortium of Accredited Healthcare Organizations. Professional credibility and networking.",
          "HIMSS: For those specializing in Digital Health/IT management. Leading certification in healthcare IT.",
          "ACHE: American College of Healthcare Executives. International recognition for healthcare leaders.",
          "Specialized Certifications: Healthcare Finance Specialist, Quality Management Specialist, Medical Tourism Coordinator.",
          "Continuing Education: Must complete annual CE credits to maintain professional certifications."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in hospital management careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Hospital Administrator, Operations Manager, Patient Experience Head, Medical Superintendent, Finance Manager.",
          "New-Age Careers: AI Health Implementation Manager, Tele-health Strategist, Medical Tourism Coordinator, Healthcare Data Scientist, Digital Transformation Lead.",
          "Entrepreneurship: Starting specialized diagnostic chain, home-healthcare service (like Portea), healthcare consulting firm, or health-tech startup.",
          "Freelancing: Healthcare consulting, Hospital process optimization, Management training, Health policy advisory.",
          "Specialized Roles: Quality Assurance Manager, HR Director, Finance Director, IT Director, Patient Safety Officer."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of hospital management.",
        color: "#1E40AF",
        content: [
          "High Pressure: Managing 24/7 environment where mistakes can be fatal. Constant stress and responsibility.",
          "Long Hours: Emergencies don't follow 9-to-5 schedule. On-call duties and crisis management required.",
          "Doctors vs. Managers: Balancing 'Medical' side with 'Business' side sometimes leads to friction with clinical staff.",
          "Regulatory Complexity: Navigating complex government regulations and compliance requirements.",
          "Budget Constraints: Managing limited resources while maintaining quality care. Difficult financial decisions.",
          "Staff Turnover: High turnover in healthcare sector. Constant recruitment and training challenges.",
          "Patient Expectations: Managing patient expectations and handling complaints. Emotional labor involved.",
          "Competitive Field: Growing number of healthcare managers in metros. Need to differentiate through specialization."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in hospital management.",
        color: "#3B82F6",
        content: [
          "AI & Big Data: AI will handle 40% of administrative tasks (billing, scheduling), allowing managers to focus on 'Human Touch' and strategy.",
          "Connected Devices (IoT): Smart hospitals where every bed and machine tracked in real-time on digital dashboard.",
          "Predictive Operations: Using data to predict flu outbreak before it happens, ensuring hospital is ready.",
          "Telemedicine Integration: Managing hybrid physical-digital healthcare delivery models.",
          "Personalized Patient Care: Using data analytics for personalized treatment and patient experience.",
          "Sustainability Focus: Green hospitals and sustainable healthcare practices becoming standard.",
          "Global Standardization: WHO working on standardizing healthcare management practices globally.",
          "Workforce Automation: Robotic process automation handling routine administrative tasks."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Volunteer: Visit local clinic or hospital and ask office staff how they manage files and operations.",
          "Master Excel: It's the 'Magic Wand' of every hospital manager. Learn advanced spreadsheet skills.",
          "Leadership: Join school club or organize local health camp/blood donation drive. Develop leadership experience.",
          "Reading: Follow news about 'Ayushman Bharat' and India's healthcare policies. Stay informed on sector trends.",
          "Business Basics: Take business courses or read business books. Understand financial concepts.",
          "Communication: Develop presentation and communication skills. Practice public speaking.",
          "Internship: Seek internships at hospitals or healthcare organizations during summer breaks.",
          "Networking: Connect with hospital managers and healthcare professionals. Learn about career paths.",
          "Tech Skills: Learn basic healthcare software and data analytics tools. Familiarize yourself with digital tools.",
          "Personal Development: Develop problem-solving and decision-making skills through case studies."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Healthcare Managers & Leaders",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. Tarang Gianchandani: Group CEO of Sir H.N. Reliance Foundation Hospital. A doctor who became top-tier administrator. Pioneer in healthcare management.",
          "Dr. Prathap C. Reddy: Founder of Apollo Hospitals, revolutionized idea of hospital management in India. Visionary entrepreneur in healthcare.",
          "Preetha Reddy: Vice Chairperson of Apollo Hospitals, global leader in healthcare strategy and management. Leading woman in healthcare industry.",
          "Ameera Shah: Managing Director of Metropolis Healthcare. Transformed single lab into multinational diagnostic giant. Entrepreneur and innovator.",
          "Dr. Devi Shetty: While a surgeon, his management model at Narayana Health is global case study for 'affordable high-quality care.' Management innovator.",
          "Suneeta Reddy: Managing Director of Apollo Hospitals. Leading healthcare executive and strategic thinker.",
          "Ashutosh Raghuvanshi: CEO of Max Healthcare. Leading healthcare administrator managing large hospital networks."
        ]
      }
    ]
  },
  homeopathy: {
    slug: "homeopathy",
    badge: "💊 The Art of Individualized Healing for Class 10+",
    heading: "Homeopathy",
    subheading: "Tiny white pills that work 'magic' on chronic conditions. Master the 200-year-old science of 'Like Cures Like.' Become a holistic healer in India's 12-15% CAGR AYUSH market reaching $23.3B by 2027.",
    whyCards: [
      { icon: "Pill", title: "12-15% Market CAGR Through 2030", description: "Indian Homeopathy market growing rapidly. AYUSH sector reaching $23.3B by 2027 with government support.", borderColor: "#8B5CF6" },
      { icon: "TrendingUp", title: "₹25L–₹45L+ Senior Salaries", description: "High-paying healthcare career. Private practitioners and specialists earning ₹45L+ annually. Unlimited entrepreneurship potential.", borderColor: "#3B82F6" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Germany, UK, UAE for qualified Indian practitioners. International expansion growing rapidly.", borderColor: "#F59E0B" },
      { icon: "Award", title: "Holistic Patient-Centered Care", description: "Work with individualized treatment approach. Treat the person, not just the disease. Growing demand for minimal side-effect medicine.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5.5 Years (BHMS) + 1 Year Internship", color: "bg-purple-100 text-purple-700" },
      { label: "Entry Exam", detail: "NEET-UG, NCH Registration", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.5L–₹45L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "12-15%", label: "Market CAGR Through 2030", gradient: "from-purple-500 to-purple-600" },
      { value: "$23.3B", label: "AYUSH Market by 2027", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art of individualized healing through 'Like Cures Like.'",
        color: "#1E40AF",
        content: [
          "Homeopathy Definition: A system of alternative medicine based on principle of 'Similia Similibus Curentur' or 'Like Cures Like.' Believes that substance causing symptoms in healthy person can, in very small doses, treat similar symptoms in sick person.",
          "The Role: The Holistic Detective (unlike conventional doctors looking at just throat for cough, Homeopath looks at whole person—dreams, favorite foods, personality), Individualized Treatment (two people with same flu get different medicines because personalities different), Gentle Healing (use highly diluted natural substances from plants, minerals, animals to trigger body's own healing).",
          "What They Do: Conduct extensive case-taking interviews, analyze patient symptoms and personality, use Repertory to find matching remedies, decide potency of medicine, dispense sugar globules medicated with remedy, monitor patient progress, educate on lifestyle.",
          "Why It Matters: India has largest number of homeopathic practitioners in world. People increasingly looking for treatments with minimal side effects. Homeopathy become primary choice for chronic conditions like asthma, arthritis, lifestyle-related stress.",
          "The Scope: Work in government AYUSH hospitals, private clinics, homeopathic pharmaceutical companies, research councils, or build thriving private practice.",
          "The Impact: You're not just treating disease—you're treating the whole person. You're helping people find gentle, natural healing without side effects. You're restoring balance to body and mind."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Patient Listener",
        icon: "Clock",
        description: "Real workflow of a homeopathic practitioner.",
        color: "#3B82F6",
        content: [
          "8:30 AM - Preparing the Mind: Day begins at clinic. Don't just check equipment—prepare to listen. In Homeopathy, most important tool isn't stethoscope—it's ability to observe.",
          "10:00 AM - The Deep Dive: First patient is 10-year-old with chronic skin rashes. Spend 45 minutes talking to him and parents. Find out he's very shy, loves sweets, feels worse in evening. This 'case-taking' is like solving puzzle where every small detail matters.",
          "1:00 PM - The Study of Materia Medica: Lunch break often spent referring to 'Materia Medica'—encyclopedia of homeopathic medicines. Compare patient's symptoms with hundreds of remedies to find perfect match (the Simillimum).",
          "4:00 PM - Digital Consultation: Log onto laptop. Thanks to Tele-Homeopathy, have patient from Dubai. Guide them through symptoms over video call. Coordinate with local pharmacy there or ship medicines from clinic.",
          "7:30 PM - Closing the Day: Wrap up after seeing 15–20 patients. Some are follow-ups where 'magic white pills' started working. Seeing their smiles makes long hours of study worth it."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Homeopath's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Patience of a Monk (case-taking can take hour per patient—must love listening), Observational Skills (notice slight change in person's voice or nervous habit), Analytical Mind (synthesize hundreds of symptoms into one single remedy), Empathy (treating person, not just disease).",
          "Soft Skills: Active Listening (hear what someone isn't saying), Communication (explain complex concepts simply), Problem-Solving (match symptoms to remedies creatively), Patience (work with chronic conditions requiring time).",
          "Hard Skills: Deep knowledge of Materia Medica (homeopathic medicines), Understanding of Repertorization (symptom indexing), Knowledge of Potentization (medicine strength), Clinical observation skills, Diagnostic expertise.",
          "The Self-Check: Do you love listening to people's stories? Can you notice small details? Do you have patience for long consultations? If yes, you have the Homeopath's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Homeopathic Workflow",
        icon: "Briefcase",
        description: "The complete homeopathic practice cycle.",
        color: "#3B82F6",
        content: [
          "Case-Taking: Extensive interviewing of patient. Understanding physical symptoms, mental state, personality, lifestyle, and emotional history.",
          "Symptom Analysis: Organizing and prioritizing symptoms. Identifying characteristic and peculiar symptoms.",
          "Repertorization: Using 'Repertory' (index of symptoms) to narrow down potential medicines. Cross-referencing symptoms with remedy profiles.",
          "Materia Medica Study: Consulting Materia Medica to understand full picture of selected remedies. Finding best match (Simillimum).",
          "Potentization: Deciding strength (potency) of medicine. Choosing appropriate dilution level.",
          "Dispensing: Preparing small sugar globules medicated with liquid remedy. Providing clear instructions to patient.",
          "Follow-up: Monitoring patient progress. Adjusting remedy or potency as needed.",
          "Patient Education: Teaching about lifestyle, diet, and factors affecting healing."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Choose Science stream with Physics, Chemistry, and Biology (PCB). School Boards (Focus: Science). This is mandatory foundation.",
          "After Class 12: Appear for NEET-UG. Score well to get into Homeopathic Medical College. BHMS (Bachelor of Homoeopathic Medicine and Surgery) - 5.5 Years.",
          "After Graduation: Complete 1-year mandatory internship. Register with National Commission for Homoeopathy (NCH). You are now a licensed Homeopath!",
          "Specialization: Pursue MD (Hom) or PG Diploma for specialization. Entrance Exams: University-specific or AIAPGET.",
          "Top Institutions: National Institute of Homoeopathy (NIH) Kolkata, Nehru Homoeopathic Medical College Delhi, Government Homoeopathic Medical College Bangalore, Dr. D.Y. Patil Homoeopathic Medical College Pune.",
          "Specializations: Classical Homeopathy, Pediatric Homeopathy, Women's Health, Chronic Disease Management, Research."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresh BHMS, 0-2 years): ₹3.5L–₹6L per annum. Government hospitals or private clinics.",
          "Mid-Level (Senior Consultant, 3-8 years): ₹10L–₹18L per annum. Senior positions in hospitals or established private practice.",
          "Senior/HOD/Research Head (8-15 years): ₹25L–₹45L+ per annum. Leading departments or specialized practices.",
          "Private Practitioners: ₹45L+ per annum. Building successful private practice with loyal patient base.",
          "Market Size: Indian Homeopathy market projected to grow at CAGR of 12-15% through 2030. AYUSH market expected to reach $23.3B by 2027.",
          "Metro vs. Tier-2: Private practitioners in Metros often earn more, but Tier-2 cities have lower competition and higher trust in traditional systems.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Government AYUSH Hospitals, Private Clinics, Homeopathic Pharmaceutical Companies (SBL, Willmar Schwabe), Research Councils (CCRH), Medical Colleges.",
          "Top Cities: Kolkata (The Homeopathy Capital of India), Mumbai, Delhi, Bangalore, Chandigarh, Pune.",
          "Emerging Opportunities: Tele-Homeopathy platforms, Homeopathic Data Science, Quality Control in Pharma, Wellness Content Creation, Corporate wellness programs.",
          "International: High demand in Germany, UK, UAE for qualified Indian practitioners. Growing opportunities in Europe and Middle East.",
          "Freelancing: High potential for private practice, online global consulting, corporate wellness speaking, health content creation.",
          "Entrepreneurship: Starting own clinic, homeopathic pharmacy, wellness app, or multi-clinic chain."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹15,000–₹1.5L (Total 5.5 years). Very affordable but highly competitive entrance.",
          "Private Institutions: ₹5L–₹12L (Total). Better infrastructure and placement support.",
          "Hostel/Living: ₹1L–₹2L per year in major cities.",
          "Additional Costs: Clinic setup (Basic) ₹2L–₹5L, NEET coaching ₹50k–₹1L, professional equipment ₹20k–₹50k.",
          "Total Investment: Approximately ₹10L–₹20L for complete 5.5-year BHMS degree.",
          "ROI: With entry-level salaries of ₹3.5L–₹6L per annum, you can recover investment in 2-3 years. Private practice ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top homeopathy institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: National Institute of Homoeopathy (NIH) Kolkata, Nehru Homoeopathic Medical College Delhi, Government Homoeopathic Medical College Bangalore, Government Homoeopathic Medical College Mumbai.",
          "Private: Dr. D.Y. Patil Homoeopathic Medical College Pune, Parul University Vadodara, Bharati Vidyapeeth Pune, Sri Ramachandra Chennai, Amity University Noida.",
          "Geographic Diversity: Regional institutes available in almost every state under AYUSH ministry. North (Delhi), South (Bangalore), East (Kolkata), West (Mumbai).",
          "Specialization Centers: Classical Homeopathy centers, Pediatric Homeopathy institutes, Research centers in major metros.",
          "Note: Choose institutes with NCH recognition, strong faculty, modern facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-matric scholarships for SC/ST/OBC students in medical courses.",
          "AIPMST (Secondary): Dedicated pre-medical scholarship test for BHMS/BAMS aspirants.",
          "AYUSH Fellowship: For those pursuing MD or Ph.D. in Homeopathy.",
          "State Schemes: Various state-level scholarships for Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top NEET performers.",
          "Government Sponsorships: Ministry of AYUSH occasionally sponsors students for specialized training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "National Commission for Homoeopathy (NCH): Replaced Central Council of Homoeopathy. You must be registered here to practice legally.",
          "HMAI: Homoeopathic Medical Association of India. Best for networking and professional development.",
          "State Homoeopathy Board: Registration required in your state to practice as Homeopath.",
          "Specialized Certifications: Classical Homeopathy Specialist, Pediatric Homeopathy Specialist, Women's Health Specialist, Research Certification.",
          "International Certifications: ECCH (European Committee for Homeopathy) recognition for international practice.",
          "Continuing Education: Must complete annual CE credits to maintain NCH registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in homeopathy careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Private Practitioner, Medical Officer in Govt. Hospitals, Professor in Medical College, Clinic Manager.",
          "New-Age Careers: Homeopathic Data Scientist (analyzing patient data for research), Quality Control in Pharma, Wellness Content Creator, Tele-Homeopath, AI-Homeopathy Specialist.",
          "Entrepreneurship: Starting own clinic, homeopathic pharmacy, wellness app, multi-clinic chain, or health-tech startup.",
          "Freelancing: Online global consultant, corporate wellness speaker, health content creator, telemedicine platform.",
          "Specialized Roles: Classical Homeopathy Expert, Pediatric Homeopath, Women's Health Specialist, Research Scientist in Homeopathy."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of homeopathic practice.",
        color: "#1E40AF",
        content: [
          "The 'Slow' Myth: People often think Homeopathy is slow. You will spend lot of time educating patients that it works fast for acute issues if remedy is right.",
          "Initial Struggle: Building private practice takes 2–3 years of consistent work and 'word-of-mouth' reputation.",
          "Constant Study: Unlike some jobs, can never stop reading. New remedies discovered every year. Must stay updated.",
          "Skepticism: Face skepticism from conventional medicine practitioners. Must prove efficacy through results.",
          "Regulatory Challenges: NCH registration requirements and state-level regulations can be complex.",
          "Patient Compliance: Many patients don't follow through with treatment. Requires patience and motivation skills.",
          "Work-Life Balance: Long consultation hours and patient follow-ups can extend working hours.",
          "Competitive Field: Growing number of homeopaths in metros. Need to differentiate through specialization or unique services."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in homeopathy.",
        color: "#3B82F6",
        content: [
          "AI in Repertorization: AI software now helping Homeopaths cross-reference thousands of symptoms in seconds, making prescriptions more accurate.",
          "Integrated Medicine: Modern hospitals now hiring Homeopaths to work alongside Allopaths for chronic disease management.",
          "Personalized Wellness Apps: Direct-to-consumer apps for common ailments creating new jobs for 'Tele-Homeopaths.'",
          "Research Advancement: Growing scientific validation of homeopathic principles through rigorous clinical trials.",
          "Wearable Integration: Health monitoring devices integrated with homeopathic practice for better patient tracking.",
          "Global Standardization: WHO working on standardizing homeopathy practices globally, creating international opportunities.",
          "Precision Homeopathy: Combining genetic data with homeopathic principles for personalized treatment.",
          "Digital Transformation: Homeopathic practice management software and telemedicine platforms revolutionizing delivery."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Psychology: Read books on human behavior. Helps in understanding patient personalities and case-taking.",
          "Biology: Focus on Human Physiology and Plant Biology. Many medicines come from plants.",
          "Communication: Practice 'active listening'—hearing what someone isn't saying. Essential for case-taking.",
          "Volunteer: Visit local homeopathic clinic to see how 'case-taking' happens in real life.",
          "Research Interest: Read research papers on homeopathy. Understand evidence-based approach.",
          "Internship: Seek internships at homeopathic clinics during summer breaks.",
          "NEET Preparation: Start early preparation for NEET-UG. Join coaching if needed.",
          "Networking: Connect with homeopaths. Learn about career paths and specializations.",
          "Personal Development: Develop observation skills and empathy through volunteer work.",
          "Tech Skills: Learn basic homeopathic software and repertorization tools. Familiarize yourself with digital tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Homeopaths & Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. Kalyan Banerjee: Padma Shri recipient known for treating advanced cases of cancer and chronic diseases. Pioneer in classical homeopathy.",
          "Dr. Mukesh Batra: Founder of Dr. Batra's Healthcare, made Homeopathy global brand. Entrepreneur and innovator in homeopathic practice.",
          "Dr. Rajan Sankaran: Famous for 'Sensation Method,' his teachings followed by homeopaths worldwide. Leading educator and researcher.",
          "Dr. Pratibha Tanwar: Leading voice in classical homeopathy and women's health. Advocate for evidence-based homeopathy.",
          "Dr. Jawahar Shah: Pioneer in integrating technology and AI with homeopathy through software like 'Enlightenment.' Tech innovator.",
          "Dr. Suresh Gupta: Renowned homeopath known for treating chronic and complex cases. Expert in pediatric homeopathy.",
          "Dr. Anita Sharma: Leading homeopathic researcher and educator. Pioneer in integrating homeopathy with modern medicine."
        ]
      }
    ]
  },
  general_physician: {
    slug: "general_physician",
    badge: "🩺 The Guardian of First Contact for Class 10+",
    heading: "General Physician",
    subheading: "The detective solving mysteries hidden inside the human body. Be the all-rounder of medicine, the first port of call for every family, and leader of the medical frontline in India's 17-22% growing healthcare sector.",
    whyCards: [
      { icon: "Heart", title: "17-22% Healthcare CAGR", description: "Healthcare sector growing robustly. India will need 1.54 million additional doctors by 2030 to meet global standards.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "₹40L–₹80L+ Senior Salaries", description: "High-paying medical career. Hospital directors and specialists earning ₹1Cr+ annually. Private practice unlimited potential.", borderColor: "#3B82F6" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in UK (NHS), Middle East, USA. International medical exams (USMLE, PLAB) open global doors.", borderColor: "#F59E0B" },
      { icon: "Award", title: "Most Vital Healthcare Role", description: "Doctor-to-population ratio improving. GPs are the backbone of Indian healthcare reaching metros to remote villages.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5.5 Years (MBBS) + 3 Years (MD)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "NEET-UG, NEET-PG for specialization", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹6L–₹1Cr+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "17-22%", label: "Healthcare Sector CAGR", gradient: "from-red-500 to-red-600" },
      { value: "1.54M", label: "Additional Doctors Needed by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The detective solving mysteries hidden inside the human body.",
        color: "#1E40AF",
        content: [
          "General Physician Definition: A medical doctor who provides non-surgical care for wide range of health conditions. Unlike specialist who focuses only on one organ (like Cardiologist for heart), GP looks at whole person.",
          "The Role: Diagnosis and Treatment (identifying illnesses like infections, diabetes, hypertension and providing right medication), Preventive Medicine (advising on vaccinations, diet, lifestyle to prevent diseases), Management of Chronic Illness (helping patients live long, healthy lives despite conditions like asthma or thyroid), The Bridge to Specialists (deciding which specialist patient needs to see).",
          "What They Do: Take patient history, perform physical examinations, order investigations, interpret lab reports and scans, make differential diagnoses, prescribe treatments, manage follow-ups, educate patients on health.",
          "Why It Matters: India facing 'double burden' of diseases—traditional infections (like Malaria) and modern lifestyle diseases (like Diabetes). With improving doctor-to-population ratio, GP is most vital person ensuring healthcare reaches every corner from metros to remote villages.",
          "The Scope: Work in government hospitals, corporate hospital chains, diagnostic centers, pharmaceutical R&D, private clinics, or telemedicine platforms.",
          "The Impact: You're not just treating disease—you're the first line of defense for entire families. You're preventing illness, managing chronic conditions, and saving lives every single day."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Diagnostic Detective",
        icon: "Clock",
        description: "Real workflow of a general physician.",
        color: "#3B82F6",
        content: [
          "7:30 AM - The Hospital Rounds: Day begins not at desk, but at bedside. Walk through hospital wards checking on patients admitted night before. Review lab reports, adjust dosages, and most importantly, talk to families. A kind word often does as much healing as medicine itself.",
          "10:00 AM - The OPD Rush: Head to Outpatient Department (OPD). Waiting room is mosaic of India—worried grandmother with fever, young athlete with joint ache, tired office worker with high stress. Each consultation is race against time and test of focus. Listen intently, use stethoscope like finely tuned instrument.",
          "1:30 PM - A Quick Bite (Maybe): Lunch often luxury. Grab quick sandwich or cup of tea while discussing complex case with colleague in cafeteria. This 'informal learning' is where some best medical insights happen.",
          "3:00 PM - The Emergency Call: Just as return to clinic, phone buzzes. Patient in emergency room has sudden spike in blood pressure. Rush down, adrenaline kicks in, lead team to stabilize situation. In this job, must be ready for anything.",
          "7:00 PM - Constant Learning: Day doesn't end when clinic closes. Attend webinar on 'AI in Diagnostics' or read research paper about recent virus outbreak. Medicine changes every day—GP never stops being student."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Physician's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: High Empathy (genuinely care about people and want to help them), Cool Under Pressure (don't panic when emergency walks through door), Lifelong Learner (deep curiosity about science and human body), Resilient (can handle emotional weight of medical practice).",
          "Soft Skills: Communication (explain complex science in simple Hindi or English to 70-year-old), Decision Making (think fast and take responsibility for choices), Leadership (manage medical teams and patient care), Emotional Intelligence (understand patient fears and concerns).",
          "Hard Skills: Clinical Reasoning (ability to 'deduce' diagnosis from vague symptoms), Data Analysis (understanding blood tests, X-rays, ECG reports accurately), Diagnostic Expertise (interpret investigations correctly), Medical Knowledge (comprehensive understanding of diseases and treatments).",
          "The Self-Check: Do you genuinely care about helping people? Can you stay calm in emergencies? Do you love learning? If yes, you have the Physician's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Clinical Workflow",
        icon: "Briefcase",
        description: "The complete general physician practice cycle.",
        color: "#3B82F6",
        content: [
          "History Taking: Asking right questions to understand patient's background, symptoms, and medical history.",
          "Physical Examination: Using tools like stethoscopes and BP monitors to check vital signs and perform clinical assessment.",
          "Investigations: Ordering blood tests, scans, X-rays, or ECGs to confirm suspicions and gather diagnostic data.",
          "Differential Diagnosis: Ruling out multiple possibilities until correct diagnosis is found. Systematic approach to problem-solving.",
          "Prescription & Treatment: Providing treatment plan with appropriate medications and lifestyle modifications.",
          "Follow-up & Monitoring: Tracking patient recovery, adjusting treatment as needed, ensuring compliance.",
          "Patient Education: Teaching patients about their condition, medications, and preventive measures.",
          "Referral to Specialists: Deciding when patient needs specialist care and making appropriate referrals."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Choose Science Stream with Physics, Chemistry, and Biology (PCB). Start NEET-UG coaching. School Exams (Focus: Science).",
          "After Class 12: Appear for NEET-UG. Score high to secure seat in government or private medical college. MBBS (5.5 years including 1 year internship).",
          "After Graduation: Complete MBBS. Register with National Medical Commission (NMC). You are now a doctor!",
          "Specialization: For career growth, most doctors pursue MD in General Medicine. Appear for NEET-PG. MD/DNB (3 years).",
          "Top Institutions: AIIMS (New Delhi), Maulana Azad Medical College (Delhi), Armed Forces Medical College (Pune), JIPMER (Puducherry), CMC (Vellore), St. John's Medical College (Bangalore).",
          "Specializations: General Medicine, Internal Medicine, Emergency Medicine, Family Medicine, Geriatric Medicine."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresh MBBS, 0-2 years): ₹6L–₹10L per annum. Government hospitals or private clinics.",
          "Mid-Level (MD/Specialist, 3-8 years): ₹15L–₹30L per annum. Senior positions in hospitals or established private practice.",
          "Senior/Head of Department (8-15 years): ₹40L–₹80L per annum. Leading departments or specialized practices.",
          "Leadership/CXO (Hospital Director): ₹1Cr+ per annum. Managing large hospital networks.",
          "Market Size: Healthcare sector growing at robust 17-22% CAGR. India will require 1.54 million additional doctors by 2030.",
          "Metro vs. Tier-2: While Metro salaries higher, 'demand-to-doctor' ratio in Tier-2/Tier-3 cities better, often allowing private practitioners to earn more.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Government Hospitals (AIIMS, State Hospitals), Corporate Hospital Chains (Apollo, Fortis, Max), Diagnostic Centers, Pharmaceutical R&D, Medical Colleges.",
          "Top Cities: Delhi-NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata.",
          "Emerging Opportunities: Telemedicine (consulting patients via video calls from anywhere), Medical AI Consulting, Clinical Research, Health-tech startups.",
          "International: High demand in UK (NHS), Middle East, USA (requires exams like USMLE or PLAB). Growing opportunities in Gulf countries.",
          "Freelancing: High potential for private practice, medical consulting, telemedicine platforms, health content creation.",
          "Entrepreneurship: Starting own polyclinic, diagnostic lab, health-tech startup, or medical education platform."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹2,000–₹1L (total for whole MBBS course). Very affordable but highly competitive entrance.",
          "Private/Deemed Universities: ₹10L–₹25L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹1L–₹1.8L per year in major cities.",
          "Additional Costs: NEET coaching ₹50k–₹2L, medical equipment like stethoscopes ₹5k–₹15k, PG entrance coaching ₹50k–₹1L.",
          "Total Investment: Approximately ₹20L–₹50L for complete 8.5-year degree (5.5 years MBBS + 3 years MD).",
          "ROI: With entry-level salaries of ₹6L–₹10L per annum, you can recover investment in 3-5 years. Private practice ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top medical institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: AIIMS (New Delhi), Maulana Azad Medical College (Delhi), Armed Forces Medical College (Pune), JIPMER (Puducherry), KGMU (Lucknow), Madras Medical College (Chennai).",
          "Private: CMC (Vellore), Kasturba Medical College (Manipal), St. John's Medical College (Bangalore), Medical College Kolkata, Grant Medical College (Mumbai).",
          "Geographic Diversity: North (AIIMS Delhi, KGMU Lucknow), South (Madras Medical College Chennai, CMC Vellore), East (Medical College Kolkata), West (Grant Medical College Mumbai).",
          "Specialization Centers: Major metros have excellent MD programs. AIIMS institutes across India offer quality PG training.",
          "Note: Choose institutes with NMC recognition, strong faculty, modern facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric schemes for SC/ST/OBC students in medical courses.",
          "State Schemes: Bihar Student Credit Card, Mukhya Mantri Yuva Swavalamban Yojana (Gujarat), and similar state-level scholarships.",
          "Corporate: Tata Trusts Medical Scholarship, ONGC Scholarship (for EWS/SC/ST), TCS Scholarship.",
          "Institutional: Most top colleges like AIIMS offer merit-based stipends of ₹25,000+ per month during internships and PG.",
          "Merit-Based: Most institutes offer scholarships for top NEET performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized medical training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "National Medical Commission (NMC): Mandatory. You must register to get your 'License to Practice.' Essential for legal medical practice.",
          "Indian Medical Association (IMA): The largest voluntary organization for doctors in India. Best for networking and professional development.",
          "NBE (National Board of Examinations): Conducts exams for PG and Super-specialty degrees. Alternative to university MD/MS.",
          "State Medical Council: Registration required in your state to practice as physician.",
          "Specialized Certifications: Emergency Medicine Specialist, Family Medicine Specialist, Geriatric Medicine Specialist.",
          "International Certifications: USMLE (USA), PLAB (UK), FRCGP (UK), AMC (Australia) for international practice."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in medical careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Family Physician, Hospital Consultant, Medical Officer in government, Private practitioner, Medical College Professor.",
          "New-Age Careers: Medical AI Consultant (helping tech companies build health apps), Clinical Research Specialist, Tele-Physician, Health-tech Entrepreneur.",
          "Entrepreneurship: Starting own polyclinic, diagnostic lab, health-tech startup, medical education platform, or telemedicine service.",
          "Freelancing: Medical consulting, Corporate wellness programs, Health content creation, Telemedicine platforms.",
          "Specialized Roles: Emergency Medicine Specialist, Geriatric Care Specialist, Family Medicine Expert, Public Health Officer."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of medical practice.",
        color: "#1E40AF",
        content: [
          "High Stress: You deal with life-and-death situations every day. Emotional and mental toll can be significant.",
          "Long Hours: 24-hour shifts common during internship and residency. Work-life balance challenging.",
          "Emotional Burden: Crying after patient's loss is natural, but must learn to stay professional and keep moving.",
          "Safety Concerns: Unfortunately, doctors in India sometimes face violence from angry relatives. Industry actively fighting this.",
          "Continuous Learning: Medicine changes every day. Must stay updated on latest research and treatments.",
          "Regulatory Compliance: Must follow NMC guidelines and state-level regulations. Licensing requirements complex.",
          "Competitive Field: Growing number of doctors in metros. Need to differentiate through specialization or unique services.",
          "Financial Pressure: High education costs and long training period before earning well."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in general medicine.",
        color: "#3B82F6",
        content: [
          "AI Diagnostics: AI 'Assistants' will help physicians catch diseases in X-rays or blood tests with 99% accuracy.",
          "Personalized Medicine: Using DNA (Genetics) to choose exact medicine that works for your body.",
          "Robotic Surgery: While GPs don't perform surgery, will manage patients operated on by robots.",
          "Telemedicine Expansion: Remote consultations becoming mainstream. Reach patients anywhere in world.",
          "Wearable Monitoring: Real-time health monitoring through wearables integrated with medical practice.",
          "Precision Diagnostics: Advanced testing identifying diseases at earliest stages.",
          "Mental Health Integration: Growing focus on mental health as part of general medicine.",
          "Global Standardization: WHO working on standardizing medical practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Volunteer: Visit local clinic or hospital for week. See if you can handle smell of medicine and sight of blood.",
          "Biology & Chemistry: These are foundations. Pay extra attention to 'Human Physiology' and 'Organic Chemistry.'",
          "Read: Start with books like 'The Emperor of All Maladies' or watch medical documentaries to understand history of healing.",
          "Empathy: Practice active listening. Good doctor hears what patient isn't saying.",
          "NEET Preparation: Start early preparation for NEET-UG. Join coaching if needed.",
          "Research Interest: Read research papers on medicine. Understand evidence-based approach.",
          "Internship: Seek internships at hospitals during summer breaks.",
          "Networking: Connect with doctors. Learn about career paths and specializations.",
          "Personal Development: Develop resilience and emotional intelligence through volunteer work.",
          "Tech Skills: Learn basic medical software and health apps. Familiarize yourself with digital health tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Physicians & Medical Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. Naresh Trehan: World-renowned cardiovascular surgeon and founder of Medanta. Pioneer in cardiac care in India.",
          "Dr. Balbir Singh: Padma Shri awardee and pioneer in interventional cardiology. Leading cardiologist and educator.",
          "Dr. S.S. Badrinath: Founder of Sankara Nethralaya, revolutionized eye care in India. Visionary in healthcare delivery.",
          "Dr. Devi Shetty: Known as 'Henry Ford of Heart Surgery,' made high-quality cardiac care affordable for masses.",
          "Dr. Kamini Rao: Pioneer in assisted reproduction and infertility treatment in India. Leading reproductive medicine expert.",
          "Dr. Reddy Padma: Renowned general physician and public health advocate. Champion of preventive medicine.",
          "Dr. Harish Iyer: Leading emergency medicine specialist and medical educator. Pioneer in emergency care in India."
        ]
      }
    ]
  },
  dietician: {
    slug: "dietician",
    badge: "🥗 The Architect of Health Through Food for Class 10+",
    heading: "Dietician",
    subheading: "The most powerful medicine isn't a pill—it's the food on your plate. Master nutrition science to prevent disease, boost performance, and save lives in India's 15% CAGR wellness revolution.",
    whyCards: [
      { icon: "TrendingUp", title: "15% Market CAGR Through 2030", description: "Nutrition market exploding in India. Fitness revolution and geriatric care creating massive demand for professionals.", borderColor: "#10B981" },
      { icon: "Award", title: "₹18L–₹35L Senior Salaries", description: "High-paying healthcare career. Specialists in sports and critical care earning ₹40L–₹1Cr+ in health-tech and FMCG.", borderColor: "#3B82F6" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Middle East, Canada, Australia for licensed RDs. International expansion potential growing rapidly.", borderColor: "#F59E0B" },
      { icon: "Zap", title: "Digital Health Revolution", description: "Work with wellness apps, health-tech startups, and remote coaching. Content creation and AI integration opportunities.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (B.Sc.) + 2 Years (M.Sc.) + 6 Months Internship", color: "bg-green-100 text-green-700" },
      { label: "Entry Exam", detail: "CUET, State Entrance Exams, RD Exam", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.2L–₹1Cr+ per annum", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "15%", label: "Market CAGR Through 2030", gradient: "from-green-500 to-green-600" },
      { value: "₹1Cr+", label: "Leadership Salary Potential", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of how food and nutrition affect human health.",
        color: "#1E40AF",
        content: [
          "Dietician Definition: A healthcare professional who specializes in Dietetics—the science of how food and nutrition affect human health. Think of them as 'Food Scientists' who translate complex biochemistry into delicious, practical meal plans.",
          "The Role: Nutritional Assessment (analyze health markers like blood sugar or BMI to see what body is missing), Therapeutic Planning (design specific diets for medical conditions like diabetes, kidney disease, heart issues), Behavior Coaching (help people change relationship with food, making healthy eating permanent habit).",
          "What They Do: Conduct patient assessments, analyze lab tests and health markers, design personalized meal plans, educate patients on nutrition, counsel on behavior change, work with medical teams, create content, consult for food companies.",
          "Why It Matters: India facing 'double burden'—still fighting malnutrition while becoming diabetes capital of world. From high-tech startups to village health camps, dieticians are frontline warriors fighting lifestyle diseases.",
          "The Scope: Work in hospitals, wellness apps, food companies, sports academies, private clinics, health-tech startups, or build your own nutrition coaching business.",
          "The Impact: You're not just treating disease—you're teaching people to use food as medicine. You're preventing chronic illness and helping next generation grow up strong and healthy."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Nutrition Navigator",
        icon: "Clock",
        description: "Real workflow of a modern dietician.",
        color: "#3B82F6",
        content: [
          "8:30 AM - The Hospital Rounds: Day begins at multi-specialty hospital. Start with 'Patient Rounds' alongside doctors and nurses. In ICU, calculate exact grams of protein and fat for patient on feeding tube. In maternity ward, counsel new mother on best foods for her and baby.",
          "11:30 AM - The Clinic Consults: Move to private cabin for outpatient consultations. First client is 15-year-old state-level swimmer. Don't just tell him to 'eat healthy'—design 'Pre-Race Fueling Plan' with right timing for carbohydrates to ensure he doesn't tire in last lap.",
          "2:00 PM - The Content Sprint: As modern dietician, influence goes beyond clinic. Spend hour filming 'Healthy Tiffin Ideas' reel for 50,000 Instagram followers or writing blog post for health-tech app like HealthifyMe.",
          "4:30 PM - The Product Review: Meet with food startup developing new 'sugar-free' snack. Analyze ingredient list, pointing out that 'maltodextrin' is just another name for sugar. You are gatekeeper of truth in confusing food labels.",
          "7:00 PM - The Personal Touch: Finish day with few remote Zoom calls for clients in different time zones—one in Dubai, another in London. Head home knowing today you helped dozen people feel better in their own skin."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Dietician's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Empathy (listen to people's struggles with food without judgment), Analytical Mind (enjoy looking at data and finding patterns in health reports), Patience (body changes take time—need to be cheerleader for long haul), Passion for Health (genuinely care about helping people live better).",
          "Soft Skills: Communication (explain 'metabolic pathways' in way 10-year-old understands), Motivational Interviewing (help client find their own reason to stay healthy), Problem-Solving (creative solutions for different dietary challenges), Leadership (guide patients through lifestyle change).",
          "Hard Skills: Biology & Chemistry (deep love for how molecules turn into energy), Culinary Knowledge (need to know how to cook—if food doesn't taste good, no one follows plan), Data Analysis (interpret lab tests and health markers), Nutrition Science (understand biochemistry of digestion and metabolism).",
          "The Self-Check: Do you love cooking and nutrition? Can you motivate people without judgment? Do you enjoy analyzing data? If yes, you have the Dietician's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Nutrition Care Process",
        icon: "Briefcase",
        description: "The complete nutrition care workflow.",
        color: "#3B82F6",
        content: [
          "Assessment: Gathering data (diet history, lab tests, anthropometrics, lifestyle factors). Understanding patient's complete health picture.",
          "Diagnosis: Identifying specific nutrition problem (e.g., 'Inadequate protein intake' or 'Excessive sodium consumption'). Using standardized terminology.",
          "Intervention: Creating personalized meal plan and education strategy. Designing recipes and meal timing. Teaching cooking techniques.",
          "Monitoring & Evaluation: Checking back in two weeks to see if plan worked. Adjusting based on results and patient feedback.",
          "Patient Education: Teaching about food groups, portion sizes, label reading, and healthy cooking methods.",
          "Collaboration: Working with doctors, nurses, and other healthcare professionals for integrated care.",
          "Documentation: Maintaining detailed patient records and progress notes.",
          "Counseling: Providing behavioral support and motivation for lifestyle change."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Choose Science Stream (Physics, Chemistry, Biology) for Class 11 & 12. Board Exams (Focus: Science). This is mandatory foundation.",
          "After Class 12 (Science Stream): Pursue 3-year B.Sc. in Nutrition & Dietetics or Home Science. Entrance Exams: CUET or State Entrance Exams.",
          "After Graduation: Complete Post-Graduate Diploma (PGD) or M.Sc. in Food & Nutrition. Duration: 2 years. University Entrance Exams.",
          "Professional Finish: Complete 6-month internship in IDA-recognized hospital. Clear RD (Registered Dietician) Exam. This is gold standard for clinical practice.",
          "Top Institutions: Lady Irwin College (Delhi), Institute of Home Economics (Delhi), National Institute of Nutrition (Hyderabad), Christian Medical College (Vellore), Manipal Academy.",
          "Specializations: Clinical Nutrition, Sports Nutrition, Community Nutrition, Pediatric Nutrition, Geriatric Nutrition, Nutrigenomics."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Hospital/Gym, 0-2 years): ₹3.2L–₹6L per annum. Government or private clinic positions.",
          "Mid-Level (5-10 years): ₹8L–₹15L per annum. Senior positions in hospitals or established wellness centers.",
          "Senior/Specialist (Sports/Critical Care, 8+ years): ₹18L–₹35L per annum. Leading departments or specialized practices.",
          "Leadership/CXO (Health-tech/FMCG): ₹40L–₹1Cr+ per annum. Managing nutrition programs across organizations.",
          "Market Size: Growing at CAGR of 15% through 2030, driven by fitness revolution and rising geriatric care needs.",
          "Metro vs. Tier-2: Salaries in Tier-1 cities (Bangalore, Mumbai, Delhi) 30% higher due to concentration of corporate wellness and tech startups.",
          "Growth Trajectory: Entry to Senior Specialist takes roughly 8–12 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Hospitals (Max, Apollo, Fortis), Wellness Apps (HealthifyMe, Cult.fit), Food Companies (Nestlé, Danone), Sports Academies (JSW Sports), Corporate Wellness Programs.",
          "Top Cities: Bangalore (Health-tech hub), Delhi-NCR (Public Health/Policy), Mumbai (Celebrity/Sports), Hyderabad (Research), Pune.",
          "Emerging Opportunities: Virtual Coaching, Health Content Writing, Nutrigenomics Consulting, Food Labelling Consulting, AI-integrated nutrition apps.",
          "International: Licensed RDs have high demand in Middle East, Canada, Australia. Growing opportunities in Gulf countries.",
          "Freelancing: High potential for private practice, meal subscription services, online coaching, health blogging/influencing.",
          "Entrepreneurship: Starting specialized meal subscription service, private wellness clinic, nutrition app, or food product company."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹5,000–₹40,000 per year. Very affordable but highly competitive entrance.",
          "Private Universities: ₹1.5L–₹4L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹80,000–₹1.5L per year in major cities.",
          "Additional Costs: IDA Membership ₹5,000–₹10,000, RD Exam fees ₹5,000–₹10,000, internship costs ₹20,000–₹50,000.",
          "Total Investment: Approximately ₹10L–₹20L for complete 5.5-year degree (3 years UG + 2 years PG + 6 months internship).",
          "ROI: With entry-level salaries of ₹3.2L–₹6L per annum, you can recover investment in 2-3 years. Private practice ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top nutrition institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: Lady Irwin College (Delhi), Institute of Home Economics (Delhi), National Institute of Nutrition (Hyderabad), SNDT Women's University (Mumbai).",
          "Private: Christian Medical College (Vellore), Manipal Academy of Higher Education, Amity University, Lovely Professional University (Punjab), Sri Ramachandra (Chennai).",
          "Online: IGNOU offers recognized PG Diplomas (useful for working professionals). Flexible learning options.",
          "Specialization Centers: Sports nutrition institutes in major metros, Clinical nutrition centers in hospitals, Research institutes.",
          "Note: Choose institutes with IDA recognition, strong faculty, modern lab facilities, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric and Merit-cum-Means scholarships for eligible students.",
          "Institutional: Manav Rachna (MRNAT) and LPU (LPU-NEST) offer up to 100% tuition waivers for top entrance scorers.",
          "State Schemes: Various state-level scholarships for Science students from EWS/SC/ST categories.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized nutrition training.",
          "IDA Scholarships: Indian Dietetic Association offers scholarships for deserving students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "IDA (Indian Dietetic Association): The premier body. Becoming Registered Dietician (RD) through IDA is gold standard for clinical practice.",
          "IAPEN: Indian Association for Parenteral and Enteral Nutrition (focuses on critical care nutrition).",
          "NSI: Nutrition Society of India (focuses on research and public health nutrition).",
          "RD Exam: Mandatory for clinical practice. Requires B.Sc. in Nutrition and 6-month internship.",
          "Specialized Certifications: Sports Nutrition Specialist, Pediatric Nutrition Specialist, Geriatric Nutrition Specialist, Nutrigenomics Specialist.",
          "International Certifications: ISSN (International Society of Sports Nutrition), ASPEN (American Society for Parenteral and Enteral Nutrition)."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in nutrition careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Clinical Dietician in hospitals, Community Nutritionist, Diabetic Educator, School Nutritionist, Geriatric Nutritionist.",
          "New-Age Careers: Nutrigenomics Specialist (diet based on DNA), Food Labelling Consultant, Wellness AI Prompt Engineer, Teledietician, Health Content Creator.",
          "Entrepreneurship: Running specialized meal subscription service, private wellness clinic, nutrition app, food product company, online coaching platform.",
          "Freelancing: Private nutrition coaching, Corporate wellness consulting, Health blogging/influencing, Content creation for health apps.",
          "Specialized Roles: Sports Nutritionist for athletes, Critical Care Nutritionist, Research Scientist in nutrition, Product Developer for food companies."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of nutrition practice.",
        color: "#1E40AF",
        content: [
          "Initial Pay: Entry-level hospital salaries can be low (₹15k–₹25k per month) compared to education required.",
          "Fad Diets: You will spend 50% of time debunking 'miracle weight loss' myths clients find on TikTok/Instagram.",
          "Emotional Burnout: Watching patients struggle with chronic illness can be taxing. Requires emotional resilience.",
          "Competitive Field: Growing number of nutritionists in metros. Need to differentiate through specialization or unique services.",
          "Regulatory Challenges: RD registration requirements and state-level regulations can be complex.",
          "Patient Compliance: Many patients don't follow through with meal plans. Requires patience and motivation skills.",
          "Work-Life Balance: Client consultations and content creation can extend working hours.",
          "Continuous Learning: Must stay updated on latest nutrition research and dietary guidelines."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in nutrition science.",
        color: "#3B82F6",
        content: [
          "Nutrigenomics: Designing diets based on person's genetic code. Personalized nutrition at DNA level.",
          "AI Integration: Dieticians will use AI to automate calorie counting, allowing 100% focus on behavioral coaching.",
          "Gut Health: Massive focus on 'Microbiome' and how gut bacteria affect mental health and immunity.",
          "Precision Nutrition: Combining genetic data, health markers, and lifestyle for truly personalized plans.",
          "Wearable Integration: Real-time monitoring of nutrition and health through wearable devices.",
          "Plant-Based Revolution: Growing demand for plant-based nutrition specialists as world shifts toward sustainable eating.",
          "Mental Health Nutrition: Focus on how diet affects mental health, anxiety, and depression.",
          "Global Standardization: WHO working on standardizing nutrition practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Volunteer: Ask school canteen manager about hygiene and nutrition standards. Understand institutional food systems.",
          "Master Biology: Pay extra attention to 'Digestion' and 'Human Physiology' chapters. Build strong foundation.",
          "Blogging: Start small blog or page reviewing 'Healthy Snacks' found in supermarket. Build audience and credibility.",
          "Cooking: Learn to make 5 healthy, balanced meals from scratch. Understand food preparation and nutrition.",
          "Research Interest: Read research papers on nutrition. Understand evidence-based approach.",
          "Internship: Seek internships at hospitals or wellness centers during summer breaks.",
          "CUET Preparation: Start early preparation for CUET or state entrance exams. Join coaching if needed.",
          "Networking: Connect with dieticians and nutritionists. Learn about career paths and specializations.",
          "Personal Development: Develop your own healthy eating habits. Practice what you preach.",
          "Tech Skills: Learn basic nutrition software and health apps. Familiarize yourself with digital nutrition tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Dieticians & Nutritionists",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Rujuta Diwekar: Celebrity nutritionist who brought traditional Indian foods like Ghee and Mango back into mainstream. Author and influencer with millions of followers.",
          "Dr. V. Shanta (NIN): Legendary figure in public health nutrition who shaped India's early nutrition policies. Pioneer in community nutrition.",
          "Pooja Makhija: Clinical nutritionist and author known for 'Eat Delete' philosophy and celebrity clientele. Leading voice in nutrition education.",
          "Ishi Khosla: Pioneer in 'Functional Nutrition' and founder of Whole Foods, focusing on food allergies and gut health. Innovator in personalized nutrition.",
          "Luke Coutinho: Global holistic lifestyle coach specializing in integrative and preventive medicine. Known for celebrity and athlete coaching.",
          "Dr. Priya Sharma: Leading sports nutritionist working with Indian athletes. Pioneer in sports nutrition in India.",
          "Neha Chandna: Renowned clinical nutritionist and author. Known for evidence-based nutrition education and corporate wellness programs."
        ]
      }
    ]
  },
  dentist: {
    slug: "dentist",
    badge: "😁 The Architect of Smiles for Class 10+",
    heading: "Dentist",
    subheading: "Part doctor, part engineer, part artist. Take away pain in minutes and redesign smiles. Become a high-tech engineer of the human face in India's 8% growing dental market.",
    whyCards: [
      { icon: "Smile", title: "8% Market CAGR Annually", description: "Indian Dental Services market valued at $2.5B in 2026. Growing at 8% CAGR with massive demand for professionals.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹18L–₹50L+ Senior Salaries", description: "High-paying healthcare career. Specialists and entrepreneurs earning ₹50L+ annually. Private practice potential unlimited.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Middle East, UK, Australia. Dentist-to-population ratio in India is 1:10,000 vs WHO recommendation of 1:2,000.", borderColor: "#F59E0B" },
      { icon: "Award", title: "Blend of Science & Art", description: "Work with cutting-edge CAD/CAM, 3D printing, and AI diagnostics. Create perfect smiles using precision and creativity.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5 Years (BDS) + 3 Years (MDS)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET-UG, NEET-MDS for specialization", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹3L–₹50L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "8%", label: "Market CAGR Annually", gradient: "from-blue-500 to-blue-600" },
      { value: "$2.5B", label: "Indian Dental Market 2026", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science, surgery, and art of oral health.",
        color: "#1E40AF",
        content: [
          "Dentistry Definition: The branch of medicine focused on the study, diagnosis, prevention, and treatment of diseases of the oral cavity (mouth), including teeth, gums, and related structures.",
          "The Role: The Clinical Detective (use X-rays and 3D scans to find hidden problems like cavities or bone loss), The Surgeon (perform complex procedures like root canals, dental implants, corrective jaw surgeries), The Artist (use cosmetic dentistry with veneers and whitening to create perfect smiles), The Public Health Guardian (educate community on how oral health links to heart disease and diabetes).",
          "What They Do: Examine teeth and gums, diagnose using digital X-rays and intraoral cameras, administer anesthesia, perform treatments (fillings, extractions, root canals), place implants, design crowns using CAD/CAM, perform cosmetic procedures, educate patients on preventive care.",
          "Why It Matters: India has one of the highest rates of oral cancer and dental cavities globally. Dentist-to-population ratio is 1:10,000 while WHO recommends 1:2,000. National Oral Health Programme creating massive demand.",
          "The Scope: Work in private clinics, corporate dental chains, government hospitals, pharmaceutical companies, dental product companies, or start your own practice.",
          "The Impact: You're not just treating teeth—you're restoring confidence, preventing serious diseases, and improving quality of life. A perfect smile changes how people see themselves."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Precision Sculptor",
        icon: "Clock",
        description: "Real workflow of a modern dentist.",
        color: "#3B82F6",
        content: [
          "9:00 AM - The Sterile Start: Day begins at your clinic, 'The Smile Hub.' First 30 minutes spent ensuring autoclave has sterilized every instrument to 100% perfection. Assistant briefs you on eight appointments scheduled.",
          "10:30 AM - The Emergency Rescue: 14-year-old boy arrives with broken tooth from cricket match. He's in pain and worried about his look. Use high-tech 'Composite Bonding' material, skillfully sculpting it to match original tooth perfectly. He walks out smiling, pain-free.",
          "1:30 PM - The Digital Blueprint: After quick lunch, sit at computer using CAD/CAM software to design digital model for patient's dental crown. Send file to 3D printer, which will 'mill' perfect ceramic tooth by tomorrow.",
          "4:00 PM - The Complex Case: Afternoon dedicated to elderly patient getting dental implants. Requires surgical precision. Use Cone Beam CT (CBCT) scans to see exact depth of jawbone before placing titanium screw.",
          "7:00 PM - The Community Connect: Before closing, record 60-second 'Reel' for clinic's social media teaching teenagers about dangers of vaping on gum health. Head home satisfied blending science and art all day."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Dentist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Manual Dexterity (work with tiny tools in very small space), Patience & Empathy (most patients scared of dentist—be calm voice making them feel safe), Detail-Oriented (0.1mm difference in filling causes discomfort—obsessed with precision), Scientist-Artist Hybrid (understand biology and chemistry but have eye for aesthetics and facial symmetry).",
          "Soft Skills: Communication (explain complex surgeries to scared patients), Problem-Solving (creative solutions for different dental challenges), Empathy (understand patient anxiety), Leadership (manage dental team and patient care).",
          "Hard Skills: Fine motor control (precision with small instruments), Understanding of dental anatomy and physiology, Diagnostic expertise (interpret X-rays and scans), Technical proficiency (CAD/CAM software, 3D printing), Surgical skills (for complex procedures).",
          "The Self-Check: Do you enjoy activities like painting, model-building, or playing instruments? Can you stay calm under pressure? Do you have eye for aesthetics? If yes, you have the Dentist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Treatment Cycle",
        icon: "Briefcase",
        description: "The complete dental practice workflow.",
        color: "#3B82F6",
        content: [
          "Examination: Checking teeth, gums, and tongue for any abnormalities. Visual inspection and palpation.",
          "Diagnostics: Using digital X-rays or intraoral cameras to see what naked eye cannot. CBCT scans for complex cases.",
          "Anesthesia: Administering local numbing agents so patient feels zero pain. Ensuring patient comfort and safety.",
          "Treatment: Performing necessary repair (filling, extraction, root canal, implant placement, crown fitting).",
          "Cosmetic Enhancement: Using veneers, whitening, bonding to create aesthetically pleasing results.",
          "Follow-up: Ensuring healing process on track. Teaching preventive care and oral hygiene.",
          "Patient Education: Explaining procedures, discussing treatment options, teaching proper brushing and flossing.",
          "Documentation: Maintaining detailed patient records and treatment plans."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Choose Science Stream (Physics, Chemistry, Biology) for Class 11 & 12. Board Exams (Focus: Science). This is mandatory foundation.",
          "After Class 12 (Science Stream): Clear NEET-UG national entrance exam. Pursue BDS (Bachelor of Dental Surgery) - 5 Years (4 years academic study + 1 year mandatory rotatory internship).",
          "After Graduation: Clear NEET-MDS or INI-CET for specialization. Pursue MDS (Master of Dental Surgery) - 3 Years.",
          "Specializations (MDS): Orthodontics (braces and teeth alignment), Endodontics (root canals), Oral Surgery (complex extractions and implants), Prosthodontics (implants and dentures), Periodontics (gum disease), Pedodontics (children's dentistry).",
          "Top Institutions: Maulana Azad Institute (MAIDS) Delhi, KGMU Lucknow, Govt Dental College Mumbai, Manipal College of Dental Sciences, Saveetha Dental College Chennai, AB Shetty Institute Mangalore."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (Fresher, 0-2 years): ₹3.0L–₹6.0L per annum. Government or private clinic positions.",
          "Mid-Level (3-7 years): ₹8.0L–₹15.0L per annum. Senior positions in established clinics or corporate chains.",
          "Senior/Specialist (8+ years): ₹18.0L–₹50.0L+ per annum. Leading departments or specialized practices.",
          "Entrepreneurs/Private Practice: ₹50L+ per annum. Building successful dental brands and multi-clinic chains.",
          "Market Size: Indian Dental Services market valued at $2.5 Billion in 2026, growing at 8% CAGR.",
          "Metro vs. Tier-2: Salaries 20-30% higher in Metro cities like Delhi and Bangalore. Competition lower in Tier-2 cities.",
          "Demand: Dentist-to-population ratio 1:10,000 vs WHO recommendation 1:2,000. Massive shortage creating opportunities."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Private Clinics, Corporate Dental Chains (Clove Dental, Apollo White), Government Hospitals (Army Dental Corps, Railways), Pharmaceutical/Dental Product companies, Dental labs.",
          "Top Cities: Bangalore (Health-tech hub), Mumbai, Delhi-NCR, Hyderabad, Pune, Chennai.",
          "Gig Economy: High potential for freelancing as consultant specialist (e.g., Orthodontist visiting 10 different clinics weekly).",
          "International: High demand in Middle East, UK, Australia (requires clearing local licensing exams like ORE or ADC).",
          "Emerging Opportunities: Teledentistry platforms, AI-dental analysis, clear aligner consulting, forensic odontology, dental supply business.",
          "Entrepreneurship: Starting specialized clinic, dental supply business, oral-care startup, or multi-clinic chain."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹15,000–₹1.0L per year. Very affordable but highly competitive entrance.",
          "Private Colleges: ₹3.0L–₹12.0L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹80,000–₹1.5L per year in major cities.",
          "Dental Kit: Must buy own instruments in 2nd/3rd year. Handpieces and tools cost ₹50,000–₹1.5L.",
          "Additional Costs: NEET coaching ₹50,000–₹1,00,000, specialization courses ₹20,000–₹50,000.",
          "Total Investment: Approximately ₹20L–₹40L for complete 5-year BDS degree.",
          "ROI: With entry-level salaries of ₹3L–₹6L per annum, you can recover investment in 4-5 years. Private practice ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top dental institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: Maulana Azad Institute (MAIDS) Delhi, KGMU Lucknow, Govt Dental College Mumbai, Dr. R. Ahmed Dental College Kolkata.",
          "Private: Manipal College of Dental Sciences Manipal, Saveetha Dental College Chennai, AB Shetty Institute Mangalore, Sri Ramachandra Chennai, Amity University Noida.",
          "Geographic Diversity: North (MAIDS Delhi), South (Saveetha Chennai), West (Nair Hospital Mumbai), East (Dr. R. Ahmed Kolkata).",
          "Specialization Centers: Orthodontic centers in major metros, Implant training institutes, Cosmetic dentistry centers.",
          "Note: Choose institutes with DCI recognition, strong faculty, modern equipment, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "Sensodyne IDA Shining Star Scholarship: For 1st-year BDS students in govt colleges (₹50,000/year for 4 years).",
          "Prime Minister's Scholarship (PMSS): For wards of Ex-servicemen.",
          "NSP (National Scholarship Portal): Post-Matric scholarships for SC/ST/OBC and Minority students.",
          "State Scholarships: MOMA (Minority Scholarship) or various State Merit Scholarships.",
          "Merit-Based: Most institutes offer scholarships for top NEET performers.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized training."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "Dental Council of India (DCI): The regulatory body. You must register here to practice legally.",
          "Indian Dental Association (IDA): The largest professional body for networking and continuing education.",
          "State Dental Council: Registration required in your state to practice as dentist.",
          "Specialized Certifications: Orthodontic Specialist, Endodontic Specialist, Oral Surgery Specialist, Cosmetic Dentistry Certification.",
          "International Certifications: ORE (Overseas Dental Examination) for USA, ADC (Australian Dental Council) for Australia.",
          "Continuing Education: Must complete annual CE credits to maintain DCI registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in dental careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: General Dentist, Oral Surgeon, Orthodontist, Prosthodontist, Periodontist, Pediatric Dentist, Academic Professor.",
          "New-Age Careers: AI-Dental Analyst (training AI to read X-rays), Clear Aligner Consultant, Forensic Odontologist (solving crimes using teeth), Teledentistry Specialist.",
          "Entrepreneurship: Starting specialized clinic, dental supply business, oral-care startup, multi-clinic chain, dental product company.",
          "Freelancing: Consultant specialist visiting multiple clinics, Corporate dental health programs, Dental health blogger/influencer.",
          "Specialized Roles: Cosmetic Dentistry Specialist, Implant Surgeon, Dental Researcher, Dental Product Developer."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of dental practice.",
        color: "#1E40AF",
        content: [
          "Saturated Metros: Big cities have many clinics. Starting new practice requires smart marketing and differentiation.",
          "Physical Strain: Hours of bending over patients lead to back and neck issues. Ergonomics is critical.",
          "Capital Heavy: Setting up private clinic with modern tech costs ₹15L–₹40L. Significant initial investment required.",
          "Patient Anxiety: Many patients fear dentists. Requires patience and excellent communication skills.",
          "Competitive Field: Growing number of dentists in metros. Need to differentiate through specialization or unique services.",
          "Regulatory Compliance: Must stay updated on DCI regulations and state-level requirements.",
          "Work-Life Balance: Emergency cases and patient follow-ups can extend working hours.",
          "Continuous Learning: Must stay updated on latest technology and treatment techniques."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in dentistry.",
        color: "#3B82F6",
        content: [
          "AI Diagnostics: AI will analyze X-rays instantly, spotting tiny cavities that humans might miss.",
          "Teledentistry: Virtual consultations for initial diagnosis, especially for rural India.",
          "3D Bio-printing: In future, we may be able to 'print' living gum tissue or bone for transplants.",
          "Clear Aligner Revolution: Invisible braces becoming mainstream. High demand for clear aligner consultants.",
          "Laser Dentistry: Minimally invasive laser treatments replacing traditional drilling.",
          "Personalized Dentistry: Genetic testing combined with dental treatment for personalized care.",
          "Robotic Surgery: Robotic-assisted implant placement for precision and consistency.",
          "Wearable Monitoring: Smart toothbrushes and wearables monitoring oral health in real-time."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Fine Motor Skills: Take up hobbies like sketching, clay modeling, or playing guitar to train your fingers.",
          "Biology & Physics: Focus on Optics (for imaging) and Human Physiology. Build strong foundation.",
          "Communication: Join debate club. You'll need to explain complex surgeries to scared patients.",
          "Volunteer: Volunteer at dental clinics or hospitals. Gain practical exposure to dental procedures.",
          "Research Interest: Read research papers on dentistry. Understand evidence-based approach.",
          "Internship: Seek internships at dental clinics during summer breaks.",
          "NEET Preparation: Start early preparation for NEET-UG. Join coaching if needed.",
          "Networking: Connect with dentists. Learn about career paths and specializations.",
          "Personal Development: Develop patience and empathy through volunteer work.",
          "Tech Skills: Learn basic CAD software. Familiarize yourself with digital dentistry tools."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Dentists & Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Dr. R. Ahmed: Known as the 'Father of Modern Dentistry in India.' Founded first dental college in Kolkata. Pioneer in dental education.",
          "Dr. Mahesh Verma: Principal of MAIDS Delhi. Recipient of Padma Shri for contributions to dental education. Leading figure in Indian dentistry.",
          "Dr. Sandesh Mayekar: Pioneer in aesthetic and cosmetic dentistry in India. Often called the 'Dentist to the Stars.' Known for celebrity smile makeovers.",
          "Dr. Ashith Acharya: One of India's foremost Forensic Odontologists. Famous for role in solving high-profile criminal cases using dental evidence.",
          "Dr. Priya Sharma: Leading implantologist and founder of successful multi-clinic dental chain. Innovator in digital dentistry.",
          "Dr. Vikram Bhat: Renowned orthodontist and educator. Pioneer in clear aligner technology adoption in India.",
          "Dr. Neha Kapoor: Teledentistry innovator bringing dental care to rural India through digital platforms."
        ]
      }
    ]
  },
  audiologist: {
    slug: "audiologist",
    badge: "🔊 The Scientist of Sound and Balance for Class 10+",
    heading: "Audiologist",
    subheading: "Switch the sound back on. Master the science of hearing and balance. Become a life-changer in India's fastest-growing healthcare field with 7.5% CAGR.",
    whyCards: [
      { icon: "Volume2", title: "7.5% Market CAGR Through 2030", description: "Audiology market exploding in India. Universal Newborn Hearing Screening creating massive demand for professionals.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "₹30L–₹45L Senior Salaries", description: "High-paying healthcare career. Specialists earning ₹60L+ in hospital chains and private practice.", borderColor: "#10B981" },
      { icon: "Globe", title: "Global Opportunities", description: "Huge demand in USA, Australia, Middle East for RCI-registered Indian audiologists. International expansion potential.", borderColor: "#F59E0B" },
      { icon: "Award", title: "High-Tech Healthcare", description: "Work with AI-driven hearing aids, cochlear implants, and advanced diagnostic equipment. Future-focused career.", borderColor: "#8B5CF6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (BASLP) + 1 Year Internship", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET, AIISH Entrance, University Exams", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹45L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "7.5%", label: "Market CAGR Through 2030", gradient: "from-blue-500 to-blue-600" },
      { value: "₹45L+", label: "Senior Specialist Salary", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of hearing and balance—switching sound back on.",
        color: "#1E40AF",
        content: [
          "Audiology Definition: The healthcare profession dedicated to the science of hearing and balance. It's not just about 'ears'—it's about how the brain processes sound and how our body maintains stability.",
          "The Role: The Detective (use advanced technology to find why someone can't hear or feels dizzy), The Tech Specialist (program sophisticated 'ear-computers' like digital hearing aids and cochlear implants), The Life-Changer (work with newborns born deaf and elderly people to keep them connected).",
          "What They Do: Conduct diagnostic testing using audiometers and computers, assess hearing thresholds, determine if issue is in outer/middle/inner ear, recommend hearing aids or cochlear implants, program devices, perform aural rehabilitation, train the brain to recognize new sounds.",
          "Why It Matters: India has one of the highest numbers of people with hearing loss globally. Government's 'Universal Newborn Hearing Screening' creating explosive demand for professionals who can catch hearing issues early.",
          "The Scope: Work in multi-specialty hospitals, hearing aid clinics, rehabilitation centers, schools for hearing impaired, private practice, or tele-audiology platforms.",
          "The Impact: You're not just treating ears—you're restoring connection to the world. You're giving people back their ability to hear loved ones, enjoy music, and participate fully in life."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Sound Architect",
        icon: "Clock",
        description: "Real workflow of an audiologist in modern healthcare.",
        color: "#3B82F6",
        content: [
          "9:00 AM - The Early Screening: Day begins in the 'Soundproof Booth' of a multi-specialty hospital. First patient is a six-month-old baby. Perform OAE (Otoacoustic Emissions) test. As machine shows 'Pass,' see relief on mother's face. You've just confirmed this child will grow up in a world of sound.",
          "11:30 AM - The High-Tech Fitting: Next is a software engineer who developed Tinnitus (constant ringing in ears). Use specialized software to map his hearing. Don't just give him a device—program a digital hearing aid with AI that filters background noise and masks ringing.",
          "2:00 PM - The Balance Check: After lunch, see elderly grandmother who keeps falling. Most think it's a leg problem, but you know it's often an 'inner ear' problem. Perform VNG (Videonystagmography) test, tracking eye movements with infrared cameras to find source of dizziness.",
          "4:30 PM - Counseling & School Visits: Spend afternoon counseling parents of child who just received Cochlear Implant. Explain that surgery was first step, but 'mapping' and speech therapy are where magic happens. End day preparing report for local school on making classrooms more 'hearing-friendly.'"
        ]
      },
      {
        id: "who",
        title: "Is This You? The Audiologist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1E40AF",
        content: [
          "Personality Traits: Patience (working with children and elderly requires calm, gentle soul), Analytical (enjoy solving puzzles—finding the 'why' behind a symptom), Empathy (treating people's ability to connect, not just ears), Detail-Oriented (precision in device programming and testing).",
          "Soft Skills: Communication (explain complex medical data in simple words to worried families), Empathy (understand emotional impact of hearing loss), Problem-Solving (creative solutions for different hearing challenges), Counseling (guide patients through treatment journey).",
          "Hard Skills: Tech-Savvy (work with AI-driven software, robotic surgery assists, laser testing tools), Biology & Physics (love for how human body and sound waves work), Diagnostic Expertise (interpret audiograms and test results), Programming Skills (configure hearing aids and implants).",
          "The Self-Check: Do you love solving medical mysteries? Can you work with cutting-edge technology? Do you have patience for children and elderly? If yes, you have the Audiologist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Diagnostic Workflow",
        icon: "Briefcase",
        description: "The complete audiology practice cycle.",
        color: "#3B82F6",
        content: [
          "Diagnostic Testing: Using audiometers and computers to measure hearing thresholds. Conducting OAE, ABR, and VNG tests.",
          "Assessment: Determining if issue is in outer, middle, or inner ear. Identifying type and degree of hearing loss.",
          "Treatment Planning: Recommending hearing aids, cochlear implants, balance therapy, or other interventions based on diagnosis.",
          "Device Fitting: The precise technical work of programming devices to match patient's specific hearing profile.",
          "Aural Rehabilitation: Training the brain to recognize and interpret new sounds. Working with speech-language pathologists.",
          "Patient Counseling: Explaining diagnosis, treatment options, and realistic expectations to patients and families.",
          "Follow-Up Care: Monitoring device performance, making adjustments, and ensuring patient satisfaction.",
          "Documentation: Maintaining detailed patient records and test results for continuity of care."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1E40AF",
        content: [
          "After Class 10: Take Physics, Chemistry, and Biology (PCB) in Class 11 & 12. Board Exams (Focus: Science). This is mandatory foundation.",
          "After Class 12 (Science Stream): Pursue BASLP (Bachelor of Audiology & Speech-Language Pathology). This is a 4-year course (3 years study + 1 year internship). Entrance Exams: NEET, AIISH Entrance, or University Exams.",
          "After Graduation: Specialized entry for Science grads. Pursue M.Sc. Audiology or MASLP (Master's). Entrance Exam: AIAPGET or University-specific exams.",
          "Top Institutions: AIISH (Mysore)—the 'Harvard' of Audiology, AYJNIHH (Mumbai/Kolkata), PGIMER (Chandigarh), Manipal Academy (MAHE), Sri Ramachandra (Chennai), Amity University (Noida).",
          "Specializations: Pediatric Audiology, Cochlear Implant Programming, Tele-audiology, Intraoperative Monitoring, Hearing Aid Fitting."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: "#3B82F6",
        content: [
          "Entry-Level (0-2 years): ₹4L–₹7L per annum. Government hospitals or private clinics.",
          "Mid-Level (5-10 years): ₹12L–₹25L per annum. Senior positions in hospitals or established private practice.",
          "Senior/Specialist (10-15 years): ₹30L–₹45L per annum. Leading departments or specialized centers.",
          "Leadership/CXO (Hospital chains): ₹60L+ per annum. Managing audiology departments across multiple locations.",
          "Metro vs. Tier-2: Salaries in Metros like Bangalore and Delhi roughly 20% higher. Tier-2 cities seeing higher demand-to-supply ratio.",
          "Industry Growth: Audiology market expected to grow at CAGR of 7.5% through 2030.",
          "Growth Trajectory: Entry to Senior Specialist takes 8-10 years with consistent experience and specialization."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, companies, and opportunities.",
        color: "#1E40AF",
        content: [
          "Top Industries: Private/Government Hospitals, Hearing Aid MNCs (Signia, Phonak, Widex, Oticon), Rehabilitation Centers, Schools for Hearing Impaired, ENT Clinics.",
          "Top Cities: Mysore (The hub), Bangalore, Delhi, Chennai, Mumbai, Hyderabad, Pune.",
          "Emerging Opportunities: Tele-audiology (consulting and programming hearing aids remotely via apps), Intraoperative Monitoring (monitoring nerves during brain surgery), Hearing Science in tech labs.",
          "International: Huge demand in USA, Australia, Middle East for RCI-registered Indian audiologists. Growing opportunities in Gulf countries.",
          "Freelancing: High potential for private practice. Many audiologists run successful independent clinics or tele-audiology platforms.",
          "Entrepreneurship: Starting 'Hearing Solutions' clinics, specialized pediatric centers, or audiology tech startups."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: "#3B82F6",
        content: [
          "Government Colleges: ₹20,000–₹1.2L per year. Very affordable but highly competitive entrance.",
          "Private Universities: ₹1.5L–₹4.5L per year. Better infrastructure and placement support.",
          "Hostel/Living: ₹80,000–₹1.5L per year in major cities.",
          "Additional Costs: Professional diagnostic sets ₹15,000, NEET coaching ₹50,000–₹1,00,000, certification courses ₹20,000–₹50,000.",
          "Total Investment: Approximately ₹12L–₹25L for complete 5-year degree (including internship).",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top audiology institutes across India.",
        color: "#1E40AF",
        content: [
          "Government: AIISH (Mysore)—the 'Harvard' of Audiology, AYJNIHH (Mumbai/Kolkata), PGIMER (Chandigarh), RIMS (Imphal).",
          "Private: Manipal Academy (MAHE), Sri Ramachandra (Chennai), Amity University (Noida), Saveetha University (Chennai), Symbiosis (Pune).",
          "Regional Excellence: RIMS (Imphal) offers excellent regional training. AIISH Mysore is the gold standard.",
          "Specialization Centers: Cochlear Implant centers in major metros, Tele-audiology training programs, Pediatric audiology clinics.",
          "Note: Choose institutes with RCI recognition, strong faculty, modern equipment, and clinical exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#3B82F6",
        content: [
          "NSP (National Scholarship Portal): Post-Matric scholarships for SC/ST/OBC and Minority students in medical courses.",
          "Disability Schemes: NFPwD (National Fellowship for Persons with Disabilities) for researchers in audiology field.",
          "Institutional: AIISH Mysore offers stipends to most students based on merit. Manipal and other private institutes offer merit scholarships.",
          "State Schemes: Bihar Student Credit Card and similar schemes in MP/Rajasthan for medical education.",
          "Government Sponsorships: Ministry of Health occasionally sponsors students for specialized audiology training.",
          "Merit-Based: Most institutes offer scholarships for top NEET performers."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: "#1E40AF",
        content: [
          "RCI (Rehabilitation Council of India): Mandatory. You cannot practice as an Audiologist in India without an RCI CRR (Certificate of Registration) number.",
          "ISHA: Indian Speech and Hearing Association. Best for networking, journals, and professional development.",
          "State Medical Council: Registration required to practice as healthcare professional in your state.",
          "International Certifications: AAA (American Academy of Audiology) recognition growing in India. WHO recognition for traditional medicine practitioners.",
          "Specialized Certifications: Cochlear Implant Programmer, Pediatric Audiology Specialist, Tele-audiology Certification.",
          "Continuing Education: Must complete annual CE credits to maintain RCI registration."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in audiology careers.",
        color: "#3B82F6",
        content: [
          "Conventional Careers: Clinical Audiologist in hospitals, ENT Clinic Partner, Hearing Aid Dispenser, Rehabilitation Center Manager, School Audiologist.",
          "New-Age Careers: Intraoperative Monitoring Specialist (monitoring nerves during brain surgery), Hearing Scientist in tech labs, AI-Audiology Specialist, Tele-audiology Consultant.",
          "Entrepreneurship: Starting 'Hearing Solutions' clinic, specialized pediatric audiology center, audiology tech startup, hearing aid customization business.",
          "Freelancing: Private practice audiologist, Remote tele-audiology consultant, Corporate hearing health programs, Hearing health blogger/influencer.",
          "Specialized Roles: Cochlear Implant Programmer, Pediatric Audiologist, Geriatric Audiology Specialist, Research Scientist in hearing science."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of audiology practice.",
        color: "#1E40AF",
        content: [
          "The Emotional Weight: Telling a parent their child has permanent hearing loss is never easy. Requires emotional intelligence and counseling skills.",
          "Standing Hours: You'll spend a lot of time on your feet in clinics or hospitals. Physical stamina required.",
          "Niche Perception: Sometimes people confuse you with a 'salesperson' for hearing aids. You have to prove you are a doctor-level professional.",
          "Competitive Field: Growing number of audiologists in metros. Need to differentiate yourself through specialization.",
          "Technology Learning Curve: Constant updates in hearing aid technology and diagnostic equipment. Must stay current.",
          "Patient Compliance: Many patients don't follow through with treatment or device usage. Requires patience and motivation skills.",
          "Regulatory Challenges: RCI registration requirements and state-level regulations can be complex.",
          "Work-Life Balance: Emergency cases and patient follow-ups can extend working hours."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in audiology.",
        color: "#3B82F6",
        content: [
          "AI-Hearing Aids: Devices that can translate languages in real-time or detect if elderly person has fallen.",
          "Gene Therapy: In next decade, we might see 'biological' cures for certain types of deafness.",
          "Automation: AI will handle basic hearing tests, leaving Audiologist to focus on complex surgery assists and counseling.",
          "Tele-audiology Expansion: Remote consultations and device programming becoming mainstream.",
          "Wearable Integration: Hearing aids integrated with smartwatches and health monitoring devices.",
          "Personalized Medicine: Genetic testing combined with audiology for personalized treatment plans.",
          "Brain-Computer Interfaces: Direct neural implants for severe hearing loss (experimental but promising).",
          "Global Standardization: WHO working on standardizing audiology practices globally, creating international opportunities."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#1E40AF",
        content: [
          "Volunteer: Visit a local school for the deaf. See how they communicate. Understand the impact of hearing loss.",
          "Master Biology: Focus on the nervous system and sensory organs. Build strong foundation in anatomy.",
          "Physics Lab: Pay attention to 'Sound and Vibration' experiments. Understand acoustics principles.",
          "Language: Learn basic Indian Sign Language (ISL). This will give you massive head start in patient communication.",
          "Tech Skills: Learn basic computer programming and software. Hearing aids are essentially computers.",
          "Research Interest: Read research papers on audiology. Understand evidence-based approach.",
          "Internship: Seek internships at hospitals or hearing aid clinics during summer breaks.",
          "NEET Preparation: Start early preparation for NEET-UG. Join coaching if needed.",
          "Networking: Connect with audiologists. Learn about career paths and specializations.",
          "Personal Development: Develop patience and empathy through volunteer work and community service."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Audiologists & Pioneers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: "#3B82F6",
        content: [
          "Prof. Mohan Kameswaran: Pioneer of cochlear implants in India and founder of the MERF Institute. Revolutionized hearing restoration in India.",
          "Devangi Dalal: World-renowned audiologist known for humanitarian work with children. Advocate for hearing health in developing nations.",
          "Dr. S.R. Savithri: Former Director of AIISH Mysore. Instrumental in shaping audiology education in India. Mentor to hundreds of audiologists.",
          "Dr. J.M. Hans: Leading ENT and hearing expert who has performed thousands of life-changing surgeries. Pioneer in cochlear implant surgery.",
          "Dr. Ravi Sharma: Founder of India's first tele-audiology platform. Bringing hearing healthcare to remote villages.",
          "Dr. Anita Garg: Leading pediatric audiologist. Specializing in early intervention for hearing-impaired children.",
          "Dr. Vikram Vyas: Innovator in AI-integrated hearing aid technology. Bridging audiology with artificial intelligence."
        ]
      }
    ]
  },
  clinical_psychology: {
    slug: "clinical_psychology",
    badge: "🧠 The Mind Healer for Class 10+",
    heading: "Clinical Psychologist",
    subheading: "Heal minds, transform lives, and unlock human potential. From trauma survivors to corporate teams, clinical psychologists are India's frontline warriors against mental health crises.",
    whyCards: [
      { icon: "Heart", title: "Mental Health Crisis", description: "India's mental health crisis: 1 in 5 Indians suffer from mental disorders. Urgent need for trained professionals.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "Growing Demand", description: "80-90% of large Indian companies expected to have Employee Assistance Programs by 2030.", borderColor: "#10B981" },
      { icon: "Award", title: "High Impact Work", description: "Direct impact on individuals' lives—helping them overcome trauma, anxiety, depression, and relationship issues.", borderColor: "#F59E0B" },
      { icon: "Briefcase", title: "Diverse Career Paths", description: "Hospitals, corporates, NGOs, research institutions, teletherapy platforms, and private practice opportunities.", borderColor: "#3B82F6" }
    ],
    quickFacts: [
      { label: "Duration", detail: "BA (3 Yrs) + MA (2 Yrs) + RCI Registration", color: "bg-green-100 text-green-700" },
      { label: "Entry Exams", detail: "CUET, CUET-PG, UGC NET, UPSC", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹2.5L–₹35L+ (Entry to Leadership)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1 in 5", label: "Indians with Mental Disorders", gradient: "from-red-500 to-red-600" },
      { value: "300%", label: "Teletherapy Growth by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what-is-this",
        title: "What is This Career All About?",
        icon: "Lightbulb",
        description: "Understanding clinical psychology and its impact.",
        color: "#3B82F6",
        content: [
          "Clinical psychologists assess and diagnose mental health conditions using psychological tests and clinical interviews.",
          "They provide evidence-based psychotherapy using techniques like Cognitive Behavioral Therapy (CBT), psychoanalysis, and family therapy.",
          "They design personalized treatment plans for each client based on their unique needs and circumstances.",
          "They conduct research on mental health patterns, treatment effectiveness, and psychological phenomena.",
          "They consult with schools, organizations, and communities on mental health awareness and prevention.",
          "They collaborate with psychiatrists, social workers, and other healthcare professionals to provide comprehensive care.",
          "In India's growing mental health sector, clinical psychologists are becoming essential in hospitals, corporates, NGOs, and private practice."
        ]
      },
      {
        id: "day-in-life",
        title: "A Day in the Life: The Mind Healer",
        icon: "Clock",
        description: "Real-world experience of a clinical psychologist.",
        color: "#10B981",
        content: [
          "10:00 AM – Couple Therapy: A couple in their early thirties sits across from you, communication broken after five years of marriage. You facilitate dialogue, helping them express needs without blame.",
          "11:30 AM – Child Assessment: A concerned mother brings her 8-year-old son struggling with concentration and impulsive behavior. You conduct a playful assessment, observing behavior through games and drawing activities.",
          "1:00 PM – Lunch and Documentation: You take a break, then spend time documenting session notes, updating treatment plans, and reviewing research papers on trauma-focused CBT for an upcoming case.",
          "2:30 PM – Trauma Survivor: Your most emotionally demanding case—a 35-year-old woman processing childhood sexual abuse. You use trauma-focused therapy techniques, creating a safe space for her to confront painful memories at her own pace.",
          "3:30 PM – Group Therapy Session: An anxiety support group meets—five individuals sharing experiences and coping strategies under your facilitation.",
          "6:00 PM – Administrative Work: You finalize insurance claims, respond to appointment requests, and prepare materials for tomorrow's workshop on stress management for a corporate client.",
          "This day showcases the emotional depth, technical skill, and human connection required in clinical psychology."
        ]
      },
      {
        id: "personality-traits",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Essential qualities for clinical psychologists.",
        color: "#F59E0B",
        content: [
          "Deep Empathy: Ability to truly understand and feel what clients are experiencing. Compassion without becoming overwhelmed by others' pain. Non-judgmental acceptance of diverse life experiences.",
          "Emotional Stability: Managing your own emotions while handling others' distress. Resilience in the face of difficult stories and situations.",
          "Patience: Therapy is slow, progress non-linear. Clients may resist, relapse, or take time to trust you.",
          "Active Listening: Hearing not just words but emotions, subtext, and unspoken needs.",
          "Ethical Integrity: Absolute confidentiality and trustworthiness. Strong moral compass. Ability to navigate complex ethical dilemmas.",
          "Cultural Sensitivity: Understanding how culture shapes mental health, family dynamics, and healing approaches.",
          "Analytical Mind: Ability to diagnose, formulate treatment plans, and evaluate therapy effectiveness.",
          "Communication Skills: Explaining complex psychological concepts in simple, relatable language.",
          "Self-Awareness: Understanding your own biases, triggers, and limitations to avoid imposing them on clients."
        ]
      },
      {
        id: "key-responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "CheckCircle",
        description: "Daily tasks and professional duties.",
        color: "#8B5CF6",
        content: [
          "Clinical Assessment: Conducting intake interviews with new clients. Administering psychological tests (IQ, personality, neuropsychological). Diagnostic formulation using DSM-5/ICD-11.",
          "Psychotherapy and Intervention: Individual therapy sessions (typically 45-60 minutes). Group therapy facilitation. Family and couple therapy. Crisis intervention when needed.",
          "Consultation and Collaboration: Working with psychiatrists, social workers, occupational therapists. School consultations for student mental health. Corporate wellness program development. Providing expert testimony in legal cases.",
          "Documentation and Administration: Maintaining confidential client records. Writing progress notes after each session. Insurance and billing management (private practice). Appointment scheduling and follow-ups.",
          "Research and Continuous Learning: Staying updated with latest psychological research. Attending workshops and conferences. Pursuing certifications in specialized techniques. Contributing to research and publications.",
          "Client Safety and Ethics: Ensuring client confidentiality and safety. Managing dual relationships appropriately. Recognizing and addressing your own limitations and referring clients when necessary."
        ]
      },
      {
        id: "career-pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 to professional practice.",
        color: "#06B6D4",
        content: [
          "After Class 10: Choose Science stream in Class 11-12 (Biology, Chemistry, Physics, English). This builds foundation for understanding brain and neuroscience. Develop reading habits about psychology and self-help. Volunteer with NGOs working in mental health.",
          "After Class 12: Pursue BA/BSc in Psychology (3 years). Entrance: CUET (Common University Entrance Test). Minimum eligibility: 50% in Class 12. Covers: General Psychology, Developmental Psychology, Social Psychology, Abnormal Psychology, Research Methods, Statistics.",
          "After Graduation: MA/MSc in Psychology (2 years) - MANDATORY. Specializations: Clinical Psychology, Counseling Psychology, Applied Psychology. Entrance Exams: CUET-PG, University-specific exams (DU, JNU, BHU, Ambedkar University).",
          "RCI Registration: After MA/MSc, register with Rehabilitation Council of India (RCI) for official recognition as Clinical Psychologist.",
          "Advanced Options: MPhil Clinical Psychology (2 years, phasing out). PhD in Clinical Psychology (3-5 years, often funded). Specialized certifications in CBT, DBT, trauma-focused therapy.",
          "Total Timeline: Minimum 7 years from Class 12 to RCI registration and professional practice."
        ]
      },
      {
        id: "market-snapshot",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary ranges and career growth trajectory.",
        color: "#EC4899",
        content: [
          "Entry-Level (0-2 years, Fresh RCI registration): ₹2,50,000 - ₹6,00,000 per annum. Average: ₹4,00,000.",
          "Early Career (2-5 years): ₹4,00,000 - ₹9,00,000 per annum. Average: ₹6,00,000.",
          "Mid-Career (5-10 years): ₹7,00,000 - ₹15,00,000 per annum. Average: ₹10,00,000.",
          "Senior/Experienced (10-15 years): ₹12,00,000 - ₹22,00,000 per annum. Average: ₹16,00,000.",
          "Leadership/Head of Department: ₹20,00,000 - ₹35,00,000+ per annum. Average: ₹25,00,000.",
          "Career Growth: Entry to Early Career takes 2-3 years. Early to Mid-Career takes 3-5 years. Mid to Senior takes 5-7 years. Senior to Leadership varies based on specialization and entrepreneurship.",
          "Private Practice Income: Experienced therapists can earn ₹1,000-3,000 per session × number of clients. Highly successful practitioners earn ₹20-40 LPA."
        ]
      },
      {
        id: "where-are-jobs",
        title: "Where Are the Jobs? (Geography & Industries)",
        icon: "Briefcase",
        description: "Employment sectors and top cities.",
        color: "#14B8A6",
        content: [
          "Healthcare Institutions: General Hospitals (clinical psychology departments). Psychiatric Hospitals (NIMHANS Bangalore, IHBAS Delhi, CIP Ranchi). Specialty Clinics (addiction treatment, eating disorder clinics). Rehabilitation Centers (de-addiction, trauma recovery).",
          "Corporate Sector (Rapidly Growing): Employee Assistance Programs (EAP) in-house counseling. HR Departments as organizational behavior consultants. Tech companies (Google, Microsoft, TCS, Infosys) investing heavily in employee mental health.",
          "Educational Institutions: Schools (CBSE mandate for counselors). Colleges and Universities (campus counseling centers). Online education platforms.",
          "Government Organizations: Public Hospitals (government psychology departments). Armed Forces (military psychology units). Police Departments (trauma counseling for personnel).",
          "Non-Governmental Organizations: Mental Health NGOs (Vandrevala Foundation, The Live Love Laugh Foundation). Women's Rights Organizations (domestic violence survivors). Community mental health centers.",
          "Research Institutions: NIMHANS, IHBAS, CIP (research on mental disorders). Universities (clinical psychology research labs). Teletherapy platforms (Practo, BetterHelp India, Talkspace, InnerHour).",
          "Top Cities: Mumbai, Bangalore, Delhi-NCR, Hyderabad, Pune, Chennai. Tier-2 cities growing rapidly with increasing mental health awareness."
        ]
      },
      {
        id: "cost-breakdown",
        title: "What Will It Cost? (Fees & Duration)",
        icon: "DollarSign",
        description: "Educational expenses and course duration.",
        color: "#F97316",
        content: [
          "BA/BSc Psychology: Government Institutions: ₹10,000 - ₹60,000/year. Private Institutions: ₹80,000 - ₹2,50,000/year. Duration: 3 years.",
          "MA/MSc Psychology: Government Institutions: ₹15,000 - ₹80,000/year. Private Institutions: ₹1,00,000 - ₹3,50,000/year. Duration: 2 years.",
          "RCI MA Clinical Psychology: Government Institutions: ₹12,000 - ₹2,00,000/year. Private Institutions: ₹2,00,000 - ₹10,00,000/year. Duration: 2 years.",
          "MPhil Clinical (Phasing out): Government Institutions: ₹20,000 - ₹1,50,000/year. Private Institutions: ₹2,50,000 - ₹8,00,000/year. Duration: 2 years.",
          "PhD in Clinical Psychology: Often funded with fellowship. If unfunded: ₹50,000 - ₹2,00,000/year. Duration: 3-5 years.",
          "Total Investment: Approximately ₹5-15 lakhs for BA + MA from government institutions. ₹15-40 lakhs from private institutions.",
          "Additional Costs: Certification exams (₹5,000-15,000). Workshops and training programs. Supervision and mentorship fees."
        ]
      },
      {
        id: "where-to-study",
        title: "Where to Study? (Top Institutions)",
        icon: "BookOpen",
        description: "Leading universities and colleges in India.",
        color: "#06B6D4",
        content: [
          "Top Government Universities - North: Delhi University (multiple colleges offer BA Hons Psychology, MA Psychology). Jamia Millia Islamia, Delhi (MA Applied Psychology). Banaras Hindu University, Varanasi (BA, MA Psychology). Panjab University, Chandigarh (MA Psychology).",
          "Top Government Universities - South: University of Madras (Psychology programs). University of Mysore (Psychology department). Andhra University (Psychology programs).",
          "Top Government Universities - East: Calcutta University (Psychology department). Banaras Hindu University (Psychology programs).",
          "Top Government Universities - West: Savitribai Phule Pune University (Psychology programs). Mumbai University (Psychology courses across affiliated colleges).",
          "Top Private Universities: Ashoka University, Sonepat (Liberal arts focus, strong psychology, ₹7,00,000-9,00,000/year). OP Jindal Global University (Psychology programs). Christ University, Bangalore (BA, MA Psychology, ~₹1,50,000/year). Flame University, Pune (Liberal education focus).",
          "Online/Distance Learning: IGNOU (Indira Gandhi National Open University) - BA Psychology (distance). MA Psychology (distance). Limited options for Clinical Psychology specialization.",
          "Specialized Institutions: NIMHANS, Bangalore (Research and advanced training). IHBAS, Delhi (Institute of Human Behaviour and Allied Sciences). CIP, Ranchi (Central Institute of Psychiatry)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Gift",
        description: "Financial aid and funding options.",
        color: "#8B5CF6",
        content: [
          "Central Government Schemes: UGC NET/JRF Fellowship (For PhD) - ₹31,000/month (first 2 years), ₹35,000/month (next 3 years). Central Sector Scheme of Scholarships - ₹10,000-20,000/year. Maulana Azad National Fellowship - ₹25,000-28,000/month + contingency.",
          "Prime Minister's Research Fellowship (PMRF): ₹70,000-80,000/month for exceptional PhD students.",
          "Private/Corporate Scholarships: Tata Trusts Scholarships (various schemes for higher education). K.C. Mahindra Scholarships (postgraduate studies, merit and need-based). Sitaram Jindal Foundation Scholarship (deserving students).",
          "International Fellowships: Fulbright-Nehru Fellowships (PhD/postdoc in USA, fully funded). Commonwealth Scholarships (studies in UK, Australia, Canada).",
          "Institutional Scholarships: Many private colleges offer 25-50% fee waivers based on entrance exam scores.",
          "State-Level Schemes: Various state governments offer scholarships for meritorious students. Check your state's education department website.",
          "Loan Schemes: PM-Vidyalaxmi provides 3% interest subvention for loans up to ₹10 lakhs."
        ]
      },
      {
        id: "professional-bodies",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Regulatory bodies and professional credentials.",
        color: "#10B981",
        content: [
          "Rehabilitation Council of India (RCI): The apex regulatory body for clinical psychologists. Mandatory registration for professional practice. Maintains standards of education and practice.",
          "Indian Psychological Association (IPA): Premier professional body for psychologists. Promotes research, education, and ethical practice. Publishes journals and organizes conferences.",
          "National Board of Examination in Medical Sciences (NBEMS): Conducts examinations for clinical psychology specialization.",
          "Certifications Available: Cognitive Behavioral Therapy (CBT) - Specialized training in evidence-based therapy. Dialectical Behavior Therapy (DBT) - For personality disorders and self-harm. Trauma-Focused CBT - Specialization in trauma treatment.",
          "Other Certifications: Acceptance and Commitment Therapy (ACT). Psychodynamic Therapy. Family Systems Therapy. Child and Adolescent Psychology.",
          "Continuing Education: RCI requires continuing professional development (CPD) for license renewal. Annual workshops and training programs mandatory.",
          "Ethical Guidelines: Adherence to IPA Code of Ethics. Confidentiality and client rights protection. Professional boundaries and dual relationships."
        ]
      },
      {
        id: "career-opportunities",
        title: "Career Opportunities",
        icon: "Rocket",
        description: "Conventional and emerging career paths.",
        color: "#EF4444",
        content: [
          "Conventional Careers: Clinical Psychologist in Hospital Settings (government hospitals with stable job and pension benefits, private hospitals like Apollo, Fortis, Max, Manipal). Psychiatric Hospital/Mental Health Center (NIMHANS, IHBAS, CIP, state mental hospitals). University Professor/Academic (teaching psychology at UG/PG level, research in clinical psychology). Research Scientist (NIMHANS, ICMR, research hospitals).",
          "Corporate Sector: Employee Assistance Program (EAP) Psychologist (Google, Microsoft, TCS, Infosys, consulting firms). Organizational Behavior Consultant. Corporate Wellness Program Manager. HR Consultant specializing in mental health.",
          "New-Age Careers (Emerging and Growing Fast): Mental Health Tech Platforms (Teletherapy - Practo, BetterHelp India, Talkspace, InnerHour). AI-Assisted Mental Health Tools (developing assessment algorithms). Virtual Reality Therapy Specialist. Digital Mental Health Coach.",
          "Freelancing & Entrepreneurship: Freelance Therapist (multiple part-time arrangements, therapy sessions at different clinics or online, income ₹1,000-3,000 per session). Workshop and Training Facilitator (corporate workshops on stress management, communication skills). Mental Health Coaching Practice (not therapy, life coaching with psychological principles). Starting a Mental Health Startup.",
          "NGO and Social Sector: Mental Health NGO Founder/Director. Community Mental Health Worker. Trauma Counselor for disaster relief. Advocacy and Policy work.",
          "Academic and Research: University Research Fellow. Clinical Psychology Researcher. Publishing and Contributing to Journals. Mentoring next generation of psychologists."
        ]
      },
      {
        id: "challenges-realities",
        title: "Challenges and Realities",
        icon: "AlertCircle",
        description: "Honest look at the profession's difficulties.",
        color: "#EF4444",
        content: [
          "Emotional Toll and Vicarious Trauma: Daily exposure to pain—hearing traumatic stories and witnessing suffering. Vicarious trauma—absorbing clients' trauma can affect your own mental health. Compassion fatigue—emotional exhaustion from continuous empathy.",
          "Lengthy and Expensive Education: 7 years minimum from Class 12 to RCI registration. Competitive admissions—very few seats in top institutions (NIMHANS: ~5-10 seats). High cost of private education.",
          "Modest Starting Salaries: Entry-level ₹2.5-4 LPA (far lower than engineering/management). Initial struggles building private practice clientele takes years.",
          "Burnout Risk: High stress managing multiple clients' crises. Always 'on'—hard to switch off therapist mode. Emotional hangover from difficult cases.",
          "Irregular Income (Private Practice): Client cancellations mean lost income. Seasonal fluctuations (holidays, summer slowdowns). Building stable client base takes 3-5 years.",
          "Work-Life Balance Challenges: Client emergencies can happen outside office hours. Hard to 'leave work at work'. Difficulty maintaining boundaries.",
          "Regulatory and Ethical Complexities: Navigating confidentiality laws and ethical dilemmas. Managing dual relationships appropriately. Dealing with mandatory reporting requirements.",
          "Limited Awareness in India: Many people still don't understand or value mental health. Stigma around therapy and mental illness persists. Lower demand in Tier-2 and Tier-3 cities."
        ]
      },
      {
        id: "emerging-trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Zap",
        description: "Future of clinical psychology in India.",
        color: "#F59E0B",
        content: [
          "Teletherapy and Digital Mental Health (Explosive Growth): Hybrid models combining in-person and online therapy. AI-assisted platforms with chatbots for initial screening and therapists for treatment. Virtual Reality (VR) therapy for exposure therapy (phobias, PTSD). Expected growth: 300% increase in teletherapy by 2030.",
          "AI and Technology Integration: Assessment tools using AI to analyze speech patterns and facial expressions for diagnosis. Therapy assistants providing CBT exercises and mood tracking. Predictive analytics identifying at-risk individuals before crisis. Wearable technology monitoring mental health metrics.",
          "Workplace Mental Health Revolution: 80-90% of large Indian companies expected to have EAPs by 2030. Mental health days becoming standard. Proactive wellness programs replacing reactive crisis management. Peer support programs and mental health champions.",
          "Insurance and Regulatory Changes: Mental health parity in insurance (equal coverage to physical health). IRDAI expanding mental health coverage requirements. More cashless treatment for therapy. Standardized billing codes for therapy sessions.",
          "Specialized Niches Growing: Trauma-informed care becoming mainstream. Neurodiversity-affirming approaches (autism, ADHD). Cultural competency in therapy. LGBTQ+ affirming mental health services.",
          "Research and Evidence-Based Practice: Increased funding for mental health research. Personalized medicine approaches in psychology. Integration of neuroscience and psychology. Global collaboration on mental health solutions."
        ]
      },
      {
        id: "skills-to-build",
        title: "Skills to Build While Still in School",
        icon: "Zap",
        description: "Practical steps for students in Classes 9-12.",
        color: "#06B6D4",
        content: [
          "Develop Emotional Intelligence: Self-awareness—journal your own emotions, thoughts, reactions. Empathy practice—truly listen to friends and family without judgment. Emotional regulation—manage your own stress and anxiety.",
          "Read Widely About Psychology: Accessible Books for Beginners - 'The Man Who Mistook His Wife for a Hat' by Oliver Sacks. 'Thinking, Fast and Slow' by Daniel Kahneman. 'Emotional Intelligence' by Daniel Goleman. 'Man's Search for Meaning' by Viktor Frankl.",
          "Understand Mental Health Issues: Learn about common disorders (depression, anxiety, OCD, schizophrenia, bipolar disorder). Follow credible mental health Instagram accounts (verify credentials). Understand stigma and how to combat it.",
          "Develop Strong Communication Skills: Writing—start a blog or journal about psychology topics. Speaking—join debate club, participate in school presentations. Active listening—practice in conversations with friends and family.",
          "Build Research Skills: Learn statistics basics (Khan Academy statistics). Critical thinking—question what you read, look for evidence. Understand research methodology and how studies are conducted.",
          "Volunteer and Gain Experience: Volunteer with NGOs working in mental health. Participate in mental health awareness campaigns. Shadow a psychologist if possible. Help organize mental health workshops in school.",
          "Develop Tech Skills: Learn basic data analysis (Excel, Google Sheets). Understand digital platforms for teletherapy. Familiarize yourself with mental health apps and technology."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in This Career",
        icon: "User",
        description: "Inspiring figures in clinical psychology.",
        color: "#3B82F6",
        content: [
          "Dr. Vikram Patel: Pershing Square Professor of Global Health at Harvard Medical School. Co-founder of Sangath, a Goa-based NGO. Global mental health expert working on community-based interventions. Advocate for mental health in developing nations.",
          "Dr. Achal Bhagat: Senior Consultant Psychiatrist and Psychotherapist based in Delhi. One of India's most respected voices in mental health. Pioneer in integrating psychology and psychiatry. Mentor to many young professionals.",
          "Dr. Samir Parikh: Director, Department of Mental Health and Behavioral Sciences, Fortis Healthcare. Leading psychiatrist specializing in child and adolescent mental health. Advocate for mental health awareness in India.",
          "Dr. Anna Chandy: India's First Woman Clinical Psychologist (1920-1996). Trailblazer who became India's first woman to train formally in clinical psychology. Pioneer in establishing psychology as a profession in India.",
          "Dr. Shekhar Seshadri: Former Director, NIMHANS (2012-2018). Renowned child and adolescent psychiatrist. Leader in mental health research and education. Advocate for mental health policy in India.",
          "Dr. Harish Shetty: Psychiatrist and psychotherapist based in Mumbai. Known for humanistic approach to mental health. Author and speaker on mental health awareness. Advocate for breaking mental health stigma.",
          "Dr. Anjali Chhabria: Clinical psychologist and founder of mental health initiatives. Pioneer in workplace mental health in India. Advocate for mental health in corporate sector."
        ]
      }
    ]
  },
  counsellingPsychologist: {
    slug: "counselling-psychologist",
    badge: "👂 The Listener's Guide for Class 10+",
    heading: "Counselling Psychologist",
    subheading: "Be the emotional anchor for society. Help people navigate life's challenges, find clarity, and grow. From schools to corporates to private practice, counselling psychologists are India's wellness warriors.",
    whyCards: [
      { icon: "Heart", title: "Mental Health Crisis", description: "India has only 0.07 psychologists per 100,000 people. Massive shortage of trained counsellors. Urgent need for professionals.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "Explosive Market Growth", description: "Indian mental health market growing at 28% CAGR. Post-COVID boom in demand for counselling services.", borderColor: "#10B981" },
      { icon: "Briefcase", title: "Diverse Career Paths", description: "Schools, corporates, NGOs, online platforms, private practice, sports psychology, UX research, and more.", borderColor: "#3B82F6" },
      { icon: "Award", title: "High Impact Work", description: "Direct impact on individuals' lives—helping them overcome anxiety, relationship issues, career confusion, and burnout.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "BA (3 Yrs) + MA (2 Yrs) + Optional M.Phil (2 Yrs)", color: "bg-green-100 text-green-700" },
      { label: "Entry Exams", detail: "CUET, CUET-PG, TISS-NET, GATE", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹2.5L–₹50L+ (Entry to Leadership)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "28%", label: "Market CAGR Growth", gradient: "from-green-500 to-green-600" },
      { value: "0.07", label: "Psychologists per 100k People", gradient: "from-red-500 to-red-600" }
    ],
    guideSections: [
      {
        id: "what-is-this",
        title: "What is This Career All About?",
        icon: "Lightbulb",
        description: "Understanding counselling psychology and its impact.",
        color: "#3B82F6",
        content: [
          "A Counselling Psychologist is a mental health professional who helps people navigate the 'bumps' of everyday life.",
          "Unlike Clinical Psychologists who treat severe mental illnesses, Counselling Psychologists focus on wellness, personal growth, and resolving conflicts.",
          "They help people who are confused about their career, struggling in relationships, facing bullying or exam anxiety, or burning out at work.",
          "They use scientific techniques like Cognitive Behavioral Therapy (CBT), talk therapy, and art therapy to help clients find their own solutions.",
          "In today's fast-paced India, the joint family support system is shrinking. People are lonelier and more stressed. Counselling Psychologists are the emotional anchors for society.",
          "They work in schools, corporates, NGOs, hospitals, online platforms, and private practice.",
          "The field is evolving with new opportunities in sports psychology, UX research, corporate wellness, and digital mental health."
        ]
      },
      {
        id: "day-in-life",
        title: "A Day in the Life: The Listener",
        icon: "Clock",
        description: "Real-world experience of a counselling psychologist.",
        color: "#10B981",
        content: [
          "8:30 AM – School Counselling: Arrive at an international school. First student is Rohan (Class 10), panicking about Board exams. Use CBT techniques to help him identify specific thoughts scaring him.",
          "11:00 AM – Workshop Facilitation: Conduct a workshop for Class 8 students on 'Safe Touch and Boundaries.' Make serious topics fun and relatable.",
          "2:00 PM – Lunch Break: Leave school and head to private clinic. Listen to a podcast on 'Trauma-Informed Care' while eating.",
          "4:00 PM – Couple Counselling: Young couple struggling with communication arrives. Act as neutral mediator, ensuring they listen to each other without shouting.",
          "6:00 PM – Corporate Client: IT professional suffering from workplace burnout. Discuss setting boundaries with boss and managing stress.",
          "8:00 PM – Documentation: Write detailed case notes. Boring but essential for tracking progress and maintaining ethical standards.",
          "This day showcases the blend of school counselling, private practice, and corporate wellness work."
        ]
      },
      {
        id: "personality-traits",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Essential qualities for counselling psychologists.",
        color: "#F59E0B",
        content: [
          "The Secret Keeper: Friends trust you with their secrets because they know you won't judge them.",
          "The Listener: You listen to understand, not just to reply. You hear what's not being said.",
          "The Observer: You notice when someone says 'I'm fine' but their eyes look sad. You pick up on subtle cues.",
          "The Patient Soul: You understand that change takes time. You don't get frustrated if people don't improve immediately.",
          "Open-Minded: You are comfortable talking to people from different religions, genders, and backgrounds without bias.",
          "Empathetic: You can genuinely feel what others are experiencing without losing your professional boundaries.",
          "Communicator: You can explain complex psychological concepts in simple, relatable language.",
          "Resilient: You can handle hearing traumatic stories without being overwhelmed. You practice self-care.",
          "Ethical: You maintain confidentiality and professional boundaries. You know when to refer clients to other professionals."
        ]
      },
      {
        id: "key-responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "CheckCircle",
        description: "Daily tasks and professional duties.",
        color: "#8B5CF6",
        content: [
          "Intake Interview: First meeting where you gather client's history and understand the core problem.",
          "Assessment: Using scientific tools (Stress Scales, Aptitude Tests, Personality Assessments) to measure the issue.",
          "Goal Setting: Agreeing on what 'success' looks like (e.g., 'I want to give a speech without shaking').",
          "Intervention: Using therapies (Talk Therapy, Art Therapy, CBT, DBT) to treat the problem over weeks or months.",
          "Progress Monitoring: Regularly assessing if the client is making progress toward goals.",
          "Termination: Ending therapy when the client is ready to handle life on their own.",
          "Documentation: Maintaining detailed case notes and progress records for ethical and legal purposes.",
          "Collaboration: Working with other professionals (teachers, HR, psychiatrists) when needed.",
          "Self-Care: Managing your own stress and seeking supervision to prevent burnout."
        ]
      },
      {
        id: "career-pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 to professional practice.",
        color: "#06B6D4",
        content: [
          "After Class 10: Choose Humanities (Arts) stream with Psychology as main subject. Science (Biology) students also successful as they understand brain biology better.",
          "After Class 12: Pursue BA/BSc in Psychology (3-4 years). Entrance: CUET-UG for central universities like DU, BHU. Covers basics like Social Psychology, Development, Statistics.",
          "After Graduation: MA/MSc in Counselling Psychology (2 years) - MANDATORY for practice. Alternatively, MA in Applied Psychology. Entrance Exams: CUET-PG, TISS-NET, GATE (Psychology).",
          "Specialization Options: Counselling Psychologist (practice with Master's degree in schools, NGOs, corporates). Clinical Psychologist (RCI path requiring M.Phil for medical settings).",
          "Advanced Options: M.Phil in Clinical Psychology (2 years, if pursuing RCI registration). PhD (3-5 years, for university teaching and senior research).",
          "Total Timeline: Minimum 5 years (BA + MA) to practice as Counselling Psychologist. 7+ years if pursuing Clinical Psychology with RCI registration."
        ]
      },
      {
        id: "market-snapshot",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary ranges and career growth trajectory.",
        color: "#EC4899",
        content: [
          "Entry-Level (School Counselor, NGO Worker): ₹2.5 Lakh – ₹4.5 Lakh per annum. Average: ₹3.5 Lakh.",
          "Mid-Level (Corporate Wellness Coach, Senior School Counselor): ₹5 Lakh – ₹9 Lakh per annum. Average: ₹7 Lakh.",
          "Senior-Level (Private Practitioner, RCI Clinical Psychologist): ₹10 Lakh – ₹18 Lakh per annum. Average: ₹14 Lakh.",
          "Leadership (Head of Mental Health Dept, Celebrity Psychologist): ₹25 Lakh – ₹50 Lakh+ per annum.",
          "Private Practice Income: Experienced therapists earn ₹1,500-3,000 per session. Established practitioners earn ₹15-30 LPA.",
          "Metro vs. Tier-2: Metro cities (Mumbai, Bangalore, Delhi) pay 40-50% higher. People more willing to pay for therapy (₹1,500-3,000/session). Tier-2 cities have lower salaries due to stigma.",
          "Market Growth: Indian mental health market growing at 28% CAGR. Explosive demand post-COVID."
        ]
      },
      {
        id: "where-are-jobs",
        title: "Where Are the Jobs? (Geography & Industries)",
        icon: "Briefcase",
        description: "Employment sectors and top cities.",
        color: "#14B8A6",
        content: [
          "Schools & Colleges: CBSE/ICSE schools must have counselors by law. Growing demand in international schools and coaching centers.",
          "Corporate Sector: Companies like Google, Infosys, startups hire Employee Assistance Program (EAP) counselors. Tech companies investing heavily in employee mental health.",
          "Online Platforms: Apps like YourDOST, Wysa, Amaha hire hundreds of psychologists for chat/video therapy. Remote work opportunities.",
          "Hospitals & Rehabilitation Centers: Working alongside psychiatrists in mental health departments. De-addiction centers and trauma recovery centers.",
          "NGOs: Mental health NGOs, women's organizations, community centers. Tribal welfare and development organizations.",
          "Private Practice: Building your own therapy practice. Increasing demand for private counselors.",
          "Top Cities: Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad. Tier-2 cities growing rapidly.",
          "Remote Work: 60-70% of private therapy moved to Zoom/Google Meet. You can sit in Jaipur and counsel clients in New York."
        ]
      },
      {
        id: "cost-breakdown",
        title: "What Will It Cost? (Fees & Duration)",
        icon: "DollarSign",
        description: "Educational expenses and course duration.",
        color: "#F97316",
        content: [
          "BA/BSc in Psychology: Government (DU, JNU): ₹5,000-15,000/year. Private (Christ, Amity): ₹1,00,000-3,00,000/year. Duration: 3-4 years.",
          "MA/MSc in Counselling Psychology: Government: ₹10,000-30,000/year. Private: ₹1,50,000-4,00,000/year. Duration: 2 years.",
          "M.Phil in Clinical Psychology: Government: ₹20,000-1,50,000/year. Private: ₹2,50,000-8,00,000/year. Duration: 2 years (optional).",
          "PhD in Psychology: Often funded with UGC JRF fellowship (₹37,000/month). If unfunded: ₹50,000-2,00,000/year. Duration: 3-5 years.",
          "Total Investment: BA + MA from government institutions: ₹5-15 lakhs. BA + MA from private institutions: ₹15-40 lakhs.",
          "Additional Costs: Supervision costs (₹20,000-50,000/year for initial practice). Certification courses. Workshops and training programs.",
          "Scholarships: UGC JRF covers tuition and provides monthly stipend. INSPIRE Scholarship for top rankers. Fulbright-Nehru Master's Fellowships."
        ]
      },
      {
        id: "where-to-study",
        title: "Where to Study? (Top Institutions)",
        icon: "BookOpen",
        description: "Leading universities and colleges in India.",
        color: "#06B6D4",
        content: [
          "North: University of Delhi (North Campus, top tier for Psychology). Jamia Millia Islamia, Delhi (excellent Counselling/Applied Psychology). Panjab University, Chandigarh. Banaras Hindu University, Varanasi.",
          "West: Tata Institute of Social Sciences (TISS), Mumbai (the 'Holy Grail' for applied psychology). Fergusson College, Pune. MSU Baroda.",
          "South: Christ (Deemed University), Bangalore (famous for rigorous M.Sc. programs). NIMHANS, Bangalore (M.Phil/PhD, the 'AIIMS of Psychology'). University of Madras, Chennai.",
          "East: University of Calcutta (one of oldest psychology departments). Banaras Hindu University, Varanasi. Visva-Bharati, Shantiniketan.",
          "Northeast: Gauhati University, Assam (strong psychology department). Martin Luther Christian University (MLCU), Meghalaya (known for experiential learning in counselling).",
          "Distance Learning: IGNOU offers BA and MA in Psychology (limited options for specialization).",
          "Specialized Institutions: NIMHANS Bangalore (research and advanced training). TISS Mumbai (applied psychology focus)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Gift",
        description: "Financial aid and funding options.",
        color: "#8B5CF6",
        content: [
          "INSPIRE Scholarship (DST): For top rankers in Class 12 Science pursuing B.Sc. Psychology. Covers tuition and provides monthly stipend.",
          "UGC JRF (Junior Research Fellowship): If you clear NET-JRF, get robust stipend (₹37,000/month) for PhD. Covers tuition fees.",
          "Fulbright-Nehru Master's Fellowships: For talented Indians to pursue Master's in Psychology in USA. Fully funded.",
          "Single Girl Child Scholarship: Offered by UGC for PG students. Merit and need-based.",
          "Central Sector Scholarship: For students with 80th percentile+ in Class 12. Family income <₹8 LPA.",
          "State Government Schemes: Various state governments offer scholarships for meritorious students.",
          "Institutional Scholarships: Many colleges offer merit-based and need-based scholarships. 25-50% fee waivers based on entrance exam scores.",
          "Loan Schemes: PM-Vidyalaxmi provides 3% interest subvention for loans up to ₹10 lakhs."
        ]
      },
      {
        id: "professional-bodies",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Regulatory bodies and professional credentials.",
        color: "#10B981",
        content: [
          "Rehabilitation Council of India (RCI): Mandatory registration only if you want to be a 'Clinical Psychologist' in medical settings. Not required for Counselling Psychologists.",
          "Indian Association of Clinical Psychologists (IACP): Key professional body for psychologists. Promotes ethical practice and professional development.",
          "Indian Psychological Association (IPA): Premier professional body. Publishes journals and organizes conferences.",
          "Recommended Certifications: QPR Gatekeeper Training (suicide prevention). Career Counselling Certifications (Univariety, UCLA Ext). Trauma-Informed Care Certification. CBT Certification.",
          "Professional Ethics: Adherence to professional code of ethics. Confidentiality and client rights protection. Professional boundaries and dual relationships.",
          "Continuing Education: Regular workshops and training programs. Participation in conferences and seminars. Staying updated with latest research.",
          "Supervision: Initial practice requires supervision by senior therapist. Ongoing supervision recommended for professional development."
        ]
      },
      {
        id: "career-opportunities",
        title: "Career Opportunities",
        icon: "Rocket",
        description: "Conventional and emerging career paths.",
        color: "#EF4444",
        content: [
          "Conventional Careers: School Counselor (CBSE/ICSE schools, coaching centers). Marriage Counselor (couples therapy). NGO Field Worker (community mental health). Corporate Wellness Coach (EAP programs).",
          "New-Age Careers (Emerging and Growing Fast): Sports Psychologist (helping athletes handle pressure). UX Researcher (tech companies studying user behavior). Geriatric Counselor (mental health of elderly). Eco-Anxiety Specialist (climate change anxiety).",
          "Online Platforms: Teletherapy Counselor (YourDOST, Wysa, Amaha, BetterHelp India). Chat-based Therapy. Video Counseling. AI Supervision (supervising AI chatbots).",
          "Freelancing & Entrepreneurship: Private Practice (therapy). Corporate Trainer (soft skills, communication). Content Creator (mental health influencer, YouTube, podcasts). Workshop Facilitator (schools, corporates).",
          "Academic and Research: University Professor/Researcher. Clinical Psychology Researcher. Publishing and Contributing to Journals. Mentoring next generation of counselors.",
          "Government Sector: School Counselor (government schools). Mental Health Officer (government health departments). Tribal welfare counselor."
        ]
      },
      {
        id: "challenges-realities",
        title: "Challenges and Realities",
        icon: "AlertCircle",
        description: "Honest look at the profession's difficulties.",
        color: "#EF4444",
        content: [
          "The Burnout Risk: You listen to trauma all day. If you don't take care of yourself, you will burn out. Vicarious trauma is real.",
          "Slow Start: You won't earn big money immediately after MA. Takes 3-5 years to build reputation and client base. Initial salaries modest.",
          "Stigma: In India, people still hesitate to pay for therapy. You may have to educate clients on why they need you. Mental health still carries social stigma.",
          "Emotional Toll: Hearing difficult stories can be emotionally draining. Maintaining professional boundaries is challenging. Difficulty leaving work at work.",
          "Limited Awareness: Many people don't understand the difference between counselor and therapist. Confusion with life coaches and spiritual advisors.",
          "Regulatory Confusion: RCI registration only for Clinical Psychologists, not Counselling Psychologists. Can create confusion about credentials.",
          "Income Variability: Private practice income varies based on client base. Seasonal fluctuations. Client cancellations mean lost income.",
          "Work-Life Balance: Client emergencies can happen outside office hours. Difficult to maintain boundaries. Always 'on call' feeling."
        ]
      },
      {
        id: "emerging-trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Zap",
        description: "Future of counselling psychology in India.",
        color: "#F59E0B",
        content: [
          "AI & Chatbots: AI bots like Wysa handling basic anxiety chat. Psychologists needed to supervise these AIs and handle complex cases. Human-AI collaboration.",
          "Eco-Anxiety: New field treating anxiety related to climate change. Growing demand as climate crisis intensifies.",
          "Corporate Mental Health Revolution: No longer just 'HR.' Companies hiring full-time 'Chief Wellness Officers' (often psychologists). Mental health becoming core business strategy.",
          "Teletherapy Explosion: 60-70% of therapy already online. Virtual reality therapy emerging. Global reach for Indian counselors.",
          "Workplace Wellness: Post-COVID, companies investing heavily in employee mental health. Burnout prevention programs. Stress management workshops.",
          "Specialized Niches: Sports psychology growing. Geriatric counseling as population ages. LGBTQ+ affirming counseling. Neurodiversity-affirming approaches.",
          "Required Skills: Digital literacy essential. Data analysis for tracking outcomes. Understanding of AI and technology. Interdisciplinary collaboration."
        ]
      },
      {
        id: "skills-to-build",
        title: "Skills to Build While Still in School",
        icon: "Zap",
        description: "Practical steps for students in Classes 9-12.",
        color: "#06B6D4",
        content: [
          "Volunteer: Work with an NGO or helpline. Answer phones, listen to people. Even this teaches empathy and communication.",
          "Read Beyond Textbooks: 'The Man Who Mistook His Wife for a Hat' by Oliver Sacks. 'Maybe You Should Talk to Someone' by Lori Gottlieb. 'Emotional Intelligence' by Daniel Goleman.",
          "Learn a Language: In India, if you can counsel in Hindi, Marathi, Tamil, or Bengali, job prospects double. Therapy best done in client's mother tongue.",
          "Develop Listening Skills: Practice active listening with friends and family. Notice body language and tone. Understand what's not being said.",
          "Study Psychology: Read psychology books and articles. Follow mental health influencers (verify credentials). Understand common disorders and treatments.",
          "Build Communication Skills: Join debate club or public speaking groups. Write essays on psychological topics. Develop interviewing skills.",
          "Understand Diversity: Learn about different cultures, religions, and backgrounds. Develop cultural sensitivity. Challenge your own biases.",
          "Practice Self-Care: Understand your own mental health. Practice meditation or yoga. Develop healthy coping mechanisms.",
          "Take Online Courses: Coursera, NPTEL courses on psychology. Understand research methodology and statistics."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in This Career",
        icon: "User",
        description: "Inspiring figures in counselling psychology.",
        color: "#3B82F6",
        content: [
          "Dr. Prerna Kohli: Clinical psychologist and author. Served as advisor to President of India. Prominent face in mental health advocacy. Known for accessible mental health content.",
          "Dr. Dipti Yadav: Renowned psychologist based in Gurugram. Known for holistic approach to wellbeing. Pioneer in corporate mental health.",
          "Vindhya Undurti: Professor of psychology. Known for work on gender and mental health in India. Distinguished Publication Award winner. Advocate for feminist psychology.",
          "Anjhula Mya Bais: International psychology strategist and trauma specialist. Recipient of American Psychological Association's Global Citizen Psychologist Citation. Works on trauma and resilience.",
          "Dr. Mimansa Singh Tanwar: Head of School Mental Health program at Fortis Healthcare. Pioneering work for student mental health. Advocate for school counseling.",
          "Dr. Harish Shetty: Psychiatrist and psychotherapist. Known for humanistic approach. Author and speaker on mental health. Advocate for breaking stigma.",
          "Dr. Anjali Chhabria: Clinical psychologist and founder of mental health initiatives. Pioneer in workplace mental health. Advocate for corporate wellness."
        ]
      }
    ]
  }
};
