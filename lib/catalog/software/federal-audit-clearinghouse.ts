import type { Project } from '../types';

export default {
  id: 'federal-audit-clearinghouse',
  name: 'Federal Audit Clearinghouse',
  summary:
    'The federal service for submitting, reviewing, and publishing Single Audit reporting packages from non-federal entities.',
  sponsor:
    'General Services Administration, Technology Transformation Services',
  agencyIds: ['us-gsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Forms & workflows',
  openSourceYear: 2022,
  license: 'CC0-1.0 / Public domain',
  repository: 'https://github.com/GSA-TTS/FAC',
  officialUrl: 'https://www.fac.gov/',
  evidenceUrl:
    'https://www.gsa.gov/technology/government-it-initiatives/tts-american-rescue/american-rescue-plan-end-of-year-report/connect-with-success-stories/fy-2023-american-rescue-plan-success-stories',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['gsa', 'audits', 'compliance'],
} satisfies Project;
