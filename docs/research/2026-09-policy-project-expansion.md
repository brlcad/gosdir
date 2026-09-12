# Government open source policy and project expansion

Research review date: 12 September 2026

## Executive summary

This review adds 38 high-value policy and reference records—13 U.S. federal, six U.S. state, and 19 international or multilateral—and 14 government-origin or government-sponsored software records. The resulting launch catalog contains 46 policy/reference records and 32 software projects.

The strongest recent U.S. federal signals are the 2024 SHARE IT Act, the 2026 DoD accelerated mission software instruction, and agency implementation rules from GSA and CMS. The important qualification is that SHARE IT allows covered code in either public repositories or federal-accessible private repositories; it is a reuse and inventory statute, not a universal public-release mandate.[^1][^2][^3][^4]

State practice is uneven but materially useful. Maryland offers one of the clearest operational release checklists; California, New Hampshire, Oklahoma, Utah, New York, and a WSDOT engineering policy demonstrate distinct approaches spanning release, acquisition, licensing controls, use, and domain-specific publication.[^16][^17][^18][^19][^20][^21]

Internationally, several sources go beyond encouragement. Switzerland, Italy, Spain, Uruguay, Germany, and Brazil place reuse or publication duties in law or legally grounded implementation regimes, but every duty has scope and exceptions that must survive summarization. Canada, New Zealand, the Netherlands, Australia, UNESCO, and UN instruments are valuable policy models without all having the same binding force.[^22][^23][^24][^25][^26][^30][^31][^32][^33][^34][^35][^36][^37][^38]

The project review deliberately distinguishes current steward from government origin. Code.mil’s FAQ is a strong discovery and provenance source, but its list includes software “created by or used in” military missions. It cannot, by itself, prove that every listed project is currently government-sponsored, and repository license files remain controlling for exact license terms.[^15]

## Research method and inclusion test

This was an official-source-first review. Secondary indexes could help discovery, but records were accepted only when the final evidence chain included:

1. an official law, regulation, directive, policy, standards page, agency publication, or canonical government/community repository;
2. a direct and material connection to government open source use, contribution, release, acquisition, reuse, security, or stewardship;
3. a current-status assessment or an explicit `Reference` label where current legal or operational force could not be confirmed; and
4. for software, public source plus an OSI-approved license or a sufficiently clear public-domain basis.[^61]

Summaries describe operative relevance but are not legal advice. “Current” means that the cited controlling page or consolidated text appeared operative on the review date; it does not eliminate the need to check amendments, local applicability, contracts, export rules, security restrictions, or delegated approval authority.

## U.S. federal policy additions

| Record | Why it is high value | Treatment in GOSDIR |
|---|---|---|
| DoWI 8430.01, Accelerated Mission Software (2026) | Connects reuse, open source, software inventories, provenance, secure delivery, shared repositories, and public release in one department-wide instruction.[^1] | Current; DoD/DoW terminology follows the official publication. |
| SHARE IT Act, Public Law 118-187 (2024) | Gives federal custom-code repository, metadata, reuse-rights, and agency-policy requirements a statutory basis.[^2] | Current; explicitly states that a qualifying repository may be public or federal-accessible private. |
| GSA OSS Policy CIO 2107.1A (2026) | Provides a current agency-level open-first operating model and documented exception path.[^3] | Current; recheck by its scheduled review date. |
| CMS Open Source Business Rules (2026) | Converts policy into practical inbound/outbound rules for packages, scans, documentation, governance, code.json, and publication.[^4] | Current implementation standard. |
| NASA NPR 2210.1E (2023) | One of the clearest end-to-end federal release procedures, including rights, export, security, invention, and release-authority review.[^5] | Current procedural directive; also anchors the release guide. |
| DOE Order 241.1C (2024) | Requires metadata and reporting for releasable scientific software, including repository, license, limitations, and releasing official.[^6] | Current departmental order. |
| OMB M-25-21 (2025) | Extends sharing and, where practicable, open maintenance expectations to custom AI code, models, and weights, subject to exceptions.[^7] | Current; summarized narrowly as AI policy. |
| CISA OSS Security Roadmap (2023) | Defines federal ecosystem work on dependency visibility, systemic risk, vulnerability reduction, and OSPO guidance.[^8] | Current through its FY2026 horizon; priority recheck after 30 September 2026. |
| NIST SP 800-218, SSDF v1.1 (2022) | Supplies technology-neutral secure-development practices relevant to both consuming and releasing OSS.[^9] | Current final version; not itself a public-release mandate. |
| DoDI 5230.09 (2019) | Establishes public-release and prepublication review controls for DoD information.[^10] | Current companion control, essential to the “may we release?” decision. |
| DoDI 5230.24 (2023) | Defines distribution statements for technical information, including software and documentation.[^11] | Current companion control. |
| 17 U.S.C. § 105 | States the core domestic copyright rule for U.S. Government works.[^12] | Current statute; summary flags contractor, mixed-work, patent, foreign-rights, and other complications. |
| OMB M-04-16 (2004) | Records the federal technology-neutral acquisition principle for evaluating OSS and proprietary software on merit.[^13] | Reference because of age, but still useful historical acquisition context. |

