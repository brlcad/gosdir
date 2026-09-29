import type { Project } from '../types';

export default {
  id: 'govuk-pay',
  name: 'GOV.UK Pay',
  summary:
    'Shared public-sector payment service for card, digital-wallet, phone, and recurring payments; the linked repository is one of 11 separately MIT-licensed application components.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Payments',
  openSourceYear: 2015,
  license:
    'MIT (11 first-party application components; each licensed separately)',
  repository: 'https://github.com/govuk-pay/pay-frontend',
  officialUrl: 'https://www.payments.service.gov.uk/',
  evidenceUrl: 'https://docs.payments.service.gov.uk/contribute/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'payments', 'shared service', 'public services'],
} satisfies Project;
