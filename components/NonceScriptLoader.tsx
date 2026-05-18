import { headers } from 'next/headers';
import Script from 'next/script';
import { JsonLdScript } from '@/components/schema';

export async function NonceScriptLoader({ schemas = [] }: { schemas?: any[] }) {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript key={index} schema={schema} nonce={nonce} />
      ))}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="kIcznbOizJFi9WN+OY1t/g"
        strategy="lazyOnload"
        nonce={nonce}
      />
    </>
  );
}
