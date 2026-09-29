import type { Project } from '../types';

export default {
  id: 'nasa-giant',
  name: 'Goddard Image Analysis and Navigation Tool (GIANT)',
  summary:
    'NASA Goddard’s Python suite for optical navigation, camera calibration, relative navigation, and mission-image processing.',
  sponsor: 'NASA Goddard Space Flight Center',
  agencyIds: ['us-nasa-goddard-space-flight-center'],
  geography:
    'United States federal aerospace research and mission operations; NASA Goddard Space Flight Center, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Spaceflight & optical navigation',
  openSourceYear: 2021,
  license:
    'Apache-2.0 for the nasa/giant source repository; third-party dependencies are separately licensed',
  repository: 'https://github.com/nasa/giant',
  officialUrl: 'https://software.nasa.gov/software/GSC-19381-1',
  evidenceUrl: 'https://techport.nasa.gov/projects/93240',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'goddard', 'optical-navigation', 'spaceflight', 'python'],
} satisfies Project;
