import { Language, translations } from '@/lib/i18n/translations';
import { SITE_URL } from '@/lib/config';

interface NotarySchemaProps {
  lang: Language;
}

export function NotaryOfficeSchema({ lang }: NotarySchemaProps) {
  const isAr = lang === 'ar';
  
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "GovernmentService"],
    "name": isAr ? "الديوان العمومي للتوثيق — الأستاذ لعطب محمد" : "Étude Public Notarial — Maître Lattab Mohamed",
    "description": isAr
      ? "الديوان العمومي للتوثيق — موثق معتمد لدى محكمة فلاوسن وهران وفق القانون الجزائري للإجراءات التوثيقية والشركات والمعاملات العقارية."
      : "Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran, pour les procédures notariales selon le droit algérien.",
    "url": SITE_URL,
    "telephone": "+213562296981",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oran",
      "addressRegion": "Oran",
      "addressCountry": "DZ"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "13:30",
        "closes": "16:00"
      }
    ],
    "serviceType": translations[lang].services.items.map(item => item.title),
    "areaServed": "Oran, Algeria"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
