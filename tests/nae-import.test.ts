import assert from "node:assert/strict";
import test from "node:test";
import { parseSemicolonCsv } from "../lib/nae/csv";
import { naeActivitySchema } from "../lib/nae/schema";

test("parses semicolon-delimited rows and CRLF", () => {
  assert.deepEqual(parseSemicolonCsv("a;b\r\n1;2\r\n"), [["a", "b"], ["1", "2"]]);
});

test("preserves semicolons and escaped quotes inside quoted fields", () => {
  assert.deepEqual(
    parseSemicolonCsv('code;description\n123456;"A; ""quoted"" value"\n'),
    [["code", "description"], ["123456", 'A; "quoted" value']],
  );
});

test("preserves embedded newlines inside quoted fields", () => {
  assert.deepEqual(parseSemicolonCsv('a;b\n1;"line one\nline two"\n'), [["a", "b"], ["1", "line one\nline two"]]);
});

test("rejects unterminated quoted fields", () => {
  assert.throws(() => parseSemicolonCsv('a;b\n1;"unfinished'), /unterminated quoted field/i);
});

test("schema requires six-digit codes and nullable optional source fields", () => {
  const valid = {
    code: "123456",
    label_fr: "Libellé",
    label_en: "Label",
    label_ar: "تسمية",
    status: "unknown-raw-value",
    sector_code: "1",
    group_code: "123",
    subgroup_code: "1234",
    tutelle_fr: null,
    type_autorisation_fr: null,
    contenue_fr: "Description",
    accessoires_fr: null,
    references_texte_fr: null,
  };
  assert.equal(naeActivitySchema.safeParse(valid).success, true);
  assert.equal(naeActivitySchema.safeParse({ ...valid, code: "12345" }).success, false);
});
