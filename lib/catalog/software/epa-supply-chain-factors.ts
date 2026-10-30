import type { Project } from '../types';

export default {
  id: 'epa-supply-chain-factors',
  name: 'Supply Chain Greenhouse Gas Emission Factors',
  summary:
    'R Markdown workflows and scripts for generating supply-chain greenhouse-gas emission-factor datasets.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Tools for Industrial Ecology Modeling (TIEM)',
  agencyIds: ['us-epa-ord'],
  geography: 'U.S. commodities classified at the six-digit NAICS level',
  jurisdiction: 'U.S. federal',
  domain: 'Climate and economic data',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/USEPA/supply-chain-factors',
  officialUrl: 'https://doi.org/10.23719/1531143',
  evidenceUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'greenhouse gas', 'supply chain', 'industrial ecology'],
} satisfies Project;
