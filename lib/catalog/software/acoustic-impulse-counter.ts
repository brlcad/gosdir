import type { Project } from '../types';

export default {
  id: 'acoustic-impulse-counter',
  name: 'Acoustic Impulse Counter',
  summary:
    'A USGS MATLAB software release that counts gravel and cobble collision impulses in river hydrophone recordings to support sediment-transport analysis.',
  sponsor: 'U.S. Geological Survey, Washington Water Science Center',
  agencyIds: ['us-usgs-washington-water-science-center'],
  geography: 'United States (Washington)',
  jurisdiction: 'U.S. federal',
  domain: 'Water management',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/acoustic-bedload-monitoring/acoustic-impulse-counter',
  officialUrl: 'https://www.usgs.gov/software/matlab-code-count-acoustic-impulses-coarse-sediment-particle-collisions-during-sediment',
  evidenceUrl: 'https://code.usgs.gov/acoustic-bedload-monitoring/acoustic-impulse-counter/-/raw/main/LICENSE.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'sediment transport', 'hydrophone', 'matlab'],
} satisfies Project;
