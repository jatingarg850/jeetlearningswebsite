"use client";

import { BarChart3, Users, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

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
    <section id="psychometric" className="py-16 md:py-24 px-4 sm:px-6 bg-white border-b border-slate-200">
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
            Psychometric assessments use standardized methods to measure behavior, aptitude, personality, and cognitive ability so students and professionals can make clearer academic and career decisions.
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
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${assessment.color}20`, color: assessment.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {assessment.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {assessment.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <article className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-lg font-extrabold text-slate-900 mb-3">Aptitude Tests</h3>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Evaluate natural capacity to learn and solve new challenges through numerical, verbal, logical, and perceptual tasks</li>
              <li>Career-stream and subject alignment</li>
              <li>Strength and weakness mapping</li>
              <li>Future role-fit prediction</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-lg font-extrabold text-slate-900 mb-3">IQ Assessments</h3>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Measure logical reasoning, processing speed, working memory, and visual-spatial problem-solving for high-demand learning paths</li>
              <li>Cognitive benchmarking by age group</li>
              <li>Academic acceleration planning</li>
              <li>Role suitability in technical domains</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-lg font-extrabold text-slate-900 mb-3">Personality Tests</h3>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Understand communication style, behavioral preferences, and motivation patterns for better team fit and long-term growth</li>
              <li>Self-awareness and confidence building</li>
              <li>Leadership and soft-skill development</li>
              <li>Conflict and relationship management</li>
            </ul>
          </article>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8 mb-12">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Who Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="rounded-xl bg-white border border-orange-100 p-4">
              <p className="font-bold text-slate-900 mb-1">Junior Primary (7-8 yrs)</p>
              <p className="text-slate-600">Baseline cognition and early learning-style identification.</p>
            </div>
            <div className="rounded-xl bg-white border border-orange-100 p-4">
              <p className="font-bold text-slate-900 mb-1">Middle to Secondary (9-16 yrs)</p>
              <p className="text-slate-600">Subject mapping, stream selection, and career cluster discovery.</p>
            </div>
            <div className="rounded-xl bg-white border border-orange-100 p-4">
              <p className="font-bold text-slate-900 mb-1">Higher Secondary (15+ yrs)</p>
              <p className="text-slate-600">College-course planning with aptitude-personality alignment.</p>
            </div>
            <div className="rounded-xl bg-white border border-orange-100 p-4">
              <p className="font-bold text-slate-900 mb-1">Adults and Corporates</p>
              <p className="text-slate-600">Role fit, leadership pipeline, and long-term career direction.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            Book Psychometric Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
