'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Clipboard,
  ExternalLink,
  Github,
  Loader2,
  RefreshCw,
  Search,
  ShieldCheck,
} from 'lucide-react';

const REPOSITORY = 'brlcad/gosdir';
const API_URL = `https://api.github.com/repos/${REPOSITORY}/issues?state=open&per_page=100`;
const QUEUE_URL = `https://github.com/${REPOSITORY}/issues?q=is%3Aissue+is%3Aopen+%22%5Bsubmission%22+in%3Atitle`;
const STORAGE_KEY = 'gosdir-review-checklists-v1';

type QueueStatus = 'all' | 'unreviewed' | 'in-progress' | 'ready';

type GitHubIssue = {
  number: number;
  title: string;
  body: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
  user: { login: string; avatar_url: string } | null;
  labels: Array<{ name?: string } | string>;
  pull_request?: unknown;
};

type SavedChecks = Record<string, boolean[]>;

const projectChecks = [
  'Government sponsor and its direct role are supported',
  'Canonical repository is public and matches the project',
  'License is OSI-approved or public-domain status is clear',
  'Official source supports the sponsorship claim',
  'Duplicate, summary, status, and category checks are complete',
];

const policyChecks = [
  'Primary source is official and resolves to the instrument',
  'Issuer, jurisdiction, date, and instrument type are accurate',
  'Current, reference, or superseded status is supported',
  'Summary reflects the source without overstating its effect',
  'Duplicate, citation, and timeline checks are complete',
];

