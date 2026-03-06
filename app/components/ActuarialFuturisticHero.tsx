"use client";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";
const LIGHT_BG = "#F0F9FF";
const TEXT_DARK = "#1F2937";
const TEXT_GRAY = "#6B7280";

export function ActuarialFuturisticHero() {
  return (
    <div className="relative w-full overflow-hidden pt-24 md:pt-28 pb-12 md:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-200 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-amber-200 rounded-full opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-amber-700 bg-amber-100">
                📊 Career Exploration for Class 10+
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 mb-4 md:mb-6 leading-tight">
                Discover Actuarial Science
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                Ever wondered how insurance companies decide prices? Or how banks manage risks? Actuaries are the problem-solvers behind these decisions using mathematics, statistics, and logic!
              </p>
            </div>

            {/* Why Actuarial Science */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold text-slate-900">Why Choose Actuarial Science?</h3>

              <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-white border-l-4 border-amber-500 shadow-sm hover:shadow-md transition">
                <div className="text-xl md:text-2xl flex-shrink-0">💼</div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base text-slate-900">High Earning Potential</p>
                  <p className="text-xs md:text-sm text-slate-600">One of the highest-paying careers in India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-white border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
                <div className="text-xl md:text-2xl flex-shrink-0">🧮</div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base text-slate-900">Solve Real Problems</p>
                  <p className="text-xs md:text-sm text-slate-600">Use math to make important business decisions</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-white border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition">
                <div className="text-xl md:text-2xl flex-shrink-0">🌐</div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base text-slate-900">Global Opportunities</p>
                  <p className="text-xs md:text-sm text-slate-600">Work anywhere in the world with this skill</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-white border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition">
                <div className="text-xl md:text-2xl flex-shrink-0">📈</div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base text-slate-900">Growing Demand</p>
                  <p className="text-xs md:text-sm text-slate-600">India needs 25,000 actuaries by 2030</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button
                className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: PRIMARY_BLUE }}
              >
                Explore Career Path
              </button>
              <button
                className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base border-2 transition-all hover:bg-blue-50"
                style={{ borderColor: PRIMARY_BLUE, color: PRIMARY_BLUE }}
              >
                Watch Video Guide
              </button>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
            {/* Quick Facts Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white shadow-lg border-t-4" style={{ borderTopColor: PRIMARY_BLUE }}>
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Quick Facts</h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-amber-100 flex items-center justify-center text-lg md:text-xl font-bold text-amber-700 flex-shrink-0">
                    1
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-slate-900">Start in Class 10</p>
                    <p className="text-xs md:text-sm text-slate-600">Begin preparing now with math & stats</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-lg md:text-xl font-bold text-blue-700 flex-shrink-0">
                    2
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-slate-900">ACET in Class 12</p>
                    <p className="text-xs md:text-sm text-slate-600">Take the entrance exam (free registration)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-indigo-100 flex items-center justify-center text-lg md:text-xl font-bold text-indigo-700 flex-shrink-0">
                    3
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-slate-900">6-10 Years Journey</p>
                    <p className="text-xs md:text-sm text-slate-600">Become a Fellow Actuary (FSA/FIA)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-xl transition">
                <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">₹50+</p>
                <p className="text-xs md:text-sm">LPA Senior Salary</p>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition">
                <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">500-700</p>
                <p className="text-xs md:text-sm">Actuaries in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
