import {
  Activity,
  RefreshCw,
} from "lucide-react";

interface ProgressHeaderProps {
  onRefresh: () => void;
  refreshing?: boolean;
}

const ProgressHeader = ({
  onRefresh,
  refreshing = false,
}: ProgressHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
          <Activity className="h-4 w-4" />
          Coding Analytics
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Your Progress
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Track your coding performance, submission patterns, problem-solving
          progress, and areas that need more practice.
        </p>
      </div>

      <button
        type="button"
        onClick={onRefresh}
        disabled={refreshing}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <RefreshCw
          className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
        />
        Refresh
      </button>
    </div>
  );
};

export default ProgressHeader;
