import { PageIntro } from '@/components/page-intro';
import { ProjectExplorer } from '@/components/project-explorer';
import { representedAgencyIds } from '@/lib/catalog/agency-relations';
import { projects } from '@/lib/catalog/software';

export default function DirectoryPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Project directory"
        title="Open source, with a public mandate."
        description="Explore reusable software with an identifiable government sponsor and an OSI-approved license or clear public-domain status. Every record links to its evidence."
        aside={<div className="grid grid-cols-2 gap-px border border-line bg-line"><Stat value={String(projects.length)} label="Launch records" /><Stat value={String(representedAgencyIds.size)} label="Agencies represented" /></div>}
      />
      <ProjectExplorer />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="min-w-32 bg-white p-4"><strong className="font-display text-3xl font-black text-blue">{value}</strong><span className="mt-1 block font-mono text-[9px] font-bold uppercase tracking-[.12em] text-slate">{label}</span></div>;
}

