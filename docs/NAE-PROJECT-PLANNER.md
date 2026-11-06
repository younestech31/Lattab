# NAE Project Planner — implementation status

**Updated:** 6 November 2026  
**Repository:** `younestech31/Lattab`  
**Working branch:** `feat/nae-project-planner-v1`

## Product direction

The NAE experience is being developed as a pre-registration activity planning and review workspace, not merely a list of numeric codes and not a chatbot.

The intended user flow is:

1. Describe the actual operations planned for the business in Arabic or French.
2. Search activity labels, activity content, and accessory operations using deterministic local matching.
3. Review why each result appeared.
4. Add relevant activities to an unbounded local project list and designate one primary activity.
5. Review high-level classification, regulatory-status indicators, sector combinations, and known complementary-operation rules.
6. Print a preparation sheet that records the selected activities and the limitations of the automated review.

The current activity detail routes remain available. The internal group/subgroup taxonomy is retained for scoring and analysis; the user interface should not require people to know these codes.

## Implemented in the current work branch

- A multi-term project-search module that can match different terms against different fields rather than requiring the entire project description to appear in one field.
- Search evidence is returned with every match so the interface can state whether the result matched a label, content, or accessory description.
- A preliminary rules engine that detects source-reported regulated/prohibited states, multi-sector selections, the conditional sectors 5/6 exception, taxonomy proximity, export intent, and missing regulatory metadata.
- Versioned legal-rule data for Decree 15-249 articles 2, 9 and 11; Decree 20-355 articles 4 and 4 bis; and Law 26-12 article 4 bis.
- A source-observations ledger that keeps reported catalogue withdrawals and changes separate from the imported historical CSV.
- Client-side local project draft storage (version 1), with no account, external database, or transmission to the notary office.
- A project workspace with selection management, primary activity selection, preliminary findings, and print support.
- The explorer search is being reframed around project descriptions. The numeric group/subgroup facets and labels are removed from the user-facing flow; those keys remain internal.

## Source snapshot and status

The bundled CSV has 2,136 records and SHA-256:

`d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5`

The dataset publisher states a 1 October 2026 snapshot date and a CC BY 4.0 license. The raw status mapping documented by the publisher is:

- `normal` → free
- `green` → regulated
- `red` → prohibited

LATTAB must label this as a source-reported status tied to the dated snapshot, not as an independently issued current CNRC decision. Status does not determine authorization timing.

UpGrowth's 2 November monitoring page reports a 29 October catalogue update, withdrawals of `301205` and `501308`, two tutelle changes, and changes to 26 activity descriptions/accessories. These observations are recorded in `data/nae/source-observations.json`; the old values are not silently overwritten because the complete replacement records have not yet been captured and officially confirmed.

## Legal guardrails

- Decree 15-249 article 2 defines homogeneous taxonomy and specifies complementary operations including transport/delivery, installation, spare parts, advice, and training.
- Article 9 sets a general rule against combining multiple activity sectors on one RC extract. Its exception for some activities in sectors 5 and 6 is conditional; the engine must not infer approval just from those sector numbers.
- Article 11 allows export within the operator's commercial activities subject to applicable regulation; do not automatically add sector 7 merely because export is mentioned.
- Decree 20-355 article 4 generally separates registration from permission to begin effective exercise; article 4 bis preserves cases where a legislative provision expressly requires authorization before registration.
- Law 26-12 article 4 bis introduces a one-month period to initiate RC-extract modification procedures after specified changes. This is a post-registration reminder, not a pre-registration activity-compatibility rule.

Every finding must remain traceable to a source and must not be phrased as an administrative approval. A blank regulatory field is not proof that no permit or legal condition exists. Same group/subgroup is classification proximity, not legal permission to combine.

## Data freshness policy

- Keep the imported source rows immutable for every snapshot.
- Record publisher, source URL, stated revision date, acquisition date (when known), file hash, license, and field coverage in the manifest.
- Store detected changes as a separate observation/diff layer.
- Do not mark an activity officially withdrawn based only on secondary monitoring; show it as a reported observation pending official confirmation.
- Never delete historical activity routes solely because an activity is no longer listed in a newer catalogue.
- Replace changed fields only after capturing the new source record and retaining the previous snapshot.

## Next engineering steps

1. Complete the project-search and project-workspace UI integration in Arabic and French.
2. Add visible per-record status provenance and a link to the official Sidjilcom record.
3. Verify the withdrawal and changed-field reports against official CNRC records, and import a complete fresh snapshot when obtainable.
4. Add tests for Arabic/French query segmentation, evidence ranking, status interpretation, all sector combination cases, and local-draft migration.
5. Run `bun run test:nae`, `bun run lint`, and `bun run build`; inspect the Vercel preview before merging.
6. Review the legal rules and activity-specific permissions before presenting any activity-specific license timing.

## Safety of conclusions

The tool provides a structured pre-examination only. It does not determine personal eligibility, legal form, local licensing requirements, actual activity authorization, or CNRC acceptance. It must end with a recommendation to confirm the selected codes and conditions with CNRC and the competent authority.
