import { CareerPageData } from './careerPageData';

const COLOR1 = "#EC4899";
const COLOR2 = "#F472B6";

export const sports_and_physical_activitiesUpdateData: Record<string, CareerPageData> = {
  physical_trainer: {
    slug: "physical_trainer",
    badge: "Career Exploration for Class 10+",
    heading: "Physical Trainer",
    subheading: "Explore opportunities in Physical Training.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Physical Training.", borderColor: "#10B981" },
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
        description: "Understanding Physical Training.",
        color: COLOR1,
        content: [
          "Physical Training is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ],
      contentHi: [
        "एआई-आधारित प्रशिक्षण: पहनने योग्य उपकरण और एआई एनालिटिक्स प्रशिक्षण विधियों में क्रांति ला रहे हैं।",
        "ई-स्पोर्ट्स का विकास: गेमिंग को एक खेल के रूप में मान्यता, जिसमें बढ़ते हुए पुरस्कारों और अवसरों का समावेश है।",
        "खेलों में महिलाओं: महिलाओं के खेलों में अवसरों और निवेश में वृद्धि।",
        "फ्रैंचाइज लीग: आईपीएल, आईएसएल, पीकेएल जैसे मॉडलों के विकास से अधिक पेशेवर अवसर पैदा हो रहे हैं।",
        "वैश्विक भागीदारी: भारतीय एथलीट अंतर्राष्ट्रीय लीगों में प्रतिस्पर्धा कर रहे हैं।",
        "खेल विज्ञान: उन्नत बायोमैकेनिक्स, पोषण और रिकवरी विज्ञान।",
        "मानसिक स्वास्थ्य पर ध्यान: मनोवैज्ञानिक सहायता और मानसिक कल्याण पर अधिक जोर।",
        "बाजार विकास: भारतीय खेल उद्योग 2033 तक $60.1 बिलियन तक पहुंचने का अनुमान है।"
      ]
      }
    ]
  }
};


