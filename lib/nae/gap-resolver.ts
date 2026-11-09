import tutelleMap from "../../data/nae/gap-translations/tutelle.json";
import typesMap from "../../data/nae/gap-translations/types.json";
import accessoiresMap from "../../data/nae/gap-translations/accessoires.json";
import referencesMap from "../../data/nae/gap-translations/references.json";
import contenueMap from "../../data/nae/gap-translations/contenue-reviewed.json";
import type { NAEActivity } from "./schema";

const tutelleDict = tutelleMap as Record<string, string>;
const typesDict = typesMap as Record<string, string>;
const accessoiresDict = accessoiresMap as Record<string, string>;
interface ReviewedContentTranslation {
  source_fr: string;
  translation_ar: string;
}
const contenueDict = contenueMap as Record<string, ReviewedContentTranslation>;
interface ReferenceCodeEntry {
  references_texte_fr_fill?: string;
  source_ar_preserved?: string;
  note?: string;
}
interface ReferenceSourceTranslation {
  translation_ar: string;
  review_status?: string;
}
const referencesConfig = referencesMap as {
  [code: string]: ReferenceCodeEntry | Record<string, ReferenceSourceTranslation> | undefined;
  by_source?: Record<string, ReferenceSourceTranslation>;
};
const referencesDict = referencesConfig as Record<string, ReferenceCodeEntry>;
function normalizeReferenceSource(value: string): string {
  return value.trim().replace(/\s+/gu, " ");
}
const normReferencesMap: Record<string, string> = {};
for (const [source, entry] of Object.entries(referencesConfig.by_source ?? {})) {
  normReferencesMap[normalizeReferenceSource(source)] = entry.translation_ar;
}

function normalizeAccessoireKey(s: string): string {
  return s.trim().replace(/\s+/g, " ").replace(/\s*[.;]\s*$/, "").replace(/apr[eé]s/gi, "après").toLowerCase();
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

export function resolveTutelleArabic(tutelle_fr: string | null | undefined): string | null {
  if (!tutelle_fr?.trim()) return null;
  return tutelleDict[tutelle_fr.trim()] ?? null;
}

export function resolveTypeAutorisationArabic(type_fr: string | null | undefined): string | null {
  if (!type_fr?.trim()) return null;
  return typesDict[type_fr.trim()] ?? null;
}

export function resolveAccessoiresArabic(
  accessoires_fr: string | null | undefined,
  code?: string,
): string | null {
  if (code && accessoiresDict[code]) return accessoiresDict[code];
  if (!accessoires_fr?.trim()) return null;
  const trimmed = accessoires_fr.trim();
  if (accessoiresDict[trimmed]) return accessoiresDict[trimmed];
  const normKey = normalizeAccessoireKey(trimmed);
  if (normAccessoiresMap[normKey]) return normAccessoiresMap[normKey];

  if (trimmed.includes("|")) {
    const parts = trimmed.split("|").map((part) => part.trim()).filter(Boolean);
    const translatedParts = parts.map((part) => {
      if (accessoiresDict[part]) return accessoiresDict[part];
      return normAccessoiresMap[normalizeAccessoireKey(part)] ?? null;
    });
    if (translatedParts.every((part): part is string => Boolean(part))) {
      return translatedParts.join(" | ");
    }
  }
  return null;
}

function normalizeContentSource(value: string): string {
  return value.trim().replace(/\s+/gu, " ");
}

/**
 * Resolves only a reviewed translation paired with the exact French source.
 * Code-only lookups are deliberately rejected to prevent translations from
 * drifting onto a different activity after a source-data update.
 */
export function resolveContenueArabic(
  code: string,
  contenue_fr?: string | null,
): string | null {
  const entry = contenueDict[code];
  if (!entry || !contenue_fr?.trim()) return null;
  if (normalizeContentSource(entry.source_fr) !== normalizeContentSource(contenue_fr)) {
    return null;
  }
  return entry.translation_ar.trim() || null;
}

export function resolveReferencesBilingual(
  code: string,
  references_fr: string | null | undefined,
): { fr: string | null; ar: string | null } {
  const codeRef = referencesDict[code];
  if (codeRef) {
    return {
      fr: codeRef.references_texte_fr_fill ?? references_fr ?? null,
      ar: codeRef.source_ar_preserved ?? null,
    };
  }
  if (references_fr?.trim()) {
    const translated = referencesConfig.by_source?.[references_fr]?.translation_ar
      ?? normReferencesMap[normalizeReferenceSource(references_fr)];
    return { fr: references_fr, ar: translated ?? null };
  }
  return { fr: references_fr ?? null, ar: null };
}

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
