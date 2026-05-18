'use client';

import { useState, useEffect } from 'react';
import { useDynamicCareerData } from '@/app/hooks/useDynamicCareerData';
import {
  Info,
  Clock,
  Brain,
  GraduationCap,
  DollarSign,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Monitor,
  MapPin,
  Award,
  Briefcase,
  Sparkles,
  Rocket,
  User,
  Map,
  BookOpen,
  Zap,
  Trophy,
  Globe,
  Eye,
  RefreshCw,
  AlertCircle,
  Heart,
  Cloud,
  Lock,
  Code2,
  Newspaper,
  Microscope,
  Users,
  Target,
  FileText,
  Layers,
  CircleDollarSign,
  Home,
  PlusCircle,
  Building,
  Loader,
} from 'lucide-react';

interface CareerPageDynamicContentProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  imageUrl?: string;
}

const iconMap: Record<string, any> = {
  Info,
  Clock,
  Brain,
  GraduationCap,
  DollarSign,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Monitor,
  MapPin,
  Award,
  Briefcase,
  Sparkles,
  Rocket,
  User,
  Map,
  BookOpen,
  Target,
  CircleDollarSign,
  Home,
  PlusCircle,
  Building,
};

export function CareerPageDynamicContent({
  category,
  career,
  careerName,
  categoryName,
  imageUrl,
}: CareerPageDynamicContentProps) {
  const { data: pageData, loading, error } = useDynamicCareerData({
    category,
    career,
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Loading Career Data</h1>
          <p className="text-gray-600">Extracting content from source files...</p>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Career Data</h1>
          <p className="text-gray-600 mb-4">{error || 'Unable to load career information.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 sm:pt-18 md:pt-20 pb-12 sm:pb-14 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
              {categoryName}
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-slate-900">
                {careerName}
              </h1>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              {pageData?.subheading}
            </p>

            <div className="pt-4 sm:pt-6">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all text-sm sm:text-base min-h-[48px] sm:min-h-[52px]">
                Compare Careers
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <img
                src={imageUrl || 'https://via.placeholder.com/600x400'}
                alt={careerName}
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {pageData?.guideSections?.map((section, sectionIdx) => {
        const SectionIcon = iconMap[section.icon] || Info;

        // ── Pathways Section ──────────────────────────────────────
        if (section.id === 'pathways') {
          const pathways: { title: string; steps: string[] }[] = [];
          let currentPathway: { title: string; steps: string[] } | null = null;

          section.content.forEach((item: string) => {
            const lower = item.toLowerCase();
            const isPathwayHeader = (lower.includes('pathway ') || lower.includes('route')) && !lower.startsWith('step');

            if (isPathwayHeader) {
              if (currentPathway) pathways.push(currentPathway);
              currentPathway = { title: item, steps: [] };
            } else if (lower.startsWith('step ')) {
              if (currentPathway) currentPathway.steps.push(item);
              else currentPathway = { title: 'Standard Path', steps: [item] };
            } else {
              if (currentPathway) currentPathway.steps.push(item);
              else currentPathway = { title: item, steps: [] };
            }
          });
          if (currentPathway) pathways.push(currentPathway);

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Map className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pathways.map((path, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 sm:p-5 md:p-6 bg-slate-50 border-b border-slate-200 border-t-4 border-blue-500">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-tight">
                          {path.title}
                        </h3>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col gap-3 sm:gap-4">
                        {path.steps.map((step, sIdx) => {
                          const colonIdx = step.indexOf(':');
                          const label = colonIdx > -1 ? step.substring(0, colonIdx).trim() : '';
                          const desc = colonIdx > -1 ? step.substring(colonIdx + 1).trim() : step;
                          return (
                            <div key={sIdx} className="flex gap-3 sm:gap-4 items-start relative">
                              {sIdx < path.steps.length -  1 && (
                                <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%+8px)] bg-blue-100" />
                              )}
                              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 z-10">
                                {sIdx + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                {label && (
                                  <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 sm:mb-1 leading-snug break-words">
                                    {label}
                                  </p>
                                )}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                                  {desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // ── Institutions Section ──────────────────────────────────
        if (section.id === 'institutions') {
          const institutionTypes: { type: string; institutions: string[] }[] = [];

          section.content.forEach((item: string) => {
            const lower = item.toLowerCase();
            
            // Check if line contains type header with colon (e.g., "Government: inst1; inst2")
            if (lower.startsWith('government:') || lower.startsWith('private:') || lower.startsWith('online:')) {
              const colonIdx = item.indexOf(':');
              const typeLabel = item.substring(0, colonIdx).trim();
              const institutionsList = item.substring(colonIdx + 1).trim();
              
              const institutions = institutionsList
                .split(';')
                .map((inst: string) => inst.trim())
                .filter((inst: string) => inst);
              
              institutionTypes.push({
                type: typeLabel,
                institutions: institutions
              });
            }
          });

          // If no structured data found, render content as-is
          if (institutionTypes.length === 0) {
            return (
              <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-10 sm:mb-12">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <Building2 className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                      {section.description}
                    </p>
                  </div>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {section.content.map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Building2 className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {institutionTypes.map((instType, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 sm:p-5 md:p-6 bg-slate-50 border-b border-slate-200 border-t-4 border-blue-500">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-tight">
                          {instType.type}
                        </h3>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col gap-2 sm:gap-3">
                        {instType.institutions.map((institution, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-3 sm:gap-4">
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2 sm:mt-2.5"></div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed break-words">
                              {institution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // ── Market/Salary Section ─────────────────────────────────
        if (section.id === 'market') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 min-w-0">
                    <TrendingUp className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-blue-600 flex-shrink-0 mt-1" />
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-snug break-words">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    {section.description}
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {section.content.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [key, val] = hasColon ? item.split(':') : [item, ''];

                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 md:p-6 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all w-full"
                      >
                        {key && (
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider opacity-60 break-words mb-2 sm:mb-3">
                            {key}
                          </h4>
                        )}
                        <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed break-words">
                          {val || item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── Default Section ───────────────────────────────────────
        return (
          <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10 sm:mb-12">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <SectionIcon className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                  {section.description}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {section.content.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
