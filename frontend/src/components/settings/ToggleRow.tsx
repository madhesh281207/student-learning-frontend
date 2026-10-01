interface ToggleRowProps {
  title: string;
  description?: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

export default function ToggleRow({
  title,
  description,
  enabled,
  onChange,
  disabled = false,
}: ToggleRowProps) {
  return (
    <div className="flex items-center justify-between gap-6 py-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-900 dark:text-white">
          {title}
        </p>

        {description && (
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={disabled}
        aria-pressed={enabled}
        onClick={() => onChange(!enabled)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-indigo-600"
            : "bg-slate-300 dark:bg-slate-700"
        } ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
