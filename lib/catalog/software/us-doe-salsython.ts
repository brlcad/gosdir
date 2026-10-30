import type { Project } from '../types';

export default {
  id: 'us-doe-salsython',
  name: 'SALSython',
  summary:
    'SALSA_python v1, an LBNL/DOE Python wrapper for the SALSA semi-analytical aquifer leakage solution.',
  sponsor:
    'U.S. Department of Energy, Office of Science; Lawrence Berkeley National Laboratory (contract AC02-05CH11231).',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Groundwater modeling',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://github.com/pbhuvankar/SALSythonV1',
  officialUrl: 'https://github.com/pbhuvankar/SALSythonV1',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/162005',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'lawrence-berkeley', 'groundwater', 'python', 'hydrology'],
} satisfies Project;
