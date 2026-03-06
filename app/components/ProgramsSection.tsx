"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const programs = [
  {
    icon: "/assets/prog-icon-ug.svg",
    title: "Undergraduate Programs",
    desc: "Navigate the admissions process with confidence. We'll help you choose the right program and guide you through applications, scholarships, and visa processes.",
    link: "Learn More",
  },
  {
    icon: "/assets/prog-icon-masters.svg",
    title: "Master's Programs",
    desc: "Secure your spot in a world-class graduate program with our expert guidance. From SOP writing to interviews, we've got you covered.",
    link: "Explore Master's Options",
  },
  {
    icon: "/assets/prog-icon-mba.svg",
    title: "MBA Programs",
    desc: "Get personalised mentorship for top MBA programs. Our experts will help you craft a winning application and maximise your chances.",
    link: "Find Your Dream MBA",
  },
  {
    icon: "/assets/prog-icon-phd.svg",
    title: "PhD Programs",
    desc: "Receive tailored support for your PhD application process, including research proposal drafting, supervisor selection, and funding options.",
    link: "Start Your PhD Journey",
  },
  {
    icon: "/assets/prog-icon-mgmt.svg",
    title: "Management Programs",
    desc: "Our specialized advisors will help you gain admission into top Management programs worldwide.",
    link: "Explore Management Programs",
  },
];

export default function ProgramsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-[url('/assets/hero-bg-pattern.png')] bg-cover opacity-[0.03] pointer-events-none mix-blend-multiply" />

      {/* Header */}
      <div className={`text-center mb-16 px-6 max-w-3xl mx-auto relative z-10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
        <h2 className="font-poppins text-slate-900 font-bold text-4xl lg:text-5xl mb-6 tracking-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-canam-red)] to-[var(--color-canam-red-dark)]">Programs</span>
        </h2>
        <p className="font-inter text-slate-500 text-lg leading-relaxed">
          We provide extensive academic guidance for UG and PG programs, including MBA
          and PhD, through our unparalleled 'ground and cloud' system.
        </p>
      </div>

      {/* Programs Cards */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`group flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(200,0,0,0.08)] hover:border-red-100 transition-all duration-500 transform hover:scale-[1.02] ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-red-50 flex items-center justify-center mb-6 transition-colors duration-500 shadow-inner">
                <img
                  src={program.icon}
                  alt={program.title}
                  className="w-10 h-10 object-contain text-[var(--color-canam-red)] filter group-hover:brightness-90 transition-all duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="font-poppins text-slate-900 font-bold text-xl mb-3 group-hover:text-[var(--color-canam-red)] transition-colors">
                {program.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-slate-500 text-sm leading-relaxed mb-8 flex-1 group-hover:text-slate-700 transition-colors">
                {program.desc}
              </p>

              {/* Link */}
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 font-inter font-semibold text-sm text-[var(--color-canam-red)] px-5 py-2.5 rounded-xl bg-red-50/50 hover:bg-[var(--color-canam-red)] hover:text-white transition-all duration-300 w-fit"
              >
                {program.link}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
