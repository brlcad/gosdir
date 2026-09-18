# Catalog source

This directory is the canonical, reviewable source for GOSDIR records. Each record type has one obvious home:

- `agencies.ts` — government and public-body records referenced by software
- `software/` — one `<id>.ts` file per government-sponsored software record, plus the ordered `index.ts`
- `policies.ts` — policy, law, standard, strategy, and publication records
- `timeline.ts` — selected milestones linked to catalog records
- `glossary.ts` — public-facing terminology
- `sources.ts` — official source references used by the methodology view
- `types.ts` — shared schemas only

Application code imports the record type it needs directly from its canonical file. Do not create a second catalog barrel or expansion file.

## Contribution rules

1. Add software as `software/<id>.ts`, default-export the object with `satisfies Project`, and make the filename exactly match its `id`.
2. Import each software record in `software/index.ts` and place it once in the ordered `projects` array.
3. Add other record types directly to their canonical arrays; do not create expansion, supplement, or batch arrays.
4. Give every agency, software, and policy record a stable, unique `id`.
5. Reference each software sponsor by its canonical `agencyIds`; keep `sponsor` as human-readable attribution.
6. Include the primary public evidence. For record types that define a `reviewed` or `verified` field, preserve that review date.
7. Update timeline or source-reference data only when the new record warrants it.
8. Run `npm run check`, `npm run build:apache`, and `npm run build` before committing.

Software uses one record per file because it is expected to grow substantially. If another catalog becomes too large for practical review, use the same pattern: a same-named directory with one record per file and an explicit `index.ts`. Keep grouping by record type; do not split records into historical growth batches.
