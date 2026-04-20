import type {NextConfig} from 'next';

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' analytics.ahrefs.com apis.google.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' blob: data: images.unsplash.com *.archive.org *.googleapis.com; font-src 'self' fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; frame-src https://www.google.com https://maps.google.com https://maps.googleapis.com; connect-src 'self' *.googleapis.com *.firebaseio.com *.firebaseapp.com firebasestorage.googleapis.com analytics.ahrefs.com vitals.vercel-insights.com; upgrade-insecure-requests;",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    minimumCacheTTL: 604800,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'archive.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ia600909.us.archive.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
