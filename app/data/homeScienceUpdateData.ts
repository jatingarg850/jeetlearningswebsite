import type { CareerPageData } from './careerPageData';

const GREEN = "#047857";
const GREEN2 = "#10B981";

export const homeScienceUpdateData: Record<string, CareerPageData> = {
  home_science: {
    slug: "home_science",
    badge: "🏠 The Science of Everyday Living for Class 10+",
    heading: "Home Science",
    subheading: "Turn everyday life into a science. Learn nutrition, child development, textiles, and resource management to build healthier families and stronger communities.",
    whyCards: [
      { icon: "Leaf", title: "Practical & Future Ready", description: "Use science to solve real-life problems in food, health, textiles, and family well-being.", borderColor: "#10B981" },
      { icon: "Users", title: "People-Centered Career", description: "Work directly with families, children, women, schools, and communities to improve quality of life.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Growing Wellness Demand", description: "Nutrition, lifestyle management, and consumer education are expanding across India.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Entrepreneurship Friendly", description: "Start catering services, nutrition consulting, daycare support, stitching units, or home-based businesses.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years B.Sc. / Diploma Options", color: "bg-green-100 text-green-700" },
      { label: "Entry Path", detail: "CUET, State Exams, Merit Admission", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹2.5L–₹12L+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "4 Core Areas", label: "Nutrition, Textiles, Child Dev., Resource Mgmt.", gradient: "from-green-500 to-emerald-600" },
      { value: "High Scope", label: "Schools, NGOs, Wellness, Food Industry", gradient: "from-blue-500 to-cyan-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Home Science?",
        icon: "Target",
        description: "Understanding the discipline and its scope.",
        color: GREEN,
        content: [
          "Home Science is an applied science that focuses on improving the quality of life for individuals and families through scientific knowledge and practical skills.",
          "It encompasses four core areas: Nutrition and Food Science, Child Development and Family Relations, Textiles and Clothing, and Resource Management.",
          "The discipline bridges the gap between scientific research and everyday living, making complex concepts accessible and applicable to household and community settings.",
          "Home Science professionals work to enhance health, well-being, sustainability, and quality of life through evidence-based practices and community engagement.",
          "It is a dynamic field that evolves with changing social needs, technological advancements, and emerging health and wellness trends."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world workflow of a home science professional.",
        color: GREEN2,
        content: [
          "Morning: Review nutrition data for a school meal program and prepare educational materials on balanced diets for an upcoming community workshop.",
          "Mid-Morning: Conduct a field visit to assess food safety practices at a local catering unit and provide recommendations for improvement.",
          "Afternoon: Develop a low-cost, nutrient-rich recipe booklet for a women's self-help group and conduct a hands-on cooking demonstration.",
          "Late Afternoon: Meet with parents to discuss child development milestones, nutrition for growing children, and family wellness strategies.",
          "Evening: Document observations, update program records, and plan next week's extension activities and community outreach initiatives."
        ]
      },
      {
        id: "who",
        title: "Personality Traits & Skills Required",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: GREEN,
        content: [
          "Empathy and Compassion: Genuine desire to improve people's lives and well-being through practical solutions.",
          "Analytical Mindset: Ability to assess situations, identify problems, and develop evidence-based solutions.",
          "Creativity and Innovation: Skill in designing recipes, educational materials, and practical solutions tailored to diverse needs.",
          "Communication Excellence: Ability to explain complex concepts clearly to varied audiences including children, families, and professionals.",
          "Organizational Skills: Proficiency in planning, time management, resource allocation, and project coordination.",
          "Practical Orientation: Comfort with hands-on work, fieldwork, and real-world application of knowledge.",
          "Cultural Sensitivity: Understanding and respect for diverse family structures, dietary practices, and cultural values."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete scope of home science work.",
        color: GREEN2,
        content: [
          "Nutrition Assessment and Planning: Evaluate dietary needs, design balanced meal plans, and provide nutrition counseling for individuals and groups.",
          "Child Development Support: Create age-appropriate activities, monitor developmental milestones, and provide guidance to parents and caregivers.",
          "Food Safety and Quality: Ensure food safety standards, conduct quality checks, and educate communities about safe food handling practices.",
          "Textile and Clothing Guidance: Advise on fabric selection, care, maintenance, and sustainable fashion choices.",
          "Resource Management: Teach budgeting, time management, waste reduction, and efficient household planning.",
          "Community Education: Conduct workshops, awareness campaigns, and extension programs on health, nutrition, and family wellness.",
          "Program Evaluation: Monitor outcomes, collect data, and assess the impact of interventions and programs.",
          "Entrepreneurship Support: Assist in developing home-based businesses, catering services, and income-generating activities."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways & Educational Routes",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: GREEN,
        content: [
          "After Class 10: Home Science can be pursued as an elective subject in Class 11-12, providing foundational knowledge and skills.",
          "After Class 12: Pursue B.Sc. Home Science, B.Sc. Family and Community Science, or diploma programs in nutrition, food science, or textile design.",
          "Undergraduate Specializations: Food and Nutrition, Child Development, Human Development, Textile and Clothing, Family Resource Management.",
          "Postgraduate Options: M.Sc. Home Science, M.Sc. Nutrition and Dietetics, M.Sc. Child Development, M.Sc. Extension Education.",
          "Research and Advanced Study: Ph.D. programs in nutrition, food science, family studies, or related disciplines.",
          "Career Progression: Entry-level positions → Specialist roles → Leadership positions in education, healthcare, NGOs, or entrepreneurship."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot & Salary Outlook",
        icon: "TrendingUp",
        description: "Current opportunities and earning potential.",
        color: GREEN2,
        content: [
          "Entry-Level (0-2 years): ₹2.5L–₹4.5L annually for positions like Nutrition Assistant, Program Coordinator, or Teaching Assistant.",
          "Mid-Level (3-7 years): ₹5L–₹8L annually for roles such as Nutrition Educator, Program Manager, or Senior Coordinator.",
          "Senior-Level (8+ years): ₹8L–₹15L+ annually for positions like Consultant, Senior Manager, or Academic Faculty.",
          "Entrepreneurial Ventures: Income varies widely based on business model; successful catering, consulting, or coaching services can generate ₹10L–₹50L+ annually.",
          "Demand Drivers: Increasing focus on health and wellness, school nutrition programs, women empowerment initiatives, and sustainable living practices.",
          "Growth Sectors: Healthcare, education, food industry, NGOs, government programs, and wellness consulting."
        ]
      },{
        id: "institutions",
        title: "Top Institutions & Learning Centers",
        icon: "Building2",
        description: "Where to pursue home science education.",
        color: GREEN,
        content: [
          "University of Delhi: Strong Home Science programs with excellent faculty and research opportunities.",
          "SNDT Women's University, Mumbai: Renowned for Family and Community Science programs.",
          "Banaras Hindu University (BHU): Comprehensive Home Science curriculum with specialization options.",
          "Lady Irwin College, Delhi: Prestigious institution with strong industry connections.",
          "Avinashilingam Institute for Home Science and Higher Education for Women, Tamil Nadu: Specialized focus on applied home science.",
          "State Universities: Most state universities offer Home Science programs with varying specializations.",
          "Diploma Institutes: Polytechnics and vocational institutes offering shorter, skill-focused programs.",
          "Online and Distance Learning: Several universities offer flexible learning options for working professionals."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship & Financial Support",
        icon: "Award",
        description: "Funding opportunities for education.",
        color: GREEN2,
        content: [
          "National Scholarship Portal (NSP): Central government scholarships for merit-based and need-based support.",
          "State Government Schemes: Various states offer scholarships for girls' education and applied sciences.",
          "University Scholarships: Many institutions provide merit scholarships, fee waivers, and financial assistance.",
          "Women-Focused Schemes: Special scholarships encouraging girls' education in science and professional fields.",
          "Institutional Aid: Colleges often have their own scholarship programs for deserving students.",
          "Skill Development Grants: Government-funded programs offering subsidized training in nutrition, food safety, and entrepreneurship.",
          "Corporate Scholarships: Some companies offer educational support for students pursuing relevant fields."
        ]
      },
      {
        id: "certifications",
        title: "Professional Certifications & Credentials",
        icon: "Award",
        description: "Credentials that enhance career prospects.",
        color: GREEN,
        content: [
          "FSSAI Food Safety Certification: Essential for food handling, catering, and nutrition-related roles.",
          "Nutrition and Dietetics Certifications: Recognized credentials for nutrition counseling and wellness work.",
          "Early Childhood Education (ECE) Certificates: Valuable for child development and preschool roles.",
          "Textile and Fashion Design Certifications: Short courses enhancing skills in clothing and textile work.",
          "Entrepreneurship and Business Management Courses: Useful for launching and managing home-based businesses.",
          "Advanced Nutrition Certifications: Specialized credentials in clinical nutrition, sports nutrition, or pediatric nutrition.",
          "Extension Education Certificates: Relevant for community outreach and program management roles."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities & Roles",
        icon: "Briefcase",
        description: "Conventional and emerging career options.",
        color: GREEN2,
        content: [
          "Traditional Roles: Home Science Teacher, Nutrition Counselor, Child Development Worker, Textile Consultant, Extension Officer.",
          "Healthcare Roles: Dietitian, Nutrition Specialist, Health Educator, Wellness Coach, Hospital Nutritionist.",
          "Emerging Roles: Wellness Content Creator, School Meal Planner, Sustainable Living Consultant, Food Safety Auditor, Family Counselor.",
          "Entrepreneurial Opportunities: Catering services, nutrition consulting, boutique management, daycare centers, handmade product businesses.",
          "Social Impact Roles: NGO Program Manager, Community Health Worker, Women Empowerment Coordinator, Livelihood Specialist.",
          "Research and Development: Food scientist, nutrition researcher, textile researcher, or family studies researcher.",
          "Corporate Roles: Food companies, wellness programs, corporate training, and consumer education departments."
        ]
      },
      {
        id: "challenges",
        title: "Challenges & Realities",
        icon: "AlertTriangle",
        description: "The practical challenges of the field.",
        color: GREEN,
        content: [
          "Awareness Gap: Home Science is often misunderstood; professionals must continuously educate others about the field's scope and value.",
          "Lower Visibility: Compared to engineering or medicine, career pathways are less widely promoted in schools and media.",
          "Practical Skill Requirement: Success depends heavily on real-world application and hands-on experience, not just theoretical knowledge.",
          "Income Growth Timeline: Significant earnings typically come after specialization, advanced degrees, or entrepreneurial ventures.",
          "Continuous Learning: Rapid changes in nutrition science, food trends, technology, and family dynamics require ongoing professional development.",
          "Work-Life Balance: Community-based roles may involve irregular hours and fieldwork in challenging environments.",
          "Gender Stereotyping: The field is often perceived as traditionally feminine; male professionals may face social biases."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next in home science (2025-2035).",
        color: GREEN2,
        content: [
          "Personalized Nutrition: AI-driven diet plans tailored to individual health profiles, genetics, and lifestyle preferences.",
          "Digital Health Integration: Wearable technology, health apps, and digital tracking for nutrition and wellness monitoring.",
          "Sustainable and Ethical Living: Growing demand for eco-friendly practices, sustainable textiles, and circular economy principles.",
          "Mental Health and Family Wellness: Increased focus on psychological well-being, stress management, and holistic family support.",
          "Food Security and Innovation: Development of nutrient-dense, sustainable food sources and innovative cooking methods.",
          "Community Health Programs: Expansion of public health initiatives, nutrition programs, and preventive healthcare.",
          "Entrepreneurship and Social Enterprise: More opportunities for home science professionals to create social enterprises and impact-driven businesses."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build Now",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Master Cooking Fundamentals: Learn balanced meal preparation, food safety, and nutritious cooking techniques.",
          "Develop Financial Literacy: Practice budgeting, expense tracking, and smart financial planning.",
          "Learn Textile Skills: Develop sewing, fabric care, and basic tailoring abilities.",
          "Study Nutrition Science: Read about food groups, vitamins, minerals, and healthy lifestyle practices.",
          "Explore Child Development: Understand developmental stages and age-appropriate activities.",
          "Volunteer in Community: Participate in school events, community kitchens, childcare activities, or health programs.",
          "Develop Communication Skills: Practice explaining health and wellness concepts clearly to diverse audiences.",
          "Stay Updated: Follow nutrition research, wellness trends, and sustainable living practices."
        ]
      },
      {
        id: "personalities",
        title: "Inspiring Figures in Home Science",
        icon: "User",
        description: "People who shaped the field.",
        color: GREEN2,
        content: [
          "Dr. Rajammal P. Devadas: Pioneer in Home Science education in India; former Vice Chancellor and advocate for applied science in everyday life.",
          "Dr. Prema Ramachandran: Renowned nutrition expert who advanced public health nutrition and food security initiatives in India.",
          "Dr. M.S. Swaminathan: Agricultural scientist and nutrition advocate who contributed to food security and sustainable agriculture.",
          "Dr. Kamla Bhasin: Women's rights activist and educator who integrated home science with women empowerment and community development.",
          "Contemporary Leaders: Modern home science professionals advancing nutrition science, sustainable fashion, and family wellness through research and community programs."
        ]
      },
      {
        id: "topcolleges",
        title: "Top Colleges & Universities",
        icon: "Building2",
        description: "Premier institutions for home science education.",
        color: GREEN,
        content: [
          "University of Delhi: Multiple affiliated colleges offering comprehensive Home Science programs with strong faculty and research facilities.",
          "SNDT Women's University, Mumbai: Specialized in Family and Community Science with excellent placement records.",
          "Banaras Hindu University (BHU): Established Home Science department with diverse specialization options and research opportunities.",
          "Lady Irwin College, Delhi: Prestigious institution known for quality education and strong industry connections.",
          "Avinashilingam Institute, Tamil Nadu: Specialized focus on applied home science with excellent practical training.",
          "Maharaja Sayajirao University, Vadodara: Strong Home Science program with emphasis on community engagement.",
          "Andhra University, Visakhapatnam: Comprehensive curriculum with specializations in nutrition and family studies.",
          "Osmania University, Hyderabad: Well-established Home Science program with good placement opportunities."
        ]
      }
    ]
  }
};
