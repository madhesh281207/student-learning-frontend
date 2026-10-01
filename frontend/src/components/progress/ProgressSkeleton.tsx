const ProgressSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-10 w-64 rounded-lg bg-slate-200 dark:bg-slate-800" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-32 rounded-2xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="h-96 rounded-2xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-96 rounded-2xl bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="h-80 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
  );
};

export default ProgressSkeleton;
