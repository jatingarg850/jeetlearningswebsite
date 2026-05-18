import { CareerPageData } from './careerPageData';

const COLOR1 = "#EC4899";
const COLOR2 = "#F472B6";

export const media_and_communicationUpdateData: Record<string, CareerPageData> = {
  international_relations: {
    slug: "international_relations",
    badge: "Career Exploration for Class 10+",
    heading: "International Relations",
    subheading: "Explore opportunities in International Relations.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in International Relations.", borderColor: "#10B981" },
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
        description: "Understanding International Relations.",
        color: COLOR1,
        content: [
          "International Relations is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ],
      contentHi: [
        "पारंपरिक: प्रमुख एजेंसियों में पीआर कार्यकारी; समूह में कॉर्पोरेट संचार प्रबंधक; सरकारी विभागों में मीडिया संबंध अधिकारी; दूतावासों और अंतर्राष्ट्रीय संगठनों में सार्वजनिक मामलों के विशेषज्ञ",
        "डिजिटल पीआर विशेषज्ञ (ऑनलाइन प्रतिष्ठा प्रबंधन फर्मों में); एआई-संचालित मीडिया निगरानी विश्लेषक (पीआर-टेक्न कंपनियों में); डी2सी और जीवनशैली ब्रांडों में प्रभावशाली व्यक्ति संबंध प्रबंधक; कॉर्पोरेट जोखिम प्रबंधन फर्मों में संकट संचार विशेषज्ञ",
        "दूरस्थ/उद्यमिता: अंतर्राष्ट्रीय ब्रांडों और स्टार्टअप के लिए स्वतंत्र पीआर सलाहकार; एक बुटीक पीआर एजेंसी या कॉर्पोरेट संचार फर्म के संस्थापक; वैश्विक कंपनियों के लिए दूरस्थ ब्रांड प्रतिष्ठा प्रबंधक; सार्वजनिक संबंध शिक्षाविद् और सामग्री निर्माता"
      ]
      }
    ]
  }
};


