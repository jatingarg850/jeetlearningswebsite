// Test the exact parsing logic with the actual data

const content = [
  "Government: Indian Institute of Tourism & Travel Management (IITTM), Gwalior; Institute of Hotel Management (IHM), New Delhi; National Institute of Fashion Technology (NIFT), New Delhi; Chandigarh University (State Government), Chandigarh",
  "Private: National Academy of Event Management & Development (NAEMD), Mumbai; Whistling Woods International, Mumbai; Amity Institute of Event Management, New Delhi; Pearl Academy of Event Management, New Delhi",
  "Online: Udemy — Event Planning & Management Masterclass; Coursera — Event Management & Hospitality Programme; Alison — Professional Event Planning Diploma; NIEM Online — Certified Event Management Course"
];

console.log("Input content:");
content.forEach((c, i) => console.log(`  [${i}]: ${c.substring(0, 100)}...`));

const groupedContent = {};

content.forEach((item) => {
  console.log(`\nProcessing: "${item.substring(0, 80)}..."`);
  const colonIndex = item.indexOf(":");
  console.log(`  colonIndex: ${colonIndex}`);
  
  if (colonIndex > -1) {
    const type = item.substring(0, colonIndex).trim();
    const contentStr = item.substring(colonIndex + 1).trim();
    
    console.log(`  type: "${type}"`);
    console.log(`  contentStr: "${contentStr.substring(0, 80)}..."`);
    
    const institutions = contentStr
      .split(/[,;]/)
      .map(i => i.trim())
      .filter(i => i && !i.toLowerCase().includes("not recommended"));
    
    console.log(`  institutions count: ${institutions.length}`);
    
    if (institutions.length > 0) {
      groupedContent[type] = institutions;
      console.log(`  ✓ Added ${institutions.length} institutions for "${type}"`);
    }
  }
});

console.log("\n\nFinal groupedContent:");
console.log(JSON.stringify(groupedContent, null, 2));

console.log("\n\nObject.entries(groupedContent).length:", Object.entries(groupedContent).length);
