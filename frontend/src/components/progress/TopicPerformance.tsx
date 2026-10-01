import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
  Tag,
} from "lucide-react";

import type { TopicProgress } from "../../types/progress";

interface TopicPerformanceProps {
  topics: TopicProgress[];
}

const TopicPerformance = ({ topics }: TopicPerformanceProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-5 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Topic Performance
          </h2>
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Compare your performance across problem topics.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-800">
              <th className="px-5 py-3">Topic</th>
              <th className="px-5 py-3">Solved</th>
              <th className="px-5 py-3">Coverage</th>
              <th className="px-5 py-3">Success</th>
              <th className="px-5 py-3">Attempts</th>
              <th className="px-5 py-3">Trend</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <tr
                key={topic.id}
                className="border-b border-slate-100 last:border-b-0 dark:border-slate-800/70"
              >
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    {topic.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {topic.score} score
                  </p>
                </td>
                <td className="px-5 py-4 text-sm text-slate-700 dark:text-slate-300">
                  {topic.solved}/{topic.total}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${topic.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      {topic.percentage}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {topic.successRate}%
                </td>
                <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400">
                  {topic.attempts}
                </td>
                <td className="px-5 py-4">
                  {topic.trend === "up" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      +{topic.trendValue}%
                    </span>
                  )}
                  {topic.trend === "down" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                      <ArrowDownRight className="h-3.5 w-3.5" />
                      {topic.trendValue}%
                    </span>
                  )}
                  {topic.trend === "neutral" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <Minus className="h-3.5 w-3.5" />
                      Stable
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopicPerformance;
