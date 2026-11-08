import tutelleMap from "../../data/nae/gap-translations/tutelle.json";
import typesMap from "../../data/nae/gap-translations/types.json";
import accessoiresMap from "../../data/nae/gap-translations/accessoires.json";
import referencesMap from "../../data/nae/gap-translations/references.json";
import contenueMap from "../../data/nae/gap-translations/contenue.json";
import type { NAEActivity } from "./schema";

const tutelleDict = tutelleMap as Record<string, string>;
const typesDict = typesMap as Record<string, string>;
const accessoiresDict = accessoiresMap as Record<string, string>;
const contenueDict = contenueMap as Record<string, string>;
const referencesDict = referencesMap as Record<
  string,
  { references_texte_fr_fill?: string; source_ar_preserved?: string; note?: string }
>;

function normalizeAccessoireKey(s: string): string {
  return s
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*[.;]\s*$/, "")
    .replace(/apr[eé]s/gi, "après")
    .toLowerCase();
}

const normAccessoiresMap: Record<string, string> = {};
for (const [k, v] of Object.entries(accessoiresDict)) {
  normAccessoiresMap[normalizeAccessoireKey(k)] = v;
}

export interface BilinguallyResolvedActivity extends NAEActivity {
  tutelle_ar: string | null;
  type_autorisation_ar: string | null;
  accessoires_ar: string | null;
  references_texte_ar: string | null;
  contenue_ar: string | null;
}

/**
 * Resolves the informational Arabic translation for a French tutelle string.
 * Retains exact French source if unmapped.
 */
export function resolveTutelleArabic(tutelle_fr: string | null | undefined): string | null {
  if (!tutelle_fr?.trim()) return null;
  const trimmed = tutelle_fr.trim();
  return tutelleDict[trimmed] ?? null;
}

/**
 * Resolves the informational Arabic translation for a French authorization type string.
 */
export function resolveTypeAutorisationArabic(type_fr: string | null | undefined): string | null {
  if (!type_fr?.trim()) return null;
  const trimmed = type_fr.trim();
  return typesDict[trimmed] ?? null;
}

/**
 * Resolves the informational Arabic translation for accessories clauses,
 * handling exact matching, normalization, and segment-based matching.
 */
export function resolveAccessoiresArabic(
  accessoires_fr: string | null | undefined,
  code?: string,
): string | null {
  if (code && accessoiresDict[code]) {
    return accessoiresDict[code];
  }
  if (!accessoires_fr?.trim()) return null;
  const trimmed = accessoires_fr.trim();

  // 1. Direct match
  if (accessoiresDict[trimmed]) {
    return accessoiresDict[trimmed];
  }

  // 2. Normalized match
  const normKey = normalizeAccessoireKey(trimmed);
  if (normAccessoiresMap[normKey]) {
    return normAccessoiresMap[normKey];
  }

  // 3. Segmented match for compound clauses separated by "|"
  if (trimmed.includes("|")) {
    const parts = trimmed.split("|").map((p) => p.trim()).filter(Boolean);
    const translatedParts = parts.map((p) => {
      if (accessoiresDict[p]) return accessoiresDict[p];
      const np = normalizeAccessoireKey(p);
      return normAccessoiresMap[np] ?? null;
    });

    if (translatedParts.every((part): part is string => Boolean(part))) {
      return translatedParts.join(" | ");
    }
  }

  return null;
}

/**
 * Resolves the informational Arabic translation for an activity's content description.
 */
export function resolveContenueArabic(
  code: string,
  contenue_fr?: string | null,
): string | null {
  if (contenueDict[code]) {
    return contenueDict[code];
  }
  if (contenue_fr?.trim() && contenueDict[contenue_fr.trim()]) {
    return contenueDict[contenue_fr.trim()];
  }
  return null;
}

/**
 * Resolves references bilingually, incorporating code-specific fills (e.g. 607004).
 */
export function resolveReferencesBilingual(
  code: string,
  references_fr: string | null | undefined,
): {
  fr: string | null;
  ar: string | null;
} {
  const codeRef = referencesDict[code];
  if (codeRef) {
    return {
      fr: codeRef.references_texte_fr_fill ?? references_fr ?? null,
      ar: codeRef.source_ar_preserved ?? null,
    };
  }
  return {
    fr: references_fr ?? null,
    ar: null,
  };
}

/**
 * Enriches an official NAE activity record with second-language overlay fields
 * without modifying or rewriting the source sector-*.json files.
 */
export function resolveActivityBilingual(activity: NAEActivity): BilinguallyResolvedActivity {
  const ref = resolveReferencesBilingual(activity.code, activity.references_texte_fr);
  return {
    ...activity,
    tutelle_ar: resolveTutelleArabic(activity.tutelle_fr),
    type_autorisation_ar: resolveTypeAutorisationArabic(activity.type_autorisation_fr),
    accessoires_ar: resolveAccessoiresArabic(activity.accessoires_fr, activity.code),
    references_texte_fr: ref.fr,
    references_texte_ar: ref.ar,
    contenue_ar: resolveContenueArabic(activity.code, activity.contenue_fr),
  };
}
