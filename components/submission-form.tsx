'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2, Code2, LockKeyhole, ShieldCheck } from 'lucide-react';

export function SubmissionForm({ mode = 'project' }: { mode?: 'project' | 'contact' }) {
  const [complete, setComplete] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setComplete(true); };

  if (complete) return (
    <div className="border border-green/25 bg-green/5 p-8 text-center sm:p-12">
      <CheckCircle2 className="mx-auto size-10 text-green" />
      <h2 className="mt-5 font-display text-3xl font-black tracking-tight">{mode === 'project' ? 'Submission packet validated' : 'Message ready'}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate">This launch prototype validates locally and does not transmit data. The production plan connects this state to a moderated, auditable review queue.</p>
      <button type="button" className="button-secondary mt-6" onClick={() => setComplete(false)}>Start another</button>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-6 sm:p-8">
      {mode === 'project' ? (
        <>
          <div className="flex items-center gap-3 border-b border-line pb-6"><span className="icon-tile size-10 shadow-none"><Code2 className="size-5" /></span><div><p className="text-sm font-extrabold text-ink">Project evidence</p><p className="mt-1 text-xs text-slate">All fields are required unless marked optional.</p></div></div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Project name"><input required name="projectName" placeholder="e.g. Service name" /></Field>
            <Field label="Government sponsor"><input required name="sponsor" placeholder="Agency or department" /></Field>
            <Field label="Repository URL" wide><input required type="url" name="repository" placeholder="https://github.com/organization/project" /></Field>
            <Field label="Official government source" wide><input required type="url" name="officialSource" placeholder="https://agency.gov/program-or-policy" /></Field>
            <Field label="SPDX license"><input required name="license" placeholder="MIT, Apache-2.0, EUPL-1.2…" /></Field>
            <Field label="Jurisdiction"><select required name="jurisdiction" defaultValue=""><option value="" disabled>Select one</option><option>U.S. federal</option><option>U.S. state</option><option>International</option></select></Field>
            <Field label="Why it belongs" wide><textarea required name="notes" rows={5} placeholder="Describe the government sponsorship evidence and public value of the project." /></Field>
            <Field label="Your government/work email"><input required type="email" name="email" placeholder="name@agency.gov" /></Field>
            <Field label="Your name"><input required name="name" placeholder="Name" /></Field>
          </div>
          <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-slate"><input required type="checkbox" className="mt-1 size-4 accent-blue" /> I confirm the repository is public, the sponsorship evidence is accurate, and the stated license is OSI-approved or the work is clearly public domain.</label>
          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="flex max-w-sm items-start gap-2 text-xs leading-5 text-slate"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-green" /> Nothing publishes automatically. Every record requires editorial verification.</p><button type="submit" className="button-primary justify-center"><ShieldCheck className="size-4" /> Validate for review</button></div>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name"><input required name="name" placeholder="Your name" /></Field>
            <Field label="Email"><input required type="email" name="email" placeholder="you@example.org" /></Field>
            <Field label="Topic" wide><select required name="topic" defaultValue=""><option value="" disabled>Choose a topic</option><option>Correction</option><option>Research partnership</option><option>Press inquiry</option><option>General question</option></select></Field>
            <Field label="Message" wide><textarea required name="message" rows={7} placeholder="How can we help?" /></Field>
          </div>
          <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate">Preview mode · no data is transmitted.</p><button type="submit" className="button-primary justify-center">Validate message</button></div>
        </>
      )}
    </form>
  );
}

function Field({ label, wide, children }: { label: string; wide?: boolean; children: React.ReactElement<{ className?: string }> }) {
  return <label className={wide ? 'sm:col-span-2' : ''}><span className="mb-2 block text-xs font-extrabold text-ink">{label}</span><span className="form-field">{children}</span></label>;
}
