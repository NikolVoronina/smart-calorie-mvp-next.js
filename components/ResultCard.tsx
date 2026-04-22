type ResultCardProps = {
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

export default function ResultCard({
  calories,
  protein,
  fat,
  carbs,
  water,
  suggestedGoal,
  goalReason,
  recommendation,
  trainingPlan,
}: ResultCardProps)  {
  const goalLabels: Record<string, string> = {
    fat_loss: "Fat loss",
    maintenance: "Maintenance",
    muscle_gain: "Muscle gain",
  };

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold">Your results</h2>
      <p className="mt-2 text-sm text-white/70">
        Based on your body data, activity level, and optional measurements.
      </p>

      <div className="mt-4 rounded-2xl border border-lime-300/20 bg-lime-300/10 px-4 py-3">
        <p className="text-sm text-white/70">Suggested goal</p>
        <p className="mt-1 text-lg font-semibold text-lime-200">
          {goalLabels[suggestedGoal] ?? suggestedGoal}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          {goalReason}
        </p>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
        <p className="text-sm text-white/70">Recommendation</p>
        <p className="mt-2 text-sm leading-6 text-white/80">
          {recommendation}
        </p>
      </div>

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
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
  <p className="text-sm text-white/70">Training recommendation</p>

  <div className="mt-3 grid gap-3 sm:grid-cols-2">
    <div>
      <p className="text-sm text-white/50">Weekly workouts</p>
      <p className="mt-1 text-base font-semibold text-white">
        {trainingPlan.weeklyWorkouts}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/50">Strength sessions</p>
      <p className="mt-1 text-base font-semibold text-white">
        {trainingPlan.strengthSessions}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/50">Cardio sessions</p>
      <p className="mt-1 text-base font-semibold text-white">
        {trainingPlan.cardioSessions}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/50">Daily steps</p>
      <p className="mt-1 text-base font-semibold text-white">
        {trainingPlan.stepTarget}
      </p>
    </div>
  </div>

  <div className="mt-4 space-y-3">
    <div>
      <p className="text-sm text-white/50">Main focus</p>
      <p className="mt-1 text-sm leading-6 text-white/80">
        {trainingPlan.focus}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/50">Priority</p>
      <p className="mt-1 text-sm leading-6 text-white/80">
        {trainingPlan.priority}
      </p>
    </div>

    <div>
      <p className="text-sm text-white/50">Recovery note</p>
      <p className="mt-1 text-sm leading-6 text-white/80">
        {trainingPlan.recoveryNote}
      </p>
    </div>
  </div>
</div>
    </section>
  );
}