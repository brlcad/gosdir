# Coordinator QA: NASA cFS File Manager (FM)

Decision: admit the independently named File Manager application, not the broader Core Flight System. The individual review is recorded in `nasa-luna-005-04.jsonl`.

- Government provenance and product identity: [NASA's 2015 Goddard release announcement](https://www.nasa.gov/news-release/nasa-goddard-releases-open-source-core-flight-software-system-application-suite-to-public/) names File Manager Application v2.0; [NASA's current GSC-18918-1 record](https://software.nasa.gov/software/GSC-18918-1) identifies the File Manager product and current v2.6.0 distribution. [The repository](https://github.com/nasa/FM) identifies FM as a cFS application.
- Public source and license scope: the [NASA repository](https://github.com/nasa/FM) provides the standalone application source and user-guide build instructions. Its [current LICENSE](https://github.com/nasa/FM/blob/dev/LICENSE) is Apache-2.0 for this FM repository. It does not license cFE, OSAL, PSP, or other cFS components; the cFS runtime remains separately licensed.
- Year: NASA's 2015 release announcement establishes public open-source availability of the FM application; the exact year and present grant scope do not imply that the current Apache text applied to all historical cFS components.
- Notability and continued support: the exact [NASA catalog record](https://software.nasa.gov/software/GSC-18918-1) distributes FM v2.6.0, and the current [cFS v7.0.0 release](https://github.com/nasa/cFS/releases) includes FM changes. The standalone repository documents how to build its application-specific user guide.

Keep this record scoped to the reusable FM onboard file-management application. Do not describe the full cFS framework or its runtime dependencies as part of this licensed product.
