import type { Project } from '../types';

export default {
  id: 'hootenanny',
  name: 'Hootenanny',
  summary:
    'A machine-assisted map-conflation and schema-translation system funded by NGA, open-sourced in 2015, and used in government geospatial production.',
  sponsor: 'National Geospatial-Intelligence Agency',
  agencyIds: ['us-nga'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial',
  license: 'GPL-3.0',
  repository: 'https://github.com/ngageoint/hootenanny',
  officialUrl:
    'https://github.com/ngageoint/hootenanny/blob/master/docs/overview/Introduction.asciidoc',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nga', 'maps', 'conflation', 'geospatial'],
} satisfies Project;
