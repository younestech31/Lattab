# NAE reference data

This directory contains the generated, sector-partitioned JSON snapshot used by the LATTAB NAE project-preparation workspace.

- Dataset publisher: UpGrowth.
- Source dataset page: https://www.upgrowth.dz/ar/datasets/cnrc-2026
- Publisher-reported snapshot revision: 2026-10-01.
- Official source portal: https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات
- Source SHA-256: d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5
- Source licence: CC BY 4.0. Attribution: UpGrowth (2026), Nomenclature CNRC 2026 : 2 136 codes d'activité économique en Algérie.
- Imported records: 2,136, partitioned into seven sector JSON files plus manifest.json.
- The original CSV is intentionally not committed; it remains excluded by .gitignore.
- The publisher-reported snapshot date is not the date on which LATTAB acquired the file; source_acquired_at remains unknown. This is a dated snapshot, not a live connection to CNRC.
- Group and subgroup codes are present, but their names are not supplied by this CSV. Do not infer or invent their labels.
- Seven invalid label cells containing #NOM? are preserved across five activity records and excluded from valid-label coverage; no replacement labels were guessed.

## Source status field

The raw status values are preserved verbatim. The UpGrowth dataset page documents the following display mapping:

| Raw value | Dataset status |
|---|---|
| normal | Free |
| green | Regulated |
| red | Blocked |

This mapping is attributed to UpGrowth's dataset documentation under CC BY 4.0. It is not represented as an independent CNRC legal opinion. The status is a catalogue-level signal: it does not, by itself, determine every sector-specific condition or whether an authorization must be obtained before registration or before exercising the activity.

## Current upstream reconciliation — checked 2026-11-11

The public UpGrowth nomenclature page at https://www.upgrowth.dz/outils/nomenclature was checked on 2026-11-11. The page reports a last verification on 2026-11-10 and a CNRC portal date of 2026-11-07.

| Measure | Repository snapshot | Current UpGrowth page | Difference |
|---|---:|---:|---:|
| Total records | 2,136 | 2,136 | 0 |
| Sector 1 | 452 | 452 | 0 |
| Sector 2 | 81 | 81 | 0 |
| Sector 3 | 185 | 185 | 0 |
| Sector 4 | 278 | 278 | 0 |
| Sector 5 | 365 | 365 | 0 |
| Sector 6 | 754 | 754 | 0 |
| Sector 7 | 21 | 21 | 0 |
| Free (normal) | 1,641 | 1,641 | 0 |
| Regulated (green) | 350 | 350 | 0 |
| Blocked (red) | 145 | 145 | 0 |

The current public page explicitly lists both 301205 (Commerce de gros de la charcuterie) and 501308 (Commerce de détail de la charcuterie) with status Bloquée. Both are retained in the repository as red.

The earlier comparison dated 2026-11-02 recorded 2,134 entries and did not show those two rows. That observation is now historical and superseded by the page checked on 2026-11-11. The source snapshot itself has not been altered to force the match.

Verification scope: this reconciliation compares the public UpGrowth page's total, sector totals, status totals, and the two named rows. It is not an independent live query or download from CNRC/Sidjilcom. The reported portal date is attributed to UpGrowth.

## Valid source-field coverage

manifest.json field_coverage counts usable non-empty strings and excludes the literal #NOM?:

| Field | Usable records |
|---|---:|
| Activity code | 2,136 |
| French label | 2,133 |
| English label | 2,134 |
| Arabic label | 2,134 |
| Status | 2,136 |
| Sector, group, subgroup codes | 2,136 each |
| Supervisory authority (French) | 379 |
| Authorization type (French) | 379 |
| Activity content (French) | 2,136 |
| Accessories (French) | 905 |
| Text references (French) | 379 |

## Second-language gap overlay

The overlay under gap-translations/ adds reviewed translations without rewriting the source snapshot:

| Field | Source records | Active Arabic translations |
|---|---:|---:|
| Activity content | 2,136 | 709 |
| Accessories | 905 | 905 |
| Tutelle | 379 | 379 |
| Authorization type | 379 | 379 |
| Legal references | 379 | 379 |

Activity-content translations are tied to the exact French source description. Unreviewed legacy drafts are quarantined in contenue-unverified-drafts.json and are not imported by application code. A changed or mismatched source string makes the resolver return no Arabic translation.

## Regeneration and audits

    bun run nae:import -- --input ./data-source/cnrc-2026.csv --output ./data/nae
    bun run nae:audit-translations
    bun run test:nae

- nae:import writes the sector JSON files, manifest.json, and import-report.md. It counts #NOM? as unusable and preserves the source reconciliation only when the CSV SHA-256 is unchanged. A changed source hash clears the reconciliation until it is reviewed again.
- nae:audit-translations recalculates integrity and translation coverage, validates the current reconciliation, and regenerates quality-report.md.
- test:nae verifies the dataset, localization resolver, and related NAE behavior.

The application imports these JSON files from a server-only module. Do not pass the complete dataset or search index to a Client Component or expose it as a public static asset.
