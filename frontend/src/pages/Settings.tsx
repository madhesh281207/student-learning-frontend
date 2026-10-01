import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsSidebar from "../components/settings/SettingsSidebar";
import SettingsSkeleton from "../components/settings/SettingsSkeleton";
import UnsavedChangesBar from "../components/settings/UnsavedChangesBar";

import ProfileSettings from "../components/settings/ProfileSettings";
import AccountSettings from "../components/settings/AccountSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import PrivacySettings from "../components/settings/PrivacySettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import LearningSettings from "../components/settings/LearningSettings";
import AccessibilitySettings from "../components/settings/AccessibilitySettings";
import LanguageSettings from "../components/settings/LanguageSettings";
import DangerZone from "../components/settings/DangerZone";

import { settingsService } from "../services/settingsService";

import type {
  SettingsSectionId,
  UserSettings,
} from "../types/settings";

export default function Settings() {
  const [settings, setSettings] =
    useState<UserSettings | null>(null);

  const [savedSettings, setSavedSettings] =
    useState<UserSettings | null>(null);

  const [activeSection, setActiveSection] =
    useState<SettingsSectionId>("profile");

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [saved, setSaved] = useState(false);

  const [error, setError] = useState("");

  const [toast, setToast] = useState("");

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await settingsService.getSettings();

        setSettings(data);
        setSavedSettings(data);
      } catch {
        setError(
          "Unable to load your settings. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    void loadSettings();
  }, []);

  const dirty = useMemo(() => {
    if (!settings || !savedSettings) {
      return false;
    }

    return (
      JSON.stringify(settings) !==
      JSON.stringify(savedSettings)
    );
  }, [settings, savedSettings]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToast("");
    }, 3000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [toast]);

  const updateSettings = (
    updater: (current: UserSettings) => UserSettings,
  ) => {
    setSettings((current) => {
      if (!current) {
        return current;
      }

      return updater(current);
    });

    setSaved(false);
  };

  const handleSave = async () => {
    if (!settings) {
      return;
    }

    try {
      setSaving(true);
      setError("");

      const result =
        await settingsService.saveSettings(settings);

      setSettings(result);
      setSavedSettings(result);
      setSaved(true);

      setToast("Your settings have been saved.");
    } catch {
      setError(
        "Unable to save your settings. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = () => {
    if (!savedSettings) {
      return;
    }

    setSettings(structuredClone(savedSettings));
    setSaved(false);
    setToast("Unsaved changes were discarded.");
  };

  const handleReset = async () => {
    try {
      setSaving(true);

      const reset =
        await settingsService.resetSettings();

      setSettings(reset);
      setSavedSettings(reset);
      setSaved(true);

      setToast("Settings restored to defaults.");
    } catch {
      setError(
        "Unable to reset settings.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarChange = (file: File) => {
    if (!settings) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError(
        "Profile image must be smaller than 5MB.",
      );
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    updateSettings((current) => ({
      ...current,
      profile: {
        ...current.profile,
        avatar: objectUrl,
      },
    }));
  };

  const handleExport = async () => {
    if (!settings) {
      return;
    }

    const blob =
      await settingsService.exportData(settings);

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "tenfinity-data.json";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);

    setToast("Your data export has been downloaded.");
  };

  const handleDeactivate = async () => {
    await settingsService.deactivateAccount();

    setToast(
      "Account deactivation request completed in demo mode.",
    );
  };

  const handleDelete = async () => {
    await settingsService.deleteAccount();

    setToast(
      "Account deleted in demo mode.",
    );
  };

  const handlePasswordChange = async (
    currentPassword: string,
    newPassword: string,
  ) => {
    await settingsService.changePassword(
      currentPassword,
      newPassword,
    );

    setToast("Password updated successfully.");
  };

  const renderSection = () => {
    if (!settings) {
      return null;
    }

    switch (activeSection) {
      case "profile":
        return (
          <ProfileSettings
            settings={settings.profile}
            onChange={(profile) =>
              updateSettings((current) => ({
                ...current,
                profile,
              }))
            }
            onAvatarChange={handleAvatarChange}
          />
        );

      case "account":
        return (
          <AccountSettings
            settings={settings.account}
            onChange={(account) =>
              updateSettings((current) => ({
                ...current,
                account,
              }))
            }
          />
        );

      case "appearance":
        return (
          <AppearanceSettings
            settings={settings.appearance}
            onChange={(appearance) =>
              updateSettings((current) => ({
                ...current,
                appearance,
              }))
            }
          />
        );

      case "notifications":
        return (
          <NotificationSettings
            settings={settings.notifications}
            onChange={(notifications) =>
              updateSettings((current) => ({
                ...current,
                notifications,
              }))
            }
          />
        );

      case "privacy":
        return (
          <PrivacySettings
            settings={settings.privacy}
            onChange={(privacy) =>
              updateSettings((current) => ({
                ...current,
                privacy,
              }))
            }
          />
        );

      case "security":
        return (
          <SecuritySettings
            settings={settings.security}
            onChange={(security) =>
              updateSettings((current) => ({
                ...current,
                security,
              }))
            }
            onChangePassword={handlePasswordChange}
          />
        );

      case "learning":
        return (
          <LearningSettings
            settings={settings.learning}
            onChange={(learning) =>
              updateSettings((current) => ({
                ...current,
                learning,
              }))
            }
          />
        );

      case "accessibility":
        return (
          <AccessibilitySettings
            settings={settings.accessibility}
            onChange={(accessibility) =>
              updateSettings((current) => ({
                ...current,
                accessibility,
              }))
            }
          />
        );

      case "language":
        return (
          <LanguageSettings
            settings={settings.language}
            onChange={(language) =>
              updateSettings((current) => ({
                ...current,
                language,
              }))
            }
          />
        );

      case "danger":
        return (
          <DangerZone
            onExport={handleExport}
            onDeactivate={handleDeactivate}
            onDelete={handleDelete}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-full bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SettingsHeader
          saving={saving}
          saved={saved}
          dirty={dirty}
        />

        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/5">
            <AlertCircle
              size={19}
              className="mt-0.5 shrink-0 text-red-600"
            />

            <div>
              <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                Something went wrong
              </p>

              <p className="mt-1 text-sm text-red-700 dark:text-red-400">
                {error}
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <SettingsSkeleton />
        ) : settings ? (
          <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
            <SettingsSidebar
              activeSection={activeSection}
              onSectionChange={(section) => {
                setActiveSection(section);
                setSaved(false);
              }}
            />

            <main className="min-w-0">
              {renderSection()}

              {activeSection !== "danger" && (
                <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Settings changes
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Save your changes when you are finished.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={saving}
                      className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Reset defaults
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={saving || !dirty}
                      className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {saving
                        ? "Saving..."
                        : "Save changes"}
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        ) : null}
      </div>

      <UnsavedChangesBar
        visible={dirty}
        saving={saving}
        onSave={handleSave}
        onDiscard={handleDiscard}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] flex max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-3 shadow-xl dark:border-emerald-500/20 dark:bg-slate-900">
          <CheckCircle2
            size={18}
            className="shrink-0 text-emerald-500"
          />

          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {toast}
          </p>
        </div>
      )}
    </div>
  );
}
