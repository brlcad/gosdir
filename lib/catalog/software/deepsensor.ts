import type { Project } from '../types';

export default {
  id: 'deepsensor',
  name: 'DeepSensor',
  summary:
    'Python package for environmental prediction and sensor placement with neural-process models.',
  sponsor:
    'Alan Turing Institute research with later project-specific ARIA support through GIANT',
  agencyIds: ['uk-aria'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Environmental research',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/alan-turing-institute/deepsensor',
  officialUrl: 'https://www.turing.ac.uk/research/research-projects/deepsensor',
  evidenceUrl:
    'https://www.cambridge.org/core/journals/environmental-data-science/article/environmental-sensor-placement-with-convolutional-gaussian-neural-processes/F466DBCE3FA1088E04335D98225FA572',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'environment', 'python'],
} satisfies Project;
