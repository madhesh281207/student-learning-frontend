import { Check, Laptop, Moon, Sun } from "lucide-react";

import SettingsCard from "./SettingsCard";
import ToggleRow from "./ToggleRow";
import type {
  AppearanceSettings as AppearanceSettingsType,
  ThemeMode,
} from "../../types/settings";

interface Props {
  settings: AppearanceSettingsType;
  onChange: (settings: AppearanceSettingsType) => void;
}

const themes: {
  value: ThemeMode;
  title: string;
  description: string;
  icon: typeof Sun;
}[] = [
  {
    value: "light",
    title: "Light",
    description: "Use the light interface.",
    icon: Sun,
  },
  {
    value: "dark",
    title: "Dark",
    description: "Use the dark interface.",
    icon: Moon,
  },
  {
    value: "system",
    title: "System",
    description: "Follow your device setting.",
    icon: Laptop,
  },
];

export default function AppearanceSettings({
  settings,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      <SettingsCard
        title="Theme"
        description="Choose how Tenfinity should look."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const selected =
              settings.theme === theme.value;

            return (
              <button
                key={theme.value}
                type="button"
                onClick={() =>
                  onChange({
                    ...settings,
                    theme: theme.value,
                  })
                }
                className={`relative rounded-2xl border p-5 text-left transition ${
                  selected
                    ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/10 dark:border-indigo-500 dark:bg-indigo-500/10"
                    : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                }`}
              >
                {selected && (
                  <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check size={12} />
                  </span>
                )}

                <Icon
                  size={22}
                  className={
                    selected
                      ? "text-indigo-600"
                      : "text-slate-500"
                  }
                />

                <p className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {theme.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {theme.description}
                </p>
              </button>
            );
          })}
        </div>
      </SettingsCard>

      <SettingsCard
        title="Interface preferences"
        description="Adjust the density and movement of the interface."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Compact mode"
            description="Reduce spacing to show more information on screen."
            enabled={settings.compactMode}
            onChange={(value) =>
              onChange({
                ...settings,
                compactMode: value,
              })
            }
          />

          <ToggleRow
            title="Reduce motion"
            description="Minimize interface animations and transitions."
            enabled={settings.reduceMotion}
            onChange={(value) =>
              onChange({
                ...settings,
                reduceMotion: value,
              })
            }
          />

          <ToggleRow
            title="High contrast"
            description="Increase contrast between text, backgrounds and controls."
            enabled={settings.highContrast}
            onChange={(value) =>
              onChange({
                ...settings,
                highContrast: value,
              })
            }
          />
        </div>
      </SettingsCard>
    </div>
  );
}
