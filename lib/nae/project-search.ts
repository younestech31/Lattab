import type { NAEActivity } from "./schema";
import { normalizeNAESearchText, searchNAE, type NAESearchIndex, type NAESearchMatchField } from "./search";

export interface NAEProjectSearchResult {
  activity: NAEActivity;
  score: number;
  matchedTerms: string[];
  matchedFields: NAESearchMatchField[];
  usedSynonym: boolean;
}

/**
 * Reviewed Arabic-to-French search vocabulary.
 * These are retrieval terms only: they never replace or rewrite source labels.
 */
const AR_TO_FR: Record<string, string[]> = {
  // Informatique
  "حاسوب": ["ordinateur", "informatique"],
  "حواسيب": ["ordinateur", "informatique"],
  "كمبيوتر": ["ordinateur", "informatique"],
  "كمبيوترات": ["ordinateur", "informatique"],
  "اعلام": ["informatique"],
  "معلوماتية": ["informatique"],
  "برمجيات": ["logiciels", "programmation"],
  "برمجة": ["programmation"],
  "شبكات": ["réseau", "réseaux"],
  "شبكة": ["réseau"],
  // Bakery and food preparation
  "مخبزة": ["boulangerie", "boulangerie pâtisserie"],
  "مخبز": ["boulangerie", "boulanger"],
  "مخابز": ["boulangerie"],
  "خباز": ["boulanger", "boulangerie"],
  "حلويات": ["pâtisserie", "confiserie"],
  "مرطبات": ["pâtisserie", "viennoiserie"],
  "معجنات": ["pâtisserie", "viennoiserie"],
  // Restaurants and catering
  "مطعم": ["restaurant", "restauration"],
  "مطاعم": ["restaurant", "restauration"],
  "اطعام": ["restauration", "service de restauration"],
  "مأكولات": ["restauration", "préparation de repas"],
  "وجبات": ["repas", "restauration"],
  "تموين": ["traiteur", "restauration collective"],
  // Pharmacy and medicines
  "صيدلية": ["pharmacie", "officine pharmaceutique"],
  "صيدليات": ["pharmacie", "officine pharmaceutique"],
  "صيدلي": ["pharmacie", "pharmaceutique"],
  "ادوية": ["médicaments", "produits pharmaceutiques"],
  "دواء": ["médicament", "produit pharmaceutique"],
  "شبه صيدلانية": ["parapharmaceutique"],
  "مستلزمات طبية": ["dispositifs médicaux", "matériel médical"],
  // Real estate
  "عقار": ["immobilier", "agence immobilière"],
  "عقاري": ["immobilier", "immobilière"],
  "عقارات": ["immobilier", "biens immobiliers"],
  "عقارية": ["immobilière", "immobilier"],
  "كراء": ["location", "location immobilière"],
  "تأجير": ["location", "location immobilière"],
  "ايجار": ["location", "location immobilière"],
  "سكن": ["habitation", "logement"],
  // Transport and logistics
  "نقل": ["transport", "transport de marchandises", "transport de voyageurs"],
  "مواصلات": ["transport", "transport de voyageurs"],
  "شحن": ["fret", "transport de marchandises"],
  "توصيل": ["livraison", "transport"],
  "تسليم": ["livraison"],
  "ترحيل": ["déménagement"],
  "مسافرين": ["voyageurs", "transport de voyageurs"],
  "بضائع": ["marchandises", "transport de marchandises"],
  // Construction and contracting
  "مقاولة": ["entreprise de travaux", "travaux publics", "construction"],
  "مقاولات": ["entreprise de travaux", "travaux publics", "construction"],
  "مقاول": ["entreprise de travaux", "entrepreneur", "construction"],
  "بناء": ["bâtiment", "construction"],
  "اشغال": ["travaux"],
  "انشاءات": ["construction", "bâtiment"],
  "تهيئة": ["aménagement"],
  "ترميم": ["rénovation", "réhabilitation"],
  "كهرباء": ["électricité", "installation électrique"],
  "سباكة": ["plomberie"],
  "عزل": ["étanchéité", "isolation"],
  // Import and trade
  "استيراد": ["importation", "import"],
  "بيع": ["vente", "commerce"],
  "تجزئة": ["détail"],
  "جملة": ["gros"],
  "تصدير": ["exportation", "export"],
  "انتاج": ["production", "fabrication"],
  "تصنيع": ["fabrication"],
  // General operations
  "صيانة": ["maintenance", "entretien"],
  "تصليح": ["réparation"],
  "اصلاح": ["réparation"],
  "تركيب": ["installation", "montage"],
  "تنصيب": ["installation"],
  "تكوين": ["formation"],
  "تدريب": ["formation"],
  "استشارة": ["conseil"],
};
const FR_SYNONYMS: Record<string, string[]> = {
  ordinateur: ["informatique"],
  informatique: ["ordinateur"],
  maintenance: ["entretien", "réparation"],
  entretien: ["maintenance"],
  réparation: ["maintenance"],
  reparation: ["maintenance"],
  installation: ["montage"],
  montage: ["installation"],
  vente: ["commerce"],
  pharmacie: ["officine pharmaceutique"],
  boulangerie: ["boulangerie pâtisserie"],
  restaurant: ["restauration"],
};
const AR_PHRASE_SYNONYMS: Record<string, string[]> = {
  "مخبزة حلويات": ["boulangerie pâtisserie", "boulangerie", "pâtisserie"],
  "مطعم سريع": ["restauration rapide", "restaurant rapide"],
  "مطعم جماعي": ["restauration collective", "restauration"],
  "نقل البضائع": ["transport de marchandises", "fret"],
  "نقل الاشخاص": ["transport de voyageurs", "transport de personnes"],
  "وكالة عقارية": ["agence immobilière", "transaction immobilière"],
  "تسيير العقارات": ["gestion immobilière", "administration de biens"],
  "اشغال عمومية": ["travaux publics", "entreprise de travaux publics"],
  "مقاولات عامة": ["entreprise générale de travaux", "travaux publics", "construction"],
  "مقاولة بناء": ["entreprise de construction", "travaux de bâtiment"],
  "استيراد واعادة البيع": ["importation pour la revente en l'état", "importation"],
  "تجارة الادوية": ["commerce de médicaments", "produits pharmaceutiques"],
};
const STOP = new Set([
  "في", "من", "على", "الى", "عن", "مع", "و", "او", "اريد", "مشروع", "المشروع",
  "نشاط", "نشاطات", "مؤسسة", "شركة", "لدى", "بغرض",
  "de", "du", "des", "la", "le", "les", "un", "une", "et", "ou", "dans", "pour",
  "avec", "activité", "activités", "entreprise", "projet",
]);
const MAX_QUERY_TERMS = 40;

