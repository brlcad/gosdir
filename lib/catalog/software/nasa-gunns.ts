import type { Project } from '../types';

export default {
  id: 'nasa-gunns',
  name: 'General-Use Nodal Network Solver (GUNNS)',
  summary:
    'NASA Johnson’s reusable C++ library and toolset for modeling fluid, thermal, and electrical flow networks through nodal analysis.',
  sponsor: 'NASA Johnson Space Center, Simulation & Robotics Division',
  agencyIds: ['us-nasa-johnson-space-center'],
  geography:
    'United States federal human-spaceflight modeling and simulation; NASA Johnson Space Center, Texas',
  jurisdiction: 'U.S. federal',
  domain: 'Spaceflight & engineering simulation',
  openSourceYear: 2021,
  license:
    'NASA Open Source Agreement v1.3 (NASA-1.3) for GUNNS Version 19; the complete simulation environment and external Trick/sim-bus components are not included',
  repository: 'https://github.com/nasa/gunns',
  officialUrl: 'https://software.nasa.gov/software/MSC-26727-1',
  evidenceUrl: 'https://www.nasa.gov/reference/jsc-simulation-modeling/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'johnson', 'simulation', 'c++', 'engineering'],
} satisfies Project;
