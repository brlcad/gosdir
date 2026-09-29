import type { Project } from '../types';

export default {
  id: 'statemod',
  name: 'StateMod',
  summary:
    'Colorado’s water-allocation model for simulating surface-water operations and administration.',
  sponsor: 'Colorado Water Conservation Board and Division of Water Resources',
  agencyIds: ['us-co-cwcb', 'us-co-dwr'],
  geography: 'Colorado, United States',
  jurisdiction: 'U.S. state',
  domain: 'Water management',
  openSourceYear: 2017,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/OpenCDSS/cdss-app-statemod-fortran',
  officialUrl: 'https://opencdss.state.co.us/opencdss/statemod/',
  evidenceUrl: 'https://dwr.colorado.gov/services/data-information',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'colorado', 'water', 'modeling'],
} satisfies Project;
