# NAE import quality report

- Source file: cnrc-2026.csv
- SHA-256: d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5
- Dataset revision published by UpGrowth: 2026-10-01
- Official Sidjilcom page displayed a last-update date of 2026-10-20 when reviewed
- Publisher: UpGrowth (derived from the CNRC/Sidjilcom nomenclature)
- Reuse licence: CC BY 4.0
- Attribution: UpGrowth (2026), Nomenclature CNRC 2026, CC BY 4.0
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

## Status values and documented mapping

The upstream dataset documentation describes these CNRC catalogue statuses as follows:

| Raw CSV value | Meaning | Count |
|---|---|---:|
| normal | Free (حر) | 1,641 |
| green | Regulated (نشاط منظم) | 350 |
| red | Blocked (محظور) | 145 |

This mapping is attributed to the UpGrowth dataset documentation. A catalogue status does not, by itself, prove that no other sector-specific permit or legal requirement applies.

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
- The status mapping is documented by the publisher of this dataset; preserve the original raw values and display the attribution.
- A status such as “free” is not a blanket legal guarantee and does not replace checking sector-specific rules.
- The dataset snapshot (2026-10-01) predates the official Sidjilcom page update date (2026-10-20) observed during this review; treat it as a dated snapshot, not a live registry.
- Group and subgroup names are not present in the CSV and are not generated from numeric codes.
- The source revision and acquisition dates are unknown; no official revision date is asserted.

## Reconciliation with UpGrowth online table (snapshot 2026-11-02)

A comparison between the bundled CSV dataset (2,136 records, snapshot 2026-10-01) and UpGrowth's online table view (2,134 records, snapshot 2026-11-02) was conducted to verify sector and status discrepancies:

- **Sector 3**: 185 records in repository vs 184 in online table (delta: -1).
- **Sector 5**: 365 records in repository vs 364 in online table (delta: -1).
- **Blocked status (`red`)**: 145 records in repository vs 143 in online table (delta: -2).
- **Free (`normal`) & Regulated (`green`)**: Identical counts (1,641 free, 350 regulated).
- **Total records**: 2,136 vs 2,134 (net difference of 2 records).

### Discrepant codes identified

1. **`301205`** — Sector 3 (Wholesale / تجارة بالجملة):
   - Label FR: *Commerce de gros de la charcuterie*
   - Label AR: *تجارة بالجملة للخنازيريات*
   - Raw Status: `red` (محظور / Bloquée / Blocked)
   - Contenue FR: *Commerce de gros de la charcuterie.*
   - Explanation: Regulated statutory prohibition on pork/charcuterie products under Algerian commercial law. Omitted from UpGrowth's online table view, but present in the full CNRC nomenclature.

2. **`501308`** — Sector 5 (Retail / تجارة بالتجزئة):
   - Label FR: *Commerce de détail de la charcuterie*
   - Label AR: *تجارة بالتجزئة للحوم الخنازير*
   - Raw Status: `red` (محظور / Bloquée / Blocked)
   - Contenue FR: *Vente au détail de la charcuterie, plats préparés, conserves de porc. (activité supprimée par la réglementation interdisant l'élevage et la commercialisation du porc).*
   - Explanation: Expressly marked as deleted/prohibited by regulation in its source text. Omitted from UpGrowth's online table view, but maintained in the full CNRC nomenclature.

### Action & Policy

Per LATTAB institutional data retention guidelines:
- Neither code is removed or fabricated. The full 2,136 records are retained in the repository.
- No records were deleted merely to match an arbitrary online display filter.
- Both codes remain appropriately flagged as `red` (محظور / Bloquée).
- Provenance and CC BY 4.0 attribution to UpGrowth are preserved.
