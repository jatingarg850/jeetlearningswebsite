'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavbarWrapper from '@/app/components/NavbarWrapper';
import Footer from '@/app/components/Footer';
import { useTranslatedContent } from '@/app/hooks/useTranslatedContent';
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
} from 'lucide-react';

export default function Home() {
  // Translation hook for all text
  const t = useTranslatedContent;

  const trendingCareers = [
    {
      id: 1,
      title: 'Data Scientist',
      description: "Scaling intelligence for Bharat's fintech revolution.",
      salary: '₹8L -  ₹25L',
      status: 'HIGH DEMAND',
      statusColor: 'bg-emerald-100 text-emerald-900',
      icon: Brain,
    },
    {
      id: 2,
      title: 'EV Engineer',
      description: 'Designing sustainable mobility for a billion people.',
      salary: '₹6L -  ₹18L',
      status: 'EMERGING',
      statusColor: 'bg-blue-100 text-blue-900',
      icon: Zap,
    },
    {
      id: 3,
      title: 'FinTech Lawyer',
      description: 'Navigating the new digital legal landscapes.',
      salary: '₹12L -  ₹40L',
      status: 'TOP TIER',
      statusColor: 'bg-orange-100 text-orange-900',
      icon: Scale,
    },
    {
      id: 4,
      title: 'Product Designer',
      description: 'Crafting digital experiences for a mobile-first nation.',
      salary: '₹7L -  ₹22L',
      status: 'CORE ROLE',
      statusColor: 'bg-emerald-100 text-emerald-900',
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md selection:bg-blue-100 selection:text-slate-900 overflow-x-hidden">
      <NavbarWrapper />

      {/* Clean Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              {t('Career Guidance Platform')}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('Find Your Path.')} <br />
              <span className="text-blue-600">{t('Build Your Future.')}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {t('Discover the right career for you with our comprehensive 16-section career architecture. Get personalized guidance, mentorship, and a clear roadmap to success.')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/career-path"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('Explore Careers')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Proof */}
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
                {t('Trusted by 10,000+ students')}
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/hero-student.png"
                alt="Career Path Student"
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
                  <div className="text-xs text-slate-500 font-semibold">Career Match Score</div>
                  <div className="text-xl font-bold text-slate-900">98.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('How It Works')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              {t('A structured approach to career planning that actually works.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('16-Section Architecture')}</h3>
                  <p className="text-slate-600">
                    {t('Our proprietary framework maps every phase from academic foundation to industry leadership.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Expert Mentorship')}</h3>
                  <p className="text-slate-600">
                    {t('Connect with industry leaders who have walked the path you aspire to take.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Skill Gap Analysis')}</h3>
                  <p className="text-slate-600">
                    {t('Identify exactly what skills you need to develop to reach your career goals.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Careers Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('Trending Careers')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              {t('High-growth opportunities in 2024-25 based on real market data.')}
            </p>
          </div>

          {/* Career Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCareers.map((career, idx) => {
              const IconComponent = career.icon;
              return (
                <div
                  key={career.id}
                  className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{t(career.title)}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">{t(career.description)}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="font-bold text-blue-600">{career.salary}</div>
                    <div className={`px-2 py-1 ${career.statusColor} text-xs font-semibold rounded-full`}>
                      {t(career.status)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* Resources & Support Section */}
      <section className="py-20 bg-slate-50 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('Resources & Support')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              {t('Get entrance exam guidance, education news, blog updates, and expert counselling support in one place.')}
            </p>
          </div>

          {/* DMIT Section */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12">
                {/* Left Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{t('Assessment Tool')}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-4">{t('Dermatoglyphics Multiple Intelligence Test')}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {t('DMIT maps an individual\'s innate potential by analyzing fingerprint ridge patterns, based on the biological link between fingerprint and brain development in the embryonic stage.')}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900">{t('The Science Behind DMIT')}</h4>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{t('During the 13th to 21st week of gestation, fingerprints and the neocortex develop from the same ectoderm layer')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{t('DMIT uses this biological timeline to interpret likely cognitive patterns')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{t('Biological link between ridges and brain lobe development')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{t('Integrates neuroscience, genetics, psychology, and embryology')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{t('Focuses on inborn tendencies rather than acquired marks')}</span>
                      </li>
                    </ul>
                  </div>

                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {t('Book DMIT Counselling')}
                  </button>
                </div>

                {/* Right Features */}
                <div className="space-y-6">
                  <h4 className="font-bold text-slate-900 text-lg">{t('What the Report Highlights')}</h4>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Fingerprint className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">{t('Fingerprint Analysis')}</h5>
                          <p className="text-sm text-slate-600">{t('Unique patterns reveal your cognitive blueprint and innate potential.')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">{t('Brain Mapping')}</h5>
                          <p className="text-sm text-slate-600">{t('Understand which brain lobes are naturally dominant in your thinking.')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">{t('Multiple Intelligence')}</h5>
                          <p className="text-sm text-slate-600">{t('Discover your strengths across linguistic, logical, spatial, and more.')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-3">
                        <Compass className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">{t('Career Alignment')}</h5>
                          <p className="text-sm text-slate-600">{t('Match your innate talents with ideal career paths for long-term success.')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-lg">
                    <h5 className="font-bold text-slate-900 mb-3">{t('Practical Utility Across Life Stages')}</h5>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><span className="font-semibold text-slate-900">{t('For Students:')}</span> {t('Choose study methods and academic streams that fit natural cognitive style.')}</li>
                      <li><span className="font-semibold text-slate-900">{t('For Parents:')}</span> {t('Personalize communication and talent nurturing based on behavior profile.')}</li>
                      <li><span className="font-semibold text-slate-900">{t('For Adults:')}</span> {t('Improve self-awareness, work-role alignment, and stress-response planning.')}</li>
                      <li><span className="font-semibold text-slate-900">{t('For Organizations:')}</span> {t('Support role-fit, team balance, and performance coaching decisions.')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Psychometric Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12">
                {/* Left Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{t('Comprehensive Assessment')}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-4">{t('Psychometric Analysis Tests')}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {t('Psychometric assessments use standardized methods to measure behavior, aptitude, personality, and cognitive ability so students and professionals can make clearer academic and career decisions.')}
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Aptitude Tests')}</h5>
                      <p className="text-sm text-slate-600 mb-2">{t('Evaluate natural capacity to learn and solve new challenges through numerical, verbal, logical, and perceptual tasks')}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• {t('Career-stream and subject alignment')}</li>
                        <li>• {t('Strength and weakness mapping')}</li>
                        <li>• {t('Future role-fit prediction')}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-600 pl-4">
                      <h5 className="font-bold text-slate-900 mb-2">{t('IQ Assessments')}</h5>
                      <p className="text-sm text-slate-600 mb-2">{t('Measure logical reasoning, processing speed, working memory, and visual-spatial problem-solving for high-demand learning paths')}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• {t('Cognitive benchmarking by age group')}</li>
                        <li>• {t('Academic acceleration planning')}</li>
                        <li>• {t('Role suitability in technical domains')}</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-4">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Personality Tests')}</h5>
                      <p className="text-sm text-slate-600 mb-2">{t('Understand communication style, behavioral preferences, and motivation patterns for better team fit and long-term growth')}</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• {t('Self-awareness and confidence building')}</li>
                        <li>• {t('Leadership and soft-skill development')}</li>
                        <li>• {t('Conflict and relationship management')}</li>
                      </ul>
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {t('Book Psychometric Consultation')}
                  </button>
                </div>

                {/* Right -  Who Benefits */}
                <div className="space-y-6">
                  <h4 className="font-bold text-slate-900 text-lg">{t('Who Benefits')}</h4>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Junior Primary (7-8 yrs)')}</h5>
                      <p className="text-sm text-slate-600">{t('Baseline cognition and early learning-style identification.')}</p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Middle to Secondary (9-16 yrs)')}</h5>
                      <p className="text-sm text-slate-600">{t('Subject mapping, stream selection, and career cluster discovery.')}</p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Higher Secondary (15+ yrs)')}</h5>
                      <p className="text-sm text-slate-600">{t('College-course planning with aptitude-personality alignment.')}</p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <h5 className="font-bold text-slate-900 mb-2">{t('Adults and Professionals')}</h5>
                      <p className="text-sm text-slate-600">{t('Role fit, leadership pipeline, and long-term career direction.')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Career Resources Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{t('Career Resources')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              {t('Professional bodies, top universities, and scholarship opportunities across all career paths.')}
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Accounts and Finance */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                {t('Accounts & Finance')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Actuarial Science')}</h4>
                  <p className="text-xs text-slate-600">{t('Professional bodies, universities, and scholarships for actuarial careers')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Banking Services')}</h4>
                  <p className="text-xs text-slate-600">{t('Resources for banking and financial services professionals')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Chartered Accountant')}</h4>
                  <p className="text-xs text-slate-600">{t('CA certifications, colleges, and financial aid options')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Agriculture */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                {t('Agriculture')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Agri Business')}</h4>
                  <p className="text-xs text-slate-600">{t('Agricultural management and business opportunities')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Agricultural Engineering')}</h4>
                  <p className="text-xs text-slate-600">{t('Engineering and technical agricultural programs')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Veterinary Science')}</h4>
                  <p className="text-xs text-slate-600">{t('Animal science and veterinary professional resources')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Architecture & Construction */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                {t('Architecture & Construction')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Architecture')}</h4>
                  <p className="text-xs text-slate-600">{t('Architectural education and professional certifications')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Construction')}</h4>
                  <p className="text-xs text-slate-600">{t('Construction management and engineering resources')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Urban Planning')}</h4>
                  <p className="text-xs text-slate-600">{t('Urban planning and smart city management programs')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Arts & Design */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <Palette className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                {t('Arts & Design')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Accessory Design')}</h4>
                  <p className="text-xs text-slate-600">{t('Fashion and accessory design programs')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Animation')}</h4>
                  <p className="text-xs text-slate-600">{t('Animation, VFX, and digital media resources')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Cosmetology')}</h4>
                  <p className="text-xs text-slate-600">{t('Beauty and wellness professional certifications')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Business & Management */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                {t('Business & Management')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Business Administration')}</h4>
                  <p className="text-xs text-slate-600">{t('MBA and business management programs')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Entrepreneurship')}</h4>
                  <p className="text-xs text-slate-600">{t('Startup and entrepreneurship resources')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Human Resources')}</h4>
                  <p className="text-xs text-slate-600">{t('HR management and organizational development')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Technology & IT */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <Brain className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                {t('Technology & IT')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Software Development')}</h4>
                  <p className="text-xs text-slate-600">{t('Programming and software engineering careers')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Data Science')}</h4>
                  <p className="text-xs text-slate-600">{t('Data analytics and AI/ML opportunities')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{t('Cybersecurity')}</h4>
                  <p className="text-xs text-slate-600">{t('Information security and cyber defense')}</p>
                </div>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-6 hover:text-blue-700">
                {t('View All')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Browse All Resources CTA */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/resources" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('Browse All Resources')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
