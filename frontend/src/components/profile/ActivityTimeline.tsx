import {
  Award,
  CheckCircle2,
  Flame,
  PlayCircle,
  Send,
} from "lucide-react";

import type { ActivityItem } from "../../types/profile";

interface Props {
  activities: ActivityItem[];
}

export default function ActivityTimeline({
  activities,
}: Props) {
  const getIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "problem-solved":
        return CheckCircle2;

      case "achievement":
        return Award;

      case "streak":
        return Flame;

      case "submission":
        return Send;

      default:
        return PlayCircle;
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="font-semibold text-slate-900 dark:text-white">
          Recent activity
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Your latest activity on Tenfinity.
        </p>
      </div>

      <div className="p-6">
        {activities.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-slate-500">
              No recent activity.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {activities.map((activity, index) => {
              const Icon = getIcon(activity.type);

              return (
                <div
                  key={activity.id}
                  className="relative flex gap-4"
                >
                  {index !== activities.length - 1 && (
                    <div className="absolute left-4 top-9 h-full w-px bg-slate-200 dark:bg-slate-800" />
                  )}

                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon size={15} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {activity.title}
                      </p>

                      <span className="text-xs text-slate-400">
                        {activity.date}
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {activity.description}
                    </p>

                    {activity.metadata && (
                      <span className="mt-2 inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {activity.metadata}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
