import { Question } from "@/types/assessment";

export function QuestionCard({
  question,
  step,
  totalSteps,
  selectedValue,
  onSelect,
}: {
  question: Question;
  step: number;
  totalSteps: number;
  selectedValue?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/55">
          {question.section}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/55">
          {question.category}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/55">
          Step {step} of {totalSteps}
        </span>
      </div>

      <h2 className="mt-6 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
        {question.prompt}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
        Pick the answer that feels closest to your real routine. Close enough is perfect.
      </p>

      <div className="mt-8 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`rounded-[1.4rem] border px-4 py-4 text-left transition duration-200 sm:px-5 ${
                isSelected
                  ? "border-glow-mint/60 bg-glow-mint/12 shadow-glow"
                  : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-medium text-white">{option.label}</span>
                <span
                  className={`h-5 w-5 rounded-full border ${
                    isSelected
                      ? "border-glow-mint bg-glow-mint"
                      : "border-white/20 bg-transparent"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
