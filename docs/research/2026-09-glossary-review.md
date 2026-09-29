# Government open source glossary review

Research review date: 22 September 2026

The glossary now proposes 52 terms. This revision removes `Code inventory` and adds 15 terms focused on government acquisition, rights, release controls, and public-sector licenses. Definitions are in `lib/catalog/glossary.ts` so reviewers can inspect the exact public wording. The earlier 26 additions remain in review.

## Earlier additions

| Area | Proposed terms | Why they belong |
|---|---|---|
| Directory evidence | Canonical repository; government provenance; machine-readable metadata; primary evidence; source code | These explain how GOSDIR identifies an official project, links its source, and checks the government relationship. |
| Rights and release | Contract data rights; contractor-developed code; custom-developed code; license compatibility; open source license; public release review; release authority; reuse rights; rights clearance; sensitive information | These clarify why public funding or repository visibility alone cannot authorize an open source release.[^7] |
| Reuse and collaboration | Contribution; interagency reuse; open by default; upstream | These distinguish sharing within government from public release and describe how changes can return to a project.[^3] |
| Public digital systems | Digital public infrastructure; interoperability; open standard | These explain policy vocabulary adjacent to open source without treating the concepts as synonyms.[^6][^8] |
| Security and maintenance | Dependency; software stewardship; software supply chain; vulnerability disclosure policy | These connect the existing SBOM entry to ongoing maintenance and security responsibilities.[^9][^10] |

## Government-specific additions in this revision

| Area | Proposed terms | Why they belong |
|---|---|---|
| U.S. acquisition | FAR; DFARS; commercial software; COTS; Government Purpose Rights (GPR); restricted rights; unlimited rights; source-code delivery | These distinguish buying or receiving software from receiving permission to publish it. FAR is the official singular acronym for the regulation referred to in the request as “FARS.”[^11][^12][^13] |
| Release controls | Controlled Unclassified Information (CUI); distribution statement; GDPR | These identify U.S. and EU rules that may restrict material included with a release. GDPR governs personal data processing; it is not a software license.[^14][^15][^18] |
| Public-sector copyright and licenses | Crown copyright; European Union Public Licence (EUPL); U.S. Government work; Open Source Definition | These explain jurisdiction-specific ownership and licensing alongside the general open source license test.[^16][^17][^19][^21] |

## Editorial checks

- `Commercial software` can be open source. The FAR uses the more precise term `commercial computer software`; commercial status does not identify the license or public-release rights.[^13]
- Government Purpose Rights are limited to U.S. government purposes under DFARS conditions. Unlimited rights are broader, but neither label replaces a release review or makes software public domain.[^12]
- Source-code delivery is a contract deliverable, while license rights set permitted uses of that code.[^20]
- The definitions describe general concepts. A policy's own definitions and the law, contract, or release authority governing a particular project control specific decisions.
- `Interagency reuse` and `reuse rights` explicitly distinguish government-only sharing from public open source publication. The U.S. SHARE IT Act allows covered repositories to be public or accessible to federal employees, so a reuse requirement should not be summarized as a universal public-release requirement.[^1]
- `Contract data rights` and `contractor-developed code` avoid assuming that payment transfers public-release rights. NASA's release procedure and Canada's publication guide both require review of contract rights before publication.[^2][^3]
- The existing `Digital public good`, `Public domain`, and `SPDX identifier` entries are tightened. The first now points to the DPG Standard's criteria; the second flags jurisdiction and mixed works; the third distinguishes a license identifier from an SPDX expression.[^4][^5]
- `Digital public infrastructure` is distinct from a digital public good and can contain software with different licenses.[^6]

## Primary source trail

