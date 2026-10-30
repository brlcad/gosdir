import type { Project } from '../types';

export default {
  id: 'lanl-atccfinder',
  name: 'ATCCfinder',
  summary:
    'A tool to retrieve/query American Type Culture Collection genome references and identify matching strains.',
  sponsor:
    'U.S. Department of Energy; Los Alamos National Laboratory LDRD, Bioscience Division',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and microbial genomics',
  openSourceYear: 2024,
  license: 'BSD-3-Clause for repository code',
  repository: 'https://github.com/lanl/atccfinder',
  officialUrl: 'https://www.osti.gov/doecode/biblio/140100',
  evidenceUrl: 'https://peerj.com/articles/19832/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'bioinformatics', 'genomics', 'python'],
} satisfies Project;
