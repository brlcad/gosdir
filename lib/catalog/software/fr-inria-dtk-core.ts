import type { Project } from '../types';

export default {
  id: 'fr-inria-dtk-core',
  name: 'dtk-core',
  summary:
    'A reusable C++ core library and framework for DTK scientific applications.',
  sponsor:
    'Inria Service Expérimentation et Développement (SED), Sophia-Antipolis; DTK group',
  agencyIds: ['fr-inria'],
  geography:
    'Sophia Antipolis, Provence-Alpes-Côte d’Azur, France (Inria Sophia-Antipolis centre / SED)',
  jurisdiction: 'International',
  domain: 'Scientific software engineering',
  openSourceYear: 2018,
  license: 'BSD-3-Clause',
  repository: 'https://gitlab.inria.fr/dtk/dtk-core',
  officialUrl: 'https://dtk.gitlabpages.inria.fr/dtk-core/',
  evidenceUrl:
    'https://radar.inria.fr/rapportsactivite/RA2018/mosaic/uid26.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'dtk', 'c-plus-plus', 'scientific-software'],
} satisfies Project;
