import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const RED3 = "#E70000";
const RED4 = "#B30000";
const RED5 = "#9B0000";

export const legalServicesUpdateData: Record<string, CareerPageData> = {
  forensic_scientist: {
    slug: "forensic_scientist",
    badge: "The Voice of Silent Victims for Class 10+",
    heading: "Forensic Scientist",
    subheading: "Use science to solve crimes. Analyze evidence, testify in court, and ensure justice prevails. Become the invisible detective behind every conviction.",
    whyCards: [
      { icon: "Microscope", title: "Justice Through Science", description: "Your evidence directly determines guilt or innocence. You're the voice of silent victims.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "12-15% Job Growth", description: "India's justice system increasingly relies on forensic evidence. Massive demand for experts.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, UK, UAE for Indian forensic scientists. International career paths.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Cyber Forensics Boom", description: "Digital crimes rising exponentially. Cyber forensic experts command premium salaries.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (B.Sc + M.Sc)", color: "bg-red-100 text-red-700" },
      { label: "Salary Range", detail: "₹3.5L–₹60L+ (Entry to Senior)", color: "bg-orange-100 text-orange-700" },
      { label: "Growth", detail: "12–15% CAGR, Job Market Growth", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "12–15%", label: "Job Market Growth", gradient: "from-red-500 to-red-600" },
      { value: "₹60L+", label: "Senior Leadership Salary", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Microscope",
        description: "Understanding forensic science and its role in the justice system",
        color: RED,
        content: [
          "Forget what you see in movies where a detective solves a murder in 45 minutes using a magic computer. Real Forensic Science is slower, harder, but infinitely more important.",
          "A Forensic Scientist applies scientific principles to legal problems. You are the voice of the silent victims. You use chemistry, biology, physics, and computer science to analyze evidence found at crime scenes—whether it's a drop of blood, a deleted email, a shattered bullet, or a fake signature.",
          "In today's India, the justice system relies heavily on 'evidence-based conviction' rather than just witness statements. With the new Bharatiya Nyaya Sanhita (BNS) laws emphasizing forensic evidence in serious crimes, this career has moved from the sidelines to the center stage of the Indian justice system.",
          "You don't just work in a lab; you protect the innocent and ensure the guilty face justice.",
          "Forensic scientists work in government labs, police departments, private firms, and international organizations."
        ],
      contentHi: [
        "अंग्रेजी में महारत हासिल करें: मजबूत लेखन और संचार कौशल आवश्यक हैं।",
        "बहस कौशल विकसित करें: बहस क्लबों में शामिल हों और प्रतियोगिताओं में भाग लें।",
        "संविधान का अध्ययन करें: भारत के संविधान और मौलिक अधिकारों को समझें।",
        "वर्तमान घटनाओं का अध्ययन करें: कानूनी और राजनीतिक विकास पर अपडेट रहें।",
        "तर्क और दर्शन सीखें: अपने तर्क और विश्लेषणात्मक कौशल को मजबूत करें।",
        "मूट कोर्ट में भाग लें: कानूनी तर्क और निर्णय लिखने का अभ्यास करें।",
        "सुप्रीम कोर्ट के फैसलों को पढ़ें: समझें कि जज कैसे तर्क करते हैं और मामले कैसे तय करते हैं।"
      ]
      }
    ]
  }
};


