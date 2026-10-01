import { CheckCircle2, Circle, EyeOff, XCircle } from "lucide-react";

import type { SubmissionTestCase } from "../../types/submission";

interface SubmissionTestCasesProps {
  testCases: SubmissionTestCase[];
}

const SubmissionTestCases = ({ testCases }: SubmissionTestCasesProps) => {
  if (testCases.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-200 p-5 text-center dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Detailed test-case information is not available for this submission.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {testCases.map((testCase) => {
        const passed = testCase.status === "passed";
        const failed = testCase.status === "failed";

        return (
          <div
            key={testCase.id}
            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {passed ? (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                ) : failed ? (
                  <XCircle size={16} className="text-red-500" />
                ) : (
                  <Circle size={16} className="text-slate-400" />
                )}
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Test case {testCase.testCaseNumber}
                </span>
                {testCase.hidden && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <EyeOff size={10} />
                    Hidden
                  </span>
                )}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {testCase.runtime} ms
              </div>
            </div>

            {!testCase.hidden && (
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Input
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-slate-200">
                    {testCase.input}
                  </pre>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Expected
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-slate-200">
                    {testCase.expectedOutput}
                  </pre>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Actual
                  </p>
                  <pre
                    className={`overflow-x-auto rounded-lg p-3 text-xs ${
                      failed
                        ? "bg-red-950 text-red-300"
                        : "bg-slate-950 text-slate-200"
                    }`}
                  >
                    {testCase.actualOutput}
                  </pre>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubmissionTestCases;
