import type { Project } from '../types';

export default {
  id: 'fr-inria-cheops-for-edge',
  name: 'Cheops for the edge',
  summary:
    'A research prototype for synchronizing and replicating REST application resources across distributed edge deployments.',
  sponsor:
    'Inria Project-Team STACK at Inria Centre at Rennes University, in partnership with IMT Atlantique, Nantes Université and Orange Labs',
  agencyIds: ['fr-inria', 'fr-imt-atlantique', 'fr-university-nantes'],
  geography: 'Rennes, Brittany, France',
  jurisdiction: 'International',
  domain: 'Edge computing & distributed systems',
  openSourceYear: 2023,
  license: 'GNU Affero General Public License version 3 (AGPL-3.0)',
  repository: 'https://gitlab.inria.fr/discovery/cheops',
  officialUrl: 'https://radar.inria.fr/report/2024/stack/index.html',
  evidenceUrl: 'https://radar.inria.fr/report/2024/stack/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'edge-computing', 'distributed-systems'],
} satisfies Project;
