import { marked } from 'marked';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://lattab.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return { title: 'مقال غير موجود' };
  }
  return {
    title: `${post.title} | الأستاذ لعطب محمد - موثق`,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      url: `/blog/${slug}`,
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
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
  const processedContent = await marked(content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "لعطب محمد",
      "jobTitle": "موثق معتمد"
    },
    "publisher": { "@id": `${SITE_URL}/#organization` },
    "mainEntityOfPage": { "@id": `${SITE_URL}/blog/${slug}` }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              العودة للمدونة
            </Link>
          </div>

          <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />                
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
                dangerouslySetInnerHTML={{ __html: processedContent }}
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
