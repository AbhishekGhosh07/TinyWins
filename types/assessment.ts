export type ImpactLevel = "Low" | "Medium" | "High";
export type DifficultyLevel = "Easy" | "Medium";
export type ActionImpact = "Low" | "Medium" | "High";
export type PrimaryCategory = "Transport" | "Home Energy" | "Food" | "Consumption";
export type QuestionCategory =
  | "Transport"
  | "Housing & Energy"
  | "Food"
  | "Consumption Habits"
  | "Behavior Habits";

export type QuestionOption = {
  label: string;
  value: string;
  score: 1 | 2 | 3;
};

export type Question = {
  id: string;
  section: string;
  category: QuestionCategory;
  prompt: string;
  options: QuestionOption[];
};

export type AssessmentAnswers = Record<string, string>;

export type CategorySummary = {
  key: PrimaryCategory;
  label: string;
  total: number;
  level: ImpactLevel;
  answeredQuestions: string[];
  maxScore: number;
};

export type RankedCategory = CategorySummary & {
  rank: number;
};

export type Recommendation = {
  id: string;
  title: string;
  category: PrimaryCategory;
  impact: ActionImpact;
  difficulty: DifficultyLevel;
  why: string;
};

export type AssessmentResult = {
  overallScore: number;
  categories: CategorySummary[];
  rankedCategories: RankedCategory[];
  recommendations: Recommendation[];
  insight: string;
  positiveCategories: CategorySummary[];
};
