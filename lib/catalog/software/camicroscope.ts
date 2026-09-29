import type { Project } from '../types';

export default {
  id: 'camicroscope',
  name: 'caMicroscope',
  summary:
    'A web-based biomedical image and data platform for cancer whole-slide pathology viewing, annotation, and collaboration.',
  sponsor:
    'National Cancer Institute (NCI), NIH; Leidos Biomedical Research and academic collaborators implemented components under NCI/Frederick program support.',
  agencyIds: ['us-nci'],
  geography: 'United States (Maryland; Frederick)',
  jurisdiction: 'U.S. federal',
  domain: 'Cancer research / digital pathology',
  openSourceYear: 2019,
  license:
    'Mixed first-party grants by component: BSD-3-Clause (caMicroscope viewer and Distro deployment repository); GPL-3.0-only (Caracal backend). Third-party services and dependencies retain their own licenses.',
  repository: 'https://github.com/camicroscope/caMicroscope',
  officialUrl: 'https://github.com/camicroscope/caMicroscope',
  evidenceUrl:
    'https://ncifrederick.cancer.gov/media/documents/lbr_annualreport_2015_2016.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['cancer research', 'digital pathology', 'biomedical imaging', 'annotation'],
} satisfies Project;
