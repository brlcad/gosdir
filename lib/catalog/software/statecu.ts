import type { Project } from '../types';

export default {
  id: 'statecu',
  name: 'StateCU',
  summary:
    'Colorado’s consumptive-use model for evaluating historical and projected water use in state water-planning studies.',
  sponsor: 'Colorado Water Conservation Board and Division of Water Resources',
  agencyIds: ['us-co-cwcb', 'us-co-dwr'],
  geography: 'Colorado, United States',
  jurisdiction: 'U.S. state',
  domain: 'Water management',
  openSourceYear: 2017,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/OpenCDSS/cdss-app-statecu-fortran',
  officialUrl: 'https://opencdss.state.co.us/opencdss/statecu/',
  evidenceUrl: 'https://dwr.colorado.gov/services/data-information',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'colorado', 'water', 'modeling'],
} satisfies Project;
