import type { Project } from '../types';

export default {
  id: 'phare',
  name: 'PHARE plasma simulation code',
  summary:
    'A hybrid particle-in-cell simulation code for space and astrophysical plasmas, with adaptive mesh refinement.',
  sponsor:
    'Laboratoire de Physique des Plasmas (LPP), with support acknowledged from Plas@Par, LERMA, CNES, CIEDS, and AID',
  agencyIds: ['fr-laboratory-plasma-physics'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Scientific computing and physics',
  openSourceYear: 2018,
  license: 'GPLv3',
  repository: 'https://github.com/PHAREHUB/PHARE',
  officialUrl: 'https://pharehub.github.io/',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S0010465523003119',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'plasma physics', 'simulation', 'GPLv3'],
} satisfies Project;
