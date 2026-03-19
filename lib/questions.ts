import { AssessmentAnswers, Question } from "@/types/assessment";

export const questions: Question[] = [
  {
    id: "q1",
    section: "Section 1",
    category: "Transport",
    prompt: "How do you usually get around during the week?",
    options: [
      { label: "Mostly walking/biking", value: "walking-biking", score: 1 },
      { label: "Public transport", value: "public-transport", score: 1 },
      { label: "Car", value: "car", score: 3 },
      { label: "Mix of everything", value: "mix", score: 2 },
    ],
  },
  {
    id: "q2",
    section: "Section 1",
    category: "Transport",
    prompt: "How many flights do you usually take per year?",
    options: [
      { label: "0", value: "0", score: 1 },
      { label: "1-2", value: "1-2", score: 2 },
      { label: "3-5", value: "3-5", score: 3 },
      { label: "6+", value: "6+", score: 3 },
    ],
  },
  {
    id: "q3",
    section: "Section 2",
    category: "Housing & Energy",
    prompt: "What best describes your living situation?",
    options: [
      { label: "Student housing / dorm", value: "student-housing", score: 1 },
      { label: "Shared apartment", value: "shared-apartment", score: 1 },
      { label: "Apartment alone", value: "apartment-alone", score: 2 },
      { label: "House", value: "house", score: 3 },
    ],
  },
  {
    id: "q4",
    section: "Section 2",
    category: "Housing & Energy",
    prompt: "How often do you use AC or heating heavily?",
    options: [
      { label: "Rarely", value: "rarely", score: 1 },
      { label: "Sometimes", value: "sometimes", score: 2 },
      { label: "Often", value: "often", score: 3 },
    ],
  },
  {
    id: "q5",
    section: "Section 2",
    category: "Housing & Energy",
    prompt: "How do you usually do laundry?",
    options: [
      { label: "Cold water mostly", value: "cold-water", score: 1 },
      { label: "Mixed", value: "mixed", score: 2 },
      { label: "Hot water mostly", value: "hot-water", score: 3 },
    ],
  },
  {
    id: "q6",
    section: "Section 3",
    category: "Food",
    prompt: "Which best describes your diet?",
    options: [
      { label: "Vegan", value: "vegan", score: 1 },
      { label: "Vegetarian", value: "vegetarian", score: 2 },
      { label: "Mixed", value: "mixed", score: 2 },
      { label: "Meat-heavy", value: "meat-heavy", score: 3 },
    ],
  },
  {
    id: "q7",
    section: "Section 3",
    category: "Food",
    prompt: "How often do you eat takeout or delivery?",
    options: [
      { label: "0-1 times/week", value: "0-1", score: 1 },
      { label: "2-4 times/week", value: "2-4", score: 2 },
      { label: "5+ times/week", value: "5+", score: 3 },
    ],
  },
  {
    id: "q8",
    section: "Section 3",
    category: "Food",
    prompt: "How often does food go bad before you use it?",
    options: [
      { label: "Rarely", value: "rarely", score: 1 },
      { label: "Sometimes", value: "sometimes", score: 2 },
      { label: "Often", value: "often", score: 3 },
    ],
  },
  {
    id: "q9",
    section: "Section 4",
    category: "Consumption Habits",
    prompt: "How often do you order things online?",
    options: [
      { label: "0-2 per month", value: "0-2", score: 1 },
      { label: "3-6 per month", value: "3-6", score: 2 },
      { label: "7+ per month", value: "7+", score: 3 },
    ],
  },
  {
    id: "q10",
    section: "Section 4",
    category: "Consumption Habits",
    prompt: "How often do you buy new clothes?",
    options: [
      { label: "Rarely", value: "rarely", score: 1 },
      { label: "Occasionally", value: "occasionally", score: 2 },
      { label: "Frequently", value: "frequently", score: 3 },
    ],
  },
  {
    id: "q11",
    section: "Section 5",
    category: "Behavior Habits",
    prompt: "Do you usually combine errands (shopping, trips) into one outing?",
    options: [
      { label: "Yes", value: "yes", score: 1 },
      { label: "Sometimes", value: "sometimes", score: 2 },
      { label: "No", value: "no", score: 3 },
    ],
  },
  {
    id: "q12",
    section: "Section 5",
    category: "Behavior Habits",
    prompt: "How interested are you in improving your lifestyle impact?",
    options: [
      { label: "Just curious", value: "curious", score: 1 },
      { label: "Want small improvements", value: "small-improvements", score: 2 },
      { label: "Very motivated", value: "very-motivated", score: 3 },
    ],
  },
];

export const assessmentQuestionIds = questions.map((question) => question.id);

export function isAssessmentComplete(answers: AssessmentAnswers) {
  return assessmentQuestionIds.every((questionId) => Boolean(answers[questionId]));
}

export function sanitizeAnswers(answers: AssessmentAnswers) {
  return questions.reduce<AssessmentAnswers>((nextAnswers, question) => {
    const answer = answers[question.id];
    const isValid = question.options.some((option) => option.value === answer);

    if (isValid && answer) {
      nextAnswers[question.id] = answer;
    }

    return nextAnswers;
  }, {});
}
