import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Map of category names to file names
const CATEGORY_FILE_MAP: Record<string, string> = {
  agriculture: 'Combined file -  Agriculture',
  'science-mathematics-engineering': 'Combined -  Science, Maths and Engineering',
  'account-finance': 'Combined File -  Account and Finance',
  'architecture-construction': 'Combined file -  Architecture and Construction',
  'arts-design': 'Combined file -  Arts and Design',
  'bio-science': 'Combined file -  Bio Science and Research',
  'business-management': 'Combined File -  Business Management',
  'education-training': 'Combined File -  Education and Training',
  environment: 'Combined File -  Environment',
  'government-services': 'Combined File -  Government Services',
  'health-science': 'Combined File -  Health Science',
  'hospitality-tourism': 'Combined file -  Hospitality and Tourism',
  'human-social-sciences': 'Combined File -  Human and Social Sciences',
  'legal-services': 'Combined File -  Legal Services',
  'logistics-transportation': 'Combined File -  Logistics and Transportation',
  manufacturing: 'Combined File -  Manufacturing',
  'marketing-advertising': 'Combined File -  Marketing and Advertising',
  'media-communication': 'Combined File -  Media and Communication',
  'sports-physical': 'Combined File -  Sports and Physical Activities',
  'public-safety': 'Comined File -  Public Safety and Security',
  'information-technology': 'Combine File -  Information Technology',
};

interface ParsedCareerData {
  slug: string;
  heading: string;
  subheading: string;
  guideSections: Array<{
    id: string;
    title: string;
    icon: string;
    description: string;
    color: string;
    content: string[];
  }>;
}

function findCareerSection(lines: string[], careerName: string): number {
  const normalizedName = careerName.toLowerCase().replace(/_/g, ' ');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    if (line.includes(normalizedName) && !line.includes('step')) {
      return i;
    }
  }

  return -1;
}

function isTitleCase(str: string): boolean {
  if (str.length < 2) return false;
  const words = str.split(' ').filter(w => w.length > 0);
  return words.length > 0 && words.every(word => word[0] === word[0].toUpperCase());
}

function parseCareerData(
  lines: string[],
  startIndex: number,
  careerName: string
): ParsedCareerData {
  const slug = careerName.toLowerCase().replace(/\s+/g, '_');
  const heading = careerName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Find the next career section
  let endIndex = lines.length;
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (
      !line.includes('Step') &&
      !line.includes('Pathway') &&
      line.length > 3 &&
      line.length < 100 &&
      (line === line.toUpperCase() || isTitleCase(line))
    ) {
      endIndex = i;
      break;
    }
  }

  const careerLines = lines.slice(startIndex, endIndex);
  const guideSections = parseGuideSections(careerLines);

  return {
    slug,
    heading,
    subheading: `Explore opportunities in ${heading}.`,
    guideSections,
  };
}

function parseGuideSections(
  lines: string[]
): ParsedCareerData['guideSections'] {
  const sections: ParsedCareerData['guideSections'] = [];
  let currentSection: (typeof sections)[0] | null = null;
  let currentContent: string[] = [];

  const sectionTitles: Record<string, { icon: string; description: string; color: string }> = {
    'career pathways': {
      icon: 'Map',
      description: 'Educational journey from Class 10 onwards.',
      color: '#C20000',
    },
    'market snapshot': {
      icon: 'TrendingUp',
      description: 'Salaries, growth, and opportunities.',
      color: '#DA1313',
    },
    'where are the jobs': {
      icon: 'MapPin',
      description: 'Top cities and industries.',
      color: '#DA1313',
    },
    'where to study': {
      icon: 'Building2',
      description: 'Top institutions across India.',
      color: '#C20000',
    },
    'career opportunities': {
      icon: 'Briefcase',
      description: 'Conventional and emerging roles.',
      color: '#DA1313',
    },
  };

  for (const line of lines) {
    const lowerLine = line.toLowerCase();

    let isSectionHeader = false;
    let sectionId = '';

    for (const [title, config] of Object.entries(sectionTitles)) {
      if (lowerLine.includes(title)) {
        isSectionHeader = true;
        sectionId = title.replace(/\s+/g, '_');

        if (currentSection) {
          currentSection.content = currentContent;
          sections.push(currentSection);
        }

        currentSection = {
          id: sectionId,
          title: line,
          icon: config.icon,
          description: config.description,
          color: config.color,
          content: [],
        };
        currentContent = [];
        break;
      }
    }

    if (!isSectionHeader && currentSection && line.trim()) {
      currentContent.push(line);
    }
  }

  if (currentSection) {
    currentSection.content = currentContent;
    sections.push(currentSection);
  }

  return sections;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let category = searchParams.get('category');
    const career = searchParams.get('career');

    if (!category || !career) {
      return NextResponse.json(
        { error: 'Missing category or career parameter' },
        { status: 400 }
      );
    }

    // Normalize category slug: convert underscores to hyphens for lookup
    const normalizedCategory = category.replace(/_/g, '-');
    
    let fileName = CATEGORY_FILE_MAP[normalizedCategory];
    if (!fileName) {
      // Try original category if normalized doesn't work
      fileName = CATEGORY_FILE_MAP[category];
    }
    
    if (!fileName) {
      return NextResponse.json(
        { error: `Category not found: ${category}` },
        { status: 404 }
      );
    }

    const filePath = join(process.cwd(), 'public', 'content-data', `${fileName}.txt`);
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());

    const careerIndex = findCareerSection(lines, career);
    if (careerIndex === -1) {
      return NextResponse.json(
        { error: `Career not found: ${career}` },
        { status: 404 }
      );
    }

    const careerData = parseCareerData(lines, careerIndex, career);

    return NextResponse.json(careerData);
  } catch (error) {
    console.error('Error extracting career data:', error);
    return NextResponse.json(
      { error: 'Failed to extract career data' },
      { status: 500 }
    );
  }
}
