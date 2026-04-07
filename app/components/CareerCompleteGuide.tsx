"use client";

import { useState } from "react";
import { CareerGuideSection } from "@/app/data/careerPageData";
import { DynamicIcon } from "./DynamicIcon";
import { DayInLifeCarousel } from "./DayInLifeCarousel";
import { CostChallenges } from "./CostChallenges";
import { WhereToStudyCarousel } from "./WhereToStudyCarousel";
import {
  Brain, Hourglass, Microscope, MessageSquare, Monitor,
  ClipboardList, Target, Star,
  ChevronLeft, ChevronRight,
  AlertTriangle, CheckCircle2,
} from "lucide-react";

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

// ─── 1. DAY IN THE LIFE CAROUSEL ──────────────────────────────────
function SectionWhat({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  // Check if this is a "Day in the Life" section
  const isDayInLife = section.title.toLowerCase().includes("day in the life");
  
  if (isDayInLife) {
    return (
      <DayInLifeCarousel
        content={section.content}
        title={section.title}
        description={section.description}
        color={section.color}
      />
    );
  }

  // Modern professional carousel for "What is This Career All About?"
  const parseContent = (text: string) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex > -1) {
      return {
        title: text.slice(0, colonIndex).trim(),
        content: text.slice(colonIndex + 1).trim(),
      };
    }
    const sentences = text.split(/(?<=[.!?])\s+/);
    if (sentences.length > 1) {
      return {
        title: sentences[0].trim(),
        content: sentences.slice(1).join(" ").trim(),
      };
    }
    return {
      title: text.substring(0, 50).trim(),
      content: text.trim(),
    };
  };

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-white border-b border-canam-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.content.map((item, idx) => {
            const { title, content } = parseContent(item);
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-canam-border shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: section.color }}
                  >
                    <DynamicIcon name={section.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 2. DAY IN THE LIFE CAROUSEL (for index 1) ──────────────────
function SectionDayInLife({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <DayInLifeCarousel
      content={section.content}
      title={section.title}
      description={section.description}
      color={section.color}
    />
  );
}

// ─── 3. TRAIT BADGE GRID with MODAL ──────────────────────────────
function SectionWho({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const icons = [Brain, Hourglass, Microscope, MessageSquare, Monitor, ClipboardList, Target, Star];
  const colors = [
    "#7C3AED", // violet
    "#0EA5E9", // cyan
    "#10B981", // emerald
    "#F59E0B", // amber
    "#EC4899", // rose
    "#6366F1", // indigo
    "#22C55E", // green
    "#EAB308", // yellow
  ];

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />
        
        {/* Traits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.content.map((point, i) => {
            const colonIndex = point.indexOf(":");
            const title = colonIndex > -1 ? point.substring(0, colonIndex).trim() : point;
            const description = colonIndex > -1 ? point.substring(colonIndex + 1).trim() : "";
            const color = colors[i % colors.length];
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderTop: `3px solid ${color}`,
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                {description && (
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. HORIZONTAL STEP PROCESS TILES ────────────────────────────
function SectionResponsibilities({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const stepColors = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#06B6D4", "#6366F1"];
  
  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.content.map((content, i) => {
            const colonIndex = content.indexOf(":");
            const title = colonIndex > -1 ? content.substring(0, colonIndex).trim() : content;
            const description = colonIndex > -1 ? content.substring(colonIndex + 1).trim() : content;
            const color = stepColors[i % stepColors.length];

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderLeft: `4px solid ${color}`,
                }}
              >
                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 5. INSTITUTIONS SHOWCASE ────────────────────────────────────
function SectionInstitutions({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  
  const institutionTypes = [
    { type: "Public/Premier", icon: "Building2", color: "#1E40AF" },
    { type: "Private", icon: "Sparkles", color: "#7C3AED" },
    { type: "Online/Distance", icon: "Monitor", color: "#0EA5E9" },
  ];

  // Group content by institution type
  const groupedContent = section.content.reduce((acc: Record<string, string[]>, item: string) => {
    const typeMatch = institutionTypes.find(t => item.includes(t.type));
    const type = typeMatch?.type || "Other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Institution Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {institutionTypes.map((instType, idx) => {
            const institutions = groupedContent[instType.type] || [];
            const isExpanded = expanded === idx;

            return (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setExpanded(isExpanded ? null : idx)}
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl h-full bg-white border-2"
                  style={{ borderColor: `${instType.color}30` }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: instType.color }}
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${instType.color}15`, color: instType.color }}
                      >
                        <DynamicIcon name={instType.icon} className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-slate-900">
                          {instType.type}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold mt-1">
                          {institutions.length} institution{institutions.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    {/* Institution count badge */}
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{ background: `${instType.color}15`, color: instType.color }}
                    >
                      {institutions.length} Option{institutions.length !== 1 ? 's' : ''}
                    </div>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: instType.color }}
                      />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {isExpanded ? "Hide" : "View"} Details
                      </span>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && institutions.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-3">
                          {institutions.map((inst, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ background: instType.color }}
                              />
                              <p className="text-slate-700 text-sm leading-relaxed">
                                {inst.replace(instType.type + ": ", "").trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: instType.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div
          className="p-6 md:p-8 rounded-2xl border-2 bg-white"
          style={{ borderColor: `${section.color}30` }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${section.color}15`, color: section.color }}
            >
              <DynamicIcon name="Info" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Pro Tip</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most actuarial education requires classroom interaction and practical problem-solving. Choose an institution that offers strong faculty mentorship and industry connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. COST CHALLENGES SECTION ──────────────────────────────────
function SectionCosts({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <CostChallenges
      title={section.title}
      description={section.description}
      items={section.content}
      sectionColor={section.color}
    />
  );
}

// ─── 6B. WHERE TO STUDY CAROUSEL SECTION ─────────────────────────
function SectionWhereToStudy({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  return (
    <WhereToStudyCarousel
      title={section.title}
      description={section.description}
      items={section.content}
      sectionColor={section.color}
    />
  );
}

// ─── 7. CHALLENGE ALERT CARDS (expandable) ─────────────────────
function SectionChallenges({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const alertColors = ["#EF4444", "#F97316", "#EAB308", "#EF4444", "#F97316", "#EAB308"];
  
  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden border-b border-red-200 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.content.map((point, i) => {
            const colonIndex = point.indexOf(":");
            const title = colonIndex > -1 ? point.substring(0, colonIndex).trim() : point;
            const description = colonIndex > -1 ? point.substring(colonIndex + 1).trim() : point;
            const color = alertColors[i % alertColors.length];

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderTop: `3px solid ${color}`,
                }}
              >
                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 8. ANIMATED ROADMAP CHECKLIST ───────────────────────────────
function SectionStartNow({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const lineColors = [GOLD, GREEN, BLUE, INDIGO, TEAL, ROSE, "#7C3AED"];

  const parseHighlight = (text: string) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex > -1) {
      return {
        highlight: text.substring(0, colonIndex).trim(),
        rest: text.substring(colonIndex + 1).trim(),
      };
    }
    return {
      highlight: "",
      rest: text,
    };
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10 pointer-events-none hidden md:block mix-blend-multiply">
        <img src={`https://loremflickr.com/600/600/flat,illustration,cartoon,${careerName.replace(/ /g, '-')},success?lock=99`} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* checklist steps */}
        <div className="flex flex-col gap-4">
          {section.content.map((point, i) => {
            const color = lineColors[i % lineColors.length];
            const { highlight, rest } = parseHighlight(point);
            return (
              <div
                key={i}
                className="relative flex items-start gap-5 p-6 rounded-2xl text-left transition-all duration-300 shadow-sm hover:shadow-md"
                style={{
                  background: "white",
                  border: `2px solid ${color}`,
                }}
              >
                {/* circle */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-black transition-all duration-300"
                  style={{
                    background: color,
                    color: "white",
                  }}
                >
                  {i + 1}
                </div>

                {/* text content */}
                <div className="flex-1 pt-1">
                  <p className="text-base leading-relaxed font-medium text-slate-800">
                    {highlight && (
                      <>
                        <span className="font-black text-slate-900">{highlight}:</span> {rest}
                      </>
                    )}
                    {!highlight && point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SHARED HEADER ────────────────────────────────────────────────
function SectionHeader({ section, light = false }: { section: CareerGuideSection; light?: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ background: section.color ?? "#1E40AF" }}
        >
          <DynamicIcon name={section.icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-black leading-tight ${light ? "text-white" : "text-slate-900"}`}>
          {section.title}
        </h3>
      </div>
      <p className={`text-sm md:text-base leading-relaxed max-w-2xl ${light ? "text-white/70" : "text-slate-500"}`}>
        {section.description}
      </p>
    </div>
  );
}

// ─── SECTION ROUTER ───────────────────────────────────────────────
const SECTION_COMPONENTS = [
  SectionWhat,           // Index 0: What is This Career
  SectionDayInLife,      // Index 1: A Day in the Life
  SectionWho,            // Index 2: Is This You
  SectionResponsibilities, // Index 3: Key Responsibilities
  SectionResponsibilities, // Index 4: Career Pathways (reuse Responsibilities style)
  SectionResponsibilities, // Index 5: Market Snapshot (reuse Responsibilities style)
  SectionResponsibilities, // Index 6: Where Are the Jobs (reuse Responsibilities style)
  SectionCosts,          // Index 7: What Will It Cost
  SectionWhereToStudy,   // Index 8: Where to Study (carousel)
  SectionChallenges,     // Index 9: Challenges (was Scholarships)
  SectionChallenges,     // Index 10: Challenges
  SectionStartNow,       // Index 11: Skills to Build
  SectionStartNow,       // Index 12: Emerging Trends (reuse StartNow style)
  SectionStartNow,       // Index 13: Start Now (reuse StartNow style)
  SectionStartNow,       // Index 14: Famous Leaders (reuse StartNow style)
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
        return <Component key={section.id} section={section} careerName={careerName} />;
      })}
    </div>
  );
}
