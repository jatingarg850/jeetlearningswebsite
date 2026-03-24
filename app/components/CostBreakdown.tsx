"use client";

import { useState } from "react";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";
const BRIGHT_BLUE = "#0066FF";
const BRIGHT_GREEN = "#00CC66";
const BRIGHT_PURPLE = "#7C3AED";
const BRIGHT_ORANGE = "#FF6B35";

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

  const totalAmount = items.reduce((sum, item) => {
    const amount = item.amount.replace(/[₹,+\-\s]/g, "");
    const num = parseInt(amount) || 0;
    return sum + num;
  }, 0);

  return (
    <div className="relative bg-white">
      {/* Detailed Breakdown - BRIGHT */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-blue-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-3 md:mb-4 drop-shadow-sm">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-800 max-w-2xl mx-auto font-semibold">
              {subtitle}
            </p>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 mb-6 md:mb-8 drop-shadow-sm">
            Detailed Cost Breakdown
          </h3>

          <div className="space-y-3 md:space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-102"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100 transition"
                  style={{
                    borderLeft: `6px solid ${item.color}`,
                  }}
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1 text-left">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-2xl md:text-3xl flex-shrink-0 shadow-md"
                      style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-sm md:text-base text-slate-900">{item.category}</p>
                      <p className="text-xs md:text-sm text-slate-700 mt-0.5 font-semibold">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="font-black text-base md:text-lg text-slate-900">{item.amount}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform shadow-lg font-bold text-xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                        transform: expandedIndex === idx ? "rotate(45deg) scale(1.1)" : "scale(1)",
                      }}
                    >
                      +
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedIndex === idx && item.details && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 bg-gradient-to-b from-blue-50 to-purple-50 border-t-2" style={{ borderTopColor: item.color }}>
                    <div className="space-y-2 md:space-y-3">
                      {item.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex gap-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm" style={{ background: item.color }} />
                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Return on Investment
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              Your investment pays off quickly with high earning potential
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Entry Level */}
            <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Entry Level</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">₹8-12 LPA</p>
              <p className="text-xs md:text-sm text-slate-600">After qualification</p>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Payback Period:</span> 2-3 years
                </p>
              </div>
            </div>

            {/* Mid Career */}
            <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">Mid Career</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">₹25-35 LPA</p>
              <p className="text-xs md:text-sm text-slate-600">5-7 years experience</p>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Annual Savings:</span> ₹20+ LPA
                </p>
              </div>
            </div>

            {/* Senior Level */}
            <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Senior Level</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">₹50+ LPA</p>
              <p className="text-xs md:text-sm text-slate-600">10+ years experience</p>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Annual Savings:</span> ₹45+ LPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to Invest in Your Future?
          </h3>
          <p className="text-sm md:text-base text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get personalized financial guidance and explore scholarship opportunities
          </p>
          <button
            className="px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base text-blue-600 transition-all hover:scale-105 shadow-lg"
            style={{ background: ACCENT_GOLD }}
          >
            Explore Scholarships & Funding
          </button>
        </div>
      </section>
    </div>
  );
}
