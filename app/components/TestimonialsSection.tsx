"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const testimonials = [
  {
    text: "Excellent guiding instructions. They are all great mentors at life and career. Best out of the best in the career counselling. Best out of the best in the career counselling.",
    name: "Anshul Sharma",
    role: "Bachelors,  University of Toronto",
    avatar: "/assets/avatar-anshul.png",
  },
  {
    text: "The process was very simple and easy to go through. Before CANAM I thought this gonna burn a hole in my pocket but I am very happy the way it turned out.",
    name: "Shravan Rathore",
    role: "Bachelors,  University of New York",
    avatar: "/assets/avatar-shravan.png",
  },
  {
    text: "I am currently employed at one the biggest companies in the world. All thanks to CANAM for opening door to USA for me and I love every step i ever took.",
    name: "Neha Agarwal",
    role: "Visual Designer,  Cuero  USA",
    avatar: "/assets/avatar-neha1.png",
  },
  {
    text: "I am currently employed at one the biggest companies in the world. All thanks to CANAM for opening door to USA for me and I love every step i ever took.",
    name: "Neha Agarwal",
    role: "Visual Designer, Cuberto,  USA",
    avatar: "/assets/avatar-neha2.png",
  },
];

const VISIBLE = 4;

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(testimonials.length - VISIBLE, prev + 1)
    );
  };

  const visible = testimonials.slice(startIndex, startIndex + VISIBLE);

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-end gap-6 mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
              <span className="text-xs font-semibold text-[var(--color-canam-red)] uppercase tracking-wider">Success Stories</span>
            </div>
            <h2 className="font-poppins text-slate-900 font-bold text-4xl lg:text-5xl mb-4 tracking-tight">
              Hear from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-canam-red)] to-[var(--color-canam-red-dark)]">Students</span>
            </h2>
            <p className="font-inter text-slate-500 text-lg">
              Discover how we've helped students achieve their study abroad dreams.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 pb-2 hidden md:flex">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 transition-all hover:border-[var(--color-canam-red)] hover:text-[var(--color-canam-red)] hover:bg-red-50 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-400 disabled:hover:bg-transparent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= testimonials.length - VISIBLE}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-md shadow-red-500/20 disabled:opacity-30 disabled:shadow-none hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, var(--color-canam-red), var(--color-canam-red-dark))" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-0">
          {visible.map((t, idx) => (
            <div
              key={idx}
              className={`group flex flex-col bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:border-red-50 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } transform hover:scale-[1.02]`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Quote Mark */}
              <div className="mb-6 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[var(--color-canam-red)] transition-colors duration-500">
                <svg className="w-5 h-5 text-[var(--color-canam-red)] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Text */}
              <p className="font-inter text-slate-600 text-[15px] leading-relaxed flex-1 mb-8 relative z-10 group-hover:text-slate-700 transition-colors">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 group-hover:border-red-100 transition-colors">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50 shadow-sm group-hover:border-red-50 transition-colors bg-slate-100">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-slate-900 text-[15px] mb-0.5">
                    {t.name}
                  </h4>
                  <p className="font-inter text-slate-500 text-[12px] leading-tight group-hover:text-slate-600 transition-colors line-clamp-2">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 transition-all active:bg-red-50 disabled:opacity-30"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= testimonials.length - VISIBLE}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-md shadow-red-500/20 disabled:opacity-30"
            style={{ background: "linear-gradient(135deg, var(--color-canam-red), var(--color-canam-red-dark))" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
