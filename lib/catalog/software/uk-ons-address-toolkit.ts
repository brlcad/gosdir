import type { Project } from '../types';

export default {
  id: 'uk-ons-address-toolkit',
  name: 'Address Toolkit',
  summary:
    'A PySpark library for cleaning, validating, extracting, and contextualising address data.',
  sponsor: 'Office for National Statistics (ONS), UK Government',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Address data and data quality',
  openSourceYear: 2026,
  license:
    'MIT for first-party library code; Ordnance Survey Open Names data is separately licensed under OGL v3',
  repository: 'https://github.com/ONSdigital/address-toolkit',
  officialUrl: 'https://pypi.org/project/address-toolkit/',
  evidenceUrl: 'https://github.com/ONSdigital/address-toolkit',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united kingdom', 'ons', 'addresses', 'pyspark', 'data quality'],
} satisfies Project;
