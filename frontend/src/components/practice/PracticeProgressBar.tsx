interface PracticeProgressBarProps {
  value: number;
  showLabel?: boolean;
}

export default function PracticeProgressBar({
  value,
  showLabel = true,
}: PracticeProgressBarProps) {
  const safeValue = Math.min(
    100,
    Math.max(0, value),
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        {showLabel && (
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Progress
          </span>
        )}

        {showLabel && (
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
            {safeValue}%
          </span>
        )}
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all"
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
}
