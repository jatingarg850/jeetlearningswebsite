export interface BiologyCareerDetail {
  id: string;
  title: string;
  description: string;
  roles: string[];
  traits: string[];
  responsibilities: string[];
  cost: {
    government: string;
    private: string;
    duration: string;
    living: string;
  };
  scholarships: string[];
  challenges: string[];
  startNow: string[];
  imageUrl?: string;
}

export const biologyCareerDetails: Record<string, BiologyCareerDetail> = {
  biochemistry: {
    id: "biochemistry",
    title: "Biochemistry",
    description: "Study how molecules like proteins, lipids, and DNA interact to keep us alive",
    roles: [
      "The Cell Explorer: Study how molecules interact to keep us alive",
      "The Drug Developer: Design new medicines for diseases like diabetes and cancer",
      "The Food Scientist: Improve nutritional value and create sustainable alternatives",
      "The Quality Controller: Ensure vaccines and medicines are safe and effective",
    ],
    traits: [
      "The Curious Soul: Always ask 'Why' and 'How' things work",
      "The Patient Observer: Can wait for results",
      "The Detail-Oriented Eye: Notice tiny colour changes or small spikes on graphs",
      "Analytical Thinking: Good at solving puzzles",
      "Hard Skills: Strong foundation in Biology and Organic Chemistry",
    ],
    responsibilities: [
      "Hypothesize: Guess what might happen based on current knowledge",
      "Experiment: Design a test to see if your guess is right",
      "Analyze: Use machines like Spectrometers or Chromatographs to read results",
      "Communicate: Write reports or papers to tell the world about your discovery",
    ],
    cost: {
      government: "IITs and central universities: ₹5,000–₹50,000 yearly",
      private: "Amity, VIT, LPU: ₹1–3 lakh yearly",
      duration: "B.Sc 3 years, M.Sc 2 years, Ph.D 3–5 years",
      living: "₹10,000–₹20,000 monthly in cities",
    },
    scholarships: [
      "INSPIRE Scholarship: ₹80,000 yearly for top 1% science students",
      "KVPY: Fellowship for talented science students",
      "Kerala Prathibha: Supports bright local students",
      "Biocon Scholarship: Money and industry mentorship",
    ],
    challenges: [
      "The Long Wait: Research takes years before medicines hit the market",
      "Academic Rigor: Textbooks of biochemistry change every year",
      "Lab Hours: May need to check experiments at 2 AM or work weekends",
    ],
    startNow: [
      "Read Popular Science: Follow ScienceDaily or Scientific American",
      "Coding Basics: Learn a bit of Python",
      "Kitchen Science: Try baking or making curd",
      "Visit a Lab: Ask your teacher to take you to a local hospital or college lab",
    ],
  },
};

export const biologyCareerDetails2: Record<string, BiologyCareerDetail> = {
  bioinformatics: {
    id: "bioinformatics",
    title: "Bioinformatics",
    description: "Use computers to find patterns in massive biological data like the human genome",
    roles: [
      "The Data Translator: Find patterns in biological data that humans can't see",
      "The Drug Designer: Use computer simulations to predict which medicine works best",
      "The Genetic Map Maker: Help doctors understand genetic codes for precision medicine",
    ],
    traits: [
      "The Logical Puzzle-Solver: Love connecting dots and finding hidden patterns",
      "Patience for Perfection: Spend hours cleaning data to find one truth",
      "The Balanced Brain: Equally comfortable with Biology and coding",
      "Hard Skills: Python, R, Linux, SQL, and strong grasp of Genomics",
    ],
    responsibilities: [
      "Data Acquisition: Gather raw sequences from DNA labs",
      "Processing: Use high-speed computers to clean and organize data",
      "Analysis: Run algorithms to identify mutations or patterns",
      "Validation: Work with biologists to prove digital findings in a real lab",
    ],
    cost: {
      government: "Central Universities and IITs: ₹15,000–₹2.5 lakh",
      private: "Private universities: ₹4–12 lakh for engineering and science courses",
      duration: "Usually 4 years for B.Tech; Science students may study 5 years (B.Sc. + M.Sc.)",
      living: "In big cities: ₹15,000–₹25,000 per month on rent and food",
    },
    scholarships: [
      "INSPIRE and GAT-B: Money to bright science students for higher studies",
      "ARM and Biocon: Support Biotechnology and Biochemistry students",
      "Merit-based: Need very high marks (above 85%) or top ranks in national exams",
    ],
    challenges: [
      "Constant Re-skilling: Learn a new coding language or tool every year",
      "Data Fatigue: Staring at screens and massive spreadsheets is mentally draining",
      "Interdisciplinary Stress: Must speak the language of both coder and doctor",
    ],
    startNow: [
      "Master Python: Start a project on Kaggle",
      "Logic and Math: Focus on Statistics—Bioinformatics is 50% math",
      "Read Scientific Blogs: Follow GenomeWeb or Nature News",
      "DIY Experiments: Use online tools like NCBI BLAST",
    ],
  },
};

