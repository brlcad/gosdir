'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2, CircleDot, Code2, FileText, LockKeyhole, RotateCcw, ShieldCheck } from 'lucide-react';
import { timelineRecordReference } from '@/lib/timeline-reference';

const ISSUE_URL = 'https://github.com/brlcad/gosdir/issues/new';
type RecordKind = 'project' | 'policy' | 'timeline';
type TimelineChangeType = 'New milestone' | 'Correction';

export function SubmissionForm({ mode = 'contribute' }: { mode?: 'contribute' | 'contact' }) {
  const [recordKind, setRecordKind] = useState<RecordKind>('project');
  const [timelineChangeType, setTimelineChangeType] = useState<TimelineChangeType>('New milestone');
  const [packetUrl, setPacketUrl] = useState('');

  useEffect(() => {
    if (mode !== 'contribute') return;
    const syncKindFromUrl = () => {
      const requested = new URLSearchParams(window.location.search).get('kind');
      if (requested === 'project' || requested === 'policy' || requested === 'timeline') {
        setRecordKind(requested);
        setPacketUrl('');
      }
    };
    window.addEventListener('popstate', syncKindFromUrl);
    queueMicrotask(syncKindFromUrl);
    return () => window.removeEventListener('popstate', syncKindFromUrl);
  }, [mode]);

  const selectRecordKind = (kind: RecordKind) => {
    setRecordKind(kind);
    setPacketUrl('');
    const url = new URL(window.location.href);
    url.searchParams.set('kind', kind);
    window.history.replaceState(window.history.state, '', url);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (mode === 'contribute' && recordKind === 'project') {
      const problem = agencyIdsProblem(value(form, 'agencyIds'));
      const input = event.currentTarget.elements.namedItem('agencyIds');
      if (input instanceof HTMLTextAreaElement) input.setCustomValidity(problem);
      if (problem) {
        if (input instanceof HTMLTextAreaElement) input.reportValidity();
        return;
      }
    }
    if (mode === 'contribute' && recordKind === 'timeline') {
      const related = value(form, 'relatedRecord');
      const input = event.currentTarget.elements.namedItem('relatedRecord');
      const problem = related && !timelineRecordReference(related) ? 'Use a GOSDIR project or policy record link, or leave this optional field blank.' : '';
      if (input instanceof HTMLInputElement) input.setCustomValidity(problem);
      if (problem) {
        if (input instanceof HTMLInputElement) input.reportValidity();
        return;
      }
    }
    const { title, body } = mode === 'contact' ? contactPacket(form) : recordKind === 'timeline' ? timelinePacket(form) : recordKind === 'policy' ? policyPacket(form) : projectPacket(form);
    setPacketUrl(`${ISSUE_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`);
  };

  const ready = packetUrl ? (
    <div className="border border-green/25 bg-white p-8 text-center shadow-[7px_7px_0_#b8f245] sm:p-12">
      <CheckCircle2 className="mx-auto size-11 text-green" />
      <p className="eyebrow mt-5 text-green">Local validation complete</p>
      <h2 className="mt-3 font-display text-3xl font-black tracking-tight">Your {mode === 'contact' ? 'message' : `${recordKind} packet`} is ready.</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate">Your packet is ready for review on GitHub. Check the public issue, then choose <strong className="text-ink">Submit new issue</strong>. Your GitHub account provides attribution.</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={packetUrl} target="_blank" rel="noreferrer" className="button-primary justify-center"><CircleDot className="size-4" /> Continue on GitHub <ArrowUpRight className="size-4" /></a>
        <button type="button" className="button-secondary justify-center" onClick={() => setPacketUrl('')}><RotateCcw className="size-4" /> Edit packet</button>
      </div>
      {mode === 'contribute' && <a href="/review/" className="mt-7 inline-flex text-sm font-extrabold text-blue hover:text-ink">See how reviewers process submissions →</a>}
    </div>
  ) : null;

  return (
    <>
    <form onSubmit={onSubmit} className={`${packetUrl ? 'hidden' : ''} border border-line bg-white p-6 sm:p-8`}>
      {mode === 'contribute' ? (
        <>
          {recordKind === 'timeline' && <div className="mb-6 border-l-4 border-blue bg-blue/5 p-4"><a href="/timeline/" className="text-sm font-bold text-blue hover:text-ink">← Back to timeline</a><h2 className="mt-2 font-display text-xl font-black text-ink">Suggest a timeline milestone or correction</h2><p className="mt-2 text-sm leading-6 text-slate">Share the proposed year and wording with a public source so editors can review the change.</p></div>}
          <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><span className="icon-tile size-10 shadow-none">{recordKind === 'project' ? <Code2 className="size-5" /> : recordKind === 'policy' ? <FileText className="size-5" /> : <CalendarDays className="size-5" />}</span><div><p className="text-sm font-extrabold text-ink">Public evidence packet</p><p className="mt-1 text-xs text-slate">Choose the record you want the editors to verify.</p></div></div>
            <div className="grid grid-cols-3 border border-line bg-paper p-1" aria-label="Record type">
              {(['project', 'policy', 'timeline'] as RecordKind[]).map((kind) => <button key={kind} type="button" aria-pressed={recordKind === kind} onClick={() => selectRecordKind(kind)} className={`px-3 py-2 text-sm font-extrabold sm:px-4 ${recordKind === kind ? 'bg-ink text-white' : 'text-slate hover:text-ink'}`}>{kind[0].toUpperCase() + kind.slice(1)}</button>)}
            </div>
          </div>

          {recordKind === 'timeline' ? <TimelineFields changeType={timelineChangeType} setChangeType={setTimelineChangeType} /> : recordKind === 'policy' ? <PolicyFields /> : <ProjectFields />}

          <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-slate"><input required type="checkbox" className="mt-1 size-4 accent-blue" /> I used public information, checked the source links, and understand that editorial review comes before directory publication.</label>
          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="flex max-w-md items-start gap-2 text-xs leading-5 text-slate"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-green" /> Do not enter classified, export-controlled, personal, confidential, or security-sensitive nonpublic information.</p><button type="submit" className="button-primary justify-center"><ShieldCheck className="size-4" /> Prepare GitHub submission</button></div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 border-b border-line pb-6"><span className="icon-tile size-10 shadow-none"><CircleDot className="size-5" /></span><div><p className="text-sm font-extrabold text-ink">Public contact issue</p><p className="mt-1 text-xs text-slate">Corrections and questions are handled transparently on GitHub.</p></div></div>
          <div className="mt-7 grid gap-5">
            <Field label="Topic"><select required name="topic" defaultValue=""><option value="" disabled>Choose a topic</option><option>Correction</option><option>Source suggestion</option><option>Accessibility issue</option><option>General question</option></select></Field>
            <Field label="Message"><textarea required maxLength={2500} name="message" rows={8} placeholder="Include public source links and enough detail for an editor to act." /></Field>
          </div>
          <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-slate"><input required type="checkbox" className="mt-1 size-4 accent-blue" /> I understand this message will be public and contains no sensitive or personal information.</label>
          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-slate">GitHub sign-in is required at the final step.</p><button type="submit" className="button-primary justify-center">Prepare public issue</button></div>
        </>
      )}
    </form>
    {ready}
    </>
  );
}

