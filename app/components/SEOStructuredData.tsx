import { ReactNode } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage' | 'Article';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
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
      }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: 'Jeet Learnings - Career Guidance Platform',
        url: 'https://jeetlearnings.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://jeetlearnings.com/search?q={search_term_string}',
          },
          query_input: 'required name=search_term_string',
        },
      }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  return (
    <StructuredData
      type="LocalBusiness"
      data={{
        '@type': 'EducationalOrganization',
        name: 'Jeet Learnings',
        url: 'https://jeetlearnings.com',
        telephone: '+91-9670899777',
        email: 'contact@jeetlearnings.com',
        description:
          'Career guidance and counseling services with psychometric assessments and DMIT analysis.',
        image: 'https://jeetlearnings.com/images/mainlogo.png',
        priceRange: '₹₹',
        areaServed: 'IN',
        serviceType: [
          'Career Counseling',
          'Psychometric Testing',
          'DMIT Analysis',
          'Career Mentorship',
          'Educational Guidance',
        ],
      }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbList = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return (
    <StructuredData
      type="BreadcrumbList"
      data={{
        itemListElement: breadcrumbList,
      }}
    />
  );
}

// FAQ Schema
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const mainEntity = faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return (
    <StructuredData
      type="FAQPage"
      data={{
        mainEntity,
      }}
    />
  );
}

// Article Schema
export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return (
    <StructuredData
      type="Article"
      data={{
        headline: title,
        description,
        image,
        datePublished,
        dateModified,
        author: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Jeet Learnings',
          logo: {
            '@type': 'ImageObject',
            url: 'https://jeetlearnings.com/images/mainlogo.png',
          },
        },
      }}
    />
  );
}

// Career Path Schema
export function CareerPathSchema({
  careerTitle,
  description,
  salary,
  demand,
}: {
  careerTitle: string;
  description: string;
  salary: string;
  demand: string;
}) {
  return (
    <StructuredData
      type="Article"
      data={{
        '@type': 'JobPosting',
        title: careerTitle,
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
        },
      }}
    />
  );
}
