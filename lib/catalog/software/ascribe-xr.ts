import type { Project } from '../types';

export default {
  id: 'ascribe-xr',
  name: 'Ascribe XR',
  summary:
    'An OpenXR/Godot application for interactive visualization of scientific volumes and meshes.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy Office of Science and Advanced Light Source',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific visualization and extended reality',
  openSourceYear: 2025,
  license: 'BSD-3-Clause-LBNL (OSI-approved variant)',
  repository: 'https://github.com/lbl-camera/Ascribe-XR',
  officialUrl: 'https://amcr.lbl.gov/software-portal/amcr-software-directory/',
  evidenceUrl: 'https://github.com/lbl-camera/Ascribe-XR/releases/tag/1.2.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'berkeley lab', 'visualization', 'extended reality', 'openxr'],
} satisfies Project;
