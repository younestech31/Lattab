import fs from "node:fs";
import path from "node:path";
import type { NAEActivity } from "../../lib/nae/schema";
import { NAE_SOURCE_HEADERS } from "../../lib/nae/schema";
import { resolveActivityBilingual } from "../../lib/nae/gap-resolver";
import reviewedContent from "../../data/nae/gap-translations/contenue-reviewed.json";

type Manifest = {
  source_sha256: string;
  source_revision_date: string;
  imported_at: string;
  record_count: number;
  sector_counts: Record<string, number>;
  field_coverage: Record<string, number>;
  invalid_source_labels: Array<{ code: string; field: string }>;
  raw_status_counts: Record<string, number>;
  source_reconciliation?: {
    comparison_status?: string;
    checked_at?: string;
    upstream_record_count?: number;
    record_delta?: number;
    upstream_sector_counts?: Record<string, number>;
    upstream_status_counts?: Record<string, number>;
    confirmed_blocked_codes?: Array<{ code: string; status: string }>;
    historical_2026_11_02_observation?: { status?: string };
    verification_scope?: string;
  } | null;
};

const root = process.cwd();
const dataDir = path.join(root, "data/nae");
const manifestPath = path.join(dataDir, "manifest.json");
const reportPath = path.join(dataDir, "quality-report.md");
const sectors = [1, 2, 3, 4, 5, 6, 7];
const activities: NAEActivity[] = sectors.flatMap((sector) => {
  const filePath = path.join(dataDir, "sector-" + sector + ".json");
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as NAEActivity[];
});
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Manifest;

const isUsable = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.trim() !== "#NOM?";
const normalizeSource = (value: string) => value.trim().replace(/\s+/gu, " ");
const sortedRecord = (entries: Array<[string, number]>): Record<string, number> =>
  Object.fromEntries(entries.sort(([a], [b]) => a.localeCompare(b)));
const sameCounts = (actual: Record<string, number>, expected: Record<string, number> | undefined): boolean => {
  if (!expected) return false;
  const actualKeys = Object.keys(actual).sort();
  const expectedKeys = Object.keys(expected).sort();
  return actualKeys.length === expectedKeys.length &&
    actualKeys.every((key, index) => key === expectedKeys[index] && actual[key] === expected[key]);
};

const errors: string[] = [];
const warnings: string[] = [];
const byCode = new Map(activities.map((activity) => [activity.code, activity]));
const duplicateCodes = activities.map((activity) => activity.code)
  .filter((code, index, all) => all.indexOf(code) !== index);

if (activities.length !== manifest.record_count) {
  errors.push("Manifest record_count is " + manifest.record_count + "; sector files contain " + activities.length + " rows.");
}
if (byCode.size !== activities.length) {
  errors.push("Duplicate activity codes found: " + (duplicateCodes.join(", ") || "unknown") + ".");
}
if (activities.some((activity) => !/^\d{6}$/.test(activity.code))) {
  errors.push("One or more activity codes do not contain exactly six digits.");
}
if (activities.some((activity) =>
  activity.sector_code !== activity.code.slice(0, 1) ||
  activity.group_code !== activity.code.slice(0, 3) ||
  activity.subgroup_code !== activity.code.slice(0, 4)
)) {
  errors.push("One or more sector/group/subgroup fields do not match the activity-code prefix.");
}

const sectorCounts = sortedRecord(
  sectors.map((sector): [string, number] => [String(sector), activities.filter((activity) => activity.sector_code === String(sector)).length]),
);
const rawStatusCounts = sortedRecord(
  [...new Set(activities.map((activity) => activity.status))].map((status): [string, number] => [
    status,
    activities.filter((activity) => activity.status === status).length,
  ]),
);
const sourceCoverage = Object.fromEntries(NAE_SOURCE_HEADERS.map((field) => [
  field,
  activities.filter((activity) => isUsable(activity[field])).length,
]));
if (!sameCounts(sectorCounts, manifest.sector_counts)) {
  errors.push("Manifest sector_counts do not match the seven sector JSON files.");
}
if (!sameCounts(rawStatusCounts, manifest.raw_status_counts)) {
  errors.push("Manifest raw_status_counts do not match the source records.");
}
if (!sameCounts(sourceCoverage, manifest.field_coverage)) {
  errors.push("Manifest field_coverage is stale or counts unusable placeholders such as #NOM?.");
}

const invalidSourceLabels = activities.flatMap((activity) =>
  (["label_ar", "label_fr", "label_en"] as const)
    .filter((field) => activity[field].trim() === "#NOM?")
    .map((field) => ({ code: activity.code, field })),
);
if (JSON.stringify(invalidSourceLabels) !== JSON.stringify(manifest.invalid_source_labels)) {
  errors.push("Manifest invalid_source_labels does not match the #NOM? values in the source records.");
}

