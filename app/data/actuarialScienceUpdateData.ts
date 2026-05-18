import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const actuarialScienceUpdateData: Record<string, CareerPageData> = {
  actuarial_science: {
    slug: "actuarial_science",
    badge: "The Architects of Risk for Class 10+",
    heading: "Actuarial Science",
    subheading: "Predict the future using math. Measure financial risk and shape the decisions that keep the world's financial systems stable.",
    whyCards: [
      { icon: "Target", title: "Risk Detectives", description: "Use math to predict future events and their financial impact.", borderColor: "#F59E0B" },
      { icon: "TrendingUp", title: "Highest Earning Potential", description: "One of the highest-paying careers in India with ₹1Cr+ for leaders.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Global Opportunities", description: "Work anywhere in the world with this universally valued skill.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Growing Demand", description: "India needs 25,000 actuaries by 2030; currently only 500-700 exist.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "6-10 Years (ACET + 13-15 Exams)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹6L–₹3Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "4.8-5.2% CAGR, Global Demand", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "500-700", label: "Actuaries in India", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
      titleHi: "यह करियर किस बारे में है?",
        icon: "Target",
        description: "The science of predicting the future using mathematics.",
      descriptionHi: "गणित का उपयोग करके भविष्य की भविष्यवाणी का विज्ञान।",
        color: BLUE,
        content: [
          "The Mystery: Have you ever wondered how insurance companies decide how much you should pay for car insurance, or how a bank knows if it's safe to lend money for a massive bridge project? They don't just guess; they use Actuarial Science.",
          "The Definition: Actuarial Science is the art and science of predicting the future using math. Actuaries are 'Risk Detectives' who use mathematics, statistics, and financial theory to measure the probability of future events.",
          "The Impact: They calculate the financial impact of events like accidents, natural disasters, or even how long people might live.",
          "Global Powerhouse: In today's India, this career is a global powerhouse. As our economy grows, every new business, high-speed train, or health insurance policy needs an actuary to ensure it is financially stable.",
          "Why it matters: India is the 'Insurance Hub of Asia.' We produce more insurance policies than almost any other country. Actuaries are the brains behind this massive industry, ensuring India remains a global leader in financial risk management and insurance innovation."
        ],
      contentHi: [
        "डॉ. राजेश डालमिया: भारतीय एक्चुअरी एसोसिएशन के पूर्व अध्यक्ष और ईवाई के एक भागीदार; भारतीय एक्चुअरी परामर्श में एक दिग्गज। उन्होंने भारत में एक्चुअरी विज्ञान की शुरुआत की।",
        "pournima गुप्ते: बीमा के क्षेत्र में एक अग्रणी महिला और आईआरडीएआई (बीमा नियामक) की पूर्णकालिक सदस्य। उन्होंने भारत में बीमा नीतियां आकार देने में महत्वपूर्ण भूमिका निभाई।",
        "के.एस. गोपालन: एक अनुभवी नेता, जिन्होंने एगेन लाइफ के सीईओ के रूप में कार्य किया और आईएआई के फेलो हैं। उन्होंने भारत में जीवन बीमा को बदल दिया।",
        "अतुल शर्मा: जलवायु जोखिम मॉडलिंग और टिकाऊ वित्त में एक अग्रणी एक्चुअरी। वह जलवायु-जागरूक बीमा उत्पादों को विकसित करने में अग्रणी हैं।",
        "प्रिया नैयर: एक प्रमुख महिला एक्चुअरी, जो एक्चुअरियल विज्ञान में एआई अनुप्रयोगों को विकसित करने में अग्रणी हैं। वे बीमा के भविष्य का निर्माण कर रही हैं।",
        "एस.पी. सबहेदार: एलआईसी के एमडी बने, भारत की सबसे बड़ी बीमा कंपनियों में से एक का नेतृत्व किया। एक्चुअरी नेतृत्व में एक दूरदर्शी।"
      ]
      }
    ]
  }
};


