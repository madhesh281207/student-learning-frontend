import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { RecentSolvedProblem } from "../../types/progress";

interface RecentSolvedProps {
  problems: RecentSolvedProblem[];
}

const difficultyClass = {
  Easy: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10",
  Medium: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10",
  Hard: "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10",
};

const RecentSolved = ({ problems }: RecentSolvedProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recently Solved
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your latest successful problem submissions.
          </p>
        </div>
        <Link
          to="/problems"
          className="hidden items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 sm:flex dark:text-indigo-400"
        >
          Browse problems
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {problems.map((problem) => (
          <Link
            key={problem.id}
            to={`/problems/${problem.slug}`}
            className="block px-5 py-4 transition hover:bg-slate-50 dark:hover:bg-slate-800/40"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <h3 className="truncate font-medium text-slate-800 dark:text-slate-200">
                    {problem.title}
                  </h3>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${difficultyClass[problem.difficulty]}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {problem.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-5 text-xs text-slate-400">
                <span>{problem.attempts} attempts</span>
                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  {problem.runtime}ms
                </span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  +{problem.score}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentSolved;
