import { parseMarkdown, stripFrontmatterAndLeadingH1 } from '@/lib/utils/parseMarkdown';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ReadingProgress } from '@/components/ReadingProgress';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { SITE_URL, TITLE_TEMPLATE_SUFFIX } from '@/lib/config';
import { readFile } from 'fs/promises';
import path from 'path';
import ArticleActionLinks from '@/components/ArticleActionLinks';
import { enrichDescription, AR_DESCRIPTION_SUFFIX, assertDescriptionLength, assertTitleLength } from '@/lib/utils/metaValidation';
import { RegisterAlternatePath } from '@/lib/i18n';
import { getRelatedPostsByCluster, CLUSTER_NAMES, SLUG_TO_CLUSTER } from '@/lib/data/clusters';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';

const serviceMappings: Record<string, string> = {
  'عقاري': 'عقود البيع والشراء العقارية',
  'شركات': 'تأسيس الشركات والمؤسسات',
  'جبائي': 'استشارة قانونية',
  'قانوني': 'استشارة قانونية',
};

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'acte-de-vente-immobilier-oran') {
    redirect('/blog/guide-acte-de-vente-immobilier');
  }
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    notFound();
  }

  const frPost = frBlogPosts.find(fp => fp.arSlug === post.slug);
  const languages: Record<string, string> = {
    'ar-DZ': `${SITE_URL}/blog/${post.slug}`,
    'x-default': `${SITE_URL}/blog/${post.slug}`,
  };

  if (frPost) {
    languages['fr-DZ'] = `${SITE_URL}/fr/blog/${frPost.slug}`;
  }

  if (process.env.NODE_ENV === 'development' && languages['fr-DZ'] === languages['ar-DZ']) {
    throw new Error('fr-DZ hreflang must not equal ar-DZ hreflang');
  }

  const hasSuffix = post.title.length + TITLE_TEMPLATE_SUFFIX.length <= 60;
  const titleValue = hasSuffix ? post.title : { absolute: post.title };
  const renderedTitle = hasSuffix ? `${post.title}${TITLE_TEMPLATE_SUFFIX}` : post.title;

  assertTitleLength(renderedTitle, `blog slug: ${slug}`);

  if (process.env.NODE_ENV === 'development' && post.description.length < 70) {
    console.warn(`[SEO] Short description on slug "${slug}": ${post.description.length} chars`);
  }

  const enrichedDesc = enrichDescription(post.description, AR_DESCRIPTION_SUFFIX);
  assertDescriptionLength(enrichedDesc, `blog slug: ${slug}`);

  return {
    title: titleValue,
    description: enrichedDesc,
    authors: [{ name: 'ديوان التوثيق - وهران', url: SITE_URL }],
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
      languages,
    },
    openGraph: {
      title: post.title,
      description: enrichedDesc,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'ديوان التوثيق - وهران - موثق بوهران',
      locale: 'ar_DZ',
      type: 'article',
      publishedTime: post.dateISO,
      modifiedTime: post.dateModified || post.dateISO,
      authors: ['ديوان التوثيق - وهران'],
      section: post.category,
      tags: [post.category, 'قانون جزائري', 'توثيق', 'وهران'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: enrichedDesc,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'acte-de-vente-immobilier-oran') {
    redirect('/blog/guide-acte-de-vente-immobilier');
  }
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const frPost = frBlogPosts.find(fp => fp.arSlug === post.slug);

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  
  let content: string;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }
  
  const safeHtml = await parseMarkdown(content!);
  
  const cleanContentForWords = stripFrontmatterAndLeadingH1(content);
  const wordCount = Math.round(cleanContentForWords.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length);
  
  const relatedPosts = getRelatedPostsByCluster(slug, 'ar', 3);
  const clusterKey = SLUG_TO_CLUSTER[slug] || 'immobilier';
  const clusterHeading = CLUSTER_NAMES.ar[clusterKey];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <RegisterAlternatePath 
        paths={{
          ar: `/blog/${post.slug}`,
          fr: frPost ? `/fr/blog/${frPost.slug}` : `/fr/blog`
        }}
      />
      <ReadingProgress />

      <UnifiedPageHeader
        lang="ar"
        badgeText={post.category}
        badgeIcon={<Calendar className="w-4 h-4" />}
        eyebrow="المدونة القانونية والعقارية — ديوان التوثيق"
        title={post.title}
        backLink={{
          href: '/blog',
          label: 'العودة للمدونة',
        }}
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'المدونة', href: '/blog' },
          { name: post.title },
        ]}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-emerald-200/90 pt-1 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>{post.date}</span>
          </div>
          <span className="text-white/40" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{post.readTime} قراءة</span>
          </div>
          {post.dateModified && post.dateModified !== post.dateISO && (
            <>
              <span className="text-white/40" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-emerald-200/75">
                <span>آخر تحديث:</span>
                <span>{new Date(post.dateModified).toLocaleDateString('ar-DZ')}</span>
              </div>
            </>
          )}
        </div>
      </UnifiedPageHeader>

      <main className="flex-grow -mt-6 relative z-20 pb-20" dir={post.language === 'fr' ? 'ltr' : 'rtl'}>
        <div className="container mx-auto px-4 max-w-4xl">
          <article 
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            lang={post.language === 'fr' ? 'fr' : 'ar'}
          >
            <SchemaScriptLoader schemas={[{
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": `${SITE_URL}/blog/${post.slug}#article`,
              "headline": post.title,
              "description": post.description,
              "datePublished": post.dateISO,
              "dateModified": post.dateModified || post.dateISO,
              "author": {
                "@type": "Person",
                "name": "ديوان التوثيق - وهران"
              },
              "publisher": {
                "@type": "Organization",
                "name": "الديوان العمومي للتوثيق",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${SITE_URL}/logo.webp`,
                  "width": 180,
                  "height": 180
                }
              },
              "image": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/og-image.jpg`,
                "width": 1200,
                "height": 630
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${SITE_URL}/blog/${post.slug}`
              },
              "inLanguage": "ar-DZ",
              "about": {
                "@type": "Thing",
                "name": post.category
              },
              "wordCount": wordCount,
              "isPartOf": {
                "@type": "WebSite",
                "url": SITE_URL,
                "name": "الديوان العمومي للتوثيق — ديوان التوثيق ببلدية وهران"
              }
            }, {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "المدونة", "item": `${SITE_URL}/blog` },
                { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}/blog/${post.slug}` }
              ]
            }]} />
            <div className="p-8 md:p-12">

              <div 
                className="prose prose-lg prose-emerald max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />

              <div className="mt-12 p-6 bg-gray-50 border-r-4 border-emerald-500 rounded-l-lg text-sm text-gray-600 italic">
                <span className="font-bold flex items-center gap-2 mb-2 text-gray-800 not-italic">
                   تنصل وإخلاء مسؤولية (Disclaimer):
                </span>
                هذا المقال تم إعداده لأغراض إعلامية وتوعوية فقط، وقد تتغير النصوص القانونية والجبائية أو الإجراءات بمرور الوقت وفقاً للجريدة الرسمية. يرجى التقرب من مكتب الموثق للحصول على استشارة قانونية دقيقة ومحدثة تناسب وضعيتك الخاصة.
              </div>

            </div>
          </article>

          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="font-bold text-gray-800 mb-3">🔗 قد يفيدك أيضاً:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculateur-prix-referentiel" className="text-emerald-600 hover:underline font-medium">
                  ← احسب السعر المرجعي لعقارك بوهران 2026
                </Link>
              </li>
              <li>
                <Link href="/services/vente-immobiliere" className="text-emerald-600 hover:underline font-medium">
                  ← دليل توثيق عقود البيع العقاري بمحكمة فلاوسن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-700 hover:underline font-medium">
                  ← معلومات الاتصال وأوقات الاستقبال بالديوان
                </Link>
              </li>
            </ul>
          </div>

          {/* Related Posts from Same Cluster for Internal Linking */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">
                مقالات ذات صلة في محور: {clusterHeading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group block flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-emerald-600 mb-2">{related.category}</p>
                      <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2 text-sm leading-snug">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                        {related.description}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1 pt-2 border-t border-gray-50">
                      <Calendar className="w-3 h-3" />
                      {related.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <ArticleActionLinks 
              serviceTag={post.category}
              bookingServiceValue={serviceMappings[post.category] || 'خدمات أخرى'}
              slug={slug}
              lang={post.language as 'ar' | 'fr'}
              category={post.category}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
