import type { Activity } from "@/lib/calculateNutrition";

export type SuggestedGoal = "fat_loss" | "maintenance" | "muscle_gain";

type ClassifyGoalParams = {
  weight: number;
  height: number;
  activity: Activity;
};

export function classifyGoal({
  weight,
  height,
  activity,
}: ClassifyGoalParams): SuggestedGoal {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi >= 25) {
    return "fat_loss";
  }

  if (bmi < 18.5) {
    return "muscle_gain";
  }

  if (bmi < 20 && activity !== "light") {
    return "muscle_gain";
  }

  return "maintenance";
}