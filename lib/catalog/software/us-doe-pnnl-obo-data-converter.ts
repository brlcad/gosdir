import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-obo-data-converter',
  name: 'OBO Data Converter',
  summary:
    'A PNNL command-line utility converting OBO ontology files into tab-delimited text.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and data conversion',
  openSourceYear: 2016,
  license:
    'Apache-2.0 for repository source; external dependencies are separately licensed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/OBO-Data-Converter',
  officialUrl: 'https://pnnl-comp-mass-spec.github.io/OBO-Data-Converter/',
  evidenceUrl: 'https://pnnl-comp-mass-spec.github.io/OBO-Data-Converter/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'bioinformatics', 'ontology', 'obo'],
} satisfies Project;
