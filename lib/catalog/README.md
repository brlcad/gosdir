# Catalog source

This directory is the canonical, reviewable source for GOSDIR records. Each record type has one obvious home:

- `agencies.ts` — government and public-body records referenced by software
- `software/` — one `<id>.ts` file per government-sponsored software record, plus the ordered `index.ts`
- `policies.ts` — policy, law, standard, strategy, and publication records
- `timeline.ts` — selected milestones linked to catalog records and optional primary-source URLs
- `glossary.ts` — public-facing terminology
- `sources.ts` — official source references used by the methodology view
- `types.ts` — shared schemas only
- `project-freshness.json` — generated repository-activity and link-check observations; do not hand-edit
- `freshness.ts` — typed access to the generated observation snapshot
- `project-availability.json` — generated directory-availability state for every software record; do not hand-edit
- `availability.ts` — typed access, labels, and selectors for availability state
- `administration.json` — reviewed portal holds and deletion tombstones; independent of automated availability
- `administration.ts` — typed access to portal moderation state

Application code imports the record type it needs directly from its canonical file. Do not create a second catalog barrel or expansion file.

Every timeline milestone needs a `category`. `us-policy` covers U.S. federal and state policy; `eu-policy` covers EU institutions and member-state policy; `other-policy` covers other jurisdictions and cross-jurisdiction policy references; `software` covers notable software milestones regardless of geography.

## Contribution rules

1. Add software as `software/<id>.ts`, default-export the object with `satisfies Project`, and make the filename exactly match its `id`.
2. Import each software record in `software/index.ts` and place it once in the ordered `projects` array.
3. Add other record types directly to their canonical arrays; do not create expansion, supplement, or batch arrays.
4. Give every agency, software, and policy record a stable, unique `id`.
5. Reference each software sponsor by its canonical `agencyIds`; keep `sponsor` as human-readable attribution.
6. Give every software record an `openSourceYear`: the four-digit year its source was first publicly released under an open source license or clear public-domain basis, supported by project history or release evidence.
7. Include the primary public evidence. For record types that define a `reviewed` or `verified` field, preserve that review date.
8. Run `npm run review:freshness` and `npm run review:availability` after adding a project or changing its repository, official page, or provenance URL. The availability review must cover the new ID and exactly the repository, official, and optional provenance URLs in the record.
9. Keep generated freshness and availability observations separate from editorial `status` and `verified` claims.
10. Update timeline or source-reference data only when the new record warrants it.
11. Run `npm run check`, `npm run build:apache`, and `npm run build` before committing.

Software uses one record per file because it is expected to grow substantially. If another catalog becomes too large for practical review, use the same pattern: a same-named directory with one record per file and an explicit `index.ts`. Keep grouping by record type; do not split records into historical growth batches.

## Freshness reviewer

`npm run review:freshness` collects five calendar years of default-branch commit counts and checks every software repository, official page, and provenance URL. It refuses to replace the reviewed snapshot when a new project loses activity coverage; the candidate snapshot remains at `lib/catalog/project-freshness.candidate.json` for inspection. Repository activity is an observation, not an inclusion rule: a quiet or archived but still public project can remain in the directory.

## Directory availability

The daily availability review processes every software record, including records
already disabled. `ok` and `redirected` links are reachable. A GET-confirmed
`not-found` result, an invalid or non-public destination, a missing DNS name, a
refused connection, or an invalid TLS certificate is definitive. An
authentication block, rate limit, transient DNS or server error, timeout,
reset, or redirect problem is inconclusive and preserves the last published
status.

A record is healthy when its repository and at least one public evidence link
(`official`, or `provenance` when present) are reachable. The first consecutive
definitive failure stores a reason and `failureStreak: 1` without hiding an
enabled record. The second disables it. A missing repository corroborated by
unavailable repository activity can disable immediately. A healthy result
resets the streak and reasons and re-enables an automatically disabled record.
The workflow stops for review rather than publishing more than five status
transitions at once unless an editor explicitly overrides that guard.

The generated `project-availability.json` must have exactly one entry for every
project ID and exactly the URL roles defined by that record.
`npm run check:catalog` enforces that coverage, the allowed statuses and reason
codes, dates, failure-streak invariants, and link schemas. Do not delete disabled
projects from `software/index.ts`: the checker must keep visiting them so a
recovery can re-enable them, and their direct record URLs remain explanatory.

### Editorial holds

Automation only measures anonymous reachability. It cannot determine whether a
page still proves government sponsorship, whether the current license remains
eligible, or whether a 200 response is still the intended evidence. When a
record no longer meets an inclusion criterion, add a reviewed hold to its
software record:

```ts
directory: {
  status: 'disabled',
  reason: 'The public license grant could not be verified.',
  reviewed: '2026-09-28',
},
```

Use a specific public-facing reason without private or security-sensitive
details. An editorial hold overrides healthy automated availability and is
never cleared by the daily job. Update the project's `verified` date only after
an editor has actually rechecked the substantive evidence.

### Annual criteria re-review

`npm run report:availability` loads the canonical software records and lists an
enabled record under **Editorial criteria review due** when its `verified` date
is more than 365 days older than the availability snapshot date. Records with
an editorial `directory` hold are excluded because they are already withheld
pending substantive review. Use
`npm run report:availability -- --fail-on-editorial-review` to make any overdue
enabled record fail the command after the complete report is printed. The
daily record-health workflow uses this blocking mode before it builds or
publishes a bot pull request.

For every overdue record:

1. Open `software/<id>.ts` and inspect the live canonical repository, official
   page, optional provenance evidence, and license text.
2. Re-establish all four inclusion criteria: government provenance, anonymous
   public source access, an OSI-approved license or clear public-domain basis,
   and primary evidence for those claims.
3. If all criteria still hold, set `verified` to the date that an editor
   actually completed the review. A successful HTTP check alone is not a
   substantive review and must not advance this date.
4. If a criterion cannot be established, leave `verified` unchanged and add or
   update `directory: { status: 'disabled', reason: '<specific public-facing reason>', reviewed: '<YYYY-MM-DD>' }`.
   Keep the record in `software/index.ts` and in the generated availability
   snapshot so its direct URL explains the hold and link checks can continue.
5. Run `npm run review:availability`, `npm run check`, `npm run build`, and
   `npm run build:apache`. Inspect the snapshot and generated-site diff, then
   commit the reviewed record and generated artifacts through the normal pull
   request.

When a workflow requests manual intervention, inspect every named URL and the
uploaded candidate, correct catalog URLs or add/update the editorial hold,
rerun `npm run review:availability` and the catalog checks, rebuild the Apache
output, and update the bot pull request. Do not accept a candidate merely to
make CI green.
