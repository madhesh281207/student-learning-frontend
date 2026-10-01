import {
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import type { WeakTopic } from "../../types/progress";

interface WeakTopicsProps {
  topics: WeakTopic[];
  onPracticeTopic?: (topicId: string) => void;
}

const WeakTopics = ({
  topics,
  onPracticeTopic,
}: WeakTopicsProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-amber-50 p-2.5 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Areas to Practice
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Topics where your recent performance has room to improve.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                  {topic.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {topic.reason}
                </p>
              </div>
              <span className="rounded-lg bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
                {topic.successRate}%
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                {topic.solved}/{topic.total} solved · {topic.attempts} attempts
              </div>
              <button
                type="button"
                onClick={() => onPracticeTopic?.(topic.id)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
              >
                Practice
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeakTopics;
