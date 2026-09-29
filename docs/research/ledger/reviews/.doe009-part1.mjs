import fs from 'node:fs';
import path from 'node:path';

const outPath = '/usr/web/gosdir.com/docs/research/ledger/reviews/doe-009.jsonl';
const reviewedAt = '2026-09-28T17:27:13Z';
const reviewer = 'DOE CODE individual source review';
const rows = [
  {
    normalized_repository_url: 'https://github.com/accel-toolkit/helix',
    source_row_ids: ['189439'],
    source_record_urls: ['https://www.osti.gov/doecode/biblio/189439'],
    reviewed_at_utc: reviewedAt,
    reviewer,
    decision: 'publishable',
    decision_reason: 'HELIX is an identifiable Fermilab accelerator-simulation software product with an openly accessible codebase, an inspected full GPL-3.0-only grant, official Fermilab publication-list coverage, a versioned release, extensive installation/user documentation, and a project-specific accelerator-code paper. The first defensible public licensed-code year is 2026, supported by the v1.8.0 release and current grant; repository metadata is not used as evidence.',
    checks: {
      government_provenance: { result: 'pass', evidence_url: 'https://lss.fnal.gov/lists/fermilab-reports-code.html', note: 'Fermilab’s official technical-publications Code list names FERMILAB-CODE-2026-21-AD, “HELIX: Hybrid Envelope-multiparticle LInac eXplorer.” The page identifies Fermilab as managed for the U.S. DOE Office of Science; the exact-project paper says HELIX was developed at Fermilab for PIP-II.' },
      public_source: { result: 'pass', evidence_url: 'https://github.com/Accel-Toolkit/HELIX', note: 'The canonical public GitHub repository exposes the HELIX implementation, examples, tests, documentation, and version history without credentials.' },
      eligible_license: { result: 'pass', evidence_url: 'https://github.com/Accel-Toolkit/HELIX/blob/main/LICENSE', note: 'Inspected the actual root LICENSE: complete GNU GPL version 3 terms, with no later-version option. The grant covers the repository source; this is SPDX GPL-3.0-only, not the DOE CODE metadata claim by itself.' },
      primary_evidence: { result: 'pass', evidence_url: 'https://github.com/Accel-Toolkit/HELIX/releases/tag/v1.8.0', note: 'The source has versioned v1.8.0 and later releases, substantial installation and user manuals, PIP-II examples, and an exact-project accelerator-code paper (https://arxiv.org/abs/2609.04421). Fermilab’s official Code publication list documents it as an agency-published product; release plus installation guidance and scholarly documentation satisfy the baseline.' }
    },
    product_identity: 'HELIX (Hybrid Envelope-multiparticle LInac eXplorer), a Python toolkit for simulation and optimization of charged-particle linear accelerators',
    agency: 'Fermi National Accelerator Laboratory (Fermilab), managed for the U.S. Department of Energy Office of Science by Fermi Forward Discovery Group',
    geography: 'United States (Fermilab, Batavia, Illinois)',
    open_source_year: 2026,
    open_source_year_evidence_url: 'https://github.com/Accel-Toolkit/HELIX/releases/tag/v1.8.0',
    license: 'GPL-3.0-only',
    official_url: 'https://accel-toolkit.github.io/HELIX/',
    notability_evidence_url: 'https://arxiv.org/abs/2609.04421',
    canonical_repository_url: 'https://github.com/Accel-Toolkit/HELIX',
    status_note: 'The Fermilab code registry lists this exact named code as FERMILAB-CODE-2026-21-AD. The project’s official user manual includes installation, physics/matching guides, PIP-II lattices, and examples. The public v1.8.0 tag is dated 2026-08-12; the exact-project paper was submitted 2026-09-03. Current activity extends through 2026-09-28, so the freshness exception is not needed.'
  },
  {
    normalized_repository_url: 'https://github.com/accert-dev/accert',
    source_row_ids: ['127847'],
    source_record_urls: ['https://www.osti.gov/doecode/biblio/127847'],
    reviewed_at_utc: reviewedAt,
    reviewer,
    decision: 'publishable',
    decision_reason: 'ACCERT is an Argonne-led nuclear-technology cost-estimation software product within DOE-NE’s Systems Analysis and Integration program, developed with INL collaborators. The public source carries an inspected full Apache-2.0 grant. Official DOE/INL campaign material and DOE-hosted technical reports document the exact tool and its research use; project docs provide installation, user, reference, and example guides. The first defensible licensed-source year is 2023.',
    checks: {
      government_provenance: { result: 'pass', evidence_url: 'https://www.osti.gov/servlets/purl/1963917', note: 'The DOE-hosted exact-project report identifies ACCERT as software under the U.S. DOE Office of Nuclear Energy Systems Analysis and Integration program and names INL and Argonne National Laboratory authors. The current source license bears UChicago Argonne copyright; INL is a named collaborator, not the code owner.' },
      public_source: { result: 'pass', evidence_url: 'https://github.com/accert-dev/ACCERT', note: 'The canonical public repository exposes the Python implementation, bundled database, tests/examples, documentation links, and installation instructions without credentials.' },
      eligible_license: { result: 'pass', evidence_url: 'https://github.com/accert-dev/ACCERT/blob/main/LICENSE', note: 'Inspected the complete current root LICENSE: Apache License 2.0 with UChicago Argonne copyright. The grant is attached to the repository code; this classification is not inferred from DOE CODE metadata.' },
      primary_evidence: { result: 'pass', evidence_url: 'https://accert.readthedocs.io/en/latest/', note: 'The exact project has installation/user instructions, reference documentation, developer guidance, examples, and a DOE-NE software citation. DOE’s exact ACCERT demonstration report and a later Argonne NE-COST integration paper document scientific/technical use; current INL Systems Analysis & Integration materials still list ACCERT as a campaign tool.' }
    },
    product_identity: 'ACCERT (Algorithm for the Capital Cost Estimation of Reactor Technologies), software and data framework for itemized nuclear-plant capital-cost estimation',
    agency: 'Argonne National Laboratory (U.S. Department of Energy); DOE Office of Nuclear Energy Systems Analysis and Integration program, with Idaho National Laboratory collaborators',
    geography: 'United States (Argonne National Laboratory, Lemont, Illinois; Idaho National Laboratory, Idaho Falls, Idaho)',
    open_source_year: 2023,
    open_source_year_evidence_url: 'https://github.com/accert-dev/ACCERT/commit/f19bc94eafc9cec4f94da9dddcff4be94015a83c',
    license: 'Apache-2.0',
    official_url: 'https://accert.readthedocs.io/en/latest/',
    notability_evidence_url: 'https://www.osti.gov/servlets/purl/1963917',
    canonical_repository_url: 'https://github.com/accert-dev/ACCERT',
    status_note: 'The first license-path commit is f19bc94 (2023-04-05; “first commit”); the ACCERT documentation recommends citing the software as DOE Office of Nuclear Energy software dated 2023-03-17. The initial source/license year is therefore 2023. Repository activity was current through 2026-09-17. DOE CODE metadata owner ANL is treated only as a lead; the exact report, code copyright, and current DOE/INL tool pages supply the attribution.'
  },
  {
    normalized_repository_url: 'https://github.com/acep-uaf/adcp_upsample',
    source_row_ids: ['113853'],
    source_record_urls: ['https://www.osti.gov/doecode/biblio/113853'],
    reviewed_at_utc: reviewedAt,
    reviewer,
    decision: 'reject',
    decision_reason: 'The repository is public and has a complete MIT grant, but the inspected tree is a small one-purpose R upsampling script with a sample input and short description. I found no installation/user documentation, versioned release, documented independent or scholarly reuse, deployment, or other product-level notability pathway. It is rejected on the baseline product/notability threshold, not because the source or license is inaccessible.',
    checks: {
      government_provenance: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/adcp_upsample/blob/main/LICENSE', note: 'The actual source license attributes the code to Alaska Center for Energy and Power (ACEP); ACEP’s first-party page identifies it as an applied research group at University of Alaska Fairbanks, and the University of Alaska is a state constitutional entity providing public higher education. This supports UAF/ACEP institutional stewardship; I found no separate project-specific federal grant claim.' },
      public_source: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/adcp_upsample', note: 'The public repository exposes the R script, example data, README, and root license without credentials.' },
      eligible_license: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/adcp_upsample/blob/main/LICENSE', note: 'Inspected the full root LICENSE: standard MIT terms, copyright Alaska Center for Energy and Power (2023). This is an OSI-approved MIT grant for the script repository.' },
      primary_evidence: { result: 'fail', evidence_url: 'https://github.com/acep-uaf/adcp_upsample', note: 'The repository describes a single R script for upsampling ADCP velocity time series and includes a data example, but has no versioned release or user/install guide, and searches found no exact-project scientific reuse, supported operational use, or separate distribution. A live one-off research script is not itself a qualifying notable software product under the baseline.' }
    },
    product_identity: 'ADCP Upsample, a one-purpose R script to upsample streamwise acoustic-Doppler-current-profiler velocity time series; no distinct reusable software product is evidenced',
    agency: 'Alaska Center for Energy and Power (ACEP), University of Alaska Fairbanks (public University of Alaska system, State of Alaska)',
    geography: 'United States (Fairbanks, Alaska)',
    open_source_year: 2023,
    open_source_year_evidence_url: 'https://github.com/acep-uaf/adcp_upsample/commit/f6ebd13e78276307015635a1643337076c233765',
    license: 'MIT',
    official_url: 'https://github.com/acep-uaf/adcp_upsample',
    notability_evidence_url: null,
    canonical_repository_url: 'https://github.com/acep-uaf/adcp_upsample',
    status_note: 'The first functional repository commit is dated 2023-09-19 and contains the R upsampling script/data. The inspected source copy is MIT licensed, but the DOE CODE release/owner fields do not establish notability or any government role. ACEP/UAF institutional authorship is supported; the decisive issue is the absence of a product-level notability/use pathway.'
  },
  {
    normalized_repository_url: 'https://github.com/acep-uaf/migrids_doe_marinemicrogrids',
    source_row_ids: ['113858'],
    source_record_urls: ['https://www.osti.gov/doecode/biblio/113858'],
    reviewed_at_utc: reviewedAt,
    reviewer,
    decision: 'hold',
    decision_reason: 'The observed repository is public and its own root contains MiGRIDS source and an inspected MIT grant. Official UAF/ACEP evidence confirms that ACEP developed and distributed the MiGRIDS product, with its initial phase funded by the Office of Naval Research; however, the official project page links the separate canonical-looking `acep-uaf/MiGRIDS` repository, not this `migrids_doe_marinemicrogrids` root. I could not establish the assigned repository’s source lineage, first public licensed year, or whether its contents are a distinct DOE marine-microgrid variant or a duplicate/snapshot. Hold rather than transfer the other repository’s history or attribute DOE funding from the name.',
    checks: {
      government_provenance: { result: 'pass', evidence_url: 'https://www.uaf.edu/acep/news/news-archives/2013-2023/2019/28-january-acep-this-week/first-phase-of-grid-bridging-system-complete.php', note: 'UAF’s first-party page identifies MiGRIDS as a Python software tool developed by ACEP researchers and collaborators and says the first phase was funded by the Office of Naval Research grant to ACEP. This establishes the MiGRIDS product’s public-university/government and federal Navy provenance; it does not establish the DOE-named lead repository was separately DOE-funded.' },
      public_source: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/migrids_doe_marinemicrogrids', note: 'The assigned repository is publicly accessible and exposes its own README, source tree, and license without credentials.' },
      eligible_license: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/migrids_doe_marinemicrogrids/blob/master/LICENSE.md', note: 'Inspected the actual assigned repository root LICENSE.md: complete standard MIT terms with 2018 ACEP copyright. This license is confirmed for this observed source tree only; no terms were transferred from the separate `acep-uaf/MiGRIDS` repository.' },
      primary_evidence: { result: 'unresolved', evidence_url: 'https://www.uaf.edu/acep/news/news-archives/2013-2023/2019/28-january-acep-this-week/first-phase-of-grid-bridging-system-complete.php', note: 'The official source documents MiGRIDS development, download, and planned deployment studies, while the current canonical UAF-linked repo has setup/wiki guidance and later reports discuss MiGRIDS use. The evidence does not identify the distinct `migrids_doe_marinemicrogrids` repository as that official distribution; source/product lineage and scope remain unresolved.' }
    },
    product_identity: 'MiGRIDS (Micro Grid Renewable Integration Dispatch and Sizing), a UAF/ACEP microgrid simulation and sizing tool; exact identity/relationship of the DOE Marine Microgrids repository variant is unresolved',
    agency: 'University of Alaska Fairbanks Alaska Center for Energy and Power (public University of Alaska system, State of Alaska); original phase supported by the U.S. Office of Naval Research, not proven DOE-funded',
    geography: 'United States (Fairbanks, Alaska)',
    open_source_year: null,
    open_source_year_evidence_url: null,
    license: 'MIT',
    official_url: 'https://github.com/acep-uaf/MiGRIDS',
    notability_evidence_url: null,
    canonical_repository_url: 'https://github.com/acep-uaf/MiGRIDS',
    status_note: 'Observed lead is `acep-uaf/migrids_doe_marinemicrogrids`; UAF’s 2019 first-party page links the separate `acep-uaf/MiGRIDS` source as the download. The two repository histories have not been proven to be redirects, forks, or identical releases. The observed tree itself has a 2018 MIT grant, but its earliest functional licensed availability is not traced. Do not infer DOE sponsorship from the “DOE” slug; the documented initial award is ONR.'
  },
  {
    normalized_repository_url: 'https://github.com/acep-uaf/wec-grid',
    source_row_ids: ['113929'],
    source_record_urls: ['https://www.osti.gov/doecode/biblio/113929'],
    reviewed_at_utc: reviewedAt,
    reviewer,
    decision: 'publishable',
    decision_reason: 'WEC-Grid is a distinct, public Python library with an inspected full MIT grant and direct project-specific DOE EERE/WPTO award evidence (DE-EE0009445). It has a versioned v1.0.0 release, installation/user documentation and reproducible examples, and an exact-project SoftwareX paper. The first defensible public licensed-source year is 2025.',
    checks: {
      government_provenance: { result: 'pass', evidence_url: 'https://acep-uaf.github.io/WEC-Grid/', note: 'The exact-project first-party documentation acknowledges U.S. DOE EERE Water Power Technology Office support under grant DE-EE0009445 and names UAF and PNNL. This is direct funding for WEC-Grid, not an inference from the ACEP GitHub account.' },
      public_source: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/WEC-Grid', note: 'The canonical repository publicly exposes the Python package, tests, example workflows, and documentation source without credentials.' },
      eligible_license: { result: 'pass', evidence_url: 'https://github.com/acep-uaf/WEC-Grid/blob/main/LICENSE', note: 'Inspected the actual root LICENSE: full standard MIT terms covering the project source. The separate marine-microgrid models/data repository has its own license and is not included in this code-license finding.' },
      primary_evidence: { result: 'pass', evidence_url: 'https://www.sciencedirect.com/science/article/pii/S2352711025003504', note: 'The SoftwareX paper documents this exact WEC-Grid software product and its scientific modeling purpose. The first-party docs include installation, architecture, examples, models, and citation guidance; the v1.0.0 release is dated 2025-09-09, and source activity continued through 2025-12.' }
    },
    product_identity: 'WEC-Grid, a Python framework for integrating wave-energy-converter models with power-grid simulators PSS®E and PyPSA',
    agency: 'University of Alaska Fairbanks Alaska Center for Energy and Power, supported by U.S. DOE Office of Energy Efficiency and Renewable Energy Water Power Technologies Office (grant DE-EE0009445), with Pacific Northwest National Laboratory',
    geography: 'United States (UAF/ACEP, Fairbanks, Alaska; PNNL, Washington)',
    open_source_year: 2025,
    open_source_year_evidence_url: 'https://github.com/acep-uaf/WEC-Grid/releases/tag/v1.0.0',
    license: 'MIT',
    official_url: 'https://acep-uaf.github.io/WEC-Grid/',
    notability_evidence_url: 'https://www.sciencedirect.com/science/article/pii/S2352711025003504',
    canonical_repository_url: 'https://github.com/acep-uaf/WEC-Grid',
    status_note: 'The official documentation is dated 2025-09-09 and links the exact repository; GitHub release v1.0.0 is dated 2025-09-09. The DOE-backed SoftwareX article concerns the exact Python library. The related `Marine-Microgrids-Models-Methods-and-Data` repository is a separate companion project and is not treated as part of the WEC-Grid license scope.'
  }
];

