import type { Project } from '../types';

export default {
  id: 'fr-inria-order-manager',
  name: 'Order Manager (Gazelle)',
  summary:
    'A separately deployable simulator for imaging and laboratory orders, HL7 workflows, and DICOM worklists.',
  sponsor:
    'Inria (historical project authorship); current upstream stewardship is with the IHE Gazelle team and Kereval',
  agencyIds: ['fr-inria'],
  geography:
    'Rennes, France; used in international IHE interoperability testing',
  jurisdiction: 'International',
  domain: 'Healthcare interoperability testing',
  openSourceYear: 2023,
  license:
    'Apache-2.0 (project source; dependencies retain their own licenses)',
  repository: 'https://gitlab.inria.fr/gazelle/public/simulation/order-manager',
  officialUrl: 'https://connectathon.ihe-catalyst.net/OrderManager/home.seam',
  evidenceUrl:
    'https://connectathon.ihe-catalyst.net/gazelle-documentation/Order-Manager/installation.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'healthcare', 'interoperability', 'testing'],
} satisfies Project;
