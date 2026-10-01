import {
  CheckCircle2,
  Clock3,
  Cpu,
  FileWarning,
  LoaderCircle,
  XCircle,
  Zap,
} from "lucide-react";

import type { SubmissionStatus } from "../../types/submission";

interface SubmissionStatusBadgeProps {
  status: SubmissionStatus;
}

const SubmissionStatusBadge = ({ status }: SubmissionStatusBadgeProps) => {
  const config = {
    accepted: {
      label: "Accepted",
      className:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
      icon: CheckCircle2,
    },
    "wrong-answer": {
      label: "Wrong answer",
      className:
        "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
      icon: XCircle,
    },
    "runtime-error": {
      label: "Runtime error",
      className:
        "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
      icon: Zap,
    },
    "time-limit": {
      label: "Time limit",
      className:
        "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
      icon: Clock3,
    },
    "memory-limit": {
      label: "Memory limit",
      className:
        "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
      icon: Cpu,
    },
    "compile-error": {
      label: "Compile error",
      className:
        "bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-400",
      icon: FileWarning,
    },
    pending: {
      label: "Pending",
      className:
        "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
      icon: LoaderCircle,
    },
  } satisfies Record<
    SubmissionStatus,
    { label: string; className: string; icon: typeof CheckCircle2 }
  >;

  const item = config[status];
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${item.className}`}
    >
      <Icon size={13} className={status === "pending" ? "animate-spin" : ""} />
      {item.label}
    </span>
  );
};

export default SubmissionStatusBadge;
