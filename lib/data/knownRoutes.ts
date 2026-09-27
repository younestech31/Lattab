export const KNOWN_STATIC_ROUTES = new Set([
  '/',
  '/fr',
  '/blog',
  '/fr/blog',
  '/services',
  '/fr/services',
  '/calculateur-prix-referentiel',
  '/fr/calculateur-prix-referentiel',
  '/useful-links',
  '/fr/useful-links',
  '/terms-privacy',
  '/fr/terms-privacy',
  '/a-propos',
  '/fr/a-propos',
  '/contact',
  '/fr/contact',
  '/services/vente-immobiliere',
  '/fr/services/vente-immobiliere',
  '/services/creation-societe',
  '/fr/services/creation-societe',
  '/services/procuration',
  '/fr/services/procuration',
  '/services/succession',
  '/fr/services/succession',
  '/services/contrat-mariage',
  '/fr/services/contrat-mariage',
  '/services/hypotheque',
  '/fr/services/hypotheque',
]);

export const KNOWN_AR_BLOG_SLUGS = new Set([
  'achat-immobilier-credit-bancaire-algerie',
  'auto-entrepreneur-startups-algerie-avantages',
  'cession-fonds-de-commerce-algerie',
  'comment-creer-sarl-en-algerie-2026',
  'comparaison-eurl-sarl-spa-algerie-2026',
  'contrat-location-commercial-oran',
  'contrat-mariage-chez-notaire-algerie',
  'difference-contrat-sous-seing-prive-authentique-algerie',
  'documents-vente-immobilier-algerie',
  'donation-entre-ascendants-descendants-algerie',
  'fredha-succession-algerie-etapes',
  'guide-acte-de-vente-immobilier',
  'livret-foncier-algerie-guide',
  'loi-11-04-promotion-immobiliere-algerie',
  'nouvelle-loi-enregistrement-immobilier-2026',
  'prix-referentiel-immobilier-oran-2026',
  'procuration-generale-algerie',
  'promesse-de-vente-algerie',
  'succession-heritage-algerie',
  'vente-sur-plan-vsp-promotion-immobiliere-oran',
  'wikalat-am-algerie-guide',
]);

export const KNOWN_FR_BLOG_SLUGS = new Set([
  'acte-de-vente-immobilier-oran',
  'cession-fonds-de-commerce-algerie',
  'comment-creer-sarl-en-algerie-2026',
]);

export function isKnownPublicRoute(pathname: string): boolean {
  if (KNOWN_STATIC_ROUTES.has(pathname)) return true;

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace(/^\/blog\//, '');
    if (slug.endsWith('/opengraph-image')) {
      const realSlug = slug.replace(/\/opengraph-image$/, '');
      return KNOWN_AR_BLOG_SLUGS.has(realSlug);
    }
    return KNOWN_AR_BLOG_SLUGS.has(slug);
  }

  if (pathname.startsWith('/fr/blog/')) {
    const slug = pathname.replace(/^\/fr\/blog\//, '');
    if (slug.endsWith('/opengraph-image')) {
      const realSlug = slug.replace(/\/opengraph-image$/, '');
      return KNOWN_FR_BLOG_SLUGS.has(realSlug);
    }
    return KNOWN_FR_BLOG_SLUGS.has(slug);
  }

  if (pathname.endsWith('/opengraph-image')) {
    return true;
  }

  return false;
}
