import type { Project } from '../types';

export default {
  id: 'lanl-annomate-microsentryai',
  name: 'AnnoMate with MicroSentryAI',
  summary:
    'An integrated desktop image-annotation and AI-assisted defect-detection workflow for manufacturing inspection.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Manufacturing inspection and machine learning',
  openSourceYear: 2026,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/annomate-microsentryai-workflow',
  officialUrl: 'https://www.osti.gov/doecode/biblio/177118',
  evidenceUrl:
    'https://science.osti.gov/-/media/About/pdf/scac/meetings/2026/lab-contributions-to-GM-03-24-2026v2.pdf',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'manufacturing', 'inspection', 'machine learning'],
} satisfies Project;
