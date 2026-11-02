import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import FormsIndex from '@/components/forms/FormsIndex';
import { JsonLdScript } from '@/components/schema';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'استمارات ضريبية رسمية للتعبئة — ج 17 ج 31 ج 08 | ديوان التوثيق وهران',
  description: 'تعبئة وطباعة الاستمارات الجبائية الرسمية للمديرية العامة للضرائب (DGI): التصريح بفائض القيمة العقارية ج 17، الرسم العقاري ج 31، وتصريح بالوجود ج 08 وفق النماذج القانونية المعتمدة بصيغة PDF معدة للإيداع.',
  alternates: {
    canonical: `${SITE_URL}/formulaires`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires`,
      'fr-DZ': `${SITE_URL}/fr/formulaires`,
      'x-default': `${SITE_URL}/formulaires`,
    },
  },
  openGraph: {
    title: 'استمارات ضريبية رسمية للتعبئة — ج 17 ج 31 ج 08 | ديوان التوثيق وهران',
    description: 'تعبئة وطباعة الاستمارات الجبائية الرسمية للمديرية العامة للضرائب DGI: فائض القيمة ج 17، الرسم العقاري ج 31، وتصريح بالوجود ج 08 بصيغة PDF معدة للإيداع.',
    url: `${SITE_URL}/formulaires`,
    locale: 'ar_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'استمارات ضريبية رسمية للتعبئة — ج 17 ج 31 ج 08',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'استمارات ضريبية رسمية للتعبئة — ج 17 ج 31 ج 08 | ديوان التوثيق وهران',
    description: 'تعبئة وطباعة الاستمارات الجبائية الرسمية للمديرية العامة للضرائب DGI: فائض القيمة ج 17، الرسم العقاري ج 31، وتصريح بالوجود ج 08.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormulairesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'الاستمارات والنماذج الضريبية الرسمية الجزائرية',
    'description': 'دليل الاستمارات الجبائية الرسمية المعتمدة من المديرية العامة للضرائب (DGI) للتعبئة المباشرة والطباعة.',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'سلسلة ج رقم 17 — التصريح بفائض القيمة العقارية',
        'url': `${SITE_URL}/formulaires/gn17`,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'سلسلة ج رقم 31 — تصريح الرسم العقاري',
        'url': `${SITE_URL}/formulaires/gn31`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'سلسلة ج رقم 08 — تصريح بالوجود',
        'url': `${SITE_URL}/formulaires/gn8`,
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={itemListSchema} />
      <UnifiedPageHeader
        lang="ar"
        eyebrow="خدمات إدارية وجبائية إرشادية"
        badgeText="قوالب رسمية معتمدة"
        title="دليل الاستمارات الرسمية"
        description="تعبئة وطباعة الاستمارات الجبائية والعقارية الجزائرية الرسمية (التصريح بفائض القيمة ج 17، الرسم العقاري ج 31، تصريح بالوجود ج 08) بدقة وموثوقية، مع معالجة محلية تضمن الخصوصية الكاملة."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh]">
        <FormsIndex />
      </main>
    </div>
  );
}
