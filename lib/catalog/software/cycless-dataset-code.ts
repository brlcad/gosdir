import type { Project } from '../types';

export default {
  id: 'cycless-dataset-code',
  name: 'CYCLeSS Dataset Processing Code',
  summary:
    'Reproducible R and Python pipeline for aligning climate, soil, satellite, and anonymized crop-yield data.',
  sponsor:
    'Alan Turing Institute and UKCEH research; supported by UKRI EPSRC and NERC',
  agencyIds: ['uk-epsrc', 'uk-nerc'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Agricultural research',
  openSourceYear: 2024,
  license: 'CC0-1.0 (source code; dataset published separately)',
  repository: 'https://github.com/alan-turing-institute/CYCLeSS-dataset-code',
  officialUrl: 'https://github.com/alan-turing-institute/CYCLeSS-dataset-code',
  evidenceUrl: 'https://www.nature.com/articles/s41597-025-06528-x',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'agriculture', 'reproducibility'],
} satisfies Project;
