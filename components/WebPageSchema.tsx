import React from 'react';
import { SITE_URL } from '@/lib/config';
import { headers } from 'next/headers';
import { JsonLdScript } from './schema';

interface Breadcrumb {
  name: string;
  item: string;
}

interface WebPageSchemaProps {
  url: string;
  name: string;
  description: string;
  breadcrumbs: Breadcrumb[];
}

const WebPageSchema = async ({ url, name, description, breadcrumbs }: WebPageSchemaProps) => {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.item
      }))
    }
  };

  return <JsonLdScript schema={schema} nonce={nonce} />;
};

export default WebPageSchema;
