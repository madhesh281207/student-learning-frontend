import {
  Flame,
  Lock,
  Target,
  Trophy,
} from "lucide-react";

import type { ProgressAchievement } from "../../types/progress";

interface ProgressAchievementsProps {
  achievements: ProgressAchievement[];
}

const iconMap = {
  target: Target,
  trophy: Trophy,
  flame: Flame,
};

const ProgressAchievements = ({
  achievements,
}: ProgressAchievementsProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Milestones
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Coding milestones you've unlocked and those still ahead.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const Icon =
            iconMap[achievement.icon as keyof typeof iconMap] ?? Target;

          return (
            <div
              key={achievement.id}
              className={`rounded-xl border p-4 ${
                achievement.unlocked
                  ? "border-indigo-100 bg-indigo-50/60 dark:border-indigo-500/20 dark:bg-indigo-500/5"
                  : "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-lg p-2 ${
                    achievement.unlocked
                      ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      : "bg-slate-200 text-slate-400 dark:bg-slate-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                {!achievement.unlocked && (
                  <Lock className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <h3 className="mt-4 font-semibold text-slate-800 dark:text-slate-200">
                {achievement.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {achievement.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {achievement.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgressAchievements;
