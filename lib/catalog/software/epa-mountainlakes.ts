import type { Project } from '../types';

export default {
  id: 'epa-mountainlakes',
  name: 'MountainLakes',
  summary:
    'An R package and analysis workflows for assessing mountain-lake conditions with National Aquatic Resource Surveys data.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa', 'us-epa-ord'],
  geography: 'United States; mountain lakes assessed through NARS',
  jurisdiction: 'U.S. federal',
  domain: 'Aquatic ecology and water quality',
  openSourceYear: 2025,
  license:
    'GPL-3.0 for the package source; dependencies and article are separately licensed',
  repository: 'https://github.com/USEPA/MountainLakes',
  officialUrl:
    'https://www.epa.gov/water-research/national-aquatic-resource-surveys-nars-research',
  evidenceUrl: 'https://doi.org/10.1016/j.ecolind.2025.113402',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'nars', 'lakes', 'water quality', 'r'],
} satisfies Project;
