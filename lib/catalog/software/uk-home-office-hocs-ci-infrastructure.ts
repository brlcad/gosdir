import type { Project } from '../types';

export default {
  id: 'uk-home-office-hocs-ci-infrastructure',
  name: 'HOCS CI and Local Development Infrastructure',
  summary:
    'Reusable CI and local development infrastructure for Home Office Correspondence System (HOCS/DECS) service repositories.',
  sponsor: 'Home Office, Correspondence Services',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tooling and CI/CD',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/hocs-ci-infrastructure',
  officialUrl: 'https://ukhomeoffice.github.io/hocs/get-started/',
  evidenceUrl:
    'https://github.com/UKHomeOffice/hocs-ci-infrastructure/releases/tag/1.6.0',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'HOCS', 'CI/CD'],
} satisfies Project;
