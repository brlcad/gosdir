import type { Project } from '../types';

export default {
  id: 'uk-ons-eq-author-app',
  name: 'ONS eQ Author',
  summary:
    'ONS questionnaire-authoring and publishing application used by staff to create electronic surveys.',
  sponsor:
    'Office for National Statistics (ONS), Social Survey Transformation / Digital Publishing',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (national ONS survey programme)',
  jurisdiction: 'International',
  domain: 'Survey operations and questionnaire authoring',
  openSourceYear: 2018,
  license:
    'MIT for application source; questionnaire data, other eQ services, and dependencies are separate',
  repository: 'https://github.com/ONSdigital/eq-author-app',
  officialUrl:
    'https://onsdigital.github.io/eq-author-app/?path=/docs/introduction--page',
  evidenceUrl:
    'https://digitalblog.ons.gov.uk/2020/03/09/moving-paper-surveys-online-automating-the-process-of-publishing-surveys/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'questionnaires',
    'surveys',
    'survey operations',
    'web application',
  ],
} satisfies Project;
