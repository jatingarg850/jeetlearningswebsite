"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp, DollarSign, Calendar, Target } from "lucide-react";
import { allCategoryCosts, CategoryCost } from "@/app/data/careerCategoryCosting";
import { getCareerCosts } from "@/app/data/careerIndividualCosting";
import { TranslatedText } from "@/app/components/TranslatedText";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface CostBreakdownProps {
  title?: string;
  subtitle?: string;
  items?: CategoryCost[];
  categorySlug?: string;
  careerSlug?: string;
}

export function CostBreakdown({
  title = "What Will It Cost?",
  subtitle = "Complete financial breakdown for your career journey",
  items,
  categorySlug,
  careerSlug,
}: CostBreakdownProps) {
  // Priority: careerSlug > categorySlug > items
  let costItems: any[] = [];
  
  if (careerSlug) {
    const careerData = getCareerCosts(careerSlug);
    // If career has specific costs, use them; otherwise fall back to category
    costItems = (careerData?.costs && careerData.costs.length > 0) 
      ? careerData.costs 
      : (categorySlug ? allCategoryCosts[categorySlug as keyof typeof allCategoryCosts] : []);
  } else if (categorySlug) {
    costItems = allCategoryCosts[categorySlug as keyof typeof allCategoryCosts] || [];
  } else if (items) {
    costItems = items;
  }
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Calculate total cost
  const totalAmount = costItems.reduce((sum, item) => {
    const amount = item.amount.replace(/[₹,+\-\s]/g, "");
    const num = parseInt(amount) || 0;
    return sum + num;
  }, 0);

  return (
    <div className="w-full">
      {/* Section heading */}
      <div className="px-4 sm:px-6 md:px-8 pt-0 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            <TranslatedText>Cost Breakdown by Category</TranslatedText>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            <TranslatedText>{subtitle}</TranslatedText>
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 sm:px-6 md:px-8 pb-0">
        <div className="max-w-4xl mx-auto space-y-3">
          {costItems.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                style={{ borderLeftWidth: '4px', borderLeftColor: item.color }}
              >
                {/* Row — always visible */}
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 hover:bg-slate-50 transition-colors"
                >
                  {/* Icon box */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    {item.icon}
                  </div>

                  {/* Title + subtitle */}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                      <TranslatedText as="span">{item.category}</TranslatedText>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">
                      <TranslatedText>{item.description}</TranslatedText>
                    </p>
                  </div>

                  {/* Chevron button */}
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300"
                    style={{
                      background: item.color,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded panel */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pt-3 pb-5 border-t border-slate-100">
                    {/* Amount with icon alignment */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                          Estimated Cost
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-blue-600">
                          {item.amount}
                        </span>
                      </div>
                    </div>

                    {/* Detail bullets */}
                    {item.details && item.details.length > 0 && (
                      <div className="flex gap-3 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0" />
                        <ul className="space-y-2 flex-1">
                          {item.details.map((detail: string, i: number) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                <TranslatedText>{detail}</TranslatedText>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
