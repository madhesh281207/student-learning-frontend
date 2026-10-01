import { Camera, Mail, User } from "lucide-react";

import SettingsCard from "./SettingsCard";
import SettingsInput from "./SettingsInput";
import type { ProfileSettings as ProfileSettingsType } from "../../types/settings";

interface Props {
  settings: ProfileSettingsType;
  onChange: (settings: ProfileSettingsType) => void;
  onAvatarChange: (file: File) => void;
}

export default function ProfileSettings({
  settings,
  onChange,
  onAvatarChange,
}: Props) {
  const update = (
    field: keyof ProfileSettingsType,
    value: string,
  ) => {
    onChange({
      ...settings,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Profile information"
        description="This information can be displayed to other students."
      >
        <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row">
          <div className="relative">
            {settings.avatar ? (
              <img
                src={settings.avatar}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover ring-4 ring-indigo-50 dark:ring-indigo-500/10"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700 ring-4 ring-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/10">
                {settings.firstName.charAt(0)}
                {settings.lastName.charAt(0)}
              </div>
            )}

            <label className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow dark:border-slate-900">
              <Camera size={14} />

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    onAvatarChange(file);
                  }
                }}
              />
            </label>
          </div>

          <div>
            <p className="font-medium text-slate-900 dark:text-white">
              Profile photo
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Use a clear photo so classmates can recognize you.
            </p>

            <p className="mt-2 text-xs text-slate-400">
              JPG, PNG or WEBP. Maximum 5MB.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SettingsInput
            label="First name"
            value={settings.firstName}
            onChange={(value) =>
              update("firstName", value)
            }
          />

          <SettingsInput
            label="Last name"
            value={settings.lastName}
            onChange={(value) =>
              update("lastName", value)
            }
          />

          <SettingsInput
            label="Username"
            value={settings.username}
            onChange={(value) =>
              update("username", value)
            }
            helpText="Your username is used across Tenfinity."
          />

          <SettingsInput
            label="Email address"
            value={settings.email}
            onChange={(value) =>
              update("email", value)
            }
            type="email"
          />

          <SettingsInput
            label="College / University"
            value={settings.college}
            onChange={(value) =>
              update("college", value)
            }
          />

          <div className="flex items-end">
            <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-slate-400" />
                <span className="text-xs text-slate-500">
                  Account email
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-slate-800 dark:text-white">
                {settings.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Student description
          </label>

          <textarea
            value={settings.bio}
            onChange={(event) =>
              update("bio", event.target.value)
            }
            rows={5}
            maxLength={300}
            placeholder="Tell other students about yourself..."
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />

          <div className="mt-1 flex justify-end text-xs text-slate-400">
            {settings.bio.length}/300
          </div>
        </div>
      </SettingsCard>

      <SettingsCard
        title="Profile preview"
        description="This is approximately how other students may see your profile."
      >
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
            {settings.firstName.charAt(0)}
            {settings.lastName.charAt(0)}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <User size={15} className="text-slate-400" />

              <p className="font-semibold text-slate-900 dark:text-white">
                {settings.firstName} {settings.lastName}
              </p>
            </div>

            <p className="text-sm text-slate-500">
              @{settings.username}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {settings.college}
            </p>
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}
