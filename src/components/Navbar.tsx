"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const planCount = 0;
    const savedCount = 0;

    return (
        <nav className="bg-black border-b border-gray-800 px-5 py-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">

                <Link href="/" className="flex items-center gap-2">
                    <Dumbbell size={24} className="text-lime-400" />
                    <h1 className="text-xl font-bold text-white">FITLOG</h1>
                </Link>

                <div className="order-3 w-full sm:order-0 sm:w-auto flex justify-center gap-6">
                    <Link
                        href="/"
                        className={pathname === "/" ? "text-lime-400" : "text-gray-400"}
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
                    <Link
                        href="/my-plan"
                        className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
                    >
                        Plan {planCount}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="border border-gray-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                        Saved {savedCount}
                    </Link>
                </div>

            </div>
        </nav>
    );
}
