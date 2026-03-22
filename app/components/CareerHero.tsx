"use client";

import { motion } from "framer-motion";
import { CareerPageData } from "@/app/data/careerPageData";
import { DynamicIcon } from "./DynamicIcon";
import { BarChart3 } from "lucide-react";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface CareerHeroProps {
  data: CareerPageData;
  imageUrl?: string;
}

export function CareerHero({ data, imageUrl }: CareerHeroProps) {
  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-4 sm:pb-6 md:pb-8 lg:pb-10">
      {/* Dynamic Career Background Image */}
      {imageUrl ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={imageUrl} 
            alt={data.heading} 
            className="w-full h-full object-cover opacity-[0.14] mix-blend-multiply"
            style={{ filter: "saturate(1.2)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80";
            }}
          />
          {/* Overlay gradient to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-purple-50/90 backdrop-blur-[2px]" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      )}

      {/* Decorative Elements - Bright Colors */}
      <div className="absolute top-0 right-0 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-blue-300 rounded-full opacity-15 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-purple-300 rounded-full opacity-15 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 border border-blue-200 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> {data.badge.replace(/^[^\s]+\s/, "")}
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-900 mb-1 sm:mb-2 leading-tight">
                {data.heading}
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-700 leading-snug font-medium">
                {data.subheading}
              </p>
            </div>

            {/* Why Cards */}
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
                Why Choose This Career?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {data.whyCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md"
                style={{ borderTop: `4px solid ${card.borderColor || '#C20000'}` }}
              >
                <div className="flex items-start gap-2 sm:gap-3"> {/* Re-added flex container for icon and text */}
                  <div className="flex-shrink-0" style={{ color: card.borderColor }}>
                    <DynamicIcon name={card.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{card.title}</p>
                    <p className="text-xs text-slate-600">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-base text-white transition-all hover:shadow-lg hover:scale-105 shadow-md"
                style={{ background: PRIMARY_BLUE }}
              >
                Explore Career Path
              </button>
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-base border-2 transition-all hover:bg-blue-50 shadow-sm"
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
              className="p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl bg-white shadow-lg border-t-4"
              style={{ borderTopColor: PRIMARY_BLUE }}
            >
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                Quick Facts
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {data.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-base font-bold flex-shrink-0 text-white ${fact.color}`}
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
                  <p className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 md:mb-1">{stat.value}</p>
                  <p className="text-[10px] md:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
