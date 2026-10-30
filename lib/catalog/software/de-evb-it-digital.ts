import type { Project } from '../types';

export default {
  id: 'de-evb-it-digital',
  name: 'EVB-IT digital',
  summary:
    'Web applications for authoring and completing interactive EVB-IT public-procurement contracts.',
  sponsor:
    'German IT-Planungsrat, EVB-IT working group; further development commissioned by the Federal Ministry of the Interior.',
  agencyIds: ['de-it-planungsrat', 'de-bmi'],
  geography:
    'Germany; federal administration and IT-Planungsrat member governments.',
  jurisdiction: 'International',
  domain: 'Public procurement and contract management',
  openSourceYear: 2023,
  license:
    'MIT; repository root identifies the Federal Republic of Germany as copyright holder.',
  repository: 'https://gitlab.opencode.de/evb-it/digital/evb-it-digital',
  officialUrl: 'https://www.it-planungsrat.de/beschluss/beschluss-2024-32',
  evidenceUrl: 'https://www.it-planungsrat.de/beschluss/beschluss-2024-32',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'it-planungsrat',
    'public procurement',
    'contract management',
    'legal tech',
  ],
} satisfies Project;
