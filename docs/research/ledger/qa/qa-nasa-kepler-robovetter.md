# Coordinator QA: Kepler DR25 Robovetter

Decision: add the narrowly scoped DR25 classifier, not a general Kepler pipeline. The individual review is recorded in `nasa-luna-006-03.jsonl`.

- Government provenance and identity: NASA's exact [ARC-17981-1 software record](https://software.nasa.gov/software/ARC-17981-1) describes the Robovetter's role classifying Kepler events and acknowledges SETI authorship under NASA Cooperative Agreement NNX13AD01A. The current [NASA Kepler Exoplanet Archive overview](https://exoplanetarchive.ipac.caltech.edu/docs/Kepler_Data_Products_Overview.html) points users to this exact DR25 source.
- Public source and license scope: the [repository](https://github.com/nasa/kepler-robovetter) contains the C++ implementation, sample inputs/outputs, and compile/run instructions. Its project-specific [NOSA agreement](https://github.com/nasa/kepler-robovetter/blob/master/NASA_Open_Source_Documents/Kepler%20Robovetter%20NASA%20Open%20Source%20Agreement.pdf) is NASA Open Source Agreement v1.3 (OSI-approved). The first functional source plus agreement is the [2017-06-13 commit](https://github.com/nasa/kepler-robovetter/commit/008ef0a9a1a7932b528962055786ad615cbeded6). Packaged science inputs and results remain separately scoped.
- Year: 2017 is the first verified public grant-bearing source year.
- Notability and status: NASA's archive documentation continues to point to the exact implementation for the completed DR25 data release; the repository provides practical compile/run guidance. Status is Maintained as an officially distributed/reference implementation, not active development.

The record covers the Kepler DR25 Robovetter only, not the Kepler Science Data Processing Pipeline or packaged mission data.
