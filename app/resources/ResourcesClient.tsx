'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Search, BookOpen, GraduationCap, Award, ChevronDown, ChevronRight, Globe2 } from 'lucide-react';
import NavbarWrapper from '@/app/components/NavbarWrapper';
import Footer from '@/app/components/Footer';
import { TranslatedText } from '@/app/components/TranslatedText';
import { useTranslatedContent } from '@/app/hooks/useTranslatedContent';

interface Resource {
  name: string;
  description: string;
}

interface ResourceGroup {
  type: string;
  items: Resource[];
}

interface Career {
  name: string;
  resources: ResourceGroup[];
}

interface ResourceSection {
  category: string;
  careers: Career[];
}

function TranslatedDynamicText({ text }: { text: string }) {
  const translated = useTranslatedContent(text);
  return <>{translated}</>;
}

const TYPE_CONFIG: Record<string, { icon: React.ReactNode; label: string; accent: string; bg: string }> = {
  'Professional Bodies': {
    icon: <Award className="w-3.5 h-3.5" />,
    label: 'Professional Bodies',
    accent: '#C20000',
    bg: '#FFF5F5',
  },
  'Top Universities': {
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    label: 'Top Universities',
    accent: '#166534',
    bg: '#F0FDF4',
  },
  'Scholarships': {
    icon: <BookOpen className="w-3.5 h-3.5" />,
    label: 'Scholarships',
    accent: '#5b21b6',
    bg: '#F5F3FF',
  },
};

