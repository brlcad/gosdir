import type { Project } from '../types';

export default {
  id: 'lanl-tda-adversarial-detection',
  name: 'Topological Data Analysis for Adversarial Detection',
  summary:
    'A Python implementation of persistent-homology and two-sample-test methods for detecting adversarial behavior in multimodal models.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Machine learning & adversarial detection',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for repository source (LICENSE also carries a LANL contract notice)',
  repository: 'https://github.com/lanl/tda-adversarial-detection',
  officialUrl: 'https://www.osti.gov/doecode/biblio/171703',
  evidenceUrl: 'https://arxiv.org/abs/2501.18006',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'topological data analysis',
    'adversarial detection',
    'machine learning',
    'python',
  ],
} satisfies Project;
