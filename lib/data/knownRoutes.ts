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
  '/formulaires',
  '/fr/formulaires',
  '/formulaires/gn17',
  '/fr/formulaires/gn17',
  '/formulaires/gn31',
  '/fr/formulaires/gn31',
  '/formulaires/gn8',
  '/fr/formulaires/gn8',
  '/formulaires/gn51',
  '/fr/formulaires/gn51',
  '/nae',
  '/fr/nae',
]);

// Keep middleware edge-compatible: do not import the filesystem-backed blog registry here.
// Any syntactically valid article slug can pass the middleware indexability check. Next.js
// still returns its normal 404/noindex response for a slug that is not in generateStaticParams.
const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const NAE_CODE_PATTERN = /^[0-9]{6}$/;
const OPENGRAPH_SUFFIX = '/opengraph-image';

function isBlogRoute(pathname: string, prefix: '/blog/' | '/fr/blog/'): boolean {
  if (!pathname.startsWith(prefix)) return false;

  let slug = pathname.slice(prefix.length);
  if (slug.endsWith(OPENGRAPH_SUFFIX)) {
    slug = slug.slice(0, -OPENGRAPH_SUFFIX.length);
  }

  return BLOG_SLUG_PATTERN.test(slug);
}

function isNAERoute(pathname: string, prefix: '/nae/' | '/fr/nae/'): boolean {
  if (!pathname.startsWith(prefix)) return false;

  let code = pathname.slice(prefix.length);
  if (code.endsWith(OPENGRAPH_SUFFIX)) {
    code = code.slice(0, -OPENGRAPH_SUFFIX.length);
  }

  return NAE_CODE_PATTERN.test(code);
}

export function isKnownPublicRoute(pathname: string): boolean {
  if (KNOWN_STATIC_ROUTES.has(pathname)) return true;
  return (
    isBlogRoute(pathname, '/blog/') ||
    isBlogRoute(pathname, '/fr/blog/') ||
    isNAERoute(pathname, '/nae/') ||
    isNAERoute(pathname, '/fr/nae/')
  );
}
