import type { Project } from '../types';

export default {
  id: 'uk-ukho-eventhub-logging-provider',
  name: 'UKHO.Logging.EventHubLogProvider',
  summary:
    'A .NET logging provider that writes Microsoft.Extensions.Logging events to Azure Event Hubs.',
  sponsor:
    'UK Hydrographic Office (UKHO), an executive agency sponsored by the Ministry of Defence',
  agencyIds: ['uk-ukho'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Logging and observability',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/UKHO/EventHub-Logging-Provider',
  officialUrl:
    'https://www.nuget.org/packages/UKHO.Logging.EventHubLogProvider',
  evidenceUrl:
    'https://www.nuget.org/packages/UKHO.Logging.EventHubLogProvider',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHO', '.NET', 'Azure Event Hubs'],
} satisfies Project;
