'use client';

import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Check,
  CircleStop,
  FileCheck2,
  GitBranch,
  KeyRound,
  PackageCheck,
  Printer,
  RefreshCw,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';

type Lens = 'federal' | 'state' | 'international';

const lenses: Record<Lens, { label: string; heading: string; body: React.ReactNode }> = {
  federal: {
    label: 'U.S. federal',
    heading: 'Separate employee work from third-party code.',
    body: <>Works created by U.S. federal employees as part of official duties generally lack domestic copyright protection under <a href="https://uscode.house.gov/view.xhtml?req=%28title%3A17%20section%3A105%20edition%3Aprelim%29" target="_blank" rel="noreferrer">17 U.S.C. § 105 ↗</a>. Contractor, grantee, partner, and pre-existing code can carry different rights. A clear public-domain notice may fit wholly federal work; mixed works need an authorized license and rights analysis.</>,
  },
  state: {
    label: 'U.S. state / local',
    heading: 'Follow state and local rights rules.',
    body: <>State and local works are usually governed by state law, contracts, and agency policy. Confirm ownership and release authority with counsel or the designated official. <a href="https://doit.maryland.gov/policies/Websites-and-Data/Pages/Maryland-Open-Source-Policy.aspx" target="_blank" rel="noreferrer">Maryland’s release policy ↗</a> is a useful operational model, and shows one approach to state-level release.</>,
  },
  international: {
    label: 'Outside the U.S.',
    heading: 'Start with local copyright and public-sector rules.',
    body: <>Government code is commonly protected by copyright outside the U.S. Confirm which public body owns or controls every contribution and who can license it. National frameworks such as <a href="https://www.data.govt.nz/toolkit/policies/nzgoal/nzgoal-se" target="_blank" rel="noreferrer">NZGOAL-SE ↗</a> and <a href="https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-a-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html" target="_blank" rel="noreferrer">Italy’s publication guide ↗</a> show the kind of local authority to follow.</>,
  },
};

const releaseChecks = [
  'Named an accountable program owner and the exact release candidate',
  'Mapped employee, contractor, partner, dependency, data, and media rights',
  'Confirmed authority to publish and accept outside contributions',
  'Completed classification, export, privacy, records, and other restriction reviews',
  'Removed secrets, credentials, sensitive history, test data, and unsafe defaults',
  'Verified dependency licenses and selected an OSI-approved license or clear public-domain notice',
  'Added README, LICENSE, CONTRIBUTING, SECURITY, support, and status information',
  'Recorded required legal, security, privacy, accessibility, records, and communications approvals',
  'Published from an authoritative organization with tagged source and release notes',
  'Assigned maintainers, vulnerability intake, review cadence, and an archive plan',
];

