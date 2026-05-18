import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const manufacturingUpdateData: Record<string, CareerPageData> = {
  industrial_design: {
    slug: "industrial_design",
    badge: "The Architect of Everyday Life for Class 10+",
    heading: "Industrial Design",
    subheading: "Blend art, engineering, and business. Design products that are beautiful, functional, and easy to use. Shape the physical world around us.",
    whyCards: [
      { icon: "Zap", title: "Made in India → Designed in India", description: "India is moving from manufacturing to innovation. Companies like Boat, Titan, and Godrej need local designers.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "10-12% Annual Growth", description: "The Indian design industry is booming. PLI schemes and consumer electronics demand are creating huge opportunities.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Demand", description: "Indian designers are now leading teams at global companies. Work on products used by millions worldwide.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Creative + Technical", description: "Combine artistic creativity with engineering knowledge. Solve real human problems through design.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years B.Des / 2 Years M.Des", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "NID DAT, UCEED, SEED Exams", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹5L–₹1.5Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "10-12%", label: "Industry Growth Annually", gradient: "from-blue-500 to-blue-600" },
      { value: "₹1.5Cr+", label: "Leadership Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of product design.",
        color: BLUE,
        content: [
          "Industrial Design blends Art, Engineering, and Business. Designers decide how a product looks (Aesthetics), how it works (Functionality), and how easy it is to use (Ergonomics).",
          "While an engineer makes sure the toaster heats up and a marketer sells it, the Industrial Designer ensures it looks beautiful and doesn't burn your fingers.",
          "An Industrial Designer is part artist, part engineer, and part psychologist. They solve real human problems using mass-produced solutions.",
          "From designing eco-friendly bamboo furniture to creating futuristic electric scooters, Industrial Designers shape the physical world around us.",
          "In today's India, we are moving from 'Made in India' to 'Designed in India.' Companies like Titan, Godrej, and Boat don't just want to assemble products; they want to invent them."
        ],
      contentHi: [
        "ई. श्रीधरन: भारत के 'मेट्रो मैन'। एक सिविल/मैकेनिकल जीनियस जिसने दिल्ली मेट्रो और कोंकन रेलवे का निर्माण किया, जिससे भारत में यात्रा का तरीका बदल गया। यह प्रमाण कि इंजीनियरिंग एक राष्ट्र को बदल सकती है।",
        "बाबा कल्याण: भारत फोर्ज के अध्यक्ष। उन्होंने एक छोटे भारतीय कंपनी को दुनिया की सबसे बड़ी फोर्जिंग कंपनी में बदल दिया। यह मैकेनिकल इंजीनियरिंग में उद्यमिता का एक उदाहरण है।",
        "अनांद महिंद्रा: एक व्यवसायी होने के साथ, उनकी कंपनी (महिंद्रा) भारतीय यांत्रिक इंजीनियरिंग की उत्कृष्टता का प्रमाण है, जिसमें ट्रैक्टर से लेकर स्कॉर्पियो-एन एसयूवी तक शामिल हैं।",
        "डॉ. पवन गोएंका: महिंद्रा स्कॉर्पियो के पीछे का व्यक्ति, जिसने भारतीय एसयूवी को वैश्विक मानचित्र पर लाने में महत्वपूर्ण भूमिका निभाई। यह दर्शाता है कि भारतीय इंजीनियर वैश्विक उत्पाद डिजाइन में कैसे नेतृत्व कर सकते हैं।",
        "राजेश मस्रानी: फ़्लिपकार्ट के पूर्व मुख्य परिचालन अधिकारी। संचालन और लॉजिस्टिक्स में उनके विशेषज्ञता से पता चलता है कि मैकेनिकल इंजीनियर गैर-पारंपरिक भूमिकाओं में कैसे उत्कृष्ट प्रदर्शन करते हैं।",
        "कैलाश कटकर: क्विक हील के सह-संस्थापक। यह दर्शाता है कि कैसे मैकेनिकल इंजीनियर सॉफ्टवेयर और उद्यमिता में बदलाव कर सकते हैं।"
      ]
      }
    ]
  },
};


