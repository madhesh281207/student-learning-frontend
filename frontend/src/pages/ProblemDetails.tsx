import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import type { PracticeProblem } from "../types/practice";

import { practiceService } from "../services/practiceService";

import ProblemDetailHeader from "../components/practice/ProblemDetailHeader";
import ProblemStatement from "../components/practice/ProblemStatement";
import ProblemDetailSidebar from "../components/practice/ProblemDetailSidebar";
import ProblemHints from "../components/practice/ProblemHints";
import RelatedProblems from "../components/practice/RelatedProblems";

export default function ProblemDetails() {
  const { problemId } = useParams<{
    problemId: string;
  }>();

  const navigate = useNavigate();

  const [problem, setProblem] =
    useState<PracticeProblem | null>(null);

  const [relatedProblems, setRelatedProblems] =
    useState<PracticeProblem[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadProblem = useCallback(async () => {
    if (!problemId) {
      setError("No problem was specified.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result =
        await practiceService.getProblem(
          problemId,
        );

      if (!result) {
        setError("The requested problem could not be found.");
        return;
      }

      setProblem(result.problem);
      setRelatedProblems(
        result.relatedProblems,
      );
    } catch {
      setError(
        "Unable to load this practice problem.",
      );
    } finally {
      setLoading(false);
    }
  }, [problemId]);

  useEffect(() => {
    loadProblem();
  }, [loadProblem]);

  const toggleBookmark = async () => {
    if (!problem) {
      return;
    }

    const result =
      await practiceService.toggleBookmark(
        problem.id,
      );

    if (result) {
      setProblem({
        ...result,
      });
    }
  };

  const startPractice = async () => {
    if (!problem) {
      return;
    }

    const result =
      await practiceService.markStarted(
        problem.id,
      );

    if (result) {
      setProblem({
        ...result,
      });

      /*
       * The actual coding/submission experience
       * will be connected here later.
       *
       * We intentionally do NOT create a code editor
       * inside this module.
       */
      console.log(
        "Start practice:",
        result.id,
      );
    }
  };

  const openRelated = (
    relatedProblem: PracticeProblem,
  ) => {
    navigate(
      `/practice/${relatedProblem.id}`,
    );
  };

  if (loading) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-4">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-indigo-600" />

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Loading problem...
          </p>
        </div>
      </div>
    );
  }

  if (error || !problem) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-500/10">
            <AlertCircle className="h-6 w-6" />
          </div>

          <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Problem unavailable
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {error ||
              "We couldn't find the requested problem."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/practice")}
            className="mt-5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Back to Practice
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <ProblemDetailHeader
        problem={problem}
        onBookmark={toggleBookmark}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <main className="min-w-0 space-y-8">
          <ProblemStatement
            problem={problem}
          />

          <ProblemHints hints={problem.hints} />

          <RelatedProblems
            problems={relatedProblems}
            onOpen={openRelated}
          />

          {/* Submission history shortcut */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Submission history
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Review your previous attempts for this problem.
                </p>
              </div>

              <Link
                to="/submissions"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View all
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </main>

        <ProblemDetailSidebar
          problem={problem}
          onStart={startPractice}
        />
      </div>
    </div>
  );
}
