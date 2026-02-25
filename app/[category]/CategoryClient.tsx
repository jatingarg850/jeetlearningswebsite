"use client";

import { useState } from "react";
import { Search, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { formatCareerName } from "@/app/data/careers";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface CategoryClientProps {
  careers: string[];
  category: string;
  categoryName?: string;
}

export function CategoryClient({ careers, category, categoryName }: CategoryClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCareers = careers.filter((career) =>
    formatCareerName(career).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-[#EEEEEE]"
        style={{ background: "rgba(238, 238, 238, 0.50)", minHeight: "260px" }}
      >
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Label */}
            <div className="mb-4">
              <p className="font-poppins text-[#757575] text-sm font-medium mb-2">
                Explore Programs
              </p>
              <div className="w-10 h-0.5 bg-[#C20000] mx-auto" />
            </div>
            <h1
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.2" }}
            >
              {categoryName || "Career Programs"}
            </h1>
            <p
              className="font-poppins text-[#757575] mb-8"
              style={{ fontSize: "16px", lineHeight: "26px" }}
            >
              Discover your perfect career path with our comprehensive programs and expert guidance
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] w-5 h-5" />
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 bg-white border border-[#EEEEEE] rounded-xl text-[#505050] placeholder-[#757575] focus:outline-none focus:border-[#C20000] font-poppins text-sm transition-colors"
                style={{ boxShadow: "0px 4px 24px rgba(0,0,0,0.04)" }}
              />
            </div>
          </div>
        </div>
      </section>

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
            <div className="text-center py-16 bg-white rounded-xl border border-[#EEEEEE]">
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
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCareers.map((career) => (
                <Link key={career} href={`/${category}/${career}`}>
                  <div
                    className="group flex flex-col justify-between p-6 bg-white cursor-pointer h-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid rgba(238, 238, 238, 0.93)",
                      background: "linear-gradient(180deg, #fff 0%, #f5f5f5 100%)",
                      boxShadow: "0px 4px 24px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ background: "rgba(194, 0, 0, 0.08)" }}
                      >
                        <GraduationCap className="w-6 h-6" style={{ color: "#C20000" }} />
                      </div>
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                        style={{ background: "#C20000" }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-poppins font-semibold text-[#505050] mb-1 group-hover:text-[#C20000] transition-colors"
                        style={{ fontSize: "16px" }}
                      >
                        {formatCareerName(career)}
                      </h3>
                      <div className="mb-3" style={{ width: "40px", height: "2px", background: "#DA1313" }} />
                      <p className="font-poppins text-[#757575] text-sm">
                        Explore career opportunities and pathways
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12"
        style={{ background: "rgba(238, 238, 238, 0.50)", borderTop: "1px solid #EEEEEE" }}
      >
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h3
            className="font-poppins font-bold text-[#505050] mb-2"
            style={{ fontSize: "22px" }}
          >
            Not sure which career is right for you?
          </h3>
          <p className="font-poppins text-[#757575] mb-6 text-sm">
            Get personalized guidance from our expert counselors
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#C20000" }}
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
