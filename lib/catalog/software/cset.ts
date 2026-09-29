import type { Project } from '../types';

export default {
  id: 'cset',
  name: 'Cyber Security Evaluation Tool',
  summary:
    'A desktop application for assessing operational-technology and information-technology cybersecurity against recognized standards.',
  sponsor:
    'Cybersecurity and Infrastructure Security Agency and Idaho National Laboratory',
  agencyIds: ['us-cisa', 'us-doe-idaho-national-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity',
  openSourceYear: 2019,
  license: 'MIT (separately identified Apache-2.0 components)',
  repository: 'https://github.com/cisagov/cset',
  officialUrl: 'https://www.cisa.gov/stopransomware/services',
  evidenceUrl:
    'https://www.cisa.gov/sites/default/files/2024-01/23_0531_CISA_CSET_Factsheet_Final_508.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: [
    'united states',
    'cybersecurity',
    'assessment',
    'critical infrastructure',
  ],
} satisfies Project;
