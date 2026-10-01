import { Download, Trash2, UserX } from "lucide-react";
import { useState } from "react";

interface Props {
  onExport: () => Promise<void>;
  onDeactivate: () => Promise<void>;
  onDelete: () => Promise<void>;
}

export default function DangerZone({
  onExport,
  onDeactivate,
  onDelete,
}: Props) {
  const [deleteConfirmation, setDeleteConfirmation] =
    useState("");

  const [busy, setBusy] = useState(false);

  const run = async (
    action: () => Promise<void>,
  ) => {
    try {
      setBusy(true);
      await action();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-500/20 dark:bg-red-500/5">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
            <Trash2 size={19} />
          </div>

          <div>
            <h2 className="font-semibold text-red-900 dark:text-red-300">
              Proceed carefully
            </h2>

            <p className="mt-1 text-sm leading-6 text-red-700 dark:text-red-400">
              Actions in this section can affect your account
              and personal data. Make sure you understand the
              consequences before continuing.
            </p>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Export your data
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Download a copy of your current Tenfinity settings.
              </p>
            </div>

            <button
              type="button"
              disabled={busy}
              onClick={() => run(onExport)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Download size={16} />
              Export data
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-white dark:border-amber-500/20 dark:bg-slate-900">
        <div className="p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Deactivate account
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                Temporarily disable your account. Your information
                can be restored later through the appropriate account
                recovery flow.
              </p>
            </div>

            <button
              type="button"
              disabled={busy}
              onClick={() =>
                run(async () => {
                  const confirmed = window.confirm(
                    "Are you sure you want to deactivate your account?",
                  );

                  if (confirmed) {
                    await onDeactivate();
                  }
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-300 px-4 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-50 disabled:opacity-50 dark:border-amber-500/30 dark:text-amber-400 dark:hover:bg-amber-500/10"
            >
              <UserX size={16} />
              Deactivate
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-red-300 bg-white dark:border-red-500/30 dark:bg-slate-900">
        <div className="border-b border-red-100 p-6 dark:border-red-500/10">
          <h2 className="font-semibold text-red-700 dark:text-red-400">
            Delete account
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Permanently delete your Tenfinity account. This action
            should only be performed when you are certain you no
            longer need the account.
          </p>
        </div>

        <div className="space-y-4 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Type DELETE to confirm
            </label>

            <input
              value={deleteConfirmation}
              onChange={(event) =>
                setDeleteConfirmation(event.target.value)
              }
              placeholder="DELETE"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:max-w-sm"
            />
          </div>

          <button
            type="button"
            disabled={
              busy || deleteConfirmation !== "DELETE"
            }
            onClick={() =>
              run(async () => {
                const confirmed = window.confirm(
                  "This will permanently delete your account. Continue?",
                );

                if (confirmed) {
                  await onDelete();
                }
              })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Trash2 size={16} />
            Permanently delete account
          </button>
        </div>
      </section>
    </div>
  );
}
