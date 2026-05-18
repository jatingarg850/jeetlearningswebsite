'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavbarWrapper from '@/app/components/NavbarWrapper';
import Footer from '@/app/components/Footer';
import { CostBreakdown } from '@/app/components/CostBreakdown';
import { TranslatedText } from '@/app/components/TranslatedText';
import { useCareerTranslation } from '@/app/hooks/useDynamicTranslation';
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
} from 'lucide-react';

interface CareerPageDynamicProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  pageData?: any;
  imageUrl?: string;
  videos?: any[];
}

const iconMap: Record<string, any> = {
  Info, Clock, Brain, GraduationCap, DollarSign, Building2, TrendingUp,
  AlertTriangle, CheckCircle, Lightbulb, BarChart3, Monitor, MapPin,
  Award, Briefcase, Sparkles, Rocket, User, Map, BookOpen, Target: Info,
  CircleDollarSign, Home, PlusCircle, Building,
};

export function CareerPageDynamic({
  category,
  career,
  careerName,
  categoryName,
  pageData,
  imageUrl,
  videos = [],
}: CareerPageDynamicProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { t, isReady } = useCareerTranslation(career);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Data Not Found</h1>
          <p className="text-gray-600 mb-8">Unable to load career information.</p>
        </div>
      </div>
    );
  }

  let guideSectionsRaw = pageData?.guideSections || [];
  
  let processedSections: any[] = [];
  
  guideSectionsRaw.forEach((s: any) => {
    let id = s.id.toLowerCase();
    const titleLower = s.title.toLowerCase();
    
    if (titleLower.includes('pathway')) id = 'pathways';
    else if (titleLower.includes('market') || titleLower.includes('salary snapshot')) id = 'market';
    else if (titleLower.includes('where to study') || titleLower.includes('institutions')) id = 'institutions';
    else if (titleLower.includes('scholarship')) id = 'scholarships';
    else if (titleLower.includes('certification') || titleLower.includes('professional bodies')) id = 'certifications';
    else if (titleLower.includes('career opportunities')) id = 'opportunities';
    else if (titleLower.includes('what is this') || titleLower.includes('about')) id = 'what';
    else if (titleLower.includes('day in the life')) id = 'dayinlife';
    else if (titleLower.includes('is this you') || titleLower.includes('traits') || titleLower.includes('personality')) id = 'who';
    else if (titleLower.includes('responsibilities') || titleLower.includes('workflow')) id = 'responsibilities';
    else if (titleLower.includes('what will it cost') || titleLower.includes('investment required')) id = 'cost';
    else if (titleLower.includes('challenges')) id = 'challenges';
    else if (titleLower.includes('emerging trends') || titleLower.includes('future') || titleLower.includes('outlook')) id = 'future';
    else if (titleLower.includes('skills to build') || titleLower.includes('school')) id = 'startnow';
    else if (titleLower.includes('famous') || titleLower.includes('personalities')) id = 'personalities';
    
    if (id === 'market' || id === 'salary') {
      const hasInstitutions = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('top institutions') || cl.includes('where to study') || cl.includes('colleges');
      });
      const hasOpportunities = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('career opportunities') || cl.includes('roles available');
      });
      const hasJobs = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('where are the jobs') || cl.includes('top cities') || cl.includes('industries');
      });
      
      if (hasInstitutions || hasOpportunities || hasJobs) {
        const marketContent: string[] = [];
        const instContent: string[] = [];
        const oppContent: string[] = [];
        const jobsContent: string[] = [];
        let current = 'market';
        
        s.content?.forEach((item: string) => {
          const lower = item.toLowerCase();
          if (lower.includes('top institutions') || lower.includes('where to study') || lower.includes('colleges')) { current = 'institutions'; return; }
          if (lower.includes('career opportunities') || lower.includes('roles available')) { current = 'opportunities'; return; }
          if (lower.includes('where are the jobs') || lower.includes('job market')) { current = 'jobs'; return; }
          
          if (current === 'market') marketContent.push(item);
          else if (current === 'institutions') instContent.push(item);
          else if (current === 'opportunities') oppContent.push(item);
          else if (current === 'jobs') jobsContent.push(item);
        });
        
        processedSections.push({ ...s, id: 'market', content: marketContent });
        
        if (jobsContent.length > 0) {
          processedSections.push({
            id: 'jobs',
            title: 'Where Are the Jobs?',
            icon: 'MapPin',
            description: 'Top cities and industries.',
            content: jobsContent
          });
        }
        
        if (instContent.length > 0) {
          processedSections.push({
            id: 'institutions',
            title: 'Where to Study?',
            icon: 'Building2',
            description: 'Top institutions.',
            content: instContent
          });
        }
        
        if (oppContent.length > 0) {
          processedSections.push({
            id: 'opportunities',
            title: 'Career Opportunities',
            icon: 'Briefcase',
            description: 'Roles available.',
            content: oppContent
          });
        }
        return;
      }
    }
    
    processedSections.push({ ...s, id });
  });
  
  const deduplicated: Record<string, any> = {};
  processedSections.forEach(s => {
    if (!deduplicated[s.id] || (s.content?.length > deduplicated[s.id].content?.length)) {
      deduplicated[s.id] = s;
    }
  });
  
  const finalSections: any[] = [];
  const seenIds = new Set<string>();
  processedSections.forEach(s => {
    if (!seenIds.has(s.id)) {
      seenIds.add(s.id);
      finalSections.push(deduplicated[s.id]);
    }
  });
  
  const guideSections = finalSections;
  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md">
      <NavbarWrapper />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 sm:pt-18 md:pt-20 pb-12 sm:pb-14 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-1 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
              <TranslatedText as="span">{categoryName}</TranslatedText>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-slate-900 whitespace-normal">
                <TranslatedText as="span">{careerName}</TranslatedText>
              </h1>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              <TranslatedText>{pageData?.subheading}</TranslatedText>
            </p>

            <div className="pt-4 sm:pt-6">
              <Link
                href="/career-path"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all text-sm sm:text-base min-h-[48px] sm:min-h-[52px]"
              >
                <TranslatedText>Compare Careers</TranslatedText>
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span><TranslatedText>Comprehensive Guide</TranslatedText></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span><TranslatedText>Expert Insights</TranslatedText></span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 w-full max-w-sm lg:max-w-md">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <img
                src={imageUrl || 'https://via.placeholder.com/600x400'}
                alt={careerName}
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4"><TranslatedText as="span">Career Overview</TranslatedText></h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              <TranslatedText as="span">{`Understanding the fundamentals of ${careerName}`}</TranslatedText>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {pageData?.whyCards?.slice(0, 3).map((card: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3"><TranslatedText>{card.title}</TranslatedText></h3>
                    <p className="text-slate-600 text-xs sm:text-sm"><TranslatedText>{card.description}</TranslatedText></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {guideSections.map((section: any, sectionIdx: number) => {
        const SectionIcon = iconMap[section.icon] || Info;

        // ── dayinlife ────────────────────────────────────────────────
        if (section.id === 'dayinlife') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-14 md:mb-16">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <Clock className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText>{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-7 md:space-y-8">
                  {section.content?.map((item: string, idx: number) => {
                    const pipeParts = item.split('|');
                    let time = '';
                    let title = '';
                    let description = '';

                    if (pipeParts.length >= 3) {
                      time = pipeParts[0].trim();
                      title = pipeParts[1].trim();
                      description = pipeParts[2].trim();
                    } else {
                      const emDashIdx = item.indexOf('–');
                      const hyphenIdx = item.indexOf(' -  ');
                      const splitIdx = emDashIdx !== -1 ? emDashIdx : hyphenIdx;
                      
                      if (splitIdx !== -1) {
                        time = item.substring(0, splitIdx).trim();
                        const rest = item.substring(splitIdx + 3).trim();
                        const colonIdx = rest.indexOf(':');
                        if (colonIdx !== -1) {
                          title = rest.substring(0, colonIdx).trim();
                          description = rest.substring(colonIdx + 1).trim();
                        } else {
                          title = rest;
                        }
                      } else {
                        title = item;
                      }
                    }

                    return (
                      <div key={idx} className="group flex gap-4 sm:gap-5 md:gap-6">
                        {/* Timeline dot and line */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 border-4 border-slate-50 shadow-md group-hover:scale-110 transition-transform" />
                          {idx < (section.content?.length || 0) -  1 && (
                            <div className="w-1 bg-blue-200 group-hover:bg-blue-400 transition-colors" style={{ height: '80px' }} />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pt-1 sm:pt-1.5">
                          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block w-fit">
                                <TranslatedText>{time}</TranslatedText>
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-snug break-words">
                              <TranslatedText>{title}</TranslatedText>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                              <TranslatedText>{description}</TranslatedText>
                            </p>
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

        // ── who (is this for) ─────────────────────────────────────────
        if (section.id === 'who') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <User className="w-8 sm:w-10 h-8 sm:h-10 text-indigo-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    const icons = [Brain, Target, Users, Zap, Heart, Eye];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div key={idx} className="bg-slate-50 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 sm:gap-4 mb-1.5 sm:mb-2">
                          <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-900 leading-tight break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                          </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                          <div className="w-10 sm:w-11 md:w-12 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1 min-w-0 break-words">
                            <TranslatedText as="span">{desc}</TranslatedText>
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

        // ── pathways ─────────────────────────────────────────────────
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
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pathways.map((path, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
                      <div className="p-4 sm:p-5 md:p-6 bg-slate-50 border-b border-slate-200 border-t-4 border-blue-500">
                        <div>
                          <p className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider mb-1.5">
                            <TranslatedText as="span">{path.title.split(':')[0]?.trim()}</TranslatedText>
                          </p>
                          {path.title.includes(':') && (
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                              <TranslatedText as="span">{path.title.split(':')[1]?.trim()}</TranslatedText>
                            </h3>
                          )}
                        </div>
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
                                {label && <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 sm:mb-1 leading-snug break-words"><TranslatedText as="span">{label}</TranslatedText></p>}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words"><TranslatedText as="span">{desc}</TranslatedText></p>
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

        // ── market / salary snapshot ──────────────────────────────────
        if (section.id === 'market' || section.id === 'salary') {
          // Filter for salary tiers - check for salary indicators (₹, LPA, Crore) instead of just "Level"
          const tiers = section.content?.filter((c: string) => {
            const lowerC = c.toLowerCase();
            return (c.includes('₹') || lowerC.includes('lpa') || lowerC.includes('crore')) && 
                   !lowerC.includes('snapshot') && 
                   !lowerC.startsWith('note:');
          });
          
          // Sort tiers in correct order: CXO → Senior → Mid-Level → Junior → Entry
          const sortedTiers = [...(tiers || [])].sort((a, b) => {
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            const order = ['cxo', 'senior', 'mid-level', 'mid level', 'junior', 'entry'];
            const aIndex = order.findIndex(term => aLower.includes(term));
            const bIndex = order.findIndex(term => bLower.includes(term));
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;
            return aIndex - bIndex;
          });
          
          const others = section.content?.filter((c: string) => !tiers?.includes(c));
          
          // Find the salary snapshot heading
          const salaryHeadingIdx = others?.findIndex((item: string) => item.toLowerCase().includes('salary snapshot'));
          const salaryHeading = salaryHeadingIdx !== -1 ? others?.[salaryHeadingIdx] : null;
          const otherCards = others?.filter((_: string, idx: number) => idx !== salaryHeadingIdx);

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 min-w-0">
                    <TrendingUp className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-blue-600 flex-shrink-0 mt-1" />
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-snug break-words">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                {tiers && tiers.length > 0 && (
                  <div className="mb-12 sm:mb-14 md:mb-16">
                    {salaryHeading && (
                      <div className="mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                          <TranslatedText as="span">{salaryHeading}</TranslatedText>
                        </h3>
                      </div>
                    )}
                    <div className="overflow-x-auto rounded-lg sm:rounded-2xl border border-slate-200 shadow-sm -mx-3 sm:mx-0 px-3 sm:px-0">
                      <table className="w-full text-left border-collapse min-w-[400px]">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Career Level</th>
                            <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Est. Salary (p.a.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedTiers.map((tier: string, idx: number) => {
                            const colonIdx = tier.indexOf(':');
                            const level = colonIdx !== -1 ? tier.substring(0, colonIdx).trim() : tier.trim();
                            const salary = colonIdx !== -1 ? tier.substring(colonIdx + 1).trim() : '';
                            
                            return (
                              <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50 transition-colors group">
                                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">{level}</td>
                                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-blue-600 whitespace-nowrap">{salary}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {otherCards && otherCards.length > 0 && (
                  <>
                    {otherCards.map((item: string, idx: number) => {
                      const hasColon = item.includes(':');
                      const [key, val] = hasColon ? item.split(':') : [item, ''];
                      const isNote = key.toLowerCase().includes('note');
                      
                      if (isNote) {
                        return (
                          <div key={idx} className="p-4 sm:p-5 md:p-6 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all w-full mb-6 sm:mb-8">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider opacity-60 break-words mb-2 sm:mb-3"><TranslatedText as="span">{key}</TranslatedText></h4>
                            <div className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed space-y-2">
                              {val.split(';').map((part, pIdx) => {
                                const trimmedPart = part.trim();
                                return trimmedPart ? (
                                  <div key={pIdx} className="flex gap-2 items-center">
                                    <span className="text-slate-600 flex-shrink-0">•</span>
                                    <p className="break-words"><TranslatedText as="span">{trimmedPart}</TranslatedText></p>
                                  </div>
                                ) : null;
                              })}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                    
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
                      {otherCards.map((item: string, idx: number) => {
                        const hasColon = item.includes(':');
                        const [key, val] = hasColon ? item.split(':') : [item, ''];
                        const isNote = key.toLowerCase().includes('note');
                        
                        if (isNote) return null;
                        
                        return (
                          <div key={idx} className="p-3 sm:p-4 md:p-5 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 flex flex-col gap-2 hover:border-blue-300 transition-all">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider opacity-60 break-words"><TranslatedText as="span">{key}</TranslatedText></h4>
                            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed break-words"><TranslatedText as="span">{val}</TranslatedText></p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        }

        // ── startnow / skills to build ─────────────────────────────
        if (section.id === 'startnow') {
          const skillIcons = [Brain, BookOpen, Code2, Zap, Target, Users, BarChart3, Globe];
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const IconComponent = skillIcons[idx % skillIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600" />
                          </div>
                          {hasColon ? (
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                          ) : (
                            <p className="text-base sm:text-lg font-normal text-slate-700 leading-snug break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </p>
                          )}
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-0 sm:pl-0">
                            <TranslatedText as="span">{desc}</TranslatedText>
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

        // ── jobs (locations/industries) ────────────────────────────────
        if (section.id === 'jobs') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 sm:mb-10">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [Briefcase, Zap, Rocket, Building2, Globe, TrendingUp];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                          <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          {hasColon ? (
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug break-words">
                              <TranslatedText as="span">{title?.trim()}</TranslatedText>
                            </h4>
                          ) : (
                            <p className="text-sm sm:text-base md:text-lg font-normal text-slate-700 leading-snug break-words">
                              <TranslatedText as="span">{title?.trim()}</TranslatedText>
                            </p>
                          )}
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 sm:pl-8 md:pl-10 break-words">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'challenges') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <AlertTriangle className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 sm:mb-10">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [AlertTriangle, Zap, Eye, RefreshCw, AlertCircle, Heart];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                          {hasColon ? (
                            <>
                              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                <TranslatedText as="span">{title?.trim()}</TranslatedText>
                              </h4>
                            </>
                          ) : (
                            <p className="text-sm text-slate-600 leading-relaxed">
                              <TranslatedText as="span">{title?.trim()}</TranslatedText>
                            </p>
                          )}
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'trends') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12 md:mb-16">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [Zap, AlertCircle, Cloud, Lock, BarChart3, Sparkles];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                          <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 break-words">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 sm:pl-10 break-words">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'startnow') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12 md:mb-16">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-cyan-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [BarChart3, Code2, Newspaper, Trophy, BookOpen, GraduationCap, Microscope, Users];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                          <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600 flex-shrink-0" />
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 break-words">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 sm:pl-10 break-words">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'personalities') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12 md:mb-16">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                    <TranslatedText as="span">{section.title}</TranslatedText>
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [name, bio] = hasColon ? item.split(':') : [item, ''];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        {/* Header with name only */}
                        <div className="bg-slate-100 p-4 sm:p-5 md:p-6 text-center border-b border-slate-200">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 break-words">
                            <TranslatedText as="span">{name?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        
                        {/* Bio Section */}
                        {hasColon && (
                          <div className="p-4 sm:p-5 md:p-6">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                              <TranslatedText as="span">{bio?.trim()}</TranslatedText>
                            </p>
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

        // ── what / about ──────────────────────────────────────────────
        if (section.id === 'what' || section.id === 'about') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Info className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const before = hasColon ? item.substring(0, colonIdx) : item;
                    const after = hasColon ? item.substring(colonIdx + 1) : '';
                    return (
                      <div key={idx} className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed break-words">
                          {hasColon ? (
                            <>
                              <span className="font-bold text-slate-900"><TranslatedText as="span">{before.trim()}</TranslatedText></span>
                              <span className="font-normal text-slate-600">: <TranslatedText as="span">{after.trim()}</TranslatedText></span>
                            </>
                          ) : (
                            <span className="text-slate-700"><TranslatedText as="span">{item}</TranslatedText></span>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── who / personality / traits ─────────────────────────────
        if (section.id === 'who' || section.id === 'personality' || section.id === 'traits') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <User className="w-8 sm:w-10 h-8 sm:h-10 text-indigo-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const traitIcons = [Brain, Heart, Eye, Zap, Users, Lightbulb, BarChart3, Globe, BookOpen];
                    const IconComponent = traitIcons[idx % traitIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 leading-snug break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                            {hasColon && (
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <TranslatedText as="span">{desc}</TranslatedText>
                              </p>
                            )}
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

        // ── startnow / skills to build ─────────────────────────────
        if (section.id === 'startnow') {
          const skillIcons = [Brain, BookOpen, Code2, Zap, Target, Users, BarChart3, Globe];
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const IconComponent = skillIcons[idx % skillIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600" />
                          </div>
                          {hasColon ? (
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                          ) : (
                            <p className="text-base sm:text-lg !font-normal text-slate-700 leading-snug break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </p>
                          )}
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-0 sm:pl-0">
                            <TranslatedText as="span">{desc}</TranslatedText>
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

        // ── responsibilities / workflow ────────────────────────────
        if (section.id === 'responsibilities' || section.id === 'workflow') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const stepIcons = [FileText, Layers, BarChart3, Monitor, RefreshCw, CheckCircle];
                    const IconComponent = stepIcons[idx % stepIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-0.5 sm:mb-1 md:mb-2 break-words">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                            {hasColon && (
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                                <TranslatedText as="span">{desc}</TranslatedText>
                              </p>
                            )}
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

        // ── pathways / career path ─────────────────────────────────
        if (section.id === 'pathways' || section.id === 'pathway') {
          const stepColors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#6366F1'];
          const pathways: { title: string; steps: string[] }[] = [];
          let currentPathway: { title: string; steps: string[] } | null = null;
        
          for (const item of section.content || []) {
            if ((item.toLowerCase().includes('pathway ') || item.toLowerCase().includes('route')) && !item.toLowerCase().startsWith('step')) {
              if (currentPathway) pathways.push(currentPathway);
              currentPathway = { title: item, steps: [] };
            } else if (item.toLowerCase().startsWith('step ')) {
              if (currentPathway) currentPathway.steps.push(item);
              else {
                currentPathway = { title: 'Career Path', steps: [item] };
              }
            } else {
              if (currentPathway) currentPathway.steps.push(item);
              else {
                currentPathway = { title: item, steps: [] };
              }
            }
          }
          if (currentPathway) pathways.push(currentPathway);

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Map className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pathways.map((pathway, idx) => {
                     const color = stepColors[idx % stepColors.length];
                     return (
                       <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                         <div className="p-4 bg-slate-50 border-b border-slate-200" style={{ borderTop: `4px solid ${color}` }}>
                           <h3 className="text-lg font-bold text-slate-900"><TranslatedText as="span">{pathway.title}</TranslatedText></h3>
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
                                      {label && <p className="text-sm font-bold text-slate-900"><TranslatedText as="span">{label}</TranslatedText></p>}
                                      <p className="text-sm text-slate-700"><TranslatedText as="span">{desc}</TranslatedText></p>
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
          );
        }

        // ── market / salary snapshot ───────────────────────────────
        if (section.id === 'market' || section.id === 'salary') {
          // Separate salary rows from notes and headers
          const salaryRows: string[] = [];
          const notes: string[] = [];
          const otherItems: string[] = [];
          
          section.content?.forEach((item: string) => {
            if (!item || !item.trim()) return;
            
            const lowerItem = item.toLowerCase();
            
            // Check if it's a note
            if (lowerItem.startsWith('note:')) {
              notes.push(item);
              return;
            }
            
            // Check if it's a salary item (has ₹, LPA, or Crore)
            const hasSalary = item.includes('₹') || lowerItem.includes('lpa') || lowerItem.includes('crore');
            
            if (hasSalary && !lowerItem.includes('snapshot') && !lowerItem.includes('salary snapshot')) {
              salaryRows.push(item);
            } else if (!lowerItem.includes('snapshot') && !lowerItem.includes('salary snapshot')) {
              otherItems.push(item);
            }
          });
          
          // Sort salary rows in correct order: CXO → Senior → Mid-Level → Junior → Entry
          const sortedSalaryRows = [...salaryRows].sort((a, b) => {
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            
            const order = ['CXO', 'senior', 'mid-level', 'mid level', 'junior', 'entry'];
            const aIndex = order.findIndex(term => aLower.includes(term));
            const bIndex = order.findIndex(term => bLower.includes(term));
            
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;
            return aIndex - bIndex;
          });

          const extraRows = otherItems;

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                {salaryRows.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12">
                    {sortedSalaryRows.map((tier: string, idx: number) => {
                      const colonIdx = tier.indexOf(':');
                      let level = tier;
                      let details = '';
                      if (colonIdx !== -1) {
                         level = tier.substring(0, colonIdx).trim();
                         details = tier.substring(colonIdx + 1).trim();
                      }
                      
                      // Don't split on dots -  just use the full details as salary
                      let salary = details;
                      let pos = '';

                      salary = salary.replace(/\s*-\s*/g, ' -  ').replace(/\s*–\s*/g, ' -  ');

                      return (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group flex flex-col justify-between">
                           <div>
                             <div className="flex items-center justify-between mb-4">
                               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                 <TrendingUp className="w-5 h-5" />
                               </div>
                               <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tier {idx + 1}</span>
                             </div>
                             <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight leading-snug"><TranslatedText as="span">{level}</TranslatedText></h4>
                             <div className="text-lg font-semibold text-blue-600 mb-4 tracking-tight"><TranslatedText as="span">{salary}</TranslatedText></div>
                           </div>
                           {pos && (
                             <div className="pt-4 border-t border-slate-100">
                               <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Typical Roles</p>
                               <p className="text-sm font-medium text-slate-700"><TranslatedText as="span">{pos}</TranslatedText></p>
                             </div>
                           )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {notes.length > 0 && (
                  <div className="mb-8 space-y-3">
                    {notes.map((note: string, nIdx: number) => {
                      // Remove "Note: " prefix if present
                      const noteText = note.replace(/^note:\s*/i, '');
                      // Split by semicolon and filter empty parts
                      const noteParts = noteText.split(';').map(part => part.trim()).filter(part => part);
                      
                      return (
                        <div key={nIdx} className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-xl flex gap-3 sm:gap-4 items-start shadow-sm">
                          <div className="mt-0.5 bg-blue-100 rounded-full p-1">
                            <Zap className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm sm:text-base text-blue-900 font-medium leading-relaxed space-y-2">
                            {noteParts.map((part, pIdx) => (
                              <p key={pIdx}>
                                <TranslatedText as="span">{part}</TranslatedText>
                              </p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {extraRows.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 sm:gap-5">
                    {extraRows.map((item: string, idx: number) => {
                      const hasColon = item.includes(':');
                      const colonIdx = item.indexOf(':');
                      const before = hasColon ? item.substring(0, colonIdx).trim() : item;
                      const after = hasColon ? item.substring(colonIdx + 1).trim() : '';
                      const extraIcons = [TrendingUp, BarChart3, Globe, Zap];
                      const IconComponent = extraIcons[idx % extraIcons.length];
                      return (
                        <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 transition-all">
                          <div className="flex items-start gap-3">
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {hasColon ? (
                                <>
                                  <span className="font-bold text-slate-900"><TranslatedText as="span">{before}</TranslatedText></span>
                                  <span className="font-normal text-slate-600">: <TranslatedText as="span">{after}</TranslatedText></span>
                                </>
                              ) : (
                                <span className="font-bold text-slate-900"><TranslatedText as="span">{item}</TranslatedText></span>
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          );
        }
 
        // ── where are the jobs / jobs ─────────────────────────────
        if (section.id === 'jobs') {
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
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {finalEntries.map(([type, items], idx) => {
                    const IconComponent = jobIcons[idx % jobIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 leading-snug pt-1"><TranslatedText as="span">{type}</TranslatedText></h4>
                        </div>
                        <ul className="space-y-3">
                          {items.map((it, i) => (
                            <li key={i} className="flex gap-3 items-start group/item">
                              <span className="text-blue-500 mt-0.5 text-lg font-bold">*</span>
                              <span className="text-sm sm:text-base text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">
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

        // ── institutions / study / locations ───────────────────────
        if (section.id === 'institutions' || section.id === 'locations' || section.id === 'study') {
          const groupedContent: Record<string, string[]> = {};
          
          const content = section.content || [];
          
          // Parse each line which may contain "Type: item1, item2, item3"
          content.forEach((item: string) => {
            const colonIndex = item.indexOf(":");
            if (colonIndex > -1) {
              const type = item.substring(0, colonIndex).trim();
              const contentStr = item.substring(colonIndex + 1).trim();
              
              // Split by comma or semicolon to get individual institutions
              const institutions = contentStr
                .split(/[,;]/)
                .map(i => i.trim())
                .filter(i => i);
              
              if (institutions.length > 0) {
                groupedContent[type] = institutions;
              }
            }
          });

          Object.keys(groupedContent).forEach(key => {
            if (groupedContent[key].length === 0) delete groupedContent[key];
          });
          
          const locIcons = [Building2, Globe, Monitor, MapPin, Award, Sparkles];

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Building2 className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {Object.entries(groupedContent).length > 0 ? (
                    Object.entries(groupedContent).map(([type, insts], idx) => {
                      const IconComponent = locIcons[idx % locIcons.length];
                      return (
                        <div key={idx} className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-9 sm:w-10 h-9 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                              <TranslatedText as="span">{type}</TranslatedText>
                            </h4>
                          </div>
                          <ul className="space-y-2 pl-2">
                            {insts.map((inst, i) => (
                               <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                                 <span className="text-blue-500 mt-0.5">•</span>
                                 <span><TranslatedText as="span">{inst}</TranslatedText></span>
                               </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-slate-500">No institutions data available</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        }

        // ── challenges ────────────────────────────────────────────────
        if (section.id === 'challenges') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <AlertTriangle className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-relaxed pb-8 sm:pb-10 md:pb-12 lg:pb-16 border-b-4 border-red-200">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const challengeIcons = [AlertTriangle, AlertCircle, Zap, Heart, Eye, Users];
                    const IconComponent = challengeIcons[idx % challengeIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc}</TranslatedText>
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

        // ── opportunities ─────────────────────────────────────────────
        if (section.id === 'opportunities') {
          const groupedContent: Record<string, string[]> = {};
          let currentGroup = 'General Roles';
          
          const content = section.content || [];
          content.forEach((item: string) => {
            const trimmed = item.trim();
            if (!trimmed) return;

            const colonIndex = trimmed.indexOf(':');
            // Case 1: "Category: Item 1, Item 2..."
            if (colonIndex > -1 && trimmed.length > 40) {
              const type = trimmed.substring(0, colonIndex).trim().replace(/:$/, '');
              const subItems = trimmed.substring(colonIndex + 1).split(/[,;]/).map(i => i.trim()).filter(i => i);
              if (!groupedContent[type]) groupedContent[type] = [];
              groupedContent[type].push(...subItems);
              currentGroup = type;
            } else {
              const lower = trimmed.toLowerCase();
              // Case 2: Explicit headers
              const isHeader = !trimmed.includes(':') && trimmed.split(' ').length <= 4 && 
                (
                  ["conventional", "emerging", "new-age", "remote", "entrepreneurship", "startup", "freelancing", "roles", "careers"].some(h => lower.includes(h)) ||
                  trimmed === trimmed.toUpperCase()
                );
              
              if (isHeader) {
                 // If it's a known header like "Conventional", clean it up
                 currentGroup = trimmed.replace(/:$/, '');
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
              } else {
                 // Case 3: List items
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
                 // Remove leading bullets (?, *, -, ?, etc.)
                 const cleaned = trimmed.replace(/^[•\-\*\?\s]+/, '');
                 if (cleaned) groupedContent[currentGroup].push(cleaned);
              }
            }
          });

          const finalEntries = Object.entries(groupedContent).filter(([_, items]) => items.length > 0);


          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 min-w-0">
                    <Briefcase className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-green-600 flex-shrink-0 mt-1" />
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-snug break-words">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                  {finalEntries.map(([type, opps], idx) => {
                    const oppIcons = [Briefcase, Rocket, Zap, Target, Globe, Building2];
                    const IconComponent = oppIcons[idx % oppIcons.length];
                    const colors = ["text-green-600", "text-blue-600", "text-purple-600", "text-orange-600", "text-emerald-600"];
                    const colorClass = colors[idx % colors.length];
                    const bgClass = colorClass.replace("text-", "bg-").replace("-600", "-50");
                    
                    if (opps.length === 0) return null;
                    
                    return (
                      <div key={idx} className="group bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
                        <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4 min-w-0">
                          <div className={`w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 ${bgClass} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                            <IconComponent className={`w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ${colorClass}`} />
                          </div>
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug break-words">
                            <TranslatedText as="span">{type}</TranslatedText>
                          </h4>
                        </div>
                        <ul className="space-y-1.5 sm:space-y-2 pl-0 flex-1 overflow-y-auto">
                          {opps.map((opp, i) => (
                            <li key={i} className="flex gap-1.5 sm:gap-2 items-start group/item text-slate-900 min-w-0">
                              <span className={`mt-0.5 font-bold text-xs sm:text-sm ${colorClass} flex-shrink-0`}>•</span>
                              <span className="text-xs sm:text-xs md:text-sm font-normal group-hover/item:text-slate-900 transition-colors leading-snug break-words">
                                <TranslatedText as="span">{opp}</TranslatedText>
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

        // ── future / trends / emerging ─────────────────────────────
        if (section.id === 'future' || section.id === 'trends' || section.id === 'emerging') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-14 md:py-16 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8 sm:mb-10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-relaxed pb-4 sm:pb-5 md:pb-6 border-b-4 border-purple-200">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-4 sm:pt-5 md:pt-6">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const trendIcons = [Zap, AlertCircle, Cloud, Lock, BarChart3, Sparkles, Globe, Rocket];
                    const IconComponent = trendIcons[idx % trendIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc}</TranslatedText>
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

        // ── scholarships ──────────────────────────────────────────────
        if (section.id === 'scholarships') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Award className="w-8 sm:w-10 h-8 sm:h-10 text-amber-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const colonIdx = item.indexOf(':');
                    let label = item;
                    let details = '';
                    if (colonIdx !== -1) {
                      label = item.substring(0, colonIdx).trim();
                      details = item.substring(colonIdx + 1).trim();
                    }
                    
                    const scholarshipIcons = [Award, Trophy, Lightbulb, Zap, Globe, BookOpen];
                    const IconComponent = scholarshipIcons[idx % scholarshipIcons.length];
                    
                    return (
                      <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{label}</TranslatedText>
                          </h4>
                        </div>
                        {colonIdx !== -1 && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{details}</TranslatedText>
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

        // ── certifications ────────────────────────────────────────────
        if (section.id === 'certifications') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Award className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const colonIdx = item.indexOf(':');
                    let label = item;
                    let details = '';
                    if (colonIdx !== -1) {
                      label = item.substring(0, colonIdx).trim();
                      details = item.substring(colonIdx + 1).trim();
                    }
                    
                    const certIcons = [Award, Trophy, Lightbulb, Zap, Globe, BookOpen];
                    const IconComponent = certIcons[idx % certIcons.length];
                    
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{label}</TranslatedText>
                          </h4>
                        </div>
                        {colonIdx !== -1 && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{details}</TranslatedText>
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

        // ── costs / investment ─────────────────────────────────────
        if (section.id === 'costs' || section.id === 'investment' || section.id === 'cost') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <CircleDollarSign className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const colonIdx = item.indexOf(':');
                    let label = item;
                    let details = '';
                    if (colonIdx !== -1) {
                      label = item.substring(0, colonIdx).trim();
                      details = item.substring(colonIdx + 1).trim();
                    }
                    
                    const costIcons: Record<string, any> = {
                      'government': Building2,
                      'private': Building,
                      'living': Home,
                      'additional': PlusCircle,
                      'preparation': BookOpen,
                      'duration': Clock,
                      'exam': FileText,
                      'coaching': GraduationCap,
                      'scholarship': Award,
                      'laptop': Monitor,
                      'fees': DollarSign,
                      'registration': FileText
                    };
                    
                    let IconComponent = CircleDollarSign;
                    const lowerLabel = label.toLowerCase();
                    for (const [key, icon] of Object.entries(costIcons)) {
                      if (lowerLabel.includes(key)) {
                        IconComponent = icon;
                        break;
                      }
                    }

                    return (
                      <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all group flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform flex-shrink-0">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-snug break-words"><TranslatedText as="span">{label}</TranslatedText></h4>
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mt-1">Estimate</span>
                            </div>
                          </div>
                          <div className="flex gap-3 sm:gap-4">
                            <div className="w-10 flex-shrink-0" />
                            <div className="text-[19.8px] text-slate-700 mb-4 tracking-tight flex-1 min-w-0 break-words"><TranslatedText as="span">{details}</TranslatedText></div>
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

        // Generic section for other content
        return (
          <section key={sectionIdx} className={`py-20 px-4 sm:px-8 ${sectionIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  <TranslatedText as="span">{section.title}</TranslatedText>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600">
                  <TranslatedText as="span">{section.description}</TranslatedText>
                </p>
              </div>

              <div className="space-y-4">
                {section.content?.map((item: string, idx: number) => {
                  // Clean trailing colon artifacts like "text.:" or "text.:"
                  const cleaned = item.replace(/\s*:\s*$/, '').trim();
                  const hasColon = cleaned.includes(':');
                  
                  // REQUIREMENT: Only apply bold formatting if there IS a colon
                  // Items WITHOUT colons should be rendered as plain text without any bold
                  if (hasColon) {
                    // Item WITH colon: Bold before colon, normal after
                    const colonIdx = cleaned.indexOf(':');
                    const beforeColon = cleaned.substring(0, colonIdx).trim();
                    const afterColon = cleaned.substring(colonIdx + 1).trim();
                    
                    return (
                      <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900"><TranslatedText as="span">{beforeColon}</TranslatedText>: </span>
                          <TranslatedText as="span">{afterColon}</TranslatedText>
                        </p>
                      </div>
                    );
                  } else {
                    // Item WITHOUT colon: Plain text, NO bold
                    return (
                      <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <TranslatedText as="span">{cleaned}</TranslatedText>
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Cost Breakdown Section */}
      {category !== 'agriculture' && !guideSections.some(s => s.id === 'costs' || s.id === 'cost') && (
        <section className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
          <CostBreakdown
            title="What Will It Cost?"
            subtitle="Complete financial breakdown for your career journey"
            careerSlug={career}
            categorySlug={category}
          />
        </section>
      )}


      {/* Videos Section */}
      {videos && videos.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                <TranslatedText>Learn More Through Videos</TranslatedText>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                <TranslatedText>Watch expert insights and student experiences</TranslatedText>
              </p>
            </div>

            <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl mb-6 sm:mb-7 md:mb-8 bg-white border border-slate-100">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videos[currentVideoIndex]?.url}
                  title={videos[currentVideoIndex]?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-7 md:mb-8">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                <TranslatedText>{videos[currentVideoIndex]?.title}</TranslatedText>
              </h3>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-slate-500 font-medium">
                <TranslatedText as="span">{`Video ${currentVideoIndex + 1} of ${videos.length}`}</TranslatedText>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <button
                onClick={() => setCurrentVideoIndex((p) => (p -  1 + videos.length) % videos.length)}
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:scale-95"
              >
                ← <TranslatedText>Previous</TranslatedText>
              </button>

              <div className="flex gap-1.5 sm:gap-2 md:gap-2.5">
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`rounded-full transition-all h-2.5 sm:h-3 md:h-3.5 ${
                      currentVideoIndex === idx ? 'w-6 sm:w-8 md:w-10 bg-blue-600' : 'w-2.5 sm:w-3 md:w-3.5 bg-blue-600/40'
                    }`}
                    aria-label={`Go to video ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentVideoIndex((p) => (p + 1) % videos.length)}
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 active:scale-95"
              >
                <TranslatedText>Next</TranslatedText> →
              </button>
            </div>
          </div>
        </section>
      )}

    

      <Footer />
    </div>
  );
}
