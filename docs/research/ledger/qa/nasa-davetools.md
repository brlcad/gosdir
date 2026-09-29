# Coordinator QA: NASA DAVEtools

Decision: admit as a separate, narrow NASA Langley product. The Luna review is nasa-luna-005-01.jsonl; this note records the coordinator's independent source check.

- Government provenance: NASA's [LAR-17460-1 software-catalog record](https://software.nasa.gov/software/LAR-17460-1) names the DAVEtools technology and its Download link resolves to the nasa/DAVEtools repository. The repository's [NOSA text](https://github.com/nasa/DAVEtools/blob/master/LICENSE.html) itself names NASA, software designation LAR-17460-1, and NASA contact Bruce Jackson. The [NASA Langley page](https://www.nasa.gov/langley/) confirms the center identity.
- Public source: the [GitHub source](https://github.com/nasa/DAVEtools) exposes the Java project and its build/test materials.
- Eligible license: the repository includes a project-specific [NASA Open Source Agreement version 1.3](https://github.com/nasa/DAVEtools/blob/master/LICENSE.html), matching the OSI's [NASA-1.3 entry](https://opensource.org/license/NASA-1.3). This grant applies to DAVEtools, not bundled third-party JARs.
- Year: commit [b4c30dd](https://github.com/nasa/DAVEtools/commit/b4c30dd1bd124e1b14a14618315069d36721ac21), dated 2011-08-03, introduced the public DAVEtools source and NOSA file together. This is the first defensible public licensed-source year; it is not inferred from project history.
- Primary product evidence: NASA's current catalog page links the exact code. The [README](https://github.com/nasa/DAVEtools/blob/master/README.adoc) identifies version 0.9.7, explains model validation and conversion workflows, and supplies worked examples. Because code activity is quiet, the current NASA product listing is the product-specific distribution signal; status is Maintained, not Active.

The catalog entry is limited to DAVEtools and identifies Langley as the sponsor, rather than treating all uses of DAVE-ML or the third-party libraries as NASA-authored.