Two existing records received important qualifications. M-16-21’s three-year pilot period elapsed even though its broader code-reuse and open-publication direction continues to be relied upon; the catalog no longer implies that the pilot itself remains open-ended.[^14] The 2022 DoD memorandum remains the clearest pre-2026 open-by-default statement for non-national-security software and is retained alongside the newer instruction.[^15]

## U.S. state policy additions

| Jurisdiction | Instrument | What the source actually does |
|---|---|---|
| Maryland | Maryland Open Source Policy | Encourages public repositories and gives operational checks for ownership, privacy, credentials, dependencies, vulnerabilities, documentation, and license choice. The official page exposes no reliable adoption date, so the catalog displays `Undated` rather than inventing one.[^16] |
| New Hampshire | RSA 21-R:11 | Requires executive agencies to compare open source and proprietary options on total cost and value and to document the analysis; the consolidated statute includes later amendments.[^17] |
| Oklahoma | 62 O.S. § 34.31.1 | Requires software requests to consider OSS and proprietary options across total-cost categories and includes an open-standards preference. The provision originated in 2012 and was later amended/renumbered.[^18] |
| Utah | R895-3 | Controls ownership, contracting, sale/licensing authority, and dependency compatibility for state-owned software. It does not itself create a general open-source mandate.[^19] |
| New York | ITS-P19-005 | Governs state use of OSS through CTO/designee and legal review, public-source availability, approved-software controls, and pre-screened licenses. It addresses consumption rather than release of state-owned code.[^20] |
| Washington | WSDOT Bridge Design Manual M 23-50.24 §1.3.10.A | Commits one engineering office to open-source licensing and preference. The 2025 date identifies the current manual edition, not necessarily the first adoption of the provision.[^21] |

State records should not be generalized across jurisdictions. Copyright ownership, public-records law, procurement authority, records schedules, privacy law, and who may grant a license can differ sharply among states and local governments.

## International and multilateral additions

