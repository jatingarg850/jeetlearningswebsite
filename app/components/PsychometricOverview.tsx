"use client";

import { BarChart3, Users, Lightbulb, TrendingUp } from "lucide-react";

const assessments = [
  {
    icon: BarChart3,
    title: "Aptitude Tests",
    description: "Measure your potential in numerical, verbal, and logical reasoning.",
    color: "#3B82F6",
  },
  {
    icon: Lightbulb,
    title: "IQ Assessment",
    description: "Evaluate your general intelligence and cognitive capabilities.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Personality Profile",
    description: "Understand your behavioral traits and communication style.",
    color: "#EC4899",
  },
  {
    icon: TrendingUp,
    title: "Career Fit Analysis",
    description: "Align your profile with ideal career paths and roles.",
    color: "#10B981",
  },
];

export function PsychometricOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Comprehensive Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Psychometric Analysis Tests
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Scientific measurement of your mental capabilities, personality traits, and behavioral patterns. Make informed decisions about your future.
          </p>
        </div>

        {/* Assessment Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assessments.map((assessment, idx) => {
            const Icon = assessment.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${assessment.color}20`, color: assessment.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {assessment.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {assessment.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow">
            Explore Psychometric Tests
          </button>
        </div>
      </div>
    </section>
  );
}
