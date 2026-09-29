# Coordinator QA: @edsc/echoforms

Decision: admit as a separate, versioned NASA UI component, explicitly grouped with—but not conflated with—the Earthdata Search application. The Luna review is in `nasa-luna-005-03.jsonl`.

- Government provenance: the exact [NASA repository](https://github.com/nasa/edsc-echoforms) says the React component was developed as a component of NASA Earthdata Search; its exact root license carries NASA copyright.
- Public source: the repository exposes source, example/testbed, tests, npm metadata, and usage instructions without credentials.
- Eligible license and year: the root [LICENSE](https://github.com/nasa/edsc-echoforms/blob/main/LICENSE) applies Apache-2.0. The first grant-bearing source-history entry is [commit f79ebde](https://github.com/nasa/edsc-echoforms/commit/f79ebde48a43131ec5caa14cd71be9a5dcedf72d), dated 2015-08-14.
- Primary evidence/notability: the [npm distribution](https://www.npmjs.com/package/%40edsc/echoforms) has a current version and install documentation; the README specifies installation, component props, example use, and testing. This meets the reusable agency-published product pathway, rather than treating a component's stars or mere presence in an org as evidence.
- Agency/geography: NASA EOSDIS Earthdata Search Client at Goddard Space Flight Center, Greenbelt, Maryland.

Product boundary: list only the ECHO Forms React library; do not represent it as an independent search service or transfer its Apache grant to Earthdata Search's other material components.
