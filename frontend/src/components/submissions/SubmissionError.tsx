import { AlertTriangle, RefreshCcw } from "lucide-react";

interface SubmissionErrorProps {
  message?: string;
  onRetry: () => void;
}

const SubmissionError = ({
  message = "Something went wrong while loading your submissions.",
  onRetry,
}: SubmissionErrorProps) => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-red-200 bg-white px-6 text-center dark:border-red-500/20 dark:bg-slate-900">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400">
        <AlertTriangle size={25} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
        Unable to load submissions
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <RefreshCcw size={15} />
        Try again
      </button>
    </div>
  );
};

export default SubmissionError;
