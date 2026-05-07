import { marked } from 'marked';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';
import fs from 'fs';
import path from 'path';
import { SITE_URL } from '@/lib/constants';

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
    title: `${post.title} | موثق لعطب`,
    description: description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
      languages: {
        'ar-DZ': post.language === 'ar' || post.language === 'ar-fr' ? `${SITE_URL}/blog/${slug}` : undefined,
        'fr-DZ': post.language === 'fr' || post.language === 'ar-fr' ? `${SITE_URL}/blog/${slug}` : undefined,
      },
    },
    openGraph: {
      url: `${SITE_URL}/blog/${slug}`,
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.dateISO,
      siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
      locale: 'ar_DZ',
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const rawHtml = await marked(content);
  
  // Calculate word count for schema
  const wordCount = content.split(/\s+/).length;

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": [
      `${SITE_URL}/og-image.jpg`
    ],
    "datePublished": post.dateISO,
    "dateModified": post.dateModified ?? post.dateISO,
    "author": {
      "@type": "Person",
      "name": "الأستاذ لعطب محمد",
      "jobTitle": "موثق معتمد",
      "url": `${SITE_URL}/#about`
    },
    "publisher": {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      "name": "مكتب الموثق لعطب محمد",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo-optimized.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`
    },
    "isPartOf": { "@id": "https://lattab.vercel.app/blog" },
    "inLanguage": post.language === 'fr' ? 'fr-DZ' : 'ar-DZ',
    "wordCount": wordCount
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${SITE_URL}/blog/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ReadingProgress />
      <Header />
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />                
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />                
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
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              <div 
                className="prose prose-lg prose-emerald max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: rawHtml }}
              />
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

          {/* Related Posts for Internal Linking */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
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
      <Footer />
    </div>
  );
}
