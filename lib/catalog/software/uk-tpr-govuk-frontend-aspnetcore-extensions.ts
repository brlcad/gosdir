import type { Project } from '../types';

export default {
  id: 'uk-tpr-govuk-frontend-aspnetcore-extensions',
  name: 'GOV.UK Frontend ASP.NET Core Extensions',
  summary:
    'The Pensions Regulator GOV.UK Frontend extensions: reusable ASP.NET Core MVC and Umbraco packages for GOV.UK/TPR components and styling.',
  sponsor:
    'The Pensions Regulator (UK public body sponsored by the Department for Work and Pensions)',
  agencyIds: ['uk-the-pensions-regulator'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Software development and web infrastructure',
  openSourceYear: 2022,
  license: 'MIT',
  repository:
    'https://github.com/thepensionsregulator/govuk-frontend-aspnetcore-extensions',
  officialUrl: 'https://www.nuget.org/packages/ThePensionsRegulator.Frontend',
  evidenceUrl:
    'https://github.com/thepensionsregulator/govuk-frontend-aspnetcore-extensions/releases',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'TPR',
    'GOV.UK',
    'Frontend',
    'ASP.NET',
    'Core',
    'Extensions',
  ],
} satisfies Project;
