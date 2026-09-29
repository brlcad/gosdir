import type { Project } from '../types';

export default {
  id: 'hmrc-manuals-api',
  name: 'HMRC Manuals API',
  summary:
    'GDS-operated publishing integration used by HMRC to publish tax manuals and sections to GOV.UK.',
  sponsor:
    'HM Revenue & Customs (HMRC), with GOV.UK publishing-platform stewardship by Government Digital Service (GDS)',
  agencyIds: ['uk-hm-revenue-customs', 'uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Government publishing APIs',
  openSourceYear: 2016,
  license: 'MIT',
  repository: 'https://github.com/alphagov/hmrc-manuals-api',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/hmrc-manuals-api.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/hmrc-manuals-api/extended_documentation.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'hmrc', 'gov.uk', 'publishing api', 'tax manuals'],
} satisfies Project;
