import { Check, Settings } from "lucide-react";

interface SettingsHeaderProps {
  saving: boolean;
  saved: boolean;
  dirty: boolean;
}

export default function SettingsHeader({
  saving,
  saved,
  dirty,
}: SettingsHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Settings
            size={20}
            className="text-indigo-600"
          />

          <span className="text-sm font-medium text-indigo-600">
            Tenfinity Settings
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Manage your account, learning preferences,
          notifications, privacy and Tenfinity experience.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        {saving && (
          <span className="text-slate-500">
            Saving changes...
          </span>
        )}

        {!saving && saved && (
          <span className="flex items-center gap-1.5 text-emerald-600">
            <Check size={16} />
            Changes saved
          </span>
        )}

        {!saving && dirty && (
          <span className="text-amber-600">
            Unsaved changes
          </span>
        )}
      </div>
    </div>
  );
}
