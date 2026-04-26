"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  id: number;
  tag: string;
  title: string;
  description: string;
  highlight: string;
  bgColor: string;
  cta: string;
  ctaTarget: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "NEP 2020 Focus",
    title: "NEP & Career Counselling",
    description:
      "The National Education Policy highlights informed subject and career choices. We help students align strengths with future-ready opportunities.",
    highlight: "Evidence-based guidance for families and schools",
    bgColor: "from-sky-700 via-cyan-600 to-teal-600",
    cta: "See Resource Hub",
    ctaTarget: "#resources",
  },
  {
    id: 2,
    tag: "Career Discovery",
    title: "Explore Career Options",
    description:
      "From STEM and healthcare to design and humanities, discover pathways matched to your aptitude, personality, and long-term goals.",
    highlight: "4,000+ roles can be mapped to your profile",
    bgColor: "from-indigo-700 via-blue-700 to-slate-700",
    cta: "Open Career Path",
    ctaTarget: "/career-library",
  },
  {
    id: 3,
    tag: "DMIT",
    title: "DMIT Assessment",
    description:
      "Dermatoglyphics Multiple Intelligence Test maps innate potential using fingerprint patterns linked to early brain development.",
    highlight: "Identify learning style, strengths, and career alignment",
    bgColor: "from-emerald-700 via-green-700 to-lime-700",
    cta: "Read About DMIT",
    ctaTarget: "#dmit",
  },
  {
    id: 4,
    tag: "Psychometric",
    title: "Psychometric Testing",
    description:
      "Aptitude, IQ, and personality assessments provide objective insight into cognitive style, behavior, and decision-making under pressure.",
    highlight: "Build a confident plan with measurable outcomes",
    bgColor: "from-amber-700 via-orange-700 to-rose-700",
    cta: "Explore Psychometric",
    ctaTarget: "#psychometric",
  },
  {
    id: 5,
    tag: "Support System",
    title: "Resources & Support",
    description:
      "Get entrance exam guidance, education news, blog updates, and expert counselling support in one place.",
    highlight: "Resources built for students, parents, and educators",
    bgColor: "from-fuchsia-700 via-pink-700 to-rose-700",
    cta: "Browse Resources",
    ctaTarget: "#resources",
  },
];

export function HomeHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.75))]" />

      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center px-4 sm:px-6`}>
            <div className="w-full max-w-6xl mx-auto">
              <div className="max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-10 backdrop-blur-md text-white shadow-2xl">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  {slide.tag}
                </span>
                <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                {slide.title}
                </h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>
                <p className="mt-4 text-sm sm:text-base font-semibold text-yellow-100">
                  {slide.highlight}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={slide.ctaTarget}
                    className="rounded-full bg-white px-5 py-2.5 text-slate-900 font-bold hover:bg-slate-100 transition-colors"
                  >
                    {slide.cta}
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/50 px-5 py-2.5 text-white font-semibold hover:bg-white/15 transition-colors"
                  >
                    Book Counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/35 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/35 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setAutoPlay(false);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
