import type { Project } from '../types';

export default {
  id: 'us-doe-stor4build',
  name: 'Stor4Build',
  summary:
    'A software toolkit for modeling thermal energy storage in buildings.',
  sponsor:
    'U.S. Department of Energy Building Technologies Office; Lawrence Berkeley, Oak Ridge, and National Laboratory of the Rockies consortium',
  agencyIds: [
    'us-doe',
    'us-doe-lawrence-berkeley-national-laboratory',
    'us-doe-oak-ridge-national-laboratory',
    'us-doe-national-laboratory-of-the-rockies',
  ],
  geography:
    'DOE multi-lab consortium spanning Berkeley, California; Oak Ridge, Tennessee; and Golden, Colorado; software is not geographically restricted',
  jurisdiction: 'U.S. federal',
  domain: 'Buildings & thermal energy storage',
  openSourceYear: 2024,
  license: 'BSD-3-Clause for the Stor4Build project source',
  repository: 'https://github.com/Stor4Build/stor4build',
  officialUrl: 'https://www.energy.gov/cmei/buildings/stor4build',
  evidenceUrl: 'https://impact.ornl.gov/en/publications/stor4build/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'buildings', 'thermal energy storage', 'modeling'],
} satisfies Project;
