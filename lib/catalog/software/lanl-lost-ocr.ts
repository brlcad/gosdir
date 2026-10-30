import type { Project } from '../types';

export default {
  id: 'lanl-lost-ocr',
  name: 'Lost in OCR Translation',
  summary:
    'A reproducibility pipeline comparing vision-based and OCR-based approaches to robust document retrieval.',
  sponsor:
    'U.S. Department of Energy, Office of Science, Advanced Scientific Computing Research (ASCR); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Document retrieval & machine learning',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/lanl/lost-ocr',
  officialUrl: 'https://www.osti.gov/doecode/biblio/171746',
  evidenceUrl: 'https://arxiv.org/abs/2505.05666',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'document retrieval',
    'ocr',
    'computer vision',
    'machine learning',
  ],
} satisfies Project;
