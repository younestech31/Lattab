import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import FormsIndex from '@/components/forms/FormsIndex';

export const metadata: Metadata = {
  title: 'النماذج والاستمارات الرسمية — ديوان التوثيق وهران',
  description: 'فهرس الاستمارات والنماذج الإدارية والجبائية الجزائرية الرسمية (ج 17، التصريحات الجبائية والعقارية) مع إمكانية التعبئة الإلكترونية المباشرة والتحميل بصيغة PDF.',
  alternates: {
    canonical: `${SITE_URL}/formulaires`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires`,
      'fr-DZ': `${SITE_URL}/fr/formulaires`,
    },
  },
  openGraph: {
    title: 'النماذج والاستمارات الرسمية — ديوان التوثيق وهران',
    description: 'تعبئة وتحميل الاستمارات الجبائية والعقارية الرسمية الجزائرية مباشرة وفق القوالب القانونية المعتمدة.',
    url: `${SITE_URL}/formulaires`,
    locale: 'ar_DZ',
    type: 'website',
  },
};

export default function FormulairesPage() {
  return (
    <div>
      <UnifiedPageHeader
        lang="ar"
        eyebrow="خدمات إدارية وجبائية إرشادية"
        badgeText="قوالب رسمية معتمدة"
        title="دليل الاستمارات والنماذج الرسمية"
        description="منظومة تفاعلية لتعبئة وطباعة الاستمارات الجبائية والعقارية الجزائرية الرسمية بدقة وموثوقية، مع معالجة محلية تضمن الخصوصية الكاملة."
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
