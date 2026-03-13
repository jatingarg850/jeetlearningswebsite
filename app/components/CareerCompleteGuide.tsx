"use client";

import { useState, useRef } from "react";
import { CareerGuideSection } from "@/app/data/careerPageData";

// ─── colour tokens ────────────────────────────────────────────────
const BLUE   = "#1E40AF";
const GOLD   = "#F59E0B";
const GREEN  = "#059669";
const RED    = "#DC2626";
const INDIGO = "#6366F1";
const TEAL   = "#0D9488";
const ROSE   = "#E11D48";

interface Props {
  careerName: string;
  sections: CareerGuideSection[];
}

// ─── 1. HORIZONTAL SCROLL FLIP-ESQUE INFO CARDS ──────────────────
function SectionWhat({ section }: { section: CareerGuideSection }) {
  const [active, setActive] = useState(0);
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-950 to-indigo-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light />

        {/* big card display */}
        <div className="relative flex flex-col lg:flex-row gap-6 items-stretch">
          {/* left: selector list */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-56 flex-shrink-0">
            {section.content.map((pt, i) => {
              const first = pt.split(":")[0];
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex-shrink-0 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-300"
                  style={{
                    background: active === i ? GOLD : "rgba(255,255,255,0.08)",
                    color:      active === i ? "#1e293b" : "rgba(255,255,255,0.7)",
                    borderLeft: active === i ? `4px solid ${GOLD}` : "4px solid transparent",
                  }}
                >
                  {first}
                </button>
              );
            })}
          </div>

          {/* right: big content panel */}
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-between"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              minHeight: "220px",
            }}
          >
            <span className="text-5xl mb-4 block">{section.icon}</span>
            <p className="text-white text-lg leading-relaxed font-medium">
              {section.content[active]}
            </p>
            <div className="mt-6 flex gap-2">
              {section.content.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? "28px" : "10px",
                    height: "10px",
                    background: active === i ? GOLD : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. TRAIT BADGE GRID with MODAL ──────────────────────────────
function SectionWho({ section }: { section: CareerGuideSection }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const icons = ["🧠", "⏳", "🔬", "💬", "💻", "📋", "🎯", "🌟"];
  const bg = [
    "from-violet-500 to-purple-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
    "from-indigo-500 to-blue-600",
    "from-green-500 to-emerald-600",
    "from-yellow-500 to-amber-600",
  ];
  return (
    <section className="py-16 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {section.content.map((point, i) => {
            const label = point.split(":")[0];
            const detail = point.includes(":") ? point.slice(point.indexOf(":") + 1).trim() : point;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-400 shadow-md`}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  transform: hovered === i ? "translateY(-6px) scale(1.03)" : "none",
                  boxShadow: hovered === i ? "0 20px 40px rgba(0,0,0,0.15)" : undefined,
                }}
              >
                <div className={`bg-gradient-to-br ${bg[i % bg.length]} rounded-2xl p-5 h-full flex flex-col gap-3`}>
                  <span className="text-3xl">{icons[i % icons.length]}</span>
                  <p className="text-white font-bold text-sm leading-tight">{label}</p>
                  {hovered === i && (
                    <p className="text-white/80 text-xs leading-relaxed transition-all">{detail}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. HORIZONTAL STEP PROCESS CAROUSEL ─────────────────────────
function SectionResponsibilities({ section }: { section: CareerGuideSection }) {
  const [step, setStep] = useState(0);
  const stepIcons = ["🔎", "📊", "💲", "⚠️", "📜", "📣", "🔗"];
  return (
    <section className="py-16 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} />

        {/* step pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {section.content.map((pt, i) => {
            const label = pt.split(":")[0];
            return (
              <button
                key={i}
                onClick={() => setStep(i)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: step === i ? BLUE : "#EFF6FF",
                  color:      step === i ? "white" : BLUE,
                  border:     `2px solid ${step === i ? BLUE : "#DBEAFE"}`,
                }}
              >
                <span>{stepIcons[i % stepIcons.length]}</span>
                <span>Step {i + 1}</span>
              </button>
            );
          })}
        </div>

        {/* big step card */}
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          style={{
            background: `linear-gradient(135deg, ${BLUE}10, ${INDIGO}10)`,
            border: `2px solid ${BLUE}30`,
          }}
        >
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-5xl md:text-6xl flex-shrink-0 shadow-xl"
            style={{ background: `linear-gradient(135deg, ${BLUE}, ${INDIGO})` }}
          >
            {stepIcons[step % stepIcons.length]}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              Step {step + 1} of {section.content.length}
            </p>
            <p className="text-slate-800 text-lg md:text-2xl font-bold leading-relaxed">
              {section.content[step]}
            </p>
          </div>
        </div>

        {/* progress bar */}
        <div className="mt-6 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((step + 1) / section.content.length) * 100}%`,
              background: `linear-gradient(to right, ${BLUE}, ${INDIGO})`,
            }}
          />
        </div>

        {/* prev / next */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-5 py-2 rounded-full text-sm font-bold transition-all disabled:opacity-30"
            style={{ background: step === 0 ? "#E2E8F0" : BLUE, color: step === 0 ? "#94A3B8" : "white" }}
          >
            ← Prev
          </button>
          <button
            onClick={() => setStep(s => Math.min(section.content.length - 1, s + 1))}
            disabled={step === section.content.length - 1}
            className="px-5 py-2 rounded-full text-sm font-bold transition-all disabled:opacity-30"
            style={{ background: step === section.content.length - 1 ? "#E2E8F0" : BLUE, color: step === section.content.length - 1 ? "#94A3B8" : "white" }}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── 4. PRICING TILE CAROUSEL (swipe) ────────────────────────────
function SectionCost({ section }: { section: CareerGuideSection }) {
  const [active, setActive] = useState(0);
  const gradients = [
    "from-blue-600 to-indigo-700",
    "from-indigo-600 to-purple-700",
    "from-purple-600 to-pink-700",
    "from-pink-600 to-rose-700",
    "from-rose-600 to-red-700",
    "from-amber-500 to-orange-600",
  ];
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-900 to-blue-950 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader section={section} light />

        {/* card row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {section.content.map((point, i) => {
            const label = point.includes(":") ? point.split(":")[0] : `Item ${i + 1}`;
            const detail = point.includes(":") ? point.slice(point.indexOf(":") + 1).trim() : point;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`snap-center flex-shrink-0 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  active === i ? "scale-105 shadow-2xl" : "opacity-70 scale-95"
                }`}
                style={{
                  width: "260px",
                  background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  border: active === i ? `2px solid ${GOLD}` : "2px solid transparent",
                }}
              >
                <div className={`bg-gradient-to-br ${gradients[i % gradients.length]} rounded-2xl p-6 h-full flex flex-col gap-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white">₹</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      {`0${i + 1}`}
                    </span>
                  </div>
                  <p className="text-white font-bold text-base">{label}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {section.content.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? "28px" : "10px",
                height: "10px",
                background: active === i ? GOLD : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. SCHOLARSHIP BADGE ACCORDION ──────────────────────────────
function SectionScholarship({ section }: { section: CareerGuideSection }) {
  const [open, setOpen] = useState<number | null>(0);
  const colors = [GREEN, TEAL, BLUE, INDIGO, "#7C3AED"];
  const badges = ["🏅", "🤝", "🌟", "🎯", "🏛️"];
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader section={section} />
        <div className="flex flex-col gap-4">
          {section.content.map((point, i) => {
            const label = point.includes(":") ? point.split(":")[0] : `Scholarship ${i + 1}`;
            const detail = point.includes(":") ? point.slice(point.indexOf(":") + 1).trim() : point;
            const color = colors[i % colors.length];
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  border: `2px solid ${isOpen ? color : "transparent"}`,
                  background: isOpen ? "white" : "rgba(255,255,255,0.7)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    {badges[i % badges.length]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800">{label}</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 transition-transform duration-300"
                    style={{
                      background: color,
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-[76px]">
                    <div
                      className="h-0.5 mb-3 rounded-full"
                      style={{ background: `${color}30` }}
                    />
                    <p className="text-slate-600 leading-relaxed">{detail}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 6. CHALLENGE ALERT CARDS (horizontal swipe) ─────────────────
function SectionChallenges({ section }: { section: CareerGuideSection }) {
  const [current, setCurrent] = useState(0);
  const severity = ["🔴 Critical", "🟠 High", "🟡 Medium", "🔴 Critical", "🟠 High", "🟡 Medium"];
  const alertColors = [RED, "#EA580C", "#D97706", RED, "#EA580C", "#D97706"];
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-red-950 to-rose-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader section={section} light />

        {/* numbered challenge cards */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {section.content.map((point, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className="snap-center flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  width: "min(300px, 85vw)",
                  transform: current === i ? "scale(1.03)" : "scale(0.96)",
                  opacity: current === i ? 1 : 0.65,
                }}
              >
                {/* top bar */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ background: alertColors[i % alertColors.length] }}
                >
                  <span className="text-white font-bold text-xs uppercase tracking-wider">
                    Challenge #{i + 1}
                  </span>
                  <span className="text-white text-xs">{severity[i % severity.length]}</span>
                </div>
                {/* body */}
                <div
                  className="p-6"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
                >
                  <p className="text-3xl mb-4">⚠️</p>
                  <p className="text-white leading-relaxed text-sm">{point}</p>
                </div>
              </div>
            ))}
          </div>

          {/* counter */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              ‹
            </button>
            <span className="text-white/70 text-sm font-medium">
              {current + 1} / {section.content.length}
            </span>
            <button
              onClick={() => setCurrent(c => Math.min(section.content.length - 1, c + 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. ANIMATED ROADMAP CHECKLIST ───────────────────────────────
function SectionStartNow({ section }: { section: CareerGuideSection }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };
  const pct = Math.round((checked.size / section.content.length) * 100);
  const lineColors = [GOLD, GREEN, BLUE, INDIGO, TEAL, ROSE, "#7C3AED"];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader section={section} />

        {/* progress bar */}
        <div className="mb-8 p-5 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between mb-2 text-sm font-semibold text-slate-600">
            <span>Your Progress</span>
            <span style={{ color: GOLD }}>{pct}% Complete</span>
          </div>
          <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                background: `linear-gradient(to right, ${GOLD}, ${GREEN})`,
              }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">
            {checked.size} of {section.content.length} steps done
          </p>
        </div>

        {/* checklist steps */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-6 top-4 bottom-4 w-0.5 rounded-full"
            style={{ background: "linear-gradient(to bottom, #FCD34D, #6EE7B7)" }}
          />

          <div className="flex flex-col gap-4">
            {section.content.map((point, i) => {
              const done = checked.has(i);
              const color = lineColors[i % lineColors.length];
              return (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className="relative flex items-start gap-5 p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: done ? `${color}12` : "white",
                    border:     `2px solid ${done ? color : "#E2E8F0"}`,
                    boxShadow:  done ? `0 4px 20px ${color}20` : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* circle */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-black transition-all duration-300"
                    style={{
                      background: done ? color : "white",
                      border:     `3px solid ${color}`,
                      color:      done ? "white" : color,
                    }}
                  >
                    {done ? "✓" : i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="text-base leading-relaxed font-medium transition-all duration-300"
                      style={{
                        color:          done ? "#475569" : "#1E293B",
                        textDecoration: done ? "line-through" : "none",
                        opacity:        done ? 0.7 : 1,
                      }}
                    >
                      {point}
                    </p>
                    {done && (
                      <span
                        className="inline-block mt-1 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${color}20`, color }}
                      >
                        ✓ Done!
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {pct === 100 && (
          <div
            className="mt-8 p-6 rounded-2xl text-center"
            style={{ background: `linear-gradient(135deg, ${GOLD}, ${GREEN})` }}
          >
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-white font-black text-xl">All steps complete!</p>
            <p className="text-white/80 text-sm mt-1">You're already ahead of the competition.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── SHARED HEADER ────────────────────────────────────────────────
function SectionHeader({ section, light = false }: { section: CareerGuideSection; light?: boolean }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">{section.icon}</span>
        <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight ${light ? "text-white" : "text-slate-900"}`}>
          {section.title}
        </h3>
      </div>
      <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${light ? "text-white/70" : "text-slate-500"}`}>
        {section.description}
      </p>
    </div>
  );
}

// ─── SECTION ROUTER ───────────────────────────────────────────────
const SECTION_COMPONENTS = [
  SectionWhat,
  SectionWho,
  SectionResponsibilities,
  SectionCost,
  SectionScholarship,
  SectionChallenges,
  SectionStartNow,
];

// ─── MAIN EXPORT ─────────────────────────────────────────────────
export function CareerCompleteGuide({ careerName, sections }: Props) {
  return (
    <div className="relative">
      {/* Page header */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Complete Guide to <span style={{ color: BLUE }}>{careerName}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto">
            Everything you need to know — beautifully broken down, section by section.
          </p>
        </div>
      </section>

      {/* Individual sections with unique carousel styles */}
      {sections.map((section, idx) => {
        const Component = SECTION_COMPONENTS[idx % SECTION_COMPONENTS.length];
        return <Component key={section.id} section={section} />;
      })}
    </div>
  );
}
