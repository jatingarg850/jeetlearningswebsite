import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://jeetlearnings.com';

  const robots = `# Robots.txt for Jeet Learnings Career Guidance Platform
# Allow all search engines to crawl the site

User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /*.json$
Disallow: /*?*sort=
Disallow: /*?*filter=

# Specific rules for Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Specific rules for Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Specific rules for Yandex
User-agent: YandexBot
Allow: /
Crawl-delay: 1

# Block bad bots
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
