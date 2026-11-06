import assert from "node:assert/strict";
import test from "node:test";
import type { NAEActivity } from "../lib/nae/schema";
import { analyzeNAEProject } from "../lib/nae/project-analysis";
import { getNAEStatusCode, getNAEStatusInfo } from "../lib/nae/status";
import { createNAESearchIndex } from "../lib/nae/search";
import { searchNAEProject } from "../lib/nae/project-search";

function activity(overrides: Partial<NAEActivity> & Pick<NAEActivity, "code" | "sector_code" | "group_code" | "subgroup_code">): NAEActivity {
  return {
    code: overrides.code, label_fr: overrides.label_fr ?? "Libellé de test", label_en: overrides.label_en ?? "Test label",
    label_ar: overrides.label_ar ?? "تسمية اختبار", status: overrides.status ?? "normal",
    sector_code: overrides.sector_code, group_code: overrides.group_code, subgroup_code: overrides.subgroup_code,
    tutelle_fr: overrides.tutelle_fr ?? null, type_autorisation_fr: overrides.type_autorisation_fr ?? null,
    contenue_fr: overrides.contenue_fr ?? "Description de test", accessoires_fr: overrides.accessoires_fr ?? null,
    references_texte_fr: overrides.references_texte_fr ?? null,
  };
}

test("maps the published source status values", () => {
  assert.equal(getNAEStatusCode("normal"), "free");
  assert.equal(getNAEStatusCode("green"), "regulated");
  assert.equal(getNAEStatusCode("red"), "blocked");
  assert.equal(getNAEStatusCode("unknown"), "unknown");
  assert.equal(getNAEStatusInfo("green", "ar").label, "نشاط منظم");
});

test("warns when selected activities cross sectors under article 9", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "601201", sector_code: "6", group_code: "601", subgroup_code: "6012" }),
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "multiple-sectors"));
});

test("treats sectors 5 and 6 as a conditional exception", () => {
  const result = analyzeNAEProject([
    activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072" }),
    activity({ code: "613201", sector_code: "6", group_code: "613", subgroup_code: "6132" }),
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "sector-5-6-conditional"));
});

test("flags blocked and regulated statuses independently", () => {
  const result = analyzeNAEProject([
    activity({ code: "301205", sector_code: "3", group_code: "301", subgroup_code: "3012", status: "red" }),
    activity({ code: "301112", sector_code: "3", group_code: "301", subgroup_code: "3011", status: "green" }),
  ]);
  assert.ok(result.findings.some((finding) => finding.id === "catalog-blocked" && finding.severity === "critical"));
  assert.ok(result.findings.some((finding) => finding.id === "catalog-regulated" && finding.severity === "warning"));
});

test("recognizes complementary operations cautiously", () => {
  const result = analyzeNAEProject(
    [activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072" })],
    "بيع الحواسيب مع التركيب والتكوين والتوصيل",
  );
  const finding = result.findings.find((item) => item.id === "complementary-operations");
  assert.ok(finding);
  assert.match(finding.detail_ar, /لا يعني أن كل عملية مغطاة تلقائياً/);
});

test("same subgroup is not a legal compatibility decision", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "301102", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
  ]);
  assert.ok(result.findings.some((item) => item.id === "classification-proximity"));
  assert.equal(result.primaryCode, "301101");
  assert.equal(result.findings.some((item) => /متوافقة قانونياً/.test(item.detail_ar)), false);
});

test("recognizes the export-sector note", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "701101", sector_code: "7", group_code: "701", subgroup_code: "7011" }),
  ]);
  assert.ok(result.findings.some((item) => item.id === "export-sector"));
});

test("searches Arabic project wording through reviewed synonyms", () => {
  const records = [
    activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072",
      label_fr: "Vente au détail de matériel informatique : ordinateurs, périphériques",
      contenue_fr: "Vente au détail de matériel informatique" }),
    activity({ code: "613201", sector_code: "6", group_code: "613", subgroup_code: "6132",
      label_fr: "Réparation, installation et maintenance d’équipements de bureautique",
      contenue_fr: "Réparation et maintenance informatique" }),
  ];
  const result = searchNAEProject(createNAESearchIndex(records, "ar"), "بيع الحواسيب بالتجزئة");
  assert.equal(result[0]?.activity.code, "507202");
  assert.equal(result[0]?.usedSynonym, true);
});


test("uses group and subgroup only as internal classification proximity signals", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "301201", sector_code: "3", group_code: "301", subgroup_code: "3012" }),
  ]);
  assert.equal(result.sameGroup, true);
  assert.ok(result.findings.some((finding) => finding.id === "group-proximity"));
  assert.ok(result.findings.some((finding) => /لا يثبت وحده/.test(finding.detail_ar)));
});
