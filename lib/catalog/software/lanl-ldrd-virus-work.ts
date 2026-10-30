import type { Project } from '../types';

export default {
  id: 'lanl-ldrd-virus-work',
  name: 'ldrd_virus_work (viral_seq)',
  summary:
    'A viral-genomics analysis and machine-learning workflow distributed as the viral_seq Python package.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics & viral genomics',
  openSourceYear: 2025,
  license: 'GPL-3.0',
  repository: 'https://github.com/lanl/ldrd_virus_work',
  officialUrl: 'https://www.osti.gov/doecode/biblio/183664',
  evidenceUrl: 'https://github.com/lanl/ldrd_virus_work/releases/tag/v0.1.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'bioinformatics',
    'viral genomics',
    'machine learning',
    'python',
  ],
} satisfies Project;
