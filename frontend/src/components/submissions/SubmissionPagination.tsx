import { ChevronLeft, ChevronRight } from "lucide-react";

interface SubmissionPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const SubmissionPagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: SubmissionPaginationProps) => {
  if (totalItems === 0) {
    return null;
  }

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Showing{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          {totalItems}
        </span>{" "}
        submissions
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          <ChevronLeft size={16} />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-bold transition ${
              page === currentPage
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default SubmissionPagination;
