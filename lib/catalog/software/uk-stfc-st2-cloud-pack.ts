import type { Project } from '../types';

export default {
  id: 'uk-stfc-st2-cloud-pack',
  name: 'STFC Cloud StackStorm OpenStack Pack',
  summary:
    'A StackStorm pack of OpenStack automation actions and workflows for day-to-day STFC Cloud management.',
  sponsor:
    'UK Research and Innovation (UKRI), Science and Technology Facilities Council (STFC), Scientific Computing Department (SCD Cloud team).',
  agencyIds: ['uk-stfc', 'uk-ukri'],
  geography: 'United Kingdom (STFC Cloud private IaaS operated for SCD users)',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure automation',
  openSourceYear: 2025,
  license: 'GPL-3.0-only',
  repository: 'https://github.com/stfc/st2-cloud-pack',
  officialUrl: 'https://openstack.stfc.ac.uk/auth/login/',
  evidenceUrl:
    'https://github.com/stfc/st2-cloud-pack/blob/main/docs/DEVELOPER_NOTES.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united kingdom',
    'ukri',
    'stfc',
    'cloud infrastructure',
    'openstack',
    'stackstorm',
    'automation',
  ],
} satisfies Project;
