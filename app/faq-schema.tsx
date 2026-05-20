import { faqs } from '@/lib/data/faq';
import { headers } from 'next/headers';
import { JsonLdScript } from '@/components/schema';

export default async function FAQSchema() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  const lang = (headerStore.get('x-lang') ?? 'ar') as 'ar' | 'fr';

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": lang === 'ar' ? 'ar-DZ' : 'fr-DZ',
    "mainEntity": faqs.map(faq => {
      if (lang === 'ar') {
        return {
          "@type": "Question",
          "name": faq.questionAr,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answerAr
          }
        };
      } else {
        return {
          "@type": "Question",
          "name": faq.questionFr,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answerFr
          }
        };
      }
    })
  };

  return <JsonLdScript schema={schema} nonce={nonce} />;
}
