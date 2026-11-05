import assert from "node:assert/strict";
import test from "node:test";
import {
  buildNAETaxonomy,
  createNAESearchIndex,
  filterNAEByTaxonomy,
  normalizeNAESearchText,
  searchNAE,
} from "../lib/nae/search";
import type { NAEActivity } from "../lib/nae/schema";

function activity(
  overrides: Partial<NAEActivity> & Pick<NAEActivity, "code" | "sector_code" | "group_code" | "subgroup_code">,
): NAEActivity {
  return {
    code: overrides.code,
    label_fr: overrides.label_fr ?? "Services informatiques",
    label_en: overrides.label_en ?? "IT services",
    label_ar: overrides.label_ar ?? "خدمات إعلام آلي",
    status: overrides.status ?? "raw-status",
    sector_code: overrides.sector_code,
    group_code: overrides.group_code,
    subgroup_code: overrides.subgroup_code,
    tutelle_fr: overrides.tutelle_fr ?? null,
    type_autorisation_fr: overrides.type_autorisation_fr ?? null,
    contenue_fr: overrides.contenue_fr ?? "Conseil et assistance en informatique",
    accessoires_fr: overrides.accessoires_fr ?? null,
    references_texte_fr: overrides.references_texte_fr ?? null,
  };
}

const records = [
  activity({
    code: "611001",
    sector_code: "6",
    group_code: "611",
    subgroup_code: "6110",
    label_ar: "خدمات إعلام آلي",
    label_fr: "Services informatiques",
    contenue_fr: "Conseil et assistance en informatique",
  }),
  activity({
    code: "611002",
    sector_code: "6",
    group_code: "611",
    subgroup_code: "6110",
    label_ar: "صيانة أجهزة الإعلام الآلي",
    label_fr: "Maintenance informatique",
    contenue_fr: "Réparation de matériel informatique",
    accessoires_fr: "Installation et configuration de réseaux",
  }),
  activity({
    code: "123456",
    sector_code: "1",
    group_code: "123",
    subgroup_code: "1234",
    label_ar: "#NOM?",
    label_fr: "Production agricole",
    contenue_fr: "Culture de produits agricoles",
  }),
];

test("normalizes Arabic alef forms, diacritics, tatweel and final ya", () => {
  assert.equal(normalizeNAESearchText("إِعْلَامـى آلي"), "اعلامي الي");
});

test("normalizes French accents and punctuation", () => {
  assert.equal(normalizeNAESearchText("Électricité – réseau public"), "electricite reseau public");
});

test("finds labels across Arabic normalization differences", () => {
  const index = createNAESearchIndex(records);
  const results = searchNAE(index, "اعلام آلي");
  assert.deepEqual(results.map((item) => item.activity.code), ["611001"]);
  assert.equal(results[0]?.match.kind, "label_contains");
  assert.equal(results[0]?.match.field, "label_ar");
});

test("finds French labels without accents and retains match language", () => {
  const french = activity({
    code: "611003",
    sector_code: "6",
    group_code: "611",
    subgroup_code: "6110",
    label_fr: "Électricité générale",
  });
  const index = createNAESearchIndex([french], "fr");
  const result = searchNAE(index, "electricite generale")[0];
  assert.equal(result?.activity.code, "611003");
  assert.equal(result?.match.kind, "label_exact");
  assert.equal(result?.match.language, "fr");
});

test("ranks exact code before prefix and partial code matches", () => {
  const index = createNAESearchIndex(records);
  assert.equal(searchNAE(index, "611001")[0]?.match.kind, "code_exact");
  assert.equal(searchNAE(index, "611")[0]?.match.kind, "code_prefix");
  assert.equal(searchNAE(index, "100")[0]?.match.kind, "code_contains");
});

test("searches content and accessory descriptions separately", () => {
  const index = createNAESearchIndex(records);
  const content = searchNAE(index, "assistance informatique");
  assert.equal(content[0]?.activity.code, "611001");
  assert.equal(content[0]?.match.kind, "content");

  const accessory = searchNAE(index, "configuration reseaux");
  assert.equal(accessory[0]?.activity.code, "611002");
  assert.equal(accessory[0]?.match.kind, "accessory");
});

test("does not index the literal #NOM? as an activity label", () => {
  const invalidLabelRecord = records[2];
  const index = createNAESearchIndex([invalidLabelRecord]);
  assert.equal(searchNAE(index, "nom").length, 0);
  assert.equal(searchNAE(index, "production agricole").length, 1);
});

test("applies hierarchy filters and result limits", () => {
  const index = createNAESearchIndex(records);
  assert.deepEqual(
    searchNAE(index, "informatique", { sectorCode: "6", limit: 1 })
      .map((item) => item.activity.code),
    ["611001"],
  );
  assert.deepEqual(
    filterNAEByTaxonomy(records, { groupCode: "611" }).map((item) => item.code),
    ["611001", "611002"],
  );
  assert.deepEqual(
    searchNAE(index, "production agricole", { subgroupCode: "1234" })
      .map((item) => item.activity.code),
    ["123456"],
  );
});

test("returns no results for an empty query", () => {
  assert.deepEqual(searchNAE(createNAESearchIndex(records), "   "), []);
});

test("builds a hierarchy without inventing group or subgroup names", () => {
  const tree = buildNAETaxonomy(records);
  assert.equal(tree.length, 2);
  const services = tree.find((sector) => sector.code === "6");
  assert.equal(services?.label_ar, "الخدمات");
  assert.equal(services?.count, 2);
  assert.equal(services?.groups[0]?.code, "611");
  assert.equal(services?.groups[0]?.subgroups[0]?.code, "6110");
  assert.equal(services?.groups[0]?.subgroups[0]?.count, 2);
  assert.equal("label_ar" in (services?.groups[0] ?? {}), false);
});