function ProjectFields() {
  return <div className="mt-7 grid gap-5 sm:grid-cols-2">
    <Field label="Project name"><input required maxLength={120} name="projectName" placeholder="e.g. Service name" /></Field>
    <Field label="Government sponsor"><input required maxLength={180} name="sponsor" placeholder="Agency or department" /></Field>
    <Field label="Canonical agency IDs (optional)" wide><textarea maxLength={800} name="agencyIds" rows={3} aria-describedby="canonical-agency-ids-help" placeholder="us-gsa, us-nasa" onInput={(event) => event.currentTarget.setCustomValidity('')} /></Field>
    <p id="canonical-agency-ids-help" className="-mt-3 text-xs leading-5 text-slate sm:col-span-2">If known, enter existing agency IDs or propose lowercase slugs for editors to resolve in the reviewed data change. Separate multiple IDs with commas or new lines.</p>
    <Field label="Jurisdiction"><select required name="jurisdiction" defaultValue=""><option value="" disabled>Select one</option><option>U.S. federal</option><option>U.S. state</option><option>International</option></select></Field>
    <Field label="Geography"><input required maxLength={120} name="geography" placeholder="Country, state, or territory" /></Field>
    <Field label="Service domain"><input required maxLength={100} name="domain" placeholder="Cybersecurity, design systems…" /></Field>
    <Field label="SPDX license"><input required maxLength={100} name="license" placeholder="MIT, Apache-2.0, GPL-3.0-only…" /></Field>
    <Field label="Project status"><select required name="projectStatus" defaultValue="Active"><option>Active</option><option>Maintained</option><option>Reference</option></select></Field>
    <Field label="Repository URL" wide><input required type="url" pattern="https?://.*" name="repository" placeholder="https://github.com/organization/project" /></Field>
    <Field label="Official government source" wide><input required type="url" pattern="https?://.*" name="officialSource" placeholder="https://agency.gov/program-or-publication" /></Field>
    <Field label="Plain-language summary" wide><textarea required maxLength={1200} name="summary" rows={4} placeholder="What does the software do and who can learn from or reuse it?" /></Field>
    <Field label="Why it belongs" wide><textarea required maxLength={1800} name="notes" rows={5} placeholder="Explain exactly how the official source establishes direct government sponsorship, commissioning, or stewardship." /></Field>
  </div>;
}

