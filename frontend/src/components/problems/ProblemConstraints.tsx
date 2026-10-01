import { ShieldCheck } from "lucide-react";
import type { ProblemConstraint } from "../../types/problem";

interface ProblemConstraintsProps {
  constraints: ProblemConstraint[];
}

export default function ProblemConstraints({
  constraints,
}: ProblemConstraintsProps) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <ShieldCheck size={19} className="text-emerald-500" />

        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Constraints
        </h2>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <ul className="space-y-3">
          {constraints.map((constraint) => (
            <li
              key={constraint.id}
              className="flex gap-3 text-sm text-slate-600 dark:text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

              <span>{constraint.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
