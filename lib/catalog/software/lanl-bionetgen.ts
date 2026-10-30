import type { Project } from '../types';

export default {
  id: 'lanl-bionetgen',
  name: 'BioNetGen',
  summary:
    'A rule-based modeling framework for specifying and simulating biochemical systems.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy; current development at the University of Pittsburgh',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; current development in Pittsburgh, Pennsylvania',
  jurisdiction: 'U.S. federal',
  domain: 'Systems biology and biochemical simulation',
  openSourceYear: 2017,
  license:
    'MIT for BioNetGen source; third-party components retain their own terms',
  repository: 'https://github.com/RuleWorld/bionetgen',
  officialUrl: 'https://bionetgen.org/',
  evidenceUrl: 'https://pubmed.ncbi.nlm.nih.gov/27402907/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'lanl', 'systems biology', 'simulation', 'biochemistry', 'r'],
} satisfies Project;