function PolicyFields() {
  return <div className="mt-7 grid gap-5 sm:grid-cols-2">
    <Field label="Policy title" wide><input required maxLength={220} name="policyTitle" placeholder="Full official title" /></Field>
    <Field label="Issuing body"><input required maxLength={180} name="issuer" placeholder="Legislature, executive office, agency…" /></Field>
    <Field label="Geography"><input required maxLength={120} name="geography" placeholder="Country, state, or jurisdiction" /></Field>
    <Field label="Year"><input required type="text" pattern="(?:[0-9]{4}|Undated)" title="Enter a four-digit year or Undated" name="year" placeholder="2026 or Undated" /></Field>
    <Field label="Instrument type"><select required name="instrumentType" defaultValue=""><option value="" disabled>Select one</option><option>Law</option><option>Regulation</option><option>Executive action</option><option>Policy memorandum</option><option>Administrative policy</option><option>Strategy</option><option>Standard</option><option>Implementation guidance</option><option>Research / reference</option></select></Field>
    <Field label="Status"><select required name="status" defaultValue="Current"><option>Current</option><option>Reference</option><option>Superseded</option></select></Field>
    <Field label="Primary source" wide><input required type="url" pattern="https?://.*" name="primarySource" placeholder="https://official-government-source.example/policy" /></Field>
    <Field label="Plain-language summary" wide><textarea required maxLength={1400} name="summary" rows={5} placeholder="What does it require, authorize, recommend, or document? Avoid implying more than the source says." /></Field>
    <Field label="Why it belongs" wide><textarea required maxLength={1400} name="notes" rows={4} placeholder="Explain its direct relevance to government open source use, contribution, release, procurement, or stewardship." /></Field>
  </div>;
}

function TimelineFields({ changeType, setChangeType }: { changeType: TimelineChangeType; setChangeType: (type: TimelineChangeType) => void }) {
  return <div className="mt-7 grid gap-5 sm:grid-cols-2">
    <Field label="Change type" wide><select required name="timelineChangeType" value={changeType} onChange={(event) => setChangeType(event.target.value as TimelineChangeType)}><option>New milestone</option><option>Correction</option></select></Field>
    {changeType === 'Correction' && <Field label="Existing milestone (year and title)" wide><input required maxLength={240} name="existingMilestone" placeholder="2019 — NSA releases Ghidra" /></Field>}
    <Field label="Proposed year"><input required type="text" pattern="[0-9]{4}" maxLength={4} name="milestoneYear" placeholder="2026" title="Enter a four-digit year" /></Field>
    <Field label="Milestone title"><input required maxLength={160} name="milestoneTitle" placeholder="What happened?" /></Field>
    <Field label="Proposed description" wide><textarea required maxLength={1000} name="milestoneDescription" rows={4} placeholder="Explain the event and its relevance to government open source." /></Field>
    <Field label="Primary source URL" wide><input required type="url" pattern="https?://.*" name="milestoneSource" placeholder="https://official-source.example/milestone" /></Field>
    <Field label="Related GOSDIR record URL (optional)" wide><input type="url" name="relatedRecord" aria-describedby="related-record-help" onInput={(event) => event.currentTarget.setCustomValidity('')} placeholder="https://gosdir.com/directory/?project=..." /></Field>
    <p id="related-record-help" className="-mt-3 text-xs leading-5 text-slate sm:col-span-2">Use the link from an existing project or policy record, or leave this blank.</p>
    <Field label="Reason for this change" wide><textarea required maxLength={1200} name="timelineReason" rows={3} placeholder="Why should this milestone be added or corrected?" /></Field>
  </div>;
}

