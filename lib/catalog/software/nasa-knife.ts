import type { Project } from '../types';

export default {
  id: 'nasa-knife',
  name: 'Knife v1.0 Boolean Subtraction Library for Polyhedra',
  summary:
    'NASA Langley’s C library for Boolean subtraction of watertight triangular polyhedra in near-field sonic-boom prediction workflows.',
  sponsor: 'NASA Langley Research Center',
  agencyIds: ['us-nasa-langley-research-center'],
  geography:
    'United States federal aerospace research and sonic-boom prediction; NASA Langley Research Center, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Aerospace & engineering simulation',
  openSourceYear: 2017,
  license:
    'Apache-2.0 for Knife repository-authored source; external dependencies and consuming FUN3D components are separate',
  repository: 'https://github.com/nasa/knife',
  officialUrl: 'https://software.nasa.gov/software/LAR-17481-1',
  evidenceUrl: 'https://github.com/nasa/knife/blob/master/INSTALL',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'aerospace', 'geometry', 'c'],
} satisfies Project;
