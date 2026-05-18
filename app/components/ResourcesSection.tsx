"use client";

import { BookOpen, Newspaper, FileText, Award } from "lucide-react";
import Link from "next/link";
import { TranslatedText } from "@/app/components/TranslatedText";

const resources = [
  {
    icon: BookOpen,
    title: "Career Path",
    description: "Explore study programs and comprehensive guides across career clusters with practical pathways.",
    color: "#3B82F6",
    link: "/career-path",
  },
  {
    icon: FileText,
    title: "Entrance Exams",
    description: "Exam strategy and planning for JEE, NEET, CUET, CAT, and more.",
    color: "#10B981",
    link: "/resources",
  },
  {
    icon: Newspaper,
    title: "Education News",
    description: "Updates on policy, scholarships, admissions, and opportunity alerts.",
    color: "#F59E0B",
    link: "/blog",
  },
  {
    icon: Award,
    title: "Blog",
    description: "Articles on counselling, skills, and student success stories.",
    color: "#EC4899",
    link: "/blog",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <TranslatedText>Learning Hub</TranslatedText>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4">
            <TranslatedText>Resources & Support</TranslatedText>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <TranslatedText>Access Entrance Exams, Education News, Career Path content, and expert blog insights.</TranslatedText>
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-12">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <a
                key={idx}
                href={resource.link}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${resource.color}20`, color: resource.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    <TranslatedText as="span">{resource.title}</TranslatedText>
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <TranslatedText>{resource.description}</TranslatedText>
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
          <Link href="/dmit" className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm sm:text-base font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
            <TranslatedText>DMIT</TranslatedText>
          </Link>
          <Link href="/psychometric" className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm sm:text-base font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
            <TranslatedText>Psychometric Analysis Test</TranslatedText>
          </Link>
          <Link href="/contact" className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm sm:text-base font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors">
            <TranslatedText>Contact</TranslatedText>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/resources"
            className="inline-flex px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            <TranslatedText>Explore All Resources</TranslatedText>
          </Link>
        </div>
      </div>
    </section>
  );
}
