import type { Activity, Goal } from "@/lib/calculateNutrition";

export type SuggestedGoal = "fat_loss" | "maintenance" | "muscle_gain";

export type GoalClassificationResult = {
  suggestedGoal: SuggestedGoal;
  reason: string;
};

type ClassifyGoalParams = {
  weight: number;
  height: number;
  activity: Activity;
  selectedGoal: Goal;

  waist?: number;
  hips?: number;
  bodyFat?: number;
};

export function classifyGoal({
  weight,
  height,
  activity,
  selectedGoal,
  waist,
  hips,
  bodyFat,
}: ClassifyGoalParams): GoalClassificationResult {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // 🔥 1. Body fat — самый приоритетный сигнал
  if (bodyFat !== undefined) {
    if (bodyFat > 30) {
      return {
        suggestedGoal: "fat_loss",
        reason: "Your body fat percentage is relatively high, so fat loss may be the most effective goal.",
      };
    }

    if (bodyFat < 18) {
      return {
        suggestedGoal: "muscle_gain",
        reason: "Your body fat percentage is low, so muscle gain may help improve strength and balance.",
      };
    }
  }

  // 🔥 2. Waist-to-hip ratio
  if (waist !== undefined && hips !== undefined) {
    const ratio = waist / hips;

    if (ratio > 0.85) {
      return {
        suggestedGoal: "fat_loss",
        reason: "Your waist-to-hip ratio suggests higher fat distribution, so fat loss may be beneficial.",
      };
    }
  }

  // 🔥 3. BMI логика (fallback)
  if (bmi >= 27) {
    return {
      suggestedGoal: "fat_loss",
      reason: "Your BMI is above the normal range, so fat loss may be the most suitable goal.",
    };
  }

  if (bmi < 18.5) {
    return {
      suggestedGoal: "muscle_gain",
      reason: "Your BMI is below the normal range, so muscle gain may be a better goal.",
    };
  }

  if (bmi < 20 && activity !== "light") {
    return {
      suggestedGoal: "muscle_gain",
      reason: "You are relatively light for your height and already active, so muscle gain may be beneficial.",
    };
  }

  // 🔥 4. Проверка выбранной цели
  if (selectedGoal === "lose" && bmi < 20.5) {
    return {
      suggestedGoal: "maintenance",
      reason: "A weight loss goal may be too aggressive for your current body data.",
    };
  }

  if (selectedGoal === "gain" && bmi >= 25) {
    return {
      suggestedGoal: "maintenance",
      reason: "Muscle gain may not be the best first step based on your current BMI.",
    };
  }

  return {
    suggestedGoal: "maintenance",
    reason: "Your body data is within a balanced range, so maintenance is recommended.",
  };
}