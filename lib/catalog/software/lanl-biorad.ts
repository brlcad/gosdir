import type { Project } from '../types';

export default {
  id: 'lanl-biorad',
  name: 'BIORAD',
  summary:
    'A machine-learning program for predicting protein-protein binding affinity.',
  sponsor:
    'U.S. Department of Defense, Defense Threat Reduction Agency; developed at Los Alamos National Laboratory',
  agencyIds: [
    'us-dod-dtra',
    'us-dod',
    'us-doe-los-alamos-national-laboratory',
    'us-doe',
  ],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and machine learning',
  openSourceYear: 2024,
  license: 'BSD-3-Clause for repository code',
  repository: 'https://github.com/lanl/biorad',
  officialUrl: 'https://www.osti.gov/doecode/biblio/150016',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12462375/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['dod', 'dtra', 'lanl', 'protein interactions', 'machine learning'],
} satisfies Project;
