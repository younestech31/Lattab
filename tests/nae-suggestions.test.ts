import assert from "node:assert/strict";
import test from "node:test";
import sector1 from "../data/nae/sector-1.json";
import sector2 from "../data/nae/sector-2.json";
import sector3 from "../data/nae/sector-3.json";
import sector4 from "../data/nae/sector-4.json";
import sector5 from "../data/nae/sector-5.json";
import sector6 from "../data/nae/sector-6.json";
import sector7 from "../data/nae/sector-7.json";
import type { NAEActivity } from "../lib/nae/schema";
import { getComplementaryActivities } from "../lib/nae/suggestions";

const activities = [
  ...sector1, ...sector2, ...sector3, ...sector4,
  ...sector5, ...sector6, ...sector7,
] as NAEActivity[];

test("recommends sibling activities in the same subgroup", () => {
  // 507202: Vente au détail de matériel informatique
  const suggestions = getComplementaryActivities("507202", activities, ["507202"], 4);
  assert.ok(suggestions.length > 0, "Should return complementary suggestions");

  // Should not contain the target code itself
  assert.equal(suggestions.some((s) => s.activity.code === "507202"), false);

  // Should never recommend blocked codes (status: red)
  assert.equal(suggestions.some((s) => s.activity.status === "red"), false);

  // Sibling in 5072 should be present or cross-sector IT maintenance
  const codes = suggestions.map((s) => s.activity.code);
  assert.ok(
    suggestions.some((s) => s.activity.subgroup_code === "5072" || s.activity.subgroup_code === "6132"),
    `Expected IT sibling or maintenance activity in ${codes.join(", ")}`,
  );
});

test("does not recommend already existing codes in the project", () => {
  const existing = ["507201", "507202", "507203"];
  const suggestions = getComplementaryActivities("507202", activities, existing, 5);

  for (const item of suggestions) {
    assert.equal(existing.includes(item.activity.code), false, `Should not include ${item.activity.code}`);
  }
});

test("does not suggest activities whose source status is unknown", () => {
  const target = activities.find((activity) => activity.code === "507202");
  assert.ok(target);
  const unknownSibling = {
    ...target,
    code: "507299",
    label_fr: "Unknown status test activity",
    label_ar: "نشاط اختبار حالة غير معروفة",
    status: "pending",
  };
  const suggestions = getComplementaryActivities("507202", [target, unknownSibling], [], 6);
  assert.equal(suggestions.some((item) => item.activity.code === "507299"), false);
});

test("returns empty array for non-existent activity code", () => {
  const suggestions = getComplementaryActivities("999999", activities, [], 4);
  assert.deepEqual(suggestions, []);
});
