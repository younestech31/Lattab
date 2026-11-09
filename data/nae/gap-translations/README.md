# NAE second-language gap translations

This overlay adds reviewed translations without rewriting the source snapshot under `data/nae/sector-*.json`.

## Runtime rules

- Official activity designations remain visible in Arabic and French together.
- All other displayed fields follow the selected interface language.
- French source text is never used as the primary value on an Arabic page when its Arabic translation is missing. It remains available separately in a collapsed source-text disclosure.
- Activity-content translations are keyed by code **and** paired with the exact French source text. The resolver returns Arabic only when both match.
- Unreviewed drafts are not imported by application code.

## Current coverage

| Field | Source records | Active Arabic translations |
|---|---:|---:|
| Activity content | 2,136 | 35 |
| Accessories | 905 | 659 |
| Tutelle | 379 | 379 |
| Authorization type | 379 | 379 |
| References | 379 | 1 |

The five invalid official-language label cells containing `#NOM?` remain unchanged.

## Content translation provenance

The former 105-entry code-keyed content dictionary contained code/source mismatches and was moved to `contenue-unverified-drafts.json`. The active map is `contenue-reviewed.json`, which stores both `source_fr` and `translation_ar` for each reviewed activity. A stale or mismatched French source causes the Arabic overlay to return `null`.

Run `bun run nae:audit-translations` to verify coverage and source binding.


## Accessory translation coverage update (2026-11-09)

The source-clause map now covers 659 of 905 populated accessory records (246 remain untranslated). Compound records are translated only when every source clause resolves; incomplete clauses are not silently omitted.


## Reviewed activity content additions (2026-11-09)

Added 17 further source-bound translations for pharmacy, optician, animal services, rural and rail transport, IT consultancy and network installation, fiduciary/accounting services, market studies, food/textile/chemical packaging, financial leasing, financial institutions, and exchange-office descriptions. Each item stores its exact French source alongside the Arabic informational translation.
