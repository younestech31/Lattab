/**
 * SEO Utility for enriching meta descriptions to meet the optimal length constraints (70-160 characters).
 * 
 * Markdown files requiring source edits for description lengths:
 * - /content/blog/achat-immobilier-credit-bancaire-algerie.md
 * - /content/blog/auto-entrepreneur-startups-algerie-avantages.md
 * - /content/blog/cession-fonds-de-commerce-algerie.md
 * - /content/blog/comment-creer-sarl-en-algerie-2026.md
 * - /content/blog/comparaison-eurl-sarl-spa-algerie-2026.md
 * - /content/blog/contrat-location-commercial-oran.md
 * - /content/blog/contrat-mariage-chez-notaire-algerie.md
 * - /content/blog/difference-contrat-sous-seing-prive-authentique-algerie.md
 * - /content/blog/documents-vente-immobilier-algerie.md
 * - /content/blog/donation-entre-ascendants-descendants-algerie.md
 * - /content/blog/fredha-succession-algerie-etapes.md
 * - /content/blog/guide-acte-de-vente-immobilier.md
 * - /content/blog/livret-foncier-algerie-guide.md
 * - /content/blog/loi-11-04-promotion-immobiliere-algerie.md
 * - /content/blog/nouvelle-loi-enregistrement-immobilier-2026.md
 * - /content/blog/prix-referentiel-immobilier-oran-2026.md
 * - /content/blog/procuration-generale-algerie.md
 * - /content/blog/promesse-de-vente-algerie.md
 * - /content/blog/succession-heritage-algerie.md
 * - /content/blog/vente-sur-plan-vsp-promotion-immobiliere-oran.md
 * - /content/blog/wikalat-am-algerie-guide.md
 * - /content/blog/fr/acte-de-vente-immobilier-oran.md
 */

export const AR_DESCRIPTION_SUFFIX = 'مكتب الأستاذ لعطب محمد — موثق معتمد بوهران. خدمات قانونية وعقارية شاملة.';
export const FR_DESCRIPTION_SUFFIX = 'Office Notarial de Maître Lattab Mohamed — Notaire agréé à Oran.';

export function enrichDescription(
  description: string,
  fallbackSuffix: string,
  targetMin: number = 115,
  targetMax: number = 160
): string {
  if (description.length >= targetMin) {
    return description.slice(0, targetMax);
  }
  
  const enriched = `${description} — ${fallbackSuffix}`;
  return enriched.slice(0, targetMax);
}

export function assertDescriptionLength(
  description: string,
  context: string
): void {
  if (process.env.NODE_ENV !== 'production') return;
  if (description.length > 160) {
    throw new Error(`[SEO] Description too long (${description.length} chars) in: ${context}`);
  }
}

export function assertTitleLength(
  title: string,
  context: string
): void {
  if (process.env.NODE_ENV !== 'production') {
    if (title.length > 60) {
      console.warn(`[SEO Warn] Rendered title exceeds 60 characters in: ${context}. Got: "${title}" (${title.length} chars)`);
    }
  }
}
