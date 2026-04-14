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
        title: "What is This Career All About?",
        icon: "Target",
        description: "A multidisciplinary science for better living.",
        color: GREEN,
        content: [
          "Home Science is the applied science of everyday life. It studies how to improve nutrition, clothing, housing, family relationships, child development, and resource management.",
          "The field turns household challenges into practical solutions. From planning a balanced diet to choosing safe fabrics, managing budgets, and supporting child growth, Home Science is about making daily life healthier and smarter.",
          "It is not limited to 'home work.' Modern Home Science connects with health, education, food technology, public policy, fashion, and community development.",
          "This career is ideal for people who want to serve families and communities while using science, creativity, and practical decision-making."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Lifestyle Specialist",
        icon: "Clock",
        description: "Real workflow of a home science professional.",
        color: GREEN2,
        content: [
          "8:30 AM - Morning Planning: Review nutrition charts for a school meal program and prepare content for today's awareness session on balanced diets.",
          "10:00 AM - Field Visit: Visit a community center to check food safety practices, household budgeting habits, and childcare support activities.",
          "1:00 PM - Creative Work: Develop a low-cost recipe booklet, fabric care guide, or handmade product design for a local self-help group.",
          "3:30 PM - Counseling Session: Meet students or parents to discuss healthy routines, adolescent nutrition, study habits, or family well-being.",
          "6:00 PM - Reporting and Planning: Update documentation, track outcomes, and prepare the next workshop or extension activity."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: GREEN,
        content: [
          "Care and Empathy: You genuinely want to help people improve their daily lives.",
          "Practical Thinking: You enjoy solving real-world problems with simple, workable solutions.",
          "Creativity: You like designing recipes, outfits, teaching aids, or home-based projects.",
          "Communication Skills: You can explain health, food, and family topics clearly to different audiences.",
          "Organization: You manage time, space, money, and resources efficiently."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete home science process.",
        color: GREEN2,
        content: [
          "Nutrition Planning: Designing balanced meals for children, adults, and vulnerable groups.",
          "Child Development Support: Creating activities that improve learning, behavior, and growth.",
          "Textile and Apparel Care: Choosing, maintaining, and designing clothing and fabrics.",
          "Resource Management: Teaching budgeting, time management, and efficient household planning.",
          "Consumer Education: Helping people make informed choices about food, products, and services.",
          "Community Outreach: Running workshops, awareness drives, and extension programs.",
          "Entrepreneurial Support: Assisting small businesses, catering units, and home-based ventures."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: GREEN,
        content: [
          "After Class 10: Choose Arts, Science, or Commerce depending on your school options. Home Science welcomes students from multiple streams.",
          "After Class 12: Pursue B.Sc. Home Science, B.Sc. Family and Community Science, or related diploma programs.",
          "After Graduation: Move into M.Sc. Home Science, Nutrition, Human Development, Extension Education, or Food and Nutrition.",
          "Specializations: Food and Nutrition, Child Development, Human Development, Textile and Clothing, Family Resource Management, Extension and Communication.",
          "Career Progression: Diploma -> Graduation -> Postgraduation -> Research, teaching, counseling, entrepreneurship, or social sector work."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, roles, and industry demand.",
        color: GREEN2,
        content: [
          "Entry-Level (Nutrition/Program Assistant, 0-2 years): ₹2.5L–₹4.5L annually.",
          "Mid-Level (Educator/Coordinator, 3-7 years): ₹5L–₹8L annually.",
          "Senior-Level (Specialist/Consultant, 8-12 years): ₹8L–₹15L annually.",
          "Entrepreneurial Income: Can grow much higher through catering, consulting, tailoring units, or coaching services.",
          "Demand Drivers: Health awareness, school nutrition programs, women empowerment, and lifestyle education."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries, institutions, and opportunities.",
        color: GREEN,
        content: [
          "Schools and Colleges: Teaching, curriculum support, and student development programs.",
          "Hospitals and Wellness Centers: Nutrition counseling, dietary planning, and patient support.",
          "NGOs and Government Projects: Women and child development, community education, and livelihood programs.",
          "Food and Textile Industry: Product development, quality control, consumer education, and sustainability.",
          "Self-Employment: Catering, baking, stitching, boutique management, and home-based consulting."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions and learning pathways.",
        color: GREEN,
        content: [
          "University of Delhi and affiliated colleges for strong academic Home Science programs.",
          "SNDT Women's University, Mumbai for family and community science options.",
          "BHU and other central/state universities offering nutrition and home science specializations.",
          "Many state universities and women's colleges also offer strong degree and diploma routes.",
          "Choose programs with labs, fieldwork, extension activity, and industry exposure."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: GREEN2,
        content: [
          "National Scholarship Portal (NSP): Central scholarships for eligible students.",
          "State Government Schemes: Merit and need-based support for higher education.",
          "University Scholarships: Many colleges provide fee waivers for deserving students.",
          "Women-Focused Support: Several schemes encourage girls' education in applied sciences.",
          "Skill Development Programs: Subsidized certifications in nutrition, food safety, tailoring, and entrepreneurship."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials that add value.",
        color: GREEN,
        content: [
          "FSSAI Food Safety Training: Useful for food handling, catering, and nutrition roles.",
          "Nutrition and Dietetics Certifications: Helpful for counseling and wellness work.",
          "Early Childhood Education Certificates: Valuable for child development roles.",
          "Textile and Fashion Short Courses: Add practical strength for apparel and clothing work.",
          "Entrepreneurship Training: Helpful for launching home-based or small-scale businesses."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: GREEN2,
        content: [
          "Conventional Roles: Home Science Teacher, Nutrition Assistant, Child Development Worker, Textile Consultant, Extension Officer.",
          "New-Age Roles: Wellness Content Creator, School Meal Planner, Family Counselor, Food Safety Associate, Sustainable Living Consultant.",
          "Entrepreneurship: Catering, baking, diet planning, stitching, boutique business, daycare services, and handmade products.",
          "Social Impact Roles: Work with NGOs, community programs, women empowerment projects, and public health campaigns."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the field.",
        color: GREEN,
        content: [
          "Awareness Gap: Many people still misunderstand the subject, so you may need to explain its value often.",
          "Lower Visibility: Compared with engineering or medicine, career pathways are less advertised.",
          "Practical Skill Need: Success depends on real-world application, not just theory.",
          "Income Growth Takes Time: Strong earnings usually come after specialization, teaching, or entrepreneurship.",
          "Continuous Learning: Food trends, wellness standards, and family needs keep changing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025-2035)",
        icon: "Sparkles",
        description: "What's next in Home Science.",
        color: GREEN2,
        content: [
          "Personalized Nutrition: Diet plans based on health goals, lifestyle, and digital tracking.",
          "Smart Kitchens: Technology helping families manage food, safety, and waste more efficiently.",
          "Sustainable Textiles: Growing demand for eco-friendly fabrics and circular fashion.",
          "Child and Family Wellness: More focus on mental health, early learning, and family support systems.",
          "Community Health Programs: Home science professionals supporting public health, nutrition, and livelihood projects."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Learn Cooking Basics: Practice balanced meals, hygiene, and safe food handling.",
          "Improve Budgeting: Manage pocket money, shopping lists, and monthly planning.",
          "Practice Sewing and Textile Care: Learn stitching, fabric maintenance, and simple design.",
          "Read About Nutrition: Study food groups, vitamins, and healthy routines.",
          "Volunteer Locally: Help in school events, community kitchens, or childcare activities."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Contributors",
        icon: "User",
        description: "People who shaped Home Science and nutrition education.",
        color: GREEN2,
        content: [
          "Dr. Rajammal P. Devadas: A major pioneer in Home Science education in India and a former vice chancellor.",
          "Dr. Prema Ramachandran: A respected nutrition expert who advanced public health nutrition in India.",
          "Indian Home Science faculty and extension educators: The professionals who brought nutrition, child development, and family welfare education to communities across the country."
        ]
      }
    ],
  },
};
