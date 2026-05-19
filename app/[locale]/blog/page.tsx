import { Metadata } from 'next';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import WebPageSchema from '@/components/WebPageSchema';
import BlogSearchInput from '@/components/BlogSearchInput';
import BlogPostGrid from '@/components/BlogPostGrid';
import { JsonLdScript } from '@/components/schema';
import { SITE_URL } from '@/lib/constants';
import { blogPosts } from '@/lib/data/blog';
import type { Locale } from '@/lib/i18n-config';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const prefix = locale === 'ar' ? '' : `/fr`;
  return {
    title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
    description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
    alternates: {
      canonical: `${SITE_URL}${prefix}/blog`,
      languages: {
        'ar-DZ': `${SITE_URL}/blog`,
        'fr-DZ': `${SITE_URL}/fr/blog`,
        'x-default': `${SITE_URL}/blog`,
      },
    },
    openGraph: {
      title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
      description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
      url: `${SITE_URL}${prefix}/blog`,
      siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'المدونة القانونية - موثق معتمد',
        },
      ],
      locale: locale === 'ar' ? 'ar_DZ' : 'fr_DZ',
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
  params,
  searchParams 
}: { 
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  
  const { locale } = await params;
  const { q = '' } = await searchParams;
  
  const filteredPosts = q 
    ? blogPosts.filter(p => 
        p.title.includes(q) || 
        p.description.includes(q) || 
        p.category.includes(q)
      )
    : blogPosts;

  const prefix = locale === 'ar' ? '' : `/fr`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "المدونة القانونية والعقارية — موثق وهران",
    "description": "قائمة مقالات قانونية وعقارية من مكتب الأستاذ لعطب محمد، موثق معتمد بوهران",
    "url": SITE_URL + prefix + "/blog",
    "numberOfItems": blogPosts.length,
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": SITE_URL + prefix + "/blog/" + post.slug,
      "name": post.title
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLdScript schema={itemListSchema} nonce={nonce} />
      <WebPageSchema
        url={`${SITE_URL}${prefix}/blog`}
        name="المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق"
        description="مقالات ونصوص قانونية، الأسعار المرجعية للعقار بوهران 2026، شروحات تأسيس الشركات وكل ما يخص المعاملات التوثيقية بالجزائر."
        breadcrumbs={[
          { name: "الرئيسية", item: `${SITE_URL}${prefix}/` },
          { name: "المدونة", item: `${SITE_URL}${prefix}/blog` }
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
            <Suspense fallback={<BlogGridSkeleton />}>
              <BlogPostGrid posts={filteredPosts} />
            </Suspense>
          </section>

        </div>
      </main>
    </div>
  );
}
