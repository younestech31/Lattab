import Script from 'next/script';

export async function AnalyticsScriptLoader() {
  if (!process.env.NEXT_PUBLIC_AHREFS_KEY) {
    return null;
  }

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
      strategy="lazyOnload"
    />
  );
}
