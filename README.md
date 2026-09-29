# GOSDIR

**Government Open Source Directory** — a source-backed directory of software sponsored by governments and the policies that make public code possible.

[Visit gosdir.com](https://gosdir.com) · [Browse the directory](https://gosdir.com/directory/) · [Read the methodology](https://gosdir.com/methodology/)

## What is here

GOSDIR connects public repositories to the evidence behind them:

- government-sponsored projects with an OSI-approved license or clear public-domain status;
- federal, state, and international policy records linked to primary sources;
- coverage views for finding represented agencies and research gaps;
- a selected policy timeline, plain-language glossary, and release guide; and
- an auditable GitHub-based submission and editorial review queue.

“Verified” means the directory review found documented government creation, commissioning, funding, sponsorship, or stewardship; public source; an eligible license; and primary evidence.

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```sh
npm install
npm run dev
```

Run the same source checks used by CI before committing:

```sh
npm run check
npm run build
```

The development app uses Vinext. The production site served by Apache is generated as a static single-page application:

```sh
npm run build:apache
```

That command updates the tracked root `index.html`, route entrypoints, and hashed assets under `site-assets/`. See [`docs/deployment.md`](docs/deployment.md) for the server layout and deployment notes.

## Project structure

```text
app/                 framework route entrypoints
components/          shared interface and feature components
lib/catalog/agencies.ts  canonical government bodies and hierarchy
lib/catalog/software/    one file per software record plus explicit index
lib/catalog/policies.ts  canonical policy and publication records
lib/catalog/timeline.ts  selected catalog-linked milestones
lib/catalog/glossary.ts  plain-language definitions
lib/catalog/sources.ts   official source references
lib/catalog/types.ts     shared record schemas
lib/catalog/project-availability.json  generated link-availability state
lib/catalog/availability.ts            typed availability selectors
static-src/          Apache/static application shell
scripts/             local build tooling
docs/                product, deployment, and research documentation
```

Both route surfaces share components and import the canonical files under `lib/catalog/` directly. Catalogs are organized by record type, not by import-time expansion batches. Software records live one per file under `lib/catalog/software/` and have an explicit order in `index.ts`. Agency records are first-class entries: every software record's `agencyIds` values must exactly match `id` values in `agencies.ts`, and an agency's optional `parentAgencyId` must exactly match another agency `id`. Timeline `projectId` and `policyId` values likewise match their canonical record IDs; new milestones can link a primary source through `sourceUrl`. If another catalog eventually becomes unwieldy, use the same one-record-per-file structure. Changes to public content should be made in source and followed by `npm run build:apache`; generated route files should not be edited by hand.

See [`lib/catalog/README.md`](lib/catalog/README.md) for record locations and contribution rules.

## Add or review a record

Use [the submission form](https://gosdir.com/contribute/) to propose a project, policy, or timeline change as a structured GitHub issue. It collects public evidence only and does not publish directly to the directory. Editors can use [the review queue](https://gosdir.com/review/) to inspect open submissions, work through the evidence checklist, and prepare a record for a normal code review and commit.

For a manual data contribution:

1. Open a GitHub issue with the project name, sponsor, repository, primary source, jurisdiction, and SPDX license expression.
2. Verify the sponsor and license against primary sources.
3. Add or update the government body in `lib/catalog/agencies.ts`, reusing an existing stable `id` when one already represents it. Set `parentAgencyId` only to an exact existing agency `id`.
4. Add accepted software as `lib/catalog/software/<id>.ts`, including the evidenced `openSourceYear`, then import it into `lib/catalog/software/index.ts`. Add other record types to their canonical `lib/catalog/` file. Every software `agencyIds` value must exactly match an agency `id`; timeline references must exactly match a software or policy `id`.
5. Run `npm run check`, `npm run build:apache`, and `npm run build`.
6. Commit the source and generated Apache artifacts together.

Never put private, classified, export-controlled, personally identifying, security-sensitive, or otherwise restricted material into an issue or this repository.

## Daily availability review

The scheduled GitHub Actions review checks every project each day, including
records that are currently disabled. It checks the canonical repository,
official page, and optional provenance link from an anonymous public-network
request. A successful response or validated public redirect is reachable. A
GET-confirmed 404/410, an invalid or non-public destination, a missing DNS
name, a refused connection, or an invalid TLS certificate is a definitive
failure. Authentication blocks, rate limits, transient DNS or server errors,
timeouts, resets, and redirect loops are inconclusive and do not change a
record's directory status.

One definitive assessment records a warning without hiding an enabled record.
Two consecutive definitive assessments disable it; a corroborated missing
repository can be disabled immediately. A later healthy assessment clears the
automated reason and re-enables the record. The generated state lives in
`lib/catalog/project-availability.json`. Editors can separately set a
`directory` hold in the project record when the license, government
provenance, or other inclusion evidence no longer meets the methodology. Link
automation never clears that editorial hold and never changes the record's
`verified` date.

The availability report also identifies enabled records whose substantive
editorial review is more than 365 days old. The daily workflow runs
`npm run report:availability -- --fail-on-editorial-review`, so an overdue
criteria review stops unattended publication. For each named record, recheck its
live repository, government provenance, license or public-domain basis, and
primary evidence. If every criterion still holds, update `verified` to the date
that review actually finished. Otherwise add a reviewed `directory` hold with
a specific public-facing reason. Then rerun the availability review, repository
checks, application build, and Apache build and commit the reviewed source,
snapshot, and generated output together.

The `record-health.yml` workflow opens or updates a bot pull request from
`automation/record-health` with the snapshot and rebuilt Apache assets, then
requests a squash auto-merge after required checks. Ambiguous results, a broad
change set, or a semantic evidence concern remain for manual review. The
Actions summary identifies affected records and the commands an editor must
run. If that pull request remains open overnight, the next run carries its
prior-day failure streak forward without counting same-day reruns twice.
Merging updates the repository but does not by itself deploy the separate
Apache host; see
[`docs/deployment.md`](docs/deployment.md).

## Research and editorial policy

Primary sources are preferred: legislation, regulations, official policy publications, official program pages, canonical repositories, and their license files. Secondary sources are used only to discover candidates or clarify context. Records with unresolved sponsorship, repository identity, or licensing are held rather than inferred.

The curated expansion notes under [`docs/research/`](docs/research/) record the source trail and notable exclusions. Policies change; linked controlling sources always take precedence over GOSDIR summaries.

## License

The GOSDIR code, original interface, documentation, and original editorial text are available under the [Apache License 2.0](LICENSE).

Directory entries link to third-party government publications and software. Those external works are **not** relicensed by this repository; their respective licenses, public-domain notices, and source-site terms continue to apply. Government names and marks are used only to identify sources and do not imply endorsement.

## Status

GOSDIR is an independent research project. Coverage grows as editors verify public sources and add new records.
