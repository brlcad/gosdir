# Coordinator QA: GHRC Cloud Browse

Decision: admit the standalone user-facing NASA GHRC Cloud Browse application. The individual review is recorded in `nasa-luna-005-06.jsonl`.

- Government provenance and identity: NASA's current [GHRC Data Access and Tools page](https://www.earthdata.nasa.gov/centers/ghrc-daac/data-access-tools) identifies GHRC as a NASA DAAC and lists the Cloud Browse Dashboard; the page and NASA code catalog link the exact [application repository](https://github.com/nasa/GHRC-Cloud-Browse).
- Public source and license scope: the repository provides the React app, setup, use, and deployment instructions. Its exact [root LICENSE](https://github.com/nasa/GHRC-Cloud-Browse/blob/main/LICENSE) is Apache-2.0. The first explicit grant-bearing commit is [54ce430](https://github.com/nasa/GHRC-Cloud-Browse/commit/54ce4308f7e716c337c4b415638f6af3ca0fd8c2), dated 2024-09-20. The application license does not extend to NASA browse imagery, dataset documents, or external services.
- Year: 2024 is the first checked public source snapshot with an explicit Apache grant, not the date the service first operated.
- Notability and status: the exact [live NASA GHRC Cloud Browse application](https://ghrc.earthdata.nasa.gov/browseui/) reports v2.37.0 and is linked from the README; NASA's current official tool page lists it. Source activity is quiet after 2024, so catalog status is Maintained based on current exact-product deployment/listing, not Active development.

The catalog record represents Cloud Browse only, not the underlying imagery or GHRC archive.
