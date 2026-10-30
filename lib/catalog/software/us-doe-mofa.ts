import type { Project } from '../types';

export default {
  id: 'us-doe-mofa',
  name: 'MoFA',
  summary:
    'The Method of Finite Averages, a modeling tool for flow and transport in heterogeneous porous media.',
  sponsor:
    'U.S. Department of Energy, Lawrence Livermore National Laboratory (LLNL).',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography: 'Livermore, California, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Multiscale modeling and porous-media flow',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/pietrzyk1/MoFA',
  officialUrl: 'https://github.com/pietrzyk1/MoFA',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/165260',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'lawrence-livermore',
    'modeling',
    'porous media',
    'scientific computing',
  ],
} satisfies Project;
