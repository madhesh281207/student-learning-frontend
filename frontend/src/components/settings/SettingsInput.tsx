interface SettingsInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  helpText?: string;
}

export default function SettingsInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  helpText,
}: SettingsInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:disabled:bg-slate-800"
      />

      {helpText && (
        <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          {helpText}
        </p>
      )}
    </div>
  );
}
