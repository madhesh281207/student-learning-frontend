import {
  AlertCircle,
  RefreshCw,
} from "lucide-react";

interface ProgressErrorProps {
  message: string;
  onRetry: () => void;
}

const ProgressError = ({
  message,
  onRetry,
}: ProgressErrorProps) => {
  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="max-w-md rounded-2xl border border-rose-200 bg-white p-8 text-center dark:border-rose-900/50 dark:bg-slate-900">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
          Unable to load progress
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {message}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
};

export default ProgressError;
