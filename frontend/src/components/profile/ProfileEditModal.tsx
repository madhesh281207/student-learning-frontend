import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { ProfileUser } from "../../types/profile";

interface Props {
  user: ProfileUser;
  open: boolean;
  onClose: () => void;
  onSave: (user: ProfileUser) => Promise<void>;
}

export default function ProfileEditModal({
  user,
  open,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState(user);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(user);
  }, [user]);

  if (!open) {
    return null;
  }

  const update = (
    key: keyof ProfileUser,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);
      await onSave(form);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Edit profile
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Update the information shown on your profile.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-5 p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                First name
              </label>

              <input
                value={form.firstName}
                onChange={(event) =>
                  update(
                    "firstName",
                    event.target.value,
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Last name
              </label>

              <input
                value={form.lastName}
                onChange={(event) =>
                  update(
                    "lastName",
                    event.target.value,
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Username
            </label>

            <input
              value={form.username}
              onChange={(event) =>
                update(
                  "username",
                  event.target.value,
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              College / University
            </label>

            <input
              value={form.college}
              onChange={(event) =>
                update(
                  "college",
                  event.target.value,
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Location
            </label>

            <input
              value={form.location ?? ""}
              onChange={(event) =>
                update(
                  "location",
                  event.target.value,
                )
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Description
            </label>

            <textarea
              rows={5}
              value={form.description}
              onChange={(event) =>
                update(
                  "description",
                  event.target.value,
                )
              }
              maxLength={300}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <p className="mt-1 text-right text-xs text-slate-400">
              {form.description.length}/300
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save profile"}
          </button>
        </div>
      </div>
    </div>
  );
}
