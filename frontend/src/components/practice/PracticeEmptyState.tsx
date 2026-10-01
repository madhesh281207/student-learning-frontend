import {
  BookOpen,
  RotateCcw,
} from "lucide-react";

interface PracticeEmptyStateProps {
  onReset: () => void;
}

export default function PracticeEmptyState({
  onReset,
}: PracticeEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        <BookOpen className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
        No problems found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
        We couldn't find problems matching your current filters.
        Try changing the search or clearing your filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900"
      >
        <RotateCcw className="h-4 w-4" />
        Reset filters
      </button>
    </div>
  );
}
