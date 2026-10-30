import type { Project } from '../types';

export default {
  id: 'fr-inria-cado-nfs',
  name: 'CADO-NFS',
  summary:
    'A scalable implementation of the Number Field Sieve for integer factorization.',
  sponsor:
    'Inria/CNRS CARAMBA team at LORIA and Université de Lorraine; originally developed through ANR-CADO',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-loria', 'fr-university-lorraine'],
  geography: 'Nancy, Grand Est, France',
  jurisdiction: 'International',
  domain: 'Cryptography & computational number theory',
  openSourceYear: 2009,
  license: 'LGPL-2.1 (core project source)',
  repository: 'https://gitlab.inria.fr/cado-nfs/cado-nfs',
  officialUrl: 'https://cado-nfs.gitlabpages.inria.fr/',
  evidenceUrl: 'https://radar.inria.fr/report/2025/caramba/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'cnrs', 'cryptography', 'number theory'],
} satisfies Project;
