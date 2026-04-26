"use client";

import { useState } from "react";
import { Search, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { formatCareerName } from "@/app/data/careers";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";

import { careerImagesMap } from "../data/careerImagesMap.js";
import { categoryBackgroundsMap } from "../data/categoryBackgroundsMap.js";

interface CategoryClientProps {
  careers: string[];
  category: string;
  categoryName?: string;
}

export function CategoryClient({ careers, category, categoryName }: CategoryClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  if (!careers || careers.length === 0) {
    notFound();
  }

  // Fallback to format name if specific category name not provided
  const displayName = categoryName || formatCareerName(category);

  const filteredCareers = careers.filter((career) =>
    formatCareerName(career).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRelevantImage = (career: string, index: number) => {
    // We now use a completely deterministic, pre-generated mapping of 150+ high-quality cartoon style images!
    // This perfectly solves the "random image" problem without any rate limiting or slow loading times.
    
    // @ts-ignore
    if (careerImagesMap && typeof careerImagesMap[career] === 'string') {
      // @ts-ignore
      return careerImagesMap[career];
    }
    
    // Absolute last resort fallback using dynamic illustration API if a very new career is added tomorrow
    return `https://loremflickr.com/600/400/flat,illustration,cartoon,${career.replace(/_/g, '-')},vector?lock=${index + 1000}`;
  };



  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#EEEEEE]"
        style={{ minHeight: "250px" }}
      >
        {/* Full-bleed absolute background image for the Category */}
        <div className="absolute inset-0 z-0">
          <img 
            // @ts-ignore
            src={categoryBackgroundsMap[category] || `https://loremflickr.com/1920/1080/flat,illustration,cartoon,${category.replace(/_/g, '-')},vector?lock=500`}
            alt={`${displayName} Category Background`}
            className="w-full h-full object-cover opacity-[0.35] mix-blend-multiply"
            style={{ filter: "saturate(1.3)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          {/* Overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-10 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 text-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <p className="font-poppins text-[#757575] text-sm font-medium mb-2">
                Explore Programs
              </p>
              <div className="w-10 h-0.5 bg-[#C20000] mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: "1.2" }}
            >
              {displayName || "Career Programs"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-[#757575] mb-8"
              style={{ fontSize: "20px", lineHeight: "30px" }}
            >
              Discover your perfect career path with our comprehensive programs and expert guidance
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-lg mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] w-5 h-5" />
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 bg-white/80 backdrop-blur-sm border border-[#EEEEEE] rounded-xl text-[#505050] placeholder-[#757575] focus:outline-none focus:border-[#C20000] font-poppins text-sm transition-colors shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thin Divider */}
      <div className="border-t border-[#EEEEEE]" />

      {/* Results count */}
      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-6">
        <p className="font-poppins text-[#757575] text-sm">
          Showing{" "}
          <span className="font-semibold text-[#C20000]">{filteredCareers.length}</span>{" "}
          {filteredCareers.length === 1 ? "career" : "careers"}
        </p>
      </div>

      {/* Careers Grid */}
      <section className="pb-16">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          {filteredCareers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16 bg-white rounded-xl border border-[#EEEEEE]"
            >
              <Search className="w-10 h-10 text-[#757575] mx-auto mb-3" />
              <p className="font-poppins text-[#505050] text-base mb-2">
                No careers found matching &quot;{searchTerm}&quot;
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="font-poppins text-sm underline hover:opacity-70 transition-opacity"
                style={{ color: "#C50000" }}
              >
                Clear search
              </button>
            </motion.div>
          ) : (
            // Show grid for all careers
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCareers.map((career, idx) => (
                <motion.div
                  key={career}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link href={`/${category}/${career}`}>
                    <div
                      className="group relative flex flex-col p-4 bg-white cursor-pointer h-full transition-shadow duration-500 hover:shadow-2xl"
                      style={{
                        borderRadius: "24px",
                        border: "1px solid #EEEEEE",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.03)",
                        overflow: "hidden",
                      }}
                    >
                        {/* Specific Photo from Internet */}
                        <div className="relative aspect-[16/10] mb-5 overflow-hidden rounded-2xl bg-slate-50 border border-[#F5F5F5] flex-shrink-0">
                           <img 
                             src={getRelevantImage(career, idx)}
                             alt={formatCareerName(career)}
                             className="w-full h-full object-cover"
                             onError={(e) => {
                               (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80";
                             }}
                           />
                           {/* Gradient Overlay for better contrast and premium look */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           
                           {/* Floating floating icon on top of photo */}
                           <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             <div className="flex items-center gap-2">
                               <GraduationCap className="w-3.5 h-3.5 text-[#C20000]" />
                               <span className="text-[10px] font-bold text-[#333333] uppercase tracking-wider">Expert Track</span>
                             </div>
                           </div>
                        </div>

                      <div className="px-1 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                           <h3
                             className="font-poppins font-bold text-[#333333] text-lg group-hover:text-[#C20000] transition-colors leading-tight"
                           >
                             {formatCareerName(career)}
                           </h3>
                           <div
                             className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 border border-[#EEEEEE] group-hover:bg-[#C20000] group-hover:border-[#C20000] transition-all duration-500"
                           >
                             <ArrowRight className="w-4 h-4 text-[#757575] group-hover:text-white" />
                           </div>
                        </div>
                        <p className="font-poppins text-[#757575] text-sm line-clamp-2 mt-auto">
                          Premium career track with industry-recognized certifications and expert mentorship.
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-12"
        style={{ background: "rgba(238, 238, 238, 0.50)", borderTop: "1px solid #EEEEEE" }}
      >
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-[#505050] mb-2"
            style={{ fontSize: "26px" }}
          >
            Not sure which career is right for you?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-[#757575] mb-6 text-sm"
          >
            Get personalized guidance from our expert counselors
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-3 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#C20000" }}
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
