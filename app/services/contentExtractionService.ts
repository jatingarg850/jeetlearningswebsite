/**
 * Dynamic Content Extraction Service
 * Reads TXT files and extracts career data with proper formatting
 */

export interface ExtractedCareerData {
  slug: string;
  heading: string;
  subheading: string;
  guideSections: {
    id: string;
    title: string;
    icon: string;
    description: string;
    color: string;
    content: string[];
  }[];
}

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

/**
 * Extract career data from TXT file
 */
export async function extractCareerData(
  category: string,
  careerName: string
): Promise<ExtractedCareerData | null> {
  try {
    const fileName = CATEGORY_FILE_MAP[category];
    if (!fileName) {
      console.error(`Category not found: ${category}`);
      return null;
    }

    const response = await fetch(`/content-data/${fileName}.txt`);
    if (!response.ok) {
      console.error(`Failed to fetch content file: ${fileName}`);
      return null;
    }

    const content = await response.text();
    const lines = content.split('\n').filter(line => line.trim());

    // Find the career section
    const careerIndex = findCareerSection(lines, careerName);
    if (careerIndex === -1) {
      console.error(`Career not found: ${careerName}`);
      return null;
    }

    // Extract career data
    const careerData = parseCareerData(lines, careerIndex, careerName);
    return careerData;
  } catch (error) {
    console.error('Error extracting career data:', error);
    return null;
  }
}

/**
 * Find the starting index of a career section
 */
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

/**
 * Parse career data from lines
 */
function parseCareerData(
  lines: string[],
  startIndex: number,
  careerName: string
): ExtractedCareerData {
  const slug = careerName.toLowerCase().replace(/\s+/g, '_');
  const heading = formatHeading(careerName);
  
  // Find the next career section to know where this one ends
  let endIndex = lines.length;
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    // Check if this is a new career heading (all caps or title case, not a step)
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

/**
 * Parse guide sections from career lines
 */
function parseGuideSections(
  lines: string[]
): ExtractedCareerData['guideSections'] {
  const sections: ExtractedCareerData['guideSections'] = [];
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

    // Check if this is a section header
    let isSectionHeader = false;
    let sectionId = '';

    for (const [title, config] of Object.entries(sectionTitles)) {
      if (lowerLine.includes(title)) {
        isSectionHeader = true;
        sectionId = title.replace(/\s+/g, '_');
        
        // Save previous section
        if (currentSection) {
          currentSection.content = currentContent;
          sections.push(currentSection);
        }

        // Start new section
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

  // Save last section
  if (currentSection) {
    currentSection.content = currentContent;
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Check if a string is in title case
 */
function isTitleCase(str: string): boolean {
  const words = str.split(' ');
  return words.length > 1 && words.every(word => word[0] === word[0].toUpperCase());
}

/**
 * Format career name to heading
 */
function formatHeading(careerName: string): string {
  return careerName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get all careers for a category
 */
export async function getCareersForCategory(category: string): Promise<string[]> {
  try {
    const fileName = CATEGORY_FILE_MAP[category];
    if (!fileName) {
      return [];
    }

    const response = await fetch(`/content-data/${fileName}.txt`);
    if (!response.ok) {
      return [];
    }

    const content = await response.text();
    const lines = content.split('\n').filter(line => line.trim());

    const careers: string[] = [];
    for (const line of lines) {
      const lowerLine = line.toLowerCase();
      // Career names are typically title case, not all caps, and not containing "step" or "pathway"
      if (
        !lowerLine.includes('step') &&
        !lowerLine.includes('pathway') &&
        !lowerLine.includes('market') &&
        !lowerLine.includes('salary') &&
        !lowerLine.includes('where') &&
        line.length > 3 &&
        line.length < 100 &&
        isTitleCase(line)
      ) {
        careers.push(line);
      }
    }

    return careers;
  } catch (error) {
    console.error('Error getting careers for category:', error);
    return [];
  }
}
