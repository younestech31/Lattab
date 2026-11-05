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

test("indexability requires a valid localized label and substantive source content", () => {
  assert.equal(isNAEActivityIndexable(activity, "ar"), true);
  assert.equal(isNAEActivityIndexable(activity, "fr"), true);
  assert.equal(isNAEActivityIndexable({ ...activity, label_ar: "#NOM?" }, "ar"), false);
  assert.equal(isNAEActivityIndexable({ ...activity, contenue_fr: "Texte bref" }, "fr"), false);
});
test("invalid localized label does not delete the activity and falls back transparently", () => {
  const invalid = { ...activity, label_ar: "#NOM?" };
  assert.equal(hasValidNAELabel(invalid, "ar"), false);
  assert.equal(hasValidNAELabel(invalid, "fr"), true);
  assert.equal(getNAEActivityTitle(invalid, "ar"), activity.label_fr);
});
test("metadata descriptions are localized", () => {
  assert.match(getNAEPageDescription(activity, "fr"), /^Code NAE 611001/);
  assert.match(getNAEPageDescription(activity, "ar"), /بطاقة مرجعية/);
});
