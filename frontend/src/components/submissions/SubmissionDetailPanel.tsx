import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  MemoryStick,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { SubmissionRecord } from "../../types/submission";

import SubmissionStatusBadge from "./SubmissionStatusBadge";
import SubmissionLanguageBadge from "./SubmissionLanguageBadge";
import SubmissionTestCases from "./SubmissionTestCases";

interface SubmissionDetailPanelProps {
  submission: SubmissionRecord | null;
  onClose: () => void;
}

const formatDate = (value: string) => {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const SubmissionDetailPanel = ({
  submission,
  onClose,
}: SubmissionDetailPanelProps) => {
  if (!submission) {
    return null;
  }

  const progress =
    submission.totalTestCases > 0
      ? Math.round(
          (submission.passedTestCases / submission.totalTestCases) * 100,
        )
      : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close submission details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-slate-950/40 backdrop-blur-[2px]"
      />

      {/* Panel */}
      <aside className="relative flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl dark:bg-slate-950">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Submission details
            </p>
            <h2 className="mt-1 truncate text-lg font-bold text-slate-900 dark:text-white">
              {submission.problem.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X size={19} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <SubmissionStatusBadge status={submission.status} />
            <SubmissionLanguageBadge language={submission.language} />
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {submission.problem.difficulty}
            </span>
          </div>

          {/* Metric cards */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <Clock3 size={16} className="text-slate-400" />
              <p className="mt-2 text-xs text-slate-400">Runtime</p>
              <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                {submission.runtime > 0 ? `${submission.runtime} ms` : "—"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <MemoryStick size={16} className="text-slate-400" />
              <p className="mt-2 text-xs text-slate-400">Memory</p>
              <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                {submission.memory > 0 ? `${submission.memory} MB` : "—"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <Code2 size={16} className="text-slate-400" />
              <p className="mt-2 text-xs text-slate-400">Code size</p>
              <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                {submission.codeSize ? `${submission.codeSize} B` : "—"}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <CheckCircle2 size={16} className="text-slate-400" />
              <p className="mt-2 text-xs text-slate-400">Test cases</p>
              <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                {submission.passedTestCases}/{submission.totalTestCases}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Test-case performance
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {submission.passedTestCases} of {submission.totalTestCases}{" "}
                  test cases passed
                </p>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {progress}%
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  submission.status === "accepted"
                    ? "bg-emerald-500"
                    : "bg-blue-500"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Test cases list */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Test cases
              </h3>
              <span className="text-xs text-slate-400">
                {formatDate(submission.submittedAt)}
              </span>
            </div>
            <SubmissionTestCases testCases={submission.testCases} />
          </div>

          {/* Problem link */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
              Problem
            </h3>
            <Link
              to={`/practice/${submission.problem.id}`}
              onClick={onClose}
              className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
            >
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {submission.problem.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {submission.problem.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-300 transition group-hover:text-blue-500"
              />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <Link
            to={`/practice/${submission.problem.id}`}
            onClick={onClose}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <ExternalLink size={15} />
            Open Problem
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SubmissionDetailPanel;
