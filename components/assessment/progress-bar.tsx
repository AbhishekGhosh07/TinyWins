export function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = Math.round((current / total) * 100);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/45">
        <span>Progress</span>
        <span>{progress}% complete</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-glow-mint via-white to-glow-ice transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
