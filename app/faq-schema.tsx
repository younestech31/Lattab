import { faqs } from '@/lib/data/faq';
import { headers } from 'next/headers';
import { JsonLdScript } from '@/components/schema';

export default async function FAQSchema() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLdScript schema={schema} nonce={nonce} />;
}
