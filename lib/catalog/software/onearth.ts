import type { Project } from '../types';

export default {
  id: 'onearth',
  name: 'OnEarth',
  summary:
    'NASA software for formatting and serving standards-based, tiled georeferenced raster imagery and vectors at multiple spatial resolutions.',
  sponsor: 'Originally developed at NASA Jet Propulsion Laboratory; actively maintained by NASA Global Imagery Browse Services (GIBS)',
  agencyIds: ['us-nasa-jet-propulsion-laboratory', 'us-nasa'],
  geography: 'United States federal software serving global NASA Earth-observation imagery',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science data infrastructure',
  openSourceYear: 2013,
  license: 'Apache-2.0 for the OnEarth repository source; separately linked modules retain their own licenses',
  repository: 'https://github.com/nasa-gibs/onearth',
  officialUrl: 'https://nasa-gibs.github.io/gibs-api-docs/',
  evidenceUrl: 'https://github.com/nasa-gibs/onearth',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'jpl', 'gibs', 'earth science', 'geospatial', 'web services'],
} satisfies Project;
