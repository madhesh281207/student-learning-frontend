import {
  AlertCircle,
  RefreshCw,
} from "lucide-react";

interface PracticeErrorProps {
  message: string;
  onRetry: () => void;
}

export default function PracticeError({
  message,
  onRetry,
}: PracticeErrorProps) {
  return (
    <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-red-200 bg-red-50/50 px-6 dark:border-red-900/50 dark:bg-red-950/10">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
          <AlertCircle className="h-6 w-6" />
        </div>

        <h2 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
          Unable to load practice
        </h2>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {message}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
