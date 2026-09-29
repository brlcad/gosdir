import { PageIntro } from '@/components/page-intro';
import { freshnessSnapshot } from '@/lib/catalog/freshness';
import { officialSources } from '@/lib/catalog/sources';

const criteria = [
  [
    '01',
    'Government provenance',
    'Official evidence establishes government creation, commissioning, funding, sponsorship, or direct stewardship of the work.',
  ],
  [
    '02',
    'Public source',
    'The canonical source repository must be accessible without an account or special permission.',
  ],
  [
    '03',
    'Eligible license',
    'The project uses an OSI-approved license or carries a clear public-domain dedication.',
  ],
  [
    '04',
    'Primary evidence',
    'An official government page, verified organization, policy, repository, or procurement record must establish that relationship.',
  ],
];

const freshnessScale = [
  ['Fresh', 'Last default-branch commit within 6 calendar months.'],
  [
    'Current',
    'Last default-branch commit more than 6 and no more than 24 months ago.',
  ],
  [
    'Quiet',
    'Last default-branch commit more than 24 and no more than 48 months ago.',
  ],
  [
    'Historical',
    'Last default-branch commit more than 48 months ago, or the observed repository is archived.',
  ],
  [
    'Unknown',
    'The reviewer could not establish a public default-branch activity date.',
  ],
];

const pipeline = [
  [
    '1',
    'Discover',
    'Catalog APIs, code.json, publiccode.yml, public forges, and submitted source links surface candidates.',
  ],
  [
    '2',
    'Queue',
    'A structured public GitHub issue preserves the claim, sources, attribution, and discussion.',
  ],
  [
    '3',
    'Verify',
    'An editor checks sponsor, canonical repository, license, status, summary, and duplicates.',
  ],
  [
    '4',
    'Publish',
    'Accepted data ships through a normal reviewed commit with an evidence-review date.',
  ],
];

const observedProjects = Object.keys(freshnessSnapshot.projects).length;
const snapshotDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(`${freshnessSnapshot.generatedAt}T00:00:00Z`));

