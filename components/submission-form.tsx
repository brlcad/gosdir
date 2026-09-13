'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, CircleDot, Code2, FileText, LockKeyhole, RotateCcw, ShieldCheck } from 'lucide-react';

const ISSUE_URL = 'https://github.com/brlcad/gosdir/issues/new';
type RecordKind = 'project' | 'policy';

export function SubmissionForm({ mode = 'project' }: { mode?: 'project' | 'contact' }) {
  const [recordKind, setRecordKind] = useState<RecordKind>('project');
  const [packetUrl, setPacketUrl] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { title, body } = mode === 'contact' ? contactPacket(form) : recordKind === 'policy' ? policyPacket(form) : projectPacket(form);
    setPacketUrl(`${ISSUE_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`);
  };

  const ready = packetUrl ? (
    <div className="border border-green/25 bg-white p-8 text-center shadow-[7px_7px_0_#b8f245] sm:p-12">
      <CheckCircle2 className="mx-auto size-11 text-green" />
      <p className="eyebrow mt-5 text-green">Local validation complete</p>
      <h2 className="mt-3 font-display text-3xl font-black tracking-tight">Your {mode === 'contact' ? 'message' : `${recordKind} packet`} is ready.</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate">Nothing has been sent yet. Continue to GitHub, review the public issue one more time, then choose <strong className="text-ink">Submit new issue</strong>. Your GitHub account provides attribution without GOSDIR collecting contact details.</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={packetUrl} target="_blank" rel="noreferrer" className="button-primary justify-center"><CircleDot className="size-4" /> Continue on GitHub <ArrowUpRight className="size-4" /></a>
        <button type="button" className="button-secondary justify-center" onClick={() => setPacketUrl('')}><RotateCcw className="size-4" /> Edit packet</button>
      </div>
      {mode === 'project' && <a href="/review/" className="mt-7 inline-flex text-sm font-extrabold text-blue hover:text-ink">See how reviewers process submissions →</a>}
    </div>
  ) : null;

  return (
    <>
    <form onSubmit={onSubmit} className={`${packetUrl ? 'hidden' : ''} border border-line bg-white p-6 sm:p-8`}>
      {mode === 'project' ? (
        <>
          <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><span className="icon-tile size-10 shadow-none">{recordKind === 'project' ? <Code2 className="size-5" /> : <FileText className="size-5" />}</span><div><p className="text-sm font-extrabold text-ink">Public evidence packet</p><p className="mt-1 text-xs text-slate">Choose the record you want the editors to verify.</p></div></div>
            <div className="grid grid-cols-2 border border-line bg-paper p-1" aria-label="Record type">
              <button type="button" aria-pressed={recordKind === 'project'} onClick={() => setRecordKind('project')} className={`px-4 py-2 text-sm font-extrabold ${recordKind === 'project' ? 'bg-ink text-white' : 'text-slate hover:text-ink'}`}>Project</button>
              <button type="button" aria-pressed={recordKind === 'policy'} onClick={() => setRecordKind('policy')} className={`px-4 py-2 text-sm font-extrabold ${recordKind === 'policy' ? 'bg-ink text-white' : 'text-slate hover:text-ink'}`}>Policy</button>
            </div>
          </div>

          {recordKind === 'project' ? <ProjectFields /> : <PolicyFields />}

          <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-slate"><input required type="checkbox" className="mt-1 size-4 accent-blue" /> I used only public information, checked the source links, and understand that this packet becomes a public GitHub issue but does not automatically enter the directory.</label>
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

function projectPacket(form: FormData) {
  const name = value(form, 'projectName');
  return {
    title: `[submission: project] ${name}`,
    body: issueBody([
      ['Project name', name],
      ['Government sponsor', value(form, 'sponsor')],
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
      ['Submitter confirmation', 'I checked the official source and understand that GOSDIR summaries are orientation, not legal advice.'],
    ]),
  };
}

function contactPacket(form: FormData) {
  const topic = value(form, 'topic');
  return { title: `[contact] ${topic}`, body: issueBody([['Topic', topic], ['Message', value(form, 'message')], ['Privacy confirmation', 'This message contains only information suitable for a public GitHub issue.']]) };
}

function issueBody(sections: Array<[string, string]>) { return `${sections.map(([heading, content]) => `## ${heading}\n${content}`).join('\n\n')}\n\n---\nPrepared at https://gosdir.com/contribute/`; }
function value(form: FormData, name: string) { return String(form.get(name) ?? '').trim(); }

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactElement<{ className?: string }> }) {
  return <label className={wide ? 'sm:col-span-2' : ''}><span className="mb-2 block text-sm font-extrabold text-ink">{label}</span><span className="form-field">{children}</span></label>;
}
