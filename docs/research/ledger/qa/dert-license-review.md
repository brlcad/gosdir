# Coordinator QA: DERT license hold

Decision: keep DERT on hold; do not add it to the software catalog yet. The Luna review is nasa-luna-005-01.jsonl and was corrected after inspection of the actual license artifact.

- Government provenance, public source, and product evidence are supported: NASA's [ARC-17647-1 catalog page](https://software.nasa.gov/software/ARC-17647-1) links the repository and identifies DERT as an open-source 3D terrain viewer. The [README](https://github.com/nasa/DERT/blob/master/README.md) attributes development and funding to NASA Ames and Mars Reconnaissance Orbiter, documents Java 1.8 runtime needs, and links versioned binary releases.
- The exact license identity is unresolved. The README calls the grant the NASA Open Source Agreement, but the actual linked [LICENSE/DERT_NOSA.pdf](https://github.com/nasa/DERT/blob/master/LICENSE/DERT_NOSA.pdf) identifies its document as **NASA Public License Version 1**. The [OSI license list](https://opensource.org/licenses) identifies the different, version-specific NASA Open Source Agreement v1.3 (NASA-1.3); the project cannot infer that the PDF's terms are identical merely from the README's abbreviation or NASA's software-catalog label.
- The license files entered the public source in 2015 in commit [a26dc9e](https://github.com/nasa/DERT/commit/a26dc9ebb54445a40c9aec090b1cb1a0b14df891). That supports an open-source year candidate of 2015 only if the attached license is later shown eligible.

Reopen only after comparing the full PDF terms against an accepted license or finding another exact, eligible grant covering the NASA-authored DERT code. Until then the eligible-license check remains unresolved, so the four-check publication gate is not met.
