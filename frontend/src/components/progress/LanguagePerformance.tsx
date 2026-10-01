import { Code2 } from "lucide-react";

import type { LanguageProgress } from "../../types/progress";

interface LanguagePerformanceProps {
  languages: LanguageProgress[];
}

const LanguagePerformance = ({
  languages,
}: LanguagePerformanceProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <Code2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Language Performance
        </h2>
      </div>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Your submission distribution across programming languages.
      </p>

      <div className="mt-6 space-y-5">
        {languages.map((language) => (
          <div key={language.language}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {language.language}
              </span>
              <span className="text-xs text-slate-400">
                {language.submissions} submissions
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{ width: `${language.percentage}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                {language.problemsSolved} problems solved
              </span>
              <span className="font-medium text-slate-600 dark:text-slate-300">
                {language.successRate}% success
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagePerformance;