const steps = [
  {
    number: '01',
    icon: Users,
    label: 'Action',
    title: 'Name the owner and the release candidate.',
    body: 'Identify the accountable program official, intended users, public value, support posture, and the exact repository, branch, version, documentation, data, and assets proposed for release. Decide whether this is an active community project, reusable reference code, or an archival release.',
    evidence: ['Release scope and version', 'Named decision owner', 'Support and maintenance intent'],
  },
  {
    number: '02',
    icon: Scale,
    label: 'Decision gate',
    title: 'Can the organization authorize every part?',
    body: 'Trace authorship and rights file by file: employee work, contractor deliverables, grantee or partner contributions, copied snippets, dependencies, fonts, images, models, sample data, patents, and trademarks. Read the actual contracts and contribution terms.',
    evidence: ['Rights inventory', 'Contract/data-rights clauses', 'Third-party notices'],
    branch: { no: 'Do not publish the combined work. Obtain permission, replace or remove material, split a releasable component, or stop.', yes: 'Document the authority and continue to the restriction screen.' },
  },
  {
    number: '03',
    icon: CircleStop,
    label: 'Decision gate',
    title: 'Is the release clear of public-release restrictions?',
    body: 'Screen for classified or national-security information, export controls, controlled unclassified information, privacy and personal data, law-enforcement sensitivity, procurement restrictions, confidential business information, records obligations, court orders, and unreleased patent material.',
    evidence: ['Release/security review', 'Privacy and data review', 'Export/classification determination'],
    branch: { no: 'Keep the affected material private. If the concern can be safely removed or isolated, remediate it and repeat both gates.', yes: 'Document the clearance and continue to repository preparation.' },
  },
  {
    number: '04',
    icon: ShieldCheck,
    label: 'Action',
    title: 'Make the repository safe to publish.',
    body: 'Review the full Git history, not only the current files. Remove secrets and credentials, private endpoints, personal or production data, vulnerable examples, sensitive issue references, internal-only configuration, and generated artifacts. Run code, dependency, secret, and malware scans appropriate to the system.',
    evidence: ['History and secret scan', 'Dependency/SBOM review', 'Documented residual risks'],
  },
  {
    number: '05',
    icon: FileCheck2,
    label: 'License control',
    title: 'Can you grant recipients clear, open reuse rights?',
    body: 'Use a standard OSI-approved license when the organization controls licensable copyright. Check compatibility with inbound code and dependencies, procurement terms, patent needs, and contribution model. For material that is genuinely public domain, publish a precise notice explaining the basis and treatment outside the home jurisdiction.',
    evidence: ['License decision and approver', 'Compatibility review', 'SPDX identifiers and notices'],
    branch: { no: 'If clear reuse rights cannot be granted, it is not an open source release.', yes: 'Add the complete license text and per-file notices where needed.' },
  },
  {
    number: '06',
    icon: PackageCheck,
    label: 'Action',
    title: 'Prepare a release another team can actually reuse.',
    body: 'Include build and test instructions, architecture and API notes, dependency and data provenance, accessibility information, examples, release notes, and machine-readable metadata where your ecosystem uses it. Add contribution, conduct, security-reporting, support, governance, and deprecation expectations.',
    evidence: ['README and reproducible build', 'LICENSE and notices', 'CONTRIBUTING, SECURITY, governance'],
  },
  {
    number: '07',
    icon: KeyRound,
    label: 'Approval control',
    title: 'Have all required officials approved this exact release?',
    body: 'Route the final candidate through the reviews your organization requires. Common sign-offs include the program owner, counsel or intellectual-property office, security and public-release authority, privacy, export control, records, accessibility, procurement, and communications or trademark teams.',
    evidence: ['Final source hash or tag', 'Recorded approvals', 'Approved public description'],
    branch: { no: 'Resolve conditions and re-review the changed release candidate.', yes: 'Authorize publication from the official account.' },
  },
  {
    number: '08',
    icon: GitBranch,
    label: 'Action',
    title: 'Publish, announce, and steward.',
    body: 'Release from an authoritative organization, preserve the approved source tag, publish checksums or signed artifacts where appropriate, enable a safe vulnerability channel, and tell users what support they can expect. Triage issues and contributions, review dependencies and permissions, and archive clearly if stewardship ends.',
    evidence: ['Canonical repository and release', 'Maintainer and security contacts', 'Review and archive schedule'],
  },
];

