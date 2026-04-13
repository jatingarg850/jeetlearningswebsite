"use client";

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
    // If no colon, extract first sentence as title
    const sentences = text.split(/(?<=[.!?])\s+/);
    if (sentences.length > 1) {
      return {
        title: sentences[0].trim(),
        content: sentences.slice(1).join(" ").trim(),
      };
    }
    // If only one sentence, use first 60 chars as title
    if (text.length > 60) {
      const titleEnd = text.indexOf(" ", 50);
      if (titleEnd > -1) {
        return {
          title: text.substring(0, titleEnd).trim(),
          content: text.substring(titleEnd).trim(),
        };
      }
    }
    return {
      title: text.substring(0, 50).trim() + "...",
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
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5"
                    style={{ background: section.color }}
                  >
                    <DynamicIcon name={section.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-3">
                    {title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-base text-slate-600 leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {section.content.map((point, i) => {
            const colonIndex = point.indexOf(":");
            const title = colonIndex > -1 ? point.substring(0, colonIndex).trim() : point;
            const description = colonIndex > -1 ? point.substring(colonIndex + 1).trim() : "";
            const color = colors[i % colors.length];
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full"
                style={{
                  borderTop: `3px solid ${color}`,
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                {description && (
                  <p className="text-slate-600 text-base leading-relaxed">
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
  
  // Check if this is the scholarship or institutions section
  const isScholarshipSection = section.id === "scholarships";
  const isInstitutionsSection = section.id === "institutions";
  
  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Grid Layout - responsive columns */}
        <div className={`grid gap-4 ${(isScholarshipSection || isInstitutionsSection) ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
          {section.content.map((content, i) => {
            const colonIndex = content.indexOf(":");
            const mainTitle = colonIndex > -1 ? content.substring(0, colonIndex).trim() : content;
            const description = colonIndex > -1 ? content.substring(colonIndex + 1).trim() : content;
            const color = stepColors[i % stepColors.length];
            
            // For scholarship and institutions sections, treat each item as a simple card
            if (isScholarshipSection || isInstitutionsSection) {
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    borderLeft: `4px solid ${color}`,
                  }}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {mainTitle}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            }
            
            // For other sections, check for nested content
            const hasSemicolonItems = /;/.test(description);
            const hasArrowItems = /→/.test(description);
            const hasColonHeadings = /[A-Z][^:]*:\s*[^.!?]*[.!?]/.test(description);
            const isJobsSection = section.id === "jobs";

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderLeft: `4px solid ${color}`,
                }}
              >
                {/* Main Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {mainTitle}
                </h3>

                {/* Content for jobs section - split by comma and add bullets */}
                {isJobsSection ? (
                  <div className="space-y-2">
                    {description.split(",").map((item, idx) => {
                      const trimmed = item.trim();
                      if (!trimmed) return null;
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: color }}
                          />
                          <p className="text-base text-slate-600 leading-relaxed">
                            {trimmed}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : hasSemicolonItems ? (
                  <div className="space-y-3">
                    {description.split(";").map((item, idx) => {
                      const trimmed = item.trim();
                      if (!trimmed) return null;
                      
                      const colonIndex = trimmed.indexOf(":");
                      const subheading = colonIndex > -1 ? trimmed.substring(0, colonIndex).trim() : trimmed;
                      const subdesc = colonIndex > -1 ? trimmed.substring(colonIndex + 1).trim() : "";
                      
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: color }}
                          />
                          <div className="flex-1">
                            <p className="text-base font-semibold text-slate-800">
                              {subheading}
                            </p>
                            {subdesc && (
                              <p className="text-base text-slate-600 leading-relaxed">
                                {subdesc}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : hasArrowItems ? (
                  <div className="space-y-2">
                    {description.split("→").map((item, idx) => {
                      const trimmed = item.trim();
                      const colonIndex = trimmed.indexOf(":");
                      const subheading = colonIndex > -1 ? trimmed.substring(0, colonIndex).trim() : trimmed;
                      const subdesc = colonIndex > -1 ? trimmed.substring(colonIndex + 1).trim() : "";
                      
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: color }}
                          />
                          <div className="flex-1">
                            <p className="text-base font-semibold text-slate-800">
                              {subheading}
                            </p>
                            {subdesc && (
                              <p className="text-base text-slate-600 leading-relaxed">
                                {subdesc}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : hasColonHeadings ? (
                  <div className="space-y-3">
                    {description.match(/([A-Z][^:]*?):\s*([^.!?]*[.!?])/g)?.map((item, idx) => {
                      const subColonIndex = item.indexOf(":");
                      const subheading = item.substring(0, subColonIndex).trim();
                      const subdesc = item.substring(subColonIndex + 1).trim().replace(/[.!?]$/, "");
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: color }}
                          />
                          <div className="flex-1">
                            <p className="text-base font-semibold text-slate-800 mb-1">
                              {subheading}
                            </p>
                            <p className="text-base text-slate-600 leading-relaxed">
                              {subdesc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-base text-slate-600 leading-relaxed">
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

// ─── 5. MARKET SNAPSHOT TABLE ───────────────────────────────────
function SectionMarketSnapshot({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  // Parse content to extract table data and additional info
  const tableData = [
    { level: "Entry-Level (Analyst)", experience: "0–2 years", salary: "₹6 Lakhs – ₹10 Lakhs" },
    { level: "Mid-Level (Associate)", experience: "3–7 years", salary: "₹15 Lakhs – ₹30 Lakhs" },
    { level: "Senior (Fellow)", experience: "8–12 years", salary: "₹35 Lakhs – ₹70 Lakhs" },
    { level: "Leadership/Appointed Actuary", experience: "15+ years", salary: "₹1 Crore – ₹3 Crores+" },
  ];

  // Extract growth and hiring info from content
  const growthInfo = section.content.find((item: string) => item.includes("Growth Projections"));
  const hiringInfo = section.content.find((item: string) => item.includes("Hiring Trends"));

  const growthText = growthInfo ? growthInfo.substring(growthInfo.indexOf(":") + 1).trim() : "";
  const hiringText = hiringInfo ? hiringInfo.substring(hiringInfo.indexOf(":") + 1).trim() : "";

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Intro Text */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
          The Indian actuarial market is one of the highest-paying professions in the country.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-sm mb-6">
          <table className="w-full bg-white">
            {/* Header */}
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-300">
                <th className="px-6 py-4 text-left font-bold text-slate-900 text-base md:text-lg border-r border-slate-300">
                  Career Level
                </th>
                <th className="px-6 py-4 text-left font-bold text-slate-900 text-base md:text-lg border-r border-slate-300">
                  Typical Experience
                </th>
                <th className="px-6 py-4 text-left font-bold text-slate-900 text-base md:text-lg">
                  Average Annual Salary (INR)
                </th>
              </tr>
            </thead>
            {/* Body */}
            <tbody>
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-slate-300 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <td className="px-6 py-4 font-semibold text-slate-900 text-base border-r border-slate-300">
                    {row.level}
                  </td>
                  <td className="px-6 py-4 text-slate-700 text-base border-r border-slate-300">
                    {row.experience}
                  </td>
                  <td className="px-6 py-4 text-slate-700 text-base font-semibold">
                    {row.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Info as Bullet Points */}
        <div className="space-y-3">
          {growthText && (
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: section.color }} />
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-bold">Growth Projections:</span> {growthText}
              </p>
            </div>
          )}
          {hiringText && (
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: section.color }} />
              <p className="text-slate-700 text-base leading-relaxed">
                <span className="font-bold">Hiring Trends:</span> {hiringText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function SectionInstitutions({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const institutionTypes = [
    { type: "Public/Premier", icon: "Building2", color: "#1E40AF" },
    { type: "Private", icon: "Sparkles", color: "#7C3AED" },
    { type: "Online/Distance", icon: "Monitor", color: "#0EA5E9" },
  ];

  // Parse content to extract institutions for each type
  const groupedContent: Record<string, string[]> = {};
  
  section.content.forEach((item: string) => {
    const colonIndex = item.indexOf(":");
    if (colonIndex > -1) {
      const type = item.substring(0, colonIndex).trim();
      const content = item.substring(colonIndex + 1).trim();
      
      // Split by semicolon to get individual institutions
      const institutions = content.split(";").map(i => i.trim()).filter(i => i);
      
      groupedContent[type] = institutions;
    }
  });

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Institution Types Grid - Only Show Categories with Institutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {institutionTypes
            .filter((instType) => (groupedContent[instType.type] || []).length > 0)
            .map((instType, idx) => {
              const institutions = groupedContent[instType.type] || [];

              return (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm"
                  style={{ borderTop: `3px solid ${instType.color}` }}
                >
                  {/* Content */}
                  <div className="p-5">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${instType.color}15`, color: instType.color }}
                      >
                        <DynamicIcon name={instType.icon} className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {instType.type}
                      </h3>
                    </div>

                    {/* Institutions List - All Visible */}
                    <div className="space-y-2">
                      {institutions.map((inst, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: instType.color }}
                          />
                          <p className="text-slate-600 text-base leading-relaxed">
                            {inst}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
    <SectionResponsibilities section={section} careerName={careerName} />
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
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-base leading-relaxed">
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
                  <p className="text-lg leading-relaxed font-medium text-slate-800">
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
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
          style={{ background: section.color ?? "#1E40AF" }}
        >
          <DynamicIcon name={section.icon} className="w-7 h-7 text-white" />
        </div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight whitespace-nowrap ${light ? "text-white" : "text-slate-900"}`}>
          {section.title}
        </h2>
      </div>
      <p className={`text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${light ? "text-white/70" : "text-slate-600"}`}>
        {section.description}
      </p>
    </div>
  );
}

// ─── SECTION ROUTER ───────────────────────────────────────────────
const getComponentForSection = (section: CareerGuideSection) => {
  const titleLower = section.title.toLowerCase();
  const idLower = section.id.toLowerCase();
  
  // Route based on section title first (most reliable for flexibility)
  if (titleLower.includes("what is this")) return SectionWhat;
  if (titleLower.includes("day in the life")) return SectionDayInLife;
  if (titleLower.includes("is this you")) return SectionWho;
  if (titleLower.includes("market snapshot")) return SectionMarketSnapshot;
  if (titleLower.includes("what will it cost") || titleLower.includes("investment required")) return SectionCosts;
  if (titleLower.includes("where to study")) return SectionInstitutions;
  if (titleLower.includes("challenges")) return SectionChallenges;
  if (titleLower.includes("emerging trends") || titleLower.includes("future outlook")) return SectionStartNow;
  if (titleLower.includes("skills to build")) return SectionStartNow;
  if (titleLower.includes("famous") || titleLower.includes("personalities")) return SectionStartNow;
  
  // Route based on section ID for remaining sections
  if (idLower === "1") return SectionWhat;
  if (idLower === "2") return SectionDayInLife;
  if (idLower === "3") return SectionWho;
  if (idLower === "4") return SectionResponsibilities;
  if (idLower === "5") return SectionResponsibilities;
  if (idLower === "6") return SectionMarketSnapshot;
  if (idLower === "7") return SectionResponsibilities;
  if (idLower === "8") return SectionCosts;
  if (idLower === "9") return SectionResponsibilities;
  if (idLower === "10") return SectionResponsibilities;
  if (idLower === "11") return SectionResponsibilities;
  if (idLower === "12") return SectionResponsibilities;
  if (idLower === "13") return SectionChallenges;
  if (idLower === "14") return SectionStartNow;
  if (idLower === "15") return SectionStartNow;
  if (idLower === "16") return SectionStartNow;
  
  // Default fallback
  return SectionResponsibilities;
};

const SECTION_COMPONENTS = [
  SectionWhat,           // Index 0: What is This Career
  SectionDayInLife,      // Index 1: A Day in the Life
  SectionWho,            // Index 2: Is This You
  SectionResponsibilities, // Index 3: Key Responsibilities
  SectionResponsibilities, // Index 4: Career Pathways
  SectionMarketSnapshot, // Index 5: Market Snapshot
  SectionResponsibilities, // Index 6: Where Are the Jobs
  SectionInstitutions,   // Index 7: Where to Study
  SectionChallenges,     // Index 8: Professional Bodies
  SectionChallenges,     // Index 9: Scholarships
  SectionChallenges,     // Index 10: Career Opportunities
  SectionChallenges,     // Index 11: Challenges
  SectionStartNow,       // Index 12: Emerging Trends
  SectionStartNow,       // Index 13: Skills to Build
  SectionStartNow,       // Index 14: Famous Leaders
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
        const Component = getComponentForSection(section);
        return <Component key={section.id} section={section} careerName={careerName} />;
      })}
    </div>
  );
}
