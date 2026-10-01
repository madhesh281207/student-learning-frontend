import { Inbox } from "lucide-react";

import type { SubmissionRecord } from "../../types/submission";
import SubmissionRow from "./SubmissionRow";

interface SubmissionTableProps {
  submissions: SubmissionRecord[];
  onSelect: (submission: SubmissionRecord) => void;
}

const SubmissionTable = ({ submissions, onSelect }: SubmissionTableProps) => {
  if (submissions.length === 0) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
          <Inbox size={25} />
        </div>
        <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
          No submissions found
        </h3>
        <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
          No submissions match your current filters. Try changing the search or
          clearing the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Table header — desktop only */}
      <div className="hidden border-b border-slate-100 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-slate-950 lg:grid lg:grid-cols-[minmax(220px,1.5fr)_150px_120px_100px_120px_40px] lg:items-center lg:gap-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Problem
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Status
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Language
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Runtime
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Tests
        </span>
        <span />
      </div>

      {submissions.map((submission) => (
        <SubmissionRow
          key={submission.id}
          submission={submission}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default SubmissionTable;
