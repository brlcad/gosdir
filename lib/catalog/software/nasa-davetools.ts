import type { Project } from '../types';

export default {
  id: 'nasa-davetools',
  name: 'DAVEtools',
  summary:
    'NASA Langley’s Java toolkit for validating and manipulating Dynamic Aerospace Vehicle Exchange Markup Language (DAVE-ML) models and using them in MATLAB and Simulink.',
  sponsor: 'NASA Langley Research Center (LaRC), software designation LAR-17460-1',
  agencyIds: ['us-nasa-langley-research-center'],
  geography: 'United States federal aeronautics research; NASA Langley Research Center, Hampton, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Flight dynamics & simulation',
  openSourceYear: 2011,
  license: 'NASA Open Source Agreement v1.3 (NASA-1.3) for DAVEtools source; bundled third-party libraries retain separate terms',
  repository: 'https://github.com/nasa/DAVEtools',
  officialUrl: 'https://software.nasa.gov/software/LAR-17460-1',
  evidenceUrl: 'https://github.com/nasa/DAVEtools/blob/master/README.adoc',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'flight-dynamics', 'simulation', 'aerospace'],
} satisfies Project;
