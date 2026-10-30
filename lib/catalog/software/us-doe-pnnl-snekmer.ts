import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-snekmer',
  name: 'Snekmer',
  summary:
    'Snekmer is a PNNL Python/Snakemake package for protein-sequence fingerprinting, clustering, supervised modeling, and functional annotation.',
  sponsor:
    'U.S. Department of Energy, Office of Science, through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and machine learning',
  openSourceYear: 2020,
  license:
    'BSD-3-Clause for Snekmer source; workflow tools and sequence databases retain separate terms',
  repository: 'https://github.com/PNNL-CompBio/Snekmer',
  officialUrl: 'https://science.osti.gov/ber/Highlights/2023/BER-2023-04-b',
  evidenceUrl: 'https://science.osti.gov/ber/Highlights/2023/BER-2023-04-b',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'bioinformatics',
    'protein sequences',
    'machine learning',
  ],
} satisfies Project;
