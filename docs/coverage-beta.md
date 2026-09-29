# Federal coverage beta

`/coverage-beta/` is an unlinked, `noindex` prototype for testing a complete
federal hierarchy against GOSDIR's verified project coverage. The current
`/coverage/` page remains unchanged while this prototype is evaluated.

## Data scope

The committed snapshot at
`lib/catalog/federal-register-agencies.json` comes from the Federal Register's
bulk agencies endpoint:

`https://www.federalregister.gov/api/v1/agencies.json`

The 2026-09-28 snapshot contains 473 records. That is intentionally broader
than the 448 records reported by the public agency index: the API also returns
records with no indexed Federal Register documents. The Federal Register roster
contains current and historical publishers, including units that may no longer
exist or publish, so the beta labels it as a publisher roster rather than a
current-government census.

The explorer supplements that roster with U.S. federal entities already in the
GOSDIR catalog when they have no Federal Register record, such as laboratories,
centers, and project offices. Existing GOSDIR project-to-agency references remain
canonical for coverage.

## Branch overlay and opening view

`lib/catalog/federal-government-overview.json` is the reviewed presentation
overlay for the radial explorer. It records its review date and Government
Manual edition, assigns every top-level Federal Register publisher to a group,
and identifies the principal bodies shown on the opening map. `manualBodies`
fills known roster gaps such as the Senate, Supreme Court, and Federal Judicial
Center. `parentOverrides` records reviewed presentation relationships such as
Congress → House and Executive Office of the President → OMB. The raw Federal
Register parent values remain unchanged in their source snapshot and on each
explorer node; descendants otherwise inherit the placement of their top-level
ancestor.

The opening radial view intentionally stops at two levels:

1. Executive, Legislative, Judicial, and Other federal bodies.
2. Current principal departments, offices, agencies, and quasi-official bodies.

Focusing any node reveals only its next two levels. Search and the expandable
hierarchy continue to cover every record. Ambiguous, cross-branch, quasi-official,
and unresolved historical publishers belong under Other until a reviewed source
supports a more specific assignment; do not infer a branch from an agency name.

## Refreshing the snapshot

Run:

```sh
node scripts/sync-federal-register-agencies.mjs --reviewed=YYYY-MM-DD
```

Review the resulting diff before accepting additions, removals, renames, or
parent changes. The script verifies unique IDs and slugs and rejects missing
parent references, inconsistent relationships, and cycles. Records are sorted
by stable Federal Register ID, and the snapshot records both its schema version
and upstream payload hash for reproducible review. Do not treat an upstream
disappearance as proof that an organization was abolished.

Update `lib/catalog/federal-government-overview.json` in the same reviewed diff.
Every top-level Federal Register ID must have exactly one group assignment, and
every principal ID must also be assigned to that group. The explorer validates
these invariants so a newly introduced root cannot be silently classified as
Executive. When the Government Manual changes, update the recorded edition,
review date, source URLs, assignments, and principal-body list together.

## Publishing

Keep the route out of primary and footer navigation until the prototype is
approved. The Apache build must include `coverage-beta/index.html`, and the
route must retain its `X-Robots-Tag: noindex, nofollow` header while hidden.

When other work is present in the production checkout, publish only the beta
route so the existing route HTML and asset manifest remain untouched:

```sh
node scripts/build-apache.mjs --route=coverage-beta
```

Run the ordinary `npm run build:apache` only when the complete current source
tree is ready to replace every public route.
