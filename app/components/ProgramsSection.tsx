"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const programs = [
  {
    icon: "/assets/prog-icon-ug.svg",
    title: "Undergraduate Programs",
    desc: 'Content: "Navigate the admissions process with confidence. We\'ll help you choose the right program and guide you through applications, scholarships, and visa processes.',
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
      className="py-14"
      style={{ background: "rgba(238, 238, 238, 0.50)", border: "1px solid #e4e4e4" }}
    >
      {/* Header */}
      <div className={`text-center mb-10 px-4 transition-all duration-700 ${
        isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
      }`}>
        <h2
          className="font-poppins text-[#505050] font-bold mb-3"
          style={{ fontSize: "32px", lineHeight: "36px" }}
        >
          Our Programs
        </h2>
        <p
          className="font-poppins text-[#505050] font-normal"
          style={{ fontSize: "17px", lineHeight: "25px" }}
        >
          We provide extensive academic guidance for UG and PG programs, including MBA
          <br className="hidden sm:block" />
          and PhD, through our unparalleled &apos;ground and cloud&apos; system.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#e4e4e4]">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`flex flex-col px-6 pt-4 pb-6 transition-all duration-700 ${
                isVisible
                  ? "animate-stackingScroll"
                  : "opacity-0 translate-y-[60px] scale-95"
              }`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : "0s",
              }}
            >
              {/* Icon */}
              <div className="mb-4" style={{ height: "56px" }}>
                <img
                  src={program.icon}
                  alt={program.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              {/* Title */}
              <h3
                className="font-poppins text-[#505050] font-semibold mb-2"
                style={{ fontSize: "17px", lineHeight: "21px" }}
              >
                {program.title}
              </h3>
              {/* Red line */}
              <div
                className="mb-4"
                style={{ width: "75px", height: "2px", background: "#DA1313" }}
              />
              {/* Description */}
              <p
                className="font-poppins mb-6 flex-1"
                style={{ fontSize: "14px", lineHeight: "20px", color: "#757575" }}
              >
                {program.desc}
              </p>
              {/* Link */}
              <a
                href="#"
                className="font-poppins font-normal underline underline-offset-1 hover:opacity-80 transition-opacity"
                style={{ fontSize: "14px", lineHeight: "20px", color: "#C50000" }}
              >
                {program.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
