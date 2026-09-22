'use client';

import { PageIntro } from '@/components/page-intro';
import { SubmissionForm } from '@/components/submission-form';

const steps = [
  ['1', 'Prepare', 'The form turns public evidence into a structured GitHub issue.'],
  ['2', 'Confirm', 'You review the packet and submit it while signed in to GitHub.'],
  ['3', 'Verify', 'Editors check provenance, license, status, wording, and duplicates.'],
  ['4', 'Publish', 'Accepted records ship through a normal reviewed code change.'],
];

export default function ContributePage() {
  return (
    <main>
      <PageIntro eyebrow="Verified submissions" title="Bring the proof. Help map the work." description="Propose a government-sponsored open source project or a high-value policy source. Submissions use public GitHub issues and enter the directory after editorial review." />
      <section className="page-shell grid gap-8 py-14 lg:grid-cols-[1fr_320px] lg:py-18">
        <SubmissionForm mode="project" />
        <aside className="h-fit border border-line bg-ink p-6 text-white lg:sticky lg:top-24">
          <p className="eyebrow text-signal">Submission path</p>
          <div className="mt-6 grid gap-5">{steps.map(([number, title, body]) => <div key={number} className="grid grid-cols-[30px_1fr] gap-3"><span className="grid size-7 place-items-center rounded-full bg-signal font-mono text-[10px] font-black text-ink">{number}</span><div><strong className="text-sm">{title}</strong><p className="mt-1 text-xs leading-5 text-white/55">{body}</p></div></div>)}</div>
          <div className="mt-7 border-t border-white/15 pt-6"><p className="text-xs leading-5 text-white/55">The issue queue is public and auditable. Review checklists stay on each reviewer’s device; decisions and discussion stay on GitHub.</p><a href="/review/" className="mt-4 inline-block text-sm font-bold text-signal">Open the review queue →</a><a href="/methodology/" className="mt-3 block text-sm font-bold text-white/75 hover:text-white">Read the inclusion standard →</a></div>
        </aside>
      </section>
    </main>
  );
}
