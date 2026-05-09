import React from 'react';
import { SITE_URL } from '@/lib/constants';

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

const WebPageSchema = ({ url, name, description, breadcrumbs }: WebPageSchemaProps) => {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebPageSchema;
