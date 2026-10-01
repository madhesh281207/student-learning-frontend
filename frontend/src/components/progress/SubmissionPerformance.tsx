import {
  CheckCircle2,
  GitCommit,
  Timer,
  XCircle,
} from "lucide-react";

import type {
  SubmissionPerformance as Performance,
} from "../../types/progress";

interface SubmissionPerformanceProps {
  data: Performance[];
}

const SubmissionPerformance = ({
  data,
}: SubmissionPerformanceProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-5 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <GitCommit className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Submission Performance
          </h2>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Acceptance and runtime trends across recent weeks.
        </p>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {data.map((item) => (
          <div
            key={item.period}
            className="grid gap-4 px-5 py-4 sm:grid-cols-5 sm:items-center"
          >
            <div className="font-medium text-slate-800 dark:text-slate-200">
              {item.period}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GitCommit className="h-4 w-4 text-slate-400" />
              <span className="text-slate-600 dark:text-slate-300">
                {item.submissions}
              </span>
              <span className="text-xs text-slate-400">submissions</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-slate-600 dark:text-slate-300">
                {item.accepted}
              </span>
              <span className="text-xs text-slate-400">accepted</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle className="h-4 w-4 text-rose-500" />
              <span className="text-slate-600 dark:text-slate-300">
                {item.failed}
              </span>
              <span className="text-xs text-slate-400">failed</span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs text-slate-400">Success</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {item.successRate}%
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xs text-slate-400">
                  <Timer className="h-3 w-3" />
                  Runtime
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {item.averageRuntime}ms
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubmissionPerformance;
