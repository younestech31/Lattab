import assert from "node:assert/strict";
import test from "node:test";
import type { NAEActivity } from "../lib/nae/schema";
import { NAE_SOURCE_HEADERS } from "../lib/nae/schema";
import sector1 from "../data/nae/sector-1.json";
import sector2 from "../data/nae/sector-2.json";
import sector3 from "../data/nae/sector-3.json";
import sector4 from "../data/nae/sector-4.json";
import sector5 from "../data/nae/sector-5.json";
import sector6 from "../data/nae/sector-6.json";
import sector7 from "../data/nae/sector-7.json";
import manifest from "../data/nae/manifest.json";
import { resolveActivityBilingual } from "../lib/nae/gap-resolver";

const activities = [
  ...sector1, ...sector2, ...sector3, ...sector4,
  ...sector5, ...sector6, ...sector7,
] as NAEActivity[];
const isUsable = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.trim() !== "#NOM?";

const expectedSectorCounts = { "1": 452, "2": 81, "3": 185, "4": 278, "5": 365, "6": 754, "7": 21 };
const expectedStatusCounts = { green: 350, normal: 1641, red: 145 };
const expectedFieldCoverage = {
  code: 2136,
  label_fr: 2133,
  label_en: 2134,
  label_ar: 2134,
  status: 2136,
  sector_code: 2136,
  group_code: 2136,
  subgroup_code: 2136,
  tutelle_fr: 379,
  type_autorisation_fr: 379,
  contenue_fr: 2136,
  accessoires_fr: 905,
  references_texte_fr: 379,
};

test("the NAE snapshot contains 2,136 unique six-digit codes with consistent hierarchy", () => {
  const codes = activities.map((activity) => activity.code);
  assert.equal(activities.length, 2136);
  assert.equal(new Set(codes).size, 2136);
  for (const activity of activities) {
    assert.match(activity.code, /^\d{6}$/);
    assert.equal(activity.sector_code, activity.code.slice(0, 1), activity.code);
    assert.equal(activity.group_code, activity.code.slice(0, 3), activity.code);
    assert.equal(activity.subgroup_code, activity.code.slice(0, 4), activity.code);
  }
});

test("manifest field coverage counts valid values and excludes #NOM? placeholders", () => {
  const calculated = Object.fromEntries(NAE_SOURCE_HEADERS.map((field) => [
    field,
    activities.filter((activity) => isUsable(activity[field])).length,
  ]));
  assert.deepEqual(calculated, expectedFieldCoverage);
  assert.deepEqual(manifest.field_coverage, calculated);
});

test("manifest sector and raw status totals exactly match the source rows", () => {
  const sectors = Object.fromEntries(
    ["1", "2", "3", "4", "5", "6", "7"].map((code) => [
      code,
      activities.filter((activity) => activity.sector_code === code).length,
    ]),
  );
  const statuses = Object.fromEntries(
    [...new Set(activities.map((activity) => activity.status))].sort().map((status) => [
      status,
      activities.filter((activity) => activity.status === status).length,
    ]),
  );
  assert.deepEqual(sectors, expectedSectorCounts);
  assert.deepEqual(statuses, expectedStatusCounts);
  assert.deepEqual(manifest.sector_counts, sectors);
  assert.deepEqual(manifest.raw_status_counts, statuses);
});

test("all invalid source labels are explicitly preserved and recorded", () => {
  const invalidCells = activities.flatMap((activity) =>
    (["label_ar", "label_fr", "label_en"] as const)
      .filter((field) => activity[field].trim() === "#NOM?")
      .map((field) => ({ code: activity.code, field })),
  );
  assert.equal(invalidCells.length, 7);
  assert.equal(new Set(invalidCells.map((entry) => entry.code)).size, 5);
  assert.deepEqual(manifest.invalid_source_labels, invalidCells);
});

test("the current public-source reconciliation matches the bundled snapshot", () => {
  const reconciliation = manifest.source_reconciliation;
  assert.equal(reconciliation.comparison_status, "matched");
  assert.equal(reconciliation.checked_at, "2026-11-11");
  assert.equal(reconciliation.upstream_record_count, 2136);
  assert.equal(reconciliation.record_delta, 0);
  assert.deepEqual(reconciliation.upstream_sector_counts, expectedSectorCounts);
  assert.deepEqual(reconciliation.upstream_status_counts, { normal: 1641, green: 350, red: 145 });
  for (const code of ["301205", "501308"]) {
    const activity = activities.find((item) => item.code === code);
    assert.equal(activity?.status, "red");
    assert.ok(reconciliation.confirmed_blocked_codes.some((entry) => entry.code === code && entry.status === "red"));
  }
  assert.equal(reconciliation.historical_2026_11_02_observation.status, "superseded");
  assert.match(reconciliation.verification_scope, /not an independent live query/);
});

test("resolved translation coverage remains consistent with active overlay files", () => {
  const resolved = activities.map(resolveActivityBilingual);
  assert.equal(resolved.filter((activity) => isUsable(activity.contenue_ar)).length, 709);
  assert.equal(resolved.filter((activity) => isUsable(activity.accessoires_ar)).length, 905);
  assert.equal(resolved.filter((activity) => isUsable(activity.tutelle_ar)).length, 379);
  assert.equal(resolved.filter((activity) => isUsable(activity.type_autorisation_ar)).length, 379);
  assert.equal(resolved.filter((activity) => isUsable(activity.references_texte_ar)).length, 379);
});