export function ReviewQueue() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [checks, setChecks] = useState<SavedChecks>({});
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<QueueStatus>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const loadQueue = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL, {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      if (!response.ok) throw new Error(response.status === 403 ? 'GitHub’s public API rate limit was reached.' : `GitHub returned ${response.status}.`);
      const data = await response.json() as GitHubIssue[];
      const submissions = data.filter((issue) => !issue.pull_request && isSubmission(issue));
      setIssues(submissions);
      setSelectedNumber((current) => submissions.some((issue) => issue.number === current) ? current : submissions[0]?.number ?? null);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'The public queue could not be loaded.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setChecks(JSON.parse(saved) as SavedChecks);
    } catch {
      // Local review state is an enhancement; the shared GitHub queue still works without it.
    }
    void loadQueue();
  }, []);

  const progressFor = (issue: GitHubIssue) => {
    const items = checks[String(issue.number)] ?? [];
    return { complete: items.filter(Boolean).length, total: checklistFor(issue).length };
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return issues.filter((issue) => {
      const progress = progressFor(issue);
      const issueStatus: Exclude<QueueStatus, 'all'> = progress.complete === 0 ? 'unreviewed' : progress.complete === progress.total ? 'ready' : 'in-progress';
      const matchesQuery = !needle || `${issue.title} ${issue.body ?? ''} ${issue.user?.login ?? ''}`.toLowerCase().includes(needle);
      return matchesQuery && (status === 'all' || status === issueStatus);
    });
  }, [checks, issues, query, status]);

  const selected = filtered.find((issue) => issue.number === selectedNumber) ?? filtered[0] ?? null;
  const readyCount = issues.filter((issue) => {
    const progress = progressFor(issue);
    return progress.complete === progress.total;
  }).length;
  const startedCount = issues.filter((issue) => progressFor(issue).complete > 0).length;

  const toggleCheck = (issue: GitHubIssue, index: number) => {
    const existing = checks[String(issue.number)] ?? Array(checklistFor(issue).length).fill(false);
    const nextIssueChecks = [...existing];
    nextIssueChecks[index] = !nextIssueChecks[index];
    const next = { ...checks, [String(issue.number)]: nextIssueChecks };
    setChecks(next);
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* keep this session usable */ }
  };

  const copyDraft = async (issue: GitHubIssue) => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(recordDraft(issue), null, 2));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="page-shell py-10 lg:py-14" aria-labelledby="queue-heading">
      <div className="border border-line bg-ink text-white">
        <div className="grid gap-8 border-b border-white/15 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-signal">Shared moderation surface</p>
            <h2 id="queue-heading" className="mt-3 font-display text-3xl font-black tracking-[-.04em] sm:text-4xl">Evidence first. Publishing last.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">Open GitHub issues are the shared record. This page adds a private, device-local checklist so reviewers can inspect a submission before proposing a data change.</p>
          </div>
          <a href={QUEUE_URL} target="_blank" rel="noreferrer" className="button-light shrink-0"><Github className="size-4" /> Open queue on GitHub</a>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-white/15">
          <QueueMetric value={issues.length} label="Open" />
          <QueueMetric value={startedCount} label="Started here" />
          <QueueMetric value={readyCount} label="Checklist ready" />
        </dl>
      </div>

      <div className="mt-6 grid gap-3 border border-line bg-white p-4 md:grid-cols-[1fr_220px_auto]">
        <label className="filter-control"><Search className="size-4 text-blue" /><span className="sr-only">Search submissions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search project, agency, issue…" className="w-full bg-transparent outline-none" /></label>
        <label className="filter-control"><span className="font-mono text-[10px] font-bold text-blue">STATE</span><span className="sr-only">Filter review state</span><select value={status} onChange={(event) => setStatus(event.target.value as QueueStatus)} className="w-full appearance-none bg-transparent outline-none"><option value="all">All submissions</option><option value="unreviewed">Unreviewed</option><option value="in-progress">In progress</option><option value="ready">Checklist ready</option></select></label>
        <button type="button" onClick={() => void loadQueue()} className="button-secondary justify-center" disabled={loading}><RefreshCw className={`size-4 ${loading ? 'animate-spin' : ''}`} /> Refresh</button>
      </div>

      {loading && !issues.length ? (
        <div className="mt-6 grid min-h-72 place-items-center border border-line bg-white text-center"><div><Loader2 className="mx-auto size-8 animate-spin text-blue" /><p className="mt-4 text-sm font-bold text-ink">Loading the public queue…</p></div></div>
      ) : error && !issues.length ? (
        <QueueMessage icon={<AlertTriangle className="size-8 text-blue" />} title="The embedded queue is temporarily unavailable" body={`${error} You can continue reviewing on GitHub; no submissions or checklist data were changed.`} action={<a href={QUEUE_URL} target="_blank" rel="noreferrer" className="button-primary">Open GitHub queue <ExternalLink className="size-4" /></a>} />
      ) : !issues.length ? (
        <QueueMessage icon={<CheckCircle2 className="size-9 text-green" />} title="The review queue is clear" body="There are no open issues marked as directory submissions. New project and policy packets will appear here after a contributor finishes the final GitHub submission step." action={<a href="/contribute/" className="button-primary">Prepare a submission</a>} />
      ) : !filtered.length ? (
        <QueueMessage icon={<Search className="size-8 text-blue" />} title="No submissions match" body="Try a broader search or change the review-state filter." action={<button type="button" onClick={() => { setQuery(''); setStatus('all'); }} className="button-secondary">Reset filters</button>} />
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="grid max-h-[760px] gap-2 overflow-y-auto pr-1" aria-label="Open submissions">
            {filtered.map((issue) => {
              const progress = progressFor(issue);
              return <button type="button" key={issue.number} onClick={() => { setSelectedNumber(issue.number); setCopied(false); }} className={`border bg-white p-5 text-left transition-all hover:border-blue hover:shadow-[4px_4px_0_#b8f245] ${selected?.number === issue.number ? 'border-blue shadow-[4px_4px_0_#b8f245]' : 'border-line'}`}>
                <span className="flex items-center justify-between gap-3"><span className="license-pill">{kindFor(issue)}</span><span className="font-mono text-[11px] font-bold text-slate">#{issue.number}</span></span>
                <strong className="mt-4 block font-display text-lg leading-6 tracking-tight text-ink">{cleanTitle(issue.title)}</strong>
                <span className="mt-3 flex items-center justify-between gap-3 text-xs text-slate"><span>@{issue.user?.login ?? 'unknown'}</span><span>{progress.complete}/{progress.total} checked</span></span>
                <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-line"><span className="block h-full bg-blue" style={{ width: `${(progress.complete / progress.total) * 100}%` }} /></span>
              </button>;
            })}
          </div>

          {selected && <ReviewDetail issue={selected} checked={checks[String(selected.number)] ?? []} toggleCheck={toggleCheck} copyDraft={copyDraft} copied={copied} />}
        </div>
      )}

      <div className="mt-6 flex items-start gap-3 border-l-4 border-signal bg-white p-5 text-sm leading-6 text-slate"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-green" /><p><strong className="text-ink">Security boundary:</strong> issue text is displayed as plain text, links are limited to HTTP(S), and the checklist stays in this browser. Approval, discussion, and closing remain authenticated GitHub actions; publication still requires a reviewed code change.</p></div>
    </section>
  );
}