export const biotechnologyResearch: BiologyCareerDetail = {
  id: "biotechnology_research",
  title: "Biotechnology Research",
  description: "Use living organisms to solve real-world problems like creating vaccines or sustainable crops",
  roles: [
    "The Microscopic Engineer: Tweak genetic code of microbes to eat oil spills or produce insulin",
    "The Crop Innovator: Develop seeds that grow in salty soil or survive droughts",
    "The Vaccine Architect: Design shields (vaccines) that protect millions of people",
  ],
  traits: [
    "Patience of a Saint: Research can take years",
    "Observational Mastery: Notice tiny colour changes or small spikes on graphs",
    "Logical Curiosity: Take things apart to see how they work",
    "Hard Skills: Molecular Biology, Biostatistics, AI & Machine Learning",
  ],
  responsibilities: [
    "Hypothesis: Ask 'What if?' questions (e.g., 'What if this bacterium could produce plastic?')",
    "Lab Experimentation: Test ideas in controlled environments",
    "Data Analysis: Use software to see if results match the guess",
    "Scaling Up: Move from test tube to 1,000-liter bioreactor",
    "Regulatory Approval: Prove to the government that it's safe",
  ],
  cost: {
    government: "IITs/NITs: ₹2–8L; Private colleges (VIT/Manipal): ₹6–15L",
    private: "Private colleges: ₹6–15L",
    duration: "4–5 years B.Tech/B.Sc., plus 3–5 years for PhD",
    living: "₹15–25K/month; Certifications: ₹20–50K",
  },
  scholarships: [
    "INSPIRE Fellowship: Helps top 1% students",
    "GAT-B: Gives ₹12,000/month to postgraduates",
    "IITs/IISc: Fee waivers and assistantships for PhD students",
    "Biocon and L'Oréal: Scholarships and mentorship for biotech students",
  ],
  challenges: [
    "The Long Game: Research takes 10 years before medicine hits the shelf",
    "Academic Pressure: Ph.D. is almost mandatory (another 4–5 years)",
    "Lab Hazards: Work with chemicals and potentially dangerous microbes",
  ],
  startNow: [
    "Read Scientific Blogs: Follow ScienceDaily or Nature News",
    "Master Statistics: Research is 50% Biology and 50% Math",
    "Kitchen Science: Try baking or making curd—both are biotech processes",
    "Join Olympiads: Participate in National Science Olympiad (NSO)",
  ],
};

export const clinicalResearch: BiologyCareerDetail = {
  id: "clinical_research",
  title: "Clinical Research",
  description: "Determine the safety and effectiveness of medications, devices, and diagnostic products",
  roles: [
    "The Trial Designer: Write the manual (Protocol) for how a new drug should be tested",
    "The Safety Guardian: Monitor patients in a study to ensure no bad side effects",
    "The Data Detective: Collect and analyze thousands of data points to see if treatment is a success",
  ],
  traits: [
    "Exceptional Attention to Detail: Vital for trial accuracy",
    "Unwavering Ethical Integrity: Handle sensitive patient information",
    "Communication: Simplify complex profiles for patients",
    "Patience: Required for the ten-year long game",
    "Hard Skills: Mastery of GCP, Pharmacology, and Medical Writing",
  ],
  responsibilities: [
    "Patient Recruitment: Find the right people to join the study",
    "Monitoring: Regularly check participants' health",
    "Data Management: Ensure every piece of info is recorded correctly",
    "Reporting: Write final results for government (CDSCO in India or FDA in US)",
  ],
  cost: {
    government: "AIIMS/NIPER: ₹15K–1.5L",
    private: "ICRI/Cliniminds: ₹1.5–4L",
    duration: "1-year diploma or 2-year M.Sc. in Clinical Research",
    living: "₹15,000–25,000/month in Mumbai, Delhi, Bangalore",
  },
  scholarships: [
    "NFSC and NFST: Fellowships for SC/ST students",
    "JRF: Receives ₹37,000/month",
    "State: Merit-based aid covers tuition plus ₹350–1,200/month allowance",
    "NIPER: ₹12,400/month (Master's) and ₹28,000–37,000/month (PhD)",
  ],
  challenges: [
    "Zero Error Margin: A single mistake can disqualify a multi-million-dollar study",
    "Travel Stress: CRAs often travel 3–4 days a week to visit hospital sites",
    "Ethics vs. Speed: Pressure to finish can clash with strict ethical rules",
  ],
  startNow: [
    "Master Statistics: Clinical research is all about Probability and Significance",
    "Scientific Reading: Start reading ScienceDaily",
    "Communication: Join debate or drama club for confidence",
    "Ethics Awareness: Read about why rules exist to protect human subjects",
  ],
};

