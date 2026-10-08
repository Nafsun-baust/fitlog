"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/utils/api";
import type { Workout } from "../../../types";

export default function WorkoutDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const { addToPlan, addToSaved } = usePlan();
    const [workout, setWorkout] = useState<Workout | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWorkout() {
            try {
                setWorkout(await getWorkoutById(id));
            } catch {
                setWorkout(null);
            } finally {
                setLoading(false);
            }
        }

        loadWorkout();
    }, [id]);

    if (loading) return <p className="py-20 text-center">Loading workout...</p>;

    if (!workout) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold">Workout Not Found</h1>
                <Link href="/" className="text-lime-400">Back to Workouts</Link>
            </div>
        );
    }

    return (
        <section className="bg-black px-5 py-10 text-white">
            <div className="container mx-auto grid gap-8 md:grid-cols-2">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={500}
                    unoptimized
                    className="w-full rounded object-cover"
                />

                <div>
                    <h1 className="mb-3 text-3xl font-bold">{workout.name}</h1>
                    <p className="mb-4 text-gray-400">{workout.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span key={group} className="rounded-full bg-lime-400 px-3 py-1 text-sm text-black">
                                {group}
                            </span>
                        ))}
                    </div>

                    <div className="mb-5 rounded bg-gray-900 p-5">
                        <h2 className="mb-3 font-bold">KEY SPECS</h2>
                        {[
                            ["Equipment", workout.equipment],
                            ["Difficulty", workout.difficulty],
                            ["Sets", workout.sets],
                            ["Reps", workout.reps],
                            ["Duration", `${workout.duration} min`],
                            ["Calories", `${workout.caloriesBurned} kcal`],
                            ["Rating", workout.rating],
                        ].map(([name, value]) => (
                            <div key={name} className="flex justify-between gap-4 border-b border-gray-700 py-2 text-sm">
                                <span className="text-gray-400">{name}</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="mb-3 font-bold">INSTRUCTIONS</h2>
                    <ol className="mb-6 list-inside list-decimal space-y-2 text-gray-400">
                        {workout.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => addToPlan(workout)}
                            className="rounded bg-lime-400 px-4 py-2 text-black"
                        >
                            Add to today's plan
                        </button>

                        <button
                            onClick={() => addToSaved(workout)}
                            className="rounded border border-gray-600 px-4 py-2"
                        >
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
