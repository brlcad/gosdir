import type { Project } from '../types';

export default {
  id: 'origen-library-manager',
  name: 'ORIGEN Library Manager',
  summary:
    'An ORNL command-line tool for creating and checking ORIGEN reactor libraries used in SCALE spent-fuel calculations.',
  sponsor: 'Oak Ridge National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory'],
  geography: 'United States (Tennessee)',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear engineering',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/wawiesel/olm',
  officialUrl:
    'https://impact.ornl.gov/en/publications/origen-library-manager/',
  evidenceUrl: 'https://scale-olm.readthedocs.io/en/stable/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'ornl', 'nuclear engineering', 'origen', 'python'],
} satisfies Project;
