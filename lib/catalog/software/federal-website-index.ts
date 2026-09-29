import type { Project } from '../types';

export default {
  id: 'federal-website-index',
  name: 'Federal Website Index Builder',
  summary:
    'The open-source data pipeline that assembles the Federal Website Index used as the target list for GSA’s daily Site Scanning service.',
  sponsor:
    'General Services Administration, Technology Transformation Services, Site Scanning Program',
  agencyIds: ['us-gsa-tts'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data & analytics',
  openSourceYear: 2022,
  license: 'CC0-1.0',
  repository: 'https://github.com/GSA/federal-website-index',
  officialUrl: 'https://digital.gov/guides/site-scanning',
  evidenceUrl: 'https://digital.gov/guides/site-scanning/technical-details',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['gsa', 'federal websites', 'data pipeline', 'site scanning'],
} satisfies Project;
