"use client";

import { BookOpen, Newspaper, FileText, Award } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Career Library",
    description: "Comprehensive guides for 100+ career paths with detailed insights.",
    color: "#3B82F6",
    link: "/career-library",
  },
  {
    icon: FileText,
    title: "Entrance Exams",
    description: "Complete preparation guides for JEE, NEET, CAT, and more.",
    color: "#10B981",
    link: "/entrance-exams",
  },
  {
    icon: Newspaper,
    title: "Education News",
    description: "Latest updates on education policies, scholarships, and opportunities.",
    color: "#F59E0B",
    link: "/education-news",
  },
  {
    icon: Award,
    title: "Blog & Insights",
    description: "Expert articles on career planning, skill development, and success stories.",
    color: "#EC4899",
    link: "/blog",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Learning Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Resources & Support
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive resources to guide your academic and career journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <a
                key={idx}
                href={resource.link}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${resource.color}20`, color: resource.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow">
            Explore All Resources
          </button>
        </div>
      </div>
    </section>
  );
}
