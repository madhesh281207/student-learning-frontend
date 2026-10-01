import {
  ArrowRight,
  BarChart3,
} from "lucide-react";

import type { PracticeCategoryStats } from "../../types/practice";

interface CategoryProgressProps {
  categories: PracticeCategoryStats[];
  onSelect: (category: PracticeCategoryStats) => void;
}

export default function CategoryProgress({
  categories,
  onSelect,
}: CategoryProgressProps) {
  return (
    <section>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-gray-500" />

          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Topic progress
          </h2>
        </div>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          See how you're progressing across important concepts.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {categories.slice(0, 9).map((category) => (
          <button
            type="button"
            key={category.category}
            onClick={() => onSelect(category)}
            className="group rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {category.label}
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {category.completed} of{" "}
                  {category.total} completed
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-500" />
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{
                  width: `${category.percentage}%`,
                }}
              />
            </div>

            <p className="mt-2 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">
              {category.percentage}%
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
