import type { Project } from '../types';

export default {
  id: 'epa-webcms',
  name: 'EPA WebCMS',
  summary:
    'A Drupal-based content management system for publishing and operating the EPA website.',
  sponsor: 'U.S. Environmental Protection Agency, Office of Mission Support',
  agencyIds: ['us-epa'],
  geography:
    'United States federal agency web publishing for epa.gov and related EPA properties',
  jurisdiction: 'U.S. federal',
  domain: 'Government web publishing and content management',
  openSourceYear: 2026,
  license:
    'MIT for this repository source; Drupal core and contributed modules retain their own licenses',
  repository: 'https://github.com/USEPA/webcms',
  officialUrl: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P101FUQK.TXT',
  evidenceUrl:
    'https://www.epa.gov/web-policies-and-procedures/procedure-epa-public-web-snapshots',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'epa',
    'office of mission support',
    'webcms',
    'drupal',
    'web publishing',
  ],
} satisfies Project;
