import SettingsCard from "./SettingsCard";
import SelectRow from "./SelectRow";
import type { AccountSettings as AccountSettingsType } from "../../types/settings";

interface Props {
  settings: AccountSettingsType;
  onChange: (settings: AccountSettingsType) => void;
}

export default function AccountSettings({
  settings,
  onChange,
}: Props) {
  const update = <K extends keyof AccountSettingsType>(
    key: K,
    value: AccountSettingsType[K],
  ) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Regional preferences"
        description="These preferences affect dates, times and regional information."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <SelectRow
            label="Timezone"
            description="Used when displaying learning reminders and activity."
            value={settings.timezone}
            onChange={(value) =>
              update("timezone", value)
            }
            options={[
              {
                label: "India Standard Time",
                value: "Asia/Kolkata",
              },
              {
                label: "UTC",
                value: "UTC",
              },
              {
                label: "Eastern Time",
                value: "America/New_York",
              },
              {
                label: "Pacific Time",
                value: "America/Los_Angeles",
              },
              {
                label: "Central European Time",
                value: "Europe/Berlin",
              },
            ]}
          />

          <SelectRow
            label="Interface language"
            description="Language used throughout Tenfinity."
            value={settings.language}
            onChange={(value) =>
              update("language", value)
            }
            options={[
              {
                label: "English",
                value: "English",
              },
              {
                label: "Hindi",
                value: "Hindi",
              },
              {
                label: "Tamil",
                value: "Tamil",
              },
            ]}
          />

          <SelectRow
            label="Date format"
            value={settings.dateFormat}
            onChange={(value) =>
              update("dateFormat", value)
            }
            options={[
              {
                label: "DD/MM/YYYY",
                value: "DD/MM/YYYY",
              },
              {
                label: "MM/DD/YYYY",
                value: "MM/DD/YYYY",
              },
              {
                label: "YYYY-MM-DD",
                value: "YYYY-MM-DD",
              },
            ]}
          />

          <SelectRow
            label="Time format"
            value={settings.timeFormat}
            onChange={(value) =>
              update(
                "timeFormat",
                value as AccountSettingsType["timeFormat"],
              )
            }
            options={[
              {
                label: "12-hour",
                value: "12-hour",
              },
              {
                label: "24-hour",
                value: "24-hour",
              },
            ]}
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Account status"
        description="Information about your current Tenfinity account."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                Active
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Account type
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
              Student
            </p>
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}
