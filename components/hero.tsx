import Link from "next/link";

const trustPoints = [
  "Behavioral-science inspired",
  "Personalized impact scoring",
  "Actionable next steps",
];

export function Hero() {
  return (
    <section className="section-pad px-4 pt-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#07111F] px-6 py-12 shadow-panel sm:px-8 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-16">
        <div className="absolute inset-0 bg-hero-grid bg-[size:100%_100%,30px_30px,30px_30px] opacity-[0.16]" />
        <div className="absolute left-[-8%] top-[-10%] h-56 w-56 rounded-full bg-brand-teal/10 blur-[110px]" />
        <div className="absolute bottom-[-14%] right-[-8%] h-72 w-72 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            Small changes. Real impact.
          </div>

          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.5rem] lg:leading-[1.02]">
            Discover the lifestyle changes that create your biggest impact.
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            TinyWins analyzes your habits and shows the highest-impact improvements
            you can make in under 2 minutes.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link href="/assessment" className="btn-primary">
              Start Assessment
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="tw-card relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-teal/10 blur-[80px]" />
            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/60">
              Live product preview
            </div>

            <div className="mt-12 grid gap-4">
              <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">Impact Snapshot</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Your biggest opportunities</p>
                  </div>
                  <div className="rounded-full border border-brand-teal/20 bg-brand-teal/10 px-3 py-1 text-sm text-brand-teal">
                    2 min
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { name: "Transport", value: "High", tone: "bg-rose-400/10 text-rose-100" },
                    { name: "Food", value: "Medium", tone: "bg-amber-300/10 text-amber-50" },
                    { name: "Home", value: "Medium", tone: "bg-amber-300/10 text-amber-50" },
                  ].map((metric) => (
                    <div key={metric.name} className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-sm text-white/50">{metric.name}</p>
                      <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm ${metric.tone}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Top TinyWins
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Replace one short car trip this week",
                    "Swap 1-2 beef meals for lower-impact options",
                    "Batch online orders into fewer deliveries",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-brand-blue text-xs font-medium text-white">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-6 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
