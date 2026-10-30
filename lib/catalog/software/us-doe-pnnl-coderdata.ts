import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-coderdata',
  name: 'CoderData',
  summary:
    'A PNNL Python package and pipeline/schema that harmonizes cancer-model molecular and drug-sensitivity datasets for machine-learning benchmarks.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational biology and cancer research',
  openSourceYear: 2023,
  license:
    'BSD-2-Clause for package and pipeline source; upstream and hosted datasets are separately licensed',
  repository: 'https://github.com/PNNL-CompBio/coderdata',
  officialUrl: 'https://pnnl-compbio.github.io/coderdata/',
  evidenceUrl:
    'https://aacrjournals.org/cancerres/article/85/8_Supplement_1/7426/759414/Abstract-7426-Leveraging-deep-learning-to-enable',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'computational biology', 'cancer', 'machine learning'],
} satisfies Project;
