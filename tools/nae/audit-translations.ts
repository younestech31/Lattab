import fs from "node:fs";
import path from "node:path";
import type { NAEActivity } from "../../lib/nae/schema";
import { resolveActivityBilingual } from "../../lib/nae/gap-resolver";
import reviewedContent from "../../data/nae/gap-translations/contenue-reviewed.json";
import accessoiresDictionary from "../../data/nae/gap-translations/accessoires.json";

const sectors = [1, 2, 3, 4, 5, 6, 7];
const activities: NAEActivity[] = sectors.flatMap((sector) => {
  const filePath = path.join(process.cwd(), "data/nae", `sector-${sector}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as NAEActivity[];
});

const isUsable = (value: string | null | undefined): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.trim() !== "#NOM?";

const normalizeSource = (value: string) => value.trim().replace(/\s+/gu, " ");
const byCode = new Map(activities.map((activity) => [activity.code, activity]));
const translationMap = reviewedContent as Record<
  string,
  { source_fr: string; translation_ar: string }
>;
const errors: string[] = [];
const accessoriesMap = accessoiresDictionary as Record<string, string>;
const normalizeAccessoryKey = (value: string) =>
  value.trim().replace(/\s+/gu, " ").replace(/\s*[.;]\s*$/u, "").replace(/apr[eé]s/giu, "après").toLowerCase();
const normalizeArabicMeaning = (value: string) =>
  value.trim().replace(/\s+/gu, " ").replace(/[؛،,.!?]+$/u, "");
const normalizedAccessoryEntries = new Map<string, string>();
for (const [key, value] of Object.entries(accessoriesMap)) {
  if (/^\d{6}$/u.test(key)) errors.push("Accessory map must not be keyed by activity code: " + key);
  if (!isUsable(value) || !/[\u0600-\u06FF]/u.test(value)) errors.push("Accessory translation is missing Arabic text for source clause: " + key);
  const normalizedKey = normalizeAccessoryKey(key);
  const existing = normalizedAccessoryEntries.get(normalizedKey);
  if (existing && normalizeArabicMeaning(existing) !== normalizeArabicMeaning(value)) {
    errors.push("Conflicting normalized accessory translations for source clause: " + key);
  } else if (!existing) normalizedAccessoryEntries.set(normalizedKey, value);
}

if (activities.length !== 2136 || byCode.size !== activities.length) {
  errors.push(`Expected 2,136 unique activities; found ${activities.length} rows and ${byCode.size} unique codes.`);
}

for (const [code, entry] of Object.entries(translationMap)) {
  const activity = byCode.get(code);
  if (!activity) {
    errors.push(`Reviewed translation references unknown activity code ${code}.`);
    continue;
  }
  if (!isUsable(activity.contenue_fr) || normalizeSource(entry.source_fr) !== normalizeSource(activity.contenue_fr)) {
    errors.push(`Reviewed translation source mismatch for activity ${code}.`);
  }
  if (!isUsable(entry.translation_ar)) {
    errors.push(`Reviewed Arabic translation is empty for activity ${code}.`);
  }
}

const resolved = activities.map(resolveActivityBilingual);
const count = (predicate: (activity: NAEActivity) => boolean) => activities.filter(predicate).length;
const sourceCounts = {
  content: count((activity) => isUsable(activity.contenue_fr)),
  accessories: count((activity) => isUsable(activity.accessoires_fr)),
  tutelle: count((activity) => isUsable(activity.tutelle_fr)),
  authorization: count((activity) => isUsable(activity.type_autorisation_fr)),
  references: count((activity) => isUsable(activity.references_texte_fr)),
};
const translatedCounts = {
  content: resolved.filter((activity) => isUsable(activity.contenue_ar)).length,
  accessories: resolved.filter((activity) => isUsable(activity.accessoires_ar)).length,
  tutelle: resolved.filter((activity) => isUsable(activity.tutelle_ar)).length,
  authorization: resolved.filter((activity) => isUsable(activity.type_autorisation_ar)).length,
  references: resolved.filter((activity) => isUsable(activity.references_texte_ar)).length,
};
const labelCoverage = {
  arabic: count((activity) => isUsable(activity.label_ar)),
  french: count((activity) => isUsable(activity.label_fr)),
  both: count((activity) => isUsable(activity.label_ar) && isUsable(activity.label_fr)),
};
const accessoryCoverage = translatedCounts.accessories;
const accessoryUntranslated = sourceCounts.accessories - accessoryCoverage;
const draftsPath = path.join(process.cwd(), "data/nae/gap-translations/contenue-unverified-drafts.json");
const legacyDrafts = JSON.parse(fs.readFileSync(draftsPath, "utf8")) as Record<string, string>;

const report = {
  activities: activities.length,
  labels: labelCoverage,
  sourceFields: sourceCounts,
  activeArabicTranslations: translatedCounts,
  accessories: { dictionaryEntries: Object.keys(accessoriesMap).length, translatedRecords: accessoryCoverage, untranslatedRecords: accessoryUntranslated },
  quarantinedLegacyDrafts: Object.keys(legacyDrafts).length,
  quarantinedLegacyUnknownCodes: Object.keys(legacyDrafts).filter((code) => !byCode.has(code)).length,
  errors,
};
console.log(JSON.stringify(report, null, 2));

if (errors.length > 0) {
  throw new Error(`NAE translation audit failed with ${errors.length} issue(s).`);
}
