import type { PracticeDifficulty } from "../../types/practice";

interface DifficultyBadgeProps {
  difficulty: PracticeDifficulty;
  size?: "sm" | "md";
}

export default function DifficultyBadge({
  difficulty,
  size = "sm",
}: DifficultyBadgeProps) {
  const styles = {
    easy: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    medium:
      "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    hard: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };

  const labels = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${
        styles[difficulty]
      } ${
        size === "sm"
          ? "px-2.5 py-1 text-xs"
          : "px-3 py-1.5 text-sm"
      }`}
    >
      {labels[difficulty]}
    </span>
  );
}
