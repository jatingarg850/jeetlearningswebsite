import { Metadata } from 'next';

export interface SEOMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
}

/**
 * Generate comprehensive SEO metadata for pages
 */
export function generateSEOMetadata(params: SEOMetadataParams): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/images/mainlogo.png',
    url = 'https://jeetlearnings.com',
    type = 'website',
    author = 'Jeet Learnings',
    publishedDate,
    modifiedDate,
    canonicalUrl = url,
  } = params;

  const fullTitle = `${title} | Jeet Learnings - Career Guidance Platform`;
  const allKeywords = [
    ...keywords,
    'career guidance',
    'career counseling',
    'psychometric test',
    'DMIT test',
    'career assessment',
  ];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: 'Jeet Learnings',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type as any,
      locale: 'en_IN',
      url,
      siteName: 'Jeet Learnings',
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(publishedDate && { publishedTime: publishedDate }),
      ...(modifiedDate && { modifiedTime: modifiedDate }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@jeetlearnings',
    },
  };
}

/**
 * Generate metadata for career category pages
 */
export function generateCareerCategoryMetadata(
  categoryName: string,
  categorySlug: string,
  description: string
): Metadata {
  return generateSEOMetadata({
    title: `${categoryName} Careers | Career Guidance & Opportunities`,
    description: `Explore ${categoryName} careers with detailed guidance, salary insights, job opportunities, and expert mentorship. Find your perfect career path in ${categoryName}.`,
    keywords: [
      `${categoryName} careers`,
      `${categoryName} jobs`,
      `${categoryName} career guidance`,
      `${categoryName} salary`,
      `${categoryName} opportunities`,
      `${categoryName} education`,
      `${categoryName} professional bodies`,
    ],
    url: `https://jeetlearnings.com/${categorySlug}`,
    canonicalUrl: `https://jeetlearnings.com/${categorySlug}`,
  });
}

/**
 * Generate metadata for individual career pages
 */
export function generateCareerPageMetadata(
  careerName: string,
  categorySlug: string,
  careerSlug: string,
  description: string,
  salary?: string
): Metadata {
  const salaryInfo = salary ? ` | Salary: ${salary}` : '';
  return generateSEOMetadata({
    title: `${careerName} Career Guide${salaryInfo}`,
    description: `Complete guide to ${careerName} career. Learn about job responsibilities, salary, education requirements, career path, and opportunities. Expert guidance for aspiring ${careerName}s.`,
    keywords: [
      `${careerName} career`,
      `${careerName} job`,
      `${careerName} salary`,
      `how to become ${careerName}`,
      `${careerName} education`,
      `${careerName} skills`,
      `${careerName} opportunities`,
      `${careerName} career path`,
    ],
    url: `https://jeetlearnings.com/${categorySlug}/${careerSlug}`,
    canonicalUrl: `https://jeetlearnings.com/${categorySlug}/${careerSlug}`,
  });
}

/**
 * Generate metadata for assessment pages
 */
export function generateAssessmentMetadata(
  assessmentName: string,
  assessmentType: 'dmit' | 'psychometric',
  description: string
): Metadata {
  const slug = assessmentType === 'dmit' ? 'dmit' : 'psychometric';
  return generateSEOMetadata({
    title: `${assessmentName} Test | Career Assessment & Analysis`,
    description,
    keywords: [
      `${assessmentName} test`,
      `${assessmentName} assessment`,
      'career assessment',
      'aptitude test',
      'personality test',
      'IQ test',
      'career guidance',
      'career counseling',
    ],
    url: `https://jeetlearnings.com/${slug}`,
    canonicalUrl: `https://jeetlearnings.com/${slug}`,
  });
}

/**
 * Generate metadata for blog/article pages
 */
export function generateArticleMetadata(
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  modifiedDate?: string,
  image?: string
): Metadata {
  return generateSEOMetadata({
    title,
    description,
    keywords: [
      'career advice',
      'career tips',
      'career guidance',
      'career development',
      'job search',
      'education',
    ],
    image,
    type: 'article',
    author,
    publishedDate,
    modifiedDate,
  });
}

/**
 * Generate breadcrumb schema for structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ schema for structured data
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate job posting schema for structured data
 */
export function generateJobPostingSchema(
  title: string,
  description: string,
  salary: string,
  location: string = 'India'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    baseSalary: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      price: salary,
    },
    jobLocationType: 'TELECOMMUTE',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Jeet Learnings',
      sameAs: 'https://jeetlearnings.com',
      logo: 'https://jeetlearnings.com/images/mainlogo.png',
    },
    areaServed: location,
  };
}

/**
 * Generate organization schema for structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jeet Learnings',
    url: 'https://jeetlearnings.com',
    logo: 'https://jeetlearnings.com/images/mainlogo.png',
    description:
      'Comprehensive career guidance platform with psychometric assessments, DMIT analysis, and expert mentorship.',
    sameAs: [
      'https://www.facebook.com/jeetlearnings',
      'https://www.twitter.com/jeetlearnings',
      'https://www.linkedin.com/company/jeetlearnings',
      'https://www.instagram.com/jeetlearnings',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9670899777',
      email: 'contact@jeetlearnings.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India',
    },
  };
}
