import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-dancepartner',
  name: 'DancePartner',
  summary:
    'A Python package for mining multi-omics relationship networks using literature and biological databases.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and multi-omics',
  openSourceYear: 2025,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-Predictive-Phenomics/DancePartner',
  officialUrl: 'https://pnnl-predictive-phenomics.github.io/DancePartner/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/156096',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'bioinformatics', 'multi-omics', 'python'],
} satisfies Project;
