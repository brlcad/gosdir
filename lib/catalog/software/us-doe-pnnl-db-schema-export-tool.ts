import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-db-schema-export-tool',
  name: 'DB Schema Export Tool',
  summary:
    'A PNNL GUI and command-line tool for exporting SQL Server and PostgreSQL schemas and selected data.',
  sponsor:
    'U.S. Department of Energy, through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific data management and database tools',
  openSourceYear: 2018,
  license:
    'BSD-2-Clause for the exporter source; dependencies and exported schemas/data retain their own terms',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/DB-Schema-Export-Tool',
  officialUrl: 'https://www.osti.gov/doecode/biblio/8285',
  evidenceUrl:
    'https://github.com/PNNL-Comp-Mass-Spec/DB-Schema-Export-Tool/releases/tag/v2.0.8957',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'database', 'schema export', 'mass spectrometry'],
} satisfies Project;
