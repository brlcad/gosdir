import type { Project } from '../types';

export default {
  id: 'scubagear',
  name: 'ScubaGear',
  summary:
    'An automated tool for assessing Microsoft 365 tenant settings against CISA secure-configuration baselines.',
  sponsor: 'Cybersecurity and Infrastructure Security Agency',
  agencyIds: ['us-cisa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity',
  openSourceYear: 2022,
  license: 'CC0-1.0 (unless a component states otherwise)',
  repository: 'https://github.com/cisagov/ScubaGear',
  officialUrl:
    'https://www.cisa.gov/resources-tools/services/secure-cloud-business-applications-scuba-project',
  evidenceUrl:
    'https://www.cisa.gov/sites/default/files/2025-04/CSSO-SCuBA-FAQ-FINAL_508c.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'cybersecurity', 'cloud', 'microsoft 365'],
} satisfies Project;
