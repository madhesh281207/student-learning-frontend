import { Eye, Lightbulb } from "lucide-react";
import { useState } from "react";
import type { ProblemHint } from "../../types/problem";

interface ProblemHintsProps {
  hints: ProblemHint[];
}

export default function ProblemHints({
  hints,
}: ProblemHintsProps) {
  const [visibleHints, setVisibleHints] = useState<string[]>(
    [],
  );

  const toggleHint = (id: string) => {
    setVisibleHints((current) =>
      current.includes(id)
        ? current.filter((hintId) => hintId !== id)
        : [...current, id],
    );
  };

  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Lightbulb size={19} className="text-violet-500" />

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Hints
        </h2>
      </div>

      <div className="space-y-3">
        {hints.map((hint, index) => {
          const visible = visibleHints.includes(hint.id);

          return (
            <div
              key={hint.id}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Hint {index + 1}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {hint.title}
                  </p>
                </div>

                <button
                  onClick={() => toggleHint(hint.id)}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Eye size={15} />

                  {visible ? "Hide" : "Reveal"}
                </button>
              </div>

              {visible && (
                <div className="mt-4 rounded-lg bg-violet-500/5 p-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {hint.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
