import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { officialSources } from '@/lib/data';

const criteria = [
  ['01', 'Public sponsor', 'A government body or government-established delivery organization must directly sponsor, commission, or steward the work.'],
  ['02', 'Public source', 'The canonical source repository must be accessible without an account or special permission.'],
  ['03', 'Eligible license', 'The project must use an OSI-approved license or carry a clear public-domain dedication. Source-available terms do not qualify.'],
  ['04', 'Primary evidence', 'An official government page, verified organization, policy, or procurement record must establish sponsorship.'],
];

export default function MethodologyPage() {
  return (
    <main>
      <PageIntro eyebrow="Methodology & roadmap" title="Trust is part of the data model." description="How records qualify, what coverage means, where the launch dataset stops, and how a durable ingestion and review system should work." />
      <section className="page-shell py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow text-blue">Inclusion standard</p><h2 className="section-title">Four checks before a record ships.</h2><p className="mt-5 text-sm leading-6 text-slate">Verification establishes identity, provenance, and license eligibility. It is not a security certification, maintenance promise, or procurement recommendation.</p></div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">{criteria.map(([number, title, body]) => <article key={number} className="bg-white p-6"><span className="font-mono text-xs font-black text-blue">{number}</span><h3 className="mt-8 font-display text-xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="page-shell py-16 lg:py-20">
          <p className="eyebrow text-blue">Evidence network</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{officialSources.map((source) => <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="group border border-line bg-paper p-5 hover:border-blue"><strong className="font-display text-lg tracking-tight group-hover:text-blue">{source.label} ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">{source.note}</span></a>)}</div>
        </div>
      </section>

      <section className="page-shell py-16 lg:py-20">
        <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
          <RoadmapStep number="Now" title="Curated launch index" body="Project and policy records, transparent evidence links, coverage gaps, timeline, glossary, and a review-ready submission prototype." />
          <RoadmapStep number="Next" title="Automated discovery" body="Scheduled ingestion from code.json, publiccode.yml, government forges, catalog APIs, and the OSI license API." />
          <RoadmapStep number="Then" title="Public data utility" body="A moderation console, signed change log, freshness alerts, agency dashboards, and reusable JSON/CSV exports." />
        </div>
        <div className="mt-10 grid gap-5 border-l-4 border-signal bg-ink p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="eyebrow text-signal">Important limitation</p><p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">The launch dataset is a representative, source-backed starting point—not an exhaustive census. “No record” always means “not yet verified here.” Policies can change; controlling sources take precedence.</p></div><Link href="/contribute" className="button-light">Close a coverage gap</Link></div>
      </section>
    </main>
  );
}

function RoadmapStep({ number, title, body }: { number: string; title: string; body: string }) { return <article className="bg-white p-6 sm:p-8"><span className="license-pill">{number}</span><h2 className="mt-8 font-display text-2xl font-black tracking-tight">{title}</h2><p className="mt-3 text-sm leading-6 text-slate">{body}</p></article>; }
