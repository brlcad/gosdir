# Coordinator QA: NASA Earthdata Search

Decision: admit as the separately cataloged NASA EOSDIS web application. The Luna review is in `nasa-luna-005-03.jsonl`; this note records independent product, license, year, and scope checks.

- Government provenance: NASA's [GSC-17399-1 record](https://software.nasa.gov/software/GSC-17399-1) names Earthdata Search as an open-source NASA web application and links the operational service. The exact [NASA repository](https://github.com/nasa/earthdata-search) says NASA EOSDIS developed the app.
- Public source: the [repository](https://github.com/nasa/earthdata-search) exposes the application, serverless backend, tests, and build/deploy instructions publicly.
- Eligible license: the exact root [LICENSE](https://github.com/nasa/earthdata-search/blob/main/LICENSE) grants Apache-2.0 to the application source. Its services and third-party dependencies remain separately scoped.
- Year and geography: the first license-bearing source history entry is [commit 4816bb9](https://github.com/nasa/earthdata-search/commit/4816bb9c48813f6a65e3f69822ecaf19ca687481), dated 2015-08-11. Attribute this to NASA EOSDIS/GSFC in Greenbelt, Maryland; the NASA product catalog reference is GSC-17399-1.
- Primary evidence/notability: the NASA product record links the live operational search service, and the repo documents local installation, configuration, operation, testing, build, and deployment. This is an operational NASA product, not a generic code sample.

Product boundary: Earthdata Search is the public-facing discovery and access application. It interfaces with, but is not, CMR, GIBS, OPeNDAP, or the independently reviewed `@edsc` component packages.