export default function MethodologyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Methodology & roadmap"
        title="Trust is part of the data model."
        description="How records qualify, what coverage means, and why automated discovery, public submission, editorial verification, and publication remain separate steps."
      />
      <section className="page-shell py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-blue">Inclusion standard</p>
            <h2 className="section-title">
              Four checks before a record ships.
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate">
              Each verified record brings together government provenance, public
              source, an eligible license, and primary evidence.
            </p>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {criteria.map(([number, title, body]) => (
              <article key={number} className="bg-white p-6">
                <span className="font-mono text-xs font-black text-blue">
                  {number}
                </span>
                <h3 className="mt-8 font-display text-xl font-black tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="page-shell py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-blue">Repository freshness</p>
              <h2 className="section-title">
                A dated activity signal, separate from stewardship.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate">
                The sparkline counts commits currently reachable from the
                repository’s default branch in each of the last five calendar
                years. The current year is year to date, and each project’s
                log-scaled trend is sized to itself, so heights are not
                comparable between projects.
              </p>
              <div className="mt-7 border-l-4 border-signal bg-ink p-5 text-white">
                <p className="font-display text-xl font-black">
                  {observedProjects} records checked
                </p>
                <p className="mt-2 text-xs leading-5 text-white/65">
                  Snapshot generated {snapshotDate}. Catalog validation rejects
                  snapshots older than 45 days.
                </p>
              </div>
            </div>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {freshnessScale.map(([label, description]) => (
                <article key={label} className="bg-paper p-5">
                  <h3 className="font-display text-lg font-black tracking-tight">
                    {label}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate">
                    {description}
                  </p>
                </article>
              ))}
              <article className="bg-paper p-5">
                <h3 className="font-display text-lg font-black tracking-tight">
                  How to read it
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate">
                  Commit recency is an activity observation. It does not
                  establish maintenance quality, release support, security, or
                  the catalog’s editorial stewardship status.
                </p>
              </article>
            </div>
          </div>
          <div className="mt-8 grid gap-5 border border-line bg-paper p-6 md:grid-cols-2">
            <div>
              <p className="eyebrow text-blue">Daily availability review</p>
              <p className="mt-3 text-sm leading-6 text-slate">
                A GitHub Actions job checks every record each day, including
                records already disabled. It tests the repository, official
                page, and provenance link, follows validated public HTTPS
                redirects, and records access, redirect, rate-limit, and failure
                outcomes.
              </p>
            </div>
            <div>
              <p className="eyebrow text-blue">Careful status changes</p>
              <p className="mt-3 text-sm leading-6 text-slate">
                One GET-confirmed missing page or durable DNS, connection, or
                certificate failure warns; two daily failures in a row disable
                the record. A healthy check re-enables an automatically disabled
                record. Authentication blocks, rate limits, timeouts, resets,
                and transient server errors are inconclusive, so they do not
                flip directory status.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-5 border border-line bg-paper p-6 md:grid-cols-2">
            <div>
              <p className="eyebrow text-blue">Machine check</p>
              <p className="mt-3 text-sm leading-6 text-slate">
                Reachability answers whether an anonymous client can reach the
                public source and evidence. It cannot prove that a page still
                establishes government sponsorship, that the license remains
                eligible, or that the returned content is still the intended
                evidence.
              </p>
            </div>
            <div>
              <p className="eyebrow text-blue">Editorial verification</p>
              <p className="mt-3 text-sm leading-6 text-slate">
                Editors can disable a record with a reviewed public reason when
                it no longer meets an inclusion criterion. Automation never
                clears that hold or changes the evidence-review date. An enabled
                record whose substantive review is more than one year old blocks
                unattended publication until an editor re-verifies its evidence
                or records a disable reason. The direct record view remains
                available so the status and reason stay auditable.
              </p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate">
            Normal updates are proposed with the rebuilt static site in a bot
            pull request and queued for automatic merge after required checks.
            Ambiguous or unusually broad changes require an editor. Merging the
            repository change does not itself deploy the separate Apache host.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="page-shell py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow text-blue">Moderated ingestion</p>
              <h2 className="section-title">
                Automation finds. People decide.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate">
                Discovery jobs open or update candidate issues. Editors publish
                qualified records through reviewed code changes, applying the
                same evidence standard to every suggestion.
              </p>
            </div>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {pipeline.map(([number, title, body]) => (
                <li key={number} className="bg-paper p-6">
                  <span className="grid size-8 place-items-center rounded-full bg-blue font-mono text-xs font-black text-white">
                    {number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-black tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-9 flex flex-col gap-4 border-l-4 border-signal bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-white/65">
              The live queue reads open submission issues from GitHub. Its
              checklist is private to the reviewer’s browser; authenticated
              decisions, discussion, and issue status stay on GitHub.
            </p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="/review" className="button-light">
                Open review queue
              </a>
              <a
                href="/contribute"
                className="button-secondary border-white text-white hover:bg-white hover:text-ink"
              >
                Submit evidence
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 lg:py-20">
        <p className="eyebrow text-blue">Evidence network</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {officialSources.map((source) => (
            <a
              key={source.label}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="group border border-line bg-white p-5 hover:border-blue"
            >
              <strong className="font-display text-lg tracking-tight group-hover:text-blue">
                {source.label} ↗
              </strong>
              <span className="mt-2 block text-xs leading-5 text-slate">
                {source.note}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 grid gap-5 border-l-4 border-signal bg-ink p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="eyebrow text-signal">How to read coverage</p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">
              Coverage grows as sources are reviewed. Each record links to
              primary evidence; follow those sources for current policy details.
            </p>
          </div>
          <a href="/guide" className="button-light">
            Use the release guide
          </a>
        </div>
      </section>
    </main>
  );
}
