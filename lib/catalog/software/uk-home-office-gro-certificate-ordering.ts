import type { Project } from '../types';

export default {
  id: 'uk-home-office-gro-certificate-ordering',
  name: 'GRO Certificate Ordering Digital Service Form',
  summary: 'The General Register Office online certificate-ordering form.',
  sponsor:
    "His Majesty's Passport Office (HM Passport Office); General Register Office for England and Wales",
  agencyIds: ['uk-hm-passport-office'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Civil registration and vital records',
  openSourceYear: 2015,
  license: 'GPL-2.0',
  repository: 'https://github.com/UKHomeOffice/gro',
  officialUrl: 'https://www.gov.uk/order-copy-birth-death-marriage-certificate',
  evidenceUrl: 'https://www.gov.uk/order-copy-birth-death-marriage-certificate',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'HM Passport Office', 'GRO', 'Civil registration'],
} satisfies Project;
