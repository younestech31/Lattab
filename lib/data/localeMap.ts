import { LAST_CONTENT_UPDATED } from '@/lib/config';

export interface RouteLocaleEntry {
  arPath: string;
  frPath: string | null;
  lastmod: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const STATIC_LOCALE_MAP: RouteLocaleEntry[] = [
  {
    arPath: '/',
    frPath: '/fr',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    arPath: '/a-propos',
    frPath: '/fr/a-propos',
    lastmod: '2026-09-24',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/contact',
    frPath: '/fr/contact',
    lastmod: '2026-09-24',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services',
    frPath: '/fr/services',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    arPath: '/services/vente-immobiliere',
    frPath: '/fr/services/vente-immobiliere',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services/creation-societe',
    frPath: '/fr/services/creation-societe',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services/procuration',
    frPath: '/fr/services/procuration',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services/succession',
    frPath: '/fr/services/succession',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services/contrat-mariage',
    frPath: '/fr/services/contrat-mariage',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/services/hypotheque',
    frPath: '/fr/services/hypotheque',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/calculateur-prix-referentiel',
    frPath: '/fr/calculateur-prix-referentiel',
    lastmod: '2026-09-24',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/blog',
    frPath: '/fr/blog',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    arPath: '/useful-links',
    frPath: '/fr/useful-links',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.5,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/terms-privacy',
    frPath: '/fr/terms-privacy',
    lastmod: '2025-01-01',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    arPath: '/formulaires',
    frPath: '/fr/formulaires',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/formulaires/gn17',
    frPath: '/fr/formulaires/gn17',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/formulaires/gn31',
    frPath: '/fr/formulaires/gn31',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/formulaires/gn8',
    frPath: '/fr/formulaires/gn8',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    arPath: '/formulaires/gn51',
    frPath: '/fr/formulaires/gn51',
    lastmod: LAST_CONTENT_UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
];

export const BLOG_PAIRS_MAP: Record<string, string> = {
  'guide-acte-de-vente-immobilier': 'acte-de-vente-immobilier-oran',
  'achat-immobilier-credit-bancaire-algerie': 'achat-immobilier-credit-bancaire-algerie',
  'auto-entrepreneur-startups-algerie-avantages': 'auto-entrepreneur-startups-algerie-avantages',
  'bail-habitation-vs-commercial-algerie': 'bail-habitation-vs-commercial-algerie',
  'cession-fonds-de-commerce-algerie': 'cession-fonds-de-commerce-algerie',
  'comment-creer-sarl-en-algerie-2026': 'comment-creer-sarl-en-algerie-2026',
  'comparaison-eurl-sarl-spa-algerie-2026': 'comparaison-eurl-sarl-spa-algerie-2026',
  'contrat-location-commercial-oran': 'contrat-location-commercial-oran',
  'contrat-mariage-chez-notaire-algerie': 'contrat-mariage-chez-notaire-algerie',
  'declaration-plus-value-gn17-vente-immobilier-algerie': 'declaration-plus-value-gn17-vente-immobilier-algerie',
  'difference-contrat-sous-seing-prive-authentique-algerie': 'difference-contrat-sous-seing-prive-authentique-algerie',
  'documents-vente-immobilier-algerie': 'documents-vente-immobilier-algerie',
  'donation-entre-ascendants-descendants-algerie': 'donation-entre-ascendants-descendants-algerie',
  'droit-preemption-vente-immobilier-algerie': 'droit-preemption-vente-immobilier-algerie',
  'fredha-succession-algerie-etapes': 'fredha-succession-algerie-etapes',
  'livret-foncier-algerie-guide': 'livret-foncier-algerie-guide',
  'loi-11-04-promotion-immobiliere-algerie': 'loi-11-04-promotion-immobiliere-algerie',
  'mainlevee-hypotheque-apres-credit-algerie': 'mainlevee-hypotheque-apres-credit-algerie',
  'notaire-algeriens-etranger-procuration-legalisation': 'notaire-algeriens-etranger-procuration-legalisation',
  'nouvelle-loi-enregistrement-immobilier-2026': 'nouvelle-loi-enregistrement-immobilier-2026',
  'prix-referentiel-immobilier-oran-2026': 'prix-referentiel-immobilier-oran-2026',
  'procuration-generale-algerie': 'procuration-generale-algerie',
  'promesse-de-vente-algerie': 'promesse-de-vente-algerie',
  'renonciation-succession-notaire-algerie': 'renonciation-succession-notaire-algerie',
  'sortie-indivision-immobiliere-algerie': 'sortie-indivision-immobiliere-algerie',
  'succession-heritage-algerie': 'succession-heritage-algerie',
  'taxe-fonciere-gn31-algerie': 'taxe-fonciere-gn31-algerie',
  'vente-sur-plan-vsp-promotion-immobiliere-oran': 'vente-sur-plan-vsp-promotion-immobiliere-oran',
  'wikalat-am-algerie-guide': 'wikalat-am-algerie-guide',
};

export const FR_TO_AR_BLOG_MAP: Record<string, string> = {
  'acte-de-vente-immobilier-oran': 'guide-acte-de-vente-immobilier',
  'achat-immobilier-credit-bancaire-algerie': 'achat-immobilier-credit-bancaire-algerie',
  'auto-entrepreneur-startups-algerie-avantages': 'auto-entrepreneur-startups-algerie-avantages',
  'bail-habitation-vs-commercial-algerie': 'bail-habitation-vs-commercial-algerie',
  'cession-fonds-de-commerce-algerie': 'cession-fonds-de-commerce-algerie',
  'comment-creer-sarl-en-algerie-2026': 'comment-creer-sarl-en-algerie-2026',
  'comparaison-eurl-sarl-spa-algerie-2026': 'comparaison-eurl-sarl-spa-algerie-2026',
  'contrat-location-commercial-oran': 'contrat-location-commercial-oran',
  'contrat-mariage-chez-notaire-algerie': 'contrat-mariage-chez-notaire-algerie',
  'declaration-plus-value-gn17-vente-immobilier-algerie': 'declaration-plus-value-gn17-vente-immobilier-algerie',
  'difference-contrat-sous-seing-prive-authentique-algerie': 'difference-contrat-sous-seing-prive-authentique-algerie',
  'documents-vente-immobilier-algerie': 'documents-vente-immobilier-algerie',
  'donation-entre-ascendants-descendants-algerie': 'donation-entre-ascendants-descendants-algerie',
  'droit-preemption-vente-immobilier-algerie': 'droit-preemption-vente-immobilier-algerie',
  'fredha-succession-algerie-etapes': 'fredha-succession-algerie-etapes',
  'livret-foncier-algerie-guide': 'livret-foncier-algerie-guide',
  'loi-11-04-promotion-immobiliere-algerie': 'loi-11-04-promotion-immobiliere-algerie',
  'mainlevee-hypotheque-apres-credit-algerie': 'mainlevee-hypotheque-apres-credit-algerie',
  'notaire-algeriens-etranger-procuration-legalisation': 'notaire-algeriens-etranger-procuration-legalisation',
  'nouvelle-loi-enregistrement-immobilier-2026': 'nouvelle-loi-enregistrement-immobilier-2026',
  'prix-referentiel-immobilier-oran-2026': 'prix-referentiel-immobilier-oran-2026',
  'procuration-generale-algerie': 'procuration-generale-algerie',
  'promesse-de-vente-algerie': 'promesse-de-vente-algerie',
  'renonciation-succession-notaire-algerie': 'renonciation-succession-notaire-algerie',
  'sortie-indivision-immobiliere-algerie': 'sortie-indivision-immobiliere-algerie',
  'succession-heritage-algerie': 'succession-heritage-algerie',
  'taxe-fonciere-gn31-algerie': 'taxe-fonciere-gn31-algerie',
  'vente-sur-plan-vsp-promotion-immobiliere-oran': 'vente-sur-plan-vsp-promotion-immobiliere-oran',
  'wikalat-am-algerie-guide': 'wikalat-am-algerie-guide',
};

export function getCounterpartBlogUrl(currentPath: string): string {
  if (currentPath.startsWith('/fr/blog/')) {
    const slug = currentPath.replace(/^\/fr\/blog\//, '');
    const arSlug = FR_TO_AR_BLOG_MAP[slug];
    if (arSlug) return `/blog/${arSlug}`;
    return '/blog';
  }
  
  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace(/^\/blog\//, '');
    const frSlug = BLOG_PAIRS_MAP[slug];
    if (frSlug) return `/fr/blog/${frSlug}`;
    return '/fr/blog';
  }

  return currentPath;
}
