import type { Project } from '../types';

export default {
  id: 'lanl-trees',
  name: 'Trees',
  summary:
    'A Fortran preprocessing program that builds virtual forest-fuel arrays for LANL wildfire simulators FIRETEC and QUIC-Fire.',
  sponsor:
    'Los Alamos National Laboratory Laboratory Directed Research and Development Program, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; wildfire modeling for broader use',
  jurisdiction: 'U.S. federal',
  domain: 'Environment and wildfire modeling',
  openSourceYear: 2022,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/Trees',
  officialUrl: 'https://github.com/lanl/Trees',
  evidenceUrl:
    'https://github.com/georgewoolsey/cloud2trees/blob/main/README.Rmd',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'wildfire', 'forest fuels', 'fire modeling'],
} satisfies Project;
