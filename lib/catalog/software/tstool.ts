import type { Project } from '../types';

export default {
  id: 'tstool',
  name: 'TSTool',
  summary:
    'Colorado’s time-series and data-processing application for water-resource analysis and model preparation.',
  sponsor: 'Colorado Water Conservation Board and Division of Water Resources',
  agencyIds: ['us-co-cwcb', 'us-co-dwr'],
  geography: 'Colorado, United States',
  jurisdiction: 'U.S. state',
  domain: 'Water management',
  openSourceYear: 2019,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/OpenCDSS/cdss-app-tstool-main',
  officialUrl: 'https://opencdss.state.co.us/opencdss/tstool/',
  evidenceUrl: 'https://dwr.colorado.gov/services/data-information',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'colorado', 'water', 'time series'],
} satisfies Project;
