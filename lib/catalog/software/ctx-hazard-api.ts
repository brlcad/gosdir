import type { Project } from '../types';

export default {
  id: 'ctx-hazard-api',
  name: 'CTX Hazard API',
  summary:
    'The EPA service for retrieving human and ecological toxicology data from its computational-toxicity resources.',
  sponsor:
    'EPA Office of Research and Development, Center for Computational Toxicology and Exposure',
  agencyIds: ['us-epa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/USEPA/ccte-api-hazard',
  officialUrl:
    'https://www.epa.gov/comptox-tools/computational-toxicology-and-exposure-apis-data-domains',
  evidenceUrl:
    'https://www.epa.gov/comptox-tools/computational-toxicology-and-exposure-apis',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'epa', 'toxicology', 'api'],
} satisfies Project;
