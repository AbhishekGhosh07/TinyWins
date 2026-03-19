import { questions } from "@/lib/questions";
import {
  AssessmentAnswers,
  CategorySummary,
  ImpactLevel,
  PrimaryCategory,
  RankedCategory,
} from "@/types/assessment";

const categoryQuestionMap: Record<PrimaryCategory, string[]> = {
  Transport: ["q1", "q2", "q11"],
  "Home Energy": ["q3", "q4", "q5"],
  Food: ["q6", "q7", "q8"],
  Consumption: ["q9", "q10"],
};

const questionScoreLookup = new Map(
  questions.map((question) => [
    question.id,
    Object.fromEntries(question.options.map((option) => [option.value, option.score])),
  ]),
);

export function getAnswerScore(questionId: string, answerValue?: string) {
  if (!answerValue) {
    return 0;
  }

  return questionScoreLookup.get(questionId)?.[answerValue] ?? 0;
}

function getLevelForCategory(category: PrimaryCategory, total: number): ImpactLevel {
  if (category === "Consumption") {
    if (total <= 3) {
      return "Low";
    }

    if (total <= 5) {
      return "Medium";
    }

    return "High";
  }

  if (total <= 4) {
    return "Low";
  }

  if (total <= 6) {
    return "Medium";
  }

  return "High";
}

export function getCategorySummaries(answers: AssessmentAnswers): CategorySummary[] {
  return (Object.entries(categoryQuestionMap) as [PrimaryCategory, string[]][]).map(
    ([category, questionIds]) => {
      const total = questionIds.reduce(
        (sum, questionId) => sum + getAnswerScore(questionId, answers[questionId]),
        0,
      );

      return {
        key: category,
        label: category,
        total,
        level: getLevelForCategory(category, total),
        answeredQuestions: questionIds,
        maxScore: questionIds.length * 3,
      };
    },
  );
}

export function getRankedCategories(categories: CategorySummary[]): RankedCategory[] {
  return [...categories]
    .sort((left, right) => {
      if (right.total !== left.total) {
        return right.total - left.total;
      }

      return right.maxScore - left.maxScore;
    })
    .map((category, index) => ({
      ...category,
      rank: index + 1,
    }));
}

export function getOverallImpactScore(categories: CategorySummary[]) {
  if (!categories.length) {
    return 0;
  }

  const total = categories.reduce((sum, category) => sum + category.total, 0);
  const min = categories.reduce((sum, category) => sum + category.answeredQuestions.length, 0);
  const max = categories.reduce((sum, category) => sum + category.maxScore, 0);

  if (max === min) {
    return 0;
  }

  return Math.round(((total - min) / (max - min)) * 100);
}
