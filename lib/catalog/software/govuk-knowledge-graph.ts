import type { Project } from '../types';

export default {
  id: 'govuk-knowledge-graph',
  name: 'GOV.UK Knowledge Graph',
  summary:
    'GDS data-engineering pipeline and BigQuery infrastructure for structured GOV.UK content analysis and GovSearch.',
  sponsor: 'Government Digital Service, GOV.UK Insights and Analytics',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Data engineering',
  openSourceYear: 2022,
  license:
    'MIT (public pipeline and infrastructure source; hosted data access is restricted)',
  repository: 'https://github.com/alphagov/govuk-knowledge-graph-gcp',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/govuk-knowledge-graph-gcp.html',
  evidenceUrl:
    'https://github.com/alphagov/govuk-knowledge-graph-gcp/commit/31fa5d6f05c957cef82bb8518b22827555e4cd97',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'analytics', 'bigquery'],
} satisfies Project;
