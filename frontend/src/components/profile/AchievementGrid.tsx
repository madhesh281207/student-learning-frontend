import {
  Lock,
  Trophy,
} from "lucide-react";

import type { Achievement } from "../../types/profile";

interface Props {
  achievements: Achievement[];
}

export default function AchievementGrid({
  achievements,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
            <Trophy size={17} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Achievements
            </h2>

            <p className="text-xs text-slate-500">
              Milestones you have unlocked and are working toward.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const percentage =
            achievement.target && achievement.progress
              ? Math.min(
                  100,
                  (achievement.progress /
                    achievement.target) *
                    100,
                )
              : 0;

          return (
            <div
              key={achievement.id}
              className={`relative rounded-2xl border p-5 transition ${
                achievement.unlocked
                  ? "border-indigo-100 bg-indigo-50/50 dark:border-indigo-500/10 dark:bg-indigo-500/5"
                  : "border-slate-200 bg-slate-50/50 opacity-75 dark:border-slate-800 dark:bg-slate-950"
              }`}
            >
              {!achievement.unlocked && (
                <div className="absolute right-4 top-4">
                  <Lock
                    size={15}
                    className="text-slate-400"
                  />
                </div>
              )}

              <div className="text-3xl">
                {achievement.icon}
              </div>

              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                {achievement.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {achievement.description}
              </p>

              {achievement.target &&
                achievement.progress !== undefined && (
                  <div className="mt-4">
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        Progress
                      </span>

                      <span className="font-medium text-slate-600 dark:text-slate-300">
                        {achievement.progress}/
                        {achievement.target}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-indigo-600"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

              {achievement.unlockedAt && (
                <p className="mt-4 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  Unlocked {achievement.unlockedAt}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
