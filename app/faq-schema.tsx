import { faqs } from '@/lib/data/faq';
import { headers } from 'next/headers';
import { JsonLdScript } from '@/components/schema';

export default async function FAQSchema() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(faq => ([
      {
        "@type": "Question",
        "name": faq.questionAr,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answerAr
        }
      },
      {
        "@type": "Question",
        "name": faq.questionFr,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answerFr
        }
      }
    ]))
  };

  return <JsonLdScript schema={schema} nonce={nonce} />;
}
