import type { Project } from '../types';

export default {
  id: 'lanl-thunderboltz',
  name: 'ThunderBoltz',
  summary:
    'A zero-dimensional Direct Simulation Monte Carlo Boltzmann solver for plasma transport, chemical kinetics, and gas modeling, with a C++ core and Python API.',
  sponsor:
    'U.S. Department of Energy Office of Science, Advanced Scientific Computing Research; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; plasma science software for global use',
  jurisdiction: 'U.S. federal',
  domain: 'Plasma science and scientific computing',
  openSourceYear: 2023,
  license: 'GPL-3.0 for repository source',
  repository: 'https://github.com/lanl/ThunderBoltz',
  officialUrl: 'https://thunderboltz.readthedocs.io/',
  evidenceUrl: 'https://doi.org/10.1088/1361-6595/ad6fcc',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'plasma physics', 'boltzmann solver', 'python'],
} satisfies Project;
