import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-pvml-fault-signature-detection',
  name: 'PVML Fault Signature Detection',
  summary:
    'PNNL machine-learning methods for detecting and characterizing photovoltaic faults from field notes.',
  sponsor:
    'U.S. Department of Energy; developed at Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'Richland, Washington, United States (PNNL); Ecogy deployment geography not stated',
  jurisdiction: 'U.S. federal',
  domain: 'Solar energy and machine learning',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/pnnl/PVML_FaultSignatureDetection',
  officialUrl: 'https://www.osti.gov/doecode/biblio/173791',
  evidenceUrl: 'https://github.com/pnnl/PVML_FaultSignatureDetection',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'solar energy', 'photovoltaics', 'machine learning'],
} satisfies Project;
