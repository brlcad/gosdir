import type { Project } from '../types';

export default {
  id: 'uk-tpr-umbraco-analyzers',
  name: 'The Pensions Regulator Umbraco Analyzers',
  summary:
    'ThePensionsRegulator.Analyzers.Umbraco, a Roslyn analyzer package warning when Umbraco .Value<T>() calls omit IPublishedValueFallback.',
  sponsor:
    'The Pensions Regulator (TPR), UK regulator of work-based pension schemes',
  agencyIds: ['uk-the-pensions-regulator'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Software development and web infrastructure',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/thepensionsregulator/umbraco-analyzers',
  officialUrl: 'https://github.com/thepensionsregulator/umbraco-analyzers',
  evidenceUrl:
    'https://www.nuget.org/packages/ThePensionsRegulator.Analyzers.Umbraco',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'TPR',
    'The',
    'Pensions',
    'Regulator',
    'Umbraco',
    'Analyzers',
  ],
} satisfies Project;
