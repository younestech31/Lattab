import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import { Scale, BookOpen, Building2, Landmark, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';

export const revalidate = 86400; // 24h ISR static page

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'مصادر وروابط قانونية وإدارية مفيدة في الجزائر يقدمها مكتب الأستاذ لعطب محمد موثق بوهران: وزارة العدل، الجريدة الرسمية، السجل التجاري والمالية.';
  assertDescriptionLength(desc, 'Useful Links / app/useful-links/page.tsx');

  return {
    title: 'المصادر والروابط الإدارية والقانونية المفيدة | موثق وهران',
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
      title: 'روابط ومصادر قانونية وإدارية مفيدة في الجزائر | الأستاذ لعطب محمد',
      description: desc,
      url: `${SITE_URL}/useful-links`,
      siteName: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
      locale: 'ar_DZ',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'المصادر والروابط الإدارية والقانونية المفيدة | موثق وهران',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UsefulLinksPage() {
  const categories = [
    {
      title: 'القطاع القضائي والعدالة',
      icon: <Scale className="w-6 h-6" />,
      links: [
        {
          name: 'وزارة العدل الجزائرية',
          url: 'https://www.mjustice.dz',
          desc: 'الاطلاع على القوانين الأساسية المنظمة لمهنة التوثيق والشؤون القضائية العادلة في الجزائر.'
        },
        {
          name: 'الأمانة العامة للحكومة - الجريدة الرسمية',
          url: 'https://www.joradp.dz',
          desc: 'المرجع الرسمي الوحيد لتحميل المراسيم التنفيذية والقوانين العقارية والتشريعات التجارية المحدثة بالجمهورية.'
        },
        {
          name: 'الغرفة الوطنية للموثقين في الجزائر',
          url: 'https://www.cnn.dz',
          desc: 'الهيئة الممثلة لمهنة الموثقين لتنظيم الشأن التوثيقي ومتابعة المقاييس المهنية والأخلاقية على المستوى الوطني.'
        }
      ]
    },
    {
      title: 'الاستثمار وتأسيس الشركات',
      icon: <Building2 className="w-6 h-6" />,
      links: [
        {
          name: 'الوكالة الجزائرية لترقية الاستثمار (AAPI)',
          url: 'https://www.aapi.dz',
          desc: 'البوابة الرسمية لتسجيل المشاريع الاستثمارية والاستفادة من المزايا الجبائية وشروط العقار الاقتصادي.'
        },
        {
          name: 'المركز الوطني للسجل التجاري - سجلكوم (CNRC)',
          url: 'https://sidjilcom.cnrc.dz',
          desc: 'التحقق من قيد الشركات التجارية، حجز التسميات الاجتماعية للمؤسسات، وإيداع الحسابات السنوية قانونياً.'
        },
        {
          name: 'وزارة التجارة وترقية الصادرات',
          url: 'https://www.commerce.gov.dz',
          desc: 'متابعة اللوائح والقرارات المنظمة للممارسات التجارية، شروط المنافسة، والنشاطات الاقتصادية المقننة.'
        },
        {
          name: 'الغرفة الجزائرية للتجارة والصناعة (CACI)',
          url: 'https://www.caci.dz',
          desc: 'مؤسسة الدعم والتعاون الاقتصادي لتزويد المستثمرين وأصحاب المشاريع بالإجراءات وتدشين المكاتب التجارية والاتفاقيات المصاحبة.'
        }
      ]
    },
    {
      title: 'الضرائب والعقارات والسكن',
      icon: <BookOpen className="w-6 h-6" />,
      links: [
        {
          name: 'المديرية العامة للضرائب (DGI)',
          url: 'https://mfdgi.gov.dz',
          desc: 'بوابة المكلفين بالضريبة لحساب الرسوم، خدمات التسجيل، والتسيير الإلكتروني لرسوم العقود والمعاملات الرسمية.'
        },
        {
          name: 'وزارة السكن والعمران والمدينة',
          url: 'https://www.mhu.gov.dz',
          desc: 'الاطلاع على القوانين والمراسيم المنظمة لقطاع السكن والتعمير والتهيئة العمرانية والترقيات العقارية في الجزائر.'
        },
        {
          name: 'المؤسسة الوطنية للترقية العقارية (ENPI)',
          url: 'https://www.enpi.dz',
          desc: 'البوابة الرسمية لمتابعة مشاريع السكن الترقوي الحر والمدعم الموجه للمواطنين بالتفصيل.'
        }
      ]
    },
    {
      title: 'الإدارة المحلية والشؤون المحلية بوهران',
      icon: <Landmark className="w-6 h-6" />,
      links: [
        {
          name: 'البوابة الرسمية لولاية وهران',
          url: 'http://www.wilaya-oran.dz',
          desc: 'البوابة الإدارية الرسمية لمتابعة الشؤون الولائية والتنظيمية والقرارات المحلية لولاية وهران لتعزيز التنمية.'
        },
        {
          name: 'وزارة الداخلية والجماعات المحلية والتهيئة العمرانية',
          url: 'https://www.interieur.gov.dz',
          desc: 'استخراج الوثائق الإدارية الرقمية وشهادات الحالة المدنية وقوانين تنظيم البلديات الإقليمية.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url={`${SITE_URL}/useful-links`}
        name="المصادر والروابط الإدارية والقانونية المفيدة | موثق وهران"
        description="مصادر وروابط قانونية وإدارية مفيدة في الجزائر يقدمها مكتب الأستاذ لعطب محمد موثق بوهران: وزارة العدل، الجريدة الرسمية، السجل التجاري والمالية."
        breadcrumbs={[
          { name: "الرئيسية", item: `${SITE_URL}/` },
          { name: "الروابط المفيدة", item: `${SITE_URL}/useful-links` }
        ]}
      />
      <main id="main-content" className="bg-gray-50 pb-20" dir="rtl">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white pt-32 pb-20 mb-12 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            {/* Back to Home Button */}
            <div className="mb-8 text-right">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group"
              >
                <svg className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                العودة إلى الصفحة الرئيسية للمكتب
              </Link>
            </div>

            <BookOpen className="w-20 h-20 mx-auto mb-6 text-emerald-400 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center font-sans">
              الروابط والمصادر القانونية والإدارية المفيدة
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed text-center font-sans">
              دليلك التوثيقي المؤسساتي المعتمد للولوج إلى منصات الإدارة والتشريع والخدمات العمومية في الجمهورية الجزائرية.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Navigation Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5 font-sans" aria-label="مسار التنقل">
            <Link href="/" className="hover:text-emerald-600 transition-colors">الرئيسية</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">الروابط المفيدة</span>
          </nav>

          {/* Information Warning - Law 06-02 Compliance */}
          <div className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm text-start">
            <div className="p-1.5 text-amber-600 bg-amber-100 rounded-lg flex-shrink-0 mt-0.5">⚖️</div>
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">ملاحظة تنظيمية هامة</h3>
              <p className="text-sm text-amber-800 leading-relaxed font-sans">
                تم إعداد هذا الفهرس ومشاركته من قِبل <strong>مكتب الأستاذ لعطب محمد</strong> لغرض الإرشاد الإداري العام وتسهيل وصول المواطنين للمواقع الرسمية. 
                لا يحتوي هذا الموقع على أي إعلانات تجارية أو عروض ترويجية لخدمات مدفوعة التزاماً بمدونة أخلاقيات مهنة التوثيق الجزائرية (القانون 06-02).
              </p>
            </div>
          </div>

          {/* Categories Grid - Nested nicely inside terms visual wrapper */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 md:p-12 space-y-16">
              {categories.map((category, catIdx) => (
                <section key={catIdx} className="text-start">
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {category.links.map((link, linkIdx) => (
                      <div 
                        key={linkIdx} 
                        className="p-5 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-emerald-50/10 hover:border-emerald-100/60 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
                      >
                        <div className="max-w-3xl">
                          <h3 className="text-base font-bold text-gray-950 mb-1.5 font-sans">
                            {link.name}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed font-sans">
                            {link.desc}
                          </p>
                        </div>

                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm hover:shadow hover:-translate-y-0.5 self-start md:self-auto shrink-0"
                        >
                          <span>زيارة ديوان المنصة</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Institutional Back Link */}
          <div className="mt-14 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-4 font-sans">
              الديوان العمومي للتوثيق تحت إشراف وزارة العدل الجزائرية. الأستاذ لعطب محمد - موثق معتمد لدى مجلس قضاء وهران.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>العودة إلى الصفحة الرئيسية للمكتب</span>
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
