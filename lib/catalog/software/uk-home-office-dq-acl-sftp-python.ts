import type { Project } from '../types';

export default {
  id: 'uk-home-office-dq-acl-sftp-python',
  name: 'Data Quality ACL SFTP Python',
  summary:
    'A Python pipeline for tracking, malware-scanning, and transferring ACL files for Home Office data-quality workflows.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Data integration and transfer',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/dq-acl-sftp-python',
  officialUrl:
    'https://quay.io/repository/ukhomeofficedigital/dq-acl-sftp-python',
  evidenceUrl:
    'https://quay.io/api/v1/repository/ukhomeofficedigital/dq-acl-sftp-python/tag/?limit=20&onlyActiveTags=true',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Python', 'Data quality'],
} satisfies Project;
