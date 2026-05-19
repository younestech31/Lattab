import { headers } from 'next/headers';
import Script from 'next/script';
import { JsonLdScript } from '@/components/schema';

export async function NonceScriptLoader({ schemas = [] }: { schemas?: Record<string, unknown>[] }) {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript key={index} schema={schema} nonce={nonce} />
      ))}
      {process.env.NEXT_PUBLIC_AHREFS_KEY && (
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
          strategy="lazyOnload"
          nonce={nonce}
        />
      )}
    </>
  );
}