function weight(field: NAESearchMatchField) {
  return field === "code" ? 36 : field === "label_ar" || field === "label_fr" ? 22 : field === "contenue_fr" ? 14 : 11;
}

function variants(token: string) {
  const found = new Set([token]);
  if (token.startsWith("ال") && token.length > 3) found.add(token.slice(2));
  if (token.startsWith("بال") && token.length > 4) { found.add(token.slice(2)); found.add(token.slice(3)); }
  if (token.startsWith("لل") && token.length > 4) found.add(token.slice(2));
  return [...found];
}

function includesPhrase(query: string, phrase: string): boolean {
  const queryTokens = query.split(" ").filter(Boolean);
  const phraseTokens = normalizeNAESearchText(phrase).split(" ").filter(Boolean);
  if (!phraseTokens.length || phraseTokens.length > queryTokens.length) return false;
  return queryTokens.some((_, start) =>
    phraseTokens.every((token, offset) => queryTokens[start + offset] === token),
  );
}

export function searchNAEProject(index: NAESearchIndex, rawQuery: string, limit = 20): NAEProjectSearchResult[] {
  const query = normalizeNAESearchText(rawQuery);
  if (!query) return [];
  const tokens = [...new Set(query.split(" ").filter((token) => token.length > 1 && !STOP.has(token)))].slice(0, MAX_QUERY_TERMS);
  const candidates = new Map<string, { activity: NAEActivity; score: number; terms: Set<string>; fields: Set<NAESearchMatchField>; usedSynonym: boolean }>();

  const add = (term: string, phrase: boolean, synonym: boolean) => {
    if (!term) return;
    for (const match of searchNAE(index, term, { limit: phrase ? 80 : 120 })) {
      const current = candidates.get(match.activity.code) ?? {
        activity: match.activity, score: 0, terms: new Set<string>(),
        fields: new Set<NAESearchMatchField>(), usedSynonym: false
      };
      current.score += weight(match.match.field) + (phrase ? 34 : 0) + (synonym ? 3 : 0);
      current.terms.add(term);
      current.fields.add(match.match.field);
      current.usedSynonym ||= synonym;
      candidates.set(match.activity.code, current);
    }
  };

  add(query, true, false);

  // Match compound client phrases before token-level expansion; this is still
  // a deterministic, reviewed dictionary and never creates a legal conclusion.
  for (const [phrase, alternatives] of Object.entries(AR_PHRASE_SYNONYMS)) {
    if (!includesPhrase(query, phrase)) continue;
    for (const alternative of alternatives) add(normalizeNAESearchText(alternative), true, true);
  }

  for (const token of tokens) {
    for (const variant of variants(token)) {
      add(variant, false, variant !== token);
      for (const alternative of [...(AR_TO_FR[variant] ?? []), ...(FR_SYNONYMS[variant] ?? [])]) {
        add(normalizeNAESearchText(alternative), false, true);
      }
    }
  }

  return [...candidates.values()].map((item) => ({
    activity: item.activity, score: item.score, matchedTerms: [...item.terms].slice(0, 8),
    matchedFields: [...item.fields], usedSynonym: item.usedSynonym
  })).sort((a, b) =>
    b.score - a.score || b.matchedTerms.length - a.matchedTerms.length ||
    a.activity.code.localeCompare(b.activity.code, "en")
  ).slice(0, Math.max(1, Math.min(50, limit)));
}
