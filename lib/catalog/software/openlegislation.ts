import type { Project } from '../types';

export default {
  id: 'openlegislation',
  name: 'OpenLegislation',
  summary:
    'The New York State Senate public API for bills, resolutions, laws, calendars, and other legislative information.',
  sponsor: 'New York State Senate',
  agencyIds: ['us-ny-senate'],
  geography: 'New York, United States',
  jurisdiction: 'U.S. state',
  domain: 'Civic information',
  openSourceYear: 2010,
  license: 'BSD or GPL-3.0 for Senate-created code',
  repository: 'https://github.com/nysenate/OpenLegislation',
  officialUrl: 'https://legislation.nysenate.gov/',
  evidenceUrl:
    'https://www.nysenate.gov/newsroom/articles/2010/open-legislation-project-goes-github',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'new york', 'legislation', 'api'],
} satisfies Project;
