import type { Project } from '../types';

export default {
  id: 'lanl-augselfies',
  name: 'augSELFIES',
  summary:
    'A Python library for augmentation of SELFIES chemical-string encodings.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry and machine learning',
  openSourceYear: 2025,
  license: 'MIT for augSELFIES repository source',
  repository: 'https://github.com/lanl/augselfies',
  officialUrl: 'https://www.osti.gov/doecode/biblio/173949',
  evidenceUrl: 'https://pypi.org/project/augselfies/',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'chemistry', 'selfies', 'python'],
} satisfies Project;
