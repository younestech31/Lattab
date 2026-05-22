import Script from 'next/script';
import { headers } from 'next/headers';

export async function AnalyticsScriptLoader() {
  if (!process.env.NEXT_PUBLIC_AHREFS_KEY) {
    return null;
  }

  const reqHeaders = await headers();
  const nonce = reqHeaders.get('x-nonce') ?? undefined;

  return (
    <>
      {/* 
        Note: The SRI hash (integrity attribute) was omitted on 2026-05-22. 
        Ahrefs dynamically updates their analytics.js script frequently, 
        making a static SRI hash unstable and likely to break tracking.
      */}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
        strategy="lazyOnload"
        nonce={nonce}
        crossOrigin="anonymous"
      />
    </>
  );
}