[^1]: [SHARE IT Act, Public Law 118-187](https://www.congress.gov/118/plaws/publ187/PLAW-118publ187.pdf), definitions and repository/reuse requirements.
[^2]: [NASA NPR 2210.1E, Chapter 2](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_2210_001E_&page_name=Chapter2) and [Chapter 3](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_2210_001E_&page_name=Chapter3), rights, release categories, approvals, and outside contributions.
[^3]: [Government of Canada guide for publishing open source code](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html) and [guide for contributing](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-contributing-to-open-source-software.html), contracts, security, licenses, repositories, and upstream contributions.
[^4]: [Digital Public Goods Standard](https://www.digitalpublicgoods.net/standard).
[^5]: [SPDX specification: license expressions](https://spdx.github.io/spdx-spec/v3.0.1/annexes/spdx-license-expressions/); [U.S. Copyright Act, 17 U.S.C. § 105](https://uscode.house.gov/view.xhtml?req=%28title%3A17%20section%3A105%20edition%3Aprelim%29) for the U.S. federal-work rule.
[^6]: [UNDP on digital public infrastructure](https://www.undp.org/digital/digital-public-infrastructure).
[^7]: [Open Source Definition](https://opensource.org/osd) and [OSI approved licenses](https://opensource.org/licenses), for the license and source-access distinction.
[^8]: [UK Open Standards Principles](https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles), for open standards and interoperability.
[^9]: [CISA vulnerability disclosure policy directive](https://www.cisa.gov/news-events/news/cisa-issues-final-vulnerability-disclosure-policy-directive-federal-agencies) and [CISA SBOM resources](https://www.cisa.gov/topics/cyber-threats-and-advisories/sbom/sbomresourceslibrary), for reporting channels and component visibility.
[^10]: [NIST Secure Software Development Framework](https://www.nist.gov/publications/secure-software-development-framework-ssdf-version-11-recommendations-mitigating-risk), for supply-chain and maintenance context.

[^11]: [FAR 1.101](https://www.acquisition.gov/far/1.101), Federal Acquisition Regulation and its place in the Federal Acquisition Regulations System; [DFARS 201.301](https://www.acquisition.gov/dfars/part-201-federal-acquisition-regulations-system), the Department of Defense supplement.
[^12]: [DFARS 252.227-7014](https://www.acquisition.gov/dfars/252.227-7014-rights-other-commercial-computer-software-and-other-commercial-computer-software-documentation.), Government Purpose Rights, restricted rights, and unlimited rights in other-than-commercial computer software.
[^13]: [FAR 2.101](https://www.acquisition.gov/far/2.101), definitions of commercial computer software and COTS; [FAR 12.212](https://www.acquisition.gov/far/12.212), commercial software licenses; [OSI FAQ](https://opensource.org/faq), commercial use of open source software.
[^14]: [National Archives CUI Registry glossary](https://www.archives.gov/cui/registry/cui-glossary.html), the U.S. federal CUI definition.
[^15]: [DoDI 5230.24](https://www.esd.whs.mil/portals/54/documents/dd/issuances/dodi/523024p.pdf), distribution statements on DoD technical information.
[^16]: [European Commission EUPL 1.2 text](https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12), the EU-created open source license.
[^17]: [UK National Archives: Crown copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/) and [open software licences](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/open-government-licence/open-software-licences/).
[^18]: [European Commission: application of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en), including public authorities.
[^19]: [U.S. Copyright Act, 17 U.S.C. §§ 101, 105](https://www.copyright.gov/title17/92chap1.html), federal employee works and domestic copyright treatment.
[^20]: [DFARS 227.7203-2](https://www.acquisition.gov/dfars/227.7203-2-acquisition-other-commercial-computer-software-and-computer-software-documentation-and-associated-rights.), separate planning for software delivery and associated license rights.
[^21]: [Open Source Definition](https://opensource.org/osd), the Open Source Initiative's license criteria.

## Possible next review round

Contributor license agreement, code developed in the open, reuse before build, secure software development framework, vendor lock-in, and total cost of ownership may be useful later. They are more specialized than the concepts added here.
