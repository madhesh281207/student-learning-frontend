import type { ProblemTopic } from "../../types/problem";

interface ProblemTopicsProps {
  topics: ProblemTopic[];
}

export default function ProblemTopics({
  topics,
}: ProblemTopicsProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Topics
      </p>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic.id}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {topic.name}
          </span>
        ))}
      </div>
    </div>
  );
}
