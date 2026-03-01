"use client";

import Image from "next/image";

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

  // Alternating layout patterns
  const getLayoutPattern = (idx: number) => idx % 3;

  return (
    <div className="relative bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Complete Guide to Actuarial Science
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about becoming an actuary in India
          </p>
        </div>
      </section>

      {/* Sections with Photos */}
      <div className="relative bg-white">
        {sections.map((section, idx) => {
          const layoutPattern = getLayoutPattern(idx);
          const isImageLeft = idx % 2 === 0;

          return (
            <div key={section.id}>
              {/* Layout Pattern 1: Image + Content Side by Side */}
              {layoutPattern === 0 && idx < images.length && (
                <section className="py-12 md:py-16 px-4 md:px-6 border-b border-gray-200">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Image */}
                      <div className={isImageLeft ? "order-1" : "order-2"}>
                        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={images[idx]}
                            alt={section.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={isImageLeft ? "order-2" : "order-1"}>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <span className="text-4xl md:text-5xl">{section.icon}</span>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
                          {section.description}
                        </p>
                        <div className="space-y-3 md:space-y-4">
                          {section.content.map((point, pointIdx) => (
                            <div key={pointIdx} className="flex gap-3 md:gap-4">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{ background: PRIMARY_BLUE }}>
                                {pointIdx + 1}
                              </div>
                              <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-1">
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
                <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-gray-200">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                      <span className="text-4xl md:text-5xl">{section.icon}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-3xl">
                      {section.description}
                    </p>

                    {/* Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {section.content.map((point, pointIdx) => (
                        <div
                          key={pointIdx}
                          className="p-5 md:p-6 rounded-xl bg-white border-l-4 shadow-sm hover:shadow-lg transition-all"
                          style={{ borderLeftColor: PRIMARY_BLUE }}
                        >
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{ background: ACCENT_GOLD }}>
                              {pointIdx + 1}
                            </div>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Image Below */}
                    {idx < images.length && (
                      <div className="mt-10 md:mt-14">
                        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={images[idx]}
                            alt={section.title}
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Layout Pattern 3: Highlighted Box with Content */}
              {layoutPattern === 2 && (
                <section className="py-12 md:py-16 px-4 md:px-6 border-b border-gray-200">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
                      {/* Left: Title & Description */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <span className="text-4xl md:text-5xl">{section.icon}</span>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-base md:text-lg text-slate-600">
                          {section.description}
                        </p>
                      </div>

                      {/* Right: Content List */}
                      <div className="lg:col-span-2">
                        <div className="space-y-3 md:space-y-4">
                          {section.content.map((point, pointIdx) => (
                            <div
                              key={pointIdx}
                              className="p-4 md:p-5 rounded-lg bg-gradient-to-r from-blue-50 to-transparent border-l-4 hover:shadow-md transition"
                              style={{ borderLeftColor: ACCENT_GOLD }}
                            >
                              <div className="flex gap-3 md:gap-4">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs md:text-sm font-bold" style={{ background: PRIMARY_BLUE }}>
                                  {pointIdx + 1}
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-0.5">
                                  {point}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Full Width Image */}
                    {idx < images.length && (
                      <div className="mt-10 md:mt-14">
                        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={images[idx]}
                            alt={section.title}
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
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
