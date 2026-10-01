import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

import SettingsCard from "./SettingsCard";
import SettingsInput from "./SettingsInput";
import ToggleRow from "./ToggleRow";
import type {
  SecuritySettings as SecuritySettingsType,
} from "../../types/settings";

interface Props {
  settings: SecuritySettingsType;
  onChange: (settings: SecuritySettingsType) => void;
  onChangePassword: (
    currentPassword: string,
    newPassword: string,
  ) => Promise<void>;
}

export default function SecuritySettings({
  settings,
  onChange,
  onChangePassword,
}: Props) {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [passwordMessage, setPasswordMessage] =
    useState("");

  const passwordStrength = useMemo(() => {
    let score = 0;

    if (newPassword.length >= 8) score++;
    if (/[A-Z]/.test(newPassword)) score++;
    if (/[0-9]/.test(newPassword)) score++;
    if (/[^A-Za-z0-9]/.test(newPassword)) score++;

    return score;
  }, [newPassword]);

  const handlePasswordSubmit = async () => {
    setPasswordMessage("");

    if (!currentPassword || !newPassword) {
      setPasswordMessage(
        "Please fill in all password fields.",
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage(
        "New password and confirmation do not match.",
      );
      return;
    }

    try {
      await onChangePassword(
        currentPassword,
        newPassword,
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setPasswordMessage(
        "Password updated successfully.",
      );
    } catch (error) {
      setPasswordMessage(
        error instanceof Error
          ? error.message
          : "Unable to update password.",
      );
    }
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Password"
        description="Update your password regularly to keep your account secure."
      >
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <KeyRound size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Keep your password private
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tenfinity will never ask you to share your password.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative">
            <SettingsInput
              label="Current password"
              type={showCurrent ? "text" : "password"}
              value={currentPassword}
              onChange={setCurrentPassword}
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrent(!showCurrent)
              }
              className="absolute right-3 top-9 text-slate-400"
            >
              {showCurrent ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>

          <div className="relative">
            <SettingsInput
              label="New password"
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={setNewPassword}
              helpText="Use at least 8 characters."
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-9 text-slate-400"
            >
              {showNew ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>

          {newPassword && (
            <div>
              <div className="mb-2 flex gap-1">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className={`h-1.5 flex-1 rounded-full ${
                      item <= passwordStrength
                        ? "bg-indigo-600"
                        : "bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-500">
                {passwordStrength <= 1
                  ? "Weak password"
                  : passwordStrength === 2
                    ? "Fair password"
                    : passwordStrength === 3
                      ? "Good password"
                      : "Strong password"}
              </p>
            </div>
          )}

          <div className="relative">
            <SettingsInput
              label="Confirm new password"
              type={
                showConfirm ? "text" : "password"
              }
              value={confirmPassword}
              onChange={setConfirmPassword}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
              className="absolute right-3 top-9 text-slate-400"
            >
              {showConfirm ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>

          {passwordMessage && (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {passwordMessage}
            </p>
          )}

          <button
            type="button"
            onClick={handlePasswordSubmit}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Update password
          </button>
        </div>
      </SettingsCard>

      <SettingsCard
        title="Account protection"
        description="Add additional protection to your account."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Two-factor authentication"
            description="Require an additional verification step when signing in."
            enabled={settings.twoFactorEnabled}
            onChange={(value) =>
              onChange({
                ...settings,
                twoFactorEnabled: value,
              })
            }
          />

          <ToggleRow
            title="Login alerts"
            description="Notify me when a new login is detected."
            enabled={settings.loginAlerts}
            onChange={(value) =>
              onChange({
                ...settings,
                loginAlerts: value,
              })
            }
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Active sessions"
        description="Devices currently associated with your account."
      >
        <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">
                Current browser session
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Active now
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <CheckCircle2 size={14} />
              Current
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={14} />
          Session management will connect to the backend authentication service.
        </div>
      </SettingsCard>
    </div>
  );
}
