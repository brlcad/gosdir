import type { Project } from '../types';

export default {
  id: 'swiyu-did-toolbox',
  name: 'swiyu DID Toolbox',
  summary:
    'FOITT-supported Java command-line tool and API for creating, updating, and deactivating decentralized identifiers.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication (FOITT)',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2025,
  license: 'MIT (DID Toolbox source; dependencies retain separate terms)',
  repository: 'https://github.com/swiyu-admin-ch/didtoolbox-java',
  officialUrl: 'https://swiyu-admin-ch.github.io/open-source-components/',
  evidenceUrl:
    'https://github.com/swiyu-admin-ch/didtoolbox-java/commit/d3da2381cfa236d832b03e95e86e84c085175477',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'digital identity', 'did', 'java'],
} satisfies Project;
