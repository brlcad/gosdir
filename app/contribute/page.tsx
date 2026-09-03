'use client';

import { PageIntro } from '@/components/page-intro';
import { SubmissionForm } from '@/components/submission-form';

const steps = [['1', 'Evidence check', 'Government ownership or direct sponsorship'], ['2', 'License check', 'OSI-approved SPDX expression or public domain'], ['3', 'Editorial review', 'Source quality, duplicates, and record language'], ['4', 'Publish & monitor', 'Freshness date and future change detection']];

export default function ContributePage() {
  return (
    <main>
      <PageIntro eyebrow="Verified submissions" title="Add a project of record." description="Help document public software that others can study, reuse, and build upon. Strong submissions include a canonical repository, license, and official sponsorship evidence." />
      <section className="page-shell grid gap-8 py-14 lg:grid-cols-[1fr_320px] lg:py-18">
        <SubmissionForm mode="project" />
        <aside className="h-fit border border-line bg-ink p-6 text-white lg:sticky lg:top-24">
          <p className="eyebrow text-signal">Verification path</p>
          <div className="mt-6 grid gap-5">{steps.map(([number, title, body]) => <div key={number} className="grid grid-cols-[30px_1fr] gap-3"><span className="grid size-7 place-items-center rounded-full bg-signal font-mono text-[10px] font-black text-ink">{number}</span><div><strong className="text-sm">{title}</strong><p className="mt-1 text-xs leading-5 text-white/55">{body}</p></div></div>)}</div>
          <div className="mt-7 border-t border-white/15 pt-6"><p className="text-xs leading-5 text-white/50">Launch prototype: validation is local and nothing is transmitted. The detailed production queue, threat model, and ingestion architecture are documented in the methodology.</p><a href="/methodology" className="mt-4 inline-block text-sm font-bold text-signal">Read methodology →</a></div>
        </aside>
      </section>
    </main>
  );
}
