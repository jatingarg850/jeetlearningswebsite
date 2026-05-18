import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const publicSafetyAndSecurityUpdateData: Record<string, CareerPageData> = {
  indian_navy: {
    slug: "indian_navy",
    badge: "The Silent Guardians of the Seas for Class 10+",
    heading: "Indian Navy",
    subheading: "Protecting India's maritime interests across 7,500+ km of coastline. From submarines to fighter jets, you'll be the shield against threats from the ocean.",
    whyCards: [
      { icon: "Ship", title: "Maritime Powerhouse", description: "Protect 90% of India's trade volume that moves by sea and guard the Blue Economy.", borderColor: "#10B981" },
      { icon: "Globe", title: "Strategic Importance", description: "The 21st century is the 'Century of the Seas.' India is shifting from a Buyer's Navy to a Builder's Navy.", borderColor: "#059669" },
      { icon: "TrendingUp", title: "Massive Expansion", description: "Navy plans 175-200 warships by 2035 (up from ~130 today). Huge hiring for crews and officers.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Job Security & Prestige", description: "100% job security for officers, excellent salary with unique allowances like Sea Going Pay and Submarine Pay.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-4 Years (NDA/INA) or 4 Years (Agniveer)", color: "bg-green-100 text-green-700" },
      { label: "Entry Routes", detail: "NDA, CDS, Direct Entry, Agniveer Scheme", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹40K–₹3.5L+ (Agniveer to Vice Admiral)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "7,500+", label: "Km of Coastline to Protect", gradient: "from-green-500 to-green-600" },
      { value: "175-200", label: "Warships by 2035", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Protecting India's maritime interests and safeguarding the seas.",
        color: BLUE,
        content: [
          "The Indian Navy Definition: A multi-dimensional force that operates on the surface (Destroyers, Frigates), below the surface (Submarines), and above the sea (Fighter Jets, Helicopters, Drones).",
          "Your Mission: Protect India's 7,500+ km coastline, guard trade routes (90% of India's trade volume moves by sea), conduct diplomatic missions, and respond to natural disasters in the Indian Ocean Region.",
          "The Scope: Whether you are a Submariner living underwater for weeks, a Naval Pilot flying off an aircraft carrier, or a Naval Architect designing the next warship, you are the shield against threats from the ocean.",
          "Why It Matters: The 21st century is called the 'Century of the Seas.' With China expanding its naval power and global trade relying on safe oceans, the Indian Navy is shifting from a 'Buyer's Navy' to a 'Builder's Navy.' It is the First Responder in the Indian Ocean Region for natural disasters and the protector of the 'Blue Economy.'"
        ],
      contentHi: [
        "राजेशDixit (सीआरपीएफ): एक प्रसिद्ध आतंकवाद विरोधी विशेषज्ञ, जिन्होंने छhattisgarh में नaxalवादियों के खिलाफ सफल अभियान चलाए। अपनी सामरिक प्रतिभा और आम नागरिकों के प्रति उनके मानवीय दृष्टिकोण के लिए जाने जाते हैं।",
        "हेमंत कारकरे (सीआरपीएफ): 26/11 के मुंबई हमलों में शहीद। साहस और बलिदान का प्रतीक। उनका जीवन, सीआरपीएफ के हजारों कर्मियों को प्रेरित करता है।",
        "अजय शर्मा (बीएसएफ): जे&के में आतंकवाद विरोधी अभियानों के दौरान अपनी बहादुरी के लिए अशोक चक्र से सम्मानित। नवीन रणनीतियों के लिए जाने जाते हैं।",
        "प्रिया जोशी (CISF): CISF की पहली महिला कमांडर। महत्वपूर्ण बुनियादी ढांचे की सुरक्षा में महिलाओं की भर्ती की शुरुआत।",
        "डोरजे मोरूप (आईटीबीपी): प्रसिद्ध पर्वतारोही और आईटीबीपी अधिकारी। उच्च ऊंचाई वाले क्षेत्रों में सफल बचाव अभियान चलाए। पद्म श्री से सम्मानित।",
        "राजेंद्र सिंह (एसएसबी): सीमा सुरक्षा और अवैध तस्करी विरोधी अभियानों में उनके कार्य के लिए जाने जाते हैं। उन्हें राष्ट्रपति पुलिस मेडल से सम्मानित किया गया है।",
        "किरण बेदी (पूर्व सीआरपीएफ अधिकारी): भारत की पहली महिला आईपीएस अधिकारी। पैरा मिलिटरी बलों में महिलाओं की भर्ती में अग्रणी। अब एक सामाजिक कार्यकर्ता और लेखिका।"
      ]
      }
    ]
  }
};

publicSafetyAndSecurityUpdateData.indian_paramilitary_forces = {
  ...publicSafetyAndSecurityUpdateData.central_reserve_forces,
  slug: "indian_paramilitary_forces",
  badge: "India's Internal Security Frontline for Class 10+",
  heading: "Indian Paramilitary Forces",
  subheading: "Serve in CRPF, BSF, CISF, ITBP, and SSB to protect borders, internal security, and critical infrastructure across India.",
  quickFacts: [
    { label: "Duration", detail: "3-6 Months (Constable) to 2 Years (Officer Training)", color: "bg-green-100 text-green-700" },
    { label: "Entry Routes", detail: "SSC GD, SSC CPO, UPSC CAPF (AC), State Police, NCC", color: "bg-blue-100 text-blue-700" },
    { label: "Salary Range", detail: "₹21K–₹2.5L+ (Constable to Senior Officer)", color: "bg-purple-100 text-purple-700" }
  ],
  statCards: [
    { value: "9+ Lakh", label: "Personnel Across Forces", gradient: "from-green-500 to-green-600" },
    { value: "5", label: "Major Forces (CRPF, BSF, CISF, ITBP, SSB)", gradient: "from-blue-500 to-blue-600" }
  ],
  guideSections: publicSafetyAndSecurityUpdateData.central_reserve_forces.guideSections.map((section) => ({
    ...section,
    title: section.title.replace(/\bCRF\b/g, "Indian Paramilitary Forces"),
    description: section.description.replace(/\bCRF\b/g, "Indian Paramilitary Forces"),
    content: section.content.map((item) => item.replace(/\bCRF\b/g, "Indian Paramilitary Forces"))
  }))
};



