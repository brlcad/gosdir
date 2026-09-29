# Coordinator QA: NASA Langley Kodiak

Decision: admit one NASA Langley Kodiak nonlinear arithmetic library record. The individual review is `nasa-luna-006-04.jsonl`.

- Provenance and identity: NASA's [LAR-18268-1 record](https://software.nasa.gov/software/LAR-18268-1) describes the Kodiak nonlinear arithmetic library and links the [exact repository](https://github.com/nasa/Kodiak). This is the Langley formal-methods library, not the unrelated Goddard 3-D lidar also named Kodiak.
- License and year: the core uses the project-specific [LAR-18517 NOSA 1.3 grant](https://github.com/nasa/Kodiak/tree/master/LICENSES), first present with the library in 2020 ([grant-bearing commit](https://github.com/nasa/Kodiak/commit/eb280290fb92dd135b25d24b83e0acf9189374e2)). The integrated Boolean Checker is a component in the same product/repository, with its own [LAR-19222 NOSA 1.3 grant](https://github.com/nasa/Kodiak/tree/master/LICENSES) first verified with its module source in 2017. Third-party dependencies are separate.
- Use and status: NASA's exact-product TTP page supports release/use, while the repository gives build and test guidance and current source activity. Record the Kodiak library once; do not make a separate Boolean Checker record.

The 2020 year is the first verified licensed-source year for the core library; the component's older grant does not move that core product year earlier.
