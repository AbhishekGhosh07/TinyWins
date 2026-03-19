import { AssessmentAnswers, CategorySummary, Recommendation } from "@/types/assessment";

type ActionDefinition = Recommendation & {
  matches: (answers: AssessmentAnswers, categories: CategorySummary[]) => boolean;
};

const impactWeight = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const difficultyWeight = {
  Easy: 0,
  Medium: 1,
};

const actionLibrary: ActionDefinition[] = [
  {
    id: "transport-combine-errands",
    title: "Combine errands into one trip",
    category: "Transport",
    impact: "Medium",
    difficulty: "Easy",
    why: "Bundling trips reduces extra driving miles and makes weekly travel more efficient.",
    matches: (answers) => ["no", "sometimes"].includes(answers.q11 ?? ""),
  },
  {
    id: "transport-replace-car-trip",
    title: "Replace one car trip per week with transit or walking",
    category: "Transport",
    impact: "Medium",
    difficulty: "Medium",
    why: "Swapping even one recurring car trip creates a dependable reduction in transport emissions.",
    matches: (answers) => ["car", "mix"].includes(answers.q1 ?? ""),
  },
  {
    id: "transport-reduce-flight",
    title: "Reduce one short flight per year",
    category: "Transport",
    impact: "High",
    difficulty: "Medium",
    why: "Flights have outsized impact, so cutting even one short trip can move the needle meaningfully.",
    matches: (answers) => (answers.q2 ?? "") !== "0" && Boolean(answers.q2),
  },
  {
    id: "transport-ride-share",
    title: "Use ride sharing instead of solo rides occasionally",
    category: "Transport",
    impact: "Medium",
    difficulty: "Easy",
    why: "Sharing a ride from time to time lowers per-person travel impact without changing every trip.",
    matches: (answers) => answers.q1 === "car",
  },
  {
    id: "food-replace-beef",
    title: "Replace 1-2 beef meals per week",
    category: "Food",
    impact: "High",
    difficulty: "Easy",
    why: "A small shift away from high-impact meals is one of the clearest ways to lower food-related emissions.",
    matches: (answers) => ["mixed", "meat-heavy"].includes(answers.q6 ?? ""),
  },
  {
    id: "food-reduce-waste",
    title: "Plan meals to reduce food waste",
    category: "Food",
    impact: "Medium",
    difficulty: "Easy",
    why: "Using more of what you buy helps avoid waste and reduces the hidden impact of uneaten food.",
    matches: (answers) => ["sometimes", "often"].includes(answers.q8 ?? ""),
  },
  {
    id: "food-cook-more",
    title: "Cook one extra meal per week",
    category: "Food",
    impact: "Medium",
    difficulty: "Medium",
    why: "One extra home-cooked meal can lower packaging, delivery, and restaurant-related emissions.",
    matches: (answers) => ["2-4", "5+"].includes(answers.q7 ?? ""),
  },
  {
    id: "food-plant-based",
    title: "Choose plant-based options occasionally",
    category: "Food",
    impact: "Medium",
    difficulty: "Easy",
    why: "Occasional swaps are easier to keep up with and still create meaningful food impact over time.",
    matches: (answers) => ["mixed", "meat-heavy"].includes(answers.q6 ?? ""),
  },
  {
    id: "energy-cold-water",
    title: "Wash laundry in cold water",
    category: "Home Energy",
    impact: "Medium",
    difficulty: "Easy",
    why: "Cooler wash cycles are a simple way to cut the energy used in everyday laundry.",
    matches: (answers) => ["mixed", "hot-water"].includes(answers.q5 ?? ""),
  },
  {
    id: "energy-air-dry",
    title: "Air dry some laundry loads",
    category: "Home Energy",
    impact: "Medium",
    difficulty: "Easy",
    why: "Air drying a few loads is a low-effort way to reduce routine home energy use.",
    matches: (answers) => ["mixed", "hot-water"].includes(answers.q5 ?? ""),
  },
  {
    id: "energy-reduce-hvac",
    title: "Reduce AC/heating slightly",
    category: "Home Energy",
    impact: "Medium",
    difficulty: "Easy",
    why: "Small thermostat changes can trim energy use while staying realistic for day-to-day comfort.",
    matches: (answers) => answers.q4 === "often",
  },
  {
    id: "energy-electronics",
    title: "Turn off unused electronics",
    category: "Home Energy",
    impact: "Low",
    difficulty: "Easy",
    why: "This is a lightweight fallback habit that chips away at unnecessary standby energy use.",
    matches: () => true,
  },
  {
    id: "consumption-batch-orders",
    title: "Batch online orders into fewer deliveries",
    category: "Consumption",
    impact: "Medium",
    difficulty: "Easy",
    why: "Combining purchases reduces delivery frequency and the packaging that comes with it.",
    matches: (answers) => ["3-6", "7+"].includes(answers.q9 ?? ""),
  },
  {
    id: "consumption-fast-fashion",
    title: "Buy fewer fast fashion items",
    category: "Consumption",
    impact: "Medium",
    difficulty: "Medium",
    why: "Buying fewer short-life clothing items helps reduce production and shipping impact.",
    matches: (answers) => answers.q10 === "frequently",
  },
  {
    id: "consumption-second-hand",
    title: "Buy second-hand when possible",
    category: "Consumption",
    impact: "Medium",
    difficulty: "Medium",
    why: "Second-hand purchases extend the life of products you already need and avoid new production.",
    matches: (answers) => ["frequently", "occasionally"].includes(answers.q10 ?? ""),
  },
  {
    id: "consumption-repair",
    title: "Repair instead of replacing small items",
    category: "Consumption",
    impact: "Medium",
    difficulty: "Medium",
    why: "Repairing a few things before replacing them helps lower the churn of everyday consumption.",
    matches: (_answers, categories) =>
      categories.find((category) => category.key === "Consumption")?.level !== "Low",
  },
  {
    id: "fallback-water-bottle",
    title: "Use a reusable water bottle",
    category: "Consumption",
    impact: "Low",
    difficulty: "Easy",
    why: "It is a small but reliable fallback habit that helps reduce single-use waste over time.",
    matches: () => true,
  },
  {
    id: "fallback-bags",
    title: "Carry reusable shopping bags",
    category: "Consumption",
    impact: "Low",
    difficulty: "Easy",
    why: "Keeping reusable bags handy is an easy fallback that lowers everyday disposable waste.",
    matches: () => true,
  },
];

