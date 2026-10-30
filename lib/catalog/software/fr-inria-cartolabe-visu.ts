import type { Project } from '../types';

export default {
  id: 'fr-inria-cartolabe-visu',
  name: 'Cartolabe-visu',
  summary:
    'A web application for interactive exploration of large document collections.',
  sponsor: 'Inria TAU, with CNRS and Université Paris-Saclay',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-university-paris-saclay'],
  geography: 'Paris-Saclay, Île-de-France, France',
  jurisdiction: 'International',
  domain: 'Document visualization & digital humanities',
  openSourceYear: 2019,
  license: 'BSD-3-Clause',
  repository: 'https://gitlab.inria.fr/cartolabe/cartolabe-visu',
  officialUrl: 'https://cartolabe.fr/',
  evidenceUrl: 'https://cat.opidor.fr/index.php/Cartolabe',
  status: 'Active',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'cnrs',
    'document visualization',
    'digital humanities',
  ],
} satisfies Project;
