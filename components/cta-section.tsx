import Link from "next/link";

export function CTASection() {
  return (
    <section id="cta" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-glow-mint/10 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-glow-ice/10 blur-[100px]" />
        <div className="relative">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
            Start Small
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to find your TinyWins?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
            A few better choices, chosen well, can change more than you think.
          </p>
          <Link
            href="/assessment"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-glow-pearl"
          >
            Start Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
