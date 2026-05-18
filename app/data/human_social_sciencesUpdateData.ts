import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const human_social_sciencesUpdateData: Record<string, CareerPageData> = {
  anthropologist: {
    slug: "anthropologist",
    badge: "Career Exploration for Class 10+",
    heading: "Anthropologist",
    subheading: "Explore opportunities in Anthropologist.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Anthropologist.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "High demand in the industry.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Work globally in this field.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation", description: "Be part of industry innovation.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Varies", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "Competitive", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "High", label: "Industry Growth", gradient: "from-green-500 to-green-600" },
      { value: "Global", label: "Opportunities", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding Anthropologist.",
        color: RED,
        content: [
          "Anthropologist is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ],
      contentHi: [
        "बीए/बीए (ऑनर्स) राजनीतिक विज्ञान: सरकार ₹10,000-50,000/वर्ष, निजी ₹50,000-2,00,000/वर्ष (3 वर्ष).",
        "राजनीति विज्ञान में एमए: सरकार ₹15,000-60,000/वर्ष, निजी ₹80,000-3,00,000/वर्ष (2 वर्ष).",
        "सार्वजनिक नीति में पीजी डिप्लोमा: ₹1,00,000-3,00,000 (1-2 वर्ष)",
        "राजनीति विज्ञान में पीएचडी: यूजीसी/जेआरएफ के लिए छात्रवृत्ति उपलब्ध, या कुल ₹1,00,000-3,00,000 (3-5 वर्ष)",
        "अतिरिक्त लागतें: रहने/छात्रावास (₹6,000-15,000/माह), अनुसंधान सामग्री (₹10,000-30,000), क्षेत्र-आधारित यात्रा (₹20,000-50,000)."
      ]
      }
    ]
  }
};


