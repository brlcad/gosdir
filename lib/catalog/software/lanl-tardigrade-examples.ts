import type { Project } from '../types';

export default {
  id: 'lanl-tardigrade-examples',
  name: 'Tardigrade-examples',
  summary:
    'Python/WAVES workflows for continuum-upscaling studies, covering direct numerical simulation, filtering, calibration, and integration with Tardigrade-MOOSE.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational materials science',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause for this workflow repository; solver dependencies are separate',
  repository: 'https://github.com/lanl-aea/tardigrade-examples',
  officialUrl: 'https://www.osti.gov/doecode/biblio/150025',
  evidenceUrl: 'https://lanl-aea.github.io/Tardigrade-examples/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'materials science', 'workflow', 'continuum mechanics'],
} satisfies Project;
