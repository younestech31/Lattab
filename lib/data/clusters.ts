import { BlogPost, blogPosts, frBlogPosts } from './blog';

export type ArticleCluster = 'immobilier' | 'societes' | 'famille';

export const SLUG_TO_CLUSTER: Record<string, ArticleCluster> = {
  // Immobilier
  'guide-acte-de-vente-immobilier': 'immobilier',
  'prix-referentiel-immobilier-oran-2026': 'immobilier',
  'documents-vente-immobilier-algerie': 'immobilier',
  'promesse-de-vente-algerie': 'immobilier',
  'livret-foncier-algerie-guide': 'immobilier',
  'vente-sur-plan-vsp-promotion-immobiliere-oran': 'immobilier',
  'achat-immobilier-credit-bancaire-algerie': 'immobilier',
  'loi-11-04-promotion-immobiliere-algerie': 'immobilier',
  'nouvelle-loi-enregistrement-immobilier-2026': 'immobilier',
  'difference-contrat-sous-seing-prive-authentique-algerie': 'immobilier',
  // French
  'acte-de-vente-immobilier-oran': 'immobilier',

  // Societes
  'comment-creer-sarl-en-algerie-2026': 'societes',
  'comparaison-eurl-sarl-spa-algerie-2026': 'societes',
  'auto-entrepreneur-startups-algerie-avantages': 'societes',
  'cession-fonds-de-commerce-algerie': 'societes',
  'contrat-location-commercial-oran': 'societes',

  // Famille / Statut personnel / Procurations
  'contrat-mariage-chez-notaire-algerie': 'famille',
  'succession-heritage-algerie': 'famille',
  'fredha-succession-algerie-etapes': 'famille',
  'donation-entre-ascendants-descendants-algerie': 'famille',
  'procuration-generale-algerie': 'famille',
  'wikalat-am-algerie-guide': 'famille',
};

export const CLUSTER_NAMES = {
  ar: {
    immobilier: 'المعاملات العقارية والشهر العقاري',
    societes: 'تأسيس الشركات والقانون التجاري',
    famille: 'شؤون الأسرة، التركات والوكالات',
  },
  fr: {
    immobilier: 'Droit immobilier et transactions',
    societes: 'Création d\'entreprises et droit commercial',
    famille: 'Droit de la famille, successions et procurations',
  },
};

export function getRelatedPostsByCluster(slug: string, lang: 'ar' | 'fr', count: number = 3): BlogPost[] {
  const cluster = SLUG_TO_CLUSTER[slug] || 'immobilier';
  const pool = lang === 'ar' ? blogPosts : frBlogPosts;

  // Filter posts in the same cluster, excluding current post
  const clusterMatches = pool.filter(p => p.slug !== slug && SLUG_TO_CLUSTER[p.slug] === cluster);

  if (clusterMatches.length >= count) {
    return clusterMatches.slice(0, count);
  }

  // If not enough in cluster (e.g. for French where only 3 posts exist), backfill with other posts
  const remaining = pool.filter(p => p.slug !== slug && !clusterMatches.some(m => m.slug === p.slug));
  return [...clusterMatches, ...remaining].slice(0, count);
}
