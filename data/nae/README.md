# NAE reference data

This directory contains the generated, sector-partitioned JSON dataset used by the LATTAB NAE project planner.

## Source and snapshot

- Source file supplied for this project: `cnrc-2026.csv`
- Source SHA-256: `d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5`
- Publisher of this reusable snapshot: UpGrowth
- Source lineage: CNRC / Sidjilcom NAE nomenclature, republished by UpGrowth
- Snapshot revision date stated by publisher: 2026-10-01
- Acquisition timestamp of the original CSV: not established
- License stated by publisher: CC BY 4.0
- Attribution and license information must remain visible in any reuse of the dataset.
- The original CSV is intentionally not committed; it remains excluded by `.gitignore`.

## Data semantics and limits

- The dataset contains 2,136 records in 13 columns. Its public dataset page lists a smaller eight-column schema; provenance of the additional fields must remain documented rather than assumed.
- The publisher maps raw `status` values as `normal=free`, `green=regulated`, and `red=prohibited`. LATTAB displays this only as a source-reported status tied to the 2026-10-01 snapshot. It is not an independently issued CNRC status dictionary.
- A source-reported regulated status does not determine whether authorization is required before registration or before actual exercise. Check Decree 20-355 and activity-specific legislation.
- Codes `301205` and `501308` have withdrawal reports from a 2026-11-02 UpGrowth monitoring page. The reports are not yet independently confirmed against an official CNRC record; see `source-observations.json`.
- The export revision and acquisition dates are not interchangeable.
- Group and subgroup codes are retained for internal analysis; this CSV does not supply their names.
- The seven `#NOM?` label cells are preserved in the dataset and excluded from search label indexing; no replacements were guessed.
- An empty regulatory field does not establish the absence of a permit, authority, or legal requirement.

## Regenerate

```bash
bun run nae:import -- --input ./data-source/cnrc-2026.csv --output ./data/nae
bun run test:nae
```

The application imports these JSON files from a `server-only` module. Do not pass the complete activity list or search index to a Client Component or expose it as a public static asset.
