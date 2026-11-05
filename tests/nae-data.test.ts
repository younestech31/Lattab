import assert from "node:assert/strict";
import test from "node:test";
import sector1 from "../data/nae/sector-1.json";
import sector2 from "../data/nae/sector-2.json";
import sector3 from "../data/nae/sector-3.json";
import sector4 from "../data/nae/sector-4.json";
import sector5 from "../data/nae/sector-5.json";
import sector6 from "../data/nae/sector-6.json";
import sector7 from "../data/nae/sector-7.json";
import manifest from "../data/nae/manifest.json";
import {
  buildNAETaxonomy,
  createNAESearchIndex,
  searchNAE,
} from "../lib/nae/search";
import type { NAEActivity } from "../lib/nae/schema";

const activities = [
  ...sector1, ...sector2, ...sector3, ...sector4,
  ...sector5, ...sector6, ...sector7,
] as NAEActivity[];
const indexAr = createNAESearchIndex(activities, "ar");
const indexFr = createNAESearchIndex(activities, "fr");

test("bundled NAE data matches the verified source manifest", () => {
  assert.equal(activities.length, 2136);
  assert.equal(manifest.record_count, 2136);
  assert.equal(manifest.source_sha256, "d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5");
  assert.equal(new Set(activities.map((item) => item.code)).size, 2136);
  assert.deepEqual(
    [sector1.length, sector2.length, sector3.length, sector4.length, sector5.length, sector6.length, sector7.length],
    [452, 81, 185, 278, 365, 754, 21],
  );
});

test("real Arabic activity labels are searchable after normalization", () => {
  const results = searchNAE(indexAr, "تأجير أملاك عقارية");
  assert.equal(results[0]?.activity.code, "611001");
  assert.equal(results[0]?.match.field, "label_ar");
  assert.equal(results[0]?.match.kind, "label_exact");
});

test("real French activity labels are searchable without accents", () => {
  const results = searchNAE(indexFr, "hotels de tourisme sans restaurant");
  assert.equal(results[0]?.activity.code, "601102");
  assert.equal(results[0]?.match.field, "label_fr");
});

test("real activity content is searchable independently from labels", () => {
  const results = searchNAE(indexAr, "appartements maisons");
  const match = results.find((item) => item.activity.code === "611001");
  assert.equal(match?.match.field, "contenue_fr");
  assert.equal(match?.match.kind, "content");
});

test("real accessory descriptions are searchable independently", () => {
  const results = searchNAE(indexAr, "fonctionnement immeubles");
  const match = results.find((item) => item.activity.code === "611004");
  assert.equal(match?.match.field, "accessoires_fr");
  assert.equal(match?.match.kind, "accessory");
});

test("full taxonomy counts all 2,136 records without invented group labels", () => {
  const taxonomy = buildNAETaxonomy(activities);
  assert.equal(taxonomy.length, 7);
  assert.equal(taxonomy.reduce((sum, sector) => sum + sector.count, 0), 2136);
  assert.equal(taxonomy.find((sector) => sector.code === "6")?.count, 754);
  assert.equal("label_ar" in (taxonomy[0]?.groups[0] ?? {}), false);
});

test("source warning values remain data and are not indexed as labels", () => {
  const affected = activities.filter((item) => item.label_ar === "#NOM?" || item.label_fr === "#NOM?" || item.label_en === "#NOM?");
  assert.equal(affected.length, 5);
  assert.equal(searchNAE(indexAr, "nom").some((item) => item.activity.label_ar === "#NOM?"), false);
});
