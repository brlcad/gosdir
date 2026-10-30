import type { Project } from '../types';

export default {
  id: 'lanl-architector',
  name: 'Architector',
  summary:
    'A Python package for high-throughput generation of 3D coordination-complex structures.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry',
  openSourceYear: 2022,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/Architector',
  officialUrl: 'https://www.osti.gov/doecode/biblio/98303',
  evidenceUrl: 'https://doi.org/10.1038/s41467-023-38169-2',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'chemistry', 'molecular modeling', 'python'],
} satisfies Project;
