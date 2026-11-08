import assert from "node:assert/strict";
import test from "node:test";
import { SearchPayloadSchema, AnalyzePayloadSchema, BrowsePayloadSchema } from "../lib/nae/api-schema";

test("SearchPayloadSchema validates and trims valid requests", () => {
  const result = SearchPayloadSchema.safeParse({ q: "  حواسيب  ", lang: "fr", page: 2, pageSize: 24 });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.q, "حواسيب");
    assert.equal(result.data.lang, "fr");
    assert.equal(result.data.page, 2);
    assert.equal(result.data.pageSize, 24);
  }
});

test("SearchPayloadSchema rejects missing or empty queries", () => {
  assert.equal(SearchPayloadSchema.safeParse({}).success, false);
  assert.equal(SearchPayloadSchema.safeParse({ q: "   " }).success, false);
  assert.equal(SearchPayloadSchema.safeParse({ q: "a".repeat(181) }).success, false);
});

test("AnalyzePayloadSchema validates valid analyze requests", () => {
  const result = AnalyzePayloadSchema.safeParse({
    codes: ["507202", "613201"],
    description: "مشروع تجاري",
    primaryCode: "507202",
    lang: "ar",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.deepEqual(result.data.codes, ["507202", "613201"]);
    assert.equal(result.data.primaryCode, "507202");
  }
});

test("AnalyzePayloadSchema rejects invalid codes and languages", () => {
  assert.equal(AnalyzePayloadSchema.safeParse({ codes: ["12345"] }).success, false);
  assert.equal(AnalyzePayloadSchema.safeParse({ codes: ["123456"], lang: "en" }).success, false);
  assert.equal(AnalyzePayloadSchema.safeParse({ codes: ["123456"], primaryCode: "not-a-code" }).success, false);
});

test("BrowsePayloadSchema validates valid browsing and filtering options", () => {
  const result = BrowsePayloadSchema.safeParse({
    sector: "5",
    status: "green",
    page: 2,
    pageSize: 24,
    lang: "ar",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.sector, "5");
    assert.equal(result.data.status, "green");
    assert.equal(result.data.page, 2);
  }
});

test("BrowsePayloadSchema validates complementaryTo code requests", () => {
  const result = BrowsePayloadSchema.safeParse({
    complementaryTo: "507202",
    lang: "fr",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.complementaryTo, "507202");
    assert.equal(result.data.lang, "fr");
  }
});

