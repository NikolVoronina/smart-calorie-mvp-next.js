type ResultCardProps = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  water: number;
};

export default function ResultCard({
  calories,
  protein,
  fat,
  carbs,
  water,
}: ResultCardProps) {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold">Your results</h2>
      <p className="mt-2 text-sm text-white/70">
        Based on your body data, activity level and goal.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-white/60">Calories</p>
          <p className="mt-2 text-2xl font-bold">{calories} kcal</p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-white/60">Protein</p>
          <p className="mt-2 text-2xl font-bold">{protein} g</p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-white/60">Fat</p>
          <p className="mt-2 text-2xl font-bold">{fat} g</p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-white/60">Carbs</p>
          <p className="mt-2 text-2xl font-bold">{carbs} g</p>
        </div>

        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-sm text-white/60">Water</p>
          <p className="mt-2 text-2xl font-bold">{water} ml</p>
        </div>
      </div>
    </section>
  );
}