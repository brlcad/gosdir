import type { Project } from '../types';

export default {
  id: 'uk-desnz-esos',
  name: 'Energy Savings Opportunity Scheme (ESOS)',
  summary:
    'Energy Savings Opportunity Scheme (ESOS) digital reporting service application, including web, API and supporting components.',
  sponsor:
    'Environment Agency (administers ESOS on behalf of the UK regulators); Department for Energy Security and Net Zero (policy lead and offshore authority)',
  agencyIds: [
    'uk-environment-agency',
    'uk-department-for-energy-security-and-net-zero',
  ],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Energy policy and regulatory compliance',
  openSourceYear: 2024,
  license: 'Apache-2.0',
  repository: 'https://github.com/ukgovernmentbeis/esos',
  officialUrl:
    'https://www.gov.uk/guidance/energy-savings-opportunity-scheme-esos',
  evidenceUrl:
    'https://www.gov.uk/government/publications/comply-with-the-energy-savings-opportunity-scheme-esos-phase-4',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'Environment Agency',
    'DESNZ',
    'Energy',
    'Savings',
    'Opportunity',
    'Scheme',
    'ESOS',
  ],
} satisfies Project;
