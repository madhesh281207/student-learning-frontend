import {
  Bookmark,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import type {
  PracticeCategory,
  PracticeFilterDifficulty,
  PracticeFilters as PracticeFiltersType,
  PracticeSort,
  PracticeStatus,
} from "../../types/practice";

interface PracticeFiltersProps {
  filters: PracticeFiltersType;
  onChange: (
    field: keyof PracticeFiltersType,
    value:
      | string
      | boolean
      | PracticeFilterDifficulty
      | PracticeCategory
      | PracticeStatus
      | PracticeSort,
  ) => void;
  onReset: () => void;
}

const categories: {
  value: PracticeCategory | "all";
  label: string;
}[] = [
  { value: "all", label: "All topics" },
  { value: "arrays", label: "Arrays" },
  { value: "strings", label: "Strings" },
  { value: "linked-list", label: "Linked List" },
  { value: "stack", label: "Stack" },
  { value: "queue", label: "Queue" },
  { value: "trees", label: "Trees" },
  { value: "graphs", label: "Graphs" },
  {
    value: "dynamic-programming",
    label: "Dynamic Programming",
  },
  { value: "sorting", label: "Sorting" },
  { value: "searching", label: "Searching" },
  { value: "greedy", label: "Greedy" },
  { value: "recursion", label: "Recursion" },
  { value: "math", label: "Math" },
];

export default function PracticeFilters({
  filters,
  onChange,
  onReset,
}: PracticeFiltersProps) {
  const hasFilters =
    filters.search.trim() !== "" ||
    filters.difficulty !== "all" ||
    filters.category !== "all" ||
    filters.status !== "all" ||
    filters.sort !== "recommended" ||
    filters.bookmarkedOnly;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />

            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Find a problem
            </h2>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </button>
          )}
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(250px,1.5fr)_repeat(3,minmax(140px,1fr))]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={filters.search}
              onChange={(event) =>
                onChange(
                  "search",
                  event.target.value,
                )
              }
              placeholder="Search problems or topics..."
              className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <select
            value={filters.difficulty}
            onChange={(event) =>
              onChange(
                "difficulty",
                event.target.value as PracticeFilterDifficulty,
              )
            }
            className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="all">All difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select
            value={filters.category}
            onChange={(event) =>
              onChange(
                "category",
                event.target.value as PracticeCategory | "all",
              )
            }
            className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
              >
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={filters.status}
            onChange={(event) =>
              onChange(
                "status",
                event.target.value as PracticeStatus | "all",
              )
            }
            className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="all">All progress</option>
            <option value="not-started">
              Not started
            </option>
            <option value="in-progress">
              In progress
            </option>
            <option value="completed">
              Completed
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <Filter className="h-3.5 w-3.5" />
              Sort:
            </span>

            {(
              [
                ["recommended", "Recommended"],
                ["difficulty", "Difficulty"],
                ["progress", "Progress"],
                ["recent", "Recently updated"],
              ] as const
            ).map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() =>
                  onChange("sort", value)
                }
                className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
                  filters.sort === value
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              onChange(
                "bookmarkedOnly",
                !filters.bookmarkedOnly,
              )
            }
            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
              filters.bookmarkedOnly
                ? "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-500/10 dark:text-indigo-400"
                : "border-gray-200 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            }`}
          >
            <Bookmark
              className="h-3.5 w-3.5"
              fill={
                filters.bookmarkedOnly
                  ? "currentColor"
                  : "none"
              }
            />
            Bookmarked only
          </button>
        </div>
      </div>
    </div>
  );
}
