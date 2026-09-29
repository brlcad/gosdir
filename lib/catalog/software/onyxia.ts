import type { Project } from '../types';

export default {
  id: 'onyxia',
  name: 'Onyxia',
  summary:
    'A self-service cloud data-science platform for launching notebooks and services, managing data and compute resources, and reproducing collaborative analysis environments.',
  sponsor: 'National Institute of Statistics and Economic Studies',
  agencyIds: ['fr-insee'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Cloud platform',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/InseeFrLab/onyxia',
  officialUrl: 'https://www.onyxia.sh/',
  evidenceUrl: 'https://www.insee.fr/en/information/7722531?sommaire=7722566',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['france', 'data science', 'cloud', 'statistics'],
} satisfies Project;
