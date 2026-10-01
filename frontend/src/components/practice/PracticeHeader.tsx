import {
  BookOpen,
  History,
} from "lucide-react";

interface PracticeHeaderProps {
  totalProblems: number;
  onHistory: () => void;
}

export default function PracticeHeader({
  totalProblems,
  onHistory,
}: PracticeHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <BookOpen className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Practice
            </h1>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Build your problem-solving skills across all {totalProblems} available problems.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onHistory}
        className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
      >
        <History className="h-4 w-4" />
        Practice history
      </button>
    </div>
  );
}
