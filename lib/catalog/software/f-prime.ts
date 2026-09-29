import type { Project } from '../types';

export default {
  id: 'f-prime',
  name: 'F´ (F Prime)',
  summary:
    'A component-driven flight-software framework used by NASA missions and small spacecraft to build embedded flight systems.',
  sponsor: 'NASA Jet Propulsion Laboratory',
  agencyIds: ['us-nasa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2017,
  license: 'Apache-2.0',
  repository: 'https://github.com/nasa/fprime',
  officialUrl: 'https://fprime.jpl.nasa.gov/',
  evidenceUrl:
    'https://github.com/nasa/Open-Source-Catalog/blob/15f82a43b0219a76350f39110fd4978b99ec5e86/catalog.json#L4428-L4446',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['nasa', 'flight software', 'spacecraft'],
} satisfies Project;
