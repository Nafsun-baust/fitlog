import type { Workout } from "../types";

export async function getAllWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) throw new Error("Failed to fetch workouts");

  return await res.json();
}

export async function getWorkoutById(id: string): Promise<Workout> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) throw new Error("Failed to fetch workout");

  return await res.json();
}
