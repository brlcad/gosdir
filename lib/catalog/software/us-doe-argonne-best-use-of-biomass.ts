import type { Project } from '../types';

export default {
  id: 'us-doe-argonne-best-use-of-biomass',
  name: 'Best Use of Biomass',
  summary:
    'An Argonne Python framework for evaluating biomass feedstock and product pathways.',
  sponsor:
    'U.S. Department of Energy Office of Science through Argonne National Laboratory; a 2026 study using the exact project also acknowledges DOE EERE/Bioenergy Technologies Office support',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography: 'United States; Argonne National Laboratory, Lemont, Illinois',
  jurisdiction: 'U.S. federal',
  domain: 'Bioenergy and biomass systems analysis',
  openSourceYear: 2021,
  license:
    'MIT (current repository software; earlier public source was GPL-3.0; external datasets and dependencies are excluded)',
  repository: 'https://github.com/Saurajyoti/BestBiomassUse',
  officialUrl: 'https://github.com/Saurajyoti/BestBiomassUse',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/160429',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['united states', 'doe', 'argonne', 'bioenergy', 'biomass'],
} satisfies Project;
