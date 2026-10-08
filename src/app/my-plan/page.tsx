"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";

export default function MyPlan() {
    const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } = usePlan();
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const currentList = activeTab === "plan" ? plan : saved;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
        if (sortBy === "rating") return b.rating - a.rating;
        return a.duration - b.duration;
    });

    const minutes = plan.reduce((total, item) => total + item.duration, 0);
    const calories = plan.reduce((total, item) => total + item.caloriesBurned, 0);

    if (loading) return <p className="py-10 text-center">Loading workouts...</p>;

    return (
        <section className="min-h-screen bg-black px-5 py-10 text-white">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">MY PLAN</h1>
                <p className="mt-2 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                <div className="my-8 grid grid-cols-3 gap-4 rounded bg-gray-900 p-5">
                    <div>
                        <p className="text-sm text-gray-400">Exercises</p>
                        <h2 className="text-2xl text-lime-400">{plan.length}</h2>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Minutes</p>
                        <h2 className="text-2xl">{minutes}</h2>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Calories</p>
                        <h2 className="text-2xl">{calories}</h2>
                    </div>
                </div>

                <div className="mb-6 flex flex-wrap justify-between gap-3">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded p-2 ${activeTab === "plan" ? "bg-gray-700" : "bg-gray-900"}`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded p-2 ${activeTab === "saved" ? "bg-gray-700" : "bg-gray-900"}`}
                        >
                            Saved
                        </button>
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded bg-gray-900 p-2"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

                {sortedList.length === 0 ? (
                    <div className="rounded border border-dashed border-gray-700 p-12 text-center">
                        <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
                        <p className="my-4 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link href="/" className="inline-block rounded bg-lime-400 p-3 text-black">
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {sortedList.map((item) => (
                            <div key={item.id} className="flex flex-wrap items-center gap-4 rounded bg-gray-900 p-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={120}
                                    height={90}
                                    unoptimized
                                    className="rounded object-cover"
                                />

                                <div className="flex-1">
                                    <h2 className="font-bold">{item.name}</h2>
                                    <p className="text-sm text-gray-400">{item.equipment}</p>
                                    <p className="text-sm">
                                        {item.duration} min · {item.caloriesBurned} kcal · ⭐ {item.rating}
                                    </p>
                                </div>

                                <Link href={`/workout/${item.id}`} className="rounded border border-gray-600 p-2 text-sm">
                                    View Details
                                </Link>

                                {activeTab === "plan" && (
                                    <button
                                        onClick={() => markAsDone(item.id)}
                                        disabled={"isDone" in item && item.isDone === true}
                                        className="rounded bg-lime-400 p-2 text-sm text-black disabled:bg-gray-600"
                                    >
                                        {"isDone" in item && item.isDone ? "Done" : "Mark as Done"}
                                    </button>
                                )}

                                <button
                                    onClick={() =>
                                        activeTab === "plan"
                                            ? removeFromPlan(item.id)
                                            : removeFromSaved(item.id)
                                    }
                                    className="text-red-400"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
