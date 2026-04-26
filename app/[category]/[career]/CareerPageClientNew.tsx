"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Award, MapPin, Users, ArrowRight, Check, Target, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { formatCareerName } from "@/app/data/careers";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import StackingSection from "@/app/components/StackingSection";
import { CareerDetail } from "@/app/data/careerDetails";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ActuarialScienceHero } from "@/app/components/ActuarialScienceHero";
import { ActuarialPathAccordion } from "@/app/components/ActuarialPathAccordion";
import { ActuarialTimeline } from "@/app/components/ActuarialTimeline";
import { ActuarialComparison } from "@/app/components/ActuarialComparison";
import { ActuarialSkillsShowcase } from "@/app/components/ActuarialSkillsShowcase";
import { useState } from "react";

interface CareerPageClientProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: CareerDetail | null;
  categoryData: any;
}

const CANAM_RED = "#C20000";
const CANAM_RED_LINE = "#DA1313";

export function CareerPageClient({
  category,
  career,
  careerName,
  categoryName,
  careerDetail,
  categoryData,
}: CareerPageClientProps) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { id: 1, title: "Actuarial Science Overview", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Career Path Guide", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Student Testimonials", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Exam Preparation Tips", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Actuarial Science specific data
  const actuarialPathItems = [
    {
      id: "1",
      title: "What is Actuarial Science?",
      icon: "∑",
      description: "Understanding the profession and opportunities",
      color: "#C20000",
      content: [
        "Mathematics: Actuaries use maths, statistics, and probability to measure and manage financial risk.",
        "Prediction: They predict future events like insurance claims, pension costs, and investment risks using data models.",
        "Regulation: In India, actuaries are officially regulated by the Institute of Actuaries of India (IAI) under the Actuaries Act, 2006.",
        "Opportunity: India currently has only 500–700 Fellow actuaries, but the government targets 25,000 by 2030 — a massive career opportunity.",
      ],
    },
    {
      id: "2",
      title: "Who Should Consider This Career?",
      icon: "🧮",
      description: "Essential traits and skills required",
      color: "#DA1313",
      content: [
        "Mathematics: Strong love for probability, logical reasoning, and numerical problem-solving.",
        "Perseverance: Patience to qualify through demanding professional exams spanning 6–10 years.",
        "Integrity: Sharp attention to detail, analytical thinking, and strong ethical standards.",
        "Communication: Ability to explain complex actuarial data to non-technical audiences clearly.",
        "Technology: Comfort with Excel, Python, R, SQL, and specialised actuarial software.",
      ],
    },
    {
      id: "3",
      title: "Key Responsibilities & Work Process",
      icon: "📊",
      description: "What actuaries do daily",
      color: "#E70000",
      content: [
        "Understanding: Identify the business problem and what solution is actually needed.",
        "Analysis: Use data, mathematics, and computers to find accurate solutions.",
        "Pricing: Fix correct insurance prices and calculate future savings accurately.",
        "Risk: Study and manage risks in insurance and investment portfolios.",
        "Compliance: Follow all government rules and regulatory guidelines strictly.",
        "Reporting: Explain results and updated plans clearly to managers and officials.",
      ],
    },
    {
      id: "4",
      title: "What Will It Cost?",
      icon: "💰",
      description: "Financial investment breakdown",
      color: "#B30000",
      content: [
        "ACET: Free entrance exam with ₹1,500 annual student membership fee.",
        "Exams: Separate fees apply for each core and advanced paper.",
        "Coaching: Study materials and optional coaching add extra expenses.",
        "Degree: Government colleges are cheaper; private universities cost significantly more.",
        "Total: Overall investment ranges between ₹2 to ₹5 lakhs over 6–10 years.",
      ],
    },
    {
      id: "5",
      title: "Scholarship Opportunities",
      icon: "🎓",
      description: "Financial aid available",
      color: "#9B0000",
      content: [
        "IAI Trust Scholarships: Merit-based fee waivers for students from economically weaker sections.",
        "Corporate: Firms like Milliman and Swiss Re often sponsor the exam fees for their employees.",
        "NSP: General government scholarships for merit students (B.Sc. level).",
      ],
    },
    {
      id: "6",
      title: "Key Challenges",
      icon: "⚠️",
      description: "Realistic expectations",
      color: "#C20000",
      content: [
        "Extremely difficult exams with high failure rates (30–40% pass rate at advanced levels)",
        "Long qualification period (6–10 years) requiring study alongside a full-time job",
        "Limited awareness among school counsellors and parents in India",
        "Niche entry-level job market; most roles concentrated in Mumbai and Gurgaon",
      ],
    },
    {
      id: "7",
      title: "Start Now (Class 9–12)",
      icon: "📚",
      description: "Your roadmap to becoming an actuary",
      color: "#DA1313",
      content: [
        "Master probability, statistics, and calculus in school",
        "Learn Excel and basic Python programming",
        "Appear for the ACET in Class 12 (registration is free)",
        "Participate in the IAI Actuarial Olympiad and Maths competitions",
        "Explore free courses on Coursera, edX, and NPTEL",
      ],
    },
  ];

  const timelineSteps = [
    {
      phase: "Phase 1",
      duration: "Class 9-12",
      title: "Foundation Building",
      color: "#C20000",
      items: [
        "Master mathematics, statistics, and probability",
        "Learn Excel and basic programming",
        "Participate in math competitions",
        "Explore actuarial career resources",
      ],
    },
    {
      phase: "Phase 2",
      duration: "Year 1-2",
      title: "ACET & Core Exams",
      color: "#DA1313",
      items: [
        "Pass ACET (Actuarial Common Entrance Test)",
        "Enroll in actuarial science degree",
        "Clear Core Technical (CT) papers",
        "Build programming skills (Python, R, SQL)",
      ],
    },
    {
      phase: "Phase 3",
      duration: "Year 3-5",
      title: "Professional Exams",
      color: "#E70000",
      items: [
        "Complete Core Practice (CP) modules",
        "Pass specialist technical (ST) papers",
        "Gain practical work experience",
        "Develop industry connections",
      ],
    },
    {
      phase: "Phase 4",
      duration: "Year 6-10",
      title: "Fellowship & Specialization",
      color: "#B30000",
      items: [
        "Complete Advanced Technical (AT) papers",
        "Achieve Fellowship status (FSA/FIA)",
        "Specialize in insurance, pensions, or investments",
        "Lead actuarial projects and teams",
      ],
    },
  ];

  const comparisonData = [
    {
      category: "Salary Growth",
      icon: <TrendingUp className="w-6 h-6" style={{ color: CANAM_RED }} />,
      items: [
        { label: "Entry Level", value: "₹6-15 LPA", highlight: false },
        { label: "Mid-Career", value: "₹20-35 LPA", highlight: true },
        { label: "Senior Level", value: "₹50+ LPA", highlight: false },
      ],
    },
    {
      category: "Job Opportunities",
      icon: <Users className="w-6 h-6" style={{ color: CANAM_RED }} />,
      items: [
        { label: "Insurance", value: "High", highlight: true },
        { label: "Pensions", value: "Growing", highlight: false },
        { label: "Investments", value: "Expanding", highlight: false },
      ],
    },
    {
      category: "Work-Life Balance",
      icon: <Clock className="w-6 h-6" style={{ color: CANAM_RED }} />,
      items: [
        { label: "Flexibility", value: "Good", highlight: false },
        { label: "Remote Work", value: "Available", highlight: true },
        { label: "Career Growth", value: "Excellent", highlight: false },
      ],
    },
    {
      category: "Global Demand",
      icon: <Award className="w-6 h-6" style={{ color: CANAM_RED }} />,
      items: [
        { label: "India", value: "Growing", highlight: true },
        { label: "Abroad", value: "High", highlight: false },
        { label: "Remote Roles", value: "Increasing", highlight: false },
      ],
    },
  ];

  const skillsCategories = [
    {
      name: "Technical Skills",
      color: "#C20000",
      skills: [
        { name: "Mathematics & Statistics", level: 95, icon: "📐" },
        { name: "Data Analysis", level: 90, icon: "📊" },
        { name: "Programming (Python, R, SQL)", level: 85, icon: "💻" },
        { name: "Financial Modeling", level: 88, icon: "📈" },
      ],
    },
    {
      name: "Professional Skills",
      color: "#DA1313",
      skills: [
        { name: "Risk Assessment", level: 92, icon: "⚠️" },
        { name: "Problem Solving", level: 94, icon: "🧩" },
        { name: "Communication", level: 87, icon: "💬" },
        { name: "Leadership", level: 85, icon: "👥" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-[#EEEEEE] backdrop-blur-sm relative" style={{ background: "rgba(255, 255, 255, 0.8)" }}>
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-3 relative z-10">
          <div className="flex items-center gap-2 font-poppins text-sm">
            <Link href="/" className="text-[#757575] hover:text-[#C20000] transition-colors">Home</Link>
            <span className="text-[#757575]">/</span>
            <Link href={`/${category}`} className="text-[#757575] hover:text-[#C20000] transition-colors">{categoryName}</Link>
            <span className="text-[#757575]">/</span>
            <span className="font-medium" style={{ color: CANAM_RED }}>{careerName}</span>
          </div>
        </div>
      </div>

      {/* Actuarial Science Custom Hero */}
      {career === "actuarial_science" && <ActuarialScienceHero />}

      {/* Actuarial Path Accordion */}
      {career === "actuarial_science" && <ActuarialPathAccordion items={actuarialPathItems} />}

      {/* Actuarial Timeline */}
      {career === "actuarial_science" && <ActuarialTimeline steps={timelineSteps} />}

      {/* Actuarial Comparison */}
      {career === "actuarial_science" && <ActuarialComparison data={comparisonData} />}

      {/* Actuarial Skills Showcase */}
      {career === "actuarial_science" && <ActuarialSkillsShowcase categories={skillsCategories} />}

      {/* Video Carousel Section */}
      <section className="py-16 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238,238,238,0.50)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-32 h-32 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "10%",
            left: "5%",
            animationDelay: "0s"
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            bottom: "10%",
            right: "8%",
            animationDelay: "2s"
          }}
        />

        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 p-6 rounded-2xl backdrop-blur-sm mx-auto max-w-2xl"
            style={{
              background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.4) -3%, rgba(255, 255, 255, 0.2) 113.86%)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(32px,3.5vw,48px)" }}>
              Learn More Through Videos
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "20px" }}>
              Watch expert insights and student experiences
            </p>
          </motion.div>

          {/* Video Carousel */}
          <div className="relative">
            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden backdrop-blur-md mb-8"
              style={{
                background: "linear-gradient(110.97deg, rgba(255, 255, 255, 0.5) -4.87%, rgba(255, 255, 255, 0) 103.95%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src={videos[currentVideoIndex].url}
                  title={videos[currentVideoIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Video Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              <h3 className="font-poppins font-bold text-[#505050] text-2xl">
                {videos[currentVideoIndex].title}
              </h3>
              <p className="font-poppins text-[#757575] text-base mt-2">
                Video {currentVideoIndex + 1} of {videos.length}
              </p>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevVideo}
                className="p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: CANAM_RED }} />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {videos.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: currentVideoIndex === idx ? "32px" : "12px",
                      height: "12px",
                      background: currentVideoIndex === idx ? CANAM_RED : "rgba(194, 0, 0, 0.2)",
                    }}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextVideo}
                className="p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                  background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
                }}
              >
                <ChevronRight className="w-6 h-6" style={{ color: CANAM_RED }} />
              </motion.button>
            </div>

            {/* Thumbnail Preview */}
            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {videos.map((video, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className="flex-shrink-0 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    width: "120px",
                    height: "80px",
                    background: "linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)",
                    border: currentVideoIndex === idx ? `2px solid ${CANAM_RED}` : "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: currentVideoIndex === idx ? `0 0 12px ${CANAM_RED}40` : "0 2px 8px rgba(0, 0, 0, 0.04)"
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: CANAM_RED }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#EEEEEE] relative overflow-hidden" style={{ background: "rgba(238,238,238,0.50)" }}>
        {/* Floating decorative elements */}
        <div 
          className="absolute w-32 h-32 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "20%",
            left: "10%",
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full backdrop-blur-md animate-float"
          style={{
            background: "linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            top: "15%",
            right: "15%",
            animationDelay: "3s"
          }}
        />
        
        <div className="max-w-[700px] mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="font-poppins text-[#757575] text-sm mb-2">Start Your Journey</p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins font-bold text-[#505050] mb-4"
            style={{ fontSize: "clamp(32px,2.5vw,48px)" }}
          >
            Ready to Start Your {careerName} Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-poppins text-[#757575] mb-8"
            style={{ fontSize: "20px", lineHeight: "30px" }}
          >
            Get personalized career guidance from our expert counselors to help you make the right decisions for your future.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-8 py-4 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            style={{ 
              background: `linear-gradient(135deg, ${CANAM_RED} 0%, #DA1313 100%)`,
              fontSize: "20px",
              boxShadow: "0 8px 24px rgba(194, 0, 0, 0.3)"
            }}
          >
            Book Free Career Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
