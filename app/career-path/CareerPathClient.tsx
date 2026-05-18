'use client';

import { useState } from 'react';
import Link from 'next/link';
import { careerCategories } from '@/app/data/careers';
import { TranslatedText } from '@/app/components/TranslatedText';
import {
  Search,
  ArrowRight,
  DollarSign,
  Leaf,
  Building2,
  Palette,
  Microscope,
  Briefcase,
  BookOpen,
  Globe,
  Building,
  Stethoscope,
  UtensilsCrossed,
  Users,
  Code,
  Scale,
  Plane,
  Factory,
  Megaphone,
  Newspaper,
  Shield,
  Zap,
  Trophy,
} from 'lucide-react';

const categoryIcons: { [key: string]: React.ReactNode } = {
  account_and_finance: <DollarSign className="w-8 h-8" />,
  agriculture: <Leaf className="w-8 h-8" />,
  architecture_and_construction: <Building2 className="w-8 h-8" />,
  arts_and_design: <Palette className="w-8 h-8" />,
  bio_science_and_research: <Microscope className="w-8 h-8" />,
  business_management: <Briefcase className="w-8 h-8" />,
  education_and_training: <BookOpen className="w-8 h-8" />,
  environment: <Globe className="w-8 h-8" />,
  government_services: <Building className="w-8 h-8" />,
  health_science: <Stethoscope className="w-8 h-8" />,
  hospitality_and_tourism: <UtensilsCrossed className="w-8 h-8" />,
  human_and_social_sciences: <Users className="w-8 h-8" />,
  information_technology: <Code className="w-8 h-8" />,
  legal_services: <Scale className="w-8 h-8" />,
  logistics_and_transportation: <Plane className="w-8 h-8" />,
  manufacturing: <Factory className="w-8 h-8" />,
  marketing_and_advertising: <Megaphone className="w-8 h-8" />,
  media_and_communication: <Newspaper className="w-8 h-8" />,
  public_safety_and_security: <Shield className="w-8 h-8" />,
  science_mathematics_engineering: <Zap className="w-8 h-8" />,
  sports_and_physical_activities: <Trophy className="w-8 h-8" />,
};

export default function CareerPathClient() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Object.entries(careerCategories).map(([slug, data]) => ({
    slug,
    name: data.name,
    careerCount: data.careers.length,
  }));

  const filteredCategories = categories.filter((category) => {
    const searchLower = searchTerm.toLowerCase().trim();
    const nameLower = category.name.toLowerCase();
    return nameLower.includes(searchLower);
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md selection:bg-blue-100 selection:text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <TranslatedText>Career Exploration</TranslatedText>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <TranslatedText as="span">Explore Your</TranslatedText> <br />
              <span className="text-blue-600"><TranslatedText as="span">Career Options.</TranslatedText></span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <TranslatedText>Browse 21 diverse career categories with 150+ career options. Find the path that matches your interests, skills, and aspirations.</TranslatedText>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl font-bold text-blue-600">21</div>
                <div className="text-sm text-slate-600"><TranslatedText>Career Categories</TranslatedText></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-slate-600"><TranslatedText>Career Options</TranslatedText></div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-slate-600"><TranslatedText>Students Guided</TranslatedText></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search career paths..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {filteredCategories.length === categories.length
                ? <TranslatedText as="span">All Career Paths</TranslatedText>
                : `${filteredCategories.length} Career Path${filteredCategories.length !== 1 ? 's' : ''} Found`}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">
              {filteredCategories.length === categories.length
                ? <TranslatedText>Explore all available career categories and find your perfect fit.</TranslatedText>
                : <TranslatedText>Showing results for your search</TranslatedText>}
            </p>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up">
              <p className="text-lg text-slate-600 mb-2">
                <TranslatedText>No career paths found matching your search.</TranslatedText>
              </p>
              <p className="text-slate-500">
                <TranslatedText>Try searching with different keywords</TranslatedText>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category, idx) => (
                <div
                  key={category.slug}
                  className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                      {categoryIcons[category.slug] || <Briefcase className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1"><TranslatedText as="span">{category.name}</TranslatedText></h3>
                      <p className="text-sm text-slate-600 mb-4">{category.careerCount} <TranslatedText as="span">career options</TranslatedText></p>
                      <Link
                        href={`/${category.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                      >
                        <TranslatedText as="span">Explore</TranslatedText>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


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
