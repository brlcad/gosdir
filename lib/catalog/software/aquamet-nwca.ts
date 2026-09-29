import type { Project } from '../types';

export default {
  id: 'aquamet-nwca',
  name: 'aquametNWCA',
  summary:
    'EPA R package for calculating wetland vegetation metrics and the multimetric index used by the National Wetlands Condition Assessment.',
  sponsor:
    'U.S. Environmental Protection Agency, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa-cphea'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license: 'CC0 (package-authored software; external data not assumed covered)',
  repository: 'https://github.com/USEPA/aquametNWCA',
  officialUrl:
    'https://cfpub.epa.gov/si/si_public_record_Report.cfm?Lab=CPHEA&dirEntryId=365263',
  evidenceUrl:
    'https://github.com/USEPA/aquametNWCA/commit/4aaae0ebad9b8298d70927ce76abc12e921ba443',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'wetlands', 'vegetation metrics', 'r package'],
} satisfies Project;
