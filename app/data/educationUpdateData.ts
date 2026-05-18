import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const educationUpdateData: Record<string, CareerPageData> = {
  corporate_trainer: {
    slug: "corporate_trainer",
    badge: "The Catalyst of Growth for Class 10+",
    heading: "Corporate Trainer",
    subheading: "Transform talent into performance. Design learning experiences that move companies forward. Join $39.9B market with ₹4L–₹60L+ salaries.",
    whyCards: [
      { icon: "TrendingUp", title: "$39.9B Market by 2034", description: "Indian corporate training market growing from $12.2B (2025) to $39.9B (2034). Explosive 3x growth opportunity.", borderColor: "#10B981" },
      { icon: "Users", title: "₹4L–₹60L+ Salaries", description: "Entry-level ₹4L–₹7L. Senior specialists ₹30L–₹60L+. Freelancers earning ₹15k–₹1.5L per day.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in IT/ITeS, BFSI, Pharma. International training roles abundant. Remote work potential.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Skills Gap Crisis", description: "India's 2M+ young workforce needs upskilling. Corporate Trainers solving demographic dividend challenge.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/Certification (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, GMAT, or Certification Programs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$39.9B", label: "Market Size by 2034", gradient: "from-green-500 to-green-600" },
      { value: "3x Growth", label: "Market Expansion (2025-2034)", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Transforming talent into performance through strategic learning.",
        color: BLUE,
        content: [
          "Corporate Trainer Definition: A professional educator who works within business environment to improve skills, knowledge, and performance of employees. Bridge between potential and performance.",
          "The Role: The Skill Surgeon (identify gaps where employees struggling, design specific lessons to fix them), The Master Storyteller (take dry complex information and turn into engaging workshops), The Culture Builder (teach soft skills like leadership, empathy, teamwork—the 'glue' keeping company together).",
          "What They Do: Conduct needs analysis, design curricula, deliver workshops, facilitate role-plays, create digital content, measure training effectiveness, coach executives, build learning cultures.",
          "Why It Matters: India home to world's largest young workforce. Many graduates 'unemployable' because they lack industry-specific skills. Corporate Trainers frontline warriors solving this, ensuring India's 'demographic dividend' turns into economic power.",
          "The Scope: Work in IT companies, banks, pharma firms, e-commerce, manufacturing, or as freelance consultant.",
          "The Impact: You're not just teaching—you're moving company's needle. You transform individuals into high performers and build organizational cultures of continuous learning."
        ],
      contentHi: [
        "अर्विंड गुप्ता: 'कचरे से खिलौने' के लिए प्रसिद्ध। विज्ञान को मूर्त रूप देने वाले एक महान तकनीकी शिक्षक।",
        "आनंद कुमार: सुपर 30 के संस्थापक। यद्यपि गणित पर केंद्रित, लेकिन उनका 'शिक्षण' हर तकनीकी प्रशिक्षक के लिए एक आदर्श है।",
        "हरकिरत सिंह: एक नव-युग के तकनीकी शिक्षक (हरकिरत का समूह), जो हजारों लोगों को MERN स्टैक सीखने के तरीके को बदल रहे हैं।",
        "ताunay प्रताप: नीओजीकैम्प के संस्थापक। पूर्व एम.एस. इंजीनियर, जिन्होंने पूर्णकालिक तकनीकी शिक्षा में अपना करियर बनाया।",
        "प्रतीक नारंग: कोडिंग मिनट के सह-संस्थापक। तकनीकी पाठ्यक्रम बनाने में माहिर, जो \"लगातार\" याद रहते हैं।",
        "कुणाल कुशवाह: एक तकनीकी शिक्षक और सामग्री निर्माता, जो लाखों लोगों के लिए प्रोग्रामिंग को सुलभ बना रहे हैं।",
        "अमन धततार्वल: अपना कॉलेज के संस्थापक। भारतीय छात्रों के लिए प्रौद्योगिकी शिक्षा को लोकतांत्रिक बनाना।"
      ]
      }
    ]
  }
};



