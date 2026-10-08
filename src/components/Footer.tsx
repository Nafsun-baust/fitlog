import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 px-5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell size={20} className="text-lime-400" />
          <h2 className="text-lg font-bold text-white">FITLOG</h2>
        </Link>

        <p className="text-sm text-gray-400 text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
