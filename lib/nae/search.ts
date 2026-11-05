import type { NAEActivity } from "./schema";
import { NAE_SECTORS, type NAESectorCode } from "./sectors";

export type NAESearchLanguage = "ar" | "fr";
export type NAESearchMatchKind =
  | "code_exact"
  | "code_prefix"
  | "code_contains"
  | "label_exact"
  | "label_prefix"
  | "label_contains"
  | "content"
  | "accessory";

export type NAESearchMatchField =
  | "code"
  | "label_ar"
  | "label_fr"
  | "contenue_fr"
  | "accessoires_fr";

export interface NAESearchMatch {
  kind: NAESearchMatchKind;
  field: NAESearchMatchField;
  language?: "ar" | "fr";
}

export interface NAESearchResult {
  activity: NAEActivity;
  match: NAESearchMatch;
}

export interface NAESearchOptions {
  language?: NAESearchLanguage;
  sectorCode?: NAESectorCode;
  groupCode?: string;
  subgroupCode?: string;
  limit?: number;
}

interface IndexedText {
  field: "label_ar" | "label_fr" | "contenue_fr" | "accessoires_fr";
  language?: "ar" | "fr";
  normalized: string;
}

interface IndexedActivity {
  activity: NAEActivity;
  labels: IndexedText[];
  content: string;
  accessories: string;
}

export interface NAESearchIndex {
  entries: IndexedActivity[];
  language: NAESearchLanguage;
}

/**
 * Normalizes Arabic and French text for matching only.
 * The original labels and descriptions are never modified.
 */
export function normalizeNAESearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/gu, "")
    .replace(/[\u0640]/gu, "")
    .replace(/[أإآٱ]/gu, "ا")
    .replace(/[ىی]/gu, "ي")
    .replace(/ک/gu, "ك")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/gu, " ");
}

function isUsableLabel(value: string): boolean {
  return value.trim().length > 0 && value.trim() !== "#NOM?";
}

function createTextIndex(
  activity: NAEActivity,
  language: NAESearchLanguage,
): IndexedText[] {
  const values: IndexedText[] = [];
  if (isUsableLabel(activity.label_ar)) {
    values.push({
      field: "label_ar",
      language: "ar",
      normalized: normalizeNAESearchText(activity.label_ar),
    });
  }
  if (isUsableLabel(activity.label_fr)) {
    values.push({
      field: "label_fr",
      language: "fr",
      normalized: normalizeNAESearchText(activity.label_fr),
    });
  }

  return values.sort((a, b) => {
    const aPriority = a.language === language ? 0 : 1;
    const bPriority = b.language === language ? 0 : 1;
    return aPriority - bPriority;
  });
}

export function createNAESearchIndex(
  activities: readonly NAEActivity[],
  language: NAESearchLanguage = "ar",
): NAESearchIndex {
  return {
    language,
    entries: activities.map((activity) => ({
      activity,
      labels: createTextIndex(activity, language),
      content: normalizeNAESearchText(activity.contenue_fr),
      accessories: activity.accessoires_fr
        ? normalizeNAESearchText(activity.accessoires_fr)
        : "",
    })),
  };
}

function matchText(
  haystack: string,
  query: string,
): "exact" | "prefix" | "contains" | null {
  if (!haystack) return null;
  if (haystack === query) return "exact";
  if (haystack.startsWith(query)) return "prefix";
  if (haystack.includes(query)) return "contains";

  const terms = query.split(" ").filter(Boolean);
  if (terms.length > 1 && terms.every((term) => haystack.includes(term))) {
    return "contains";
  }
  return null;
}

const MATCH_ORDER: Record<NAESearchMatchKind, number> = {
  code_exact: 0,
  code_prefix: 1,
  code_contains: 2,
  label_exact: 3,
  label_prefix: 4,
  label_contains: 5,
  content: 6,
  accessory: 7,
};

function compareMatches(
  a: NAESearchMatch,
  b: NAESearchMatch,
  preferredLanguage: NAESearchLanguage,
): number {
  const order = MATCH_ORDER[a.kind] - MATCH_ORDER[b.kind];
  if (order !== 0) return order;

  const languagePriority = (match: NAESearchMatch) =>
    match.language === preferredLanguage ? 0 : match.language ? 1 : 2;
  const languageOrder = languagePriority(a) - languagePriority(b);
  if (languageOrder !== 0) return languageOrder;

  const fieldPriority = (field: NAESearchMatchField) =>
    field === "label_ar" ? 0 : field === "label_fr" ? 1 : 2;
  return fieldPriority(a.field) - fieldPriority(b.field);
}

function findBestTextMatch(
  entry: IndexedActivity,
  query: string,
  preferredLanguage: NAESearchLanguage,
): NAESearchMatch | null {
  const matches: NAESearchMatch[] = [];

  for (const label of entry.labels) {
    const kind = matchText(label.normalized, query);
    if (kind) {
      matches.push({
        kind: kind === "exact"
          ? "label_exact"
          : kind === "prefix"
            ? "label_prefix"
            : "label_contains",
        field: label.field,
        language: label.language,
      });
    }
  }

  if (matchText(entry.content, query)) {
    matches.push({ kind: "content", field: "contenue_fr", language: "fr" });
  }
  if (matchText(entry.accessories, query)) {
    matches.push({ kind: "accessory", field: "accessoires_fr", language: "fr" });
  }

  matches.sort((a, b) => compareMatches(a, b, preferredLanguage));
  return matches[0] ?? null;
}

