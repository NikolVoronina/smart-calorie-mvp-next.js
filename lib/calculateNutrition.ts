import { classifyGoal } from "@/lib/classifyGoal";
import { generateTrainingPlan } from "@/lib/generateTrainingPlan";

export type Gender = "male" | "female";
export type Activity = "light" | "moderate" | "active";
export type Goal = "lose" | "maintain" | "gain";

export type NutritionResult = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  water: number;
  suggestedGoal: string;
  goalReason: string;
  recommendation: string;
  trainingPlan: {
    weeklyWorkouts: number;
    strengthSessions: number;
    cardioSessions: number;
    stepTarget: string;
    focus: string;
    priority: string;
    recoveryNote: string;
  };
};

type CalculateNutritionParams = {
  age: number;
  weight: number;
  height: number;
  gender: Gender;
  activity: Activity;
  goal: Goal;
  chest?: number;
  waist?: number;
  hips?: number;
  bodyFat?: number;
};

export function calculateNutrition({
  age,
  weight,
  height,
  gender,
  activity,
  goal,
  chest,
  waist,
  hips,
  bodyFat,
}: CalculateNutritionParams): NutritionResult {
  let bmr: number;


  if (bodyFat !== undefined && bodyFat > 0 && bodyFat < 70) {
    const leanBodyMass = weight * (1 - bodyFat / 100);
    bmr = 370 + 21.6 * leanBodyMass;
  } else {
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }

  const activityMultipliers: Record<Activity, number> = {
    light: 1.2,
    moderate: 1.55,
    active: 1.725,
  };

  let totalCalories = bmr * activityMultipliers[activity];

  if (goal === "lose") {
    totalCalories -= 400;
  } else if (goal === "gain") {
    totalCalories += 250;
  }

  const calories = Math.round(totalCalories);

  // Protein: slightly smarter logic
  let proteinPerKg = 1.8;
  if (goal === "gain") proteinPerKg = 2.0;
  if (goal === "lose") proteinPerKg = 2.2;

  // Fat: slightly safer minimum
  let fatPerKg = 0.8;
  if (goal === "lose") fatPerKg = 0.9;

  const protein = Math.round(weight * proteinPerKg);
  const fat = Math.round(weight * fatPerKg);

  const remainingCalories = calories - (protein * 4 + fat * 9);
  const carbs = Math.max(0, Math.round(remainingCalories / 4));

  // Water: slightly smarter baseline
  let waterMlPerKg = 35;
  if (activity === "moderate") waterMlPerKg = 38;
  if (activity === "active") waterMlPerKg = 42;

  const water = Math.round(weight * waterMlPerKg);

  const goalClassification = classifyGoal({
    weight,
    height,
    activity,
    selectedGoal: goal,
    waist,
    hips,
    bodyFat,
  });

  const trainingPlan = generateTrainingPlan({
  suggestedGoal: goalClassification.suggestedGoal,
  activity,
  bodyFat,
});

  const recommendation = buildRecommendation({
    goal,
    suggestedGoal: goalClassification.suggestedGoal,
    bodyFat,
    waist,
    hips,
    activity,
    calories,
    protein,
  });

return {
  calories,
  protein,
  fat,
  carbs,
  water,
  suggestedGoal: goalClassification.suggestedGoal,
  goalReason: goalClassification.reason,
  recommendation,
  trainingPlan,
};
}

type RecommendationParams = {
  goal: Goal;
  suggestedGoal: string;
  bodyFat?: number;
  waist?: number;
  hips?: number;
  activity: Activity;
  calories: number;
  protein: number;
};

function buildRecommendation({
  goal,
  suggestedGoal,
  bodyFat,
  waist,
  hips,
  activity,
  calories,
  protein,
}: RecommendationParams): string {
  if (bodyFat !== undefined && bodyFat > 30) {
    return `A moderate calorie deficit may work well for you. Focus on consistency, protein intake around ${protein} g, and regular movement.`;
  }

  if (bodyFat !== undefined && bodyFat < 18) {
    return `A very aggressive deficit may not be ideal. A maintenance phase or a small surplus could support better recovery and strength.`;
  }

  if (waist !== undefined && hips !== undefined) {
    const ratio = waist / hips;
    if (ratio > 0.85) {
      return `Your body measurements suggest that fat loss could be a useful focus. A moderate approach around ${calories} kcal may be more sustainable than a very strict cut.`;
    }
  }

  if (goal === "lose" && suggestedGoal === "maintenance") {
    return `Your selected goal is weight loss, but your current data suggests that maintenance may be a more balanced starting point.`;
  }

  if (goal === "gain" && suggestedGoal === "maintenance") {
    return `A large calorie surplus may not be the best first step. Starting near maintenance could help you build a more stable routine.`;
  }

  if (activity === "active") {
    return `Because your activity level is high, it may be important not to set calories too low. Prioritize recovery, hydration, and enough protein.`;
  }

  return `Your current result looks balanced. Focus on consistency, good food quality, and monitoring how your body responds over time.`;
}