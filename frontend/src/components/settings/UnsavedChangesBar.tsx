interface Props {
  visible: boolean;
  saving: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

export default function UnsavedChangesBar({
  visible,
  saving,
  onSave,
  onDiscard,
}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            You have unsaved changes
          </p>

          <p className="text-xs text-slate-500">
            Save your changes before leaving this page.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            disabled={saving}
            onClick={onDiscard}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Discard
          </button>

          <button
            type="button"
            disabled={saving}
            onClick={onSave}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
