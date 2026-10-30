import type { Project } from '../types';

export default {
  id: 'lanl-sources4d',
  name: 'SOURCES4D',
  summary:
    'Calculates neutron source rates and energy spectra from spontaneous fission, delayed neutrons, and alpha-induced reactions, including sensitivity calculations.',
  sponsor:
    'U.S. Department of Energy National Nuclear Security Administration (NNSA); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography: 'United States — Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear engineering & radiation transport',
  openSourceYear: 2024,
  license:
    'GNU GPL-3.0-or-later for repository software (actual GPLv3 LICENSE); DOE CODE metadata says AGPLv3, which conflicts with the source license',
  repository: 'https://github.com/lanl/SOURCES4D',
  officialUrl: 'https://github.com/lanl/SOURCES4D',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/2342042',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'neutron source',
    'nuclear engineering',
    'radiation transport',
    'fortran',
  ],
} satisfies Project;
