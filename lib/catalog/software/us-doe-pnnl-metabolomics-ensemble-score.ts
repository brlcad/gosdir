import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-metabolomics-ensemble-score',
  name: 'Metabolomics Ensemble Score',
  summary:
    'A trained ensemble model and R scripts for scoring GC-MS spectral similarity.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Metabolomics and mass spectrometry',
  openSourceYear: 2024,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-m-q/metabolomics_ensemble_score',
  officialUrl: 'https://www.osti.gov/servlets/purl/3006378',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/148900',
  status: 'Archived',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'metabolomics', 'mass spectrometry', 'r'],
} satisfies Project;
