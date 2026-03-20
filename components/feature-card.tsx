type FeatureCardProps = {
  title: string;
  description: string;
  number: string;
  eyebrow?: string;
};

export function FeatureCard({ title, description, number, eyebrow }: FeatureCardProps) {
  return (
    <article className="tw-card group p-6 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 text-sm font-medium text-white/90">
        {number}
      </div>
      {eyebrow ? (
        <p className="mt-7 text-xs uppercase tracking-[0.24em] text-white/40">{eyebrow}</p>
      ) : null}
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 max-w-sm text-base leading-7 text-white/60">
        {description}
      </p>
    </article>
  );
}
