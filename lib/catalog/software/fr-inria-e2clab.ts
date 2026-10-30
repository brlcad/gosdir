import type { Project } from '../types';

export default {
  id: 'fr-inria-e2clab',
  name: 'E2Clab',
  summary:
    'A framework for configuring, deploying and running repeatable experiments across edge-to-cloud infrastructures.',
  sponsor: 'Inria KerData research team',
  agencyIds: ['fr-inria'],
  geography: 'Rennes, Brittany, France (Inria Centre at Rennes University)',
  jurisdiction: 'International',
  domain: 'Distributed systems & research infrastructure',
  openSourceYear: 2020,
  license: 'GNU GPL-3.0-or-later',
  repository: 'https://gitlab.inria.fr/e2clab/e2clab',
  officialUrl: 'https://e2clab.gitlabpages.inria.fr/e2clab/',
  evidenceUrl: 'https://radar.inria.fr/report/2024/kerdata/index.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'edge-cloud',
    'distributed-systems',
    'reproducibility',
  ],
} satisfies Project;
