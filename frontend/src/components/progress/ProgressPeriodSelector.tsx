import type { ProgressPeriod } from "../../types/progress";

interface ProgressPeriodSelectorProps {
  value: ProgressPeriod;
  onChange: (period: ProgressPeriod) => void;
}

const periods: {
  value: ProgressPeriod;
  label: string;
}[] = [
  { value: "7d", label: "7 Days" },
  { value: "30d", label: "30 Days" },
  { value: "90d", label: "90 Days" },
  { value: "all", label: "All Time" },
];

const ProgressPeriodSelector = ({
  value,
  onChange,
}: ProgressPeriodSelectorProps) => {
  return (
    <div className="flex w-full overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900 sm:w-fit">
      {periods.map((period) => {
        const active = period.value === value;

        return (
          <button
            key={period.value}
            type="button"
            onClick={() => onChange(period.value)}
            aria-pressed={active}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {period.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProgressPeriodSelector;
