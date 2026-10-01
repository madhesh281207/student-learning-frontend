import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PracticePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PracticePagination({
  currentPage,
  totalPages,
  onPageChange,
}: PracticePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages: number[] = [];

  const start = Math.max(
    1,
    currentPage - 2,
  );

  const end = Math.min(
    totalPages,
    currentPage + 2,
  );

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-6">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-800 dark:hover:bg-gray-800"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {start > 1 && (
        <>
          <button
            type="button"
            onClick={() => onPageChange(1)}
            className="h-9 min-w-9 rounded-lg px-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            1
          </button>

          {start > 2 && (
            <span className="px-1 text-gray-400">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium transition ${
            page === currentPage
              ? "bg-indigo-600 text-white"
              : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-1 text-gray-400">
              ...
            </span>
          )}

          <button
            type="button"
            onClick={() =>
              onPageChange(totalPages)
            }
            className="h-9 min-w-9 rounded-lg px-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-800 dark:hover:bg-gray-800"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
