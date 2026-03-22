"use client";

import { useState } from "react";
import { CareerDetail } from "@/app/data/careerDetails";
import Footer from "@/app/components/Footer";
import { FloatingNavbar } from "@/app/components/FloatingNavbar";
import { SidebarNav } from "@/app/components/SidebarNav";
import { CareerHero } from "@/app/components/CareerHero";
import { CareerCompleteGuide } from "@/app/components/CareerCompleteGuide";
import { CostBreakdown } from "@/app/components/CostBreakdown";
import { getCareerPageData } from "@/app/data/careerPageData";
import { allCareerCosts } from "@/app/data/costBreakdownData";
import ImpactStrip from "@/app/components/ImpactStrip";
import AwardsStrip from "@/app/components/AwardsStrip";
import { careerImagesMap } from "../../data/careerImagesMap.js";

interface CareerPageClientProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: CareerDetail | null;
  categoryData: any;
}

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD  = "#F59E0B";

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
    { id: 1, title: `${careerName} Overview`,   url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Career Path Guide",         url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Student Testimonials",      url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Exam Preparation Tips",     url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  const nextVideo = () => setCurrentVideoIndex((p) => (p + 1) % videos.length);
  const prevVideo = () => setCurrentVideoIndex((p) => (p - 1 + videos.length) % videos.length);

  // data-driven for every career (including actuarial_science)
  const pageData = getCareerPageData(career);

  const navItems = [
    { id: "hero",  label: "Overview",       icon: "Target"       },
    { id: "guide", label: "Complete Guide",  icon: "BookOpen"     },
    { id: "cost",  label: "Cost Breakdown",  icon: "CircleDollarSign" },
    { id: "videos",label: "Videos",          icon: "Monitor"      },
    { id: "cta",   label: "Get Started",     icon: "Rocket"       },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SidebarNav items={navItems} />
      <FloatingNavbar />

      {/* All content offset on lg screens to clear the sidebar */}
      <div className="lg:pl-20">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div id="hero">
        {pageData && (
          <CareerHero 
            data={pageData} 
            // @ts-ignore
            imageUrl={careerImagesMap[career] || `https://loremflickr.com/600/400/flat,illustration,cartoon,vector,${career}?lock=${career.length}`} 
          />
        )}
        <ImpactStrip />
        <AwardsStrip />
      </div>

      {/* ── Complete Guide (7 unique carousel styles) ────────────── */}
      <div id="guide">
        {pageData && (
          <CareerCompleteGuide
            careerName={careerName}
            sections={pageData.guideSections}
          />
        )}
      </div>

      {/* ── Cost Breakdown ────────────────────────────────────────── */}
      <div id="cost">
        {allCareerCosts[career] && (
          <CostBreakdown
            title="What Will It Cost?"
            subtitle="Complete financial breakdown for your career journey"
            items={allCareerCosts[career]}
          />
        )}
      </div>

      {/* ── Video Carousel ────────────────────────────────────────── */}
      <section id="videos" className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 text-slate-800">
              Learn More Through Videos
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium px-2">
              Watch expert insights and student experiences
            </p>
          </div>

          <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl mb-6 md:mb-8 bg-white border border-slate-100">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videos[currentVideoIndex].url}
                title={videos[currentVideoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
              {videos[currentVideoIndex].title}
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-slate-500 font-medium">
              Video {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
            <button
              onClick={prevVideo}
              className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto"
              style={{ background: "white", color: PRIMARY_BLUE, border: `2px solid ${PRIMARY_BLUE}` }}
            >
              ← Previous
            </button>

            <div className="flex gap-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className="rounded-full transition-all"
                  style={{
                    width:      currentVideoIndex === idx ? "32px" : "12px",
                    height:     "12px",
                    background: currentVideoIndex === idx ? PRIMARY_BLUE : `${PRIMARY_BLUE}40`,
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextVideo}
              className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto"
              style={{ background: PRIMARY_BLUE, color: "white", border: `2px solid ${PRIMARY_BLUE}` }}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section id="cta" className="relative py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
        <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] bg-blue-400/30 blur-[80px] md:blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 tracking-tight drop-shadow-sm">
            Ready to Start Your {careerName} Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Get personalised guidance from our expert counsellors to help you make the right decisions for your future.
          </p>
          <button
            className="px-6 sm:px-8 md:px-12 py-3 md:py-4 lg:py-5 rounded-lg md:rounded-2xl font-black text-xs sm:text-sm md:text-lg transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)]"
            style={{ background: ACCENT_GOLD, color: "#1e293b" }}
          >
            Book Free Career Consultation
          </button>
        </div>
      </section>

      </div>{/* end lg:pl-20 */}

      <Footer />
    </div>
  );
}
