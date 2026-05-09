import React from 'react';

interface JsonLdScriptProps {
  schema: Record<string, unknown>;
  nonce: string;
}

const JsonLdScript = ({ schema, nonce }: JsonLdScriptProps) => {
  if (process.env.NODE_ENV === 'development') {
    if (!schema['@context'] || (!schema['@type'] && !schema['@graph'])) {
      throw new Error('JsonLdScript: schema must contain @context and @type or @graph');
    }
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLdScript;
