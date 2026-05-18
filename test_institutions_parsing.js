// Test the institutions parsing logic

const testContent = [
  "Government: Indira Gandhi Institute of Aeronautics (IGIA), New Delhi, Rajiv Gandhi National Aviation Academy, Hyderabad, National Institute of Aviation Management and Research (NIAMAR), Delhi, Airports Authority of India Training Centre (AAITC), New Delhi",
  "Private: Frankfinn Institute of Air Hostess Training, Pan-India, Air Hostess Academy (AHA), Bangalore, Jet Airways Training Academy, Mumbai, Universal Aviation Academy, Chennai",
  "Online: Udemy — Cabin Crew & Air Hostess Training Course, Coursera — Aviation Management & Hospitality Modules, IATA Training — Cabin Crew Safety & Service Programme, Simplilearn — Airline & Hospitality Service Certification"
];

const groupedContent = {};

testContent.forEach((item) => {
  const colonIndex = item.indexOf(":");
  if (colonIndex > -1) {
    const type = item.substring(0, colonIndex).trim();
    const contentStr = item.substring(colonIndex + 1).trim();
    
    // Split by comma or semicolon to get individual institutions
    const institutions = contentStr
      .split(/[,;]/)
      .map(i => i.trim())
      .filter(i => i && !i.toLowerCase().includes("not recommended"));
    
    if (institutions.length > 0) {
      groupedContent[type] = institutions;
    }
  }
});

console.log("Grouped Content:");
console.log(JSON.stringify(groupedContent, null, 2));

console.log("\n\nRendered output:");
Object.entries(groupedContent).forEach(([type, insts]) => {
  console.log(`\n${type}:`);
  insts.forEach(inst => {
    console.log(`  • ${inst}`);
  });
});
