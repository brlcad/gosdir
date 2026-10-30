import type { Project } from '../types';

export default {
  id: 'fr-inria-cromast',
  name: 'CroMaSt',
  summary:
    'A workflow for classifying protein-domain structural instances by cross-mapping them between domain databases.',
  sponsor:
    'Inria CAPSID team, in partnership with CNRS and Université de Lorraine',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-loria', 'fr-university-lorraine'],
  geography: 'Nancy, Grand Est, France',
  jurisdiction: 'International',
  domain: 'Structural bioinformatics',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://gitlab.inria.fr/capsid.public_codes/CroMaSt',
  officialUrl: 'https://workflowhub.eu/workflows/390',
  evidenceUrl: 'https://radar.inria.fr/report/2023/capsid/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'cnrs', 'bioinformatics', 'structural biology'],
} satisfies Project;
