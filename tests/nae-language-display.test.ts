import assert from "node:assert/strict";
import test from "node:test";
import sector1 from "../data/nae/sector-1.json";
import { getNAELocalizedField } from "../lib/nae/display";
import { createNAESearchIndex, searchNAE } from "../lib/nae/search";
import type { NAEActivity } from "../lib/nae/schema";

test("Arabic display uses the Arabic translation and keeps French source separate", () => {
  assert.deepEqual(getNAELocalizedField("Texte source en français", "النص العربي", "ar"), {
    value: "النص العربي", sourceFrench: "Texte source en français", isTranslated: true,
  });
});

test("Arabic display never silently falls back to French when translation is missing", () => {
  assert.deepEqual(getNAELocalizedField("French-only source", null, "ar"), {
    value: null, sourceFrench: "French-only source", isTranslated: false,
  });
});

test("French display uses only French source as its main value", () => {
  assert.deepEqual(getNAELocalizedField("Texte français", "نص عربي", "fr"), {
    value: "Texte français", sourceFrench: null, isTranslated: false,
  });
});

test("source placeholders are treated as missing values", () => {
  assert.deepEqual(getNAELocalizedField("#NOM?", "#NOM?", "ar"), {
    value: null, sourceFrench: null, isTranslated: false,
  });
});

test("Arabic search matches translated activity content", () => {
  const activity = sector1.find((item) => item.code === "101101") as NAEActivity | undefined;
  assert.ok(activity);
  const results = searchNAE(createNAESearchIndex([activity], "ar"), "استصلاح التربة");
  assert.equal(results.length, 1);
  assert.equal(results[0].activity.code, "101101");
  assert.equal(results[0].match.field, "contenue_ar");
  assert.equal(results[0].match.language, "ar");
});

test("French search continues to match original French activity content", () => {
  const activity = sector1.find((item) => item.code === "101101") as NAEActivity | undefined;
  assert.ok(activity);
  const results = searchNAE(createNAESearchIndex([activity], "fr"), "construction des banquettes");
  assert.equal(results.length, 1);
  assert.equal(results[0].activity.code, "101101");
  assert.equal(results[0].match.field, "contenue_fr");
  assert.equal(results[0].match.language, "fr");
});
