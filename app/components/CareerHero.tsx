"use client";

import { CareerPageData } from "@/app/data/careerPageData";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface CareerHeroProps {
  data: CareerPageData;
}

export function CareerHero({ data }: CareerHeroProps) {
  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-blue-200 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-amber-200 rounded-full opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-amber-700 bg-amber-100">
                {data.badge}
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                {data.heading}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                {data.subheading}
              </p>
            </div>

            {/* Why Cards */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                Why Choose This Career?
              </h3>
              {data.whyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                  style={{ borderLeft: `4px solid ${card.borderColor}` }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl flex-shrink-0">{card.icon}</div>
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{card.title}</p>
                    <p className="text-xs text-slate-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-base text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: PRIMARY_BLUE }}
              >
                Explore Career Path
              </button>
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-base border-2 transition-all hover:bg-blue-50"
                style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
              >
                Watch Video Guide
              </button>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-8 lg:mt-0">
            {/* Quick Facts Card */}
            <div
              className="p-4 sm:p-6 md:p-8 rounded-lg md:rounded-2xl bg-white shadow-lg border-t-4"
              style={{ borderTopColor: PRIMARY_BLUE }}
            >
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6">
                Quick Facts
              </h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {data.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold flex-shrink-0 ${fact.color}`}
                    >
                      {idx + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{fact.label}</p>
                      <p className="text-xs text-slate-600">{fact.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {data.statCards.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg hover:shadow-xl transition`}
                >
                  <p className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
