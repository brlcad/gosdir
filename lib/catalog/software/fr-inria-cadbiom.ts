import type { Project } from '../types';

export default {
  id: 'fr-inria-cadbiom',
  name: 'Cadbiom',
  summary:
    'A modeling and analysis framework for asynchronous dynamics of biological networks, including large BioPAX models.',
  sponsor: 'Inria DYLISS, partnered with CNRS and Université de Rennes',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-university-rennes'],
  geography:
    'Rennes, Brittany, France (Inria Centre at Rennes University / IRISA)',
  jurisdiction: 'International',
  domain: 'Systems biology & bioinformatics',
  openSourceYear: 2017,
  license:
    'GNU AGPL-3.0 (current repository; earlier source release was GPL-2.0-or-later)',
  repository: 'https://gitlab.inria.fr/dyliss/cadbiom',
  officialUrl: 'https://cadbiom.genouest.org/doc/cadbiom/',
  evidenceUrl: 'https://radar.inria.fr/report/2024/dyliss/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'bioinformatics',
    'systems-biology',
    'biological-networks',
  ],
} satisfies Project;
