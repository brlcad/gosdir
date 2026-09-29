import type { Project } from '../types';

export default {
  id: 'compdam-dgd',
  name: 'CompDam Progressive Damage Analysis',
  summary:
    'NASA Langley’s Abaqus/Explicit user material model for simulating progressive damage, cracking, fiber failure, and delamination in composite structures.',
  sponsor: 'NASA Langley Research Center (LaRC)',
  agencyIds: ['us-nasa-langley-research-center', 'us-nasa'],
  geography: 'United States federal aerospace research; NASA Langley Research Center, Hampton, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2016,
  license: 'NASA Open Source Agreement version 1.3 (NOSA-1.3) for CompDam source; Abaqus is an external proprietary runtime',
  repository: 'https://github.com/nasa/CompDam_DGD',
  officialUrl: 'https://software.nasa.gov/software/LAR-18832-1',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20200002917',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'composites', 'finite-element-analysis', 'compdam'],
} satisfies Project;
