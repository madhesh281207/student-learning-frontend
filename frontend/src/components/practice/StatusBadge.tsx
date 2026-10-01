import {
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

import type { PracticeStatus } from "../../types/practice";

interface StatusBadgeProps {
  status: PracticeStatus;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Completed
      </span>
    );
  }

  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
        <Clock3 className="h-3.5 w-3.5" />
        In progress
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
      <Circle className="h-3.5 w-3.5" />
      Not started
    </span>
  );
}
