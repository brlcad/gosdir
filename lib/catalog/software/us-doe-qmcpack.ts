import type { Project } from '../types';

export default {
  id: 'us-doe-qmcpack',
  name: 'QMCPACK',
  summary:
    'Many-body ab initio Quantum Monte Carlo software for electronic-structure calculations in atoms, molecules, and solids.',
  sponsor:
    'U.S. Department of Energy Office of Science; development contributors include Oak Ridge, Lawrence Livermore, Sandia, and Argonne national laboratories. QMCPACK originated at the University of Illinois Urbana-Champaign.',
  agencyIds: [
    'us-doe-oak-ridge-national-laboratory',
    'us-doe-lawrence-livermore-national-laboratory',
    'us-doe-sandia-national-laboratories',
    'us-doe-argonne-national-laboratory',
    'us-doe',
  ],
  geography:
    'Oak Ridge, Tennessee; Livermore, California; Albuquerque, New Mexico; and Lemont, Illinois, United States; originated at the University of Illinois Urbana-Champaign.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and electronic structure',
  openSourceYear: 2005,
  license:
    'NCSA (QMCPACK source covered by the root grant; separately licensed packages and features are excluded)',
  repository: 'https://github.com/QMCPACK/qmcpack',
  officialUrl: 'https://qmcpack.org/',
  evidenceUrl: 'https://qmcpack.readthedocs.io/en/develop/introduction.html',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united states',
    'doe',
    'quantum monte carlo',
    'electronic structure',
    'hpc',
  ],
} satisfies Project;
