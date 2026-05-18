import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://jeetlearnings.com';

  // Career categories
  const categories = [
    'science_mathematics_engineering',
    'business_management',
    'arts_design',
    'agriculture',
    'architecture_construction',
    'banking_finance',
    'education_training',
    'environment',
    'health_medicine',
    'hospitality_tourism',
    'human_social_sciences',
    'legal_services',
    'manufacturing',
    'marketing_advertising',
    'public_safety_security',
    'sports_physical_activities',
  ];

  // Main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/career-path', priority: '0.9', changefreq: 'weekly' },
    { url: '/dmit', priority: '0.85', changefreq: 'monthly' },
    { url: '/psychometric', priority: '0.85', changefreq: 'monthly' },
    { url: '/resources', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.75', changefreq: 'weekly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  ];

  // Legal pages
  const legalPages = [
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${mainPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${categories
    .map(
      (category) => `
  <url>
    <loc>${baseUrl}/${category}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
  ${legalPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
