import fs from 'fs';

const rawText = fs.readFileSync('raw_data.txt', 'utf8');

const sections = [
    { title: "What is This Career All About?", id: "what" },
    { title: "Who Should Consider This Career?", id: "who" },
    { title: "Key Responsibilities & Work Process", id: "responsibilities" },
    { title: "What Will It Cost?", id: "cost" },
    { title: "Scholarship Opportunities", id: "scholarships" },
    { title: "Key Challenges", id: "challenges" },
    { title: "Start Now (Class 9–12)", id: "startnow" }
];

function slugify(text) {
  if (text.toLowerCase() === "animal / veterinary science") return "animal_science";
  if (text.toLowerCase() === "agricultural engineering") return "agricultural_engineer";
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

const careerNames = [
    "Agri-Business Management",
    "Agricultural Engineering",
    "Agriculture Research",
    "Animal / Veterinary Science",
    "Apiculture",
    "Aquaculture",
    "Dairy Technology",
    "Florist",
    "Food Science",
    "Horticulture",
    "Poultry",
    "Sericulture",
    "Vertical Farming"
];

const careers = [];
let currentCareer = null;
let currentLeftMode = null;
let currentRightMode = null;
let lastActiveMode = null;

const lines = rawText.split(/\r?\n/);

lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return;

    if (careerNames.some(c => trimmedLine.toLowerCase() === c.toLowerCase())) {
        currentCareer = {
            name: careerNames.find(c => trimmedLine.toLowerCase() === c.toLowerCase()),
            slug: slugify(careerNames.find(c => trimmedLine.toLowerCase() === c.toLowerCase())),
            what: [], who: [], responsibilities: [], cost: [], scholarships: [], challenges: [], startnow: []
        };
        careers.push(currentCareer);
        currentLeftMode = null;
        currentRightMode = null;
        return;
    }

    if (!currentCareer) return;

    sections.forEach(s => {
        if (line.includes(s.title)) {
            const tabIdx = line.indexOf('\t');
            if (tabIdx === -1 || line.indexOf(s.title) < tabIdx) {
                currentLeftMode = s.id;
            } else {
                currentRightMode = s.id;
            }
        }
    });

    const cols = line.split('\t');
    cols.forEach((col, idx) => {
        let text = col.trim();
        if (!text) return;
        if (sections.some(s => text === s.title)) return;

        // If it DOESN'T start with a letter or digit, it's a bullet
        const firstCharCode = text.charCodeAt(0);
        const isAlphaNum = (firstCharCode >= 48 && firstCharCode <= 57) || 
                          (firstCharCode >= 65 && firstCharCode <= 90) || 
                          (firstCharCode >= 97 && firstCharCode <= 122);

        if (!isAlphaNum) {
            let content = text.slice(1).trim();
            // Cleanup
            sections.forEach(s => {
                if (content.startsWith(s.title)) {
                    content = content.replace(s.title, '').trim().replace(/^[:\s\-]+/, '').trim();
                }
            });
            content = content.replace(/\s+Scan Me$/, '');

            if (content) {
                let mode = (cols.length > 1) ? ((idx === 0) ? currentLeftMode : currentRightMode) : (currentLeftMode || currentRightMode);
                if (mode && currentCareer[mode]) {
                    currentCareer[mode].push(content);
                }
            }
        } else if (text.length > 20) {
            // Probably a bullet that lost its bullet character
            let content = text;
            sections.forEach(s => {
                if (content.startsWith(s.title)) {
                    content = content.replace(s.title, '').trim().replace(/^[:\s\-]+/, '').trim();
                }
            });
            content = content.replace(/\s+Scan Me$/, '');
            let mode = (cols.length > 1) ? ((idx === 0) ? currentLeftMode : currentRightMode) : (currentLeftMode || currentRightMode);
            if (mode && currentCareer[mode]) {
                currentCareer[mode].push(content);
            }
        }
    });
});

let generatedCode = "import { CareerPageData } from './careerPageData';\n\nconst RED = \"#C20000\";\nconst RED2 = \"#DA1313\";\n\nexport const agricultureUpdateData: Record<string, CareerPageData> = {\n";

careers.forEach(c => {
  generatedCode += `  ${c.slug}: {
    slug: "${c.slug}",
    badge: "🌾 Career Exploration for Class 10+",
    heading: "${c.name}",
    subheading: "",
    whyCards: [
      { icon: "Sprout", title: "Modern Farming", description: "Impactful work to ensure global food security sustainably.", borderColor: "#10B981" },
      { icon: "Globe", title: "National Growth", description: "Contribute directly to India's fastest-growing agricultural revolutions.", borderColor: "#059669" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Check specific courses", color: "bg-green-100 text-green-700" },
      { label: "Personality", detail: "Patient, observant, resilient", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "High", label: "Industry Demand", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      { id: "what", title: "What is This Career All About?", icon: "Target", description: "Understanding the core focus and national priority of this profession.", color: RED, content: ${JSON.stringify(c.what)} },
      { id: "who", title: "Who Should Consider This Career?", icon: "User", description: "Essential traits and skills required for success.", color: RED2, content: ${JSON.stringify(c.who)} },
      { id: "responsibilities", title: "Key Responsibilities & Work Process", icon: "Briefcase", description: "Day-to-day work from inputs to final execution.", color: RED, content: ${JSON.stringify(c.responsibilities)} },
      { id: "cost", title: "What Will It Cost?", icon: "IndianRupee", description: "A complete look at educational and living expenses.", color: RED2, content: ${JSON.stringify(c.cost)} },
      { id: "scholarships", title: "Scholarship Opportunities", icon: "Award", description: "Financial aid to help speed up your education journey.", color: RED, content: ${JSON.stringify(c.scholarships)} },
      { id: "challenges", title: "Key Challenges", icon: "AlertTriangle", description: "The difficult realities you must be ready to face.", color: RED2, content: ${JSON.stringify(c.challenges)} },
      { id: "startnow", title: "Start Now (Class 9–12)", icon: "Rocket", description: "Actionable steps you can take today.", color: RED, content: ${JSON.stringify(c.startnow)} }
    ]
  },\n`;
});

generatedCode += "};\n";

fs.writeFileSync('app/data/agricultureUpdateData.ts', generatedCode);
console.log("Successfully generated app/data/agricultureUpdateData.ts!");
