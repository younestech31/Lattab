import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const cspHeader = [
  "default-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `frame-ancestors ${isProd ? "'self'" : "*"}`,
  isProd ? "upgrade-insecure-requests" : "",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  `script-src ${isProd ? "'self' 'unsafe-inline'" : "'self' 'unsafe-eval' 'unsafe-inline'"}`,
  `connect-src ${isProd ? "'self' https://va.vercel-insights.com" : "'self' ws: wss: http: https:"}`,
  "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com",
]
  .filter(Boolean)
  .join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: cspHeader },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  ...(isProd ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }] : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ...(isProd ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }] : []),
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/fr/blog/guide-acte-de-vente-immobilier',
        destination: '/fr/blog/acte-de-vente-immobilier-oran',
        statusCode: 301,
      },
      {
        source: '/blog/acte-de-vente-immobilier-oran',
        destination: '/blog/guide-acte-de-vente-immobilier',
        statusCode: 301,
      },
      {
        source: '/blog/fr/:slug',
        destination: '/fr/blog/:slug',
        statusCode: 301,
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
    qualities: [75],
    minimumCacheTTL: 604800,
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  outputFileTracingIncludes: {
    '/**': ['./content/**/*'],
  },
};

export default nextConfig;
