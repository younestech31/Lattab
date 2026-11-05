# NAE import quality report

- Source file: cnrc-2026.csv
- SHA-256: d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5
- Encoding: UTF-8 (BOM accepted)
- Delimiter: semicolon
- Imported records: 2136
- Fatal validation issues: 0
- Warnings: 7

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

## Field coverage

| Source field | Non-empty records |
|---|---:|
| code | 2136 |
| label_fr | 2136 |
| label_en | 2136 |
| label_ar | 2136 |
| status | 2136 |
| sector_code | 2136 |
| group_code | 2136 |
| subgroup_code | 2136 |
| tutelle_fr | 379 |
| type_autorisation_fr | 379 |
| contenue_fr | 2136 |
| accessoires_fr | 905 |
| references_texte_fr | 379 |

## Raw status values (not interpreted)

- green: 350
- normal: 1641
- red: 145

## Source-label warnings

- 308006 — label_fr: #NOM? (kept as source value; not guessed)
- 308006 — label_en: #NOM? (kept as source value; not guessed)
- 310012 — label_fr: #NOM? (kept as source value; not guessed)
- 310012 — label_en: #NOM? (kept as source value; not guessed)
- 431103 — label_fr: #NOM? (kept as source value; not guessed)
- 443102 — label_ar: #NOM? (kept as source value; not guessed)
- 607042 — label_ar: #NOM? (kept as source value; not guessed)

## Interpretation safeguards

- Empty regulatory fields mean only that this CSV export contains no value for that field.
- The raw status values have no verified semantic dictionary and must not be presented as legal states.
- Group and subgroup names are not present in the CSV and are not generated from numeric codes.
- The source revision and acquisition dates are unknown; no official revision date is asserted.
