import type { Project } from '../types';

export default {
  id: 'ornl-pdnetwork',
  name: 'PDnetwork',
  summary:
    'An interactive explorer for author and coauthor networks in peridynamics research publications.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), DOE Office of Science/WDTS and ORNL LDRD',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific literature networks',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/pdnetwork',
  officialUrl: 'https://ornl.github.io/PDnetwork/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/145360',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'peridynamics',
    'scientific literature',
    'network visualization',
  ],
} satisfies Project;
