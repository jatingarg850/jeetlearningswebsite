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
    <section ref={ref} className="py-14" style={{ background: "rgba(238, 238, 238, 0.50)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
        }`}>
          <h2
            className="font-poppins text-[#505050] font-bold mb-2"
            style={{ fontSize: "32px", lineHeight: "36px" }}
          >
            Testimonials
          </h2>
          <p
            className="font-poppins text-[#505050] font-normal"
            style={{ fontSize: "17px", lineHeight: "25px" }}
          >
            What our students say about our services
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visible.map((t, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "animate-stackingScroll"
                  : "opacity-0 translate-y-[60px] scale-95"
              }`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : "0s",
              }}
            >
              {/* Red quote mark above card */}
              <div className="mb-2">
                <img
                  src="/assets/icon-quote.svg"
                  alt="Quote"
                  className="w-[34px] h-[30px] object-contain"
                  style={{ filter: "invert(13%) sepia(98%) saturate(7496%) hue-rotate(1deg) brightness(86%) contrast(111%)" }}
                />
              </div>
              {/* Card */}
              <div
                className="bg-white flex flex-col h-[278px] hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(43, 42, 41, 0.10)",
                  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.04)",
                  padding: "24px",
                }}
              >
                {/* Testimonial text */}
                <p
                  className="font-poppins flex-1"
                  style={{
                    fontSize: "14px",
                    lineHeight: "19.6px",
                    letterSpacing: "0.1px",
                    color: "#2b2a29",
                  }}
                >
                  {t.text}
                </p>

                {/* Divider */}
                <div
                  className="my-4"
                  style={{ borderTop: "1px solid rgba(43, 42, 41, 0.20)" }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover shrink-0"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <p
                      className="font-poppins font-semibold leading-tight"
                      style={{ fontSize: "15px", letterSpacing: "0.1px", color: "#2b2a29" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-poppins font-normal"
                      style={{ fontSize: "12px", lineHeight: "17.52px", letterSpacing: "0.1px", color: "#727271" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-3">
          {/* Prev */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-12 h-12 rounded-full border border-[#505050] flex items-center justify-center transition-all disabled:opacity-30 hover:border-[#C20000] hover:text-[#C20000]"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          {/* Next */}
          <button
            onClick={handleNext}
            disabled={startIndex >= testimonials.length - VISIBLE}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{ background: "#DA1313", color: "white" }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
