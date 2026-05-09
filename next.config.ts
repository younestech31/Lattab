import type {NextConfig} from 'next';

// TODO: Implement nonce-based CSP for script-src instead of 'unsafe-inline'
const isDev = process.env.NODE_ENV !== 'production';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com${isDev ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://analytics.ahrefs.com https://api.indexnow.org https://api.whatsapp.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';`
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/((?!api).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    deviceSizes: [390, 640, 768, 1024, 1200, 1920],
    imageSizes: [48, 96, 192, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800,
    remotePatterns: [],
  },
};

export default nextConfig;
