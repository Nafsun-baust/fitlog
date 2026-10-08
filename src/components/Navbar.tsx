
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
    const pathname = usePathname();
    const { plan, saved } = usePlan();

    return (
        <nav className="border-b border-gray-800 bg-black px-5 py-4 text-white">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <Dumbbell size={24} className="text-lime-400" />
                    <h1 className="text-xl font-bold">FITLOG</h1>
                </Link>

                <div className="order-3 flex w-full justify-center gap-6 sm:order-none sm:w-auto">
                    <Link
                        href="/"
                        className={pathname === "/" || pathname.startsWith("/workout/") ? "text-lime-400" : "text-gray-400"}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={pathname === "/my-plan" ? "text-lime-400" : "text-gray-400"}
                    >
                        My Plan
                    </Link>
                </div>

                <div className="flex gap-3">
                    <Link href="/my-plan" className="rounded-full bg-lime-400 px-3 py-1 text-sm font-semibold text-black">
                        Plan {plan.length}
                    </Link>

                    <Link href="/my-plan" className="rounded-full border border-gray-600 px-3 py-1 text-sm">
                        Saved {saved.length}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
