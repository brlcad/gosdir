import type { Project } from '../types';

export default {
  id: 'paste-html-to-govspeak',
  name: 'Paste HTML to Govspeak',
  summary:
    'GDS browser package that converts pasted HTML into Govspeak for government content-editor inputs.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Content publishing',
  openSourceYear: 2019,
  license: 'MIT (package source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/paste-html-to-govspeak',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/paste-html-to-govspeak.html',
  evidenceUrl: 'https://www.npmjs.com/package/paste-html-to-govspeak',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'javascript', 'content publishing'],
} satisfies Project;
