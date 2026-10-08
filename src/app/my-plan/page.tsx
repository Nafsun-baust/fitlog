
import Link from "next/link";

export default function MyPlan() {
  return (
    <section className="min-h-screen bg-black px-5 py-10 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p className="mt-2 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="my-8 grid grid-cols-3 gap-4 rounded-lg bg-gray-900 p-5">
          <div>
            <p className="text-sm text-gray-400">Exercises</p>
            <h2 className="text-2xl font-bold text-lime-400">0</h2>
          </div>
          <div>
            <p className="text-sm text-gray-400">Minutes</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>
          <div>
            <p className="text-sm text-gray-400">Calories</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            <button className="rounded bg-gray-700 px-4 py-2">
              Today's Plan
            </button>
            <button className="rounded bg-gray-900 px-4 py-2 text-gray-400">
              Saved
            </button>
          </div>

          <select className="rounded bg-gray-900 p-2">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>

        <div className="rounded-lg border border-dashed border-gray-700 px-5 py-16 text-center">
          <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
          <p className="my-4 text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-lime-400 px-5 py-3 font-semibold text-black"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    </section>
  );
}
