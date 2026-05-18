"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { Award, Globe } from "lucide-react";
import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const empower = useTranslatedContent("Empower Your Future");
  const premium = useTranslatedContent("Premium Study Abroad Counselling");
  const description = useTranslatedContent("From university selection to visa assistance, get expert guidance throughout the application journey. Personalized services for undergrad, master's, PhD, and MBA aspirants.");
  const bookConsultation = useTranslatedContent("Book Free Consultation");
  const explorePrograms = useTranslatedContent("Explore Programs");
  const trusted = useTranslatedContent("Trusted by 10,000+ students globally");
  const acceptance = useTranslatedContent("Acceptance");
  const successRate = useTranslatedContent("98% Success Rate");
  const network = useTranslatedContent("Network");
  const unis = useTranslatedContent("500+ Top Tier Unis");

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#FAFAFA] min-h-[50vh] flex items-center pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-16"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-red-100/50 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-slate-200/50 to-transparent blur-3xl opacity-80" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-red-50/50 to-transparent blur-3xl opacity-80" />
        <div className="absolute left-0 top-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: "url('/assets/hero-bg-pattern.png')", backgroundSize: "cover" }} />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center justify-between w-full h-full gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
        {/* Left: Text content */}
        <div className={`relative z-10 w-full lg:w-[50%] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 mb-6 sm:mb-8 shadow-sm hover:shadow-md hover:border-red-100 transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-canam-red)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-canam-red)]"></span>
            </span>
            <span className="font-inter text-slate-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              {empower}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins text-slate-900 mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            {premium}
          </h1>

          {/* Description */}
          <p className="font-inter text-slate-600 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
            <Link
              href="/consultation"
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[var(--color-canam-red)] text-white font-inter font-semibold text-base sm:text-lg hover:bg-[var(--color-canam-red-dark)] hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              {bookConsultation}
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/programs"
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-slate-700 font-inter font-semibold text-base sm:text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] shadow-sm"
            >
              {explorePrograms}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-200">
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/100?img=1",
                "https://i.pravatar.cc/100?img=2",
                "https://i.pravatar.cc/100?img=3",
                "https://i.pravatar.cc/100?img=4"
              ].map((src, i) => (
                <div key={i} className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow-sm z-[${10 -  i}]`}>
                  <img src={src} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="font-inter text-sm text-slate-600 font-medium">{trusted}</span>
            </div>
          </div>
        </div>

        {/* Right: Modern Illustration Structure */}
        <div className={`hidden lg:flex relative z-10 w-[50%] h-[350px] xl:h-[400px] items-center justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className="relative w-full h-full max-w-[600px] xl:max-w-[650px]">
            {/* Decorative base cards */}
            <div className="absolute top-[5%] right-[5%] w-[90%] h-[90%] rounded-[2.5rem] bg-gradient-to-tr from-slate-100 to-white border border-white/60 shadow-2xl rotate-3 transition-transform hover:rotate-6 duration-700" />
            <div className="absolute top-[10%] right-[10%] w-[90%] h-[90%] rounded-[2.5rem] bg-gradient-to-bl from-red-50 to-white border border-white backdrop-blur-sm shadow-xl -rotate-2 transition-transform hover:-rotate-4 duration-700 overflow-hidden group">
              <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-colors duration-500 z-10" />
              <Image
                src="/assets/hero-city.png"
                alt="City background"
                fill
                className="object-cover opacity-40 mix-blend-multiply scale-110 group-hover:scale-105 transition-transform duration-700"
              />
              <Image
                src="/assets/hero-student.png"
                alt="Student studying abroad"
                fill
                className="object-contain object-bottom scale-[1.1] translate-y-6 group-hover:translate-y-4 transition-transform duration-700 z-20"
                priority
              />
            </div>

            {/* Floating Info Cards */}
            <div className="absolute top-1/4 -left-10 z-30 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-100/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shadow-inner">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mb-1">{acceptance}</p>
                  <p className="text-base font-bold text-slate-800">{successRate}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -right-12 z-30 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-100/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-inner text-xl">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mb-1">{network}</p>
                  <p className="text-base font-bold text-slate-800">{unis}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
