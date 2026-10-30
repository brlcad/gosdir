import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-cim-graph',
  name: 'CIMantic Graphs',
  summary:
    'A Python library for creating, parsing, and editing Common Information Model power-system models with in-memory labeled property graphs.',
  sponsor:
    'U.S. Department of Energy, Office of Electricity, through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Electric power systems and Common Information Model tooling',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause for repository code; dependencies, profile files, and external grid datasets retain their own terms',
  repository: 'https://github.com/PNNL-CIM-Tools/CIM-Graph',
  officialUrl: 'https://pnnl-cim-tools.github.io/CIM-Graph/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/127055',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'electricity', 'common information model', 'python'],
} satisfies Project;
