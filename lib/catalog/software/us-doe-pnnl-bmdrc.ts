import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-bmdrc',
  name: 'bmdrc',
  summary:
    'A PNNL Python package for benchmark-dose response-curve analysis across binary, continuous, and larval photomotor-response data.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Toxicology and dose-response modeling',
  openSourceYear: 2023,
  license:
    'BSD-2-Clause for Python package source; dependencies and example data retain separate terms',
  repository: 'https://github.com/PNNL-CompBio/bmdrc',
  officialUrl:
    'https://www.pnnl.gov/publications/bmdrc-python-package-quantifying-phenotypes-chemical-exposures-benchmark-dose-modeling',
  evidenceUrl:
    'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1013337',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'python', 'toxicology', 'benchmark dose'],
} satisfies Project;
