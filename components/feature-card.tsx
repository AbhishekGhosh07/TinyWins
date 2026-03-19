type FeatureCardProps = {
  title: string;
  description: string;
  number: string;
};

export function FeatureCard({ title, description, number }: FeatureCardProps) {
  return (
    <article className="glass-panel group rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.08]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-sm font-medium text-white/80">
        {number}
      </div>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 max-w-sm text-base leading-7 text-white/62">
        {description}
      </p>
    </article>
  );
}
