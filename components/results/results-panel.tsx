import { RecommendationCard } from "@/components/results/recommendation-card";
import { AssessmentResult } from "@/types/assessment";

export function ResultsPanel({ result }: { result: AssessmentResult }) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Overall view</p>
          <div className="mt-5 flex flex-wrap items-end gap-3 sm:gap-4">
            <p className="text-5xl font-semibold tracking-tight text-white">
              {result.overallScore}
            </p>
            <p className="pb-2 text-sm text-white/50">Estimated impact score / 100</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/62">
            This score is a quick directional read, not a perfect footprint calculator.
            Think of it as a smart nudge toward the areas most worth your attention.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Personalized Insight</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">What matters most for you</h2>
          <p className="mt-4 text-base leading-8 text-white/70">{result.insight}</p>

          {result.positiveCategories.length ? (
            <div className="mt-8 rounded-[1.5rem] border border-emerald-400/15 bg-emerald-400/8 p-4">
              <p className="text-sm font-medium text-emerald-100">You&apos;re already doing well in</p>
              <p className="mt-2 text-sm leading-7 text-emerald-50/90">
                {result.positiveCategories.map((category) => category.label).join(" and ")}.
                Those habits are already keeping things lighter there, which is a strong base to build on.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Your Top TinyWins</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Three practical next steps</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          These picks are meant to feel realistic, not overwhelming. Start with the one that feels easiest to try this week.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {result.recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
