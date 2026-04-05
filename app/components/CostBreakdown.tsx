"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp, DollarSign, Calendar, Target } from "lucide-react";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface CostItem {
  category: string;
  amount: string;
  description: string;
  icon: string;
  color: string;
  details?: string[];
}

interface CostBreakdownProps {
  title?: string;
  subtitle?: string;
  items: CostItem[];
}

export function CostBreakdown({
  title = "What Will It Cost?",
  subtitle = "Complete financial breakdown for your career journey",
  items,
}: CostBreakdownProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"breakdown" | "roi" | "timeline">("breakdown");

  // Calculate total cost
  const totalAmount = items.reduce((sum, item) => {
    const amount = item.amount.replace(/[₹,+\-\s]/g, "");
    const num = parseInt(amount) || 0;
    return sum + num;
  }, 0);

  return (
    <div className="relative bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-3 md:mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4" style={{ borderColor: PRIMARY_BLUE }}>
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5" style={{ color: PRIMARY_BLUE }} />
                <p className="text-xs font-bold uppercase text-slate-500">Total Investment</p>
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900">₹{(totalAmount / 100000).toFixed(1)}L+</p>
              <p className="text-xs text-slate-500 mt-2">Over entire duration</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4" style={{ borderColor: ACCENT_GOLD }}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5" style={{ color: ACCENT_GOLD }} />
                <p className="text-xs font-bold uppercase text-slate-500">Duration</p>
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900">6-10 Yrs</p>
              <p className="text-xs text-slate-500 mt-2">Including exams & training</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border-l-4" style={{ borderColor: "#10B981" }}>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5" style={{ color: "#10B981" }} />
                <p className="text-xs font-bold uppercase text-slate-500">ROI</p>
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900">300%+</p>
              <p className="text-xs text-slate-500 mt-2">Within 5 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex gap-0 md:gap-2">
            <button
              onClick={() => setActiveTab("breakdown")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-4 font-bold text-sm md:text-base transition-all border-b-2 ${
                activeTab === "breakdown"
                  ? "text-blue-600 border-blue-600"
                  : "text-slate-600 border-transparent hover:text-slate-900"
              }`}
            >
              Detailed Breakdown
            </button>
            <button
              onClick={() => setActiveTab("roi")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-4 font-bold text-sm md:text-base transition-all border-b-2 ${
                activeTab === "roi"
                  ? "text-blue-600 border-blue-600"
                  : "text-slate-600 border-transparent hover:text-slate-900"
              }`}
            >
              ROI & Earnings
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`flex-1 md:flex-none px-4 md:px-6 py-4 font-bold text-sm md:text-base transition-all border-b-2 ${
                activeTab === "timeline"
                  ? "text-blue-600 border-blue-600"
                  : "text-slate-600 border-transparent hover:text-slate-900"
              }`}
            >
              Timeline
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === "breakdown" && (
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-8 md:mb-12">
              Cost Breakdown by Category
            </h3>

            <div className="space-y-3 md:space-y-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200"
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-7 hover:bg-slate-50 transition-colors"
                    style={{
                      borderLeft: `6px solid ${item.color}`,
                    }}
                  >
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-3xl md:text-4xl flex-shrink-0 shadow-md"
                        style={{ background: `${item.color}15` }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-black text-base md:text-lg text-slate-900">{item.category}</p>
                        <p className="text-xs md:text-sm text-slate-600 mt-1 font-medium">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right">
                        <p className="font-black text-lg md:text-xl text-slate-900">{item.amount}</p>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform flex-shrink-0"
                        style={{
                          background: item.color,
                          transform: expandedIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedIndex === idx && item.details && (
                    <div className="px-5 md:px-7 pb-6 md:pb-8 bg-gradient-to-b from-slate-50 to-white border-t-2" style={{ borderTopColor: item.color }}>
                      <div className="space-y-3">
                        {item.details.map((detail, detailIdx) => (
                          <div key={detailIdx} className="flex gap-3 items-start">
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ background: item.color }}
                            />
                            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-slate-900 mb-2">Total Investment Range</h4>
                  <p className="text-slate-700 leading-relaxed">
                    The total cost of pursuing this career ranges from <span className="font-bold">₹5-15 lakhs</span> depending on your choice of institution (government vs. private) and location. This includes tuition fees, living expenses, professional exams, and study materials over the entire duration of your education and professional qualification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "roi" && (
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-8 md:mb-12">
              Return on Investment & Earnings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
              {/* Entry Level */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Entry Level</p>
                    <p className="text-sm text-blue-600 font-semibold">0-2 Years</p>
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-2">₹8-12 LPA</p>
                <p className="text-sm text-slate-700 mb-4">After qualification & first job</p>
                <div className="space-y-2 pt-4 border-t border-blue-300">
                  <p className="text-xs text-slate-700"><span className="font-bold">Annual Salary:</span> ₹8-12 Lakhs</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Payback Period:</span> 2-3 years</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Monthly:</span> ₹67K-1L</p>
                </div>
              </div>

              {/* Mid Career */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Mid Career</p>
                    <p className="text-sm text-amber-600 font-semibold">5-7 Years</p>
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-2">₹25-35 LPA</p>
                <p className="text-sm text-slate-700 mb-4">With experience & promotions</p>
                <div className="space-y-2 pt-4 border-t border-amber-300">
                  <p className="text-xs text-slate-700"><span className="font-bold">Annual Salary:</span> ₹25-35 Lakhs</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Annual Savings:</span> ₹20+ Lakhs</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Monthly:</span> ₹2-3L</p>
                </div>
              </div>

              {/* Senior Level */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700">Senior Level</p>
                    <p className="text-sm text-green-600 font-semibold">10+ Years</p>
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-2">₹50+ LPA</p>
                <p className="text-sm text-slate-700 mb-4">Leadership & expertise</p>
                <div className="space-y-2 pt-4 border-t border-green-300">
                  <p className="text-xs text-slate-700"><span className="font-bold">Annual Salary:</span> ₹50+ Lakhs</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Annual Savings:</span> ₹45+ Lakhs</p>
                  <p className="text-xs text-slate-700"><span className="font-bold">Monthly:</span> ₹4L+</p>
                </div>
              </div>
            </div>

            {/* ROI Calculation */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
              <h4 className="font-black text-slate-900 mb-4">ROI Calculation</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-indigo-200">
                  <p className="text-slate-700 font-medium">Total Investment:</p>
                  <p className="font-black text-slate-900">₹5-15 Lakhs</p>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-indigo-200">
                  <p className="text-slate-700 font-medium">Entry Level Salary (Annual):</p>
                  <p className="font-black text-slate-900">₹8-12 Lakhs</p>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-indigo-200">
                  <p className="text-slate-700 font-medium">Payback Period:</p>
                  <p className="font-black text-slate-900">2-3 Years</p>
                </div>
                <div className="flex justify-between items-center pt-3 bg-white rounded-lg p-3">
                  <p className="text-slate-700 font-bold">5-Year Earnings:</p>
                  <p className="font-black text-green-600 text-lg">₹50-70 Lakhs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "timeline" && (
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-8 md:mb-12">
              Investment Timeline
            </h3>

            <div className="space-y-6">
              {[
                { year: "Year 1-2", title: "Foundation & Entry", cost: "₹2-4L", details: "College admission, initial fees, living expenses, basic study materials" },
                { year: "Year 3-4", title: "Core Studies", cost: "₹2-4L", details: "Continued tuition, professional exam registration, coaching classes" },
                { year: "Year 5-6", title: "Advanced Training", cost: "₹1-3L", details: "Advanced papers, internships, specialized courses, exam fees" },
                { year: "Year 7+", title: "Professional Qualification", cost: "₹1-2L", details: "Final exams, certifications, professional memberships" },
              ].map((phase, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      style={{ background: PRIMARY_BLUE }}
                    >
                      {idx + 1}
                    </div>
                    {idx < 3 && <div className="w-1 h-16 md:h-20 bg-blue-200 mt-2" />}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs font-bold uppercase text-blue-600 mb-1">{phase.year}</p>
                          <h4 className="font-black text-slate-900 text-lg">{phase.title}</h4>
                        </div>
                        <p className="font-black text-blue-600 text-lg">{phase.cost}</p>
                      </div>
                      <p className="text-sm text-slate-700 mt-3">{phase.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


    </div>
  );
}
