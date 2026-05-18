'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavbarWrapper from '@/app/components/NavbarWrapper';
import Footer from '@/app/components/Footer';
import { CostBreakdown } from '@/app/components/CostBreakdown';
import { DynamicIcon } from '@/app/components/DynamicIcon';
import { TranslatedText } from '@/app/components/TranslatedText';
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
  Coffee,
  Code,
  PresentationIcon,
  Terminal,
  Zap,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  BarChart3,
  Monitor,
} from 'lucide-react';

interface CareerPageClientNewProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  careerDetail: any;
  categoryData: any;
  pageData?: any;
  imageUrl?: string;
  videos?: any[];
}

export function CareerPageClientNew({
  category,
  career,
  careerName,
  categoryName,
  careerDetail,
  categoryData,
  pageData,
  imageUrl,
  videos = [],
}: CareerPageClientNewProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'daily-life', label: 'Daily Life', icon: Clock },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'salary', label: 'Salary', icon: DollarSign },
    { id: 'employers', label: 'Employers', icon: Building2 },
    { id: 'costs', label: 'Costs', icon: BarChart3 },
    { id: 'trends', label: 'Trends', icon: TrendingUp },
    { id: 'challenges', label: 'Challenges', icon: AlertTriangle },
    { id: 'videos', label: 'Videos', icon: Monitor },
    { id: 'next-steps', label: 'Next Steps', icon: CheckCircle },
  ];

  const dayInLife = [
    {
      time: '09:00 AM',
      title: 'Morning Briefing',
      description: 'Reviewing data pipelines and aligning with product managers on key business metrics for the day.',
      icon: Coffee,
    },
    {
      time: '11:00 AM',
      title: 'Exploratory Data Analysis (EDA)',
      description: 'Cleaning messy datasets using Python/Pandas and identifying patterns or anomalies in user behavior.',
      icon: Code,
    },
    {
      time: '02:00 PM',
      title: 'Model Building & Training',
      description: 'Developing Machine Learning models (Scikit-Learn, PyTorch) and tuning hyperparameters for better accuracy.',
      icon: Zap,
    },
    {
      time: '04:30 PM',
      title: 'Stakeholder Presentation',
      description: 'Translating complex model findings into actionable business slides and visualizations for non-technical leadership.',
      icon: PresentationIcon,
    },
  ];

  const skills = [
    {
      category: 'Programming',
      icon: Terminal,
      color: 'bg-blue-50',
      textColor: 'text-blue-900',
      items: ['Python (Advanced)', 'SQL & NoSQL', 'R Programming'],
    },
    {
      category: 'Mathematics',
      icon: Zap,
      color: 'bg-green-50',
      textColor: 'text-green-900',
      items: ['Statistics & Probability', 'Linear Algebra', 'Calculus'],
    },
    {
      category: 'Soft Skills',
      icon: MessageSquare,
      color: 'bg-orange-50',
      textColor: 'text-orange-900',
      items: ['Data Storytelling', 'Critical Thinking', 'Business Acumen'],
    },
  ];

  const educationPath = [
    {
      stage: 'STAGE 01',
      title: 'Schooling (Class 10-12)',
      description: 'Focus on PCM (Physics, Chemistry, Maths) or Statistics. Computer Science as an elective is highly recommended.',
      active: true,
    },
    {
      stage: 'STAGE 02',
      title: 'Undergraduate (B.Tech/B.Sc)',
      description: 'Degree in Computer Science, Data Science, Statistics, or Math. Gain core programming skills.',
      active: false,
    },
    {
      stage: 'STAGE 03',
      title: 'Post-Grad / Specialization',
      description: 'M.Tech or specialized PG diplomas in AI/ML. Build a strong portfolio on Kaggle or GitHub.',
      active: false,
    },
    {
      stage: 'STAGE 04',
      title: 'PhD / Research (Optional)',
      description: 'For high-end R&D roles at companies like Google DeepMind or Microsoft Research.',
      active: false,
    },
  ];

  const salaryTiers = [
    {
      level: 'Entry Level',
      salary: '₹6-12 LPA',
      description: 'Fresh graduates with strong projects',
      percentage: 25,
    },
    {
      level: 'Mid Career (5-8 yrs)',
      salary: '₹18-35 LPA',
      description: 'Specialists & Senior Data Scientists',
      percentage: 66,
      featured: true,
    },
    {
      level: 'Lead / Director',
      salary: '₹45+ LPA',
      description: 'Decision makers & Architecture leads',
      percentage: 100,
    },
  ];

  const employers = [
    { name: 'Big Tech', companies: 'Google, Amazon, Microsoft, Meta' },
    { name: 'Finance', companies: 'J.P. Morgan, Goldman Sachs, HSBC' },
    { name: 'Consulting', companies: 'McKinsey, BCG, Deloitte, KPMG' },
    { name: 'Startups', companies: 'Swiggy, Zomato, Razorpay, CRED' },
  ];

  const challenges = [
    {
      title: 'Data Cleaning Fatigue',
      description: '80% of a Data Scientist\'s time is spent cleaning messy data rather than building cool models.',
      icon: AlertTriangle,
    },
    {
      title: 'Constant Upskilling',
      description: 'New frameworks and research papers come out weekly; you must never stop studying.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md">
      <NavbarWrapper />

      <div className="flex max-w-[1440px] mx-auto pt-20">
        {/* Sidebar Navigation -  Hidden on mobile */}
        <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-slate-200 bg-slate-50 flex-col gap-1 p-4 overflow-y-auto z-40">
          <div className="mb-6 px-2">
            <h3 className="font-h2 text-lg text-primary mb-1 truncate"><TranslatedText as="span">{careerName}</TranslatedText></h3>
            <p className="text-xs text-on-surface-variant font-body-md"><TranslatedText>Career Guide</TranslatedText></p>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-3 p-3 transition-all text-sm font-h3 rounded-lg whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-primary-fixed text-primary border-l-4 border-primary font-bold'
                      : 'text-on-surface-variant hover:bg-slate-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="hidden xl:inline"><TranslatedText>{item.label}</TranslatedText></span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 bg-surface-container-lowest min-h-screen w-full">
          {/* Hero Section */}
          <section className="relative mb-12 sm:mb-16 md:mb-20 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[500px] flex items-center p-4 sm:p-8 md:p-16">
            <div className="absolute inset-0 z-0">
              <img
                src={imageUrl || 'https://via.placeholder.com/1200x600'}
                alt={careerName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-2xl w-full">
              <span className="bg-secondary-container text-on-secondary-container px-3 sm:px-4 py-1 rounded-full text-xs sm:text-label-sm font-h3 mb-3 sm:mb-4 inline-block">
                <TranslatedText>Trending Career</TranslatedText>
              </span>
              <h1 className="font-h1 text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                <TranslatedText as="span">{careerName}</TranslatedText>
              </h1>
              <p className="text-blue-100 font-body-md sm:font-body-lg mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                <TranslatedText>{pageData?.whyCards?.[0]?.description || 'Explore this exciting career path with comprehensive insights and guidance.'}</TranslatedText>
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="glass-card p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-slate-500 text-[10px] sm:text-xs font-h3 uppercase tracking-wider mb-1"><TranslatedText>Avg. Salary</TranslatedText></p>
                  <p className="text-primary font-bold text-lg sm:text-xl font-h3">₹12 -  45 LPA</p>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-slate-500 text-[10px] sm:text-xs font-h3 uppercase tracking-wider mb-1"><TranslatedText>Growth rate</TranslatedText></p>
                  <p className="text-secondary font-bold text-lg sm:text-xl font-h3">36% YoY</p>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-slate-500 text-[10px] sm:text-xs font-h3 uppercase tracking-wider mb-1"><TranslatedText>Difficulty</TranslatedText></p>
                  <p className="text-tertiary font-bold text-lg sm:text-xl font-h3"><TranslatedText>High</TranslatedText></p>
                </div>
              </div>
            </div>
          </section>

          {/* 01. Career Overview */}
          <section id="overview" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">01</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Career Overview</TranslatedText></h2>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-primary shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="space-y-4">
                  <p className="font-body-md sm:font-body-lg text-on-surface text-sm sm:text-base">
                    <TranslatedText>
                      {pageData?.guideSections?.[0]?.content?.[0] ||
                        'Data Science is the interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.'}
                    </TranslatedText>
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {pageData?.whyCards?.slice(0, 3).map((card: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base"><TranslatedText as="span">{card.title}</TranslatedText></span>
                      </li>
                    )) || (
                      <>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base"><TranslatedText>Bridging the gap between business strategy and raw technology.</TranslatedText></span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base"><TranslatedText>Utilizing Machine Learning to predict future outcomes.</TranslatedText></span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base"><TranslatedText>High demand across Finance, Healthcare, and E-commerce.</TranslatedText></span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="rounded-lg sm:rounded-xl overflow-hidden h-48 sm:h-64 shadow-inner bg-slate-100">
                  <img
                    src={imageUrl || 'https://via.placeholder.com/600x400'}
                    alt={careerName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 02. Day in the Life */}
          <section id="daily-life" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">02</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">A Day in the Life</TranslatedText></h2>
            </div>

            <div className="space-y-4 sm:space-y-6 relative before:absolute before:left-[9px] sm:before:left-[19px] before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
              {dayInLife.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative pl-8 sm:pl-12 group">
                    <div className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h4 className="font-h3 text-on-surface mb-1 text-sm sm:text-base">
                      {item.time} -  <TranslatedText as="span">{item.title}</TranslatedText>
                    </h4>
                    <p className="text-on-surface-variant text-xs sm:text-sm"><TranslatedText>{item.description}</TranslatedText></p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 03. Core Skills */}
          <section id="skills" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">03</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Core Skills</TranslatedText></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skillGroup, idx) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div
                    key={idx}
                    className={`${skillGroup.color} p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${skillGroup.color} text-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-h3 font-bold mb-2 sm:mb-3 text-sm sm:text-base"><TranslatedText as="span">{skillGroup.category}</TranslatedText></h4>
                    <ul className="text-xs sm:text-sm space-y-1.5 sm:space-y-2 text-on-surface-variant">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          <TranslatedText as="span">{item}</TranslatedText>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 04. Educational Path */}
          <section id="education" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">04</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Educational Path</TranslatedText></h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col gap-0">
                {educationPath.map((stage, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-6 pb-6 sm:pb-8 border-l-2 border-slate-200 ml-2 sm:ml-3 pl-4 sm:pl-8 relative">
                    <div
                      className={`absolute left-[-7px] sm:left-[-11px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-white ${
                        stage.active ? 'bg-primary' : 'bg-slate-200'
                      }`}
                    ></div>
                    <div>
                      <span className={`text-xs sm:text-label-sm font-bold ${stage.active ? 'text-primary' : 'text-slate-500'}`}>
                        <TranslatedText as="span">{stage.stage}</TranslatedText>
                      </span>
                      <h4 className="font-h3 text-on-surface text-sm sm:text-base"><TranslatedText as="span">{stage.title}</TranslatedText></h4>
                      <p className="text-on-surface-variant text-xs sm:text-sm"><TranslatedText>{stage.description}</TranslatedText></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 05. Salary Market */}
          <section id="salary" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">05</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Salary Market</TranslatedText></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {salaryTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl text-center border shadow-sm transition-all ${
                    tier.featured
                      ? 'bg-gradient-to-br from-white to-primary-fixed border-primary-fixed-dim shadow-md lg:scale-105 lg:z-10'
                      : 'bg-gradient-to-br from-white to-blue-50 border-blue-100'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold uppercase tracking-widest">
                      <TranslatedText>Most Common</TranslatedText>
                    </div>
                  )}
                  <p className="text-slate-500 font-h3 mb-2 text-xs sm:text-sm"><TranslatedText as="span">{tier.level}</TranslatedText></p>
                  <h4 className="text-2xl sm:text-3xl font-h2 text-primary mb-3 sm:mb-4">{tier.salary}</h4>
                  <div className="w-full bg-slate-200 h-1.5 sm:h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: `${tier.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-2 sm:mt-4"><TranslatedText>{tier.description}</TranslatedText></p>
                </div>
              ))}
            </div>
          </section>

          {/* 06. Top Employers */}
          <section id="employers" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">06</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Top Employers</TranslatedText></h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {employers.map((employer, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-primary transition-colors"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 text-center"><TranslatedText as="span">{employer.name}</TranslatedText></div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 text-center line-clamp-2"><TranslatedText>{employer.companies}</TranslatedText></p>
                </div>
              ))}
            </div>
          </section>

          {/* 07. Cost of Education */}
          <section id="costs" className="mb-20 scroll-mt-20">
            <CostBreakdown
              title="What Will It Cost?"
              subtitle="Complete financial breakdown for your career journey"
              careerSlug={career}
              categorySlug={category}
            />
          </section>

          {/* 08. Future Trends */}
          <section id="trends" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">08</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Future Trends</TranslatedText></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="relative group overflow-hidden rounded-lg sm:rounded-2xl aspect-video">
                <img
                  src={imageUrl || 'https://via.placeholder.com/600x400'}
                  alt="Future trends"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                  <h4 className="text-white font-h3 mb-1 sm:mb-2 text-sm sm:text-base"><TranslatedText>Generative AI & LLMs</TranslatedText></h4>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    <TranslatedText>Shift from traditional ML to building applications using Foundation Models and Prompt Engineering.</TranslatedText>
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-slate-100 flex items-start gap-3 sm:gap-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h5 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1"><TranslatedText>Edge Computing</TranslatedText></h5>
                    <p className="text-xs sm:text-sm text-on-surface-variant">
                      <TranslatedText>Running complex AI models directly on mobile devices and IoT sensors rather than the cloud.</TranslatedText>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-slate-100 flex items-start gap-3 sm:gap-4">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h5 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1"><TranslatedText>AI Ethics & Governance</TranslatedText></h5>
                    <p className="text-xs sm:text-sm text-on-surface-variant">
                      <TranslatedText>Rising demand for "Responsible AI" experts to ensure algorithms are fair, unbiased, and safe.</TranslatedText>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-slate-100 flex items-start gap-3 sm:gap-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h5 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1"><TranslatedText>AutoML Integration</TranslatedText></h5>
                    <p className="text-xs sm:text-sm text-on-surface-variant">
                      <TranslatedText>Automating the data science pipeline, shifting focus from coding to problem formulation.</TranslatedText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 09. Challenges */}
          <section id="challenges" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">09</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Realistic Challenges</TranslatedText></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="space-y-4 sm:space-y-6">
                {challenges.map((challenge, idx) => {
                  const IconComponent = challenge.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 sm:gap-4">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-tertiary flex-shrink-0 mt-0.5 sm:mt-1" />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base"><TranslatedText as="span">{challenge.title}</TranslatedText></h4>
                        <p className="text-on-surface-variant text-xs sm:text-sm"><TranslatedText>{challenge.description}</TranslatedText></p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 sm:p-8 rounded-lg sm:rounded-2xl">
                <h4 className="font-h3 font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> <TranslatedText>Pro-Tip</TranslatedText>
                </h4>
                <p className="font-body-md opacity-90 leading-relaxed text-xs sm:text-sm">
                  <TranslatedText>"Communication is often harder than the math. If you can't explain why your model matters to a CEO, the model will never see the light of day."</TranslatedText>
                </p>
              </div>
            </div>
          </section>

          {/* 10. Videos */}
          {videos && videos.length > 0 && (
          <section id="videos" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">10</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Learn More Through Videos</TranslatedText></h2>
            </div>

            <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl mb-6 sm:mb-8 bg-white border border-slate-100">
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

            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800 line-clamp-2">
                <TranslatedText>{videos[currentVideoIndex]?.title}</TranslatedText>
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 text-slate-500 font-medium">
                <TranslatedText>Video</TranslatedText> {currentVideoIndex + 1} <TranslatedText>of</TranslatedText> {videos.length}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <button
                onClick={() => setCurrentVideoIndex((p) => (p -  1 + videos.length) % videos.length)}
                className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-white text-primary border-2 border-primary hover:bg-primary/5"
              >
                ← <TranslatedText>Previous Video</TranslatedText>
              </button>

              <div className="flex gap-1.5 sm:gap-2">
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`rounded-full transition-all h-2.5 sm:h-3 md:h-3.5 ${
                      idx === currentVideoIndex ? 'w-6 sm:w-8 md:w-10 bg-primary' : 'w-2.5 sm:w-3 md:w-3.5 bg-primary/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentVideoIndex((p) => (p + 1) % videos.length)}
                className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-primary text-white border-2 border-primary hover:bg-primary/90"
              >
                <TranslatedText>Next Video</TranslatedText> →
              </button>
            </div>
          </section>
          )}

          {/* 11. Next Steps */}
          <section id="next-steps" className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-h1 text-outline-variant/30">11</span>
              <h2 className="font-h2 text-primary text-2xl sm:text-3xl md:text-4xl"><TranslatedText as="span">Start Today</TranslatedText></h2>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-2xl lg:rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h3 className="font-h2 mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl"><TranslatedText>Your Checklist</TranslatedText></h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      'Master Python Basics (Variables, Loops, Functions)',
                      'Learn SQL to query databases',
                      'Complete a Linear Regression project',
                      'Open a Kaggle account and join a competition',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                            idx === 0
                              ? 'border-primary bg-primary/10'
                              : 'border-slate-300'
                          }`}
                        >
                          {idx === 0 && <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />}
                        </div>
                        <span className="font-medium text-sm sm:text-base"><TranslatedText as="span">{item}</TranslatedText></span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 sm:mt-8 md:mt-10 bg-primary text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-h3 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-sm sm:text-base">
                    <TranslatedText>Download PDF Guide</TranslatedText>
                  </button>
                </div>

                <div className="bg-slate-50 p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-dashed border-slate-300">
                  <h5 className="font-bold text-center mb-4 sm:mb-6 text-sm sm:text-base"><TranslatedText>Recommended First Course</TranslatedText></h5>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm flex gap-3 sm:gap-4 items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded text-primary flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                        ML
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-xs sm:text-sm line-clamp-1"><TranslatedText>Machine Learning Specialization</TranslatedText></p>
                        <p className="text-[10px] sm:text-xs text-slate-500"><TranslatedText>by Andrew Ng (Coursera)</TranslatedText></p>
                      </div>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm flex gap-3 sm:gap-4 items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded text-secondary flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                        SQL
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-xs sm:text-sm line-clamp-1"><TranslatedText>SQL for Data Science</TranslatedText></p>
                        <p className="text-[10px] sm:text-xs text-slate-500"><TranslatedText>Mode Analytics (Free)</TranslatedText></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 md:pt-10 border-t border-slate-200 text-center text-slate-400 text-xs sm:text-sm pb-20 sm:pb-24">
            <p><TranslatedText>© 2024 JeetLearnings. Expert-curated career pathways for modern students.</TranslatedText></p>
          </footer>
        </main>
      </div>

      <Footer />

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .scroll-mt-20 {
          scroll-margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
