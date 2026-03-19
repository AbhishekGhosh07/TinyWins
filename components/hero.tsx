import Link from "next/link";

const floatingTags = [
  { label: "Food", className: "left-2 top-24 sm:left-8" },
  { label: "Transit", className: "right-3 top-20 sm:right-12" },
  { label: "Energy", className: "left-6 bottom-24 sm:left-16" },
  { label: "Shopping", className: "right-6 bottom-20 sm:right-20" },
  { label: "TinyWins Score", className: "left-1/2 top-6 -translate-x-1/2" },
];

function FloatingLabel({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`glass-panel absolute hidden rounded-full px-3 py-2 text-xs font-medium text-white/70 shadow-soft sm:flex ${className}`}
    >
      {label}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#060b16] px-6 py-10 shadow-soft sm:px-10 sm:py-14 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-hero-grid bg-[size:100%_100%,32px_32px,32px_32px] opacity-20" />
        <div className="absolute inset-y-0 right-[-8%] w-[40%] rounded-full bg-glow-mint/10 blur-[110px]" />
        <div className="absolute left-[10%] top-[-10%] h-44 w-44 rounded-full bg-glow-ice/12 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

        <div className="relative">
          {floatingTags.map((item) => (
            <FloatingLabel key={item.label} label={item.label} className={item.className} />
          ))}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-glow-mint" />
              Small changes. Real impact.
            </div>

            <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 shadow-soft">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-0.5 h-4 w-4 fill-current"
              >
                <path d="M8 6.5v11l9-5.5-9-5.5Z" />
              </svg>
            </div>

            <h1 className="text-balance mt-8 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.7rem] lg:leading-[1.02]">
              Focus on the lifestyle changes that actually matter.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              TinyWins helps you discover the few changes that can make the biggest
              difference for your lifestyle in just 2 minutes.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/assessment"
                className="inline-flex min-w-52 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-glow-pearl"
              >
                Start Assessment
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex min-w-52 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel rounded-[1.75rem] p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/45">
                <span>Impact Snapshot</span>
                <span>2 min</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { name: "Food", value: "34%" },
                  { name: "Transit", value: "28%" },
                  { name: "Home Energy", value: "21%" },
                ].map((metric) => (
                  <div
                    key={metric.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm text-white/55">{metric.name}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[1.75rem] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Top TinyWins
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Swap two weekly car trips for transit",
                  "Shift one high-impact meal this week",
                  "Lower standby energy at home",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/80">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-6 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
