import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-comet',
  name: 'COMET',
  summary:
    'A domain-specific compiler for high-performance computational chemistry.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and computational chemistry',
  openSourceYear: 2022,
  license:
    'BSD-2-Clause for COMET source; external submodules retain their own terms',
  repository: 'https://github.com/pnnl/COMET',
  officialUrl:
    'https://www.pnnl.gov/publications/comet-domain-specific-compilation-high-performance-computational-chemistry',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/75178',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'computational chemistry', 'compiler', 'hpc'],
} satisfies Project;
