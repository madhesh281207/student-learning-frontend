import SettingsCard from "./SettingsCard";
import ToggleRow from "./ToggleRow";
import type {
  PrivacySettings as PrivacySettingsType,
} from "../../types/settings";

interface Props {
  settings: PrivacySettingsType;
  onChange: (settings: PrivacySettingsType) => void;
}

export default function PrivacySettings({
  settings,
  onChange,
}: Props) {
  const update = (
    key: keyof PrivacySettingsType,
    value: boolean,
  ) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Profile visibility"
        description="Choose what other students can see on your profile."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Public profile"
            description="Allow other students to view your public profile."
            enabled={settings.publicProfile}
            onChange={(value) =>
              update("publicProfile", value)
            }
          />

          <ToggleRow
            title="Show college"
            description="Display your college or university on your profile."
            enabled={settings.showCollege}
            onChange={(value) =>
              update("showCollege", value)
            }
          />

          <ToggleRow
            title="Show activity"
            description="Allow others to see recent learning activity."
            enabled={settings.showActivity}
            onChange={(value) =>
              update("showActivity", value)
            }
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Learning statistics"
        description="Control which achievements are visible to other students."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Show leaderboard presence"
            description="Allow your username to appear on leaderboards."
            enabled={settings.showLeaderboardPresence}
            onChange={(value) =>
              update("showLeaderboardPresence", value)
            }
          />

          <ToggleRow
            title="Show solved problems"
            description="Display the number of problems you have solved."
            enabled={settings.showSolvedProblems}
            onChange={(value) =>
              update("showSolvedProblems", value)
            }
          />

          <ToggleRow
            title="Show learning streak"
            description="Display your current learning streak."
            enabled={settings.showStreak}
            onChange={(value) =>
              update("showStreak", value)
            }
          />
        </div>
      </SettingsCard>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5">
        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
          Privacy reminder
        </p>

        <p className="mt-1 text-sm leading-6 text-blue-700 dark:text-blue-400">
          Your settings only control visibility within
          Tenfinity. Account credentials and private account
          information are not made public.
        </p>
      </div>
    </div>
  );
}
