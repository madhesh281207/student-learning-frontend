import { useCallback, useEffect, useState } from "react";

import SubmissionHeader from "../components/submissions/SubmissionHeader";
import SubmissionStats from "../components/submissions/SubmissionStats";
import SubmissionFilters from "../components/submissions/SubmissionFilters";
import SubmissionTable from "../components/submissions/SubmissionTable";
import SubmissionDetailPanel from "../components/submissions/SubmissionDetailPanel";
import SubmissionPagination from "../components/submissions/SubmissionPagination";
import SubmissionEmpty from "../components/submissions/SubmissionEmpty";
import SubmissionSkeleton from "../components/submissions/SubmissionSkeleton";
import SubmissionError from "../components/submissions/SubmissionError";

import type {
  SubmissionFilters as Filters,
  SubmissionRecord,
  SubmissionResponse,
} from "../types/submission";

import { getSubmissions } from "../services/submissions/submissionService";

const DEFAULT_FILTERS: Filters = {
  status: "all",
  language: "all",
  problem: "",
  date: "all",
  difficulty: "all",
};

const PAGE_SIZE = 6;

const Submissions = () => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<SubmissionResponse | null>(null);
  const [selectedSubmission, setSelectedSubmission] =
    useState<SubmissionRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSubmissions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getSubmissions({
        page,
        pageSize: PAGE_SIZE,
        filters,
      });

      setData(response);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to load submissions.",
      );
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  const handleFilterChange = (nextFilters: Filters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  if (loading && !data) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <SubmissionSkeleton />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <SubmissionError message={error} onRetry={loadSubmissions} />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="space-y-6">
          <SubmissionHeader onRefresh={loadSubmissions} loading={loading} />

          <SubmissionStats stats={data.stats} />

          <SubmissionFilters
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleResetFilters}
          />

          {loading && (
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              Updating submission history…
            </div>
          )}

          {data.submissions.length === 0 ? (
            <SubmissionEmpty onReset={handleResetFilters} />
          ) : (
            <>
              <SubmissionTable
                submissions={data.submissions}
                onSelect={setSelectedSubmission}
              />

              <SubmissionPagination
                currentPage={data.pagination.currentPage}
                totalPages={data.pagination.totalPages}
                totalItems={data.pagination.totalItems}
                pageSize={data.pagination.pageSize}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </div>

      <SubmissionDetailPanel
        submission={selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
      />
    </>
  );
};

export default Submissions;
