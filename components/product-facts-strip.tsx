const facts = [
  { value: "12", label: "questions" },
  { value: "5", label: "impact areas" },
  { value: "3", label: "personalized actions" },
  { value: "~2 min", label: "to complete" },
];

export function ProductFactsStrip() {
  return (
    <section className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3 shadow-panel sm:grid-cols-2 sm:p-4 xl:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[1.15rem] border border-white/8 bg-black/20 px-4 py-3 text-center sm:text-left"
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
