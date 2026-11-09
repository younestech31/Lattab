# NAE second-language gap translations

This overlay adds reviewed translations without rewriting the source snapshot under `data/nae/sector-*.json`.

## Runtime rules

- Official activity designations remain visible in Arabic and French together.
- All other displayed fields follow the selected interface language.
- French source text is never used as the primary value on an Arabic page when its Arabic translation is missing. It remains available separately in a collapsed source-text disclosure.
- Activity-content translations are keyed by code **and** paired with the exact French source text. The resolver returns Arabic only when both match.
- Accessory translations are matched to reviewed French source phrases. Line-wrapped fragments are reassembled only when the joined wording matches a dictionary entry; ambiguous or incomplete matches are rejected.
- Unreviewed drafts are not imported by application code.

## Current coverage

| Field | Source records | Active Arabic translations |
|---|---:|---:|
| Activity content | 2,136 | 41 |
| Accessories | 905 | 643 |
| Tutelle | 379 | 379 |
| Authorization type | 379 | 379 |
| References | 379 | 1 |

The five invalid official-language label cells containing `#NOM?` remain unchanged.

## Content translation provenance

The former 105-entry code-keyed content dictionary contained code/source mismatches and was moved to `contenue-unverified-drafts.json`. The active map is `contenue-reviewed.json`, which stores both `source_fr` and `translation_ar` for each reviewed activity. A stale or mismatched French source causes the Arabic overlay to return `null`.

Run `bun run nae:audit-translations` to verify coverage and source binding.
