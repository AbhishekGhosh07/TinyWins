import { CategorySummary } from "@/types/assessment";

export function getInsightCopy(categories: CategorySummary[]) {
  const [first, second] = categories;

  if (!first) {
    return "Finish a few answers and we will turn them into a clear snapshot here.";
  }

  if (!second) {
    return `Right now, ${first.label.toLowerCase()} looks like the biggest place to focus. A couple of small, steady changes here should give you the clearest payoff.`;
  }

  return `For your lifestyle, ${first.label.toLowerCase()} and ${second.label.toLowerCase()} seem to have the biggest influence right now. Small adjustments in these areas will probably do more than stressing about every tiny habit.`;
}
