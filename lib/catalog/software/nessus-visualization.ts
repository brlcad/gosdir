import type { Project } from '../types';

export default {
  id: 'nessus-visualization',
  name: 'Nessus Visualization',
  summary:
    'A browser-based tool for exploring Nessus vulnerability scan (.nbe) files through interactive visualizations.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL); DOE contract AC05-00OR22725',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity and vulnerability visualization',
  openSourceYear: 2012,
  license:
    'MIT (NV repository source; external libraries and separately served software are outside scope)',
  repository: 'https://github.com/ornl-sava/nv',
  officialUrl: 'https://ornl-sava.github.io/nv/',
  evidenceUrl: 'https://ornl-sava.github.io/nv/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'cybersecurity',
    'vulnerability scanning',
    'visualization',
  ],
} satisfies Project;
