// Test the institutions parsing logic with semicolons

const testContent = [
  "Government: Indian Institute of Tourism & Travel Management (IITTM), Gwalior; Institute of Hotel Management (IHM), New Delhi; National Institute of Fashion Technology (NIFT), New Delhi; Chandigarh University (State Government), Chandigarh",
  "Private: National Academy of Event Management & Development (NAEMD), Mumbai; Whistling Woods International, Mumbai; Amity Institute of Event Management, New Delhi; Pearl Academy of Event Management, New Delhi",
  "Online: Udemy — Event Planning & Management Masterclass; Coursera — Event Management & Hospitality Programme; Alison — Professional Event Planning Diploma; NIEM Online — Certified Event Management Course"
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
