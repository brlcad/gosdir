import type { Project } from '../types';

export default {
  id: 'skyglow-estimation-toolbox',
  name: 'Skyglow Estimation Toolbox (SET)',
  summary:
    'NASA DEVELOP Python tool that models artificial skyglow from remote-sensing data and local parameters to help map light pollution affecting natural resources.',
  sponsor:
    'NASA DEVELOP National Program, Wyoming Cross-Cutting II team (NASA Langley release LAR-19184-1), in partnership with the National Park Service and Wyoming Stargazing',
  agencyIds: ['us-nasa'],
  geography: 'United States; developed for park and regional light-pollution analysis, including Grand Teton National Park',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science',
  openSourceYear: 2018,
  license: 'NASA Open Source Agreement 1.3 (NASA-1.3)',
  repository: 'https://github.com/NASA-DEVELOP/SET',
  officialUrl: 'https://software.nasa.gov/software/LAR-19184-1',
  evidenceUrl: 'https://nasa-develop.github.io/SET/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'earth science', 'light pollution', 'remote sensing', 'national parks'],
} satisfies Project;
