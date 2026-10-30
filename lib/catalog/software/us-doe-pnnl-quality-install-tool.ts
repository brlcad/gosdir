import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-quality-install-tool',
  name: 'Quality Install Tool',
  summary:
    'A live web application for building-energy quality-assurance workflows, including HVAC, plumbing, safety, envelope, and electrical checks.',
  sponsor:
    'U.S. Department of Energy; developed at Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'Richland, Washington, United States (PNNL); the public service is not geographically restricted in the cited evidence',
  jurisdiction: 'U.S. federal',
  domain: 'Buildings and energy efficiency',
  openSourceYear: 2023,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/Quality-Install-Tool',
  officialUrl: 'https://www.pnnl.gov/projects/quality-install-tool',
  evidenceUrl: 'https://www.pnnl.gov/projects/quality-install-tool',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'buildings', 'energy efficiency', 'quality assurance'],
} satisfies Project;