const translationMap = reviewedContent as Record<string, { source_fr: string; translation_ar: string }>;
for (const [code, entry] of Object.entries(translationMap)) {
  const activity = byCode.get(code);
  if (!activity) {
    errors.push("Reviewed translation references unknown activity code " + code + ".");
    continue;
  }
  if (!isUsable(activity.contenue_fr) || normalizeSource(entry.source_fr) !== normalizeSource(activity.contenue_fr)) {
    errors.push("Reviewed translation source mismatch for activity " + code + ".");
  }
  if (!isUsable(entry.translation_ar)) {
    errors.push("Reviewed Arabic translation is empty for activity " + code + ".");
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
  english: count((activity) => isUsable(activity.label_en)),
  bothArabicAndFrench: count((activity) => isUsable(activity.label_ar) && isUsable(activity.label_fr)),
};
const draftsPath = path.join(dataDir, "gap-translations/contenue-unverified-drafts.json");
const legacyDrafts = JSON.parse(fs.readFileSync(draftsPath, "utf8")) as Record<string, string>;
const legacyDraftUnknownCodes = Object.keys(legacyDrafts).filter((code) => !byCode.has(code));

const reconciliation = manifest.source_reconciliation;
if (!reconciliation) {
  errors.push("Manifest has no current source_reconciliation record.");
} else {
  if (reconciliation.comparison_status !== "matched" || reconciliation.record_delta !== 0) {
    errors.push("The latest upstream source reconciliation is not marked as matched.");
  }
  if (reconciliation.upstream_record_count !== activities.length) {
    errors.push("Upstream record count does not match the repository snapshot.");
  }
  if (!sameCounts(sectorCounts, reconciliation.upstream_sector_counts)) {
    errors.push("Upstream sector totals do not match the repository snapshot.");
  }
  if (!sameCounts(rawStatusCounts, reconciliation.upstream_status_counts)) {
    errors.push("Upstream status totals do not match the repository snapshot.");
  }
  for (const code of ["301205", "501308"]) {
    const row = byCode.get(code);
    const confirmed = reconciliation.confirmed_blocked_codes?.find((entry) => entry.code === code);
    if (!row || row.status !== "red" || confirmed?.status !== "red") {
      errors.push("Current upstream check is missing blocked activity " + code + " or its source status differs.");
    }
  }
  if (!reconciliation.checked_at || !reconciliation.verification_scope) {
    errors.push("Source reconciliation is missing its check date or verification scope.");
  }
  if (reconciliation.historical_2026_11_02_observation?.status !== "superseded") {
    errors.push("The historical 2026-11-02 discrepancy must be marked as superseded, not current.");
  }
}

if (translatedCounts.content !== Object.keys(translationMap).length) {
  errors.push("Resolved Arabic content coverage differs from the active reviewed translation map.");
}
if (legacyDraftUnknownCodes.length > 0) {
  warnings.push(legacyDraftUnknownCodes.length + " quarantined legacy drafts refer to codes outside the current catalogue; they are not loaded by runtime code.");
}

const invalidLabelCells = invalidSourceLabels.length;
const invalidLabelRecords = new Set(invalidSourceLabels.map((entry) => entry.code)).size;
const reconciliationLines = reconciliation ? [
  "- Public source: https://www.upgrowth.dz/outils/nomenclature",
  "- Checked by LATTAB: " + reconciliation.checked_at,
  "- UpGrowth-reported last verification: 2026-11-10",
  "- UpGrowth-reported CNRC portal date: 2026-11-07",
  "- Records: " + activities.length + " repository / " + reconciliation.upstream_record_count + " published page (delta 0)",
  "- Sector counts and status counts: matched",
  "- Confirmed blocked rows: 301205 and 501308"
] : ["- No source reconciliation recorded."];

const markdown = [
  "# NAE data and translation quality report",
  "",
  "- CSV snapshot revision: " + manifest.source_revision_date,
  "- Imported at: " + manifest.imported_at,
  "- Source SHA-256: " + manifest.source_sha256,
  "- Records: " + activities.length,
  "- Duplicate activity codes: " + duplicateCodes.length,
  "- Fatal data-integrity issues: " + errors.length,
  "- Invalid source-label cells preserved: " + invalidLabelCells + " across " + invalidLabelRecords + " activity records",
  "",
  "## Records by sector",
  "",
  "| Sector code | Records |",
  "|---:|---:|",
  ...Object.entries(sectorCounts).map(([code, value]) => "| " + code + " | " + value + " |"),
  "",
  "## Source-field coverage",
  "",
  "Counts include non-empty usable strings and exclude the literal #NOM?.",
  "",
  "| Source field | Usable records |",
  "|---|---:|",
  ...Object.entries(sourceCoverage).map(([field, value]) => "| " + field + " | " + value + " |"),
  "",
  "## Source status values",
  "",
  "| Raw value | Dataset meaning | Records |",
  "|---|---|---:|",
  "| normal | Free (حر) | " + (rawStatusCounts.normal ?? 0) + " |",
  "| green | Regulated (نشاط منظم) | " + (rawStatusCounts.green ?? 0) + " |",
  "| red | Blocked (محظور) | " + (rawStatusCounts.red ?? 0) + " |",
  "",
  "The mapping is attributed to UpGrowth's dataset documentation. A catalogue-level status is not, by itself, a complete determination of all sector-specific legal requirements.",
  "",
  "## Valid activity labels",
  "",
  "- Arabic: " + labelCoverage.arabic + " / " + activities.length,
  "- French: " + labelCoverage.french + " / " + activities.length,
  "- English: " + labelCoverage.english + " / " + activities.length,
  "- Valid Arabic and French labels on the same record: " + labelCoverage.bothArabicAndFrench + " / " + activities.length,
  "- " + invalidLabelCells + " #NOM? cells across " + invalidLabelRecords + " codes are retained unchanged; no labels were guessed.",
  "",
  "## Active Arabic translation coverage",
  "",
  "| Field | Source records | Active Arabic translations |",
  "|---|---:|---:|",
  "| Activity content | " + sourceCounts.content + " | " + translatedCounts.content + " |",
  "| Accessories | " + sourceCounts.accessories + " | " + translatedCounts.accessories + " |",
  "| Tutelle | " + sourceCounts.tutelle + " | " + translatedCounts.tutelle + " |",
  "| Authorization type | " + sourceCounts.authorization + " | " + translatedCounts.authorization + " |",
  "| Legal references | " + sourceCounts.references + " | " + translatedCounts.references + " |",
  "",
  "Content translations are source-bound to the exact French description. Unreviewed legacy drafts are quarantined and are not imported at runtime.",
  "- Quarantined legacy drafts: " + Object.keys(legacyDrafts).length,
  "- Quarantined drafts whose codes are absent from this catalogue: " + legacyDraftUnknownCodes.length,
  "",
  "## Current public-source reconciliation",
  "",
  ...reconciliationLines,
  "",
  "- UpGrowth-reported last verification: 2026-11-10",
  "- UpGrowth-reported CNRC portal date: 2026-11-07",
  "- The earlier 2026-11-02 observation of 2,134 entries is historical and superseded by the 2,136-entry page checked on 2026-11-11; both previously discrepant codes are now explicitly listed as blocked.",
  "- Scope: public UpGrowth page totals, sector/status totals, and the two named code rows. This is not an independent live CNRC/Sidjilcom query.",
  "",
  "## Interpretation safeguards",
  "",
  "- The bundled CSV remains the dated 2026-10-01 source snapshot; reconciliation does not silently rewrite it.",
  "- A status such as “free” is not a blanket legal guarantee and does not replace checking sector-specific rules.",
  "- Empty source regulatory fields mean only that the CSV contains no value for that field.",
  "- Group and subgroup names are not supplied by the CSV and must not be inferred from numeric codes.",
  "- Arabic content that has not been reviewed remains unavailable as an Arabic translation; the original French source is not mislabeled as Arabic.",
  "",
  ...(warnings.length ? ["## Warnings", "", ...warnings.map((warning) => "- " + warning), ""] : [])
].join("\n") + "\n";

fs.writeFileSync(reportPath, markdown, "utf8");
const report = {
  activities: activities.length,
  uniqueCodes: byCode.size,
  sectorCounts,
  sourceFieldCoverage: sourceCoverage,
  labels: labelCoverage,
  sourceFields: sourceCounts,
  activeArabicTranslations: translatedCounts,
  invalidSourceLabelCells: invalidLabelCells,
  invalidSourceLabelRecords: invalidLabelRecords,
  quarantinedLegacyDrafts: Object.keys(legacyDrafts).length,
  quarantinedLegacyUnknownCodes: legacyDraftUnknownCodes.length,
  sourceReconciliationStatus: reconciliation?.comparison_status ?? "missing",
  errors,
  warnings,
  reportFile: path.relative(root, reportPath)
};
console.log(JSON.stringify(report, null, 2));

if (errors.length > 0) {
  throw new Error("NAE translation/data audit failed with " + errors.length + " issue(s).");
}
