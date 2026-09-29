# Coordinator QA: NASA cFS Limit Checker

Decision: admit the Core Flight System Limit Checker (LC) application as one NASA Goddard product. The individual review is `nasa-luna-006-04.jsonl`.

- Provenance and identity: NASA's [GSC-18921-1 TTP record](https://software.nasa.gov/software/GSC-18921-1) identifies the application; Goddard's [cFS catalog](https://etd.gsfc.nasa.gov/capabilities/core-flight-system/catalog) describes its telemetry-limit function. The canonical source is [nasa/LC](https://github.com/nasa/LC), not the entire cFS bundle.
- License and year: the current [LICENSE](https://github.com/nasa/LC/blob/dev/LICENSE) is Apache-2.0 for the LC repository. A cFS NOSA release document and functional LC source are present in the [2017-07-01 public-release commit](https://github.com/nasa/LC/commit/301b436c7cd219eae8be4cac1e3c3359e7c13096). cFE, OSAL, PSP, and mission-specific dependencies are separate products and licenses.
- Use and status: NASA's catalog documents LC as a reusable application, its app-specific guide explains configuration and operation, and source activity continued through September 2026.

This entry is scoped to LC only; it makes no product-wide license claim for cFS dependencies.
