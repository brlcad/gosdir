import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-bim2rdf',
  name: 'BIM2RDF',
  summary:
    'A Python package and command-line tool that converts building information models into RDF/ASHRAE 223 semantic models with validation support.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Building information modeling and semantic data',
  openSourceYear: 2024,
  license:
    'BSD-2-Clause for BIM2RDF repository code; imported ontologies and separate libraries retain their own terms',
  repository: 'https://github.com/pnnl/BIM2RDF',
  officialUrl: 'https://github.com/pnnl/BIM2RDF',
  evidenceUrl: 'https://pypi.org/project/bim2rdf/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'building information modeling', 'rdf', 'python'],
} satisfies Project;
