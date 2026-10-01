import SettingsCard from "./SettingsCard";
import SelectRow from "./SelectRow";
import ToggleRow from "./ToggleRow";
import type {
  LearningSettings as LearningSettingsType,
} from "../../types/settings";

interface Props {
  settings: LearningSettingsType;
  onChange: (settings: LearningSettingsType) => void;
}

export default function LearningSettings({
  settings,
  onChange,
}: Props) {
  const update = <
    K extends keyof LearningSettingsType,
  >(
    key: K,
    value: LearningSettingsType[K],
  ) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Learning preferences"
        description="Customize how problems and learning content are presented."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <SelectRow
            label="Default difficulty"
            description="Difficulty used when opening your practice workspace."
            value={settings.defaultDifficulty}
            onChange={(value) =>
              update(
                "defaultDifficulty",
                value as LearningSettingsType["defaultDifficulty"],
              )
            }
            options={[
              {
                label: "Mixed",
                value: "mixed",
              },
              {
                label: "Easy",
                value: "easy",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Hard",
                value: "hard",
              },
            ]}
          />

          <SelectRow
            label="Preferred coding language"
            description="Language you prefer when learning and practicing."
            value={settings.preferredLanguage}
            onChange={(value) =>
              update(
                "preferredLanguage",
                value as LearningSettingsType["preferredLanguage"],
              )
            }
            options={[
              {
                label: "TypeScript",
                value: "typescript",
              },
              {
                label: "JavaScript",
                value: "javascript",
              },
              {
                label: "Python",
                value: "python",
              },
              {
                label: "Java",
                value: "java",
              },
              {
                label: "C++",
                value: "cpp",
              },
              {
                label: "C",
                value: "c",
              },
              {
                label: "Go",
                value: "go",
              },
            ]}
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Learning goals"
        description="Set targets to keep your preparation consistent."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Daily problem goal
            </label>

            <input
              type="number"
              min={1}
              max={50}
              value={settings.dailyGoal}
              onChange={(event) =>
                update(
                  "dailyGoal",
                  Number(event.target.value),
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <p className="mt-1.5 text-xs text-slate-500">
              Problems per day
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Weekly target
            </label>

            <input
              type="number"
              min={1}
              max={200}
              value={settings.weeklyTarget}
              onChange={(event) =>
                update(
                  "weeklyTarget",
                  Number(event.target.value),
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <p className="mt-1.5 text-xs text-slate-500">
              Problems per week
            </p>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard
        title="Practice assistance"
        description="Control the amount of guidance shown while practicing."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Show hints"
            description="Allow hints to appear when you are stuck."
            enabled={settings.showHints}
            onChange={(value) =>
              update("showHints", value)
            }
          />

          <ToggleRow
            title="Show explanations after submission"
            description="Show explanations and learning material after a submission."
            enabled={settings.showExplanationsAfterSubmission}
            onChange={(value) =>
              update(
                "showExplanationsAfterSubmission",
                value,
              )
            }
          />

          <ToggleRow
            title="Auto-save preferences"
            description="Remember problem filters and learning preferences."
            enabled={settings.autoSavePreferences}
            onChange={(value) =>
              update(
                "autoSavePreferences",
                value,
              )
            }
          />
        </div>
      </SettingsCard>
    </div>
  );
}