function ReviewDetail({ issue, checked, toggleCheck, copyDraft, copied }: { issue: GitHubIssue; checked: boolean[]; toggleCheck: (issue: GitHubIssue, index: number) => void; copyDraft: (issue: GitHubIssue) => void; copied: boolean }) {
  const fields = fieldsFor(issue);
  const checklist = checklistFor(issue);
  const complete = checked.filter(Boolean).length;
  const ready = complete === checklist.length;
  return <article className="border border-line bg-white">
    <header className="border-b border-line bg-paper p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2"><span className="license-pill">{kindFor(issue)} submission</span><span className={ready ? 'status-pill' : 'rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate'}>{ready ? 'checklist ready' : `${complete} of ${checklist.length} checks`}</span><span className="ml-auto font-mono text-xs font-bold text-slate">#{issue.number}</span></div>
      <h3 className="mt-5 font-display text-2xl font-black tracking-[-.035em] text-ink sm:text-3xl">{cleanTitle(issue.title)}</h3>
      <p className="mt-3 text-xs text-slate">Opened by @{issue.user?.login ?? 'unknown'} · {formatDate(issue.created_at)} · updated {formatDate(issue.updated_at)}</p>
    </header>

    <div className="p-6 sm:p-8">
      {Object.keys(fields).length > 0 && <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">{Object.entries(fields).map(([label, value]) => <div key={label} className={label === 'Summary' || label === 'Why it belongs' ? 'bg-white p-4 sm:col-span-2' : 'bg-white p-4'}><dt className="eyebrow text-slate">{label}</dt><dd className="mt-2 break-words text-sm font-semibold leading-6 text-ink">{safeUrl(value) ? <a href={value} target="_blank" rel="noreferrer" className="text-blue underline decoration-blue/30 underline-offset-4 hover:text-ink">{value} ↗</a> : value}</dd></div>)}</dl>}

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4"><div><p className="eyebrow text-blue">Editorial checklist</p><h4 className="mt-2 font-display text-xl font-black tracking-tight">Prove each claim before drafting.</h4></div><span className="font-mono text-xs font-bold text-slate">Saved on this device</span></div>
        <div className="mt-5 grid gap-2">{checklist.map((label, index) => <label key={label} className={`flex cursor-pointer items-start gap-3 border p-4 text-sm font-bold leading-6 transition-colors ${checked[index] ? 'border-green/25 bg-green/5 text-green' : 'border-line bg-paper text-ink hover:border-blue'}`}><input type="checkbox" checked={Boolean(checked[index])} onChange={() => toggleCheck(issue, index)} className="sr-only" /><span className="grid size-6 shrink-0 place-items-center rounded-full border border-current">{checked[index] && <Check className="size-3.5" />}</span><span>{label}</span></label>)}</div>
      </div>

      <details className="mt-8 border border-line bg-paper p-5"><summary className="cursor-pointer text-sm font-extrabold text-ink">View raw submission text</summary><pre className="mt-4 whitespace-pre-wrap break-words font-sans text-xs leading-6 text-slate">{issue.body || 'No issue body was provided.'}</pre></details>

      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
        <a href={issue.html_url} target="_blank" rel="noreferrer" className="button-primary justify-center"><Github className="size-4" /> Discuss on GitHub</a>
        <button type="button" onClick={() => void copyDraft(issue)} className="button-secondary justify-center"><Clipboard className="size-4" /> {copied ? 'Draft copied' : 'Copy record draft'}</button>
      </div>
      {ready && <p className="mt-5 flex items-start gap-2 border-l-4 border-green bg-green/5 p-4 text-sm leading-6 text-slate"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green" /><span><strong className="text-ink">Ready for an editor decision.</strong> Record completion here does not approve or publish it; leave the evidence decision on GitHub and ship accepted data through normal review.</span></p>}
    </div>
  </article>;
}

function QueueMetric({ value, label }: { value: number; label: string }) { return <div className="p-4 text-center sm:px-8"><dt className="text-xs font-bold text-white/50">{label}</dt><dd className="mt-1 font-mono text-2xl font-black text-signal">{value}</dd></div>; }

function QueueMessage({ icon, title, body, action }: { icon: React.ReactNode; title: string; body: string; action: React.ReactNode }) { return <div className="mt-6 grid min-h-80 place-items-center border border-line bg-white px-6 py-14 text-center"><div className="max-w-xl">{<span className="mx-auto grid place-items-center">{icon}</span>}<h3 className="mt-5 font-display text-2xl font-black tracking-tight text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p><div className="mt-6 flex justify-center">{action}</div></div></div>; }

function isSubmission(issue: GitHubIssue) {
  const labels = issue.labels.map((label) => typeof label === 'string' ? label : label.name ?? '');
  return issue.title.toLowerCase().startsWith('[submission') || labels.some((label) => label.toLowerCase() === 'submission');
}

function kindFor(issue: GitHubIssue) { return issue.title.toLowerCase().includes('policy') || fieldValue(issue.body, 'Policy title') ? 'policy' : 'project'; }
function checklistFor(issue: GitHubIssue) { return kindFor(issue) === 'policy' ? policyChecks : projectChecks; }
function cleanTitle(title: string) { return title.replace(/^\[submission(?::\s*(?:project|policy))?\]\s*/i, '').trim() || 'Untitled submission'; }
function formatDate(value: string) { return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(value)); }

function fieldValue(body: string | null, heading: string) {
  if (!body) return '';
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = body.match(new RegExp(`(?:^|\\n)#{2,3}\\s+${escaped}\\s*\\n+([\\s\\S]*?)(?=\\n#{2,3}\\s+|$)`, 'i'));
  return match?.[1]?.replace(/<!--[^]*?-->/g, '').trim() ?? '';
}

function fieldsFor(issue: GitHubIssue) {
  const definitions: Array<[string, string[]]> = kindFor(issue) === 'policy'
    ? [
      ['Policy title', ['Policy title']], ['Issuer', ['Issuer']], ['Geography', ['Geography']], ['Year', ['Year']],
      ['Instrument type', ['Instrument type']], ['Status', ['Status']], ['Primary source', ['Primary source']],
      ['Summary', ['Summary', 'Summary and relevance']], ['Why it belongs', ['Why it belongs']],
    ]
    : [
      ['Project name', ['Project name']], ['Government sponsor', ['Government sponsor']], ['Geography', ['Geography']],
      ['Jurisdiction', ['Jurisdiction']], ['Service domain', ['Service domain']], ['Repository', ['Repository', 'Canonical repository']],
      ['Official source', ['Official source']], ['License', ['SPDX license', 'SPDX license or public-domain basis']],
      ['Summary', ['Summary', 'Summary and evidence']], ['Why it belongs', ['Why it belongs']],
    ];
  return Object.fromEntries(definitions.map(([label, aliases]) => [label, aliases.map((heading) => fieldValue(issue.body, heading)).find(Boolean) ?? '']).filter(([, value]) => value)) as Record<string, string>;
}

function safeUrl(value: string) {
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol); } catch { return false; }
}

