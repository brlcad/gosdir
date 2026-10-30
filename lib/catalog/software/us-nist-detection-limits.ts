import type { Project } from '../types';

export default {
  id: 'us-nist-detection-limits',
  name: 'Detection Limits for AI-based Object Detection from SEM Images',
  summary:
    'A NIST Python package and visualization workflow for quantifying human- and AI-based detection limits in scanning-electron-microscope dimensional metrology.',
  sponsor:
    'National Institute of Standards and Technology, Information Technology Laboratory and Physical Measurement Laboratory research groups.',
  agencyIds: ['us-nist'],
  geography:
    'Gaithersburg, Maryland, United States (NIST; with Physical Measurement Laboratory collaboration)',
  jurisdiction: 'U.S. federal',
  domain: 'Metrology and artificial intelligence',
  openSourceYear: 2025,
  license: 'NIST-Software (repository-authored package source)',
  repository: 'https://github.com/usnistgov/detection_limits',
  officialUrl: 'https://pages.nist.gov/detection_limits/web/index.html',
  evidenceUrl:
    'https://www.nist.gov/publications/relating-human-and-ai-based-detection-limits-sem-dimensional-metrology',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united states',
    'nist',
    'metrology',
    'sem',
    'artificial intelligence',
  ],
} satisfies Project;
