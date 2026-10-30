import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-protein-coverage-summarizer',
  name: 'Protein Coverage Summarizer',
  summary:
    'A PNNL utility that summarizes protein sequence coverage from peptide-hit data.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for repository source; external dependencies are separately licensed',
  repository:
    'https://github.com/PNNL-Comp-Mass-Spec/protein-coverage-summarizer',
  officialUrl:
    'https://pnnl-comp-mass-spec.github.io/protein-coverage-summarizer/',
  evidenceUrl:
    'https://github.com/PNNL-Comp-Mass-Spec/protein-coverage-summarizer/releases/tag/v1.3.8143',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'protein coverage'],
} satisfies Project;
