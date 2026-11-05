/**
 * Strict parser for the semicolon-delimited CNRC export.
 * Supports quoted delimiters, escaped quotes, CRLF and embedded newlines.
 * Rejects quotes in unquoted fields and data after a closing quote.
 */
export function parseSemicolonCsv(source: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  let afterQuote = false;

  const finishRow = () => {
    row.push(field);
    if (row.some((cell) => cell.length > 0)) rows.push(row);
    row = [];
    field = "";
    afterQuote = false;
  };

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];

    if (quoted) {
      if (char === '"' && source[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
        afterQuote = true;
      } else {
        field += char;
      }
      continue;
    }

    if (afterQuote) {
      if (char === ";") {
        row.push(field);
        field = "";
        afterQuote = false;
      } else if (char === "\n") {
        finishRow();
      } else if (char === "\r" && source[i + 1] === "\n") {
        i += 1;
        finishRow();
      } else {
        throw new Error(`Unexpected character after a closing quote at position ${i}.`);
      }
      continue;
    }

    if (char === '"') {
      if (field.length !== 0) {
        throw new Error(`Unexpected quote in an unquoted field at position ${i}.`);
      }
      quoted = true;
    } else if (char === ";") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      finishRow();
    } else if (char === "\r" && source[i + 1] === "\n") {
      i += 1;
      finishRow();
    } else {
      field += char;
    }
  }

  if (quoted) throw new Error("CSV contains an unterminated quoted field.");
  if (field.length > 0 || row.length > 0 || afterQuote) {
    row.push(field);
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }

  return rows;
}
