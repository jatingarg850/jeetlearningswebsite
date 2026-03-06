"use client";

import Image from "next/image";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

const PRIMARY_BLUE = "#2563eb";
const ACCENT_GOLD = "#f59e0b";

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
  ];

  // Alternating layout patterns
  const getLayoutPattern = (idx: number) => idx % 3;

  return (
    <div className="relative bg-slate-50 text-slate-700">
      {/* Light Background Decorators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[150px]" />
        <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      </div>

      {/* Header */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600 mb-6 drop-shadow-sm">
            Complete Guide to Actuarial Science
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Everything you need to know about becoming an elite actuary in India, navigating the modern landscape.
          </p>
        </div>
      </section>

      {/* Sections with Photos */}
      <div className="relative z-10 pb-20 mt-10">
        {sections.map((section, idx) => {
          const layoutPattern = getLayoutPattern(idx);
          const isImageLeft = idx % 2 === 0;

          return (
            <div key={section.id}>
              {/* Layout Pattern 1: Image + Content Side by Side */}
              {layoutPattern === 0 && (
                <section className="py-16 md:py-20 px-4 md:px-6 border-b border-slate-200 relative group bg-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="max-w-7xl mx-auto relative">
                    <div className={`grid ${idx < images.length ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl mx-auto"} gap-10 md:gap-16 items-center`}>
                      {/* Image */}
                      {idx < images.length && (
                        <div className={`${isImageLeft ? "order-1" : "order-2"} relative`}>
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-3xl transform rotate-3 scale-105 shadow-xl transition-transform duration-500 group-hover:rotate-6" />
                          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-white">
                            <Image
                              src={images[idx]}
                              alt={section.title}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className={isImageLeft ? "order-2" : "order-1"}>
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.15)]">
                            <span className="text-3xl">{section.icon}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                          {section.description}
                        </p>
                        <div className="space-y-4">
                          {section.content.map((point, pointIdx) => (
                            <div key={pointIdx} className="flex gap-4 group/item items-start">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover/item:scale-110 transition-transform mt-0.5" style={{ background: section.color || PRIMARY_BLUE }}>
                                <ArrowRight className="w-4 h-4" />
                              </div>
                              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium group-hover/item:text-slate-900 transition-colors">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Layout Pattern 2: Full Width Content with Cards */}
              {layoutPattern === 1 && (
                <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-[100px]" />
                  <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-12 md:mb-16">
                      <div className="inline-flex items-center justify-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-xl">
                          <span className="text-5xl">{section.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
                        {section.title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        {section.description}
                      </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {section.content.map((point, pointIdx) => (
                        <div
                          key={pointIdx}
                          className="group p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex items-start gap-4 relative">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:rotate-12 transition-transform" style={{ background: section.color || ACCENT_GOLD }}>
                              <Star className="w-6 h-6 animate-pulse" />
                            </div>
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold pt-1 group-hover:text-slate-900 transition-colors">
                              {point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image Below */}
                    {idx < images.length && (
                      <div className="mt-16 md:mt-24">
                        <div className="relative w-full rounded-[2rem] overflow-hidden border border-white shadow-2xl group">
                          <Image
                            src={images[idx]}
                            alt={section.title}
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Layout Pattern 3: Highlighted Box with Content */}
              {layoutPattern === 2 && (
                <section className="py-16 md:py-24 px-4 md:px-6 border-b border-slate-200 relative bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                      {/* Left: Title & Description */}
                      <div className="lg:col-span-1 sticky top-32">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-4xl">{section.icon}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                          {section.description}
                        </p>
                      </div>

                      {/* Right: Content List */}
                      <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        {section.content.map((point, pointIdx) => (
                          <div
                            key={pointIdx}
                            className="group p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 relative overflow-hidden"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-start gap-6 relative">
                              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-110 transition-transform" style={{ background: section.color || PRIMARY_BLUE }}>
                                <CheckCircle2 className="w-6 h-6" />
                              </div>
                              <p className="text-slate-700 text-lg md:text-xl leading-relaxed pt-1.5 font-semibold group-hover:text-slate-900 transition-colors">
                                {point}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Width Image */}
                    {idx < images.length && (
                      <div className="mt-16 md:mt-24">
                        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                          <Image
                            src={images[idx]}
                            alt={section.title}
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                          />
                        </div>
                      </div>
                    )}
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
