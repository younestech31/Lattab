# NAE reference data

This directory contains the generated, sector-partitioned JSON snapshot used by the LATTAB NAE project-preparation workspace.

- **Dataset publisher:** UpGrowth.
- **Source page:** https://www.upgrowth.dz/ar/datasets/cnrc-2026
- **Publisher-reported snapshot date:** 2026-10-01.
- **Official source portal:** https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات
- **Source SHA-256:** `d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5`
- **Source licence:** CC BY 4.0. Attribution: UpGrowth (2026), *Nomenclature CNRC 2026 : 2 136 codes d'activité économique en Algérie*.
- **Imported records:** 2,136, partitioned into seven sector JSON files plus `manifest.json`.
- The original CSV is intentionally not committed; it remains excluded by `.gitignore`.
- The publisher-reported snapshot date is not the same as the date on which LATTAB acquired the file; `source_acquired_at` remains unknown. This is a dated snapshot, not a live connection to CNRC.
- Group and subgroup codes are present, but their names are not supplied by this CSV. Do not infer or invent their labels.
- Seven invalid label cells containing `#NOM?` are preserved in the data and excluded from search label indexing; no replacement labels were guessed.

## Source status field

The raw `status` values are preserved verbatim. The UpGrowth dataset page documents the following display mapping:

| Raw value | Dataset status |
|---|---|
| `normal` | Free |
| `green` | Regulated |
| `red` | Blocked |

This mapping is attributed to UpGrowth's dataset documentation under CC BY 4.0. It is **not** represented as an independent CNRC legal opinion. The status is a catalogue-level signal: it does not, by itself, determine every sector-specific condition or whether an authorization must be obtained before registration or before exercising the activity.

## Regeneration

Regenerate these files from the original source with:

```bash
bun run nae:import -- --input ./data-source/cnrc-2026.csv --output ./data/nae
bun run test:nae
```

The application imports these JSON files from a `server-only` module. Do not pass the complete dataset or search index to a Client Component or expose them as a public static asset.
