const SubmissionSkeleton = () => {
  return (
    <div className="animate-pulse space-y-5">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-40 rounded-lg bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-72 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="h-10 w-24 rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-2xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>

      <div className="h-24 rounded-2xl bg-slate-200 dark:bg-slate-800" />

      <div className="h-[500px] rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
  );
};

export default SubmissionSkeleton;
