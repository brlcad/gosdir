import type { Project } from '../types';

export default {
  id: 'us-doe-cathub',
  name: 'CatHub',
  summary:
    'A Python API/client for querying and contributing to the Catalysis-Hub surface-reaction database, developed at the DOE-supported SUNCAT Center for Interface Science and Catalysis at SLAC/Stanford.',
  sponsor:
    'SUNCAT Center for Interface Science and Catalysis, SLAC National Accelerator Laboratory and Stanford University; U.S. Department of Energy support',
  agencyIds: [
    'us-doe-slac-national-accelerator-laboratory',
    'us-doe-office-of-science',
    'us-doe',
  ],
  geography:
    'Global scientific database/API; SUNCAT Center at SLAC/Stanford in Menlo Park, California',
  jurisdiction: 'U.S. federal',
  domain: 'Catalysis & scientific data',
  openSourceYear: 2018,
  license: 'GPL-3.0-only for CatHub source code',
  repository: 'https://github.com/SUNCAT-Center/CatHub',
  officialUrl: 'https://suncat.stanford.edu/facilities/software',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6538633/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'slac', 'catalysis', 'scientific data', 'python'],
} satisfies Project;
