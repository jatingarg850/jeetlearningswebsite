import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const artsAndDesignUpdateData: Record<string, CareerPageData> = {
  accessory_design: {
    slug: "accessory_design",
    badge: "The Detail Architect for Class 10+",
    heading: "Accessory Design",
    subheading: "Creating the 'magic details' that define how people look and feel—from luxury jewelry to wearable tech.",
    whyCards: [
      { icon: "Briefcase", title: "Billion-Dollar Industry", description: "India's personal accessories market projected to reach $3.01B by 2030, growing at 7.6% annually.", borderColor: "#10B981" },
      { icon: "Layers", title: "Material Mastery", description: "Master leather, metals, textiles, and sustainable 'vegan' materials with 3D printing technology.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Luxury Growth Hub", description: "Bangalore, Mumbai, Jaipur, and Kanpur are global centers for accessory design and manufacturing.", borderColor: "#3B82F6" },
      { icon: "Fingerprint", title: "Artisan Collaboration", description: "Bridge modern CAD design with ancient craftsmanship—the secret sauce of Indian accessory design.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des) + 2 Years (M.Des)", color: "bg-green-100 text-green-700" },
      { label: "Software", detail: "Rhino, Matrix, Adobe Illustrator, CAD", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹4.5L–₹60L+ (Entry to Senior)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$3.01B", label: "Market Size by 2030", gradient: "from-green-500 to-green-600" },
      { value: "7.6%", label: "Annual Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The soul of personal style—creating everything people wear or carry.",
        color: BLUE,
        content: [
          "Personal Accessories: Handbags, footwear, belts, and eyewear that complete an outfit.",
          "Luxury & Lifestyle: Fine and costume jewelry, watches, and wearable tech devices.",
          "Space & Leisure: Home décor accents, travel gear, and high-fashion tech cases.",
          "The Designer's Role: Part engineer, part artist, part trend-spotter. You understand how leather bends, how metal shines, and how a shoe supports a foot. You bridge the gap between creative dreams and products people buy in stores.",
          "Industry Scope: In 2026, this is a booming billion-dollar industry where traditional craftsmanship meets high-tech 3D printing and sustainable materials."
        ],
      contentHi: [
        "राज रेड्डी: एआई और रोबोटिक्स के क्षेत्र में एक वैश्विक अग्रणी, ट्यूरिंग पुरस्कार (कंप्यूटिंग का 'नोबेल पुरस्कार') के विजेता।",
        "दिवाकर वाइस: भारत के पहले 3डी-प्रिंटेड मानवोइड रोबोट और माइंड-कंट्रोल्ड व्हीलचेयर के डेवलपर।",
        "समय कोहली: ग्रे ऑरेंज के सह-संस्थापक, जो भारत की सबसे सफल गोदाम रोबोटिक्स कंपनियों में से एक है।",
        "विजय कुमार: एक प्रोफेसर, जो UPenn (USA) में 'माइक्रो-यूएवी' (छोटे ड्रोन) पर अपने अद्भुत काम के लिए जाने जाते हैं।",
        "डॉ. गीता वरदान: एक पूर्व निदेशक, जिन्होंने इसरो में महत्वपूर्ण भूमिका निभाई और हमारे अंतरिक्ष-यात्रा करने वाले मशीनों को नियंत्रित करने वाले प्रणालियों में महत्वपूर्ण भूमिका निभाई।"
      ]
      }
    ]
  }

};


