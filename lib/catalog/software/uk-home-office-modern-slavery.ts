import type { Project } from '../types';

export default {
  id: 'uk-home-office-modern-slavery',
  name: 'Modern Slavery First Responder Referral Form',
  summary:
    'The Home Office National Referral Mechanism online referral form for first responders, with a save-and-return workflow.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom (with the Duty to Notify pathway limited to England and Wales)',
  jurisdiction: 'International',
  domain: 'Safeguarding and social services',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/modern-slavery',
  officialUrl:
    'https://www.gov.uk/guidance/report-modern-slavery-as-a-first-responder',
  evidenceUrl:
    'https://www.gov.uk/guidance/report-modern-slavery-as-a-first-responder',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Modern Slavery', 'Safeguarding'],
} satisfies Project;
