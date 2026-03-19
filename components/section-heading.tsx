type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
