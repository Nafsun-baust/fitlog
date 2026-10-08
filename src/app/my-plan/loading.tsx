export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-3 py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>
      <p>Loading workouts...</p>
    </div>
  );
}