export const fisheryBiologist: BiologyCareerDetail = {
  id: "fishery_biologist",
  title: "Fishery Biologist",
  description: "Study fish health, populations, and aquaculture to protect marine ecosystems",
  roles: [
    "The Health Inspector: Study fish health and water quality to prevent diseases",
    "The Population Detective: Track fish numbers to prevent overfishing",
    "The Farm Architect: Design high-tech aquaculture systems for controlled environments",
    "The Conservationist: Protect endangered species like Olive Ridley turtles",
  ],
  traits: [
    "Deep Curiosity: Combined with resilience for harsh coastal weather",
    "Sharp Observation: Notice aquatic shifts and communicate complex data",
    "Technical Mastery: Strong Biology and Chemistry with tech-agility in drones",
  ],
  responsibilities: [
    "Field Collection: Gather samples from rivers, lakes, or oceans",
    "Lab Analysis: Test for DNA, toxins, or growth rates",
    "Data Modeling: Use computers to predict future fish numbers",
    "Reporting: Advise government on fishing laws and environmental safety",
  ],
  cost: {
    government: "Government colleges: ₹20,000–₹1.5 lakh",
    private: "Private colleges: ₹4–10 lakh",
    duration: "4-year B.F.Sc. degree, then 2-year M.F.Sc.",
    living: "₹15,000–₹25,000 monthly; SCUBA training: ₹30,000–₹50,000",
  },
  scholarships: [
    "ICAR JRF/SRF: ₹12,640–₹35,000 per month plus HRA",
    "National Overseas Scholarship: Supports top students",
    "Post-Matric Scholarships: Help SC, ST, OBC students",
    "State Agricultural Universities: ₹2,000–₹5,000 per month to B.F.Sc. students",
  ],
  challenges: [
    "Physical Strain: Long hours on water and dealing with strong smells",
    "Irregular Hours: Fish don't follow 9-to-5; work early mornings or late nights",
    "Environmental Stakes: Watching ecosystems struggle with pollution is emotionally taxing",
  ],
  startNow: [
    "Start a Mini-Aquarium: Learn about water pH and fish behavior",
    "Master Biology & Stats: Data is the new fuel for biology",
    "Learn Swimming: It's a literal life-saver and vital career skill",
    "Volunteer: Visit a local fish market or river clean-up drive",
  ],
};

export const genetics: BiologyCareerDetail = {
  id: "genetics",
  title: "Genetics",
  description: "Study DNA to understand how mutations cause diseases and develop personalized medicine",
  roles: [
    "The Code-Breakers: Study DNA to understand mutations that cause diseases",
    "The Healers: Help families understand inheritance risks and choose personalized medicine",
    "The Farmers of the Future: Develop seeds for difficult weather and food security",
  ],
  traits: [
    "The Logical Puzzle-Solver: Love connecting dots and finding patterns",
    "Patience & Resilience: Experiments can take months",
    "Ethical Integrity: Handle very private information",
    "Soft Skills: Explain mutations to a 10-year-old or worried parent",
    "Hard Skills: Mastery of Biology and Organic Chemistry",
  ],
  responsibilities: [
    "Sample Acquisition: Collect blood, tissue, or plant samples",
    "Lab Processing: Extract DNA and prepare for sequencing",
    "Data Analysis: Use AI and algorithms to find genetic variations",
    "Reporting: Present findings to doctors, farmers, or scientists",
  ],
  cost: {
    government: "IISc/DU/BHU: ₹10K–1.5L",
    private: "VIT/Manipal: ₹5–15L",
    duration: "3–4 year B.Sc./B.Tech, then 2-year M.Sc.",
    living: "₹15,000–25,000/month; Extra for certifications",
  },
  scholarships: [
    "INSPIRE-SHE: ₹80,000/year",
    "DBT-JRF: Supports postgraduate biotechnology students",
    "Khorana Program: ~50 students yearly for 10–12 week global internships",
    "State Post-Matric Scholarships: Support SC/ST/OBC students",
  ],
  challenges: [
    "The Long Road: Usually need Master's or Ph.D. for high-paying roles",
    "Lab Fatigue: Spend hours staring at screens or standing at lab bench",
    "Emotional Weight: In clinical genetics, share difficult news with families",
  ],
  startNow: [
    "Read Scientific Blogs: Follow ScienceDaily or Nature News",
    "Learn Python: Universal language of genetic data analysis",
    "Kitchen Science: Try extracting DNA from a strawberry at home",
    "Volunteer: Get a tour of a local diagnostic lab or hospital",
  ],
};

