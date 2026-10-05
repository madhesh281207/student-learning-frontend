import { FileText } from "lucide-react";

import type { PracticeProblem } from "../../types/practice";

interface ProblemStatementProps {
  problem: PracticeProblem;
}

export default function ProblemStatement({
  problem,
}: ProblemStatementProps) {
  return (
    <div className="space-y-8">
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-gray-500" />

          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Problem statement
          </h2>
        </div>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
          {problem.description}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Examples
        </h2>

        <div className="mt-4 space-y-4">
          {problem.examples.map(
            (example, index) => (
              <div
                key={`${example.input}-${index}`}
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-300">
                  Example {index + 1}
                </div>

                <div className="space-y-4 p-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Input
                    </p>

                    <pre className="overflow-x-auto rounded-lg bg-gray-950 p-3 text-sm text-gray-200">
                      {example.input}
                    </pre>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Output
                    </p>

                    <pre className="overflow-x-auto rounded-lg bg-gray-950 p-3 text-sm text-gray-200">
                      {example.output}
                    </pre>
                  </div>

                  {example.explanation && (
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Explanation
                      </p>

                      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {example.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Constraints
        </h2>

        <ul className="mt-4 space-y-2">
          {problem.constraints.map((constraint, index) => {
            const value = typeof constraint === 'string' ? constraint : constraint.text
            const key = typeof constraint === 'string' ? `${value}-${index}` : constraint.id

            return (
              <li
                key={key}
                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                <span>{value}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Concepts
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {problem.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
