const logos = ["NYU", "Vercel", "Loom", "Zapier", "Notion", "Linear"];

export function LogoRow() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-5 rounded-full border border-white/8 bg-white/[0.03] px-6 py-5 text-sm uppercase tracking-[0.28em] text-white/34 sm:gap-x-12">
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}
