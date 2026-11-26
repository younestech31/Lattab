# NAE second-language gap translations

This overlay adds reviewed translations without rewriting the source snapshot under data/nae/sector-*.json.

## Runtime rules

- Official activity designations remain visible in Arabic and French together.
- All other displayed fields follow the selected interface language.
- French source text is never used as the primary value on an Arabic page when its Arabic translation is missing. It remains available separately in a collapsed source-text disclosure.
- Activity-content translations are keyed by code and paired with the exact French source text. The resolver returns Arabic only when both match.
- Unreviewed drafts are not imported by application code.

## Current measured coverage

| Field | Source records | Active Arabic translations |
|---|---:|---:|
| Activity content | 2,136 | 709 |
| Accessories | 905 | 905 |
| Tutelle | 379 | 379 |
| Authorization type | 379 | 379 |
| Legal references | 379 | 379 |

All populated French accessory, supervisory-authority, authorization-type, and legal-reference values have an active Arabic resolution in the current snapshot. Activity-content translation remains partial: 709 of 2,136 descriptions have reviewed Arabic translations.

## Source labels

The five activity records containing invalid source-label cells have seven #NOM? cells in total: two Arabic, three French, and two English. These source placeholders remain unchanged and are treated as unavailable, not as text to display or translate.

## Content translation provenance

The former 105-entry code-keyed content dictionary contained code/source mismatches and was moved to contenue-unverified-drafts.json. The active map is contenue-reviewed.json, which stores both source_fr and translation_ar for each reviewed activity. A stale or mismatched French source causes the Arabic overlay to return null.

Run bun run nae:audit-translations to verify source binding, translation coverage, manifest field coverage, dataset integrity, and the latest recorded upstream comparison. The command also regenerates data/nae/quality-report.md.
