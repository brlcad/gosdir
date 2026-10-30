import type { Project } from '../types';

export default {
  id: 'uk-dsit-oda-reporting-application',
  name: 'Official Development Assistance Reporting Application',
  summary:
    "Report Official Development Assistance (RODA), DSIT's reporting service for official development assistance research-and-innovation funding.",
  sponsor:
    'Department for Science, Innovation and Technology (DSIT; successor to BEIS)',
  agencyIds: ['uk-dsit'],
  geography: 'United Kingdom, with international ODA research partners',
  jurisdiction: 'International',
  domain: 'International development and research administration',
  openSourceYear: 2019,
  license: 'MIT',
  repository:
    'https://github.com/ukgovernmentbeis/beis-report-official-development-assistance',
  officialUrl:
    'https://www.report-official-development-assistance.service.gov.uk/',
  evidenceUrl:
    'https://www.contractsfinder.service.gov.uk/Notice/Attachment/942acc7d-d21d-4429-9777-99fbba96b7c2',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'DSIT',
    'Official',
    'Development',
    'Assistance',
    'Reporting',
    'Application',
  ],
} satisfies Project;
