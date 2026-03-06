"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const features = [
  { icon: "/assets/icon-counselling.svg", label: "In-person and\nVirtual Counselling", active: true },
  { icon: "/assets/icon-institute.svg", label: "Institute and Course\nSelection" },
  { icon: "/assets/icon-accommodation.svg", label: "Comprehensive Profile\nBuilding Support" },
  { icon: "/assets/icon-document.svg", label: "Document Preparation\nand Editing" },
  { icon: "/assets/icon-app-support.svg", label: "End-to-\u00a0End\nApplication Support" },
  { icon: "/assets/icon-scholarships.svg", label: "Access to Exclusive\nScholarships" },
  { icon: "/assets/icon-interview.svg", label: "Tailored Interview\nPreparation\nand Mock Sessions" },
  { iconText: "$", label: "Loan Assistance" },
  { icon: "/assets/icon-visa.svg", label: "Visa Guidance" },
  { icon: "/assets/icon-accommodation.svg", label: "Accommodation\nAssistance" },
  { icon: "/assets/icon-pre-departure.svg", label: "Pre-Departure\nSupport" },
  { icon: "/assets/icon-webinar.svg", label: "Informative Webinar" },
];

export default function WhyChooseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-red-50/50 to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-slate-50 to-transparent blur-2xl rounded-full opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-canam-red)]"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">The Canam Advantage</span>
          </div>
          <h2 className="font-poppins text-slate-900 font-bold text-4xl lg:text-5xl mb-6 tracking-tight">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-canam-red)] to-red-500">Premium Counselling?</span>
          </h2>
          <p className="font-inter text-slate-500 text-lg max-w-2xl mx-auto">
            Personalized guidance and proven results tailored to your unique academic journey and career aspirations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center justify-center text-center p-8 rounded-3xl transition-all duration-700 bg-white border ${feature.active
                  ? "border-red-100 shadow-[0_8px_30px_rgb(200,0,0,0.08)]"
                  : "border-slate-100 shadow-sm hover:shadow-xl hover:border-red-50"
                } hover:scale-[1.02] overflow-hidden ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              {/* Hover gradient effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-inner ${feature.active ? "bg-red-50" : "bg-slate-50 group-hover:bg-red-50/50"
                }`}>
                {feature.iconText ? (
                  <span className="font-poppins font-bold text-3xl text-[var(--color-canam-red)]">
                    {feature.iconText}
                  </span>
                ) : (
                  <img
                    src={feature.icon}
                    alt={feature.label.replace(/\n/g, " ")}
                    className="w-8 h-8 object-contain filter group-hover:brightness-90 transition-all duration-500"
                  />
                )}
              </div>

              {/* Label */}
              <p className="font-inter font-semibold text-slate-800 text-[15px] leading-snug whitespace-pre-line group-hover:text-slate-900 transition-colors z-10">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
