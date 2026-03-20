"use client";

import { useState } from "react";

export default function Home() {
  const [calories, setCalories] = useState<number | null>(null);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("female");
  const [activity, setActivity] = useState("light");
  const [goal, setGoal] = useState("maintain");

  const calculateCalories = () => {
    if (!age || !weight || !height) return;

    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);

    let bmr;

    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    let activityMultiplier = 1.2;

    if (activity === "moderate") activityMultiplier = 1.55;
    if (activity === "active") activityMultiplier = 1.9;

    let total = bmr * activityMultiplier;

    if (goal === "lose") total -= 400;
    if (goal === "gain") total += 300;

    setCalories(Math.round(total));
  };

  return (
    <main className="min-h-screen bg-[#f7f7fb] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full items-start gap-10 lg:grid-cols-2">
          <div className="max-w-xl self-start lg:sticky lg:top-10">
            <span className="mb-4 inline-flex rounded-full border border-white/60 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm">
              Healthy lifestyle tool
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-6xl">
              Smart Calorie
              <span className="block text-neutral-500">Calculator</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 md:text-lg">
              A simple and elegant way to calculate your daily calories,
              macros, and water intake based on your body and goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-neutral-500">Daily calories</p>
                <p className="text-base font-semibold text-neutral-900">
                  Personalized
                </p>
              </div>

              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-neutral-500">Macros</p>
                <p className="text-base font-semibold text-neutral-900">
                  Protein, fats, carbs
                </p>
              </div>

              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                <p className="text-sm text-neutral-500">Water</p>
                <p className="text-base font-semibold text-neutral-900">
                  Daily target
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-black/5 md:p-8">
            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-500">
                Get started
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900">
                Enter your details
              </h2>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Height (cm)
                </label>
                <input
                  type="number"
                  placeholder="Enter your height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Activity level
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                >
                  <option value="light">Light activity</option>
                  <option value="moderate">Moderate activity</option>
                  <option value="active">Very active</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-3 text-neutral-900 outline-none transition focus:border-neutral-400"
                >
                  <option value="lose">Lose weight</option>
                  <option value="maintain">Maintain weight</option>
                  <option value="gain">Gain weight</option>
                </select>
              </div>

              <button
                type="button"
                onClick={calculateCalories}
                className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Calculate now
              </button>

              {calories && (
                <div className="mt-6 rounded-2xl bg-[#f3f4f6] p-4 text-center">
                  <p className="text-sm text-neutral-500">Your daily calories</p>
                  <p className="mt-1 text-2xl font-bold text-neutral-900">
                    {calories} kcal
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}