"use client";

import { Brain, Fingerprint, Zap, Target } from "lucide-react";

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
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Assessment Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Dermatoglyphics Multiple Intelligence Test
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your innate potential through scientific fingerprint analysis. DMIT combines neuroscience, genetics, and psychology to reveal your true cognitive strengths.
          </p>
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
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}20`, color: feature.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg hover:shadow-lg transition-shadow">
            Learn More About DMIT
          </button>
        </div>
      </div>
    </section>
  );
}
