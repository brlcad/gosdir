# Coordinator QA: @edsc/timeline

Decision: admit as a separate, versioned NASA UI component, explicitly grouped with—but not conflated with—the Earthdata Search application. The Luna review is in `nasa-luna-005-03.jsonl`.

- Government provenance: the exact [NASA repository](https://github.com/nasa/edsc-timeline) says this React plugin was developed as a component of NASA Earthdata Search; its exact root license carries NASA copyright.
- Public source: the repository exposes the timeline component, example/demo, tests, npm metadata, API props, and user guidance without credentials.
- Eligible license and year: the root [LICENSE](https://github.com/nasa/edsc-timeline/blob/main/LICENSE) applies Apache-2.0. [Commit 0cf8450](https://github.com/nasa/edsc-timeline/commit/0cf8450d1a7059332fe188debde2f67f321a726e), dated 2015-09-08, introduces the grant-bearing public source.
- Primary evidence/notability: the [npm distribution](https://www.npmjs.com/package/%40edsc/timeline) has a current version and installation guidance. The README describes installation, component API, examples, tests, and the component's Earthdata Search role. This meets the reusable agency-published product pathway.
- Agency/geography: NASA EOSDIS Earthdata Search Client at Goddard Space Flight Center, Greenbelt, Maryland.

Product boundary: list only the timeline component; do not describe it as a standalone NASA search service or merge its license scope with Earthdata Search.
