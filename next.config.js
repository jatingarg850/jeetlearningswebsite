/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache fonts
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old URLs if any
      {
        source: '/old-career-path',
        destination: '/career-path',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        // Rewrite sitemap
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
        // Rewrite robots.txt
        {
          source: '/robots.txt',
          destination: '/api/robots',
        },
      ],
    };
  },

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // PoweredBy header removal
  poweredByHeader: false,

  // Production source maps (disabled for security)
  productionBrowserSourceMaps: false,

  // Trailing slash
  trailingSlash: false,

  // Turbopack configuration (for Next.js 16+)
  turbopack: {},

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://jeetlearnings.com',
  },
};

export default nextConfig;
