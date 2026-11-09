import fs from "node:fs";
import path from "node:path";
import type { NAEActivity } from "../../lib/nae/schema";
import { resolveActivityBilingual } from "../../lib/nae/gap-resolver";
import reviewedContent from "../../data/nae/gap-translations/contenue-reviewed.json";

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
if (Object.keys(translationMap).length !== 45) {
  errors.push(`Expected 45 reviewed content translations; found ${Object.keys(translationMap).length}.`);
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
const draftsPath = path.join(process.cwd(), "data/nae/gap-translations/contenue-unverified-drafts.json");
const legacyDrafts = JSON.parse(fs.readFileSync(draftsPath, "utf8")) as Record<string, string>;

const report = {
  activities: activities.length,
  labels: labelCoverage,
  sourceFields: sourceCounts,
  activeArabicTranslations: translatedCounts,
  quarantinedLegacyDrafts: Object.keys(legacyDrafts).length,
  quarantinedLegacyUnknownCodes: Object.keys(legacyDrafts).filter((code) => !byCode.has(code)).length,
  errors,
};
console.log(JSON.stringify(report, null, 2));

if (errors.length > 0) {
  throw new Error(`NAE translation audit failed with ${errors.length} issue(s).`);
}
