import assert from "node:assert/strict";
import test from "node:test";
import type { NAEActivity } from "../lib/nae/schema";
import { analyzeNAEProject, getNAEProjectRegulatoryStatus } from "../lib/nae/project-analysis";
import { searchNAEProject } from "../lib/nae/project-search";

function activity(
  code: string,
  sector_code: string,
  status = "normal",
  overrides: Partial<NAEActivity> = {},
): NAEActivity {
  return {
    code,
    label_ar: overrides.label_ar ?? "خدمات إعلام آلي",
    label_fr: overrides.label_fr ?? "Services informatiques",
    label_en: overrides.label_en ?? "IT services",
    status,
    sector_code,
    group_code: overrides.group_code ?? code.slice(0, 3),
    subgroup_code: overrides.subgroup_code ?? code.slice(0, 4),
    tutelle_fr: overrides.tutelle_fr ?? null,
    type_autorisation_fr: overrides.type_autorisation_fr ?? null,
    contenue_fr: overrides.contenue_fr ?? "Maintenance et installation de matériel informatique",
    accessoires_fr: overrides.accessoires_fr ?? null,
    references_texte_fr: overrides.references_texte_fr ?? null,
  };
}

test("project search can match different words across different activity fields", () => {
  const rows = [
    activity("611001", "6", "normal", {
      label_ar: "صيانة أجهزة الإعلام الآلي",
      contenue_fr: "Maintenance des ordinateurs",
    }),
    activity("611002", "6", "normal", {
      label_ar: "تركيب الشبكات المعلوماتية",
      contenue_fr: "Installation et configuration de réseaux",
    }),
  ];
  const hits = searchNAEProject(rows, "صيانة وتركيب الشبكات والأجهزة", "ar");
  assert.ok(hits.some((hit) => hit.activity.code === "611001"));
  assert.ok(hits.some((hit) => hit.activity.code === "611002"));
  assert.ok(hits[0]?.matchedTerms.length);
});

test("project search tolerates common Arabic prefixes and French plurals", () => {
  const rows = [
    activity("611003", "6", "normal", {
      label_ar: "تركيب الشبكات المعلوماتية",
      label_fr: "Installation de réseau informatique",
      contenue_fr: "Installation et configuration de réseau informatique",
    }),
  ];
  assert.ok(searchNAEProject(rows, "التركيب بالشبكات", "ar").some((hit) => hit.activity.code === "611003"));
  assert.ok(searchNAEProject(rows, "installations de réseaux informatiques", "fr").some((hit) => hit.activity.code === "611003"));
});

test("Arabic descriptions can match French activity text through curated indicative synonyms", () => {
  const rows = [
    activity("611005", "6", "normal", {
      label_ar: "#NOM?",
      label_fr: "Maintenance informatique",
      contenue_fr: "Maintenance des ordinateurs et réparation de matériel informatique",
    }),
  ];
  const hits = searchNAEProject(rows, "صيانة حواسيب", "ar");
  assert.equal(hits[0]?.activity.code, "611005");
  assert.ok(hits[0]?.evidence.includes("curated_synonym"));
});

test("project search keeps match evidence for explainable results", () => {
  const rows = [activity("611001", "6", "normal", {
    label_ar: "صيانة أجهزة الإعلام الآلي",
    contenue_fr: "Maintenance de matériel informatique",
  })];
  const hit = searchNAEProject(rows, "صيانة", "ar")[0];
  assert.equal(hit?.activity.code, "611001");
  assert.ok(hit?.evidence.includes("label_ar"));
});

test("article 2 complementary operations are flagged without auto-adding an activity", () => {
  const result = analyzeNAEProject([
    activity("611003", "6"),
  ], "صيانة أجهزة الحاسوب وتركيبها وتوصيلها للزبائن");
  assert.ok(result.findings.some((finding) => finding.id === "complementary-installation"));
  assert.ok(result.findings.some((finding) => finding.id === "complementary-transport-delivery"));
});

test("reported catalogue changes remain cautions, not official lifecycle decisions", () => {
  const result = analyzeNAEProject([
    {
      ...activity("301205", "3"),
      catalog_note_kind: "withdrawal_report",
      catalog_note_ar: "رصد ثانوي غير مؤكد",
    },
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "catalog-freshness-observation"));
});

test("raw UpGrowth status values map to source-reported status categories", () => {
  assert.equal(getNAEProjectRegulatoryStatus("normal"), "free");
  assert.equal(getNAEProjectRegulatoryStatus("green"), "regulated");
  assert.equal(getNAEProjectRegulatoryStatus("red"), "prohibited");
  assert.equal(getNAEProjectRegulatoryStatus("unknown"), "unknown");
});

test("same taxonomy group does not generate legal compatibility approval", () => {
  const result = analyzeNAEProject([
    activity("301101", "3", "normal", { group_code: "301", subgroup_code: "3011" }),
    activity("301102", "3", "normal", { group_code: "301", subgroup_code: "3011" }),
  ]);
  assert.equal(result.sameGroup, true);
  assert.ok(result.findings.some((finding) => finding.id === "taxonomy-not-legal-approval"));
  assert.equal(result.findings.some((finding) => finding.id === "multiple-sectors"), false);
});

test("cross-sector selection warns about the general rule", () => {
  const result = analyzeNAEProject([
    activity("301101", "3"),
    activity("611001", "6"),
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "multiple-sectors"));
});

test("sectors five and six remain a conditional exception, not automatic approval", () => {
  const result = analyzeNAEProject([
    activity("501101", "5"),
    activity("611001", "6"),
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "retail-services-exception"));
  assert.ok(result.findings.some((finding) => finding.id === "multiple-sectors"));
});

test("complementary operation analysis checks the primary activity text", () => {
  const covered = analyzeNAEProject([
    {
      ...activity("611003", "6"),
      contenue_fr: "Maintenance et installation de matériel informatique",
      accessoires_fr: null,
    },
  ], "صيانة وتركيب معدات الإعلام الآلي", "611003");
  const finding = covered.findings.find((item) => item.id === "complementary-installation");
  assert.ok(finding);
  assert.match(finding.message_fr, /correspondance textuelle/);

  const notFound = analyzeNAEProject([
    {
      ...activity("611004", "6"),
      contenue_fr: "Conseil en gestion",
      accessoires_fr: null,
    },
  ], "تركيب معدات", "611004");
  const noMatch = notFound.findings.find((item) => item.id === "complementary-installation");
  assert.ok(noMatch);
  assert.match(noMatch.message_fr, /Aucune mention directe/);
});

test("export intent does not automatically require sector seven", () => {
  const result = analyzeNAEProject([activity("101101", "1")], "إنتاج وتصدير المنتجات");
  assert.ok(result.findings.some((finding) => finding.id === "export-does-not-require-sector-7-by-default"));
});

test("regulated activity does not infer authorization timing", () => {
  const result = analyzeNAEProject([activity("301112", "3", "green")]);
  const regulated = result.findings.find((finding) => finding.id === "regulated-activity");
  assert.ok(regulated);
  assert.match(regulated.message_ar, /لا يستنتج توقيت/);
});
