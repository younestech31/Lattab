import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { Scale, Building2, Book, Landmark, ExternalLink, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { USEFUL_LINKS, USEFUL_LINK_CATEGORIES } from '@/lib/data/usefulLinks';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'دليل عملي للمصادر الرسمية الجزائرية في العدالة والتشريع والسجل التجاري والاستثمار والضرائب والعقار والخدمات الإدارية، مع روابط مباشرة للبوابات المؤسساتية.';
  
  return {
    title: { absolute: 'الروابط الرسمية والقانونية المفيدة في الجزائر | موثق وهران' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/useful-links`,
      languages: {
        'ar-DZ': `${SITE_URL}/useful-links`,
        'fr-DZ': `${SITE_URL}/fr/useful-links`,
        'x-default': `${SITE_URL}/useful-links`,
      },
    },
    openGraph: {
      title: 'دليل الروابط الرسمية والقانونية والإدارية في الجزائر | ديوان التوثيق - وهران',
      description: desc,
      url: `${SITE_URL}/useful-links`,
      siteName: 'الديوان العمومي للتوثيق - وهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'دليل الروابط الرسمية والقانونية والإدارية في الجزائر',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'الروابط الرسمية والقانونية المفيدة في الجزائر | موثق وهران',
      description: desc,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const IconMap = {
  scale: Scale,
  building: Building2,
  book: Book,
  landmark: Landmark,
};

function getLinkHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, '');
}

export default function UsefulLinksPage() {
  const lang = 'ar';
  const reviewedDate = '04 نوفمبر 2026';

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url={`${SITE_URL}/useful-links`}
        name="الروابط الرسمية والقانونية المفيدة في الجزائر | موثق وهران"
        description="دليل للمصادر الرسمية الجزائرية في العدالة والتشريع والسجل التجاري والاستثمار والضرائب والعقار والخدمات الإدارية."
        breadcrumbs={[
          { name: 'الرئيسية', item: `${SITE_URL}/` },
          { name: 'الروابط المفيدة', item: `${SITE_URL}/useful-links` },
        ]}
      />

      <div className="bg-gray-50 pb-20" dir="rtl">
        <UnifiedPageHeader
          lang={lang}
          badgeText="دليل المصادر والبوابات الرسمية"
          badgeIcon={<Book className="w-4 h-4" />}
          eyebrow="الديوان العمومي للتوثيق"
          title="الروابط والمصادر القانونية والإدارية المفيدة"
          description="دليل منظم للوصول المباشر إلى المواقع المؤسساتية الجزائرية ذات الصلة بالإجراءات القانونية والتوثيقية والعقارية والإدارية."
          breadcrumbs={[
            { name: 'الرئيسية', href: '/' },
            { name: 'الروابط المفيدة' },
          ]}
        />

        <div className="container mx-auto px-4 max-w-6xl mt-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 mb-8 flex items-start gap-4 text-start">
            <div className="p-2 text-amber-700 bg-amber-100 rounded-xl shrink-0">
              <Scale className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base md:text-lg font-bold text-amber-950 mb-2">تنبيه بخصوص طبيعة هذه الروابط</h2>
              <p className="text-sm text-amber-900/90 leading-7">
                هذا الفهرس للإرشاد العام فقط. الروابط تحيل إلى مواقع جهات ومؤسسات خارج إدارة المكتب؛ لذلك لا يتحكم المكتب في محتواها أو توافر خدماتها أو شروط استخدامها، ولا يغني الاطلاع عليها عن التحقق من النصوص والإجراءات لدى الجهة المختصة.
              </p>
              <p className="mt-3 text-xs text-amber-800">
                آخر مراجعة تحريرية للدليل: <time dateTime="2026-11-04">{reviewedDate}</time>
              </p>
            </div>
          </div>

          <nav aria-label="التنقل بين أقسام الروابط المفيدة" className="mb-8 flex flex-wrap gap-2">
            {USEFUL_LINK_CATEGORIES.map((category) => {
              const count = USEFUL_LINKS.filter((link) => link.category === category.id).length;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span>{category.title[lang]}</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800">{count}</span>
                </a>
              );
            })}
          </nav>

          <div className="space-y-8">
            {USEFUL_LINK_CATEGORIES.map((category) => {
              const CategoryIcon = IconMap[category.icon];
              const categoryLinks = USEFUL_LINKS.filter((link) => link.category === category.id);

              if (categoryLinks.length === 0) return null;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  aria-labelledby={`${category.id}-heading`}
                  className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-100 pb-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="rounded-xl bg-emerald-50 p-3 text-emerald-800">
                        <CategoryIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h2 id={`${category.id}-heading`} className="text-lg font-bold leading-snug text-gray-950 md:text-2xl">
                        {category.title[lang]}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      {categoryLinks.length} روابط
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {categoryLinks.map((link) => (
                      <article
                        key={link.id}
                        className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                      >
                        <div>
                          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                            <h3 className="text-base font-bold leading-7 text-gray-950">
                              {link.name[lang]}
                            </h3>
                            <span dir="ltr" className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
                              {getLinkHost(link.url)}
                            </span>
                          </div>
                          <p className="text-sm leading-7 text-gray-600">
                            {link.desc[lang]}
                          </p>
                        </div>

                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`فتح ${link.name[lang]} في نافذة جديدة`}
                          className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                        >
                          <span>زيارة البوابة الرسمية</span>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">يفتح في نافذة جديدة</span>
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="mx-auto mb-5 max-w-3xl text-xs leading-6 text-gray-500">
              أسماء الجهات وشعاراتها ومواقعها تابعة لأصحابها. إدراج رابط هنا لا يعني وجود شراكة أو اعتماد أو مصادقة من تلك الجهات، كما لا يمثل ضماناً لاستمرار الرابط أو الخدمة.
            </p>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-emerald-800 transition-colors hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <span>العودة إلى الصفحة الرئيسية للمكتب</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
