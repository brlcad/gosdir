import type { Project } from '../types';

export default {
  id: 'ornl-rovidh',
  name: 'ROVI Data Hub Vendor CLI',
  summary:
    'A Python command-line client for managing ROVI Data Hub vendor tokens and system authentication, and uploading data, models, and dashboards.',
  sponsor: 'Oak Ridge National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Research data infrastructure',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/rovi-org/rovidh',
  officialUrl: 'https://rovidoc.ornl.gov/',
  evidenceUrl: 'https://pypi.org/project/rovidh/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'python', 'cli', 'research data', 'api'],
} satisfies Project;
