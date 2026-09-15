export type Jurisdiction = 'U.S. federal' | 'U.S. state' | 'International';

export type AgencyKind =
  | 'Government'
  | 'Department'
  | 'Agency'
  | 'Office'
  | 'Military service'
  | 'Laboratory'
  | 'Public body';

export type Agency = {
  id: string;
  name: string;
  abbreviation?: string;
  aliases?: string[];
  geography: string;
  jurisdiction: Jurisdiction;
  type: AgencyKind;
  officialUrl: string;
  parentAgencyId?: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  sponsor: string;
  agencyIds: string[];
  geography: string;
  jurisdiction: Jurisdiction;
  domain: string;
  license: string;
  repository: string;
  officialUrl: string;
  evidenceUrl?: string;
  status: 'Active' | 'Maintained' | 'Reference';
  featured?: boolean;
  verified: string;
  tags: string[];
};

export type Policy = {
  id: string;
  year: number | 'Undated';
  title: string;
  issuer: string;
  geography: string;
  type: string;
  status: 'Current' | 'Reference' | 'Superseded';
  summary: string;
  url: string;
  reviewed: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
  projectId?: string;
  policyId?: string;
};

export type GlossaryEntry = {
  term: string;
  definition: string;
};

export type OfficialSource = {
  label: string;
  url: string;
  note: string;
};
