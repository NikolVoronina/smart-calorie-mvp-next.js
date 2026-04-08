export type Gender = "male" | "female";
export type Activity = "light" | "moderate" | "active";
export type Goal = "lose" | "maintain" | "gain";

export type NutritionResult = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  water: number;
};

type CalculateNutritionParams = {
  age: number;
  weight: number;
  height: number;
  gender: Gender;
  activity: Activity;
  goal: Goal;
};

export function calculateNutrition({
  age,
  weight,
  height,
  gender,
  activity,
  goal,
}: CalculateNutritionParams): NutritionResult {
  let bmr: number;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const activityMultipliers: Record<Activity, number> = {
    light: 1.2,
    moderate: 1.55,
    active: 1.9,
  };

  let totalCalories = bmr * activityMultipliers[activity];

  if (goal === "lose") {
    totalCalories -= 400;
  } else if (goal === "gain") {
    totalCalories += 300;
  }

  const calories = Math.round(totalCalories);

  const protein = Math.round(weight * 2);
  const fat = Math.round(weight * 0.8);
  const carbs = Math.round((calories - (protein * 4 + fat * 9)) / 4);
  const water = Math.round(weight * 35);

  return {
    calories,
    protein,
    fat,
    carbs,
    water,
  };
}


//Что делает этот файл Он:считает BMR по Mifflin-St Jeor,умножает на активность,корректирует под цель,считает белки, жиры, углеводы и воду.