function recordDraft(issue: GitHubIssue) {
  const isPolicy = kindFor(issue) === 'policy';
  if (isPolicy) return {
    id: slugify(fieldValue(issue.body, 'Policy title') || cleanTitle(issue.title)),
    year: Number(fieldValue(issue.body, 'Year')) || new Date().getUTCFullYear(),
    title: fieldValue(issue.body, 'Policy title') || cleanTitle(issue.title),
    issuer: fieldValue(issue.body, 'Issuer'),
    geography: fieldValue(issue.body, 'Geography'),
    type: fieldValue(issue.body, 'Instrument type'),
    status: fieldValue(issue.body, 'Status') || 'Reference',
    summary: firstField(issue.body, ['Summary', 'Summary and relevance']),
    url: fieldValue(issue.body, 'Primary source'),
    reviewed: new Date().toISOString().slice(0, 10),
  };
  const jurisdiction = fieldValue(issue.body, 'Jurisdiction');
  return {
    id: slugify(fieldValue(issue.body, 'Project name') || cleanTitle(issue.title)),
    name: fieldValue(issue.body, 'Project name') || cleanTitle(issue.title),
    summary: firstField(issue.body, ['Summary', 'Summary and evidence']),
    sponsor: fieldValue(issue.body, 'Government sponsor'),
    geography: fieldValue(issue.body, 'Geography'),
    jurisdiction,
    domain: fieldValue(issue.body, 'Service domain'),
    license: firstField(issue.body, ['SPDX license', 'SPDX license or public-domain basis']),
    repository: firstField(issue.body, ['Repository', 'Canonical repository']),
    officialUrl: fieldValue(issue.body, 'Official source'),
    status: 'Reference',
    verified: new Date().toISOString().slice(0, 10),
    tags: [],
  };
}

function firstField(body: string | null, headings: string[]) {
  return headings.map((heading) => fieldValue(body, heading)).find(Boolean) ?? '';
}

function slugify(value: string) { return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 64); }
