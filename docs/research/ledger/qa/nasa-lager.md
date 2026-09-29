# Coordinator QA: NASA LAGER

Decision: admit LAGER as one NASA Johnson Space Center software product. The individual review is `nasa-luna-006-04.jsonl`.

- Provenance and identity: NASA's current [MSC-26455-1 record](https://software.nasa.gov/software/MSC-26455-1) describes the LAGER real-time logging system and its Download Now route links the exact [public repository](https://github.com/nasa/lager). The README provides setup/build instructions and a producer/consumer example.
- License and year: the repo's [LICENSE](https://github.com/nasa/lager/blob/master/LICENSE) applies NASA Open Source Agreement 1.3 to LAGER-authored files; it identifies reused intarweb files as MIT and preserves separate terms for other vendored/build components. The first verified functional code with the project grant is the [2018-01-24 commit](https://github.com/nasa/lager/commit/d0ba01807e6c11b566e94ebd3dfc571dcf70f180).
- Status: classify as Maintained only under the baseline's current exact-product distribution exception: NASA's current TTP page links this repository. This does not imply ongoing code development; the repository's last code commit is from 2019.

The record covers the LAGER source and not separately licensed reused or vendored components.
