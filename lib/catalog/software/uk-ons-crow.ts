import type { Project } from '../types';

export default {
  id: 'uk-ons-crow',
  name: 'Clerical Resolution Online Widget (CROW)',
  summary:
    'ONS tool for clerical review of linked record pairs in data-linkage programmes.',
  sponsor:
    'Office for National Statistics (ONS), Data Linkage and Integration Hub',
  agencyIds: ['uk-office-for-national-statistics'],
  geography:
    'England and Wales (ONS Census 2021 and national linkage programmes)',
  jurisdiction: 'International',
  domain: 'Record linkage and data quality',
  openSourceYear: 2021,
  license:
    'MIT (repository software; linked administrative records and third-party dependencies are outside the grant)',
  repository: 'https://github.com/onsdigital/ons-crow',
  officialUrl:
    'https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandwellbeing/methodologies/2021censuslinkagetodwpmasterkeyandencryptednino',
  evidenceUrl:
    'https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandwellbeing/methodologies/2021censuslinkagetodwpmasterkeyandencryptednino',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united kingdom', 'ons', 'record linkage', 'census', 'data quality'],
} satisfies Project;
