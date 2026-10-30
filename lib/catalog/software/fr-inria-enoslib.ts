import type { Project } from '../types';

export default {
  id: 'fr-inria-enoslib',
  name: 'EnOSlib',
  summary:
    'A reusable Python library for configuring infrastructure, provisioning software and running reproducible experiments on distributed systems testbeds.',
  sponsor:
    'Inria Project-Team STACK at Inria Centre at Rennes University, in partnership with IMT Atlantique, Nantes Université and Orange Labs',
  agencyIds: ['fr-inria', 'fr-imt-atlantique', 'fr-university-nantes'],
  geography: 'Rennes, Brittany, France',
  jurisdiction: 'International',
  domain: 'Distributed systems & research infrastructure',
  openSourceYear: 2018,
  license: 'GNU General Public License version 3 (GPL-3.0)',
  repository: 'https://gitlab.inria.fr/discovery/enoslib',
  officialUrl: 'https://discovery.gitlabpages.inria.fr/enoslib/',
  evidenceUrl: 'https://radar.inria.fr/report/2025/stack/index.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'distributed-systems', 'testbeds', 'python'],
} satisfies Project;
