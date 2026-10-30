import type { Project } from '../types';

export default {
  id: 'fr-inria-discretelogdb',
  name: 'DiscreteLogDB',
  summary:
    'A searchable database of published finite-field discrete-log computations, with a web interface and client code.',
  sponsor: 'Inria CARAMBA, in partnership with Université de Lorraine and CNRS',
  agencyIds: ['fr-inria', 'fr-university-lorraine', 'fr-cnrs'],
  geography:
    'Nancy, Grand Est, France (Inria Centre at Université de Lorraine / LORIA)',
  jurisdiction: 'International',
  domain: 'Number theory & research data',
  openSourceYear: 2017,
  license: 'CC0 1.0 Universal',
  repository: 'https://gitlab.inria.fr/dldb/discretelogdb',
  officialUrl: 'https://gitlab.inria.fr/dldb/discretelogdb',
  evidenceUrl: 'https://radar.inria.fr/report/2017/caramba/uid56.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'number-theory',
    'research-database',
    'discrete-logarithms',
  ],
} satisfies Project;
