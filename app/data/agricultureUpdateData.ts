import { CareerPageData } from './careerPageData';

const COLOR1 = "#C20000";
const COLOR2 = "#DA1313";

export const agricultureUpdateData: Record<string, CareerPageData> = {
  agri_business_management: {
    slug: "agri_business_management",
    badge: "Career Exploration for Class 10+",
    heading: "Agri-Business Management",
    subheading: "Explore opportunities in Agri-Business Management.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Agri-Business Management.", borderColor: "#10B981" },
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
        description: "Understanding Agri-Business Management.",
      descriptionHi: "कृषि-व्यवसाय प्रबंधन को समझना।",
        color: "#C20000",
        content: [
          "Agri-Business Management is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ],
      contentHi: [
        "डॉ. वर्गेसे कुरियन (एनडीडीबी के संस्थापक): सहकारी मॉडलों के माध्यम से भारत के पशुधन क्षेत्र और डेयरी फार्मिंग में क्रांति लाई।",
        "डॉ. एम.एस. सुवामिनाथन (कृषि वैज्ञानिक): पशु आनुवंशिकी और टिकाऊ पशुपालन में अग्रणी।",
        "डॉ. राजेन्द्र सिंह (पशु विज्ञान विशेषज्ञ): पशु पोषण और उत्पादन अनुकूलन में अग्रणी शोधकर्ता।",
        "डॉ. हरि बहादुर (IVRI निदेशक): उष्णकटिबंधीय पशु रोगों और प्रबंधन में अग्रणी अनुसंधान।",
        "सुरेश नीटिया (वेंकी के संस्थापक): भारत की सबसे बड़ी पोल्ट्री कंपनी का निर्माण किया, जिसमें विश्व-स्तरीय पशु विज्ञान प्रथाएं थीं।",
        "डॉ. आनंद महिंद्रा (महिंद्रा समूह): पशुधन और पशु विज्ञान प्रौद्योगिकी में निवेश।",
        "डॉ. नीता अंबानी (रिलायंस इंडस्ट्रीज): भारत में टिकाऊ और नैतिक पशु विज्ञान पद्धतियों के पक्ष में।"
      ]
    }
  ]
};

// Add animal_science to the main export
agricultureUpdateData.animal_science = animalScienceData;
