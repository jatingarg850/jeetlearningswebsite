import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const businessManagementUpdateData: Record<string, CareerPageData> = {
  bpo: {
    slug: "bpo",
    badge: "The Global Engine for Class 10+",
    heading: "BUSINESS PROCESS OUTSOURCING (BPO)",
    subheading: "Connect the world. Solve problems across continents. Build careers in India's $45B export powerhouse. ₹3L–₹55L+ salaries with 13% CAGR growth.",
    whyCards: [
      { icon: "Globe", title: "$45B Export Value by 2026", description: "India's BPO sector reaching $45B by late 2026. Millions of jobs. Global companies depend on Indian talent.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹3L–₹55L+ Salaries", description: "Entry-level ₹3L–₹4.5L. Mid-level ₹6L–₹10L. Senior ₹15L–₹25L. Leadership ₹35L–₹55L+. Fast growth trajectory.", borderColor: "#059669" },
      { icon: "Zap", title: "13% CAGR Growth", description: "Growing faster than traditional IT services. Emerging hubs in Tier-2 cities. Remote work opportunities abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Back Office to Experience Center", description: "India evolving from 'Back Office of World' to high-tech 'Experience Center.' Humans and AI working together 24/7.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Class 12 + 1-3 Month Training", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "No Exam -  Direct Hiring", color: "bg-purple-100 text-purple-700" },
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
        ],
      contentHi: [
        "सabyasachi मुकेherjee: एक महान डिजाइनर जिसने वैश्विक लक्जरी ब्रांड की स्थापना की। परंपरा और आधुनिकता को मिलाने में माहिर।",
        "फाल्गुनी नायार: नायका की संस्थापक। भारत में सौंदर्य और फैशन खुदरा में क्रांति लाई। एक अरब डॉलर का ब्रांड बनाया।",
        "इशा अंबाणी: रिलायंस ब्रांड्स का विशाल डिजिटल और भौतिक विस्तार का नेतृत्व कर रही हैं। भारत में वैश्विक लक्जरी को लाने में महत्वपूर्ण भूमिका।",
        "Manish मल्होत्रा: एक प्रतिष्ठित डिजाइनर, जो दुल्हन के कपड़ों के लिए जाने जाते हैं। उन्होंने सेलिब्रिटी की प्रशंसा और नवाचार के माध्यम से एक साम्राज्य बनाया।",
        "अनिता डोंग्रे: भारत में टिकाऊ फैशन के अग्रणी। एंडलेबल की संस्थापक। नैतिक फैशन के समर्थक।",
        "रीतू कुमार: 50+ वर्षों के अनुभव के साथ एक अनुभवी डिजाइनर। एक प्रतिष्ठित भारतीय फैशन ब्रांड का निर्माण किया।",
        "दीपिका पादुकोण: एक अभिनेत्री जो अब उद्यमी हैं। उन्होंने \"ऑल थिंग्स दीपिका\" (एडीपी) ब्रांड की स्थापना की। मनोरंजन और फैशन को एक साथ मिलाकर।"
      ]
      }
    ]
  }
};



