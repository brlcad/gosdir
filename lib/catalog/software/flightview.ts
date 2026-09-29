import type { Project } from '../types';

export default {
  id: 'flightview',
  name: 'LiveView / FlightView',
  summary:
    'NASA JPL real-time acquisition and visualization application for imaging spectrometers, used in instrument integration/testing and aircraft flight operations.',
  sponsor: 'NASA Jet Propulsion Laboratory (JPL), AVIRIS laboratory; JPL is managed by Caltech for NASA',
  agencyIds: ['us-nasa-jet-propulsion-laboratory', 'us-nasa'],
  geography: 'United States federal laboratory and aircraft instrument operations; software supports NASA/JPL imaging-spectrometer instruments',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science instrumentation and imaging spectroscopy',
  openSourceYear: 2018,
  license: 'GNU General Public License v3.0 (GPL-3.0) for repository-authored code; third-party components retain their own terms',
  repository: 'https://github.com/nasa-jpl/FlightView',
  officialUrl: 'https://github.com/nasa-jpl/FlightView',
  evidenceUrl: 'https://authors.library.caltech.edu/records/q69jm-px739',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'jpl', 'aviris', 'earth science', 'imaging spectroscopy', 'instrumentation'],
} satisfies Project;
