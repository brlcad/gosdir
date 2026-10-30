import type { Project } from '../types';

export default {
  id: 'us-epa-global-aq-rft',
  name: 'globalAQ_rft',
  summary:
    'An R-based reduced-form tool developed by the EPA Office of Atmospheric Protection for estimating country-level ozone/PM2.5 exposure and future health impacts.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Atmospheric Protection',
  agencyIds: ['us-epa', 'us-epa-oap-capd'],
  geography: 'Global, country-level air-quality and health-impact estimates',
  jurisdiction: 'U.S. federal',
  domain: 'Air quality & public health',
  openSourceYear: 2025,
  license: 'MIT for software code; CC BY 4.0 for data and figures',
  repository: 'https://github.com/USEPA/globalAQ_rft',
  officialUrl: 'https://github.com/USEPA/globalAQ_rft',
  evidenceUrl: 'https://pubs.acs.org/doi/10.1021/acs.est.5c14713',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'air quality', 'public health', 'modeling', 'r'],
} satisfies Project;
