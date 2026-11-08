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

## Reconciled snapshot discrepancy (2,136 vs 2,134 records)

UpGrowth's online table view (snapshot 2026-11-02) lists 2,134 records, whereas the raw CSV dataset snapshot (2026-10-01) imported into this repository contains 2,136 records.

Detailed row-by-row reconciliation confirms that the 2-record discrepancy comprises:
1. `301205` (*Commerce de gros de la charcuterie* / *تجارة بالجملة للخنازيريات*): Sector 3 (185 in repo vs 184 online).
2. `501308` (*Commerce de détail de la charcuterie* / *تجارة بالتجزئة للحوم الخنازير*): Sector 5 (365 in repo vs 364 online).

Both codes have status `red` (Blocked / Bloquée / محظور) due to national statutory prohibitions on pork products. UpGrowth's web table filtered these blocked codes out, while the official CNRC nomenclature records them as blocked activities. In accordance with institutional data retention rules, both records are retained in this repository with their true source status (`red`) and documented in `manifest.json` and `docs/NAE-RECONCILIATION-REPORT.md`.

## Regeneration

Regenerate these files from the original source with:

```bash
bun run nae:import -- --input ./data-source/cnrc-2026.csv --output ./data/nae
bun run test:nae
```

The application imports these JSON files from a `server-only` module. Do not pass the complete dataset or search index to a Client Component or expose them as a public static asset.
