import "server-only";

import { z } from "zod";
import sector1 from "../../data/nae/sector-1.json";
import sector2 from "../../data/nae/sector-2.json";
import sector3 from "../../data/nae/sector-3.json";
import sector4 from "../../data/nae/sector-4.json";
import sector5 from "../../data/nae/sector-5.json";
import sector6 from "../../data/nae/sector-6.json";
import sector7 from "../../data/nae/sector-7.json";
import datasetManifest from "../../data/nae/manifest.json";
import { createNAESearchIndex, type NAESearchIndex, type NAESearchLanguage } from "./search";
import { naeActivitySchema, type NAEActivity } from "./schema";
import { applyNAELabelOverrides } from "./label-overrides";

export interface NAEDatasetManifest {
  dataset: string;
  source_file_name: string;
  source_sha256: string;
  source_encoding: string;
  source_delimiter: string;
  source_revision_date: string | null;
  source_acquired_at: string | null;
  source_publisher?: string;
  source_reference_url?: string;
  source_license?: string;
  source_attribution?: string;
  official_portal_url?: string;
  official_portal_observed_updated_at?: string | null;
  status_mapping?: Record<string, unknown>;
  imported_at: string;
  record_count: number;
  sector_counts: Record<string, number>;
  field_coverage: Record<string, number>;
  invalid_source_labels: Array<{ code: string; field: string }>;
  raw_status_counts: Record<string, number>;
  status_semantics: string;
}

const rawActivities: unknown[] = [
  ...sector1, ...sector2, ...sector3, ...sector4,
  ...sector5, ...sector6, ...sector7,
];

// Validate the untouched source rows first, then apply display-only corrections.
const sourceActivities = z.array(naeActivitySchema).parse(rawActivities) as NAEActivity[];
const activities = sourceActivities.map(applyNAELabelOverrides);
const manifest = datasetManifest as unknown as NAEDatasetManifest;

if (manifest.record_count !== activities.length) {
  throw new Error(
    `NAE dataset manifest mismatch: expected ${manifest.record_count} records, loaded ${activities.length}.`,
  );
}

if (!/^[a-f0-9]{64}$/i.test(manifest.source_sha256)) {
  throw new Error("NAE dataset manifest contains an invalid source SHA-256.");
}

const byCode = new Map<string, NAEActivity>();
for (const activity of activities) {
  if (byCode.has(activity.code)) {
    throw new Error(`Duplicate NAE activity code in bundled data: ${activity.code}`);
  }
  byCode.set(activity.code, activity);
}

if (byCode.size !== manifest.record_count) {
  throw new Error("NAE dataset contains duplicate or missing activity codes.");
}

const activityList = Object.freeze(
  [...activities].sort((a, b) => a.code.localeCompare(b.code, "en")),
);

/**
 * Server-only access to the bundled reference dataset.
 * Do not pass the complete activity list or search index to Client Components.
 */
export function getNAEActivities(): readonly NAEActivity[] {
  return activityList;
}

export function getNAEActivityByCode(code: string): NAEActivity | undefined {
  return byCode.get(code);
}

export function getNAEDatasetManifest(): NAEDatasetManifest {
  return manifest;
}

const searchIndexes = new Map<NAESearchLanguage, NAESearchIndex>();

/** Builds each language index lazily and reuses it for later server requests. */
export function getNAESearchIndex(language: NAESearchLanguage = "ar"): NAESearchIndex {
  const cached = searchIndexes.get(language);
  if (cached) return cached;

  const index = createNAESearchIndex(activityList, language);
  searchIndexes.set(language, index);
  return index;
}
