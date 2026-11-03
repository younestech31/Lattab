import React from 'react';
import { headers } from 'next/headers';

interface JsonLdScriptProps {
  schema: Record<string, unknown>;
}

export default async function JsonLdScript({ schema }: JsonLdScriptProps) {
  if (process.env.NODE_ENV === 'development') {
    if (!schema['@context'] || (!schema['@type'] && !schema['@graph'])) {
      throw new Error('JsonLdScript: schema must contain @context and @type or @graph');
    }
  }

  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
