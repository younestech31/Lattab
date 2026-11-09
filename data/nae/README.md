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

## Second-language gap overlay (`gap-translations.json`)

Index file plus maps under `data/nae/gap-translations/`. Holds **informational** second-language fills for fields that exist only in one language in the official snapshot. It does **not** rewrite `sector-*.json`.

| Layer | Status |
|---|---|
| `tutelle_fr` → Arabic | Complete (58 exact source strings) |
| `type_autorisation_fr` → Arabic | Complete (17 exact source strings) |
| `accessoires_fr` → Arabic | Partial (643/905 records; exact, normalized, and line-wrap-safe source phrase matching) |
| `references_texte_fr` missing French (code `607004`) | Filled as informational French; Arabic source cell preserved |
| `#NOM?` labels | Preserved; no invented replacements |
| `contenue_fr` → Arabic | 18 source-bound reviewed translations; the previous 105 code-keyed entries are quarantined because some were attached to unrelated source descriptions |

Policy: never re-translate an official cell that already has text; only add the missing language. UI consumers must treat overlay values as citizen-facing informational text and keep the French source as the catalogue reference.


## Translation quality safeguard (2026-11-09)

A source-to-translation audit found that the former 105-entry `contenue.json` contained mismatches between activity codes and French source descriptions, including 32 keys that do not exist in this 2,136-record catalogue. The file was moved to `gap-translations/contenue-unverified-drafts.json`; application code does not import it.

The active `contenue-reviewed.json` contains 18 Arabic descriptions paired with the exact French source text reviewed for each code. The resolver refuses code-only lookups and refuses a translation if its source description changes. This deliberately prefers a clear “translation unavailable” state over showing a plausible but incorrect administrative description.

Current measured coverage:
- Arabic activity-content translations: 41 / 2,136.
- Arabic accessory translations: 643 / 905 records.
- Arabic tutelle translations: 379 / 379 populated source records.
- Arabic authorization-type translations: 379 / 379 populated source records.
- Arabic legal-reference source text preserved: 1 / 379 populated source records.
- Valid source labels: 2,134 Arabic and 2,133 French; five language-label cells contain `#NOM?` and remain untouched.

Run `bun run nae:audit-translations` to recalculate coverage and validate every active content translation against its paired source string.
