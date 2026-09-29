import type { Project } from '../types';

export default {
  id: 'apod-api',
  name: 'NASA Astronomy Picture of the Day (APOD) API',
  summary:
    'NASA Flask microservice that exposes APOD imagery metadata through a documented JSON endpoint; its legacy endpoint is scheduled to retire on 1 December 2026.',
  sponsor: 'NASA Open Innovation / Open APIs program',
  agencyIds: ['us-nasa'],
  geography: 'United States federal API service with global public developer access',
  jurisdiction: 'U.S. federal',
  domain: 'Developer APIs and astronomy',
  openSourceYear: 2015,
  license:
    'Apache-2.0 for the API microservice source; APOD media, editorial text, and the upstream website retain separate rights',
  repository: 'https://github.com/nasa/apod-api',
  officialUrl: 'https://api.nasa.gov/index.html',
  evidenceUrl: 'https://github.com/nasa/apod-api',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'api', 'astronomy', 'apod', 'developer tools'],
} satisfies Project;
