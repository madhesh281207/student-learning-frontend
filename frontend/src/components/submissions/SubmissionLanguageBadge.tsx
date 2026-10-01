import type { SubmissionLanguage } from "../../types/submission";

interface SubmissionLanguageBadgeProps {
  language: SubmissionLanguage;
}

const labels: Record<SubmissionLanguage, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
  c: "C",
  go: "Go",
  rust: "Rust",
};

const SubmissionLanguageBadge = ({
  language,
}: SubmissionLanguageBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {labels[language]}
    </span>
  );
};

export default SubmissionLanguageBadge;
