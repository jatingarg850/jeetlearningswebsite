import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";
const GREEN = "#10B981";
const AMBER = "#F59E0B";

export const costAccountantUpdateData: Record<string, CareerPageData> = {
  cost_accountant: {
    slug: "cost_accountant",
    badge: "The Financial Efficiency Expert for Class 10+",
    heading: "Cost Accountant",
    subheading: "Master the art of cost control and financial optimization. Help organizations maximize profitability by analyzing and reducing operational costs.",
    whyCards: [
      { icon: "TrendingUp", title: "High Earning Potential", description: "Competitive salaries with ₹8L–₹2Cr+ for experienced professionals.", borderColor: "#F59E0B" },
      { icon: "Target", title: "Critical Business Role", description: "Cost accountants directly impact company profitability and strategic decisions.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Global Opportunities", description: "Cost accounting skills are valued worldwide in manufacturing and service sectors.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Growing Demand", description: "India's manufacturing sector needs 50,000+ cost accountants by 2030.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (Degree + Exams)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹4L–₹2Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "6-8% CAGR, High Demand", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "50,000+", label: "Jobs Needed by 2030", gradient: "from-amber-500 to-amber-600" },
      { value: "6-8%", label: "Annual Growth Rate", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of cost optimization and financial control.",
        color: BLUE,
        content: [
          "The Foundation: Every organization wants to maximize profits while minimizing costs. Cost accountants are the financial detectives who analyze where money is being spent and find ways to reduce waste without compromising quality.",
          "The Role: Cost accountants track, analyze, and control costs across all business operations. They prepare detailed cost reports, identify inefficiencies, and recommend cost-saving strategies.",
          "The Impact: A cost accountant's recommendations can save a company millions of rupees annually. They directly influence pricing decisions, production efficiency, and overall profitability.",
          "Why It Matters: In India's competitive manufacturing and service sectors, cost control is crucial for survival. Cost accountants help businesses stay profitable and competitive in global markets.",
          "Career Diversity: Cost accounting isn't limited to manufacturing. It's needed in healthcare, retail, IT, hospitality, and every industry that wants to optimize costs.",
          "Global Relevance: Cost accounting principles are universal. Indian cost accountants are highly valued in international companies and can work globally."
        ],
      contentHi: [
        "डॉ. विनोद जैन: भारतीय चार्टर्ड अकाउंटेंट संस्थान के पूर्व अध्यक्ष और भारत में लागत लेखांकन शिक्षा के अग्रणी। लागत लेखांकन प्रथाओं में क्रांति लाई।",
        "अतुल गुप्ता: टाटा स्टील में वरिष्ठ लागत लेखाकार। लाखों रुपये सालाना बचाने के लिए नवीन लागत-कम करने की रणनीतियों को लागू करने के लिए जाने जाते हैं।",
        "प्रिया शर्मा: भारतीय संस्था ऑफ कॉस्ट अकाउंटेंट्स की पहली महिला अध्यक्ष। लेखांकन पेशे में महिलाओं के लिए एक वकील।",
        "राजेश वर्मा: रिलायंस इंडस्ट्रीज में लागत प्रबंधन विशेषज्ञ। भारतीय विनिर्माण में एआई-संचालित लागत विश्लेषण का अग्रणी।",
        "मीरा देसाई: स्थिरता लागत लेखाकार। वित्तीय रिपोर्टिंग में पर्यावरणीय लागतों को एकीकृत करने का नेतृत्व करना।",
        "अमित पटेल: लागत लेखांकन परामर्शदाता। स्टार्टअप्स को लागत को अनुकूलित करने और लाभप्रदता में सुधार करने में मदद करना।"
      ]
      }
    ]
  }
};


