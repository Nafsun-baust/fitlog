"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { getAllWorkouts } from "@/utils/api";
import type { Workout } from "../types";

export default function LibrarySection() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadWorkouts() {
            try {
                const data = await getAllWorkouts();
                setWorkouts(data);
            } catch {
                setError("Failed to load workouts");
            } finally {
                setLoading(false);
            }
        }

        loadWorkouts();
    }, []);

    return (
        <section id="library" className="bg-black px-5 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold">THE LIBRARY</h2>
                <p className="mb-8 text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-400">{error}</p>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
                            <WorkoutCard key={workout.id} workout={workout} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
