import type { Project } from '../types';

export default {
  id: 'real-twin',
  name: 'Real-Twin',
  summary:
    'A model-agnostic Python framework for generating, calibrating, and benchmarking traffic-simulation scenarios across SUMO, VISSIM, and AIMSUN.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Energy Efficiency and Renewable Energy (EERE), Vehicle Technologies Office (VTO), Energy Efficient Mobility Systems (EEMS) program, and Oak Ridge National Laboratory (ORNL)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography:
    'Oak Ridge, Tennessee, United States; scenarios cover user-selected roadway geographies',
  jurisdiction: 'U.S. federal',
  domain: 'Transportation systems and traffic microsimulation',
  openSourceYear: 2025,
  license:
    'GPL-3.0-only (current Real-Twin repository code; simulators and dependencies separately licensed)',
  repository: 'https://github.com/ORNL-Real-Sim/Real-Twin',
  officialUrl: 'https://real-twin.readthedocs.io/en/latest/',
  evidenceUrl: 'https://doi.org/10.1177/03611981251349433',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'transportation',
    'traffic simulation',
    'digital twins',
    'python',
  ],
} satisfies Project;
