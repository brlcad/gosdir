import type { Project } from '../types';

export default {
  id: 'epa-telss',
  name: 'Theoretical Equilibrium Lead Solubility Simulator (TELSS)',
  summary:
    'An R/Shiny application for estimating lead solubility under specified drinking-water chemistry conditions.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Cincinnati',
  agencyIds: ['us-epa-ord'],
  geography:
    'Drinking-water lead chemistry; calculations use user-specified conditions rather than a fixed local dataset',
  jurisdiction: 'U.S. federal',
  domain: 'Drinking water and chemical modeling',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/USEPA/TELSS',
  officialUrl:
    'https://www.epa.gov/emergency-response-research/drinking-water-tools',
  evidenceUrl:
    'https://catalog.data.gov/dataset/theoretical-equilibrium-lead-solubility-revisited-open-source-code-and-practical-relations',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'lead', 'drinking water', 'r', 'shiny'],
} satisfies Project;
