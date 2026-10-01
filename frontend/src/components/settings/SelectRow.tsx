interface SelectOption {
  label: string;
  value: string;
}

interface SelectRowProps {
  label: string;
  description?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export default function SelectRow({
  label,
  description,
  value,
  options,
  onChange,
}: SelectRowProps) {
  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-900 dark:text-white">
          {label}
        </p>

        {description && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 sm:w-56 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
