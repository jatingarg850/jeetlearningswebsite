import type { CareerPageData } from './careerPageData';

const PURPLE = "#7C3AED";
const PURPLE2 = "#A78BFA";

export const mentorAndCoachUpdateData: Record<string, CareerPageData> = {
  mentor_and_coach: {
    slug: "mentor_and_coach",
    badge: "🎯 The Architect of Potential for Class 10+",
    heading: "Mentor & Coach",
    subheading: "Be a GPS for people's lives. Help others unlock their potential and navigate from where they are to where they want to be. Join the $5B global coaching market growing at 14% CAGR.",
    whyCards: [
      { icon: "TrendingUp", title: "$5B Global Market by 2026", description: "Coaching industry exploding at 14% CAGR. India emerging as key hub. From luxury for CEOs to necessity for professionals.", borderColor: "#7C3AED" },
      { icon: "Users", title: "Human Transformation Work", description: "Help people move from where they are to where they want to be. Direct impact on lives, careers, and families.", borderColor: "#A78BFA" },
      { icon: "Globe", title: "₹3.5L–₹1Cr+ Income Potential", description: "Entry-level ₹3.5L–₹7L. Senior coaches ₹20L–₹40L+. Star coaches earning ₹1Cr+ in consulting fees.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Freelance Freedom", description: "60% of coaches are self-employed. Work from anywhere. Coach clients globally in dollars from your home." , borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Certification (3-5 years)", color: "bg-purple-100 text-purple-700" },
      { label: "Entry Path", detail: "Psychology/HR + ICF Certification", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹3.5L–₹1Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "$5 Billion", label: "Global Coaching Market by 2026", gradient: "from-purple-500 to-purple-600" },
      { value: "14% CAGR", label: "Industry Growth Rate", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding the discipline and its scope.",
        color: PURPLE,
        content: [
          "Imagine being a GPS for people's lives. A Mentor or Coach doesn't drive the car; they sit in the passenger seat, helping the driver (the client) navigate traffic, avoid potholes, and find the fastest route to their destination.",
          "While often used interchangeably, there is a subtle difference: A Coach is task-oriented. They ask powerful questions to help you unlock your own potential (e.g., 'How can you solve this problem?'). A Mentor is relationship-oriented. They share their own experience and advice (e.g., 'Here is how I solved this problem when I was your age.').",
          "In today's high-pressure world, this career is exploding. From CEOs needing clarity to students confused about careers, everyone is looking for guidance. As a professional in this field, you are in the business of Human Transformation.",
          "You help people move from where they are to where they want to be. This is not therapy (though it requires empathy). This is not consulting (though it requires expertise). This is the art and science of unlocking human potential."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world workflow of a mentor and coach.",
        color: PURPLE2,
        content: [
          "8:00 AM: Start the day with meditation. To guide others, your own mind must be clear. Review notes for your first client, a VP at a tech startup struggling with 'Imposter Syndrome.'",
          "10:00 AM: Zoom call begins. The client is stressed. You don't offer advice immediately. Instead, you ask, 'What is the evidence that you are not good enough?' By 11:00 AM, the client has realized their fear was irrational and leaves feeling empowered.",
          "1:00 PM: Lunch with a young college graduate you're mentoring pro-bono. Unlike the morning coaching session, here you're more directive, sharing specific contacts and resume tips to help them land a job.",
          "3:00 PM: Put on your 'content creator' hat. Record a 60-second video for LinkedIn titled '3 Ways to Say No Without Guilt.' In this career, building a personal brand is how you get clients.",
          "5:00 PM: Head to a co-working space to conduct a group workshop on 'Emotional Intelligence for Sales Teams.' The energy is high, and you use role-playing games to teach empathy.",
          "7:30 PM: Back home, spend an hour studying for your Master Certified Coach (MCC) exam. The learning never stops. Sleep knowing you helped at least five people fight their battles today."
        ]
      },
      {
        id: "who",
        title: "Personality Traits & Skills Required",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: PURPLE,
        content: [
          "The Listener: You are the person friends come to when they have a problem. You listen more than you speak.",
          "The Empathetic Soul: You can 'feel' what others are feeling without judging them. You hold space for their emotions.",
          "The Pattern Recognizer: You can spot behavior patterns. (e.g., 'You always procrastinate when you are afraid of failing.')",
          "The Cheerleader: You genuinely get happy when others succeed. Their wins are your wins.",
          "Trustworthy: People find it easy to tell you their secrets. You maintain confidentiality and boundaries.",
          "Curious and Inquisitive: You ask powerful questions that make people think deeper about their situations.",
          "Resilient and Emotionally Intelligent: You can handle difficult conversations and emotional situations without getting overwhelmed."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete scope of mentoring and coaching work.",
        color: PURPLE2,
        content: [
          "Discovery Session: Meeting a new client to understand their 'Pain Points' (what's wrong) and 'Goals' (what they want).",
          "Contracting: Agreeing on the number of sessions and the specific outcome (e.g., 'In 3 months, I will launch my business').",
          "The Intervention: Conducting weekly/bi-weekly sessions using tools like the GROW Model (Goal, Reality, Options, Will).",
          "Accountability: Checking in to ensure the client is doing the homework (e.g., 'Did you have that difficult conversation with your boss?').",
          "Feedback & Closure: Measuring progress and formally ending the relationship once the goal is achieved.",
          "Continuous Learning: Staying updated with coaching methodologies, psychology research, and industry trends.",
          "Personal Development: Working on your own growth to model the behavior you teach."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways & Educational Routes",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: PURPLE,
        content: [
          "After Class 10: Stream Selection: Humanities (Psychology) is the best foundation. However, Commerce/Science students are equally welcome (many business coaches come from Commerce backgrounds). Focus on developing communication skills and participating in debates/leadership roles.",
          "After Class 12: Pursue B.A./B.Sc. in Psychology to understand human behavior, BBA/B.Com if you want to become a Business or Executive Coach, or B.A. in Human Resource Management (HRM) for corporate coaching roles.",
          "After Graduation (The Crucial Phase): Work for 3-5 years in HR, Sales, Teaching, or Management. You cannot coach someone on a journey you haven't walked. Then pursue ICF (International Coaching Federation) Credentials starting as an ACC (Associate Certified Coach).",
          "Specializations: Life Coaching, Executive Coaching, Business Coaching, Career Coaching, Wellness Coaching, Relationship Coaching, Agile Coaching.",
          "Career Progression: Entry-level Life Coach → Corporate Trainer/HR Manager → Executive Coach → Senior Consultant/Mentor → Celebrity Coach/Thought Leader."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot & Salary Outlook",
        icon: "TrendingUp",
        description: "Current opportunities and earning potential.",
        color: PURPLE2,
        content: [
          "Market Growth: The coaching industry in India is witnessing a massive boom, growing at a CAGR of ~14%. It is no longer a luxury for CEOs; it is becoming a necessity for professionals and students.",
          "Market Size: The global coaching market is expected to hit $5 Billion by 2026, with India being a key emerging hub.",
          "Entry-Level (0-2 years): Life Coach (Freelance), Career Counselor (School) - ₹3.5L–₹7L annually.",
          "Mid-Level (3-7 years): Corporate Trainer, HR Business Partner - ₹8L–₹15L annually.",
          "Senior-Level (8+ years): Executive Coach (Corporate Panel), Leadership Mentor - ₹20L–₹40L+ annually.",
          "Star Level: Celebrity Coach, Top Business Mentor - ₹1Cr+ (consulting fees).",
          "Note: This career has high variance. Freelancers can earn zero or crores depending on their personal brand and client base.",
          "Metro vs. Non-Metro: Metro cities (Mumbai, Delhi, Bengaluru) currently hold 70% of the jobs, but online coaching is rapidly democratizing income for those in Tier-2 cities."
        ]
      },
      {
        id: "jobs",
        title: "Employment Sectors & Job Opportunities",
        icon: "MapPin",
        description: "Industries and institutions hiring mentors and coaches.",
        color: PURPLE,
        content: [
          "Corporate Sector: Companies like Infosys, Google, and Tata hire internal 'Agile Coaches' and 'Leadership Development Managers.'",
          "EdTech: Platforms like UpGrad, Unacademy, and Coursera hire thousands of 'Student Mentors' to guide learners.",
          "Coaching Aggregators: Platforms like BetterUp and YourDOST connect coaches to clients remotely.",
          "Freelancing: 60% of coaches are self-employed entrepreneurs running their own practice.",
          "International Potential: If you are ICF certified, you can coach clients in the USA/UK from your home in Indore or Jaipur, earning in dollars.",
          "Schools and Colleges: Career counselors, student mentors, and academic coaches.",
          "Healthcare: Wellness coaches, health coaches, and lifestyle mentors.",
          "NGOs and Social Organizations: Community mentors and social impact coaches."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions & Learning Centers",
        icon: "Building2",
        description: "Where to pursue education and certification.",
        color: PURPLE,
        content: [
          "For Psychology/HR Foundation: Tata Institute of Social Sciences (TISS), Mumbai - Best for HR and Human Dynamics. Christ University, Bengaluru - Strong Psychology department. Delhi University (Lady Shri Ram / Jesus & Mary) - Top-tier Psychology courses. Amity University (Noida/Online) - Popular for Psychology and Counselling.",
          "For Professional Coaching Certification (ICF Accredited): Coach Transformation Academy (CTA) - Offers courses in Delhi, Mumbai, and Online. NLP Coaching Academy (Bengaluru) - Focuses on Neuro-Linguistic Programming. Symbiosis Coaching (USA/India) - Distance learning options.",
          "International Certifications: International Coaching Federation (ICF) - The most respected global body. EMCC (European Mentoring and Coaching Council) - Another global standard.",
          "Specialized Programs: Career Council of India (CCI) - For career counselors specifically. Various universities offer postgraduate diplomas in Guidance & Counselling."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship & Financial Support",
        icon: "Award",
        description: "Funding opportunities for education.",
        color: PURPLE2,
        content: [
          "University Scholarships: Merit-based waivers for B.A./B.Sc. programs.",
          "Corporate Sponsorship: If you work in HR, many companies (like Wipro, HCL) will pay for your coaching certification as part of L&D (Learning & Development).",
          "ICF Foundation Scholarships: Occasionally offers grants for those coaching in the social impact sector.",
          "Government Scholarships: Various state and central government schemes for higher education.",
          "Employer Support: Many organizations offer professional development budgets for employee certifications.",
          "Skill Development Grants: Government-funded programs offering subsidized training in coaching and mentoring."
        ]
      },
      {
        id: "certifications",
        title: "Professional Certifications & Credentials",
        icon: "Award",
        description: "Credentials that enhance career prospects.",
        color: PURPLE,
        content: [
          "International Coaching Federation (ICF): The most respected global body. Levels: ACC (Associate Certified Coach), PCC (Professional Certified Coach), MCC (Master Certified Coach).",
          "EMCC (European Mentoring and Coaching Council): Another global standard for coaching excellence.",
          "Career Council of India (CCI): For career counselors specifically.",
          "NLP (Neuro-Linguistic Programming) Certification: Enhances coaching techniques and communication skills.",
          "Postgraduate Diplomas: In Guidance & Counselling offered by NCERT and various universities.",
          "Specialized Certifications: Executive Coaching, Life Coaching, Business Coaching, Wellness Coaching certifications.",
          "Cost of Certification: ICF Accredited Course (60 Hours) - ₹1.5L–₹3.5L. Mentoring Hours - You often have to pay a senior mentor to supervise you (approx. ₹50k)."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities & Roles",
        icon: "Briefcase",
        description: "Conventional and emerging career options.",
        color: PURPLE2,
        content: [
          "Conventional Careers: School Counselor, HR Manager, Corporate Trainer, Life Coach, Career Counselor.",
          "New-Age Careers: Wellness Coach (helping people manage stress and sleep), Agile Coach (helping software teams work faster and better - huge demand in IT), Dating/Relationship Coach (helping people navigate modern relationships), Executive Coach (for C-suite leaders).",
          "Freelancing: Building a personal brand on Instagram/LinkedIn and selling 'Masterclasses' or 1-on-1 coaching packages.",
          "Entrepreneurship: Starting your own coaching practice, online coaching platform, or coaching academy.",
          "Corporate Roles: Internal coaching departments, talent development, organizational development.",
          "Social Impact: Coaching in NGOs, community organizations, and social enterprises.",
          "Hybrid Roles: Combining coaching with other expertise (e.g., Tech Coach, Finance Coach, Health Coach)."
        ]
      },
      {
        id: "challenges",
        title: "Challenges & Realities",
        icon: "AlertTriangle",
        description: "The practical challenges of the field.",
        color: PURPLE,
        content: [
          "Selling is Hard: You might be a great coach, but if you can't sell your services, you won't eat. You are an entrepreneur first.",
          "Unregulated Market: Anyone can call themselves a 'Coach.' You compete with untrained influencers. Certification and credibility are crucial.",
          "Emotional Burnout: Listening to people's problems 6 hours a day is exhausting. You need strong boundaries and self-care practices.",
          "Income Variability: Especially as a freelancer, income can be unpredictable. Building a stable client base takes time.",
          "Continuous Learning Required: Coaching methodologies, psychology research, and industry trends keep evolving.",
          "Client Resistance: Not all clients are ready for change. Managing expectations and client readiness is challenging.",
          "Imposter Syndrome: Even experienced coaches sometimes doubt their ability to help others."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next in coaching (2025-2035).",
        color: PURPLE2,
        content: [
          "AI Coaching: Chatbots (like Pi or specialized AI mentors) will handle basic queries. Human coaches will be needed for complex, emotional, and high-stakes issues.",
          "Hyper-Specialization: 'General Life Coaches' will vanish. The future belongs to 'Post-Divorce Financial Coaches' or 'GenZ Career Transition Coaches.' Niche expertise will command premium rates.",
          "Democratization: Coaching was once for CEOs. By 2030, it will be a standard perk for mid-level employees too. More jobs, but also more competition.",
          "Virtual Reality Coaching: VR-based coaching simulations for practicing difficult conversations and scenarios.",
          "Data-Driven Coaching: Using analytics and AI to personalize coaching approaches based on client data.",
          "Wellness Integration: Coaching increasingly integrated with mental health, fitness, and holistic wellness programs.",
          "Global Opportunities: Remote coaching enabling coaches to serve international clients and earn in foreign currencies."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build Now",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: PURPLE,
        content: [
          "Active Listening: Practice listening to a friend for 5 minutes without interrupting or giving advice. Just listen. This is the foundation of coaching.",
          "Leadership Roles: Become a House Captain or Club Secretary. You will essentially be 'mentoring' your juniors and developing leadership skills.",
          "Read Psychology: Start with books like 'Atomic Habits' by James Clear or 'Mindset' by Carol Dweck. Understand human behavior and motivation.",
          "Public Speaking: Join Toastmasters or debate clubs. Coaches need to be articulate and confident communicators.",
          "Emotional Intelligence: Work on understanding and managing your own emotions. Take EQ assessments and practice self-awareness.",
          "Volunteer Mentoring: Start mentoring younger students or peers. Offer free coaching to build experience and testimonials.",
          "Study Communication: Learn about NLP, active listening, powerful questioning, and non-verbal communication.",
          "Build Your Network: Connect with mentors, coaches, and professionals in your field. Attend workshops and conferences."
        ]
      },
      {
        id: "personalities",
        title: "Inspiring Figures in Coaching",
        icon: "User",
        description: "People who shaped the field.",
        color: PURPLE2,
        content: [
          "Dr. Vivek Bindra: CEO of Bada Business. He popularized 'Business Coaching' for the masses in India through high-energy content and accessible programs.",
          "Sridhar Laxman: A top executive coach who works with C-suite leaders from global corporations. He represents the 'Corporate/Professional' side of coaching.",
          "Priya Kumar: An internationally acclaimed motivational speaker and author who uses storytelling to mentor corporate teams and inspire change.",
          "Simerjeet Singh: A global keynote speaker and coach known for his 'Growth Mindset' series and transformational coaching programs.",
          "Rujuta Diwekar: While a nutritionist, she acts as a 'Health Coach,' guiding lifestyle changes rather than just diet charts. Shows the integration of coaching with other expertise.",
          "International Icons: Tony Robbins, Marshall Goldsmith, and other global coaches who have shaped the industry and continue to influence coaching practices worldwide."
        ]
      },
      {
        id: "topcolleges",
        title: "Top Colleges & Universities",
        icon: "Building2",
        description: "Premier institutions for coaching and mentoring education.",
        color: PURPLE,
        content: [
          "Tata Institute of Social Sciences (TISS), Mumbai: Best for HR and Human Dynamics with strong focus on organizational behavior and coaching.",
          "Christ University, Bengaluru: Strong Psychology department with excellent faculty and research opportunities in human development.",
          "Delhi University (Lady Shri Ram / Jesus & Mary): Top-tier Psychology courses with strong academic rigor and industry connections.",
          "Amity University (Noida/Online): Popular for Psychology and Counselling with flexible learning options.",
          "Coach Transformation Academy (CTA): Specialized ICF-accredited coaching certification programs in Delhi, Mumbai, and Online.",
          "NLP Coaching Academy, Bengaluru: Focuses on Neuro-Linguistic Programming and advanced coaching techniques.",
          "Symbiosis Institute: Offers distance learning options for coaching and mentoring certifications.",
          "International Programs: Many universities offer online ICF-accredited programs accessible from India."
        ]
      }
    ],
  },
};
