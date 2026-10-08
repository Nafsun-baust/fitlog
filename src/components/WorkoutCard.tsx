import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "../types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 hover:border-lime-400"
        >
            <Image
                src={workout.image}
                alt={workout.name}
                width={400}
                height={250}
                unoptimized
                className="h-44 w-full object-cover"
            />

            <div className="p-4">
                <div className="mb-2 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-lime-400 px-2 py-1 text-xs font-semibold text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <h3 className="font-bold text-white">{workout.name}</h3>

                <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <Clock size={14} /> {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <Flame size={14} /> {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <Star size={14} /> {workout.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}