| Jurisdiction | Instrument | Scope and qualification |
|---|---|---|
| Switzerland | EMOTA Article 9 | Prospective publication duty for covered federal authorities and covered newly developed or materially extended software, with rights, security, research, funding, and organizational-scope qualifications; not a retroactive order to publish all legacy software.[^22] |
| Italy | Guidelines on acquisition and reuse of software for public administrations | Implements Digital Administration Code Articles 68–69 through acquisition review, commissioned-code ownership, publication, licensing, catalogs, maintenance, and reuse procedures, with defined mission exceptions.[^23] |
| Spain | Royal Decree 4/2010, Articles 16–17 | Defines reuse/open-license concepts and government application directories. It does not require source publication for every directory entry; source details attach to finished products already declared open source.[^24] |
| Germany | E-Government Act §16a | Establishes an OSS preference for newly acquired federal software; the catalog uses “should give priority,” not an unconditional universal command.[^25] |
| Uruguay | Law 19.179 and Decree 44/015 | Creates a free-software/open-format preference and supplies catalog checks, migration planning, and AGESIC procedures for exceptions.[^26][^27] |
| India | OSS Adoption Policy and source-opening policy | The adoption policy says covered central bodies shall endeavour to prefer OSS and allows states to opt in; the companion policy establishes a framework for opening government application source with security and strategic exclusions.[^28][^29] |
| European Commission | Decision 2021/C 495 I/01 | Creates a procedure for software the Commission chooses to release. It creates no third-party right to demand release and no continuing duty to update or support released code.[^30] |
| Canada | Government of Canada Enterprise Architecture Framework | Gives architecture review boards criteria favoring reuse, OSS, upstream contribution, registration, and open reusable components; it is described as review criteria, not a blanket statutory command.[^31] |
| New Zealand | NZGOAL Software Extension | Voluntary guidance strongly encouraging a five-stage release analysis: rights, exceptions, license selection, license application, and release.[^32] |
| Netherlands | “Open, unless” policy | A nonbinding policy principle favoring release unless a reasoned exception applies, supported by the current digital-government policy page.[^33] |
| United Nations | Global Digital Compact | A nonbinding political commitment through 2030 that includes safe, secure OSS, open standards, and interoperability.[^34] |
| UNESCO | Recommendation on Open Science | A nonbinding recommendation in the research/open-science context that includes openly licensed software and source code.[^35] |
| Australia | Digital and ICT Reuse Policy | Requires covered non-corporate Commonwealth entities to reuse, build for reuse, and share unless a reason is substantiated; an announced 2026 revision now needs active monitoring.[^36] |
| Brazil | Law 14.063, Article 16 | Places open-code licensing requirements on qualifying systems developed exclusively by public bodies, with secrecy, data, component, and contract exceptions and a public-entity-oriented reuse frame.[^37] |
| United Nations | Open Source Principles | Eight voluntary operating principles adopted through the UN Chief Executives Board Digital Technology Network.[^38] |
| United Nations | Open Source United Common Policy Framework RC1 | A broad, evolving maturity model for procurement, release, governance, OSPOs, licensing, security, catalogs, sustainability, archiving, and measurement.[^39] |
| South Africa | Government FOSS policy | Important FOSS-first cabinet policy retained as `Reference` because present force was not affirmatively reconfirmed from the historical instrument alone.[^40] |

## Software additions

| Project | Government relationship and present stewardship | License treatment |
|---|---|---|
| BRL-CAD | U.S. Army/ARL origin and long-running government-sponsored constructive-solid-geometry system; openly developed since 2004.[^41] | COPYING describes LGPL-2.1 for the collective work with component-specific BSD, documentation, public-domain, and third-party terms; the catalog avoids an unsupported `-or-later` claim.[^42] |
| Ghidra | NSA-developed reverse-engineering framework publicly released in 2019 and actively maintained.[^43] | Apache-2.0 primary, with separately licensed support programs, qualifying federal public-domain portions, and third-party terms. |
| ATAK-CIV | Current TAK Product Center/Army DEVCOM C5ISR stewardship with AFRL origin; only the civilian source release is represented.[^44][^45] | GPL-3.0 plus public-domain treatment only for qualifying federal portions. |
| HIRS | NSA cybersecurity proof-of-concept/reference implementation for provisioning and platform-integrity attestation.[^46] | Apache-2.0/public-domain notices; catalog status is `Reference`, reflecting the repository’s production-readiness warning. |
| paccor | NSA tooling for platform attribute certificates and supply-chain attestation.[^47] | Apache-2.0; the earlier unsupported public-domain suffix was removed. |
| Hootenanny | NGA-funded map conflation and schema translation system.[^48] | GPL-3.0. |
| MAGE | NGA mobile field-data and situational-awareness platform; linked at the umbrella repository rather than only one server component.[^49] | Apache-2.0. |
| SarPy | NGA-origin Python SAR/geospatial library.[^50] | MIT; summary flags the announced SarPy 2.0/SARKit consolidation and legacy-reader deprecations. |
| NGA GeoPackage | NGA SDK family for standards-based geospatial storage.[^51] | MIT; explicitly marked maintenance mode. |
| Apache Accumulo | Began at NSA, then transferred to independent Apache Software Foundation governance.[^52] | Apache-2.0; sponsor display distinguishes current ASF stewardship from NSA origin. |
| Apache NiFi | Originated at NSA as NiagaraFiles, then moved to ASF governance.[^53] | Apache-2.0; current steward and government origin are separated. |
| GRASS GIS | Originated at U.S. Army CERL and is now an OSGeo project with NumFOCUS fiscal sponsorship.[^54] | GPL-2.0-or-later. |
| ParaView | Developed through Kitware, DOE national laboratories, and Army Research Laboratory collaboration.[^55] | BSD-3-Clause. |
| SELinux userspace | Userspace tools/libraries for the NSA-origin architecture, now under community stewardship.[^56] | Mixed, component-specific terms; the record directs users to per-directory license files instead of inventing a composite SPDX expression. |

