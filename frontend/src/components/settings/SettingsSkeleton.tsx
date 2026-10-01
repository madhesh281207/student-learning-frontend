export default function SettingsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-32 rounded-2xl bg-slate-100 dark:bg-slate-800" />

      <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
        <div className="mb-6 h-6 w-40 rounded bg-slate-100 dark:bg-slate-800" />

        <div className="space-y-5">
          <div className="h-12 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-12 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-12 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-24 rounded bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
