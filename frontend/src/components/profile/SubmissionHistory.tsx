import {
  CheckCircle2,
  Clock3,
  Code2,
  XCircle,
} from "lucide-react";

import type {
  SubmissionItem,
  SubmissionStatus,
} from "../../types/profile";

interface Props {
  submissions: SubmissionItem[];
}

const statusConfig: Record<
  SubmissionStatus,
  {
    label: string;
    className: string;
    icon: typeof CheckCircle2;
  }
> = {
  accepted: {
    label: "Accepted",
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    icon: CheckCircle2,
  },

  "wrong-answer": {
    label: "Wrong Answer",
    className:
      "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
    icon: XCircle,
  },

  "runtime-error": {
    label: "Runtime Error",
    className:
      "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
    icon: XCircle,
  },

  "time-limit": {
    label: "Time Limit",
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    icon: Clock3,
  },

  "compile-error": {
    label: "Compile Error",
    className:
      "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
    icon: Code2,
  },
};

export default function SubmissionHistory({
  submissions,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          Recent submissions
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Your latest problem submissions.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-slate-800">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Problem
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Difficulty
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Language
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Score
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Submitted
              </th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((submission) => {
              const config =
                statusConfig[submission.status];

              const Icon = config.icon;

              return (
                <tr
                  key={submission.id}
                  className="border-b border-slate-100 last:border-0 dark:border-slate-800"
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {submission.problemTitle}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {submission.problemId}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {submission.difficulty}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {submission.language}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.className}`}
                    >
                      <Icon size={13} />
                      {config.label}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {submission.score}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {submission.submittedAt}
                      </p>

                      {submission.runtime && (
                        <p className="mt-1 text-xs text-slate-400">
                          {submission.runtime} •{" "}
                          {submission.memory}
                        </p>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
