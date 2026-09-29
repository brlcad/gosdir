import type { Project } from '../types';

export default {
  id: 'nasa-delta',
  name: 'DELTA (Deep Earth Learning, Tools, and Analysis)',
  summary:
    'NASA Ames’s installable Python toolkit for training and applying deep-learning classifiers to satellite imagery, including flood mapping and disaster-response workflows.',
  sponsor: 'NASA Ames Research Center, Intelligent Robotics Group',
  agencyIds: ['us-nasa-ames-research-center'],
  geography: 'United States federal Earth-science research; NASA Ames Research Center, Mountain View, California',
  jurisdiction: 'U.S. federal',
  domain: 'Remote sensing & machine learning',
  openSourceYear: 2020,
  license: 'Apache-2.0 for DELTA source; dependencies and training imagery retain their separate terms',
  repository: 'https://github.com/nasa/delta',
  officialUrl: 'https://software.nasa.gov/software/ARC-18446-1',
  evidenceUrl: 'https://github.com/nasa/delta/blob/master/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'ames', 'earth-science', 'remote-sensing', 'machine-learning'],
} satisfies Project;