## Held or excluded candidates

| Candidate | Decision and reason |
|---|---|
| OpenUxAS / OpenAMASE | Excluded. The custom USAF agreement includes use-registration conditions and was not established as OSI-approved; public source alone is insufficient. |
| OSSIM / OMAR | Held. Code.mil supports military use, but the reviewed primary evidence did not cleanly establish government sponsorship of the whole current project. |
| DDF / REDHAWK | Held. Current sponsorship, canonical repository, or present maintenance evidence was not strong enough for a verified record. |
| Apache OODT | Excluded from the active launch set because the Apache project is retired; it may later fit a clearly historical/reference collection. |
| VistA | Held. Government origin is clear, but current canonical source, stewardship boundaries, and license treatment are fragmented. |
| OpenSSL, BIND, GNAT | Held. Government-funded enhancements are historically important but did not establish direct sponsorship or stewardship of each whole project under the directory’s current rule. |
| Expect | Held pending current canonical repository, stewardship, and license verification. |
| Expired DHS source-code policy | Excluded from the current library; a superseded/historical collection should be built intentionally rather than mixing expired instruments into current guidance. |

## Release-guide synthesis

The site’s visual guide is a common operating model, not a substitute for local authority. Its sequence was synthesized from NASA’s formal release procedure, Maryland’s state checklist, Canada’s publication guide, NZGOAL-SE’s staged decision model, Italy’s publication annex, Swiss federal instructions, Code.mil’s rights/restriction questions, and the OSI license list.[^5][^15][^16][^23][^32][^58][^59][^60][^61]

The durable sequence is:

```text
define owner + exact release candidate
              ↓
control every part? ── no → obtain rights, remove/split material, or stop
              ↓ yes
clear of release restrictions? ── no → remediate and repeat, or stop
              ↓ yes
sanitize history + dependencies + data
              ↓
grant clear open reuse rights? ── no → not an open source release
              ↓ yes
document + package + obtain final approvals
              ↓
publish from an authoritative account + steward or archive responsibly
```

The guide applies the same action pattern across three lenses while making the legal starting point explicit: federal employee works under 17 U.S.C. §105, state/local ownership and delegated authority, and jurisdiction-specific copyright and public-sector law outside the United States.[^12][^16][^22][^32]

## Maintenance and re-review register

- Recheck CISA’s roadmap immediately after its FY2026 horizon.[^8]
- Monitor the announced Australian policy revision during the second half of 2026.[^36]
- Recheck NASA NPR 2210.1E before its stated 2028 expiration and GSA CIO 2107.1A before its scheduled 2029 review.[^3][^5]
- Look for the European Commission’s required review result and adjust the decision record if superseded.[^30]
- Reconfirm South Africa’s historical policy against the department’s live policy catalog before promoting it from `Reference`.[^40][^57]
- Recheck New York because the policy’s own review cadence appears overdue even though later state policy still references it.[^20]
- Keep Maryland’s year `Undated` until the issuing body provides a defensible publication/adoption date.[^16]
- Monitor SarPy’s repository for the planned SARKit consolidation and update project status or canonical repository when the transition lands.[^50]
- Treat Code.mil as provenance/discovery evidence and re-read repository license files whenever a project record is refreshed.[^15]

## Sources