function findCodeMatch(
  code: string,
  query: string,
): NAESearchMatch | null {
  const normalizedQuery = query.replace(/[\s.-]/gu, "");
  if (!/^\d{1,6}$/.test(normalizedQuery)) return null;

  if (code === normalizedQuery) return { kind: "code_exact", field: "code" };
  if (code.startsWith(normalizedQuery)) return { kind: "code_prefix", field: "code" };
  if (code.includes(normalizedQuery)) return { kind: "code_contains", field: "code" };
  return null;
}

function compareResults(
  a: NAESearchResult,
  b: NAESearchResult,
  preferredLanguage: NAESearchLanguage,
): number {
  const matchOrder = compareMatches(a.match, b.match, preferredLanguage);
  if (matchOrder !== 0) return matchOrder;
  return a.activity.code.localeCompare(b.activity.code, "en");
}

export function searchNAE(
  index: NAESearchIndex,
  rawQuery: string,
  options: NAESearchOptions = {},
): NAESearchResult[] {
  const query = normalizeNAESearchText(rawQuery);
  const rawCodeQuery = rawQuery.trim().replace(/[\s.-]/gu, "");
  if (!query && !/^\d{1,6}$/.test(rawCodeQuery)) return [];

  const preferredLanguage = options.language ?? index.language;
  const results: NAESearchResult[] = [];

  for (const entry of index.entries) {
    const activity = entry.activity;
    if (options.sectorCode && activity.sector_code !== options.sectorCode) continue;
    if (options.groupCode && activity.group_code !== options.groupCode) continue;
    if (options.subgroupCode && activity.subgroup_code !== options.subgroupCode) continue;

    const codeMatch = findCodeMatch(activity.code, rawQuery);
    const textMatch = query ? findBestTextMatch(entry, query, preferredLanguage) : null;
    const bestMatch = [codeMatch, textMatch]
      .filter((match): match is NAESearchMatch => match !== null)
      .sort((a, b) => compareMatches(a, b, preferredLanguage))[0];

    if (bestMatch) results.push({ activity, match: bestMatch });
  }

  results.sort((a, b) => compareResults(a, b, preferredLanguage));
  const limit = options.limit;
  return typeof limit === "number" && Number.isFinite(limit) && limit >= 0
    ? results.slice(0, Math.floor(limit))
    : results;
}

export interface NAETaxonomySubgroup {
  code: string;
  count: number;
}

export interface NAETaxonomyGroup {
  code: string;
  count: number;
  subgroups: NAETaxonomySubgroup[];
}

export interface NAETaxonomySector {
  code: NAESectorCode;
  label_ar: string;
  label_fr: string;
  count: number;
  groups: NAETaxonomyGroup[];
}

/**
 * Builds a code-only hierarchy for group/subgroup levels.
 * Only official sector labels are added; missing group names are not invented.
 */
export function buildNAETaxonomy(
  activities: readonly NAEActivity[],
): NAETaxonomySector[] {
  const sectors = new Map<
    string,
    Map<string, Map<string, number>>
  >();

  for (const activity of activities) {
    let groups = sectors.get(activity.sector_code);
    if (!groups) {
      groups = new Map();
      sectors.set(activity.sector_code, groups);
    }

    let subgroups = groups.get(activity.group_code);
    if (!subgroups) {
      subgroups = new Map();
      groups.set(activity.group_code, subgroups);
    }

    subgroups.set(
      activity.subgroup_code,
      (subgroups.get(activity.subgroup_code) ?? 0) + 1,
    );
  }

  return [...sectors.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "en"))
    .flatMap(([sectorCode, groups]) => {
      const sector = NAE_SECTORS[sectorCode as NAESectorCode];
      if (!sector) return [];

      const groupNodes = [...groups.entries()]
        .sort(([a], [b]) => a.localeCompare(b, "en"))
        .map(([groupCode, subgroups]) => {
          const subgroupNodes = [...subgroups.entries()]
            .sort(([a], [b]) => a.localeCompare(b, "en"))
            .map(([code, count]) => ({ code, count }));

          return {
            code: groupCode,
            count: subgroupNodes.reduce((sum, node) => sum + node.count, 0),
            subgroups: subgroupNodes,
          };
        });

      return [{
        code: sector.code,
        label_ar: sector.label_ar,
        label_fr: sector.label_fr,
        count: groupNodes.reduce((sum, group) => sum + group.count, 0),
        groups: groupNodes,
      }];
    });
}

export function filterNAEByTaxonomy(
  activities: readonly NAEActivity[],
  options: Pick<NAESearchOptions, "sectorCode" | "groupCode" | "subgroupCode">,
): NAEActivity[] {
  return activities.filter((activity) => {
    if (options.sectorCode && activity.sector_code !== options.sectorCode) return false;
    if (options.groupCode && activity.group_code !== options.groupCode) return false;
    if (options.subgroupCode && activity.subgroup_code !== options.subgroupCode) return false;
    return true;
  });
}
