import type { Project } from '../types';

export default {
  id: 'statedmi',
  name: 'StateDMI',
  summary:
    'Colorado’s data-management tool for preparing input datasets for the StateCU and StateMod water models.',
  sponsor: 'Colorado Water Conservation Board and Division of Water Resources',
  agencyIds: ['us-co-cwcb', 'us-co-dwr'],
  geography: 'Colorado, United States',
  jurisdiction: 'U.S. state',
  domain: 'Water management',
  openSourceYear: 2019,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/OpenCDSS/cdss-app-statedmi-main',
  officialUrl: 'https://opencdss.state.co.us/opencdss/statedmi/',
  evidenceUrl: 'https://dwr.colorado.gov/services/data-information',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'colorado', 'water', 'data processing'],
} satisfies Project;
