"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/app-shell";
import { ImpactSnapshot } from "@/components/results/impact-snapshot";
import { ResultsPanel } from "@/components/results/results-panel";
import { getInsightCopy } from "@/lib/insights";
import { isAssessmentComplete, sanitizeAnswers } from "@/lib/questions";
import { getRecommendations } from "@/lib/recommendations";
import { getCategorySummaries, getOverallImpactScore, getRankedCategories } from "@/lib/scoring";
import { clearStoredAnswers, getStoredAnswers, saveStoredAnswers } from "@/lib/storage";
import { AssessmentResult } from "@/types/assessment";

function buildResult(): AssessmentResult | null {
  const answers = sanitizeAnswers(getStoredAnswers());

  saveStoredAnswers(answers);

  if (!isAssessmentComplete(answers)) {
    return null;
  }

  const categories = getCategorySummaries(answers);
  const rankedCategories = getRankedCategories(categories);
  const positiveCategories = categories.filter((category) => category.level === "Low");

  return {
    overallScore: getOverallImpactScore(categories),
    categories,
    rankedCategories,
    recommendations: getRecommendations(answers, rankedCategories),
    insight: getInsightCopy(rankedCategories.slice(0, 2)),
    positiveCategories,
  };
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setResult(buildResult());
    setIsHydrated(true);
  }, []);

  function handleRetake() {
    clearStoredAnswers();
    router.push("/assessment");
  }

  return (
    <AppShell
      title="Your TinyWins Results"
      description="A simple snapshot of what matters most for your lifestyle, plus three realistic next moves."
      actions={
        <>
          <button
            type="button"
            onClick={handleRetake}
            className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Retake assessment
          </button>
          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-glow-pearl"
          >
            Back home
          </Link>
        </>
      }
    >
      {!isHydrated ? (
        <div className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-8 text-sm text-white/60">
          Pulling together your TinyWins...
        </div>
      ) : result ? (
        <div className="space-y-6">
          <ImpactSnapshot categories={result.categories} />
          <ResultsPanel result={result} />
        </div>
      ) : (
        <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Assessment not finished yet</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Finish the quick check-in to unlock your TinyWins.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/62">
            We couldn&apos;t find a complete set of answers yet. Jump back into the
            assessment and we&apos;ll turn your responses into a clean impact snapshot here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/assessment"
              className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-glow-pearl"
            >
              Continue assessment
            </Link>
            <button
              type="button"
              onClick={handleRetake}
              className="inline-flex rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Retake from scratch
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
