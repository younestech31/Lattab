import { headers } from 'next/headers';
import Script from 'next/script';

export async function NonceAnalyticsLoader() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  if (!process.env.NEXT_PUBLIC_AHREFS_KEY) {
    return null;
  }

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
      strategy="lazyOnload"
      nonce={nonce}
    />
  );
}
