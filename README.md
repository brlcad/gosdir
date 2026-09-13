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

“Verified” means the directory review found documented government creation, commissioning, funding, sponsorship, or stewardship; public source; an eligible license; and primary evidence. Government use alone does not qualify. Verification is not a security certification, maintenance promise, procurement recommendation, or legal opinion.

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
lib/data.ts          curated project, policy, timeline, and glossary data
static-src/          Apache/static application shell
scripts/             local build tooling
docs/                product, deployment, and research documentation
```

Both route surfaces share components and the same data source. Changes to public content should be made in source and followed by `npm run build:apache`; generated route files should not be edited by hand.

## Add or review a record

Use [the submission form](https://gosdir.com/contribute/) to prepare a structured GitHub issue. It collects public evidence only and does not publish directly to the directory. Editors can use [the review queue](https://gosdir.com/review/) to inspect open submissions, work through the evidence checklist, and prepare a record for a normal code review and commit.

For a manual data contribution:

1. Open a GitHub issue with the project name, sponsor, repository, primary source, jurisdiction, and SPDX license expression.
2. Verify the sponsor and license against primary sources.
3. Add the accepted record to `lib/data.ts` and update relevant coverage/timeline content.
4. Run `npm run build:apache` and `npm run build`.
5. Commit the source and generated Apache artifacts together.

Never put private, classified, export-controlled, personally identifying, security-sensitive, or otherwise restricted material into an issue or this repository.

## Research and editorial policy

Primary sources are preferred: legislation, regulations, official policy publications, official program pages, canonical repositories, and their license files. Secondary sources are used only to discover candidates or clarify context. Records with unresolved sponsorship, repository identity, or licensing are held rather than inferred.

The curated expansion notes under [`docs/research/`](docs/research/) record the source trail and notable exclusions. Policies change; linked controlling sources always take precedence over GOSDIR summaries.

## License

The GOSDIR code, original interface, documentation, and original editorial text are available under the [Apache License 2.0](LICENSE).

Directory entries link to third-party government publications and software. Those external works are **not** relicensed by this repository; their respective licenses, public-domain notices, and source-site terms continue to apply. Government names and marks are used only to identify sources and do not imply endorsement.

## Status

GOSDIR is an independent research project, not an official government website. Coverage is intentionally transparent but not yet exhaustive: an uncovered place or agency means “no verified record here yet,” not “no open source work exists.”
