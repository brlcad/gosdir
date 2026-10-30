import type { Project } from '../types';

export default {
  id: 'lanl-covtransformer',
  name: 'CoVTransformer',
  summary:
    'A transformer model and software for forecasting SARS-CoV-2 lineage frequencies.',
  sponsor: 'Los Alamos National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational biology and epidemiology',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ruianke/CoVTransformer',
  officialUrl: 'https://github.com/ruianke/CoVTransformer',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11631054/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'lanl',
    'covid-19',
    'machine learning',
    'genomics',
    'forecasting',
  ],
} satisfies Project;
