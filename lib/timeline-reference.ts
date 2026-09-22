import type { TimelineEvent } from '@/lib/catalog/types';

const recordIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function timelineRecordReference(value: string): Pick<TimelineEvent, 'projectId' | 'policyId'> | null {
  try {
    const url = new URL(value);
    if (url.origin !== 'https://gosdir.com') return null;
    const route = url.pathname.replace(/\/+$/, '');
    if (route === '/directory') {
      const id = url.searchParams.get('project');
      return id && recordIdPattern.test(id) ? { projectId: id } : null;
    }
    if (route === '/policy') {
      const id = url.searchParams.get('record');
      return id && recordIdPattern.test(id) ? { policyId: id } : null;
    }
  } catch { /* invalid URL */ }
  return null;
}
