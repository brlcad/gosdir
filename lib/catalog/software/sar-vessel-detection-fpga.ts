import type { Project } from '../types';

export default {
  id: 'sar-vessel-detection-fpga',
  name: 'SAR Vessel Detection for FPGA',
  summary:
    'Research implementation for training and deploying low-power synthetic-aperture-radar vessel detection on FPGA satellite hardware.',
  sponsor:
    'Alan Turing Institute Defence and Security programme, with support through its Dstl partnership',
  agencyIds: ['uk-dstl'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Science & engineering',
  openSourceYear: 2025,
  license:
    'Apache-2.0 (project source; external toolchains and data separately licensed)',
  repository:
    'https://github.com/alan-turing-institute/sar-vessel-detection-fpga',
  officialUrl:
    'https://www.turing.ac.uk/news/publications/efficient-sar-vessel-detection-fpga-based-satellite-sensing',
  evidenceUrl:
    'https://github.com/alan-turing-institute/sar-vessel-detection-fpga/commit/a24284ac1f711a2356970bf50c49a06c7e9d59b5',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'remote sensing', 'fpga'],
} satisfies Project;
