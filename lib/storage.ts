import { AssessmentAnswers } from "@/types/assessment";

const STORAGE_KEY = "tinywins-assessment-answers";

export function getStoredAnswers(): AssessmentAnswers {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AssessmentAnswers) : {};
  } catch {
    return {};
  }
}

export function saveStoredAnswers(answers: AssessmentAnswers) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    return;
  }
}

export function clearStoredAnswers() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}
