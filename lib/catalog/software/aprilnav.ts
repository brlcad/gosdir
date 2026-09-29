import type { Project } from '../types';

export default {
  id: 'aprilnav',
  name: 'AprilNav',
  summary:
    'NASA Marshall indoor navigation and localization system using ceiling-mounted AprilTags and a camera to support autonomous robotic testbed operation.',
  sponsor:
    'NASA Marshall Space Flight Center (MSFC), Space Systems Department / Advanced Concepts Office and Robotic Lab',
  agencyIds: ['us-nasa-marshall-space-flight-center', 'us-nasa'],
  geography:
    'United States federal research and robotic test operations at NASA Marshall Space Flight Center, Huntsville, Alabama',
  jurisdiction: 'U.S. federal',
  domain: 'Robotics and autonomous systems',
  openSourceYear: 2018,
  license:
    'GNU Lesser General Public License v2.1 (LGPL-2.1) for the AprilTags-derived source and NASA adaptations',
  repository: 'https://github.com/nasa/AprilNav',
  officialUrl: 'https://software.nasa.gov/software/MFS-33648-1',
  evidenceUrl:
    'https://ntrs.nasa.gov/citations/20180004204',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'marshall', 'robotics', 'navigation', 'localization'],
} satisfies Project;
