import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-tesp',
  name: 'Transactive Energy Simulation Platform (TESP)',
  summary: 'A reusable simulation platform for transactive energy systems.',
  sponsor:
    'U.S. Department of Energy; developed at Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'United States; developed at PNNL in Richland, Washington; no separate deployment geography claimed',
  jurisdiction: 'U.S. federal',
  domain: 'Energy systems and grid modeling',
  openSourceYear: 2024,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/tesp',
  officialUrl: 'https://www.osti.gov/doecode/biblio/5153',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/1843579',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'transactive energy', 'electric grid', 'simulation'],
} satisfies Project;
