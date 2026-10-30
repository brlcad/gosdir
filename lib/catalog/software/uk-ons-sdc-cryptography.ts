import type { Project } from '../types';

export default {
  id: 'uk-ons-sdc-cryptography',
  name: 'SDC Cryptography',
  summary:
    'A reusable Python/JWE encryption library for ONS Survey Data Collection services.',
  sponsor: 'Office for National Statistics (ONS), Survey Data Collection',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS survey data collection services)',
  jurisdiction: 'International',
  domain: 'Cryptography and security',
  openSourceYear: 2017,
  license:
    'MIT (repository software/code and associated documentation; separately bundled third-party dependencies or data are not covered)',
  repository: 'https://github.com/ONSdigital/sdc-cryptography',
  officialUrl: 'https://pypi.org/project/sdc-cryptography/',
  evidenceUrl:
    'https://github.com/ONSdigital/sdc-cryptography/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'python',
    'cryptography',
    'encryption',
    'survey data',
  ],
} satisfies Project;
