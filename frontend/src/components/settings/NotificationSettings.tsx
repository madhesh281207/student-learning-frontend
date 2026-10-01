import SettingsCard from "./SettingsCard";
import ToggleRow from "./ToggleRow";
import type {
  NotificationSettings as NotificationSettingsType,
} from "../../types/settings";

interface Props {
  settings: NotificationSettingsType;
  onChange: (settings: NotificationSettingsType) => void;
}

export default function NotificationSettings({
  settings,
  onChange,
}: Props) {
  const update = (
    key: keyof NotificationSettingsType,
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
        title="Notification channels"
        description="Choose where you want to receive Tenfinity notifications."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="In-app notifications"
            description="Show notifications inside the Tenfinity application."
            enabled={settings.inAppNotifications}
            onChange={(value) =>
              update("inAppNotifications", value)
            }
          />

          <ToggleRow
            title="Email notifications"
            description="Receive important Tenfinity updates by email."
            enabled={settings.emailNotifications}
            onChange={(value) =>
              update("emailNotifications", value)
            }
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Learning notifications"
        description="Stay informed about your learning activity."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Problem reminders"
            description="Receive reminders when you have not practiced."
            enabled={settings.problemReminders}
            onChange={(value) =>
              update("problemReminders", value)
            }
          />

          <ToggleRow
            title="Streak reminders"
            description="Get reminded before your learning streak is at risk."
            enabled={settings.streakReminders}
            onChange={(value) =>
              update("streakReminders", value)
            }
          />

          <ToggleRow
            title="Submission results"
            description="Notify me when a submission receives a result."
            enabled={settings.submissionResults}
            onChange={(value) =>
              update("submissionResults", value)
            }
          />

          <ToggleRow
            title="Weekly progress summary"
            description="Receive a weekly summary of your learning activity."
            enabled={settings.weeklyProgress}
            onChange={(value) =>
              update("weeklyProgress", value)
            }
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Community notifications"
        description="Updates related to your position and activity."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Leaderboard updates"
            description="Notify me when my leaderboard position changes."
            enabled={settings.leaderboardUpdates}
            onChange={(value) =>
              update("leaderboardUpdates", value)
            }
          />

          <ToggleRow
            title="Product updates"
            description="Occasional news about new Tenfinity features."
            enabled={settings.productUpdates}
            onChange={(value) =>
              update("productUpdates", value)
            }
          />
        </div>
      </SettingsCard>
    </div>
  );
}
