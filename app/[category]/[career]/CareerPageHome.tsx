'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {
  Brain,
  Zap,
  Scale,
  Palette,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Fingerprint,
  Lightbulb,
  Compass,
  Briefcase,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
  Monitor,
  Clock,
} from 'lucide-react';
import { CostBreakdown } from '@/app/components/CostBreakdown';

interface CareerPageHomeProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  pageData?: any;
  imageUrl?: string;
  videos?: any[];
}

export function CareerPageHome({
  category,
  career,
  careerName,
  categoryName,
  pageData,
  imageUrl,
  videos = [],
}: CareerPageHomeProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Extract data from pageData
  const heroData = pageData?.whyCards?.[0] || {};
  const guideSections = pageData?.guideSections || [];
  const quickFacts = pageData?.quickFacts || [];

  // Day in life data
  const dayInLife = guideSections.find((s: any) => s.id === 'dayinlife')?.content || [];

  // Skills data
  const skillsSection = guideSections.find((s: any) => s.id === 'skills');
  const skills = skillsSection?.content?.map((skill: string, idx: number) => ({
    title: skill.split(':')[0] || `Skill ${idx + 1}`,
    description: skill.split(':')[1] || skill,
  })) || [];

  // Education path
  const educationSection = guideSections.find((s: any) => s.id === 'education');
  const educationPath = educationSection?.content?.map((edu: string, idx: number) => ({
    stage: `STAGE ${String(idx + 1).padStart(2, '0')}`,
    title: edu.split(':')[0] || `Stage ${idx + 1}`,
    description: edu.split(':')[1] || edu,
  })) || [];

  // Salary data
  const salarySection = guideSections.find((s: any) => s.id === 'salary');
  const salaryTiers = salarySection?.content?.map((salary: string, idx: number) => ({
    level: salary.split('|')[0] || `Level ${idx + 1}`,
    salary: salary.split('|')[1] || '₹0 LPA',
    description: salary.split('|')[2] || 'Career level',
    percentage: ((idx + 1) / 3) * 100,
  })) || [];

  // Employers data
  const employersSection = guideSections.find((s: any) => s.id === 'employers');
  const employers = employersSection?.content?.map((emp: string) => {
    const [name, companies] = emp.split(':');
    return { name: name?.trim() || 'Employers', companies: companies?.trim() || '' };
  }) || [];

  // Challenges data
  const challengesSection = guideSections.find((s: any) => s.id === 'challenges');
  const challenges = challengesSection?.content?.map((challenge: string, idx: number) => ({
    title: challenge.split(':')[0] || `Challenge ${idx + 1}`,
    description: challenge.split(':')[1] || challenge,
    icon: idx % 2 === 0 ? AlertTriangle : TrendingUp,
  })) || [];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md selection:bg-blue-100 selection:text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              {categoryName}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {careerName}<br />
              <span className="text-blue-600">Career Path</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {heroData.description || `Explore the comprehensive career path for ${careerName}. Get personalized guidance, mentorship, and a clear roadmap to success.`}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore This Career
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/career-path"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Compare Careers
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4 pt-8 border-t border-slate-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                Trusted by 10,000+ students
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imageUrl || 'https://via.placeholder.com/600x400'}
                alt={careerName}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>

            {/* Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg border border-slate-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Career Growth</div>
                  <div className="text-xl font-bold text-slate-900">High Demand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Career Overview</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the fundamentals of {careerName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData?.whyCards?.slice(0, 3).map((card: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in Life Section */}
      {dayInLife.length > 0 && (
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">A Day in the Life</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Real workflow and daily responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dayInLife.slice(0, 4).map((item: string, idx: number) => {
              const [time, title, desc] = item.split('|');
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{time?.trim() || `Time ${idx + 1}`}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{title?.trim() || 'Activity'}</p>
                  <p className="text-xs text-slate-500">{desc?.trim() || 'Description'}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Required Skills</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Core competencies for success in this career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.slice(0, 6).map((skill: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h4>
                    <p className="text-sm text-slate-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Education Path Section */}
      {educationPath.length > 0 && (
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Educational Path</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Step-by-step journey to build your career
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-0">
              {educationPath.slice(0, 4).map((stage: any, idx: number) => (
                <div key={idx} className="flex gap-6 pb-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
                  <div
                    className={`absolute left-[-11px] top-0 w-5 h-5 rounded-full border-4 border-white ${
                      idx === 0 ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  ></div>
                  <div>
                    <span className={`text-label-sm font-bold ${idx === 0 ? 'text-blue-600' : 'text-slate-500'}`}>
                      {stage.stage}
                    </span>
                    <h4 className="font-bold text-slate-900 text-lg">{stage.title}</h4>
                    <p className="text-slate-600 text-sm">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Salary Section */}
      {salaryTiers.length > 0 && (
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Salary Market</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Compensation across different career levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salaryTiers.slice(0, 3).map((tier: any, idx: number) => (
              <div
                key={idx}
                className={`p-8 rounded-xl text-center border shadow-sm transition-all ${
                  idx === 1
                    ? 'bg-gradient-to-br from-white to-blue-50 border-blue-200 md:scale-105 md:z-10'
                    : 'bg-white border-slate-200'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    Most Common
                  </div>
                )}
                <p className="text-slate-500 font-bold mb-2 text-sm">{tier.level}</p>
                <h4 className="text-3xl font-bold text-blue-600 mb-4">{tier.salary}</h4>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full"
                    style={{ width: `${tier.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400 mt-4">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Employers Section */}
      {employers.length > 0 && (
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Top Employers</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Companies actively hiring for this role
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employers.slice(0, 4).map((employer: any, idx: number) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-blue-300 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="text-2xl font-bold text-slate-800 text-center">{employer.name}</div>
                <p className="text-xs text-slate-500 text-center line-clamp-2">{employer.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Cost Breakdown Section */}
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <CostBreakdown
          title="What Will It Cost?"
          subtitle="Complete financial breakdown for your career journey"
          careerSlug={career}
          categorySlug={category}
        />
      </section>

      {/* Challenges Section */}
      {challenges.length > 0 && (
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Realistic Challenges</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              What to expect on this career path
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {challenges.slice(0, 2).map((challenge: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{challenge.title}</h4>
                    <p className="text-slate-600 text-sm">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" /> Pro-Tip
              </h4>
              <p className="text-slate-700 leading-relaxed">
                Success in this field requires continuous learning and adaptability. Stay updated with industry trends and invest in skill development throughout your career.
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Videos Section */}
      {videos && videos.length > 0 && (
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Learn More Through Videos</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              Watch expert insights and student experiences
            </p>
          </div>

          <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl mb-8 bg-white border border-slate-100">
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

          <div className="text-center mb-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-800">
              {videos[currentVideoIndex]?.title}
            </h3>
            <p className="text-xs sm:text-sm mt-2 text-slate-500 font-medium">
              Video {currentVideoIndex + 1} of {videos.length}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
            <button
              onClick={() => setCurrentVideoIndex((p) => (p -  1 + videos.length) % videos.length)}
              className="px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
            >
              ← Previous
            </button>

            <div className="flex gap-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className={`rounded-full transition-all h-3 sm:h-3.5 ${
                    currentVideoIndex === idx ? 'w-8 sm:w-10 bg-blue-600' : 'w-3 sm:w-3.5 bg-blue-600/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentVideoIndex((p) => (p + 1) % videos.length)}
              className="px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700"
            >
              Next →
            </button>
          </div>
        </div>
      </section>
      )}

     
      <Footer />
    </div>
  );
}
