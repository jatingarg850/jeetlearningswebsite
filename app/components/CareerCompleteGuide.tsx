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
  Briefcase, Rocket, Zap, Globe, Building2, MapPin,
  GraduationCap, School, BookOpen, TrendingUp,
} from "lucide-react";
import { TranslatedText } from "./TranslatedText";

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

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-white border-b border-canam-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Bullet List Layout */}
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {section.content.map((item, idx) => {
              // Parse content with colon separator
              const colonIndex = item.indexOf(":");
              const hasColon = colonIndex > -1;
              const label = hasColon ? item.substring(0, colonIndex).trim() : "";
              const description = hasColon ? item.substring(colonIndex + 1).trim() : item;

              return (
                <li key={idx} className="flex gap-4 items-start">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1"
                    style={{ background: section.color }}
                  >
                    <span className="text-sm">•</span>
                  </div>
                  <div className="flex-1">
                    {hasColon ? (
                      <p className="text-base text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900">{label}:</span> {description}
                      </p>
                    ) : (
                      <p className="text-base text-slate-700 leading-relaxed">
                        {item}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
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
            const hasColon = colonIndex > -1;
            const title = hasColon ? point.substring(0, colonIndex).trim() : point;
            const description = hasColon ? point.substring(colonIndex + 1).trim() : "";
            const color = colors[i % colors.length];
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderTop: `3px solid ${color}`,
                }}
              >
                {/* Icon and Title - Side by Side */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm leading-snug ${hasColon ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                    {title}
                  </h3>
                </div>

                {/* Description */}
                {description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
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

        {/* Grid Layout -  responsive columns */}
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

                {/* Content rendering */}
                {hasSemicolonItems ? (
                  <div className="space-y-3">
                    {description.split(";").map((item, idx) => {
                      const trimmed = item.trim();
                      if (!trimmed) return null;
                      
                      const colonIndex = trimmed.indexOf(":");
                      const subheading = colonIndex > -1 ? trimmed.substring(0, colonIndex).trim() : trimmed;
                      const subdesc = colonIndex > -1 ? trimmed.substring(colonIndex + 1).trim() : "";
                      
                      return (
                        <div key={idx} className="flex gap-2">
                          <span
                            className="text-base font-bold flex-shrink-0 leading-relaxed"
                            style={{ color }}
                          >
                            →
                          </span>
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
                        <div key={idx} className="flex gap-2">
                          <span
                            className="text-base font-bold flex-shrink-0 leading-relaxed"
                            style={{ color }}
                          >
                            →
                          </span>
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
                        <div key={idx} className="flex gap-2">
                          <span
                            className="text-base font-bold flex-shrink-0 leading-relaxed"
                            style={{ color }}
                          >
                            →
                          </span>
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
  // First, separate all items into salary rows and other content
  const allSalaryItems: { level: string; salary: string }[] = [];
  const otherItems: string[] = [];
  
  section.content.forEach((item) => {
    if (!item || !item.trim()) return;
    
    // Check if this is a salary item (contains ₹, LPA, or Crore)
    const hasSalarySymbol = item.includes('₹') || item.toLowerCase().includes('lpa') || item.toLowerCase().includes('crore');
    
    if (hasSalarySymbol) {
      const colonIndex = item.indexOf(':');
      if (colonIndex > 0) {
        const level = item.substring(0, colonIndex).trim();
        const salary = item.substring(colonIndex + 1).trim();
        allSalaryItems.push({ level, salary });
      }
    } else {
      otherItems.push(item);
    }
  });
  
  // Sort salary items in correct order
  const parsedRows = allSalaryItems.sort((a, b) => {
    const aLower = a.level.toLowerCase();
    const bLower = b.level.toLowerCase();
    
    const order = ['cxo', 'senior', 'mid-level', 'mid level', 'junior', 'entry'];
    const aIndex = order.findIndex(term => aLower.includes(term));
    const bIndex = order.findIndex(term => bLower.includes(term));
    
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const infoBullets = otherItems;

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {parsedRows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8">
            {parsedRows.map((row, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tier {idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug">{row.level}</h4>
                  <div className="text-lg font-semibold text-blue-600 mb-4 tracking-tight">{row.salary}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {infoBullets.map((item, idx) => {
            const colonIndex = item.indexOf(":");
            const label = colonIndex > -1 ? item.substring(0, colonIndex).trim() : "Note";
            const text = colonIndex > -1 ? item.substring(colonIndex + 1).trim() : item.trim();

            return (
              <div key={idx} className="flex gap-3">
                <span className="text-base font-bold flex-shrink-0 leading-relaxed" style={{ color: section.color }}>→</span>
                <p className="text-slate-700 text-base leading-relaxed">
                  <span className="font-bold">{label}:</span> {text}
                </p>
              </div>
            );
          })}

          {parsedRows.length === 0 && infoBullets.length === 0 && (
            <div className="flex gap-3">
              <span className="text-base font-bold flex-shrink-0 leading-relaxed" style={{ color: section.color }}>→</span>
              <p className="text-slate-700 text-base leading-relaxed">Market details will be updated soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function SectionInstitutions({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const institutionTypeMeta: Record<string, { icon: string; color: string }> = {
    "Public/Premier": { icon: "Building2", color: "#1E40AF" },
    Private: { icon: "Sparkles", color: "#7C3AED" },
    "Online/Distance": { icon: "Monitor", color: "#0EA5E9" },
    North: { icon: "MapPin", color: "#1D4ED8" },
    South: { icon: "MapPin", color: "#059669" },
    East: { icon: "MapPin", color: "#7C3AED" },
    West: { icon: "MapPin", color: "#EA580C" },
    Government: { icon: "Building2", color: "#1E40AF" },
    Online: { icon: "Monitor", color: "#0EA5E9" },
  };

  const fallbackColors = ["#1E40AF", "#7C3AED", "#0EA5E9", "#059669", "#EA580C", "#EC4899"];

  const groupedContent: Record<string, string[]> = {};
  let noteContent = "";
  
  section.content.forEach((item: string) => {
    if (!item || !item.trim()) return;
    
    // Check for note
    if (item.trim().toLowerCase().startsWith("note:")) {
      noteContent = item.substring(item.indexOf(":") + 1).trim();
      return;
    }
    
    const trimmed = item.trim();
    
    // Check each known header type
    const headers = [
      { prefix: "Government:", key: "Government" },
      { prefix: "Private:", key: "Private" },
      { prefix: "Online:", key: "Online" },
      { prefix: "Public/Premier:", key: "Public/Premier" },
      { prefix: "Online/Distance:", key: "Online/Distance" },
      { prefix: "North:", key: "North" },
      { prefix: "South:", key: "South" },
      { prefix: "East:", key: "East" },
      { prefix: "West:", key: "West" }
    ];
    
    for (const header of headers) {
      if (trimmed.startsWith(header.prefix)) {
        let content = trimmed.substring(header.prefix.length);
        
        // Check if content has newlines (newline format) or commas (comma format)
        if (content.includes('\n')) {
          // Newline format: "Government:\nICMAI\nIICA"
          const institutions = content.split('\n').map(s => s.trim()).filter(s => s);
          groupedContent[header.key] = institutions;
        } else {
          // Comma format: "Government: ICMAI, IICA, Delhi"
          content = content.trim();
          if (content.endsWith('.')) content = content.slice(0, -1);
          const institutions = content.split(',').map(s => s.trim()).filter(s => s);
          groupedContent[header.key] = institutions;
        }
        return;
      }
    }
  });

  const dynamicTypes = Object.keys(groupedContent).map((type, idx) => {
    const meta = institutionTypeMeta[type];
    return {
      type,
      icon: meta?.icon || "Building2",
      color: meta?.color || fallbackColors[idx % fallbackColors.length],
    };
  });

  const typesToRender = dynamicTypes.length > 0
    ? dynamicTypes
    : [{ type: "Top Institutions", icon: "Building2", color: "#1E40AF" }];

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />

        {/* Institution Types Grid -  Only Show Categories with Institutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {typesToRender.map((instType, idx) => {
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

                    {/* Institutions List -  All Visible */}
                    <div className="space-y-2">
                      {institutions.map((inst, i) => (
                        <div key={i} className="flex gap-2">
                          <span
                            className="text-base font-bold flex-shrink-0 leading-relaxed"
                            style={{ color: instType.color }}
                          >
                            →
                          </span>
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

        {/* Note Section -  Full Width */}
        {noteContent && (
          <div className="w-full bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="text-slate-700 text-base leading-relaxed space-y-2">
              <span className="font-bold text-slate-900">Note:</span>
              <div className="space-y-2">
                {noteContent.split(';').map((part, idx) => {
                  const trimmedPart = part.trim();
                  return trimmedPart ? (
                    <p key={idx}>{trimmedPart}</p>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        )}
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
  const isCertificationsSection = section.id === "certifications";
  
  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden border-b border-red-200 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader section={section} light={false} />

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.content.map((point, i) => {
            const colonIndex = point.indexOf(":");
            const hasColon = colonIndex > -1;
            const title = hasColon ? point.substring(0, colonIndex).trim() : point;
            const description = hasColon ? point.substring(colonIndex + 1).trim() : '';
            const color = alertColors[i % alertColors.length];

            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderTop: `3px solid ${color}`,
                }}
              >
                {/* Only show title as bold if there IS a colon */}
                {hasColon ? (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {title}
                    </h3>
                    {/* Description */}
                    {isCertificationsSection ? (
                      <div className="flex gap-2">
                        <span
                          className="text-base font-bold flex-shrink-0 leading-relaxed"
                          style={{ color }}
                        >
                          →
                        </span>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {description}
                        </p>
                      </div>
                    ) : (
                      <p className="text-slate-600 text-base leading-relaxed">
                        {description}
                      </p>
                    )}
                  </>
                ) : (
                  /* No colon - render as plain text without bold */
                  <p className="text-slate-600 text-base leading-relaxed">
                    {title}
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
                  {highlight ? (
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        {highlight}
                      </p>
                      <p className="text-base leading-relaxed text-slate-700">
                        {rest}
                      </p>
                    </div>
                  ) : (
                    <p className="text-base leading-relaxed text-slate-700">
                      {point}
                    </p>
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

// ─── SHARED HEADER ────────────────────────────────────────────────
function SectionHeader({ section, light = false }: { section: CareerGuideSection; light?: boolean }) {
  return (
    <div className="mb-8 px-2">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md mt-1"
          style={{ background: section.color ?? "#1E40AF" }}
        >
          <DynamicIcon name={section.icon} className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div>
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight ${light ? "text-white" : "text-slate-900"}`}>
            {section.title}
          </h2>
        </div>
      </div>
      <p className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl px-4 ${light ? "text-white/70" : "text-slate-600"}`}>
        {section.description}
      </p>
    </div>
  );
}

// ─── SECTION PATHWAYS ───────────────────────────────────────────────
function SectionPathways({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const stepColors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#6366F1'];
  
  const pathways: { title: string; steps: string[] }[] = [];
  let currentPathway: { title: string; steps: string[] } | null = null;

  for (const item of section.content) {
    // Skip empty strings
    if (!item || !item.trim()) continue;
    
    // Check if this is a pathway header
    const isPathwayHeader = (item.toLowerCase().includes('pathway ') || item.toLowerCase().includes('route')) && !item.toLowerCase().startsWith('step');
    
    if (isPathwayHeader) {
      // Save previous pathway if it has steps
      if (currentPathway && currentPathway.steps.length > 0) {
        pathways.push(currentPathway);
      }
      // Start new pathway
      currentPathway = { title: item, steps: [] };
    } else if (item.toLowerCase().startsWith('step ')) {
      // Add step to current pathway
      if (currentPathway) {
        currentPathway.steps.push(item);
      } else {
        // Create new pathway if none exists
        currentPathway = { title: 'Career Path', steps: [item] };
      }
    }
    // Ignore any other lines (don't add them to steps)
  }
  
  // Don't forget to add the last pathway
  if (currentPathway && currentPathway.steps.length > 0) {
    pathways.push(currentPathway);
  }

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway, idx) => {
             const color = stepColors[idx % stepColors.length];
             return (
               <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                 <div className="p-4 bg-slate-50 border-b border-slate-200" style={{ borderTop: `4px solid ${color}` }}>
                   <h3 className="text-lg font-bold text-slate-900">{pathway.title}</h3>
                 </div>
                 <div className="p-4 flex-1 flex flex-col gap-3">
                    {pathway.steps.map((step, sIdx) => {
                       const colonIndex = step.indexOf(':');
                       const label = colonIndex > -1 ? step.substring(0, colonIndex).trim() : '';
                       const desc = colonIndex > -1 ? step.substring(colonIndex + 1).trim() : step;
                       return (
                         <div key={sIdx} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: color, color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                              {sIdx + 1}
                            </div>
                            <div className="flex-1">
                              {label && <p className="text-sm font-bold text-slate-900">{label}</p>}
                              <p className="text-sm text-slate-700">{desc}</p>
                            </div>
                         </div>
                       )
                    })}
                 </div>
               </div>
             )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION OPPORTUNITIES ───────────────────────────────────────────────
function SectionOpportunities({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const groupedContent: Record<string, string[]> = {};
  let currentGroup = 'Main Roles';
  
  const content = section.content || [];
  content.forEach((item: string) => {
    const trimmed = item.trim();
    if (!trimmed) return;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > -1 && trimmed.length > 40) {
      const type = trimmed.substring(0, colonIndex).trim().replace(/:$/, '');
      const subItems = trimmed.substring(colonIndex + 1).split(/[,;]/).map(i => i.trim()).filter(i => i);
      if (!groupedContent[type]) groupedContent[type] = [];
      groupedContent[type].push(...subItems);
      currentGroup = type;
    } else {
      const lower = trimmed.toLowerCase();
      const isHeader = !trimmed.includes(':') && trimmed.split(' ').length <= 4 && 
        (
          ["conventional", "emerging", "new-age", "remote", "entrepreneurship", "startup", "freelancing", "roles", "careers"].some(h => lower.includes(h)) ||
          trimmed === trimmed.toUpperCase()
        );
      
      if (isHeader) {
         currentGroup = trimmed.replace(/:$/, '');
         if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
      } else {
         if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
         const cleaned = trimmed.replace(/^[•\-\*\?\s]+/, '');
         if (cleaned) groupedContent[currentGroup].push(cleaned);
      }
    }
  });

  const finalEntries = Object.entries(groupedContent).filter(([_, items]) => items.length > 0);

  const colors = [
    { text: "text-green-600", bg: "bg-green-50", dot: "bg-green-600" },
    { text: "text-blue-600", bg: "bg-blue-50", dot: "bg-blue-600" },
    { text: "text-purple-600", bg: "bg-purple-50", dot: "bg-purple-600" },
    { text: "text-orange-600", bg: "bg-orange-50", dot: "bg-orange-600" }
  ];
  const icons = [Briefcase, Rocket, Zap, Target, Globe, Building2];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {finalEntries.map(([type, opps], idx) => {
             const colorSet = colors[idx % colors.length];
             const Icon = icons[idx % icons.length];
             
             return (
               <div key={type} className="group p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                 <div className="flex items-center gap-4 mb-6">
                   <div className={`w-12 h-12 ${colorSet.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                     <Icon className={`w-6 h-6 ${colorSet.text}`} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 leading-tight">{type}</h3>
                 </div>
                 <ul className="space-y-3 pl-1">
                   {opps.map((opp, i) => (
                     <li key={i} className="flex gap-3 items-start group/item text-slate-600">
                       <span className={`mt-0.5 font-bold text-lg ${colorSet.text}`}>*</span>
                       <span className="text-base font-medium group-hover/item:text-slate-900 transition-colors leading-relaxed">
                         <TranslatedText as="span">{opp}</TranslatedText>
                       </span>
                     </li>
                   ))}
                 </ul>
               </div>
             )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION JOBS ───────────────────────────────────────────────
function SectionJobs({ section, careerName }: { section: CareerGuideSection; careerName: string }) {
  const groupedContent: Record<string, string[]> = {};
  let currentGroup = 'Market Info';
  
  const content = section.content || [];
  content.forEach((item: string) => {
    const trimmed = item.trim();
    if (!trimmed) return;

    const isHeader = !trimmed.includes(':') && trimmed.split(' ').length <= 4 && 
      ["cities", "industries", "demand", "locations", "regions", "sectors", "hubs"].some(h => trimmed.toLowerCase().includes(h));
    
    if (isHeader) {
       currentGroup = trimmed.replace(/:$/, '').trim();
       if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
    } else {
       if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
       let cleaned = trimmed;
       if (cleaned.endsWith(":")) cleaned = cleaned.slice(0, -1).trim();
       if (cleaned) {
          groupedContent[currentGroup].push(cleaned);
       }
    }
  });

  const finalEntries = Object.entries(groupedContent).filter(([_, items]) => items.length > 0);
  const jobIcons = [MapPin, Building2, Globe, TrendingUp, Target, Zap];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader section={section} light={false} />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {finalEntries.map(([type, items], idx) => {
            const Icon = jobIcons[idx % jobIcons.length];
            return (
              <div key={type} className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-tight">{type}</h4>
                </div>
                <ul className="space-y-3">
                  {items.map((it, i) => (
                    <li key={i} className="flex gap-3 items-start group/item">
                      <span className="text-blue-500 mt-0.5 text-lg font-bold">*</span>
                      <span className="text-base text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">
                        <TranslatedText as="span">{it}</TranslatedText>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION ROUTER ───────────────────────────────────────────────
const getComponentForSection = (section: CareerGuideSection) => {
  const titleLower = section.title.toLowerCase();
  const idLower = section.id.toLowerCase();
  
  if (titleLower.includes("what is this")) return SectionWhat;
  if (titleLower.includes("day in the life")) return SectionDayInLife;
  if (titleLower.includes("is this you")) return SectionWho;
  if (titleLower.includes("market snapshot")) return SectionMarketSnapshot;
  if (titleLower.includes("what will it cost") || titleLower.includes("investment required")) return SectionCosts;
  if (titleLower.includes("where to study") || titleLower.includes("institutions")) return SectionInstitutions;
  if (titleLower.includes("where are the jobs") || titleLower.includes("job market")) return SectionJobs;
  if (titleLower.includes("career opportunities")) return SectionOpportunities;
  if (titleLower.includes("career pathways") || idLower === "pathways") return SectionPathways;
  if (titleLower.includes("challenges")) return SectionChallenges;
  if (titleLower.includes("emerging trends") || titleLower.includes("future outlook")) return SectionStartNow;
  if (titleLower.includes("skills to build")) return SectionStartNow;
  if (titleLower.includes("famous") || titleLower.includes("personalities")) return SectionStartNow;
  
  if (idLower === "jobs") return SectionJobs;
  if (idLower === "institutions") return SectionInstitutions;
  if (idLower === "opportunities") return SectionOpportunities;
  
  if (idLower === "1") return SectionWhat;
  if (idLower === "2") return SectionDayInLife;
  if (idLower === "3") return SectionWho;
  if (idLower === "4") return SectionPathways;
  if (idLower === "5") return SectionResponsibilities;
  if (idLower === "6") return SectionMarketSnapshot;
  if (idLower === "7") return SectionResponsibilities;
  if (idLower === "8") return SectionCosts;
  if (idLower === "9") return SectionResponsibilities;
  if (idLower === "10") return SectionOpportunities;
  if (idLower === "11") return SectionResponsibilities;
  if (idLower === "12") return SectionResponsibilities;
  if (idLower === "13") return SectionChallenges;
  if (idLower === "14") return SectionStartNow;
  if (idLower === "15") return SectionStartNow;
  if (idLower === "16") return SectionStartNow;
  
  if (idLower === "opportunities") return SectionOpportunities;
  if (idLower === "institutions") return SectionInstitutions;
  
  return SectionResponsibilities;
};

// ─── MAIN EXPORT ─────────────────────────────────────────────────
export function CareerCompleteGuide({ careerName, sections }: Props) {
  // Let's intercept the sections array to split the market snapshot if it's combined
  const processedSections = [...sections];
  const marketIndex = processedSections.findIndex(s => s.id === "market" || s.title.toLowerCase().includes("market snapshot"));
  
  if (marketIndex !== -1) {
    const market = processedSections[marketIndex];
    const hasInstitutions = market.content.some(c => {
      const cl = c.toLowerCase();
      return cl.includes('top institutions') || cl.includes('where to study') || cl.includes('colleges');
    });
    const hasOpportunities = market.content.some(c => {
      const cl = c.toLowerCase();
      return cl.includes('career opportunities') || cl.includes('roles available');
    });
    const hasJobs = market.content.some(c => {
      const cl = c.toLowerCase();
      return cl.includes('where are the jobs') || cl.includes('top cities') || cl.includes('industries');
    });
    
    if (hasInstitutions || hasOpportunities || hasJobs) {
       const marketContent: string[] = [];
       const instContent: string[] = [];
       const oppContent: string[] = [];
       const jobsContent: string[] = [];
       let current = "market";
       
       market.content.forEach(item => {
         const lower = item.toLowerCase();
         if (lower.includes('top institutions') || lower.includes('where to study') || lower.includes('colleges')) { current = "institutions"; return; }
         if (lower.includes('career opportunities') || lower.includes('roles available')) { current = "opportunities"; return; }
         if (lower.includes('where are the jobs') || lower.includes('job market')) { current = "jobs"; return; }
         
         if (current === "market") marketContent.push(item);
         else if (current === "institutions") instContent.push(item);
         else if (current === "opportunities") oppContent.push(item);
         else if (current === "jobs") jobsContent.push(item);
       });
       
       processedSections[marketIndex] = { ...market, content: marketContent };
       
       if (jobsContent.length > 0) {
          const jobsIndex = processedSections.findIndex(s => s.id === "jobs" || s.title.toLowerCase().includes("where are the jobs"));
          if (jobsIndex !== -1) {
            processedSections[jobsIndex] = { ...processedSections[jobsIndex], content: jobsContent };
          } else {
            processedSections.push({
              id: "jobs",
              title: "Where Are the Jobs?",
              icon: "MapPin",
              description: "Top cities and industries.",
              color: market.color,
              content: jobsContent
            });
          }
       }

       if (instContent.length > 0) {
         const instIndex = processedSections.findIndex(s => s.id === "institutions" || s.title.toLowerCase().includes("where to study"));
         if (instIndex !== -1) {
           processedSections[instIndex] = { ...processedSections[instIndex], content: instContent };
         } else {
           processedSections.push({
             id: "institutions",
             title: "Where to Study?",
             icon: "Building2",
             description: "Top institutions across India.",
             color: market.color,
             content: instContent
           });
         }
       }
       
       if (oppContent.length > 0) {
         const oppIndex = processedSections.findIndex(s => s.id === "opportunities" || s.title.toLowerCase().includes("career opportunities"));
         if (oppIndex !== -1) {
           processedSections[oppIndex] = { ...processedSections[oppIndex], content: oppContent };
         } else {
           processedSections.push({
             id: "opportunities",
             title: "Career Opportunities",
             icon: "Briefcase",
             description: "Conventional and emerging roles.",
             color: market.color,
             content: oppContent
           });
         }
       }
    }
  }

  return (
    <div className="relative">
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Complete Guide to <span style={{ color: BLUE }}>{careerName}</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-xl max-w-2xl mx-auto">
            Everything you need to know — beautifully broken down, section by section.
          </p>
        </div>
      </section>

      {processedSections.map((section, idx) => {
        const Component = getComponentForSection(section);
        return <Component key={section.id} section={section} careerName={careerName} />;
      })}
    </div>
  );
}
