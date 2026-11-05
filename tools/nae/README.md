# NAE data import

This folder contains the repeatable local import tool for the CNRC NAE CSV export.

## Input

1. Obtain the CSV from a source you are authorized to use.
2. Place it at `data-source/cnrc-2026.csv` (or pass a custom path).
3. Keep the original file unchanged. The repository ignores `data-source/cnrc-2026.csv`; do not commit the raw export.

The importer expects UTF-8 (with or without BOM), semicolon-separated CSV, and the exact 13 source headers documented in `lib/nae/schema.ts`.

## Run

```bash
bun run nae:import
```

Custom paths:

```bash
bun run nae:import -- --input ./path/to/export.csv --output ./data/nae
```

The importer uses the repository's existing `tsx` and `zod` dependencies. It writes one JSON file per sector, a manifest, and a Markdown quality report. Generated files are deterministic apart from the manifest's `imported_at` timestamp.

## Tests

Run the focused parser/schema tests with:

```bash
bun run test:nae
```

The tests cover quoted delimiters, escaped quotes, embedded newlines, CRLF, malformed quoting, and the six-digit schema constraint.

## Validation policy

- Invalid headers, malformed rows, duplicate codes, invalid six-digit codes, and hierarchy-prefix mismatches stop the import.
- Literal `#NOM?` labels are retained and reported as warnings; no language is guessed or overwritten.
- Empty regulatory fields become `null`; this does not mean that no authorization is required.
- Raw `status` values are retained but are not interpreted.
- Sector names are sourced from Article 3 of Executive Decree 15-249. Group and subgroup names are not inferred.
- Source revision/acquisition dates remain `null` unless independently verified.

The raw source file is not copied into the generated dataset. The manifest records its SHA-256 so a later import can be traced to the exact input snapshot.
