import { CareerPageData } from './careerPageData';

const COLOR1 = "#7C3AED";
const COLOR2 = "#A78BFA";

export const architecture_constructionUpdateData: Record<string, CareerPageData> = {
  architecture: {
    slug: "architecture",
    badge: "Career Exploration for Class 10+",
    heading: "Architecture",
    subheading: "Explore opportunities in Architecture.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Architecture.", borderColor: "#10B981" },
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
      titleHi: "यह करियर किस बारे में है?",
        icon: "Target",
        description: "Understanding Architecture.",
      descriptionHi: "वास्तुकला को समझना।",
        color: "#7C3AED",
        content: [
          "Architecture is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ],
      contentHi: [
        "पारंपरिक: उद्योग में पारंपरिक भूमिकाएँ",
        "नई तकनीक और एआई-संचालित: उभरते हुए भूमिकाएँ",
        "दूरस्थ/उद्यमिता: फ्रीलांस और स्टार्टअप के अवसर"
      ]
      }
    ]
  },
};