function projectPacket(form: FormData) {
  const name = value(form, 'projectName');
  return {
    title: `[submission: project] ${name}`,
    body: issueBody([
      ['Project name', name],
      ['Government sponsor', value(form, 'sponsor')],
      ['Canonical agency IDs', parseAgencyIds(value(form, 'agencyIds')).join(', ')],
      ['Geography', value(form, 'geography')],
      ['Jurisdiction', value(form, 'jurisdiction')],
      ['Service domain', value(form, 'domain')],
      ['Repository', value(form, 'repository')],
      ['Official source', value(form, 'officialSource')],
      ['Project status', value(form, 'projectStatus')],
      ['SPDX license', value(form, 'license')],
      ['Summary', value(form, 'summary')],
      ['Why it belongs', value(form, 'notes')],
      ['Submitter confirmation', 'I used only public information and understand this record requires editorial verification before publication.'],
    ]),
  };
}

function policyPacket(form: FormData) {
  const title = value(form, 'policyTitle');
  return {
    title: `[submission: policy] ${title}`,
    body: issueBody([
      ['Policy title', title],
      ['Issuer', value(form, 'issuer')],
      ['Geography', value(form, 'geography')],
      ['Year', value(form, 'year')],
      ['Instrument type', value(form, 'instrumentType')],
      ['Status', value(form, 'status')],
      ['Primary source', value(form, 'primarySource')],
      ['Summary', value(form, 'summary')],
      ['Why it belongs', value(form, 'notes')],
      ['Submitter confirmation', 'I checked the official source and will follow it for current policy details.'],
    ]),
  };
}

function timelinePacket(form: FormData) {
  const changeType = value(form, 'timelineChangeType');
  const title = value(form, 'milestoneTitle');
  const sections: Array<[string, string]> = [['Change type', changeType]];
  if (changeType === 'Correction') sections.push(['Existing milestone', value(form, 'existingMilestone')]);
  sections.push(
    ['Year', value(form, 'milestoneYear')],
    ['Milestone title', title],
    ['Description', value(form, 'milestoneDescription')],
    ['Primary source', value(form, 'milestoneSource')],
    ['Related record', value(form, 'relatedRecord')],
    ['Reason for change', value(form, 'timelineReason')],
    ['Submitter confirmation', 'I used public information and understand this timeline change requires editorial review before publication.'],
  );
  return {
    title: `[submission: timeline] ${changeType === 'Correction' ? 'Correction: ' : ''}${title}`,
    body: issueBody(sections),
  };
}

function contactPacket(form: FormData) {
  const topic = value(form, 'topic');
  return { title: `[contact] ${topic}`, body: issueBody([['Topic', topic], ['Message', value(form, 'message')], ['Privacy confirmation', 'This message contains only information suitable for a public GitHub issue.']]) };
}

function issueBody(sections: Array<[string, string]>) { return `${sections.map(([heading, content]) => `## ${heading}\n${content}`).join('\n\n')}\n\n---\nPrepared at https://gosdir.com/contribute/`; }
function value(form: FormData, name: string) { return String(form.get(name) ?? '').trim(); }

const agencyIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function parseAgencyIds(input: string) { return input.split(/[,\n]/).map((id) => id.trim()).filter(Boolean); }
function agencyIdsProblem(input: string) {
  const ids = parseAgencyIds(input);
  if (!ids.length) return '';
  const invalid = ids.filter((id) => !agencyIdPattern.test(id));
  if (invalid.length) return `Agency IDs must be lowercase slugs such as “us-gsa”. Invalid: ${invalid.join(', ')}.`;
  const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicates.length) return `Agency IDs must be unique. Repeated: ${duplicates.join(', ')}.`;
  return '';
}

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactElement<{ className?: string }> }) {
  return <label className={wide ? 'sm:col-span-2' : ''}><span className="mb-2 block text-sm font-extrabold text-ink">{label}</span><span className="form-field">{children}</span></label>;
}
