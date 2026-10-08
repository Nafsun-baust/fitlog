
"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import type { Workout } from "../../../types";

export default function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorkout() {
      try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch workout");

        const data = await res.json();
        setWorkout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getWorkout();
  }, [id]);

  if (loading) return <p className="text-center p-10">Loading workout...</p>;
  if (!workout) return <p className="text-center p-10">Workout not found</p>;

  return (
    <section className="bg-black text-white px-5 py-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">

        <Image
          src={workout.image}
          alt={workout.name}
          width={600}
          height={500}
          unoptimized
          className="w-full rounded-lg object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">{workout.name}</h1>
          <p className="text-gray-400 mb-4">{workout.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {workout.muscleGroups.map((group) => (
              <span key={group} className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm">
                {group}
              </span>
            ))}
          </div>

          <div className="bg-gray-900 p-5 rounded-lg mb-5">
            <h2 className="font-bold mb-3">KEY SPECS</h2>

            {[
              ["Equipment", workout.equipment],
              ["Difficulty", workout.difficulty],
              ["Sets", workout.sets],
              ["Reps", workout.reps],
              ["Duration", `${workout.duration} min`],
              ["Calories", `${workout.caloriesBurned} kcal`],
              ["Rating", workout.rating],
            ].map(([name, value]) => (
              <div key={name} className="flex justify-between border-b border-gray-700 py-2 text-sm">
                <span className="text-gray-400">{name}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <h2 className="font-bold mb-3">INSTRUCTIONS</h2>

          <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
            {workout.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div className="flex flex-wrap gap-3">
            <button className="bg-lime-400 text-black px-4 py-2 rounded">
              Add to today's plan
            </button>

            <button className="border border-gray-600 px-4 py-2 rounded">
              Save for later
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
