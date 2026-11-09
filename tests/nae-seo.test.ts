import assert from "node:assert/strict";
import test from "node:test";
import type { NAEActivity } from "../lib/nae/schema";
import { getNAEActivityTitle, getNAEPageDescription, hasValidNAELabel, isNAEActivityIndexable } from "../lib/nae/seo";

const activity: NAEActivity = {
  code: "611001",
  label_fr: "Location de biens immobiliers",
  label_en: "Rental of real estate",
  label_ar: "تأجير أملاك عقارية",
  status: "normal",
  sector_code: "6",
  group_code: "611",
  subgroup_code: "6110",
  tutelle_fr: null,
  type_autorisation_fr: null,
  contenue_fr: "Location d'appartements et de maisons vides ou meublées, destinées à l'habitation. Description complémentaire suffisante pour le seuil.",
  accessoires_fr: null,
  references_texte_fr: null,
};

test("indexability requires valid labels and substantive source content", () => {
  assert.equal(isNAEActivityIndexable(activity, "ar"), true);
  assert.equal(isNAEActivityIndexable(activity, "fr"), true);
  assert.equal(isNAEActivityIndexable({ ...activity, label_ar: "#NOM?" }, "ar"), false);
  assert.equal(isNAEActivityIndexable({ ...activity, label_ar: "#NOM?" }, "fr"), false);
  assert.equal(isNAEActivityIndexable({ ...activity, contenue_fr: "Texte bref" }, "fr"), false);
});

test("missing localized label never falls back to the other interface language", () => {
  const invalidArabic = { ...activity, label_ar: "#NOM?" };
  assert.equal(hasValidNAELabel(invalidArabic, "ar"), false);
  assert.equal(hasValidNAELabel(invalidArabic, "fr"), true);
  assert.equal(getNAEActivityTitle(invalidArabic, "ar"), invalidArabic.code);

  const invalidFrench = { ...activity, label_fr: "#NOM?" };
  assert.equal(hasValidNAELabel(invalidFrench, "fr"), false);
  assert.equal(getNAEActivityTitle(invalidFrench, "fr"), invalidFrench.code);
});

test("metadata descriptions are localized", () => {
  assert.match(getNAEPageDescription(activity, "fr"), /^Code NAE 611001/);
  assert.match(getNAEPageDescription(activity, "ar"), /بطاقة مرجعية/);
});
