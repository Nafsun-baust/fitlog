"use client";
import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import type { Workout } from "@/types";

export default function LibrarySection() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWorkouts() {
            try {
                const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

                if (!response.ok) {
                    throw new Error("Failed to load workouts");
                }
                const data = await response.json();
                setWorkouts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadWorkouts();
    }, []);

    return (
        <section id="library" className="bg-black px-5 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="mb-8 text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>

                {loading ? (
                    <p className="text-center text-lime-400">
                        Loading workouts...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
                            <WorkoutCard key={workout.id} workout={workout} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
