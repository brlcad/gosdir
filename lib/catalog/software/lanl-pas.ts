import type { Project } from '../types';

export default {
  id: 'lanl-pas',
  name: 'PAS (Prelim Attention Score)',
  summary:
    'A training-free Python method for detecting object hallucinations in large vision-language models.',
  sponsor:
    'Los Alamos National Laboratory, under U.S. Department of Energy / National Nuclear Security Administration contract 89233218CNA000001; University of Florida collaborators',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos, New Mexico, United States; University of Florida collaboration',
  jurisdiction: 'U.S. federal',
  domain: 'Artificial intelligence & computer vision',
  openSourceYear: 2026,
  license:
    'BSD-3-Clause for repository code; external models, model weights, and datasets have their own licenses and terms',
  repository: 'https://github.com/lanl/pas',
  officialUrl: 'https://github.com/lanl/pas',
  evidenceUrl:
    'https://openaccess.thecvf.com/content/CVPR2026/html/Hoang_PAS_Prelim_Attention_Score_for_Detecting_Object_Hallucinations_in_Large_CVPR_2026_paper.html',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'artificial intelligence',
    'computer vision',
    'vision-language models',
  ],
} satisfies Project;
