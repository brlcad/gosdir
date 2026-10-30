import type { Project } from '../types';

export default {
  id: 'uk-home-office-dsa-test-harnesses',
  name: 'Home Office DSA Terraform Test Harnesses',
  summary:
    'Terraform test harnesses for Home Office data-pipeline streaming and integration tests.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom (Home Office internal engineering use)',
  jurisdiction: 'International',
  domain: 'Software testing and CI',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/dsa-test-harnesses',
  officialUrl: 'https://github.com/UKHomeOffice/dsa-test-harnesses',
  evidenceUrl:
    'https://github.com/UKHomeOffice/dsa-test-harnesses/releases/tag/v2.1.3',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Terraform', 'Testing'],
} satisfies Project;
