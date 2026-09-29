import type { Project } from '../types';

export default {
  id: 'vocal-calipso',
  name: 'VOCAL (Visualization of CALIPSO)',
  summary:
    'NASA DEVELOP desktop tool for visualizing CALIPSO satellite data, annotating regions of interest, and sharing labeled findings through a researcher database.',
  sponsor: 'NASA DEVELOP National Program and the CALIPSO science team (NASA Langley release LAR-18710-1)',
  agencyIds: ['us-nasa'],
  geography: 'United States federal research software for the global CALIPSO satellite-data community',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science',
  openSourceYear: 2017,
  license: 'NASA Open Source Agreement 1.3 (NASA-1.3)',
  repository: 'https://github.com/NASA-DEVELOP/VOCAL',
  officialUrl: 'https://software.nasa.gov/software/LAR-18710-1',
  evidenceUrl: 'https://nasa-develop.github.io/VOCAL/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'earth science', 'calipso', 'satellite data', 'data visualization'],
} satisfies Project;
