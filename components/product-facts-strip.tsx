const facts = [
  { value: "12", label: "questions" },
  { value: "5", label: "impact areas" },
  { value: "3", label: "personalized actions" },
  { value: "~2 min", label: "to complete" },
];

type ProductFactsStripProps = {
  className?: string;
};

export function ProductFactsStrip({ className }: ProductFactsStripProps) {
  return (
    <section className={["px-4 pb-2 sm:px-6 lg:px-8", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.028))] p-3 shadow-panel backdrop-blur-2xl sm:grid-cols-2 sm:p-4 xl:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[1.15rem] border border-white/10 bg-black/20 px-4 py-3 text-center backdrop-blur-xl sm:text-left"
            >
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {fact.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/45">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
