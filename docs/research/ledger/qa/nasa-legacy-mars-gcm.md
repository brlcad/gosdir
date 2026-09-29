# Coordinator QA: NASA Ames Legacy Mars Global Climate Model

Decision: admit the NASA Ames Legacy Mars Global Climate Model as archived/EOL research software. The individual review is `nasa-luna-006-04.jsonl`.

- Provenance and identity: NASA's [ARC-18547-1 record](https://software.nasa.gov/software/ARC-18547-1) identifies the model. The current NASA Ames [Mars Climate Modeling Center page](https://www.nasa.gov/space-science-and-astrobiology-at-ames/division-overview/planetary-systems-branch-overview-stt/mcmc/mgcm-code/) identifies the group and links users to the exact [Legacy GCM repository](https://github.com/nasa/legacy-mars-global-climate-model), model outputs, and documentation.
- License and year: the exact [project NOSA 1.3 agreement](https://github.com/nasa/legacy-mars-global-climate-model/blob/main/documentation/NASA%20Open%20Source%20Agreement%20Ames%20Mars%20Legacy%20Global%20Climate%20Model.pdf) was published with the full functional Fortran model in the [2021-09-10 commit](https://github.com/nasa/legacy-mars-global-climate-model/commit/1c8f891fa4d9fa6814b9c8fff2f26dc1e2a6f879). Compilers, externally hosted data, and independent analysis packages are outside this source license.
- Use and status: the repository includes installation, compilation, run, and output-check instructions and cites research using the model. Its README says the software is end-of-life/no further updates except critical fixes; the current NASA page's continued source/output listing supports discoverability, not active development.

The 2021 date is the first verified public licensed-source year for this released legacy model.
