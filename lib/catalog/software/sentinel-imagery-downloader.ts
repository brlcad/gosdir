import type { Project } from '../types';

export default {
  id: 'sentinel-imagery-downloader',
  name: 'Sentinel Satellite Imagery Download Scripts',
  summary:
    'A USGS Python tool that finds and downloads Sentinel-1 and Sentinel-2 imagery for user-defined study areas.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (federal; user-defined study areas)',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial data',
  openSourceYear: 2024,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/sentinel-satellite-imagery-download',
  officialUrl:
    'https://www.usgs.gov/software/sentinel-satellite-imagery-download-scripts',
  evidenceUrl:
    'https://code.usgs.gov/asc/sentinel-satellite-imagery-download/-/raw/main/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'sentinel', 'satellite imagery', 'python'],
} satisfies Project;
