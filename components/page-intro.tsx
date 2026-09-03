export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="page-shell grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-end md:py-18">
        <div>
          <p className="eyebrow text-blue">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[.92] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg">{description}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}

