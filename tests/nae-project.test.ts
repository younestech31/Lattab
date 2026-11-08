import assert from "node:assert/strict";
import test from "node:test";
import type { NAEActivity } from "../lib/nae/schema";
import { analyzeNAEProject } from "../lib/nae/project-analysis";
import { getNAEStatusCode, getNAEStatusInfo } from "../lib/nae/status";
import { createNAESearchIndex } from "../lib/nae/search";
import { searchNAEProject } from "../lib/nae/project-search";
import { addNAEProjectCode, parseNAEProjectDraft } from "../lib/nae/project-draft";

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

test("returns more than fifty matching activities for paginated search", () => {
  const records = Array.from({ length: 150 }, (_, index) => {
    const suffix = String(index).padStart(3, "0");
    return activity({
      code: `100${suffix}`,
      sector_code: "1",
      group_code: "100",
      subgroup_code: "1000",
      label_fr: "Services de proximité",
      label_ar: "خدمات",
      contenue_fr: "Services de proximité",
    });
  });

  const results = searchNAEProject(createNAESearchIndex(records, "fr"), "services", 150);
  assert.equal(results.length, 150);
});

test("maps the published source status values", () => {
  assert.equal(getNAEStatusCode("normal"), "free");
  assert.equal(getNAEStatusCode("green"), "regulated");
  assert.equal(getNAEStatusCode("red"), "blocked");
  assert.equal(getNAEStatusCode("unknown"), "unknown");
  assert.equal(getNAEStatusInfo("normal", "ar").label, "حر");
  assert.equal(getNAEStatusInfo("green", "ar").label, "منظم");
  assert.equal(getNAEStatusInfo("red", "fr").label, "Bloquée");
});

test("includes selected blocked, regulated and unknown source statuses in project review", () => {
  const result = analyzeNAEProject([
    activity({ code: "301205", sector_code: "3", group_code: "301", subgroup_code: "3012", status: "red" }),
    activity({ code: "601201", sector_code: "6", group_code: "601", subgroup_code: "6012", status: "green" }),
    activity({ code: "601202", sector_code: "6", group_code: "601", subgroup_code: "6012", status: "future-status" }),
  ]);

  const blocked = result.findings.find((finding) => finding.id === "selected-blocked-activities");
  const regulated = result.findings.find((finding) => finding.id === "selected-regulated-activities");
  const unknown = result.findings.find((finding) => finding.id === "selected-unknown-status");

  assert.equal(blocked?.severity, "critical");
  assert.deepEqual(blocked?.codes, ["301205"]);
  assert.equal(regulated?.severity, "warning");
  assert.deepEqual(regulated?.codes, ["601201"]);
  assert.equal(unknown?.severity, "warning");
  assert.deepEqual(unknown?.codes, ["601202"]);
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

test("keeps the source status as a concise label instead of long analysis findings", () => {
  assert.equal(getNAEStatusInfo("red", "ar").label, "محظور");
  assert.equal(getNAEStatusInfo("green", "ar").label, "منظم");
  assert.equal(getNAEStatusInfo("green", "fr").label, "Réglementée");
  assert.equal(getNAEStatusInfo("red", "fr").label, "Bloquée");
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

test("does not mistake unrelated uses of the word قطع for spare-parts supply", () => {
  const result = analyzeNAEProject(
    [activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072" })],
    "بيع قطع نقدية قديمة",
  );
  assert.equal(result.findings.some((item) => item.id === "complementary-operations"), false);
});

test("recognizes Arabic definite-article forms of complementary operations", () => {
  const result = analyzeNAEProject(
    [activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072" })],
    "بيع معدات مع التركيب والتوصيل وتوفير قطع الغيار",
  );
  assert.ok(result.findings.some((item) => item.id === "complementary-operations"));
});

test("does not create user-facing notes from same-subgroup classification", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "301102", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
  ]);
  assert.equal(result.primaryCode, "301101");
  assert.equal(result.findings.some((finding) => finding.id.includes("proximity")), false);
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


test("normalizes stored project drafts and removes invalid or duplicate activity codes", () => {
  const draft = parseNAEProjectDraft(JSON.stringify({
    version: 1,
    description: "  مشروع تجاري  ",
    codes: ["507202", "507202", "invalid", 123, "613201"],
    primaryCode: "invalid",
  }));
  assert.deepEqual(draft.codes, ["507202", "613201"]);
  assert.equal(draft.primaryCode, "507202");
  assert.equal(draft.description, "  مشروع تجاري  ");
});

test("adding from an activity detail page preserves more than fifty project selections", () => {
  const codes = Array.from({ length: 50 }, (_, index) => String(100001 + index));
  const initial = parseNAEProjectDraft(JSON.stringify({
    version: 1,
    description: "مشروع متعدد النشاطات",
    codes,
    primaryCode: codes[0],
  }));
  const updated = addNAEProjectCode(initial, "200001");
  assert.equal(updated.codes.length, 51);
  assert.equal(updated.codes[50], "200001");
  assert.equal(updated.primaryCode, codes[0]);
  assert.equal(updated.description, initial.description);
});

test("adding the same activity twice does not duplicate it in the project draft", () => {
  const initial = parseNAEProjectDraft(JSON.stringify({
    version: 1,
    description: "",
    codes: ["507202"],
    primaryCode: "507202",
  }));
  const updated = addNAEProjectCode(initial, "507202");
  assert.deepEqual(updated.codes, ["507202"]);
});

test("finds an activity by its exact six-digit code in the unified project search", () => {
  const records = [
    activity({ code: "507202", sector_code: "5", group_code: "507", subgroup_code: "5072" }),
    activity({ code: "613201", sector_code: "6", group_code: "613", subgroup_code: "6132" }),
  ];
  const result = searchNAEProject(createNAESearchIndex(records, "ar"), "507202");
  assert.equal(result[0]?.activity.code, "507202");
  assert.ok(result[0]?.matchedFields.includes("code"));
});

test("searches the original French designation without changing either source label", () => {
  const frenchLabel = "Vente au détail de matériel informatique";
  const arabicLabel = "بيع بالتجزئة لمعدات الإعلام الآلي";
  const records = [
    activity({
      code: "507202",
      sector_code: "5",
      group_code: "507",
      subgroup_code: "5072",
      label_fr: frenchLabel,
      label_ar: arabicLabel,
    }),
  ];
  const result = searchNAEProject(createNAESearchIndex(records, "fr"), frenchLabel);
  assert.equal(result[0]?.activity.code, "507202");
  assert.equal(result[0]?.activity.label_fr, frenchLabel);
  assert.equal(result[0]?.activity.label_ar, arabicLabel);
  assert.ok(result[0]?.matchedFields.includes("label_fr"));
});

test("keeps group and subgroup signals internal without generating explanatory findings", () => {
  const result = analyzeNAEProject([
    activity({ code: "301101", sector_code: "3", group_code: "301", subgroup_code: "3011" }),
    activity({ code: "301201", sector_code: "3", group_code: "301", subgroup_code: "3012" }),
  ]);
  assert.equal(result.sameGroup, true);
  assert.equal(result.findings.some((finding) => finding.id.includes("proximity")), false);
  assert.equal(result.findings.some((finding) => finding.id === "single-sector"), false);
});
