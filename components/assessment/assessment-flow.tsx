"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { ProgressBar } from "@/components/assessment/progress-bar";
import { QuestionCard } from "@/components/assessment/question-card";
import { questions, sanitizeAnswers } from "@/lib/questions";
import { clearStoredAnswers, getStoredAnswers, saveStoredAnswers } from "@/lib/storage";
import { AssessmentAnswers } from "@/types/assessment";

function getFirstIncompleteIndex(answers: AssessmentAnswers) {
  const index = questions.findIndex((question) => !answers[question.id]);
  return index === -1 ? questions.length - 1 : index;
}

export function AssessmentFlow() {
  const router = useRouter();
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const storedAnswers = sanitizeAnswers(getStoredAnswers());
    setAnswers(storedAnswers);
    setCurrentIndex(getFirstIncompleteIndex(storedAnswers));
    saveStoredAnswers(storedAnswers);
    setIsHydrated(true);

    return () => {
      if (submitTimeoutRef.current) {
        window.clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const currentQuestion = questions[currentIndex];
  const selectedValue = currentQuestion ? answers[currentQuestion.id] : undefined;
  const answeredCount = useMemo(
    () => questions.filter((question) => Boolean(answers[question.id])).length,
    [answers],
  );

  function updateAnswer(value: string) {
    if (!currentQuestion) {
      return;
    }

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);
    saveStoredAnswers(nextAnswers);
  }

  function goNext() {
    if (!selectedValue) {
      return;
    }

    if (currentIndex === questions.length - 1) {
      setIsSubmitting(true);
      submitTimeoutRef.current = window.setTimeout(() => {
        router.push("/results");
      }, 700);
      return;
    }

    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
  }

  function goBack() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function resetAssessment() {
    clearStoredAnswers();
    setAnswers({});
    setCurrentIndex(0);
  }

  if (!isHydrated || !currentQuestion) {
    return (
      <div className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-8 text-sm text-white/60">
        Loading your assessment...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
        <aside className="glass-panel rounded-[2rem] p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            TinyWins assessment
          </p>
          <p className="mt-4 text-2xl font-semibold text-white">
            Find the changes that actually move the needle.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Answer a few quick questions and we&apos;ll point you toward the habits
            where small shifts can do the most good.
          </p>

          <div className="mt-8">
            <ProgressBar current={answeredCount} total={questions.length} />
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Current category
            </p>
            <p className="mt-2 text-lg font-medium text-white">{currentQuestion.category}</p>
            <p className="mt-2 text-sm text-white/55">
              One step at a time. Your answers are saved locally as you go.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={resetAssessment}
              className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Reset answers
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-white/65 transition hover:text-white"
            >
              Back home
            </Link>
          </div>
        </aside>

        <div className="space-y-4">
          <QuestionCard
            question={currentQuestion}
            step={currentIndex + 1}
            totalSteps={questions.length}
            selectedValue={selectedValue}
            onSelect={updateAnswer}
          />

          <div className="glass-panel flex flex-col gap-3 rounded-[1.75rem] p-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={currentIndex === 0}
              className="order-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:order-1"
            >
              Back
            </button>

            <p className="order-1 text-sm text-white/50 sm:order-2">
              {isSubmitting
                ? "Pulling together your TinyWins..."
                : selectedValue
                  ? "Nice. You are all set for the next step."
                  : "Pick one answer to keep going."}
            </p>

            <button
              type="button"
              onClick={goNext}
              disabled={!selectedValue || isSubmitting}
              className="order-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-glow-pearl disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isSubmitting
                ? "Loading results..."
                : currentIndex === questions.length - 1
                  ? "See my results"
                  : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
