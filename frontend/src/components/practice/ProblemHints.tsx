import { ChevronDown, Lightbulb } from "lucide-react";
import { useState } from "react";

import type { PracticeHint } from "../../types/practice";

interface ProblemHintsProps {
  hints: PracticeHint[];
}

export default function ProblemHints({
  hints,
}: ProblemHintsProps) {
  const [openHint, setOpenHint] =
    useState<string | null>(null);

  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900/40 dark:bg-amber-950/10">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />

        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Hints
        </h2>
      </div>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Try to solve the problem yourself before opening a hint.
      </p>

      <div className="mt-4 space-y-2">
        {hints.map((hint) => {
          const open = openHint === hint.id;

          return (
            <div
              key={hint.id}
              className="overflow-hidden rounded-xl border border-amber-200 bg-white dark:border-amber-900/40 dark:bg-gray-900"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenHint(
                    open ? null : hint.id,
                  )
                }
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {hint.title}
                </span>

                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="border-t border-amber-100 px-4 py-3 dark:border-amber-900/30">
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {hint.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
