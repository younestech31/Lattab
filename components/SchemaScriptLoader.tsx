import Script from 'next/script';
import { JsonLdScript } from '@/components/schema';

export async function SchemaScriptLoader({ schemas = [] }: { schemas?: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript key={index} schema={schema} />
      ))}
      {process.env.NEXT_PUBLIC_AHREFS_KEY && (
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
