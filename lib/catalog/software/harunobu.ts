import type { Project } from '../types';

export default {
  id: 'harunobu',
  name: 'Harunobu',
  summary:
    'Japan’s Digital Agency sample application for checking and scoring the machine-readability of administrative Excel and CSV data.',
  sponsor: 'Digital Agency of Japan, Fact & Data Unit',
  agencyIds: ['jp-digital-agency'],
  geography: 'Japan',
  jurisdiction: 'International',
  domain: 'Data quality',
  openSourceYear: 2026,
  license: 'MIT (sample_app source only; rule data and documentation use PDL 1.0)',
  repository: 'https://github.com/digital-go-jp/machine_readability_rule',
  officialUrl: 'https://github.com/digital-go-jp/machine_readability_rule/tree/main/sample_app',
  evidenceUrl: 'https://github.com/digital-go-jp/machine_readability_rule/blob/main/sample_app/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['japan', 'machine readability', 'data quality', 'spreadsheet'],
} satisfies Project;
