import type { Project } from '../types';

export default {
  id: 'ornl-hydragnn-gfm-finetuning4materials',
  name: 'HydraGNN_GFM_FineTuning4Materials',
  summary:
    'A workflow for fine-tuning HydraGNN graph foundation models on materials-science prediction tasks.',
  sponsor:
    'U.S. Department of Energy, Office of Science; University of Tennessee Knoxville and Oak Ridge National Laboratory (ORNL) research organizations.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Knoxville and Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and machine learning',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/hydragnn_gfm_finetuning4materials',
  officialUrl:
    'https://github.com/ORNL/HydraGNN_GFM_FineTuning4Materials/tree/v1.0',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/181647',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'materials science',
    'foundation models',
    'machine learning',
  ],
} satisfies Project;
