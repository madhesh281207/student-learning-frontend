import { ArrowUpRight, CheckCircle2, Clock3, MemoryStick } from "lucide-react";

import type { SubmissionRecord } from "../../types/submission";

import SubmissionStatusBadge from "./SubmissionStatusBadge";
import SubmissionLanguageBadge from "./SubmissionLanguageBadge";

interface SubmissionRowProps {
  submission: SubmissionRecord;
  onSelect: (submission: SubmissionRecord) => void;
}

const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const SubmissionRow = ({ submission, onSelect }: SubmissionRowProps) => {
  const progress =
    submission.totalTestCases > 0
      ? Math.round(
          (submission.passedTestCases / submission.totalTestCases) * 100,
        )
      : 0;

  return (
    <button
      type="button"
      onClick={() => onSelect(submission)}
      className="group w-full border-b border-slate-100 text-left transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
    >
      <div className="grid grid-cols-1 gap-4 px-5 py-4 lg:grid-cols-[minmax(220px,1.5fr)_150px_120px_100px_120px_40px] lg:items-center">
        {/* Problem title */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {submission.status === "accepted" && (
              <CheckCircle2
                size={16}
                className="shrink-0 text-emerald-500"
              />
            )}
            <span className="truncate text-sm font-bold text-slate-900 dark:text-white">
              {submission.problem.title}
            </span>
            {submission.isLatest && (
              <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                Latest
              </span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400">
              {submission.problem.difficulty}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs text-slate-400">
              {formatDate(submission.submittedAt)}
            </span>
          </div>
        </div>

        {/* Status */}
        <div>
          <SubmissionStatusBadge status={submission.status} />
        </div>

        {/* Language */}
        <div>
          <SubmissionLanguageBadge language={submission.language} />
        </div>

        {/* Runtime */}
        <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
          <Clock3 size={14} />
          {submission.runtime > 0 ? `${submission.runtime} ms` : "—"}
        </div>

        {/* Test cases progress */}
        <div>
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-600 dark:text-slate-300">
              {submission.passedTestCases}/{submission.totalTestCases}
            </span>
            <span className="text-slate-400">{progress}%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className={`h-full rounded-full ${
                submission.status === "accepted"
                  ? "bg-emerald-500"
                  : "bg-blue-500"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden justify-end lg:flex">
          <ArrowUpRight
            size={17}
            className="text-slate-300 transition group-hover:text-blue-500"
          />
        </div>
      </div>

      {/* Mobile extras */}
      <div className="px-5 pb-4 lg:hidden">
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-950">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock3 size={12} />
              Runtime
            </div>
            <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {submission.runtime > 0 ? `${submission.runtime} ms` : "—"}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MemoryStick size={12} />
              Memory
            </div>
            <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {submission.memory > 0 ? `${submission.memory} MB` : "—"}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SubmissionRow;
