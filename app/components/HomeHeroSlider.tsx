"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "NEP & Career Counselling",
    subtitle: "Building India's Future",
    description: "The National Education Policy emphasizes holistic development and career guidance. Discover how modern counselling shapes successful careers.",
    bgColor: "from-blue-600 to-blue-800",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Explore Career Options",
    subtitle: "Find Your Path",
    description: "Discover diverse career opportunities across industries. From STEM to humanities, find the perfect fit for your talents and interests.",
    bgColor: "from-purple-600 to-purple-800",
    icon: "🚀",
  },
  {
    id: 3,
    title: "DMIT Assessment",
    subtitle: "Unlock Your Potential",
    description: "Dermatoglyphics Multiple Intelligence Test reveals your innate talents through fingerprint analysis. Understand your true potential.",
    bgColor: "from-green-600 to-green-800",
    icon: "🔍",
  },
  {
    id: 4,
    title: "Psychometric Testing",
    subtitle: "Know Yourself Better",
    description: "Comprehensive personality and aptitude assessments to guide your academic and career decisions with scientific precision.",
    bgColor: "from-orange-600 to-orange-800",
    icon: "📊",
  },
  {
    id: 5,
    title: "Resources & Support",
    subtitle: "Your Success Partner",
    description: "Access entrance exam guides, education news, and expert resources to stay ahead in your career journey.",
    bgColor: "from-red-600 to-red-800",
    icon: "📚",
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
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center`}>
            <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-6">{slide.icon}</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl sm:text-2xl font-semibold mb-6 text-white/90">
                {slide.subtitle}
              </p>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
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
    </div>
  );
}
