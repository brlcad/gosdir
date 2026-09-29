import type { Project } from '../types';

export default {
  id: 'nasa-kepler-dr25-robovetter',
  name: 'Kepler DR25 Robovetter',
  summary:
    'NASA Ames’s C++ implementation for classifying Kepler Threshold Crossing Events as planet candidates or false positives, with disposition flags and confidence scores.',
  sponsor:
    'NASA Ames Research Center, with SETI Institute authorship under Cooperative Agreement NNX13AD01A',
  agencyIds: ['us-nasa-ames-research-center'],
  geography:
    'United States federal astronomy and exoplanet science; NASA Kepler mission data products',
  jurisdiction: 'U.S. federal',
  domain: 'Astronomy & exoplanet science',
  openSourceYear: 2017,
  license:
    'NASA Open Source Agreement v1.3 (NASA-1.3) for Robovetter code; packaged Kepler inputs and result data remain separately scoped',
  repository: 'https://github.com/nasa/kepler-robovetter',
  officialUrl: 'https://software.nasa.gov/software/ARC-17981-1',
  evidenceUrl:
    'https://exoplanetarchive.ipac.caltech.edu/docs/Kepler_Data_Products_Overview.html',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'ames', 'kepler', 'astronomy', 'exoplanets', 'c++'],
} satisfies Project;
