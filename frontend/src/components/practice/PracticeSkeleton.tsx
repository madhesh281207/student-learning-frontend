export default function PracticeSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-64 rounded-lg bg-gray-200 dark:bg-gray-800" />

      <div className="h-36 rounded-2xl bg-gray-200 dark:bg-gray-800" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-2xl bg-gray-200 dark:bg-gray-800"
          />
        ))}
      </div>

      <div className="h-32 rounded-2xl bg-gray-200 dark:bg-gray-800" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-72 rounded-2xl bg-gray-200 dark:bg-gray-800"
          />
        ))}
      </div>
    </div>
  );
}