const existing = fs.existsSync(outPath)
  ? fs.readFileSync(outPath, 'utf8').split(/\n/).filter(Boolean).map(line => JSON.parse(line))
  : [];
const byUrl = new Map();
for (const row of existing) {
  if (byUrl.has(row.normalized_repository_url)) throw new Error(`duplicate existing review URL: ${row.normalized_repository_url}`);
  byUrl.set(row.normalized_repository_url, row);
}
for (const row of rows) {
  if (byUrl.has(row.normalized_repository_url)) throw new Error(`review already exists; inspect before overwrite: ${row.normalized_repository_url}`);
  byUrl.set(row.normalized_repository_url, row);
}
const batchPath = '/usr/web/gosdir.com/docs/research/ledger/batches/doe-009.jsonl';
const assigned = new Set(fs.readFileSync(batchPath, 'utf8').split(/\n/).filter(Boolean).map(line => JSON.parse(line).normalized_repository_url));
for (const url of byUrl.keys()) if (!assigned.has(url)) throw new Error(`URL is not assigned to doe-009: ${url}`);
if (rows.length !== 5) throw new Error(`expected five incoming rows, got ${rows.length}`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const tmpPath = `${outPath}.tmp-${process.pid}`;
fs.writeFileSync(tmpPath, [...byUrl.values()].map(row => JSON.stringify(row)).join('\n') + '\n', 'utf8');
fs.renameSync(tmpPath, outPath);
console.log(`wrote ${rows.length} unique rows; total ${byUrl.size}`);
