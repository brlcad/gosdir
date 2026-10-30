import type { Project } from '../types';

export default {
  id: 'us-doe-argonne-swift-t',
  name: 'Swift/T',
  summary:
    'An implicitly parallel scripting language and runtime for large-scale scientific workflows developed at Argonne National Laboratory.',
  sponsor:
    'Argonne National Laboratory / U.S. Department of Energy Office of Science',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe-office-of-science'],
  geography:
    'Not geographically restricted; developed at Argonne National Laboratory in Lemont, Illinois',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific workflows & high-performance computing',
  openSourceYear: 2015,
  license: 'Apache-2.0 for Swift/T source code',
  repository: 'https://github.com/swift-lang/swift-t',
  officialUrl: 'https://swift-lang.github.io/swift-t/',
  evidenceUrl:
    'https://www.alcf.anl.gov/news/argonne-technologies-receive-2018-rd-100-awards',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'argonne', 'high-performance computing', 'workflows'],
} satisfies Project;
