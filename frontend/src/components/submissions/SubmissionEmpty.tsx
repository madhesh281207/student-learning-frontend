import { FileX2, RotateCcw } from "lucide-react";

interface SubmissionEmptyProps {
  onReset: () => void;
}

const SubmissionEmpty = ({ onReset }: SubmissionEmptyProps) => {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
        <FileX2 size={28} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
        Nothing here yet
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
        Your submissions will appear here after you attempt coding problems.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <RotateCcw size={15} />
        Reset filters
      </button>
    </div>
  );
};

export default SubmissionEmpty;
