"use client";

import { useState } from "react";
import { CareerDetail } from "@/app/data/careerDetails";
import Footer from "@/app/components/Footer";
import { FloatingNavbar } from "@/app/components/FloatingNavbar";
import { ActuarialFuturisticHero } from "@/app/components/ActuarialFuturisticHero";
import { ActuarialCompleteGuide } from "@/app/components/ActuarialCompleteGuide";

interface CareerPageClientProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: CareerDetail | null;
  categoryData: any;
}

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

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

  return (
    <div className="min-h-screen bg-white">
      <FloatingNavbar />

      {/* Actuarial Science Futuristic Hero */}
      {career === "actuarial_science" && <ActuarialFuturisticHero />}

      {/* Complete Guide to Actuarial Science - MAIN CONTENT */}
      {career === "actuarial_science" && <ActuarialCompleteGuide sections={actuarialGuideItems} />}

      {/* Video Carousel Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
              Learn More Through Videos
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Watch expert insights and student experiences
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-xl overflow-hidden shadow-md mb-6 md:mb-8 bg-white">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videos[currentVideoIndex].url}
                title={videos[currentVideoIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Title */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              {videos[currentVideoIndex].title}
            </h3>
            <p className="text-slate-600 text-xs md:text-sm mt-2">
              Video {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button
              onClick={prevVideo}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all hover:bg-blue-50 text-sm md:text-base"
              style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
            >
              ← Previous
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className="rounded-full transition-all"
                  style={{
                    width: currentVideoIndex === idx ? "32px" : "12px",
                    height: "12px",
                    background: currentVideoIndex === idx ? PRIMARY_BLUE : `${PRIMARY_BLUE}40`,
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextVideo}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full border-2 transition-all hover:bg-blue-50 text-sm md:text-base"
              style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* CTA - Start Now Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6" style={{ background: PRIMARY_BLUE }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Start Your Actuarial Journey?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors to help you make the right decisions for your future.
          </p>
          <button
            className="px-6 md:px-10 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg transition-all hover:opacity-90"
            style={{ background: ACCENT_GOLD, color: PRIMARY_BLUE }}
          >
            Book Free Career Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
