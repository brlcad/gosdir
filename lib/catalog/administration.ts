import data from './administration.json';

export type AdministrationRecord = {
  status: 'suspended' | 'hidden' | 'deleted';
  reason: string;
  updatedAt: string;
};

export const administrationRecords = data.records as Record<
  string,
  AdministrationRecord | undefined
>;
