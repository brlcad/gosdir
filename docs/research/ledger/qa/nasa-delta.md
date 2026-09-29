# Coordinator QA: NASA DELTA

Decision: admit as the separately installable NASA Ames toolkit named ARC-18446-1. The Luna review is nasa-luna-005-01.jsonl; this note records the coordinator's independent source and release checks.

- Government provenance: NASA's [ARC-18446-1 software-catalog record](https://software.nasa.gov/software/ARC-18446-1) describes DELTA and its Download link resolves to the assigned repository. The [repository README](https://github.com/nasa/delta) identifies the NASA Ames Intelligent Robotics Group as developer and NASA as the copyright holder.
- Public source: the [repository](https://github.com/nasa/delta) publicly exposes the Python package, CLI, tests, documentation, and examples.
- Eligible license: the exact root grant is [Apache License 2.0](https://github.com/nasa/delta/blob/master/LICENSE); the README confirms Apache 2.0 and the U.S. Government/NASA copyright. The first license-bearing source commit is [7d38b52](https://github.com/nasa/delta/commit/7d38b52daf66a1afa89d7e7b1cabf641d7ac748b), dated 2020-04-22. External dependencies, imagery, and trained data are separately governed.
- Primary product evidence: NASA's catalog page is an exact product record and links to this code. The [README](https://github.com/nasa/delta/blob/master/README.md) documents Python/GDAL/TensorFlow installation, command-line and library use, training/classification examples, and further API documentation. The repository has versioned tags through v1.0.1 (2022-02-23; setup.py records version 1.0.1) and substantive code activity in 2026, satisfying the release/documentation and freshness gates.
- Year and agency: 2020 is the first defensible public licensed-source year, not the repository's 2019 initial commit. Attribute the product to NASA Ames Research Center's Intelligent Robotics Group; collaborations with USGS, NGA, and academic partners do not change its sponsor.

The NASA catalog described an initial Crisis Mapping Toolkit integration, but DELTA has its own product designation, installable package, CLI/library interface, versioned release, and user docs. The catalog record is scoped to DELTA, not the umbrella Crisis Mapping Toolkit.
