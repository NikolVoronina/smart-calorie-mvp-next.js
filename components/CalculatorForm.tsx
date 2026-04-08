"use client";

import ResultCard from "./ResultCard";

type CalculatorFormProps = {
  age: string;
  setAge: (value: string) => void;
  weight: string;
  setWeight: (value: string) => void;
  height: string;
  setHeight: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  activity: string;
  setActivity: (value: string) => void;
  goal: string;
  setGoal: (value: string) => void;
  onCalculate: () => void;
  result: {
    calories: number;
    protein: number;
    fats: number;
    carbs: number;
    water: number;
  } | null;
};

export default function CalculatorForm({
  age,
  setAge,
  weight,
  setWeight,
  height,
  setHeight,
  gender,
  setGender,
  activity,
  setActivity,
  goal,
  setGoal,
  onCalculate,
  result,
}: CalculatorFormProps) {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-black/5 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium text-neutral-500">Get started</p>
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
          onClick={onCalculate}
          className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Calculate now
        </button>

        {result && <ResultCard result={result} />}
      </form>
    </div>
  );
}
