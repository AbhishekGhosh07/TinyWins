import { Recommendation } from "@/types/assessment";

const impactTone = {
  High: "border-rose-400/30 bg-rose-500/16 text-rose-100",
  Medium: "border-amber-300/30 bg-amber-400/16 text-amber-50",
  Low: "border-emerald-300/30 bg-emerald-400/16 text-emerald-50",
};

export function RecommendationCard({
  recommendation,
  index,
}: {
  recommendation: Recommendation;
  index: number;
}) {
  return (
    <article className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
          TinyWin 0{index + 1}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${impactTone[recommendation.impact]}`}
        >
          {recommendation.impact} impact
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
          {recommendation.difficulty}
        </span>
      </div>

      <h3 className="mt-5 min-h-[3.5rem] text-xl font-semibold text-white">
        {recommendation.title}
      </h3>
      <p className="mt-2 text-sm text-white/50">{recommendation.category}</p>

      <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-black/20 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-white/42">Why this matters</p>
        <p className="mt-2 text-sm leading-7 text-white/68">{recommendation.why}</p>
      </div>
    </article>
  );
}
