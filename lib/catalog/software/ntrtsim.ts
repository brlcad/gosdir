import type { Project } from '../types';

export default {
  id: 'ntrtsim',
  name: 'NASA Tensegrity Robotics Toolkit Simulator (NTRTsim)',
  summary:
    'NASA Ames C++/MATLAB toolkit and physics-based simulator for modeling, designing, simulating, and controlling tensegrity robots.',
  sponsor: 'NASA Ames Research Center, Dynamic Tensegrity Robotics Lab',
  agencyIds: ['us-nasa-ames-research-center', 'us-nasa'],
  geography: 'United States federal research software developed at NASA Ames Research Center, California',
  jurisdiction: 'U.S. federal',
  domain: 'Robotics and autonomous systems',
  openSourceYear: 2014,
  license: 'Apache-2.0 for NTRTsim source; third-party dependencies retain their own licenses',
  repository: 'https://github.com/NASA-Tensegrity-Robotics-Toolkit/NTRTsim',
  officialUrl: 'https://software.nasa.gov/software/ARC-17093-1',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20140010928',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'ames', 'robotics', 'tensegrity', 'simulation', 'autonomous systems'],
} satisfies Project;
