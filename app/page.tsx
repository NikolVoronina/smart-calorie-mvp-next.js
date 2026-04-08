"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import {
  calculateNutrition,
  type Activity,
  type Gender,
  type Goal,
  type NutritionResult,
} from "@/lib/calculateNutrition";

export default function Home() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState<Gender>("female");
  const [activity, setActivity] = useState<Activity>("light");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<NutritionResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    if (!age || !weight || !height) {
      setError("Please fill in age, weight and height.");
      setResult(null);
      return;
    }

    const numericAge = Number(age);
    const numericWeight = Number(weight);
    const numericHeight = Number(height);

    if (
      Number.isNaN(numericAge) ||
      Number.isNaN(numericWeight) ||
      Number.isNaN(numericHeight)
    ) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    if (numericAge <= 0 || numericWeight <= 0 || numericHeight <= 0) {
      setError("Values must be greater than 0.");
      setResult(null);
      return;
    }

    setError("");

    const calculatedResult = calculateNutrition({
      age: numericAge,
      weight: numericWeight,
      height: numericHeight,
      gender,
      activity,
      goal,
    });

    setResult(calculatedResult);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
            Healthy lifestyle tool
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Smart Calorie Calculator
          </h1>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            A simple and elegant way to calculate your daily calories, macros,
            and water intake based on your body and goals.
          </p>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Enter your details</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                placeholder="21"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                placeholder="60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                placeholder="174"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">
                Activity level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as Activity)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              >
                <option value="light">Light</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              >
                <option value="lose">Lose weight</option>
                <option value="maintain">Maintain</option>
                <option value="gain">Gain muscle</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            onClick={handleCalculate}
            className="mt-6 rounded-2xl bg-lime-300 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            Calculate
          </button>
        </section>

        {result && <ResultCard {...result} />}
      </section>
    </main>
  );
}