# Coordinator QA: Knife

Decision: add NASA Langley's standalone Knife v1.0 polyhedral Boolean-subtraction library. The individual review is recorded in `nasa-luna-006-03.jsonl`.

- Government provenance and identity: NASA's [LAR-17481-1 software record](https://software.nasa.gov/software/LAR-17481-1) identifies Knife v1.0, its near-field sonic-boom prediction purpose, and links the exact repository. NASA's [Langley Center page](https://technology.nasa.gov/center/larc) identifies LaRC.
- Public source and license scope: the [repository](https://github.com/nasa/knife) provides the C source and [build/install guidance](https://github.com/nasa/knife/blob/master/INSTALL). The separate [COPYING file](https://raw.githubusercontent.com/nasa/knife/master/COPYING) says only “See LICENSE file”; the root [LICENSE](https://github.com/nasa/knife/blob/master/LICENSE) is Apache-2.0. The earliest checked explicit license commit is [2017-07-17](https://github.com/nasa/knife/commit/cb4718fcc7982990273368647ea25540314e1294). This grant covers Knife repository-authored code only, not external dependencies or FUN3D.
- Year: 2017 is the conservative first verified grant-bearing source year.
- Notability and status: NASA releases Knife as version 1.0 and the repository has build/install guidance. The NASA catalog still distributes the exact source; status is Maintained as an official distribution, not active code development.

The catalog record is for Knife only, not the FUN3D solver or its dependencies.
