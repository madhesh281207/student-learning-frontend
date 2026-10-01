import { Lightbulb } from "lucide-react";
import type { ProblemExample } from "../../types/problem";

interface ProblemExamplesProps {
  examples: ProblemExample[];
}

export default function ProblemExamples({
  examples,
}: ProblemExamplesProps) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Lightbulb size={19} className="text-amber-500" />

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Examples
        </h2>
      </div>

      <div className="space-y-4">
        {examples.map((example, index) => (
          <div
            key={example.id}
            className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Example {index + 1}
            </div>

            <div className="space-y-4 bg-white p-4 dark:bg-slate-950">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Input
                </p>

                <pre className="overflow-x-auto rounded-lg bg-slate-100 p-3 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  {example.input}
                </pre>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Output
                </p>

                <pre className="overflow-x-auto rounded-lg bg-slate-100 p-3 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  {example.output}
                </pre>
              </div>

              {example.explanation && (
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Explanation
                  </p>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {example.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
