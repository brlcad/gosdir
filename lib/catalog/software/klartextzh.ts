import type { Project } from '../types';

export default {
  id: 'klartextzh',
  name: 'KlartextZH',
  summary:
    'A Canton of Zurich pilot app that helps staff rewrite official text in clearer German; the canton says it used the app on a public page.',
  sponsor: 'Canton of Zurich Coordination Office for Participation and Office for Statistics and Data, Team Data',
  agencyIds: ['ch-canton-zurich-office-statistics-data'],
  geography: 'Switzerland (Zurich)',
  jurisdiction: 'International',
  domain: 'Accessibility',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/machinelearningZH/simply-simplify-language',
  officialUrl: 'https://www.zh.ch/de/politik-staat/teilhabe.html',
  evidenceUrl: 'https://github.com/machinelearningZH/simply-simplify-language/commit/062b35a9c4d4f339d3ada3fc5b5e7b364a87937e',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'clear language', 'accessibility', 'pilot'],
} satisfies Project;
