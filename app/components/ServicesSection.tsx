"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const services = [
  {
    image: "/assets/service-profile-eval.jpg",
    title: "Detailed Profile Evaluation",
    desc: "Tailored guidance to help you create a winning application profile.",
    imgRadius: "0px 0px 0px 15px",
  },
  {
    image: "/assets/service-uni-selection.jpg",
    title: "University Selection",
    desc: "Expert advice on finding the best-fit institutions",
    imgRadius: "0px 15px 15px 15px",
  },
  {
    image: "/assets/service-doc-prep.jpg",
    title: "Document Preparation",
    desc: "Professional assistance with SOPs, LORs, and essays",
    imgRadius: "0px 15px 0px 15px",
  },
  {
    image: "/assets/service-scholarship.jpg",
    title: "Scholarship Assistance",
    desc: "Access to exclusive funding opportunities",
    imgRadius: "0px 15px 0px 15px",
  },
  {
    image: "/assets/service-app-guidance.jpg",
    title: "Application Guidance",
    desc: "Streamlined process with real-time updates",
    imgRadius: "0px 15px 0px 15px",
  },
  {
    image: "/assets/service-visa.jpg",
    title: "Visa Support",
    desc: "Expert advice and preparation",
    imgRadius: "0px 15px 0px 15px",
  },
  {
    image: "/assets/service-pre-departure.jpg",
    title: "Pre-Departure Briefing",
    desc: "Essential tips for a smooth transition",
    imgRadius: "0px 15px 0px 15px",
  },
  {
    image: "/assets/service-loan.jpg",
    title: "Student Loan Assistance",
    desc: "Easy access to financial support",
    imgRadius: "0px 15px 0px 15px",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-14 bg-white">
      <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
        }`}>
          <h2
            className="font-poppins text-[#505050] font-bold mb-3"
            style={{ fontSize: "32px", lineHeight: "36px" }}
          >
            Our Services
          </h2>
          <p
            className="font-poppins text-[#505050] font-normal text-center"
            style={{ fontSize: "17px", lineHeight: "25px" }}
          >
            We provide extensive academic guidance for UG and PG programs, including MBA and PhD,
            <br className="hidden sm:block" />
            through our unparalleled &apos;ground and cloud&apos; system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col transition-all duration-700 ${
                isVisible
                  ? "animate-stackingScroll"
                  : "opacity-0 translate-y-[60px] scale-95"
              }`}
              style={{
                animationDelay: isVisible ? `${idx * 0.08}s` : "0s",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-3 hover:scale-105 transition-transform duration-300"
                style={{ borderRadius: service.imgRadius, height: "175px" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h3
                className="font-poppins text-[#505050] font-semibold mb-1"
                style={{ fontSize: "17px", lineHeight: "20px" }}
              >
                {service.title}
              </h3>
              {/* Red underline */}
              <div className="mb-2" style={{ width: "75px", height: "2px", background: "#DA1313" }} />
              {/* Description */}
              <p
                className="font-poppins"
                style={{ fontSize: "14px", lineHeight: "20px", color: "#757575" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
