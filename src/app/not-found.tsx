import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-6xl font-bold text-lime-400">404</h1>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-gray-400">The page you are looking for does not exist.</p>
      <Link href="/" className="rounded bg-lime-400 px-5 py-2 text-black">
        Back to Home
      </Link>
    </div>
  );
}