export function ReleaseGuide() {
  const [lens, setLens] = useState<Lens>('federal');
  const [checked, setChecked] = useState<boolean[]>(Array(releaseChecks.length).fill(false));
  const complete = checked.filter(Boolean).length;
  const percent = useMemo(() => Math.round((complete / releaseChecks.length) * 100), [complete]);

  const reset = () => setChecked(Array(releaseChecks.length).fill(false));

  return <>
    <section className="border-b border-line bg-white">
      <div className="page-shell py-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-blue">The reusable release path</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-black tracking-[-.045em] text-ink sm:text-5xl">Clear the stop gates. Then earn the green light.</h2></div><button type="button" onClick={() => window.print()} className="button-secondary print:hidden"><Printer className="size-4" /> Print this guide</button></div>

        <div className="mt-9 grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch" aria-label="Release decision flow">
          <FlowNode label="Start" title="Define the release" detail="owner · scope · outcome" />
          <FlowArrow />
          <FlowNode label="Gate 1" title="Rights + authority" detail="control every part?" decision />
          <FlowArrow />
          <FlowNode label="Gate 2" title="Release restrictions" detail="safe and lawful?" decision />
          <FlowArrow />
          <FlowNode label="Finish" title="License · prepare · approve · steward" detail="publish only after sign-off" success />
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="flex items-start gap-3 border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-900"><CircleStop className="mt-0.5 size-5 shrink-0" /><p><strong>No authority or a non-remediable restriction?</strong> Stop. Public repository access is irreversible in practice.</p></div>
          <div className="flex items-start gap-3 border border-green/25 bg-green/5 p-4 text-sm leading-6 text-slate"><RefreshCw className="mt-0.5 size-5 shrink-0 text-green" /><p><strong className="text-ink">Remediable issue?</strong> Separate, replace, redact, or obtain permission—then repeat both gates on the final candidate.</p></div>
        </div>
      </div>
    </section>

    <section className="page-shell py-14 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
        <aside className="border border-line bg-ink p-6 text-white lg:sticky lg:top-24">
          <p className="eyebrow text-signal">Choose your legal lens</p>
          <div className="mt-5 grid gap-2" aria-label="Jurisdiction lens">{(Object.keys(lenses) as Lens[]).map((key) => <button key={key} type="button" aria-pressed={lens === key} onClick={() => setLens(key)} className={`border px-4 py-3 text-left text-sm font-extrabold ${lens === key ? 'border-signal bg-signal text-ink' : 'border-white/15 text-white/70 hover:border-white/45 hover:text-white'}`}>{lenses[key].label}</button>)}</div>
          <div className="mt-6 border-t border-white/15 pt-6"><h3 className="font-display text-xl font-black tracking-tight">{lenses[lens].heading}</h3><p className="mt-3 text-sm leading-6 text-white/65 [&_a]:font-bold [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-4">{lenses[lens].body}</p></div>
          <div className="mt-6 flex items-start gap-2 border-l-2 border-signal pl-3 text-xs leading-5 text-white/55"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-signal" /> Use this guide to organize the release decision. Follow controlling law, contracts, policy, and designated reviewers for your organization.</div>
        </aside>

        <ol className="relative grid gap-5 before:absolute before:bottom-8 before:left-[27px] before:top-8 before:w-px before:bg-line sm:before:left-[35px]">
          {steps.map((step) => <GuideStep key={step.number} {...step} />)}
        </ol>
      </div>
    </section>

    <section className="border-y border-line bg-white">
      <div className="page-shell py-14 lg:py-20">
        <div className="grid gap-9 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="eyebrow text-blue">Working checklist</p><h2 className="section-title">Build the release packet.</h2><p className="mt-5 text-base leading-7 text-slate">Checkmarks organize evidence during this page visit. Formal approvals remain with your designated reviewers.</p><div className="mt-7 border border-line bg-paper p-5"><div className="flex items-center justify-between gap-4"><span className="font-display text-3xl font-black text-ink">{percent}%</span><button type="button" onClick={reset} className="text-sm font-extrabold text-blue hover:text-ink">Reset</button></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-line"><div className="h-full bg-blue transition-[width]" style={{ width: `${percent}%` }} /></div><p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[.1em] text-slate">{complete} of {releaseChecks.length} prepared</p></div></div>
          <div className="grid gap-2">{releaseChecks.map((label, index) => <label key={label} className={`flex cursor-pointer items-start gap-3 border p-4 text-sm font-bold leading-6 text-ink focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 ${checked[index] ? 'border-green/25 bg-green/5' : 'border-line bg-paper hover:border-blue'}`}><input className="sr-only" type="checkbox" checked={checked[index]} onChange={() => setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))} /><span className="grid size-6 shrink-0 place-items-center rounded-full border border-green text-green">{checked[index] && <Check className="size-3.5" />}</span><span>{label}</span></label>)}</div>
        </div>
      </div>
    </section>

    <section className="page-shell py-14 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-blue">Primary-source toolkit</p><h2 className="section-title">Use the model. Follow your authority.</h2><p className="mt-5 text-base leading-7 text-slate">These official sources informed the common flow. They are examples and implementation aids; only the sources that govern your organization are controlling.</p></div><div className="grid gap-3 sm:grid-cols-2"><SourceLink title="OSI Approved Licenses" body="License eligibility and the Open Source Definition" url="https://opensource.org/licenses" /><SourceLink title="Code.mil OSS FAQ" body="U.S. federal rights, release, and restriction questions" url="https://code.mil/oss-faq.html" /><SourceLink title="NASA NPR 2210.1E" body="A detailed federal software-release process" url="https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_2210_001E_&page_name=Chapter2" /><SourceLink title="Maryland OSS Policy" body="A practical state release checklist" url="https://doit.maryland.gov/policies/Websites-and-Data/Pages/Maryland-Open-Source-Policy.aspx" /><SourceLink title="Canada publication guide" body="Approvals, rights, security, licenses, and repository files" url="https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/open-source-software/guide-for-publishing-open-source-code.html" /><SourceLink title="New Zealand NZGOAL-SE" body="Five-stage rights and release decision tree" url="https://www.data.govt.nz/toolkit/policies/nzgoal/nzgoal-se" /><SourceLink title="Italy Annex A" body="Repository preparation and publication mechanics" url="https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-a-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html" /><SourceLink title="Swiss publication instructions" body="Rights, security, governance, and legacy-code checks" url="https://www.bk.admin.ch/dam/en/sd-web/x1db81jEkYFk/Em002-2%20Instructions%20for%20Publishing%20OSS.pdf" /></div></div>
    </section>
  </>;
}

