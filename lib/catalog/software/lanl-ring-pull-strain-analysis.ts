import type { Project } from '../types';

export default {
  id: 'lanl-ring-pull-strain-analysis',
  name: 'Ring Pull Strain Analysis',
  summary:
    'Python analysis software and tutorials for extracting hoop strain from digital-image-correlation and simulation data for ring-pull tests, including nuclear fuel cladding.',
  sponsor:
    'Los Alamos National Laboratory; DOE/NNSA contract 89233218CNA000001; LANL release O4706; associated DOE Advanced Fuels Campaign / Idaho Operations Office research',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear energy & materials testing',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for repository analysis source; commercial VIC-2D software and external sample/test data are excluded',
  repository: 'https://github.com/lanl/RingPullStrainAnalysis',
  officialUrl: 'https://github.com/lanl/RingPullStrainAnalysis',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/2998228',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'nuclear fuel',
    'materials testing',
    'strain analysis',
    'python',
  ],
} satisfies Project;
