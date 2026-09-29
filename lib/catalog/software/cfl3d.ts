import type { Project } from '../types';

export default {
  id: 'cfl3d',
  name: 'CFL3D',
  summary:
    'NASA Langley’s structured-grid computational fluid dynamics solver for Reynolds-averaged Navier–Stokes analysis of compressible flows.',
  sponsor: 'NASA Langley Research Center (LaRC)',
  agencyIds: ['us-nasa-langley-research-center', 'us-nasa'],
  geography: 'United States federal aerospace research; NASA Langley Research Center, Hampton, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2017,
  license: 'Apache-2.0 for repository source',
  repository: 'https://github.com/nasa/CFL3D',
  officialUrl: 'https://software.nasa.gov/software/LAR-16003-1',
  evidenceUrl: 'https://nasa.github.io/CFL3D/Cfl3dv6/nasatm-2006-214301bartels.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'computational-fluid-dynamics', 'cfl3d'],
} satisfies Project;
