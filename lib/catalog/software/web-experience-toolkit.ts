import type { Project } from '../types';

export default {
  id: 'web-experience-toolkit',
  name: 'Web Experience Toolkit (WET)',
  summary:
    'A reusable front-end framework for accessible, usable, and interoperable government websites, including Canada.ca.',
  sponsor: 'Treasury Board of Canada Secretariat',
  agencyIds: ['ca-tbs'],
  geography: 'Canada',
  jurisdiction: 'International',
  domain: 'Design systems',
  openSourceYear: 2010,
  license: 'MIT (code; Government of Canada marks excluded)',
  repository: 'https://github.com/wet-boew/wet-boew',
  officialUrl:
    'https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/web-experience-toolkit.html',
  evidenceUrl:
    'https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/guidance-implementing-standard-web-accessibility.html',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['canada', 'accessibility', 'design system'],
} satisfies Project;
