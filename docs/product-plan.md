# Public Code Index — product plan

## Product promise

Public Code Index helps public servants, maintainers, researchers, procurement teams, journalists, and residents find government-sponsored open source software and the policy infrastructure that makes it possible. It is a discovery and evidence product: every published record must link to a public repository, identify a government sponsor, and carry an OSI-approved license or an explicit public-domain dedication.

## Core audiences and jobs

1. **Public-sector leaders** — find precedents, policies, and peer agencies before proposing an open source program.
2. **Delivery teams** — discover reusable software, assess stewardship, and reach the owning team.
3. **Researchers and journalists** — compare coverage across jurisdictions and follow primary sources.
4. **Maintainers and civic technologists** — submit a missing project and understand the verification bar.
5. **Residents** — see where public money is producing reusable public infrastructure.

## Information architecture

- **Home** — clear value proposition, universal search, live directory preview, coverage snapshot, featured policy, and calls to explore or submit.
- **Directory** — searchable/filterable project records with sponsor, jurisdiction, policy domain, license, repository, and verification state.
- **Coverage** — state tile map, global coordinate map, and U.S. federal department matrix. Selecting a geography or agency narrows matching records.
- **Policy library** — publications, policies, memoranda, executive actions, laws, regulations, standards, and implementation guidance with status and primary sources.
- **Timeline** — notable actions that connect policy milestones to funded products.
- **Glossary** — plain-language definitions for open source, public domain, copyleft, permissive licenses, OSPO, code inventory, SBOM, public code, and related terms.
- **Methodology** — inclusion criteria, verification workflow, data freshness, limitations, provenance, and correction policy.
- **Submit a record** — structured evidence form with license, sponsor, repository, and official-source requirements.
- **Contact** — routes for corrections, partnerships, press, and general questions.

## Record model

### Project

- Stable ID and canonical name
- Summary and service domain
- Government sponsor, agency, jurisdiction level, and geography
- Canonical repository and official program page
- SPDX license identifier or `Public-Domain`
- Stewardship indicators: status, last-reviewed date, contribution path, security policy
- Verification evidence and reviewer state
- Search facets and related policy IDs

### Policy or publication

- Stable ID, title, issuing body, jurisdiction, instrument type
- Issued/effective/last-updated dates and current-status label
- Plain-language summary and key requirements
- Primary-source URL and related project IDs
- Verification and last-reviewed dates

## Trust and inclusion rules

1. The sponsor must be a government body or a government-established delivery organization.
2. Source code must be publicly accessible.
3. The repository must declare an OSI-approved license, or the work must carry a clear public-domain dedication.
4. An official government page, verified government organization, procurement record, or equivalent primary source must establish sponsorship.
5. A submission never publishes directly. New records enter a review queue and require independent source and license checks.
6. Every visible record carries a freshness date. Stale, archived, or disputed records are labeled—not silently removed.
7. Coverage means “records verified in this directory,” never “no open source exists.” Empty areas are explicit research gaps.

## Secure submission workflow

1. Rate-limit and bot-check submissions at the edge.
2. Validate URLs, normalize repository identifiers, and reject private/local network targets to prevent SSRF.
3. Fetch repository metadata through allow-listed forge APIs in an isolated ingestion worker.
4. Resolve SPDX expressions and cross-check them against the OSI license API; public-domain claims require a visible dedication.
5. Require government sponsorship evidence from an official domain or a verified government forge organization.
6. Store the submission and immutable evidence snapshot in a review queue; strip active markup and attachments.
7. Require two-person editorial approval for ambiguous ownership, custom licenses, or security-sensitive projects.
8. Publish signed revisions with an audit log and provide a correction channel.

## Automated ingestion

- Scheduled connectors ingest `code.json`, `publiccode.yml`, GitHub/GitLab organization metadata, code.gov, code.ca.gov, code.gouv.fr, openCode, and compatible catalog feeds.
- A normalization pipeline deduplicates repositories, maps agencies/jurisdictions, detects licenses, and computes freshness.
- Changed records return to review when ownership, license, visibility, or archived status changes.
- Human moderation remains the publication gate. Automation proposes records; it does not certify them.
- A public export (JSON/CSV) and changelog make the directory itself reusable.

## Visual system

- **Voice:** civic, optimistic, specific, and nonpartisan.
- **Palette:** near-black navy, warm paper, vivid civic blue, and electric chartreuse used sparingly for verified/open states.
- **Typography:** compact grotesk display type with a legible sans body and mono metadata.
- **Surfaces:** crisp borders, squared cards with restrained radii, visible data density, no ornamental photography.
- **Motion:** short state changes and small reveal transitions; all respect reduced-motion preferences.
- **Accessibility:** WCAG 2.2 AA contrast, keyboard-complete controls, non-color status labels, reduced motion, and semantic landmarks.

## Delivery phases

1. **Launch:** curated reference dataset, project/policy search, coverage views, timeline, glossary, methodology, and moderated submission prototype.
2. **Evidence pipeline:** durable submission queue, forge/API ingestion, license validation, moderation console, and scheduled freshness checks.
3. **Network effects:** public API/export, agency dashboards, correction subscriptions, reusable policy templates, and multilingual records.

## Success measures

- Verified projects and policies, broken down by jurisdiction and freshness
- Percentage of records with official source, machine-readable license, security policy, and contribution guide
- Time from submission to verification
- Reuse/citation events reported by public agencies
- Coverage gaps closed per quarter

