import { PageIntro } from '@/components/page-intro';
import { officialSources } from '@/lib/catalog/sources';

const criteria = [
  ['01', 'Government provenance', 'Official evidence must show that government created, commissioned, funded, sponsored, or directly stewarded the work; government use alone does not qualify.'],
  ['02', 'Public source', 'The canonical source repository must be accessible without an account or special permission.'],
  ['03', 'Eligible license', 'The project must use an OSI-approved license or carry a clear public-domain dedication. Source-available terms do not qualify.'],
  ['04', 'Primary evidence', 'An official government page, verified organization, policy, repository, or procurement record must establish that relationship.'],
];

const pipeline = [
  ['1', 'Discover', 'Catalog APIs, code.json, publiccode.yml, public forges, and submitted source links surface candidates.'],
  ['2', 'Queue', 'A structured public GitHub issue preserves the claim, sources, attribution, and discussion.'],
  ['3', 'Verify', 'An editor checks sponsor, canonical repository, license, status, summary, and duplicates.'],
  ['4', 'Publish', 'Accepted data ships through a normal reviewed commit with an evidence-review date.'],
];

export default function MethodologyPage() {
  return (
    <main>
      <PageIntro eyebrow="Methodology & roadmap" title="Trust is part of the data model." description="How records qualify, what coverage means, and why automated discovery, public submission, editorial verification, and publication remain separate steps." />
      <section className="page-shell py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="eyebrow text-blue">Inclusion standard</p><h2 className="section-title">Four checks before a record ships.</h2><p className="mt-5 text-sm leading-6 text-slate">Verification establishes identity, provenance, and license eligibility. It is not a security certification, maintenance promise, legal opinion, or procurement recommendation.</p></div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">{criteria.map(([number, title, body]) => <article key={number} className="bg-white p-6"><span className="font-mono text-xs font-black text-blue">{number}</span><h3 className="mt-8 font-display text-xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p></article>)}</div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="page-shell py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-blue">Moderated ingestion</p><h2 className="section-title">Automation finds. People decide.</h2><p className="mt-5 text-sm leading-6 text-slate">Discovery jobs may open or update candidate issues, but they should never write directly to the published catalog. The same evidence standard applies to human and machine suggestions.</p></div><ol className="grid gap-px border border-line bg-line sm:grid-cols-2">{pipeline.map(([number, title, body]) => <li key={number} className="bg-paper p-6"><span className="grid size-8 place-items-center rounded-full bg-blue font-mono text-xs font-black text-white">{number}</span><h3 className="mt-6 font-display text-xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p></li>)}</ol></div>
          <div className="mt-9 flex flex-col gap-4 border-l-4 border-signal bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-sm leading-6 text-white/65">The live queue reads open submission issues from GitHub. Its checklist is private to the reviewer’s browser; authenticated decisions, discussion, and issue status stay on GitHub.</p><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><a href="/review" className="button-light">Open review queue</a><a href="/contribute" className="button-secondary border-white text-white hover:bg-white hover:text-ink">Submit evidence</a></div></div>
        </div>
      </section>

      <section className="page-shell py-16 lg:py-20">
        <p className="eyebrow text-blue">Evidence network</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{officialSources.map((source) => <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="group border border-line bg-white p-5 hover:border-blue"><strong className="font-display text-lg tracking-tight group-hover:text-blue">{source.label} ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">{source.note}</span></a>)}</div>
        <div className="mt-10 grid gap-5 border-l-4 border-signal bg-ink p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="eyebrow text-signal">Important limitation</p><p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">The dataset is a source-backed starting point, not an exhaustive census. “No record” always means “not yet verified here.” Policies change; controlling sources take precedence.</p></div><a href="/guide" className="button-light">Use the release guide</a></div>
      </section>
    </main>
  );
}
