import type { Project } from '../types';

export default {
  id: 'fr-inria-belenios',
  name: 'Belenios',
  summary:
    'An end-to-end verifiable online voting system and public election platform.',
  sponsor: 'Inria/CNRS CARAMBA team at LORIA and Université de Lorraine',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-loria', 'fr-university-lorraine'],
  geography: 'Nancy, Grand Est, France',
  jurisdiction: 'International',
  domain: 'Online voting & cryptography',
  openSourceYear: 2016,
  license: 'AGPL-3.0-or-later (with OpenSSL linking exception)',
  repository: 'https://gitlab.inria.fr/belenios/belenios',
  officialUrl: 'https://www.belenios.org/',
  evidenceUrl: 'https://radar.inria.fr/report/2025/caramba/index.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'cnrs', 'elections', 'cryptography'],
} satisfies Project;
