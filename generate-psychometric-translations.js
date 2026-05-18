#!/usr/bin/env node

/**
 * Script to extract Psychometric test content and generate Hindi translations
 * This script reads the psychometric page content and creates translation entries
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All English content from the psychometric page
const psychometricContent = {
  // Test Families
  "Aptitude Testing": "योग्यता परीक्षण",
  "Measures natural ability to acquire new skills.": "नई कौशल सीखने की प्राकृतिक क्षमता को मापता है।",
  "Evaluates numerical, verbal, logical, and perceptual reasoning.": "संख्यात्मक, मौखिक, तार्किक और धारणात्मक तर्क का मूल्यांकन करता है।",
  "Helps in stream, subject, and career-path decisions.": "स्ट्रीम, विषय और कैरियर पथ के निर्णयों में मदद करता है।",
  
  "IQ Assessment": "आईक्यू मूल्यांकन",
  "Assesses logical reasoning, processing speed, and working memory.": "तार्किक तर्क, प्रसंस्करण गति और कार्यशील स्मृति का मूल्यांकन करता है।",
  "Provides age-group benchmarking of cognitive potential.": "संज्ञानात्मक क्षमता का आयु-समूह बेंचमार्किंग प्रदान करता है।",
  "Useful for advanced learning and high-complexity role planning.": "उन्नत शिक्षा और उच्च-जटिलता भूमिका योजना के लिए उपयोगी।",
  
  "Personality Profiling": "व्यक्तित्व प्रोफाइलिंग",
  "Maps stable behavior patterns and communication style.": "स्थिर व्यवहार पैटर्न और संचार शैली को मैप करता है।",
  "Supports confidence-building, leadership growth, and relationships.": "आत्मविश्वास निर्माण, नेतृत्व वृद्धि और संबंधों का समर्थन करता है।",
  "Improves role-fit in both academic and professional settings.": "शैक्षणिक और व्यावसायिक दोनों सेटिंग्स में भूमिका-फिट में सुधार करता है।",
  
  // Age Buckets
  "Junior Primary (7-8 yrs)": "जूनियर प्राइमरी (7-8 वर्ष)",
  "Baseline cognitive profiling and early learning-style discovery for low-stress support.": "कम तनाव समर्थन के लिए बेसलाइन संज्ञानात्मक प्रोफाइलिंग और प्रारंभिक शिक्षण-शैली की खोज।",
  
  "Senior Primary (9-10 yrs)": "सीनियर प्राइमरी (9-10 वर्ष)",
  "Refines understanding of grasping speed, foundational strengths, and confidence planning.": "समझने की गति, मौलिक शक्तियों और आत्मविश्वास योजना की समझ को परिष्कृत करता है।",
  
  "Middle School (11-12 yrs)": "मिडल स्कूल (11-12 वर्ष)",
  "Supports subject complexity handling and extracurricular alignment without burnout.": "विषय जटिलता हैंडलिंग और बर्नआउट के बिना पाठ्येतर संरेखण का समर्थन करता है।",
  
  "Lower Secondary (13-14 yrs)": "लोअर सेकेंडरी (13-14 वर्ष)",
  "SWOT-style insight for stream choices, limitations, and early career clusters.": "स्ट्रीम विकल्पों, सीमाओं और प्रारंभिक कैरियर क्लस्टर के लिए SWOT-शैली की अंतर्दृष्टि।",
  
  "Higher Secondary (15+ yrs)": "हायर सेकेंडरी (15+ वर्ष)",
  "Aligns aptitude and personality with majors, courses, and long-term opportunities.": "योग्यता और व्यक्तित्व को प्रमुख, पाठ्यक्रमों और दीर्घकालिक अवसरों के साथ संरेखित करता है।",
  
  "Adults and Corporates": "वयस्क और कॉर्पोरेट",
  "Supports recruitment, role fit, leadership pipeline, and targeted upskilling plans.": "भर्ती, भूमिका फिट, नेतृत्व पाइपलाइन और लक्षित कौशल वृद्धि योजनाओं का समर्थन करता है।",
  
  // Measured Areas
  "Numerical understanding": "संख्यात्मक समझ",
  "Linguistic ability": "भाषाई क्षमता",
  "Creativity and abstract processing": "रचनात्मकता और अमूर्त प्रसंस्करण",
  "Perceptual speed and accuracy": "धारणात्मक गति और सटीकता",
  "Mechanical and practical comprehension": "यांत्रिक और व्यावहारिक समझ",
  "Working memory and short-term retention": "कार्यशील स्मृति और अल्पकालिक प्रतिधारण",
  
  // Main Sections
  "Data-Backed Career and Learning Decisions": "डेटा-समर्थित कैरियर और शिक्षा निर्णय",
  "Psychometric analysis helps families, students, and professionals replace guesswork with measurable direction across subject choice, career strategy, and work-role fit.": "साइकोमेट्रिक विश्लेषण परिवारों, छात्रों और पेशेवरों को विषय चयन, कैरियर रणनीति और कार्य-भूमिका फिट में अनुमान को मापने योग्य दिशा से बदलने में मदद करता है।",
  
  "Core Assessment Families": "मुख्य मूल्यांकन परिवार",
  "What These Tests Measure": "ये परीक्षण क्या मापते हैं",
  "Good psychometric systems are not only about scores. They evaluate how a person thinks, learns, reacts, solves problems, and performs under constraints.": "अच्छी साइकोमेट्रिक प्रणालियां केवल स्कोर के बारे में नहीं हैं। वे मूल्यांकन करते हैं कि एक व्यक्ति कैसे सोचता है, सीखता है, प्रतिक्रिया करता है, समस्याओं को हल करता है और बाधाओं के तहत प्रदर्शन करता है।",
  
  "Age and Stage Utility": "आयु और चरण उपयोगिता",
  "Why This Matters": "यह क्यों महत्वपूर्ण है",
  "The practical value of psychometric analysis is clarity: clearer study strategies, stronger stream choices, better job-role fit, improved team effectiveness, and more confident long-term planning.": "साइकोमेट्रिक विश्लेषण का व्यावहारिक मूल्य स्पष्टता है: स्पष्ट अध्ययन रणनीतियां, मजबूत स्ट्रीम विकल्प, बेहतर नौकरी-भूमिका फिट, बेहतर टीम प्रभावशीलता और अधिक आत्मविश्वास के साथ दीर्घकालिक योजना।",
  
  "Start Your Assessment Plan": "अपनी मूल्यांकन योजना शुरू करें",
  "Explore DMIT": "डीएमआईटी का अन्वेषण करें",
  
  "Complete Psychometric Guide (Expandable)": "संपूर्ण साइकोमेट्रिक गाइड (विस्तारणीय)",
  "Expand each chapter to read the full long-form material for aptitude, IQ, and personality testing.": "योग्यता, आईक्यू और व्यक्तित्व परीक्षण के लिए पूर्ण दीर्घ-रूप सामग्री पढ़ने के लिए प्रत्येक अध्याय का विस्तार करें।",
  
  // Chapters
  "1. What Is Psychometric Assessment": "1. साइकोमेट्रिक मूल्यांकन क्या है",
  "The term psychometric is derived from two Greek words: psyche (mind) and metron (measurement). A psychometric test is a standardized scientific method used to objectively measure mental capabilities and behavioral style.": "साइकोमेट्रिक शब्द दो ग्रीक शब्दों से लिया गया है: साइके (मन) और मेट्रॉन (माप)। एक साइकोमेट्रिक परीक्षण एक मानकीकृत वैज्ञानिक विधि है जिसका उपयोग मानसिक क्षमताओं और व्यवहारिक शैली को वस्तुनिष्ठ रूप से मापने के लिए किया जाता है।",
  "These assessments provide a data-driven profile of how a person thinks, reacts, and processes information, moving beyond subjective observation.": "ये मूल्यांकन इस बात का एक डेटा-संचालित प्रोफाइल प्रदान करते हैं कि एक व्यक्ति कैसे सोचता है, प्रतिक्रिया करता है और जानकारी को संसाधित करता है, व्यक्तिपरक अवलोकन से परे जाता है।",
  "Measures behavioral tendencies and personality traits.": "व्यवहारिक प्रवृत्तियों और व्यक्तित्व लक्षणों को मापता है।",
  "Assesses cognitive skills and potential to learn.": "संज्ञानात्मक कौशल और सीखने की क्षमता का मूल्यांकन करता है।",
  "Supports academic, career, and organizational decisions.": "शैक्षणिक, कैरियर और संगठनात्मक निर्णयों का समर्थन करता है।",
  
  "2. Core Categories of Psychometric Testing": "2. साइकोमेट्रिक परीक्षण की मुख्य श्रेणियां",
  "Because human potential is multidimensional, psychometric tools are grouped by what they are designed to evaluate. Choosing the right tool depends on the objective.": "क्योंकि मानव क्षमता बहुआयामी है, साइकोमेट्रिक उपकरणों को उनके द्वारा मूल्यांकन करने के लिए डिज़ाइन किया गया है। सही उपकरण चुनना उद्देश्य पर निर्भर करता है।",
  "Aptitude and Cognitive Function: Numerical, verbal, logical, and reasoning ability.": "योग्यता और संज्ञानात्मक कार्य: संख्यात्मक, मौखिक, तार्किक और तर्क क्षमता।",
  "Personality and Behavioral Profiling: Work style, emotional tendencies, and communication approach.": "व्यक्तित्व और व्यवहारिक प्रोफाइलिंग: कार्य शैली, भावनात्मक प्रवृत्तियां और संचार दृष्टिकोण।",
  "Interest and Developmental Constructs: Values, motivations, and career preference direction.": "रुचि और विकासात्मक निर्माण: मूल्य, प्रेरणाएं और कैरियर वरीयता दिशा।",
  "Mental Health Contexts: Specialized use in clinical and developmental environments.": "मानसिक स्वास्थ्य संदर्भ: नैदानिक और विकासात्मक वातावरण में विशेष उपयोग।",
  
  "3. Aptitude Testing: Purpose and Value": "3. योग्यता परीक्षण: उद्देश्य और मूल्य",
  "An aptitude test is designed to measure an individual's natural capacity to acquire skills and succeed in specific tasks. It predicts potential rather than testing previously memorized content.": "एक योग्यता परीक्षण किसी व्यक्ति की कौशल प्राप्त करने और विशिष्ट कार्यों में सफल होने की प्राकृतिक क्षमता को मापने के लिए डिज़ाइन किया गया है। यह पहले से याद की गई सामग्री का परीक्षण करने के बजाय संभावना की भविष्यवाणी करता है।",
  "This makes aptitude testing especially useful during stream selection, higher education planning, and career transition stages.": "यह योग्यता परीक्षण को स्ट्रीम चयन, उच्च शिक्षा योजना और कैरियर संक्रमण चरणों के दौरान विशेष रूप से उपयोगी बनाता है।",
  "Identifies strengths, weaknesses, and preferred problem-solving style.": "शक्तियों, कमजोरियों और पसंदीदा समस्या-समाधान शैली की पहचान करता है।",
  "Supports informed subject and vocation decisions.": "सूचित विषय और व्यवसाय निर्णयों का समर्थन करता है।",
  "Improves recruitment and role-fit quality.": "भर्ती और भूमिका-फिट गुणवत्ता में सुधार करता है।",
  
  "4. Aptitude Across School-to-Work Stages": "4. स्कूल-से-कार्य चरणों में योग्यता",
  "Aptitude interpretation is most effective when aligned with age-specific cognitive stages, from primary years to professional development.": "योग्यता व्याख्या तब सबसे प्रभावी होती है जब प्राथमिक वर्षों से व्यावसायिक विकास तक आयु-विशिष्ट संज्ञानात्मक चरणों के साथ संरेखित हो।",
  "Junior Primary (7-8): Early potential and learning-style identification.": "जूनियर प्राइमरी (7-8): प्रारंभिक क्षमता और शिक्षण-शैली की पहचान।",
  "Senior Primary (9-10): Better grasp mapping and confidence support.": "सीनियर प्राइमरी (9-10): बेहतर समझ मानचित्रण और आत्मविश्वास समर्थन।",
  "Middle School (11-12): Subject-specific alignment and balanced growth planning.": "मिडल स्कूल (11-12): विषय-विशिष्ट संरेखण और संतुलित वृद्धि योजना।",
  "Lower Secondary (13-14): SWOT-based stream and early career direction.": "लोअर सेकेंडरी (13-14): SWOT-आधारित स्ट्रीम और प्रारंभिक कैरियर दिशा।",
  "Higher Secondary (15+): College major and strategic career alignment.": "हायर सेकेंडरी (15+): कॉलेज प्रमुख और रणनीतिक कैरियर संरेखण।",
  "Adults and Corporates: Role-fit, leadership potential, and targeted upskilling.": "वयस्क और कॉर्पोरेट: भूमिका-फिट, नेतृत्व क्षमता और लक्षित कौशल वृद्धि।",
  
  "5. What Aptitude Tests Evaluate": "5. योग्यता परीक्षण क्या मूल्यांकन करते हैं",
  "Aptitude testing evaluates a cognitive blueprint rather than subject marks. It measures how efficiently a person processes information across multiple dimensions.": "योग्यता परीक्षण विषय अंकों के बजाय एक संज्ञानात्मक ब्लूप्रिंट का मूल्यांकन करता है। यह मापता है कि एक व्यक्ति कितनी कुशलता से कई आयामों में जानकारी को संसाधित करता है।",
  "Numerical Understanding: Quantitative processing and calculation comfort.": "संख्यात्मक समझ: मात्रात्मक प्रसंस्करण और गणना आराम।",
  "Creativity: Out-of-the-box and abstract problem-solving potential.": "रचनात्मकता: बॉक्स के बाहर और अमूर्त समस्या-समाधान क्षमता।",
  "Linguistic Ability: Language processing, comprehension, and expression quality.": "भाषाई क्षमता: भाषा प्रसंस्करण, समझ और अभिव्यक्ति गुणवत्ता।",
  "Perceptual Speed and Accuracy: Fast error detection and detail management.": "धारणात्मक गति और सटीकता: तेजी से त्रुटि पहचान और विवरण प्रबंधन।",
  "Mechanical Comprehension: Practical understanding of physical systems and tools.": "यांत्रिक समझ: भौतिक प्रणालियों और उपकरणों की व्यावहारिक समझ।",
  
  "6. IQ Testing: Scope and Benefits": "6. आईक्यू परीक्षण: दायरा और लाभ",
  "An IQ test is a standardized psychometric instrument used to estimate general intelligence by evaluating reasoning, abstraction, memory, and processing speed.": "एक आईक्यू परीक्षण एक मानकीकृत साइकोमेट्रिक उपकरण है जिसका उपयोग तर्क, अमूर्तता, स्मृति और प्रसंस्करण गति का मूल्यांकन करके सामान्य बुद्धिमत्ता का अनुमान लगाने के लिए किया जाता है।",
  "It is useful for students, adults, and corporates to understand intellectual strengths and fit for cognitively demanding pathways.": "यह छात्रों, वयस्कों और कॉर्पोरेट के लिए बौद्धिक शक्तियों को समझने और संज्ञानात्मक रूप से मांग वाले पथों के लिए फिट होने के लिए उपयोगी है।",
  "Benchmarks mental performance relative to age-group norms.": "आयु-समूह मानदंडों के सापेक्ष मानसिक प्रदर्शन को बेंचमार्क करता है।",
  "Assesses logical reasoning, abstract thought, and spatial processing.": "तार्किक तर्क, अमूर्त विचार और स्थानिक प्रसंस्करण का मूल्यांकन करता है।",
  "Supports advanced education planning and strategic career decisions.": "उन्नत शिक्षा योजना और रणनीतिक कैरियर निर्णयों का समर्थन करता है।",
  
  "7. Personality Testing: Practical Impact": "7. व्यक्तित्व परीक्षण: व्यावहारिक प्रभाव",
  "Personality testing maps stable behavioral patterns, communication style, and natural tendencies. It is widely used for self-awareness, mentoring, and organizational talent development.": "व्यक्तित्व परीक्षण स्थिर व्यवहारिक पैटर्न, संचार शैली और प्राकृतिक प्रवृत्तियों को मैप करता है। इसका व्यापक रूप से आत्म-जागरूकता, सलाह और संगठनात्मक प्रतिभा विकास के लिए उपयोग किया जाता है।",
  "Frameworks such as SWOT and MBTI-style interpretation are often used to understand strengths, blind spots, and role-fit patterns.": "SWOT और MBTI-शैली की व्याख्या जैसी रूपरेखाओं का अक्सर शक्तियों, अंधे धब्बों और भूमिका-फिट पैटर्न को समझने के लिए उपयोग किया जाता है।",
  "Teenagers: Better career management, peer-pressure resistance, and confidence building.": "किशोर: बेहतर कैरियर प्रबंधन, सहकर्मी-दबाव प्रतिरोध और आत्मविश्वास निर्माण।",
  "Adults: Improved relationship quality and personal-professional alignment.": "वयस्क: बेहतर संबंध गुणवत्ता और व्यक्तिगत-व्यावसायिक संरेखण।",
  "Corporates: Stronger hiring fit, conflict management, and leadership pipeline planning.": "कॉर्पोरेट: मजबूत भर्ती फिट, संघर्ष प्रबंधन और नेतृत्व पाइपलाइन योजना।",
  
  "8. Why Combined Assessment Works Best": "8. संयुक्त मूल्यांकन सर्वोत्तम क्यों काम करता है",
  "Aptitude, IQ, and personality together provide a multidimensional profile of potential, behavior, and learning strategy. This is more reliable than making decisions based only on marks, trends, or external pressure.": "योग्यता, आईक्यू और व्यक्तित्व एक साथ क्षमता, व्यवहार और शिक्षण रणनीति का एक बहुआयामी प्रोफाइल प्रदान करते हैं। यह केवल अंकों, प्रवृत्तियों या बाहरी दबाव के आधार पर निर्णय लेने की तुलना में अधिक विश्वसनीय है।",
  "Maximum value is achieved when reports are translated into actionable plans for study strategy, stream selection, skill development, and long-term career architecture.": "अधिकतम मूल्य तब प्राप्त होता है जब रिपोर्टों को अध्ययन रणनीति, स्ट्रीम चयन, कौशल विकास और दीर्घकालिक कैरियर आर्किटेक्चर के लिए कार्यान्वयन योग्य योजनाओं में अनुवादित किया जाता है।",
};

// Read existing hi.json
const hiJsonPath = path.join(__dirname, 'app/data/translations/hi.json');
let existingTranslations = {};

try {
  const content = fs.readFileSync(hiJsonPath, 'utf8');
  existingTranslations = JSON.parse(content);
  console.log(`✓ Loaded existing translations: ${Object.keys(existingTranslations).length} entries`);
} catch (error) {
  console.error('Error reading hi.json:', error.message);
  process.exit(1);
}

// Merge new translations with existing ones
const mergedTranslations = {
  ...existingTranslations,
  ...psychometricContent,
};

// Count new entries
const newEntries = Object.keys(psychometricContent).filter(
  key => !existingTranslations.hasOwnProperty(key)
);

console.log(`\n📝 New translations to add: ${newEntries.length}`);
console.log(`📊 Total translations after merge: ${Object.keys(mergedTranslations).length}`);

// Write updated translations back to file
try {
  fs.writeFileSync(
    hiJsonPath,
    JSON.stringify(mergedTranslations, null, 2),
    'utf8'
  );
  console.log(`\n✅ Successfully updated ${hiJsonPath}`);
  console.log(`\n📋 New entries added:`);
  newEntries.forEach((key, index) => {
    console.log(`   ${index + 1}. "${key}"`);
  });
} catch (error) {
  console.error('Error writing to hi.json:', error.message);
  process.exit(1);
}

console.log('\n✨ Translation update complete!');
