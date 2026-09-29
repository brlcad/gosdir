# Coordinator QA: GUNNS

Decision: admit NASA Johnson's reusable C++ nodal network solver and model library. The individual review is recorded in `nasa-luna-005-07.jsonl`.

- Government provenance and product identity: NASA's exact [MSC-26727-1 catalog record](https://software.nasa.gov/software/MSC-26727-1) identifies GUNNS v19.x; the current [JSC Simulation & Modeling page](https://www.nasa.gov/reference/jsc-simulation-modeling/) lists it among JSC tools.
- Public source and license scope: the [public repository](https://github.com/nasa/gunns) provides C++ source, tests, examples, and user/developer tutorials. Its exact [LICENSE](https://github.com/nasa/gunns/blob/master/LICENSE) identifies NASA Open Source Agreement v1.3, an OSI-approved grant. The initial [grant-bearing source commit](https://github.com/nasa/gunns/commit/039bc0f692b388bf9d23d92de2bedb9d9c919142) is dated 2021. GUNNS does not include the complete Trick simulation environment or the separate internal sim bus.
- Year: 2021 is the first checked public source release with the exact NASA-1.3 grant.
- Notability and status: NASA's current exact catalog/JSC pages list the v19.x product; repository v19.5 supplies versioned release notes and setup, dependencies, and model-building guidance. Given quiet source after the 2024 release, status is Maintained based on current product-specific NASA listing, not Active development.

The catalog record is for GUNNS and its v19 source designation only; it does not claim NASA's entire simulation environment or externally licensed dependencies.
