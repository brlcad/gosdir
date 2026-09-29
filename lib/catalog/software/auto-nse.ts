import type { Project } from '../types';

export default {
  id: 'auto-nse',
  name: 'AutoNSE',
  summary:
    'NIST research software for simulating and analyzing active-learning campaigns for the neutron spin echo response function.',
  sponsor:
    'National Institute of Standards and Technology, Center for Neutron Research and Material Measurement Laboratory',
  agencyIds: ['us-nist'],
  geography:
    'United States (Gaithersburg, Maryland); research methods serve the international neutron-scattering community',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2025,
  license: 'NIST-Software',
  repository: 'https://github.com/usnistgov/auto_nse',
  officialUrl: 'https://ncnr.nist.gov/publications/CORE_pubs.html',
  evidenceUrl: 'https://doi.org/10.1063/5.0312231',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nist', 'neutron science', 'active learning', 'scientific software'],
} satisfies Project;
