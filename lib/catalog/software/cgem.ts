import type { Project } from '../types';

export default {
  id: 'cgem',
  name: 'Coastal Generalized Ecosystem Model (CGEM)',
  summary:
    'EPA coastal-water-quality model for nutrients, oxygen, carbon, plankton, eutrophication, and acidification.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Environmental Measurement and Modeling, with Center for Computational Toxicology and Exposure contributors',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2023,
  license:
    'MIT (CGEM source repository; separate EFDC linkage utility excluded)',
  repository: 'https://github.com/USEPA/CGEM',
  officialUrl: 'https://www.epa.gov/hydrowq/cgem-download',
  evidenceUrl:
    'https://www.epa.gov/system/files/documents/2023-09/CGEM_User_Guide.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'epa', 'coastal', 'water quality', 'modeling'],
} satisfies Project;
