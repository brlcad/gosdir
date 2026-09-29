import type { Project } from '../types';

export default {
  id: 'localgov-drupal',
  name: 'LocalGov Drupal',
  summary:
    'A shared Drupal distribution and install profile developed with UK councils to help local authorities publish public-facing websites.',
  sponsor:
    'UK Ministry of Housing, Communities and Local Government Local Digital Fund and participating councils; community stewarded by Open Digital Cooperative',
  agencyIds: ['uk-mhclg'],
  geography: 'United Kingdom (local government)',
  jurisdiction: 'International',
  domain: 'Digital services & publishing',
  openSourceYear: 2020,
  license: 'GPL-2.0-or-later',
  repository: 'https://git.drupalcode.org/project/localgov',
  officialUrl: 'https://localgovdrupal.org/',
  evidenceUrl:
    'https://www.localdigital.gov.uk/funded-project/localgov-drupal-beta/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['uk', 'local government', 'council websites', 'publishing'],
} satisfies Project;
