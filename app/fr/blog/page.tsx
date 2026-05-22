import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import BlogSearchInput from '@/components/BlogSearchInput';
import BlogPostGrid from '@/components/BlogPostGrid';
import { JsonLdScript } from '@/components/schema';
import { SITE_URL } from '@/lib/config';
import { frBlogPosts } from '@/lib/data/blog';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;

  if (q) {
    const searchDesc = `Résultats de recherche pour les articles concernant "${q.slice(0, 30)}" sur le blog de Maître Lattab Mohamed.`;
    assertDescriptionLength(searchDesc, 'French blog page search');
    return {
      title: `Résultats de recherche pour "${q}" — Blog Juridique`,
      description: searchDesc,
      robots: { index: false, follow: true },
    };
  }

  const desc = 'Un guide complet des lois immobilières et des procédures notariales en Algérie. Articles spécialisés de l’Office de Maître Lattab Mohamed.';
  assertDescriptionLength(desc, 'French blog page main');

  return {
    title: { absolute: 'Blog Juridique et Immobilier — Notaire à Oran' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/blog`,
      languages: {
        'ar-DZ': `${SITE_URL}/blog`,
        'fr-DZ': `${SITE_URL}/fr/blog`,
        'x-default': `${SITE_URL}/blog`,
      },
    },
    openGraph: {
      title: 'Blog Juridique et Immobilier — Notaire à Oran',
      description: desc,
      url: `${SITE_URL}/fr/blog`,
      siteName: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Blog Juridique - Notaire Oran',
        },
      ],
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
    },
  };
}

const BlogGridSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-64 bg-gray-100 rounded-3xl animate-pulse" />
    ))}
  </div>
);

export default async function FrenchBlogList({ 
  searchParams 
}: { 
  searchParams: Promise<{ q?: string }> 
}) {
  const { q = '' } = await searchParams;
  
  const filteredPosts = q 
    ? frBlogPosts.filter(p => 
        p.title.toLowerCase().includes(q.toLowerCase()) || 
        p.description.toLowerCase().includes(q.toLowerCase()) || 
        p.category.toLowerCase().includes(q.toLowerCase())
      )
    : frBlogPosts;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Blog Juridique et Immobilier — Notaire à Oran",
    "description": "Liste d'articles juridiques et immobiliers de l'Office Notarial de Maître Lattab Mohamed, notaire agréé à Oran",
    "url": SITE_URL + "/fr/blog",
    "numberOfItems": frBlogPosts.length,
    "itemListElement": frBlogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": SITE_URL + "/fr/blog/" + post.slug,
      "name": post.title
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLdScript schema={itemListSchema} />
      <WebPageSchema
        url={`${SITE_URL}/fr/blog`}
        name="Blog Juridique et Immobilier | Maître Lattab Mohamed - Notaire"
        description="Textes et lois juridiques, prix référentiels immobiliers à Oran 2026, explications sur la création de sociétés et tout ce qui concerne les transactions notariales en Algérie."
        breadcrumbs={[
          { name: "Accueil", item: `${SITE_URL}/fr` },
          { name: "Blog", item: `${SITE_URL}/fr/blog` }
        ]}
      />
      <main className="pt-32 pb-20" dir="ltr" lang="fr">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">Blog Juridique et Immobilier</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Votre guide complet pour comprendre la législation immobilière, les procédures notariales et la création de sociétés en Algérie.
            </p>
            <div className="max-w-lg mx-auto">
              <Suspense fallback={null}>
                <BlogSearchInput defaultValue={q} resultsCount={filteredPosts.length} />
              </Suspense>
            </div>
          </div>

          <section aria-label="Liste d'articles" aria-live="polite" aria-busy={false}>
            {q && (
              <p className="text-gray-500 mb-8 font-medium">
                {filteredPosts.length} résultat{filteredPosts.length > 1 ? 's' : ''} de recherche pour : <span className="text-gray-900">&quot;{q}&quot;</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aucun résultat trouvé pour &quot;{q}&quot;</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Essayez d&apos;utiliser d&apos;autres mots-clés ou parcourez tous les articles disponibles.
                </p>
                <Link 
                  href="/fr/blog" 
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                >
                  <span>→ Afficher tous les articles</span>
                </Link>
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}
