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
    <section ref={ref} className="py-24 bg-slate-50 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-end gap-6 mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-canam-red)] relative">
                <span className="animate-ping absolute inset-0 rounded-full bg-[var(--color-canam-red)] opacity-75"></span>
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">End-to-End Solutions</span>
            </div>
            <h2 className="font-poppins text-slate-900 font-bold text-4xl lg:text-5xl mb-6 tracking-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-canam-red)] to-red-500">Services</span>
            </h2>
            <p className="font-inter text-slate-600 text-lg">
              We provide extensive academic guidance for UG and PG programs, including MBA
              and PhD, through our unparalleled 'ground and cloud' system.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(200,0,0,0.08)] hover:scale-[1.01] transition-all duration-500 border border-slate-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden w-full bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 rounded-2xl bg-[var(--color-canam-red)] text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-1/2 transition-all duration-500 z-20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>

                <h3 className="font-poppins text-slate-900 font-bold text-xl mb-3 group-hover:text-[var(--color-canam-red)] transition-colors pr-6 gap-2">
                  {service.title}
                </h3>

                <p className="font-inter text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 relative overflow-hidden group/link">
                  <span className="text-[var(--color-canam-red)] font-semibold text-sm tracking-wide flex items-center gap-1 group-hover/link:gap-2 transition-all">
                    Explore feature <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
