import { FileCheck2, History, RefreshCcw } from "lucide-react";

interface SubmissionHeaderProps {
  onRefresh: () => void;
  loading?: boolean;
}

const SubmissionHeader = ({
  onRefresh,
  loading = false,
}: SubmissionHeaderProps) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <FileCheck2 size={24} />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Submissions
            </h1>

            <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 sm:inline-flex items-center dark:bg-slate-800 dark:text-slate-300">
              <History size={13} className="mr-1" />
              History
            </span>
          </div>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Review your coding attempts, execution results, test cases, and
            submission performance.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRefresh}
        disabled={loading}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <RefreshCcw
          size={16}
          className={loading ? "animate-spin" : ""}
        />
        Refresh
      </button>
    </div>
  );
};

export default SubmissionHeader;
