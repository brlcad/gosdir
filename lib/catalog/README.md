# Catalog source

This directory is the canonical, reviewable source for GOSDIR records. Each record type has one obvious home:

- `agencies.ts` — government and public-body records referenced by software
- `software.ts` — government-sponsored software records
- `policies.ts` — policy, law, standard, strategy, and publication records
- `timeline.ts` — selected milestones linked to catalog records
- `glossary.ts` — public-facing terminology
- `sources.ts` — official source references used by the methodology view
- `types.ts` — shared schemas only

Application code imports the record type it needs directly from its canonical file. Do not create a second catalog barrel or expansion file.

## Contribution rules

1. Add a record directly to its canonical array; do not create expansion, supplement, or batch arrays.
2. Give every agency, software, and policy record a stable, unique `id`.
3. Reference each software sponsor by its canonical `agencyIds`; keep `sponsor` as human-readable attribution.
4. Include the primary public evidence. For record types that define a `reviewed` or `verified` field, preserve that review date.
5. Update timeline or source-reference data only when the new record warrants it.
6. Run `npm run check`, `npm run build:apache`, and `npm run build` before committing.

If a catalog becomes too large for practical review, replace that one file with a same-named directory containing one record per file and an explicit `index.ts`. Keep grouping by record type; do not split records into historical growth batches.
