import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-uq-mlip',
  name: 'UQ-MLIP',
  summary:
    'Per-atom uncertainty quantification for machine-learning interatomic potentials, first demonstrated with MACE-MP-0.',
  sponsor:
    'U.S. Department of Energy Office of Science, Office of Basic Energy Sciences, via Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'United States; developed at PNNL in Richland, Washington',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and machine learning',
  openSourceYear: 2025,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/UQ-MLIP',
  officialUrl:
    'https://www.pnnl.gov/news-media/its-time-get-comfortable-uncertainty-ai-model-training',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/153158',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'DOE',
    'PNNL',
    'materials science',
    'machine learning',
    'uncertainty quantification',
  ],
} satisfies Project;
