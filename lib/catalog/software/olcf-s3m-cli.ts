import type { Project } from '../types';

export default {
  id: 'olcf-s3m-cli',
  name: 'S3M CLI',
  summary:
    'A command-line client for OLCF S3M storage workflows, with optional MCP and OpenAPI server modes.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), Oak Ridge Leadership Computing Facility (OLCF), U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing storage and developer tools',
  openSourceYear: 2026,
  license: 'Apache-2.0 OR MIT',
  repository: 'https://github.com/olcf/s3m-cli',
  officialUrl: 'https://github.com/olcf/s3m-cli#readme',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/183272',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'olcf', 'hpc', 'storage', 'command line'],
} satisfies Project;
