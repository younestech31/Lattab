import { parseMarkdown } from '@/lib/utils/parseMarkdown';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';
import { headers } from 'next/headers';
import { SITE_URL } from '@/lib/constants';
import { JsonLdScript } from '@/components/schema';
import { readFile, access } from 'fs/promises';
import path from 'path';

export const revalidate = 86400;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return { title: 'مقال غير موجود' };
  }
  const description = post.description.length > 155 
    ? post.description.slice(0, 152) + '...' 
    : post.description;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: 'مكتب الأستاذ لعطب محمد', url: SITE_URL }],
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
      languages: {
        'ar-DZ': `${SITE_URL}/blog/${post.slug}`,
        'x-default': `${SITE_URL}/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
      locale: 'ar_DZ',
      type: 'article',
      publishedTime: post.dateISO,
      modifiedTime: post.dateModified || post.dateISO,
      authors: ['مكتب الأستاذ لعطب محمد'],
      section: post.category,
      tags: [post.category, 'قانون جزائري', 'توثيق', 'وهران'],
      images: [
        {
          url: `${SITE_URL}/logo.webp`,
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/logo.webp`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  
  try {
    await access(filePath);
  } catch (e) {
    notFound();
  }
  
  const content = await readFile(filePath, 'utf-8');
  const safeHtml = await parseMarkdown(content);
  
  const wordCount = Math.round(content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length);
  
  // Priority: same category first, then most recent as fallback
  const sameCategoryPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);
  
  const relatedPosts = sameCategoryPosts.length >= 3
    ? sameCategoryPosts
    : [
        ...sameCategoryPosts,
        ...blogPosts
          .filter(p => p.slug !== slug && p.category !== post.category)
          .slice(0, 3 - sameCategoryPosts.length),
      ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ReadingProgress />
      <main className="flex-grow pt-32 pb-20" dir={post.language === 'fr' ? 'ltr' : 'rtl'}>
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-4 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <nav className="flex items-center gap-2" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-emerald-700 transition-colors">الرئيسية</Link>
              <span aria-hidden="true">&gt;</span>
              <Link href="/blog" className="hover:text-emerald-700 transition-colors">المدونة</Link>
              <span aria-hidden="true">&gt;</span>
              <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none inline-block align-bottom">{post.title}</span>
            </nav>
          </div>

          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              العودة للمدونة
            </Link>
          </div>

          <article 
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            lang={post.language === 'fr' ? 'fr' : 'ar'}
          >
            <JsonLdScript
              schema={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "datePublished": post.dateISO,
                "dateModified": post.dateModified || post.dateISO,
                "wordCount": wordCount,
                "keywords": [post.category, 'قانون جزائري', 'توثيق', 'وهران', 'موثق معتمد'],
                "articleSection": post.category,
                "author": {
                  "@type": "Person",
                  "name": "لعطب محمد",
                  "honorificPrefix": "الأستاذ",
                  "jobTitle": "موثق معتمد",
                  "url": SITE_URL + '/#about',
                  "sameAs": [SITE_URL],
                  "hasCredential": {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "موثق معتمد",
                    "recognizedBy": {
                      "@type": "GovernmentOrganization",
                      "name": "وزارة العدل الجزائرية"
                    }
                  },
                  "worksFor": {
                    "@type": "LegalService",
                    "name": "مكتب الأستاذ لعطب محمد",
                    "url": SITE_URL,
                  }
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "مكتب الأستاذ لعطب محمد",
                  "logo": {
                    "@type": "ImageObject",
                    "url": `${SITE_URL}/logo.webp`,
                    "width": 512,
                    "height": 512
                  }
                },
                "image": {
                  "@type": "ImageObject",
                  "url": `${SITE_URL}/logo.webp`,
                  "width": 512,
                  "height": 512
                },
                "url": `${SITE_URL}/blog/${post.slug}`,
                "inLanguage": post.language === 'fr' ? 'fr-DZ' : 'ar-DZ',
                "about": {
                  "@type": "Thing",
                  "name": post.category
                },
                "isPartOf": {
                  "@type": "WebSite",
                  "url": SITE_URL,
                  "name": "مكتب الأستاذ لعطب محمد"
                }
              }}
              nonce={nonce}
            />
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 border-r pr-4 border-gray-200">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 border-r pr-4 border-gray-200">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} قراءة</span>
                </div>
                {post.dateModified && post.dateModified !== post.dateISO && (
                  <div className="flex items-center gap-1.5 border-r pr-4 border-gray-200 text-gray-500">
                    <span className="font-medium text-gray-400">آخر تحديث:</span>
                    <span>{new Date(post.dateModified).toLocaleDateString('ar-DZ')}</span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

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
            
            <div className="bg-emerald-900 p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">هل تحتاج لمرافقة قانونية وتوثيقية في هذا الموضوع؟</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                مكتب الأستاذ لعطب محمد - الموثق المعتمد، مستعد لدراسة ملفك وتسهيل إجراءاتك بأمان تام وفي أسرع وقت.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex py-3 px-8 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-full font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                تواصل معنا الآن لإيداع ملفك
              </Link>
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
                <Link href="/#appointment" className="text-emerald-600 hover:underline font-medium">
                  ← احجز موعداً مع الموثق مباشرة
                </Link>
              </li>
            </ul>
          </div>

          {/* Related Posts for Internal Linking */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات أخرى في: {post.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group block"
                >
                  <p className="text-sm font-bold text-emerald-600 mb-2">{related.category}</p>
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {related.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
