# NAE reference data

This directory contains the generated, sector-partitioned JSON dataset used by the LATTAB NAE explorer.

- Source file supplied for this project: `cnrc-2026.csv`
- Source SHA-256: `d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5`
- Imported records: 2136
- Data files: seven sector JSON files plus `manifest.json`
- The original CSV is intentionally not committed; it remains excluded by `.gitignore`.
- The export revision date and acquisition timestamp are unknown. The filename is not treated as proof of an official publication date.
- Values in `status` are retained verbatim and have no verified semantic dictionary.
- Group and subgroup codes are present, but their names are not supplied in this export.
- The seven `#NOM?` label cells are preserved in the dataset and excluded from search label indexing; no replacements were guessed.

Regenerate these files from the original source with:

```bash
bun run nae:import -- --input ./data-source/cnrc-2026.csv --output ./data/nae
bun run test:nae
```

The application imports these JSON files from a `server-only` module. Do not pass the complete dataset to a Client Component or expose it as a public static asset.
