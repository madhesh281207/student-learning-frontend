import { CalendarDays, Filter, Search, X } from "lucide-react";

import type {
  SubmissionFilters as Filters,
  SubmissionLanguage,
  SubmissionStatus,
} from "../../types/submission";

interface SubmissionFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
}

const SubmissionFilters = ({
  filters,
  onChange,
  onReset,
}: SubmissionFiltersProps) => {
  const hasFilters =
    filters.status !== "all" ||
    filters.language !== "all" ||
    filters.difficulty !== "all" ||
    filters.date !== "all" ||
    filters.problem.trim() !== "";

  const languages: { value: SubmissionLanguage | "all"; label: string }[] = [
    { value: "all", label: "All languages" },
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "c", label: "C" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
  ];

  const statuses: { value: SubmissionStatus | "all"; label: string }[] = [
    { value: "all", label: "All statuses" },
    { value: "accepted", label: "Accepted" },
    { value: "wrong-answer", label: "Wrong answer" },
    { value: "runtime-error", label: "Runtime error" },
    { value: "time-limit", label: "Time limit" },
    { value: "memory-limit", label: "Memory limit" },
    { value: "compile-error", label: "Compile error" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            <Filter size={15} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Filter submissions
          </h2>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <X size={13} />
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {/* Problem search */}
        <div className="relative xl:col-span-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={filters.problem}
            onChange={(e) =>
              onChange({ ...filters, problem: e.target.value })
            }
            placeholder="Search problem..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/10"
          />
        </div>

        {/* Status */}
        <select
          value={filters.status}
          onChange={(e) =>
            onChange({ ...filters, status: e.target.value as Filters["status"] })
          }
          className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        >
          {statuses.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* Language */}
        <select
          value={filters.language}
          onChange={(e) =>
            onChange({
              ...filters,
              language: e.target.value as Filters["language"],
            })
          }
          className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        >
          {languages.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>

        {/* Difficulty */}
        <select
          value={filters.difficulty}
          onChange={(e) =>
            onChange({
              ...filters,
              difficulty: e.target.value as Filters["difficulty"],
            })
          }
          className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
        >
          <option value="all">All difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Date */}
        <div className="relative">
          <CalendarDays
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <select
            value={filters.date}
            onChange={(e) =>
              onChange({ ...filters, date: e.target.value as Filters["date"] })
            }
            className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <option value="all">All time</option>
            <option value="today">Today</option>
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SubmissionFilters;
