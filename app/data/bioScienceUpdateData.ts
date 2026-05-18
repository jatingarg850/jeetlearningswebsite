import { CareerPageData } from './careerPageData';

const BLUE = '#1E40AF';
const BLUE2 = '#3B82F6';

const buildData = (
  slug: string,
  heading: string,
  subheading: string,
  skillLine: string,
  impactLine: string
): CareerPageData => ({
  slug,
  badge: 'Bio Science Career Pathway',
  heading,
  subheading,
  whyCards: [
    {
      icon: 'FlaskConical',
      title: 'Research Driven Work',
      description: 'Combine scientific method, experimentation, and modern tools to solve health and life science problems.',
      borderColor: '#10B981'
    },
    {
      icon: 'Database',
      title: 'Data + Biology',
      description: 'Interpret complex biological signals and convert observations into practical outcomes.',
      borderColor: '#3B82F6'
    },
    {
      icon: 'Briefcase',
      title: 'Strong Career Demand',
      description: impactLine,
      borderColor: '#F59E0B'
    }
  ],
  quickFacts: [
    { label: 'Entry Salary', detail: 'INR 3.5L -  7L PA', color: 'bg-green-100 text-green-700' },
    { label: 'Top Skills', detail: skillLine, color: 'bg-blue-100 text-blue-700' },
    { label: 'Pathway', detail: 'BSc plus MSc or research track', color: 'bg-purple-100 text-purple-700' }
  ],
  statCards: [
    { value: 'High', label: 'Research Relevance', gradient: 'from-green-500 to-green-600' },
    { value: 'Pan India', label: 'Opportunities', gradient: 'from-blue-500 to-blue-600' }
  ],
  guideSections: [
    {
      id: 'what',
      title: 'What is this career about?',
      icon: 'Target',
      description: 'Understand the role and domain focus.',
      color: BLUE,
      content: [
        'This career builds scientific understanding of living systems and applies that knowledge in healthcare, diagnostics, agriculture, and research.',
        'You will work with labs, datasets, protocols, and scientific literature to make accurate, evidence based decisions.',
        'The role suits learners who enjoy biology and can reason through complex problems step by step.'
      ]
    },
    {
      id: 'who',
      title: 'Who should consider this?',
      icon: 'User',
      description: 'Traits and habits that help you succeed.',
      color: BLUE2,
      content: [
        'Strong curiosity, patience, and comfort with technical detail.:',
        'Ability to document work clearly and communicate scientific findings to mixed audiences.:',
        'Willingness to keep learning as new tools and methods evolve.:'
      ]
    },
    {
      id: 'startnow',
      title: 'Start now (Class 9-12)',
      icon: 'Rocket',
      description: 'Practical actions to begin early.',
      color: BLUE,
      content: [
        'Focus on Biology, Chemistry, and Mathematics fundamentals.:',
        'Build basic coding and data literacy with Python and spreadsheet analysis.:',
        'Join science fairs, olympiads, and beginner research projects to gain hands on exposure.:'
      ]
    }
  ]
});

export const bioScienceUpdateData: Record<string, CareerPageData> = {
  biochemistry: {
    slug: "biochemistry",
    badge: "The Molecular Architect for Class 10+",
    heading: "Biochemistry",
    subheading: "Imagine you are a detective solving mysteries inside a single living cell. Become the Molecular Architect who understands how food turns into energy, how viruses hijack bodies, and how plants can cure diseases.",
    whyCards: [
      { icon: "Microscope", title: "Cell Explorer", description: "Study how molecules like proteins, lipids, and DNA interact to keep us alive.", borderColor: "#10B981" },
      { icon: "Pill", title: "Drug Developer", description: "Design new medicines for diseases like diabetes, cancer, and new types of flu.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Food Scientist", description: "Improve nutritional value of food and create sustainable alternatives like plant-based meat.", borderColor: "#F59E0B" },
      { icon: "Shield", title: "Quality Controller", description: "Ensure every batch of vaccine or medicine produced is safe and effective.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3.5L–₹6.0L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Organic Chemistry, Lab Methods, Data Analysis, Molecular Modeling", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. (3 yrs) + M.Sc. (2 yrs) + PhD/Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "11% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "$34B", label: "India Diagnostic & Biotech Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The study of chemical processes within living organisms.",
        color: BLUE,
        content: [
          "Biochemistry is the study of chemical processes within and relating to living organisms. It combines the 'What' of Biology with the 'How' of Chemistry.",
          "The Cell Explorer: They study how molecules like proteins, lipids, and DNA interact to keep us alive.",
          "The Drug Developer: They work in pharmaceutical companies to design new medicines for diseases like diabetes, cancer, or even new types of flu.",
          "The Food Scientist: They improve the nutritional value of our food and help create sustainable alternatives like plant-based meat.",
          "The Quality Controller: They ensure that every batch of vaccine or medicine produced in a factory is safe and effective.",
          "Why it matters: India is the 'Pharmacy of the World.' We produce more vaccines and generic medicines than almost any other country. Biochemists are the brains behind this massive industry, ensuring India remains a global leader in healthcare and biotechnology."
        ],
      contentHi: [
        "किरण मजुम्दार-शॉ: बायोकॉन की संस्थापक; भारत के जैव प्रौद्योगिकी परिदृश्य को बदल दिया और एशिया की सबसे धनी महिला के रूप में उभरीं।",
        "डॉ. रेड्डी श्रीनिवास: फार्मास्युटिकल बायोटेक्नोलॉजी के क्षेत्र में अग्रणी; डॉ. रेड्डीज लैबोरेटरीज की स्थापना की।",
        "डॉ. साइरस पूनोवाला: सेरम इंस्टीट्यूट के संस्थापक; मात्रा के हिसाब से दुनिया की सबसे बड़ी वैक्सीन निर्माता।",
        "डॉ. कृष्णा एला: भारत बायोटेक के संस्थापक; कोवाक्सिन का विकास किया, जो भारत की वैक्सीन क्षमता को प्रमाणित करता है।",
        "डॉ. सुम्या स्वमिनाथन: विश्व स्वास्थ्य संगठन में पूर्व प्रमुख वैज्ञानिक; वैक्सीन अनुसंधान और सार्वजनिक स्वास्थ्य में वैश्विक नेता।",
        "डॉ. रेनु स्वरूप: जैव प्रौद्योगिकी विभाग के पूर्व सचिव; भारत के जैव प्रौद्योगिकी स्टार्टअप पारिस्थितिकी तंत्र की वास्तुकार।"
      ]
      }
    ]
  }

};



