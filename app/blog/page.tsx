import { Metadata } from 'next';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import BlogSearchInput from '@/components/BlogSearchInput';
import BlogPostGrid from '@/components/BlogPostGrid';
import { JsonLdScript } from '@/components/schema';
import { SITE_URL } from '@/lib/config';
import { blogPosts } from '@/lib/data/blog';
import { assertDescriptionLength } from '@/lib/utils/metaDescription';

export const revalidate = 3600;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;

  if (q) {
    const searchDesc = `نتائج البحث عن المقالات المتعلقة بـ ${q} في المدونة القانونية والعقارية لمكتب الموثق لعطب محمد.`;
    assertDescriptionLength(searchDesc, 'blog page search');
    return {
      title: `نتائج البحث عن "${q}" — المدونة القانونية`,
      description: searchDesc,
      robots: { index: false, follow: true },
    };
  }

  const headerStore = await headers();
  const lang = (headerStore.get('x-lang') ?? 'ar') as 'ar' | 'fr';
  const desc = 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.';
  assertDescriptionLength(desc, 'blog page main');

  return {
    title: { absolute: 'المدونة القانونية والعقارية — موثق وهران' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/blog`,
      languages: {
        'ar-DZ': `${SITE_URL}/blog`,
        'fr-DZ': `${SITE_URL}/fr/blog`,
        'x-default': `${SITE_URL}/blog`,
      },
    },
    openGraph: {
      title: 'المدونة القانونية والعقارية — موثق وهران',
      description: desc,
      url: `${SITE_URL}/blog`,
      siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'المدونة القانونية - موثق معتمد',
        },
      ],
      locale: lang === 'ar' ? 'ar_DZ' : 'fr_DZ',
      alternateLocale: lang === 'ar' ? ['fr_DZ'] : ['ar_DZ'],
      type: 'website',
    },
  };
}

const BlogGridSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="h-64 bg-gray-100 rounded-3xl animate-pulse" />
    ))}
  </div>
);

export default async function BlogList({ 
  searchParams 
}: { 
  searchParams: Promise<{ q?: string }> 
}) {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  
  const { q = '' } = await searchParams;
  
  const filteredPosts = q 
    ? blogPosts.filter(p => 
        p.title.toLowerCase().includes(q.toLowerCase()) || 
        p.description.toLowerCase().includes(q.toLowerCase()) || 
        p.category.toLowerCase().includes(q.toLowerCase())
      )
    : blogPosts;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "المدونة القانونية والعقارية — موثق وهران",
    "description": "قائمة مقالات قانونية وعقارية من مكتب الأستاذ لعطب محمد، موثق معتمد بوهران",
    "url": SITE_URL + "/blog",
    "numberOfItems": blogPosts.length,
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": SITE_URL + "/blog/" + post.slug,
      "name": post.title
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLdScript schema={itemListSchema} nonce={nonce} />
      <WebPageSchema
        url={`${SITE_URL}/blog`}
        name="المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق"
        description="مقالات ونصوص قانونية، الأسعار المرجعية للعقار بوهران 2026، شروحات تأسيس الشركات وكل ما يخص المعاملات التوثيقية بالجزائر."
        breadcrumbs={[
          { name: "الرئيسية", item: `${SITE_URL}/` },
          { name: "المدونة", item: `${SITE_URL}/blog` }
        ]}
      />
      <main className="pt-32 pb-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">المدونة القانونية والعقارية — موثق وهران</h1>
            <p className="text-xl text-gray-600 mb-8">
              دليلك الشامل للقوانين العقارية، الإجراءات التوثيقية، وأدلة تأسيس الشركات في الجزائر. 
            </p>
            <div className="max-w-lg mx-auto">
              <Suspense fallback={null}>
                <BlogSearchInput defaultValue={q} />
              </Suspense>
            </div>
          </div>

          <section aria-label="قائمة المقالات" aria-live="polite" aria-busy={false}>
            {q && (
              <p className="text-gray-500 mb-8 font-medium">
                {filteredPosts.length} نتيجة بحث عن: <span className="text-gray-900">&quot;{q}&quot;</span>
              </p>
            )}

            {filteredPosts.length > 0 ? (
              <Suspense fallback={<BlogGridSkeleton />}>
                <BlogPostGrid posts={filteredPosts} />
              </Suspense>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 shadow-sm">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">لا توجد نتائج لـ &quot;{q}&quot;</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  حاول استخدام كلمات مفتاحية مختلفة أو تصفح جميع المقالات المتاحة.
                </p>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                >
                  <span>← عرض جميع المقالات</span>
                </Link>
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}
