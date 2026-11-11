# NAE data and translation quality report

- CSV snapshot revision: 2026-10-01
- Imported at: 2026-11-05T17:41:03.015Z
- Source SHA-256: d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5
- Records: 2,136
- Duplicate activity codes: 0
- Fatal data-integrity issues: 0
- Invalid source-label cells preserved: 7 across 5 activity records

## Records by sector

| Sector code | Records |
|---:|---:|
| 1 | 452 |
| 2 | 81 |
| 3 | 185 |
| 4 | 278 |
| 5 | 365 |
| 6 | 754 |
| 7 | 21 |

## Source-field coverage

Counts include non-empty usable strings and exclude the literal #NOM?.

| Source field | Usable records |
|---|---:|
| code | 2,136 |
| label_fr | 2,133 |
| label_en | 2,134 |
| label_ar | 2,134 |
| status | 2,136 |
| sector_code | 2,136 |
| group_code | 2,136 |
| subgroup_code | 2,136 |
| tutelle_fr | 379 |
| type_autorisation_fr | 379 |
| contenue_fr | 2,136 |
| accessoires_fr | 905 |
| references_texte_fr | 379 |

## Source status values

| Raw value | Dataset meaning | Records |
|---|---|---:|
| normal | Free (حر) | 1,641 |
| green | Regulated (نشاط منظم) | 350 |
| red | Blocked (محظور) | 145 |

The mapping is attributed to UpGrowth's dataset documentation. A catalogue-level status is not, by itself, a complete determination of all sector-specific legal requirements.

## Valid activity labels

- Arabic: 2,134 / 2,136
- French: 2,133 / 2,136
- English: 2,134 / 2,136
- Valid Arabic and French labels on the same record: 2,131 / 2,136
- Seven #NOM? cells across five codes are retained unchanged; no labels were guessed.

## Active Arabic translation coverage

| Field | Source records | Active Arabic translations |
|---|---:|---:|
| Activity content | 2,136 | 709 |
| Accessories | 905 | 905 |
| Tutelle | 379 | 379 |
| Authorization type | 379 | 379 |
| Legal references | 379 | 379 |

Content translations are source-bound to the exact French description. Unreviewed legacy drafts are quarantined and are not imported at runtime.

- Quarantined legacy drafts: 105
- Quarantined drafts whose codes are absent from this catalogue: 32

## Current public-source reconciliation

- Public source: https://www.upgrowth.dz/outils/nomenclature
- Checked by LATTAB: 2026-11-11
- UpGrowth-reported last verification: 2026-11-10
- UpGrowth-reported CNRC portal date: 2026-11-07
- Records: 2,136 repository / 2,136 published page (delta 0)
- Sector counts and status counts: matched
- Confirmed blocked rows: 301205 and 501308

The earlier 2026-11-02 observation of 2,134 entries is historical and superseded by the 2,136-entry page checked on 2026-11-11; both previously discrepant codes are now explicitly listed as blocked.

Scope: public UpGrowth page totals, sector/status totals, and the two named code rows. This is not an independent live CNRC/Sidjilcom query.

## Interpretation safeguards

- The bundled CSV remains the dated 2026-10-01 source snapshot; reconciliation does not silently rewrite it.
- A status such as “free” is not a blanket legal guarantee and does not replace checking sector-specific rules.
- Empty source regulatory fields mean only that the CSV contains no value for that field.
- Group and subgroup names are not supplied by the CSV and must not be inferred from numeric codes.
- Arabic content that has not been reviewed remains unavailable as an Arabic translation; the original French source is not mislabeled as Arabic.

## Warnings

- 32 quarantined legacy drafts refer to codes outside the current catalogue; they are not loaded by runtime code.
