import { parseMarkdown, stripFrontmatterAndLeadingH1 } from '@/lib/utils/parseMarkdown';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReadingProgress } from '@/components/ReadingProgress';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { frBlogPosts, getFrBlogPosts } from '@/lib/data/blog';
import { SITE_URL, FR_TITLE_SUFFIX } from '@/lib/config';
import { readFile } from 'fs/promises';
import path from 'path';
import ArticleActionLinks from '@/components/ArticleActionLinks';
import { enrichDescription, FR_DESCRIPTION_SUFFIX, assertDescriptionLength, assertTitleLength } from '@/lib/utils/metaValidation';

const serviceMappings: Record<string, string> = {
  'Immobilier': 'عقود البيع والشراء العقارية',
  'Sociétés': 'تأسيس الشركات والمؤسسات',
  'Fiscal': 'استشارة قانونية',
  'Juridique': 'استشارة قانونية',
};

export const revalidate = 86400;
export const dynamicParams = false;

export async function generateStaticParams() {
  return frBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = frBlogPosts.find(p => p.slug === slug);
  if (!post) {
    return { title: 'Article non trouvé' };
  }

  const languages: Record<string, string> = {
    'fr-DZ': `${SITE_URL}/fr/blog/${post.slug}`,
  };
  
  if (post.arSlug) {
    languages['ar-DZ'] = `${SITE_URL}/blog/${post.arSlug}`;
    languages['x-default'] = `${SITE_URL}/blog/${post.arSlug}`;
  }

  const hasSuffix = post.title.length + FR_TITLE_SUFFIX.length <= 60;
  const titleValue = { absolute: hasSuffix ? `${post.title}${FR_TITLE_SUFFIX}` : post.title };
  const renderedTitle = hasSuffix ? `${post.title}${FR_TITLE_SUFFIX}` : post.title;

  assertTitleLength(renderedTitle, `fr blog slug: ${slug}`);

  if (process.env.NODE_ENV === 'development' && post.description.length < 70) {
    console.warn(`[SEO] Short description on slug "${slug}": ${post.description.length} chars`);
  }

  const enrichedDesc = enrichDescription(post.description, FR_DESCRIPTION_SUFFIX);
  assertDescriptionLength(enrichedDesc, `fr blog slug: ${slug}`);

  return {
    title: titleValue,
    description: enrichedDesc,
    authors: [{ name: 'Office Notarial de Maître Lattab Mohamed', url: SITE_URL }],
    alternates: {
      canonical: `${SITE_URL}/fr/blog/${post.slug}`,
      languages: languages,
    },
    openGraph: {
      title: post.title,
      description: enrichedDesc,
      url: `${SITE_URL}/fr/blog/${post.slug}`,
      siteName: 'Office Notarial de Maître Lattab Mohamed - Notaire à Oran',
      locale: 'fr_DZ',
      type: 'article',
      publishedTime: post.dateISO,
      modifiedTime: post.dateModified || post.dateISO,
      authors: ['Office Notarial de Maître Lattab Mohamed'],
      section: post.category,
      tags: [post.category, 'Droit Algérien', 'Notariat', 'Oran'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: enrichedDesc,
    },
  };
}

export default async function FrenchBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = frBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'content', 'blog', 'fr', `${slug}.md`);
  
  let content: string;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }
  
  const safeHtml = await parseMarkdown(content!);
  
  const cleanContentForWords = stripFrontmatterAndLeadingH1(content);
  const wordCount = Math.round(cleanContentForWords.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length);
  
  const relatedPosts = getFrBlogPosts()
    .filter(p => p.slug !== slug && p.category === post.category)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ReadingProgress />
      <main className="flex-grow pt-32 pb-20">
        <div dir="ltr" lang="fr" className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-4 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <nav className="flex items-center gap-2" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Accueil</Link>
              <span aria-hidden="true">&gt;</span>
              <Link href="/blog" className="hover:text-emerald-700 transition-colors">Blog</Link>
              <span aria-hidden="true">&gt;</span>
              <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none inline-block align-bottom">{post.title}</span>
            </nav>
          </div>

          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-bold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retourner au blog
            </Link>
          </div>

          <article 
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <SchemaScriptLoader schemas={[{
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": `${SITE_URL}/fr/blog/${post.slug}#article`,
              "headline": post.title,
              "description": post.description,
              "datePublished": post.dateISO,
              "dateModified": post.dateModified || post.dateISO,
              "author": {
                "@type": "Person",
                "name": "Maître Lattab Mohamed"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Office Notarial de Maître Lattab Mohamed",
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
                "@id": `${SITE_URL}/fr/blog/${post.slug}`
              },
              "inLanguage": "fr-DZ",
              "about": {
                "@type": "Thing",
                "name": post.category
              },
              "wordCount": wordCount,
              "isPartOf": {
                "@type": "WebSite",
                "url": SITE_URL,
                "name": "Office Notarial de Maître Lattab Mohamed — Notaire à Oran"
              }
            }, {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": `${SITE_URL}/fr` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/fr/blog` },
                { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_URL}/fr/blog/${post.slug}` }
              ]
            }]} />
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 border-l pl-4 ml-4 border-gray-200">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 border-l pl-4 ml-4 border-gray-200">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                {post.dateModified && post.dateModified !== post.dateISO && (
                  <div className="flex items-center gap-1.5 border-l pl-4 ml-4 border-gray-200 text-gray-500">
                    <span className="font-medium text-gray-400">Dernière mise à jour :</span>
                    <span>{new Date(post.dateModified).toLocaleDateString('fr-DZ')}</span>
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

              <div className="mt-12 p-6 bg-gray-50 border-l-4 border-emerald-500 rounded-r-lg text-sm text-gray-600 italic">
                <span className="font-bold flex items-center gap-2 mb-2 text-gray-800 not-italic">
                   Avis de non-responsabilité (Disclaimer):
                </span>
                Cet article a été rédigé à des fins d&apos;information et de sensibilisation uniquement, et les textes législatifs, fiscaux ou les procédures peuvent changer au fil du temps selon le Journal Officiel. Veuillez vous rapprocher de l&apos;office notarial pour obtenir des conseils juridiques précis et mis à jour adaptés à votre situation personnelle.
              </div>
            </div>
            
            <div className="bg-emerald-950 p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Avez-vous besoin d&apos;un accompagnement juridique et notarial sur ce sujet ?</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                L&apos;Office Notarial de Maître Lattab Mohamed est prêt à étudier votre dossier et rassurer vos procédures en toute sécurité et dans les meilleurs délais.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex py-3 px-8 bg-amber-500 hover:bg-amber-400 text-emerald-950 rounded-full font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                Contactez-nous maintenant pour déposer votre dossier
              </Link>
            </div>
          </article>

          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="font-bold text-gray-800 mb-3">🔗 Cela pourrait aussi vous être utile :</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculateur-prix-referentiel" className="text-emerald-600 hover:underline font-medium">
                  → Calculez le prix de référence de votre bien immobilier à Oran en 2026
                </Link>
              </li>
              <li>
                <Link href="/#appointment" className="text-emerald-600 hover:underline font-medium">
                  → Prenez rendez-vous avec le notaire directement
                </Link>
              </li>
            </ul>
          </div>

          {/* Related Posts for Internal Linking */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Autres articles dans : {post.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.id}
                    href={`/fr/blog/${related.slug}`}
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
