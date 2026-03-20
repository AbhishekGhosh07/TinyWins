import Link from "next/link";

export function CTASection() {
  return (
    <section id="cta" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] px-6 py-14 text-center shadow-panel sm:px-10 lg:px-16 lg:py-20">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[110px]" />
        <div className="relative">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
            Start Your TinyWins
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            See which changes deserve your attention first.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Cut through the noise, get a clear impact snapshot, and walk away with three practical next steps.
          </p>
          <Link href="/assessment" className="btn-primary mt-8">
            Start Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