function FlowNode({ label, title, detail, decision, success }: { label: string; title: string; detail: string; decision?: boolean; success?: boolean }) { return <div className={`grid min-h-32 content-center border p-4 ${success ? 'border-green bg-green/5' : decision ? 'border-blue bg-blue/5' : 'border-ink bg-paper'}`}><span className={`eyebrow ${success ? 'text-green' : 'text-blue'}`}>{label}</span><strong className="mt-2 font-display text-lg leading-5 tracking-tight text-ink">{title}</strong><span className="mt-2 text-xs leading-5 text-slate">{detail}</span></div>; }
function FlowArrow() { return <span className="grid place-items-center text-blue" aria-hidden="true"><ArrowDown className="size-5 lg:hidden" /><ArrowRight className="hidden size-5 lg:block" /></span>; }

function GuideStep({ number, icon: Icon, label, title, body, evidence, branch }: typeof steps[number]) {
  return <li className="relative grid grid-cols-[56px_1fr] gap-4 sm:grid-cols-[72px_1fr] sm:gap-6"><span className="relative z-10 grid size-14 place-items-center border border-ink bg-signal font-mono text-xs font-black text-ink shadow-[3px_3px_0_#111b34] sm:size-[70px]"><Icon className="size-5 sm:size-6" /><span className="sr-only">Step {number}</span></span><article className="border border-line bg-white p-5 sm:p-7"><div className="flex flex-wrap items-center gap-2"><span className="eyebrow text-blue">{label}</span><span className="font-mono text-[11px] font-black text-slate">/ {number}</span></div><h3 className="mt-3 font-display text-2xl font-black tracking-[-.035em] text-ink">{title}</h3><p className="mt-4 text-sm leading-6 text-slate sm:text-base sm:leading-7">{body}</p><div className="mt-5 flex flex-wrap gap-2">{evidence.map((item) => <span key={item} className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-bold text-slate">{item}</span>)}</div>{branch && <div className="mt-6 grid gap-2 sm:grid-cols-2"><div className="border-l-4 border-red-500 bg-red-50 p-4 text-xs leading-5 text-red-900"><strong className="mb-1 block font-mono uppercase tracking-[.08em]">Blocked / no</strong>{branch.no}</div><div className="border-l-4 border-green bg-green/5 p-4 text-xs leading-5 text-slate"><strong className="mb-1 block font-mono uppercase tracking-[.08em] text-green">Clear / yes</strong>{branch.yes}</div></div>}</article></li>;
}

function SourceLink({ title, body, url }: { title: string; body: string; url: string }) { return <a href={url} target="_blank" rel="noreferrer" className="group border border-line bg-white p-5 hover:border-blue hover:shadow-[4px_4px_0_#b8f245]"><strong className="font-display text-lg tracking-tight text-ink group-hover:text-blue">{title} ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">{body}</span></a>; }
