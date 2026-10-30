import type { Project } from '../types';

export default {
  id: 'us-doe-ames-sigma',
  name: 'Sigma',
  summary:
    'A header-only C++17 library for uncertainty propagation, correlated calculations, and set-valued arithmetic.',
  sponsor:
    'Ames National Laboratory Laboratory Directed Research and Development program; Ames is operated by Iowa State University for the U.S. Department of Energy.',
  agencyIds: ['us-doe-ames-national-laboratory'],
  geography: 'United States (Ames, Iowa)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and uncertainty propagation',
  openSourceYear: 2024,
  license: 'Apache License 2.0',
  repository: 'https://github.com/QCUncertainty/sigma',
  officialUrl: 'https://qcuncertainty.github.io/sigma/',
  evidenceUrl: 'https://www.ameslab.gov/work-us/open-source-software',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'us',
    'department-of-energy',
    'ames-national-laboratory',
    'scientific-computing',
    'uncertainty-propagation',
    'c++',
  ],
} satisfies Project;
