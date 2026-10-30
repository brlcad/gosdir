import type { Project } from '../types';

export default {
  id: 'ornl-opensampl',
  name: 'OpenSAMPL',
  summary:
    'Python tools for collecting, loading, and visualizing clock-synchronization data using TimescaleDB storage and Grafana dashboards.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Electricity; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Time synchronization and monitoring',
  openSourceYear: 2025,
  license: 'MIT License',
  repository: 'https://github.com/ORNL/opensampl',
  officialUrl: 'https://cast.ornl.gov/news/stories/OpenSAMPL.html',
  evidenceUrl: 'https://cast.ornl.gov/news/stories/OpenSAMPL.html',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'time synchronization', 'clock monitoring', 'python'],
} satisfies Project;