export default function ResourcesClient() {
  const [resourcesData, setResourcesData] = useState<ResourceSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCareers, setExpandedCareers] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/resources.txt');
        const text = await response.text();
        const data = parseResourcesText(text);
        setResourcesData(data);
        // Expand all careers by default
        const allKeys = new Set<string>();
        data.forEach((section, sIdx) => {
          section.careers.forEach((_, cIdx) => {
            allKeys.add(`${sIdx}-${cIdx}`);
          });
        });
        setExpandedCareers(allKeys);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  const parseResourcesText = (text: string): ResourceSection[] => {
    const lines = text.split('\n');
    const sections: ResourceSection[] = [];
    let currentCategory = '';
    let currentCareer: Career | null = null;
    let currentResourceType = '';
    let currentResources: Resource[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (!line) continue;
      line = line.replace(/^[\s•·]+/, '').trim();

      if (line.startsWith('Useful websites for career in') && !line.includes('Websites for careers in')) {
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({ type: currentResourceType, items: [...currentResources] });
        }
        let categoryName = line.replace('Useful websites for career in', '').trim();
        if (!categoryName || categoryName.length < 2) {
          if (i + 1 < lines.length) {
            const nextLine = lines[i + 1].trim();
            if (nextLine && !nextLine.match(/^\d+\./) && !nextLine.match(/^(Professional Bodies|Top Universities|Scholarships)$/)) {
              categoryName = nextLine; i++;
            }
          }
        }
        if (categoryName && categoryName.length > 2) {
          currentCategory = categoryName;
          currentCareer = null; currentResourceType = ''; currentResources = [];
          if (!sections.find(s => s.category === currentCategory)) {
            sections.push({ category: currentCategory, careers: [] });
          }
        }
      } else if (line.match(/^\d+\.\s+Websites for careers in/)) {
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({ type: currentResourceType, items: [...currentResources] });
        }
        const careerName = line.replace(/^\d+\.\s+Websites for careers in\s+/, '').trim();
        if (careerName) {
          currentCareer = { name: careerName, resources: [] };
          currentResourceType = ''; currentResources = [];
          sections.find(s => s.category === currentCategory)?.careers.push(currentCareer);
        }
      } else if (['Professional Bodies', 'Top Universities', 'Scholarships'].includes(line)) {
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({ type: currentResourceType, items: [...currentResources] });
        }
        currentResourceType = line; currentResources = [];
      } else if (line.includes('www.') && (line.includes('–') || line.includes('-'))) {
        const sep = line.includes('–') ? '–' : '-';
        const parts = line.split(sep);
        if (parts.length >= 2) {
          const name = parts[0].replace(/^[\s•·]+/, '').trim();
          const description = parts.slice(1).join(sep).replace(/\s+/g, ' ').trim();
          if (name && description && name.includes('www.')) currentResources.push({ name, description });
        }
      }
    }
    if (currentCareer && currentResourceType && currentResources.length > 0) {
      currentCareer.resources.push({ type: currentResourceType, items: currentResources });
    }
    return sections;
  };

  const filteredData = resourcesData
    .filter(s => !selectedCategory || s.category === selectedCategory)
    .map(s => ({
      ...s,
      careers: s.careers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.resources.some(r => r.items.some(i => i.name.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    }))
    .filter(s => s.careers.length > 0);

  const toggleCareer = (key: string) => {
    setExpandedCareers(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const totalCareers = resourcesData.reduce((s, c) => s + c.careers.length, 0);
  const totalLinks = resourcesData.reduce((s, c) => s + c.careers.reduce((cs, career) => cs + career.resources.reduce((rs, rg) => rs + rg.items.length, 0), 0), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#EEEEEE] border-t-[#C20000] rounded-full animate-spin mx-auto" />
          <p className="font-poppins text-sm text-[#757575]"><TranslatedText>Loading resources...</TranslatedText></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <NavbarWrapper />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">

            {/* Left */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EEEEEE] bg-[#FFF5F5] text-[#C20000] text-xs font-semibold font-poppins mb-4 sm:mb-5">
                <Globe2 className="w-3.5 h-3.5 flex-shrink-0" />
                <TranslatedText>Career Resources</TranslatedText>
              </div>
              <h1 className="font-poppins font-bold text-[#333333] text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5">
                <TranslatedText>Comprehensive</TranslatedText>{' '}
                <span className="text-[#C20000] block sm:inline"><TranslatedText>Career Resources</TranslatedText></span>
              </h1>
              <p className="font-poppins text-[#757575] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                <TranslatedText>Professional bodies, top universities, and scholarship opportunities across all career paths. Everything you need to succeed in your chosen field.</TranslatedText>
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex gap-6 sm:gap-8 md:gap-12 flex-wrap">
              {[
                { value: resourcesData.length, label: 'Categories' },
                { value: totalCareers, label: 'Career Paths' },
                { value: `${totalLinks}+`, label: 'Resources' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-poppins font-bold text-[#C20000] text-2xl sm:text-3xl md:text-4xl">{stat.value}</div>
                  <div className="font-poppins text-[#757575] text-xs mt-1 uppercase tracking-wider whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Search + Filter ───────────────────────────────────── */}
      <section className="bg-[#F9F9F9] border-b border-[#EEEEEE] py-4 sm:py-5 px-4 sm:px-6 md:px-8 sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1090px] mx-auto flex flex-col gap-4">

          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search careers, universities, or resources..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EEEEEE] rounded-lg font-poppins text-sm text-[#333333] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 w-full overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-full font-poppins text-xs font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === null
                  ? 'bg-[#C20000] text-white border-[#C20000]'
                  : 'bg-white text-[#757575] border-[#EEEEEE] hover:border-[#C20000] hover:text-[#C20000]'
              }`}
            >
              <TranslatedText>All Categories</TranslatedText>
            </button>
            {resourcesData.map(section => (
              <button
                key={section.category}
                onClick={() => setSelectedCategory(section.category)}
                className={`px-3.5 py-1.5 rounded-full font-poppins text-xs font-semibold border transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === section.category
                    ? 'bg-[#C20000] text-white border-[#C20000]'
                    : 'bg-white text-[#757575] border-[#EEEEEE] hover:border-[#C20000] hover:text-[#C20000]'
                }`}
              >
                <TranslatedDynamicText text={section.category} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-8">
        <div className="max-w-[1090px] mx-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-28">
              <div className="w-16 h-16 bg-[#FFF5F5] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <BookOpen className="w-8 h-8 text-[#C20000]" />
              </div>
              <h3 className="font-poppins font-bold text-[#333333] text-xl mb-2">
                <TranslatedText>No resources found</TranslatedText>
              </h3>
              <p className="font-poppins text-[#757575] text-sm">
                <TranslatedText>Try adjusting your search or filter criteria</TranslatedText>
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredData.map((section, sIdx) => (
                <div key={sIdx}>

                  {/* ── Category heading ── */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1">
                      <h2 className="font-poppins font-bold text-[#333333] text-2xl sm:text-3xl">
                        <TranslatedDynamicText text={section.category} />
                      </h2>
                      <p className="font-poppins text-[#757575] text-sm mt-1">
                        <span className="font-semibold text-[#333333]">{section.careers.length}</span>{' '}
                        <TranslatedText>{section.careers.length !== 1 ? 'career paths with comprehensive resources' : 'career path with comprehensive resources'}</TranslatedText>
                      </p>
                    </div>
                    <div className="flex-1 h-px bg-[#EEEEEE] hidden sm:block" />
                  </div>

                  {/* ── Career accordion list ── */}
                  <div className="space-y-3">
                    {section.careers.map((career, cIdx) => {
                      const key = `${sIdx}-${cIdx}`;
                      const isOpen = expandedCareers.has(key);
                      const totalLinks = career.resources.reduce((s, r) => s + r.items.length, 0);

                      return (
                        <div
                          key={cIdx}
                          className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden hover:border-[#FFCCCC] transition-colors"
                        >
                          {/* Accordion header */}
                          <button
                            onClick={() => toggleCareer(key)}
                            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFAFA] transition-colors"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 bg-[#FFF5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Globe2 className="w-4 h-4 text-[#C20000]" />
                              </div>
                              <div className="min-w-0">
                                <span className="font-poppins font-semibold text-[#333333] text-sm">
                                  <TranslatedDynamicText text={career.name} />
                                </span>
                                <div className="flex items-center gap-3 mt-0.5">
                                  {career.resources.map((rg, i) => {
                                    const cfg = TYPE_CONFIG[rg.type];
                                    return cfg ? (
                                      <span
                                        key={i}
                                        className="font-poppins text-xs"
                                        style={{ color: cfg.accent }}
                                      >
                                        {rg.items.length} {rg.type === 'Professional Bodies' ? 'bodies' : rg.type === 'Top Universities' ? 'universities' : 'scholarships'}
                                      </span>
                                    ) : null;
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                              <span className="font-poppins text-xs text-[#757575] hidden sm:block">
                                {totalLinks} links
                              </span>
                              <div
                                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
                                style={{
                                  background: isOpen ? '#C20000' : '#F9F9F9',
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                              >
                                <ChevronDown
                                  className="w-4 h-4"
                                  style={{ color: isOpen ? 'white' : '#757575' }}
                                />
                              </div>
                            </div>
                          </button>

                          {/* Accordion body */}
                          {isOpen && (
                            <div className="border-t border-[#EEEEEE] px-5 py-5">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {career.resources.map((resourceGroup, gIdx) => {
                                  const cfg = TYPE_CONFIG[resourceGroup.type] || {
                                    icon: <Globe2 className="w-3.5 h-3.5" />,
                                    label: resourceGroup.type,
                                    accent: '#757575',
                                    bg: '#F9F9F9',
                                  };
                                  return (
                                    <div key={gIdx}>
                                      {/* Group label */}
                                      <div
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold font-poppins mb-3"
                                        style={{ color: cfg.accent, background: cfg.bg }}
                                      >
                                        {cfg.icon}
                                        <TranslatedText as="span">{resourceGroup.type}</TranslatedText>
                                      </div>

                                      {/* Links */}
                                      <div className="space-y-1">
                                        {resourceGroup.items.map((resource, iIdx) => (
                                          <a
                                            key={iIdx}
                                            href={`https://${resource.name.replace('www.', '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group py-1.5 px-2 rounded-lg hover:bg-[#F9F9F9] transition-colors"
                                          >
                                            <ExternalLink
                                              className="w-3 h-3 flex-shrink-0 transition-colors"
                                              style={{ color: '#AAAAAA' }}
                                            />
                                            <span
                                              className="font-poppins text-xs text-[#505050] group-hover:text-[#C20000] transition-colors truncate"
                                            >
                                              {resource.name}
                                            </span>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
