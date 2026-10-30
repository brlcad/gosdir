import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-srp-analytics',
  name: 'srpAnalytics',
  summary:
    'The analysis-code pipeline for the Oregon State/PNNL Superfund Research Center Analytics Portal.',
  sponsor:
    'Pacific Northwest National Laboratory (PNNL), U.S. Department of Energy, with Oregon State University’s Superfund Research Center; associated center research is NIEHS-funded.',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'United States (Richland, Washington, and Oregon State University, Oregon)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental health data and analytics',
  openSourceYear: 2020,
  license:
    'MIT for analysis/pipeline source with DOE/Battelle disclaimer; portal data and dependencies are separately governed',
  repository: 'https://github.com/PNNL-CompBio/srpAnalytics',
  officialUrl:
    'https://superfund.oregonstate.edu/support-cores/data-management-and-analysis-core',
  evidenceUrl: 'https://data.pnnl.gov/group/nodes/data-source/13338',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'oregon state',
    'environmental health',
    'data analytics',
  ],
} satisfies Project;
