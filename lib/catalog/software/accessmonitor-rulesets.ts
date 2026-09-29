import type { Project } from '../types';

export default {
  id: 'accessmonitor-rulesets',
  name: 'AccessMonitor RuleSets',
  summary:
    'A reusable TypeScript package of 169 WCAG/ACT accessibility rules used by Portugal’s AccessMonitor validator, MyMonitor, and Web Accessibility Observatory.',
  sponsor: 'Agency for the Technological Reform of the State (ARTE), Portugal',
  agencyIds: ['pt-arte'],
  geography: 'Portugal; the rule package supports government accessibility services with international reuse potential',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2025,
  license: 'MIT for first-party rule-set content and package source',
  repository: 'https://github.com/amagovpt/accessmonitor-rulesets',
  officialUrl: 'https://mosaico.gov.pt/ferramentas/accessmonitor',
  evidenceUrl: 'https://mosaico.gov.pt/ferramentas/my-monitor',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['portugal', 'accessibility', 'wcag', 'act rules', 'typescript'],
} satisfies Project;
