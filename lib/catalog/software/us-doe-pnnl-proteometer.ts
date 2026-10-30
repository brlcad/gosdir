import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-proteometer',
  name: 'ProteoMeter',
  summary:
    'A Python package for proteomics and post-translational-modification analysis.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Proteomics and bioinformatics',
  openSourceYear: 2023,
  license:
    'BSD-2-Clause for current package source; initial 2023 source was GPL-3; input data are separately governed',
  repository: 'https://github.com/PNNL-Predictive-Phenomics/ProteoMeter',
  officialUrl: 'https://pnnl-predictive-phenomics.github.io/ProteoMeter/',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13365959/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'proteomics', 'bioinformatics', 'python'],
} satisfies Project;