function getActionsForCategory(
  category: CategorySummary,
  answers: AssessmentAnswers,
  categories: CategorySummary[],
) {
  return actionLibrary
    .filter((action) => action.category === category.key && action.matches(answers, categories))
    .sort((left, right) => {
      if (impactWeight[right.impact] !== impactWeight[left.impact]) {
        return impactWeight[right.impact] - impactWeight[left.impact];
      }

      return difficultyWeight[left.difficulty] - difficultyWeight[right.difficulty];
    });
}

function pickFirstUnique(
  actions: Recommendation[],
  selected: Recommendation[],
  predicate?: (action: Recommendation) => boolean,
) {
  return actions.find(
    (action) =>
      !selected.some((selectedAction) => selectedAction.id === action.id) &&
      (predicate ? predicate(action) : true),
  );
}

export function getRecommendations(
  answers: AssessmentAnswers,
  rankedCategories: CategorySummary[],
): Recommendation[] {
  const categoriesByPriority = [...rankedCategories].sort((left, right) => {
    const levelRank = { High: 3, Medium: 2, Low: 1 };

    if (levelRank[right.level] !== levelRank[left.level]) {
      return levelRank[right.level] - levelRank[left.level];
    }

    return right.total - left.total;
  });

  const selected: Recommendation[] = [];
  const topCategory = categoriesByPriority[0];
  const secondCategory = categoriesByPriority.find(
    (category) => category.key !== topCategory?.key && category.level !== "Low",
  );

  if (topCategory) {
    const topActions = getActionsForCategory(topCategory, answers, categoriesByPriority);
    const leverageAction = pickFirstUnique(topActions, selected);

    if (leverageAction) {
      selected.push(leverageAction);
    }

    if (topCategory.level === "High") {
      const easyAction = pickFirstUnique(topActions, selected, (action) => action.difficulty === "Easy");

      if (easyAction) {
        selected.push(easyAction);
      }
    }
  }

  if (secondCategory && selected.length < 3) {
    const secondActions = getActionsForCategory(secondCategory, answers, categoriesByPriority);
    const secondPick =
      pickFirstUnique(secondActions, selected, (action) => action.difficulty === "Easy") ??
      pickFirstUnique(secondActions, selected);

    if (secondPick) {
      selected.push(secondPick);
    }
  }

  for (const category of categoriesByPriority) {
    if (selected.length === 3) {
      break;
    }

    const available = getActionsForCategory(category, answers, categoriesByPriority);
    const nextAction =
      pickFirstUnique(available, selected, (action) => action.difficulty === "Easy") ??
      pickFirstUnique(available, selected);

    if (nextAction) {
      selected.push(nextAction);
    }
  }

  while (selected.length < 3) {
    const fallback = pickFirstUnique(actionLibrary, selected);

    if (!fallback) {
      break;
    }

    selected.push(fallback);
  }

  return selected.slice(0, 3);
}
