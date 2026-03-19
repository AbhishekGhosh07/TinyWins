import { CategorySummary } from "@/types/assessment";

const levelStyles = {
  High: {
    badge: "border-rose-400/30 bg-rose-500/18 text-rose-100",
    bar: "from-rose-500 via-rose-400 to-orange-300",
    label: "text-rose-200",
  },
  Medium: {
    badge: "border-amber-300/30 bg-amber-400/18 text-amber-50",
    bar: "from-amber-500 via-amber-300 to-yellow-100",
    label: "text-amber-100",
  },
  Low: {
    badge: "border-emerald-300/30 bg-emerald-400/18 text-emerald-50",
    bar: "from-emerald-500 via-emerald-300 to-lime-100",
    label: "text-emerald-100",
  },
};

export function ImpactSnapshot({ categories }: { categories: CategorySummary[] }) {
  return (
    <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            Your Impact Snapshot
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Where your impact shows up most</h2>
          <p className="mt-2 text-sm leading-6 text-white/58">
            Higher levels are the best places to focus first. Lower ones are already in a good spot.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {(["High", "Medium", "Low"] as const).map((level) => (
          <span
            key={level}
            className={`rounded-full border px-3 py-1 ${levelStyles[level].badge}`}
          >
            {level}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        {categories.map((category) => {
          const width = `${Math.max((category.total / category.maxScore) * 100, 12)}%`;

          return (
            <div
              key={category.key}
              className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-medium text-white">{category.label}</p>
                  <p className="mt-1 text-sm text-white/50">
                    Score {category.total} / {category.maxScore}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full border px-3 py-1 text-sm font-medium ${levelStyles[category.level].badge} ${levelStyles[category.level].label}`}
                >
                  {category.level}
                </span>
              </div>

              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${levelStyles[category.level].bar}`}
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
