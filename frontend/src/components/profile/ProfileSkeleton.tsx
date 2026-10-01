export default function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="h-32 bg-slate-200 dark:bg-slate-800" />

        <div className="p-6">
          <div className="-mt-12 flex gap-4">
            <div className="h-28 w-28 rounded-2xl bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-3 pt-14">
              <div className="h-6 w-48 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>

          <div className="mt-6 h-16 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-32 rounded-2xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>

      <div className="h-96 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}
