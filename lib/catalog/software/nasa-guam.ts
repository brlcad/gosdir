import type { Project } from '../types';

export default {
  id: 'nasa-guam',
  name: 'NASA Generic Urban Air Mobility (GUAM) Simulation',
  summary:
    'NASA Langley’s modular six-degree-of-freedom vehicle simulation framework for advanced air mobility research, including example controllers and demonstrations.',
  sponsor: 'NASA Langley Research Center, Aeronautics Research Mission Directorate',
  agencyIds: ['us-nasa-langley-research-center'],
  geography:
    'United States federal aeronautics research; NASA Langley Research Center, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Aerospace & flight simulation',
  openSourceYear: 2024,
  license:
    'NASA Open Source Agreement v1.3 (NASA-1.3) for NASA-authored GUAM source; MATLAB/Simulink and external software are not included',
  repository: 'https://github.com/nasa/Generic-Urban-Air-Mobility-GUAM',
  officialUrl: 'https://software.nasa.gov/software/LAR-20229-1',
  evidenceUrl: 'https://github.com/nasa/Generic-Urban-Air-Mobility-GUAM',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'aerospace', 'simulation', 'urban-air-mobility'],
} satisfies Project;
