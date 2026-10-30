import type { Project } from '../types';

export default {
  id: 'fr-inria-unsegqc',
  name: 'UnSegQC',
  summary:
    'An unsupervised medical-image segmentation quality-control tool that ranks cases and localizes likely errors.',
  sponsor: 'Inria Project-Team EPIONE',
  agencyIds: ['fr-inria'],
  geography:
    'Sophia Antipolis and Nice, Provence-Alpes-Côte d’Azur, France (Inria Centre at Université Côte d’Azur)',
  jurisdiction: 'International',
  domain: 'Medical imaging & quality control',
  openSourceYear: 2020,
  license: 'GNU GPL-3.0',
  repository: 'https://gitlab.inria.fr/epione/unsegqc',
  officialUrl:
    'https://www-sop.inria.fr/members/Herve.Delingette/site/soft/unsegqc/',
  evidenceUrl: 'https://radar.inria.fr/report/2024/epione/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'medical-imaging',
    'segmentation',
    'quality-control',
  ],
} satisfies Project;
