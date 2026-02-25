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
    <section ref={ref} className="py-12 bg-white">
      <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
        }`}>
          <h2
            className="font-poppins text-[#505050] font-bold mb-2"
            style={{ fontSize: "32px", lineHeight: "36px" }}
          >
            Why Choose Our Premium Counselling?
          </h2>
          <p className="font-poppins text-[#505050] text-[19px] font-normal">
            Personalized guidance, proven results
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 py-6 transition-all duration-700 ${
                isVisible
                  ? "animate-stackingScroll"
                  : "opacity-0 translate-y-[60px] scale-95"
              }`}
              style={{
                borderRadius: "15px",
                border: feature.active
                  ? "1px solid rgba(215, 0, 0, 0.93)"
                  : "1px solid rgba(238, 238, 238, 0.93)",
                background: "linear-gradient(180deg, #fff 0%, #f5f5f5 100%)",
                minHeight: "175px",
                animationDelay: isVisible ? `${idx * 0.06}s` : "0s",
              }}
            >
              {/* Icon */}
              <div className="mb-3 flex items-center justify-center" style={{ height: "60px" }}>
                {feature.iconText ? (
                  <span
                    className="font-poppins font-bold"
                    style={{ fontSize: "36px", color: "#b10000" }}
                  >
                    {feature.iconText}
                  </span>
                ) : (
                  <img
                    src={feature.icon}
                    alt={feature.label.replace(/\n/g, " ")}
                    className="w-14 h-14 object-contain"
                  />
                )}
              </div>
              {/* Label */}
              <p
                className="font-poppins text-[#505050] font-medium text-center whitespace-pre-line"
                style={{ fontSize: "15px", lineHeight: "20px" }}
              >
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
