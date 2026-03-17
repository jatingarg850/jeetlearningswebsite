"use client";

import Image from "next/image";
import { DynamicIcon } from "./DynamicIcon";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface GuideSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  content: string[];
  highlights?: string[];
}

interface ActuarialCompleteGuideProps {
  sections: GuideSection[];
}

export function ActuarialCompleteGuide({ sections }: ActuarialCompleteGuideProps) {
  const images = [
    "/acturial/image copy.png",
    "/acturial/image copy 2.png",
    "/acturial/image copy 3.png",
    "/acturial/image copy 4.png",
  ];

  return (
    <div className="relative bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-6 leading-tight">
            Complete Guide to Actuarial Science
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Everything you need to know about becoming an actuary in India
          </p>
        </div>
      </section>

      {/* Sections with Photos */}
      <div className="relative bg-white">
        {sections.map((section, idx) => {
          return (
            <div key={section.id}>
              {/* Content Section */}
              <section className="py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                  {/* Header */}
                  <div className="mb-6 md:mb-8 lg:mb-12">
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mb-2 md:mb-3 lg:mb-4">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ background: section.color ?? "#1E40AF" }}
                      >
                        <DynamicIcon name={section.icon} className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 break-words">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl px-0 sm:px-0">
                      {section.description}
                    </p>
                  </div>

                  {/* Content Grid - Responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    {section.content.map((point, pointIdx) => (
                      <div
                        key={pointIdx}
                        className="flex gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-6 rounded-lg bg-blue-50 hover:shadow-md transition"
                      >
                        <div 
                          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-1 text-white text-xs md:text-sm font-bold" 
                          style={{ background: PRIMARY_BLUE }}
                        >
                          {pointIdx + 1}
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Photo Section - Show after each content section (except last) */}
              {idx < images.length && (
                <section className="py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 bg-gray-50 border-b border-gray-200">
                  <div className="max-w-7xl mx-auto">
                    <div className="relative w-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition">
                      <Image
                        src={images[idx]}
                        alt={section.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
