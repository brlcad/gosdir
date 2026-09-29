import type { Project } from '../types';

export default {
  id: 'nasa-kodiak',
  name: 'NASA Langley Kodiak Nonlinear Arithmetic Library',
  summary:
    'NASA Langley’s C++ library for nonlinear-real-arithmetic verification, including its integrated Boolean Checker module.',
  sponsor: 'NASA Langley Research Center, Formal Methods Research Program',
  agencyIds: ['us-nasa-langley-research-center'],
  geography:
    'United States federal aerospace software verification and formal-methods research; NASA Langley Research Center, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Aerospace & formal methods',
  openSourceYear: 2020,
  license:
    'NASA Open Source Agreement v1.3 for the Kodiak core library (LAR-18517; first verified grant-bearing repo snapshot in 2020); the integrated Boolean Checker module has a separate NOSA v1.3 grant (LAR-19222; first verified with module source in 2017); third-party dependencies are separate',
  repository: 'https://github.com/nasa/Kodiak',
  officialUrl: 'https://software.nasa.gov/software/LAR-18268-1',
  evidenceUrl: 'https://software.nasa.gov/software/LAR-18268-1',
  status: 'Maintained',
  verified: '2026-09-29',
  tags: ['nasa', 'langley', 'formal-methods', 'verification', 'cpp'],
} satisfies Project;