export const microbiology: BiologyCareerDetail = {
  id: "microbiology",
  title: "Microbiology",
  description: "Identify and study microbes to prevent diseases, ensure food safety, and create vaccines",
  roles: [
    "The Disease Detectives: Identify bacteria or virus making patients sick",
    "The Food Guardians: Ensure milk, bread, and chocolate are free from harmful germs",
    "The Green Engineers: Use microbes to clean oil spills or create bio-fertilizers",
    "The Vaccine Architects: Design formulas for vaccines that protect millions",
  ],
  traits: [
    "Patience: Microbes grow at their own pace",
    "Curiosity: Always ask 'Why did this happen?'",
    "Observation: Notice tiny color changes in test tubes",
    "Collaboration: Work with doctors, engineers, and farmers",
    "Microscopy: Handle delicate lab equipment",
    "Data Analysis: Understand graphs and DNA sequences",
  ],
  responsibilities: [
    "Sampling: Collect water from rivers, soil from farms, or swabs from patients",
    "Culturing: Grow microbes in controlled lab environments",
    "Identification: Use chemicals and computers to identify microbes",
    "Testing: See how microbes react to medicines, heat, or chemicals",
    "Reporting: Write results so others can act on them",
  ],
  cost: {
    government: "DU/BHU/Pune: ₹10K–50K/year",
    private: "Amity/VIT/LPU: ₹1.5–4.5L/year",
    duration: "3-year B.Sc., then 2-year M.Sc.",
    living: "₹15,000–25,000/month in metro cities",
  },
  scholarships: [
    "INSPIRE: ₹80,000/year to top 1%",
    "PM-USP: ₹12,000–20,000/year to meritorious students",
    "Kerala Prathibha: Rewards high-achieving science students",
    "Biocon Rama Mazumdar: Supports deserving biotechnology students",
  ],
  challenges: [
    "Safety Hazards: Work with real pathogens—safety rules must be 100% followed",
    "Lab Fatigue: Spend hours standing at lab bench or looking at screens",
    "Academic Road: Ph.D. often required for highest-paying research jobs",
  ],
  startNow: [
    "Join Science Clubs: Participate in Olympiads like NSO",
    "Read Scientific Blogs: Follow ScienceDaily or Nature News",
    "Kitchen Science: Try making curd or fermenting idli batter",
    "Volunteer: Get a tour of a local diagnostic lab or hospital",
  ],
};

export const physiology: BiologyCareerDetail = {
  id: "physiology",
  title: "Physiology",
  description: "Study how the body responds to stress, exercise, altitude, and medicines",
  roles: [
    "The Body's Detective: Investigate how body responds to stress, exercise, high altitudes",
    "The Health Innovator: Work with doctors to understand how medicines affect patients",
    "The Sports Performance Expert: Help athletes optimize breathing and muscle recovery",
    "The Space Scientist: Help ISRO understand how astronauts survive in zero gravity",
  ],
  traits: [
    "The 'Why' Person: Not satisfied with just knowing what happened",
    "Detail-Oriented: Notice small blips on heart monitors",
    "Analytical Mind: Love puzzles where pieces are chemical signals",
    "Patience: Science is a marathon—some experiments take weeks",
  ],
  responsibilities: [
    "Observation: Monitor biological functions like breathing",
    "Experimentation: Introduce variables like high altitude or specific foods",
    "Measurement: Collect precise data using high-tech sensors",
    "Inference: Draw conclusions on how body adapted",
  ],
  cost: {
    government: "Government colleges: ₹5K–50K/year",
    private: "Private colleges: ₹1.5–4.5L/year",
    duration: "3-year B.Sc., then 2-year M.Sc., then PhD",
    living: "₹15,000–25,000/month in major cities; Lab equipment and software",
  },
  scholarships: [
    "INSPIRE Scholarship: ₹80,000/year to top 1% Class 12 students",
    "KVPY: Prestigious fellowship now merged with INSPIRE",
    "Institutional: Medical colleges offer ₹15,000–30,000/month stipends",
  ],
  challenges: [
    "Academic Length: Expertise requires Master's or Ph.D. for advanced roles",
    "Competition: Securing positions at premier institutions like AIIMS is exceptionally competitive",
    "Lab-Bound: Early career demands extensive hours in windowless labs",
  ],
  startNow: [
    "Learn Python: Data analysis is the future of physiology",
    "Volunteer: Shadow a technician in a hospital's TMT or ECG lab",
    "Read: Follow ScienceDaily (Physiology section)",
    "Observation: Keep a Body Journal—track heart rate or sleep patterns",
  ],
};
