import type { Project } from '../types';

export default {
  id: 'alaska-landbird-trends',
  name: 'Alaska Landbird Population Trend Analysis',
  summary:
    'A USGS R/NIMBLE software release with three Bayesian models for estimating Alaskan breeding-landbird trends from monitoring-survey data.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2026,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/alaska-landbird-monitoring-survey-population-trend-analysis',
  officialUrl:
    'https://www.usgs.gov/software/alaska-landbird-monitoring-survey-population-trend-analysis',
  evidenceUrl:
    'https://code.usgs.gov/asc/alaska-landbird-monitoring-survey-population-trend-analysis/-/raw/main/LICENSE.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'landbirds', 'population trends', 'r'],
} satisfies Project;
