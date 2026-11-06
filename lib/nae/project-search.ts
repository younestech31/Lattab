import type { NAEActivity } from "./schema";
import { normalizeNAESearchText } from "./search";

export type NAEProjectSearchEvidence =
  | "label_ar"
  | "label_fr"
  | "contenue_fr"
  | "accessoires_fr";

export interface NAEProjectSearchHit {
  activity: NAEActivity;
  score: number;
  matchedTerms: string[];
  evidence: NAEProjectSearchEvidence[];
  coverage: number;
}

const AR_STOP_WORDS = new Set([
  "في", "من", "الى", "على", "عن", "مع", "هذا", "هذه", "ذلك", "تلك",
  "التي", "الذي", "وهي", "وهو", "ثم", "او", "بين", "عند", "لدى",
  "اريد", "نريد", "مشروع", "نشاط", "نشاطات", "اعمال", "عمل",
]);
const FR_STOP_WORDS = new Set([
  "les", "des", "une", "un", "du", "de", "d", "la", "le", "et", "ou",
  "en", "au", "aux", "pour", "par", "avec", "sans", "dans", "sur",
  "mon", "ma", "mes", "notre", "nos", "projet", "activite", "activites",
]);

function projectTerms(value: string): string[] {
  const normalized = normalizeNAESearchText(value);
  const terms = normalized.split(" ").filter(Boolean).map((term) => {
    // Arabic conjunction waw is frequently attached to the following word.
    return /^[\u0600-\u06FF]+$/u.test(term) && term.startsWith("و") && term.length > 3
      ? term.slice(1)
      : term;
  });
  return [...new Set(terms.filter((term) =>
    term.length > 2 && !AR_STOP_WORDS.has(term) && !FR_STOP_WORDS.has(term)
  ))];
}

function tokenVariants(term: string): string[] {
  const variants = new Set([term]);
  if (/^[\\u0600-\\u06FF]+$/u.test(term)) {
    let current = term;
    if (current.startsWith("و") && current.length > 3) current = current.slice(1);
    variants.add(current);
    if (current.startsWith("بال") && current.length > 4) variants.add(current.slice(2));
    if (current.startsWith("لل") && current.length > 4) variants.add(current.slice(2));
    if (current.startsWith("ال") && current.length > 4) variants.add(current.slice(2));
    if ((current.startsWith("ب") || current.startsWith("ل")) && current.length > 4) variants.add(current.slice(1));
  } else {
    if (term.endsWith("s") && term.length > 4) variants.add(term.slice(0, -1));
    if (term.endsWith("x") && term.length > 4) variants.add(term.slice(0, -1));
  }
  return [...variants].filter((variant) => variant.length > 2);
}

function usable(value: string | null | undefined): value is string {
  return Boolean(value?.trim()) && value?.trim() !== "#NOM?";
}

/**
 * Multi-term project search. Unlike the catalogue lookup, it does not require
 * every word in a project description to occur in one activity field.
 * Scores and evidence are intentionally explainable and deterministic.
 */
export function searchNAEProject(
  activities: readonly NAEActivity[],
  rawQuery: string,
  language: "ar" | "fr" = "ar",
  limit = 30,
): NAEProjectSearchHit[] {
  const query = normalizeNAESearchText(rawQuery);
  if (!query) return [];

  const codeQuery = rawQuery.trim().replace(/[\s.-]/gu, "");
  if (/^\d{1,6}$/u.test(codeQuery)) {
    return activities
      .filter((activity) => activity.code.startsWith(codeQuery) || activity.code.includes(codeQuery))
      .map((activity) => ({
        activity,
        score: activity.code === codeQuery ? 100 : activity.code.startsWith(codeQuery) ? 70 : 40,
        matchedTerms: [codeQuery],
        evidence: [],
        coverage: 1,
      }))
      .sort((a, b) => b.score - a.score || a.activity.code.localeCompare(b.activity.code, "en"))
      .slice(0, Math.max(0, limit));
  }

  const terms = projectTerms(rawQuery);
  if (!terms.length) return [];

  const hits: NAEProjectSearchHit[] = [];
  for (const activity of activities) {
    const fields: Array<{ key: NAEProjectSearchEvidence; value: string; weight: number }> = [
      { key: "label_ar", value: usable(activity.label_ar) ? normalizeNAESearchText(activity.label_ar) : "", weight: language === "ar" ? 9 : 7 },
      { key: "label_fr", value: usable(activity.label_fr) ? normalizeNAESearchText(activity.label_fr) : "", weight: language === "fr" ? 9 : 7 },
      { key: "contenue_fr", value: normalizeNAESearchText(activity.contenue_fr), weight: 4 },
      { key: "accessoires_fr", value: activity.accessoires_fr ? normalizeNAESearchText(activity.accessoires_fr) : "", weight: 2 },
    ];

    const matchedTerms: string[] = [];
    const evidence = new Set<NAEProjectSearchEvidence>();
    let score = 0;
    for (const term of terms) {
      const variants = tokenVariants(term);
      const matches = fields.filter((field) => variants.some((variant) => field.value.includes(variant)));
      if (!matches.length) continue;
      matchedTerms.push(term);
      const best = matches.reduce((current, item) => item.weight > current.weight ? item : current);
      score += best.weight;
      evidence.add(best.key);
    }

    if (!matchedTerms.length) continue;
    if (fields.some((field) => field.weight >= 7 && field.value.includes(query))) score += 8;
    const coverage = matchedTerms.length / terms.length;
    score += Math.round(coverage * 5);

    hits.push({
      activity,
      score,
      matchedTerms,
      evidence: [...evidence],
      coverage,
    });
  }

  return hits.sort((a, b) =>
    b.score - a.score ||
    b.matchedTerms.length - a.matchedTerms.length ||
    b.coverage - a.coverage ||
    a.activity.code.localeCompare(b.activity.code, "en")
  ).slice(0, Math.max(0, limit));
}
