# Coordinator QA: PyLOT

Decision: admit PyLOT as a distinct NASA GHRC operator tool, not as part of the Cumulus platform. The individual review is recorded in `nasa-luna-005-06.jsonl`.

- Government provenance and identity: NASA GHRC's [User Working Group overview](https://ghrc.nsstc.nasa.gov/home/sites/default/files/02_GHRC_UWG_Overview_0.pdf) describes PyLOT as a released operator-improvement tool; the exact [repository README](https://github.com/nasa/GHRC-PyLOT) describes the Python Cloud Operations Tool for DAAC operators.
- Public source and license scope: the public repo provides CLI/library source, user setup and how-to guides, and release notes. Its exact [root LICENSE](https://github.com/nasa/GHRC-PyLOT/blob/main/LICENSE) is Apache-2.0; the initial [grant-bearing commit](https://github.com/nasa/GHRC-PyLOT/commit/ab23512b31e746f19ef8472e3bc5b6b393792eb5) is dated 2022-06-07. Cumulus APIs, AWS services, and other dependencies have separate terms.
- Year: 2022 is the first public grant-bearing source commit.
- Notability and current release: NASA released [v3.1.1](https://github.com/nasa/GHRC-PyLOT/releases/tag/v3.1.1) on 2026-04-23 with release notes, and the README documents prerequisites, install, environment setup, and operator workflows.

The record covers PyLOT's operator CLI/library only; it does not claim the underlying Cumulus stack or AWS services.
