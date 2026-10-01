import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  PracticeCategory,
  PracticeFilters,
  PracticeProblem,
} from "../types/practice";

import { practiceService } from "../services/practiceService";

import PracticeHeader from "../components/practice/PracticeHeader";
import DailyGoalCard from "../components/practice/DailyGoalCard";
import PracticeStats from "../components/practice/PracticeStats";
import ContinuePractice from "../components/practice/ContinuePractice";
import RecommendedProblems from "../components/practice/RecommendedProblems";
import CategoryProgress from "../components/practice/CategoryProgress";
import PracticeFiltersComponent from "../components/practice/PracticeFilters";
import ProblemCard from "../components/practice/ProblemCard";
import PracticePagination from "../components/practice/PracticePagination";
import PracticeSkeleton from "../components/practice/PracticeSkeleton";
import PracticeEmptyState from "../components/practice/PracticeEmptyState";
import PracticeError from "../components/practice/PracticeError";

const defaultFilters: PracticeFilters = {
  search: "",
  difficulty: "all",
  category: "all",
  status: "all",
  sort: "recommended",
  bookmarkedOnly: false,
};

export default function Practice() {
  const navigate = useNavigate();

  const [filters, setFilters] =
    useState<PracticeFilters>(
      defaultFilters,
    );

  const [page, setPage] = useState(1);

  const [data, setData] = useState<
    Awaited<
      ReturnType<typeof practiceService.getPractice>
    > | null
  >(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadPractice = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const result =
        await practiceService.getPractice(
          filters,
          page,
          9,
        );

      setData(result);
    } catch {
      setError(
        "Something went wrong while loading your practice problems.",
      );
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    loadPractice();
  }, [loadPractice]);

  const updateFilter = (
    field: keyof PracticeFilters,
    value: PracticeFilters[keyof PracticeFilters],
  ) => {
    setFilters((previous) => ({
      ...previous,
      [field]: value,
    }));

    setPage(1);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setPage(1);
  };

  const openProblem = (
    problem: PracticeProblem,
  ) => {
    navigate(`/practice/${problem.id}`);
  };

  const bookmarkProblem = async (
    problem: PracticeProblem,
  ) => {
    await practiceService.toggleBookmark(
      problem.id,
    );

    await loadPractice();
  };

  const selectCategory = (
    category: {
      category: PracticeCategory;
    },
  ) => {
    setFilters((previous) => ({
      ...previous,
      category: category.category,
    }));

    setPage(1);
  };

  if (loading && !data) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <PracticeSkeleton />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <PracticeError
          message={error}
          onRetry={loadPractice}
        />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <PracticeHeader
        totalProblems={data.stats.totalProblems}
        onHistory={() =>
          navigate("/practice/history")
        }
      />

      <DailyGoalCard
        stats={data.stats}
        onContinue={() => {
          const firstProblem =
            data.continueProblems.find(
              (problem) =>
                problem.status === "in-progress",
            ) ||
            data.recommendedProblems[0];

          if (firstProblem) {
            openProblem(firstProblem);
          }
        }}
      />

      <PracticeStats stats={data.stats} />

      <ContinuePractice
        problems={data.continueProblems}
        onOpen={openProblem}
      />

      <RecommendedProblems
        problems={data.recommendedProblems}
        onOpen={openProblem}
        onBookmark={bookmarkProblem}
        onViewAll={() =>
          document
            .getElementById("all-practice")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }
      />

      <CategoryProgress
        categories={data.categoryStats}
        onSelect={selectCategory}
      />

      <section id="all-practice">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            All practice problems
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {data.totalResults} problems available based on your filters.
          </p>
        </div>

        <PracticeFiltersComponent
          filters={filters}
          onChange={updateFilter}
          onReset={resetFilters}
        />

        <div className="mt-6">
          {data.problems.length === 0 ? (
            <PracticeEmptyState
              onReset={resetFilters}
            />
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {data.problems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    onOpen={openProblem}
                    onBookmark={bookmarkProblem}
                  />
                ))}
              </div>

              <PracticePagination
                currentPage={data.currentPage}
                totalPages={data.totalPages}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
