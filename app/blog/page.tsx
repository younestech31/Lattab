import { Metadata } from 'next';
import { headers } from 'next/headers';
import WebPageSchema from '@/components/WebPageSchema';
import BlogSearchList from '@/components/BlogSearchList';
import BlogPostGrid from '@/components/BlogPostGrid';
import { JsonLdScript } from '@/components/schema';
import { SITE_URL } from '@/lib/constants';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
  description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
  alternates: {
    canonical: `${SITE_URL}/blog`,    // was missing base URL — CRITICAL fix
    languages: {
      'ar-DZ': `${SITE_URL}/blog`,
      'x-default': `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
    description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
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
    locale: 'ar_DZ',
    type: 'website',
  },
};

export default async function BlogList() {
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';

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
            <p className="text-xl text-gray-600">
              دليلك الشامل للقوانين العقارية، الإجراءات التوثيقية، وأدلة تأسيس الشركات في الجزائر. 
            </p>
          </div>

          <noscript>
            <BlogPostGrid posts={blogPosts} />
          </noscript>

          <BlogSearchList posts={blogPosts} />
        </div>
      </main>
    </div>
  );
}
