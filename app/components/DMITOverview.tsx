"use client";

import { Brain, Fingerprint, Zap, Target } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Fingerprint,
    title: "Fingerprint Analysis",
    description: "Unique patterns reveal your cognitive blueprint and innate potential.",
    color: "#10B981",
  },
  {
    icon: Brain,
    title: "Brain Mapping",
    description: "Understand which brain lobes are naturally dominant in your thinking.",
    color: "#3B82F6",
  },
  {
    icon: Zap,
    title: "Multiple Intelligence",
    description: "Discover your strengths across linguistic, logical, spatial, and more.",
    color: "#F59E0B",
  },
  {
    icon: Target,
    title: "Career Alignment",
    description: "Match your innate talents with ideal career paths for long-term success.",
    color: "#EC4899",
  },
];

export function DMITOverview() {
  return (
    <section id="dmit" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Assessment Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Dermatoglyphics Multiple </h2><h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
             Intelligence Test
          </h2>
          <p className="text-lg text-slate-00 max-w-3xl mx-auto leading-relaxed">
            DMIT maps an individual&apos;s innate potential by analyzing fingerprint ridge patterns, based on the biological link between fingerprint and brain development in the embryonic stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">The Science Behind DMIT</h3>
            <ul className="space-y-2 text-slate-700 text-sm list-disc list-inside">
              <li>During the 13th to 21st week of gestation, fingerprints and the neocortex develop from the same ectoderm layer</li>
              <li>DMIT uses this biological timeline to interpret likely cognitive patterns</li>
              <li>Biological link between ridges and brain lobe development</li>
              <li>Integrates neuroscience, genetics, psychology, and embryology</li>
              <li>Focuses on inborn tendencies rather than acquired marks</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">What the Report Highlights</h3>
            <ul className="space-y-2 text-slate-700 text-sm list-disc list-inside">
              <li>Helps families and counsellors understand learning style</li>
              <li>Identifies possible lobe dominance patterns</li>
              <li>Suggests practical environments where the child can thrive</li>
              <li>Learning preferences: visual, auditory, or kinesthetic</li>
              <li>Likely strengths in logical, linguistic, spatial, and creative domains</li>
              <li>Study, stream, and career guidance based on natural tendencies</li>
            </ul>
          </article>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${feature.color}20`, color: feature.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8 mb-10">
          <h3 className="text-2xl font-black mb-4">Practical Utility Across Life Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="font-bold mb-2">For Students</p>
              <p className="text-slate-200">Choose study methods and academic streams that fit natural cognitive style.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="font-bold mb-2">For Parents</p>
              <p className="text-slate-200">Personalize communication and talent nurturing based on behavior profile.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="font-bold mb-2">For Adults</p>
              <p className="text-slate-200">Improve self-awareness, work-role alignment, and stress-response planning.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="font-bold mb-2">For Organizations</p>
              <p className="text-slate-200">Support role-fit, team balance, and performance coaching decisions.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/DMIT"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
          >
            Book DMIT Counselling
          </Link>
        </div>
      </div>
    </section>
  );
}
