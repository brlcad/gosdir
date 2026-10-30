import type { Project } from '../types';

export default {
  id: 'lanl-nomad',
  name: 'Nomad',
  summary:
    'An application for serving scientific foundation models and tools through a command-line interface, MCP server, and Python code execution.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & artificial intelligence',
  openSourceYear: 2026,
  license:
    'Apache-2.0 for Nomad source code; external model artifacts and remote services are outside this grant',
  repository: 'https://github.com/lanl/nomad',
  officialUrl: 'https://lanl.github.io/nomad/',
  evidenceUrl: 'https://github.com/lanl/nomad/releases/tag/v0.2.1',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'scientific computing',
    'foundation models',
    'mcp',
  ],
} satisfies Project;
