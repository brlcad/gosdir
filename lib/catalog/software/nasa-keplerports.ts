import type { Project } from '../types';

export default {
  id: 'nasa-keplerports',
  name: 'Kepler Planet Occurrence Rate Tools (KeplerPORTs)',
  summary:
    'NASA Ames’s Python tools for producing detection-contour plots from public Kepler planet-occurrence-rate data products.',
  sponsor:
    'NASA Ames Research Center, with SETI Institute authorship under Cooperative Agreement NNX13AD01A',
  agencyIds: ['us-nasa-ames-research-center'],
  geography:
    'United States federal astronomy and exoplanet science; NASA Kepler mission data products',
  jurisdiction: 'U.S. federal',
  domain: 'Astronomy & exoplanet science',
  openSourceYear: 2017,
  license:
    'NASA Open Source Agreement v1.3 (NASA-1.3) for KeplerPORTs code; sample data files and Python dependencies have separate terms',
  repository: 'https://github.com/nasa/KeplerPORTs',
  officialUrl: 'https://software.nasa.gov/software/ARC-17979-1',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20170009554',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'ames', 'kepler', 'astronomy', 'exoplanets', 'python'],
} satisfies Project;
