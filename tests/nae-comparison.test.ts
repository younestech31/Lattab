import assert from "node:assert/strict";
import test from "node:test";
import { normalizeNAECompareCodes } from "../lib/nae/comparison";

const known = new Set(["611001", "611002", "611003", "611004"]);

test("comparison accepts only known six-digit codes", () => {
  assert.deepEqual(normalizeNAECompareCodes("611001,abc,12345,999999", (code) => known.has(code)), ["611001"]);
});
test("comparison removes duplicates and limits selection to three", () => {
  assert.deepEqual(normalizeNAECompareCodes("611001,611001,611002,611003,611004", (code) => known.has(code)), ["611001","611002","611003"]);
});
test("comparison handles repeated query values deterministically", () => {
  assert.deepEqual(normalizeNAECompareCodes(["611002,611003", "611001"], (code) => known.has(code)), ["611002","611003"]);
});
test("comparison accepts an empty or missing query", () => {
  assert.deepEqual(normalizeNAECompareCodes(undefined, () => true), []);
  assert.deepEqual(normalizeNAECompareCodes("", () => true), []);
});
