import type { Project } from '../types';

export default {
  id: 'lanl-bngsim',
  name: 'BNGsim',
  summary:
    'An embeddable Python simulation engine/library for BioNetGen biochemical reaction networks.',
  sponsor:
    'Los Alamos National Laboratory, operated by Triad for DOE/NNSA; DOE CODE additionally contains a misspelled NIH sponsor field whose attribution is unresolved',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Systems biology and biochemical simulation',
  openSourceYear: 2026,
  license:
    'MIT for BNGsim source; NOTICE-listed vendored components and model/test-data corpora have separate terms',
  repository: 'https://github.com/lanl/bngsim',
  officialUrl: 'https://bngsim.readthedocs.io/en/latest/',
  evidenceUrl: 'https://pypi.org/project/bngsim/',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'systems biology', 'simulation', 'python'],
} satisfies Project;
