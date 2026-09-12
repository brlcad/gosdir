import { PageIntro } from '@/components/page-intro';
import { ReleaseGuide } from '@/components/release-guide';

export default function GuidePage() {
  return <main>
    <PageIntro
      eyebrow="How to release government software"
      title="From public work to public repo."
      description="A practical, jurisdiction-aware path for deciding whether government software can be released, preparing it for safe reuse, recording approvals, and sustaining it after publication."
      aside={<div className="max-w-xs border-l-4 border-signal bg-ink p-5 text-white"><span className="eyebrow text-signal">Start with the gate</span><strong className="mt-2 block font-display text-lg">Authority and release restrictions come before license selection.</strong><span className="mt-2 block text-xs leading-5 text-white/60">A familiar open source license cannot cure missing rights or make restricted information publishable.</span></div>}
    />
    <ReleaseGuide />
  </main>;
}
