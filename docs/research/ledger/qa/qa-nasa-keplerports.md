# Coordinator QA: KeplerPORTs

Decision: add KeplerPORTs as the specific Kepler occurrence-rate plotting tool. The individual review is recorded in `nasa-luna-006-03.jsonl`.

- Government provenance and identity: NASA's [ARC-17979-1 product page](https://software.nasa.gov/software/ARC-17979-1) identifies KeplerPORTs, explains its use with occurrence-rate products, and links the exact source repository.
- Public source and license scope: the [repository](https://github.com/nasa/KeplerPORTs) includes Python source, dependency guidance, sample inputs, and a run command. Its project-specific [agreement PDF](https://github.com/nasa/KeplerPORTs/blob/master/KeplerPORTs%20NASA%20Open%20Source%20Agreement.pdf) states NASA Open Source Agreement v1.3 (OSI-approved). The first functional-source-plus-agreement snapshot is the [2017-06-13 commit](https://github.com/nasa/KeplerPORTs/commit/81d4c21e02595a477bfc0f9424cb0bac1bda5711). The license claim is scoped to the code, not sample data or external Python dependencies.
- Year: 2017 is the first verified public grant-bearing source year.
- Notability and status: a [NASA NTRS technical report](https://ntrs.nasa.gov/citations/20170009554) presents KeplerPORTs as a worked tool for Kepler DR25 detection-contour analysis. NASA's current catalog links the exact release; status is Maintained as an officially distributed/reference implementation, not active development.

This entry describes KeplerPORTs only; related Kepler plotting software and the broader pipeline are not included.
