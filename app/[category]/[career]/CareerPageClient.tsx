"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CareerDetail } from "@/app/data/careerDetails";
import Footer from "@/app/components/Footer";
import { FloatingNavbar } from "@/app/components/FloatingNavbar";
import { ActuarialFuturisticHero } from "@/app/components/ActuarialFuturisticHero";
import { ActuarialCompleteGuide } from "@/app/components/ActuarialCompleteGuide";
import { ActuarialTimeline } from "@/app/components/ActuarialTimeline";
import { ActuarialComparison } from "@/app/components/ActuarialComparison";
import { ActuarialSkillsShowcase } from "@/app/components/ActuarialSkillsShowcase";
import { TestimonialCarousel } from "@/app/components/TestimonialCarousel";
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

export function CareerPageClient({
  category,
  career,
  careerName,
  categoryName,
  careerDetail,
  categoryData,
}: CareerPageClientProps) {
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
  const actuarialGuideItems = [
    {
      id: "1",
      title: "What is Actuarial Science?",
      icon: "∑",
      description: "Understanding the profession and massive career opportunity in India",
      color: "#C20000",
      content: [
        "Actuaries use mathematics, statistics, and probability to measure and manage financial risk",
        "They predict future events like insurance claims, pension costs, and investment risks using data models",
        "In India, actuaries are officially regulated by the Institute of Actuaries of India (IAI) under the Actuaries Act, 2006",
        "India currently has only 500–700 Fellow actuaries, but the government targets 25,000 by 2030",
      ],
      highlights: [
        "Massive career opportunity with government backing",
        "Only 500-700 actuaries in India currently",
        "Target of 25,000 actuaries by 2030",
        "Officially regulated profession",
      ],
    },
    {
      id: "2",
      title: "Who Should Consider This Career?",
      icon: "🧮",
      description: "Essential traits and skills required to succeed as an actuary",
      color: "#DA1313",
      content: [
        "Strong love for probability, logical reasoning, and numerical problem-solving",
        "Patience to qualify through demanding professional exams spanning 6–10 years",
        "Sharp attention to detail, analytical thinking, and strong ethical standards",
        "Ability to explain complex actuarial data to non-technical audiences clearly",
        "Comfort with Excel, Python, R, SQL, and specialised actuarial software",
      ],
      highlights: [
        "Mathematics and analytical mindset essential",
        "Long-term commitment required (6-10 years)",
        "Strong communication skills needed",
        "Technical proficiency with programming languages",
      ],
    },
    {
      id: "3",
      title: "Key Responsibilities & Work Process",
      icon: "📊",
      description: "What actuaries do daily and their core responsibilities",
      color: "#E70000",
      content: [
        "Identify the business problem and determine what solution is actually needed",
        "Use data, mathematics, and computers to find accurate solutions",
        "Fix correct insurance prices and calculate future savings accurately",
        "Study and manage risks in insurance and investment portfolios",
        "Follow all government rules and regulatory guidelines strictly",
        "Explain results and updated plans clearly to managers and officials",
      ],
      highlights: [
        "Problem-solving and analysis are core activities",
        "Risk management across multiple sectors",
        "Regulatory compliance is critical",
        "Communication with stakeholders essential",
      ],
    },
    {
      id: "4",
      title: "What Will It Cost?",
      icon: "💰",
      description: "Financial investment breakdown for your actuarial journey",
      color: "#B30000",
      content: [
        "ACET entrance exam is free with ₹1,500 annual student membership fee",
        "Separate fees apply for each core and advanced paper",
        "Study materials and optional coaching add extra expenses",
        "Government colleges are cheaper; private universities cost significantly more",
        "Overall investment ranges between ₹2 to ₹5 lakhs over 6–10 years",
      ],
      highlights: [
        "Free ACET entrance exam",
        "₹1,500 annual membership fee",
        "Total investment: ₹2-5 lakhs over 6-10 years",
        "Government colleges offer cost savings",
      ],
    },
    {
      id: "5",
      title: "Scholarship Opportunities",
      icon: "🎓",
      description: "Multiple financial aid options available for deserving students",
      color: "#9B0000",
      content: [
        "Central Sector Scholarship supports high-performing Class 12 students from low-income families",
        "Post-Matric Scholarships available for SC, ST, OBC, and minority students",
        "Merit-cum-Means and NMMS scholarships support deserving economically weaker students",
        "AICTE Pragati and Saksham schemes support technical and professional course students",
        "State governments and universities offer additional merit and need-based financial aid",
      ],
      highlights: [
        "Central Sector Scholarship for top performers",
        "Community-based scholarships available",
        "Merit-cum-Means support for economically weaker students",
        "AICTE schemes for technical students",
      ],
    },
    {
      id: "6",
      title: "Key Challenges",
      icon: "⚠️",
      description: "Realistic expectations about the actuarial career path",
      color: "#C20000",
      content: [
        "Extremely difficult exams with high failure rates (30–40% pass rate at advanced levels)",
        "Long qualification period (6–10 years) requiring study alongside a full-time job",
        "Limited awareness among school counsellors and parents in India",
        "Niche entry-level job market; most roles concentrated in Mumbai and Gurgaon",
      ],
      highlights: [
        "High exam difficulty with 30-40% pass rates",
        "Requires 6-10 years of dedicated study",
        "Limited job market in early career",
        "Concentrated opportunities in major cities",
      ],
    },
    {
      id: "7",
      title: "Start Now (Class 9–12)",
      icon: "📚",
      description: "Your roadmap to becoming an actuary starting from school",
      color: "#DA1313",
      content: [
        "Master probability, statistics, and calculus in school",
        "Learn Excel and basic Python programming",
        "Appear for the ACET in Class 12 (registration is free)",
        "Participate in the IAI Actuarial Olympiad and Maths competitions",
        "Explore free courses on Coursera, edX, and NPTEL",
      ],
      highlights: [
        "Focus on mathematics and statistics in school",
        "Learn programming basics early",
        "Free ACET registration in Class 12",
        "Participate in competitions and olympiads",
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
      icon: <span className="text-xl">📈</span>,
      items: [
        { label: "Entry Level", value: "₹6-15 LPA", highlight: false },
        { label: "Mid-Career", value: "₹20-35 LPA", highlight: true },
        { label: "Senior Level", value: "₹50+ LPA", highlight: false },
      ],
    },
    {
      category: "Job Opportunities",
      icon: <span className="text-xl">👥</span>,
      items: [
        { label: "Insurance", value: "High", highlight: true },
        { label: "Pensions", value: "Growing", highlight: false },
        { label: "Investments", value: "Expanding", highlight: false },
      ],
    },
    {
      category: "Work-Life Balance",
      icon: <span className="text-xl">⏰</span>,
      items: [
        { label: "Flexibility", value: "Good", highlight: false },
        { label: "Remote Work", value: "Available", highlight: true },
        { label: "Career Growth", value: "Excellent", highlight: false },
      ],
    },
    {
      category: "Global Demand",
      icon: <span className="text-xl">🌍</span>,
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
      <FloatingNavbar />

      {/* Actuarial Science Futuristic Hero */}
      {career === "actuarial_science" && <ActuarialFuturisticHero />}

      {/* Complete Guide to Actuarial Science - MAIN CONTENT */}
      {career === "actuarial_science" && <ActuarialCompleteGuide sections={actuarialGuideItems} />}

      {/* Actuarial Timeline */}
      {career === "actuarial_science" && <ActuarialTimeline steps={timelineSteps} />}

      {/* Actuarial Comparison */}
      {career === "actuarial_science" && <ActuarialComparison data={comparisonData} />}

      {/* Actuarial Skills Showcase */}
      {career === "actuarial_science" && <ActuarialSkillsShowcase categories={skillsCategories} />}

      {/* Testimonial Carousel */}
      {career === "actuarial_science" && (
        <TestimonialCarousel
          testimonials={[
            {
              id: "1",
              name: "Anshul Sharma",
              title: "Senior Actuary",
              location: "Mumbai, India",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
              quote: "The guidance I received was instrumental in my journey to becoming a Fellow Actuary. The structured approach and mentorship made all the difference.",
            },
            {
              id: "2",
              name: "Neha Patel",
              title: "Risk Analyst",
              location: "Bangalore, India",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
              quote: "I went from being unsure about my career path to landing my dream job at a top insurance company. The comprehensive curriculum was exactly what I needed.",
            },
            {
              id: "3",
              name: "Shravan Kumar",
              title: "Pension Specialist",
              location: "Delhi, India",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
              quote: "The practical insights and real-world examples helped me understand actuarial science beyond textbooks. Highly recommended for anyone serious about this career.",
            },
          ]}
        />
      )}

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
            <h2 className="font-poppins font-bold text-[#505050] mb-3" style={{ fontSize: "clamp(24px,2.5vw,32px)" }}>
              Learn More Through Videos
            </h2>
            <p className="font-poppins text-[#757575]" style={{ fontSize: "16px" }}>
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
              <h3 className="font-poppins font-bold text-[#505050] text-xl">
                {videos[currentVideoIndex].title}
              </h3>
              <p className="font-poppins text-[#757575] text-sm mt-2">
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

      {/* CTA - Start Now Section */}
      <section className="relative overflow-hidden py-24" style={{ background: `linear-gradient(135deg, ${CANAM_RED} 0%, #DA1313 100%)` }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              top: "-100px",
              right: "-100px",
              filter: "blur(40px)"
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-10"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              bottom: "-80px",
              left: "-80px",
              filter: "blur(40px)"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full backdrop-blur-md"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <p className="font-fredoka text-white text-sm font-semibold">✨ Begin Your Journey</p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-luckiest-guy text-white mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.02em" }}
            >
              Ready to Master Actuarial Science?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-fredoka text-white opacity-95 mb-10 max-w-2xl mx-auto"
              style={{ fontSize: "18px", lineHeight: "28px" }}
            >
              Get personalized guidance from industry experts and join thousands of students who've successfully launched their actuarial careers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-fredoka font-bold text-lg transition-all backdrop-blur-sm"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  color: CANAM_RED,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)"
                }}
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-fredoka font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all"
              >
                Explore Programs
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <p className="font-luckiest-guy text-white text-3xl mb-2">500+</p>
                <p className="font-fredoka text-white opacity-80 text-sm">Students Guided</p>
              </div>
              <div className="text-center">
                <p className="font-luckiest-guy text-white text-3xl mb-2">95%</p>
                <p className="font-fredoka text-white opacity-80 text-sm">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="font-luckiest-guy text-white text-3xl mb-2">10+</p>
                <p className="font-fredoka text-white opacity-80 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
