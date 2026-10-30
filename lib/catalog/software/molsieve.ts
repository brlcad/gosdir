import type { Project } from '../types';

export default {
  id: 'molsieve',
  name: 'MolSieve',
  summary:
    'A visual-analytics system for exploring long molecular-dynamics simulations.',
  sponsor: 'Los Alamos National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Molecular simulation and visualization',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for repository source; submodules and dependencies are separate',
  repository: 'https://github.com/lanl/MolSieve',
  officialUrl: 'https://www.osti.gov/doecode/biblio/174067',
  evidenceUrl:
    'https://laro.lanl.gov/esploro/outputs/journalArticle/MolSieve-A-Progressive-Visual-Analytics-System/9916497946903761',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'molecular dynamics', 'visual analytics', 'science'],
} satisfies Project;
