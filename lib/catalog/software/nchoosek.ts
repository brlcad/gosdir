import type { Project } from '../types';

export default {
  id: 'nchoosek',
  name: 'NchooseK',
  summary:
    'A Python embedded DSL for expressing hard and soft k-of-n constraints across classical and quantum solvers.',
  sponsor:
    'Los Alamos National Laboratory; developed by Triad National Security under U.S. DOE/NNSA contract 89233218CNA000001',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory', 'us-doe-nnsa'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/nchoosek',
  officialUrl: 'https://github.com/lanl/nchoosek',
  evidenceUrl:
    'https://sc22.supercomputing.org/proceedings/tech_paper/tech_paper_pages/pap429.html',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'quantum computing', 'constraints', 'python'],
} satisfies Project;
