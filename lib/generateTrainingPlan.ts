import type { Activity } from "@/lib/calculateNutrition";

export type SuggestedGoal = "fat_loss" | "maintenance" | "muscle_gain";

export type TrainingPlan = {
  weeklyWorkouts: number;
  strengthSessions: number;
  cardioSessions: number;
  stepTarget: string;
  focus: string;
  priority: string;
  recoveryNote: string;
};

type GenerateTrainingPlanParams = {
  suggestedGoal: SuggestedGoal;
  activity: Activity;
  bodyFat?: number;
};

export function generateTrainingPlan({
  suggestedGoal,
  activity,
  bodyFat,
}: GenerateTrainingPlanParams): TrainingPlan {
  if (suggestedGoal === "fat_loss") {
    if (activity === "light") {
      return {
        weeklyWorkouts: 4,
        strengthSessions: 2,
        cardioSessions: 2,
        stepTarget: "8000-10000",
        focus: "Build consistency and reduce body fat gradually.",
        priority: "Strength training and daily movement",
        recoveryNote:
          "Start with a manageable routine. Avoid extreme dieting and too much cardio in the beginning.",
      };
    }

    if (activity === "moderate") {
      return {
        weeklyWorkouts: 5,
        strengthSessions: 3,
        cardioSessions: 2,
        stepTarget: "9000-12000",
        focus: "Reduce body fat while keeping muscle mass.",
        priority: "Strength training first, cardio second",
        recoveryNote:
          "Keep the calorie deficit moderate and prioritize protein and sleep.",
      };
    }

    return {
      weeklyWorkouts: 5,
      strengthSessions: 3,
      cardioSessions: 2,
      stepTarget: "10000-12000",
      focus: "Support fat loss without sacrificing performance.",
      priority: "Muscle retention and recovery",
      recoveryNote:
        "Because activity is already high, avoid pushing calories too low.",
    };
  }

  if (suggestedGoal === "muscle_gain") {
    if (activity === "light") {
      return {
        weeklyWorkouts: 4,
        strengthSessions: 3,
        cardioSessions: 1,
        stepTarget: "6000-8000",
        focus: "Build muscle and improve overall training capacity.",
        priority: "Strength progression",
        recoveryNote:
          "Focus on technique, enough food, and gradual overload instead of too much cardio.",
      };
    }

    if (activity === "moderate") {
      return {
        weeklyWorkouts: 5,
        strengthSessions: 4,
        cardioSessions: 1,
        stepTarget: "7000-9000",
        focus: "Increase muscle mass while maintaining good recovery.",
        priority: "Progressive overload and nutrition",
        recoveryNote:
          "Keep cardio moderate so it does not interfere with recovery and muscle growth.",
      };
    }

    return {
      weeklyWorkouts: 5,
      strengthSessions: 4,
      cardioSessions: 1,
      stepTarget: "7000-9000",
      focus: "Build strength and muscle with controlled training volume.",
      priority: "Recovery and strength performance",
      recoveryNote:
        "You are already active, so make sure you are eating enough to support performance.",
    };
  }

  if (bodyFat !== undefined && bodyFat > 28) {
    return {
      weeklyWorkouts: 4,
      strengthSessions: 3,
      cardioSessions: 2,
      stepTarget: "8000-10000",
      focus: "Maintain your current shape while improving body composition.",
      priority: "Strength training and routine",
      recoveryNote:
        "A maintenance phase can still improve body composition if training and nutrition are consistent.",
    };
  }

  return {
    weeklyWorkouts: 4,
    strengthSessions: 3,
    cardioSessions: 1,
    stepTarget: "7000-10000",
    focus: "Maintain your current progress and build a stable routine.",
    priority: "Consistency and balanced training",
    recoveryNote:
      "Use this phase to recover well, improve technique, and stay regular with training.",
  };
}