[^1]: U.S. Department of Defense, [DoWI 8430.01, Accelerated Mission Software](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/843001p.PDF).
[^2]: U.S. Congress, [Public Law 118-187, SHARE IT Act](https://www.congress.gov/118/plaws/publ187/PLAW-118publ187.pdf).
[^3]: U.S. General Services Administration, [GSA Open Source Software Policy, CIO 2107.1A](https://www.gsa.gov/directives-library/gsa-open-source-software-oss-policy-1).
[^4]: Centers for Medicare & Medicaid Services, [Open Source Business Rules and Recommended Practices](https://www.cms.gov/tra/Application_Development/AD_0230_Open_Source_Business_Rules.htm).
[^5]: NASA, [NPR 2210.1E, Release of NASA Software](https://nodis3.gsfc.nasa.gov/displayDir.cfm?c=2210&s=1E&t=NPR).
[^6]: U.S. Department of Energy, [Scientific and Technical Information Management / DOE Order 241.1C](https://www.energy.gov/documents/scientific-and-technical-information-management).
[^7]: Office of Management and Budget, [M-25-21, Accelerating Federal Use of AI](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf).
[^8]: CISA, [Open Source Software Security Roadmap](https://www.cisa.gov/sites/default/files/2024-02/CISA-Open-Source-Software-Security-Roadmap-508c.pdf).
[^9]: NIST, [SP 800-218, Secure Software Development Framework v1.1](https://csrc.nist.gov/pubs/sp/800/218/final).
[^10]: U.S. Department of Defense, [DoDI 5230.09, Clearance of DoD Information for Public Release](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/523009p.pdf).
[^11]: U.S. Department of Defense, [DoDI 5230.24, Distribution Statements on DoD Technical Information](https://www.esd.whs.mil/portals/54/documents/dd/issuances/dodi/523024p.pdf).
[^12]: U.S. House Office of the Law Revision Counsel, [17 U.S.C. §105](https://uscode.house.gov/view.xhtml?req=%28title%3A17%20section%3A105%20edition%3Aprelim%29).
[^13]: Office of Management and Budget archive, [M-04-16, Software Acquisition](https://georgewbush-whitehouse.archives.gov/omb/memoranda/fy04/m04-16.html).
[^14]: Office of Management and Budget, [M-16-21, Federal Source Code Policy](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m_16_21.pdf).
[^15]: Code.mil, [Open Source Software FAQ](https://code.mil/oss-faq.html).
[^16]: Maryland Department of Information Technology, [Maryland Open Source Policy](https://doit.maryland.gov/policies/Websites-and-Data/Pages/Maryland-Open-Source-Policy.aspx).
[^17]: New Hampshire General Court, [RSA 21-R:11](https://gc.nh.gov/rsa/html/I/21-R/21-R-11.htm).
[^18]: Oklahoma Legislature, [Title 62 consolidated statutes, §34.31.1](https://www.oklegislature.gov/OK_Statutes/CompleteTitles/os62.pdf).
[^19]: Utah Administrative Rules, [R895-3 current compiled rule](https://adminrules.utah.gov/api/public/getfile/uac-pdf/f6ece043-9bfe-4cc8-9abe-69238a042daa.pdf/R895-3.pdf).
[^20]: New York State ITS, [ITS-P19-005, Acceptable Use of Open-Source Software](https://its.ny.gov/acceptable-use-open-source-software).
[^21]: Washington State Department of Transportation, [Bridge Design Manual, Chapter 1](https://wsdot.wa.gov/publications/manuals/fulltext/M23-50/Chapter1.pdf).
[^22]: Swiss Confederation, [Federal Act on the Use of Electronic Means to Carry Out Official Tasks](https://www.fedlex.admin.ch/eli/cc/2023/682/en).
[^23]: Agency for Digital Italy, [Guidelines on acquisition and reuse of software for public administrations](https://www.agid.gov.it/it/design-servizi/riuso-open-source/linee-guida-acquisizione-riuso-software-pa).
[^24]: Government of Spain, [Real Decreto 4/2010 consolidated text](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331).
[^25]: Federal Republic of Germany, [E-Government Act §16a](https://www.gesetze-im-internet.de/egovg/__16a.html).
[^26]: Uruguay IMPO, [Law No. 19.179](https://www.impo.com.uy/bases/leyes/19179-2013).
[^27]: Uruguay IMPO, [Decree No. 44/015](https://www.impo.com.uy/bases/decretos/44-2015).
[^28]: Government of India, [Policy on Adoption of Open Source Software](https://egovstandards.gov.in/sites/default/files/2021-07/Notification%20of%20Policy%20on%20Adoption%20of%20Open%20Source%20Software%20for%20Government%20of%20India_0.pdf).
[^29]: Government of India, [Policy on Collaborative Application Development by Opening the Source Code of Government Applications](https://www.meity.gov.in/sites/upload_files/dit/files/policy_government_application.pdf).
[^30]: European Commission, [Decision 2021/C 495 I/01](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1209%2801%29).
[^31]: Treasury Board of Canada Secretariat, [Government of Canada Enterprise Architecture Framework](https://www.canada.ca/en/government/system/digital-government/policies-standards/government-canada-enterprise-architecture-framework.html).
[^32]: New Zealand Government, [NZGOAL Software Extension](https://www.data.govt.nz/toolkit/policies/nzgoal/nzgoal-se).
[^33]: Netherlands digital government, [Open source policy: Open, tenzij](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/open-source/beleid/).
[^34]: United Nations General Assembly, [A/RES/79/1, Pact for the Future and Global Digital Compact](https://docs.un.org/a/res/79/1).
[^35]: UNESCO, [Recommendation on Open Science](https://www.unesco.org/en/legal-affairs/recommendation-open-science).
[^36]: Australian Digital Transformation Agency, [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/policy/digital-and-ict-reuse-policy).
[^37]: Brazil, [Law No. 14.063, Article 16](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14063.htm).
[^38]: United Nations, [Launch notice for the United Nations Open Source Principles](https://unite.un.org/en/news/osi-first-endorse-united-nations-open-source-principles).
[^39]: Open Source United, [Common Policy Framework, Release Candidate 1.0](https://opensource.un.org/sites/default/files/2026-01/open_source_united_-_common_policy_framework_rc1.pdf).
[^40]: South African Department of Public Service and Administration, [Policy on Free and Open Source Software Use](https://www.dpsa.gov.za/dpsa2g/documents/ogcio/2007/FOSS_OC%20POLICY_2006_APPENDIX%20A.pdf).
[^41]: BRL-CAD, [project history](https://brlcad.org/wiki/History).
[^42]: BRL-CAD repository, [COPYING](https://github.com/BRL-CAD/brlcad/blob/main/COPYING).
[^43]: National Security Agency, [Ghidra](https://www.nsa.gov/ghidra) and repository [NOTICE](https://github.com/NationalSecurityAgency/ghidra/blob/master/NOTICE).
[^44]: TAK Product Center, [ATAK-CIV repository](https://github.com/TAK-Product-Center/atak-civ).
[^45]: TAK Product Center, [TAK governance and process](https://tak.gov/pages/our-process).
[^46]: NSA Cybersecurity, [HIRS repository](https://github.com/nsacyber/HIRS).
[^47]: NSA Cybersecurity, [paccor repository](https://github.com/nsacyber/paccor).
[^48]: National Geospatial-Intelligence Agency, [Hootenanny repository](https://github.com/ngageoint/hootenanny).
[^49]: National Geospatial-Intelligence Agency, [MAGE repository](https://github.com/ngageoint/MAGE) and [2024 fact sheet](https://www.nga.mil/assets/files/2024_MAGE_Fact_Sheet.pdf).
[^50]: National Geospatial-Intelligence Agency, [SarPy repository](https://github.com/ngageoint/sarpy).
[^51]: National Geospatial-Intelligence Agency, [GeoPackage repository](https://github.com/ngageoint/GeoPackage).
[^52]: Apache Software Foundation, [Apache Accumulo](https://accumulo.apache.org/).
[^53]: Apache Software Foundation, [Apache NiFi](https://nifi.apache.org/).
[^54]: GRASS GIS, [project history](https://grass.osgeo.org/about/history/).
[^55]: ParaView, [official project site](https://www.paraview.org/) and [canonical repository](https://gitlab.kitware.com/paraview/paraview).
[^56]: SELinux Project, [userspace repository](https://github.com/SELinuxProject/selinux) and NSA [historical research page](https://www.nsa.gov/Research/NSA-Mission-Oriented-Research/LACR/).
[^57]: South African Department of Public Service and Administration, [current e-government policy catalog](https://www.dpsa.gov.za/policy-updates/e-gov/e_government).
[^58]: Government of Canada, [Guide for Publishing Open Source Code](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html).
[^59]: Developers Italia, [Annex A: guide to publishing public-administration software as open source](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-a-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html).
[^60]: Swiss Federal Chancellery, [Instructions for Publishing OSS](https://www.bk.admin.ch/dam/en/sd-web/x1db81jEkYFk/Em002-2%20Instructions%20for%20Publishing%20OSS.pdf).
[^61]: Open Source Initiative, [OSI Approved Licenses](https://opensource.org/licenses).
