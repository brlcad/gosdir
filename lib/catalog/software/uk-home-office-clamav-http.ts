import type { Project } from '../types';

export default {
  id: 'uk-home-office-clamav-http',
  name: 'ClamAV HTTP',
  summary:
    'clamav-http, a Home Office ClamAV malware-scanning HTTP API service with a Helm chart and signature mirror.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cybersecurity and malware scanning',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/clamav-http',
  officialUrl: 'https://github.com/UKHomeOffice/clamav-http',
  evidenceUrl:
    'https://github.com/UKHomeOffice/clamav-http/releases/tag/v0.5.5',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'ClamAV', 'Security'],
} satisfies Project;
