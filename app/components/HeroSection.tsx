"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-[#EEEEEE]"
      style={{ background: "rgba(238, 238, 238, 0.50)", minHeight: "504px" }}
    >
      {/* Halftone background pattern (left side) */}
      <div className="absolute left-0 top-0 h-full pointer-events-none" style={{ width: "39%" }}>
        <Image
          src="/assets/hero-bg-pattern.png"
          alt=""
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center" style={{ minHeight: "504px" }}>
        {/* Left: Text content */}
        <div className={`relative z-10 w-full lg:w-[42%] py-12 lg:py-16 transition-all duration-700 ${
          isVisible ? "animate-slideInLeft" : "opacity-0 translate-x-[-40px]"
        }`}>
          {/* Label */}
          <div className="mb-5">
            <p className="font-poppins text-[#757575] text-base font-medium mb-2">
              Start Your Journey with
            </p>
            <div className="w-12 h-0.5 bg-[#C20000]" />
          </div>

          {/* Main Heading */}
          <h1
            className="font-poppins text-[#505050] mb-6"
            style={{ fontSize: "clamp(32px, 3.3vw, 47px)", fontWeight: 500, lineHeight: "1.17", maxWidth: "565px" }}
          >
            Premium{" "}
            <strong className="font-bold underline underline-offset-2">
              Study Abroad Counselling
            </strong>{" "}
            for Your Dream University
          </h1>

          {/* Description */}
          <p
            className="font-poppins text-[#505050] mb-8"
            style={{ fontSize: "17px", fontWeight: 500, lineHeight: "30px", maxWidth: "602px" }}
          >
            From university selection to visa assistance, get expert guidance
            throughout the application journey and beyond. Personalized services
            for undergrad, master&apos;s, PhD, and MBA aspirants.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="font-poppins font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: "#C50000" }}
            >
              Book Free Consultation
            </Link>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C50000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Right: Illustrations (desktop only) */}
        <div
          className={`hidden lg:block absolute top-0 right-0 h-full transition-all duration-700 ${
            isVisible ? "animate-slideInRight" : "opacity-0 translate-x-[40px]"
          }`}
          style={{ width: "58%", overflow: "hidden" }}
        >
          {/* City illustration */}
          <div
            className="absolute"
            style={{ left: "0px", top: "90px", width: "55%", height: "414px" }}
          >
            <Image
              src="/assets/hero-city.png"
              alt="City skyline"
              fill
              className="object-contain object-bottom"
            />
          </div>
          {/* Student illustration */}
          <div
            className="absolute right-0 top-0 bottom-0"
            style={{ width: "62%" }}
          >
            <Image
              src="/assets/hero-student.png"
              alt="Student studying abroad"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
