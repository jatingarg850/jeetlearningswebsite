"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { formatCareerName } from "@/app/data/careers";
import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import { TranslatedText } from "@/app/components/TranslatedText";
import { careerImagesMap } from "../data/careerImagesMap.js";
import { useCategoryTranslation } from "@/app/hooks/useDynamicTranslation";

interface CategoryClientProps {
  careers: string[];
  category: string;
  categoryName?: string;
}

export function CategoryClient({ careers, category, categoryName }: CategoryClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { t, isReady } = useCategoryTranslation(category);

  if (!careers || careers.length === 0) {
    notFound();
  }

  const displayName = categoryName || formatCareerName(category);

  const filteredCareers = careers.filter((career) =>
    formatCareerName(career).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRelevantImage = (career: string, index: number) => {
    // @ts-ignore
    if (careerImagesMap && typeof careerImagesMap[career] === "string") {
      // @ts-ignore
      return careerImagesMap[career];
    }
    return `https://loremflickr.com/600/400/flat,illustration,cartoon,${career.replace(/_/g, "-")},vector?lock=${index + 1000}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarWrapper />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              <span>{t('Career Exploration')}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              <span>{displayName}</span>
              <br />
              <span className="text-blue-600">
                {t('Career Paths')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {t('Discover your perfect career path with our comprehensive programs and expert guidance.')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <div className="text-3xl font-bold text-blue-600">{careers.length}</div>
                <div className="text-sm text-slate-600">
                  {t('Career Options')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-slate-600">
                  {t('Students Guided')}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-slate-600">
                  {t('Expert Guidance')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('Search careers...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-4 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-base bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <p className="text-slate-600 text-sm">
          <span>{t('Showing')}</span>{" "}
          <span className="font-semibold text-blue-600">{filteredCareers.length}</span>{" "}
          <span>
            {filteredCareers.length === 1 ? t('career') : t('careers')}
          </span>
        </p>
      </div>

      {/* Careers Grid */}
      <section className="pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCareers.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 text-base mb-2">
                <span>{t('No careers found matching your search.')}</span>
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-sm text-blue-600 underline hover:opacity-70 transition-opacity"
              >
                <span>{t('Clear search')}</span>
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filteredCareers.map((career, idx) => (
                <Link key={career} href={`/${category}/${career}`}>
                  <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={getRelevantImage(career, idx)}
                        alt={formatCareerName(career)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover badge */}
                      <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                            Expert Track
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors leading-tight flex-1">
                          <TranslatedText as="span">{formatCareerName(career)}</TranslatedText>
                        </h3>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 flex-shrink-0">
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <p className="text-slate-500 text-xs">
                          {t('Premium career track with expert mentorship')}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
}
