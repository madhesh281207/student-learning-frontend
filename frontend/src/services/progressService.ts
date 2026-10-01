import { progressData } from "../data/progressData";

import type {
  ProgressPeriod,
  ProgressResponse,
} from "../types/progress";

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const getProgress = async (
  period: ProgressPeriod = "30d",
): Promise<ProgressResponse> => {
  await delay(450);

  return {
    ...progressData,
    period,
  };
};
