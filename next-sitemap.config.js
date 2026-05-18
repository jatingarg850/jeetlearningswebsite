/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://jeetlearnings.com',
  generateRobotsTxt: false, // We have a custom robots.txt
  sitemapSize: 50000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/api', '/404', '/500'],
  
  // Transform function to customize sitemap entries
  transform: async (config, path) => {
    // Set priority based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/career-path')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/dmit')) {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (path.includes('/psychometric')) {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (path.includes('/resources')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/blog')) {
      priority = 0.75;
      changefreq = 'weekly';
    } else if (path.includes('/contact')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional sitemaps
  additionalPaths: async (config) => {
    const paths = [];

    // Add career category pages
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

    categories.forEach((category) => {
      paths.push({
        loc: `/${category}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
};

module.exports = config;
