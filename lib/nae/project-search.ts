import type { NAEActivity } from "./schema";
import { normalizeNAESearchText, searchNAE, type NAESearchIndex, type NAESearchMatchField } from "./search";

export interface NAEProjectSearchResult {
  activity: NAEActivity;
  score: number;
  matchedTerms: string[];
  matchedFields: NAESearchMatchField[];
  usedSynonym: boolean;
}

const AR_TO_FR: Record<string, string[]> = {
  "حاسوب":["ordinateur","informatique"], "حواسيب":["ordinateur","informatique"],
  "الحاسوب":["ordinateur","informatique"], "الحواسيب":["ordinateur","informatique"],
  "كمبيوتر":["ordinateur","informatique"], "كمبيوترات":["ordinateur","informatique"],
  "الكمبيوتر":["ordinateur","informatique"], "الكمبيوترات":["ordinateur","informatique"],
  "إعلام":["informatique"], "اعلام":["informatique"], "معلوماتية":["informatique"],
  "صيانة":["maintenance","réparation"], "تصليح":["réparation"], "إصلاح":["réparation"], "اصلاح":["réparation"],
  "الشبكات":["réseau"], "شبكات":["réseau"], "شبكة":["réseau"],
  "تركيب":["installation","montage"], "تنصيب":["installation"],
  "بيع":["vente","commerce"], "تجزئة":["détail"], "بالتجزئة":["détail"],
  "جملة":["gros"], "بالجملة":["gros"], "استيراد":["importation"],
  "إنتاج":["production"], "انتاج":["production","fabrication"], "تصنيع":["fabrication"], "توصيل":["livraison"],
  "تسليم":["livraison"], "نقل":["transport"], "تكوين":["formation"],
  "تدريب":["formation"], "استشارة":["conseil"]
};
const FR_SYNONYMS: Record<string, string[]> = {
  ordinateur:["informatique"], informatique:["ordinateur"], maintenance:["réparation"],
  réparation:["maintenance"], reparation:["maintenance"], installation:["montage"], montage:["installation"], vente:["commerce"]
};
const STOP = new Set(["في","من","على","الى","إلى","عن","مع","و","أو","او","اريد","أريد","مشروع","المشروع","نشاط","نشاطات","مؤسسة","شركة","de","du","des","la","le","les","un","une","et","ou","dans","pour","avec","activité","activités","entreprise","projet"]);
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

export function searchNAEProject(index: NAESearchIndex, rawQuery: string, limit = 20): NAEProjectSearchResult[] {
  const query = normalizeNAESearchText(rawQuery);
  if (!query) return [];
  const tokens = [...new Set(query.split(" ").filter((token) => token.length > 1 && !STOP.has(token)))].slice(0, 24);
  const candidates = new Map<string, { activity: NAEActivity; score: number; terms: Set<string>; fields: Set<NAESearchMatchField>; usedSynonym: boolean }>();

  const add = (term: string, phrase: boolean, synonym: boolean) => {
    if (!term) return;
    for (const match of searchNAE(index, term)) {
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
  ).slice(0, Math.max(1, Math.min(2136, limit)));
}
