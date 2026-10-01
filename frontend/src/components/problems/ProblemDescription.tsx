import { FileText } from "lucide-react";

interface ProblemDescriptionProps {
  description: string;
}

export default function ProblemDescription({
  description,
}: ProblemDescriptionProps) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <FileText size={19} className="text-violet-500" />

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Description
        </h2>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
